//modules
import type { FSWatcher } from 'chokidar';
import path from 'node:path';
import chokidar from 'chokidar';
//stackpress
import Component from '@stackpress/ink/dist/compiler/Component';
import DocumentBuilder from '@stackpress/ink/dist/document/Builder';
import EventEmitter from '@stackpress/ink/dist/EventEmitter';
//local
import type { IM, SR, ServerOptions, OptionIgnore } from './types';
import { dependantsOf, update, errorMessage } from './helpers';

const extensions = [ '.ink', '.ts', '.js', '.json', '.css' ];

/**
 * Socket server to be used in node
 */
export default class RefreshServer {
  //active build and props
  protected _registry = new Map<string, DocumentBuilder>();
  //the current working directory
  protected _cwd: string;
  //event emitter
  protected _emitter: EventEmitter;
  //extname
  protected _extname: string;
  //file extensions to listen to
  protected _extensions: string[];
  //patterns used to ignore files and folders
  //can be an array of string, string pattern, 
  //regexp, function
  protected _ignore: OptionIgnore;
  //tsconfig file
  protected _tsconfig: string|undefined;
  //the file watcher
  protected _watcher: FSWatcher|null = null;
  //clients
  protected _clients = new Set<SR>();

  /**
   * Returns the current working directory
   */
  public get cwd() {
    return this._cwd;
  }

  /**
   * Returns the watcher emitter
   */
  public get emitter() {
    return this._watcher;
  }

  /**
   * Imports all the options and sets up the event listeners
   */
  public constructor(options: ServerOptions) {
    this._cwd = options.cwd;
    this._emitter = options.emitter || new EventEmitter();
    this._extensions = options.include || extensions;
    this._extname = options.extname || '.ink';
    this._ignore = options.ignore || [];
    this._tsconfig = options.tsconfig;
  }

  /**
   * Registers rendered document builder
   */
  public sync(builder: DocumentBuilder) {
    this._registry.set(builder.document.absolute, builder);
  }

  /**
   * Closes the socket connection
   */
  public close() {
    if (this._watcher) {
      this._watcher.close();
      this._watcher = null;
    }
    this._clients.forEach(res => {
      res.end();
      //remove the client from the list
      this._clients.delete(res);
    });
    return this;
  }

  /**
   * Tell all the browsers to reload their page
   */
  public async refresh(filePath: string) {
    const extname = path.extname(filePath);
    if (!this._extensions.includes(extname)) {
      return this;
    }

    const updates: Record<string, string[]> = {};
    const params = { filePath, updates };
    //pre emit file change
    await this._emitter.waitFor('dev-file-change', params);

    //Lots of things to figure out for hot refresh...
    // - What file changed? (filePath)
    // - What document imports this component?
    // - What components import this file?
    const absolute = path.resolve(this._cwd, filePath);
    
    //loop through the registry of loaded documents
    for (const builder of this._registry.values()) {
      const document = builder.document;
      // - What document imports this component?
      //if the document is the same as the changed file
      if (document.absolute === absolute) {
        const params = { filePath, document, updates };
        //pre emit document update
        await this._emitter.waitFor('dev-update-document', params);
        //just reload
        updates[document.id] = [ 'window.location.reload();' ];
        //post emit document updated
        await this._emitter.waitFor('dev-updated-document', params);
        continue;
      }
      // - What components import this file?
      //get any dependencies that import this file
      let dependants: { component: Component, type: string }[] = [];
      try { //to get dependants
        dependants = dependantsOf(absolute, document);
      } catch(error) {
        //an error could be caused if the filepath of a dependant
        //does not exist, so we just add an error message to the 
        //updates this will be sent to the client browser to notify
        //the developer of the error
        updates[document.id] = [ errorMessage(error as Error) ];
      }
      
      //if there are no dependants, skip
      if (dependants.length === 0) {
        continue;
      }

      updates[document.id] = [];
      for (const dependant of dependants) {
        //if the filePath was imported as a component
        if (dependant.type === 'component') {
          //update the imported component
          const component = new Component(absolute, { 
            brand: document.brand,
            cwd: document.cwd,
            fs: document.fs
          });
          let script: string;
          try { //to generate a script to update the component
            script = await update(component, {
              extname: this._extname,
              tsconfig: this._tsconfig
            });
          } catch(error) {
            //notify the developer via client browser of the error
            script = errorMessage(error as Error);
          }
          //event params
          const params = { filePath, document, component, updates };
          //pre emit component update
          await this._emitter.waitFor('dev-update-component', params);
          //add a script to the updates
          updates[document.id].push(script);
          //post emit component updated
          await this._emitter.waitFor('dev-updated-component', params);
          continue;
        //if the parent component is a component
        } else if (dependant.component.type === 'component') {
          const { component } = dependant;
          let script: string;
          try { //to generate a script to update the component
            //the filePath was imported as a template 
            // or file, update the parent component
            script = await update(component, {
              extname: this._extname,
              tsconfig: this._tsconfig
            });
          } catch(error) {
            //notify the developer via client browser of the error
            script = errorMessage(error as Error);
          }

          //event params
          const params = { filePath, document, component, updates };
          //pre emit component update
          await this._emitter.waitFor('dev-update-component', params);
          //add a script to the updates
          updates[document.id].push(script);
          //post emit component updated
          await this._emitter.waitFor('dev-updated-component', params);
          continue;
        }
      }
      //if there are no updates for the document
      if (updates[document.id].length === 0) {
        //event params
        const params = { filePath, document, updates };
        //pre emit document update
        await this._emitter.waitFor('dev-update-document', params);
        //just reload
        updates[document.id].push('window.location.reload();');
        //post emit document updated
        await this._emitter.waitFor('dev-updated-document', params);
      }
    }

    //send out the updates to all the clients
    this._clients.forEach(res => {
      res.write("event: refresh\n");
      res.write(`data: ${JSON.stringify(updates)}\n\n`);
      //if this works, then the browser will reload
      //causing the req.close event to be triggered
      //and the client will be removed from the list
      //implemented in wait()

      //this is also a provision for a better 
      //implementation of browser refresh
    });

    //post emit file changed
    await this._emitter.waitFor('dev-file-changed', params);

    return this;
  }

  /**
   * Adds a new client to the list
   */
  public wait(req: IM, res: SR) {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',          
      'Content-Encoding': 'none',
      'Connection': 'keep-alive',
      'Access-Control-Allow-Origin': '*'
    });
    this._clients.add(res);
    //if connection aborted
    req.on('close', () => {
      res.end();
      //remove the client from the list
      this._clients.delete(res);
    });
    //pong the client
    res.write("data: pong\n\n");
    return this;
  }

  /**
   * Start watching files
   */
  public watch() {
    this._watcher = chokidar.watch(this._cwd, {
      ignoreInitial: true,
      ignored: this._ignore,
      cwd: this._cwd
    });

    this._watcher.on('add', this.refresh.bind(this));
    this._watcher.on('change', this.refresh.bind(this));
    this._watcher.on('unlink', this.refresh.bind(this));
    return this;
  }
}
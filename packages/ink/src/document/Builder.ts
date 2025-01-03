//modules
import path from 'node:path';
//stackpress
import type { FileSystem } from '@stackpress/types/dist/types';
//compiler
import Component from '../compiler/Component';
//common
import type { 
  BuilderOptions, 
  ServerDocumentClass, 
  BuildResults
} from '../types';
import EventEmitter from '../EventEmitter';
import { load, build } from '../helpers';
import {
  esInkPlugin,
  esAliasPlugin,
  esComponentPlugin,
  esWorkspacePlugin
} from '../plugins';
//local
import Exception from './Exception';
import Transpiler from './Transpiler';

export default class Builder {
  /**
   * Loads a source code string into the runtime
   */
  public static load(source: string, fs: FileSystem) {
    try {
      const context = load(source);
      //get the Document
      const Document = context.InkAPI.default as ServerDocumentClass;
      //instantiate document
      const document = new Document();
      return {
        source,
        InkDocument: Document,
        document: document
      };
    } catch (e) {
      const error = e as Error;
      const exception = new Exception(error.message, 500);
      exception.withFS(fs);
      exception.withSource(source);
      throw exception;
    }
  }

  //document component
  protected _document: Component;
  //emitter
  protected _emitter: EventEmitter;
  //file extensions
  protected _extname = '.ink';
  //whether to minify the code
  protected _minify: boolean;
  //transpiler
  protected _transpiler: Transpiler;
  //the file loader
  //the location of the tsconfig file
  protected _tsconfig: string;

  /**
   * Returns the document component
   */
  public get document() {
    return this._document;
  }

  /**
   * Returns the emitter
   */
  public get emitter() {
    return this._emitter;
  }

  /**
   * Returns the expected file extensions used
   */
  public get extname() {
    return this._extname;
  }

  /**
   * Returns the transpiler
   */
  public get transpiler() {
    return this._transpiler;
  }

  /**
   * Returns the tsconfig file path
   */
  public get tsconfig() {
    return this._tsconfig;
  }

  /**
   * Sets the document and options
   */
  public constructor(document: Component, options: BuilderOptions = {}) {
    const { 
      emitter = new EventEmitter(),
      minify = true, 
      extname = '.ink',
      tsconfig = path.resolve(__dirname, '../../tsconfig.json')
    } = options;

    this._emitter = emitter;
    this._minify = minify;
    this._extname = extname;

    //generated values
    this._tsconfig = tsconfig;
    this._document = document;

    this._transpiler = new Transpiler(
      this._document, 
      this._tsconfig
    );
  }

  /**
   * Builds the document
   */
  public async build() {
    //emit build event
    const pre = await this._emitter.waitFor<string>('build', { 
      builder: this
    });
    const source = pre.data || await this.server();
    //run server script and get the context
    const results: BuildResults = Builder.load(source, this._document.fs);
    //emit built event
    const post = await this._emitter.waitFor<BuildResults>('built', { 
      builder: this, 
      build: results 
    });
    return post.data || results;
  }

  /**
   * Returns the client js
   */
  public async client() {
    //emit build-client event
    const pre = await this._emitter.waitFor<string>('build-client', { 
      builder: this 
    });
    // Bundle with esbuild
    const sourceCode = pre.data || await build(
      this._document.absolute, 
      {
        bundle: true,
        minify: this._minify,
        platform: 'browser',
        globalName: 'InkAPI',
        plugins: [ 
          esInkPlugin({
            mode: 'client',
            entry: this._document.absolute,
            brand: this._document.brand,
            cwd: this._document.cwd,
            fs: this._document.fs,
            tsconfig: this._tsconfig,
            extname: this._extname
          })
        ]
      }
    );
    //emit built-client event
    const post = await this._emitter.waitFor<string>('built-client', { 
      ...pre.params, 
      sourceCode 
    });
    return post.data || sourceCode;
  }

  /**
   * Returns a single bundled component
   */
  public async component() {
    const { tagname, classname } = this._document;
    const code = await build(
      this._document.absolute,
      {
        bundle: true,
        minify: this._minify,
        globalName: classname,
        platform: 'browser',
        plugins: [ 
          esAliasPlugin({
            cwd: this._document.cwd,
            fs: this._document.fs
          }),
          esComponentPlugin({
            brand: this._document.brand,
            cwd: this._document.cwd,
            fs: this._document.fs,
            tsconfig: this._tsconfig,
            extname: this._extname
          }),
          esWorkspacePlugin()
        ]
      }
    );

    return `${code};customElements.define('${tagname}', ${classname})`;
  }

  /**
   * Returns the markup
   */
  public async markup(props: Record<string, any> = {}) {
    //emit build-markup event
    const pre = await this._emitter.waitFor<string>('build-markup', { 
      props,
      builder: this 
    });
    //build the styles
    const sourceCode = pre.data || (
      await this.build()
    ).document.render(props);
    //emit built-markup event
    const post = await this._emitter.waitFor<string>('built-markup', { 
      ...pre.params, 
      props,
      sourceCode 
    });
    return post.data || sourceCode;
  }

  /**
   * Sets the source code to compile
   */
  public async server() {
    //emit build-server event
    const pre = await this._emitter.waitFor<string>('build-server', { 
      builder: this 
    });
    // Bundle with esbuild
    const sourceCode = pre.data || await build(
      this._document.absolute, 
      {
        minify: this._minify,
        bundle: true,
        platform: 'node',
        globalName: 'InkAPI',
        plugins: [ 
          esInkPlugin({
            entry: this._document.absolute,
            mode: 'server',
            brand: this._document.brand,
            cwd: this._document.cwd,
            fs: this._document.fs,
            tsconfig: this._tsconfig,
            extname: this._extname
          })
        ]
      }
    );
    //emit build-server event
    const post = await this._emitter.waitFor<string>('built-server', { 
      ...pre.params, 
      sourceCode 
    });
    return post.data || sourceCode;
  }

  /**
   * Returns the styles
   */
  public async styles() {
    //emit build-markup event
    const pre = await this._emitter.waitFor<string>('build-styles', { 
      builder: this 
    });
    //build the styles
    const sourceCode = pre.data || (
      await this.build()
    ).document.styles();
    //emit built-styles event
    const post = await this._emitter.waitFor<string>('built-styles', { 
      ...pre.params, 
      sourceCode 
    });

    return post.data || sourceCode;
  }
};
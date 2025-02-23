//modules
import path from 'node:path';
//local
import type { 
  Hash, 
  InkCompiler,
  CacheOptions,
  ServerDocumentClass
} from './types';
import type { Event } from './EventEmitter';
import type Builder from './document/Builder';
import type Manifest from './document/Manifest';

export default function cache(options: CacheOptions) {
  return function withCache(compiler: InkCompiler) {
    const { fs, emitter } = compiler;

    const environment = options.environment;

    const paths = {
      server: options.serverPath,
      client: options.clientPath,
      manifest: options.manifestPath
    };

    //write file helper
    const writeFile = (file: string, contents: string) => {
      const dirname = path.dirname(file);
      if (!fs.existsSync(dirname)) {
        fs.mkdirSync(dirname, { recursive: true });
      }
      //if development, write files all the time.
      //if the file does not exist, write it
      if (environment === 'development' || !fs.existsSync(file)) {
        fs.writeFileSync(file, contents);
      }
    };

    emitter.on('manifest-resolved', (event: Event<string>) => {
      const manifest = event.params.manifest as Manifest
      //write the manifest to the file system
      writeFile(paths.manifest, manifest.toJson());
    });

    //on pre render, try to use cache if live
    emitter.on('render', (event: Event<string>) => {
      //if not live, dont retrieve from cache
      if (environment === 'development') {
        return;
      }
      //extract props and builder from params
      const props = (event.params.props || {}) as Hash;
      const builder = event.params.builder as Builder;
      //get fs and id ie. abc123c
      const { fs, id } = builder.document;
      //get cache file path ie. /path/to/docs/build/server/abc123c.js
      const cache = path.join(paths.server, `${id}.js`);
      //if cache file exists
      if (fs.existsSync(cache)) {
        //get the build object
        const build = require(cache);
        const Document = build.default as ServerDocumentClass;
        const document = new Document();
        //render the document
        const html = document.render(props);
        //return the cached content
        event.set(html);
      }
    });

    //on pre client build, try to use cache if live
    emitter.on('build-client', (event: Event<string>) => {
      //if not live, dont retrieve from cache
      if (environment === 'development') {
        return;
      }
      //extract builder from params
      const builder = event.params.builder as Builder;
      //get fs and id ie. abc123c
      const id = builder.document.id;
      //get cache file path ie. /path/to/docs/build/client/abc123c.js
      const cache = path.join(paths.client, `${id}.js`);
      //if cache file exists, send it
      if (fs.existsSync(cache)) {
        event.set(fs.readFileSync(cache, 'utf8'));
      }
    });

    //on post client build, cache (dev and live)
    emitter.on('built-client', (event: Event<string>) => {
      //extract builder and sourcecode from params
      const builder = event.params.builder as Builder;
      const sourceCode = event.params.sourceCode as string;
      //get fs and id ie. abc123c
      const id = builder.document.id;
      //get cache file path ie. /path/to/docs/build/client/abc123c.js
      const cache = path.join(paths.client, `${id}.js`);
      //write the client source code to cache
      writeFile(cache, sourceCode);
    });

    //on pre server build, try to use cache if live
    emitter.on('build-server', (event: Event<string>) => {
      //if not live, dont retrieve from cache
      if (environment === 'development') {
        return;
      }
      //extract builder from params
      const builder = event.params.builder as Builder;
      //get fs and id ie. abc123c
      const id = builder.document.id;
      //get cache file path ie. /path/to/docs/build/server/abc123c.js
      const cache = path.join(paths.server, `${id}.js`);
      //if cache file exists, send it
      if (fs.existsSync(cache)) {
        event.set(fs.readFileSync(cache, 'utf8'));
      }
    });

    //on post server build, cache (dev and live)
    emitter.on('built-server', (event: Event<string>) => {
      //extract build and builder from params
      const builder = event.params.builder as Builder;
      let sourceCode = event.params.sourceCode as string;
      if (sourceCode.indexOf('module.exports = InkAPI') === -1) {
        //add module exports to source code
        sourceCode += `;\n;module.exports = InkAPI;`;
      }
      //get fs and id ie. abc123c
      const { id } = builder.document;
      //get cache file path ie. /path/to/docs/build/server/abc123c.js
      const cache = path.join(paths.server, `${id}.js`);
      //write the server source code to cache
      writeFile(cache, sourceCode);
    });

    //on pre styles build, try to use cache if live
    emitter.on('build-styles', (event: Event<string>) => {
      //if not live, dont retrieve from cache
      if (environment === 'development') {
        return;
      }
      //extract builder from params
      const builder = event.params.builder as Builder;
      //get fs and id ie. abc123c
      const id = builder.document.id;
      //get cache file path ie. /path/to/docs/build/client/abc123c.css
      const cache = path.join(paths.client, `${id}.css`);
      //if cache file exists, send it
      if (fs.existsSync(cache)) {
        event.set(fs.readFileSync(cache, 'utf8'));
      }
    });

    //on post styles build, cache (dev and live)
    emitter.on('built-styles', (event: Event<string>) => {
      //extract builder and sourcecode from params
      const builder = event.params.builder as Builder;
      const sourceCode = event.params.sourceCode as string;
      //get fs and id ie. abc123c
      const id = builder.document.id;
      //get cache file path ie. /path/to/docs/build/client/abc123c.css
      const cache = path.join(paths.client, `${id}.css`);
      //write the client source code to cache
      writeFile(cache, sourceCode);
    });

    //if there's a manifest
    if (fs.existsSync(paths.manifest)) {
      //load the manifest file
      compiler.manifest.load(
        JSON.parse(fs.readFileSync(paths.manifest, 'utf-8'))
      );
    }

    return compiler;
  }
};
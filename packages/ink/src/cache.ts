//modules
import path from 'node:path';
//stackpress
import type { 
  Hash, 
  InkCompiler,
  ServerDocumentClass
} from './types';
import type { Event } from './EventEmitter';
import type Builder from './document/Builder';
import { serialize } from './helpers';
//local
import type { CacheOptions } from './types';

export default function cache(options: CacheOptions) {
  return function withCache(compiler: InkCompiler) {
    const { fs, emitter } = compiler;

    const paths = {
      server: options.serverPath,
      client: options.clientPath,
      manifest: options.manifestPath
    };

    //on pre render, try to use cache
    emitter.on('render', (event: Event<string>) => {
      //extract props and builder from params
      const props = (event.params.props || {}) as Hash;
      const builder = event.params.builder as Builder;
      //get id ie. abc123c
      const id = serialize(builder.document.source);
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

    //on pre client build, try to use cache
    emitter.on('build-client', (event: Event<string>) => {
      //extract builder from params
      const builder = event.params.builder as Builder;
      //get fs and id ie. abc123c
      const id = serialize(builder.document.source);
      //get cache file path ie. /path/to/docs/build/client/abc123c.js
      const cache = path.join(paths.client, `${id}.js`);
      //if cache file exists, send it
      if (fs.existsSync(cache)) {
        event.set(fs.readFileSync(cache, 'utf8'));
      }
    });

    //on pre server build, try to use cache
    emitter.on('build-server', (event: Event<string>) => {
      //extract builder from params
      const builder = event.params.builder as Builder;
      //get fs and id ie. abc123c
      const id = serialize(builder.document.source);
      //get cache file path ie. /path/to/docs/build/server/abc123c.js
      const cache = path.join(paths.server, `${id}.js`);
      //if cache file exists, send it
      if (fs.existsSync(cache)) {
        event.set(fs.readFileSync(cache, 'utf8'));
      }
    });

    //on pre styles build, try to use cache
    emitter.on('build-styles', (event: Event<string>) => {
      //extract builder from params
      const builder = event.params.builder as Builder;
      //get fs and id ie. abc123c
      const id = serialize(builder.document.source);
      //get cache file path ie. /path/to/docs/build/client/abc123c.css
      const cache = path.join(paths.client, `${id}.css`);
      //if cache file exists, send it
      if (fs.existsSync(cache)) {
        event.set(fs.readFileSync(cache, 'utf8'));
      }
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
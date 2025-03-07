//modules
import fs from 'node:fs';
//local
import type { DevelopOptions, IM, SR } from './types';
import HttpServer from './HttpServer';
import WhatwgServer from './WhatwgServer';

export type * from './types';

export { 
  createSourceFile, 
  dependantsOf, 
  transpile,
  update 
} from './helpers';

export { HttpServer, WhatwgServer };

export function dev(options: DevelopOptions = {}) {
  if (options.whatwg) {
    return whatwg(options);
  }
  return http(options);
};

export function http(options: DevelopOptions = {}) {
  const { 
    include, 
    ignore, 
    emitter,
    tsconfig,
    extname,
    cwd = process.cwd(), 
    route = '/__ink_dev__' 
  } = options;
  const refresh = new HttpServer({ 
    cwd, 
    emitter, 
    include, 
    ignore,
    tsconfig,
    extname
  });
  refresh.watch();
  return {
    refresh,
    router: function(req: IM, res: SR) {
      if (req.url) {
        const url = new URL(req.url, `http://${req.headers.host}`);
        if (url.pathname === '/dev.js') {
          res.writeHead(200, { 'Content-Type': 'text/javascript' });
          const script = fs.readFileSync(
            require.resolve('@stackpress/ink-dev/client.js')
          );
          const id = 'InkAPI.BUILD_ID';
          const start = `;ink_dev.default(${id}, {path: '${route}'});`;
          res.end(script + start); 
          return true;
        } else if (url.pathname === route) {
          refresh.wait(req, res);
          return true;
        }
      }
      return false;
    }
  };
};

export function whatwg(options: DevelopOptions = {}) {
  const { 
    include, 
    ignore, 
    emitter,
    tsconfig,
    extname,
    cwd = process.cwd(), 
    route = '/__ink_dev__' 
  } = options;
  const refresh = new WhatwgServer({ 
    cwd, 
    emitter, 
    include, 
    ignore,
    tsconfig,
    extname
  });
  refresh.watch();
  return {
    refresh,
    router: function(req: Request) {
      const url = new URL(req.url);
      if (url.pathname === '/dev.js') {
        const script = fs.readFileSync(
          require.resolve('@stackpress/ink-dev/client.js')
        );
        const id = 'InkAPI.BUILD_ID';
        const start = `;ink_dev.default(${id}, {path: '${route}'});`;
        return new Response(script + start, {
          headers: { 'Content-Type': 'text/javascript' }
        });
      } else if (url.pathname === route) {
        return refresh.wait();
      }
      return false;
    }
  };
};
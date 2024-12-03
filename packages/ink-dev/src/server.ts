//modules
import fs from 'node:fs';
//stackpress
import type { Request, Response } from '@stackpress/ink/compiler';
//local
import type { DevelopOptions } from './types';
import RefreshServer from './RefreshServer';

export type * from './types';

export { 
  createSourceFile, 
  dependantsOf, 
  transpile,
  update 
} from './helpers';

export { RefreshServer };

export function dev(options: DevelopOptions = {}) {
  const { 
    include, 
    ignore, 
    emitter,
    tsconfig,
    extname,
    cwd = process.cwd(), 
    route = '/__ink_dev__' 
  } = options;
  const refresh = new RefreshServer({ 
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
    router: function(req: Request, res: Response) {
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
//types
import type { PluginBuild } from 'esbuild';
import type { 
  InkPluginOptions,
  AliasPluginOptions,
  ComponentPluginOptions,
  DocumentPluginOptions
} from './types';

import path from 'path';
import FileSystem from '@stackpress/types/dist/filesystem/NodeFS';
import FileLoader from '@stackpress/types/dist/filesystem/FileLoader';

import Component from './compiler/Component';
import ComponentTranspiler from './compiler/Transpiler';
import DocumentTranspiler from './document/Transpiler';
import { toTS } from './helpers';

export function esAliasPlugin(options: AliasPluginOptions = {}) {
  const { 
    cwd = process.cwd(), 
    fs = new FileSystem() 
  } = options;
  const name = 'ink-alias-plugin';
  return {
    name: name,
    setup: (build: PluginBuild) => {
      build.onResolve({ filter: /^@\// }, args => {
        const absolute = path.resolve(cwd, args.path.replace('@/', ''));
        
        if (fs.existsSync(absolute) 
          && fs.lstatSync(absolute).isFile()
        ) {
          if (absolute.endsWith('.ink')) {
            return { 
              path: absolute, 
              namespace: 'ink-component-plugin' 
            };
          } else if (absolute.endsWith('.ts')) {
            return { path: absolute, loader: 'ts' };
          }
          return { path: absolute };
        }
        
        for (const extname of ['.ts', '.js', '.json']) {
          let file = absolute + extname;
          if (fs.existsSync(file) && fs.lstatSync(file).isFile()) {
            if (absolute.endsWith('.ts')) {
              return { path: file, loader: 'ts' };
            }
            return { path: file };
          }
          file = path.resolve(absolute, 'index' + extname);
          if (fs.existsSync(file) && fs.lstatSync(file).isFile()) {
            if (absolute.endsWith('.ts')) {
              return { path: file, loader: 'ts' };
            }
            return { path: file };
          }
        }
        
        return undefined;
      });
    }
  };
};

export function esComponentPlugin(options: ComponentPluginOptions = {}) {
  const { 
    tsconfig, 
    extname = '.ink',
    cwd = process.cwd(),
    fs = new FileSystem(),
    ...config
  } = options;
  const name = 'ink-component-plugin';
  const filter = new RegExp(`\\.${extname.substring(1)}$`);
  const loader = new FileLoader(fs, cwd);
  return {
    name: name,
    setup: (build: PluginBuild) => {
      build.onResolve({ filter }, args => {
        const pwd = path.dirname(args.importer) || cwd;
        const extnames = [ extname ];
        const resolved = loader.resolve(args.path, pwd, extnames);
        return resolved
          ? { path: resolved, namespace: name } 
          : undefined;
      });

      build.onLoad({ filter, namespace: name }, args => {
        const component = new Component(
          args.path, 
          { ...config, fs, cwd, type: 'component' }
        );
        const transpiler = new ComponentTranspiler(component, tsconfig);
        return {
          contents: toTS(transpiler.transpile()),
          resolveDir: path.dirname(args.path),
          loader: 'ts'
        };
      });
    }
  };
};

export function esDocumentPlugin(options: DocumentPluginOptions = {}) {
  const { 
    tsconfig, 
    extname = '.ink',
    cwd = process.cwd(),
    fs = new FileSystem(),
    ...config
  } = options;
  const name = {
    server: 'ink-document-server-plugin',
    client: 'ink-document-client-plugin'
  };
  const filter = new RegExp(`\\.${extname.substring(1)}$`);
  const loader = new FileLoader(fs, cwd);
  return {
    server: {
      name: name.server,
      setup: (build: PluginBuild) => {
        build.onResolve({ filter }, args => {
          const pwd = path.dirname(args.importer) || cwd;
          const extnames = [ extname ];
          const resolved = loader.resolve(args.path, pwd, extnames);
          return resolved
            ? { path: resolved, namespace: name.server } 
            : undefined;
        });
  
        build.onLoad({ filter, namespace: name.server }, args => {
          const document = new Component(
            args.path, 
            { ...config, fs, cwd, type: 'document' }
          );
          const transpiler = new DocumentTranspiler(document, tsconfig);
          return {
            contents: toTS(transpiler.transpile()),
            loader: 'ts'
          };
        });
      }
    },
    client: {
      name: name.client,
      setup: (build: PluginBuild) => {
        build.onResolve({ filter }, args => {
          const pwd = path.dirname(args.importer) || cwd;
          const extnames = [ extname ];
          const resolved = loader.resolve(args.path, pwd, extnames);
          return resolved
            ? { path: resolved, namespace: name.client } 
            : undefined;
        });
  
        build.onLoad({ filter, namespace: name.client }, args => {
          const document = new Component(
            args.path, 
            { ...config, fs, cwd, type: 'document' }
          );
          const transpiler = new DocumentTranspiler(document, tsconfig);
          return {
            contents: toTS(transpiler.client()),
            loader: 'ts'
          };
        });
      }
    }
  };
};

export function esWorkspacePlugin() {
  return {
    name: 'resolve-workspace-packages',
    setup(build: PluginBuild) {
      //Filter match examples
      // ex. a...   // ex. A...   // ex. 1...
      // ex. @a...  // ex. @A...  // ex. @1...
      build.onResolve({ filter: /^@{0,1}[a-zA-Z0-9]/ }, args => {
        //use the native require API to resolve the path
        const resolved = require.resolve(args.path, { 
          paths: [ path.resolve(args.resolveDir) ] 
        });
        //if the resolved is a file path
        if (resolved.startsWith('/')) {
          return { path: resolved };
        }
        return undefined;
      });
    }
  }
};

export function esInkPlugin(options: InkPluginOptions = {}) {
  const { 
    entry,
    bindings = '{}',
    tsconfig,
    cwd = process.cwd(), 
    fs = new FileSystem(),
    mode = 'server',
    extname = '.ink',
    ...config
  } = options;
  const loader = new FileLoader(fs, cwd);
  const extnames = [ '.js', '.json', '.ts', extname ];
  return {
    name: 'ink-plugin',
    setup: (build: PluginBuild) => {
      //should resolve everything...
      build.onResolve({ filter: /.*/ }, args => {
        const pwd = args.importer ? path.dirname(args.importer): cwd;
        const resolved = loader.resolve(args.path, pwd, extnames);

        if (resolved) {
          if (resolved.endsWith(extname)) {
            //if the resolved is the entry
            if (entry && resolved === entry) {
              //then it should be processed as a document
              return { 
                path: resolved, 
                namespace: mode === 'server' 
                  ? 'ink-document-server-resolver' 
                  : 'ink-document-client-resolver' 
              };
            } 
            //otherwise, should be processed as a component
            return { 
              path: resolved, 
              namespace: 'ink-component-resolver' 
            };
          }
          //it's just another file...
          return { path: resolved };
        }

        return undefined;
      });

      build.onLoad({ 
        filter: new RegExp(`\\.${extname.substring(1)}$`), 
        namespace: 'ink-document-server-resolver' 
      }, args => {
        const document = new Component(args.path, { 
          ...config, 
          fs, 
          cwd, 
          type: 'document' 
        });
        const transpiler = new DocumentTranspiler(document, tsconfig);
        return {
          contents: toTS(transpiler.transpile()),
          resolveDir: path.dirname(args.path),
          loader: 'ts'
        };
      });

      build.onLoad({ 
        filter: new RegExp(`\\.${extname.substring(1)}$`), 
        namespace: 'ink-document-client-resolver' 
      }, args => {
        const document = new Component(args.path, { 
          ...config, 
          fs, 
          cwd, 
          type: 'document' 
        });
        const transpiler = new DocumentTranspiler(document, tsconfig);
        return {
          contents: toTS(transpiler.client(bindings)),
          resolveDir: path.dirname(args.path),
          loader: 'ts'
        };
      });

      build.onLoad({ 
        filter: new RegExp(`\\.${extname.substring(1)}$`), 
        namespace: 'ink-component-resolver' 
      }, args => {
        const component = new Component(args.path, { 
          ...config, 
          fs, 
          cwd, 
          type: 'component' 
        });
        const transpiler = new ComponentTranspiler(component, tsconfig);
        return {
          contents: toTS(transpiler.transpile()),
          resolveDir: path.dirname(args.path),
          loader: 'ts'
        };
      });
    }
  };
}
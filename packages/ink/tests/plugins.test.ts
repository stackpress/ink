import { describe, it } from 'mocha';
import { expect } from 'chai';
import path from 'node:path';
import type { Stats } from 'fs';
import type { PluginBuild } from 'esbuild';
import NodeFS from '@stackpress/types/dist/system/NodeFS';
import { 
  esAliasPlugin, 
  esComponentPlugin, 
  esDocumentPlugin, 
  esWorkspacePlugin, 
  esInkPlugin 
} from '../src/plugins';

class MockStats implements Stats {
  isFile(): boolean { return true; }
  isDirectory(): boolean { return false; }
  isBlockDevice(): boolean { return false; }
  isCharacterDevice(): boolean { return false; }
  isSymbolicLink(): boolean { return false; }
  isFIFO(): boolean { return false; }
  isSocket(): boolean { return false; }
  dev: number = 0;
  ino: number = 0;
  mode: number = 0;
  nlink: number = 1;
  uid: number = 0;
  gid: number = 0;
  rdev: number = 0;
  size: number = 0;
  blksize: number = 0;
  blocks: number = 0;
  atimeMs: number = 0;
  mtimeMs: number = 0;
  ctimeMs: number = 0;
  birthtimeMs: number = 0;
  atime: Date = new Date();
  mtime: Date = new Date();
  ctime: Date = new Date();
  birthtime: Date = new Date();
}

class MockFS extends NodeFS {
  private files: Map<string, { content: string; isFile: boolean }> = new Map();

  constructor(cwd: string = '/test') {
    super();
    // Add some mock files with absolute paths
    this.files.set(path.resolve(cwd, 'component.ink'), { content: '', isFile: true });
    this.files.set(path.resolve(cwd, 'script.ts'), { content: '', isFile: true });
    this.files.set(path.resolve(cwd, 'index.ts'), { content: '', isFile: true });
  }

  existsSync(filepath: string): boolean {
    return this.files.has(path.resolve(filepath));
  }

  lstatSync(filepath: string): Stats {
    const file = this.files.get(path.resolve(filepath));
    const stats = new MockStats();
    Object.defineProperty(stats, 'isFile', {
      value: () => file?.isFile ?? false
    });
    return stats;
  }
}

describe('plugins', () => {
  describe('esAliasPlugin', () => {
    it('should resolve @/ paths correctly', () => {
      const cwd = process.platform === 'win32' ? 'c:\\test' : '/test';
      const fs = new MockFS(cwd);
      const plugin = esAliasPlugin({ cwd, fs });
      
      let resolveResult: any;
      const build: Partial<PluginBuild> = {
        onResolve: ({ filter }: any, callback: any) => {
          expect(filter.toString()).to.equal('/^@\\//');
          resolveResult = callback({ 
            path: '@/component.ink',
            resolveDir: cwd
          });
        }
      };

      plugin.setup(build as PluginBuild);
      const expectedPath = process.platform === 'win32' 
        ? 'c:\\test\\component.ink'
        : '/test/component.ink';
      expect(resolveResult).to.deep.equal({
        path: expectedPath,
        namespace: 'ink-component-plugin'
      });
    });

    it('should handle different file extensions', () => {
      const cwd = process.platform === 'win32' ? 'c:\\test' : '/test';
      const fs = new MockFS(cwd);
      const plugin = esAliasPlugin({ cwd, fs });
      
      let resolveResult: any;
      const build: Partial<PluginBuild> = {
        onResolve: ({ filter }: any, callback: any) => {
          expect(filter.toString()).to.equal('/^@\\//');
          resolveResult = callback({ 
            path: '@/script.ts',
            resolveDir: cwd
          });
        }
      };

      plugin.setup(build as PluginBuild);
      const expectedPath = process.platform === 'win32'
        ? 'c:\\test\\script.ts'
        : '/test/script.ts';
      expect(resolveResult).to.deep.equal({
        path: expectedPath,
        loader: 'ts'
      });
    });
  });

  describe('esComponentPlugin', () => {
    it('should initialize with default options', () => {
      const plugin = esComponentPlugin();
      expect(plugin.name).to.equal('ink-component-plugin');
    });
  });

  describe('esDocumentPlugin', () => {
    it('should initialize with default options', () => {
      const plugin = esDocumentPlugin();
      expect(plugin.server.name).to.equal('ink-document-server-plugin');
      expect(plugin.client.name).to.equal('ink-document-client-plugin');
    });
  });

  describe('esWorkspacePlugin', () => {
    it('should initialize correctly', () => {
      const plugin = esWorkspacePlugin();
      expect(plugin.name).to.equal('resolve-workspace-packages');
    });
  });

  describe('esInkPlugin', () => {
    it('should combine all plugins', () => {
      const plugin = esInkPlugin();
      expect(plugin).to.have.property('name', 'ink-plugin');
      expect(plugin).to.have.property('setup').that.is.a('function');
    });
  });
});

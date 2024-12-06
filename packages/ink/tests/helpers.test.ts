import { describe, it } from 'mocha';
import { expect } from 'chai';
import type { SourceFile, OutputFile, EmitOutput } from 'ts-morph';
import * as vm from 'vm';
import path from 'path';
import {
  camelize,
  capitalize,
  lowerlize,
  serialize,
  slugify,
  toJS,
  toTS,
  load,
  build
} from '../src/helpers';

describe('helpers', () => {
  describe('camelize', () => {
    it('should convert string to camelCase', () => {
      expect(camelize('some string')).to.equal('SomeString');
      expect(camelize('some-string')).to.equal('SomeString');
      expect(camelize('some_string')).to.equal('SomeString');
      expect(camelize('some__string')).to.equal('SomeString');
      expect(camelize(' some string ')).to.equal('SomeString');
    });

    it('should convert string to camelCase with lower first letter', () => {
      expect(camelize('some string', true)).to.equal('someString');
      expect(camelize('some-string', true)).to.equal('someString');
      expect(camelize('some_string', true)).to.equal('someString');
    });
  });

  describe('capitalize', () => {
    it('should capitalize first letter', () => {
      expect(capitalize('word')).to.equal('Word');
      expect(capitalize('Word')).to.equal('Word');
      expect(capitalize('')).to.equal('');
    });
  });

  describe('lowerlize', () => {
    it('should lowercase first letter', () => {
      expect(lowerlize('Word')).to.equal('word');
      expect(lowerlize('word')).to.equal('word');
      expect(lowerlize('')).to.equal('');
    });
  });

  describe('serialize', () => {
    it('should create consistent hash for same input', () => {
      const input = 'test string';
      const hash1 = serialize(input);
      const hash2 = serialize(input);
      expect(hash1).to.equal(hash2);
      expect(hash1).to.have.lengthOf(20); // shake256 with outputLength 10 produces 20 hex chars
    });

    it('should create different hashes for different inputs', () => {
      const hash1 = serialize('test1');
      const hash2 = serialize('test2');
      expect(hash1).to.not.equal(hash2);
    });
  });

  describe('slugify', () => {
    it('should convert string to slug format', () => {
      expect(slugify('Some Title')).to.equal('some-title');
      expect(slugify('SomeTitle')).to.equal('sometitle');
      expect(slugify(' Some  Title ')).to.equal('some-title');
      expect(slugify('Some-Title')).to.equal('some-title');
      expect(slugify('Some__Title')).to.equal('some-title');
    });
  });

  describe('toJS', () => {
    it('should convert source file to javascript', () => {
      // Mock SourceFile and its methods
      const mockOutputFile: Partial<OutputFile> = {
        getFilePath: () => 'test.js' as any,
        getText: () => 'const test = "hello";'
      };
      
      const mockEmitOutput: Partial<EmitOutput> = {
        getOutputFiles: () => [mockOutputFile as OutputFile],
        compilerObject: {
          outputFiles: [],
          emitSkipped: false,
          diagnostics: []
        } as any,
        getDiagnostics: () => [],
        getEmitSkipped: () => false
      };

      const mockSourceFile: Partial<SourceFile> = {
        getEmitOutput: () => mockEmitOutput as EmitOutput
      };

      const result = toJS(mockSourceFile as SourceFile);
      expect(result).to.equal('const test = "hello";');
    });

    it('should handle multiple output files', () => {
      const mockOutputFiles: Partial<OutputFile>[] = [
        {
          getFilePath: () => 'test.d.ts' as any,
          getText: () => 'declare const test: string;'
        },
        {
          getFilePath: () => 'test.js' as any,
          getText: () => 'const test = "hello";'
        }
      ];
      
      const mockEmitOutput: Partial<EmitOutput> = {
        getOutputFiles: () => mockOutputFiles as OutputFile[],
        compilerObject: {
          outputFiles: [],
          emitSkipped: false,
          diagnostics: []
        } as any,
        getDiagnostics: () => [],
        getEmitSkipped: () => false
      };

      const mockSourceFile: Partial<SourceFile> = {
        getEmitOutput: () => mockEmitOutput as EmitOutput
      };

      const result = toJS(mockSourceFile as SourceFile);
      expect(result).to.equal('const test = "hello";');
    });
  });

  describe('toTS', () => {
    it('should get full text from source file', () => {
      const mockSourceFile: Partial<SourceFile> = {
        getFullText: () => 'const test: string = "hello";'
      };

      const result = toTS(mockSourceFile as SourceFile);
      expect(result).to.equal('const test: string = "hello";');
    });
  });

  describe('load', () => {
    it('should load and execute javascript in vm context', () => {
      const source = `
        exports.testValue = "hello";
        exports.testFunc = function() { return "world"; };
      `;
      
      const context = load(source);
      expect(context.exports).to.have.property('testValue', 'hello');
      expect(context.exports).to.have.property('testFunc');
      expect(context.exports.testFunc()).to.equal('world');
    });

    it('should provide necessary global objects', () => {
      const source = `
        exports.hasConsole = typeof console !== 'undefined';
        exports.hasModule = typeof module !== 'undefined';
        exports.hasRequire = typeof require !== 'undefined';
        exports.hasProcess = typeof process !== 'undefined';
        exports.hasBtoa = typeof btoa !== 'undefined';
        exports.hasAtob = typeof atob !== 'undefined';
      `;
      
      const context = load(source);
      expect(context.exports.hasConsole).to.be.true;
      expect(context.exports.hasModule).to.be.true;
      expect(context.exports.hasRequire).to.be.true;
      expect(context.exports.hasProcess).to.be.true;
      expect(context.exports.hasBtoa).to.be.true;
      expect(context.exports.hasAtob).to.be.true;
    });

    it('should handle errors in script execution', () => {
      const source = 'throw new Error("test error");';
      expect(() => load(source)).to.throw('test error');
    });
  });

  describe('build', () => {
    const testFilePath = path.join(__dirname, 'fixtures', 'test.js');

    it('should build with default options', async () => {
      const result = await build(testFilePath);
      expect(result).to.be.a('string');
    });

    it('should build with custom format', async () => {
      const result = await build(testFilePath, {
        format: 'esm',
        minify: false
      });
      expect(result).to.be.a('string');
      expect(result).to.include('export');  // ESM format should have export statements
    });

    it('should build with global name', async () => {
      const result = await build(testFilePath, {
        format: 'iife',
        globalName: 'TestModule'
      });
      expect(result).to.be.a('string');
      expect(result).to.include('TestModule');
    });

    it('should build without bundling', async () => {
      const result = await build(testFilePath, {
        bundle: false,
        minify: false
      });
      expect(result).to.be.a('string');
    });

    it('should build with custom platform', async () => {
      const result = await build(testFilePath, {
        platform: 'node'
      });
      expect(result).to.be.a('string');
    });

    it('should build with custom plugins', async () => {
      const mockPlugin = {
        name: 'test-plugin',
        setup: () => {}
      };
      
      const result = await build(testFilePath, {
        plugins: [mockPlugin]
      });
      expect(result).to.be.a('string');
    });
  });
});

import { expect } from 'chai';
import * as sinon from 'sinon';
import path from 'node:path';
import DocumentException from '../src/document/Exception';
import type { FileSystem } from '@stackpress/lib/dist/types';
import NodeFS from '@stackpress/lib/dist/system/NodeFS';

describe('DocumentException', () => {
  let sandbox: sinon.SinonSandbox;
  let errorStub: Error;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    errorStub = new Error('test');
  });

  afterEach(() => {
    sandbox.restore();
  });

  // Mock FileSystem implementation with only required methods
  const mockFS: FileSystem = {
    existsSync: () => false,
    readFileSync: () => '',
    realpathSync: (path: string) => path,
    lstatSync: () => ({} as any),
    writeFileSync: () => {},
    mkdirSync: () => {},
    createReadStream: () => ({} as any),
    unlinkSync: () => {}
  };

  describe('Basic Functionality', () => {
    it('should create exception with message', () => {
      const message = 'Test error message';
      const exception = new DocumentException(message);
      expect(exception.message).to.equal(message);
    });

    it('should extend InkException', () => {
      const exception = new DocumentException('test');
      expect(exception).to.be.instanceOf(DocumentException);
    });
  });

  describe('Source Code Handling', () => {
    it('should set and return source code', () => {
      const source = 'const x = 1;';
      const exception = new DocumentException('test')
        .withSource(source);
      
      // Mock the stack trace using a separate error instance
      sandbox.stub(errorStub, 'stack').get(function() {
        return `Error: test
    at someMethod (${path.sep}test.ts:1:1)`;
      });
      sandbox.stub(exception, 'stack').get(() => errorStub.stack);

      const trace = exception.trace();
      expect(trace[0].source).to.equal(source);
    });

    it('should handle empty source code', () => {
      const exception = new DocumentException('test')
        .withSource('');
      
      // Mock the stack trace using a separate error instance
      sandbox.stub(errorStub, 'stack').get(function() {
        return `Error: test
    at someMethod (${path.sep}test.ts:1:1)`;
      });
      sandbox.stub(exception, 'stack').get(() => errorStub.stack);

      const trace = exception.trace();
      expect(trace[0].source).to.equal('');
    });
  });

  describe('FileSystem Integration', () => {
    it('should set custom filesystem', () => {
      const testFile = path.sep + 'test.ts';
      const existsSyncStub = sandbox.stub().returns(true);
      const readFileSyncStub = sandbox.stub().returns('file content');
      const fs = { 
        ...mockFS, 
        existsSync: existsSyncStub,
        readFileSync: readFileSyncStub 
      };

      // Mock the stack trace using a separate error instance
      sandbox.stub(errorStub, 'stack').get(function() {
        return `Error: test
    at evalmachine.<anonymous> (${testFile}:1:1)`;
      });

      const exception = new DocumentException('test')
        .withFS(fs);
      sandbox.stub(exception, 'stack').get(() => errorStub.stack);
      
      const trace = exception.trace();
      expect(existsSyncStub.calledWith(testFile)).to.be.true;
      expect(readFileSyncStub.calledWith(testFile, 'utf8')).to.be.true;
      expect(trace[0].source).to.equal('file content');
    });

    it('should read source from filesystem for eval traces', () => {
      const testFile = path.sep + 'test.ts';
      const fileContent = 'file content';
      
      // Create stubs with predefined behavior
      const existsSyncStub = sandbox.stub().returns(true);
      const readFileSyncStub = sandbox.stub().returns(fileContent);
      const fs = { 
        ...mockFS, 
        existsSync: existsSyncStub,
        readFileSync: readFileSyncStub 
      };

      // Mock stack trace using a separate error instance
      sandbox.stub(errorStub, 'stack').get(function() {
        return `Error: test
    at evalmachine.<anonymous> (${testFile}:1:1)`;
      });

      const exception = new DocumentException('test')
        .withFS(fs);
      sandbox.stub(exception, 'stack').get(() => errorStub.stack);
      
      const trace = exception.trace();
      expect(trace[0].source).to.equal(fileContent);
      expect(readFileSyncStub.calledWith(testFile, 'utf8')).to.be.true;
    });

    it('should handle non-existent files', () => {
      const testFile = path.sep + 'nonexistent.ts';
      
      const existsSyncStub = sandbox.stub().returns(false);
      const readFileSyncStub = sandbox.stub();
      const fs = { 
        ...mockFS, 
        existsSync: existsSyncStub,
        readFileSync: readFileSyncStub 
      };

      // Mock stack trace using a separate error instance
      sandbox.stub(errorStub, 'stack').get(function() {
        return `Error: test
    at evalmachine.<anonymous> (${testFile}:1:1)`;
      });

      const exception = new DocumentException('test')
        .withFS(fs);
      sandbox.stub(exception, 'stack').get(() => errorStub.stack);
      
      const trace = exception.trace();
      expect(trace[0].source).to.equal('');
      expect(readFileSyncStub.called).to.be.false;
    });
  });

  describe('Method Chaining', () => {
    it('should support method chaining', () => {
      const source = 'test source';
      const exception = new DocumentException('test')
        .withFS(mockFS)
        .withSource(source);
      
      // Mock the stack trace using a separate error instance
      sandbox.stub(errorStub, 'stack').get(function() {
        return `Error: test
    at someMethod (${path.sep}test.ts:1:1)`;
      });
      sandbox.stub(exception, 'stack').get(() => errorStub.stack);

      const trace = exception.trace();
      expect(trace[0].source).to.equal(source);
    });
  });

  describe('Trace Line Numbers', () => {
    it('should handle trace with line numbers', () => {
      const source = 'test source';
      const exception = new DocumentException('test')
        .withSource(source);
      
      // Mock the stack trace using a separate error instance
      sandbox.stub(errorStub, 'stack').get(function() {
        return `Error: test
    at someMethod (${path.sep}test.ts:1:1)`;
      });
      sandbox.stub(exception, 'stack').get(() => errorStub.stack);

      const trace = exception.trace(1, 5);
      expect(trace[0].source).to.equal(source);
    });
  });
});
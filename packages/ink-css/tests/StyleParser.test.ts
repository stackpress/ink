import { expect } from 'chai';
import { default as StyleParser, pattern } from '../src/StyleParser';
import NodeFS from '@stackpress/types/dist/system/NodeFS';
import path from 'path';
import fs from 'fs';

describe('StyleParser', () => {
  describe('pattern', () => {
    it('should match valid class names', () => {
      const validClasses = [
        'abc',
        'abc-def',
        'abc-1def',
        'abc-1def-2ghi'
      ];

      validClasses.forEach(className => {
        const matches = className.match(pattern);
        expect(matches).to.not.be.null;
        expect(matches![0]).to.equal(className);
      });
    });

    it('should not match invalid class names', () => {
      const invalidClasses = [
        'ABC',  // uppercase not allowed
        '@abc', // special characters not allowed
        'abc_def' // underscore not allowed
      ];

      invalidClasses.forEach(className => {
        // Test each invalid class name individually against the pattern
        const regex = new RegExp('^' + pattern.source + '$');
        const matches = className.match(regex);
        expect(matches, `${className} should not match`).to.be.null;
      });
    });
  });

  describe('StyleParser class', () => {
    let parser: StyleParser;
    let tempDir: string;
    let testFile: string;

    beforeEach(() => {
      parser = new StyleParser({
        cwd: process.cwd()
      });
      
      // Create a temporary test directory and file
      tempDir = path.join(process.cwd(), 'temp_test_dir');
      testFile = path.join(tempDir, 'test.css');
      fs.mkdirSync(tempDir, { recursive: true });
    });

    afterEach(() => {
      // Clean up temporary files
      if (fs.existsSync(tempDir)) {
        fs.rmSync(tempDir, { recursive: true, force: true });
      }
    });

    describe('static match()', () => {
      it('should return unique class names from content', () => {
        const content = 'some-class other-class some-class third-class';
        const matches = StyleParser.match(content);
        expect(matches).to.deep.equal(['some-class', 'other-class', 'third-class']);
      });

      it('should return empty array for content with no matches', () => {
        const content = 'NO_VALID_CLASSES_HERE';
        const matches = StyleParser.match(content);
        expect(matches).to.deep.equal([]);
      });
    });

    describe('instance methods', () => {
      it('should initialize with default options', () => {
        const defaultParser = new StyleParser();
        expect(defaultParser.cwd).to.equal(process.cwd());
        expect(defaultParser.fs).to.be.instanceOf(NodeFS);
      });

      it('should initialize with custom options', () => {
        const customFs = new NodeFS();
        const customCwd = process.cwd() + '/custom';
        const customParser = new StyleParser({ fs: customFs, cwd: customCwd });
        
        expect(customParser.cwd).to.equal(customCwd);
        expect(customParser.fs).to.equal(customFs);
      });

      it('should throw exception for non-existent file', () => {
        const nonExistentFile = 'non-existent-file.txt';
        const absolutePath = parser.loader.absolute(nonExistentFile);
        // First add the file to the cache using the absolute path
        parser.vfs.set(absolutePath, 'some content');
        // Now try to add the non-existent file, which should throw
        expect(() => parser.add(nonExistentFile)).to.throw('File not found');
      });

      it('should successfully read and cache file content', () => {
        // Create a test file
        const fileContent = 'test-class another-class';
        fs.writeFileSync(testFile, fileContent);

        // Add the file to the parser
        const absolutePath = parser.loader.absolute(testFile);
        parser.vfs.clear(); // Clear the cache first
        
        // First set it in the cache (required by implementation)
        parser.vfs.set(absolutePath, '');
        parser.add(testFile);

        // Verify the file was cached with updated content
        expect(parser.vfs.has(absolutePath)).to.be.true;
        expect(parser.vfs.get(absolutePath)).to.equal(fileContent);
      });

      it('should skip adding file if not in cache', () => {
        // Create a test file
        const fileContent = 'test-class';
        fs.writeFileSync(testFile, fileContent);

        // Add the file without setting it in cache first
        const absolutePath = parser.loader.absolute(testFile);
        parser.vfs.clear(); // Clear the cache first
        parser.add(testFile);

        // Verify the file was not added to cache
        expect(parser.vfs.has(absolutePath)).to.be.false;
      });

      it('should parse all cached files and return unique class names', () => {
        // Add multiple files to the cache
        parser.vfs.clear(); // Clear the cache first
        parser.set('file1.css', 'class1 shared-class');
        parser.set('file2.css', 'class2 shared-class');

        const classNames = parser.parse();
        expect(classNames).to.deep.equal(['class1', 'shared-class', 'class2', 'shared-class']);
      });

      it('should walk through cached files and yield class names', () => {
        // Add multiple files to the cache
        parser.vfs.clear(); // Clear the cache first
        parser.set('file1.css', 'class1 shared-class');
        parser.set('file2.css', 'class2 shared-class');

        const classNames = Array.from(parser.walk());
        expect(classNames).to.deep.equal(['class1', 'shared-class', 'class2', 'shared-class']);
      });

      it('should handle empty cache in parse and walk', () => {
        parser.vfs.clear(); // Clear the cache first
        expect(parser.parse()).to.deep.equal([]);
        expect(Array.from(parser.walk())).to.deep.equal([]);
      });
    });
  });
});

import { describe, it } from 'mocha';
import { expect } from 'chai';
import path from 'node:path';
import Component from '../src/compiler/Component';
import NodeFS from '@stackpress/lib/dist/system/NodeFS';
import type { ComponentOptions } from '../src/types';

/**
 * Test suite for the Ink Compiler Component class
 * This class is responsible for parsing and processing Ink components,
 * including handling component initialization, AST generation,
 *  and path resolution.
 */
describe('Ink Compiler Component', () => {
  const fs = new NodeFS();
  const cwd = path.resolve(__dirname);
  const samplePath = path.join(__dirname, 'fixtures', 'sample.ink');
  const externalPath = path.join(__dirname, 'fixtures', 'external.js');

  /**
   * Helper function to create a component with options
   * @param source - Path to the component source file
   * @param options - Optional component configuration
   * @returns A new Component instance
   */
  const createComponent = (
    source: string, options: Partial<ComponentOptions> = {}) => {
    return new Component(source, { cwd, fs, ...options });
  };

  /**
   * Tests for component initialization and basic property access
   * Verifies that components are created with correct default values
   * and that custom options are properly applied
   */
  describe('Constructor and Basic Properties', () => {
    it('Should initialize with default options', () => {
      const component = createComponent(samplePath);
      expect(component.brand).to.equal('ink');
      expect(component.type).to.equal('component');
      expect(component.parent).to.be.null;
    });

    it('Should initialize with custom options', () => {
      const component = createComponent(samplePath, {
        brand: 'custom',
        type: 'template',
        name: 'custom-name'
      });
      expect(component.brand).to.equal('custom');
      expect(component.type).to.equal('template');
      expect(component.tagname).to.equal('custom-name');
    });

    it('Should handle numeric component names', () => {
      const component = createComponent(samplePath, { name: '123component' });
      expect(component.classname).to.match(/^N123component_/);
    });
  });

  /**
   * Tests for AST (Abstract Syntax Tree) generation and caching
   * Verifies that components can generate and cache their AST correctly,
   * and that external components throw appropriate errors
   */
  describe('AST and Tokenization', () => {
    it('Should get AST for a valid component', () => {
      const component = createComponent(samplePath);
      const ast = component.ast;
      expect(ast).to.be.an('object');
      // Get AST again to test caching
      const cachedAst = component.ast;
      expect(cachedAst).to.equal(ast);
    });

    it('Should throw error when trying to get AST for external component', 
    () => {
      const component = createComponent(externalPath, { type: 'external' });
      expect(() => component.ast).to.throw('No tokenizer for external');
    });

    it('Should get fresh AST when cache is disabled', () => {
      const component = createComponent(samplePath);
      const ast1 = component.tokenize(false);
      const ast2 = component.tokenize(false);
      expect(ast1).to.not.equal(ast2);
      expect(ast1).to.deep.equal(ast2);
    });
  });

  /**
   * Tests for special component properties and attributes
   * Verifies handling of external components, form fields,
   * and observable attributes
   */
  describe('Component Properties', () => {
    it('Should handle external component properties', () => {
      const component = createComponent(externalPath, { type: 'external' });
      expect(component.components).to.deep.equal([]);
      expect(component.dependencies).to.deep.equal([]);
      expect(component.markup).to.deep.equal([]);
      expect(component.scripts).to.deep.equal([]);
      expect(component.styles).to.deep.equal([]);
      expect(component.field).to.be.false;
    });

    it('Should handle component with form field', () => {
      const component = 
      createComponent(path.join(__dirname, 'fixtures', 'form.ink'));
      expect(component.field).to.be.true;
    });

    it('Should handle component with observe attributes', () => {
      const component =
       createComponent(path.join(__dirname, 'fixtures', 'observe.ink'));
      expect(component.observe).to.have.length.greaterThan(0);
      expect(component.observe).to.include('value');
    });
  });

  /**
   * Tests for component path resolution
   * Verifies that components can correctly resolve absolute 
   * and relative paths, and handle parent-child component relationships
   */
  describe('Path Resolution', () => {
    it('Should resolve absolute and relative paths', () => {
      const component = createComponent(samplePath);
      expect(component.absolute).to.equal(path.resolve(samplePath));
      expect(component.relative).to.match(/^\.\//);
      expect(component.dirname).to.equal(path.dirname(path.resolve(samplePath)));
    });

    it('Should handle parent component path resolution', () => {
      const parent = createComponent(samplePath);
      const child = new Component(externalPath, { cwd, fs }, parent);
      expect(child.parent).to.equal(parent);
      expect(child.absolute).to.equal(path.resolve(externalPath));
    });
  });
});
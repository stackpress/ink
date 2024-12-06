import { expect } from 'chai';
import IteratorDirective from '../src/directives/IteratorDirective';
import type { MarkupToken, NextDirective, MarkupChildToken } from '../src/types';
import Component from '../src/compiler/Component';
import Transpiler from '../src/compiler/Transpiler';
import NodeFS from '@stackpress/types/dist/system/NodeFS';

describe('IteratorDirective', () => {
  let transpiler: Transpiler;
  let component: Component;

  beforeEach(() => {
    component = new Component('test.ink', {
      fs: new NodeFS(),
      cwd: process.cwd()
    });
    transpiler = new Transpiler(component);
  });

  // Helper function to create a mock next directive function
  const mockNext: NextDirective = (parent: MarkupToken|null, token: MarkupChildToken[], components: Component[]) => {
    return 'mockContent';
  };

  // Helper function to create a base markup token with attributes
  const createMarkupToken = (attributes: any): MarkupToken => ({
    type: 'MarkupExpression',
    name: 'each',
    kind: 'block',
    start: 0,
    end: 0,
    attributes: {
      type: 'ObjectExpression',
      start: 0,
      end: 0,
      properties: attributes,
    },
    children: [],
  });

  it('should handle array iteration with key and value', () => {
    const directive = new IteratorDirective(transpiler);
    const token = createMarkupToken([
      {
        key: { type: 'Identifier', name: 'value' },
        value: { type: 'Identifier', name: 'item' }
      },
      {
        key: { type: 'Identifier', name: 'key' },
        value: { type: 'Identifier', name: 'index' }
      },
      {
        key: { type: 'Identifier', name: 'from' },
        value: { 
          type: 'ArrayExpression',
          start: 0,
          end: 0,
          elements: [
            { type: 'Literal', value: 'a', start: 0, end: 0, raw: "'a'", escape: false },
            { type: 'Literal', value: 'b', start: 0, end: 0, raw: "'b'", escape: false },
            { type: 'Literal', value: 'c', start: 0, end: 0, raw: "'c'", escape: false }
          ]
        }
      }
    ]);

    const result = directive.markup(null, token, [component], mockNext);
    expect(result).to.include('Object.entries');
    expect(result).to.include('[index, item]');
  });

  it('should handle object iteration', () => {
    const directive = new IteratorDirective(transpiler);
    const token = createMarkupToken([
      {
        key: { type: 'Identifier', name: 'value' },
        value: { type: 'Identifier', name: 'val' }
      },
      {
        key: { type: 'Identifier', name: 'key' },
        value: { type: 'Identifier', name: 'k' }
      },
      {
        key: { type: 'Identifier', name: 'from' },
        value: { 
          type: 'ObjectExpression',
          start: 0,
          end: 0,
          properties: [
            { 
              type: 'Property',
              kind: 'init',
              start: 0,
              end: 0,
              key: { type: 'Identifier', name: 'a', start: 0, end: 0 },
              value: { type: 'Literal', value: 1, start: 0, end: 0, raw: "1", escape: false },
              spread: false,
              method: false,
              shorthand: false,
              computed: false
            },
            { 
              type: 'Property',
              kind: 'init',
              start: 0,
              end: 0,
              key: { type: 'Identifier', name: 'b', start: 0, end: 0 },
              value: { type: 'Literal', value: 2, start: 0, end: 0, raw: "2", escape: false },
              spread: false,
              method: false,
              shorthand: false,
              computed: false
            }
          ]
        }
      }
    ]);

    const result = directive.markup(null, token, [component], mockNext);
    expect(result).to.include('Object.entries');
    expect(result).to.include('[k, val]');
  });

  it('should handle program expression', () => {
    const directive = new IteratorDirective(transpiler);
    const token = createMarkupToken([
      {
        key: { type: 'Identifier', name: 'value' },
        value: { type: 'Identifier', name: 'item' }
      },
      {
        key: { type: 'Identifier', name: 'from' },
        value: { 
          type: 'ProgramExpression',
          start: 0,
          end: 0,
          source: 'items.filter(x => x > 0)',
          inline: false,
          runtime: false
        }
      }
    ]);

    const result = directive.markup(null, token, [component], mockNext);
    expect(result).to.include('items.filter(x => x > 0)');
  });

  it('should throw error for invalid each statement', () => {
    const directive = new IteratorDirective(transpiler);
    const token = createMarkupToken([]);

    expect(() => {
      directive.markup(null, token, [component], mockNext);
    }).to.throw('Invalid each statement');
  });

  it('should throw error for invalid key type', () => {
    const directive = new IteratorDirective(transpiler);
    const token = createMarkupToken([
      {
        key: { type: 'Identifier', name: 'key' },
        value: { type: 'Literal', value: 'invalid', start: 0, end: 0, raw: "'invalid'", escape: false }
      },
      {
        key: { type: 'Identifier', name: 'from' },
        value: { type: 'ArrayExpression', start: 0, end: 0, elements: [] }
      }
    ]);

    expect(() => {
      directive.markup(null, token, [component], mockNext);
    }).to.throw('Invalid key value in each');
  });

  it('should throw error for invalid value type', () => {
    const directive = new IteratorDirective(transpiler);
    const token = createMarkupToken([
      {
        key: { type: 'Identifier', name: 'value' },
        value: { type: 'Literal', value: 'invalid', start: 0, end: 0, raw: "'invalid'", escape: false }
      },
      {
        key: { type: 'Identifier', name: 'from' },
        value: { type: 'ArrayExpression', start: 0, end: 0, elements: [] }
      }
    ]);

    expect(() => {
      directive.markup(null, token, [component], mockNext);
    }).to.throw('Invalid value in each');
  });
});
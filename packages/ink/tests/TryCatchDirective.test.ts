import { TryDirective, CatchDirective } from '../src/directives/TryCatchDirective';
import Component from '../src/compiler/Component';
import { MarkupToken, MarkupChildToken, NextDirective } from '../src/types';
import Exception from '../src/Exception';
import { expect } from 'chai';
import Transpiler from '../src/compiler/Transpiler';

describe('TryCatchDirective', () => {
  let tryDirective: TryDirective;
  let catchDirective: CatchDirective;
  let mockTranspiler: Transpiler;
  let mockNext: NextDirective;

  beforeEach(() => {
    // Create a mock component
    const mockComponent = new Component('test.ink');
    
    // Create a minimal transpiler instance with the mock component
    mockTranspiler = new Transpiler(mockComponent);
    
    // Initialize directives with transpiler
    tryDirective = new TryDirective(mockTranspiler);
    catchDirective = new CatchDirective(mockTranspiler);

    // Mock the next function with proper NextDirective type
    mockNext = (parent: MarkupToken | null, token: MarkupChildToken[], components: Component[]) => 'mockContent';
  });

  describe('TryDirective', () => {
    it('should have the correct name', () => {
      expect(tryDirective.name).to.equal('try');
    });

    it('should throw error if no children are provided', () => {
      // Create a minimal token with required properties
      const token: MarkupToken = {
        type: 'MarkupExpression',
        name: 'try',
        kind: 'block',
        start: 0,
        end: 0,
        children: undefined // Test undefined children
      };

      expect(() => {
        tryDirective.markup(null, token, [], mockNext);
      }).to.throw('Invalid try statement');
    });

    it('should throw error if no catch block is found', () => {
      // Create a token with a child but no catch block
      const token: MarkupToken = {
        type: 'MarkupExpression',
        name: 'try',
        kind: 'block',
        start: 0,
        end: 0,
        children: [{
          type: 'MarkupExpression',
          name: 'div',
          kind: 'block',
          start: 0,
          end: 0
        }]
      };

      expect(() => {
        tryDirective.markup(null, token, [], mockNext);
      }).to.throw('Invalid try statement');
    });

    it('should generate correct try block with catch', () => {
      // Create a token with a catch block
      const token: MarkupToken = {
        type: 'MarkupExpression',
        name: 'try',
        kind: 'block',
        start: 0,
        end: 0,
        children: [{
          type: 'MarkupExpression',
          name: 'catch',
          kind: 'block',
          start: 0,
          end: 0
        }]
      };

      const result = tryDirective.markup(null, token, [], mockNext);
      expect(result).to.equal('...(() => { try { return mockContent; } })()');
    });
  });

  describe('CatchDirective', () => {
    it('should have the correct name', () => {
      expect(catchDirective.name).to.equal('catch');
    });

    it('should throw error if not within try block', () => {
      const token: MarkupToken = {
        type: 'MarkupExpression',
        name: 'catch',
        kind: 'block',
        start: 0,
        end: 0
      };

      expect(() => {
        catchDirective.markup(null, token);
      }).to.throw('Invalid catch statement');
    });

    it('should use default error name if not specified', () => {
      const token: MarkupToken = {
        type: 'MarkupExpression',
        name: 'catch',
        kind: 'block',
        start: 0,
        end: 0
      };
      const parent: MarkupToken = {
        type: 'MarkupExpression',
        name: 'try',
        kind: 'block',
        start: 0,
        end: 0
      };

      const result = catchDirective.markup(parent, token);
      expect(result).to.equal(']; } catch (error) { return [');
    });

    it('should use custom error name when specified', () => {
      // Create a token with custom error name attribute
      const token: MarkupToken = {
        type: 'MarkupExpression',
        name: 'catch',
        kind: 'block',
        start: 0,
        end: 0,
        attributes: {
          type: 'ObjectExpression',
          start: 0,
          end: 0,
          properties: [{
            type: 'Property',
            kind: 'init',
            start: 0,
            end: 0,
            key: {
              type: 'Identifier',
              name: 'error',
              start: 0,
              end: 0
            },
            value: {
              type: 'Identifier',
              name: 'e',
              start: 0,
              end: 0
            },
            spread: false,
            method: false,
            shorthand: false,
            computed: false
          }]
        }
      };
      const parent: MarkupToken = {
        type: 'MarkupExpression',
        name: 'try',
        kind: 'block',
        start: 0,
        end: 0
      };

      const result = catchDirective.markup(parent, token);
      expect(result).to.equal(']; } catch (e) { return [');
    });
  });

  // Integration tests
  describe('Integration', () => {
    it('should handle nested components within try-catch', () => {
      // Create a complex token with nested components
      const token: MarkupToken = {
        type: 'MarkupExpression',
        name: 'try',
        kind: 'block',
        start: 0,
        end: 0,
        children: [
          {
            type: 'MarkupExpression',
            name: 'div',
            kind: 'block',
            start: 0,
            end: 0
          },
          {
            type: 'MarkupExpression',
            name: 'catch',
            kind: 'block',
            start: 0,
            end: 0,
            attributes: {
              type: 'ObjectExpression',
              start: 0,
              end: 0,
              properties: [{
                type: 'Property',
                kind: 'init',
                start: 0,
                end: 0,
                key: {
                  type: 'Identifier',
                  name: 'error',
                  start: 0,
                  end: 0
                },
                value: {
                  type: 'Identifier',
                  name: 'e',
                  start: 0,
                  end: 0
                },
                spread: false,
                method: false,
                shorthand: false,
                computed: false
              }]
            }
          }
        ]
      };

      // Test the complete try-catch flow
      const result = tryDirective.markup(null, token, [], mockNext);
      expect(result).to.contain('try { return mockContent');

      // Verify next function is called
      let nextCalled = false;
      const mockNextWithTracking: NextDirective = (parent, children, components) => {
        nextCalled = true;
        return 'mockContent';
      };
      tryDirective.markup(null, token, [], mockNextWithTracking);
      expect(nextCalled).to.be.true;
    });
  });
});
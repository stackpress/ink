import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import { IfDirective, ElifDirective, ElseDirective } 
from '../src/directives/ConditionalDirective';
import type { MarkupToken, PropertyToken, ScriptToken, 
  ObjectToken, NextDirective, MarkupChildToken } from '../src/types';
import Component from '../src/compiler/Component';
import type Transpiler from '../src/compiler/Transpiler';

describe('ConditionalDirective', () => {
  // Create a mock transpiler
  const mockTranspiler = {
    // Add any required transpiler methods here
  } as Transpiler;

  // Helper function to create a mock next directive function
  const mockNext: NextDirective = (parent: MarkupToken|null, 
    token: MarkupChildToken[], components: Component[]) => {
    return '[child content]';
  };

  describe('IfDirective', () => {
    let ifDirective: IfDirective;

    beforeEach(() => {
      ifDirective = new IfDirective(mockTranspiler);
    });

    // Test directive name
    it('should have correct directive name', () => {
      expect(ifDirective.name).to.equal('if');
    });

    // Test invalid if statement (no attributes)
    it('should throw error for if statement without attributes', () => {
      const token: MarkupToken = {
        type: 'MarkupExpression',
        name: 'if',
        kind: 'block',
        start: 0,
        end: 10,
        attributes: undefined,
        children: []
      };
      expect(() => {
        ifDirective.markup(null, token, [], mockNext);
      }).to.throw('Invalid if statement');
    });

    // Test if statement with boolean literal
    it('should handle boolean literal true condition', () => {
      const token: MarkupToken = {
        type: 'MarkupExpression',
        name: 'if',
        kind: 'block',
        start: 0,
        end: 10,
        attributes: {
          type: 'ObjectExpression',
          start: 0,
          end: 10,
          properties: [{
            type: 'Property',
            kind: 'init',
            start: 0,
            end: 10,
            key: { type: 'Identifier', name: 'true', start: 0, end: 4 },
            value: { type: 'Literal', value: true, raw: 'true',
            start: 0, end: 4, escape: false },
            spread: false,
            method: false,
            shorthand: false,
            computed: false
          }] as PropertyToken[]
        } as ObjectToken,
        children: []
      };
      const result = ifDirective.markup(null, token, [], mockNext);
      expect(result).to.equal('...(!!(true) ? [child content] : [])');
    });

    // Test if statement with string literal
    it('should handle string literal condition', () => {
      const token: MarkupToken = {
        type: 'MarkupExpression',
        name: 'if',
        kind: 'block',
        start: 0,
        end: 10,
        attributes: {
          type: 'ObjectExpression',
          start: 0,
          end: 10,
          properties: [{
            type: 'Property',
            kind: 'init',
            start: 0,
            end: 10,
            key: { type: 'Identifier', name: 'true', start: 0, end: 4 },
            value: { type: 'Literal', value: 'hello', raw: "'hello'", 
            start: 0, end: 4, escape: false },
            spread: false,
            method: false,
            shorthand: false,
            computed: false
          }] as PropertyToken[]
        } as ObjectToken,
        children: []
      };
      const result = ifDirective.markup(null, token, [], mockNext);
      expect(result).to.equal("...(!!('hello') ? [child content] : [])");
    });

    // Test if statement with program expression
    it('should handle program expression condition', () => {
      const token: MarkupToken = {
        type: 'MarkupExpression',
        name: 'if',
        kind: 'block',
        start: 0,
        end: 10,
        attributes: {
          type: 'ObjectExpression',
          start: 0,
          end: 10,
          properties: [{
            type: 'Property',
            kind: 'init',
            start: 0,
            end: 10,
            key: { type: 'Identifier', name: 'true', start: 0, end: 4 },
            value: {
              type: 'ProgramExpression',
              start: 0,
              end: 10,
              inline: true,
              source: 'count > 1',
              runtime: false
            } as ScriptToken,
            spread: false,
            method: false,
            shorthand: false,
            computed: false
          }] as PropertyToken[]
        } as ObjectToken,
        children: []
      };
      const result = ifDirective.markup(null, token, [], mockNext);
      expect(result).to.equal('...(!!(count > 1) ? [child content] : [])');
    });

    // Test if statement with children
    it('should handle if statement with children', () => {
      const token: MarkupToken = {
        type: 'MarkupExpression',
        name: 'if',
        kind: 'block',
        start: 0,
        end: 10,
        attributes: {
          type: 'ObjectExpression',
          start: 0,
          end: 10,
          properties: [{
            type: 'Property',
            kind: 'init',
            start: 0,
            end: 10,
            key: { type: 'Identifier', name: 'true', start: 0, end: 4 },
            value: { type: 'Identifier', name: 'isVisible', start: 0, end: 4 },
            spread: false,
            method: false,
            shorthand: false,
            computed: false
          }] as PropertyToken[]
        } as ObjectToken,
        children: [{
          type: 'MarkupExpression',
          name: 'div',
          kind: 'block',
          start: 0,
          end: 10,
          children: []
        }]
      };
      const result = ifDirective.markup(null, token, [], mockNext);
      expect(result).to.equal('...(!!(isVisible) ? [child content] : [])');
    });

    // Test if statement with identifier
    it('should handle identifier condition', () => {
      const token: MarkupToken = {
        type: 'MarkupExpression',
        name: 'if',
        kind: 'block',
        start: 0,
        end: 10,
        attributes: {
          type: 'ObjectExpression',
          start: 0,
          end: 10,
          properties: [{
            type: 'Property',
            kind: 'init',
            start: 0,
            end: 10,
            key: { type: 'Identifier', name: 'true', start: 0, end: 4 },
            value: { type: 'Identifier', name: 'isVisible', start: 0, end: 4 },
            spread: false,
            method: false,
            shorthand: false,
            computed: false
          }] as PropertyToken[]
        } as ObjectToken,
        children: []
      };
      const result = ifDirective.markup(null, token, [], mockNext);
      expect(result).to.equal('...(!!(isVisible) ? [child content] : [])');
    });

    // Test if statement with false condition
    it('should handle false condition', () => {
      const token: MarkupToken = {
        type: 'MarkupExpression',
        name: 'if',
        kind: 'block',
        start: 0,
        end: 10,
        attributes: {
          type: 'ObjectExpression',
          start: 0,
          end: 10,
          properties: [{
            type: 'Property',
            kind: 'init',
            start: 0,
            end: 10,
            key: { type: 'Identifier', name: 'false', start: 0, end: 4 },
            value: { type: 'Identifier', name: 'isHidden', start: 0, end: 4 },
            spread: false,
            method: false,
            shorthand: false,
            computed: false
          }] as PropertyToken[]
        } as ObjectToken,
        children: []
      };
      const result = ifDirective.markup(null, token, [], mockNext);
      expect(result).to.equal('...(!(isHidden) ? [child content] : [])');
    });

    // Test invalid property type
    it('should throw error for invalid property type', () => {
      const token: MarkupToken = {
        type: 'MarkupExpression',
        name: 'if',
        kind: 'block',
        start: 0,
        end: 10,
        attributes: {
          type: 'ObjectExpression',
          start: 0,
          end: 10,
          properties: [{
            type: 'Property',
            kind: 'init',
            start: 0,
            end: 10,
            key: { type: 'Identifier', name: 'true', start: 0, end: 4 },
            value: { type: 'ArrayExpression', elements: [], start: 0, end: 4 },
            spread: false,
            method: false,
            shorthand: false,
            computed: false
          }] as PropertyToken[]
        } as ObjectToken,
        children: []
      };
      expect(() => {
        ifDirective.markup(null, token, [], mockNext);
      }).to.throw('Invalid if statement');
    });
  });

  describe('ElifDirective', () => {
    let elifDirective: ElifDirective;

    beforeEach(() => {
      elifDirective = new ElifDirective(mockTranspiler);
    });

    it('should have correct directive name', () => {
      expect(elifDirective.name).to.equal('elif');
    });

    // Test elif without parent
    it('should throw error when no parent', () => {
      const token: MarkupToken = {
        type: 'MarkupExpression',
        name: 'elif',
        kind: 'block',
        start: 0,
        end: 10,
        attributes: {
          type: 'ObjectExpression',
          start: 0,
          end: 10,
          properties: [{
            type: 'Property',
            kind: 'init',
            start: 0,
            end: 10,
            key: { type: 'Identifier', name: 'true', start: 0, end: 4 },
            value: { type: 'Literal', value: true, raw: 'true', 
              start: 0, end: 4, escape: false },
            spread: false,
            method: false,
            shorthand: false,
            computed: false
          }] as PropertyToken[]
        } as ObjectToken,
        children: []
      };
      expect(() => {
        elifDirective.markup(null, token);
      }).to.throw('Invalid elif statement');
    });

    // Test elif with wrong parent type
    it('should throw error when parent is not if', () => {
      const parent: MarkupToken = {
        type: 'MarkupExpression',
        name: 'div',
        kind: 'block',
        start: 0,
        end: 10,
        children: []
      };
      const token: MarkupToken = {
        type: 'MarkupExpression',
        name: 'elif',
        kind: 'block',
        start: 0,
        end: 10,
        attributes: {
          type: 'ObjectExpression',
          start: 0,
          end: 10,
          properties: [{
            type: 'Property',
            kind: 'init',
            start: 0,
            end: 10,
            key: { type: 'Identifier', name: 'true', start: 0, end: 4 },
            value: { type: 'Literal', value: true, raw: 'true', 
              start: 0, end: 4, escape: false },
            spread: false,
            method: false,
            shorthand: false,
            computed: false
          }] as PropertyToken[]
        } as ObjectToken,
        children: []
      };
      expect(() => {
        elifDirective.markup(parent, token);
      }).to.throw('Invalid elif statement');
    });

    // Test valid elif with program expression
    it('should handle program expression condition', () => {
      const parent: MarkupToken = {
        type: 'MarkupExpression',
        name: 'if',
        kind: 'block',
        start: 0,
        end: 10,
        children: []
      };
      const token: MarkupToken = {
        type: 'MarkupExpression',
        name: 'elif',
        kind: 'block',
        start: 0,
        end: 10,
        attributes: {
          type: 'ObjectExpression',
          start: 0,
          end: 10,
          properties: [{
            type: 'Property',
            kind: 'init',
            start: 0,
            end: 10,
            key: { type: 'Identifier', name: 'true', start: 0, end: 4 },
            value: {
              type: 'ProgramExpression',
              start: 0,
              end: 10,
              inline: true,
              source: 'count === 2',
              runtime: false
            } as ScriptToken,
            spread: false,
            method: false,
            shorthand: false,
            computed: false
          }] as PropertyToken[]
        } as ObjectToken,
        children: []
      };
      const result = elifDirective.markup(parent, token);
      expect(result).to.equal(']: !!(count === 2) ? [ ');
    });
  });

  describe('ElseDirective', () => {
    let elseDirective: ElseDirective;

    beforeEach(() => {
      elseDirective = new ElseDirective(mockTranspiler);
    });

    it('should have correct directive name', () => {
      expect(elseDirective.name).to.equal('else');
    });

    // Test else without parent
    it('should throw error when no parent', () => {
      const token: MarkupToken = {
        type: 'MarkupExpression',
        name: 'else',
        kind: 'block',
        start: 0,
        end: 10,
        children: []
      };
      expect(() => {
        elseDirective.markup(null, token);
      }).to.throw('Invalid else statement');
    });

    // Test else with wrong parent type
    it('should throw error when parent is not if', () => {
      const parent: MarkupToken = {
        type: 'MarkupExpression',
        name: 'div',
        kind: 'block',
        start: 0,
        end: 10,
        children: []
      };
      const token: MarkupToken = {
        type: 'MarkupExpression',
        name: 'else',
        kind: 'block',
        start: 0,
        end: 10,
        children: []
      };
      expect(() => {
        elseDirective.markup(parent, token);
      }).to.throw('Invalid else statement');
    });

    // Test valid else directive
    it('should handle valid else statement', () => {
      const parent: MarkupToken = {
        type: 'MarkupExpression',
        name: 'if',
        kind: 'block',
        start: 0,
        end: 10,
        children: []
      };
      const token: MarkupToken = {
        type: 'MarkupExpression',
        name: 'else',
        kind: 'block',
        start: 0,
        end: 10,
        children: []
      };
      const result = elseDirective.markup(parent, token);
      expect(result).to.equal(']: true ? [');
    });

    // Test else ignores attributes
    it('should ignore attributes in else statement', () => {
      const parent: MarkupToken = {
        type: 'MarkupExpression',
        name: 'if',
        kind: 'block',
        start: 0,
        end: 10,
        children: []
      };
      const token: MarkupToken = {
        type: 'MarkupExpression',
        name: 'else',
        kind: 'block',
        start: 0,
        end: 10,
        attributes: {
          type: 'ObjectExpression',
          start: 0,
          end: 10,
          properties: [{
            type: 'Property',
            kind: 'init',
            start: 0,
            end: 10,
            key: { type: 'Identifier', name: 'true', start: 0, end: 4 },
            value: { type: 'Literal', value: true, raw: 'true', 
              start: 0, end: 4, escape: false },
            spread: false,
            method: false,
            shorthand: false,
            computed: false
          }] as PropertyToken[]
        } as ObjectToken,
        children: []
      };
      const result = elseDirective.markup(parent, token);
      expect(result).to.equal(']: true ? [');
    });
  });
});
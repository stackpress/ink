//compiler
import type Component from '../compiler/Component';
//common
import type { 
  MarkupToken, 
  IdentifierToken, 
  ScriptToken, 
  NextDirective 
} from '../types';
import Exception from '../Exception';
import Parser from '../compiler/Parser';
//local
import AbstractDirective from './AbstractDirective';

/**
 * IteratorDirective implements the 'each' directive for iterating over arrays and objects
 * in templates. It supports the following syntax:
 * 
 * Arrays: <each value="item" key="index" from="['a', 'b', 'c']">...</each>
 * Objects: <each value="val" key="k" from="{a: 1, b: 2}">...</each>
 * Expressions: <each value="item" from="items.filter(x => x > 0)">...</each>
 */
export default class IteratorDirective extends AbstractDirective {
  /**
   * Returns the directive name used in templates
   */
  public get name() {
    return 'each';
  }
  
  /**
   * Processes the markup token and generates the iteration code
   * @param parent - The parent markup token (if any)
   * @param token - The current markup token being processed
   * @param components - List of available components
   * @param next - Function to process child elements
   * @returns Generated JavaScript code for iteration
   * @throws Exception if the iteration syntax is invalid
   */
  public markup(
    parent: MarkupToken|null, 
    token: MarkupToken, 
    components: Component[], 
    next: NextDirective
  ) {
    let expression = '';
    
    // Validate that attributes are present
    if (!token.attributes 
      || token.attributes.properties.length === 0 
    ) {
      throw Exception.for('Invalid each statement');
    }

    // Extract key, value, and from attributes
    const key = token.attributes.properties.find(
      property => property.key.name === 'key'
    );
    const value = token.attributes.properties.find(
      property => property.key.name === 'value'
    );
    const from = token.attributes.properties.find(
      property => property.key.name === 'from'
    );

    // Validate required attributes
    if (!from || (!key && !value)) {
      throw Exception.for('Invalid each statement');
    } else if (key && key.value.type !== 'Identifier') {
      throw Exception.for('Invalid key value in each');
    } else if (value && value.value.type !== 'Identifier') {
      throw Exception.for('Invalid value in each');
    }

    // Use default '_' for unused key/value names
    const keyName = (key?.value as IdentifierToken)?.name || '_';
    const valueName = (value?.value as IdentifierToken)?.name || '_';
    
    expression += `...`;

    // Handle different types of 'from' values
    if (from.value.type === 'ProgramExpression') {
      // For JavaScript expressions (e.g., array.filter())
      const script = from.value as ScriptToken;
      expression += `Object.entries(${script.source})`;
    } else if (from.value.type === 'ArrayExpression') {
      // For literal arrays (e.g., ['a', 'b', 'c'])
      expression += `Object.entries(${
        JSON.stringify(Parser.array(from.value))
      })`;
    } else if (from.value.type === 'ObjectExpression') {
      // For literal objects (e.g., {a: 1, b: 2})
      expression += `Object.entries(${
        JSON.stringify(Parser.object(from.value))
      })`;
    } else if (from.value.type === 'Identifier') {
      // For variables (e.g., items)
      expression += `Object.entries(${from.value.name})`;
    } else {
      throw Exception.for('Invalid from value in each');
    }

    // Generate map function with destructuring for key/value pairs
    expression += `.map(([${keyName}, ${valueName}]) => `;
    
    // Process child elements if they exist
    if (token.children) {
      expression += next(token, token.children, components);
    } else {
      expression += '[]';
    }
    
    // Flatten the results to handle nested arrays
    expression += ').flat()';
    return expression;
  }
}
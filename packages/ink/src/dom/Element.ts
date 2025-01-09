import type { DOMNode, DOMElementData } from '../types';
import Node from './Node';

const selfClosingTags = [
  'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input',
  'link', 'meta', 'param', 'source', 'track', 'wbr'
];

export default class Element extends Node implements DOMNode {
  public readonly type = 1;
  //name of the element
  public readonly name: string;
  //children of the element
  public readonly children: Set<DOMNode>;
  //element data
  protected _attributes: Map<string, unknown>;
  //parent of the element (if any)
  protected _parent: Element|null = null;

  /**
   * Returns element attributes
   */
  public get attributes() {
    return Object.fromEntries(this._attributes);
  }

  /**
   * Returns a list of children
   */
  public get childList() {
    return Array.from(this.children);
  }

  /**
   * Returns a sequence of elements
   */
  public get elements() {
    return this.nodes.filter(node => node instanceof Element);
  }

  /**
   * Returns the node name
   */
  public get nodeName() {
    return this.name.toUpperCase();
  }

  /**
   * Transforms the element to an array list. This will be used to 
   * compare `document.querySelectorAll('*')` in order to sync 
   * attributes.
   */
  public get nodes() {
    const nodes: DOMNode[] = [ this ];
    this._flatten(Array.from(this.children), nodes);
    return nodes;
  }

  /**
   * Returns the node type
   */
  public get nodeType() {
    return this.type;
  }

  /**
   * Returns the parent element
   */
  public get parent(): Element|null {
    return this._parent;
  }

  /**
   * Sets the parent element
   */
  public set parent(parent: Element) {
    this._parent = parent;
  }

  /**
   * Sets the element properties
   */
  public constructor(
    name: string, 
    attributes: Record<string, unknown> = {}, 
    children: DOMNode[] = []
  ) {
    super();
    this.name = name;
    this._attributes = new Map(Object.entries(attributes));
    this.children = new Set(children.filter(Boolean));
  }

  /**
   * Adds a child to the element
   */
  public appendChild(child: DOMNode) {
    this.children.add(child);
    child.parent = this;
    return this;
  }

  /**
   * Serializes element and data to object that is jsonable
   */
  public export(): DOMElementData {
    return {
      type: this.type,
      name: this.name,
      attributes: Object.fromEntries(this._attributes.entries()),
      children: Array.from(this.children).map(child => child.export())
    };
  }

  /**
   * Returns the attribute value
   */
  public getAttribute(name: string) {
    return this._attributes.get(name);
  }

  /**
   * Returns whether the element has the attribute
   */
  public hasAttribute(name: string) {
    return this._attributes.has(name);
  }

  /**
   * Removes an attribute from the element
   */
  public removeAttribute(name: string) {
    this._attributes.delete(name);
    return this;
  }

  /**
   * Removes a child from the element
   */
  public removeChild(child: DOMNode) {
    this.children.delete(child);
    child.parent = null;
    return
  }

  /**
   * Sets an attribute to the element
   */
  public setAttribute(name: string, value: unknown) {
    this._attributes.set(name, value);
    return this;
  }

  /**
   * Renders the element to string
   */
  public toString() {
    const entries = Array.from(this._attributes.entries());
    const attributes = entries.length > 0 
      ? ' ' + entries.map(([key, value]) => {
        if (typeof value === 'string' 
          && !/["<>\n]/.test(value)
        ) {
          return `${key}="${value}"`;
        } else if (typeof value === 'boolean') {
          return value ? key : '';
        }
      }).join(' ')
      : '';
    if (selfClosingTags.includes(this.name)) {
      return `<${this.name}${attributes} />`;
    }
    const children: string = Array
      .from(this.children.values())
      .map(child => child.toString())
      .join('');
    return `<${this.name}${attributes}>${children}</${this.name}>`;
  }

  /**
   * Flattens the element to a single array list
   */
  protected _flatten(markup: DOMNode[], nodes: DOMNode[]) {
    markup.forEach(node => {
      nodes.push(node);
      if (node instanceof Element) {
        this._flatten(Array.from(node.children), nodes);
      }
    });
  }
}
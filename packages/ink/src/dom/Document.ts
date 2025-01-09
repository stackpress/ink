import type { DOMNode, DOMNodeData, DOMElementData } from '../types';
import DOMComment from './Comment';
import DOMDoctype from './Doctype';
import DOMElement from './Element';
import DOMText from './Text';

export default class Document {
  /**
   * Creates a comment node
   */
  public static createComment(value: string, parent?: DOMElement) {
    const node = new DOMComment(value);
    if (parent) {
      node.parent = parent;
    }
    return node;
  }

  /**
   * Creates a doctype node
   */
  public static createDoctype(value = 'html', parent?: DOMElement) {
    const node = new DOMDoctype(value);
    if (parent) {
      node.parent = parent;
    }
    return node;
  }

  /**
   * Creates an element node
   */
  public static createElement(
    name: string, 
    attributes: Record<string, unknown> = {}, 
    children: DOMNode[] = [], 
    parent?: DOMElement
  ) {
    const element = new DOMElement(name, attributes, children);
    if (parent) {
      element.parent = parent;
    }
    return element;
  }

  /**
   * Creates a text node
   */
  public static createText(
    value: string, 
    escape = false, 
    parent?: DOMElement
  ) {
    const node = new DOMText(value, escape);
    if (parent) {
      node.parent = parent;
    }
    return node;
  }

  /**
   * Unserializes document from object
   */
  public static import(
    data: (DOMNodeData|DOMElementData)[],
    parent?: DOMElement
  ): DOMNode[] {
    return data.map(node => {
      const { value } = node as DOMNodeData;
      const { name, attributes, children } = node as DOMElementData;
      switch (node.type) {
        case 1:
          const element = this.createElement(
            name,
            attributes,
            [],
            parent
          );
          Document.import(children, element).forEach(
            child => element.appendChild(child)
          );
          return element;
        case 3:
          return this.createText(value, true, parent);
        case 8:
          return this.createComment(value, parent);
        case 10:
          return this.createDoctype(value, parent);
      }
      return null;
    }).filter(Boolean) as DOMNode[];
  }

  /**
   * Factory loader
   */
  public static load(children: DOMNode[]) {
    return new Document(children);
  }

  //the document children
  public readonly children: Set<DOMNode>;

  /**
   * Returns the child list
   */
  public get childList() {
    return Array.from(this.children);
  }

  /**
   * Returns a sequence of elements
   */
  public get elements() {
    return this.nodes.filter(node => node instanceof DOMElement);
  }

  /**
   * Returns a sequence of nodes
   */
  public get nodes() {
    return Array
      .from(this.children)
      .map(child => child instanceof DOMElement 
        ? child.nodes
        : [ child ]
      )
      .flat();
  }

  /**
   * Sets the child list
   */
  public constructor(children: DOMNode[]) {
    this.children = new Set(children.filter(Boolean));
  }

  /**
   * Serializes document to object that is jsonable
   */
  public export() {
    return this.childList.map(child => child.export());
  }

  /**
   * Converts document to a string
   */
  public toString() {
    return Array
      .from(this.children)
      .map(child => child.toString())
      .join('');
  }
}
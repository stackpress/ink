import type { DOMNode, DOMNodeData } from '../types';
import Node from './Node';

export default class Doctype extends Node implements DOMNode {
  //node name
  public readonly name = '#doctype';
  //node type
  public readonly type = 10;
  //value of the text node
  public readonly value: string;

  /**
   * Returns the node name
   */
  public get nodeName() {
    return this.name;
  }

  /**
   * Returns the node type
   */
  public get nodeType() {
    return this.type;
  }

  /**
   * Sets the Doctype value
   */
  public constructor(value: string) {
    super();
    this.value = value;
  }

  /**
   * Transforms the element to json object
   */
  public export(): DOMNodeData {
    return {
      type: this.type,
      name: this.name,
      value: this.value
    };
  }

  /**
   * Renders the text node to string
   */
  public toString() {
    return `<!DOCTYPE ${this.value}>`;
  }
}
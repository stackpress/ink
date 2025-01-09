import type { DOMNode, DOMNodeData } from '../types';
import Node from './Node';

export default class Text extends Node implements DOMNode {
  //node name
  public readonly name = '#text';
  //node type
  public readonly type = 3;
  //value of the text node
  protected _value: string;
  //whether to escape value
  protected _escape: boolean;

  /**
   * Returns the node name
   */
  public get nodeName() {
    return '#text';
  }

  /**
   * Returns the node type
   */
  public get nodeType() {
    return this.type;
  }
  
  /**
   * Returns the value of the text node
   */
  public get value() {
    return this._escape 
      ? this._value 
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
      : this._value;
  }

  /**
   * Sets the text value
   */
  public constructor(value: string, escape = false) {
    super();
    this._escape = escape;
    this._value = value;
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
    return this.value;
  }
}
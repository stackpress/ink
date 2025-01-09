import type { DOMNodeData, DOMElementData } from '../types';
import Element from './Element';
export default abstract class Node {
  //parent of the element (if any)
  protected _parent: Element|null = null;

  /**
   * Returns the parent element
   */
  public get parent(): Element|null {
    return this._parent;
  }

  /**
   * Returns the parent element
   */
  public get parentElement(): Element|null {
    return this._parent;
  }

  /**
   * Sets the parent element
   */
  public set parent(parent: Element|null) {
    this._parent = parent;
  }

  /**
   * Transforms the element to json object
   */
  public abstract export(): DOMNodeData|DOMElementData;
  
  /**
   * Renders the text node to string
   */
  public abstract toString(): string
}
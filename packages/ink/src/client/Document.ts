//dom
import type DOMElement from '../dom/Element';
import DOMDocument from '../dom/Document';
//api
import data from './api/data';
//local
import InkRegistry from './Registry';

export default abstract class ClientDocument {
  /**
   * Retrieves the data from the template script tag
   */
  public constructor() {
    const template = document.querySelector('script[data-template]');
    if (!template) {
      throw new Error('TEMPLATE_DATA not found');
    }
    try {
      //@ts-ignore Property 'innerText' does not exist on type 'Element'.
      window.__TEMPLATE_DATA__ = JSON.parse(template.innerText.trim());
      Object.entries(window.__TEMPLATE_DATA__).forEach(([key, value]) => {
        data.set(key, value);
      });
    } catch (error) {
      throw new Error('TEMPLATE_DATA is not a valid JSON');
    }
  }

  /**
   * Returns the markup tree for the document
   */
  public abstract template(): DOMElement[];

  /**
   * Bindings predict the order rendered on the server
   * with the order determined by doc.body.querySelectorAll
   */
  public bindings() {
    //set the current component
    data.set('current', 'document');
    //get the markup
    const markup = this.template();
    //reset the current component
    data.delete('current');
    //get the markup sequence
    const sequence = DOMDocument.load(markup).elements;
    //format sequence to bindings
    const entries = Array.from(sequence)
      .map((el, id) => [ String(id), el.attributes ])
      .filter(entry => Object.keys(entry[1]).length);
    return Object.fromEntries(entries);
  }

  /**
   * Syncs the bindings with the client registry
   */
  public sync() {
    const bindings = this.bindings();
    const map = Array.from(document.querySelectorAll('*'));
    
    //loop through the initial elements before js manipulation
    for (const element of map) {
      //pull the attributes from the rendered HTML
      const attributes = Object.fromEntries(
        Array.from(element.attributes).map(attribute => [ 
          attribute.nodeName, 
          attribute.nodeValue && attribute.nodeValue.length > 0
            ? attribute.nodeValue
            : true
        ])
      );
      //determine the id of the element by its index in the registry
      const id = String(InkRegistry.elements.size);
      //if the element has bindings
      if (bindings[id]) {
        //this is where we need to add the bindings to the attributes
        Object.assign(attributes, bindings[id]);
      }
      //finally add the element to the registry
      InkRegistry.register(element, attributes);
    }
    return bindings;
  }

  /**
   * This is a helper for `template()`, defined by child classes
   */
  protected _toNodeList(value: any) {
    if (typeof value === 'object' 
      && typeof value.nodeType === 'number'
    ) {
      return [ value ];
    }

    if (Array.isArray(value)) {
      if (value.every(
        item => typeof item === 'object' 
          && typeof item.nodeType === 'number'
      )) {
        return value;
      }
    }

    return [ InkRegistry.createText(String(value)) ];
  }
}
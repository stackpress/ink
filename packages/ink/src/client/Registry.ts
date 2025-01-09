//common
import type { 
  AnyChild, 
  ClientComponentClass, 
  RegistryIterator 
} from '../types';
//local
import ClientComponent from './Component';
import ClientElement from './Element';
import client from './api/client';

//this is used to convert HTML entities to their respective characters
const decoder = document.createElement('textarea');
const decode = (value: string) => {
  decoder.innerHTML = value;
  return decoder.value;
}

/**
 * A registry of all ClientElement/ClientComponent instances 
 * to add better attribute handling
 */
export default class ClientRegistry {
  //A registry of all ClientElement instances
  protected static _elements = new Map<Element, ClientElement>();

  /**
   * Returns the registry
   */
  public static get elements() {
    return this._elements;
  }

  /**
   * Localizes a InkComponent instance
   */
  public static createComponent(
    tagname: string,
    definition: ClientComponentClass, 
    attributes: Record<string, any> = {}, 
    children: AnyChild[] = []
  ) {
    const { registered } = definition;
    //if the component being created is not a
    //registered component in customElements
    if (!registered && !client()?.elements[tagname]) {
      //we need to pseudo create the component instead.
      return this.createVirtualComponent(
        tagname, 
        definition, 
        attributes, 
        children
      );
    }
    
    //NOTE: It's more logical to call this.crateElement()
    //but InkComponent will error because it's not
    //registered in InkRegistry yet. 
    
    //change the tagname if the component is registered
    const name = registered || tagname;
    //this is to avoid confusion with different tag names 
    //using the same component.
    const component = document.createElement(name) as ClientComponent;
    //uhh, wait for this to be registered in customElements?
    customElements.whenDefined(name).then(() => {
      customElements.upgrade(component);
      //for some reason, upgrade does not work
      //on elements that have not rendered yet
      //so we need to do a check here
      //if render was not called yet, call it
      if (!component.initiated) {
        component.connectedCallback();
      }
    });
    //a registered component should(?) self register itself 
    //in the constructor but we need to update the attributes 
    //and children
    //try to register it
    const element = ClientRegistry.register(component, attributes);
    //set the attributes again to include non-string values
    element.setAttributes(attributes, true);
    //set attributes natively so it shows 
    //up in the markup when it's rendered
    //NOTE: We cannot assume this is a InkComponent...
    for (const [ name, value ] of Object.entries(attributes)) {
      if (typeof value === 'string') {
        component.setAttribute(name, value);
      } else if (value === true) {
        component.setAttribute(name, '');
      }
    }
    //append children (the original children)
    this._cleanChildren(children).forEach(
      child => component.appendChild(child)
    );
    //return the element
    return element;
  }

  /**
   * Creates a new InkElement instance
   */
  public static createElement(
    name: string, 
    attributes: Record<string, any> = {}, 
    children: AnyChild[] = []
  ) {
    //create html element
    const element = document.createElement(name);
    //set attributes
    for (const [ name, value ] of Object.entries(attributes)) {
      if (typeof value === 'string') {
        element.setAttribute(name, value);
      } else if (value === true) {
        element.setAttribute(name, '');
      }
    }
    //append children (the original children)
    this._cleanChildren(children).forEach(
      child => element.appendChild(child)
    );
    //last manually register the element
    return this.register(element, attributes);
  }

  /**
   * Creates a TextNode and returns it
   */
  public static createText(value: string, escape = true) {
    //NOTE: TextNode will escape strings by default
    // if we allow escape to be false, and the string 
    // contains HTML, then the InkRegistry count
    // will be off.. there are also some other edge 
    // cases that need to be considered before allowing
    // escape to be false...
    return document.createTextNode(decode(value));
  }

  /**
   * Localizes a InkComponent instance
   */
  public static createVirtualComponent(
    tagname: string,
    definition: ClientComponentClass, 
    attributes: Record<string, any> = {}, 
    children: AnyChild[] = []
  ) {
    //We cant just instantiate the component and return it because
    //an error `Illegal constructor` will be thrown if the component 
    //is not registered via customElements.define(). A work around is
    //to create a fragment via template then copy the InkComponent
    //definitions to that. This will allow us to encapsule a component
    //inside of another component without having to register it.
    
    // Create a template for the inner component
    const component = document.createElement(tagname) as ClientComponent;
    //@ts-ignore set the component 
    component.definition = definition;
    //copy the prototype
    Object.setPrototypeOf(component, definition.prototype);
    //set the constructor
    component.constructor = definition.constructor;
    //@ts-ignore set the component id
    component.constructor.id = definition.id;
    //@ts-ignore set the component tagname
    component.constructor.tagname = definition.tagname;
    //@ts-ignore set the component classname
    component.constructor.classname = definition.classname;
    //@ts-ignore set the observed attributes
    if (definition.observedAttributes) {
      //@ts-ignore set the observed attributes
      component.constructor.observedAttributes = definition.observedAttributes;
    }
    //now call the magic constructor
    component.register(attributes, children);
    //return the element
    return component.element;
  }

  /**
   * Clones an element, adds to registry and returns it
   */
  public static cloneElement(node: Node, andChildren = false): Node {
    const component = node as ClientComponent | HTMLElement & {
      definition?: ClientComponentClass,
      props?: Record<string, any>,
      originalChildren?: Node[]
    };
    if (component.definition) {
      const children = component.originalChildren || [];
      return this.createComponent(
        component.nodeName.toLowerCase(), 
        component.definition, 
        component.props || {}, 
        andChildren 
          ? children.map(element => this.cloneElement(element, andChildren))
          : []
      ).element;
    } else if (node instanceof HTMLElement) {
      const children = Array.from(node.childNodes);
      return this.createElement(
        node.nodeName.toLowerCase(), 
        this.has(node)
          ? this.get(node)?.attributes as Record<string, any>
          : Object.fromEntries(Array
            .from(node.attributes)
            .map(attribute => [ attribute.name, attribute.value ])
          ), 
        andChildren 
          ? children.map(element => this.cloneElement(element, andChildren))
          : []
      ).element;
    }
    return node.cloneNode(andChildren);
  }

  /**
   * Like array filter for registry
   */
  public static filter(callback: RegistryIterator<boolean>) {
    const elements: ClientElement[] = [];
    this._elements.forEach((ink, html) => {
      if (callback(ink, html)) {
        elements.push(ink);
      }
    });
    return elements;
  }

  /**
   * Returns the InkElement instance for the given element
   */
  public static get(element: Element) {
    return this._elements.get(element) || null;
  }

  /**
   * Returns whether the element is registered
   */
  public static has(element: Element) {
    return this._elements.has(element);
  }

  /**
   * Like array map for registry
   */
  public static map<T = any>(callback: RegistryIterator<T>) {
    const elements: T[] = [];
    this._elements.forEach((ink, html) => {
      elements.push(callback(ink, html));
    });
    return elements;
  }

  /**
   * Registers a new InkElement instance
   */
  public static register(
    element: Element, 
    attributes?: Record<string, any>, 
    andChildren = false
  ) {
    if (this.has(element)) {
      return this.get(element) as ClientElement;
    }
    if (!attributes) {
      Array.from(element.attributes).forEach(attribute => {
        attributes = attributes || {};
        attributes[attribute.name] = attribute.value !== '' 
          ? attribute.value
          : true;
      });
    }
    const node = new ClientElement(element, attributes || {});
    this._elements.set(element, node);
    if (andChildren) {
      Array.from(element.children).forEach(child => {
        if (child instanceof Element) {
          this.register(child, undefined, true);
        }
      });
    }
    return node;
  }

  /**
   * Removes undefined children and converts strings to text nodes
   */
  protected static _cleanChildren(children: AnyChild[]) {
    return Array
      .from(children)
      .filter(child => typeof child !== 'undefined')
      .map(child => typeof child === 'string' 
        ? this.createText(child) 
        : child instanceof ClientElement
        ? child.element
        : child
      );
  }
}
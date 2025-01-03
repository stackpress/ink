//common
import Exception from '../Exception';
//local
import data from './data';
import InkElement from './InkElement';
import InkRegistry from './InkRegistry';

export default abstract class InkDocument {
  /**
   * Returns the build id for the document
   */
  public abstract id(): string; 

  /**
   * Returns document component styles
   */
  public abstract styles(): string; 

  /**
   * Returns the markup tree for the document
   */
  public abstract template(): InkElement[];

  /**
   * Returns the document bindings for client
   */
  public bindings(props: Record<string, any> = {}) {
    //set server props (this is so template() can read it using props())
    data.set('props', props || {});
    //set environment variables (this is so template() can read it using env())
    const env = Object.fromEntries(
      Object.entries(process.env || {}).filter(
        entry => entry[0].startsWith('PUBLIC_')
      )
    );
    data.set('env', { ...env, BUILD_ID: this.id() });
    const registry = InkRegistry.registry(this.template());
    const bindings: Record<string, any> = {};
    Array.from(registry.values()).forEach((element, id) => {
      bindings[String(id)] = element.attributes;
    })
    return bindings;
  }

  /**
   * Renders the redered document without injections
   */
  public render(props: Record<string, any> = {}) {
    //set server props (this is so template() can read it using props())
    data.set('props', props || {});
    //set element attribute bindings.
    //Bindings are non-string values that are binded to an element
    //we serialize the bindings so it can be passed to the client
    //NOTE: Binding values depend on the props
    data.set('bindings', this.bindings(props));
    //set environment variables (this is so template() can read it using env())
    const env = Object.fromEntries(
      Object.entries(process.env || {}).filter(
        entry => entry[0].startsWith('PUBLIC_')
      )
    );
    data.set('env', { ...env, BUILD_ID: this.id() });
    //get the children build w/o re-initializing the variables
    const children = this.template();
    
    //NOTE: in document there is no shadow dom
    //so there's no need to case for it...

    //this is the <html> tag
    let document = InkRegistry.render(children).trim();
    //check if the root element is an <html> tag
    if (!document.toLowerCase().startsWith('<html')) {
      throw Exception.for('Document must start with an <html> tag.');
    }
    //make the client data; here we are going to serialize the client data
    const client = Object.fromEntries(data.entries());
    const json = JSON.stringify(client).replace(/\n/g, '\n  ');
    //return the document
    return `<!DOCTYPE html>\n${document.replace('__CLIENT_DATA__', json)}`;
  }

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
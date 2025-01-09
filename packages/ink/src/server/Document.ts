//common
import Exception from '../Exception';
//local
import DOMDocument from '../dom/Document';
import DOMElement from '../dom/Element';
import data from './api/data';

export default abstract class ServerDocument {
  /**
   * Returns the build id for the document
   */
  public abstract id(): string; 

  /**
   * Returns component styles
   */
  public abstract styles(): string; 

  /**
   * Returns the markup tree for the document
   */
  public abstract template(): DOMElement[];

  /**
   * Renders the redered document without injections
   */
  public render(props: Record<string, any> = {}) {
    //set server props (this is so template() can read it using props())
    data.set('props', props || {});
    //set environment variables (this is so template() can read it using env())
    const env = process.env || {}
    data.set('env', { ...env, BUILD_ID: this.id() });
    
    //form client data
    const client = JSON.stringify({
      ...Object.fromEntries(data.entries()),
      env: {
        ...Object.fromEntries(
          Object.entries(env).filter(
            entry => entry[0].startsWith('PUBLIC_')
          )
        ),
        BUILD_ID: this.id()
      }
    });

    //get the children build w/o re-initializing the variables
    const children = this.template();
    
    //NOTE: in document there is no shadow dom
    //so there's no need to case for it...

    //this is the <html> tag
    const document = DOMDocument.load(children).toString().trim();
    //check if the root element is an <html> tag
    if (!document.toLowerCase().startsWith('<html')) {
      throw Exception.for('Document must start with an <html> tag.');
    }
    //return the full html
    return `<!DOCTYPE html>\n${document.replace('__TEMPLATE_DATA__', client)}`;
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

    return [ DOMDocument.createText(String(value), true) ];
  }
}
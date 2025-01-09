declare global { 
  interface Window {
    __TEMPLATE_DATA__: Record<string, any>
  }
}

//we need to do it like this so different
//files can use the same instance

//some data that will be stored are:
// - current component (current)
// - server props (props)
// - markup attribues (bindings)
// - environment variables (env)

export class TemplateData {
  /**
   * Make sure the global data object exists
   */
  constructor() {
    if (!window.__TEMPLATE_DATA__) {
      window.__TEMPLATE_DATA__ = {};
    }
  }

  /**
   * Clears all the data
   */
  clear() {
    window.__TEMPLATE_DATA__ = {};
    return this;
  }

  /**
   * Deletes a key from the data
   */
  delete(key: string): boolean {
    if (this.has(key)) {
      delete window.__TEMPLATE_DATA__[key];
      return true;
    }
    return false;
  }
  /**
   * Returns an array of entries
   */
  entries(): [string, any][] {
    return Object.entries(window.__TEMPLATE_DATA__);
  }

  /**
   * Returns true if the key exists
   */
  has(key: string): boolean {
    return key in window.__TEMPLATE_DATA__;
  }

  /**
   * Returns the value of the key
   */
  get(key: string): any {
    return window.__TEMPLATE_DATA__[key];
  }

  /**
   * Returns an array of keys
   */
  keys(): string[] {
    return Object.keys(window.__TEMPLATE_DATA__);
  }

  /**
   * Sets a key value pair
   */
  set(key: string, value: any) {
    window.__TEMPLATE_DATA__[key] = value;
    return this;
  }

  /**
   * Returns an array of values
   */
  values(): any[] {
    return Object.values(window.__TEMPLATE_DATA__);
  }
}

const data = new TemplateData();

export default data;
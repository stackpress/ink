type Hash = Record<string, any>;
type CustomEventListener<T> = (e: CustomEvent<T>) => void;
declare module '*.ink' {
  type AnyChild = ClientElement|Node|string|undefined;
  type ClientComponentClass = { new (): ClientComponent } & {
    id: string,
    tagname: string,
    classname: string,
    registered: string|null,
    observedAttributes?: string[],
    register(): void
  };

  class ClientElement {
    get attributes(): Record<string, any>;
    get element(): Element;
    get events(): Set<string>;
    addEvent(event: string): this;
    camel(): { [k: string]: any };
    getAttribute<T = any>(key: string): T;
    hasAttribute(key: string): boolean;
    hasEvent(event: string): boolean;
    removeAttribute(key: string, silent?: boolean): this;
    setAttribute(key: string, value: any, silent?: boolean): this;
    setAttributes(
      attributes: Record<string, any>, 
      silent?: boolean
    ): this;
    tree(
      attributes?: Record<string, any>, 
      name?: string, 
      value?: any
    ): Record<string, any>;
  }

  class ClientComponent extends HTMLElement {
    static id: string;
    static tagname: string;
    static classname: string;
    static get registered(): string | null;
    static register(): void;
    get attr(): { [k: string]: string };
    get definition(): ClientComponentClass;
    get element(): ClientElement;
    get initiated(): boolean;
    get metadata(): {
      id: string;
      tagname: string;
      classname: string;
      registered: string | null;
      observed: string[];
    };
    get originalChildren(): Node[] | undefined;
    get props(): Hash;
    get propsCamel(): { [k: string]: any };
    get propsTree(): Record<string, any>;
    get virtual(): boolean;
    set props(props: Hash);
    set definition(definition: ClientComponentClass);
    set originalChildren(children: Node[]);
    adoptedCallback(): void;
    attributeChangedCallback(
      name: string, 
      prev: string | null, 
      next: string | null
    ): void;
    clone(andChildren?: boolean): Node;
    cloneElement(element: Element, andChildren?: boolean): Node;
    connectedCallback(): void;
    createComponent(
      tagname: string, 
      definition: ClientComponentClass, 
      attributes?: Record<string, any>, 
      children?: AnyChild[]
    ): ClientElement;
    createElement(
      name: string, 
      attributes?: Record<string, any>, 
      children?: AnyChild[]
    ): ClientElement;
    disconnectedCallback(): void;
    emit<T = any>(event: string, detail?: T): this;
    getAttribute(name: string): any;
    getAttributes(): Record<string, any>;
    getChildren(type?: boolean | null): Node[] | undefined;
    getElement(element: Element): ClientElement | null;
    getParentComponent(): ClientComponent | null;
    hasAttribute(name: string): boolean;
    on<T>(event: string, callback: CustomEventListener<T>): this;
    once<T>(event: string, callback: CustomEventListener<T>): this;
    register(attributes?: Hash, children?: AnyChild[]): void;
    removeAttribute(name: string): void;
    render(): string | undefined;
    setAttribute(name: string, value: any): void;
    setAttributes(attributes: Hash): void;
    styles(): string;
    template(): () => (Element | false)[];
    unbind(event: string, callback: EventListener): this;
    wait(): void;
  }
  
  export { ClientComponent as default };
}
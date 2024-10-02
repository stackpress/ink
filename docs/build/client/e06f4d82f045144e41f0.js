var InkAPI = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // ../ink/dist/Exception.js
  var require_Exception = __commonJS({
    "../ink/dist/Exception.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var InkException2 = class extends Error {
        static for(message, ...values) {
          values.forEach(function(value) {
            message = message.replace("%s", value);
          });
          return new this(message);
        }
        static forErrorsFound(errors) {
          const exception = new this("Invalid Parameters");
          exception.errors = errors;
          return exception;
        }
        static require(condition, message, ...values) {
          if (!condition) {
            for (const value of values) {
              message = message.replace("%s", value);
            }
            throw new this(message);
          }
        }
        constructor(message, code = 500) {
          super();
          this.errors = {};
          this.start = 0;
          this.end = 0;
          this.message = message;
          this.name = this.constructor.name;
          this.code = code;
        }
        withCode(code) {
          this.code = code;
          return this;
        }
        withPosition(start, end) {
          this.start = start;
          this.end = end;
          return this;
        }
        toJSON() {
          return {
            error: true,
            code: this.code,
            message: this.message
          };
        }
      };
      exports.default = InkException2;
    }
  });

  // ../ink/dist/client/InkEmitter.js
  var require_InkEmitter = __commonJS({
    "../ink/dist/client/InkEmitter.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.match = exports.InkEmitter = exports.events = void 0;
      exports.bindAttribute = bindAttribute;
      exports.unbindAttribute = unbindAttribute;
      var InkRegistry_1 = __importDefault(require_InkRegistry());
      exports.events = [
        "click",
        "dblclick",
        "mousedown",
        "mouseup",
        "mousemove",
        "mouseover",
        "mouseout",
        "wheel",
        "keydown",
        "keypress",
        "keyup",
        "blur",
        "change",
        "contextmenu",
        "focus",
        "input",
        "submit",
        "invalid",
        "reset",
        "search",
        "select",
        "copy",
        "cut",
        "paste",
        "drag",
        "dragstart",
        "dragend",
        "dragover",
        "dragenter",
        "dragleave",
        "drop",
        "scroll",
        "durationchange",
        "ended",
        "error",
        "loadeddata",
        "loadedmetadata",
        "loadstart",
        "pause",
        "play",
        "playing",
        "progress",
        "ratechange",
        "seeked",
        "seeking",
        "stalled",
        "suspend",
        "timeupdate",
        "volumechange",
        "waiting",
        "animationstart",
        "animationend",
        "animationiteration",
        "transitionend",
        "toggle"
      ];
      var InkEmitter = class extends EventTarget {
        emit(event, target) {
          this.dispatchEvent(new CustomEvent(event, { detail: target }));
          return this;
        }
        on(event, callback) {
          if (event === "ready") {
            if (document.readyState !== "loading") {
              const event2 = new CustomEvent("ready");
              setTimeout(() => callback(event2), 1);
              return this;
            }
          }
          this.addEventListener(event, callback);
          return this;
        }
        once(event, callback) {
          const unbinder = (e) => {
            this.unbind(event, unbinder);
            callback(e);
          };
          this.on(event, unbinder);
          return this;
        }
        unbind(event, callback) {
          this.removeEventListener(event, callback);
          return this;
        }
      };
      exports.InkEmitter = InkEmitter;
      var match = (element, attribute, bind = true) => {
        return Array.from(element.querySelectorAll("*")).filter((element2) => {
          const node = InkRegistry_1.default.get(element2);
          const matched = node && node.hasAttribute(attribute) && (!bind || !node.hasEvent(attribute));
          if (matched) {
            node.addEvent(attribute);
          }
          return matched;
        }).map((element2) => InkRegistry_1.default.get(element2));
      };
      exports.match = match;
      function bindAttribute(name, bind) {
        emitter2.on("mounted", (e) => {
          if (!e.detail)
            return;
          const element = e.detail;
          (0, exports.match)(element.shadowRoot || element, name).forEach(bind);
        });
      }
      function unbindAttribute(name, bind) {
        emitter2.on("unmounted", (e) => {
          if (!e.detail)
            return;
          const element = e.detail;
          (0, exports.match)(element.shadowRoot || element, name, false).forEach(bind);
        });
      }
      var emitter2 = new InkEmitter();
      exports.default = (() => {
        document.onreadystatechange = () => {
          if (document.readyState !== "loading") {
            emitter2.emit("ready");
          }
        };
        bindAttribute("mount", (element) => {
          const callback = element.getAttribute("mount");
          if (typeof callback === "function") {
            const event = new CustomEvent("mount", {
              detail: {
                node: element,
                target: element.element
              }
            });
            callback(event);
          }
        });
        unbindAttribute("unmount", (element) => {
          const callback = element.getAttribute("unmount");
          if (typeof callback === "function") {
            const event = new CustomEvent("unmount", {
              detail: {
                node: element,
                target: element.element
              }
            });
            callback(event);
          }
        });
        bindAttribute("if", (element) => {
          const condition = element.getAttribute("if");
          if (condition === false || condition === "false") {
            element.element.remove();
          } else if (typeof condition === "function" && !condition()) {
            element.element.remove();
          }
        });
        exports.events.forEach((event) => {
          bindAttribute(event, (element) => {
            const callback = element.getAttribute(event);
            if (typeof callback === "function") {
              element.element.removeEventListener(event, callback);
              element.element.addEventListener(event, callback);
            }
          });
          unbindAttribute(event, (element) => {
            const callback = element.getAttribute(event);
            if (typeof callback === "function") {
              element.element.removeEventListener(event, callback);
            }
          });
        });
        return emitter2;
      })();
    }
  });

  // ../ink/dist/client/InkElement.js
  var require_InkElement = __commonJS({
    "../ink/dist/client/InkElement.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var InkEmitter_1 = __importDefault(require_InkEmitter());
      var InkElement = class _InkElement {
        get attributes() {
          return Object.assign({}, this._attributes);
        }
        get element() {
          return this._element;
        }
        get events() {
          return this._events;
        }
        constructor(element, attributes) {
          this._events = /* @__PURE__ */ new Set();
          this._element = element;
          this._attributes = attributes;
        }
        addEvent(event) {
          this._events.add(event);
          return this;
        }
        camel() {
          return Object.fromEntries(Object.entries(this._attributes).map(([key, value]) => {
            if (key === "class") {
              return ["className", value];
            }
            const camel = key.replace(/-([a-z])/g, (_2, letter) => letter.toUpperCase()).replaceAll("-", "");
            return [camel, value];
          }));
        }
        clone(andChildren = false) {
          const element = this._element.cloneNode(andChildren);
          const attributes = Object.assign({}, this._attributes);
          return new _InkElement(element, attributes);
        }
        getAttribute(key) {
          return this._attributes[key];
        }
        hasAttribute(key) {
          return key in this._attributes;
        }
        hasEvent(event) {
          return this._events.has(event);
        }
        removeAttribute(key, silent = false) {
          const current = this.getAttribute(key);
          if (typeof current === "undefined") {
            return this;
          }
          delete this._attributes[key];
          if (!silent) {
            InkEmitter_1.default.emit("attribute-remove", {
              element: this,
              key,
              previous: current
            });
          }
          return this;
        }
        setAttribute(key, value, silent = false) {
          if (typeof value === "undefined") {
            return this.removeAttribute(key, silent);
          }
          const current = this.getAttribute(key);
          if (current === value) {
            return this;
          }
          this._attributes[key] = value;
          if (!silent) {
            if (typeof current === "undefined") {
              InkEmitter_1.default.emit("attribute-create", { element: this, key, value });
            } else {
              InkEmitter_1.default.emit("attribute-update", {
                element: this,
                key,
                value,
                previous: current
              });
            }
          }
          return this;
        }
        setAttributes(attributes, silent = false) {
          for (const [key, value] of Object.entries(attributes)) {
            this.setAttribute(key, value, silent);
          }
          const names = Object.keys(attributes);
          for (const key of Object.keys(this._attributes)) {
            if (!names.includes(key)) {
              this.removeAttribute(key, silent);
            }
          }
          return this;
        }
        tree(attributes, name, value) {
          if (!attributes) {
            attributes = Object.assign({}, this._attributes);
          }
          if (name) {
            const path = name.split("-");
            if (path.length > 0) {
              const key = path.shift();
              if (path.length > 0) {
                if (!attributes[key])
                  attributes[key] = {};
                this.tree(attributes[key], path.join("-"), value);
              } else {
                attributes[key] = value;
              }
            }
            return attributes;
          }
          const branch = {};
          for (const [name2, value2] of Object.entries(attributes)) {
            this.tree(branch, name2, value2);
          }
          return branch;
        }
      };
      exports.default = InkElement;
    }
  });

  // ../ink/dist/client/InkRegistry.js
  var require_InkRegistry = __commonJS({
    "../ink/dist/client/InkRegistry.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var InkElement_1 = __importDefault(require_InkElement());
      var decoder = document.createElement("textarea");
      var decode = (value) => {
        decoder.innerHTML = value;
        return decoder.value;
      };
      var InkRegistry14 = class _InkRegistry {
        static get elements() {
          return this._elements;
        }
        static createComponent(tagname, definition, attributes = {}, children7 = []) {
          const { registered } = definition;
          if (!registered) {
            return this.createVirtualComponent(tagname, definition, attributes, children7);
          }
          const component = document.createElement(registered);
          customElements.upgrade(component);
          const element = _InkRegistry.register(component, attributes);
          element.setAttributes(attributes, true);
          for (const [name, value] of Object.entries(attributes)) {
            if (typeof value === "string") {
              component.setAttribute(name, value);
            } else if (value === true) {
              component.setAttribute(name, "");
            }
          }
          this._cleanChildren(children7).forEach((child) => component.appendChild(child));
          return element;
        }
        static createElement(name, attributes = {}, children7 = []) {
          const element = document.createElement(name);
          for (const [name2, value] of Object.entries(attributes)) {
            if (typeof value === "string") {
              element.setAttribute(name2, value);
            } else if (value === true) {
              element.setAttribute(name2, "");
            }
          }
          this._cleanChildren(children7).forEach((child) => element.appendChild(child));
          return this.register(element, attributes);
        }
        static createText(value, escape = true) {
          return document.createTextNode(decode(value));
        }
        static createVirtualComponent(tagname, definition, attributes = {}, children7 = []) {
          const component = document.createElement(tagname);
          Object.setPrototypeOf(component, definition.prototype);
          component.constructor = definition.constructor;
          component.constructor.component = definition.component;
          if (definition.observedAttributes) {
            component.constructor.observedAttributes = definition.observedAttributes;
          }
          component.register(attributes, children7);
          return component.element;
        }
        static cloneElement(node, andChildren = false) {
          const element = this.register(node);
          const clone = element.clone();
          if (andChildren) {
            element.element.childNodes.forEach((child) => {
              if (child instanceof Text) {
                clone.element.appendChild(child.cloneNode());
                return;
              }
              const cloneChild = this.cloneElement(child, true);
              clone.element.appendChild(cloneChild.element);
            });
          }
          return clone;
        }
        static filter(callback) {
          const elements = [];
          this._elements.forEach((ink, html) => {
            if (callback(ink, html)) {
              elements.push(ink);
            }
          });
          return elements;
        }
        static get(element) {
          return this._elements.get(element) || null;
        }
        static has(element) {
          return this._elements.has(element);
        }
        static map(callback) {
          const elements = [];
          this._elements.forEach((ink, html) => {
            elements.push(callback(ink, html));
          });
          return elements;
        }
        static register(element, attributes, andChildren = false) {
          if (this.has(element)) {
            return this.get(element);
          }
          if (!attributes) {
            Array.from(element.attributes).forEach((attribute) => {
              attributes = attributes || {};
              attributes[attribute.name] = attribute.value !== "" ? attribute.value : true;
            });
          }
          const node = new InkElement_1.default(element, attributes || {});
          this._elements.set(element, node);
          if (andChildren) {
            Array.from(element.children).forEach((child) => {
              if (child instanceof Element) {
                this.register(child, void 0, true);
              }
            });
          }
          return node;
        }
        static _cleanChildren(children7) {
          return Array.from(children7).filter((child) => typeof child !== "undefined").map((child) => typeof child === "string" ? this.createText(child) : child instanceof InkElement_1.default ? child.element : child);
        }
      };
      InkRegistry14._elements = /* @__PURE__ */ new Map();
      exports.default = InkRegistry14;
    }
  });

  // ../ink/dist/client/data.js
  var require_data = __commonJS({
    "../ink/dist/client/data.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.InkDataMap = void 0;
      var InkDataMap = class {
        constructor() {
          if (!window.__APP_DATA__) {
            window.__APP_DATA__ = {};
          }
        }
        clear() {
          window.__APP_DATA__ = {};
          return this;
        }
        delete(key) {
          if (this.has(key)) {
            delete window.__APP_DATA__[key];
            return true;
          }
          return false;
        }
        entries() {
          return Object.entries(window.__APP_DATA__);
        }
        has(key) {
          return key in window.__APP_DATA__;
        }
        get(key) {
          return window.__APP_DATA__[key];
        }
        keys() {
          return Object.keys(window.__APP_DATA__);
        }
        set(key, value) {
          window.__APP_DATA__[key] = value;
          return this;
        }
        values() {
          return Object.values(window.__APP_DATA__);
        }
      };
      exports.InkDataMap = InkDataMap;
      var data2 = new InkDataMap();
      exports.default = data2;
    }
  });

  // ../ink/dist/client/InkComponent.js
  var require_InkComponent = __commonJS({
    "../ink/dist/client/InkComponent.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var Exception_1 = __importDefault(require_Exception());
      var InkElement_1 = __importDefault(require_InkElement());
      var InkRegistry_1 = __importDefault(require_InkRegistry());
      var InkEmitter_1 = __importDefault(require_InkEmitter());
      var data_1 = __importDefault(require_data());
      var InkComponent13 = class _InkComponent extends HTMLElement {
        static get registered() {
          return customElements.getName(this);
        }
        static register() {
          customElements.define(this.component[0], this);
        }
        get attr() {
          return Object.fromEntries(Array.from(this.attributes).map((attr) => [attr.name, attr.value]));
        }
        get element() {
          if (!InkRegistry_1.default.has(this)) {
            throw Exception_1.default.for("Component %s not mapped.", this.metadata.classname);
          }
          return InkRegistry_1.default.get(this);
        }
        get metadata() {
          const { component, registered, observedAttributes: observed = [] } = this.constructor;
          const [tagname, classname] = component;
          return {
            tagname,
            classname,
            registered,
            observed
          };
        }
        get originalChildren() {
          return this._children;
        }
        get initiated() {
          return this._initiated;
        }
        get props() {
          return this.getAttributes();
        }
        get propsCamel() {
          return this.element.camel();
        }
        get propsTree() {
          return this.element.tree();
        }
        get virtual() {
          return this._virtual;
        }
        set props(props4) {
          this.setAttributes(props4);
        }
        set originalChildren(children7) {
          if (typeof this._children === "undefined") {
            this._children = this._cleanChildren(children7 || []);
          }
        }
        constructor() {
          super();
          this._children = void 0;
          this._initiated = false;
          this._observer = null;
          this._rendering = false;
          this._template = null;
          this._virtual = false;
          if (!InkRegistry_1.default.has(this)) {
            const { registered } = this.metadata;
            if (!registered) {
              throw Exception_1.default.for("Component %s not registered in customElements.", this.metadata.classname);
            }
            const attributes = Object.fromEntries(Array.from(this.attributes).map((attr) => [attr.name, attr.value !== "" ? attr.value : true]));
            InkRegistry_1.default.register(this, attributes);
          }
        }
        adoptedCallback() {
          this.render();
          this.emit("adopt", this);
        }
        attributeChangedCallback(name, prev, next) {
          if (this._rendering) {
            return;
          }
          const action = prev === null ? "add" : next === null ? "remove" : "update";
          if (next === null && this.hasAttribute(name)) {
            this.element.removeAttribute(name);
          } else if (next === "") {
            this.element.setAttribute(name, true);
          } else {
            this.element.setAttribute(name, next);
          }
          this.emit("attributechange", { action, name, prev, value: next, target: this });
        }
        clone(andChildren = false) {
          return this.cloneElement(this, andChildren);
        }
        cloneElement(element, andChildren = false) {
          return InkRegistry_1.default.cloneElement(element, andChildren);
        }
        connectedCallback() {
          this.wait();
          this.emit("connect", this);
        }
        createComponent(tagname, definition, attributes = {}, children7 = []) {
          return InkRegistry_1.default.createComponent(tagname, definition, attributes, children7);
        }
        createElement(name, attributes = {}, children7 = []) {
          return InkRegistry_1.default.createElement(name, attributes, children7);
        }
        disconnectedCallback() {
          this.emit("disconnect", this);
        }
        emit(event, detail) {
          this.dispatchEvent(new CustomEvent(event, { detail }));
          return this;
        }
        getAttribute(name) {
          return this.element.getAttribute(name);
        }
        getAttributes() {
          return Object.assign({}, this.element.attributes);
        }
        getChildren(type = true) {
          if (type === true) {
            return Array.from(this.childNodes);
          } else if (type === false) {
            return this._children;
          } else if (type === null && this.shadowRoot) {
            return Array.from(this.shadowRoot.childNodes);
          }
          return [];
        }
        getElement(element) {
          return InkRegistry_1.default.get(element);
        }
        getParentComponent() {
          let parent = this.parentElement;
          while (parent) {
            if (parent instanceof _InkComponent) {
              return parent;
            }
            parent = parent.parentElement;
          }
          return null;
        }
        hasAttribute(name) {
          return this.element.hasAttribute(name);
        }
        on(event, callback) {
          this.removeEventListener(event, callback);
          this.addEventListener(event, callback);
          return this;
        }
        once(event, callback) {
          const unbinder = (e) => {
            this.removeEventListener(event, callback);
            callback(e);
          };
          this.on(event, unbinder);
          return this;
        }
        register(attributes = {}, children7 = []) {
          if (InkRegistry_1.default.has(this)) {
            const element = InkRegistry_1.default.get(this);
            element.setAttributes(attributes);
          } else {
            InkRegistry_1.default.register(this, attributes);
          }
          for (const [name, value] of Object.entries(attributes)) {
            if (typeof value === "string" || value === true) {
              super.setAttribute(name, value === "" || value === name || value === true ? true : value);
            }
          }
          this._children = this._cleanChildren(children7);
          this._children.forEach((child) => this.appendChild(child));
          this._virtual = true;
          this.connectedCallback();
        }
        removeAttribute(name) {
          const prev = this.getAttribute(name);
          if (this.hasAttribute(name)) {
            this.element.removeAttribute(name);
          }
          if (super.hasAttribute(name)) {
            super.removeAttribute(name);
          }
          if (this._virtual && this.metadata.observed.includes(name)) {
            this.attributeChangedCallback(name, prev, null);
          }
        }
        render() {
          const parent = this.getParentComponent();
          if (parent && !parent.initiated) {
            return;
          } else if (this._rendering) {
            return;
          }
          this._rendering = true;
          const prev = data_1.default.get("current");
          data_1.default.set("current", this);
          if (!this._template) {
            this._template = this.template();
          } else {
            InkEmitter_1.default.emit("unmounted", this);
          }
          const children7 = this._template().filter(Boolean);
          const styles = this.styles();
          const mode = styles.length === 0 ? "light" : "shadow";
          const { light, shadow } = this._getChildren(children7, mode);
          if (shadow.length === 0) {
            this.textContent = "";
            light.forEach((child) => this.appendChild(child));
          } else {
            if (!this.shadowRoot) {
              this.attachShadow({ mode: "open", delegatesFocus: true });
            }
            const style = document.createElement("style");
            style.innerText = styles;
            const shadowRoot = this.shadowRoot;
            shadowRoot.textContent = "";
            shadowRoot.appendChild(style);
            shadow.forEach((child) => shadowRoot.appendChild(child));
            if (light.length) {
              this.textContent = "";
              light.forEach((child) => this.appendChild(child));
            }
          }
          if (prev) {
            data_1.default.set("current", prev);
          } else {
            data_1.default.delete("current");
          }
          this._initiated = true;
          this._rendering = false;
          InkEmitter_1.default.emit("mounted", this);
          return this.shadowRoot ? this.shadowRoot.innerHTML : this.innerHTML;
        }
        setAttribute(name, value) {
          const prev = this.getAttribute(name);
          if (value === "" || value === true) {
            this.element.setAttribute(name, true);
            super.setAttribute(name, "");
          } else if (value === false) {
            this.element.setAttribute(name, value);
            super.removeAttribute(name);
          } else if (typeof value === "string") {
            this.element.setAttribute(name, value);
            super.setAttribute(name, value);
          } else {
            this.element.setAttribute(name, value);
          }
          if (this._virtual && this.metadata.observed.includes(name) && typeof value === "string") {
            this.attributeChangedCallback(name, prev, value);
          }
        }
        setAttributes(attributes) {
          Object.entries(attributes).forEach(([key, value]) => this.setAttribute(key, value));
        }
        unbind(event, callback) {
          this.removeEventListener(event, callback);
          return this;
        }
        wait() {
          if (document.readyState !== "loading") {
            this._update();
          } else {
            const next = () => {
              this._update();
              InkEmitter_1.default.unbind("ready", next);
            };
            InkEmitter_1.default.on("ready", next);
          }
        }
        _cleanChildren(children7) {
          return Array.from(children7).filter((child) => typeof child !== "undefined").map((child) => typeof child === "string" ? InkRegistry_1.default.createText(child) : child instanceof InkElement_1.default ? child.element : child);
        }
        _getChildren(children7, mode) {
          const anyNodes = this._getTemplateNodes(children7);
          const lightNodes = this._getTemplateNodes(children7, "light");
          const shadowNodes = this._getTemplateNodes(children7, "shadow");
          const defaultNodes = anyNodes.length > 0 ? anyNodes : children7;
          return {
            light: lightNodes.length > 0 ? lightNodes : mode === "light" ? defaultNodes : [],
            shadow: shadowNodes.length > 0 ? shadowNodes : mode === "shadow" ? defaultNodes : []
          };
        }
        _getTemplateNodes(children7, type) {
          const template = children7.find((child) => this._isTemplate(child, type));
          if (!template)
            return [];
          return Array.from(template.childNodes || []);
        }
        _isTemplate(child, type) {
          if (child.nodeName !== "TEMPLATE")
            return false;
          const template = child;
          if (!type)
            return !template.hasAttribute("type");
          return type === template.getAttribute("type");
        }
        _toNodeList(value) {
          if (value instanceof Node) {
            return [value];
          }
          if (Array.isArray(value)) {
            if (value.every((item) => item instanceof Node)) {
              return value;
            }
          }
          return [InkRegistry_1.default.createText(String(value))];
        }
        _update() {
          if (typeof this._children === "undefined") {
            this._children = this._cleanChildren(Array.from(this.childNodes || []));
          }
          if (!this._initiated) {
            this.render();
          }
        }
      };
      exports.default = InkComponent13;
    }
  });

  // ../ink/dist/style/StyleMap.js
  var require_StyleMap = __commonJS({
    "../ink/dist/style/StyleMap.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.stylemap = stylemap;
      function stylemap(styles = {}) {
        return new StyleMap(Object.entries(styles));
      }
      var StyleMap = class _StyleMap extends Map {
        add(property, values) {
          if (!this.has(property)) {
            this.set(property, []);
          }
          const styles = this.get(property);
          if (typeof values === "string" || typeof values === "number") {
            styles.push(values);
          } else if (Array.isArray(values)) {
            styles.push(...values);
          }
          return this;
        }
        clone() {
          const stylemap2 = new _StyleMap();
          for (const [key, values] of this.entries()) {
            stylemap2.set(key, values.slice());
          }
          return stylemap2;
        }
        replaceAll(search, replace) {
          for (const [key, values] of this.entries()) {
            this.set(key, values.map((value) => {
              if (typeof value === "string") {
                return value.replaceAll(search, replace);
              }
              return value;
            }));
          }
          return this;
        }
      };
      exports.default = StyleMap;
    }
  });

  // ../ink/dist/style/StyleSet.js
  var require_StyleSet = __commonJS({
    "../ink/dist/style/StyleSet.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.styleset = styleset;
      var StyleMap_1 = __importDefault(require_StyleMap());
      function styleset(styles = {}) {
        return new StyleSet4(Object.entries(styles));
      }
      var StyleSet4 = class extends Map {
        add(selector, property, values) {
          if (!this.has(selector)) {
            this.set(selector, new StyleMap_1.default());
          }
          const styles = this.get(selector);
          if (typeof values === "string") {
            styles.set(property, values.split(" "));
          } else if (Array.isArray(values)) {
            styles.set(property, values);
          }
          return this;
        }
        map(selector, map) {
          this.set(selector, map);
          return this;
        }
        toString() {
          const styleset2 = [];
          for (const [selector, styles] of this.entries()) {
            const definitions = [];
            for (const [property, values] of styles.entries()) {
              if (property && (values === null || values === void 0 ? void 0 : values.length)) {
                definitions.push(`${property}:${values.join(" ")}`);
              }
            }
            if (definitions.length) {
              styleset2.push(`${selector}{${definitions.join(";")}}`);
            }
          }
          return styleset2.join("");
        }
      };
      exports.default = StyleSet4;
    }
  });

  // ../ink-ui/utilities/style/color.js
  var require_color = __commonJS({
    "../ink-ui/utilities/style/color.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.default = color;
      function color(props4, styles, initial = false, selector = ":host", property = "color") {
        const { color: color2, white, black, info, warning, success, error, muted, primary, secondary, theme } = props4;
        const style = color2 ? color2 : theme ? `var(--${theme})` : white ? "var(--white)" : black ? "var(--black)" : info ? "var(--info)" : warning ? "var(--warning)" : success ? "var(--success)" : error ? "var(--error)" : muted ? "var(--muted)" : primary ? "var(--primary)" : secondary ? "var(--secondary)" : initial;
        if (style) {
          styles.add(selector, property, style);
        }
        return color2 ? "color" : white ? "white" : black ? "black" : info ? "info" : warning ? "warning" : success ? "success" : error ? "error" : muted ? "muted" : primary ? "primary" : secondary ? "secondary" : "initial";
      }
    }
  });

  // ../ink-ui/utilities/style/curve.js
  var require_curve = __commonJS({
    "../ink-ui/utilities/style/curve.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.default = curve;
      function curve(props4, styles, initial = false, selector = ":host") {
        const { curve: curve2, curved, rounded, pill } = props4;
        const style = curve2 ? `${curve2}px` : curved ? "4px" : rounded ? "12px" : pill ? "10000px" : initial;
        if (style) {
          styles.add(selector, "border-radius", style);
          styles.add(selector, "overflow", "hidden");
        }
        return curve2 ? "curve" : curved ? "curved" : rounded ? "rounded" : pill ? "pill" : "initial";
      }
    }
  });

  // ../ink-ui/utilities/style/display.js
  var require_display = __commonJS({
    "../ink-ui/utilities/style/display.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.default = display;
      function display(props4, styles, initial = false, selector = ":host") {
        const { flex, none, inline, block, "inline-block": iblock, "inline-flex": iflex } = props4;
        const style = flex ? "flex" : none ? "none" : block ? "block" : inline ? "inline" : iflex ? "inline-flex" : iblock ? "inline-block" : initial;
        if (style) {
          styles.add(selector, "display", style);
        }
        return style || "initial";
      }
    }
  });

  // ../ink-ui/utilities/style/size.js
  var require_size = __commonJS({
    "../ink-ui/utilities/style/size.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.default = size;
      function size(props4, styles, initial = false, selector = ":host", property = "font-size") {
        const { size: size2, xs, sm, md, lg, xl, xl2, xl3, xl4, xl5 } = props4;
        const style = size2 ? `${size2}px` : xs ? "8px" : sm ? "12px" : md ? "16px" : lg ? "20px" : xl ? "24px" : xl2 ? "28px" : xl3 ? "32px" : xl4 ? "36px" : xl5 ? "40px" : initial;
        if (style) {
          styles.add(selector, property, style);
        }
        return size2 ? "size" : xs ? "xs" : sm ? "sm" : md ? "md" : lg ? "lg" : xl ? "xl" : xl2 ? "xl2" : xl3 ? "xl3" : xl4 ? "xl4" : xl5 ? "xl5" : "initial";
      }
    }
  });

  // ../ink/dist/client/InkField.js
  var require_InkField = __commonJS({
    "../ink/dist/client/InkField.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var InkComponent_1 = __importDefault(require_InkComponent());
      var InkField = class extends InkComponent_1.default {
        get field() {
          return this._field;
        }
        constructor() {
          super();
          this._field = this.attachInternals();
        }
        formAssociatedCallback(form) {
          this.emit("formassociate", this);
        }
        formDisabledCallback(disabled) {
          this.emit("formdisable", this);
        }
        formResetCallback() {
          this.emit("formreset", this);
        }
      };
      InkField.formAssociated = true;
      exports.default = InkField;
    }
  });

  // ../ink/dist/client/component.js
  var require_component = __commonJS({
    "../ink/dist/client/component.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.default = component;
      var Exception_1 = __importDefault(require_Exception());
      var data_1 = __importDefault(require_data());
      function component(component2 = null, nullable = false) {
        if (!component2) {
          component2 = data_1.default.get("current");
          if (!component2) {
            if (!nullable) {
              throw Exception_1.default.for("Not called within a Ink component");
            }
            return null;
          }
        }
        return component2;
      }
    }
  });

  // ../ink/dist/client/env.js
  var require_env = __commonJS({
    "../ink/dist/client/env.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var data_1 = __importDefault(require_data());
      function env(name) {
        const env2 = data_1.default.get("env") || {};
        if (name) {
          return env2[name] || null;
        }
        return env2;
      }
      exports.default = env;
    }
  });

  // ../ink/dist/client/props.js
  var require_props = __commonJS({
    "../ink/dist/client/props.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.default = props4;
      var component_1 = __importDefault(require_component());
      var data_1 = __importDefault(require_data());
      function props4(pointer = null) {
        const component = (0, component_1.default)(pointer, true);
        if (typeof component === "string") {
          return data_1.default.get("props") || {};
        }
        return component ? component.props : {};
      }
    }
  });

  // ../ink/dist/client/classnames.js
  var require_classnames = __commonJS({
    "../ink/dist/client/classnames.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.classlist = classlist6;
      exports.default = classnames;
      var component_1 = __importDefault(require_component());
      var props_1 = __importDefault(require_props());
      function classlist6(pointer = null) {
        var _a;
        if (pointer === "body") {
          return document.body.classList;
        } else if (pointer === "head") {
          return document.head.classList;
        } else if (pointer === "document") {
          return (_a = document.body.parentElement) === null || _a === void 0 ? void 0 : _a.classList;
        }
        const component = (0, component_1.default)(pointer);
        return component === null || component === void 0 ? void 0 : component.classList;
      }
      function classnames(pointer = null) {
        return (0, props_1.default)(pointer)["class"] || "";
      }
    }
  });

  // ../ink/dist/client/children.js
  var require_children = __commonJS({
    "../ink/dist/client/children.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.innerHTML = innerHTML;
      exports.innerText = innerText;
      exports.default = children7;
      var component_1 = __importDefault(require_component());
      function innerHTML(pointer = null) {
        const inner = children7(pointer);
        const wrapper = document.createElement("template");
        wrapper.append(...inner.map((child) => child.cloneNode(true)));
        return wrapper.innerHTML;
      }
      function innerText(pointer = null) {
        const inner = children7(pointer);
        const wrapper = document.createElement("template");
        wrapper.append(...inner.map((child) => child.cloneNode(true)));
        return wrapper.innerText;
      }
      function children7(pointer = null) {
        const component = (0, component_1.default)(pointer, true);
        return typeof component !== "string" && component ? component.originalChildren || [] : [];
      }
    }
  });

  // ../ink/dist/client/signal.js
  var require_signal = __commonJS({
    "../ink/dist/client/signal.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.SignalRegistry = void 0;
      exports.default = signal2;
      var component_1 = __importDefault(require_component());
      var Exception_1 = __importDefault(require_Exception());
      var SignalRegistry = class _SignalRegistry {
        static observe(component, value) {
          const methods = {
            getter: () => property.raw,
            setter: (value2) => value2
          };
          const listeners = /* @__PURE__ */ new Set();
          const property = {
            raw: value,
            change(callback) {
              listeners.add(callback);
              return property;
            },
            getter(callback) {
              methods.getter = callback;
              return property;
            },
            setter(callback) {
              methods.setter = callback;
              return property;
            }
          };
          Object.defineProperty(property, "value", {
            get() {
              return methods.getter();
            },
            set(value2) {
              const formatted = methods.setter(value2);
              const rerender = _SignalRegistry.serialize(formatted) !== _SignalRegistry.serialize(property.raw);
              property.raw = formatted;
              if (rerender) {
                listeners.forEach((listener) => listener(formatted));
                component.render();
              }
            }
          });
          const observer = this._observers.get(component);
          if (!observer) {
            this._observers.set(component, {
              observed: 1,
              values: [property]
            });
          } else {
            observer.observed++;
            observer.values.push(property);
          }
          return property;
        }
        static observer(component) {
          return this._observers.get(component) || null;
        }
        static serialize(value) {
          return JSON.stringify(value);
        }
      };
      exports.SignalRegistry = SignalRegistry;
      SignalRegistry._observers = /* @__PURE__ */ new Map();
      function signal2(value, pointer = null) {
        const component = (0, component_1.default)(pointer);
        if (!component.initiated) {
          return SignalRegistry.observe(component, value);
        }
        const observer = SignalRegistry.observer(component);
        if (!observer) {
          throw Exception_1.default.for("Signal state mismatch");
        }
        const values = observer.values;
        return values[observer.observed++ % observer.values.length];
      }
    }
  });

  // ../ink/dist/style/StyleSheet.js
  var require_StyleSheet = __commonJS({
    "../ink/dist/style/StyleSheet.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.breakpoints = void 0;
      exports.stylesheet = stylesheet;
      var StyleSet_1 = __importDefault(require_StyleSet());
      exports.breakpoints = {
        all: 0,
        xl4: 1920,
        xl3: 1536,
        xl2: 1280,
        xl: 1024,
        lg: 992,
        md: 767,
        sm: 420,
        xs: 360
      };
      function stylesheet() {
        return new StyleSheet();
      }
      var StyleSheet = class extends Map {
        add(media, selector, property, values) {
          if (!this.has(media)) {
            this.set(media, new StyleSet_1.default());
          }
          const styleset = this.get(media);
          styleset.add(selector, property, values);
          return this;
        }
        map(media, selector, map) {
          if (!this.has(media)) {
            this.set(media, new StyleSet_1.default());
          }
          const styleset = this.get(media);
          styleset.map(selector, map);
          return this;
        }
        toString() {
          var _a;
          const stylesheet2 = [];
          for (const [media, breakpoint] of Object.entries(exports.breakpoints)) {
            const styles = (_a = this.get(media)) === null || _a === void 0 ? void 0 : _a.toString();
            if (!styles) {
              continue;
            }
            if (media === "all") {
              stylesheet2.push(styles);
              continue;
            }
            stylesheet2.push(`@media (max-width:${breakpoint}px){${styles}}`);
          }
          return stylesheet2.join("");
        }
      };
      exports.default = StyleSheet;
    }
  });

  // ../ink/dist/client.js
  var require_client = __commonJS({
    "../ink/dist/client.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k];
          } };
        }
        Object.defineProperty(o, k2, desc);
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.StyleSheet = exports.StyleSet = exports.StyleMap = exports.stylesheet = exports.styleset = exports.stylemap = exports.breakpoints = exports.SignalRegistry = exports.InkException = exports.InkEmitter = exports.InkElement = exports.InkRegistry = exports.InkComponent = exports.InkField = exports.InkDataMap = exports.emitter = exports.signal = exports.innerHTML = exports.innerText = exports.children = exports.classnames = exports.classlist = exports.props = exports.env = exports.data = exports.component = void 0;
      var Exception_1 = __importDefault(require_Exception());
      exports.InkException = Exception_1.default;
      var InkField_1 = __importDefault(require_InkField());
      exports.InkField = InkField_1.default;
      var InkComponent_1 = __importDefault(require_InkComponent());
      exports.InkComponent = InkComponent_1.default;
      var InkRegistry_1 = __importDefault(require_InkRegistry());
      exports.InkRegistry = InkRegistry_1.default;
      var InkElement_1 = __importDefault(require_InkElement());
      exports.InkElement = InkElement_1.default;
      var InkEmitter_1 = __importStar(require_InkEmitter());
      exports.emitter = InkEmitter_1.default;
      Object.defineProperty(exports, "InkEmitter", { enumerable: true, get: function() {
        return InkEmitter_1.InkEmitter;
      } });
      var component_1 = __importDefault(require_component());
      exports.component = component_1.default;
      var data_1 = __importStar(require_data());
      exports.data = data_1.default;
      Object.defineProperty(exports, "InkDataMap", { enumerable: true, get: function() {
        return data_1.InkDataMap;
      } });
      var env_1 = __importDefault(require_env());
      exports.env = env_1.default;
      var props_1 = __importDefault(require_props());
      exports.props = props_1.default;
      var classnames_1 = __importStar(require_classnames());
      exports.classnames = classnames_1.default;
      Object.defineProperty(exports, "classlist", { enumerable: true, get: function() {
        return classnames_1.classlist;
      } });
      var children_1 = __importStar(require_children());
      exports.children = children_1.default;
      Object.defineProperty(exports, "innerHTML", { enumerable: true, get: function() {
        return children_1.innerHTML;
      } });
      Object.defineProperty(exports, "innerText", { enumerable: true, get: function() {
        return children_1.innerText;
      } });
      var signal_1 = __importStar(require_signal());
      exports.signal = signal_1.default;
      Object.defineProperty(exports, "SignalRegistry", { enumerable: true, get: function() {
        return signal_1.SignalRegistry;
      } });
      var StyleMap_1 = __importStar(require_StyleMap());
      exports.StyleMap = StyleMap_1.default;
      Object.defineProperty(exports, "stylemap", { enumerable: true, get: function() {
        return StyleMap_1.stylemap;
      } });
      var StyleSet_1 = __importStar(require_StyleSet());
      exports.StyleSet = StyleSet_1.default;
      Object.defineProperty(exports, "styleset", { enumerable: true, get: function() {
        return StyleSet_1.styleset;
      } });
      var StyleSheet_1 = __importStar(require_StyleSheet());
      exports.StyleSheet = StyleSheet_1.default;
      Object.defineProperty(exports, "stylesheet", { enumerable: true, get: function() {
        return StyleSheet_1.stylesheet;
      } });
      Object.defineProperty(exports, "breakpoints", { enumerable: true, get: function() {
        return StyleSheet_1.breakpoints;
      } });
    }
  });

  // ../ink/index.js
  var require_ink = __commonJS({
    "../ink/index.js"(exports, module) {
      module.exports = { ...require_client() };
    }
  });

  // ../../node_modules/prismjs/prism.js
  var require_prism = __commonJS({
    "../../node_modules/prismjs/prism.js"(exports, module) {
      var _self = typeof window !== "undefined" ? window : typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope ? self : {};
      var Prism2 = function(_self2) {
        var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
        var uniqueId = 0;
        var plainTextGrammar = {};
        var _2 = {
          /**
           * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
           * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
           * additional languages or plugins yourself.
           *
           * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
           *
           * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
           * empty Prism object into the global scope before loading the Prism script like this:
           *
           * ```js
           * window.Prism = window.Prism || {};
           * Prism.manual = true;
           * // add a new <script> to load Prism's script
           * ```
           *
           * @default false
           * @type {boolean}
           * @memberof Prism
           * @public
           */
          manual: _self2.Prism && _self2.Prism.manual,
          /**
           * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
           * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
           * own worker, you don't want it to do this.
           *
           * By setting this value to `true`, Prism will not add its own listeners to the worker.
           *
           * You obviously have to change this value before Prism executes. To do this, you can add an
           * empty Prism object into the global scope before loading the Prism script like this:
           *
           * ```js
           * window.Prism = window.Prism || {};
           * Prism.disableWorkerMessageHandler = true;
           * // Load Prism's script
           * ```
           *
           * @default false
           * @type {boolean}
           * @memberof Prism
           * @public
           */
          disableWorkerMessageHandler: _self2.Prism && _self2.Prism.disableWorkerMessageHandler,
          /**
           * A namespace for utility methods.
           *
           * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
           * change or disappear at any time.
           *
           * @namespace
           * @memberof Prism
           */
          util: {
            encode: function encode(tokens) {
              if (tokens instanceof Token) {
                return new Token(tokens.type, encode(tokens.content), tokens.alias);
              } else if (Array.isArray(tokens)) {
                return tokens.map(encode);
              } else {
                return tokens.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
              }
            },
            /**
             * Returns the name of the type of the given value.
             *
             * @param {any} o
             * @returns {string}
             * @example
             * type(null)      === 'Null'
             * type(undefined) === 'Undefined'
             * type(123)       === 'Number'
             * type('foo')     === 'String'
             * type(true)      === 'Boolean'
             * type([1, 2])    === 'Array'
             * type({})        === 'Object'
             * type(String)    === 'Function'
             * type(/abc+/)    === 'RegExp'
             */
            type: function(o) {
              return Object.prototype.toString.call(o).slice(8, -1);
            },
            /**
             * Returns a unique number for the given object. Later calls will still return the same number.
             *
             * @param {Object} obj
             * @returns {number}
             */
            objId: function(obj) {
              if (!obj["__id"]) {
                Object.defineProperty(obj, "__id", { value: ++uniqueId });
              }
              return obj["__id"];
            },
            /**
             * Creates a deep clone of the given object.
             *
             * The main intended use of this function is to clone language definitions.
             *
             * @param {T} o
             * @param {Record<number, any>} [visited]
             * @returns {T}
             * @template T
             */
            clone: function deepClone(o, visited) {
              visited = visited || {};
              var clone;
              var id;
              switch (_2.util.type(o)) {
                case "Object":
                  id = _2.util.objId(o);
                  if (visited[id]) {
                    return visited[id];
                  }
                  clone = /** @type {Record<string, any>} */
                  {};
                  visited[id] = clone;
                  for (var key in o) {
                    if (o.hasOwnProperty(key)) {
                      clone[key] = deepClone(o[key], visited);
                    }
                  }
                  return (
                    /** @type {any} */
                    clone
                  );
                case "Array":
                  id = _2.util.objId(o);
                  if (visited[id]) {
                    return visited[id];
                  }
                  clone = [];
                  visited[id] = clone;
                  /** @type {Array} */
                  /** @type {any} */
                  o.forEach(function(v, i) {
                    clone[i] = deepClone(v, visited);
                  });
                  return (
                    /** @type {any} */
                    clone
                  );
                default:
                  return o;
              }
            },
            /**
             * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
             *
             * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
             *
             * @param {Element} element
             * @returns {string}
             */
            getLanguage: function(element) {
              while (element) {
                var m = lang.exec(element.className);
                if (m) {
                  return m[1].toLowerCase();
                }
                element = element.parentElement;
              }
              return "none";
            },
            /**
             * Sets the Prism `language-xxxx` class of the given element.
             *
             * @param {Element} element
             * @param {string} language
             * @returns {void}
             */
            setLanguage: function(element, language) {
              element.className = element.className.replace(RegExp(lang, "gi"), "");
              element.classList.add("language-" + language);
            },
            /**
             * Returns the script element that is currently executing.
             *
             * This does __not__ work for line script element.
             *
             * @returns {HTMLScriptElement | null}
             */
            currentScript: function() {
              if (typeof document === "undefined") {
                return null;
              }
              if ("currentScript" in document && 1 < 2) {
                return (
                  /** @type {any} */
                  document.currentScript
                );
              }
              try {
                throw new Error();
              } catch (err) {
                var src = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(err.stack) || [])[1];
                if (src) {
                  var scripts = document.getElementsByTagName("script");
                  for (var i in scripts) {
                    if (scripts[i].src == src) {
                      return scripts[i];
                    }
                  }
                }
                return null;
              }
            },
            /**
             * Returns whether a given class is active for `element`.
             *
             * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
             * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
             * given class is just the given class with a `no-` prefix.
             *
             * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
             * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
             * ancestors have the given class or the negated version of it, then the default activation will be returned.
             *
             * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
             * version of it, the class is considered active.
             *
             * @param {Element} element
             * @param {string} className
             * @param {boolean} [defaultActivation=false]
             * @returns {boolean}
             */
            isActive: function(element, className, defaultActivation) {
              var no = "no-" + className;
              while (element) {
                var classList = element.classList;
                if (classList.contains(className)) {
                  return true;
                }
                if (classList.contains(no)) {
                  return false;
                }
                element = element.parentElement;
              }
              return !!defaultActivation;
            }
          },
          /**
           * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
           *
           * @namespace
           * @memberof Prism
           * @public
           */
          languages: {
            /**
             * The grammar for plain, unformatted text.
             */
            plain: plainTextGrammar,
            plaintext: plainTextGrammar,
            text: plainTextGrammar,
            txt: plainTextGrammar,
            /**
             * Creates a deep copy of the language with the given id and appends the given tokens.
             *
             * If a token in `redef` also appears in the copied language, then the existing token in the copied language
             * will be overwritten at its original position.
             *
             * ## Best practices
             *
             * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
             * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
             * understand the language definition because, normally, the order of tokens matters in Prism grammars.
             *
             * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
             * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
             *
             * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
             * @param {Grammar} redef The new tokens to append.
             * @returns {Grammar} The new language created.
             * @public
             * @example
             * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
             *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
             *     // at its original position
             *     'comment': { ... },
             *     // CSS doesn't have a 'color' token, so this token will be appended
             *     'color': /\b(?:red|green|blue)\b/
             * });
             */
            extend: function(id, redef) {
              var lang2 = _2.util.clone(_2.languages[id]);
              for (var key in redef) {
                lang2[key] = redef[key];
              }
              return lang2;
            },
            /**
             * Inserts tokens _before_ another token in a language definition or any other grammar.
             *
             * ## Usage
             *
             * This helper method makes it easy to modify existing languages. For example, the CSS language definition
             * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
             * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
             * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
             * this:
             *
             * ```js
             * Prism.languages.markup.style = {
             *     // token
             * };
             * ```
             *
             * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
             * before existing tokens. For the CSS example above, you would use it like this:
             *
             * ```js
             * Prism.languages.insertBefore('markup', 'cdata', {
             *     'style': {
             *         // token
             *     }
             * });
             * ```
             *
             * ## Special cases
             *
             * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
             * will be ignored.
             *
             * This behavior can be used to insert tokens after `before`:
             *
             * ```js
             * Prism.languages.insertBefore('markup', 'comment', {
             *     'comment': Prism.languages.markup.comment,
             *     // tokens after 'comment'
             * });
             * ```
             *
             * ## Limitations
             *
             * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
             * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
             * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
             * deleting properties which is necessary to insert at arbitrary positions.
             *
             * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
             * Instead, it will create a new object and replace all references to the target object with the new one. This
             * can be done without temporarily deleting properties, so the iteration order is well-defined.
             *
             * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
             * you hold the target object in a variable, then the value of the variable will not change.
             *
             * ```js
             * var oldMarkup = Prism.languages.markup;
             * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
             *
             * assert(oldMarkup !== Prism.languages.markup);
             * assert(newMarkup === Prism.languages.markup);
             * ```
             *
             * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
             * object to be modified.
             * @param {string} before The key to insert before.
             * @param {Grammar} insert An object containing the key-value pairs to be inserted.
             * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
             * object to be modified.
             *
             * Defaults to `Prism.languages`.
             * @returns {Grammar} The new grammar object.
             * @public
             */
            insertBefore: function(inside, before, insert, root) {
              root = root || /** @type {any} */
              _2.languages;
              var grammar = root[inside];
              var ret = {};
              for (var token in grammar) {
                if (grammar.hasOwnProperty(token)) {
                  if (token == before) {
                    for (var newToken in insert) {
                      if (insert.hasOwnProperty(newToken)) {
                        ret[newToken] = insert[newToken];
                      }
                    }
                  }
                  if (!insert.hasOwnProperty(token)) {
                    ret[token] = grammar[token];
                  }
                }
              }
              var old = root[inside];
              root[inside] = ret;
              _2.languages.DFS(_2.languages, function(key, value) {
                if (value === old && key != inside) {
                  this[key] = ret;
                }
              });
              return ret;
            },
            // Traverse a language definition with Depth First Search
            DFS: function DFS(o, callback, type, visited) {
              visited = visited || {};
              var objId = _2.util.objId;
              for (var i in o) {
                if (o.hasOwnProperty(i)) {
                  callback.call(o, i, o[i], type || i);
                  var property = o[i];
                  var propertyType = _2.util.type(property);
                  if (propertyType === "Object" && !visited[objId(property)]) {
                    visited[objId(property)] = true;
                    DFS(property, callback, null, visited);
                  } else if (propertyType === "Array" && !visited[objId(property)]) {
                    visited[objId(property)] = true;
                    DFS(property, callback, i, visited);
                  }
                }
              }
            }
          },
          plugins: {},
          /**
           * This is the most high-level function in Prism’s API.
           * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
           * each one of them.
           *
           * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
           *
           * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
           * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
           * @memberof Prism
           * @public
           */
          highlightAll: function(async, callback) {
            _2.highlightAllUnder(document, async, callback);
          },
          /**
           * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
           * {@link Prism.highlightElement} on each one of them.
           *
           * The following hooks will be run:
           * 1. `before-highlightall`
           * 2. `before-all-elements-highlight`
           * 3. All hooks of {@link Prism.highlightElement} for each element.
           *
           * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
           * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
           * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
           * @memberof Prism
           * @public
           */
          highlightAllUnder: function(container, async, callback) {
            var env = {
              callback,
              container,
              selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
            };
            _2.hooks.run("before-highlightall", env);
            env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));
            _2.hooks.run("before-all-elements-highlight", env);
            for (var i = 0, element; element = env.elements[i++]; ) {
              _2.highlightElement(element, async === true, env.callback);
            }
          },
          /**
           * Highlights the code inside a single element.
           *
           * The following hooks will be run:
           * 1. `before-sanity-check`
           * 2. `before-highlight`
           * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
           * 4. `before-insert`
           * 5. `after-highlight`
           * 6. `complete`
           *
           * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
           * the element's language.
           *
           * @param {Element} element The element containing the code.
           * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
           * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
           * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
           * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
           *
           * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
           * asynchronous highlighting to work. You can build your own bundle on the
           * [Download page](https://prismjs.com/download.html).
           * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
           * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
           * @memberof Prism
           * @public
           */
          highlightElement: function(element, async, callback) {
            var language = _2.util.getLanguage(element);
            var grammar = _2.languages[language];
            _2.util.setLanguage(element, language);
            var parent = element.parentElement;
            if (parent && parent.nodeName.toLowerCase() === "pre") {
              _2.util.setLanguage(parent, language);
            }
            var code = element.textContent;
            var env = {
              element,
              language,
              grammar,
              code
            };
            function insertHighlightedCode(highlightedCode) {
              env.highlightedCode = highlightedCode;
              _2.hooks.run("before-insert", env);
              env.element.innerHTML = env.highlightedCode;
              _2.hooks.run("after-highlight", env);
              _2.hooks.run("complete", env);
              callback && callback.call(env.element);
            }
            _2.hooks.run("before-sanity-check", env);
            parent = env.element.parentElement;
            if (parent && parent.nodeName.toLowerCase() === "pre" && !parent.hasAttribute("tabindex")) {
              parent.setAttribute("tabindex", "0");
            }
            if (!env.code) {
              _2.hooks.run("complete", env);
              callback && callback.call(env.element);
              return;
            }
            _2.hooks.run("before-highlight", env);
            if (!env.grammar) {
              insertHighlightedCode(_2.util.encode(env.code));
              return;
            }
            if (async && _self2.Worker) {
              var worker = new Worker(_2.filename);
              worker.onmessage = function(evt) {
                insertHighlightedCode(evt.data);
              };
              worker.postMessage(JSON.stringify({
                language: env.language,
                code: env.code,
                immediateClose: true
              }));
            } else {
              insertHighlightedCode(_2.highlight(env.code, env.grammar, env.language));
            }
          },
          /**
           * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
           * and the language definitions to use, and returns a string with the HTML produced.
           *
           * The following hooks will be run:
           * 1. `before-tokenize`
           * 2. `after-tokenize`
           * 3. `wrap`: On each {@link Token}.
           *
           * @param {string} text A string with the code to be highlighted.
           * @param {Grammar} grammar An object containing the tokens to use.
           *
           * Usually a language definition like `Prism.languages.markup`.
           * @param {string} language The name of the language definition passed to `grammar`.
           * @returns {string} The highlighted HTML.
           * @memberof Prism
           * @public
           * @example
           * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
           */
          highlight: function(text, grammar, language) {
            var env = {
              code: text,
              grammar,
              language
            };
            _2.hooks.run("before-tokenize", env);
            if (!env.grammar) {
              throw new Error('The language "' + env.language + '" has no grammar.');
            }
            env.tokens = _2.tokenize(env.code, env.grammar);
            _2.hooks.run("after-tokenize", env);
            return Token.stringify(_2.util.encode(env.tokens), env.language);
          },
          /**
           * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
           * and the language definitions to use, and returns an array with the tokenized code.
           *
           * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
           *
           * This method could be useful in other contexts as well, as a very crude parser.
           *
           * @param {string} text A string with the code to be highlighted.
           * @param {Grammar} grammar An object containing the tokens to use.
           *
           * Usually a language definition like `Prism.languages.markup`.
           * @returns {TokenStream} An array of strings and tokens, a token stream.
           * @memberof Prism
           * @public
           * @example
           * let code = `var foo = 0;`;
           * let tokens = Prism.tokenize(code, Prism.languages.javascript);
           * tokens.forEach(token => {
           *     if (token instanceof Prism.Token && token.type === 'number') {
           *         console.log(`Found numeric literal: ${token.content}`);
           *     }
           * });
           */
          tokenize: function(text, grammar) {
            var rest = grammar.rest;
            if (rest) {
              for (var token in rest) {
                grammar[token] = rest[token];
              }
              delete grammar.rest;
            }
            var tokenList = new LinkedList();
            addAfter(tokenList, tokenList.head, text);
            matchGrammar(text, tokenList, grammar, tokenList.head, 0);
            return toArray(tokenList);
          },
          /**
           * @namespace
           * @memberof Prism
           * @public
           */
          hooks: {
            all: {},
            /**
             * Adds the given callback to the list of callbacks for the given hook.
             *
             * The callback will be invoked when the hook it is registered for is run.
             * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
             *
             * One callback function can be registered to multiple hooks and the same hook multiple times.
             *
             * @param {string} name The name of the hook.
             * @param {HookCallback} callback The callback function which is given environment variables.
             * @public
             */
            add: function(name, callback) {
              var hooks = _2.hooks.all;
              hooks[name] = hooks[name] || [];
              hooks[name].push(callback);
            },
            /**
             * Runs a hook invoking all registered callbacks with the given environment variables.
             *
             * Callbacks will be invoked synchronously and in the order in which they were registered.
             *
             * @param {string} name The name of the hook.
             * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
             * @public
             */
            run: function(name, env) {
              var callbacks = _2.hooks.all[name];
              if (!callbacks || !callbacks.length) {
                return;
              }
              for (var i = 0, callback; callback = callbacks[i++]; ) {
                callback(env);
              }
            }
          },
          Token
        };
        _self2.Prism = _2;
        function Token(type, content, alias, matchedStr) {
          this.type = type;
          this.content = content;
          this.alias = alias;
          this.length = (matchedStr || "").length | 0;
        }
        Token.stringify = function stringify(o, language) {
          if (typeof o == "string") {
            return o;
          }
          if (Array.isArray(o)) {
            var s = "";
            o.forEach(function(e) {
              s += stringify(e, language);
            });
            return s;
          }
          var env = {
            type: o.type,
            content: stringify(o.content, language),
            tag: "span",
            classes: ["token", o.type],
            attributes: {},
            language
          };
          var aliases = o.alias;
          if (aliases) {
            if (Array.isArray(aliases)) {
              Array.prototype.push.apply(env.classes, aliases);
            } else {
              env.classes.push(aliases);
            }
          }
          _2.hooks.run("wrap", env);
          var attributes = "";
          for (var name in env.attributes) {
            attributes += " " + name + '="' + (env.attributes[name] || "").replace(/"/g, "&quot;") + '"';
          }
          return "<" + env.tag + ' class="' + env.classes.join(" ") + '"' + attributes + ">" + env.content + "</" + env.tag + ">";
        };
        function matchPattern(pattern, pos, text, lookbehind) {
          pattern.lastIndex = pos;
          var match = pattern.exec(text);
          if (match && lookbehind && match[1]) {
            var lookbehindLength = match[1].length;
            match.index += lookbehindLength;
            match[0] = match[0].slice(lookbehindLength);
          }
          return match;
        }
        function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
          for (var token in grammar) {
            if (!grammar.hasOwnProperty(token) || !grammar[token]) {
              continue;
            }
            var patterns = grammar[token];
            patterns = Array.isArray(patterns) ? patterns : [patterns];
            for (var j = 0; j < patterns.length; ++j) {
              if (rematch && rematch.cause == token + "," + j) {
                return;
              }
              var patternObj = patterns[j];
              var inside = patternObj.inside;
              var lookbehind = !!patternObj.lookbehind;
              var greedy = !!patternObj.greedy;
              var alias = patternObj.alias;
              if (greedy && !patternObj.pattern.global) {
                var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
                patternObj.pattern = RegExp(patternObj.pattern.source, flags + "g");
              }
              var pattern = patternObj.pattern || patternObj;
              for (var currentNode = startNode.next, pos = startPos; currentNode !== tokenList.tail; pos += currentNode.value.length, currentNode = currentNode.next) {
                if (rematch && pos >= rematch.reach) {
                  break;
                }
                var str = currentNode.value;
                if (tokenList.length > text.length) {
                  return;
                }
                if (str instanceof Token) {
                  continue;
                }
                var removeCount = 1;
                var match;
                if (greedy) {
                  match = matchPattern(pattern, pos, text, lookbehind);
                  if (!match || match.index >= text.length) {
                    break;
                  }
                  var from = match.index;
                  var to = match.index + match[0].length;
                  var p = pos;
                  p += currentNode.value.length;
                  while (from >= p) {
                    currentNode = currentNode.next;
                    p += currentNode.value.length;
                  }
                  p -= currentNode.value.length;
                  pos = p;
                  if (currentNode.value instanceof Token) {
                    continue;
                  }
                  for (var k = currentNode; k !== tokenList.tail && (p < to || typeof k.value === "string"); k = k.next) {
                    removeCount++;
                    p += k.value.length;
                  }
                  removeCount--;
                  str = text.slice(pos, p);
                  match.index -= pos;
                } else {
                  match = matchPattern(pattern, 0, str, lookbehind);
                  if (!match) {
                    continue;
                  }
                }
                var from = match.index;
                var matchStr = match[0];
                var before = str.slice(0, from);
                var after = str.slice(from + matchStr.length);
                var reach = pos + str.length;
                if (rematch && reach > rematch.reach) {
                  rematch.reach = reach;
                }
                var removeFrom = currentNode.prev;
                if (before) {
                  removeFrom = addAfter(tokenList, removeFrom, before);
                  pos += before.length;
                }
                removeRange(tokenList, removeFrom, removeCount);
                var wrapped = new Token(token, inside ? _2.tokenize(matchStr, inside) : matchStr, alias, matchStr);
                currentNode = addAfter(tokenList, removeFrom, wrapped);
                if (after) {
                  addAfter(tokenList, currentNode, after);
                }
                if (removeCount > 1) {
                  var nestedRematch = {
                    cause: token + "," + j,
                    reach
                  };
                  matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);
                  if (rematch && nestedRematch.reach > rematch.reach) {
                    rematch.reach = nestedRematch.reach;
                  }
                }
              }
            }
          }
        }
        function LinkedList() {
          var head = { value: null, prev: null, next: null };
          var tail = { value: null, prev: head, next: null };
          head.next = tail;
          this.head = head;
          this.tail = tail;
          this.length = 0;
        }
        function addAfter(list, node, value) {
          var next = node.next;
          var newNode = { value, prev: node, next };
          node.next = newNode;
          next.prev = newNode;
          list.length++;
          return newNode;
        }
        function removeRange(list, node, count) {
          var next = node.next;
          for (var i = 0; i < count && next !== list.tail; i++) {
            next = next.next;
          }
          node.next = next;
          next.prev = node;
          list.length -= i;
        }
        function toArray(list) {
          var array = [];
          var node = list.head.next;
          while (node !== list.tail) {
            array.push(node.value);
            node = node.next;
          }
          return array;
        }
        if (!_self2.document) {
          if (!_self2.addEventListener) {
            return _2;
          }
          if (!_2.disableWorkerMessageHandler) {
            _self2.addEventListener("message", function(evt) {
              var message = JSON.parse(evt.data);
              var lang2 = message.language;
              var code = message.code;
              var immediateClose = message.immediateClose;
              _self2.postMessage(_2.highlight(code, _2.languages[lang2], lang2));
              if (immediateClose) {
                _self2.close();
              }
            }, false);
          }
          return _2;
        }
        var script = _2.util.currentScript();
        if (script) {
          _2.filename = script.src;
          if (script.hasAttribute("data-manual")) {
            _2.manual = true;
          }
        }
        function highlightAutomaticallyCallback() {
          if (!_2.manual) {
            _2.highlightAll();
          }
        }
        if (!_2.manual) {
          var readyState = document.readyState;
          if (readyState === "loading" || readyState === "interactive" && script && script.defer) {
            document.addEventListener("DOMContentLoaded", highlightAutomaticallyCallback);
          } else {
            if (window.requestAnimationFrame) {
              window.requestAnimationFrame(highlightAutomaticallyCallback);
            } else {
              window.setTimeout(highlightAutomaticallyCallback, 16);
            }
          }
        }
        return _2;
      }(_self);
      if (typeof module !== "undefined" && module.exports) {
        module.exports = Prism2;
      }
      if (typeof global !== "undefined") {
        global.Prism = Prism2;
      }
      Prism2.languages.markup = {
        "comment": {
          pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
          greedy: true
        },
        "prolog": {
          pattern: /<\?[\s\S]+?\?>/,
          greedy: true
        },
        "doctype": {
          // https://www.w3.org/TR/xml/#NT-doctypedecl
          pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
          greedy: true,
          inside: {
            "internal-subset": {
              pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
              lookbehind: true,
              greedy: true,
              inside: null
              // see below
            },
            "string": {
              pattern: /"[^"]*"|'[^']*'/,
              greedy: true
            },
            "punctuation": /^<!|>$|[[\]]/,
            "doctype-tag": /^DOCTYPE/i,
            "name": /[^\s<>'"]+/
          }
        },
        "cdata": {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          greedy: true
        },
        "tag": {
          pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
          greedy: true,
          inside: {
            "tag": {
              pattern: /^<\/?[^\s>\/]+/,
              inside: {
                "punctuation": /^<\/?/,
                "namespace": /^[^\s>\/:]+:/
              }
            },
            "special-attr": [],
            "attr-value": {
              pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
              inside: {
                "punctuation": [
                  {
                    pattern: /^=/,
                    alias: "attr-equals"
                  },
                  {
                    pattern: /^(\s*)["']|["']$/,
                    lookbehind: true
                  }
                ]
              }
            },
            "punctuation": /\/?>/,
            "attr-name": {
              pattern: /[^\s>\/]+/,
              inside: {
                "namespace": /^[^\s>\/:]+:/
              }
            }
          }
        },
        "entity": [
          {
            pattern: /&[\da-z]{1,8};/i,
            alias: "named-entity"
          },
          /&#x?[\da-f]{1,8};/i
        ]
      };
      Prism2.languages.markup["tag"].inside["attr-value"].inside["entity"] = Prism2.languages.markup["entity"];
      Prism2.languages.markup["doctype"].inside["internal-subset"].inside = Prism2.languages.markup;
      Prism2.hooks.add("wrap", function(env) {
        if (env.type === "entity") {
          env.attributes["title"] = env.content.replace(/&amp;/, "&");
        }
      });
      Object.defineProperty(Prism2.languages.markup.tag, "addInlined", {
        /**
         * Adds an inlined language to markup.
         *
         * An example of an inlined language is CSS with `<style>` tags.
         *
         * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
         * case insensitive.
         * @param {string} lang The language key.
         * @example
         * addInlined('style', 'css');
         */
        value: function addInlined(tagName, lang) {
          var includedCdataInside = {};
          includedCdataInside["language-" + lang] = {
            pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
            lookbehind: true,
            inside: Prism2.languages[lang]
          };
          includedCdataInside["cdata"] = /^<!\[CDATA\[|\]\]>$/i;
          var inside = {
            "included-cdata": {
              pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
              inside: includedCdataInside
            }
          };
          inside["language-" + lang] = {
            pattern: /[\s\S]+/,
            inside: Prism2.languages[lang]
          };
          var def = {};
          def[tagName] = {
            pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
              return tagName;
            }), "i"),
            lookbehind: true,
            greedy: true,
            inside
          };
          Prism2.languages.insertBefore("markup", "cdata", def);
        }
      });
      Object.defineProperty(Prism2.languages.markup.tag, "addAttribute", {
        /**
         * Adds an pattern to highlight languages embedded in HTML attributes.
         *
         * An example of an inlined language is CSS with `style` attributes.
         *
         * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
         * case insensitive.
         * @param {string} lang The language key.
         * @example
         * addAttribute('style', 'css');
         */
        value: function(attrName, lang) {
          Prism2.languages.markup.tag.inside["special-attr"].push({
            pattern: RegExp(
              /(^|["'\s])/.source + "(?:" + attrName + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
              "i"
            ),
            lookbehind: true,
            inside: {
              "attr-name": /^[^\s=]+/,
              "attr-value": {
                pattern: /=[\s\S]+/,
                inside: {
                  "value": {
                    pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                    lookbehind: true,
                    alias: [lang, "language-" + lang],
                    inside: Prism2.languages[lang]
                  },
                  "punctuation": [
                    {
                      pattern: /^=/,
                      alias: "attr-equals"
                    },
                    /"|'/
                  ]
                }
              }
            }
          });
        }
      });
      Prism2.languages.html = Prism2.languages.markup;
      Prism2.languages.mathml = Prism2.languages.markup;
      Prism2.languages.svg = Prism2.languages.markup;
      Prism2.languages.xml = Prism2.languages.extend("markup", {});
      Prism2.languages.ssml = Prism2.languages.xml;
      Prism2.languages.atom = Prism2.languages.xml;
      Prism2.languages.rss = Prism2.languages.xml;
      (function(Prism3) {
        var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
        Prism3.languages.css = {
          "comment": /\/\*[\s\S]*?\*\//,
          "atrule": {
            pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + string.source + ")*?" + /(?:;|(?=\s*\{))/.source),
            inside: {
              "rule": /^@[\w-]+/,
              "selector-function-argument": {
                pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                lookbehind: true,
                alias: "selector"
              },
              "keyword": {
                pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                lookbehind: true
              }
              // See rest below
            }
          },
          "url": {
            // https://drafts.csswg.org/css-values-3/#urls
            pattern: RegExp("\\burl\\((?:" + string.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
            greedy: true,
            inside: {
              "function": /^url/i,
              "punctuation": /^\(|\)$/,
              "string": {
                pattern: RegExp("^" + string.source + "$"),
                alias: "url"
              }
            }
          },
          "selector": {
            pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + string.source + ")*(?=\\s*\\{)"),
            lookbehind: true
          },
          "string": {
            pattern: string,
            greedy: true
          },
          "property": {
            pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
            lookbehind: true
          },
          "important": /!important\b/i,
          "function": {
            pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
            lookbehind: true
          },
          "punctuation": /[(){};:,]/
        };
        Prism3.languages.css["atrule"].inside.rest = Prism3.languages.css;
        var markup = Prism3.languages.markup;
        if (markup) {
          markup.tag.addInlined("style", "css");
          markup.tag.addAttribute("style", "css");
        }
      })(Prism2);
      Prism2.languages.clike = {
        "comment": [
          {
            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
            lookbehind: true,
            greedy: true
          },
          {
            pattern: /(^|[^\\:])\/\/.*/,
            lookbehind: true,
            greedy: true
          }
        ],
        "string": {
          pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
          greedy: true
        },
        "class-name": {
          pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
          lookbehind: true,
          inside: {
            "punctuation": /[.\\]/
          }
        },
        "keyword": /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
        "boolean": /\b(?:false|true)\b/,
        "function": /\b\w+(?=\()/,
        "number": /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
        "operator": /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
        "punctuation": /[{}[\];(),.:]/
      };
      Prism2.languages.javascript = Prism2.languages.extend("clike", {
        "class-name": [
          Prism2.languages.clike["class-name"],
          {
            pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
            lookbehind: true
          }
        ],
        "keyword": [
          {
            pattern: /((?:^|\})\s*)catch\b/,
            lookbehind: true
          },
          {
            pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
            lookbehind: true
          }
        ],
        // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
        "function": /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
        "number": {
          pattern: RegExp(
            /(^|[^\w$])/.source + "(?:" + // constant
            (/NaN|Infinity/.source + "|" + // binary integer
            /0[bB][01]+(?:_[01]+)*n?/.source + "|" + // octal integer
            /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + // hexadecimal integer
            /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + // decimal bigint
            /\d+(?:_\d+)*n/.source + "|" + // decimal number (integer or float) but no bigint
            /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source
          ),
          lookbehind: true
        },
        "operator": /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
      });
      Prism2.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
      Prism2.languages.insertBefore("javascript", "keyword", {
        "regex": {
          pattern: RegExp(
            // lookbehind
            // eslint-disable-next-line regexp/no-dupe-characters-character-class
            /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + // Regex pattern:
            // There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
            // classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
            // with the only syntax, so we have to define 2 different regex patterns.
            /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + // `v` flag syntax. This supports 3 levels of nested character classes.
            /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + // lookahead
            /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
          ),
          lookbehind: true,
          greedy: true,
          inside: {
            "regex-source": {
              pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
              lookbehind: true,
              alias: "language-regex",
              inside: Prism2.languages.regex
            },
            "regex-delimiter": /^\/|\/$/,
            "regex-flags": /^[a-z]+$/
          }
        },
        // This must be declared before keyword because we use "function" inside the look-forward
        "function-variable": {
          pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
          alias: "function"
        },
        "parameter": [
          {
            pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
            lookbehind: true,
            inside: Prism2.languages.javascript
          },
          {
            pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
            lookbehind: true,
            inside: Prism2.languages.javascript
          },
          {
            pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
            lookbehind: true,
            inside: Prism2.languages.javascript
          },
          {
            pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
            lookbehind: true,
            inside: Prism2.languages.javascript
          }
        ],
        "constant": /\b[A-Z](?:[A-Z_]|\dx?)*\b/
      });
      Prism2.languages.insertBefore("javascript", "string", {
        "hashbang": {
          pattern: /^#!.*/,
          greedy: true,
          alias: "comment"
        },
        "template-string": {
          pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
          greedy: true,
          inside: {
            "template-punctuation": {
              pattern: /^`|`$/,
              alias: "string"
            },
            "interpolation": {
              pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
              lookbehind: true,
              inside: {
                "interpolation-punctuation": {
                  pattern: /^\$\{|\}$/,
                  alias: "punctuation"
                },
                rest: Prism2.languages.javascript
              }
            },
            "string": /[\s\S]+/
          }
        },
        "string-property": {
          pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
          lookbehind: true,
          greedy: true,
          alias: "property"
        }
      });
      Prism2.languages.insertBefore("javascript", "operator", {
        "literal-property": {
          pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
          lookbehind: true,
          alias: "property"
        }
      });
      if (Prism2.languages.markup) {
        Prism2.languages.markup.tag.addInlined("script", "javascript");
        Prism2.languages.markup.tag.addAttribute(
          /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
          "javascript"
        );
      }
      Prism2.languages.js = Prism2.languages.javascript;
      (function() {
        if (typeof Prism2 === "undefined" || typeof document === "undefined") {
          return;
        }
        if (!Element.prototype.matches) {
          Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
        }
        var LOADING_MESSAGE = "Loading\u2026";
        var FAILURE_MESSAGE = function(status, message) {
          return "\u2716 Error " + status + " while fetching file: " + message;
        };
        var FAILURE_EMPTY_MESSAGE = "\u2716 Error: File does not exist or is empty";
        var EXTENSIONS = {
          "js": "javascript",
          "py": "python",
          "rb": "ruby",
          "ps1": "powershell",
          "psm1": "powershell",
          "sh": "bash",
          "bat": "batch",
          "h": "c",
          "tex": "latex"
        };
        var STATUS_ATTR = "data-src-status";
        var STATUS_LOADING = "loading";
        var STATUS_LOADED = "loaded";
        var STATUS_FAILED = "failed";
        var SELECTOR = "pre[data-src]:not([" + STATUS_ATTR + '="' + STATUS_LOADED + '"]):not([' + STATUS_ATTR + '="' + STATUS_LOADING + '"])';
        function loadFile(src, success, error) {
          var xhr = new XMLHttpRequest();
          xhr.open("GET", src, true);
          xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
              if (xhr.status < 400 && xhr.responseText) {
                success(xhr.responseText);
              } else {
                if (xhr.status >= 400) {
                  error(FAILURE_MESSAGE(xhr.status, xhr.statusText));
                } else {
                  error(FAILURE_EMPTY_MESSAGE);
                }
              }
            }
          };
          xhr.send(null);
        }
        function parseRange(range) {
          var m = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(range || "");
          if (m) {
            var start = Number(m[1]);
            var comma = m[2];
            var end = m[3];
            if (!comma) {
              return [start, start];
            }
            if (!end) {
              return [start, void 0];
            }
            return [start, Number(end)];
          }
          return void 0;
        }
        Prism2.hooks.add("before-highlightall", function(env) {
          env.selector += ", " + SELECTOR;
        });
        Prism2.hooks.add("before-sanity-check", function(env) {
          var pre = (
            /** @type {HTMLPreElement} */
            env.element
          );
          if (pre.matches(SELECTOR)) {
            env.code = "";
            pre.setAttribute(STATUS_ATTR, STATUS_LOADING);
            var code = pre.appendChild(document.createElement("CODE"));
            code.textContent = LOADING_MESSAGE;
            var src = pre.getAttribute("data-src");
            var language = env.language;
            if (language === "none") {
              var extension = (/\.(\w+)$/.exec(src) || [, "none"])[1];
              language = EXTENSIONS[extension] || extension;
            }
            Prism2.util.setLanguage(code, language);
            Prism2.util.setLanguage(pre, language);
            var autoloader = Prism2.plugins.autoloader;
            if (autoloader) {
              autoloader.loadLanguages(language);
            }
            loadFile(
              src,
              function(text) {
                pre.setAttribute(STATUS_ATTR, STATUS_LOADED);
                var range = parseRange(pre.getAttribute("data-range"));
                if (range) {
                  var lines = text.split(/\r\n?|\n/g);
                  var start = range[0];
                  var end = range[1] == null ? lines.length : range[1];
                  if (start < 0) {
                    start += lines.length;
                  }
                  start = Math.max(0, Math.min(start - 1, lines.length));
                  if (end < 0) {
                    end += lines.length;
                  }
                  end = Math.max(0, Math.min(end, lines.length));
                  text = lines.slice(start, end).join("\n");
                  if (!pre.hasAttribute("data-start")) {
                    pre.setAttribute("data-start", String(start + 1));
                  }
                }
                code.textContent = text;
                Prism2.highlightElement(code);
              },
              function(error) {
                pre.setAttribute(STATUS_ATTR, STATUS_FAILED);
                code.textContent = error;
              }
            );
          }
        });
        Prism2.plugins.fileHighlight = {
          /**
           * Executes the File Highlight plugin for all matching `pre` elements under the given container.
           *
           * Note: Elements which are already loaded or currently loading will not be touched by this method.
           *
           * @param {ParentNode} [container=document]
           */
          highlight: function highlight(container) {
            var elements = (container || document).querySelectorAll(SELECTOR);
            for (var i = 0, element; element = elements[i++]; ) {
              Prism2.highlightElement(element);
            }
          }
        };
        var logged = false;
        Prism2.fileHighlight = function() {
          if (!logged) {
            console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.");
            logged = true;
          }
          Prism2.plugins.fileHighlight.highlight.apply(this, arguments);
        };
      })();
    }
  });

  // ink-document-client-resolver:/Users/cblanquera/server/projects/stackpress/ink/packages/ink-web/src/pages/docs/getting-started.ink
  var getting_started_exports = {};
  __export(getting_started_exports, {
    BUILD_ID: () => BUILD_ID,
    InkException: () => import_Exception.default,
    InkRegistry: () => import_InkRegistry13.default,
    components: () => components,
    emitter: () => import_InkEmitter.default
  });
  var import_Exception = __toESM(require_Exception());
  var import_InkRegistry13 = __toESM(require_InkRegistry());
  var import_InkEmitter = __toESM(require_InkEmitter());
  var import_data = __toESM(require_data());

  // ink-component-resolver:/Users/cblanquera/server/projects/stackpress/ink/packages/ink-ui/layout/panel.ink
  var import_InkRegistry = __toESM(require_InkRegistry());
  var import_InkComponent = __toESM(require_InkComponent());
  var Panel_aa88a09231e81898df1b = class extends import_InkComponent.default {
    static component = ["panel", "Panel_aa88a09231e81898df1b"];
    styles() {
      return ``;
    }
    template() {
      const panels = this.originalChildren;
      const section = {
        main: panels.find((panel) => panel.nodeName === "MAIN"),
        head: panels.find((panel) => panel.nodeName === "HEADER"),
        foot: panels.find((panel) => panel.nodeName === "FOOTER"),
        left: panels.find((panel) => panel.nodeName === "ASIDE" && panel.hasAttribute("left")),
        right: panels.find((panel) => panel.nodeName === "ASIDE" && panel.hasAttribute("right"))
      };
      const show = { left: false, right: false };
      this.toggle = (panel) => {
        show[panel] = !show[panel];
        setClassNames.all();
      };
      const setClassNames = {
        all() {
          section.main && this.main();
          section.head && this.head();
          section.foot && this.foot();
          section.left && this.left();
          section.right && this.right();
        },
        head() {
          const { classList } = section.head;
          classList.add("absolute", "top-0", "right-0", "h-60", "transition-500");
          if (section.left) {
            classList.remove("left-0");
            classList.add("left-226");
          } else {
            classList.remove("left-226");
            classList.add("left-0");
          }
          if (show.left) {
            classList.remove("md-left-0");
            classList.add("md-left-226");
          } else {
            classList.remove("md-left-226");
            classList.add("md-left-0");
          }
        },
        foot() {
          const { classList } = section.foot;
          classList.add("absolute", "bottom-0", "right-0", "h-60", "transition-500");
          if (section.left) {
            classList.remove("left-0");
            classList.add("left-226");
          } else {
            classList.remove("left-226");
            classList.add("left-0");
          }
          if (show.left) {
            classList.remove("md-left-0");
            classList.add("md-left-226");
          } else {
            classList.remove("md-left-226");
            classList.add("md-left-0");
          }
        },
        left() {
          const { classList } = section.left;
          classList.add("w-226", "absolute", "bottom-0", "left-0", "top-0", "transition-500");
          if (show.left) {
            classList.remove("md-left--226");
            classList.add("md-left-0");
          } else {
            classList.remove("md-left-0");
            classList.add("md-left--226");
          }
        },
        right() {
          const { classList } = section.right;
          classList.add("w-200", "absolute", "right-0", "transition-500");
          if (section.foot) {
            classList.remove("bottom-0");
            classList.add("bottom-60");
          } else {
            classList.remove("bottom-60");
            classList.add("bottom-0");
          }
          if (section.head) {
            classList.remove("top-0");
            classList.add("top-60");
          } else {
            classList.remove("top-60");
            classList.add("top-0");
          }
          if (show.right) {
            classList.remove("lg-right--200");
            classList.add("lg-right-0");
          } else {
            classList.remove("lg-right-0");
            classList.add("lg-right--200");
          }
        },
        main() {
          const { classList } = section.main;
          classList.add("absolute", "transition-500");
          if (section.head) {
            classList.remove("top-0");
            classList.add("top-60");
          } else {
            classList.remove("top-60");
            classList.add("top-0");
          }
          if (section.foot) {
            classList.remove("bottom-0");
            classList.add("bottom-60");
          } else {
            classList.remove("bottom-60");
            classList.add("bottom-0");
          }
          if (section.left) {
            classList.remove("left-0");
            classList.add("left-226");
          } else {
            classList.remove("left-226");
            classList.add("left-0");
          }
          if (section.right) {
            classList.remove("right-0");
            classList.add("right-200");
          } else {
            classList.remove("right-200");
            classList.add("right-0");
          }
          if (show.left) {
            classList.remove("md-left-0");
            classList.add("md-left-226");
          } else {
            classList.remove("md-left-226");
            classList.add("md-left-0");
          }
          if (show.right) {
            classList.remove("lg-right-0");
            classList.add("lg-right-200");
          } else {
            classList.remove("lg-right-200");
            classList.add("lg-right-0");
          }
        }
      };
      setClassNames.all();
      this.classList.add("block", "relative", "w-full", "vh", "scroll-hidden");
      return () => [
        import_InkRegistry.default.createText(`
`, false),
        ...this._toNodeList(panels)
      ];
    }
  };

  // ink-component-resolver:/Users/cblanquera/server/projects/stackpress/ink/packages/ink-ui/element/alert.ink
  var import_InkRegistry2 = __toESM(require_InkRegistry());
  var import_InkComponent2 = __toESM(require_InkComponent());
  var import_StyleSet = __toESM(require_StyleSet());
  var import_color = __toESM(require_color());
  var import_curve = __toESM(require_curve());
  var import_display = __toESM(require_display());
  var Alert_7957696a43e396d3ffc8 = class extends import_InkComponent2.default {
    static component = ["alert", "Alert_7957696a43e396d3ffc8"];
    styles() {
      return ``;
    }
    template() {
      const {
        //layouts
        outline,
        solid,
        transparent,
        //padding
        padding
      } = this.props;
      const styles = new import_StyleSet.default();
      this.styles = () => styles.toString();
      (0, import_display.default)(this.props, styles, "block", ":host");
      styles.add(":host", "padding", padding ? `${padding}px` : "16px");
      (0, import_curve.default)(this.props, styles, false, ":host");
      if (outline || transparent) {
        (0, import_color.default)(this.props, styles, "var(--muted)", ":host", "color");
        (0, import_color.default)(this.props, styles, "var(--muted)", ":host", "border-color");
        styles.add(":host", "border-style", "solid");
        styles.add(":host", "border-width", "1px");
        if (outline) {
          styles.add(":host", "background-color", "var(--white)");
        }
      } else {
        styles.add(":host", "color", "var(--white)");
        (0, import_color.default)(this.props, styles, "var(--muted)", ":host", "background-color");
      }
      return () => [
        import_InkRegistry2.default.createText(`
`, false),
        import_InkRegistry2.default.createElement("slot", {}, []).element
      ];
    }
  };

  // ink-component-resolver:/Users/cblanquera/server/projects/stackpress/ink/packages/ink-ui/element/icon.ink
  var import_InkRegistry3 = __toESM(require_InkRegistry());
  var import_InkComponent3 = __toESM(require_InkComponent());
  var import_StyleSet2 = __toESM(require_StyleSet());
  var import_color2 = __toESM(require_color());
  var import_display2 = __toESM(require_display());
  var import_size = __toESM(require_size());
  var Icon_a3faebb4ed7a157e1d84 = class extends import_InkComponent3.default {
    static component = ["icon", "Icon_a3faebb4ed7a157e1d84"];
    styles() {
      return ``;
    }
    template() {
      const { name, solid, brand } = this.props;
      const styles = new import_StyleSet2.default();
      this.styles = () => styles.toString();
      (0, import_display2.default)(this.props, styles, "inline-block", ":host");
      (0, import_color2.default)(this.props, styles, false, ":host", "color");
      (0, import_size.default)(this.props, styles, false, ":host", "font-size");
      const iconClass = ["fa-fw", `fa-${name}`];
      iconClass.push(brand ? "fa-brands" : "fa-solid");
      return () => [
        import_InkRegistry3.default.createElement("link", { "rel": `stylesheet`, "type": `text/css`, "href": `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css` }).element,
        import_InkRegistry3.default.createText(`
`, false),
        import_InkRegistry3.default.createElement("i", { "class": iconClass.join(" ") }, []).element
      ];
    }
  };

  // ink-component-resolver:/Users/cblanquera/server/projects/stackpress/ink/packages/ink-ui/element/tab.ink
  var import_InkRegistry4 = __toESM(require_InkRegistry());
  var import_InkComponent4 = __toESM(require_InkComponent());
  var import_StyleSet3 = __toESM(require_StyleSet());
  var Tab_9cc7ea04d114d8387d70 = class extends import_InkComponent4.default {
    static component = ["tab", "Tab_9cc7ea04d114d8387d70"];
    styles() {
      return ``;
    }
    template() {
      const handlers = {
        init: () => {
          const on = this.hasAttribute("on");
          this.classList.remove(...on ? inactiveList : activeList);
          this.classList.add(...on ? activeList : inactiveList);
          Array.from(document.querySelectorAll(selector)).forEach((content) => {
            content.style.display = on ? "block" : "none";
          });
        },
        activate: () => {
          Array.from(document.querySelectorAll(`[group="${group}"]`)).forEach((tab) => {
            const subselector = tab.getAttribute("selector");
            if (selector === subselector && !tab.hasAttribute("on")) {
              tab.setAttribute("on", "");
              Array.from(document.querySelectorAll(selector)).forEach((content) => {
                content.style.display = "block";
              });
              typeof tab.render === "function" && tab.render();
            } else if (selector !== subselector && tab.hasAttribute("on")) {
              tab.removeAttribute("on");
              Array.from(document.querySelectorAll(subselector)).forEach((content) => {
                content.style.display = "none";
              });
              typeof tab.render === "function" && tab.render();
            }
          });
        }
      };
      const {
        group,
        selector = "",
        active = "",
        inactive = "",
        //dont need these
        style,
        "class": _2,
        //get the rest
        ...attributes
      } = this.props;
      const activeList = active.split(" ");
      const inactiveList = inactive.split(" ");
      const styles = new import_StyleSet3.default();
      this.styles = () => styles.toString();
      styles.add(":host", "cursor", "pointer");
      styles.add("a", "display", "block");
      styles.add("a", "height", "100%");
      styles.add("a", "width", "100%");
      return () => [
        import_InkRegistry4.default.createText(`
`, false),
        import_InkRegistry4.default.createElement("a", { ...attributes, "click": handlers.activate, "mount": handlers.init }, [
          import_InkRegistry4.default.createText(`
  `, false),
          import_InkRegistry4.default.createElement("slot", {}, []).element,
          import_InkRegistry4.default.createText(`
`, false)
        ]).element
      ];
    }
  };

  // ink-component-resolver:/Users/cblanquera/server/projects/stackpress/ink/packages/ink-web/src/components/api/docs.ink
  var import_InkRegistry5 = __toESM(require_InkRegistry());
  var import_InkComponent5 = __toESM(require_InkComponent());
  var import_ink = __toESM(require_ink());
  var Docs_7e4942547226dfeef0ae = class extends import_InkComponent5.default {
    static component = ["docs", "Docs_7e4942547226dfeef0ae"];
    styles() {
      return ``;
    }
    template() {
      (0, import_ink.classlist)().add(
        "block",
        "w-full",
        "h-full",
        "scroll-y-auto",
        "scroll-x-hidden"
      );
      return () => [
        import_InkRegistry5.default.createText(`
`, false),
        import_InkRegistry5.default.createElement("article", { "class": `block p-10 tx-t-1` }, [
          ...this._toNodeList((0, import_ink.children)())
        ]).element
      ];
    }
  };

  // ink-component-resolver:/Users/cblanquera/server/projects/stackpress/ink/packages/ink-web/src/components/api/ui.ink
  var import_InkRegistry7 = __toESM(require_InkRegistry());
  var import_InkComponent7 = __toESM(require_InkComponent());

  // ink-component-resolver:/Users/cblanquera/server/projects/stackpress/ink/packages/ink-web/src/components/ide/code.ink
  var import_InkRegistry6 = __toESM(require_InkRegistry());
  var import_InkComponent6 = __toESM(require_InkComponent());
  var import_prismjs = __toESM(require_prism());
  var import_ink2 = __toESM(require_ink());
  var Code_d21b237295245a3b7d61 = class extends import_InkComponent6.default {
    static component = ["code", "Code_d21b237295245a3b7d61"];
    styles() {
      return `:host {
    display: block;
    font-size: 14px;
    line-height: 20px;
  }
  :host([inline]) {
    display: inline !important;
  }
  :host([inline]),
  :host([inline]) > pre,
  :host([inline]) > pre > code {
    display: inline !important;
  }
  .snippet {
    background-color: #000000;
    color: #ABB2BF;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  .line-numbers {
    position: relative;
    padding-left: 3.8em;
    counter-reset: linenumber;
  }
  :host([inline]) .line-numbers {
    position: static;
    padding-left: 0;
  }

  .line-numbers > code {
    position: relative;
    white-space: inherit;
  }

  .line-numbers .line-numbers-rows {
    position: absolute;
    pointer-events: none;
    top: 0;
    font-size: 100%;
    left: -3.8em;
    width: 3em; /* works for line-numbers below 1000 lines */
    letter-spacing: -1px;
    border-right: 1px solid #999;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

  }

  :host([inline]) .line-numbers .line-numbers-rows {
    display: none;
  }

  .line-numbers-rows > span {
    display: block;
    counter-increment: linenumber;
  }

  .line-numbers-rows > span:before {
    content: counter(linenumber);
    color: #999;
    display: block;
    padding-right: 0.8em;
    text-align: right;
  }
  .pad {
    padding: 5px;
  }

  .terminal {
    background-color: #000000;
    color: #EFEFEF;
    font-family: 'Courier New', Courier, monospace;
    font-size: 15px;
    height: 100%;
    padding: 10px;
  }
  .terminal span {
    color: #00FF00;
  }`;
    }
    template() {
      const config = this.props;
      const {
        lang = "markup",
        numbers = false,
        inline = false,
        trim = false,
        ltrim = false,
        rtrim = false,
        detab = 0
      } = config;
      const childlist = (0, import_ink2.children)();
      let snippet = childlist[0]?.textContent || "";
      if (detab) {
        snippet = snippet.replace(
          new RegExp(`\\n {${detab}}`, "g"),
          "\n"
        );
      }
      if (trim) {
        snippet = snippet.trim();
      } else if (ltrim) {
        snippet = snippet.replace(/^\s+/, "");
      } else if (rtrim) {
        snippet = snippet.replace(/\s+$/, "");
      }
      const highlight = (event) => {
        if (!snippet) {
          return;
        }
        const code = import_prismjs.default.highlight(snippet, import_prismjs.default.languages[lang], lang);
        event.detail.target.innerHTML = code;
        if (numbers) {
          const match = code.match(/\n(?!$)/g);
          const total = match ? match.length + 1 : 1;
          const lines = new Array(total + 1).join("<span></span>");
          const wrapper = document.createElement("span");
          wrapper.setAttribute("aria-hidden", "true");
          wrapper.className = "line-numbers-rows";
          wrapper.innerHTML = lines;
          event.detail.target.appendChild(wrapper);
        }
      };
      return () => [
        import_InkRegistry6.default.createElement("link", { "rel": `stylesheet`, "href": `https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/themes/prism.min.css` }).element,
        import_InkRegistry6.default.createText(`
`, false),
        import_InkRegistry6.default.createElement("link", { "rel": `stylesheet`, "href": `https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/themes/prism-tomorrow.min.css` }).element,
        import_InkRegistry6.default.createText(`
`, false),
        ...!!(lang === "bash") ? [
          import_InkRegistry6.default.createText(`
  `, false),
          import_InkRegistry6.default.createElement("div", { "class": `terminal` }, [
            import_InkRegistry6.default.createElement("span", {}, [
              import_InkRegistry6.default.createText(`$`, false)
            ]).element,
            import_InkRegistry6.default.createText(` `, false),
            ...this._toNodeList(childlist)
          ]).element,
          import_InkRegistry6.default.createText(`
`, false)
        ] : !!snippet ? [
          ,
          import_InkRegistry6.default.createText(`
  `, false),
          ...!!numbers ? [
            import_InkRegistry6.default.createText(`
    `, false),
            import_InkRegistry6.default.createElement("pre", { "class": `snippet line-numbers` }, [
              import_InkRegistry6.default.createElement("code", { "mount": highlight }, []).element
            ]).element,
            import_InkRegistry6.default.createText(`
  `, false)
          ] : true ? [
            ,
            import_InkRegistry6.default.createText(`
    `, false),
            import_InkRegistry6.default.createElement("pre", { "class": `snippet pad` }, [
              import_InkRegistry6.default.createElement("code", { "mount": highlight }, []).element
            ]).element,
            import_InkRegistry6.default.createText(`
  `, false)
          ] : [],
          import_InkRegistry6.default.createText(`
`, false)
        ] : true ? [
          ,
          import_InkRegistry6.default.createText(`
  `, false),
          import_InkRegistry6.default.createElement("span", {}, [
            import_InkRegistry6.default.createText(`????`, false)
          ]).element,
          import_InkRegistry6.default.createText(`
`, false)
        ] : [],
        import_InkRegistry6.default.createText(`

`, false)
      ];
    }
  };

  // ink-component-resolver:/Users/cblanquera/server/projects/stackpress/ink/packages/ink-web/src/components/api/ui.ink
  var import_ink3 = __toESM(require_ink());

  // src/components/api/types.json
  var types_default = {
    Asset: {
      type: {
        kind: "property",
        list: false,
        type: ["text/html", "text/javascript", "text/css", "text/plain"],
        description: "The MIME type of the build file asset"
      },
      content: {
        kind: "property",
        list: false,
        type: "string",
        description: "The source code of the build file asset."
      }
    },
    Path: {
      path: {
        kind: "property",
        list: false,
        type: "string",
        description: "The file path",
        example: "'/path/to/file'"
      },
      type: {
        kind: "property",
        list: false,
        type: "string",
        description: "The type of path.",
        example: "'file'"
      }
    },
    Config: {
      brand: {
        kind: "property",
        list: false,
        type: "string",
        description: "The brand prefixed before the component tag name.",
        example: "'ink'"
      },
      cwd: {
        kind: "property",
        list: false,
        type: "string",
        description: "The project's current working directory (cwd).",
        example: "'/path/to/project'"
      },
      fs: {
        kind: "property",
        list: false,
        type: "FileSystem",
        description: "The file system being used to read/write files.",
        example: "import fs from 'fs';\n\nfs"
      },
      emitter: {
        kind: "property",
        list: false,
        type: "EventEmitter",
        description: "The NodeJS EventEmitter instance being used.",
        example: "import EventEmitter from 'events';\n\nnew EventEmitter();"
      },
      "name?": {
        kind: "property",
        list: false,
        type: "string",
        description: "Custom name of component."
      },
      "type?": {
        kind: "property",
        list: false,
        type: ["document", "component", "template"],
        description: "Type of component"
      },
      "minify?": {
        kind: "property",
        list: false,
        type: "boolean",
        description: "Whether to minify the generated JavaScript code."
      },
      "tsconfig?": {
        kind: "property",
        list: false,
        type: "string",
        description: "The location of the used tsconfig.json.",
        example: "'/path/to/tsconfig.json'"
      },
      "extname?": {
        kind: "property",
        list: false,
        type: "string",
        description: "The component file extension.",
        example: "'.ink'"
      }
    },
    Import: {
      typeOnly: {
        kind: "property",
        list: false,
        type: "boolean",
        description: "Should import as type only.",
        example: "import type { Foo } from 'bar';"
      },
      "names?": {
        kind: "property",
        list: true,
        type: "string",
        description: "All the names imported",
        example: "import { Foo, Bar } from 'foobar';"
      },
      default: {
        kind: "property",
        list: false,
        type: "string",
        description: "The default import name",
        example: "import foo from 'bar';"
      },
      source: {
        kind: "property",
        list: false,
        type: "string",
        description: "The file path where names are imported from.",
        example: "import * from 'foobar';"
      }
    },
    Build: {
      source: {
        kind: "property",
        list: false,
        type: "string",
        description: "Returns the generated JavaScript source code.",
        example: "compiler.import('./docs/api.ink').source; //server js code"
      },
      InkDocument: {
        kind: "property",
        list: false,
        type: "ServerDocumentClass",
        description: "Returns a server document class that can be instantiated.",
        example: "new (compiler.import('./docs/api.ink').InkDocument);"
      },
      document: {
        kind: "property",
        list: false,
        type: "ServerDocument",
        description: "Returns the default instantiated document used to render the final HTML markup.",
        example: "compiler.import('./docs/api.ink').document.render(); //<html>...</html>"
      }
    },
    CacheOptions: {
      buildPath: {
        kind: "property",
        list: false,
        type: "string",
        description: "The absolute path the build directory",
        example: "'/path/to/build'"
      },
      "manifestFile?": {
        kind: "property",
        list: false,
        type: "string",
        description: "The name of the manifest file.",
        example: "'manifest.json'"
      },
      "environment?": {
        kind: "property",
        list: false,
        type: "string",
        description: "The environment mode that will determine the cache strategy.",
        example: "'production' | 'development'"
      }
    },
    Component: {
      ast: {
        kind: "property",
        list: false,
        type: "AST",
        description: "Returns an abstract syntax tree (AST) interpretation of the component.",
        example: "component.ast.markup;"
      },
      brand: {
        kind: "property",
        list: false,
        type: "string",
        description: "Returns the brand prefixed before the component tag name.",
        example: "component.brand; //--> 'ink'"
      },
      classname: {
        kind: "property",
        list: false,
        type: "string",
        description: "Returns the suggested class name of the component.",
        example: "component.classname; //--> 'Button_abc123'"
      },
      components: {
        kind: "property",
        list: true,
        type: "Component",
        description: "Returns a list of child components imported by this component.",
        example: "component.components[0].brand; //--> 'ink'"
      },
      contents: {
        kind: "property",
        list: false,
        type: "string",
        description: "Returns the raw ink source code.",
        example: "component.contents;"
      },
      cwd: {
        kind: "property",
        list: false,
        type: "string",
        description: "Returns the project's current working directory (cwd).",
        example: "component.cwd; //--> '/path/to/project'"
      },
      dependencies: {
        kind: "property",
        list: true,
        type: "{ path: string, type: string }",
        description: "Returns all the files this component imports sorted by type.",
        example: "component.dependencies; //--> [{ type: 'file', path: './random/file' }, ...]"
      },
      dirname: {
        kind: "property",
        list: false,
        type: "string",
        description: "Returns the directory name where this component file exists.",
        example: "component.dirname;"
      },
      fs: {
        kind: "property",
        list: false,
        type: "FileSystem",
        description: "Returns the file system being used to read/write files.",
        example: "component.fs;"
      },
      id: {
        kind: "property",
        list: false,
        type: "string",
        description: "Returns a unique component ID used for build files.",
        example: "component.id;"
      },
      imports: {
        kind: "property",
        list: true,
        type: "Import",
        description: "Returns the files imported by this component. This does not include any component files.",
        example: "component.imports;"
      },
      markup: {
        kind: "property",
        list: true,
        type: "Token",
        description: "Returns the markup abstract syntax tree.",
        example: "component.markup;"
      },
      loader: {
        kind: "property",
        list: false,
        type: "FileLoader",
        description: "Returns the file loader used to resolve paths of imported files.",
        example: "component.loader.absolute('./path/to/some/file');"
      },
      parent: {
        kind: "property",
        list: false,
        type: "Component|null",
        description: "Returns the parent component, if any.",
        example: "component.parent;"
      },
      registry: {
        kind: "property",
        list: false,
        type: "Record<string, Component>",
        description: "Returns all child components and sub-child components.",
        example: "component.registry;"
      },
      relative: {
        kind: "property",
        list: false,
        type: "string",
        description: "Returns the source file path relative to the current working directory (cwd).",
        example: "component.contents;"
      },
      source: {
        kind: "property",
        list: false,
        type: "string",
        description: "Returns the source file path. This may or may not be the absolute path.",
        example: "component.source;"
      },
      scripts: {
        kind: "property",
        list: true,
        type: "string",
        description: "Returns all the collective JavaScript in the ink source file.",
        example: "component.scripts;"
      },
      styles: {
        kind: "property",
        list: true,
        type: "string",
        description: "Returns all the collective CSS styles in the ink source file.",
        example: "component.styles;"
      },
      tagname: {
        kind: "property",
        list: false,
        type: "string",
        description: "Returns the suggested HTML tag name.",
        example: "component.tagname;"
      },
      type: {
        kind: "property",
        list: false,
        type: ["document", "component", "template"],
        description: "Returns type of component. Will transpile depending on the type.",
        example: "component.type;"
      }
    },
    EventEmitter: {
      render: {
        kind: "event",
        params: {
          builder: {
            kind: "property",
            list: false,
            type: "DocumentBuilder"
          },
          build: {
            kind: "property",
            list: false,
            type: "Build"
          },
          props: {
            kind: "property",
            list: false,
            type: "Hash"
          }
        },
        data: {
          kind: "property",
          list: false,
          type: "string"
        },
        description: "Triggers before the document is rendered.",
        example: "compiler.emitter.on('render', e => {\n  const { builder, build, props } = e.params;\n  //...\n  e.data = 'new html...';\n});"
      },
      rendered: {
        kind: "event",
        params: {
          builder: {
            kind: "property",
            list: false,
            type: "DocumentBuilder"
          },
          build: {
            kind: "property",
            list: false,
            type: "Build"
          },
          props: {
            kind: "property",
            list: false,
            type: "Hash"
          },
          html: {
            kind: "property",
            list: false,
            type: "string"
          }
        },
        data: {
          kind: "property",
          list: false,
          type: "string"
        },
        description: "Triggers after the document is rendered.",
        example: "compiler.emitter.on('rendered', e => {\n  const { builder, build, props, html } = e.params;\n  //...\n  e.data = 'new html...';\n});"
      },
      build: {
        kind: "event",
        params: {
          builder: {
            kind: "property",
            list: false,
            type: "DocumentBuilder"
          }
        },
        data: {
          kind: "property",
          list: false,
          type: "string"
        },
        description: "Triggers before the document is built.",
        example: "compiler.emitter.on('build', e => {\n  const { builder } = e.params;\n  //...\n  e.data = 'new ink source...';\n});"
      },
      built: {
        kind: "event",
        params: {
          builder: {
            kind: "property",
            list: false,
            type: "DocumentBuilder"
          },
          build: {
            kind: "property",
            list: false,
            type: "Build"
          }
        },
        data: {
          kind: "property",
          list: false,
          type: "Build"
        },
        description: "Triggers after the document is built.",
        example: "compiler.emitter.on('built', e => {\n  const { builder, build } = e.params;\n  //...\n  e.data = { ...build };\n});"
      },
      "build-client": {
        kind: "event",
        params: {
          builder: {
            kind: "property",
            list: false,
            type: "DocumentBuilder"
          }
        },
        data: {
          kind: "property",
          list: false,
          type: "string"
        },
        description: "Triggers before the client js is rendered.",
        example: "compiler.emitter.on('build-client', e => {\n  const { builder } = e.params;\n  //...\n  e.data = 'new ink source...';\n});"
      },
      "built-client": {
        kind: "event",
        params: {
          builder: {
            kind: "property",
            list: false,
            type: "DocumentBuilder"
          },
          build: {
            kind: "property",
            list: false,
            type: "Build"
          }
        },
        data: {
          kind: "property",
          list: false,
          type: "string"
        },
        description: "Triggers after the client js is rendered.",
        example: "compiler.emitter.on('built-client', e => {\n  const { builder, build } = e.params;\n  //...\n  e.data = 'new client js...';\n});"
      },
      "build-markup": {
        kind: "event",
        params: {
          builder: {
            kind: "property",
            list: false,
            type: "DocumentBuilder"
          }
        },
        data: {
          kind: "property",
          list: false,
          type: "string"
        },
        description: "Triggers before markup is rendered.",
        example: "compiler.emitter.on('build-markup', e => {\n  const { builder } = e.params;\n  //...\n  e.data = 'new ink source...';\n});"
      },
      "built-markup": {
        kind: "event",
        params: {
          builder: {
            kind: "property",
            list: false,
            type: "DocumentBuilder"
          },
          build: {
            kind: "property",
            list: false,
            type: "Build"
          }
        },
        data: {
          kind: "property",
          list: false,
          type: "string"
        },
        description: "Triggers after markup is rendered.",
        example: "compiler.emitter.on('built-markup', e => {\n  const { builder, build } = e.params;\n  //...\n  e.data = 'new markup...';\n});"
      },
      "build-server": {
        kind: "event",
        params: {
          builder: {
            kind: "property",
            list: false,
            type: "DocumentBuilder"
          }
        },
        data: {
          kind: "property",
          list: false,
          type: "string"
        },
        description: "Triggers before the server js is rendered.",
        example: "compiler.emitter.on('build-server', e => {\n  const { builder } = e.params;\n  //...\n  e.data = 'new ink source...';\n});"
      },
      "built-server": {
        kind: "event",
        params: {
          builder: {
            kind: "property",
            list: false,
            type: "DocumentBuilder"
          },
          build: {
            kind: "property",
            list: false,
            type: "Build"
          }
        },
        data: {
          kind: "property",
          list: false,
          type: "string"
        },
        description: "Triggers after the server js is rendered.",
        example: "compiler.emitter.on('built-server', e => {\n  const { builder, build } = e.params;\n  //...\n  e.data = 'new server js...';\n});"
      },
      "build-styles": {
        kind: "event",
        params: {
          builder: {
            kind: "property",
            list: false,
            type: "DocumentBuilder"
          }
        },
        data: {
          kind: "property",
          list: false,
          type: "string"
        },
        description: "Triggers before the css styles are rendered.",
        example: "compiler.emitter.on('build-styles', e => {\n  const { builder } = e.params;\n  //...\n  e.data = 'new ink source...';\n});"
      },
      "built-styles": {
        kind: "event",
        params: {
          builder: {
            kind: "property",
            list: false,
            type: "DocumentBuilder"
          },
          build: {
            kind: "property",
            list: false,
            type: "Build"
          }
        },
        data: {
          kind: "property",
          list: false,
          type: "string"
        },
        description: "Triggers after the css styles is rendered.",
        example: "compiler.emitter.on('built-styles', e => {\n  const { builder, build } = e.params;\n  //...\n  e.data = 'new css...';\n});"
      },
      "manifest-load": {
        kind: "event",
        params: {
          manifest: {
            kind: "property",
            list: false,
            type: "DocumentManifest"
          },
          map: {
            kind: "property",
            list: false,
            type: "Map<string, string>"
          }
        },
        data: {
          kind: "property",
          list: false,
          type: "Map<string, string>"
        },
        description: "Triggers before the manifest is loaded.",
        example: "compiler.emitter.on('manifest-load', e => {\n  const { manifest, map } = e.params;\n  //...\n  e.data = new Map<string, string>();\n});"
      },
      "manifest-resolve": {
        kind: "event",
        params: {
          manifest: {
            kind: "property",
            list: false,
            type: "DocumentManifest"
          },
          id: {
            kind: "property",
            list: false,
            type: "string"
          }
        },
        description: "Triggers before a build ID is resolved.",
        example: "compiler.emitter.on('manifest-resolve', e => {\n  const { manifest, id } = e.params;\n  //...\n});"
      },
      "manifest-resolved": {
        kind: "event",
        params: {
          manifest: {
            kind: "property",
            list: false,
            type: "DocumentManifest"
          },
          id: {
            kind: "property",
            list: false,
            type: "string"
          },
          path: {
            kind: "property",
            list: false,
            type: "string"
          }
        },
        data: {
          kind: "property",
          list: false,
          type: "Map<string, string>"
        },
        description: "Triggers after a build ID/entry is set.",
        example: "compiler.emitter.on('manifest-resolved', e => {\n  const { manifest, id, path } = e.params;\n  //...\n});"
      },
      "manifest-unresolved": {
        kind: "event",
        params: {
          manifest: {
            kind: "property",
            list: false,
            type: "DocumentManifest"
          },
          id: {
            kind: "property",
            list: false,
            type: "string"
          },
          path: {
            kind: "property",
            list: false,
            type: "string|undefined"
          }
        },
        data: {
          kind: "property",
          list: false,
          type: "Map<string, string>"
        },
        description: "Triggers after a build ID is deleted.",
        example: "compiler.emitter.on('manifest-unresolved', e => {\n  const { manifest, id, path } = e.params;\n  //...\n});"
      }
    },
    DocumentManifest: {
      emitter: {
        kind: "property",
        list: false,
        type: "EventEmitter",
        description: "The NodeJS EventEmitter instance being used.",
        example: "compiler.manifest.emitter.on('render', e => {\n  console.log(e.params);\n});"
      },
      registry: {
        kind: "property",
        list: false,
        type: "Map<string, string>",
        description: "The manifest registry used to map build IDs to document entry files.",
        example: "compiler.manifest.registry.entries();"
      },
      builder: {
        kind: "function",
        async: false,
        args: [
          {
            kind: "property",
            list: false,
            name: "id",
            type: "string"
          }
        ],
        returns: {
          kind: "property",
          list: false,
          type: "DocumentBuilder"
        },
        description: "Returns a document builder given the build id.",
        example: "compiler.manifest.builder('abc123');"
      },
      delete: {
        kind: "function",
        async: false,
        args: [
          {
            kind: "property",
            list: false,
            name: "id",
            type: "string"
          }
        ],
        returns: {
          kind: "property",
          list: false,
          type: "DocumentManifest"
        },
        description: "Removes an entry file from the manifest given the build id.",
        example: "compiler.manifest.delete('abc123');"
      },
      entries: {
        kind: "function",
        async: false,
        args: [],
        returns: {
          kind: "property",
          list: true,
          type: "[ string, string ]"
        },
        description: "Returns an array of build IDs and entry file paths.",
        example: "compiler.manifest.entries();"
      },
      get: {
        kind: "function",
        async: false,
        args: [
          {
            kind: "property",
            name: "id",
            type: "string"
          }
        ],
        returns: {
          kind: "property",
          list: false,
          type: "string"
        },
        description: "Returns the entry file path given the build id.",
        example: "compiler.manifest.get('abc123');"
      },
      has: {
        kind: "function",
        async: false,
        args: [
          {
            kind: "property",
            name: "id",
            type: "string"
          }
        ],
        returns: {
          kind: "property",
          list: false,
          type: "boolean"
        },
        description: "Returns true if the build id exists in the manifest.",
        example: "compiler.manifest.has('abc123');"
      },
      load: {
        kind: "function",
        async: false,
        args: [
          {
            kind: "property",
            name: "manifest",
            type: "Record<string, string>"
          }
        ],
        returns: {
          kind: "property",
          list: false,
          type: "DocumentManifest"
        },
        description: "Loads an entire manifest object to the registry.",
        example: "compiler.manifest.load({ abc123: '/path/to/entry.ink' });"
      },
      keys: {
        kind: "function",
        async: false,
        args: [],
        returns: {
          kind: "property",
          list: true,
          type: "string"
        },
        description: "Returns an array of build IDs.",
        example: "compiler.manifest.keys();"
      },
      set: {
        kind: "function",
        async: false,
        args: [
          {
            kind: "property",
            name: "id",
            type: "string"
          },
          {
            kind: "property",
            name: "path",
            type: "string"
          }
        ],
        returns: {
          kind: "property",
          list: false,
          type: "DocumentManifest"
        },
        description: "Sets an entry file path to the manifest given the build id.",
        example: "compiler.manifest.set('abc123', '/path/to/entry.ink');"
      },
      toJson: {
        kind: "function",
        async: false,
        args: [],
        returns: {
          kind: "property",
          list: false,
          type: "string"
        },
        description: "Returns the manifest as a JSON string.",
        example: "compiler.manifest.toJson();"
      },
      values: {
        kind: "function",
        async: false,
        args: [],
        returns: {
          kind: "property",
          list: true,
          type: "string"
        },
        description: "Returns an array of entry file paths.",
        example: "compiler.manifest.values();"
      }
    },
    DocumentTranspiler: {
      directive: {
        kind: "function",
        async: false,
        args: [
          {
            kind: "property",
            name: "directive",
            type: "DirectiveInterface"
          }
        ],
        returns: {
          kind: "property",
          list: false,
          type: "DocumentTranspiler"
        },
        description: "Adds a directive that transpiles custom markup tags like if/elif/else, each, try/catch.",
        example: "compiler.fromSource('./docs/api.ink').transpiler.directive(CustomDirective);"
      },
      transpile: {
        kind: "function",
        args: [],
        returns: {
          kind: "property",
          list: false,
          type: "SourceFile"
        }
      },
      description: "Converts a ink file to server-side JavaScript.",
      example: "compiler.fromSource('./docs/api.ink').transpiler.transpile();"
    },
    DocumentBuilder: {
      document: {
        kind: "property",
        list: false,
        type: "Component",
        description: "Returns a document component with various meta information, used for transpilation.",
        example: "compiler.fromSource('./docs/api.ink').document.classname; //--> 'Index_abc123'"
      },
      emitter: {
        kind: "property",
        list: false,
        type: "EventEmitter",
        description: "The NodeJS EventEmitter instance being used.",
        example: "compiler.fromSource('./docs/api.ink').emitter.on('render', e => {\n  console.log(e.params);\n});"
      },
      extnames: {
        kind: "property",
        list: true,
        type: "string",
        description: "Returns the file extensions that are recognized to parse as Ink components.",
        example: "compiler.fromSource('./docs/api.ink').extnames; //--> [ 'ink' ]"
      },
      transpiler: {
        kind: "property",
        list: false,
        type: "DocumentTranspiler",
        description: "Returns a transpiler used to convert a ink file to server-side JavaScript.",
        example: "compiler.fromSource('./docs/api.ink').transpiler.transpile();"
      },
      tsconfig: {
        kind: "property",
        list: false,
        type: "string",
        description: "Returns the location of the used tsconfig.json.",
        example: "compiler.fromSource('./docs/api.ink').tsconfig; //--> /path/to/tsconfig.json"
      },
      build: {
        kind: "function",
        async: true,
        args: [],
        returns: {
          kind: "property",
          list: false,
          type: "Build"
        },
        description: "Generates the server-side component and brings it into the runtime.",
        example: "compiler.fromSource('./docs/api.ink').build();"
      },
      client: {
        kind: "function",
        async: true,
        args: [],
        returns: {
          kind: "property",
          list: false,
          type: "string"
        },
        description: "Generates the browser-side JavaScript.",
        example: "compiler.fromSource('./docs/api.ink').client(); //client js code"
      },
      component: {
        kind: "function",
        async: true,
        args: [],
        returns: {
          kind: "property",
          list: false,
          type: "string"
        },
        description: "Generates the source file as an independent component.",
        example: "compiler.fromSource('./docs/my-button.ink').component(); //component js code"
      },
      markup: {
        kind: "function",
        async: true,
        args: [],
        returns: {
          kind: "property",
          list: false,
          type: "string"
        },
        description: "Generates the html markup.",
        example: "compiler.fromSource('./docs/api.ink').markup(); //<html>...</html>"
      },
      server: {
        kind: "function",
        async: true,
        args: [],
        returns: {
          kind: "property",
          list: false,
          type: "string"
        },
        description: "Generates the server-side JavaScript.",
        example: "compiler.fromSource('./docs/api.ink').markup(); //server js code"
      },
      styles: {
        kind: "function",
        async: true,
        args: [],
        returns: {
          kind: "property",
          list: false,
          type: "string"
        },
        description: "Generates the css styles.",
        example: "compiler.fromSource('./docs/api.ink').styles(); //css code"
      }
    },
    ServerDocumentClass: {
      component: {
        kind: "property",
        list: false,
        type: "[ string, string ]",
        description: "Returns the component tag name and class name.",
        example: "compiler.import('./docs/api.ink').InkDocument.component; //--> [ 'tui-button', 'TuiButton_abc123' ]"
      },
      new: {
        kind: "function",
        args: [],
        returns: {
          kind: "property",
          list: false,
          type: "ServerDocument"
        },
        description: "Instantiates the server document class on the server-side used to render the final HTML.",
        example: "new (compiler.import('./docs/api.ink').InkDocument);"
      }
    },
    ServerDocument: {
      id: {
        kind: "function",
        args: [],
        returns: {
          kind: "property",
          list: false,
          type: "string"
        },
        description: "Returns a unique document ID used to map the build cache.",
        example: "compiler.import('./docs/api.ink').document.id(); //--> 'abc123'"
      },
      styles: {
        kind: "function",
        args: [],
        returns: {
          kind: "property",
          list: false,
          type: "string"
        },
        description: "Returns the css styles for this document.",
        example: "compiler.import('./docs/api.ink').document.styles(); //css styles"
      },
      template: {
        template: "function",
        args: [],
        returns: {
          kind: "property",
          list: true,
          type: "Element"
        },
        description: "Returns an array of Element children and sub-children.",
        example: "compiler.import('./docs/api.ink').document.template();"
      },
      render: {
        kind: "function",
        args: [
          {
            kind: "property",
            name: "props",
            type: "Record<string, any>"
          }
        ],
        returns: {
          kind: "property",
          list: false,
          type: "string"
        },
        description: "Returns the final document HTML markup.",
        example: "compiler.import('./docs/api.ink').document.render();"
      }
    },
    InkOptions: {
      "brand?": {
        kind: "property",
        list: false,
        type: "string",
        description: "The brand prefixed before the component tag name.",
        example: "const compiler = ink({ brand: 'ink' });"
      },
      "cwd?": {
        kind: "property",
        list: false,
        type: "string",
        description: "The project's current working directory (cwd).",
        example: "const compiler = ink({ cwd: '/path/to/project' });'"
      },
      "fs?": {
        kind: "property",
        list: false,
        type: "FileSystem",
        description: "The file system being used to read/write files.",
        example: "import fs from 'fs';\n\nconst compiler = ink({ fs });'"
      },
      "emitter?": {
        kind: "property",
        list: false,
        type: "EventEmitter",
        description: "The NodeJS EventEmitter instance being used.",
        example: "import emitter from 'events';\n\nconst compiler = ink({ emitter });'"
      },
      "minify?": {
        kind: "property",
        list: false,
        type: "boolean",
        description: "Whether to minify the generated JavaScript code.",
        example: "const compiler = ink({ minify: true });'"
      },
      "tsconfig?": {
        kind: "property",
        list: false,
        type: "string",
        description: "The location of the used tsconfig.json.",
        example: "const compiler = ink({ tsconfig: '/path/to/tsconfig.json' });'"
      },
      "extname?": {
        kind: "property",
        list: false,
        type: "string",
        description: "The component file extension.",
        example: "const compiler = ink({ extname: '.ink' });'"
      }
    },
    InkCompiler: {
      config: {
        kind: "property",
        list: false,
        type: "Config",
        description: "The Ink configuration",
        example: "compiler.config.brand; //--> 'ink'"
      },
      fs: {
        kind: "property",
        list: false,
        type: "FileSystem",
        description: "The file system being used.",
        example: "compiler.fs.readFileSync('some/file', 'utf8');"
      },
      emitter: {
        kind: "property",
        list: false,
        type: "EventEmitter",
        description: "The NodeJS EventEmitter instance being used.",
        example: "compiler.emitter.on('render', e => {\n  console.log(e.params);\n});"
      },
      manifest: {
        kind: "property",
        list: false,
        type: "DocumentManifest",
        description: "The manifest registry used to map build IDs to document entry files.",
        example: "compiler.manifest.entries();"
      },
      component: {
        kind: "function",
        args: [],
        returns: {
          kind: "property",
          list: false,
          type: "Component"
        }
      },
      fromId: {
        kind: "function",
        args: [
          {
            kind: "property",
            list: false,
            name: "id",
            type: "string"
          }
        ],
        returns: {
          kind: "property",
          list: false,
          type: "DocumentBuilder"
        },
        description: "Returns a new DocumentBuilder instance given a build ID.",
        example: "compiler.fromId('abc123').build();"
      },
      fromCache: {
        kind: "function",
        args: [
          {
            kind: "property",
            list: false,
            name: "cacheFile",
            type: "string"
          }
        ],
        returns: {
          kind: "property",
          list: false,
          type: "Build"
        },
        description: "Returns build information from a compiled template.",
        example: "compiler.fromCache('/path/to/build/abc123.js').document.render();"
      },
      fromSource: {
        kind: "function",
        args: [
          {
            kind: "property",
            list: false,
            name: "sourceFile",
            type: "string"
          }
        ],
        returns: {
          kind: "property",
          list: false,
          type: "DocumentBuilder"
        },
        description: "Returns a new DocumentBuilder instance given a template source file.",
        example: "compiler.fromSource('./docs/api.ink').build();"
      },
      use: {
        kind: "function",
        args: [
          {
            kind: "property",
            list: false,
            name: "options",
            type: "Function"
          }
        ],
        returns: {
          kind: "property",
          list: false,
          type: "InkCompiler"
        },
        description: "Enables a default build cache strategy.",
        example: "compiler.use(plugin)"
      },
      asset: {
        kind: "function",
        async: true,
        args: [
          {
            kind: "property",
            list: false,
            name: "assetFile",
            type: "string"
          }
        ],
        returns: {
          kind: "property",
          list: false,
          type: "Asset"
        },
        description: "Returns a compiled build asset, given an asset file name.",
        example: "compiler.asset('abc123.css'); //--> { type: 'text/css', content: '...' }"
      },
      client: {
        kind: "function",
        async: true,
        args: [
          {
            kind: "property",
            list: false,
            name: "sourceFile",
            type: "string"
          }
        ],
        returns: {
          kind: "property",
          list: false,
          type: "string"
        },
        description: "Returns a compiled client script, given the the template source file.",
        example: "compiler.client('./docs/api.ink'); //client script"
      },
      import: {
        kind: "function",
        async: true,
        args: [
          {
            kind: "property",
            list: false,
            name: "sourceFile",
            type: "string"
          }
        ],
        returns: {
          kind: "property",
          list: false,
          type: "Build"
        },
        description: "Returns build information, given the the template source file.",
        example: "compiler.import('/path/to/build/abc123.js').document.render();"
      },
      markup: {
        kind: "function",
        async: true,
        args: [
          {
            kind: "property",
            list: false,
            name: "sourceFile",
            type: "string"
          }
        ],
        returns: {
          kind: "property",
          list: false,
          type: "string"
        },
        description: "Returns a compiled markup, given the the template source file.",
        example: "compiler.markup('./docs/api.ink'); //--> <html>...</html>"
      },
      render: {
        kind: "function",
        async: true,
        args: [
          {
            kind: "property",
            list: false,
            name: "sourceFile",
            type: "string"
          },
          {
            kind: "property",
            list: false,
            name: "props",
            type: "Hash"
          }
        ],
        returns: {
          kind: "property",
          list: false,
          type: "string"
        },
        description: "Returns the final HTML markup, given the the template source file.",
        example: "compiler.render('./docs/api.ink', {\n  title: 'API Documentation'\n});"
      },
      server: {
        kind: "function",
        async: true,
        args: [
          {
            kind: "property",
            list: false,
            name: "sourceFile",
            type: "string"
          }
        ],
        returns: {
          kind: "property",
          list: false,
          type: "string"
        },
        description: "Returns compiled server code, given the the template source file.",
        example: "compiler.server('./docs/api.ink'); // server script"
      },
      styles: {
        kind: "function",
        async: true,
        args: [
          {
            kind: "property",
            list: false,
            name: "sourceFile",
            type: "string"
          }
        ],
        returns: {
          kind: "property",
          list: false,
          type: "string"
        },
        description: "Returns compiled css styles, given the the template source file.",
        example: "compiler.styles('./docs/api.ink'); //css styles"
      }
    },
    InkComponent: {
      attr: {
        kind: "property",
        list: false,
        type: "Hash",
        description: "Returns only the valid HTML tag attributes (string and true).",
        example: "this.attr; //--> { disabled: true, type: 'button' }"
      },
      props: {
        kind: "property",
        list: false,
        type: "Hash",
        description: "Returns all the attributes assigned to the component.",
        example: "this.props; //--> { disabled: true, count: 4, click: handleClick }"
      },
      metadata: {
        kind: "property",
        list: false,
        type: "[ string, string ]",
        description: "Returns the tag and class name of the component.",
        example: "this.metadata; //--> [ 'fancy-button', 'FancyButton_abc123' ]"
      },
      styles: {
        kind: "function",
        args: [],
        returns: {
          kind: "property",
          list: false,
          type: "string"
        },
        description: "Returns the css styles used in the component.",
        example: "this.styles(); //css styles"
      },
      template: {
        kind: "function",
        args: [],
        returns: {
          kind: "property",
          list: false,
          type: "Node[]"
        },
        description: "Returns a function that returns an array of elements, text nodes and web components",
        example: "this.template(); //--> () => [ Element, Text, Element, ... ]"
      },
      render: {
        kind: "function",
        args: [],
        returns: {
          kind: "property",
          list: false,
          type: "string"
        },
        description: "Renders the children and returns the final HTML markup.",
        example: "this.render(); //--> '<p>...</p>'"
      }
    },
    InkRegistry: {
      elements: {
        kind: "property",
        list: false,
        type: "Map<Element, InkElement>",
        description: "Returns a map of elements used in the DOM.",
        example: "InkAPI.InkRegistry.elements.get(component);"
      },
      createComponent: {
        kind: "function",
        args: [
          {
            kind: "property",
            list: false,
            name: "tagname",
            type: "string"
          },
          {
            kind: "property",
            list: false,
            name: "component",
            type: "InkComponent"
          },
          {
            kind: "property",
            list: false,
            name: "props",
            type: "Hash"
          },
          {
            kind: "property",
            list: false,
            name: "children>",
            type: "Node[]"
          }
        ],
        returns: {
          kind: "property",
          list: false,
          type: "InkElement"
        },
        description: "Creates a InkElement from a web component class.",
        example: "InkAPI.InkRegistry.createComponent('fancy-button', InkComponent, { title: 'Hello' }, children);"
      },
      createElement: {
        kind: "function",
        args: [
          {
            kind: "property",
            list: false,
            name: "tagname",
            type: "string"
          },
          {
            kind: "property",
            list: false,
            name: "props",
            type: "Hash"
          },
          {
            kind: "property",
            list: false,
            name: "children>",
            type: "Node[]"
          }
        ],
        returns: {
          kind: "property",
          list: false,
          type: "InkElement"
        },
        description: "Creates a InkElement from a string tag name.",
        example: "InkAPI.InkRegistry.createElement('a', { href: '/' }, children);"
      },
      createText: {
        kind: "function",
        args: [
          {
            kind: "property",
            list: false,
            name: "text",
            type: "string"
          }
        ],
        returns: {
          kind: "property",
          list: false,
          type: "TextNode"
        },
        description: "Creates a TextNode from a raw string.",
        example: "InkAPI.InkRegistry.createText('foo');"
      },
      get: {
        kind: "function",
        args: [
          {
            kind: "property",
            list: false,
            name: "element",
            type: "Element"
          }
        ],
        returns: {
          kind: "property",
          list: false,
          type: "InkElement"
        },
        description: "Returns a InkElement given a DOM element.",
        example: "InkAPI.InkRegistry.get(element)"
      },
      has: {
        kind: "function",
        args: [
          {
            kind: "property",
            list: false,
            name: "element",
            type: "Element"
          }
        ],
        returns: {
          kind: "property",
          list: false,
          type: "boolean"
        },
        description: "Returns true if the given element exists in the registry",
        example: "InkAPI.InkRegistry.has(element)"
      },
      map: {
        kind: "function",
        args: [
          {
            kind: "property",
            list: false,
            name: "callback",
            type: "Function"
          }
        ],
        returns: {
          kind: "property",
          list: true,
          type: "T"
        },
        description: "Like array map for registry returns an array of whatever the callback returns.",
        example: "InkAPI.InkRegistry.map((ink, element) => [ink, element]);"
      },
      register: {
        kind: "function",
        args: [
          {
            kind: "property",
            list: false,
            name: "element",
            type: "InkElement"
          },
          {
            kind: "property",
            list: false,
            name: "props",
            type: "Hash"
          }
        ],
        returns: {
          kind: "property",
          list: false,
          type: "InkElement"
        },
        description: "Registers a InkElement to the registry.",
        example: "InkAPI.InkRegistry.register(element, { foo: 'bar' });"
      }
    },
    InkElement: {
      attributes: {
        kind: "property",
        list: false,
        type: "Hash",
        description: "Returns all the attributes assigned to the element.",
        example: "element.attributes; //--> { href: '/', title: 'Home' }"
      },
      element: {
        kind: "property",
        list: false,
        type: "Element",
        description: "Returns the DOM element.",
        example: "element.element; //--> <a href='/' title='Home'>"
      },
      hasAttribute: {
        kind: "function",
        args: [
          {
            kind: "property",
            list: false,
            name: "name",
            type: "string"
          }
        ],
        returns: {
          kind: "property",
          list: false,
          type: "boolean"
        },
        description: "Returns true if the element has the given attribute.",
        example: "element.hasAttribute('href');"
      },
      getAttribute: {
        kind: "function",
        args: [
          {
            kind: "property",
            list: false,
            name: "name",
            type: "string"
          }
        ],
        returns: {
          kind: "property",
          list: false,
          type: "unknown"
        },
        description: "Returns the value of the given attribute.",
        example: "element.getAttribute('href');"
      },
      removeAttribute: {
        kind: "function",
        args: [
          {
            kind: "property",
            list: false,
            name: "name",
            type: "string"
          }
        ],
        returns: {
          kind: "property",
          list: false,
          type: "InkElement"
        },
        description: "Removes the given attribute from the element.",
        example: "element.removeAttribute('href');"
      },
      setAttribute: {
        kind: "function",
        args: [
          {
            kind: "property",
            list: false,
            name: "name",
            type: "string"
          },
          {
            kind: "property",
            list: false,
            name: "value",
            type: "string"
          }
        ],
        returns: {
          kind: "property",
          list: false,
          type: "InkElement"
        },
        description: "Sets the given attribute to the element.",
        example: "element.setAttribute('href', '/');"
      },
      setAttributes: {
        kind: "function",
        args: [
          {
            kind: "property",
            list: false,
            name: "attributes",
            type: "Hash"
          }
        ],
        returns: {
          kind: "property",
          list: false,
          type: "InkElement"
        },
        description: "Sets multiple attributes to the element.",
        example: "element.setAttributes({ href: '/', title: 'Home' });"
      }
    },
    InkEmitter: {
      emit: {
        kind: "function",
        args: [
          {
            kind: "property",
            list: false,
            name: "event",
            type: "string"
          },
          {
            kind: "property",
            list: false,
            name: "target",
            type: "T"
          }
        ],
        returns: {
          kind: "property",
          list: false,
          type: "InkEmitter"
        },
        description: "Emits an event with optional parameters.",
        example: "emitter.emit('click', { x: 10, y: 20 });"
      },
      unbind: {
        kind: "function",
        args: [
          {
            kind: "property",
            list: false,
            name: "event",
            type: "string"
          },
          {
            kind: "property",
            list: false,
            name: "listener",
            type: "Function"
          }
        ],
        returns: {
          kind: "property",
          list: false,
          type: "InkEmitter"
        },
        description: "Removes an event listener.",
        example: "emitter.unbind('click', handleClick);"
      },
      on: {
        kind: "function",
        args: [
          {
            kind: "property",
            list: false,
            name: "event",
            type: "string"
          },
          {
            kind: "property",
            list: false,
            name: "listener",
            type: "Function"
          }
        ],
        returns: {
          kind: "property",
          list: false,
          type: "InkEmitter"
        },
        description: "Adds an event listener.",
        example: "emitter.on('click', handleClick);"
      },
      once: {
        kind: "function",
        args: [
          {
            kind: "property",
            list: false,
            name: "event",
            type: "string"
          },
          {
            kind: "property",
            list: false,
            name: "listener",
            type: "Function"
          }
        ],
        returns: {
          kind: "property",
          list: false,
          type: "InkEmitter"
        },
        description: "Adds an event listener that only fires once.",
        example: "emitter.once('click', handleClick);"
      }
    },
    InkAPI: {
      BUILD_ID: {
        kind: "property",
        list: false,
        type: "string",
        description: "The unique build ID used to map the build cache.",
        example: "InkAPI.BUILD_ID; //--> 'abc123'"
      },
      InkComponent: {
        kind: "property",
        list: false,
        type: "InkComponent",
        description: "The Ink component class used to create custom elements.",
        example: "new InkAPI.InkComponent();"
      },
      InkElement: {
        kind: "property",
        list: false,
        type: "InkElement",
        description: "The Ink element class used to create custom elements.",
        example: "new InkAPI.InkElement(\n  document.createElement('a'),\n  { href: '/' }\n); ]"
      },
      InkEmitter: {
        kind: "property",
        list: false,
        type: "InkEmitter",
        description: "The Ink emitter class used to create custom events.",
        example: "new InkAPI.InkEmitter();"
      },
      InkException: {
        kind: "property",
        list: false,
        type: "InkException",
        description: "The Ink exception class used to create custom errors.",
        example: "throw InkAPI.InkException.for('error message');"
      },
      InkRegistry: {
        kind: "property",
        list: false,
        type: "InkRegistry",
        description: "The Ink registry class used to store custom elements.",
        example: "new InkAPI.InkRegistry.createElement('a', { href: '/' });"
      },
      children: {
        kind: "function",
        args: [
          {
            kind: "property",
            list: false,
            name: "component",
            type: "InkComponent"
          }
        ],
        returns: {
          kind: "property",
          list: true,
          type: "Node"
        },
        description: "Returns an array of child nodes.",
        example: "InkAPI.children(component); //--> [ Element, Text, Element, ... ]"
      },
      components: {
        kind: "property",
        list: false,
        type: "Record<string, InkComponent>",
        description: "Returns an object of Ink components classes used in the DOM.",
        example: "new InkAPI.components['fancy-button']; //--> InkComponent"
      },
      data: {
        kind: "property",
        list: false,
        type: "InkDataMap",
        description: "The Ink data map used to bring server side data to the client.",
        example: "InkAPI.data.get('props');"
      },
      emitter: {
        kind: "property",
        list: false,
        type: "InkEmitter",
        description: "The Ink emitter class used to create custom events.",
        example: "InkAPI.emitter.on('click', () => {});"
      },
      props: {
        kind: "function",
        args: [
          {
            kind: "property",
            list: false,
            name: "component",
            type: "InkComponent"
          }
        ],
        returns: {
          kind: "property",
          list: true,
          type: "Hash"
        },
        description: "Returns an object of component attributes",
        example: "InkAPI.props(component); //--> { foo: 'bar', count: 4 }"
      },
      signal: {
        kind: "function",
        args: [
          {
            kind: "property",
            list: false,
            name: "component",
            type: "InkComponent"
          }
        ],
        returns: {
          kind: "property",
          list: false,
          type: "Signal"
        },
        description: "Returns a signal object used to re-render components whenever its value changes",
        example: "const count = InkAPI.signal(1, component)"
      }
    },
    "Render Methods": {
      asset: {
        kind: "function",
        async: true,
        args: [
          {
            kind: "property",
            list: false,
            name: "assetFile",
            type: "string"
          }
        ],
        returns: {
          kind: "property",
          list: false,
          type: "Asset"
        },
        description: "Returns a compiled build asset, given an asset file name.",
        example: "await compiler.asset('abc123.css'); //--> { type: 'text/css', content: '...' }"
      },
      client: {
        kind: "function",
        async: true,
        args: [
          {
            kind: "property",
            list: false,
            name: "sourceFile",
            type: "string"
          }
        ],
        returns: {
          kind: "property",
          list: false,
          type: "string"
        },
        description: "Returns a compiled client script, given the the template source file.",
        example: "await compiler.client('./docs/api.ink'); //client script"
      },
      markup: {
        kind: "function",
        async: true,
        args: [
          {
            kind: "property",
            list: false,
            name: "sourceFile",
            type: "string"
          }
        ],
        returns: {
          kind: "property",
          list: false,
          type: "string"
        },
        description: "Returns a compiled markup, given the the template source file.",
        example: "await compiler.markup('./docs/api.ink'); //--> <html>...</html>"
      },
      render: {
        kind: "function",
        async: true,
        args: [
          {
            kind: "property",
            list: false,
            name: "sourceFile",
            type: "string"
          },
          {
            kind: "property",
            list: false,
            name: "props",
            type: "Hash"
          }
        ],
        returns: {
          kind: "property",
          list: false,
          type: "string"
        },
        description: "Returns the final HTML markup, given the the template source file.",
        example: "await compiler.render('./docs/api.ink', {\n  title: 'API Documentation'\n});"
      },
      server: {
        kind: "function",
        async: true,
        args: [
          {
            kind: "property",
            list: false,
            name: "sourceFile",
            type: "string"
          }
        ],
        returns: {
          kind: "property",
          list: false,
          type: "string"
        },
        description: "Returns compiled server code, given the the template source file.",
        example: "await compiler.server('./docs/api.ink'); // server script"
      },
      styles: {
        kind: "function",
        async: true,
        args: [
          {
            kind: "property",
            list: false,
            name: "sourceFile",
            type: "string"
          }
        ],
        returns: {
          kind: "property",
          list: false,
          type: "string"
        },
        description: "Returns compiled css styles, given the the template source file.",
        example: "await compiler.styles('./docs/api.ink'); //css styles"
      }
    },
    DeveloperOptions: {
      "cwd?": {
        kind: "property",
        list: false,
        type: "string",
        description: "The current working directory",
        example: "const { refresh, router } = dev({ cwd: process.cwd() })"
      },
      "emitter?": {
        kind: "property",
        list: false,
        type: "EventEmitter",
        description: "The NodeJS EventEmitter instance being used.",
        example: "import emitter from 'events';\n\nconst { refresh, router } = dev({ emitter });'"
      },
      "include?": {
        kind: "property",
        list: true,
        type: "string",
        description: "An array of extension names to watch for",
        example: "const { refresh, router } = dev({ include: [ '.js', '.ts', '.ink', '.ink' ] });'"
      },
      "ignore?": {
        kind: "property",
        list: true,
        type: "(string|RegExp)",
        description: "An array of extension names to ignore",
        example: "const { refresh, router } = dev({ ignore: [ '*.test.*' ] });'"
      },
      "route?": {
        kind: "property",
        list: false,
        type: "string",
        description: "The route path to use for the client watcher",
        example: "const { refresh, router } = dev({ route: '/__ink_dev__' })"
      },
      "tsconfig?": {
        kind: "property",
        list: false,
        type: "string",
        description: "The path to the tsconfig.json file",
        example: "const { refresh, router } = dev({ tsconfig: '/path/to/tsconfig.json' })"
      },
      "extname?": {
        kind: "property",
        list: false,
        type: "string",
        description: "the component file extension",
        example: "const { refresh, router } = dev({ extname: '.ink' })"
      }
    },
    RefreshServer: {
      cwd: {
        kind: "property",
        list: false,
        type: "string",
        description: "The current working directory",
        example: "refresh.cwd"
      },
      emitter: {
        kind: "property",
        list: false,
        type: "EventEmitter",
        description: "The NodeJS EventEmitter instance being used.",
        example: "refresh.emitter.on('render', e => {\n  console.log(e.params);\n});"
      },
      sync: {
        kind: "function",
        args: [
          {
            kind: "property",
            name: "builder",
            list: false,
            type: "DocumentBuilder"
          }
        ],
        returns: {
          kind: "property",
          list: false,
          type: "void"
        },
        description: "Registers a document builder to a client watcher list",
        example: "refresh.emitter.on('render', e => {\n  console.log(e.params);\n});"
      },
      close: {
        kind: "function",
        args: [],
        returns: {
          kind: "property",
          list: false,
          type: "RefreshServer"
        },
        description: "Closes the server and stops the watchers.",
        example: "refresh.close();"
      },
      refresh: {
        kind: "function",
        args: [
          {
            kind: "property",
            list: false,
            name: "filePath",
            type: "string"
          }
        ],
        returns: {
          kind: "property",
          list: false,
          type: "Promise<RefreshServer>"
        },
        description: "Whenever a file is changed this will be called to instruct each client watcher how to update their document.",
        example: "await refresh.refresh('/some/file.ink');"
      },
      wait: {
        kind: "function",
        args: [
          {
            kind: "property",
            list: false,
            name: "req",
            type: "Request"
          },
          {
            kind: "property",
            list: false,
            name: "res",
            type: "Response"
          }
        ],
        returns: {
          kind: "property",
          list: false,
          type: "RefreshServer"
        },
        description: "Opens a connection to the server via SSE and waits for changes.",
        example: "refresh.wait(req, res);"
      },
      watch: {
        kind: "function",
        args: [],
        returns: {
          kind: "property",
          list: false,
          type: "RefreshServer"
        },
        description: "Starts the server that watches for file changes.",
        example: "refresh.watch();"
      }
    },
    "Developer Tools": {
      refresh: {
        kind: "property",
        list: false,
        type: "RefreshServer",
        description: "The refresh server instance used to update clients.",
        example: "const { refresh } = dev();\nrefresh.sync(builder);"
      },
      router: {
        kind: "property",
        list: false,
        type: "Function",
        description: "HTTP middleware to handle developer tool routes like '/dev.js' and '/__ink_dev__'.",
        example: "const { router } = dev();\napp.use(router);"
      }
    },
    "Express Developer Tools": {
      refresh: {
        kind: "property",
        list: false,
        type: "RefreshServer",
        description: "The refresh server instance used to update clients.",
        example: "const { refresh } = dev();\nrefresh.sync(builder);"
      },
      router: {
        kind: "property",
        list: false,
        type: "Function",
        description: "Express middleware to handle developer tool routes like '/dev.js' and '/__ink_dev__'.",
        example: "const { router } = dev();\napp.use(router);"
      },
      view: {
        kind: "property",
        list: false,
        type: "Function",
        description: "Middleware used to setup an express view engine.",
        example: "const { view } = dev();\napp.engine('ink', view(compiler));"
      }
    }
  };

  // ink-component-resolver:/Users/cblanquera/server/projects/stackpress/ink/packages/ink-web/src/components/api/ui.ink
  var Ui_4c60dc54dc2ac695b83b = class extends import_InkComponent7.default {
    static component = ["ui", "Ui_4c60dc54dc2ac695b83b"];
    styles() {
      return ``;
    }
    template() {
      (0, import_ink3.classlist)().add(
        "block",
        "my-40",
        "scroll-hidden",
        "curved",
        "shadow-0-0-10-0-0-0-5"
      );
      const { start = "InkCompiler" } = (0, import_ink3.props)();
      const paths = (0, import_ink3.signal)([start]);
      const active = (0, import_ink3.signal)(start);
      const next = (e) => {
        const type = e.target.getAttribute("data-type");
        paths.value = [...paths.value, type];
        active.value = type;
      };
      const prev = () => {
        paths.value = paths.value.slice(0, paths.value.length - 1);
        active.value = paths.value[paths.value.length - 1];
      };
      return () => [
        import_InkRegistry7.default.createText(`
`, false),
        import_InkRegistry7.default.createElement("h3", { "class": `tx-secondary bg-t-2 tx-16 m-0 p-10` }, [
          import_InkRegistry7.default.createText(`
  `, false),
          ...!!(paths.value.length > 1) ? [
            import_InkRegistry7.default.createText(`
    `, false),
            import_InkRegistry7.default.createElement("a", { "class": `tx-t-1 cursor-pointer`, "click": prev }, [
              import_InkRegistry7.default.createText(`
      `, false),
              import_InkRegistry7.default.createElement("i", { "class": `fas fa-arrow-left` }, []).element,
              import_InkRegistry7.default.createText(`
    `, false)
            ]).element,
            import_InkRegistry7.default.createText(`
  `, false)
          ] : [],
          import_InkRegistry7.default.createText(`
  API: `, false),
          ...this._toNodeList(active.value),
          import_InkRegistry7.default.createText(`
`, false)
        ]).element,
        import_InkRegistry7.default.createText(`
`, false),
        import_InkRegistry7.default.createElement("div", { "class": `bg-t-0 p-10` }, [
          import_InkRegistry7.default.createText(`
  `, false),
          import_InkRegistry7.default.createElement("div", { "class": `relative mb-20 scroll-auto` }, [
            import_InkRegistry7.default.createText(`
    `, false),
            import_InkRegistry7.default.createElement("table", { "class": `w-full b-collapse` }, [
              import_InkRegistry7.default.createText(`
      `, false),
              import_InkRegistry7.default.createElement("thead", {}, [
                import_InkRegistry7.default.createText(`
        `, false),
                import_InkRegistry7.default.createElement("th", { "class": `p-10 tx-left tx-upper` }, [
                  import_InkRegistry7.default.createText(`Property`, false)
                ]).element,
                import_InkRegistry7.default.createText(`
        `, false),
                ...!active.value.includes("Emitter") ? [
                  import_InkRegistry7.default.createText(`
          `, false),
                  import_InkRegistry7.default.createElement("th", { "class": `p-10 tx-left tx-upper` }, [
                    import_InkRegistry7.default.createText(`Returns`, false)
                  ]).element,
                  import_InkRegistry7.default.createText(`
        `, false)
                ] : [],
                import_InkRegistry7.default.createText(`
        `, false),
                import_InkRegistry7.default.createElement("th", { "class": `p-10 tx-left tx-upper` }, [
                  import_InkRegistry7.default.createText(`Description`, false)
                ]).element,
                import_InkRegistry7.default.createText(`
      `, false)
              ]).element,
              import_InkRegistry7.default.createText(`
      `, false),
              import_InkRegistry7.default.createElement("tbody", {}, [
                import_InkRegistry7.default.createText(`
        `, false),
                ...Object.entries(types_default[active.value]).map(([key, prop]) => [
                  import_InkRegistry7.default.createText(`
          `, false),
                  import_InkRegistry7.default.createElement("tr", {}, [
                    import_InkRegistry7.default.createText(`
            `, false),
                    ...!!(prop.kind === "property") ? [
                      import_InkRegistry7.default.createText(`
              `, false),
                      import_InkRegistry7.default.createElement("td", { "class": `tx-primary tx-top tx-nowrap b-solid b-t-2 bx-0 bb-0 bt-1 p-10` }, [
                        import_InkRegistry7.default.createText(`
                `, false),
                        ...this._toNodeList(key),
                        import_InkRegistry7.default.createText(`
              `, false)
                      ]).element,
                      import_InkRegistry7.default.createText(`
              `, false),
                      ...!!types_default[prop.type] ? [
                        import_InkRegistry7.default.createText(`
                `, false),
                        import_InkRegistry7.default.createElement("td", { "class": `tx-top tx-nowrap b-solid b-t-2 bx-0 bb-0 bt-1 p-10` }, [
                          import_InkRegistry7.default.createText(`
                  `, false),
                          import_InkRegistry7.default.createElement("a", { "class": `tx-underline tx-info cursor-pointer`, "data-type": prop.type, "click": next }, [
                            import_InkRegistry7.default.createText(`
                    `, false),
                            ...this._toNodeList(prop.type),
                            import_InkRegistry7.default.createText(`
                  `, false)
                          ]).element,
                          ...this._toNodeList(prop.list ? "[]" : ""),
                          import_InkRegistry7.default.createText(`
                `, false)
                        ]).element,
                        import_InkRegistry7.default.createText(`
              `, false)
                      ] : true ? [
                        ,
                        import_InkRegistry7.default.createText(`
                `, false),
                        import_InkRegistry7.default.createElement("td", { "class": `tx-top tx-nowrap b-solid b-t-2 bx-0 bb-0 bt-1 p-10` }, [
                          import_InkRegistry7.default.createText(`
                  `, false),
                          ...this._toNodeList(prop.type),
                          ...this._toNodeList(prop.list ? "[]" : ""),
                          import_InkRegistry7.default.createText(`
                `, false)
                        ]).element,
                        import_InkRegistry7.default.createText(`
              `, false)
                      ] : [],
                      import_InkRegistry7.default.createText(`
            `, false)
                    ] : !!(prop.kind === "function") ? [
                      ,
                      import_InkRegistry7.default.createText(`
              `, false),
                      import_InkRegistry7.default.createElement("td", { "class": `tx-primary tx-top b-solid b-t-2 bx-0 bb-0 bt-1 p-10`, "nowrap": true }, [
                        import_InkRegistry7.default.createText(`
                `, false),
                        ...this._toNodeList(key),
                        import_InkRegistry7.default.createText(`(
                  `, false),
                        ...Object.entries(prop.args).map(([index, arg]) => [
                          import_InkRegistry7.default.createText(`
                    `, false),
                          ...!!(index > 0) ? [
                            import_InkRegistry7.default.createText(`, `, false)
                          ] : [],
                          import_InkRegistry7.default.createText(`
                    `, false),
                          ...this._toNodeList(arg.name),
                          import_InkRegistry7.default.createText(`: 
                    `, false),
                          ...!!types_default[arg.type] ? [
                            import_InkRegistry7.default.createText(`
                      `, false),
                            import_InkRegistry7.default.createElement("a", { "class": `tx-underline tx-info cursor-pointer`, "data-type": arg.type, "click": next }, [
                              import_InkRegistry7.default.createText(`
                        `, false),
                              ...this._toNodeList(arg.type),
                              import_InkRegistry7.default.createText(`
                      `, false)
                            ]).element,
                            ...this._toNodeList(arg.list ? "[]" : ""),
                            import_InkRegistry7.default.createText(`
                    `, false)
                          ] : true ? [
                            ,
                            import_InkRegistry7.default.createText(`
                      `, false),
                            ...this._toNodeList(arg.type),
                            ...this._toNodeList(arg.list ? "[]" : ""),
                            import_InkRegistry7.default.createText(`
                    `, false)
                          ] : [],
                          import_InkRegistry7.default.createText(`
                  `, false)
                        ]).flat(),
                        import_InkRegistry7.default.createText(`
                )
              `, false)
                      ]).element,
                      import_InkRegistry7.default.createText(`
              `, false),
                      ...!!types_default[prop.returns.type] ? [
                        import_InkRegistry7.default.createText(`
                `, false),
                        import_InkRegistry7.default.createElement("td", { "class": `tx-top tx-nowrap b-solid b-t-2 bx-0 bb-0 bt-1 p-10` }, [
                          import_InkRegistry7.default.createText(`
                  `, false),
                          import_InkRegistry7.default.createElement("a", { "class": `tx-underline tx-info cursor-pointer`, "data-type": prop.returns.type, "click": next }, [
                            import_InkRegistry7.default.createText(`
                    `, false),
                            ...this._toNodeList(prop.returns.type),
                            import_InkRegistry7.default.createText(`
                  `, false)
                          ]).element,
                          ...this._toNodeList(prop.returns.list ? "[]" : ""),
                          import_InkRegistry7.default.createText(`
                `, false)
                        ]).element,
                        import_InkRegistry7.default.createText(`
              `, false)
                      ] : true ? [
                        ,
                        import_InkRegistry7.default.createText(`
                `, false),
                        import_InkRegistry7.default.createElement("td", { "class": `tx-top tx-nowrap b-solid b-t-2 bx-0 bb-0 bt-1 p-10` }, [
                          import_InkRegistry7.default.createText(`
                  `, false),
                          ...this._toNodeList(prop.returns.type),
                          ...this._toNodeList(prop.returns.list ? "[]" : ""),
                          import_InkRegistry7.default.createText(`
                `, false)
                        ]).element,
                        import_InkRegistry7.default.createText(`
              `, false)
                      ] : [],
                      import_InkRegistry7.default.createText(`
            `, false)
                    ] : !!(prop.kind === "event") ? [
                      ,
                      import_InkRegistry7.default.createText(`
              `, false),
                      import_InkRegistry7.default.createElement("td", { "class": `tx-primary tx-top b-solid b-t-2 bx-0 bb-0 bt-1 p-10`, "nowrap": true }, [
                        import_InkRegistry7.default.createText(`
                `, false),
                        ...this._toNodeList(`on('${key}', (event: Event) => void)`),
                        import_InkRegistry7.default.createText(`
              `, false)
                      ]).element,
                      import_InkRegistry7.default.createText(`
            `, false)
                    ] : [],
                    import_InkRegistry7.default.createText(`
            `, false),
                    import_InkRegistry7.default.createElement("td", { "class": `tx-top tx-lh-24 b-solid b-t-2 bx-0 bb-0 bt-1 p-10` }, [
                      import_InkRegistry7.default.createText(`
              `, false),
                      ...!!prop.description ? [
                        import_InkRegistry7.default.createText(`
                `, false),
                        import_InkRegistry7.default.createElement("p", { "class": `pb-10` }, [
                          ...this._toNodeList(prop.description)
                        ]).element,
                        import_InkRegistry7.default.createText(`
                `, false),
                        ...!!prop.example ? [
                          import_InkRegistry7.default.createText(`
                  `, false),
                          import_InkRegistry7.default.createElement("h5", {}, [
                            import_InkRegistry7.default.createText(`Example`, false)
                          ]).element,
                          import_InkRegistry7.default.createText(`
                  `, false),
                          import_InkRegistry7.default.createComponent("api-ide-code", Code_d21b237295245a3b7d61, { "lang": `js` }, [
                            ...this._toNodeList(prop.example)
                          ]).element,
                          import_InkRegistry7.default.createText(` 
                `, false)
                        ] : [],
                        import_InkRegistry7.default.createText(`
              `, false)
                      ] : [],
                      import_InkRegistry7.default.createText(`
            `, false)
                    ]).element,
                    import_InkRegistry7.default.createText(`
          `, false)
                  ]).element,
                  import_InkRegistry7.default.createText(`
        `, false)
                ]).flat(),
                import_InkRegistry7.default.createText(`
      `, false)
              ]).element,
              import_InkRegistry7.default.createText(`
    `, false)
            ]).element,
            import_InkRegistry7.default.createText(`
  `, false)
          ]).element,
          import_InkRegistry7.default.createText(`
`, false)
        ]).element
      ];
    }
  };

  // ink-component-resolver:/Users/cblanquera/server/projects/stackpress/ink/packages/ink-web/src/components/ide/app/head.ink
  var import_InkRegistry8 = __toESM(require_InkRegistry());
  var import_InkComponent8 = __toESM(require_InkComponent());
  var import_ink4 = __toESM(require_ink());
  var Head_6db660ec31ca715d7e96 = class extends import_InkComponent8.default {
    static component = ["head", "Head_6db660ec31ca715d7e96"];
    styles() {
      return ``;
    }
    template() {
      (0, import_ink4.classlist)().add(
        "absolute",
        "top-0",
        "right-0",
        "left-170",
        "h-45",
        "bg-t-0",
        "z-1"
      );
      return () => [
        import_InkRegistry8.default.createText(`
`, false),
        import_InkRegistry8.default.createElement("header", { "class": `w-full h-full scroll-x-auto` }, [
          import_InkRegistry8.default.createText(`
  `, false),
          ...this._toNodeList((0, import_ink4.children)()),
          import_InkRegistry8.default.createText(`
`, false)
        ]).element
      ];
    }
  };

  // ink-component-resolver:/Users/cblanquera/server/projects/stackpress/ink/packages/ink-web/src/components/ide/app/left.ink
  var import_InkRegistry9 = __toESM(require_InkRegistry());
  var import_InkComponent9 = __toESM(require_InkComponent());
  var import_ink5 = __toESM(require_ink());
  var Left_5fb4822ce248e2b6fb4f = class extends import_InkComponent9.default {
    static component = ["left", "Left_5fb4822ce248e2b6fb4f"];
    styles() {
      return ``;
    }
    template() {
      (0, import_ink5.classlist)().add(
        "absolute",
        "top-0",
        "bottom-0",
        "left-0",
        "w-170",
        "bg-t-3",
        "b-solid",
        "b-t-2",
        "by-0",
        "bl-0",
        "br-1",
        "z-2"
      );
      return () => [
        import_InkRegistry9.default.createText(`
`, false),
        import_InkRegistry9.default.createElement("aside", { "class": `w-full h-full scroll-auto` }, [
          import_InkRegistry9.default.createText(`
  `, false),
          ...this._toNodeList((0, import_ink5.children)()),
          import_InkRegistry9.default.createText(`
`, false)
        ]).element
      ];
    }
  };

  // ink-component-resolver:/Users/cblanquera/server/projects/stackpress/ink/packages/ink-web/src/components/ide/app/main.ink
  var import_InkRegistry10 = __toESM(require_InkRegistry());
  var import_InkComponent10 = __toESM(require_InkComponent());
  var import_ink6 = __toESM(require_ink());
  var Main_d54fe27339c3e65ac735 = class extends import_InkComponent10.default {
    static component = ["main", "Main_d54fe27339c3e65ac735"];
    styles() {
      return ``;
    }
    template() {
      (0, import_ink6.classlist)().add(
        "absolute",
        "top-45",
        "right-0",
        "left-170",
        "bottom-0",
        "bg-black",
        "b-solid",
        "b-t-2",
        "bx-0",
        "bb-0",
        "bt-1"
      );
      return () => [
        import_InkRegistry10.default.createText(`
`, false),
        import_InkRegistry10.default.createElement("main", { "class": `w-full h-full scroll-auto` }, [
          import_InkRegistry10.default.createText(`
  `, false),
          ...this._toNodeList((0, import_ink6.children)()),
          import_InkRegistry10.default.createText(`
`, false)
        ]).element
      ];
    }
  };

  // ink-component-resolver:/Users/cblanquera/server/projects/stackpress/ink/packages/ink-web/src/components/ide/app.ink
  var import_InkRegistry11 = __toESM(require_InkRegistry());
  var import_InkComponent11 = __toESM(require_InkComponent());
  var import_ink7 = __toESM(require_ink());
  var App_ab38f0e847e1d047c1a8 = class extends import_InkComponent11.default {
    static component = ["app", "App_ab38f0e847e1d047c1a8"];
    styles() {
      return ``;
    }
    template() {
      const { title, height } = (0, import_ink7.props)();
      const style = height ? `height:${height}px` : "";
      return () => [
        import_InkRegistry11.default.createText(`
`, false),
        import_InkRegistry11.default.createElement("div", { "class": `curved scroll-hidden shadow-0-0-10-0-0-0-5` }, [
          import_InkRegistry11.default.createText(`
  `, false),
          import_InkRegistry11.default.createElement("div", { "class": `relative flex flex-center-y gap-10 p-10 bg-t-1 tx-c-999999 tx-16` }, [
            import_InkRegistry11.default.createText(`
    `, false),
            import_InkRegistry11.default.createElement("span", { "class": `bg-h-999999 pill h-10 w-10` }, []).element,
            import_InkRegistry11.default.createText(`
    `, false),
            import_InkRegistry11.default.createElement("span", { "class": `bg-h-999999 pill h-10 w-10` }, []).element,
            import_InkRegistry11.default.createText(`
    `, false),
            import_InkRegistry11.default.createElement("span", { "class": `bg-h-999999 pill h-10 w-10` }, []).element,
            import_InkRegistry11.default.createText(`
    `, false),
            import_InkRegistry11.default.createElement("span", { "class": `flex flex-center h-full w-full absolute top-0 left-0` }, [
              import_InkRegistry11.default.createText(`
      `, false),
              ...this._toNodeList(title),
              import_InkRegistry11.default.createText(`
    `, false)
            ]).element,
            import_InkRegistry11.default.createText(`
  `, false)
          ]).element,
          import_InkRegistry11.default.createText(`
  `, false),
          import_InkRegistry11.default.createElement("div", { "class": `bg-black tx-t-1 relative`, "style": style }, [
            ...this._toNodeList((0, import_ink7.children)())
          ]).element,
          import_InkRegistry11.default.createText(`
`, false)
        ]).element
      ];
    }
  };

  // ink-component-resolver:/Users/cblanquera/server/projects/stackpress/ink/packages/ink-web/src/components/i18n/translate.ink
  var import_InkRegistry12 = __toESM(require_InkRegistry());
  var import_InkComponent12 = __toESM(require_InkComponent());

  // src/components/i18n/index.ts
  var _ = function(phrase, ...variables) {
    let translation = translate(phrase);
    for (let i = 0; i < variables.length; i++) {
      translation = translation.replace("%s", String(variables[i]));
    }
    return translation;
  };
  var translate = function(phrase) {
    return phrase;
  };

  // ink-component-resolver:/Users/cblanquera/server/projects/stackpress/ink/packages/ink-web/src/components/i18n/translate.ink
  var Translate_b1ed083cf3561af1816f = class extends import_InkComponent12.default {
    static component = ["translate", "Translate_b1ed083cf3561af1816f"];
    styles() {
      return ``;
    }
    template() {
      const { trim = false, p = false, li = false, div = false } = this.props;
      const childlist = this.originalChildren;
      const phrase = [];
      const variables = [];
      for (const child of childlist) {
        if (typeof child === "string") {
          phrase.push(child);
        } else if (child instanceof Node && child.textContent) {
          phrase.push(child.textContent);
        } else {
          phrase.push("%s");
          variables.push(child);
        }
      }
      let words = phrase.join("");
      if (trim) {
        words = words.replace(/\s+/, " ").trim();
      }
      const chunks = translate(words).split("%s");
      const translations = [];
      for (let i = 0; i < chunks.length; i++) {
        translations.push(document.createTextNode(chunks[i]));
        if (variables[i]) {
          translations.push(variables[i]);
        }
      }
      return () => [
        import_InkRegistry12.default.createText(`
    `, false),
        ...!!p ? [
          import_InkRegistry12.default.createText(`
      `, false),
          import_InkRegistry12.default.createElement("p", {}, [
            ...this._toNodeList(translations)
          ]).element,
          import_InkRegistry12.default.createText(`
    `, false)
        ] : !!li ? [
          ,
          import_InkRegistry12.default.createText(`
      `, false),
          import_InkRegistry12.default.createElement("li", {}, [
            ...this._toNodeList(translations)
          ]).element,
          import_InkRegistry12.default.createText(`
    `, false)
        ] : !!div ? [
          ,
          import_InkRegistry12.default.createText(`
      `, false),
          import_InkRegistry12.default.createElement("div", {}, [
            ...this._toNodeList(translations)
          ]).element,
          import_InkRegistry12.default.createText(`
    `, false)
        ] : true ? [
          ,
          import_InkRegistry12.default.createText(`
      `, false),
          ...this._toNodeList(translations),
          import_InkRegistry12.default.createText(`
    `, false)
        ] : []
      ];
    }
  };

  // ink-document-client-resolver:/Users/cblanquera/server/projects/stackpress/ink/packages/ink-web/src/pages/docs/getting-started.ink
  import_InkEmitter.default.once("ready", () => {
    const script = document.querySelector("script[data-app]");
    if (!script) {
      throw import_Exception.default.for("APP_DATA not found");
    }
    try {
      const data2 = atob(script.getAttribute("data-app"));
      window.__APP_DATA__ = JSON.parse(data2);
      Object.entries(window.__APP_DATA__).forEach(([key, value]) => {
        import_data.default.set(key, value);
      });
    } catch (error) {
      throw import_Exception.default.for("APP_DATA is not a valid JSON");
    }
    import_data.default.set("current", "document");
    const url = "/docs/getting-started.html";
    const title = _("Getting Started - Ink reactive web component template engine.");
    const description = _("How to install, setup and use Ink in a project.");
    const toggle = () => {
      document.getElementsByTagName("panel-layout")[0].toggle("left");
    };
    const examples = "https://github.com/stackpress/ink/tree/main/examples";
    import_data.default.delete("current");
    const __BINDINGS__ = { "2": { "class": `flex flex-center-y px-20 py-15 m-0 bg-t-1` }, "3": { "class": `fas fa-fw fa-bars cursor-pointer py-5 pr-10 none md-inline-block tx-t-1`, "click": toggle }, "4": { "class": `flex-grow` }, "5": { "class": `flex flex-center-y` }, "6": { "class": `tx-primary`, "href": `/ink/docs/index.html` }, "7": { "class": `tx-t-1 tx-5xl ml-10`, "href": `https://github.com/stackpress/ink`, "target": `_blank` }, "8": { "class": `fab fa-github` }, "9": { "class": `bg-h-cb3837 pill tx-t-1 tx-lg ml-5 p-5 tx-center`, "href": `https://www.npmjs.com/package/@stackpress/ink`, "target": `_blank` }, "10": { "class": `fab fa-npm tx-white` }, "11": { "left": true }, "12": { "class": `flex flex-center-y bg-t-2 py-15 pr-5 pl-10` }, "13": { "href": `/ink` }, "14": { "class": `h-26 mr-10`, "src": `/ink/ink-icon.png`, "alt": `Ink Logo` }, "15": { "class": `flex-grow m-0 tx-upper` }, "16": { "class": `tx-primary`, "href": `/ink` }, "17": { "class": `fas fa-fw fa-chevron-left cursor-pointer none md-inline-block`, "click": toggle }, "18": { "class": `bg-t-1 scroll-auto h-calc-full-60` }, "19": { "class": `bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-0 pt-20 pb-10 pl-10 tx-upper` }, "20": { "class": `block tx-info py-10 pl-10`, "href": `/ink/docs/index.html` }, "21": { "class": `block tx-info py-10 pl-10 tx-bold`, "href": `/ink/docs/getting-started.html` }, "22": { "class": `bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper` }, "23": { "class": `block tx-info py-10 pl-10`, "href": `/ink/docs/markup-syntax.html` }, "24": { "class": `block tx-info py-10 pl-10`, "href": `/ink/docs/state-management.html` }, "25": { "class": `block tx-info py-10 pl-10`, "href": `/ink/docs/component-strategy.html` }, "26": { "class": `block tx-info py-10 pl-10`, "href": `/ink/docs/compiler-api.html` }, "27": { "class": `block tx-info py-10 pl-10`, "href": `/ink/docs/client-api.html` }, "28": { "class": `bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper` }, "29": { "class": `block tx-info py-10 pl-10`, "href": `/ink/docs/template-engine.html` }, "30": { "class": `block tx-info py-10 pl-10`, "href": `/ink/docs/single-page.html` }, "31": { "class": `block tx-info py-10 pl-10`, "href": `/ink/docs/static-site.html` }, "32": { "class": `block tx-info py-10 pl-10`, "href": `/ink/docs/component-publisher.html` }, "33": { "class": `block tx-info py-10 pl-10 mb-100`, "href": `/ink/docs/developer-tools.html` }, "34": { "right": true }, "35": { "class": `m-0 px-10 py-20 h-calc-full-40 bg-t-2 scroll-auto` }, "36": { "class": `tx-muted tx-14 mb-0 mt-0 pb-10 tx-uppercase` }, "37": { "class": `tx-14 tx-lh-32` }, "38": { "class": `block tx-t-0`, "href": `#http` }, "39": { "class": `block tx-t-0`, "href": `#develop` }, "40": { "class": `block tx-t-0`, "href": `#cache` }, "41": { "class": `block tx-t-0`, "href": `#tailwind` }, "42": { "class": `block tx-t-0`, "href": `#express` }, "45": { "class": `tx-primary tx-uppercase tx-30 py-20` }, "46": { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "47": { "title": `Terminal`, "class": `py-20` }, "48": { "lang": `bash` }, "49": { "solid": true, "curved": true, "info": true, "class": `my-20 tx-lh-24` }, "50": { "name": `info-circle` }, "52": { "target": `_blank`, "class": `tx-white tx-underline`, "href": `https://marketplace.visualstudio.com/items?itemName=stackpress.ink-language` }, "53": { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "54": { "inline": true }, "55": { "title": `src/index.ts`, "class": `py-20` }, "56": { "class": `scroll-auto`, "lang": `js`, "numbers": true, "trim": true, "detab": 14 }, "57": { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "58": { "inline": true }, "59": { "title": `src/page.ink`, "class": `py-20` }, "60": { "class": `scroll-auto`, "numbers": true, "trim": true, "detab": 14 }, "61": { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "62": { "title": `Terminal`, "class": `py-20` }, "63": { "lang": `bash` }, "64": { "name": `http` }, "65": { "class": `tx-primary tx-uppercase tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }, "66": { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "67": { "inline": true }, "68": { "solid": true, "curved": true, "info": true, "class": `my-20 tx-lh-24` }, "69": { "name": `info-circle` }, "71": { "height": 410, "title": `With NodeJS HTTP` }, "73": { "class": `flex scroll-x-auto pt-5 pl-5` }, "74": { "on": true, "class": `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, "active": `bg-black tx-white`, "inactive": `bg-t-1 tx-t-1`, "group": `http`, "selector": `#http-index-ts` }, "75": { "class": `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, "active": `bg-black tx-white`, "inactive": `bg-t-1 tx-t-1`, "group": `http`, "selector": `#http-page-ink` }, "76": { "class": `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, "active": `bg-black tx-white`, "inactive": `bg-t-1 tx-t-1`, "group": `http`, "selector": `#http-package-json` }, "78": { "class": `p-5` }, "79": { "name": `chevron-down` }, "81": { "on": true, "class": `pl-15 pt-10 block`, "active": `tx-white`, "inactive": `tx-t-1`, "group": `http`, "selector": `#http-index-ts` }, "82": { "name": `file` }, "83": { "class": `pl-15 pt-10 block`, "active": `tx-white`, "inactive": `tx-t-1`, "group": `http`, "selector": `#http-page-ink` }, "84": { "name": `file` }, "85": { "class": `pt-10 block`, "active": `tx-white`, "inactive": `tx-t-1`, "group": `http`, "selector": `#http-package-json` }, "86": { "name": `file` }, "88": { "id": `http-index-ts`, "lang": `js`, "numbers": true, "trim": true, "detab": 16 }, "89": { "id": `http-page-ink`, "style": `display:none`, "numbers": true, "trim": true, "detab": 16 }, "90": { "id": `http-package-json`, "style": `display:none`, "lang": `js`, "numbers": true, "trim": true, "detab": 16 }, "91": { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "92": { "title": `Terminal`, "class": `py-20` }, "93": { "lang": `bash` }, "94": { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "95": { "lang": `js`, "inline": true }, "96": { "lang": `js`, "inline": true }, "97": { "start": `Render Methods` }, "98": { "name": `develop` }, "99": { "class": `tx-primary tx-uppercase tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }, "100": { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "101": { "lang": `js`, "inline": true }, "102": { "title": `Terminal`, "class": `py-20` }, "103": { "lang": `bash` }, "104": { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "105": { "lang": `js`, "inline": true }, "106": { "lang": `js`, "inline": true }, "107": { "title": `src/index.ts`, "class": `py-20` }, "108": { "lang": `js`, "numbers": true, "trim": true, "detab": 14 }, "109": { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "110": { "inline": true, "lang": `js` }, "111": { "inline": true, "lang": `js` }, "112": { "start": `DeveloperOptions` }, "113": { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "114": { "start": `Developer Tools` }, "115": { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "116": { "lang": `js`, "inline": true }, "117": { "inline": true }, "118": { "title": `src/page.ink`, "class": `py-20` }, "119": { "numbers": true, "trim": true, "detab": 14 }, "120": { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "121": { "height": 410, "title": `With Developer Tools`, "class": `py-20` }, "123": { "class": `flex scroll-x-auto pt-5 pl-5` }, "124": { "on": true, "class": `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, "active": `bg-black tx-white`, "inactive": `bg-t-1 tx-t-1`, "group": `develop`, "selector": `#develop-index-ts` }, "125": { "class": `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, "active": `bg-black tx-white`, "inactive": `bg-t-1 tx-t-1`, "group": `develop`, "selector": `#develop-page-ink` }, "126": { "class": `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, "active": `bg-black tx-white`, "inactive": `bg-t-1 tx-t-1`, "group": `develop`, "selector": `#develop-package-json` }, "128": { "class": `p-5` }, "129": { "name": `chevron-down` }, "131": { "on": true, "class": `pl-15 pt-10 block`, "active": `tx-white`, "inactive": `tx-t-1`, "group": `develop`, "selector": `#develop-index-ts` }, "132": { "name": `file` }, "133": { "class": `pl-15 pt-10 block`, "active": `tx-white`, "inactive": `tx-t-1`, "group": `develop`, "selector": `#develop-page-ink` }, "134": { "name": `file` }, "135": { "class": `pt-10 block`, "active": `tx-white`, "inactive": `tx-t-1`, "group": `develop`, "selector": `#develop-package-json` }, "136": { "name": `file` }, "138": { "id": `develop-index-ts`, "lang": `js`, "numbers": true, "trim": true, "detab": 16 }, "139": { "id": `develop-page-ink`, "style": `display:none`, "numbers": true, "trim": true, "detab": 16 }, "140": { "id": `develop-package-json`, "style": `display:none`, "lang": `js`, "numbers": true, "trim": true, "detab": 16 }, "141": { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "142": { "lang": `js`, "inline": true }, "143": { "title": `Terminal`, "class": `py-20` }, "144": { "lang": `bash` }, "145": { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "146": { "lang": `js`, "inline": true }, "147": { "name": `cache` }, "148": { "class": `tx-primary tx-uppercase tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }, "149": { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "150": { "lang": `js`, "inline": true }, "151": { "title": `src/index.ts`, "class": `py-20` }, "152": { "lang": `js`, "numbers": true, "trim": true, "detab": 14 }, "153": { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "154": { "lang": `js`, "inline": true }, "155": { "title": `src/index.ts`, "class": `py-20` }, "156": { "lang": `js`, "numbers": true, "trim": true, "detab": 14 }, "157": { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "158": { "title": `Terminal`, "class": `py-20` }, "159": { "lang": `bash` }, "160": { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "161": { "lang": `js`, "inline": true }, "162": { "lang": `js`, "inline": true }, "163": { "height": 400, "title": `cache.ts (Internal)`, "class": `py-20` }, "164": { "lang": `js`, "numbers": true, "trim": true, "detab": 14 }, "165": { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "166": { "start": `EventEmitter` }, "167": { "name": `tailwind` }, "168": { "class": `tx-primary tx-uppercase tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }, "169": { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "170": { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "171": { "inline": true }, "172": { "solid": true, "curved": true, "warning": true, "class": `my-20 tx-lh-24` }, "173": { "name": `exclamation-triangle` }, "175": { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "176": { "inline": true, "lang": `js` }, "177": { "title": `Terminal`, "class": `py-20` }, "178": { "lang": `bash` }, "179": { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "180": { "inline": true, "lang": `js` }, "181": { "inline": true, "lang": `js` }, "182": { "title": `src/index.ts`, "class": `py-20` }, "183": { "lang": `js`, "numbers": true, "trim": true, "detab": 14 }, "184": { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "185": { "inline": true, "lang": `js` }, "186": { "inline": true }, "187": { "inline": true, "lang": `js` }, "188": { "title": `src/page.ink`, "class": `py-20` }, "189": { "numbers": true, "trim": true, "detab": 14 }, "190": { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "191": { "height": 410, "title": `With TailwindCSS`, "class": `py-20` }, "193": { "class": `flex scroll-x-auto pt-5 pl-5` }, "194": { "on": true, "class": `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, "active": `bg-black tx-white`, "inactive": `bg-t-1 tx-t-1`, "group": `tailwind`, "selector": `#tailwind-index-ts` }, "195": { "class": `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, "active": `bg-black tx-white`, "inactive": `bg-t-1 tx-t-1`, "group": `tailwind`, "selector": `#tailwind-page-ink` }, "196": { "class": `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, "active": `bg-black tx-white`, "inactive": `bg-t-1 tx-t-1`, "group": `tailwind`, "selector": `#tailwind-package-json` }, "198": { "class": `p-5` }, "199": { "name": `chevron-down` }, "201": { "on": true, "class": `pl-15 pt-10 block`, "active": `tx-white`, "inactive": `tx-t-1`, "group": `tailwind`, "selector": `#tailwind-index-ts` }, "202": { "name": `file` }, "203": { "class": `pl-15 pt-10 block`, "active": `tx-white`, "inactive": `tx-t-1`, "group": `tailwind`, "selector": `#tailwind-page-ink` }, "204": { "name": `file` }, "205": { "class": `pt-10 block`, "active": `tx-white`, "inactive": `tx-t-1`, "group": `tailwind`, "selector": `#tailwind-package-json` }, "206": { "name": `file` }, "208": { "id": `tailwind-index-ts`, "lang": `js`, "numbers": true, "trim": true, "detab": 16 }, "209": { "id": `tailwind-page-ink`, "style": `display:none`, "numbers": true, "trim": true, "detab": 16 }, "210": { "id": `tailwind-package-json`, "style": `display:none`, "lang": `js`, "numbers": true, "trim": true, "detab": 16 }, "211": { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "212": { "title": `Terminal`, "class": `py-20` }, "213": { "lang": `bash` }, "214": { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "215": { "lang": `js`, "inline": true }, "216": { "lang": `js`, "inline": true }, "217": { "name": `express` }, "218": { "class": `tx-primary tx-uppercase tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }, "219": { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "220": { "inline": true, "lang": `js` }, "221": { "title": `Terminal`, "class": `py-20` }, "222": { "lang": `bash` }, "223": { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "224": { "inline": true, "lang": `js` }, "225": { "inline": true, "lang": `js` }, "226": { "inline": true, "lang": `js` }, "227": { "inline": true, "lang": `js` }, "228": { "start": `Express Developer Tools` }, "229": { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "230": { "inline": true, "lang": `js` }, "231": { "inline": true, "lang": `js` }, "232": { "numbers": true, "trim": true, "detab": 12, "lang": `js`, "class": `py-20` }, "233": { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "234": { "inline": true, "lang": `js` }, "235": { "numbers": true, "trim": true, "detab": 12, "class": `py-20` }, "236": { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "237": { "height": 410, "title": `With ExpressJS`, "class": `py-20` }, "239": { "class": `flex scroll-x-auto pt-5 pl-5` }, "240": { "on": true, "class": `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, "active": `bg-black tx-white`, "inactive": `bg-t-1 tx-t-1`, "group": `express`, "selector": `#express-index-ts` }, "241": { "class": `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, "active": `bg-black tx-white`, "inactive": `bg-t-1 tx-t-1`, "group": `express`, "selector": `#express-page-ink` }, "242": { "class": `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, "active": `bg-black tx-white`, "inactive": `bg-t-1 tx-t-1`, "group": `express`, "selector": `#express-package-json` }, "244": { "class": `p-5` }, "245": { "name": `chevron-down` }, "247": { "on": true, "class": `pl-15 pt-10 block`, "active": `tx-white`, "inactive": `tx-t-1`, "group": `express`, "selector": `#express-index-ts` }, "248": { "name": `file` }, "249": { "class": `pl-15 pt-10 block`, "active": `tx-white`, "inactive": `tx-t-1`, "group": `express`, "selector": `#express-page-ink` }, "250": { "name": `file` }, "251": { "class": `pt-10 block`, "active": `tx-white`, "inactive": `tx-t-1`, "group": `express`, "selector": `#express-package-json` }, "252": { "name": `file` }, "254": { "id": `express-index-ts`, "lang": `js`, "numbers": true, "trim": true, "detab": 16 }, "255": { "id": `express-page-ink`, "style": `display:none`, "numbers": true, "trim": true, "detab": 16 }, "256": { "id": `express-package-json`, "style": `display:none`, "lang": `js`, "numbers": true, "trim": true, "detab": 16 }, "257": { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "258": { "title": `Terminal`, "class": `py-20` }, "259": { "lang": `bash` }, "260": { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "261": { "lang": `js`, "inline": true }, "262": { "class": `tx-t-1 tx-uppercase tx-22 pt-40 pb-20` }, "263": { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "265": { "class": `py-5` }, "266": { "class": `tx-t-1 tx-underline`, "target": `_blank`, "href": `${examples}/with-fastify` }, "267": { "class": `py-5` }, "268": { "class": `tx-t-1 tx-underline`, "target": `_blank`, "href": `${examples}/with-hapi` }, "269": { "class": `py-5` }, "270": { "class": `tx-t-1 tx-underline`, "target": `_blank`, "href": `${examples}/with-koa` }, "271": { "class": `py-5` }, "272": { "class": `tx-t-1 tx-underline`, "target": `_blank`, "href": `${examples}/with-nest` }, "273": { "class": `py-5` }, "274": { "class": `tx-t-1 tx-underline`, "target": `_blank`, "href": `${examples}/with-restify` }, "275": { "class": `py-5` }, "276": { "class": `tx-t-1 tx-underline`, "target": `_blank`, "href": `${examples}/with-webpack` }, "277": { "p": true, "trim": true, "class": `tx-lh-36 py-10` }, "279": { "class": `py-5` }, "280": { "class": `tx-t-1 tx-underline`, "href": `/ink/docs/template-engine.html` }, "281": { "class": `py-5` }, "282": { "class": `tx-t-1 tx-underline`, "href": `/ink/docs/single-page.html` }, "283": { "class": `py-5` }, "284": { "class": `tx-t-1 tx-underline`, "href": `/ink/docs/static-site.html` }, "285": { "class": `py-5` }, "286": { "class": `tx-t-1 tx-underline`, "href": `/ink/docs/component-publisher.html` }, "287": { "class": `flex` }, "288": { "class": `tx-primary py-40`, "href": `/ink/docs/index.html` }, "289": { "name": `chevron-left`, "theme": `tx-1` }, "290": { "class": `flex-grow tx-right tx-primary py-40`, "href": `/ink/docs/markup-syntax.html` }, "291": { "name": `chevron-right`, "theme": `tx-1` }, "292": { "class": `foot` } };
    for (const element of document.body.querySelectorAll("*")) {
      const attributes = Object.fromEntries(
        Array.from(element.attributes).map((attribute) => [
          attribute.nodeName,
          attribute.nodeValue.length > 0 ? attribute.nodeValue : true
        ])
      );
      const id = String(import_InkRegistry13.default.elements.size);
      if (__BINDINGS__[id]) {
        Object.assign(attributes, __BINDINGS__[id]);
      }
      import_InkRegistry13.default.register(element, attributes);
    }
    if (!customElements.getName(Panel_aa88a09231e81898df1b)) {
      customElements.define("panel-layout", Panel_aa88a09231e81898df1b);
    }
    if (!customElements.getName(Alert_7957696a43e396d3ffc8)) {
      customElements.define("element-alert", Alert_7957696a43e396d3ffc8);
    }
    if (!customElements.getName(Icon_a3faebb4ed7a157e1d84)) {
      customElements.define("element-icon", Icon_a3faebb4ed7a157e1d84);
    }
    if (!customElements.getName(Tab_9cc7ea04d114d8387d70)) {
      customElements.define("element-tab", Tab_9cc7ea04d114d8387d70);
    }
    if (!customElements.getName(Docs_7e4942547226dfeef0ae)) {
      customElements.define("api-docs", Docs_7e4942547226dfeef0ae);
    }
    if (!customElements.getName(Ui_4c60dc54dc2ac695b83b)) {
      customElements.define("api-ui", Ui_4c60dc54dc2ac695b83b);
    }
    if (!customElements.getName(Head_6db660ec31ca715d7e96)) {
      customElements.define("app-head", Head_6db660ec31ca715d7e96);
    }
    if (!customElements.getName(Left_5fb4822ce248e2b6fb4f)) {
      customElements.define("app-left", Left_5fb4822ce248e2b6fb4f);
    }
    if (!customElements.getName(Main_d54fe27339c3e65ac735)) {
      customElements.define("app-main", Main_d54fe27339c3e65ac735);
    }
    if (!customElements.getName(App_ab38f0e847e1d047c1a8)) {
      customElements.define("ide-app", App_ab38f0e847e1d047c1a8);
    }
    if (!customElements.getName(Code_d21b237295245a3b7d61)) {
      customElements.define("ide-code", Code_d21b237295245a3b7d61);
    }
    if (!customElements.getName(Translate_b1ed083cf3561af1816f)) {
      customElements.define("i18n-translate", Translate_b1ed083cf3561af1816f);
    }
    import_InkEmitter.default.emit("mounted", document.body);
  });
  var components = {
    "PanelLayout_aa88a09231e81898df1b": Panel_aa88a09231e81898df1b,
    "ElementAlert_7957696a43e396d3ffc8": Alert_7957696a43e396d3ffc8,
    "ElementIcon_a3faebb4ed7a157e1d84": Icon_a3faebb4ed7a157e1d84,
    "ElementTab_9cc7ea04d114d8387d70": Tab_9cc7ea04d114d8387d70,
    "ApiDocs_7e4942547226dfeef0ae": Docs_7e4942547226dfeef0ae,
    "ApiUi_4c60dc54dc2ac695b83b": Ui_4c60dc54dc2ac695b83b,
    "ApiIdeCode_d21b237295245a3b7d61": Code_d21b237295245a3b7d61,
    "AppHead_6db660ec31ca715d7e96": Head_6db660ec31ca715d7e96,
    "AppLeft_5fb4822ce248e2b6fb4f": Left_5fb4822ce248e2b6fb4f,
    "AppMain_d54fe27339c3e65ac735": Main_d54fe27339c3e65ac735,
    "IdeApp_ab38f0e847e1d047c1a8": App_ab38f0e847e1d047c1a8,
    "IdeCode_d21b237295245a3b7d61": Code_d21b237295245a3b7d61,
    "I18nTranslate_b1ed083cf3561af1816f": Translate_b1ed083cf3561af1816f
  };
  var BUILD_ID = "e06f4d82f045144e41f0";
  return __toCommonJS(getting_started_exports);
})();
/*! Bundled license information:

prismjs/prism.js:
  (**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   *)
*/

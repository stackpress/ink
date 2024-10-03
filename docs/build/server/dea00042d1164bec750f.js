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
      var InkException = class extends Error {
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
      exports.default = InkException;
    }
  });

  // ../ink/dist/server/InkCollection.js
  var require_InkCollection = __commonJS({
    "../ink/dist/server/InkCollection.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var InkCollection = class {
        get length() {
          return this._elements.size;
        }
        constructor(elements = []) {
          this._elements = /* @__PURE__ */ new Set();
          elements.forEach((element) => this._elements.add(element));
        }
        add(element) {
          this._elements.add(element);
        }
        toArray() {
          return Array.from(this._elements);
        }
        toString() {
          return Array.from(this._elements).filter(Boolean).map((child) => child.toString()).join("");
        }
      };
      exports.default = InkCollection;
    }
  });

  // ../ink/dist/server/data.js
  var require_data = __commonJS({
    "../ink/dist/server/data.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var data = /* @__PURE__ */ new Map();
      exports.default = data;
    }
  });

  // ../ink/dist/server/InkText.js
  var require_InkText = __commonJS({
    "../ink/dist/server/InkText.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var InkText = class {
        get value() {
          return this._escape ? this._value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") : this._value;
        }
        constructor(value, escape = false) {
          this._escape = escape;
          this._value = value;
        }
        toString() {
          return this.value;
        }
      };
      exports.default = InkText;
    }
  });

  // ../ink/dist/server/InkElement.js
  var require_InkElement = __commonJS({
    "../ink/dist/server/InkElement.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var InkCollection_1 = __importDefault(require_InkCollection());
      var selfClosingTags = [
        "area",
        "base",
        "br",
        "col",
        "embed",
        "hr",
        "img",
        "input",
        "link",
        "meta",
        "param",
        "source",
        "track",
        "wbr"
      ];
      var InkElement2 = class {
        get attributes() {
          return this._attributes;
        }
        get children() {
          return this._children;
        }
        get name() {
          return this._name;
        }
        get props() {
          return this._props;
        }
        constructor(name, attributes = {}, props = "", children = []) {
          this._attributes = {};
          this._name = name;
          this._attributes = attributes;
          this._props = props;
          this._children = new InkCollection_1.default(children);
        }
        toString() {
          const entries = Object.entries(this._attributes);
          const attributes = entries.length > 0 ? " " + entries.map(([key, value]) => {
            if (typeof value === "string" && !/["<>\n]/.test(value)) {
              return `${key}="${value}"`;
            } else if (typeof value === "boolean") {
              return value ? key : "";
            }
          }).join(" ") : "";
          if (selfClosingTags.includes(this._name)) {
            return `<${this._name}${attributes} />`;
          }
          const children = this._children.toString();
          return `<${this._name}${attributes}>${children}</${this._name}>`;
        }
      };
      exports.default = InkElement2;
    }
  });

  // ../ink/dist/server/InkRegistry.js
  var require_InkRegistry = __commonJS({
    "../ink/dist/server/InkRegistry.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var InkText_1 = __importDefault(require_InkText());
      var InkElement_1 = __importDefault(require_InkElement());
      var InkRegistry2 = class {
        static render(markup) {
          return markup.filter(Boolean).map((child) => child.toString()).join("");
        }
        static registry(markup, registry = /* @__PURE__ */ new Set()) {
          markup.forEach((node) => {
            if (node instanceof InkElement_1.default) {
              if (!["html", "head", "body"].includes(node.name)) {
                registry.add(node);
              }
              if (node.name !== "head" && node.children.length > 0) {
                this.registry(node.children.toArray(), registry);
              }
            }
          });
          return registry;
        }
        static createElement(name, attributes, props, children = []) {
          return new InkElement_1.default(name, attributes, props, children);
        }
        static createText(value, escape = true) {
          return new InkText_1.default(value, escape);
        }
      };
      exports.default = InkRegistry2;
    }
  });

  // ../ink/dist/server/InkDocument.js
  var require_InkDocument = __commonJS({
    "../ink/dist/server/InkDocument.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var Exception_1 = __importDefault(require_Exception());
      var data_1 = __importDefault(require_data());
      var InkRegistry_1 = __importDefault(require_InkRegistry());
      var InkDocument2 = class {
        bindings() {
          const registry = InkRegistry_1.default.registry(this.template());
          const bindings = Array.from(registry.values()).map((element, id) => {
            return element.props !== "{ }" ? `'${id}': ${element.props}` : "";
          }).filter((binding) => binding !== "").join(", ");
          return `{ ${bindings} }`;
        }
        render(props = {}) {
          data_1.default.set("props", props || {});
          data_1.default.set("env", Object.assign(Object.assign({}, process.env || {}), { BUILD_ID: this.id(), APP_DATA: btoa(JSON.stringify(Object.assign(Object.assign({}, Object.fromEntries(data_1.default.entries())), { env: Object.assign(Object.assign({}, Object.fromEntries(Object.entries(process.env || {}).filter((entry) => entry[0].startsWith("PUBLIC_")))), { BUILD_ID: this.id() }) }))) }));
          const children = this.template();
          let document = InkRegistry_1.default.render(children).trim();
          if (!document.toLowerCase().startsWith("<html")) {
            throw Exception_1.default.for("Document must start with an <html> tag.");
          }
          return `<!DOCTYPE html>
${document}`;
        }
        _toNodeList(value) {
          if (typeof value === "object" && typeof value.nodeType === "number") {
            return [value];
          }
          if (Array.isArray(value)) {
            if (value.every((item) => typeof item === "object" && typeof item.nodeType === "number")) {
              return value;
            }
          }
          return [InkRegistry_1.default.createText(String(value))];
        }
      };
      exports.default = InkDocument2;
    }
  });

  // ../ink/dist/server/InkEmitter.js
  var require_InkEmitter = __commonJS({
    "../ink/dist/server/InkEmitter.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.InkEmitter = void 0;
      var InkEmitter = class {
        emit(event, target) {
          return this;
        }
        on(event, callback) {
          return this;
        }
        once(event, callback) {
          return this;
        }
        unbind(event, callback) {
          return this;
        }
      };
      exports.InkEmitter = InkEmitter;
      var emitter = new InkEmitter();
      exports.default = emitter;
    }
  });

  // ../ink/dist/server/env.js
  var require_env = __commonJS({
    "../ink/dist/server/env.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var data_1 = __importDefault(require_data());
      function env2(name) {
        const env3 = data_1.default.get("env") || {};
        if (name) {
          return env3[name] || null;
        }
        return env3;
      }
      exports.default = env2;
    }
  });

  // ../ink/dist/server/props.js
  var require_props = __commonJS({
    "../ink/dist/server/props.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.default = props;
      var data_1 = __importDefault(require_data());
      function props() {
        return data_1.default.get("props") || {};
      }
    }
  });

  // ../ink/dist/server.js
  var require_server = __commonJS({
    "../ink/dist/server.js"(exports) {
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
      exports.InkText = exports.InkException = exports.InkEmitter = exports.InkElement = exports.InkRegistry = exports.InkDocument = exports.InkCollection = exports.props = exports.emitter = exports.env = exports.data = void 0;
      var Exception_1 = __importDefault(require_Exception());
      exports.InkException = Exception_1.default;
      var InkCollection_1 = __importDefault(require_InkCollection());
      exports.InkCollection = InkCollection_1.default;
      var InkDocument_1 = __importDefault(require_InkDocument());
      exports.InkDocument = InkDocument_1.default;
      var InkRegistry_1 = __importDefault(require_InkRegistry());
      exports.InkRegistry = InkRegistry_1.default;
      var InkElement_1 = __importDefault(require_InkElement());
      exports.InkElement = InkElement_1.default;
      var InkEmitter_1 = __importStar(require_InkEmitter());
      exports.emitter = InkEmitter_1.default;
      Object.defineProperty(exports, "InkEmitter", { enumerable: true, get: function() {
        return InkEmitter_1.InkEmitter;
      } });
      var InkText_1 = __importDefault(require_InkText());
      exports.InkText = InkText_1.default;
      var data_1 = __importDefault(require_data());
      exports.data = data_1.default;
      var env_1 = __importDefault(require_env());
      exports.env = env_1.default;
      var props_1 = __importDefault(require_props());
      exports.props = props_1.default;
    }
  });

  // ../ink/server.js
  var require_server2 = __commonJS({
    "../ink/server.js"(exports, module) {
      module.exports = { ...require_server() };
    }
  });

  // ink-document-server-resolver:/Users/cblanquera/server/projects/stackpress/ink/packages/ink-web/src/pages/index.ink
  var pages_exports = {};
  __export(pages_exports, {
    default: () => Index_dea00042d1164bec750f
  });
  var import_server = __toESM(require_server2());
  var import_server2 = __toESM(require_server2());

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

  // ink-document-server-resolver:/Users/cblanquera/server/projects/stackpress/ink/packages/ink-web/src/pages/index.ink
  var Index_dea00042d1164bec750f = class extends import_server.InkDocument {
    id() {
      return "dea00042d1164bec750f";
    }
    styles() {
      return `@ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;`;
    }
    template() {
      const url = "/ink/index.html";
      const title = _("Ink - The reactive web component template engine.");
      const description = _("Ink is a template engine that generates web components and support reactivity.");
      return [
        import_server.InkRegistry.createText(`
`, false),
        import_server.InkRegistry.createElement("html", {}, "{ }", [
          import_server.InkRegistry.createText(`
  `, false),
          ...[
            import_server.InkRegistry.createElement("head", {}, "{ }", [
              import_server.InkRegistry.createText(`
  `, false),
              import_server.InkRegistry.createElement("meta", { "charset": `utf-8` }, "{ 'charset': `utf-8` }"),
              import_server.InkRegistry.createText(`
  `, false),
              import_server.InkRegistry.createElement("meta", { "name": `viewport`, "content": `width=device-width, initial-scale=1` }, "{ 'name': `viewport`, 'content': `width=device-width, initial-scale=1` }"),
              import_server.InkRegistry.createText(`
  `, false),
              import_server.InkRegistry.createElement("title", {}, "{ }", [
                ...this._toNodeList(title)
              ]),
              import_server.InkRegistry.createText(`
  `, false),
              import_server.InkRegistry.createElement("meta", { "name": `description`, "content": description }, "{ 'name': `description`, 'content': description }"),
              import_server.InkRegistry.createText(`
  `, false),
              import_server.InkRegistry.createElement("meta", { "property": `og:title`, "content": title }, "{ 'property': `og:title`, 'content': title }"),
              import_server.InkRegistry.createText(`
  `, false),
              import_server.InkRegistry.createElement("meta", { "property": `og:description`, "content": description }, "{ 'property': `og:description`, 'content': description }"),
              import_server.InkRegistry.createText(`
  `, false),
              import_server.InkRegistry.createElement("meta", { "property": `og:image`, "content": `https://stackpress.github.io/ink/ink-logo.png` }, "{ 'property': `og:image`, 'content': `https://stackpress.github.io/ink/ink-logo.png` }"),
              import_server.InkRegistry.createText(`
  `, false),
              import_server.InkRegistry.createElement("meta", { "property": `og:url`, "content": `https://stackpress.github.io/ink${url}` }, "{ 'property': `og:url`, 'content': `https://stackpress.github.io/ink${url}` }"),
              import_server.InkRegistry.createText(`
  `, false),
              import_server.InkRegistry.createElement("meta", { "property": `og:type`, "content": `website` }, "{ 'property': `og:type`, 'content': `website` }"),
              import_server.InkRegistry.createText(`
  `, false),
              import_server.InkRegistry.createElement("meta", { "name": `twitter:card`, "content": `summary` }, "{ 'name': `twitter:card`, 'content': `summary` }"),
              import_server.InkRegistry.createText(`
  `, false),
              import_server.InkRegistry.createElement("meta", { "name": `twitter:site`, "content": `@stackpress` }, "{ 'name': `twitter:site`, 'content': `@stackpress` }"),
              import_server.InkRegistry.createText(`
  `, false),
              import_server.InkRegistry.createElement("meta", { "name": `twitter:title`, "content": title }, "{ 'name': `twitter:title`, 'content': title }"),
              import_server.InkRegistry.createText(`
  `, false),
              import_server.InkRegistry.createElement("meta", { "name": `twitter:description`, "content": description }, "{ 'name': `twitter:description`, 'content': description }"),
              import_server.InkRegistry.createText(`
  `, false),
              import_server.InkRegistry.createElement("meta", { "name": `twitter:image`, "content": `https://stackpress.github.io/ink/ink-logo.png` }, "{ 'name': `twitter:image`, 'content': `https://stackpress.github.io/ink/ink-logo.png` }"),
              import_server.InkRegistry.createText(`
  `, false),
              import_server.InkRegistry.createElement("link", { "rel": `favicon`, "href": `/ink/favicon.ico` }, "{ 'rel': `favicon`, 'href': `/ink/favicon.ico` }"),
              import_server.InkRegistry.createText(`
  `, false),
              import_server.InkRegistry.createElement("link", { "rel": `shortcut icon`, "type": `image/png`, "href": `/ink/favicon.png` }, "{ 'rel': `shortcut icon`, 'type': `image/png`, 'href': `/ink/favicon.png` }"),
              import_server.InkRegistry.createText(`
  `, false),
              import_server.InkRegistry.createElement("link", { "rel": `stylesheet`, "type": `text/css`, "href": `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css` }, "{ 'rel': `stylesheet`, 'type': `text/css`, 'href': `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css` }"),
              import_server.InkRegistry.createText(`
  `, false),
              import_server.InkRegistry.createElement("link", { "rel": `stylesheet`, "media": `(prefers-color-scheme:light)`, "href": `https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.16.0/cdn/themes/light.css` }, "{ 'rel': `stylesheet`, 'media': `(prefers-color-scheme:light)`, 'href': `https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.16.0/cdn/themes/light.css` }"),
              import_server.InkRegistry.createText(`
  `, false),
              import_server.InkRegistry.createElement("link", { "rel": `stylesheet`, "media": `(prefers-color-scheme:dark)`, "href": `https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.16.0/cdn/themes/dark.css` }, "{ 'rel': `stylesheet`, 'media': `(prefers-color-scheme:dark)`, 'href': `https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.16.0/cdn/themes/dark.css` }"),
              import_server.InkRegistry.createText(`
  `, false),
              import_server.InkRegistry.createElement("link", { "rel": `stylesheet`, "type": `text/css`, "href": `/ink/styles/global.css` }, "{ 'rel': `stylesheet`, 'type': `text/css`, 'href': `/ink/styles/global.css` }"),
              import_server.InkRegistry.createText(`
  `, false),
              import_server.InkRegistry.createElement("link", { "rel": `stylesheet`, "type": `text/css`, "href": `/ink/build/client/${(0, import_server2.env)("BUILD_ID")}.css` }, "{ 'rel': `stylesheet`, 'type': `text/css`, 'href': `/ink/build/client/${env('BUILD_ID')}.css` }"),
              import_server.InkRegistry.createText(`
  
  `, false),
              import_server.InkRegistry.createElement("script", { "data-app": (0, import_server2.env)("APP_DATA"), "src": `/ink/build/client/${(0, import_server2.env)("BUILD_ID")}.js` }, "{ 'data-app': env('APP_DATA'), 'src': `/ink/build/client/${env('BUILD_ID')}.js` }"),
              import_server.InkRegistry.createText(`
  `, false),
              ...!!((0, import_server2.env)("NODE_ENV") === "development") ? [
                import_server.InkRegistry.createText(`
    `, false),
                import_server.InkRegistry.createElement("script", { "src": `/dev.js` }, "{ 'src': `/dev.js` }"),
                import_server.InkRegistry.createText(`
  `, false)
              ] : [],
              import_server.InkRegistry.createText(`
`, false)
            ])
          ],
          import_server.InkRegistry.createText(`
  `, false),
          import_server.InkRegistry.createElement("body", { "class": `light bg-t-0 tx-t-1 tx-arial` }, "{ 'class': `light bg-t-0 tx-t-1 tx-arial` }", [
            import_server.InkRegistry.createText(`
    `, false),
            import_server.InkRegistry.createElement("panel-layout", {}, "{ }", [
              import_server.InkRegistry.createText(`
      `, false),
              import_server.InkRegistry.createElement("header", {}, "{ }", [
                ...[
                  import_server.InkRegistry.createElement("menu", { "class": `flex flex-center-y px-20 py-15 m-0 bg-t-1` }, "{ 'class': `flex flex-center-y px-20 py-15 m-0 bg-t-1` }", [
                    import_server.InkRegistry.createText(`
  `, false),
                    ...!!(url !== "/ink/index.html" && url !== "/ink/500.html") ? [
                      import_server.InkRegistry.createText(`
    `, false),
                      import_server.InkRegistry.createElement("i", { "class": `fas fa-fw fa-bars cursor-pointer py-5 pr-10 none md-inline-block tx-t-1`, "click": toggle }, "{ 'class': `fas fa-fw fa-bars cursor-pointer py-5 pr-10 none md-inline-block tx-t-1`, 'click': toggle }", []),
                      import_server.InkRegistry.createText(`
    `, false),
                      import_server.InkRegistry.createElement("div", { "class": `flex-grow` }, "{ 'class': `flex-grow` }", []),
                      import_server.InkRegistry.createText(`
  `, false)
                    ] : true ? [
                      ,
                      import_server.InkRegistry.createText(`
    `, false),
                      import_server.InkRegistry.createElement("a", { "href": `/ink` }, "{ 'href': `/ink` }", [
                        import_server.InkRegistry.createText(`
      `, false),
                        import_server.InkRegistry.createElement("img", { "alt": `Ink Logo`, "class": `h-26 mr-10`, "src": `/ink/ink-icon.png` }, "{ 'alt': `Ink Logo`, 'class': `h-26 mr-10`, 'src': `/ink/ink-icon.png` }"),
                        import_server.InkRegistry.createText(`
    `, false)
                      ]),
                      import_server.InkRegistry.createText(`
  `, false)
                    ] : [],
                    import_server.InkRegistry.createText(`
  `, false),
                    import_server.InkRegistry.createElement("nav", { "class": `flex flex-center-y` }, "{ 'class': `flex flex-center-y` }", [
                      import_server.InkRegistry.createText(`
    `, false),
                      import_server.InkRegistry.createElement("a", { "class": `tx-primary`, "href": `/ink/docs/index.html` }, "{ 'class': `tx-primary`, 'href': `/ink/docs/index.html` }", [
                        import_server.InkRegistry.createText(`Docs`, false)
                      ]),
                      import_server.InkRegistry.createText(`
    `, false),
                      import_server.InkRegistry.createElement("a", { "class": `tx-t-1 tx-5xl ml-10`, "href": `https://github.com/stackpress/ink`, "target": `_blank` }, "{ 'class': `tx-t-1 tx-5xl ml-10`, 'href': `https://github.com/stackpress/ink`, 'target': `_blank` }", [
                        import_server.InkRegistry.createText(`
      `, false),
                        import_server.InkRegistry.createElement("i", { "class": `fab fa-github` }, "{ 'class': `fab fa-github` }", []),
                        import_server.InkRegistry.createText(`
    `, false)
                      ]),
                      import_server.InkRegistry.createText(`
    `, false),
                      import_server.InkRegistry.createElement("a", { "class": `bg-h-cb3837 pill tx-t-1 tx-lg ml-5 p-5 tx-center`, "href": `https://www.npmjs.com/package/@stackpress/ink`, "target": `_blank` }, "{ 'class': `bg-h-cb3837 pill tx-t-1 tx-lg ml-5 p-5 tx-center`, 'href': `https://www.npmjs.com/package/@stackpress/ink`, 'target': `_blank` }", [
                        import_server.InkRegistry.createText(`
      `, false),
                        import_server.InkRegistry.createElement("i", { "class": `fab fa-npm tx-white` }, "{ 'class': `fab fa-npm tx-white` }", []),
                        import_server.InkRegistry.createText(`
    `, false)
                      ]),
                      import_server.InkRegistry.createText(`
  `, false)
                    ]),
                    import_server.InkRegistry.createText(`
`, false)
                  ])
                ]
              ]),
              import_server.InkRegistry.createText(`
      `, false),
              import_server.InkRegistry.createElement("main", { "class": `scroll-auto` }, "{ 'class': `scroll-auto` }", [
                import_server.InkRegistry.createText(`
        `, false),
                import_server.InkRegistry.createElement("section", { "class": `bg-t-1 py-40 tx-center w-full` }, "{ 'class': `bg-t-1 py-40 tx-center w-full` }", [
                  import_server.InkRegistry.createText(`
          `, false),
                  import_server.InkRegistry.createElement("img", { "class": `h-100`, "src": `/ink/ink-logo.png`, "alt": `Ink Logo` }, "{ 'class': `h-100`, 'src': `/ink/ink-logo.png`, 'alt': `Ink Logo` }"),
                  import_server.InkRegistry.createText(`
          `, false),
                  import_server.InkRegistry.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-30 py-30 tx-lh-36` }, "{ 'p': true, 'trim': true, 'class': `tx-30 py-30 tx-lh-36` }", [
                    import_server.InkRegistry.createText(`
            The reactive web component template engine.
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`
          `, false),
                  import_server.InkRegistry.createElement("element-button", { "primary": true, "xl": true, "rounded": true, "class": `mr-10`, "href": `/ink/docs/getting-started.html` }, "{ 'primary': true, 'xl': true, 'rounded': true, 'class': `mr-10`, 'href': `/ink/docs/getting-started.html` }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    ...this._toNodeList(_("Get Started")),
                    import_server.InkRegistry.createText(`
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`
          `, false),
                  import_server.InkRegistry.createElement("element-button", { "secondary": true, "xl": true, "rounded": true, "class": `inline-block`, "href": `/ink/docs/index.html` }, "{ 'secondary': true, 'xl': true, 'rounded': true, 'class': `inline-block`, 'href': `/ink/docs/index.html` }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    ...this._toNodeList(_("Read the Docs")),
                    import_server.InkRegistry.createText(`
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`
        `, false)
                ]),
                import_server.InkRegistry.createText(`
        `, false),
                import_server.InkRegistry.createElement("section", { "class": `m-auto mw-960 px-20` }, "{ 'class': `m-auto mw-960 px-20` }", [
                  import_server.InkRegistry.createText(`
          `, false),
                  import_server.InkRegistry.createElement("i18n-translate", { "p": true, "trim": true, "class": `p-20 tx-center tx-lh-36 tx-18` }, "{ 'p': true, 'trim': true, 'class': `p-20 tx-center tx-lh-36 tx-18` }", [
                    import_server.InkRegistry.createText(`
            Ink is a modern HTML markup language and a server first 
            template engine with a built-in parser/compiler that 
            generates web components and supports reactivity.
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`
          `, false),
                  import_server.InkRegistry.createElement("ide-app", { "class": `block`, "title": `Basic Example` }, "{ 'class': `block`, 'title': `Basic Example` }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("div", { "class": `flex bg-white md-block` }, "{ 'class': `flex bg-white md-block` }", [
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("ide-code", { "numbers": true, "trim": true, "detab": 16, "class": `basis-half` }, "{ 'numbers': true, 'trim': true, 'detab': 16, 'class': `basis-half` }", [
                        ...this._toNodeList(`
                <style>
                  h1 { font-weight: bold; }
                </style>
                <script>
                  const name = 'world';
                </script>
                <h1>Hello {name}!</h1>
              `)
                      ]),
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("ide-preview", { "class": `basis-half` }, "{ 'class': `basis-half` }", [
                        import_server.InkRegistry.createText(`
                `, false),
                        import_server.InkRegistry.createElement("div", {}, "{ }", [
                          import_server.InkRegistry.createText(`
                  `, false),
                          import_server.InkRegistry.createElement("h1", {}, "{ }", [
                            ...this._toNodeList(_("Hello world!"))
                          ]),
                          import_server.InkRegistry.createText(`
                `, false)
                        ]),
                        import_server.InkRegistry.createText(`
              `, false)
                      ]),
                      import_server.InkRegistry.createText(`
            `, false)
                    ]),
                    import_server.InkRegistry.createText(`
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`
        `, false)
                ]),
                import_server.InkRegistry.createText(`
        `, false),
                import_server.InkRegistry.createElement("section", { "class": `bg-t-1 m-auto py-40 px-20 tx-center` }, "{ 'class': `bg-t-1 m-auto py-40 px-20 tx-center` }", [
                  import_server.InkRegistry.createText(`
          `, false),
                  import_server.InkRegistry.createElement("ul", { "class": `flex flex-center list-none p-0 tx-center md-block` }, "{ 'class': `flex flex-center list-none p-0 tx-center md-block` }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("li", { "class": `w-third mw-300 md-mw-400 md-w-auto md-m-auto` }, "{ 'class': `w-third mw-300 md-mw-400 md-w-auto md-m-auto` }", [
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("div", { "class": `p-10` }, "{ 'class': `p-10` }", [
                        import_server.InkRegistry.createText(`
                `, false),
                        import_server.InkRegistry.createElement("h3", { "class": `mb-20 tx-upper` }, "{ 'class': `mb-20 tx-upper` }", [
                          import_server.InkRegistry.createText(`
                  `, false),
                          ...this._toNodeList(_("Expressive Markup")),
                          import_server.InkRegistry.createText(`
                `, false)
                        ]),
                        import_server.InkRegistry.createText(`
                `, false),
                        import_server.InkRegistry.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-16 tx-lh-24` }, "{ 'p': true, 'trim': true, 'class': `tx-16 tx-lh-24` }", [
                          import_server.InkRegistry.createText(`
                  Any data type as attributes. Easily express logic with 
                  markup directives like if, each, and try catch. 
                `, false)
                        ]),
                        import_server.InkRegistry.createText(`
              `, false)
                      ]),
                      import_server.InkRegistry.createText(`
            `, false)
                    ]),
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("li", { "class": `w-third mw-300 md-mw-400 md-w-auto md-m-auto md-mt-20` }, "{ 'class': `w-third mw-300 md-mw-400 md-w-auto md-m-auto md-mt-20` }", [
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("div", { "class": `p-10` }, "{ 'class': `p-10` }", [
                        import_server.InkRegistry.createText(`
                `, false),
                        import_server.InkRegistry.createElement("h3", { "class": `mb-20 tx-upper` }, "{ 'class': `mb-20 tx-upper` }", [
                          import_server.InkRegistry.createText(`
                  `, false),
                          ...this._toNodeList(_("Reactive Signals")),
                          import_server.InkRegistry.createText(`
                `, false)
                        ]),
                        import_server.InkRegistry.createText(`
                `, false),
                        import_server.InkRegistry.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-16 tx-lh-24` }, "{ 'p': true, 'trim': true, 'class': `tx-16 tx-lh-24` }", [
                          import_server.InkRegistry.createText(`
                  Easily transition from backend logic to reactive states.
                  No Hydration and no memoization needed.
                `, false)
                        ]),
                        import_server.InkRegistry.createText(`
              `, false)
                      ]),
                      import_server.InkRegistry.createText(`
            `, false)
                    ]),
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("li", { "class": `w-third mw-300 md-mw-400 md-w-auto md-m-auto md-mt-20` }, "{ 'class': `w-third mw-300 md-mw-400 md-w-auto md-m-auto md-mt-20` }", [
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("div", { "class": `p-10` }, "{ 'class': `p-10` }", [
                        import_server.InkRegistry.createText(`
                `, false),
                        import_server.InkRegistry.createElement("h3", { "class": `mb-20 tx-upper` }, "{ 'class': `mb-20 tx-upper` }", [
                          import_server.InkRegistry.createText(`
                  `, false),
                          ...this._toNodeList(_("Bare Metal")),
                          import_server.InkRegistry.createText(`
                `, false)
                        ]),
                        import_server.InkRegistry.createText(`
                `, false),
                        import_server.InkRegistry.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-16 tx-lh-24` }, "{ 'p': true, 'trim': true, 'class': `tx-16 tx-lh-24` }", [
                          import_server.InkRegistry.createText(`
                  Work with the DOM directly. Import any web components 
                  from any source. Works with Lit, HTMX.
                `, false)
                        ]),
                        import_server.InkRegistry.createText(`
              `, false)
                      ]),
                      import_server.InkRegistry.createText(`
            `, false)
                    ]),
                    import_server.InkRegistry.createText(`
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`
        `, false)
                ]),
                import_server.InkRegistry.createText(`
        `, false),
                import_server.InkRegistry.createElement("section", { "class": `m-auto mw-960 px-20 py-40` }, "{ 'class': `m-auto mw-960 px-20 py-40` }", [
                  import_server.InkRegistry.createText(`
          `, false),
                  import_server.InkRegistry.createElement("h3", { "class": `mt-40 mb-20 tx-center tx-upper` }, "{ 'class': `mt-40 mb-20 tx-center tx-upper` }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    ...this._toNodeList(_("Server Setup")),
                    import_server.InkRegistry.createText(`
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`
          `, false),
                  import_server.InkRegistry.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-center tx-lh-24 mb-20` }, "{ 'p': true, 'trim': true, 'class': `tx-center tx-lh-24 mb-20` }", [
                    import_server.InkRegistry.createText(`
            Ink can be used with popular server 
            frameworks in just a few lines of code.
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`
          `, false),
                  import_server.InkRegistry.createElement("ide-app", { "title": `Server Example` }, "{ 'title': `Server Example` }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("ide-code", { "lang": `js`, "numbers": true, "trim": true, "detab": 14 }, "{ 'lang': `js`, 'numbers': true, 'trim': true, 'detab': 14 }", [
                      ...this._toNodeList(`
              import ink from '@stackpress/ink/compiler';
              //make a ink compiler
              const compiler = ink();
              //render HTML
              const results = compiler.render('./page.ink');
            `)
                    ]),
                    import_server.InkRegistry.createText(`
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`

          `, false),
                  import_server.InkRegistry.createElement("h3", { "class": `mt-40 mb-20 tx-center tx-upper` }, "{ 'class': `mt-40 mb-20 tx-center tx-upper` }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    ...this._toNodeList(_("Props")),
                    import_server.InkRegistry.createText(`
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`
          `, false),
                  import_server.InkRegistry.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-center tx-lh-24 mb-20` }, "{ 'p': true, 'trim': true, 'class': `tx-center tx-lh-24 mb-20` }", [
                    import_server.InkRegistry.createText(`
            Import your component props and use immediately
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`
          `, false),
                  import_server.InkRegistry.createElement("ide-app", { "title": `Props Example` }, "{ 'title': `Props Example` }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("div", { "class": `flex bg-white md-block` }, "{ 'class': `flex bg-white md-block` }", [
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("ide-code", { "numbers": true, "trim": true, "detab": 16, "class": `basis-half` }, "{ 'numbers': true, 'trim': true, 'detab': 16, 'class': `basis-half` }", [
                        ...this._toNodeList(`
                <style>
                  h1 { font-weight: bold; }
                </style>
                <script>
                  import { props } from '@stackpress/ink';
                  const { name } = props();
                </script>
                <h1>Hello {name}!</h1>
              `)
                      ]),
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("ide-preview", { "class": `basis-half` }, "{ 'class': `basis-half` }", [
                        import_server.InkRegistry.createText(`
                `, false),
                        import_server.InkRegistry.createElement("div", {}, "{ }", [
                          import_server.InkRegistry.createText(`
                  `, false),
                          import_server.InkRegistry.createElement("h1", {}, "{ }", [
                            ...this._toNodeList(_("Hello world!"))
                          ]),
                          import_server.InkRegistry.createText(`
                `, false)
                        ]),
                        import_server.InkRegistry.createText(`
              `, false)
                      ]),
                      import_server.InkRegistry.createText(`
            `, false)
                    ]),
                    import_server.InkRegistry.createText(`
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`

          `, false),
                  import_server.InkRegistry.createElement("h3", { "class": `mt-40 mb-20 tx-center tx-upper` }, "{ 'class': `mt-40 mb-20 tx-center tx-upper` }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    ...this._toNodeList(_("Reactive Signals")),
                    import_server.InkRegistry.createText(`
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`
          `, false),
                  import_server.InkRegistry.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-center tx-lh-24 mb-20` }, "{ 'p': true, 'trim': true, 'class': `tx-center tx-lh-24 mb-20` }", [
                    import_server.InkRegistry.createText(`
            Use signals to manage state changes and re-renders.
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`
          `, false),
                  import_server.InkRegistry.createElement("ide-app", { "title": `Signal Example` }, "{ 'title': `Signal Example` }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("div", { "class": `flex bg-white md-block` }, "{ 'class': `flex bg-white md-block` }", [
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("ide-code", { "numbers": true, "trim": true, "detab": 16, "class": `basis-half` }, "{ 'numbers': true, 'trim': true, 'detab': 16, 'class': `basis-half` }", [
                        ...this._toNodeList(`
                <style>
                  h1 { font-weight: bold; }
                </style>
                <script>
                  import { signal } from '@stackpress/ink';
                  const name = signal('world');
                  name.value += '!';
                </script>
                <h1>Hello {name.value}</h1>
              `)
                      ]),
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("ide-preview", { "class": `basis-half` }, "{ 'class': `basis-half` }", [
                        import_server.InkRegistry.createText(`
                `, false),
                        import_server.InkRegistry.createElement("div", {}, "{ }", [
                          import_server.InkRegistry.createText(`
                  `, false),
                          import_server.InkRegistry.createElement("h1", {}, "{ }", [
                            ...this._toNodeList(_("Hello world!"))
                          ]),
                          import_server.InkRegistry.createText(`
                `, false)
                        ]),
                        import_server.InkRegistry.createText(`
              `, false)
                      ]),
                      import_server.InkRegistry.createText(`
            `, false)
                    ]),
                    import_server.InkRegistry.createText(`
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`

          `, false),
                  import_server.InkRegistry.createElement("h3", { "class": `mt-40 mb-20 tx-center tx-upper` }, "{ 'class': `mt-40 mb-20 tx-center tx-upper` }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    ...this._toNodeList(_("Components and Templates")),
                    import_server.InkRegistry.createText(`
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`
          `, false),
                  import_server.InkRegistry.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-center tx-lh-24 mb-20` }, "{ 'p': true, 'trim': true, 'class': `tx-center tx-lh-24 mb-20` }", [
                    import_server.InkRegistry.createText(`
            Import components and templates for reusability.
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`
          `, false),
                  import_server.InkRegistry.createElement("ide-app", { "title": `Import Example` }, "{ 'title': `Import Example` }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("div", { "class": `flex bg-white md-block` }, "{ 'class': `flex bg-white md-block` }", [
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("ide-code", { "numbers": true, "trim": true, "detab": 16, "class": `basis-half` }, "{ 'numbers': true, 'trim': true, 'detab': 16, 'class': `basis-half` }", [
                        ...this._toNodeList(`
                <!-- page.html -->
                <link rel="import" href="./my-heading.html" />
                <script>
                  const name = 'world';
                </script>
                <my-heading {name}>Hello</my-heading>
              `)
                      ]),
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("ide-code", { "class": `basis-half b-t-1 b-solid by-0 bl-1 br-0 md-b-0`, "trim": true, "detab": 16 }, "{ 'class': `basis-half b-t-1 b-solid by-0 bl-1 br-0 md-b-0`, 'trim': true, 'detab': 16 }", [
                        ...this._toNodeList(`
                <!-- my-heading.html -->
                <script>
                  import { props } from '@stackpress/ink';
                  const { name, children } = props();
                </script>
                <h1>{children} {name}</h1>
              `)
                      ]),
                      import_server.InkRegistry.createText(`
            `, false)
                    ]),
                    import_server.InkRegistry.createText(`
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`

          `, false),
                  import_server.InkRegistry.createElement("h3", { "class": `mt-40 mb-20 tx-center tx-upper` }, "{ 'class': `mt-40 mb-20 tx-center tx-upper` }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    ...this._toNodeList(_("Conditionals and Iterations")),
                    import_server.InkRegistry.createText(`
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`
          `, false),
                  import_server.InkRegistry.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-center tx-lh-24 mb-20` }, "{ 'p': true, 'trim': true, 'class': `tx-center tx-lh-24 mb-20` }", [
                    import_server.InkRegistry.createText(`
            Case for conditions and iterations in an expressive way.
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`
          `, false),
                  import_server.InkRegistry.createElement("ide-app", { "title": `Conditional + Iteration Example` }, "{ 'title': `Conditional + Iteration Example` }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("div", { "class": `flex bg-white md-block` }, "{ 'class': `flex bg-white md-block` }", [
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("ide-code", { "numbers": true, "trim": true, "detab": 16, "class": `basis-half` }, "{ 'numbers': true, 'trim': true, 'detab': 16, 'class': `basis-half` }", [
                        ...this._toNodeList(`
                <script>
                  const name = 'world';
                  const show = name === "world";
                </script>

                <if true=show>
                  <h1>Hello {name}</h1>
                </if>
              `)
                      ]),
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("ide-code", { "class": `basis-half b-t-1 b-solid by-0 bl-1 br-0 md-b-0`, "trim": true, "detab": 16 }, "{ 'class': `basis-half b-t-1 b-solid by-0 bl-1 br-0 md-b-0`, 'trim': true, 'detab': 16 }", [
                        ...this._toNodeList(`
                <script>
                  const list = [ 'a', 'b', 'c' ];
                </script>
                <ul>
                  <each key=i value=item from=list>
                    <li>{i}: {item}</li>
                  </each>
                </ul>
              `)
                      ]),
                      import_server.InkRegistry.createText(`
            `, false)
                    ]),
                    import_server.InkRegistry.createText(`
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`
        `, false)
                ]),
                import_server.InkRegistry.createText(`
        `, false),
                import_server.InkRegistry.createElement("section", { "class": `m-auto px-20 py-40 tx-center bg-t-2` }, "{ 'class': `m-auto px-20 py-40 tx-center bg-t-2` }", [
                  import_server.InkRegistry.createText(`
          `, false),
                  import_server.InkRegistry.createElement("h3", { "class": `tx-h-242424 tx-30 tx-upper` }, "{ 'class': `tx-h-242424 tx-30 tx-upper` }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    ...this._toNodeList(_("Works With Popular Server Frameworks")),
                    import_server.InkRegistry.createText(`
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`
          `, false),
                  import_server.InkRegistry.createElement("div", { "class": `flex flex-center flex-wrap mx-auto mt-40 mb-0 sm-block` }, "{ 'class': `flex flex-center flex-wrap mx-auto mt-40 mb-0 sm-block` }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("a", { "class": `block basis-third mb-20`, "href": `https://expressjs.com/`, "target": `_blank` }, "{ 'class': `block basis-third mb-20`, 'href': `https://expressjs.com/`, 'target': `_blank` }", [
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("img", { "class": `h-60`, "src": `https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png`, "alt": `Express` }, "{ 'class': `h-60`, 'src': `https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png`, 'alt': `Express` }"),
                      import_server.InkRegistry.createText(`
            `, false)
                    ]),
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("a", { "class": `block basis-third mb-20`, "href": `https://fastify.dev/`, "target": `_blank` }, "{ 'class': `block basis-third mb-20`, 'href': `https://fastify.dev/`, 'target': `_blank` }", [
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("img", { "class": `h-60`, "src": `https://upload.wikimedia.org/wikipedia/commons/0/0a/Fastify_logo.svg`, "alt": `Fastify` }, "{ 'class': `h-60`, 'src': `https://upload.wikimedia.org/wikipedia/commons/0/0a/Fastify_logo.svg`, 'alt': `Fastify` }"),
                      import_server.InkRegistry.createText(`
            `, false)
                    ]),
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("a", { "class": `block basis-third mb-20`, "href": `https://hapi.dev/`, "target": `_blank` }, "{ 'class': `block basis-third mb-20`, 'href': `https://hapi.dev/`, 'target': `_blank` }", [
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("img", { "class": `h-60`, "src": `https://raw.githubusercontent.com/hapijs/assets/master/images/hapi.png`, "alt": `Hapi` }, "{ 'class': `h-60`, 'src': `https://raw.githubusercontent.com/hapijs/assets/master/images/hapi.png`, 'alt': `Hapi` }"),
                      import_server.InkRegistry.createText(`
            `, false)
                    ]),
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("a", { "class": `block basis-third mb-20`, "href": `https://koajs.com/`, "target": `_blank` }, "{ 'class': `block basis-third mb-20`, 'href': `https://koajs.com/`, 'target': `_blank` }", [
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("img", { "class": `h-60`, "src": `https://cdn.icon-icons.com/icons2/2699/PNG/512/koajs_logo_icon_168379.png`, "alt": `Koa` }, "{ 'class': `h-60`, 'src': `https://cdn.icon-icons.com/icons2/2699/PNG/512/koajs_logo_icon_168379.png`, 'alt': `Koa` }"),
                      import_server.InkRegistry.createText(`
            `, false)
                    ]),
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("a", { "class": `block basis-third mb-20`, "href": `https://nestjs.com/`, "target": `_blank` }, "{ 'class': `block basis-third mb-20`, 'href': `https://nestjs.com/`, 'target': `_blank` }", [
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("img", { "class": `h-60`, "src": `https://cdn.icon-icons.com/icons2/2699/PNG/512/nestjs_logo_icon_169927.png`, "alt": `NestJS` }, "{ 'class': `h-60`, 'src': `https://cdn.icon-icons.com/icons2/2699/PNG/512/nestjs_logo_icon_169927.png`, 'alt': `NestJS` }"),
                      import_server.InkRegistry.createText(`
            `, false)
                    ]),
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("a", { "class": `block basis-third mb-20`, "href": `http://restify.com/`, "target": `_blank` }, "{ 'class': `block basis-third mb-20`, 'href': `http://restify.com/`, 'target': `_blank` }", [
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("img", { "class": `h-60`, "src": `https://raw.githubusercontent.com/restify/node-restify/gh-images/logo/png/restify_logo_black_transp_288x288.png?raw=true`, "alt": `Restify` }, "{ 'class': `h-60`, 'src': `https://raw.githubusercontent.com/restify/node-restify/gh-images/logo/png/restify_logo_black_transp_288x288.png?raw=true`, 'alt': `Restify` }"),
                      import_server.InkRegistry.createText(`
            `, false)
                    ]),
                    import_server.InkRegistry.createText(`
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`
        `, false)
                ]),
                import_server.InkRegistry.createText(`
        `, false),
                import_server.InkRegistry.createElement("section", { "class": `bg-t-1 m-auto py-40 px-20` }, "{ 'class': `bg-t-1 m-auto py-40 px-20` }", [
                  import_server.InkRegistry.createText(`
          `, false),
                  import_server.InkRegistry.createElement("h3", { "class": `tx-26 tx-center` }, "{ 'class': `tx-26 tx-center` }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    ...this._toNodeList(_("Ink Loves Developers!")),
                    import_server.InkRegistry.createText(`
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`
          `, false),
                  import_server.InkRegistry.createElement("section", { "class": `flex flex-wrap md-block` }, "{ 'class': `flex flex-wrap md-block` }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("tweet-box", { "class": `block basis-third lg-basis-half`, "name": `Joff Tiquez`, "handle": `@jrtiquez`, "href": `https://twitter.com/jrtiquez`, "src": `https://github.com/jofftiquez.png` }, "{ 'class': `block basis-third lg-basis-half`, 'name': `Joff Tiquez`, 'handle': `@jrtiquez`, 'href': `https://twitter.com/jrtiquez`, 'src': `https://github.com/jofftiquez.png` }", [
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("p", {}, "{ }", [
                        import_server.InkRegistry.createText(`Im a vue developer. No need for this. OSSPH does not support this project.`, false)
                      ]),
                      import_server.InkRegistry.createText(`
            `, false)
                    ]),
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("tweet-box", { "class": `block basis-third lg-basis-half`, "name": `Primeagen`, "handle": `@theprimeagen`, "href": `https://twitter.com/ThePrimeagen`, "src": `https://pbs.twimg.com/profile_images/1759330620160049152/2i_wkOoK_400x400.jpg` }, "{ 'class': `block basis-third lg-basis-half`, 'name': `Primeagen`, 'handle': `@theprimeagen`, 'href': `https://twitter.com/ThePrimeagen`, 'src': `https://pbs.twimg.com/profile_images/1759330620160049152/2i_wkOoK_400x400.jpg` }", [
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("p", {}, "{ }", [
                        import_server.InkRegistry.createText(`Ink? Never heard of it...`, false),
                        import_server.InkRegistry.createElement("br", {}, "{ }"),
                        import_server.InkRegistry.createText(`"The Name..."`, false)
                      ]),
                      import_server.InkRegistry.createText(`
            `, false)
                    ]),
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("tweet-box", { "class": `block basis-third lg-basis-half`, "name": `Kristian Quirapas`, "handle": `@YourCompanyCTO`, "href": `https://twitter.com/YourCompanyCTO`, "src": `https://avatars.githubusercontent.com/u/85150796?v=4` }, "{ 'class': `block basis-third lg-basis-half`, 'name': `Kristian Quirapas`, 'handle': `@YourCompanyCTO`, 'href': `https://twitter.com/YourCompanyCTO`, 'src': `https://avatars.githubusercontent.com/u/85150796?v=4` }", [
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("p", {}, "{ }", [
                        import_server.InkRegistry.createText(`Ink is good news for Node developers. I'm a rust developer so it don't matter to me.`, false)
                      ]),
                      import_server.InkRegistry.createText(`
            `, false)
                    ]),
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("tweet-box", { "class": `block basis-third lg-basis-half`, "name": `Drizzle Team`, "handle": `@drizzle.team`, "href": `https://twitter.com/DrizzleORM`, "src": `https://pbs.twimg.com/profile_images/1767809210060877824/mAtEmNk0_400x400.jpg` }, "{ 'class': `block basis-third lg-basis-half`, 'name': `Drizzle Team`, 'handle': `@drizzle.team`, 'href': `https://twitter.com/DrizzleORM`, 'src': `https://pbs.twimg.com/profile_images/1767809210060877824/mAtEmNk0_400x400.jpg` }", [
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("p", {}, "{ }", [
                        import_server.InkRegistry.createText(`Ink copied this section from us. We are the original.`, false)
                      ]),
                      import_server.InkRegistry.createText(`
            `, false)
                    ]),
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("tweet-box", { "class": `block basis-third lg-basis-half`, "name": `Chris B`, "handle": `@cblanquera`, "href": `https://twitter.com/cblanquera`, "src": `https://avatars.githubusercontent.com/u/120378?v=4` }, "{ 'class': `block basis-third lg-basis-half`, 'name': `Chris B`, 'handle': `@cblanquera`, 'href': `https://twitter.com/cblanquera`, 'src': `https://avatars.githubusercontent.com/u/120378?v=4` }", [
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("p", {}, "{ }", [
                        import_server.InkRegistry.createText(`After creating the Ink project, I am really excited to get back to ReactJS.`, false)
                      ]),
                      import_server.InkRegistry.createText(`
            `, false)
                    ]),
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("tweet-box", { "class": `block basis-third lg-basis-half`, "name": `Theo`, "handle": `@t3dotgg`, "href": `https://twitter.com/t3dotgg`, "src": `https://yt3.googleusercontent.com/4NapxEtLcHQ6wN2zA_DMmkOk47RFb_gy6sjSmUZGg_ARHjlIUjFsrNFddrcKMkTYpBNxCp3J=s160-c-k-c0x00ffffff-no-rj` }, "{ 'class': `block basis-third lg-basis-half`, 'name': `Theo`, 'handle': `@t3dotgg`, 'href': `https://twitter.com/t3dotgg`, 'src': `https://yt3.googleusercontent.com/4NapxEtLcHQ6wN2zA_DMmkOk47RFb_gy6sjSmUZGg_ARHjlIUjFsrNFddrcKMkTYpBNxCp3J=s160-c-k-c0x00ffffff-no-rj` }", [
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("p", {}, "{ }", [
                        import_server.InkRegistry.createText(`Ink? no thanks. Keep your stack front end. App router for life.`, false)
                      ]),
                      import_server.InkRegistry.createText(`
            `, false)
                    ]),
                    import_server.InkRegistry.createText(`
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`
        `, false)
                ]),
                import_server.InkRegistry.createText(`
        `, false),
                import_server.InkRegistry.createElement("section", { "class": `m-auto py-40 px-20 tx-center` }, "{ 'class': `m-auto py-40 px-20 tx-center` }", [
                  import_server.InkRegistry.createText(`
          `, false),
                  import_server.InkRegistry.createElement("h3", { "class": `tx-26 mb-20` }, "{ 'class': `tx-26 mb-20` }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    ...this._toNodeList(_("What are you waiting for?")),
                    import_server.InkRegistry.createText(`
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`
          `, false),
                  import_server.InkRegistry.createElement("element-button", { "primary": true, "xl": true, "rounded": true, "class": `inline-block`, "style": `margin-right:10px;`, "href": `/ink/docs/getting-started.html` }, "{ 'primary': true, 'xl': true, 'rounded': true, 'class': `inline-block`, 'style': `margin-right:10px;`, 'href': `/ink/docs/getting-started.html` }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    ...this._toNodeList(_("Get Started")),
                    import_server.InkRegistry.createText(`
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`
          `, false),
                  import_server.InkRegistry.createElement("element-button", { "secondary": true, "xl": true, "rounded": true, "class": `inline-block`, "href": `/ink/docs/index.html` }, "{ 'secondary': true, 'xl': true, 'rounded': true, 'class': `inline-block`, 'href': `/ink/docs/index.html` }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    ...this._toNodeList(_("Read the Docs")),
                    import_server.InkRegistry.createText(`
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`
        `, false)
                ]),
                import_server.InkRegistry.createText(`
      `, false)
              ]),
              import_server.InkRegistry.createText(`
    `, false)
            ]),
            import_server.InkRegistry.createText(`
  `, false)
          ]),
          import_server.InkRegistry.createText(`
`, false)
        ])
      ];
    }
  };
  return __toCommonJS(pages_exports);
})();
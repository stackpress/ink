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
          let document2 = InkRegistry_1.default.render(children).trim();
          if (!document2.toLowerCase().startsWith("<html")) {
            throw Exception_1.default.for("Document must start with an <html> tag.");
          }
          return `<!DOCTYPE html>
${document2}`;
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

  // ink-document-server-resolver:/Users/cblanquera/server/projects/stackpress/ink/packages/ink-web/src/pages/docs/getting-started.ink
  var getting_started_exports = {};
  __export(getting_started_exports, {
    default: () => GettingStarted_e06f4d82f045144e41f0
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

  // ink-document-server-resolver:/Users/cblanquera/server/projects/stackpress/ink/packages/ink-web/src/pages/docs/getting-started.ink
  var GettingStarted_e06f4d82f045144e41f0 = class extends import_server.InkDocument {
    id() {
      return "e06f4d82f045144e41f0";
    }
    styles() {
      return `@ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;`;
    }
    template() {
      const url = "/docs/getting-started.html";
      const title = _("Getting Started - Ink reactive web component template engine.");
      const description = _("How to install, setup and use Ink in a project.");
      const toggle = () => {
        document.getElementsByTagName("panel-layout")[0].toggle("left");
      };
      const examples = "https://github.com/stackpress/ink/tree/main/examples";
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
              import_server.InkRegistry.createElement("aside", { "left": true }, "{ 'left': true }", [
                ...[
                  import_server.InkRegistry.createElement("header", { "class": `flex flex-center-y bg-t-2 py-15 pr-5 pl-10` }, "{ 'class': `flex flex-center-y bg-t-2 py-15 pr-5 pl-10` }", [
                    import_server.InkRegistry.createText(`
  `, false),
                    import_server.InkRegistry.createElement("a", { "href": `/ink` }, "{ 'href': `/ink` }", [
                      import_server.InkRegistry.createText(`
    `, false),
                      import_server.InkRegistry.createElement("img", { "class": `h-26 mr-10`, "src": `/ink/ink-icon.png`, "alt": `Ink Logo` }, "{ 'class': `h-26 mr-10`, 'src': `/ink/ink-icon.png`, 'alt': `Ink Logo` }"),
                      import_server.InkRegistry.createText(`
  `, false)
                    ]),
                    import_server.InkRegistry.createText(`
  `, false),
                    import_server.InkRegistry.createElement("h3", { "class": `flex-grow m-0 tx-upper` }, "{ 'class': `flex-grow m-0 tx-upper` }", [
                      import_server.InkRegistry.createText(`
    `, false),
                      import_server.InkRegistry.createElement("a", { "class": `tx-primary`, "href": `/ink` }, "{ 'class': `tx-primary`, 'href': `/ink` }", [
                        import_server.InkRegistry.createText(`Ink`, false)
                      ]),
                      import_server.InkRegistry.createText(`
  `, false)
                    ]),
                    import_server.InkRegistry.createText(`
  `, false),
                    import_server.InkRegistry.createElement("i", { "class": `fas fa-fw fa-chevron-left cursor-pointer none md-inline-block`, "click": toggle }, "{ 'class': `fas fa-fw fa-chevron-left cursor-pointer none md-inline-block`, 'click': toggle }", []),
                    import_server.InkRegistry.createText(`
`, false)
                  ]),
                  import_server.InkRegistry.createText(`
`, false),
                  import_server.InkRegistry.createElement("nav", { "class": `bg-t-1 scroll-auto h-calc-full-60` }, "{ 'class': `bg-t-1 scroll-auto h-calc-full-60` }", [
                    import_server.InkRegistry.createText(`
  `, false),
                    import_server.InkRegistry.createElement("h6", { "class": `bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-0 pt-20 pb-10 pl-10 tx-upper` }, "{ 'class': `bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-0 pt-20 pb-10 pl-10 tx-upper` }", [
                      import_server.InkRegistry.createText(`
    `, false),
                      ...this._toNodeList(_("Introduction")),
                      import_server.InkRegistry.createText(`
  `, false)
                    ]),
                    import_server.InkRegistry.createText(`
  `, false),
                    ...!!(url === "/docs/index.html") ? [
                      import_server.InkRegistry.createText(`
    `, false),
                      import_server.InkRegistry.createElement("a", { "class": `block tx-info py-10 pl-10 tx-bold`, "href": `/ink/docs/index.html` }, "{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/index.html` }", [
                        import_server.InkRegistry.createText(`
      `, false),
                        ...this._toNodeList(_("Documentation")),
                        import_server.InkRegistry.createText(`
    `, false)
                      ]),
                      import_server.InkRegistry.createText(`
  `, false)
                    ] : true ? [
                      ,
                      import_server.InkRegistry.createText(`
    `, false),
                      import_server.InkRegistry.createElement("a", { "class": `block tx-info py-10 pl-10`, "href": `/ink/docs/index.html` }, "{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/index.html` }", [
                        import_server.InkRegistry.createText(`
      `, false),
                        ...this._toNodeList(_("Documentation")),
                        import_server.InkRegistry.createText(`
    `, false)
                      ]),
                      import_server.InkRegistry.createText(`
  `, false)
                    ] : [],
                    import_server.InkRegistry.createText(`
  `, false),
                    ...!!(url === "/docs/getting-started.html") ? [
                      import_server.InkRegistry.createText(`
    `, false),
                      import_server.InkRegistry.createElement("a", { "class": `block tx-info py-10 pl-10 tx-bold`, "href": `/ink/docs/getting-started.html` }, "{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/getting-started.html` }", [
                        import_server.InkRegistry.createText(`
      `, false),
                        ...this._toNodeList(_("Getting Started")),
                        import_server.InkRegistry.createText(`
    `, false)
                      ]),
                      import_server.InkRegistry.createText(`
  `, false)
                    ] : true ? [
                      ,
                      import_server.InkRegistry.createText(`
    `, false),
                      import_server.InkRegistry.createElement("a", { "class": `block tx-info py-10 pl-10`, "href": `/ink/docs/getting-started.html` }, "{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/getting-started.html` }", [
                        import_server.InkRegistry.createText(`
      `, false),
                        ...this._toNodeList(_("Getting Started")),
                        import_server.InkRegistry.createText(`
    `, false)
                      ]),
                      import_server.InkRegistry.createText(`
  `, false)
                    ] : [],
                    import_server.InkRegistry.createText(`

  `, false),
                    import_server.InkRegistry.createElement("h6", { "class": `bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper` }, "{ 'class': `bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper` }", [
                      import_server.InkRegistry.createText(`
    `, false),
                      ...this._toNodeList(_("Features")),
                      import_server.InkRegistry.createText(`
  `, false)
                    ]),
                    import_server.InkRegistry.createText(`
  `, false),
                    ...!!(url === "/docs/markup-syntax.html") ? [
                      import_server.InkRegistry.createText(`
    `, false),
                      import_server.InkRegistry.createElement("a", { "class": `block tx-info py-10 pl-10 tx-bold`, "href": `/ink/docs/markup-syntax.html` }, "{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/markup-syntax.html` }", [
                        import_server.InkRegistry.createText(`
      `, false),
                        ...this._toNodeList(_("Markup Syntax")),
                        import_server.InkRegistry.createText(`
    `, false)
                      ]),
                      import_server.InkRegistry.createText(`
  `, false)
                    ] : true ? [
                      ,
                      import_server.InkRegistry.createText(`
    `, false),
                      import_server.InkRegistry.createElement("a", { "class": `block tx-info py-10 pl-10`, "href": `/ink/docs/markup-syntax.html` }, "{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/markup-syntax.html` }", [
                        import_server.InkRegistry.createText(`
      `, false),
                        ...this._toNodeList(_("Markup Syntax")),
                        import_server.InkRegistry.createText(`
    `, false)
                      ]),
                      import_server.InkRegistry.createText(`
  `, false)
                    ] : [],
                    import_server.InkRegistry.createText(`
  `, false),
                    ...!!(url === "/docs/state-management.html") ? [
                      import_server.InkRegistry.createText(`
    `, false),
                      import_server.InkRegistry.createElement("a", { "class": `block tx-info py-10 pl-10 tx-bold`, "href": `/ink/docs/state-management.html` }, "{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/state-management.html` }", [
                        import_server.InkRegistry.createText(`
      `, false),
                        ...this._toNodeList(_("State Management")),
                        import_server.InkRegistry.createText(`
    `, false)
                      ]),
                      import_server.InkRegistry.createText(`
  `, false)
                    ] : true ? [
                      ,
                      import_server.InkRegistry.createText(`
    `, false),
                      import_server.InkRegistry.createElement("a", { "class": `block tx-info py-10 pl-10`, "href": `/ink/docs/state-management.html` }, "{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/state-management.html` }", [
                        import_server.InkRegistry.createText(`
      `, false),
                        ...this._toNodeList(_("State Management")),
                        import_server.InkRegistry.createText(`
    `, false)
                      ]),
                      import_server.InkRegistry.createText(`
  `, false)
                    ] : [],
                    import_server.InkRegistry.createText(`
  `, false),
                    ...!!(url === "/docs/component-strategy.html") ? [
                      import_server.InkRegistry.createText(`
    `, false),
                      import_server.InkRegistry.createElement("a", { "class": `block tx-info py-10 pl-10 tx-bold`, "href": `/ink/docs/component-strategy.html` }, "{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/component-strategy.html` }", [
                        import_server.InkRegistry.createText(`
      `, false),
                        ...this._toNodeList(_("Component Strategy")),
                        import_server.InkRegistry.createText(`
    `, false)
                      ]),
                      import_server.InkRegistry.createText(`
  `, false)
                    ] : true ? [
                      ,
                      import_server.InkRegistry.createText(`
    `, false),
                      import_server.InkRegistry.createElement("a", { "class": `block tx-info py-10 pl-10`, "href": `/ink/docs/component-strategy.html` }, "{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/component-strategy.html` }", [
                        import_server.InkRegistry.createText(`
      `, false),
                        ...this._toNodeList(_("Component Strategy")),
                        import_server.InkRegistry.createText(`
    `, false)
                      ]),
                      import_server.InkRegistry.createText(`
  `, false)
                    ] : [],
                    import_server.InkRegistry.createText(`
  `, false),
                    ...!!(url === "/docs/compiler-api.html") ? [
                      import_server.InkRegistry.createText(`
    `, false),
                      import_server.InkRegistry.createElement("a", { "class": `block tx-info py-10 pl-10 tx-bold`, "href": `/ink/docs/compiler-api.html` }, "{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/compiler-api.html` }", [
                        import_server.InkRegistry.createText(`
      `, false),
                        ...this._toNodeList(_("Compiler API")),
                        import_server.InkRegistry.createText(`
    `, false)
                      ]),
                      import_server.InkRegistry.createText(`
  `, false)
                    ] : true ? [
                      ,
                      import_server.InkRegistry.createText(`
    `, false),
                      import_server.InkRegistry.createElement("a", { "class": `block tx-info py-10 pl-10`, "href": `/ink/docs/compiler-api.html` }, "{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/compiler-api.html` }", [
                        import_server.InkRegistry.createText(`
      `, false),
                        ...this._toNodeList(_("Compiler API")),
                        import_server.InkRegistry.createText(`
    `, false)
                      ]),
                      import_server.InkRegistry.createText(`
  `, false)
                    ] : [],
                    import_server.InkRegistry.createText(`
  `, false),
                    ...!!(url === "/docs/client-api.html") ? [
                      import_server.InkRegistry.createText(`
    `, false),
                      import_server.InkRegistry.createElement("a", { "class": `block tx-info py-10 pl-10 tx-bold`, "href": `/ink/docs/client-api.html` }, "{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/client-api.html` }", [
                        import_server.InkRegistry.createText(`
      `, false),
                        ...this._toNodeList(_("Client API")),
                        import_server.InkRegistry.createText(`
    `, false)
                      ]),
                      import_server.InkRegistry.createText(`
  `, false)
                    ] : true ? [
                      ,
                      import_server.InkRegistry.createText(`
    `, false),
                      import_server.InkRegistry.createElement("a", { "class": `block tx-info py-10 pl-10`, "href": `/ink/docs/client-api.html` }, "{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/client-api.html` }", [
                        import_server.InkRegistry.createText(`
      `, false),
                        ...this._toNodeList(_("Client API")),
                        import_server.InkRegistry.createText(`
    `, false)
                      ]),
                      import_server.InkRegistry.createText(`
  `, false)
                    ] : [],
                    import_server.InkRegistry.createText(`

  `, false),
                    import_server.InkRegistry.createElement("h6", { "class": `bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper` }, "{ 'class': `bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper` }", [
                      import_server.InkRegistry.createText(`
    `, false),
                      ...this._toNodeList(_("Usage")),
                      import_server.InkRegistry.createText(`
  `, false)
                    ]),
                    import_server.InkRegistry.createText(`
  `, false),
                    ...!!(url === "/docs/template-engine.html") ? [
                      import_server.InkRegistry.createText(`
    `, false),
                      import_server.InkRegistry.createElement("a", { "class": `block tx-info py-10 pl-10 tx-bold`, "href": `/ink/docs/template-engine.html` }, "{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/template-engine.html` }", [
                        import_server.InkRegistry.createText(`
      `, false),
                        ...this._toNodeList(_("Template Engine")),
                        import_server.InkRegistry.createText(`
    `, false)
                      ]),
                      import_server.InkRegistry.createText(`
  `, false)
                    ] : true ? [
                      ,
                      import_server.InkRegistry.createText(`
    `, false),
                      import_server.InkRegistry.createElement("a", { "class": `block tx-info py-10 pl-10`, "href": `/ink/docs/template-engine.html` }, "{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/template-engine.html` }", [
                        import_server.InkRegistry.createText(`
      `, false),
                        ...this._toNodeList(_("Template Engine")),
                        import_server.InkRegistry.createText(`
    `, false)
                      ]),
                      import_server.InkRegistry.createText(`
  `, false)
                    ] : [],
                    import_server.InkRegistry.createText(`
  `, false),
                    ...!!(url === "/docs/single-page.html") ? [
                      import_server.InkRegistry.createText(`
    `, false),
                      import_server.InkRegistry.createElement("a", { "class": `block tx-info py-10 pl-10 tx-bold`, "href": `/ink/docs/single-page.html` }, "{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/single-page.html` }", [
                        import_server.InkRegistry.createText(`
      `, false),
                        ...this._toNodeList(_("Single Page App")),
                        import_server.InkRegistry.createText(`
    `, false)
                      ]),
                      import_server.InkRegistry.createText(`
  `, false)
                    ] : true ? [
                      ,
                      import_server.InkRegistry.createText(`
    `, false),
                      import_server.InkRegistry.createElement("a", { "class": `block tx-info py-10 pl-10`, "href": `/ink/docs/single-page.html` }, "{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/single-page.html` }", [
                        import_server.InkRegistry.createText(`
      `, false),
                        ...this._toNodeList(_("Single Page App")),
                        import_server.InkRegistry.createText(`
    `, false)
                      ]),
                      import_server.InkRegistry.createText(`
  `, false)
                    ] : [],
                    import_server.InkRegistry.createText(`
  `, false),
                    ...!!(url === "/docs/static-site.html") ? [
                      import_server.InkRegistry.createText(`
    `, false),
                      import_server.InkRegistry.createElement("a", { "class": `block tx-info py-10 pl-10 tx-bold`, "href": `/ink/docs/static-site.html` }, "{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/static-site.html` }", [
                        import_server.InkRegistry.createText(`
      `, false),
                        ...this._toNodeList(_("Static Site Generator")),
                        import_server.InkRegistry.createText(`
    `, false)
                      ]),
                      import_server.InkRegistry.createText(`
  `, false)
                    ] : true ? [
                      ,
                      import_server.InkRegistry.createText(`
    `, false),
                      import_server.InkRegistry.createElement("a", { "class": `block tx-info py-10 pl-10`, "href": `/ink/docs/static-site.html` }, "{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/static-site.html` }", [
                        import_server.InkRegistry.createText(`
      `, false),
                        ...this._toNodeList(_("Static Site Generator")),
                        import_server.InkRegistry.createText(`
    `, false)
                      ]),
                      import_server.InkRegistry.createText(`
  `, false)
                    ] : [],
                    import_server.InkRegistry.createText(`
  `, false),
                    ...!!(url === "/docs/component-publisher.html") ? [
                      import_server.InkRegistry.createText(`
    `, false),
                      import_server.InkRegistry.createElement("a", { "class": `block tx-info py-10 pl-10 tx-bold`, "href": `/ink/docs/component-publisher.html` }, "{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/component-publisher.html` }", [
                        import_server.InkRegistry.createText(`
      `, false),
                        ...this._toNodeList(_("Component Publisher")),
                        import_server.InkRegistry.createText(`
    `, false)
                      ]),
                      import_server.InkRegistry.createText(`
  `, false)
                    ] : true ? [
                      ,
                      import_server.InkRegistry.createText(`
    `, false),
                      import_server.InkRegistry.createElement("a", { "class": `block tx-info py-10 pl-10`, "href": `/ink/docs/component-publisher.html` }, "{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/component-publisher.html` }", [
                        import_server.InkRegistry.createText(`
      `, false),
                        ...this._toNodeList(_("Component Publisher")),
                        import_server.InkRegistry.createText(`
    `, false)
                      ]),
                      import_server.InkRegistry.createText(`
  `, false)
                    ] : [],
                    import_server.InkRegistry.createText(`
  `, false),
                    ...!!(url === "/docs/developer-tools.html") ? [
                      import_server.InkRegistry.createText(`
    `, false),
                      import_server.InkRegistry.createElement("a", { "class": `block tx-info py-10 pl-10 tx-bold mb-100`, "href": `/ink/docs/developer-tools.html` }, "{ 'class': `block tx-info py-10 pl-10 tx-bold mb-100`, 'href': `/ink/docs/developer-tools.html` }", [
                        import_server.InkRegistry.createText(`
      `, false),
                        ...this._toNodeList(_("Developer Tools")),
                        import_server.InkRegistry.createText(`
    `, false)
                      ]),
                      import_server.InkRegistry.createText(`
  `, false)
                    ] : true ? [
                      ,
                      import_server.InkRegistry.createText(`
    `, false),
                      import_server.InkRegistry.createElement("a", { "class": `block tx-info py-10 pl-10 mb-100`, "href": `/ink/docs/developer-tools.html` }, "{ 'class': `block tx-info py-10 pl-10 mb-100`, 'href': `/ink/docs/developer-tools.html` }", [
                        import_server.InkRegistry.createText(`
      `, false),
                        ...this._toNodeList(_("Developer Tools")),
                        import_server.InkRegistry.createText(`
    `, false)
                      ]),
                      import_server.InkRegistry.createText(`
  `, false)
                    ] : [],
                    import_server.InkRegistry.createText(`
`, false)
                  ])
                ]
              ]),
              import_server.InkRegistry.createText(`
      `, false),
              import_server.InkRegistry.createElement("aside", { "right": true }, "{ 'right': true }", [
                import_server.InkRegistry.createText(`
        `, false),
                import_server.InkRegistry.createElement("menu", { "class": `m-0 px-10 py-20 h-calc-full-40 bg-t-2 scroll-auto` }, "{ 'class': `m-0 px-10 py-20 h-calc-full-40 bg-t-2 scroll-auto` }", [
                  import_server.InkRegistry.createText(`
          `, false),
                  import_server.InkRegistry.createElement("h6", { "class": `tx-muted tx-14 mb-0 mt-0 pb-10 tx-uppercase` }, "{ 'class': `tx-muted tx-14 mb-0 mt-0 pb-10 tx-uppercase` }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    ...this._toNodeList(_("On this page")),
                    import_server.InkRegistry.createText(`
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`
          `, false),
                  import_server.InkRegistry.createElement("nav", { "class": `tx-14 tx-lh-32` }, "{ 'class': `tx-14 tx-lh-32` }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("a", { "class": `block tx-t-0`, "href": `#http` }, "{ 'class': `block tx-t-0`, 'href': `#http` }", [
                      import_server.InkRegistry.createText(`
              `, false),
                      ...this._toNodeList(_("1. Add HTTP")),
                      import_server.InkRegistry.createText(`
            `, false)
                    ]),
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("a", { "class": `block tx-t-0`, "href": `#develop` }, "{ 'class': `block tx-t-0`, 'href': `#develop` }", [
                      import_server.InkRegistry.createText(`
              `, false),
                      ...this._toNodeList(_("2. Add Dev Tools")),
                      import_server.InkRegistry.createText(`
            `, false)
                    ]),
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("a", { "class": `block tx-t-0`, "href": `#cache` }, "{ 'class': `block tx-t-0`, 'href': `#cache` }", [
                      import_server.InkRegistry.createText(`
              `, false),
                      ...this._toNodeList(_("3. Add File Cache")),
                      import_server.InkRegistry.createText(`
            `, false)
                    ]),
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("a", { "class": `block tx-t-0`, "href": `#tailwind` }, "{ 'class': `block tx-t-0`, 'href': `#tailwind` }", [
                      import_server.InkRegistry.createText(`
              `, false),
                      ...this._toNodeList(_("4. Add TailwindCSS")),
                      import_server.InkRegistry.createText(`
            `, false)
                    ]),
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("a", { "class": `block tx-t-0`, "href": `#express` }, "{ 'class': `block tx-t-0`, 'href': `#express` }", [
                      import_server.InkRegistry.createText(`
              `, false),
                      ...this._toNodeList(_("5. Add ExpressJS")),
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
              import_server.InkRegistry.createElement("main", {}, "{ }", [
                import_server.InkRegistry.createText(`
        `, false),
                import_server.InkRegistry.createElement("api-docs", {}, "{ }", [
                  import_server.InkRegistry.createText(`
          `, false),
                  import_server.InkRegistry.createElement("h1", { "class": `tx-primary tx-uppercase tx-30 py-20` }, "{ 'class': `tx-primary tx-uppercase tx-30 py-20` }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    ...this._toNodeList(_("Getting Started")),
                    import_server.InkRegistry.createText(`
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`

          `, false),
                  import_server.InkRegistry.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }", [
                    import_server.InkRegistry.createText(`
            To try out Ink, run the following commands in terminal: 
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`
          `, false),
                  import_server.InkRegistry.createElement("ide-app", { "title": `Terminal`, "class": `py-20` }, "{ 'title': `Terminal`, 'class': `py-20` }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("ide-code", { "lang": `bash` }, "{ 'lang': `bash` }", [
                      import_server.InkRegistry.createText(`
              npm init -y && npm install --save @stackpress/ink && npm install --save-dev ts-node typescript @types/node
            `, false)
                    ]),
                    import_server.InkRegistry.createText(`
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`
          `, false),
                  import_server.InkRegistry.createElement("element-alert", { "solid": true, "curved": true, "info": true, "class": `my-20 tx-lh-24` }, "{ 'solid': true, 'curved': true, 'info': true, 'class': `my-20 tx-lh-24` }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("element-icon", { "name": `info-circle` }, "{ 'name': `info-circle` }"),
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("strong", {}, "{ }", [
                      import_server.InkRegistry.createText(`Recommended:`, false)
                    ]),
                    import_server.InkRegistry.createText(`
            Download the Ink editor plugin at the `, false),
                    import_server.InkRegistry.createElement("a", { "target": `_blank`, "class": `tx-white tx-underline`, "href": `https://marketplace.visualstudio.com/items?itemName=stackpress.ink-language` }, "{ 'target': `_blank`, 'class': `tx-white tx-underline`, 'href': `https://marketplace.visualstudio.com/items?itemName=stackpress.ink-language` }", [
                      import_server.InkRegistry.createText(`Visual Studio Marketplace`, false)
                    ]),
                    import_server.InkRegistry.createText(`.
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`
          `, false),
                  import_server.InkRegistry.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }", [
                    import_server.InkRegistry.createText(`
            Create a server file called
            `, false),
                    import_server.InkRegistry.createElement("ide-code", { "inline": true }, "{ 'inline': true }", [
                      import_server.InkRegistry.createText(`src/index.ts`, false)
                    ]),
                    import_server.InkRegistry.createText(` 
            with the following code that uses the compiler.
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`

          `, false),
                  import_server.InkRegistry.createElement("ide-app", { "title": `src/index.ts`, "class": `py-20` }, "{ 'title': `src/index.ts`, 'class': `py-20` }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("ide-code", { "class": `scroll-auto`, "lang": `js`, "numbers": true, "trim": true, "detab": 14 }, "{ 'class': `scroll-auto`, 'lang': `js`, 'numbers': true, 'trim': true, 'detab': 14 }", [
                      ...this._toNodeList(`
              import ink from '@stackpress/ink/compiler';
              // make a ink compiler
              const compiler = ink();
              // render HTML
              compiler.render('./src/page.ink').then(console.log);
              // render CSS
              compiler.styles('./src/page.ink').then(console.log);
              // render JS
              compiler.client('./src/page.ink').then(console.log);
            `)
                    ]),
                    import_server.InkRegistry.createText(`
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`
          `, false),
                  import_server.InkRegistry.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }", [
                    import_server.InkRegistry.createText(`
            Last, create a document file called
            `, false),
                    import_server.InkRegistry.createElement("ide-code", { "inline": true }, "{ 'inline': true }", [
                      import_server.InkRegistry.createText(`src/page.ink`, false)
                    ]),
                    import_server.InkRegistry.createText(` 
            with the following template code.
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`
          `, false),
                  import_server.InkRegistry.createElement("ide-app", { "title": `src/page.ink`, "class": `py-20` }, "{ 'title': `src/page.ink`, 'class': `py-20` }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("ide-code", { "class": `scroll-auto`, "numbers": true, "trim": true, "detab": 14 }, "{ 'class': `scroll-auto`, 'numbers': true, 'trim': true, 'detab': 14 }", [
                      ...this._toNodeList(`
              <style>
                .center { text-align: center; }
              </style>
              <script>
                import { env } from '@stackpress/ink';
                const { BUILD_ID, APP_DATA } = env();
                const title = 'Hello World';
              </script>
              <html>
                <head>
                  <title>{title}</title>
                  <link rel="stylesheet" type="text/css" href={\`/build/\${BUILD_ID}.css\`} />
                  <script data-app={APP_DATA} src={\`/build/\${BUILD_ID}.js\`}></script>
                </head>
                <body>
                  <h1 class="center">{title}</h1>
                </body>
              </html>
            `)
                    ]),
                    import_server.InkRegistry.createText(`
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`
          `, false),
                  import_server.InkRegistry.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }", [
                    import_server.InkRegistry.createText(`
            To try out the basic implementation of Ink and see the 
            results, just run the following command in terminal.
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`
          `, false),
                  import_server.InkRegistry.createElement("ide-app", { "title": `Terminal`, "class": `py-20` }, "{ 'title': `Terminal`, 'class': `py-20` }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("ide-code", { "lang": `bash` }, "{ 'lang': `bash` }", [
                      import_server.InkRegistry.createText(`
              npx ts-node src/index.ts
            `, false)
                    ]),
                    import_server.InkRegistry.createText(`
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`

          `, false),
                  import_server.InkRegistry.createElement("a", { "name": `http` }, "{ 'name': `http` }", []),
                  import_server.InkRegistry.createText(`
          `, false),
                  import_server.InkRegistry.createElement("h2", { "class": `tx-primary tx-uppercase tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }, "{ 'class': `tx-primary tx-uppercase tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    ...this._toNodeList(_("1. Add HTTP")),
                    import_server.InkRegistry.createText(`
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`

          `, false),
                  import_server.InkRegistry.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }", [
                    import_server.InkRegistry.createText(`
            In most cases Ink will be used to render a front end from 
            a server framework. In this example, we will use the native
            NodeJS HTTP module to create a server that renders a page
            using Ink. Start by replacing the 
            `, false),
                    import_server.InkRegistry.createElement("ide-code", { "inline": true }, "{ 'inline': true }", [
                      ...this._toNodeList(`'src/index.ts'`)
                    ]),
                    import_server.InkRegistry.createText(`
            file with the following code. 
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`

          `, false),
                  import_server.InkRegistry.createElement("element-alert", { "solid": true, "curved": true, "info": true, "class": `my-20 tx-lh-24` }, "{ 'solid': true, 'curved': true, 'info': true, 'class': `my-20 tx-lh-24` }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("element-icon", { "name": `info-circle` }, "{ 'name': `info-circle` }"),
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("strong", {}, "{ }", [
                      import_server.InkRegistry.createText(`Optional:`, false)
                    ]),
                    import_server.InkRegistry.createText(` You can also check your other 
            files to make sure you are following along.
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`

          `, false),
                  import_server.InkRegistry.createElement("ide-app", { "height": 410, "title": `With NodeJS HTTP` }, "{ 'height': 410, 'title': `With NodeJS HTTP` }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("app-head", {}, "{ }", [
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("div", { "class": `flex scroll-x-auto pt-5 pl-5` }, "{ 'class': `flex scroll-x-auto pt-5 pl-5` }", [
                        import_server.InkRegistry.createText(`
                `, false),
                        import_server.InkRegistry.createElement("element-tab", { "on": true, "class": `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, "active": `bg-black tx-white`, "inactive": `bg-t-1 tx-t-1`, "group": `http`, "selector": `#http-index-ts` }, "{ 'on': true, 'class': `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, 'active': `bg-black tx-white`, 'inactive': `bg-t-1 tx-t-1`, 'group': `http`, 'selector': `#http-index-ts` }", [
                          import_server.InkRegistry.createText(`
                  src/index.ts
                `, false)
                        ]),
                        import_server.InkRegistry.createText(`
                `, false),
                        import_server.InkRegistry.createElement("element-tab", { "class": `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, "active": `bg-black tx-white`, "inactive": `bg-t-1 tx-t-1`, "group": `http`, "selector": `#http-page-ink` }, "{ 'class': `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, 'active': `bg-black tx-white`, 'inactive': `bg-t-1 tx-t-1`, 'group': `http`, 'selector': `#http-page-ink` }", [
                          import_server.InkRegistry.createText(`
                  src/page.ink
                `, false)
                        ]),
                        import_server.InkRegistry.createText(`
                `, false),
                        import_server.InkRegistry.createElement("element-tab", { "class": `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, "active": `bg-black tx-white`, "inactive": `bg-t-1 tx-t-1`, "group": `http`, "selector": `#http-package-json` }, "{ 'class': `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, 'active': `bg-black tx-white`, 'inactive': `bg-t-1 tx-t-1`, 'group': `http`, 'selector': `#http-package-json` }", [
                          import_server.InkRegistry.createText(`
                  package.json
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
                    import_server.InkRegistry.createElement("app-left", {}, "{ }", [
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("h5", { "class": `p-5` }, "{ 'class': `p-5` }", [
                        import_server.InkRegistry.createText(`
                `, false),
                        import_server.InkRegistry.createElement("element-icon", { "name": `chevron-down` }, "{ 'name': `chevron-down` }"),
                        import_server.InkRegistry.createText(`
                `, false),
                        import_server.InkRegistry.createElement("span", {}, "{ }", [
                          import_server.InkRegistry.createText(`src`, false)
                        ]),
                        import_server.InkRegistry.createText(`
              `, false)
                      ]),
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("element-tab", { "on": true, "class": `pl-15 pt-10 block`, "active": `tx-white`, "inactive": `tx-t-1`, "group": `http`, "selector": `#http-index-ts` }, "{ 'on': true, 'class': `pl-15 pt-10 block`, 'active': `tx-white`, 'inactive': `tx-t-1`, 'group': `http`, 'selector': `#http-index-ts` }", [
                        import_server.InkRegistry.createText(`
                `, false),
                        import_server.InkRegistry.createElement("element-icon", { "name": `file` }, "{ 'name': `file` }"),
                        import_server.InkRegistry.createText(`
                index.ts
              `, false)
                      ]),
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("element-tab", { "class": `pl-15 pt-10 block`, "active": `tx-white`, "inactive": `tx-t-1`, "group": `http`, "selector": `#http-page-ink` }, "{ 'class': `pl-15 pt-10 block`, 'active': `tx-white`, 'inactive': `tx-t-1`, 'group': `http`, 'selector': `#http-page-ink` }", [
                        import_server.InkRegistry.createText(`
                `, false),
                        import_server.InkRegistry.createElement("element-icon", { "name": `file` }, "{ 'name': `file` }"),
                        import_server.InkRegistry.createText(`
                page.ink
              `, false)
                      ]),
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("element-tab", { "class": `pt-10 block`, "active": `tx-white`, "inactive": `tx-t-1`, "group": `http`, "selector": `#http-package-json` }, "{ 'class': `pt-10 block`, 'active': `tx-white`, 'inactive': `tx-t-1`, 'group': `http`, 'selector': `#http-package-json` }", [
                        import_server.InkRegistry.createText(`
                `, false),
                        import_server.InkRegistry.createElement("element-icon", { "name": `file` }, "{ 'name': `file` }"),
                        import_server.InkRegistry.createText(`
                package.json
              `, false)
                      ]),
                      import_server.InkRegistry.createText(`
            `, false)
                    ]),
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("app-main", {}, "{ }", [
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("ide-code", { "id": `http-index-ts`, "lang": `js`, "numbers": true, "trim": true, "detab": 16 }, "{ 'id': `http-index-ts`, 'lang': `js`, 'numbers': true, 'trim': true, 'detab': 16 }", [
                        ...this._toNodeList(`
                import http from 'http';
                import ink from '@stackpress/ink/compiler';

                // create ink compiler
                const compiler = ink();
                // create http server
                const server = http.createServer(async (req, res) => {
                  // if build asset...
                  if (req.url?.startsWith('/build/')) {
                    // get filename ie. abc123.js
                    const filename = req.url.substring(7);
                    // get asset
                    const { type, content } = await compiler.asset(filename);
                    // send response
                    res.writeHead(200, { 'Content-Type': type });
                    return res.end(content);
                  // if home page
                  } else if (req.url === '/') {
                    // render and send response
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    return res.end(await compiler.render('./src/page.ink', {
                      title: 'Hello World'
                    }));
                  }
                });
                // listen on port 3000
                server.listen(3000);
              `)
                      ]),
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("ide-code", { "id": `http-page-ink`, "style": `display:none`, "numbers": true, "trim": true, "detab": 16 }, "{ 'id': `http-page-ink`, 'style': `display:none`, 'numbers': true, 'trim': true, 'detab': 16 }", [
                        ...this._toNodeList(`
                <style>
                  .center { text-align: center; }
                </style>
                <script>
                  import { env, props } from '@stackpress/ink';
                  const { BUILD_ID, APP_DATA } = env();
                  const { title } = props();
                </script>
                <html>
                  <head>
                    <title>{title}</title>
                    <link rel="stylesheet" type="text/css" href={\`/build/\${BUILD_ID}.css\`} />
                    <script data-app={APP_DATA} src={\`/build/\${BUILD_ID}.js\`}></script>
                  </head>
                  <body>
                    <h1 class="center">{title}</h1>
                  </body>
                </html>
              `)
                      ]),
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("ide-code", { "id": `http-package-json`, "style": `display:none`, "lang": `js`, "numbers": true, "trim": true, "detab": 16 }, "{ 'id': `http-package-json`, 'style': `display:none`, 'lang': `js`, 'numbers': true, 'trim': true, 'detab': 16 }", [
                        ...this._toNodeList(`
                {
                  "name": "my-project",
                  "version": "1.0.0",
                  "private": true,
                  "scripts": {
                    "dev": "ts-node ./src/index.ts"
                  },
                  "dependencies": {
                    "@stackpress/ink": "0.1.23"
                  },
                  "devDependencies": {
                    "@types/node": "22.1.0",
                    "ts-node": "10.9.2",
                    "typescript": "5.5.4"
                  }
                }
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
                  import_server.InkRegistry.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }", [
                    import_server.InkRegistry.createText(`
            To run your first Ink web app, just run the following 
            command in terminal.
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`
          `, false),
                  import_server.InkRegistry.createElement("ide-app", { "title": `Terminal`, "class": `py-20` }, "{ 'title': `Terminal`, 'class': `py-20` }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("ide-code", { "lang": `bash` }, "{ 'lang': `bash` }", [
                      import_server.InkRegistry.createText(`
              npx ts-node src/index.ts
            `, false)
                    ]),
                    import_server.InkRegistry.createText(`
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`

          `, false),
                  import_server.InkRegistry.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }", [
                    import_server.InkRegistry.createText(`
            You can now check 
            `, false),
                    import_server.InkRegistry.createElement("ide-code", { "lang": `js`, "inline": true }, "{ 'lang': `js`, 'inline': true }", [
                      import_server.InkRegistry.createText(`http://localhost:3000/`, false)
                    ]),
                    import_server.InkRegistry.createText(` 
            in your browser to see your Ink application. The 
            `, false),
                    import_server.InkRegistry.createElement("ide-code", { "lang": `js`, "inline": true }, "{ 'lang': `js`, 'inline': true }", [
                      import_server.InkRegistry.createText(`ink()`, false)
                    ]),
                    import_server.InkRegistry.createText(` 
            function takes in the following options, all of 
            which are optional.
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`

          `, false),
                  import_server.InkRegistry.createElement("api-ui", { "start": `Render Methods` }, "{ 'start': `Render Methods` }"),
                  import_server.InkRegistry.createText(`

          `, false),
                  import_server.InkRegistry.createElement("a", { "name": `develop` }, "{ 'name': `develop` }", []),
                  import_server.InkRegistry.createText(`
          `, false),
                  import_server.InkRegistry.createElement("h2", { "class": `tx-primary tx-uppercase tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }, "{ 'class': `tx-primary tx-uppercase tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    ...this._toNodeList(_("2. Add Developer Tools")),
                    import_server.InkRegistry.createText(`
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`

          `, false),
                  import_server.InkRegistry.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }", [
                    import_server.InkRegistry.createText(`
            Ink provides a separate package for a better development 
            experience when working with server frameworks that utilize 
            the native http module. Start by installing adding 
            `, false),
                    import_server.InkRegistry.createElement("ide-code", { "lang": `js`, "inline": true }, "{ 'lang': `js`, 'inline': true }", [
                      ...this._toNodeList(`@stackpress/ink-dev`)
                    ]),
                    import_server.InkRegistry.createText(`
            to your project.
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`
          `, false),
                  import_server.InkRegistry.createElement("ide-app", { "title": `Terminal`, "class": `py-20` }, "{ 'title': `Terminal`, 'class': `py-20` }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("ide-code", { "lang": `bash` }, "{ 'lang': `bash` }", [
                      import_server.InkRegistry.createText(`
              npm install --save-dev @stackpress/ink-dev
            `, false)
                    ]),
                    import_server.InkRegistry.createText(`
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`
          `, false),
                  import_server.InkRegistry.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }", [
                    import_server.InkRegistry.createText(`
            Next, import the `, false),
                    import_server.InkRegistry.createElement("ide-code", { "lang": `js`, "inline": true }, "{ 'lang': `js`, 'inline': true }", [
                      ...this._toNodeList(`dev()`)
                    ]),
                    import_server.InkRegistry.createText(` 
            function from the package and use it in your existing 
            `, false),
                    import_server.InkRegistry.createElement("ide-code", { "lang": `js`, "inline": true }, "{ 'lang': `js`, 'inline': true }", [
                      ...this._toNodeList(`src/index.ts`)
                    ]),
                    import_server.InkRegistry.createText(` 
            file to create a development server as shown in the example below.
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`
          `, false),
                  import_server.InkRegistry.createElement("ide-app", { "title": `src/index.ts`, "class": `py-20` }, "{ 'title': `src/index.ts`, 'class': `py-20` }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("ide-code", { "lang": `js`, "numbers": true, "trim": true, "detab": 14 }, "{ 'lang': `js`, 'numbers': true, 'trim': true, 'detab': 14 }", [
                      ...this._toNodeList(`
              // ...
              import { dev } from '@stackpress/ink-dev';
              // ...create ink compiler...
              // 1. create dev tools
              const { router, refresh } = dev();

              const server = http.createServer(async (req, res) => {
                // 2. Add dev router
                if (router(req, res)) return;

                if (req.url?.startsWith('/build/')) {
                  // ...
                } else if (req.url === '/') {
                  // 3. sync builder with refresh server
                  refresh.sync(compiler.fromSource('./src/page.ink'));
                  // ... compile and send response ...
                }
              });
              //...listen on port 3000...
            `)
                    ]),
                    import_server.InkRegistry.createText(`
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`
          `, false),
                  import_server.InkRegistry.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }", [
                    import_server.InkRegistry.createText(`
            The `, false),
                    import_server.InkRegistry.createElement("ide-code", { "inline": true, "lang": `js` }, "{ 'inline': true, 'lang': `js` }", [
                      ...this._toNodeList(`dev()`)
                    ]),
                    import_server.InkRegistry.createText(` export 
            from  `, false),
                    import_server.InkRegistry.createElement("ide-code", { "inline": true, "lang": `js` }, "{ 'inline': true, 'lang': `js` }", [
                      ...this._toNodeList(`@stackpress/ink-dev`)
                    ]),
                    import_server.InkRegistry.createText(`
            exports tools that supports development mode and accepts the 
            following options.
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`

          `, false),
                  import_server.InkRegistry.createElement("api-ui", { "start": `DeveloperOptions` }, "{ 'start': `DeveloperOptions` }"),
                  import_server.InkRegistry.createText(`

          `, false),
                  import_server.InkRegistry.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }", [
                    import_server.InkRegistry.createText(`
            This returns several tools you can use in your server app.
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`

          `, false),
                  import_server.InkRegistry.createElement("api-ui", { "start": `Developer Tools` }, "{ 'start': `Developer Tools` }"),
                  import_server.InkRegistry.createText(`

          `, false),
                  import_server.InkRegistry.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }", [
                    import_server.InkRegistry.createText(`
            Lastly, update the document file 
            `, false),
                    import_server.InkRegistry.createElement("ide-code", { "lang": `js`, "inline": true }, "{ 'lang': `js`, 'inline': true }", [
                      ...this._toNodeList(`src/page.ink`)
                    ]),
                    import_server.InkRegistry.createText(` 
            to include the development script 
            `, false),
                    import_server.InkRegistry.createElement("ide-code", { "inline": true }, "{ 'inline': true }", [
                      ...this._toNodeList(`<script src="/dev.js"></script>`)
                    ]),
                    import_server.InkRegistry.createText(` 
            as shown below.
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`
          `, false),
                  import_server.InkRegistry.createElement("ide-app", { "title": `src/page.ink`, "class": `py-20` }, "{ 'title': `src/page.ink`, 'class': `py-20` }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("ide-code", { "numbers": true, "trim": true, "detab": 14 }, "{ 'numbers': true, 'trim': true, 'detab': 14 }", [
                      ...this._toNodeList(`
              <style>
                /* ... */
              </style>
              <script>
                //... 
              </script>
              <html>
                <head>
                  <!-- ... -->
                  <!-- 4. include dev script -->
                  <script src="/dev.js"></script>
                </head>
                <body>
                  <!-- ... -->
                </body>
              </html>
            `)
                    ]),
                    import_server.InkRegistry.createText(`
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`

          `, false),
                  import_server.InkRegistry.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }", [
                    import_server.InkRegistry.createText(`
            The project should now look like the example below.
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`

          `, false),
                  import_server.InkRegistry.createElement("ide-app", { "height": 410, "title": `With Developer Tools`, "class": `py-20` }, "{ 'height': 410, 'title': `With Developer Tools`, 'class': `py-20` }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("app-head", {}, "{ }", [
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("div", { "class": `flex scroll-x-auto pt-5 pl-5` }, "{ 'class': `flex scroll-x-auto pt-5 pl-5` }", [
                        import_server.InkRegistry.createText(`
                `, false),
                        import_server.InkRegistry.createElement("element-tab", { "on": true, "class": `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, "active": `bg-black tx-white`, "inactive": `bg-t-1 tx-t-1`, "group": `develop`, "selector": `#develop-index-ts` }, "{ 'on': true, 'class': `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, 'active': `bg-black tx-white`, 'inactive': `bg-t-1 tx-t-1`, 'group': `develop`, 'selector': `#develop-index-ts` }", [
                          import_server.InkRegistry.createText(`
                  src/index.ts
                `, false)
                        ]),
                        import_server.InkRegistry.createText(`
                `, false),
                        import_server.InkRegistry.createElement("element-tab", { "class": `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, "active": `bg-black tx-white`, "inactive": `bg-t-1 tx-t-1`, "group": `develop`, "selector": `#develop-page-ink` }, "{ 'class': `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, 'active': `bg-black tx-white`, 'inactive': `bg-t-1 tx-t-1`, 'group': `develop`, 'selector': `#develop-page-ink` }", [
                          import_server.InkRegistry.createText(`
                  src/page.ink
                `, false)
                        ]),
                        import_server.InkRegistry.createText(`
                `, false),
                        import_server.InkRegistry.createElement("element-tab", { "class": `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, "active": `bg-black tx-white`, "inactive": `bg-t-1 tx-t-1`, "group": `develop`, "selector": `#develop-package-json` }, "{ 'class': `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, 'active': `bg-black tx-white`, 'inactive': `bg-t-1 tx-t-1`, 'group': `develop`, 'selector': `#develop-package-json` }", [
                          import_server.InkRegistry.createText(`
                  package.json
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
                    import_server.InkRegistry.createElement("app-left", {}, "{ }", [
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("h5", { "class": `p-5` }, "{ 'class': `p-5` }", [
                        import_server.InkRegistry.createText(`
                `, false),
                        import_server.InkRegistry.createElement("element-icon", { "name": `chevron-down` }, "{ 'name': `chevron-down` }"),
                        import_server.InkRegistry.createText(`
                `, false),
                        import_server.InkRegistry.createElement("span", {}, "{ }", [
                          import_server.InkRegistry.createText(`src`, false)
                        ]),
                        import_server.InkRegistry.createText(`
              `, false)
                      ]),
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("element-tab", { "on": true, "class": `pl-15 pt-10 block`, "active": `tx-white`, "inactive": `tx-t-1`, "group": `develop`, "selector": `#develop-index-ts` }, "{ 'on': true, 'class': `pl-15 pt-10 block`, 'active': `tx-white`, 'inactive': `tx-t-1`, 'group': `develop`, 'selector': `#develop-index-ts` }", [
                        import_server.InkRegistry.createText(`
                `, false),
                        import_server.InkRegistry.createElement("element-icon", { "name": `file` }, "{ 'name': `file` }"),
                        import_server.InkRegistry.createText(`
                index.ts
              `, false)
                      ]),
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("element-tab", { "class": `pl-15 pt-10 block`, "active": `tx-white`, "inactive": `tx-t-1`, "group": `develop`, "selector": `#develop-page-ink` }, "{ 'class': `pl-15 pt-10 block`, 'active': `tx-white`, 'inactive': `tx-t-1`, 'group': `develop`, 'selector': `#develop-page-ink` }", [
                        import_server.InkRegistry.createText(`
                `, false),
                        import_server.InkRegistry.createElement("element-icon", { "name": `file` }, "{ 'name': `file` }"),
                        import_server.InkRegistry.createText(`
                page.ink
              `, false)
                      ]),
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("element-tab", { "class": `pt-10 block`, "active": `tx-white`, "inactive": `tx-t-1`, "group": `develop`, "selector": `#develop-package-json` }, "{ 'class': `pt-10 block`, 'active': `tx-white`, 'inactive': `tx-t-1`, 'group': `develop`, 'selector': `#develop-package-json` }", [
                        import_server.InkRegistry.createText(`
                `, false),
                        import_server.InkRegistry.createElement("element-icon", { "name": `file` }, "{ 'name': `file` }"),
                        import_server.InkRegistry.createText(`
                package.json
              `, false)
                      ]),
                      import_server.InkRegistry.createText(`
            `, false)
                    ]),
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("app-main", {}, "{ }", [
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("ide-code", { "id": `develop-index-ts`, "lang": `js`, "numbers": true, "trim": true, "detab": 16 }, "{ 'id': `develop-index-ts`, 'lang': `js`, 'numbers': true, 'trim': true, 'detab': 16 }", [
                        ...this._toNodeList(`
                import http from 'http';
                import ink from '@stackpress/ink/compiler';
                import { dev } from '@stackpress/ink-dev';

                const compiler = ink();
                // 1. create dev tools
                const { router, refresh } = dev();

                const server = http.createServer(async (req, res) => {
                  // 2. Add dev router
                  if (router(req, res)) return;
                  
                  if (req.url?.startsWith('/build/')) {
                    const filename = req.url.substring(7);
                    const { type, content } = await compiler.asset(filename);
                    res.writeHead(200, { 'Content-Type': type });
                    return res.end(content);
                  } else if (req.url === '/') {
                    // 3. sync builder with refresh server
                    refresh.sync(compiler.fromSource('./src/page.ink'));
                    
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    return res.end(await compiler.render('./src/page.ink', {
                      title: 'Hello World'
                    }));
                  }
                });
                server.listen(3000);
              `)
                      ]),
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("ide-code", { "id": `develop-page-ink`, "style": `display:none`, "numbers": true, "trim": true, "detab": 16 }, "{ 'id': `develop-page-ink`, 'style': `display:none`, 'numbers': true, 'trim': true, 'detab': 16 }", [
                        ...this._toNodeList(`
                <style>
                  .center { text-align: center; }
                </style>
                <script>
                  import { env, props } from '@stackpress/ink';
                  const { BUILD_ID, APP_DATA } = env();
                  const { title } = props();
                </script>
                <html>
                  <head>
                    <title>{title}</title>
                    <link rel="stylesheet" type="text/css" href={\`/build/\${BUILD_ID}.css\`} />
                    <script data-app={APP_DATA} src={\`/build/\${BUILD_ID}.js\`}></script>
                    <script src="/dev.js"></script>
                  </head>
                  <body>
                    <h1 class="center">{title}</h1>
                  </body>
                </html>
              `)
                      ]),
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("ide-code", { "id": `develop-package-json`, "style": `display:none`, "lang": `js`, "numbers": true, "trim": true, "detab": 16 }, "{ 'id': `develop-package-json`, 'style': `display:none`, 'lang': `js`, 'numbers': true, 'trim': true, 'detab': 16 }", [
                        ...this._toNodeList(`
                {
                  "name": "my-project",
                  "version": "1.0.0",
                  "private": true,
                  "scripts": {
                    "dev": "ts-node ./src/index.ts"
                  },
                  "dependencies": {
                    "@stackpress/ink": "0.1.23"
                  },
                  "devDependencies": {
                    "@stackpress/ink-dev": "0.1.23",
                    "@types/node": "22.1.0",
                    "ts-node": "10.9.2",
                    "typescript": "5.5.4"
                  }
                }
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
                  import_server.InkRegistry.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }", [
                    import_server.InkRegistry.createText(`
            Re-run the following command in terminal. It shouldn't look 
            like anything has changed, but the development server is now
            running in the background. Try to change
            `, false),
                    import_server.InkRegistry.createElement("ide-code", { "lang": `js`, "inline": true }, "{ 'lang': `js`, 'inline': true }", [
                      ...this._toNodeList(`src/page.ink`)
                    ]),
                    import_server.InkRegistry.createText(`.
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`
          `, false),
                  import_server.InkRegistry.createElement("ide-app", { "title": `Terminal`, "class": `py-20` }, "{ 'title': `Terminal`, 'class': `py-20` }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("ide-code", { "lang": `bash` }, "{ 'lang': `bash` }", [
                      import_server.InkRegistry.createText(`
              npx ts-node src/index.ts
            `, false)
                    ]),
                    import_server.InkRegistry.createText(`
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`
          `, false),
                  import_server.InkRegistry.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }", [
                    import_server.InkRegistry.createText(`
            Whenever `, false),
                    import_server.InkRegistry.createElement("ide-code", { "lang": `js`, "inline": true }, "{ 'lang': `js`, 'inline': true }", [
                      ...this._toNodeList(`src/page.ink`)
                    ]),
                    import_server.InkRegistry.createText(` 
            is saved, the development server will automatically refresh 
            the page. Components will also be updated in real-time without
            the page reloading.
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`

          `, false),
                  import_server.InkRegistry.createElement("a", { "name": `cache` }, "{ 'name': `cache` }", []),
                  import_server.InkRegistry.createText(`
          `, false),
                  import_server.InkRegistry.createElement("h2", { "class": `tx-primary tx-uppercase tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }, "{ 'class': `tx-primary tx-uppercase tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    ...this._toNodeList(_("3. Add Cache Files")),
                    import_server.InkRegistry.createText(`
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`

          `, false),
                  import_server.InkRegistry.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }", [
                    import_server.InkRegistry.createText(`
            Ink has an out-of-the-box cache and build strategy that
            can be used to store and serve pre-compiled files. To use the
            cache, you just need to import it from the 
            `, false),
                    import_server.InkRegistry.createElement("ide-code", { "lang": `js`, "inline": true }, "{ 'lang': `js`, 'inline': true }", [
                      ...this._toNodeList(`@stackpress/ink/compiler`)
                    ]),
                    import_server.InkRegistry.createText(` 
            module and use it like the following example.
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`

          `, false),
                  import_server.InkRegistry.createElement("ide-app", { "title": `src/index.ts`, "class": `py-20` }, "{ 'title': `src/index.ts`, 'class': `py-20` }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("ide-code", { "lang": `js`, "numbers": true, "trim": true, "detab": 14 }, "{ 'lang': `js`, 'numbers': true, 'trim': true, 'detab': 14 }", [
                      ...this._toNodeList(`
              // ...
              import path from 'path';
              import { cache } from '@stackpress/ink/compiler';
              // ...create ink compiler...
              // 1. use cache
              compiler.use(cache({
                buildPath: path.join(__dirname, '../build')
              }));
              // ...create dev tools...
              // ...create http server...
              // ...listen on port 3000...
            `)
                    ]),
                    import_server.InkRegistry.createText(`
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`

          `, false),
                  import_server.InkRegistry.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }", [
                    import_server.InkRegistry.createText(`
            The `, false),
                    import_server.InkRegistry.createElement("ide-code", { "lang": `js`, "inline": true }, "{ 'lang': `js`, 'inline': true }", [
                      ...this._toNodeList(`src/index.ts`)
                    ]),
                    import_server.InkRegistry.createText(` 
            file should now look like the example below.
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`

          `, false),
                  import_server.InkRegistry.createElement("ide-app", { "title": `src/index.ts`, "class": `py-20` }, "{ 'title': `src/index.ts`, 'class': `py-20` }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("ide-code", { "lang": `js`, "numbers": true, "trim": true, "detab": 14 }, "{ 'lang': `js`, 'numbers': true, 'trim': true, 'detab': 14 }", [
                      ...this._toNodeList(`
              import path from 'path';
              import http from 'http';
              import ink, { cache } from '@stackpress/ink/compiler';
              import { dev } from '@stackpress/ink-dev';

              const compiler = ink();
              // 1. use cache
              compiler.use(cache({
                buildPath: path.join(__dirname, '../build')
              }));
              const { router, refresh } = dev();
              const server = http.createServer(async (req, res) => {
                if (router(req, res)) return;
                if (req.url?.startsWith('/build/')) {
                  const filename = req.url.substring(7);
                  const { type, content } = await compiler.asset(filename);
                  res.writeHead(200, { 'Content-Type': type });
                  return res.end(content);
                } else if (req.url === '/') {
                  refresh.sync(compiler.fromSource('./src/page.ink'));
                  res.writeHead(200, { 'Content-Type': 'text/html' });
                  return res.end(await compiler.render('./src/page.ink', {
                    title: 'Hello World'
                  }));
                }
              });
              server.listen(3000);
            `)
                    ]),
                    import_server.InkRegistry.createText(`
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`

          `, false),
                  import_server.InkRegistry.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }", [
                    import_server.InkRegistry.createText(`
            Re-run the following command in terminal to start the cache 
            server.
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`
          `, false),
                  import_server.InkRegistry.createElement("ide-app", { "title": `Terminal`, "class": `py-20` }, "{ 'title': `Terminal`, 'class': `py-20` }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("ide-code", { "lang": `bash` }, "{ 'lang': `bash` }", [
                      import_server.InkRegistry.createText(`
              npx ts-node src/index.ts
            `, false)
                    ]),
                    import_server.InkRegistry.createText(`
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`
          `, false),
                  import_server.InkRegistry.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }", [
                    import_server.InkRegistry.createText(`
            Load 
            `, false),
                    import_server.InkRegistry.createElement("ide-code", { "lang": `js`, "inline": true }, "{ 'lang': `js`, 'inline': true }", [
                      import_server.InkRegistry.createText(`http://localhost:3000/`, false)
                    ]),
                    import_server.InkRegistry.createText(` 
            in your browser. After loading you should see files that were 
            generated in a new build folder found in your project root. 
            The `, false),
                    import_server.InkRegistry.createElement("ide-code", { "lang": `js`, "inline": true }, "{ 'lang': `js`, 'inline': true }", [
                      import_server.InkRegistry.createText(`cache()`, false)
                    ]),
                    import_server.InkRegistry.createText(` plugin is 
            just a wrapper that listens for build related events and
            stores the generated files in the specified build path.
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`

          `, false),
                  import_server.InkRegistry.createElement("ide-app", { "height": 400, "title": `cache.ts (Internal)`, "class": `py-20` }, "{ 'height': 400, 'title': `cache.ts (Internal)`, 'class': `py-20` }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("ide-code", { "lang": `js`, "numbers": true, "trim": true, "detab": 14 }, "{ 'lang': `js`, 'numbers': true, 'trim': true, 'detab': 14 }", [
                      ...this._toNodeList(`
              emitter.on('manifest-resolved', (event: Event<string>) => {
                const manifest = event.params.manifest as Manifest
                //write the manifest to the file system
                writeFile(paths.manifest, manifest.toJson());
              });

              // on pre render, try to use cache if live
              emitter.on('render', (event: Event<string>) => {
                //if not live, dont retrieve from cache
                if (environment !== 'production') return;
                //extract props and builder from params
                const props = (event.params.props || {}) as Hash;
                const builder = event.params.builder as Builder;
                //get fs and id ie. abc123c
                const { fs, id } = builder.document;
                //get cache file path ie. /path/to/docs/build/client/abc123c.js
                const cache = path.join(paths.build, 'server', \`\${id}.js\`);
                //if production and cache file exists
                if (fs.existsSync(cache)) {
                  //get the build object
                  const build = compiler.fromCache(cache);
                  //render the document
                  const html = build.document.render(props);
                  //return the cached content
                  event.set(html);
                }
              });

              // on post render, cache (dev and live)
              emitter.on('rendered', (event: Event<string>) => {
                //extract build and builder from params
                const builder = event.params.builder as Builder;
                const html = event.params.html as string;
                //get fs and id ie. abc123c
                const { id } = builder.document;
                //get cache file path ie. /path/to/docs/build/client/abc123c.html
                const cache = path.join(paths.build, 'client', \`\${id}.html\`);
                //write the server source code to cache
                writeFile(cache, html);
              });

              // on pre client build, try to use cache if live
              emitter.on('build-client', (event: Event<string>) => {
                //if not live, dont retrieve from cache
                if (environment !== 'production') return;
                //extract builder from params
                const builder = event.params.builder as Builder;
                //get fs and id ie. abc123c
                const id = builder.document.id;
                //get cache file path ie. /path/to/docs/build/client/abc123c.js
                const cache = path.join(paths.build, 'client', \`\${id}.js\`);
                //if cache file exists, send it
                if (fs.existsSync(cache)) {
                  event.set(fs.readFileSync(cache, 'utf8'));
                }
              });

              // on post client build, cache (dev and live)
              emitter.on('built-client', (event: Event<string>) => {
                //extract builder and sourcecode from params
                const builder = event.params.builder as Builder;
                const sourceCode = event.params.sourceCode as string;
                //get fs and id ie. abc123c
                const id = builder.document.id;
                //get cache file path ie. /path/to/docs/build/client/abc123c.js
                const cache = path.join(paths.build, 'client', \`\${id}.js\`);
                //write the client source code to cache
                writeFile(cache, sourceCode);
              });

              // on pre markup build, try to use cache if live
              emitter.on('build-markup', /* ... */);
              //on post markup build, cache (dev and live)
              emitter.on('built-markup', /* ... */);
              //on pre server build, try to use cache if live
              emitter.on('build-server', /* ... */);
              //on post server build, cache (dev and live)
              emitter.on('built-server', /* ... */);
              //on pre styles build, try to use cache if live
              emitter.on('build-styles', /* ... */);
              //on post styles build, cache (dev and live)
              emitter.on('built-styles', /* ... */);

              // Initialize: if there's a manifest
              if (fs.existsSync(paths.manifest)) {
                //load the manifest file
                compiler.manifest.load(
                  JSON.parse(fs.readFileSync(paths.manifest, 'utf-8'))
                );
              }
            `)
                    ]),
                    import_server.InkRegistry.createText(`
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`

          `, false),
                  import_server.InkRegistry.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }", [
                    import_server.InkRegistry.createText(`
            This means you can also use your own cache strategy by 
            listening to the events emitted by the compiler. The
            following table lists all the events that the compiler
            emits during the build cycle of a document.
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`

          `, false),
                  import_server.InkRegistry.createElement("api-ui", { "start": `EventEmitter` }, "{ 'start': `EventEmitter` }"),
                  import_server.InkRegistry.createText(`

          `, false),
                  import_server.InkRegistry.createElement("a", { "name": `tailwind` }, "{ 'name': `tailwind` }", []),
                  import_server.InkRegistry.createText(`
          `, false),
                  import_server.InkRegistry.createElement("h2", { "class": `tx-primary tx-uppercase tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }, "{ 'class': `tx-primary tx-uppercase tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    ...this._toNodeList(_("4. Add TailwindCSS")),
                    import_server.InkRegistry.createText(`
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`

          `, false),
                  import_server.InkRegistry.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }", [
                    import_server.InkRegistry.createText(`
            Tailwind is an atomic CSS collection of styles that favours 
            small, single-purpose classes with their selector names based 
            on its visual function. It works by using a build process to
            read your source files to generate its styles based only on 
            what is being used. This makes using Tailwind optimal because
            it doesn't bloat your CSS with unused styles.
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`

          `, false),
                  import_server.InkRegistry.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }", [
                    import_server.InkRegistry.createText(`
            At the same time, web components with the
            `, false),
                    import_server.InkRegistry.createElement("ide-code", { "inline": true }, "{ 'inline': true }", [
                      ...this._toNodeList(`<style>`)
                    ]),
                    import_server.InkRegistry.createText(` tag imply using the 
            component's shadow DOM which will encapsulate the styles within
            the component and not be affected by global styles. Since 
            Tailwind in turn implies that you do not need to (necessarily) 
            define styles, you do not need to use the shadow DOM at all if
            you are using Tailwind.
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`

          `, false),
                  import_server.InkRegistry.createElement("element-alert", { "solid": true, "curved": true, "warning": true, "class": `my-20 tx-lh-24` }, "{ 'solid': true, 'curved': true, 'warning': true, 'class': `my-20 tx-lh-24` }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("element-icon", { "name": `exclamation-triangle` }, "{ 'name': `exclamation-triangle` }"),
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("strong", {}, "{ }", [
                      import_server.InkRegistry.createText(`Warning:`, false)
                    ]),
                    import_server.InkRegistry.createText(`
            The caveat for using TailwindCSS, means that web components 
            using it will not be shippable to other projects that do not
            use Tailwind. It all comes down to preference in the end.
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`

          `, false),
                  import_server.InkRegistry.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }", [
                    import_server.InkRegistry.createText(`
            Ink has a separate package called
            `, false),
                    import_server.InkRegistry.createElement("ide-code", { "inline": true, "lang": `js` }, "{ 'inline': true, 'lang': `js` }", [
                      ...this._toNodeList(`@stackpress/ink-tailwind`)
                    ]),
                    import_server.InkRegistry.createText(`
            to use TailwindCSS with Ink. This is just another wrapper 
            class that listens to the compiler's build events. You can 
            install this plugin by running the following command in terminal.
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`

          `, false),
                  import_server.InkRegistry.createElement("ide-app", { "title": `Terminal`, "class": `py-20` }, "{ 'title': `Terminal`, 'class': `py-20` }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("ide-code", { "lang": `bash` }, "{ 'lang': `bash` }", [
                      import_server.InkRegistry.createText(`
              npm install --save-dev @stackpress/ink-tailwind autoprefixer postcss tailwindcss
            `, false)
                    ]),
                    import_server.InkRegistry.createText(`
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`

          `, false),
                  import_server.InkRegistry.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }", [
                    import_server.InkRegistry.createText(`
            Next, in `, false),
                    import_server.InkRegistry.createElement("ide-code", { "inline": true, "lang": `js` }, "{ 'inline': true, 'lang': `js` }", [
                      ...this._toNodeList(`src/index.ts`)
                    ]),
                    import_server.InkRegistry.createText(`
            import the `, false),
                    import_server.InkRegistry.createElement("ide-code", { "inline": true, "lang": `js` }, "{ 'inline': true, 'lang': `js` }", [
                      ...this._toNodeList(`tailwind()`)
                    ]),
                    import_server.InkRegistry.createText(`
            plugin from the package and use it in the compiler as shown
            in the example below.
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`

          `, false),
                  import_server.InkRegistry.createElement("ide-app", { "title": `src/index.ts`, "class": `py-20` }, "{ 'title': `src/index.ts`, 'class': `py-20` }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("ide-code", { "lang": `js`, "numbers": true, "trim": true, "detab": 14 }, "{ 'lang': `js`, 'numbers': true, 'trim': true, 'detab': 14 }", [
                      ...this._toNodeList(`
              // ...
              import { tailwind } from '@stackpress/ink-tailwind';
              // ...create ink compiler...
              // ...use cache...
              // 1. Use Tailwind
              compiler.use(tailwind({
                darkMode: 'class',
                theme: { extend: {} },
                plugins: [],
                content: []
              }));

              // ...create dev tools...
              // ...create http server...
              // ...listen on port 3000...
            `)
                    ]),
                    import_server.InkRegistry.createText(`
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`

          `, false),
                  import_server.InkRegistry.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }", [
                    import_server.InkRegistry.createText(`
            Lastly, in `, false),
                    import_server.InkRegistry.createElement("ide-code", { "inline": true, "lang": `js` }, "{ 'inline': true, 'lang': `js` }", [
                      ...this._toNodeList(`src/page.ink`)
                    ]),
                    import_server.InkRegistry.createText(`
            add the Tailwind directives inside the 
            `, false),
                    import_server.InkRegistry.createElement("ide-code", { "inline": true }, "{ 'inline': true }", [
                      ...this._toNodeList(`<style>`)
                    ]),
                    import_server.InkRegistry.createText(` tag like the code 
            below. Also add a tailwind class, (like 
            `, false),
                    import_server.InkRegistry.createElement("ide-code", { "inline": true, "lang": `js` }, "{ 'inline': true, 'lang': `js` }", [
                      ...this._toNodeList(`<style>`)
                    ]),
                    import_server.InkRegistry.createText(`) to the 
            markup to verify that the plugin is working and the styles 
            are being applied.
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`
          
          `, false),
                  import_server.InkRegistry.createElement("ide-app", { "title": `src/page.ink`, "class": `py-20` }, "{ 'title': `src/page.ink`, 'class': `py-20` }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("ide-code", { "numbers": true, "trim": true, "detab": 14 }, "{ 'numbers': true, 'trim': true, 'detab': 14 }", [
                      ...this._toNodeList(`
              <style>
                /* 2. Add tailwind directives */
                @tailwind base;
                @tailwind components;
                @tailwind utilities;

                /* ...Other styles... */
              </style>
              <script>
                //... 
              </script>
              <html>
                <head>
                  <!-- ... -->
                </head>
                <body>
                  <h1 class="text-center">{title}</h1>
                </body>
              </html>
            `)
                    ]),
                    import_server.InkRegistry.createText(`
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`

          `, false),
                  import_server.InkRegistry.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }", [
                    import_server.InkRegistry.createText(`
            Check to see if the project files look like the example below.
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`

          `, false),
                  import_server.InkRegistry.createElement("ide-app", { "height": 410, "title": `With TailwindCSS`, "class": `py-20` }, "{ 'height': 410, 'title': `With TailwindCSS`, 'class': `py-20` }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("app-head", {}, "{ }", [
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("div", { "class": `flex scroll-x-auto pt-5 pl-5` }, "{ 'class': `flex scroll-x-auto pt-5 pl-5` }", [
                        import_server.InkRegistry.createText(`
                `, false),
                        import_server.InkRegistry.createElement("element-tab", { "on": true, "class": `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, "active": `bg-black tx-white`, "inactive": `bg-t-1 tx-t-1`, "group": `tailwind`, "selector": `#tailwind-index-ts` }, "{ 'on': true, 'class': `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, 'active': `bg-black tx-white`, 'inactive': `bg-t-1 tx-t-1`, 'group': `tailwind`, 'selector': `#tailwind-index-ts` }", [
                          import_server.InkRegistry.createText(`
                  src/index.ts
                `, false)
                        ]),
                        import_server.InkRegistry.createText(`
                `, false),
                        import_server.InkRegistry.createElement("element-tab", { "class": `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, "active": `bg-black tx-white`, "inactive": `bg-t-1 tx-t-1`, "group": `tailwind`, "selector": `#tailwind-page-ink` }, "{ 'class': `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, 'active': `bg-black tx-white`, 'inactive': `bg-t-1 tx-t-1`, 'group': `tailwind`, 'selector': `#tailwind-page-ink` }", [
                          import_server.InkRegistry.createText(`
                  src/page.ink
                `, false)
                        ]),
                        import_server.InkRegistry.createText(`
                `, false),
                        import_server.InkRegistry.createElement("element-tab", { "class": `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, "active": `bg-black tx-white`, "inactive": `bg-t-1 tx-t-1`, "group": `tailwind`, "selector": `#tailwind-package-json` }, "{ 'class': `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, 'active': `bg-black tx-white`, 'inactive': `bg-t-1 tx-t-1`, 'group': `tailwind`, 'selector': `#tailwind-package-json` }", [
                          import_server.InkRegistry.createText(`
                  package.json
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
                    import_server.InkRegistry.createElement("app-left", {}, "{ }", [
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("h5", { "class": `p-5` }, "{ 'class': `p-5` }", [
                        import_server.InkRegistry.createText(`
                `, false),
                        import_server.InkRegistry.createElement("element-icon", { "name": `chevron-down` }, "{ 'name': `chevron-down` }"),
                        import_server.InkRegistry.createText(`
                `, false),
                        import_server.InkRegistry.createElement("span", {}, "{ }", [
                          import_server.InkRegistry.createText(`src`, false)
                        ]),
                        import_server.InkRegistry.createText(`
              `, false)
                      ]),
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("element-tab", { "on": true, "class": `pl-15 pt-10 block`, "active": `tx-white`, "inactive": `tx-t-1`, "group": `tailwind`, "selector": `#tailwind-index-ts` }, "{ 'on': true, 'class': `pl-15 pt-10 block`, 'active': `tx-white`, 'inactive': `tx-t-1`, 'group': `tailwind`, 'selector': `#tailwind-index-ts` }", [
                        import_server.InkRegistry.createText(`
                `, false),
                        import_server.InkRegistry.createElement("element-icon", { "name": `file` }, "{ 'name': `file` }"),
                        import_server.InkRegistry.createText(`
                index.ts
              `, false)
                      ]),
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("element-tab", { "class": `pl-15 pt-10 block`, "active": `tx-white`, "inactive": `tx-t-1`, "group": `tailwind`, "selector": `#tailwind-page-ink` }, "{ 'class': `pl-15 pt-10 block`, 'active': `tx-white`, 'inactive': `tx-t-1`, 'group': `tailwind`, 'selector': `#tailwind-page-ink` }", [
                        import_server.InkRegistry.createText(`
                `, false),
                        import_server.InkRegistry.createElement("element-icon", { "name": `file` }, "{ 'name': `file` }"),
                        import_server.InkRegistry.createText(`
                page.ink
              `, false)
                      ]),
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("element-tab", { "class": `pt-10 block`, "active": `tx-white`, "inactive": `tx-t-1`, "group": `tailwind`, "selector": `#tailwind-package-json` }, "{ 'class': `pt-10 block`, 'active': `tx-white`, 'inactive': `tx-t-1`, 'group': `tailwind`, 'selector': `#tailwind-package-json` }", [
                        import_server.InkRegistry.createText(`
                `, false),
                        import_server.InkRegistry.createElement("element-icon", { "name": `file` }, "{ 'name': `file` }"),
                        import_server.InkRegistry.createText(`
                package.json
              `, false)
                      ]),
                      import_server.InkRegistry.createText(`
            `, false)
                    ]),
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("app-main", {}, "{ }", [
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("ide-code", { "id": `tailwind-index-ts`, "lang": `js`, "numbers": true, "trim": true, "detab": 16 }, "{ 'id': `tailwind-index-ts`, 'lang': `js`, 'numbers': true, 'trim': true, 'detab': 16 }", [
                        ...this._toNodeList(`
                import path from 'path';
                import http from 'http';
                import ink, { cache } from '@stackpress/ink/compiler';
                import { dev } from '@stackpress/ink-dev';
                import { tailwind } from '@stackpress/ink-tailwind';

                const compiler = ink();
                compiler.use(cache({
                  buildPath: path.join(__dirname, '../build')
                }));
                // 1. use tailwind
                compiler.use(tailwind({
                  darkMode: 'class',
                  theme: { extend: {} },
                  plugins: [],
                  content: []
                }));
                
                const { router, refresh } = dev();
                const server = http.createServer(async (req, res) => {
                  if (router(req, res)) return;
                  if (req.url?.startsWith('/build/')) {
                    const filename = req.url.substring(7);
                    const { type, content } = await compiler.asset(filename);
                    res.writeHead(200, { 'Content-Type': type });
                    return res.end(content);
                  } else if (req.url === '/') {
                    refresh.sync(compiler.fromSource('./src/page.ink'));
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    return res.end(await compiler.render('./src/page.ink', {
                      title: 'Hello World'
                    }));
                  }
                });
                server.listen(3000);
              `)
                      ]),
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("ide-code", { "id": `tailwind-page-ink`, "style": `display:none`, "numbers": true, "trim": true, "detab": 16 }, "{ 'id': `tailwind-page-ink`, 'style': `display:none`, 'numbers': true, 'trim': true, 'detab': 16 }", [
                        ...this._toNodeList(`
                <style>
                  /* 2. Add tailwind directives */
                  @tailwind base;
                  @tailwind components;
                  @tailwind utilities;
                </style>
                <script>
                  import { env, props } from '@stackpress/ink';
                  const { BUILD_ID, APP_DATA } = env();
                  const { title } = props();
                </script>
                <html>
                  <head>
                    <title>{title}</title>
                    <link rel="stylesheet" type="text/css" href={\`/build/\${BUILD_ID}.css\`} />
                    <script data-app={APP_DATA} src={\`/build/\${BUILD_ID}.js\`}></script>
                    <script src="/dev.js"></script>
                  </head>
                  <body>
                    <h1 class="text-center">{title}</h1>
                  </body>
                </html>
              `)
                      ]),
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("ide-code", { "id": `tailwind-package-json`, "style": `display:none`, "lang": `js`, "numbers": true, "trim": true, "detab": 16 }, "{ 'id': `tailwind-package-json`, 'style': `display:none`, 'lang': `js`, 'numbers': true, 'trim': true, 'detab': 16 }", [
                        ...this._toNodeList(`
                {
                  "name": "my-project",
                  "version": "1.0.0",
                  "private": true,
                  "scripts": {
                    "dev": "ts-node ./src/index.ts"
                  },
                  "dependencies": {
                    "@stackpress/ink": "0.1.23"
                  },
                  "devDependencies": {
                    "@stackpress/ink-dev": "0.1.23",
                    "@stackpress/ink-tailwind": "0.1.23",
                    "@types/node": "22.1.0",
                    "autoprefixer": "10.4.20",
                    "postcss": "8.4.44",
                    "tailwindcss": "3.4.10",
                    "ts-node": "10.9.2",
                    "typescript": "5.5.4"
                  }
                }
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
                  import_server.InkRegistry.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }", [
                    import_server.InkRegistry.createText(`
            Re-run the following command in terminal to initialize the 
            tailwind plugin.
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`
          `, false),
                  import_server.InkRegistry.createElement("ide-app", { "title": `Terminal`, "class": `py-20` }, "{ 'title': `Terminal`, 'class': `py-20` }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("ide-code", { "lang": `bash` }, "{ 'lang': `bash` }", [
                      import_server.InkRegistry.createText(`
              npx ts-node src/index.ts
            `, false)
                    ]),
                    import_server.InkRegistry.createText(`
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`
          `, false),
                  import_server.InkRegistry.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }", [
                    import_server.InkRegistry.createText(`
            Load 
            `, false),
                    import_server.InkRegistry.createElement("ide-code", { "lang": `js`, "inline": true }, "{ 'lang': `js`, 'inline': true }", [
                      import_server.InkRegistry.createText(`http://localhost:3000/`, false)
                    ]),
                    import_server.InkRegistry.createText(` 
            in your browser. After loading you should see files that were 
            generated in a new build folder found in your project root. 
            Try to add a Tailwind class to the markup in
            `, false),
                    import_server.InkRegistry.createElement("ide-code", { "lang": `js`, "inline": true }, "{ 'lang': `js`, 'inline': true }", [
                      ...this._toNodeList(`src/page.ink`)
                    ]),
                    import_server.InkRegistry.createText(` and 
            save. The development server will automatically refresh 
            the styles and component styles will also be update in 
            real-time without the page reloading.
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`

          `, false),
                  import_server.InkRegistry.createElement("a", { "name": `express` }, "{ 'name': `express` }", []),
                  import_server.InkRegistry.createText(`
          `, false),
                  import_server.InkRegistry.createElement("h2", { "class": `tx-primary tx-uppercase tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }, "{ 'class': `tx-primary tx-uppercase tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    ...this._toNodeList(_("5. Add ExpressJS")),
                    import_server.InkRegistry.createText(`
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`

          `, false),
                  import_server.InkRegistry.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }", [
                    import_server.InkRegistry.createText(`
            Ink has a separate package called
            `, false),
                    import_server.InkRegistry.createElement("ide-code", { "inline": true, "lang": `js` }, "{ 'inline': true, 'lang': `js` }", [
                      ...this._toNodeList(`@stackpress/ink-express`)
                    ]),
                    import_server.InkRegistry.createText(`
            to use Express with Ink. You can install this plugin by 
            running the following command in terminal.
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`

          `, false),
                  import_server.InkRegistry.createElement("ide-app", { "title": `Terminal`, "class": `py-20` }, "{ 'title': `Terminal`, 'class': `py-20` }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("ide-code", { "lang": `bash` }, "{ 'lang': `bash` }", [
                      import_server.InkRegistry.createText(`
              npm install --save @stackpress/ink-express express && npm install --save-dev @types/express
            `, false)
                    ]),
                    import_server.InkRegistry.createText(`
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`

          `, false),
                  import_server.InkRegistry.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }", [
                    import_server.InkRegistry.createText(`
            The package 
            `, false),
                    import_server.InkRegistry.createElement("ide-code", { "inline": true, "lang": `js` }, "{ 'inline': true, 'lang': `js` }", [
                      ...this._toNodeList(`@stackpress/ink-express`)
                    ]),
                    import_server.InkRegistry.createText(`
            exports two plugins for express.
            `, false),
                    import_server.InkRegistry.createElement("ide-code", { "inline": true, "lang": `js` }, "{ 'inline': true, 'lang': `js` }", [
                      ...this._toNodeList(`view()`)
                    ]),
                    import_server.InkRegistry.createText(` is the view 
            engine for production (live) environments. It can be used with
            an express app like 
            `, false),
                    import_server.InkRegistry.createElement("ide-code", { "inline": true, "lang": `js` }, "{ 'inline': true, 'lang': `js` }", [
                      ...this._toNodeList(`app.use(view(compiler))`)
                    ]),
                    import_server.InkRegistry.createText(`.
            The other export, `, false),
                    import_server.InkRegistry.createElement("ide-code", { "inline": true, "lang": `js` }, "{ 'inline': true, 'lang': `js` }", [
                      ...this._toNodeList(`dev()`)
                    ]),
                    import_server.InkRegistry.createText(` 
            is the same export from the Developer Tools documentation above, 
            but returns several tools used to integrate with express.
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`

          `, false),
                  import_server.InkRegistry.createElement("api-ui", { "start": `Express Developer Tools` }, "{ 'start': `Express Developer Tools` }"),
                  import_server.InkRegistry.createText(`

          `, false),
                  import_server.InkRegistry.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }", [
                    import_server.InkRegistry.createText(`
            Example logic to use the all the Ink Express tools together
            with Ink developer tools could look like the following code
            that cases for 
            `, false),
                    import_server.InkRegistry.createElement("ide-code", { "inline": true, "lang": `js` }, "{ 'inline': true, 'lang': `js` }", [
                      ...this._toNodeList(`development`)
                    ]),
                    import_server.InkRegistry.createText(` and 
            `, false),
                    import_server.InkRegistry.createElement("ide-code", { "inline": true, "lang": `js` }, "{ 'inline': true, 'lang': `js` }", [
                      ...this._toNodeList(`production`)
                    ]),
                    import_server.InkRegistry.createText(` modes.
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`

          `, false),
                  import_server.InkRegistry.createElement("ide-code", { "numbers": true, "trim": true, "detab": 12, "lang": `js`, "class": `py-20` }, "{ 'numbers': true, 'trim': true, 'detab': 12, 'lang': `js`, 'class': `py-20` }", [
                    ...this._toNodeList(`
            import { view, dev } from '@stackpress/ink-express';

            //create ink compiler
            const compiler = ink({ cwd: __dirname, minify: false });
            //create express app
            const app = express();
            //set the view engine to ink
            app.set('views', path.join(__dirname, 'pages'));
            app.set('view engine', 'ink');

            //if production (live)
            if (process.env.NODE_ENV === 'production') {
              //let's use express' template engine feature
              app.engine('ink', view(compiler));
              //...other production settings...
            //if development mode
            } else {
              //get development middleware
              const { router, view } = dev({ cwd: __dirname });
              //use development middleware
              app.use(router);
              //let's use express' template engine feature
              app.engine('ink', view(compiler));
            }
          `)
                  ]),
                  import_server.InkRegistry.createText(`

          `, false),
                  import_server.InkRegistry.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }", [
                    import_server.InkRegistry.createText(`
            And you can now case for development mode in 
            `, false),
                    import_server.InkRegistry.createElement("ide-code", { "inline": true, "lang": `js` }, "{ 'inline': true, 'lang': `js` }", [
                      ...this._toNodeList(`src/page.ink`)
                    ]),
                    import_server.InkRegistry.createText(`
            like in the example below
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`

          `, false),
                  import_server.InkRegistry.createElement("ide-code", { "numbers": true, "trim": true, "detab": 12, "class": `py-20` }, "{ 'numbers': true, 'trim': true, 'detab': 12, 'class': `py-20` }", [
                    ...this._toNodeList(`
            <style>
              /* ... */
            </style>
            <script>
              import { env } from '@stackpress/ink';
              const { NODE_ENV } = env();
            </script>
            <html>
              <head>
                <!-- ... -->
                <if true={NODE_ENV !== 'production'}>
                  <script src="/dev.js"></script>
                </if>
              </head>
              <body>
                <!-- ... -->
              </body>
            </html>
          `)
                  ]),
                  import_server.InkRegistry.createText(`

          `, false),
                  import_server.InkRegistry.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }", [
                    import_server.InkRegistry.createText(`
            Check to see if the project files look like the example below.
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`

          `, false),
                  import_server.InkRegistry.createElement("ide-app", { "height": 410, "title": `With ExpressJS`, "class": `py-20` }, "{ 'height': 410, 'title': `With ExpressJS`, 'class': `py-20` }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("app-head", {}, "{ }", [
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("div", { "class": `flex scroll-x-auto pt-5 pl-5` }, "{ 'class': `flex scroll-x-auto pt-5 pl-5` }", [
                        import_server.InkRegistry.createText(`
                `, false),
                        import_server.InkRegistry.createElement("element-tab", { "on": true, "class": `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, "active": `bg-black tx-white`, "inactive": `bg-t-1 tx-t-1`, "group": `express`, "selector": `#express-index-ts` }, "{ 'on': true, 'class': `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, 'active': `bg-black tx-white`, 'inactive': `bg-t-1 tx-t-1`, 'group': `express`, 'selector': `#express-index-ts` }", [
                          import_server.InkRegistry.createText(`
                  src/index.ts
                `, false)
                        ]),
                        import_server.InkRegistry.createText(`
                `, false),
                        import_server.InkRegistry.createElement("element-tab", { "class": `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, "active": `bg-black tx-white`, "inactive": `bg-t-1 tx-t-1`, "group": `express`, "selector": `#express-page-ink` }, "{ 'class': `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, 'active': `bg-black tx-white`, 'inactive': `bg-t-1 tx-t-1`, 'group': `express`, 'selector': `#express-page-ink` }", [
                          import_server.InkRegistry.createText(`
                  src/page.ink
                `, false)
                        ]),
                        import_server.InkRegistry.createText(`
                `, false),
                        import_server.InkRegistry.createElement("element-tab", { "class": `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, "active": `bg-black tx-white`, "inactive": `bg-t-1 tx-t-1`, "group": `express`, "selector": `#express-package-json` }, "{ 'class': `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, 'active': `bg-black tx-white`, 'inactive': `bg-t-1 tx-t-1`, 'group': `express`, 'selector': `#express-package-json` }", [
                          import_server.InkRegistry.createText(`
                  package.json
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
                    import_server.InkRegistry.createElement("app-left", {}, "{ }", [
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("h5", { "class": `p-5` }, "{ 'class': `p-5` }", [
                        import_server.InkRegistry.createText(`
                `, false),
                        import_server.InkRegistry.createElement("element-icon", { "name": `chevron-down` }, "{ 'name': `chevron-down` }"),
                        import_server.InkRegistry.createText(`
                `, false),
                        import_server.InkRegistry.createElement("span", {}, "{ }", [
                          import_server.InkRegistry.createText(`src`, false)
                        ]),
                        import_server.InkRegistry.createText(`
              `, false)
                      ]),
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("element-tab", { "on": true, "class": `pl-15 pt-10 block`, "active": `tx-white`, "inactive": `tx-t-1`, "group": `express`, "selector": `#express-index-ts` }, "{ 'on': true, 'class': `pl-15 pt-10 block`, 'active': `tx-white`, 'inactive': `tx-t-1`, 'group': `express`, 'selector': `#express-index-ts` }", [
                        import_server.InkRegistry.createText(`
                `, false),
                        import_server.InkRegistry.createElement("element-icon", { "name": `file` }, "{ 'name': `file` }"),
                        import_server.InkRegistry.createText(`
                index.ts
              `, false)
                      ]),
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("element-tab", { "class": `pl-15 pt-10 block`, "active": `tx-white`, "inactive": `tx-t-1`, "group": `express`, "selector": `#express-page-ink` }, "{ 'class': `pl-15 pt-10 block`, 'active': `tx-white`, 'inactive': `tx-t-1`, 'group': `express`, 'selector': `#express-page-ink` }", [
                        import_server.InkRegistry.createText(`
                `, false),
                        import_server.InkRegistry.createElement("element-icon", { "name": `file` }, "{ 'name': `file` }"),
                        import_server.InkRegistry.createText(`
                page.ink
              `, false)
                      ]),
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("element-tab", { "class": `pt-10 block`, "active": `tx-white`, "inactive": `tx-t-1`, "group": `express`, "selector": `#express-package-json` }, "{ 'class': `pt-10 block`, 'active': `tx-white`, 'inactive': `tx-t-1`, 'group': `express`, 'selector': `#express-package-json` }", [
                        import_server.InkRegistry.createText(`
                `, false),
                        import_server.InkRegistry.createElement("element-icon", { "name": `file` }, "{ 'name': `file` }"),
                        import_server.InkRegistry.createText(`
                package.json
              `, false)
                      ]),
                      import_server.InkRegistry.createText(`
            `, false)
                    ]),
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("app-main", {}, "{ }", [
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("ide-code", { "id": `express-index-ts`, "lang": `js`, "numbers": true, "trim": true, "detab": 16 }, "{ 'id': `express-index-ts`, 'lang': `js`, 'numbers': true, 'trim': true, 'detab': 16 }", [
                        ...this._toNodeList(`
                import path from 'path';
                import express from 'express';
                import ink, { cache } from '@stackpress/ink/compiler';
                import { view, dev } from '@stackpress/ink-express';
                import { tailwind } from '@stackpress/ink-tailwind';

                //create ink compiler
                const compiler = ink();
                //use tailwind
                compiler.use(tailwind({
                  darkMode: 'class',
                  theme: { extend: {} },
                  plugins: [],
                  content: []
                }));
                //use build cache
                compiler.use(cache({ 
                  environment: process.env.NODE_ENV,
                  buildPath: path.join(__dirname, '../build')
                }));

                //create express app
                const app = express();
                //set the view engine to ink
                app.set('views', __dirname);
                app.set('view engine', 'ink');

                //if production (live)
                if (process.env.NODE_ENV === 'production') {
                  //let's use express' template engine feature
                  app.engine('ink', view(compiler));
                  //...other production settings...
                //if development mode
                } else {
                  //get development middleware
                  const { router, view } = dev({ cwd: __dirname });
                  //use development middleware
                  app.use(router);
                  //let's use express' template engine feature
                  app.engine('ink', view(compiler));
                }

                //routes
                app.get('/build/:build', async (req, res) => {
                  //get filename ie. abc123.js
                  const filename = req.params.build;
                  //get asset
                  const { type, content } = await compiler.asset(filename);
                  //send response
                  res.type(type).send(content);
                });

                app.get('/', (req, res) => {
                  //now use the ink template engine
                  res.render('page', { title: 'Hello World' });
                  res.type('text/html');
                });

                //listen
                app.listen(3000, () => {
                  console.log('HTTP server is running on http://localhost:3000');
                });
              `)
                      ]),
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("ide-code", { "id": `express-page-ink`, "style": `display:none`, "numbers": true, "trim": true, "detab": 16 }, "{ 'id': `express-page-ink`, 'style': `display:none`, 'numbers': true, 'trim': true, 'detab': 16 }", [
                        ...this._toNodeList(`
                <style>
                  @tailwind base;
                  @tailwind components;
                  @tailwind utilities;
                </style>
                <script>
                  import { env, props } from '@stackpress/ink';
                  const { BUILD_ID, APP_DATA, NODE_ENV } = env();
                  const { title } = props();
                </script>
                <html>
                  <head>
                    <title>{title}</title>
                    <link rel="stylesheet" type="text/css" href={\`/build/\${BUILD_ID}.css\`} />
                    <script data-app={APP_DATA} src={\`/build/\${BUILD_ID}.js\`}></script>
                    <if true={NODE_ENV !== 'production'}>
                      <script src="/dev.js"></script>
                    </if>
                  </head>
                  <body>
                    <h1 class="text-center">{title}</h1>
                  </body>
                </html>
              `)
                      ]),
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("ide-code", { "id": `express-package-json`, "style": `display:none`, "lang": `js`, "numbers": true, "trim": true, "detab": 16 }, "{ 'id': `express-package-json`, 'style': `display:none`, 'lang': `js`, 'numbers': true, 'trim': true, 'detab': 16 }", [
                        ...this._toNodeList(`
                {
                  "name": "my-project",
                  "version": "1.0.0",
                  "private": true,
                  "scripts": {
                    "dev": "ts-node ./src/index.ts"
                  },
                  "dependencies": {
                    "@stackpress/ink": "^0.1.8",
                    "@stackpress/ink-express": "^0.1.8",
                    "express": "^4.19.2"
                  },
                  "devDependencies": {
                    "@stackpress/ink-dev": "^0.1.8",
                    "@stackpress/ink-tailwind": "^0.1.8",
                    "@types/express": "^4.17.21",
                    "@types/node": "^22.5.3",
                    "autoprefixer": "^10.4.20",
                    "postcss": "^8.4.45",
                    "tailwindcss": "^3.4.10",
                    "ts-node": "^10.9.2",
                    "typescript": "^5.5.4"
                  }
                }
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
                  import_server.InkRegistry.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }", [
                    import_server.InkRegistry.createText(`
            Re-run the following command in terminal to initialize the 
            re-run your application using Express.
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`
          `, false),
                  import_server.InkRegistry.createElement("ide-app", { "title": `Terminal`, "class": `py-20` }, "{ 'title': `Terminal`, 'class': `py-20` }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("ide-code", { "lang": `bash` }, "{ 'lang': `bash` }", [
                      import_server.InkRegistry.createText(`
              npx ts-node src/index.ts
            `, false)
                    ]),
                    import_server.InkRegistry.createText(`
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`
          `, false),
                  import_server.InkRegistry.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }", [
                    import_server.InkRegistry.createText(`
            Load 
            `, false),
                    import_server.InkRegistry.createElement("ide-code", { "lang": `js`, "inline": true }, "{ 'lang': `js`, 'inline': true }", [
                      import_server.InkRegistry.createText(`http://localhost:3000/`, false)
                    ]),
                    import_server.InkRegistry.createText(` 
            in your browser. After loading you should see everything is 
            exactly as it was, but you now benefit from using ExpressJS.
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`

          `, false),
                  import_server.InkRegistry.createElement("h3", { "class": `tx-t-1 tx-uppercase tx-22 pt-40 pb-20` }, "{ 'class': `tx-t-1 tx-uppercase tx-22 pt-40 pb-20` }", [
                    import_server.InkRegistry.createText(`
            -- `, false),
                    ...this._toNodeList(_("Read On")),
                    import_server.InkRegistry.createText(` --
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`

          `, false),
                  import_server.InkRegistry.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-20` }, "{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }", [
                    import_server.InkRegistry.createText(`
            To see other getting started examples with various frameworks,
            you can check out the following project examples in the 
            official repository.
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`
          `, false),
                  import_server.InkRegistry.createElement("ul", {}, "{ }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("li", { "class": `py-5` }, "{ 'class': `py-5` }", [
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("a", { "class": `tx-t-1 tx-underline`, "target": `_blank`, "href": `${examples}/with-fastify` }, "{ 'class': `tx-t-1 tx-underline`, 'target': `_blank`, 'href': `${examples}/with-fastify` }", [
                        import_server.InkRegistry.createText(`
                Fastify
              `, false)
                      ]),
                      import_server.InkRegistry.createText(`
            `, false)
                    ]),
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("li", { "class": `py-5` }, "{ 'class': `py-5` }", [
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("a", { "class": `tx-t-1 tx-underline`, "target": `_blank`, "href": `${examples}/with-hapi` }, "{ 'class': `tx-t-1 tx-underline`, 'target': `_blank`, 'href': `${examples}/with-hapi` }", [
                        import_server.InkRegistry.createText(`
                Hapi
              `, false)
                      ]),
                      import_server.InkRegistry.createText(`
            `, false)
                    ]),
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("li", { "class": `py-5` }, "{ 'class': `py-5` }", [
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("a", { "class": `tx-t-1 tx-underline`, "target": `_blank`, "href": `${examples}/with-koa` }, "{ 'class': `tx-t-1 tx-underline`, 'target': `_blank`, 'href': `${examples}/with-koa` }", [
                        import_server.InkRegistry.createText(`
                Koa
              `, false)
                      ]),
                      import_server.InkRegistry.createText(`
            `, false)
                    ]),
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("li", { "class": `py-5` }, "{ 'class': `py-5` }", [
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("a", { "class": `tx-t-1 tx-underline`, "target": `_blank`, "href": `${examples}/with-nest` }, "{ 'class': `tx-t-1 tx-underline`, 'target': `_blank`, 'href': `${examples}/with-nest` }", [
                        import_server.InkRegistry.createText(`
                NestJS
              `, false)
                      ]),
                      import_server.InkRegistry.createText(`
            `, false)
                    ]),
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("li", { "class": `py-5` }, "{ 'class': `py-5` }", [
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("a", { "class": `tx-t-1 tx-underline`, "target": `_blank`, "href": `${examples}/with-restify` }, "{ 'class': `tx-t-1 tx-underline`, 'target': `_blank`, 'href': `${examples}/with-restify` }", [
                        import_server.InkRegistry.createText(`
                Restify
              `, false)
                      ]),
                      import_server.InkRegistry.createText(`
            `, false)
                    ]),
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("li", { "class": `py-5` }, "{ 'class': `py-5` }", [
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("a", { "class": `tx-t-1 tx-underline`, "target": `_blank`, "href": `${examples}/with-webpack` }, "{ 'class': `tx-t-1 tx-underline`, 'target': `_blank`, 'href': `${examples}/with-webpack` }", [
                        import_server.InkRegistry.createText(`
                Webpack
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
                  import_server.InkRegistry.createElement("i18n-translate", { "p": true, "trim": true, "class": `tx-lh-36 py-10` }, "{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-10` }", [
                    import_server.InkRegistry.createText(`
            Depending on how you plan to use Ink, you can also look at 
            the following project setups.
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`
          `, false),
                  import_server.InkRegistry.createElement("ul", {}, "{ }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("li", { "class": `py-5` }, "{ 'class': `py-5` }", [
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("a", { "class": `tx-t-1 tx-underline`, "href": `/ink/docs/template-engine.html` }, "{ 'class': `tx-t-1 tx-underline`, 'href': `/ink/docs/template-engine.html` }", [
                        import_server.InkRegistry.createText(`
                Template Engine
              `, false)
                      ]),
                      import_server.InkRegistry.createText(`
            `, false)
                    ]),
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("li", { "class": `py-5` }, "{ 'class': `py-5` }", [
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("a", { "class": `tx-t-1 tx-underline`, "href": `/ink/docs/single-page.html` }, "{ 'class': `tx-t-1 tx-underline`, 'href': `/ink/docs/single-page.html` }", [
                        import_server.InkRegistry.createText(`
                Single Page App
              `, false)
                      ]),
                      import_server.InkRegistry.createText(`
            `, false)
                    ]),
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("li", { "class": `py-5` }, "{ 'class': `py-5` }", [
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("a", { "class": `tx-t-1 tx-underline`, "href": `/ink/docs/static-site.html` }, "{ 'class': `tx-t-1 tx-underline`, 'href': `/ink/docs/static-site.html` }", [
                        import_server.InkRegistry.createText(`
                Static Site Generator
              `, false)
                      ]),
                      import_server.InkRegistry.createText(`
            `, false)
                    ]),
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("li", { "class": `py-5` }, "{ 'class': `py-5` }", [
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("a", { "class": `tx-t-1 tx-underline`, "href": `/ink/docs/component-publisher.html` }, "{ 'class': `tx-t-1 tx-underline`, 'href': `/ink/docs/component-publisher.html` }", [
                        import_server.InkRegistry.createText(`
                Web Component Publisher
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
                  import_server.InkRegistry.createElement("nav", { "class": `flex` }, "{ 'class': `flex` }", [
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("a", { "class": `tx-primary py-40`, "href": `/ink/docs/index.html` }, "{ 'class': `tx-primary py-40`, 'href': `/ink/docs/index.html` }", [
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("element-icon", { "name": `chevron-left`, "theme": `tx-1` }, "{ 'name': `chevron-left`, 'theme': `tx-1` }"),
                      import_server.InkRegistry.createText(`
              `, false),
                      ...this._toNodeList(_("Documentation")),
                      import_server.InkRegistry.createText(`
            `, false)
                    ]),
                    import_server.InkRegistry.createText(`
            `, false),
                    import_server.InkRegistry.createElement("a", { "class": `flex-grow tx-right tx-primary py-40`, "href": `/ink/docs/markup-syntax.html` }, "{ 'class': `flex-grow tx-right tx-primary py-40`, 'href': `/ink/docs/markup-syntax.html` }", [
                      import_server.InkRegistry.createText(`
              `, false),
                      ...this._toNodeList(_("Markup Syntax")),
                      import_server.InkRegistry.createText(`
              `, false),
                      import_server.InkRegistry.createElement("element-icon", { "name": `chevron-right`, "theme": `tx-1` }, "{ 'name': `chevron-right`, 'theme': `tx-1` }"),
                      import_server.InkRegistry.createText(`
            `, false)
                    ]),
                    import_server.InkRegistry.createText(`
          `, false)
                  ]),
                  import_server.InkRegistry.createText(`
          `, false),
                  import_server.InkRegistry.createElement("footer", { "class": `foot` }, "{ 'class': `foot` }", []),
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
  return __toCommonJS(getting_started_exports);
})();

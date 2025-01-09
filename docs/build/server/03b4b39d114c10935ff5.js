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

  // ../../node_modules/@stackpress/ink/dist/dom/Node.js
  var require_Node = __commonJS({
    "../../node_modules/@stackpress/ink/dist/dom/Node.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var Node = class {
        constructor() {
          this._parent = null;
        }
        get parent() {
          return this._parent;
        }
        get parentElement() {
          return this._parent;
        }
        set parent(parent) {
          this._parent = parent;
        }
      };
      exports.default = Node;
    }
  });

  // ../../node_modules/@stackpress/ink/dist/dom/Comment.js
  var require_Comment = __commonJS({
    "../../node_modules/@stackpress/ink/dist/dom/Comment.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var Node_1 = __importDefault(require_Node());
      var Comment = class extends Node_1.default {
        get nodeName() {
          return this.name;
        }
        get nodeType() {
          return this.type;
        }
        constructor(value) {
          super();
          this.name = "#comment";
          this.type = 8;
          this.value = value;
        }
        export() {
          return {
            type: this.type,
            name: this.name,
            value: this.value
          };
        }
        toString() {
          return `<!--${this.value}-->`;
        }
      };
      exports.default = Comment;
    }
  });

  // ../../node_modules/@stackpress/ink/dist/dom/Doctype.js
  var require_Doctype = __commonJS({
    "../../node_modules/@stackpress/ink/dist/dom/Doctype.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var Node_1 = __importDefault(require_Node());
      var Doctype = class extends Node_1.default {
        get nodeName() {
          return this.name;
        }
        get nodeType() {
          return this.type;
        }
        constructor(value) {
          super();
          this.name = "#doctype";
          this.type = 10;
          this.value = value;
        }
        export() {
          return {
            type: this.type,
            name: this.name,
            value: this.value
          };
        }
        toString() {
          return `<!DOCTYPE ${this.value}>`;
        }
      };
      exports.default = Doctype;
    }
  });

  // ../../node_modules/@stackpress/ink/dist/dom/Element.js
  var require_Element = __commonJS({
    "../../node_modules/@stackpress/ink/dist/dom/Element.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var Node_1 = __importDefault(require_Node());
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
      var Element = class _Element extends Node_1.default {
        get attributes() {
          return Object.fromEntries(this._attributes);
        }
        get childList() {
          return Array.from(this.children);
        }
        get elements() {
          return this.nodes.filter((node) => node instanceof _Element);
        }
        get nodeName() {
          return this.name.toUpperCase();
        }
        get nodes() {
          const nodes = [this];
          this._flatten(Array.from(this.children), nodes);
          return nodes;
        }
        get nodeType() {
          return this.type;
        }
        get parent() {
          return this._parent;
        }
        set parent(parent) {
          this._parent = parent;
        }
        constructor(name, attributes = {}, children = []) {
          super();
          this.type = 1;
          this._parent = null;
          this.name = name;
          this._attributes = new Map(Object.entries(attributes));
          this.children = new Set(children);
        }
        appendChild(child) {
          this.children.add(child);
          child.parent = this;
          return this;
        }
        export() {
          return {
            type: this.type,
            name: this.name,
            attributes: Object.fromEntries(this._attributes.entries()),
            children: Array.from(this.children).map((child) => child.export())
          };
        }
        getAttribute(name) {
          return this._attributes.get(name);
        }
        hasAttribute(name) {
          return this._attributes.has(name);
        }
        removeAttribute(name) {
          this._attributes.delete(name);
          return this;
        }
        removeChild(child) {
          this.children.delete(child);
          child.parent = null;
          return;
        }
        setAttribute(name, value) {
          this._attributes.set(name, value);
          return this;
        }
        toString() {
          const entries = Array.from(this._attributes.entries());
          const attributes = entries.length > 0 ? " " + entries.map(([key, value]) => {
            if (typeof value === "string" && !/["<>\n]/.test(value)) {
              return `${key}="${value}"`;
            } else if (typeof value === "boolean") {
              return value ? key : "";
            }
          }).join(" ") : "";
          if (selfClosingTags.includes(this.name)) {
            return `<${this.name}${attributes} />`;
          }
          const children = Array.from(this.children.values()).map((child) => {
            console.log("child", child);
            return child.toString();
          }).join("");
          return `<${this.name}${attributes}>${children}</${this.name}>`;
        }
        _flatten(markup, nodes) {
          markup.forEach((node) => {
            nodes.push(node);
            if (node instanceof _Element) {
              this._flatten(Array.from(node.children), nodes);
            }
          });
        }
      };
      exports.default = Element;
    }
  });

  // ../../node_modules/@stackpress/ink/dist/dom/Text.js
  var require_Text = __commonJS({
    "../../node_modules/@stackpress/ink/dist/dom/Text.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var Node_1 = __importDefault(require_Node());
      var Text = class extends Node_1.default {
        get nodeName() {
          return "#text";
        }
        get nodeType() {
          return this.type;
        }
        get value() {
          return this._escape ? this._value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") : this._value;
        }
        constructor(value, escape = false) {
          super();
          this.name = "#text";
          this.type = 3;
          this._escape = escape;
          this._value = value;
        }
        export() {
          return {
            type: this.type,
            name: this.name,
            value: this.value
          };
        }
        toString() {
          return this.value;
        }
      };
      exports.default = Text;
    }
  });

  // ../../node_modules/@stackpress/ink/dist/dom/Document.js
  var require_Document = __commonJS({
    "../../node_modules/@stackpress/ink/dist/dom/Document.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var Comment_1 = __importDefault(require_Comment());
      var Doctype_1 = __importDefault(require_Doctype());
      var Element_1 = __importDefault(require_Element());
      var Text_1 = __importDefault(require_Text());
      var Document = class _Document {
        static createComment(value, parent) {
          const node = new Comment_1.default(value);
          if (parent) {
            node.parent = parent;
          }
          return node;
        }
        static createDoctype(value = "html", parent) {
          const node = new Doctype_1.default(value);
          if (parent) {
            node.parent = parent;
          }
          return node;
        }
        static createElement(name, attributes = {}, children = [], parent) {
          const element = new Element_1.default(name, attributes, children);
          if (parent) {
            element.parent = parent;
          }
          return element;
        }
        static createText(value, escape = false, parent) {
          const node = new Text_1.default(value, escape);
          if (parent) {
            node.parent = parent;
          }
          return node;
        }
        static import(data, parent) {
          return data.map((node) => {
            const { value } = node;
            const { name, attributes, children } = node;
            switch (node.type) {
              case 1:
                const element = this.createElement(name, attributes, [], parent);
                _Document.import(children, element).forEach((child) => element.appendChild(child));
                return element;
              case 3:
                return this.createText(value, true, parent);
              case 8:
                return this.createComment(value, parent);
              case 10:
                return this.createDoctype(value, parent);
            }
            return null;
          }).filter(Boolean);
        }
        static load(children) {
          return new _Document(children);
        }
        get childList() {
          return Array.from(this.children);
        }
        get elements() {
          return this.nodes.filter((node) => node instanceof Element_1.default);
        }
        get nodes() {
          return Array.from(this.children).map((child) => child instanceof Element_1.default ? child.nodes : [child]).flat();
        }
        constructor(children) {
          this.children = new Set(children);
        }
        export() {
          return this.childList.map((child) => child.export());
        }
        toString() {
          return Array.from(this.children).map((child) => child.toString()).join("");
        }
      };
      exports.default = Document;
    }
  });

  // ../../node_modules/@stackpress/types/dist/Status.js
  var require_Status = __commonJS({
    "../../node_modules/@stackpress/types/dist/Status.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getStatus = getStatus;
      var statuses = {
        CONTINUE: { code: 100, status: "Continue" },
        PROCESSING: { code: 102, status: "Processing" },
        OK: { code: 200, status: "OK" },
        CREATED: { code: 201, status: "Created" },
        ACCEPTED: { code: 202, status: "Accepted" },
        EMPTY: { code: 204, status: "No Content" },
        RESET: { code: 205, status: "Reset Content" },
        PARTIAL: { code: 206, status: "Partial Content" },
        MOVED: { code: 301, status: "Moved Permanently" },
        FOUND: { code: 302, status: "Found" },
        REDIRECT: { code: 303, status: "See Other" },
        CACHE: { code: 304, status: "Not Modified" },
        TEMPORARY: { code: 307, status: "Temporary Redirect" },
        PERMANENT: { code: 308, status: "Permanent Redirect" },
        ABORT: { code: 309, status: "Aborted" },
        BAD_REQUEST: { code: 400, status: "Bad Request" },
        UNAUTHORIZED: { code: 401, status: "Unauthorized" },
        FORBIDDEN: { code: 403, status: "Forbidden" },
        NOT_FOUND: { code: 404, status: "Not Found" },
        BAD_METHOD: { code: 405, status: "Method Not Allowed" },
        NOT_ACCEPTABLE: { code: 406, status: "Not Acceptable" },
        REQUEST_TIMEOUT: { code: 408, status: "Request Timeout" },
        CONFLICT: { code: 409, status: "Conflict" },
        GONE: { code: 410, status: "Gone" },
        LENGTH_REQUIRED: { code: 411, status: "Length Required" },
        TOO_LARGE: { code: 413, status: "Payload Too Large" },
        TOO_LONG: { code: 414, status: "URI Too Long" },
        UNSUPPORTED_TYPE: { code: 415, status: "Unsupported Media Type" },
        BAD_RANGE: { code: 416, status: "Range Not Satisfiable" },
        BAD_EXPECTATION: { code: 417, status: "Expectation Failed" },
        MISDIRECTED: { code: 421, status: "Misdirected Request" },
        UNPROCESSABLE: { code: 422, status: "Unprocessable Content" },
        LOCKED: { code: 423, status: "Locked" },
        BAD_DEPENDENCY: { code: 424, status: "Failed Dependency" },
        UPGRADE_REQUIRED: { code: 426, status: "Upgrade Required" },
        BAD_PRECONDITION: { code: 428, status: "Precondition Required" },
        TOO_MANY: { code: 429, status: "Too Many Requests" },
        HEADER_TOO_LARGE: { code: 431, status: "Request Header Fields Too Large" },
        LEGAL_REASONS: { code: 451, status: "Unavailable For Legal Reasons" },
        ERROR: { code: 500, status: "Internal Server Error" },
        NOT_IMPLEMENTED: { code: 501, status: "Not Implemented" },
        BAD_GATEWAY: { code: 502, status: "Bad Gateway" },
        UNAVAILABLE: { code: 503, status: "Service Unavailable" },
        RESPONSE_TIMEOUT: { code: 504, status: "Gateway Timeout" },
        BAD_VERSION: { code: 505, status: "HTTP Version Not Supported" },
        INSUFFICIENT_STORAGE: { code: 507, status: "Insufficient Storage" },
        INFINITE_LOOP: { code: 508, status: "Loop Detected" },
        NETWORK_AUTHENTICATION_REQUIRED: { code: 511, status: "Network Authentication Required" }
      };
      exports.default = statuses;
      function getStatus(code) {
        return Object.values(statuses).find((status) => status.code === code);
      }
    }
  });

  // ../../node_modules/@stackpress/types/dist/Exception.js
  var require_Exception = __commonJS({
    "../../node_modules/@stackpress/types/dist/Exception.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var Status_1 = require_Status();
      var Exception = class _Exception extends Error {
        static for(message, ...values) {
          values.forEach(function(value) {
            message = message.replace("%s", String(value));
          });
          return new this(message);
        }
        static forErrors(errors) {
          const exception = new this("Invalid Parameters");
          exception.withErrors(errors);
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
        static try(callback) {
          return {
            catch: (catcher) => {
              try {
                return callback();
              } catch (error) {
                if (error instanceof _Exception) {
                  return catcher(error, error.type);
                } else if (error instanceof Error) {
                  const e = _Exception.upgrade(error);
                  return catcher(e, e.type);
                } else if (typeof error === "string") {
                  const e = _Exception.for(error);
                  return catcher(e, e.type);
                }
                return catcher(error, "unknown");
              }
            }
          };
        }
        static upgrade(error, code = 500) {
          if (error instanceof _Exception) {
            return error;
          }
          const exception = new this(error.message, code);
          exception.name = error.name;
          exception.stack = error.stack;
          return exception;
        }
        get code() {
          return this._code;
        }
        get end() {
          return this._end;
        }
        get errors() {
          return Object.assign({}, this._errors);
        }
        get start() {
          return this._start;
        }
        get type() {
          return this._type;
        }
        constructor(message, code = 500) {
          var _a;
          super(message);
          this._errors = {};
          this._start = 0;
          this._end = 0;
          this.name = this.constructor.name;
          this._type = this.constructor.name;
          this._code = code;
          this._status = ((_a = (0, Status_1.getStatus)(code)) === null || _a === void 0 ? void 0 : _a.status) || "Unknown";
        }
        toJSON() {
          return JSON.stringify(this.toResponse(), null, 2);
        }
        toResponse(start = 0, end = 0) {
          const json = {
            code: this._code,
            status: this._status,
            error: this.message,
            start: this._start,
            end: this._end,
            stack: this.trace(start, end)
          };
          if (Object.keys(this._errors).length > 0) {
            json.errors = this._errors;
          }
          return json;
        }
        trace(start = 0, end = 0) {
          if (typeof this.stack !== "string") {
            return [];
          }
          const trace = this.stack.split("\n").slice(start, end || this.stack.length).map((line) => line.trim()).map((trace2) => {
            if (!trace2.startsWith("at")) {
              return false;
            }
            let [_2, method, location] = trace2.split(" ");
            if (!location) {
              location = `(${method})`;
              method = "<none>";
            }
            const [file, line, char] = location.substring(1, location.length - 1).split(":");
            return {
              method,
              file,
              line: parseInt(line) || 0,
              char: parseInt(char) || 0
            };
          }).filter(Boolean);
          return trace;
        }
        withCode(code) {
          this._code = code;
          return this;
        }
        withErrors(errors) {
          this._errors = errors;
          return this;
        }
        withPosition(start, end) {
          this._start = start;
          this._end = end;
          return this;
        }
      };
      exports.default = Exception;
    }
  });

  // ../../node_modules/@stackpress/ink/dist/Exception.js
  var require_Exception2 = __commonJS({
    "../../node_modules/@stackpress/ink/dist/Exception.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var Exception_1 = __importDefault(require_Exception());
      var InkException = class extends Exception_1.default {
      };
      exports.default = InkException;
    }
  });

  // ../../node_modules/@stackpress/ink/dist/server/data.js
  var require_data = __commonJS({
    "../../node_modules/@stackpress/ink/dist/server/data.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var data = /* @__PURE__ */ new Map();
      exports.default = data;
    }
  });

  // ../../node_modules/@stackpress/ink/dist/server/InkDocument.js
  var require_InkDocument = __commonJS({
    "../../node_modules/@stackpress/ink/dist/server/InkDocument.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var Exception_1 = __importDefault(require_Exception2());
      var Document_1 = __importDefault(require_Document());
      var data_1 = __importDefault(require_data());
      var InkDocument2 = class {
        render(props2 = {}) {
          data_1.default.set("props", props2 || {});
          const env2 = process.env || {};
          data_1.default.set("env", Object.assign(Object.assign({}, env2), { BUILD_ID: this.id() }));
          const client = JSON.stringify(Object.assign(Object.assign({}, Object.fromEntries(data_1.default.entries())), { env: Object.assign(Object.assign({}, Object.fromEntries(Object.entries(env2).filter((entry) => entry[0].startsWith("PUBLIC_")))), { BUILD_ID: this.id() }) }));
          const children = this.template();
          const document = Document_1.default.load(children).toString().trim();
          if (!document.toLowerCase().startsWith("<html")) {
            throw Exception_1.default.for("Document must start with an <html> tag.");
          }
          return `<!DOCTYPE html>
${document.replace("__TEMPLATE_DATA__", client)}`;
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
          return [Document_1.default.createText(String(value))];
        }
      };
      exports.default = InkDocument2;
    }
  });

  // ../../node_modules/@stackpress/ink/dist/server/InkEmitter.js
  var require_InkEmitter = __commonJS({
    "../../node_modules/@stackpress/ink/dist/server/InkEmitter.js"(exports) {
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

  // ../../node_modules/@stackpress/ink/dist/server/env.js
  var require_env = __commonJS({
    "../../node_modules/@stackpress/ink/dist/server/env.js"(exports) {
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

  // ../../node_modules/@stackpress/ink/dist/server/props.js
  var require_props = __commonJS({
    "../../node_modules/@stackpress/ink/dist/server/props.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.default = props2;
      var data_1 = __importDefault(require_data());
      function props2() {
        return data_1.default.get("props") || {};
      }
    }
  });

  // ../../node_modules/@stackpress/ink/dist/server.js
  var require_server = __commonJS({
    "../../node_modules/@stackpress/ink/dist/server.js"(exports) {
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
      var __importStar = exports && exports.__importStar || /* @__PURE__ */ function() {
        var ownKeys = function(o) {
          ownKeys = Object.getOwnPropertyNames || function(o2) {
            var ar = [];
            for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
            return ar;
          };
          return ownKeys(o);
        };
        return function(mod) {
          if (mod && mod.__esModule) return mod;
          var result = {};
          if (mod != null) {
            for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
          }
          __setModuleDefault(result, mod);
          return result;
        };
      }();
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.InkException = exports.InkEmitter = exports.InkDocument = exports.props = exports.emitter = exports.env = exports.data = void 0;
      var InkDocument_1 = __importDefault(require_InkDocument());
      exports.InkDocument = InkDocument_1.default;
      var InkEmitter_1 = __importStar(require_InkEmitter());
      exports.emitter = InkEmitter_1.default;
      Object.defineProperty(exports, "InkEmitter", { enumerable: true, get: function() {
        return InkEmitter_1.InkEmitter;
      } });
      var data_1 = __importDefault(require_data());
      exports.data = data_1.default;
      var env_1 = __importDefault(require_env());
      exports.env = env_1.default;
      var props_1 = __importDefault(require_props());
      exports.props = props_1.default;
      var Exception_1 = __importDefault(require_Exception2());
      exports.InkException = Exception_1.default;
    }
  });

  // ../../node_modules/@stackpress/ink/server.js
  var require_server2 = __commonJS({
    "../../node_modules/@stackpress/ink/server.js"(exports, module) {
      module.exports = { ...require_server() };
    }
  });

  // ink-document-server-resolver:/Users/cblanquera/server/projects/stackpress/ink/packages/ink-web/src/pages/500.ink
  var __exports = {};
  __export(__exports, {
    default: () => N500_03b4b39d114c10935ff5
  });
  var import_Document = __toESM(require_Document());
  var import_InkDocument = __toESM(require_InkDocument());
  var import_server = __toESM(require_server2());

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

  // ink-document-server-resolver:/Users/cblanquera/server/projects/stackpress/ink/packages/ink-web/src/pages/500.ink
  var N500_03b4b39d114c10935ff5 = class extends import_InkDocument.default {
    id() {
      return "03b4b39d114c10935ff5";
    }
    styles() {
      return `@ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;`;
    }
    template() {
      const url = "/ink/500.html";
      const title = _("Oops... - Ink - The reactive web component template engine.");
      const description = _("Ink is a template engine hat generates web components and support reactivity.");
      const { code, status, stack = [] } = (0, import_server.props)("document");
      if (Array.isArray(stack)) {
        stack.forEach((trace) => {
          const { source, line, char } = trace;
          if (!source) return;
          const lines = source.split("\n");
          const snippet = {
            before: lines[line - 2] || void 0,
            main: lines[line - 1] || void 0,
            after: lines[line] || void 0
          };
          if (snippet.main && snippet.main.length >= char) {
            snippet.location = " ".repeat(Math.max(char - 1, 0)) + "^";
          }
          trace.snippet = snippet;
        });
      }
      return [
        import_Document.default.createText(`
`, false),
        import_Document.default.createElement("html", {}, [
          import_Document.default.createText(`
  `, false),
          ...[
            import_Document.default.createElement("head", {}, [
              import_Document.default.createText(`
  `, false),
              import_Document.default.createElement("meta", { "charset": `utf-8` }),
              import_Document.default.createText(`
  `, false),
              import_Document.default.createElement("meta", { "name": `viewport`, "content": `width=device-width, initial-scale=1` }),
              import_Document.default.createText(`
  `, false),
              import_Document.default.createElement("title", {}, [
                ...this._toNodeList(title)
              ]),
              import_Document.default.createText(`
  `, false),
              import_Document.default.createElement("meta", { "name": `description`, "content": description }),
              import_Document.default.createText(`
  `, false),
              import_Document.default.createElement("meta", { "property": `og:title`, "content": title }),
              import_Document.default.createText(`
  `, false),
              import_Document.default.createElement("meta", { "property": `og:description`, "content": description }),
              import_Document.default.createText(`
  `, false),
              import_Document.default.createElement("meta", { "property": `og:image`, "content": `https://stackpress.github.io/ink/ink-logo.png` }),
              import_Document.default.createText(`
  `, false),
              import_Document.default.createElement("meta", { "property": `og:url`, "content": `https://stackpress.github.io/ink${url}` }),
              import_Document.default.createText(`
  `, false),
              import_Document.default.createElement("meta", { "property": `og:type`, "content": `website` }),
              import_Document.default.createText(`
  `, false),
              import_Document.default.createElement("meta", { "name": `twitter:card`, "content": `summary` }),
              import_Document.default.createText(`
  `, false),
              import_Document.default.createElement("meta", { "name": `twitter:site`, "content": `@stackpress` }),
              import_Document.default.createText(`
  `, false),
              import_Document.default.createElement("meta", { "name": `twitter:title`, "content": title }),
              import_Document.default.createText(`
  `, false),
              import_Document.default.createElement("meta", { "name": `twitter:description`, "content": description }),
              import_Document.default.createText(`
  `, false),
              import_Document.default.createElement("meta", { "name": `twitter:image`, "content": `https://stackpress.github.io/ink/ink-logo.png` }),
              import_Document.default.createText(`
  `, false),
              import_Document.default.createElement("link", { "rel": `favicon`, "href": `/ink/favicon.ico` }),
              import_Document.default.createText(`
  `, false),
              import_Document.default.createElement("link", { "rel": `shortcut icon`, "type": `image/png`, "href": `/ink/favicon.png` }),
              import_Document.default.createText(`
  `, false),
              import_Document.default.createElement("link", { "rel": `stylesheet`, "type": `text/css`, "href": `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css` }),
              import_Document.default.createText(`
  `, false),
              import_Document.default.createElement("link", { "rel": `stylesheet`, "type": `text/css`, "href": `/ink/styles/global.css` }),
              import_Document.default.createText(`
  `, false),
              import_Document.default.createElement("link", { "rel": `stylesheet`, "type": `text/css`, "href": `/ink/build/client/${(0, import_server.env)("BUILD_ID")}.css` }),
              import_Document.default.createElement("script", { "data-template": true, "type": `text/json` }, [
                import_Document.default.createText(`__TEMPLATE_DATA__`, true)
              ]),
              import_Document.default.createText(`
  `, false),
              import_Document.default.createElement("script", { "src": `/ink/build/client/${(0, import_server.env)("BUILD_ID")}.js` }),
              import_Document.default.createText(`
  `, false),
              ...!!((0, import_server.env)("NODE_ENV") === "development") ? [
                import_Document.default.createText(`
    `, false),
                import_Document.default.createElement("script", { "src": `/dev.js` }),
                import_Document.default.createText(`
  `, false)
              ] : [],
              import_Document.default.createText(`
`, false)
            ])
          ],
          import_Document.default.createText(`
  `, false),
          import_Document.default.createElement("body", { "class": `light bg-t-0 tx-t-1 tx-arial` }, [
            import_Document.default.createText(`
    `, false),
            import_Document.default.createElement("panel-layout", {}, [
              import_Document.default.createText(`
      `, false),
              import_Document.default.createElement("header", {}, [
                ...[
                  import_Document.default.createElement("menu", { "class": `flex flex-center-y px-20 py-15 m-0 bg-t-1` }, [
                    import_Document.default.createText(`
  `, false),
                    ...!!(url !== "/ink/index.html" && url !== "/ink/500.html") ? [
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("i", { "class": `fas fa-fw fa-bars cursor-pointer py-5 pr-10 none md-inline-block tx-t-1`, "click": toggle }, []),
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("div", { "class": `flex-grow` }, []),
                      import_Document.default.createText(`
  `, false)
                    ] : true ? [
                      ,
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("a", { "href": `/ink` }, [
                        import_Document.default.createText(`
      `, false),
                        import_Document.default.createElement("img", { "alt": `Ink Logo`, "class": `h-26 mr-10`, "src": `/ink/ink-icon.png` }),
                        import_Document.default.createText(`
    `, false)
                      ]),
                      import_Document.default.createText(`
  `, false)
                    ] : [],
                    import_Document.default.createText(`
  `, false),
                    import_Document.default.createElement("nav", { "class": `flex flex-center-y` }, [
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("a", { "class": `tx-primary`, "href": `/ink/docs/index.html` }, [
                        import_Document.default.createText(`Docs`, false)
                      ]),
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("a", { "class": `tx-t-1 tx-5xl ml-10`, "href": `https://github.com/stackpress/ink`, "target": `_blank` }, [
                        import_Document.default.createText(`
      `, false),
                        import_Document.default.createElement("i", { "class": `fab fa-github` }, []),
                        import_Document.default.createText(`
    `, false)
                      ]),
                      import_Document.default.createText(`
    `, false),
                      import_Document.default.createElement("a", { "class": `bg-h-cb3837 pill tx-t-1 tx-lg ml-5 p-5 tx-center`, "href": `https://www.npmjs.com/package/@stackpress/ink`, "target": `_blank` }, [
                        import_Document.default.createText(`
      `, false),
                        import_Document.default.createElement("i", { "class": `fab fa-npm tx-white` }, []),
                        import_Document.default.createText(`
    `, false)
                      ]),
                      import_Document.default.createText(`
  `, false)
                    ]),
                    import_Document.default.createText(`
`, false)
                  ])
                ]
              ]),
              import_Document.default.createText(`
      `, false),
              import_Document.default.createElement("main", { "class": `scroll-auto` }, [
                import_Document.default.createText(`
        `, false),
                import_Document.default.createElement("div", { "class": `p-20 w-calc-full-40` }, [
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("h1", { "class": `pt-10 pb-20` }, [
                    ...this._toNodeList(_("Oops..."))
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("i18n-translate", { "p": true, "trim": true }, [
                    import_Document.default.createText(`
            Something went wrong. Please try again later.
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  import_Document.default.createElement("div", { "class": `bg-t-4 courier tx-lh-22 tx-word-wrap p-10 scroll-x-auto` }, [
                    import_Document.default.createText(`
            `, false),
                    ...this._toNodeList(status),
                    import_Document.default.createText(`
          `, false)
                  ]),
                  import_Document.default.createText(`
          `, false),
                  ...!!stack.length ? [
                    import_Document.default.createText(`
            `, false),
                    import_Document.default.createElement("table-layout", { "class": `w-full mt-20`, "top": true, "head": `py-16 px-12 bg-t-2 b-solid b-black bt-1 bb-0 bx-0 tx-upper tx-bold`, "body": `py-16 px-12 b-solid b-black bt-1 bb-0 bx-0`, "odd": `bg-t-1`, "even": `bg-black tx-white tx-lh-8` }, [
                      import_Document.default.createText(`
              `, false),
                      ...Object.entries(stack).map(([_2, trace]) => [
                        import_Document.default.createText(`
                `, false),
                        import_Document.default.createElement("table-row", {}, [
                          import_Document.default.createText(`
                  `, false),
                          import_Document.default.createElement("table-col", { "nowrap": true }, [
                            ...this._toNodeList(trace.file),
                            import_Document.default.createText(` &mdash; `, false),
                            ...this._toNodeList(trace.method)
                          ]),
                          import_Document.default.createText(`
                `, false)
                        ]),
                        import_Document.default.createText(`
                `, false),
                        ...!!trace.snippet ? [
                          import_Document.default.createText(`
                  `, false),
                          import_Document.default.createElement("table-row", {}, [
                            import_Document.default.createText(`
                    `, false),
                            import_Document.default.createElement("table-col", {}, [
                              import_Document.default.createText(`
                      `, false),
                              ...!!trace.snippet.before ? [
                                import_Document.default.createText(`
                        `, false),
                                import_Document.default.createElement("pre", {}, [
                                  ...this._toNodeList(trace.line - 1),
                                  import_Document.default.createText(` | `, false),
                                  ...this._toNodeList(trace.snippet.before)
                                ]),
                                import_Document.default.createText(`
                      `, false)
                              ] : [],
                              import_Document.default.createText(`
                      `, false),
                              ...!!trace.snippet.main ? [
                                import_Document.default.createText(`
                        `, false),
                                import_Document.default.createElement("pre", {}, [
                                  ...this._toNodeList(trace.line),
                                  import_Document.default.createText(` | `, false),
                                  ...this._toNodeList(trace.snippet.main)
                                ]),
                                import_Document.default.createText(`
                      `, false)
                              ] : [],
                              import_Document.default.createText(`
                      `, false),
                              ...!!trace.snippet.location ? [
                                import_Document.default.createText(`
                        `, false),
                                import_Document.default.createElement("pre", {}, [
                                  ...this._toNodeList(" ".repeat(String(trace.line).length + 3)),
                                  ...this._toNodeList(trace.snippet.location)
                                ]),
                                import_Document.default.createText(`
                      `, false)
                              ] : [],
                              import_Document.default.createText(`
                      `, false),
                              ...!!trace.snippet.after ? [
                                import_Document.default.createText(`
                        `, false),
                                import_Document.default.createElement("pre", {}, [
                                  ...this._toNodeList(trace.line + 1),
                                  import_Document.default.createText(` | `, false),
                                  ...this._toNodeList(trace.snippet.after)
                                ]),
                                import_Document.default.createText(`
                      `, false)
                              ] : [],
                              import_Document.default.createText(`
                    `, false)
                            ]),
                            import_Document.default.createText(`
                  `, false)
                          ]),
                          import_Document.default.createText(`
                `, false)
                        ] : [],
                        import_Document.default.createText(`
              `, false)
                      ]).flat(),
                      import_Document.default.createText(`
            `, false)
                    ]),
                    import_Document.default.createText(`
          `, false)
                  ] : [],
                  import_Document.default.createText(`
        `, false)
                ]),
                import_Document.default.createText(`
      `, false)
              ]),
              import_Document.default.createText(`
    `, false)
            ]),
            import_Document.default.createText(`
  `, false)
          ]),
          import_Document.default.createText(`
`, false)
        ])
      ];
    }
  };
  return __toCommonJS(__exports);
})();

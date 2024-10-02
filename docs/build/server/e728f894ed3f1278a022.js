var InkAPI=(()=>{var X=Object.create;var k=Object.defineProperty;var Z=Object.getOwnPropertyDescriptor;var ee=Object.getOwnPropertyNames;var te=Object.getPrototypeOf,ae=Object.prototype.hasOwnProperty;var i=(a,t)=>()=>(t||a((t={exports:{}}).exports,t),t.exports),re=(a,t)=>{for(var r in t)k(a,r,{get:t[r],enumerable:!0})},W=(a,t,r,l)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of ee(t))!ae.call(a,n)&&n!==r&&k(a,n,{get:()=>t[n],enumerable:!(l=Z(t,n))||l.enumerable});return a};var H=(a,t,r)=>(r=a!=null?X(te(a)):{},W(t||!a||!a.__esModule?k(r,"default",{value:a,enumerable:!0}):r,a)),se=a=>W(k({},"__esModule",{value:!0}),a);var _=i(E=>{"use strict";Object.defineProperty(E,"__esModule",{value:!0});var v=class extends Error{static for(t,...r){return r.forEach(function(l){t=t.replace("%s",l)}),new this(t)}static forErrorsFound(t){let r=new this("Invalid Parameters");return r.errors=t,r}static require(t,r,...l){if(!t){for(let n of l)r=r.replace("%s",n);throw new this(r)}}constructor(t,r=500){super(),this.errors={},this.start=0,this.end=0,this.message=t,this.name=this.constructor.name,this.code=r}withCode(t){return this.code=t,this}withPosition(t,r){return this.start=t,this.end=r,this}toJSON(){return{error:!0,code:this.code,message:this.message}}};E.default=v});var I=i(L=>{"use strict";Object.defineProperty(L,"__esModule",{value:!0});var w=class{get length(){return this._elements.size}constructor(t=[]){this._elements=new Set,t.forEach(r=>this._elements.add(r))}add(t){this._elements.add(t)}toArray(){return Array.from(this._elements)}toString(){return Array.from(this._elements).filter(Boolean).map(t=>t.toString()).join("")}};L.default=w});var m=i(N=>{"use strict";Object.defineProperty(N,"__esModule",{value:!0});var le=new Map;N.default=le});var P=i(A=>{"use strict";Object.defineProperty(A,"__esModule",{value:!0});var D=class{get value(){return this._escape?this._value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):this._value}constructor(t,r=!1){this._escape=r,this._value=t}toString(){return this.value}};A.default=D});var S=i(f=>{"use strict";var ce=f&&f.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(f,"__esModule",{value:!0});var ne=ce(I()),ie=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"],j=class{get attributes(){return this._attributes}get children(){return this._children}get name(){return this._name}get props(){return this._props}constructor(t,r={},l="",n=[]){this._attributes={},this._name=t,this._attributes=r,this._props=l,this._children=new ne.default(n)}toString(){let t=Object.entries(this._attributes),r=t.length>0?" "+t.map(([n,p])=>{if(typeof p=="string"&&!/["<>\n]/.test(p))return`${n}="${p}"`;if(typeof p=="boolean")return p?n:""}).join(" "):"";if(ie.includes(this._name))return`<${this._name}${r} />`;let l=this._children.toString();return`<${this._name}${r}>${l}</${this._name}>`}};f.default=j});var C=i(x=>{"use strict";var J=x&&x.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(x,"__esModule",{value:!0});var oe=J(P()),F=J(S()),O=class{static render(t){return t.filter(Boolean).map(r=>r.toString()).join("")}static registry(t,r=new Set){return t.forEach(l=>{l instanceof F.default&&(["html","head","body"].includes(l.name)||r.add(l),l.name!=="head"&&l.children.length>0&&this.registry(l.children.toArray(),r))}),r}static createElement(t,r,l,n=[]){return new F.default(t,r,l,n)}static createText(t,r=!0){return new oe.default(t,r)}};x.default=O});var R=i(h=>{"use strict";var $=h&&h.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(h,"__esModule",{value:!0});var pe=$(_()),M=$(m()),U=$(C()),B=class{bindings(){let t=U.default.registry(this.template());return`{ ${Array.from(t.values()).map((l,n)=>l.props!=="{ }"?`'${n}': ${l.props}`:"").filter(l=>l!=="").join(", ")} }`}render(t={}){M.default.set("props",t||{}),M.default.set("env",Object.assign(Object.assign({},process.env||{}),{BUILD_ID:this.id(),APP_DATA:btoa(JSON.stringify(Object.assign(Object.assign({},Object.fromEntries(M.default.entries())),{env:Object.assign(Object.assign({},Object.fromEntries(Object.entries(process.env||{}).filter(n=>n[0].startsWith("PUBLIC_")))),{BUILD_ID:this.id()})})))}));let r=this.template(),l=U.default.render(r).trim();if(!l.toLowerCase().startsWith("<html"))throw pe.default.for("Document must start with an <html> tag.");return`<!DOCTYPE html>
${l}`}_toNodeList(t){return typeof t=="object"&&typeof t.nodeType=="number"?[t]:Array.isArray(t)&&t.every(r=>typeof r=="object"&&typeof r.nodeType=="number")?t:[U.default.createText(String(t))]}};h.default=B});var G=i(d=>{"use strict";Object.defineProperty(d,"__esModule",{value:!0});d.InkEmitter=void 0;var g=class{emit(t,r){return this}on(t,r){return this}once(t,r){return this}unbind(t,r){return this}};d.InkEmitter=g;var me=new g;d.default=me});var Y=i(b=>{"use strict";var fe=b&&b.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(b,"__esModule",{value:!0});var xe=fe(m());function he(a){let t=xe.default.get("env")||{};return a?t[a]||null:t}b.default=he});var z=i(u=>{"use strict";var de=u&&u.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(u,"__esModule",{value:!0});u.default=ue;var be=de(m());function ue(){return be.default.get("props")||{}}});var K=i(c=>{"use strict";var Te=c&&c.__createBinding||(Object.create?function(a,t,r,l){l===void 0&&(l=r);var n=Object.getOwnPropertyDescriptor(t,r);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(a,l,n)}:function(a,t,r,l){l===void 0&&(l=r),a[l]=t[r]}),ke=c&&c.__setModuleDefault||(Object.create?function(a,t){Object.defineProperty(a,"default",{enumerable:!0,value:t})}:function(a,t){a.default=t}),ge=c&&c.__importStar||function(a){if(a&&a.__esModule)return a;var t={};if(a!=null)for(var r in a)r!=="default"&&Object.prototype.hasOwnProperty.call(a,r)&&Te(t,a,r);return ke(t,a),t},o=c&&c.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(c,"__esModule",{value:!0});c.InkText=c.InkException=c.InkEmitter=c.InkElement=c.InkRegistry=c.InkDocument=c.InkCollection=c.props=c.emitter=c.env=c.data=void 0;var ye=o(_());c.InkException=ye.default;var ve=o(I());c.InkCollection=ve.default;var Ee=o(R());c.InkDocument=Ee.default;var _e=o(C());c.InkRegistry=_e.default;var we=o(S());c.InkElement=we.default;var V=ge(G());c.emitter=V.default;Object.defineProperty(c,"InkEmitter",{enumerable:!0,get:function(){return V.InkEmitter}});var Le=o(P());c.InkText=Le.default;var Ie=o(m());c.data=Ie.default;var Ne=o(Y());c.env=Ne.default;var De=o(z());c.props=De.default});var q=i((Je,Q)=>{Q.exports={...K()}});var Pe={};re(Pe,{default:()=>y});var e=H(q()),T=H(q());var s=function(a,...t){let r=Ae(a);for(let l=0;l<t.length;l++)r=r.replace("%s",String(t[l]));return r},Ae=function(a){return a};var y=class extends e.InkDocument{id(){return"e728f894ed3f1278a022"}styles(){return`@ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;`}template(){let t="/docs/component-strategy.html",r=s("Component Strategy - Ink reactive web component template engine."),l=s("Learn more about web components and how they work with Ink."),n=()=>{document.getElementsByTagName("panel-layout")[0].toggle("left")};return[e.InkRegistry.createText(`
`,!1),e.InkRegistry.createElement("html",{},"{ }",[e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("head",{},"{ }",[e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{charset:"utf-8"},"{ 'charset': `utf-8` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"},"{ 'name': `viewport`, 'content': `width=device-width, initial-scale=1` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("title",{},"{ }",[...this._toNodeList(r)]),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"description",content:l},"{ 'name': `description`, 'content': description }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{property:"og:title",content:r},"{ 'property': `og:title`, 'content': title }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{property:"og:description",content:l},"{ 'property': `og:description`, 'content': description }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{property:"og:image",content:"https://stackpress.github.io/ink/ink-logo.png"},"{ 'property': `og:image`, 'content': `https://stackpress.github.io/ink/ink-logo.png` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{property:"og:url",content:`https://stackpress.github.io/ink${t}`},"{ 'property': `og:url`, 'content': `https://stackpress.github.io/ink${url}` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{property:"og:type",content:"website"},"{ 'property': `og:type`, 'content': `website` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:card",content:"summary"},"{ 'name': `twitter:card`, 'content': `summary` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:site",content:"@stackpress"},"{ 'name': `twitter:site`, 'content': `@stackpress` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:title",content:r},"{ 'name': `twitter:title`, 'content': title }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:description",content:l},"{ 'name': `twitter:description`, 'content': description }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:image",content:"https://stackpress.github.io/ink/ink-logo.png"},"{ 'name': `twitter:image`, 'content': `https://stackpress.github.io/ink/ink-logo.png` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"favicon",href:"/ink/favicon.ico"},"{ 'rel': `favicon`, 'href': `/ink/favicon.ico` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"shortcut icon",type:"image/png",href:"/ink/favicon.png"},"{ 'rel': `shortcut icon`, 'type': `image/png`, 'href': `/ink/favicon.png` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"},"{ 'rel': `stylesheet`, 'type': `text/css`, 'href': `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"stylesheet",media:"(prefers-color-scheme:light)",href:"https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.16.0/cdn/themes/light.css"},"{ 'rel': `stylesheet`, 'media': `(prefers-color-scheme:light)`, 'href': `https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.16.0/cdn/themes/light.css` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"stylesheet",media:"(prefers-color-scheme:dark)",href:"https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.16.0/cdn/themes/dark.css"},"{ 'rel': `stylesheet`, 'media': `(prefers-color-scheme:dark)`, 'href': `https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.16.0/cdn/themes/dark.css` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"stylesheet",type:"text/css",href:"/ink/styles/global.css"},"{ 'rel': `stylesheet`, 'type': `text/css`, 'href': `/ink/styles/global.css` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"stylesheet",type:"text/css",href:`/ink/build/client/${(0,T.env)("BUILD_ID")}.css`},"{ 'rel': `stylesheet`, 'type': `text/css`, 'href': `/ink/build/client/${env('BUILD_ID')}.css` }"),e.InkRegistry.createText(`
  
  `,!1),e.InkRegistry.createElement("script",{"data-app":(0,T.env)("APP_DATA"),src:`/ink/build/client/${(0,T.env)("BUILD_ID")}.js`},"{ 'data-app': env('APP_DATA'), 'src': `/ink/build/client/${env('BUILD_ID')}.js` }"),e.InkRegistry.createText(`
  `,!1),...(0,T.env)("NODE_ENV")==="development"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("script",{src:"/dev.js"},"{ 'src': `/dev.js` }"),e.InkRegistry.createText(`
  `,!1)]:[],e.InkRegistry.createText(`
`,!1)]),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("body",{class:"light bg-t-0 tx-t-1 tx-arial"},"{ 'class': `light bg-t-0 tx-t-1 tx-arial` }",[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("panel-layout",{},"{ }",[e.InkRegistry.createText(`
      `,!1),e.InkRegistry.createElement("header",{},"{ }",[e.InkRegistry.createElement("menu",{class:"flex flex-center-y px-20 py-15 m-0 bg-t-1"},"{ 'class': `flex flex-center-y px-20 py-15 m-0 bg-t-1` }",[e.InkRegistry.createText(`
  `,!1),...t!=="/ink/index.html"&&t!=="/ink/500.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("i",{class:"fas fa-fw fa-bars cursor-pointer py-5 pr-10 none md-inline-block tx-t-1",click:n},"{ 'class': `fas fa-fw fa-bars cursor-pointer py-5 pr-10 none md-inline-block tx-t-1`, 'click': toggle }",[]),e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("div",{class:"flex-grow"},"{ 'class': `flex-grow` }",[]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{href:"/ink"},"{ 'href': `/ink` }",[e.InkRegistry.createText(`
      `,!1),e.InkRegistry.createElement("img",{alt:"Ink Logo",class:"h-26 mr-10",src:"/ink/ink-icon.png"},"{ 'alt': `Ink Logo`, 'class': `h-26 mr-10`, 'src': `/ink/ink-icon.png` }"),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("nav",{class:"flex flex-center-y"},"{ 'class': `flex flex-center-y` }",[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"tx-primary",href:"/ink/docs/index.html"},"{ 'class': `tx-primary`, 'href': `/ink/docs/index.html` }",[e.InkRegistry.createText("Docs",!1)]),e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"tx-t-1 tx-5xl ml-10",href:"https://github.com/stackpress/ink",target:"_blank"},"{ 'class': `tx-t-1 tx-5xl ml-10`, 'href': `https://github.com/stackpress/ink`, 'target': `_blank` }",[e.InkRegistry.createText(`
      `,!1),e.InkRegistry.createElement("i",{class:"fab fa-github"},"{ 'class': `fab fa-github` }",[]),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"bg-h-cb3837 pill tx-t-1 tx-lg ml-5 p-5 tx-center",href:"https://www.npmjs.com/package/@stackpress/ink",target:"_blank"},"{ 'class': `bg-h-cb3837 pill tx-t-1 tx-lg ml-5 p-5 tx-center`, 'href': `https://www.npmjs.com/package/@stackpress/ink`, 'target': `_blank` }",[e.InkRegistry.createText(`
      `,!1),e.InkRegistry.createElement("i",{class:"fab fa-npm tx-white"},"{ 'class': `fab fa-npm tx-white` }",[]),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
`,!1)])]),e.InkRegistry.createText(`
      `,!1),e.InkRegistry.createElement("aside",{left:!0},"{ 'left': true }",[e.InkRegistry.createElement("header",{class:"flex flex-center-y bg-t-2 py-15 pr-5 pl-10"},"{ 'class': `flex flex-center-y bg-t-2 py-15 pr-5 pl-10` }",[e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("a",{href:"/ink"},"{ 'href': `/ink` }",[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("img",{class:"h-26 mr-10",src:"/ink/ink-icon.png",alt:"Ink Logo"},"{ 'class': `h-26 mr-10`, 'src': `/ink/ink-icon.png`, 'alt': `Ink Logo` }"),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("h3",{class:"flex-grow m-0 tx-upper"},"{ 'class': `flex-grow m-0 tx-upper` }",[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"tx-primary",href:"/ink"},"{ 'class': `tx-primary`, 'href': `/ink` }",[e.InkRegistry.createText("Ink",!1)]),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("i",{class:"fas fa-fw fa-chevron-left cursor-pointer none md-inline-block",click:n},"{ 'class': `fas fa-fw fa-chevron-left cursor-pointer none md-inline-block`, 'click': toggle }",[]),e.InkRegistry.createText(`
`,!1)]),e.InkRegistry.createText(`
`,!1),e.InkRegistry.createElement("nav",{class:"bg-t-1 scroll-auto h-calc-full-60"},"{ 'class': `bg-t-1 scroll-auto h-calc-full-60` }",[e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-0 pt-20 pb-10 pl-10 tx-upper"},"{ 'class': `bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-0 pt-20 pb-10 pl-10 tx-upper` }",[e.InkRegistry.createText(`
    `,!1),...this._toNodeList(s("Introduction")),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
  `,!1),...t==="/docs/index.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/index.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/index.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(s("Documentation")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/index.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/index.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(s("Documentation")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/getting-started.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/getting-started.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/getting-started.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(s("Getting Started")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/getting-started.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/getting-started.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(s("Getting Started")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`

  `,!1),e.InkRegistry.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper"},"{ 'class': `bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper` }",[e.InkRegistry.createText(`
    `,!1),...this._toNodeList(s("Features")),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
  `,!1),...t==="/docs/markup-syntax.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/markup-syntax.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/markup-syntax.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(s("Markup Syntax")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/markup-syntax.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/markup-syntax.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(s("Markup Syntax")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/state-management.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/state-management.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/state-management.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(s("State Management")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/state-management.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/state-management.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(s("State Management")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/component-strategy.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/component-strategy.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/component-strategy.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(s("Component Strategy")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/component-strategy.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/component-strategy.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(s("Component Strategy")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/compiler-api.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/compiler-api.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/compiler-api.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(s("Compiler API")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/compiler-api.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/compiler-api.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(s("Compiler API")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/client-api.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/client-api.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/client-api.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(s("Client API")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/client-api.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/client-api.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(s("Client API")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`

  `,!1),e.InkRegistry.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper"},"{ 'class': `bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper` }",[e.InkRegistry.createText(`
    `,!1),...this._toNodeList(s("Usage")),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
  `,!1),...t==="/docs/template-engine.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/template-engine.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/template-engine.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(s("Template Engine")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/template-engine.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/template-engine.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(s("Template Engine")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/single-page.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/single-page.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/single-page.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(s("Single Page App")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/single-page.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/single-page.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(s("Single Page App")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/static-site.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/static-site.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/static-site.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(s("Static Site Generator")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/static-site.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/static-site.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(s("Static Site Generator")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/component-publisher.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/component-publisher.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/component-publisher.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(s("Component Publisher")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/component-publisher.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/component-publisher.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(s("Component Publisher")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/developer-tools.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold mb-100",href:"/ink/docs/developer-tools.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold mb-100`, 'href': `/ink/docs/developer-tools.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(s("Developer Tools")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 mb-100",href:"/ink/docs/developer-tools.html"},"{ 'class': `block tx-info py-10 pl-10 mb-100`, 'href': `/ink/docs/developer-tools.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(s("Developer Tools")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
`,!1)])]),e.InkRegistry.createText(`
      `,!1),e.InkRegistry.createElement("aside",{right:!0},"{ 'right': true }",[e.InkRegistry.createText(`
        `,!1),e.InkRegistry.createElement("menu",{class:"m-0 px-10 py-20 h-calc-full-40 bg-t-2 scroll-auto"},"{ 'class': `m-0 px-10 py-20 h-calc-full-40 bg-t-2 scroll-auto` }",[e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h6",{class:"tx-muted tx-14 mb-0 mt-0 pb-10 tx-upper"},"{ 'class': `tx-muted tx-14 mb-0 mt-0 pb-10 tx-upper` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(s("On this page")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("nav",{class:"tx-14 tx-lh-32"},"{ 'class': `tx-14 tx-lh-32` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-0",href:"#document"},"{ 'class': `block tx-t-0`, 'href': `#document` }",[...this._toNodeList(s("Document"))]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-0",href:"#template"},"{ 'class': `block tx-t-0`, 'href': `#template` }",[...this._toNodeList(s("Template"))]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-0",href:"#component"},"{ 'class': `block tx-t-0`, 'href': `#component` }",[...this._toNodeList(s("Component"))]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("nav",{class:"pl-20"},"{ 'class': `pl-20` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-1",href:"#strat-1"},"{ 'class': `block tx-t-1`, 'href': `#strat-1` }",[...this._toNodeList(s("Strategy 1"))]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-1",href:"#strat-2"},"{ 'class': `block tx-t-1`, 'href': `#strat-2` }",[...this._toNodeList(s("Strategy 2"))]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-1",href:"#strat-3"},"{ 'class': `block tx-t-1`, 'href': `#strat-3` }",[...this._toNodeList(s("Strategy 3"))]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-1",href:"#strat-4"},"{ 'class': `block tx-t-1`, 'href': `#strat-4` }",[...this._toNodeList(s("Strategy 4"))]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-0",href:"#fouc"},"{ 'class': `block tx-t-0`, 'href': `#fouc` }",[...this._toNodeList(s("FOUC"))]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
        `,!1)]),e.InkRegistry.createText(`
      `,!1)]),e.InkRegistry.createText(`
      `,!1),e.InkRegistry.createElement("main",{},"{ }",[e.InkRegistry.createText(`
        `,!1),e.InkRegistry.createElement("api-docs",{},"{ }",[e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h1",{class:"tx-primary tx-upper tx-30 py-20"},"{ 'class': `tx-primary tx-upper tx-30 py-20` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(s("Component Strategy")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            There are three types of components in Ink: Document, 
            Template, and Component. Each type of component has a 
            different strategy for rendering and updating the DOM. The 
            Document component is the root component of the application 
            and is responsible for rendering the entire application. The 
            Template component is a reusable component that can be used 
            in multiple places in the application. The Component component 
            is a custom component that can be used to create complex UI 
            elements.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"document"},"{ 'name': `document` }",[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},"{ 'class': `tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(s("Document")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            A document denoted by files with the 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText(".ink",!1)]),e.InkRegistry.createText(` extension, is the root of
            each page view that should include the document markup 
            starting with `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("<html>")]),e.InkRegistry.createText(`. While 
            it looks like another Ink component, there are some key 
            differences in how it is used.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ul",{},"{ }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
                A document logic (`,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("<script>")]),e.InkRegistry.createText(`)
                is executed on the client side but is not a 
                `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("InkComponent",!1)]),e.InkRegistry.createText(`, which means 
                it cannot be re-rendered and does not have access to 
                `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("this",!1)]),e.InkRegistry.createText(` context.
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
                A document `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("props()")]),e.InkRegistry.createText(` are the 
                server props passed down to the client.
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
                A document does not have access to NodeJS functionality. So 
                things like `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("fs",!1)]),e.InkRegistry.createText(` are not available.
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("element-alert",{curved:!0,info:!0,class:"py-20 tx-lh-24"},"{ 'curved': true, 'info': true, 'class': `py-20 tx-lh-24` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("element-icon",{name:"info-circle"},"{ 'name': `info-circle` }"),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("strong",{},"{ }",[e.InkRegistry.createText("Recommendation:",!1)]),e.InkRegistry.createText(` You should do server related
            logic on the server framework and pass the neccesary data 
            to the client.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-app",{height:250,title:"Passing Server Props",class:"py-20"},"{ 'height': 250, 'title': `Passing Server Props`, 'class': `py-20` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("app-head",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"flex scroll-x-auto pt-5 pl-5"},"{ 'class': `flex scroll-x-auto pt-5 pl-5` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-tab",{on:!0,class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"server",selector:"#server-index-ts"},"{ 'on': true, 'class': `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, 'active': `bg-black tx-white`, 'inactive': `bg-t-1 tx-t-1`, 'group': `server`, 'selector': `#server-index-ts` }",[e.InkRegistry.createText(`
                  src/index.ts
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"server",selector:"#server-page-ink"},"{ 'class': `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, 'active': `bg-black tx-white`, 'inactive': `bg-t-1 tx-t-1`, 'group': `server`, 'selector': `#server-page-ink` }",[e.InkRegistry.createText(`
                  src/page.ink
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("app-left",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("h5",{class:"p-5"},"{ 'class': `p-5` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"chevron-down"},"{ 'name': `chevron-down` }"),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("span",{},"{ }",[e.InkRegistry.createText("src",!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-tab",{on:!0,class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-muted",group:"server",selector:"#server-index-ts"},"{ 'on': true, 'class': `pl-15 pt-10 block`, 'active': `tx-white`, 'inactive': `tx-muted`, 'group': `server`, 'selector': `#server-index-ts` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"file"},"{ 'name': `file` }"),e.InkRegistry.createText(`
                index.ts
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-tab",{class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-muted",group:"server",selector:"#server-page-ink"},"{ 'class': `pl-15 pt-10 block`, 'active': `tx-white`, 'inactive': `tx-muted`, 'group': `server`, 'selector': `#server-page-ink` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"file"},"{ 'name': `file` }"),e.InkRegistry.createText(`
                page.ink
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("app-main",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-code",{id:"server-index-ts",lang:"js",numbers:!0,trim:!0,detab:16},"{ 'id': `server-index-ts`, 'lang': `js`, 'numbers': true, 'trim': true, 'detab': 16 }",[...this._toNodeList(`
                import http from 'http';
                import ink from '@stackpress/ink/compiler';

                const compiler = ink({ cwd: __dirname });
                const server = http.createServer(async (req, res) => {
                  //pass server props to document
                  res.end(await compiler.render('./index.ink', {
                    title: 'Hello World'
                  }));
                });
              `)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-code",{id:"server-page-ink",style:"display:none",numbers:!0,trim:!0,detab:16},"{ 'id': `server-page-ink`, 'style': `display:none`, 'numbers': true, 'trim': true, 'detab': 16 }",[...this._toNodeList(`
                <script>
                  import { props } from '@stackpress/ink';
                  //from the server
                  const { title } = props();
                </script>
                <html>
                  <body>
                    <h1 class="title">{title}</h1>
                  </body>
                </html>
              `)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"template"},"{ 'name': `template` }",[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},"{ 'class': `tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(s("Template")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            A template is resuable partial markup that can be imported by 
            a component, document or another template. A template is 
            not is not a `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("InkComponent",!1)]),e.InkRegistry.createText(`, but 
            rather adds its markup to the parent component's final markup.
            You will not see a template in the DOM, but rather the
            markup it contains.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            For example, consider a document that contains the following 
            markup.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-code",{trim:!0,detab:12},"{ 'trim': true, 'detab': 12 }",[...this._toNodeList(`
            <script>
              const title = 'Hello World';
            </script>
            <html>
              <head>
                <meta charset="utf-8" />
                <title>{title}</title>
              </head>
              <body>
                <h1>{title}</h1>
              </body>
            </html>
          `)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            You can create a template for the head of your
            document and then import it. This allows you to
            reuse the head markup in multiple documents.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-app",{height:250,title:"Using Templates",class:"py-20"},"{ 'height': 250, 'title': `Using Templates`, 'class': `py-20` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("app-head",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"flex scroll-x-auto pt-5 pl-5"},"{ 'class': `flex scroll-x-auto pt-5 pl-5` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-tab",{on:!0,class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"template",selector:"#template-page-ink"},"{ 'on': true, 'class': `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, 'active': `bg-black tx-white`, 'inactive': `bg-t-1 tx-t-1`, 'group': `template`, 'selector': `#template-page-ink` }",[e.InkRegistry.createText(`
                  src/page.ink
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"template",selector:"#template-head-ink"},"{ 'class': `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, 'active': `bg-black tx-white`, 'inactive': `bg-t-1 tx-t-1`, 'group': `template`, 'selector': `#template-head-ink` }",[e.InkRegistry.createText(`
                  src/head.ink
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("app-left",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("h5",{class:"p-5"},"{ 'class': `p-5` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"chevron-down"},"{ 'name': `chevron-down` }"),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("span",{},"{ }",[e.InkRegistry.createText("src",!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-tab",{on:!0,class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-muted",group:"template",selector:"#template-page-ink"},"{ 'on': true, 'class': `pl-15 pt-10 block`, 'active': `tx-white`, 'inactive': `tx-muted`, 'group': `template`, 'selector': `#template-page-ink` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"file"},"{ 'name': `file` }"),e.InkRegistry.createText(`
                page.ink
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-tab",{class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-muted",group:"template",selector:"#template-head-ink"},"{ 'class': `pl-15 pt-10 block`, 'active': `tx-white`, 'inactive': `tx-muted`, 'group': `template`, 'selector': `#template-head-ink` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"file"},"{ 'name': `file` }"),e.InkRegistry.createText(`
                head.ink
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("app-main",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-code",{id:"template-page-ink",numbers:!0,trim:!0,detab:16},"{ 'id': `template-page-ink`, 'numbers': true, 'trim': true, 'detab': 16 }",[...this._toNodeList(`
                <link rel="import" type="template" href="./head.ink" name="html-head" />
                <script>
                  const title = 'Hello World';
                </script>
                <html>
                  <html-head />
                  <body>
                    <h1>{title}</h1>
                  </body>
                </html>
              `)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-code",{id:"template-head-ink",style:"display:none",numbers:!0,trim:!0,detab:16},"{ 'id': `template-head-ink`, 'style': `display:none`, 'numbers': true, 'trim': true, 'detab': 16 }",[...this._toNodeList(`
                <head>
                  <meta charset="utf-8" />
                  <title>{title}</title>
                </head>
              `)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("element-alert",{curved:!0,info:!0,class:"py-20 tx-lh-24"},"{ 'curved': true, 'info': true, 'class': `py-20 tx-lh-24` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("element-icon",{name:"info-circle"},"{ 'name': `info-circle` }"),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("strong",{},"{ }",[e.InkRegistry.createText("Note:",!1)]),e.InkRegistry.createText(` Template partials do not process 
            attributes or children if given.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            Variables used in a template should be declared in the
            parent component or document. This allows you to pass
            data to the template from the parent.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"component"},"{ 'name': `component` }",[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},"{ 'class': `tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(s("Component")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            All ink components are 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("InkComponent",!1)]),e.InkRegistry.createText(` that extends
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("HTMLElement",!1)]),e.InkRegistry.createText(` and therefore is 
            both a web component and element just like any other element 
            in the browser DOM. Components that do not use the
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("<style>")]),e.InkRegistry.createText(` tag are affected by 
            the global styles of the application. Components with the
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("<style>")]),e.InkRegistry.createText(` tag enable the 
            component's shadow DOM and will encapsulate the styles within
            the component and not be affected by global styles. With that 
            said, there are several strategies that can be applied to 
            Ink components.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"strat-1"},"{ 'name': `strat-1` }",[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h3",{class:"tx-t-1 tx-upper tx-22 pt-40 pb-20"},"{ 'class': `tx-t-1 tx-upper tx-22 pt-40 pb-20` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(s("Strategy 1: No Components")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            This strategy uses only documents and templates. This 
            strategy is useful for simple applications that do not require 
            complex UI elements. This is the best strategy for 
            performant applications.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-app",{height:400,title:"No Components",class:"py-20"},"{ 'height': 400, 'title': `No Components`, 'class': `py-20` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("app-head",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"flex scroll-x-auto pt-5 pl-5"},"{ 'class': `flex scroll-x-auto pt-5 pl-5` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-tab",{on:!0,class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"strat-1",selector:"#strat-1-page-ink"},"{ 'on': true, 'class': `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, 'active': `bg-black tx-white`, 'inactive': `bg-t-1 tx-t-1`, 'group': `strat-1`, 'selector': `#strat-1-page-ink` }",[e.InkRegistry.createText(`
                  src/page.ink
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"strat-1",selector:"#strat-1-head-ink"},"{ 'class': `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, 'active': `bg-black tx-white`, 'inactive': `bg-t-1 tx-t-1`, 'group': `strat-1`, 'selector': `#strat-1-head-ink` }",[e.InkRegistry.createText(`
                  src/head.ink
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"strat-1",selector:"#strat-1-header-ink"},"{ 'class': `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, 'active': `bg-black tx-white`, 'inactive': `bg-t-1 tx-t-1`, 'group': `strat-1`, 'selector': `#strat-1-header-ink` }",[e.InkRegistry.createText(`
                  src/header.ink
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"strat-1",selector:"#strat-1-footer-ink"},"{ 'class': `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, 'active': `bg-black tx-white`, 'inactive': `bg-t-1 tx-t-1`, 'group': `strat-1`, 'selector': `#strat-1-footer-ink` }",[e.InkRegistry.createText(`
                  src/footer.ink
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("app-left",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("h5",{class:"folder"},"{ 'class': `folder` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"chevron-down"},"{ 'name': `chevron-down` }"),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("span",{},"{ }",[e.InkRegistry.createText("src",!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-tab",{on:!0,class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-muted",group:"strat-1",selector:"#strat-1-page-ink"},"{ 'on': true, 'class': `pl-15 pt-10 block`, 'active': `tx-white`, 'inactive': `tx-muted`, 'group': `strat-1`, 'selector': `#strat-1-page-ink` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"file"},"{ 'name': `file` }"),e.InkRegistry.createText(`
                page.ink
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-tab",{class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-muted",group:"strat-1",selector:"#strat-1-head-ink"},"{ 'class': `pl-15 pt-10 block`, 'active': `tx-white`, 'inactive': `tx-muted`, 'group': `strat-1`, 'selector': `#strat-1-head-ink` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"file"},"{ 'name': `file` }"),e.InkRegistry.createText(`
                head.ink
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-tab",{class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-muted",group:"strat-1",selector:"#strat-1-header-ink"},"{ 'class': `pl-15 pt-10 block`, 'active': `tx-white`, 'inactive': `tx-muted`, 'group': `strat-1`, 'selector': `#strat-1-header-ink` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"file"},"{ 'name': `file` }"),e.InkRegistry.createText(`
                header.ink
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-tab",{class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-muted",group:"strat-1",selector:"#strat-1-footer-ink"},"{ 'class': `pl-15 pt-10 block`, 'active': `tx-white`, 'inactive': `tx-muted`, 'group': `strat-1`, 'selector': `#strat-1-footer-ink` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"file"},"{ 'name': `file` }"),e.InkRegistry.createText(`
                footer.ink
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("app-main",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-code",{id:"strat-1-page-ink",numbers:!0,trim:!0,detab:16},"{ 'id': `strat-1-page-ink`, 'numbers': true, 'trim': true, 'detab': 16 }",[...this._toNodeList(`
                <link rel="import" type="template" href="./head.ink" name="html-head" />
                <link rel="import" type="template" href="./header.ink" name="page-header" />
                <link rel="import" type="template" href="./footer.ink" name="page-footer" />
                <script>
                  import { env } from '@stackpress/ink';
                  const { BUILD_ID, APP_DATA } = env();
                  const title = 'Hello World';
                </script>
                <html>
                  <html-head />
                  <body>
                    <page-header />
                    <main>
                      <h1>{title}</h1>
                    </main>
                    <page-footer />
                  </body>
                </html>
              `)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-code",{id:"strat-1-head-ink",style:"display:none",numbers:!0,trim:!0,detab:16},"{ 'id': `strat-1-head-ink`, 'style': `display:none`, 'numbers': true, 'trim': true, 'detab': 16 }",[...this._toNodeList(`
                <head>
                  <meta charset="utf-8" />
                  <title>{title}</title>

                  <link rel="stylesheet" type="text/css" href={\`/build/\${BUILD_ID}.css\`} />
                  <script data-app={APP_DATA} src={\`/build/\${BUILD_ID}.js\`}></script>
                </head>
              `)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-code",{id:"strat-1-header-ink",style:"display:none",numbers:!0,trim:!0,detab:16},"{ 'id': `strat-1-header-ink`, 'style': `display:none`, 'numbers': true, 'trim': true, 'detab': 16 }",[...this._toNodeList(`
                <header>
                  <img src="/logo.png" alt="Logo" />
                  <h6>Brand</h6>
                </header>
              `)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-code",{id:"strat-1-footer-ink",style:"display:none",numbers:!0,trim:!0,detab:16},"{ 'id': `strat-1-footer-ink`, 'style': `display:none`, 'numbers': true, 'trim': true, 'detab': 16 }",[...this._toNodeList(`
                <footer>
                  <a href="/about">About</a>
                  <copy>&copy; 2025</copy>
                </footer>
              `)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"strat-2"},"{ 'name': `strat-2` }",[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h3",{class:"tx-t-1 tx-upper tx-22 pt-40 pb-20"},"{ 'class': `tx-t-1 tx-upper tx-22 pt-40 pb-20` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(s("Strategy 2: Shallow Components")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            This strategy uses components that do not have a 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("<style>")]),e.InkRegistry.createText(` tag and is useful for 
            applications that require complex logic in components but 
            using a shared global stylesheet.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-app",{height:400,title:"Shallow Components",class:"py-20"},"{ 'height': 400, 'title': `Shallow Components`, 'class': `py-20` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("app-head",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"flex scroll-x-auto pt-5 pl-5"},"{ 'class': `flex scroll-x-auto pt-5 pl-5` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-tab",{on:!0,class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"strat-2",selector:"#strat-2-page-ink"},"{ 'on': true, 'class': `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, 'active': `bg-black tx-white`, 'inactive': `bg-t-1 tx-t-1`, 'group': `strat-2`, 'selector': `#strat-2-page-ink` }",[e.InkRegistry.createText(`
                  src/page.ink
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"strat-2",selector:"#strat-2-header-ink"},"{ 'class': `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, 'active': `bg-black tx-white`, 'inactive': `bg-t-1 tx-t-1`, 'group': `strat-2`, 'selector': `#strat-2-header-ink` }",[e.InkRegistry.createText(`
                  src/header.ink
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"strat-2",selector:"#strat-2-footer-ink"},"{ 'class': `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, 'active': `bg-black tx-white`, 'inactive': `bg-t-1 tx-t-1`, 'group': `strat-2`, 'selector': `#strat-2-footer-ink` }",[e.InkRegistry.createText(`
                  src/footer.ink
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("app-left",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("h5",{class:"folder"},"{ 'class': `folder` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"chevron-down"},"{ 'name': `chevron-down` }"),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("span",{},"{ }",[e.InkRegistry.createText("src",!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-tab",{on:!0,class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-muted",group:"strat-2",selector:"#strat-2-page-ink"},"{ 'on': true, 'class': `pl-15 pt-10 block`, 'active': `tx-white`, 'inactive': `tx-muted`, 'group': `strat-2`, 'selector': `#strat-2-page-ink` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"file"},"{ 'name': `file` }"),e.InkRegistry.createText(`
                page.ink
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-tab",{class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-muted",group:"strat-2",selector:"#strat-2-header-ink"},"{ 'class': `pl-15 pt-10 block`, 'active': `tx-white`, 'inactive': `tx-muted`, 'group': `strat-2`, 'selector': `#strat-2-header-ink` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"file"},"{ 'name': `file` }"),e.InkRegistry.createText(`
                header.ink
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-tab",{class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-muted",group:"strat-2",selector:"#strat-2-footer-ink"},"{ 'class': `pl-15 pt-10 block`, 'active': `tx-white`, 'inactive': `tx-muted`, 'group': `strat-2`, 'selector': `#strat-2-footer-ink` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"file"},"{ 'name': `file` }"),e.InkRegistry.createText(`
                footer.ink
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("app-main",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-code",{id:"strat-2-page-ink",numbers:!0,trim:!0,detab:16},"{ 'id': `strat-2-page-ink`, 'numbers': true, 'trim': true, 'detab': 16 }",[...this._toNodeList(`
                <link rel="import" type="component" href="./header.ink" name="page-header" />
                <link rel="import" type="component" href="./footer.ink" name="page-footer" />
                <script>
                  import { env } from '@stackpress/ink';
                  const { BUILD_ID, APP_DATA } = env();
                  const title = 'Hello World';
                  const brand = 'Acme Inc.';
                  const logo = '/logo.png';
                </script>
                <html>
                  <head>
                    <meta charset="utf-8" />
                    <title>{title}</title>
                    <link rel="stylesheet" type="text/css" href="/styles.css" />

                    <link rel="stylesheet" type="text/css" href={\`/build/\${BUILD_ID}.css\`} />
                    <script data-app={APP_DATA} src={\`/build/\${BUILD_ID}.js\`}></script>
                  </head>
                  <body>
                    <page-header {brand} {logo} />
                    <main>
                      <h1>{title}</h1>
                    </main>
                    <page-footer {brand} />
                  </body>
                </html>
              `)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-code",{id:"strat-2-header-ink",style:"display:none",numbers:!0,trim:!0,detab:16},"{ 'id': `strat-2-header-ink`, 'style': `display:none`, 'numbers': true, 'trim': true, 'detab': 16 }",[...this._toNodeList(`
                <script>
                  import { props } from '@stackpress/ink';
                  const { brand, logo } = props();
                </script>
                <header>
                  <img src={logo} alt={brand} />
                  <h6>{brand}</h6>
                </header>
              `)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-code",{id:"strat-2-footer-ink",style:"display:none",numbers:!0,trim:!0,detab:16},"{ 'id': `strat-2-footer-ink`, 'style': `display:none`, 'numbers': true, 'trim': true, 'detab': 16 }",[...this._toNodeList(`
                <script>
                  import { props } from '@stackpress/ink';
                  const { brand } = props();
                </script>
                <footer>
                  <a href="/about">About</a>
                  <copy>&copy; 2025 {brand}</copy>
                </footer>
              `)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"strat-3"},"{ 'name': `strat-3` }",[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h3",{class:"tx-t-1 tx-upper tx-22 pt-40 pb-20"},"{ 'class': `tx-t-1 tx-upper tx-22 pt-40 pb-20` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(s("Strategy 3: Partial Styling")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            This strategy uses components that do not have a 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("<style>")]),e.InkRegistry.createText(` tag,
            but imports style via the 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("<link>")]),e.InkRegistry.createText(` tag to utilize both 
            global styles and specific styles that are needed for the
            component. 
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-app",{height:400,title:"Shallow Components",class:"py-20"},"{ 'height': 400, 'title': `Shallow Components`, 'class': `py-20` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("app-head",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"flex scroll-x-auto pt-5 pl-5"},"{ 'class': `flex scroll-x-auto pt-5 pl-5` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"strat-3",selector:"#strat-3-page-ink"},"{ 'class': `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, 'active': `bg-black tx-white`, 'inactive': `bg-t-1 tx-t-1`, 'group': `strat-3`, 'selector': `#strat-3-page-ink` }",[e.InkRegistry.createText(`
                  src/page.ink
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-tab",{on:!0,class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"strat-3",selector:"#strat-3-header-ink"},"{ 'on': true, 'class': `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, 'active': `bg-black tx-white`, 'inactive': `bg-t-1 tx-t-1`, 'group': `strat-3`, 'selector': `#strat-3-header-ink` }",[e.InkRegistry.createText(`
                  src/header.ink
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"strat-3",selector:"#strat-3-footer-ink"},"{ 'class': `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, 'active': `bg-black tx-white`, 'inactive': `bg-t-1 tx-t-1`, 'group': `strat-3`, 'selector': `#strat-3-footer-ink` }",[e.InkRegistry.createText(`
                  src/footer.ink
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("app-left",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("h5",{class:"folder"},"{ 'class': `folder` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"chevron-down"},"{ 'name': `chevron-down` }"),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("span",{},"{ }",[e.InkRegistry.createText("src",!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-tab",{class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-muted",group:"strat-3",selector:"#strat-3-page-ink"},"{ 'class': `pl-15 pt-10 block`, 'active': `tx-white`, 'inactive': `tx-muted`, 'group': `strat-3`, 'selector': `#strat-3-page-ink` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"file"},"{ 'name': `file` }"),e.InkRegistry.createText(`
                page.ink
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-tab",{on:!0,class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-muted",group:"strat-3",selector:"#strat-3-header-ink"},"{ 'on': true, 'class': `pl-15 pt-10 block`, 'active': `tx-white`, 'inactive': `tx-muted`, 'group': `strat-3`, 'selector': `#strat-3-header-ink` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"file"},"{ 'name': `file` }"),e.InkRegistry.createText(`
                header.ink
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-tab",{class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-muted",group:"strat-3",selector:"#strat-3-footer-ink"},"{ 'class': `pl-15 pt-10 block`, 'active': `tx-white`, 'inactive': `tx-muted`, 'group': `strat-3`, 'selector': `#strat-3-footer-ink` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"file"},"{ 'name': `file` }"),e.InkRegistry.createText(`
                footer.ink
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("app-main",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-code",{id:"strat-3-page-ink",style:"display:none",numbers:!0,trim:!0,detab:16},"{ 'id': `strat-3-page-ink`, 'style': `display:none`, 'numbers': true, 'trim': true, 'detab': 16 }",[...this._toNodeList(`
                <link rel="import" type="component" href="./header.ink" name="page-header" />
                <link rel="import" type="component" href="./footer.ink" name="page-footer" />
                <script>
                  import { env } from '@stackpress/ink';
                  const { BUILD_ID, APP_DATA } = env();
                  const title = 'Hello World';
                  const brand = 'Acme Inc.';
                  const logo = '/logo.png';
                </script>
                <html>
                  <head>
                    <meta charset="utf-8" />
                    <title>{title}</title>
                    <link rel="stylesheet" type="text/css" href="/styles.css" />

                    <link rel="stylesheet" type="text/css" href={\`/build/\${BUILD_ID}.css\`} />
                    <script data-app={APP_DATA} src={\`/build/\${BUILD_ID}.js\`}></script>
                  </head>
                  <body>
                    <page-header {brand} {logo} />
                    <main>
                      <h1>{title}</h1>
                    </main>
                    <page-footer {brand} />
                  </body>
                </html>
              `)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-code",{id:"strat-3-header-ink",numbers:!0,trim:!0,detab:16},"{ 'id': `strat-3-header-ink`, 'numbers': true, 'trim': true, 'detab': 16 }",[...this._toNodeList(`
                <link rel="stylesheet" type="text/css" href="/header.css" />
                <script>
                  import { props } from '@stackpress/ink';
                  const { brand, logo } = props();
                </script>
                <header>
                  <img src={logo} alt={brand} />
                  <h6>{brand}</h6>
                </header>
              `)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-code",{id:"strat-3-footer-ink",style:"display:none",numbers:!0,trim:!0,detab:16},"{ 'id': `strat-3-footer-ink`, 'style': `display:none`, 'numbers': true, 'trim': true, 'detab': 16 }",[...this._toNodeList(`
                <link rel="stylesheet" type="text/css" href="/footer.css" />
                <script>
                  import { props } from '@stackpress/ink';
                  const { brand } = props();
                </script>
                <footer>
                  <a href="/about">About</a>
                  <copy>&copy; 2025 {brand}</copy>
                </footer>
              `)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"strat-4"},"{ 'name': `strat-4` }",[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h3",{class:"tx-t-1 tx-upper tx-22 pt-40 pb-20"},"{ 'class': `tx-t-1 tx-upper tx-22 pt-40 pb-20` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(s("Strategy 4: Encapulation")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            This strategy uses components that have a
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("<style>")]),e.InkRegistry.createText(` tag and encapsulates
            the styles within the component. This strategy is useful for
            applications that require complex UI elements that need to be
            styled in a specific way. This is also useful for components 
            that are designed to be used in multiple projects.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-app",{height:400,title:"Encapsulation",class:"py-20"},"{ 'height': 400, 'title': `Encapsulation`, 'class': `py-20` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("app-head",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"flex scroll-x-auto pt-5 pl-5"},"{ 'class': `flex scroll-x-auto pt-5 pl-5` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"strat-4",selector:"#strat-4-page-ink"},"{ 'class': `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, 'active': `bg-black tx-white`, 'inactive': `bg-t-1 tx-t-1`, 'group': `strat-4`, 'selector': `#strat-4-page-ink` }",[e.InkRegistry.createText(`
                  src/page.ink
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-tab",{on:!0,class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"strat-4",selector:"#strat-4-header-ink"},"{ 'on': true, 'class': `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, 'active': `bg-black tx-white`, 'inactive': `bg-t-1 tx-t-1`, 'group': `strat-4`, 'selector': `#strat-4-header-ink` }",[e.InkRegistry.createText(`
                  src/header.ink
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-t-1",group:"strat-4",selector:"#strat-4-footer-ink"},"{ 'class': `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, 'active': `bg-black tx-white`, 'inactive': `bg-t-1 tx-t-1`, 'group': `strat-4`, 'selector': `#strat-4-footer-ink` }",[e.InkRegistry.createText(`
                  src/footer.ink
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("app-left",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("h5",{class:"folder"},"{ 'class': `folder` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"chevron-down"},"{ 'name': `chevron-down` }"),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("span",{},"{ }",[e.InkRegistry.createText("src",!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-tab",{on:!0,class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-muted",group:"strat-4",selector:"#strat-4-page-ink"},"{ 'on': true, 'class': `pl-15 pt-10 block`, 'active': `tx-white`, 'inactive': `tx-muted`, 'group': `strat-4`, 'selector': `#strat-4-page-ink` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"file"},"{ 'name': `file` }"),e.InkRegistry.createText(`
                page.ink
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-tab",{on:!0,class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-muted",group:"strat-4",selector:"#strat-4-header-ink"},"{ 'on': true, 'class': `pl-15 pt-10 block`, 'active': `tx-white`, 'inactive': `tx-muted`, 'group': `strat-4`, 'selector': `#strat-4-header-ink` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"file"},"{ 'name': `file` }"),e.InkRegistry.createText(`
                header.ink
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-tab",{class:"pl-15 pt-10 block",active:"tx-white",inactive:"tx-muted",group:"strat-4",selector:"#strat-4-footer-ink"},"{ 'class': `pl-15 pt-10 block`, 'active': `tx-white`, 'inactive': `tx-muted`, 'group': `strat-4`, 'selector': `#strat-4-footer-ink` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("element-icon",{name:"file"},"{ 'name': `file` }"),e.InkRegistry.createText(`
                footer.ink
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("app-main",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-code",{id:"strat-4-page-ink",style:"display:none",numbers:!0,trim:!0,detab:14},"{ 'id': `strat-4-page-ink`, 'style': `display:none`, 'numbers': true, 'trim': true, 'detab': 14 }",[...this._toNodeList(`
                <link rel="import" type="component" href="./header.ink" name="page-header" />
                <link rel="import" type="component" href="./footer.ink" name="page-footer" />
                <script>
                  import { env } from '@stackpress/ink';
                  const { BUILD_ID, APP_DATA } = env();
                  const title = 'Hello World';
                  const brand = 'Acme Inc.';
                  const logo = '/logo.png';
                </script>
                <html>
                  <head>
                    <meta charset="utf-8" />
                    <title>{title}</title>
                    <link rel="stylesheet" type="text/css" href="/styles.css" />

                    <link rel="stylesheet" type="text/css" href={\`/build/\${BUILD_ID}.css\`} />
                    <script data-app={APP_DATA} src={\`/build/\${BUILD_ID}.js\`}></script>
                  </head>
                  <body>
                    <page-header {brand} {logo} />
                    <main>
                      <h1>{title}</h1>
                    </main>
                    <page-footer {brand} />
                  </body>
                </html>
              `)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-code",{id:"strat-4-header-ink",numbers:!0,trim:!0,detab:14},"{ 'id': `strat-4-header-ink`, 'numbers': true, 'trim': true, 'detab': 14 }",[...this._toNodeList(`
                <style>
                  img { width: 100px; height: 100px; }
                  h6 { margin: 0; }
                </style>
                <script>
                  import { props } from '@stackpress/ink';
                  const { brand, logo } = props();
                </script>
                <header>
                  <img src={logo} alt={brand} />
                  <h6>{brand}</h6>
                </header>
              `)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ide-code",{id:"strat-4-footer-ink",style:"display:none",numbers:!0,trim:!0,detab:14},"{ 'id': `strat-4-footer-ink`, 'style': `display:none`, 'numbers': true, 'trim': true, 'detab': 14 }",[...this._toNodeList(`
                <style>
                  copy { 
                    display: block; 
                    text-align: center; 
                  }
                </style>
                <script>
                  import { props } from '@stackpress/ink';
                  const { brand } = props();
                </script>
                <footer>
                  <a href="/about">About</a>
                  <copy>&copy; 2025 {brand}</copy>
                </footer>
              `)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"fouc"},"{ 'name': `fouc` }",[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h2",{},"{ }",[...this._toNodeList(s("Flash of Unstyled Content"))]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            Web Components (custom elements) are 100% defined in 
            JavaScript. That includes their HTML and CSS. Those are 
            programmatically added to the DOM through APIs. By the time 
            the browser has interpreted and executed that code, there is 
            a good chance that the rendering pipeline has already put the 
            custom element on the screen. Since the browser doesn't know 
            about the element the first time around it will render it 
            without the intended styling. After the JavaScript of the 
            custom element definition is executed and the browser, 
            therefore, knows about the CSS rules that apply to that 
            element it can update the view.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            A flash of unstyled content (FOUC) can cause irritating layout 
            shifts as well as reveal content that should have been 
            progressively disclosed. In order to prevent a reflow of other 
            content you can add the following general solution to your 
            global stylesheet.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-code",{lang:"css",numbers:!0,detab:12},"{ 'lang': `css`, 'numbers': true, 'detab': 12 }",[...this._toNodeList(`
            *:not(:defined) {
              opacity: 0;
            }
          `)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            This style will apply to all elements that are not defined,
            which are usually web components and will hide the content 
            until the browser has fully rendered the component.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("nav",{class:"flex"},"{ 'class': `flex` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"tx-primary py-40",href:"/ink/docs/state-management.html"},"{ 'class': `tx-primary py-40`, 'href': `/ink/docs/state-management.html` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-icon",{name:"chevron-left",theme:"tx-1"},"{ 'name': `chevron-left`, 'theme': `tx-1` }"),e.InkRegistry.createText(`
              `,!1),...this._toNodeList(s("State Management")),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"flex-grow tx-right tx-primary py-40",href:"/ink/docs/compiler-api.html"},"{ 'class': `flex-grow tx-right tx-primary py-40`, 'href': `/ink/docs/compiler-api.html` }",[e.InkRegistry.createText(`
              `,!1),...this._toNodeList(s("Compiler API")),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-icon",{name:"chevron-right",theme:"tx-1"},"{ 'name': `chevron-right`, 'theme': `tx-1` }"),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("footer",{class:"foot"},"{ 'class': `foot` }",[]),e.InkRegistry.createText(`
        `,!1)]),e.InkRegistry.createText(`
      `,!1)]),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
`,!1)])]}};return se(Pe);})();

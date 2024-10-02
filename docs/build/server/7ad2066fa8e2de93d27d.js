var InkAPI=(()=>{var X=Object.create;var g=Object.defineProperty;var Z=Object.getOwnPropertyDescriptor;var ee=Object.getOwnPropertyNames;var te=Object.getPrototypeOf,ae=Object.prototype.hasOwnProperty;var i=(a,t)=>()=>(t||a((t={exports:{}}).exports,t),t.exports),se=(a,t)=>{for(var s in t)g(a,s,{get:t[s],enumerable:!0})},z=(a,t,s,l)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of ee(t))!ae.call(a,n)&&n!==s&&g(a,n,{get:()=>t[n],enumerable:!(l=Z(t,n))||l.enumerable});return a};var G=(a,t,s)=>(s=a!=null?X(te(a)):{},z(t||!a||!a.__esModule?g(s,"default",{value:a,enumerable:!0}):s,a)),le=a=>z(g({},"__esModule",{value:!0}),a);var v=i(_=>{"use strict";Object.defineProperty(_,"__esModule",{value:!0});var E=class extends Error{static for(t,...s){return s.forEach(function(l){t=t.replace("%s",l)}),new this(t)}static forErrorsFound(t){let s=new this("Invalid Parameters");return s.errors=t,s}static require(t,s,...l){if(!t){for(let n of l)s=s.replace("%s",n);throw new this(s)}}constructor(t,s=500){super(),this.errors={},this.start=0,this.end=0,this.message=t,this.name=this.constructor.name,this.code=s}withCode(t){return this.code=t,this}withPosition(t,s){return this.start=t,this.end=s,this}toJSON(){return{error:!0,code:this.code,message:this.message}}};_.default=E});var j=i(I=>{"use strict";Object.defineProperty(I,"__esModule",{value:!0});var w=class{get length(){return this._elements.size}constructor(t=[]){this._elements=new Set,t.forEach(s=>this._elements.add(s))}add(t){this._elements.add(t)}toArray(){return Array.from(this._elements)}toString(){return Array.from(this._elements).filter(Boolean).map(t=>t.toString()).join("")}};I.default=w});var x=i(L=>{"use strict";Object.defineProperty(L,"__esModule",{value:!0});var re=new Map;L.default=re});var N=i(P=>{"use strict";Object.defineProperty(P,"__esModule",{value:!0});var D=class{get value(){return this._escape?this._value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):this._value}constructor(t,s=!1){this._escape=s,this._value=t}toString(){return this.value}};P.default=D});var S=i(b=>{"use strict";var ce=b&&b.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(b,"__esModule",{value:!0});var ne=ce(j()),ie=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"],O=class{get attributes(){return this._attributes}get children(){return this._children}get name(){return this._name}get props(){return this._props}constructor(t,s={},l="",n=[]){this._attributes={},this._name=t,this._attributes=s,this._props=l,this._children=new ne.default(n)}toString(){let t=Object.entries(this._attributes),s=t.length>0?" "+t.map(([n,f])=>{if(typeof f=="string"&&!/["<>\n]/.test(f))return`${n}="${f}"`;if(typeof f=="boolean")return f?n:""}).join(" "):"";if(ie.includes(this._name))return`<${this._name}${s} />`;let l=this._children.toString();return`<${this._name}${s}>${l}</${this._name}>`}};b.default=O});var A=i(m=>{"use strict";var J=m&&m.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(m,"__esModule",{value:!0});var oe=J(N()),R=J(S()),M=class{static render(t){return t.filter(Boolean).map(s=>s.toString()).join("")}static registry(t,s=new Set){return t.forEach(l=>{l instanceof R.default&&(["html","head","body"].includes(l.name)||s.add(l),l.name!=="head"&&l.children.length>0&&this.registry(l.children.toArray(),s))}),s}static createElement(t,s,l,n=[]){return new R.default(t,s,l,n)}static createText(t,s=!0){return new oe.default(t,s)}};m.default=M});var W=i(p=>{"use strict";var B=p&&p.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(p,"__esModule",{value:!0});var fe=B(v()),q=B(x()),C=B(A()),$=class{bindings(){let t=C.default.registry(this.template());return`{ ${Array.from(t.values()).map((l,n)=>l.props!=="{ }"?`'${n}': ${l.props}`:"").filter(l=>l!=="").join(", ")} }`}render(t={}){q.default.set("props",t||{}),q.default.set("env",Object.assign(Object.assign({},process.env||{}),{BUILD_ID:this.id(),APP_DATA:btoa(JSON.stringify(Object.assign(Object.assign({},Object.fromEntries(q.default.entries())),{env:Object.assign(Object.assign({},Object.fromEntries(Object.entries(process.env||{}).filter(n=>n[0].startsWith("PUBLIC_")))),{BUILD_ID:this.id()})})))}));let s=this.template(),l=C.default.render(s).trim();if(!l.toLowerCase().startsWith("<html"))throw fe.default.for("Document must start with an <html> tag.");return`<!DOCTYPE html>
${l}`}_toNodeList(t){return typeof t=="object"&&typeof t.nodeType=="number"?[t]:Array.isArray(t)&&t.every(s=>typeof s=="object"&&typeof s.nodeType=="number")?t:[C.default.createText(String(t))]}};p.default=$});var F=i(h=>{"use strict";Object.defineProperty(h,"__esModule",{value:!0});h.InkEmitter=void 0;var k=class{emit(t,s){return this}on(t,s){return this}once(t,s){return this}unbind(t,s){return this}};h.InkEmitter=k;var xe=new k;h.default=xe});var H=i(d=>{"use strict";var be=d&&d.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(d,"__esModule",{value:!0});var me=be(x());function pe(a){let t=me.default.get("env")||{};return a?t[a]||null:t}d.default=pe});var V=i(u=>{"use strict";var he=u&&u.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(u,"__esModule",{value:!0});u.default=ue;var de=he(x());function ue(){return de.default.get("props")||{}}});var K=i(r=>{"use strict";var Te=r&&r.__createBinding||(Object.create?function(a,t,s,l){l===void 0&&(l=s);var n=Object.getOwnPropertyDescriptor(t,s);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[s]}}),Object.defineProperty(a,l,n)}:function(a,t,s,l){l===void 0&&(l=s),a[l]=t[s]}),ge=r&&r.__setModuleDefault||(Object.create?function(a,t){Object.defineProperty(a,"default",{enumerable:!0,value:t})}:function(a,t){a.default=t}),ke=r&&r.__importStar||function(a){if(a&&a.__esModule)return a;var t={};if(a!=null)for(var s in a)s!=="default"&&Object.prototype.hasOwnProperty.call(a,s)&&Te(t,a,s);return ge(t,a),t},o=r&&r.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(r,"__esModule",{value:!0});r.InkText=r.InkException=r.InkEmitter=r.InkElement=r.InkRegistry=r.InkDocument=r.InkCollection=r.props=r.emitter=r.env=r.data=void 0;var ye=o(v());r.InkException=ye.default;var Ee=o(j());r.InkCollection=Ee.default;var _e=o(W());r.InkDocument=_e.default;var ve=o(A());r.InkRegistry=ve.default;var we=o(S());r.InkElement=we.default;var Y=ke(F());r.emitter=Y.default;Object.defineProperty(r,"InkEmitter",{enumerable:!0,get:function(){return Y.InkEmitter}});var Ie=o(N());r.InkText=Ie.default;var je=o(x());r.data=je.default;var Le=o(H());r.env=Le.default;var De=o(V());r.props=De.default});var U=i((Je,Q)=>{Q.exports={...K()}});var Ne={};se(Ne,{default:()=>y});var e=G(U()),T=G(U());var c=function(a,...t){let s=Pe(a);for(let l=0;l<t.length;l++)s=s.replace("%s",String(t[l]));return s},Pe=function(a){return a};var y=class extends e.InkDocument{id(){return"7ad2066fa8e2de93d27d"}styles(){return`@ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;`}template(){let t="/ink/panel.html",s=c("Ink UI - Web Components Meets Atomic Styles."),l=c("Ink UI atomically generates CSS styles and provides out of box web components."),n=()=>{document.querySelector("panel-layout").toggle("left")},f=[{icon:"home",label:"Home",href:"/ink/index.html"},{icon:"book",label:"Docs"}];return[e.InkRegistry.createText(`
`,!1),e.InkRegistry.createElement("html",{},"{ }",[e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("head",{},"{ }",[e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{charset:"utf-8"},"{ 'charset': `utf-8` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"},"{ 'name': `viewport`, 'content': `width=device-width, initial-scale=1` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("title",{},"{ }",[...this._toNodeList(s)]),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"description",content:l},"{ 'name': `description`, 'content': description }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{property:"og:title",content:s},"{ 'property': `og:title`, 'content': title }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{property:"og:description",content:l},"{ 'property': `og:description`, 'content': description }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{property:"og:image",content:"https://stackpress.github.io/ink/ink-logo.png"},"{ 'property': `og:image`, 'content': `https://stackpress.github.io/ink/ink-logo.png` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{property:"og:url",content:`https://stackpress.github.io/ink${t}`},"{ 'property': `og:url`, 'content': `https://stackpress.github.io/ink${url}` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{property:"og:type",content:"website"},"{ 'property': `og:type`, 'content': `website` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:card",content:"summary"},"{ 'name': `twitter:card`, 'content': `summary` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:site",content:"@stackpress"},"{ 'name': `twitter:site`, 'content': `@stackpress` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:title",content:s},"{ 'name': `twitter:title`, 'content': title }"),e.InkRegistry.createText(`
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
    `,!1),...this._toNodeList(c("Introduction")),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
  `,!1),...t==="/docs/index.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/index.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/index.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Documentation")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/index.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/index.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Documentation")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/getting-started.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/getting-started.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/getting-started.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Getting Started")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/getting-started.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/getting-started.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Getting Started")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`

  `,!1),e.InkRegistry.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper"},"{ 'class': `bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper` }",[e.InkRegistry.createText(`
    `,!1),...this._toNodeList(c("Features")),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
  `,!1),...t==="/docs/markup-syntax.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/markup-syntax.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/markup-syntax.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Markup Syntax")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/markup-syntax.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/markup-syntax.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Markup Syntax")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/state-management.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/state-management.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/state-management.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("State Management")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/state-management.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/state-management.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("State Management")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/component-strategy.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/component-strategy.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/component-strategy.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Component Strategy")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/component-strategy.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/component-strategy.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Component Strategy")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/compiler-api.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/compiler-api.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/compiler-api.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Compiler API")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/compiler-api.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/compiler-api.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Compiler API")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/client-api.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/client-api.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/client-api.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Client API")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/client-api.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/client-api.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Client API")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`

  `,!1),e.InkRegistry.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper"},"{ 'class': `bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper` }",[e.InkRegistry.createText(`
    `,!1),...this._toNodeList(c("Usage")),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
  `,!1),...t==="/docs/template-engine.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/template-engine.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/template-engine.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Template Engine")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/template-engine.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/template-engine.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Template Engine")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/single-page.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/single-page.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/single-page.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Single Page App")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/single-page.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/single-page.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Single Page App")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/static-site.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/static-site.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/static-site.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Static Site Generator")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/static-site.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/static-site.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Static Site Generator")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/component-publisher.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/component-publisher.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/component-publisher.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Component Publisher")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/component-publisher.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/component-publisher.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Component Publisher")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/developer-tools.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold mb-100",href:"/ink/docs/developer-tools.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold mb-100`, 'href': `/ink/docs/developer-tools.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Developer Tools")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 mb-100",href:"/ink/docs/developer-tools.html"},"{ 'class': `block tx-info py-10 pl-10 mb-100`, 'href': `/ink/docs/developer-tools.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(c("Developer Tools")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
`,!1)])]),e.InkRegistry.createText(`
      `,!1),e.InkRegistry.createElement("main",{},"{ }",[e.InkRegistry.createText(`
        `,!1),e.InkRegistry.createElement("api-docs",{},"{ }",[e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h1",{class:"tx-primary tx-upper tx-30 py-20"},"{ 'class': `tx-primary tx-upper tx-30 py-20` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(c("Components")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("section",{class:"flex flex-wrap gap-10"},"{ 'class': `flex flex-wrap gap-10` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("interface-alert",{success:!0},"{ 'success': true }",[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("interface-icon",{name:"check-circle"},"{ 'name': `check-circle` }"),e.InkRegistry.createText(`
                  Good News!
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/components/alert.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/components/alert.html` }",[e.InkRegistry.createText(`
                Alerts
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("interface-badge",{warning:!0,curved:!0,class:"mb-10"},"{ 'warning': true, 'curved': true, 'class': `mb-10` }",[e.InkRegistry.createText("999",!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/components/badge.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/components/badge.html` }",[e.InkRegistry.createText(`
                Badges
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("interface-crumbs",{crumbs:f,block:!0,bold:!0,white:!0,underline:!0,"icon-muted":!0,"link-primary":!0,spacing:2},"{ 'crumbs': crumbs, 'block': true, 'bold': true, 'white': true, 'underline': true, 'icon-muted': true, 'link-primary': true, 'spacing': 2 }"),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/components/crumbs.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/components/crumbs.html` }",[e.InkRegistry.createText(`
                Crumbs
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("interface-icon",{name:"info-circle",class:"tx-info"},"{ 'name': `info-circle`, 'class': `tx-info` }"),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("interface-icon",{name:"exclamation-triangle",class:"tx-warning"},"{ 'name': `exclamation-triangle`, 'class': `tx-warning` }"),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("interface-icon",{name:"times-circle",class:"tx-error"},"{ 'name': `times-circle`, 'class': `tx-error` }"),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("interface-icon",{name:"check-circle",class:"tx-success"},"{ 'name': `check-circle`, 'class': `tx-success` }"),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/components/icon.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/components/icon.html` }",[e.InkRegistry.createText(`
                Icons
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("interface-loader",{success:!0,size:5,thickness:5,dotted:!0},"{ 'success': true, 'size': 5, 'thickness': 5, 'dotted': true }"),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("interface-loader",{info:!0,slice:2},"{ 'info': true, 'slice': 2 }"),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("interface-loader",{warning:!0,dashed:!0},"{ 'warning': true, 'dashed': true }"),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("interface-loader",{error:!0,dashed:!0,thickness:10,size:10,speed:1500},"{ 'error': true, 'dashed': true, 'thickness': 10, 'size': 10, 'speed': 1500 }"),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/components/loader.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/components/loader.html` }",[e.InkRegistry.createText(`
                Loaders
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("interface-alert",{error:!0},"{ 'error': true }",[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("interface-icon",{name:"times-circle"},"{ 'name': `times-circle` }"),e.InkRegistry.createText(`
                  Errors on Submit
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/components/notify.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/components/notify.html` }",[e.InkRegistry.createText(`
                Notify
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("interface-pager",{total:500,range:100,start:90,show:3,next:!0,prev:!0,rewind:!0,forward:!0,white:!0,bold:!0,underline:!0,"bg-info":!0,"border-theme":"bd-2",square:40,select:console.log},"{ 'total': 500, 'range': 100, 'start': 90, 'show': 3, 'next': true, 'prev': true, 'rewind': true, 'forward': true, 'white': true, 'bold': true, 'underline': true, 'bg-info': true, 'border-theme': `bd-2`, 'square': 40, 'select': console.log }"),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/components/pager.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/components/pager.html` }",[e.InkRegistry.createText(`
                Pagers
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120"},"{ 'class': `bg-t-3 h-120` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("div",{class:"relative w-full h-full"},"{ 'class': `relative w-full h-full` }",[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("header",{class:"absolute top-0 left-20p right-0 h-50p b-solid b-t-1"},"{ 'class': `absolute top-0 left-20p right-0 h-50p b-solid b-t-1` }",[e.InkRegistry.createElement("div",{class:"p-5"},"{ 'class': `p-5` }",[e.InkRegistry.createText("Head",!1)])]),e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("aside",{class:"absolute w-20p top-0 bottom-0 left-0 b-solid b-t-1"},"{ 'class': `absolute w-20p top-0 bottom-0 left-0 b-solid b-t-1` }",[e.InkRegistry.createElement("div",{class:"p-5"},"{ 'class': `p-5` }",[e.InkRegistry.createText("Left",!1)])]),e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("aside",{class:"absolute w-30p top-50p bottom-0 right-0 b-solid b-t-1"},"{ 'class': `absolute w-30p top-50p bottom-0 right-0 b-solid b-t-1` }",[e.InkRegistry.createElement("div",{class:"p-5"},"{ 'class': `p-5` }",[e.InkRegistry.createText("Right",!1)])]),e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("main",{class:"absolute top-50p bottom-0 left-20p right-30p b-solid b-t-1"},"{ 'class': `absolute top-50p bottom-0 left-20p right-30p b-solid b-t-1` }",[e.InkRegistry.createElement("div",{class:"p-5"},"{ 'class': `p-5` }",[e.InkRegistry.createText("Main",!1)])]),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/components/panel.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/components/panel.html` }",[e.InkRegistry.createText(`
                Panels
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("interface-progress",{width:50,info:!0,class:"bg-muted rounded tx-13 h-20 tx-lh-20 w-full-20"},"{ 'width': 50, 'info': true, 'class': `bg-muted rounded tx-13 h-20 tx-lh-20 w-full-20` }"),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/components/progress.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/components/progress.html` }",[e.InkRegistry.createText(`
                Progress Bars
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("interface-tab",{on:!0,class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-muted",group:"http",selector:"#http-index-ts"},"{ 'on': true, 'class': `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, 'active': `bg-black tx-white`, 'inactive': `bg-t-1 tx-muted`, 'group': `http`, 'selector': `#http-index-ts` }",[e.InkRegistry.createText(`
                  Tab 1
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("interface-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-muted",group:"http",selector:"#http-page-ink"},"{ 'class': `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, 'active': `bg-black tx-white`, 'inactive': `bg-t-1 tx-muted`, 'group': `http`, 'selector': `#http-page-ink` }",[e.InkRegistry.createText(`
                  Tab 2
                `,!1)]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("interface-tab",{class:"relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0",active:"bg-black tx-white",inactive:"bg-t-1 tx-muted",group:"http",selector:"#http-package-json"},"{ 'class': `relative ml-2 p-10 ct-sm b-solid b-t-1 bx-1 bt-1 bb-0`, 'active': `bg-black tx-white`, 'inactive': `bg-t-1 tx-muted`, 'group': `http`, 'selector': `#http-package-json` }",[e.InkRegistry.createText(`
                  Tab 3
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/components/tab.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/components/tab.html` }",[e.InkRegistry.createText(`
                Tabs
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("interface-table",{class:"h-90 w-250",top:!0,left:!0,head:"py-16 px-12 bg-t-1 b-solid b-black bt-1 bb-0 bx-0",body:"py-16 px-12 b-solid b-black bt-1 bb-0 bx-0",odd:"bg-t-1",even:"bg-t-0"},"{ 'class': `h-90 w-250`, 'top': true, 'left': true, 'head': `py-16 px-12 bg-t-1 b-solid b-black bt-1 bb-0 bx-0`, 'body': `py-16 px-12 b-solid b-black bt-1 bb-0 bx-0`, 'odd': `bg-t-1`, 'even': `bg-t-0` }",[e.InkRegistry.createText(`
                  `,!1),e.InkRegistry.createElement("table-row",{col:"b-t-3 bg-t-3"},"{ 'col': `b-t-3 bg-t-3` }",[e.InkRegistry.createText(`
                    `,!1),e.InkRegistry.createElement("table-col",{nowrap:!0},"{ 'nowrap': true }",[e.InkRegistry.createText("John Doe",!1)]),e.InkRegistry.createText(`
                    `,!1),e.InkRegistry.createElement("table-col",{},"{ }",[e.InkRegistry.createText("21",!1)]),e.InkRegistry.createText(`
                    `,!1),e.InkRegistry.createElement("table-col",{"wrap-5":!0},"{ 'wrap-5': true }",[e.InkRegistry.createText(`
                      Lorem ipsum dolor sit amet, consectetur adipiscing 
                      elit. Duis laoreet lectus eget enim rhoncus, vel 
                      volutpat eros tincidunt. In molestie nunc ut pulvinar 
                      sollicitudin.
                    `,!1)]),e.InkRegistry.createText(`
                    `,!1),e.InkRegistry.createElement("table-col",{nowrap:!0},"{ 'nowrap': true }",[e.InkRegistry.createText(`
                      `,!1),e.InkRegistry.createElement("interface-icon",{name:"eye",class:"mr-5 tx-info"},"{ 'name': `eye`, 'class': `mr-5 tx-info` }"),e.InkRegistry.createText(`
                      `,!1),e.InkRegistry.createElement("interface-icon",{name:"edit",class:"mr-5 tx-warning"},"{ 'name': `edit`, 'class': `mr-5 tx-warning` }"),e.InkRegistry.createText(`
                      `,!1),e.InkRegistry.createElement("interface-icon",{name:"trash",class:"tx-error"},"{ 'name': `trash`, 'class': `tx-error` }"),e.InkRegistry.createText(`
                    `,!1)]),e.InkRegistry.createText(`
                  `,!1)]),e.InkRegistry.createText(`
                `,!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/components/table.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/components/table.html` }",[e.InkRegistry.createText(`
                Tables
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("interface-tip",{"background-info":!0,curved:!0,top:"-15",left:"50",padding:"5"},"{ 'background-info': true, 'curved': true, 'top': `-15`, 'left': `50`, 'padding': `5` }",[e.InkRegistry.createText("This is the first and last name",!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/components/tooltip.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/components/tooltip.html` }",[e.InkRegistry.createText(`
                Tooltips
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
        `,!1)]),e.InkRegistry.createText(`
      `,!1)]),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
`,!1)])]}};return le(Ne);})();

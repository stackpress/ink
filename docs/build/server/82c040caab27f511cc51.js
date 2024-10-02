var InkAPI=(()=>{var X=Object.create;var E=Object.defineProperty;var Z=Object.getOwnPropertyDescriptor;var ee=Object.getOwnPropertyNames;var te=Object.getPrototypeOf,ae=Object.prototype.hasOwnProperty;var i=(a,t)=>()=>(t||a((t={exports:{}}).exports,t),t.exports),le=(a,t)=>{for(var l in t)E(a,l,{get:t[l],enumerable:!0})},H=(a,t,l,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of ee(t))!ae.call(a,n)&&n!==l&&E(a,n,{get:()=>t[n],enumerable:!(s=Z(t,n))||s.enumerable});return a};var W=(a,t,l)=>(l=a!=null?X(te(a)):{},H(t||!a||!a.__esModule?E(l,"default",{value:a,enumerable:!0}):l,a)),re=a=>H(E({},"__esModule",{value:!0}),a);var v=i(_=>{"use strict";Object.defineProperty(_,"__esModule",{value:!0});var y=class extends Error{static for(t,...l){return l.forEach(function(s){t=t.replace("%s",s)}),new this(t)}static forErrorsFound(t){let l=new this("Invalid Parameters");return l.errors=t,l}static require(t,l,...s){if(!t){for(let n of s)l=l.replace("%s",n);throw new this(l)}}constructor(t,l=500){super(),this.errors={},this.start=0,this.end=0,this.message=t,this.name=this.constructor.name,this.code=l}withCode(t){return this.code=t,this}withPosition(t,l){return this.start=t,this.end=l,this}toJSON(){return{error:!0,code:this.code,message:this.message}}};_.default=y});var N=i(w=>{"use strict";Object.defineProperty(w,"__esModule",{value:!0});var L=class{get length(){return this._elements.size}constructor(t=[]){this._elements=new Set,t.forEach(l=>this._elements.add(l))}add(t){this._elements.add(t)}toArray(){return Array.from(this._elements)}toString(){return Array.from(this._elements).filter(Boolean).map(t=>t.toString()).join("")}};w.default=L});var m=i(I=>{"use strict";Object.defineProperty(I,"__esModule",{value:!0});var se=new Map;I.default=se});var S=i(D=>{"use strict";Object.defineProperty(D,"__esModule",{value:!0});var j=class{get value(){return this._escape?this._value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):this._value}constructor(t,l=!1){this._escape=l,this._value=t}toString(){return this.value}};D.default=j});var P=i(x=>{"use strict";var ce=x&&x.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(x,"__esModule",{value:!0});var ne=ce(N()),ie=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"],M=class{get attributes(){return this._attributes}get children(){return this._children}get name(){return this._name}get props(){return this._props}constructor(t,l={},s="",n=[]){this._attributes={},this._name=t,this._attributes=l,this._props=s,this._children=new ne.default(n)}toString(){let t=Object.entries(this._attributes),l=t.length>0?" "+t.map(([n,f])=>{if(typeof f=="string"&&!/["<>\n]/.test(f))return`${n}="${f}"`;if(typeof f=="boolean")return f?n:""}).join(" "):"";if(ie.includes(this._name))return`<${this._name}${l} />`;let s=this._children.toString();return`<${this._name}${l}>${s}</${this._name}>`}};x.default=M});var C=i(u=>{"use strict";var V=u&&u.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(u,"__esModule",{value:!0});var oe=V(S()),F=V(P()),O=class{static render(t){return t.filter(Boolean).map(l=>l.toString()).join("")}static registry(t,l=new Set){return t.forEach(s=>{s instanceof F.default&&(["html","head","body"].includes(s.name)||l.add(s),s.name!=="head"&&s.children.length>0&&this.registry(s.children.toArray(),l))}),l}static createElement(t,l,s,n=[]){return new F.default(t,l,s,n)}static createText(t,l=!0){return new oe.default(t,l)}};u.default=O});var G=i(p=>{"use strict";var B=p&&p.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(p,"__esModule",{value:!0});var fe=B(v()),A=B(m()),q=B(C()),$=class{bindings(){let t=q.default.registry(this.template());return`{ ${Array.from(t.values()).map((s,n)=>s.props!=="{ }"?`'${n}': ${s.props}`:"").filter(s=>s!=="").join(", ")} }`}render(t={}){A.default.set("props",t||{}),A.default.set("env",Object.assign(Object.assign({},process.env||{}),{BUILD_ID:this.id(),APP_DATA:btoa(JSON.stringify(Object.assign(Object.assign({},Object.fromEntries(A.default.entries())),{env:Object.assign(Object.assign({},Object.fromEntries(Object.entries(process.env||{}).filter(n=>n[0].startsWith("PUBLIC_")))),{BUILD_ID:this.id()})})))}));let l=this.template(),s=q.default.render(l).trim();if(!s.toLowerCase().startsWith("<html"))throw fe.default.for("Document must start with an <html> tag.");return`<!DOCTYPE html>
${s}`}_toNodeList(t){return typeof t=="object"&&typeof t.nodeType=="number"?[t]:Array.isArray(t)&&t.every(l=>typeof l=="object"&&typeof l.nodeType=="number")?t:[q.default.createText(String(t))]}};p.default=$});var R=i(d=>{"use strict";Object.defineProperty(d,"__esModule",{value:!0});d.InkEmitter=void 0;var g=class{emit(t,l){return this}on(t,l){return this}once(t,l){return this}unbind(t,l){return this}};d.InkEmitter=g;var me=new g;d.default=me});var z=i(h=>{"use strict";var xe=h&&h.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(h,"__esModule",{value:!0});var ue=xe(m());function pe(a){let t=ue.default.get("env")||{};return a?t[a]||null:t}h.default=pe});var Y=i(T=>{"use strict";var de=T&&T.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(T,"__esModule",{value:!0});T.default=Te;var he=de(m());function Te(){return he.default.get("props")||{}}});var K=i(c=>{"use strict";var be=c&&c.__createBinding||(Object.create?function(a,t,l,s){s===void 0&&(s=l);var n=Object.getOwnPropertyDescriptor(t,l);(!n||("get"in n?!t.__esModule:n.writable||n.configurable))&&(n={enumerable:!0,get:function(){return t[l]}}),Object.defineProperty(a,s,n)}:function(a,t,l,s){s===void 0&&(s=l),a[s]=t[l]}),Ee=c&&c.__setModuleDefault||(Object.create?function(a,t){Object.defineProperty(a,"default",{enumerable:!0,value:t})}:function(a,t){a.default=t}),ge=c&&c.__importStar||function(a){if(a&&a.__esModule)return a;var t={};if(a!=null)for(var l in a)l!=="default"&&Object.prototype.hasOwnProperty.call(a,l)&&be(t,a,l);return Ee(t,a),t},o=c&&c.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(c,"__esModule",{value:!0});c.InkText=c.InkException=c.InkEmitter=c.InkElement=c.InkRegistry=c.InkDocument=c.InkCollection=c.props=c.emitter=c.env=c.data=void 0;var ke=o(v());c.InkException=ke.default;var ye=o(N());c.InkCollection=ye.default;var _e=o(G());c.InkDocument=_e.default;var ve=o(C());c.InkRegistry=ve.default;var Le=o(P());c.InkElement=Le.default;var J=ge(R());c.emitter=J.default;Object.defineProperty(c,"InkEmitter",{enumerable:!0,get:function(){return J.InkEmitter}});var we=o(S());c.InkText=we.default;var Ne=o(m());c.data=Ne.default;var Ie=o(z());c.env=Ie.default;var je=o(Y());c.props=je.default});var U=i((Ve,Q)=>{Q.exports={...K()}});var Se={};le(Se,{default:()=>k});var e=W(U()),b=W(U());var r=function(a,...t){let l=De(a);for(let s=0;s<t.length;s++)l=l.replace("%s",String(t[s]));return l},De=function(a){return a};var k=class extends e.InkDocument{id(){return"82c040caab27f511cc51"}styles(){return`@ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;
  .col-2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }`}template(){let t="/docs/state-management.html",l=r("State Management - Ink reactive web component template engine."),s=r("Learn how to manage states in Ink."),n=()=>{document.getElementsByTagName("panel-layout")[0].toggle("left")};return[e.InkRegistry.createText(`
`,!1),e.InkRegistry.createElement("html",{},"{ }",[e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("head",{},"{ }",[e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{charset:"utf-8"},"{ 'charset': `utf-8` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"},"{ 'name': `viewport`, 'content': `width=device-width, initial-scale=1` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("title",{},"{ }",[...this._toNodeList(l)]),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"description",content:s},"{ 'name': `description`, 'content': description }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{property:"og:title",content:l},"{ 'property': `og:title`, 'content': title }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{property:"og:description",content:s},"{ 'property': `og:description`, 'content': description }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{property:"og:image",content:"https://stackpress.github.io/ink/ink-logo.png"},"{ 'property': `og:image`, 'content': `https://stackpress.github.io/ink/ink-logo.png` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{property:"og:url",content:`https://stackpress.github.io/ink${t}`},"{ 'property': `og:url`, 'content': `https://stackpress.github.io/ink${url}` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{property:"og:type",content:"website"},"{ 'property': `og:type`, 'content': `website` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:card",content:"summary"},"{ 'name': `twitter:card`, 'content': `summary` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:site",content:"@stackpress"},"{ 'name': `twitter:site`, 'content': `@stackpress` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:title",content:l},"{ 'name': `twitter:title`, 'content': title }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:description",content:s},"{ 'name': `twitter:description`, 'content': description }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:image",content:"https://stackpress.github.io/ink/ink-logo.png"},"{ 'name': `twitter:image`, 'content': `https://stackpress.github.io/ink/ink-logo.png` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"favicon",href:"/ink/favicon.ico"},"{ 'rel': `favicon`, 'href': `/ink/favicon.ico` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"shortcut icon",type:"image/png",href:"/ink/favicon.png"},"{ 'rel': `shortcut icon`, 'type': `image/png`, 'href': `/ink/favicon.png` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"},"{ 'rel': `stylesheet`, 'type': `text/css`, 'href': `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"stylesheet",media:"(prefers-color-scheme:light)",href:"https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.16.0/cdn/themes/light.css"},"{ 'rel': `stylesheet`, 'media': `(prefers-color-scheme:light)`, 'href': `https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.16.0/cdn/themes/light.css` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"stylesheet",media:"(prefers-color-scheme:dark)",href:"https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.16.0/cdn/themes/dark.css"},"{ 'rel': `stylesheet`, 'media': `(prefers-color-scheme:dark)`, 'href': `https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.16.0/cdn/themes/dark.css` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"stylesheet",type:"text/css",href:"/ink/styles/global.css"},"{ 'rel': `stylesheet`, 'type': `text/css`, 'href': `/ink/styles/global.css` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"stylesheet",type:"text/css",href:`/ink/build/client/${(0,b.env)("BUILD_ID")}.css`},"{ 'rel': `stylesheet`, 'type': `text/css`, 'href': `/ink/build/client/${env('BUILD_ID')}.css` }"),e.InkRegistry.createText(`
  
  `,!1),e.InkRegistry.createElement("script",{"data-app":(0,b.env)("APP_DATA"),src:`/ink/build/client/${(0,b.env)("BUILD_ID")}.js`},"{ 'data-app': env('APP_DATA'), 'src': `/ink/build/client/${env('BUILD_ID')}.js` }"),e.InkRegistry.createText(`
  `,!1),...(0,b.env)("NODE_ENV")==="development"?[e.InkRegistry.createText(`
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
    `,!1),...this._toNodeList(r("Introduction")),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
  `,!1),...t==="/docs/index.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/index.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/index.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(r("Documentation")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/index.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/index.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(r("Documentation")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/getting-started.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/getting-started.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/getting-started.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(r("Getting Started")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/getting-started.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/getting-started.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(r("Getting Started")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`

  `,!1),e.InkRegistry.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper"},"{ 'class': `bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper` }",[e.InkRegistry.createText(`
    `,!1),...this._toNodeList(r("Features")),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
  `,!1),...t==="/docs/markup-syntax.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/markup-syntax.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/markup-syntax.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(r("Markup Syntax")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/markup-syntax.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/markup-syntax.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(r("Markup Syntax")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/state-management.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/state-management.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/state-management.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(r("State Management")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/state-management.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/state-management.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(r("State Management")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/component-strategy.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/component-strategy.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/component-strategy.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(r("Component Strategy")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/component-strategy.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/component-strategy.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(r("Component Strategy")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/compiler-api.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/compiler-api.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/compiler-api.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(r("Compiler API")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/compiler-api.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/compiler-api.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(r("Compiler API")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/client-api.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/client-api.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/client-api.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(r("Client API")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/client-api.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/client-api.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(r("Client API")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`

  `,!1),e.InkRegistry.createElement("h6",{class:"bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper"},"{ 'class': `bt-1 bt-solid bt-t-1 tx-black tx-14 mb-0 mt-20 pt-20 pb-10 pl-10 tx-upper` }",[e.InkRegistry.createText(`
    `,!1),...this._toNodeList(r("Usage")),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
  `,!1),...t==="/docs/template-engine.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/template-engine.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/template-engine.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(r("Template Engine")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/template-engine.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/template-engine.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(r("Template Engine")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/single-page.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/single-page.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/single-page.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(r("Single Page App")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/single-page.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/single-page.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(r("Single Page App")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/static-site.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/static-site.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/static-site.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(r("Static Site Generator")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/static-site.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/static-site.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(r("Static Site Generator")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/component-publisher.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold",href:"/ink/docs/component-publisher.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold`, 'href': `/ink/docs/component-publisher.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(r("Component Publisher")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10",href:"/ink/docs/component-publisher.html"},"{ 'class': `block tx-info py-10 pl-10`, 'href': `/ink/docs/component-publisher.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(r("Component Publisher")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
  `,!1),...t==="/docs/developer-tools.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 tx-bold mb-100",href:"/ink/docs/developer-tools.html"},"{ 'class': `block tx-info py-10 pl-10 tx-bold mb-100`, 'href': `/ink/docs/developer-tools.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(r("Developer Tools")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]:[,e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("a",{class:"block tx-info py-10 pl-10 mb-100",href:"/ink/docs/developer-tools.html"},"{ 'class': `block tx-info py-10 pl-10 mb-100`, 'href': `/ink/docs/developer-tools.html` }",[e.InkRegistry.createText(`
      `,!1),...this._toNodeList(r("Developer Tools")),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)],e.InkRegistry.createText(`
`,!1)])]),e.InkRegistry.createText(`
      `,!1),e.InkRegistry.createElement("aside",{right:!0},"{ 'right': true }",[e.InkRegistry.createText(`
        `,!1),e.InkRegistry.createElement("menu",{class:"m-0 px-10 py-20 h-calc-full-40 bg-t-2 scroll-auto"},"{ 'class': `m-0 px-10 py-20 h-calc-full-40 bg-t-2 scroll-auto` }",[e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h6",{class:"tx-muted tx-14 mb-0 mt-0 pb-10 tx-upper"},"{ 'class': `tx-muted tx-14 mb-0 mt-0 pb-10 tx-upper` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(r("On this page")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("nav",{class:"tx-14 tx-lh-32"},"{ 'class': `tx-14 tx-lh-32` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-0",href:"#props"},"{ 'class': `block tx-t-0`, 'href': `#props` }",[...this._toNodeList(r("Props"))]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-0",href:"#signals"},"{ 'class': `block tx-t-0`, 'href': `#signals` }",[...this._toNodeList(r("Signals"))]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-0",href:"#events"},"{ 'class': `block tx-t-0`, 'href': `#events` }",[...this._toNodeList(r("Events"))]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-0",href:"#classnames"},"{ 'class': `block tx-t-0`, 'href': `#classnames` }",[...this._toNodeList(r("Class Names"))]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-0",href:"#children"},"{ 'class': `block tx-t-0`, 'href': `#children` }",[...this._toNodeList(r("Children"))]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-0",href:"#component"},"{ 'class': `block tx-t-0`, 'href': `#component` }",[...this._toNodeList(r("Component"))]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-0",href:"#env"},"{ 'class': `block tx-t-0`, 'href': `#env` }",[...this._toNodeList(r("Env Variables"))]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-0",href:"#this"},"{ 'class': `block tx-t-0`, 'href': `#this` }",[...this._toNodeList(r("this"))]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
        `,!1)]),e.InkRegistry.createText(`
      `,!1)]),e.InkRegistry.createText(`
      `,!1),e.InkRegistry.createElement("main",{},"{ }",[e.InkRegistry.createText(`
        `,!1),e.InkRegistry.createElement("api-docs",{},"{ }",[e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h1",{class:"tx-primary tx-upper tx-30 py-20"},"{ 'class': `tx-primary tx-upper tx-30 py-20` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(r("State Management")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            Ink provides several ways to manage properties and states 
            in your components.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"props"},"{ 'name': `props` }",[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},"{ 'class': `tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(r("Props")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-code",{lang:"js",trim:!0,detab:12},"{ 'lang': `js`, 'trim': true, 'detab': 12 }",[...this._toNodeList(`
            import { props } from '@stackpress/ink';
            const { title, description } = props();
          `)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            The `,!1),e.InkRegistry.createElement("code",{},"{ }",[e.InkRegistry.createText("props",!1)]),e.InkRegistry.createText(` function can be used to access the 
            properties of a component.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"signals"},"{ 'name': `signals` }",[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},"{ 'class': `tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(r("Signals")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            Ink provides a reactive state management system that allows 
            you to manage states in your components. The system is based 
            on signals, which are reactive variables that can be used to 
            store and update data. Signals can be used to store any type 
            of data, including numbers, strings, objects, arrays, and even 
            functions.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("div",{class:"scroll-auto bg-black"},"{ 'class': `scroll-auto bg-black` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{trim:!0,detab:14},"{ 'trim': true, 'detab': 14 }",[...this._toNodeList(`
              <script>
                import { signal } from '@stackpress/ink';
                const count = signal<number>(1);
              </script>
              <em class=classlist>Count #{count.value}</em>
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            To create a signal, you can use the 
            `,!1),e.InkRegistry.createElement("ide-code",{type:"javascript",inline:!0},"{ 'type': `javascript`, 'inline': true }",[...this._toNodeList("signal()")]),e.InkRegistry.createText(` 
            function, which takes an initial value as an argument. Signals 
            can be read and updated using the `,!1),e.InkRegistry.createElement("code",{},"{ }",[e.InkRegistry.createText("value",!1)]),e.InkRegistry.createText(` property. 
            Setting the value will trigger a re-render of the component.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            Signals can be used in your components to manage states and 
            trigger updates when the state changes. You can use signals to 
            store data that needs to be shared between components, or to 
            trigger side effects when the state changes. Signals can also 
            be used to store data that needs to be persisted across page 
            reloads, such as form data or user preferences.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"events"},"{ 'name': `events` }",[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},"{ 'class': `tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(r("Events")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("div",{class:"scroll-auto bg-black"},"{ 'class': `scroll-auto bg-black` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{trim:!0,number:!0,detab:14},"{ 'trim': true, 'number': true, 'detab': 14 }",[...this._toNodeList(`
              <script>
                import { signal } from '@stackpress/ink';
                const count = signal<number>(1);
                const add = e => count.value++;
              </script>

              <button click=add>{count.value}</button>

              <button dblclick=add>{count.value}</button>
              <button mousedown=add>{count.value}</button>
              <button mouseup=add>{count.value}</button>
              <button mousemove=add>{count.value}</button>
              <button mouseover=add>{count.value}</button>
              <button mouseout=add>{count.value}</button>
              <button wheel=add>{count.value}</button>
              <button keydown=add>{count.value}</button>
              <button keypress=add>{count.value}</button>
              <button keyup=add>{count.value}</button>
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            For example, you can use the `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("click",!1)]),e.InkRegistry.createText(` 
            attribute assigned to a function to trigger a function when 
            the element is clicked. In combination with updating a signal, 
            can trigger a re-render of the component. The following event 
            attributes are supported.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("div",{class:"col-2"},"{ 'class': `col-2` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("h3",{},"{ }",[...this._toNodeList(r("Mouse Events"))]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ul",{class:"tx-lh-36"},"{ 'class': `tx-lh-36` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("click",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("dblclick",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("mousedown",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("mouseup",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("mousemove",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("mouseover",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("mouseout",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("wheel",!1)])]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("h3",{},"{ }",[...this._toNodeList(r("Keyboard Events"))]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ul",{class:"tx-lh-36"},"{ 'class': `tx-lh-36` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("keydown",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("keypress",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("keyup",!1)])]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("h3",{},"{ }",[...this._toNodeList(r("Form Events"))]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ul",{class:"tx-lh-36"},"{ 'class': `tx-lh-36` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("blur",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("change",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("contextmenu",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("focus",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("input",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("submit",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("invalid",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("reset",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("search",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("select",!1)])]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("h3",{},"{ }",[...this._toNodeList(r("Clipboard Events"))]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ul",{class:"tx-lh-36"},"{ 'class': `tx-lh-36` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("copy",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("cut",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("paste",!1)])]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("h3",{},"{ }",[...this._toNodeList(r("Transition Events"))]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ul",{class:"tx-lh-36"},"{ 'class': `tx-lh-36` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("transitionend",!1)])]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{},"{ }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("h3",{},"{ }",[...this._toNodeList(r("Drag Events"))]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ul",{class:"tx-lh-36"},"{ 'class': `tx-lh-36` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("drag",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("dragstart",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("dragend",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("dragover",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("dragenter",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("dragleave",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("drop",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("scroll",!1)])]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("h3",{},"{ }",[...this._toNodeList(r("Media Events"))]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ul",{class:"tx-lh-36"},"{ 'class': `tx-lh-36` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("durationchange",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("ended",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("error",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("loadeddata",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("loadedmetadata",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("loadstart",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("pause",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("play",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("playing",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("progress",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("ratechange",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("seeked",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("seeking",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("stalled",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("suspend",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("timeupdate",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("volumechange",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("waiting",!1)])]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("h3",{},"{ }",[...this._toNodeList(r("Animation Events"))]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("ul",{class:"tx-lh-36"},"{ 'class': `tx-lh-36` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("animationstart",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("animationend",!1)])]),e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("li",{},"{ }",[e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("animationiteration",!1)])]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"classnames"},"{ 'name': `classnames` }",[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},"{ 'class': `tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(r("Class Names")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("div",{class:"scroll-auto bg-black"},"{ 'class': `scroll-auto bg-black` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{lang:"js",trim:!0,detab:14},"{ 'lang': `js`, 'trim': true, 'detab': 14 }",[...this._toNodeList(`
              import { classnames } from '@stackpress/ink';
              const classlist = classnames(); //--> 'class1 class2 class3'
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            The `,!1),e.InkRegistry.createElement("code",{},"{ }",[e.InkRegistry.createText("classnames",!1)]),e.InkRegistry.createText(` function can be used to generate 
            a list of class names based on the properties of an object.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"children"},"{ 'name': `children` }",[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},"{ 'class': `tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(r("Children")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("div",{class:"scroll-auto bg-black"},"{ 'class': `scroll-auto bg-black` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{lang:"js",trim:!0,detab:14},"{ 'lang': `js`, 'trim': true, 'detab': 14 }",[...this._toNodeList(`
              import { children } from '@stackpress/ink';
              const childlist = children(); //--> Node[]
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            The `,!1),e.InkRegistry.createElement("code",{},"{ }",[e.InkRegistry.createText("children",!1)]),e.InkRegistry.createText(` function can be used to render 
            child components in a parent component.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"component"},"{ 'name': `component` }",[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},"{ 'class': `tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(r("Component")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("div",{class:"scroll-auto bg-black"},"{ 'class': `scroll-auto bg-black` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{lang:"js",trim:!0,detab:14},"{ 'lang': `js`, 'trim': true, 'detab': 14 }",[...this._toNodeList(`
              import { component } from '@stackpress/ink';
              const button = component(); //--> HTMLElement
              console.log(button.querySelector('span'));
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            For other edge cases, the `,!1),e.InkRegistry.createElement("code",{},"{ }",[e.InkRegistry.createText("component",!1)]),e.InkRegistry.createText(` function 
            can be used to get raw access to the component's 
            functionality.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"env"},"{ 'name': `env` }",[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},"{ 'class': `tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(r("Environment Variables")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-code",{trim:!0,detab:12},"{ 'trim': true, 'detab': 12 }",[...this._toNodeList(`
            <script>
              import { env } from '@stackpress/ink';
              const { BUILD_ID, NODE_ENV } = env();
            </script>
            <if true={NODE_ENV === 'development'}>
              <p>Development mode</p>
            </if>
          `)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            The `,!1),e.InkRegistry.createElement("code",{},"{ }",[e.InkRegistry.createText("env",!1)]),e.InkRegistry.createText(` function can be used to access environment 
            variables in a component.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"this"},"{ 'name': `this` }",[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},"{ 'class': `tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(r("this")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-app",{title:"What's this",class:"py-20"},"{ 'title': `What's this`, 'class': `py-20` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{numbers:!0,detab:14},"{ 'numbers': true, 'detab': 14 }",[...this._toNodeList(`
              <script>
                this.props;
                this.style;
                this.classList;
                this.parentNode;
                this.innerHTML;
                this.appendChild();
                this.querySelector('p');
              </script>
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("this",!1)]),e.InkRegistry.createText(` refers to the 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("InkComponent",!1)]),e.InkRegistry.createText(` that extends 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("HTMLElement",!1)]),e.InkRegistry.createText(`. This means all
            components in Ink are in fact are HTML elements and has
            access to the common functionality like 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("innerHTML",!1)]),e.InkRegistry.createText(` and
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("querySelector()")]),e.InkRegistry.createText(` to name a 
            few. `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("InkComponent",!1)]),e.InkRegistry.createText(` has the
            additional following properties and methods that you can access
            using `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("this",!1)]),e.InkRegistry.createText(`.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("api-ui",{start:"InkComponent"},"{ 'start': `InkComponent` }"),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("element-alert",{curved:!0,info:!0,class:"py-20 tx-lh-24"},"{ 'curved': true, 'info': true, 'class': `py-20 tx-lh-24` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("element-icon",{name:"info-circle"},"{ 'name': `info-circle` }"),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("strong",{},"{ }",[e.InkRegistry.createText("Info:",!1)]),e.InkRegistry.createText(` You can discover more methods and properties
            of the `,!1),e.InkRegistry.createElement("code",{},"{ }",[e.InkRegistry.createText("HTMLElement",!1)]),e.InkRegistry.createText(` class on the
            `,!1),e.InkRegistry.createElement("a",{target:"_blank",class:"tx-white tx-underline",href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement"},"{ 'target': `_blank`, 'class': `tx-white tx-underline`, 'href': `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement` }",[e.InkRegistry.createText(`
              MDN Web Docs
            `,!1)]),e.InkRegistry.createText(`.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("nav",{class:"flex"},"{ 'class': `flex` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"tx-primary py-40",href:"/ink/docs/markup-syntax.html"},"{ 'class': `tx-primary py-40`, 'href': `/ink/docs/markup-syntax.html` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-icon",{name:"chevron-left",theme:"tx-1"},"{ 'name': `chevron-left`, 'theme': `tx-1` }"),e.InkRegistry.createText(`
              `,!1),...this._toNodeList(r("Markup Syntax")),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"flex-grow tx-right tx-primary py-40",href:"/ink/docs/component-strategy.html"},"{ 'class': `flex-grow tx-right tx-primary py-40`, 'href': `/ink/docs/component-strategy.html` }",[e.InkRegistry.createText(`
              `,!1),...this._toNodeList(r("Component Strategy")),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-icon",{name:"chevron-right",theme:"tx-1"},"{ 'name': `chevron-right`, 'theme': `tx-1` }"),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("footer",{class:"foot"},"{ 'class': `foot` }",[]),e.InkRegistry.createText(`
        `,!1)]),e.InkRegistry.createText(`
      `,!1)]),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
`,!1)])]}};return re(Se);})();

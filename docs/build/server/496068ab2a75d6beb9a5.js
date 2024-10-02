var InkAPI=(()=>{var X=Object.create;var y=Object.defineProperty;var Z=Object.getOwnPropertyDescriptor;var ee=Object.getOwnPropertyNames;var te=Object.getPrototypeOf,ae=Object.prototype.hasOwnProperty;var n=(a,t)=>()=>(t||a((t={exports:{}}).exports,t),t.exports),re=(a,t)=>{for(var r in t)y(a,r,{get:t[r],enumerable:!0})},F=(a,t,r,l)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of ee(t))!ae.call(a,i)&&i!==r&&y(a,i,{get:()=>t[i],enumerable:!(l=Z(t,i))||l.enumerable});return a};var W=(a,t,r)=>(r=a!=null?X(te(a)):{},F(t||!a||!a.__esModule?y(r,"default",{value:a,enumerable:!0}):r,a)),se=a=>F(y({},"__esModule",{value:!0}),a);var v=n(_=>{"use strict";Object.defineProperty(_,"__esModule",{value:!0});var E=class extends Error{static for(t,...r){return r.forEach(function(l){t=t.replace("%s",l)}),new this(t)}static forErrorsFound(t){let r=new this("Invalid Parameters");return r.errors=t,r}static require(t,r,...l){if(!t){for(let i of l)r=r.replace("%s",i);throw new this(r)}}constructor(t,r=500){super(),this.errors={},this.start=0,this.end=0,this.message=t,this.name=this.constructor.name,this.code=r}withCode(t){return this.code=t,this}withPosition(t,r){return this.start=t,this.end=r,this}toJSON(){return{error:!0,code:this.code,message:this.message}}};_.default=E});var w=n(N=>{"use strict";Object.defineProperty(N,"__esModule",{value:!0});var L=class{get length(){return this._elements.size}constructor(t=[]){this._elements=new Set,t.forEach(r=>this._elements.add(r))}add(t){this._elements.add(t)}toArray(){return Array.from(this._elements)}toString(){return Array.from(this._elements).filter(Boolean).map(t=>t.toString()).join("")}};N.default=L});var m=n(I=>{"use strict";Object.defineProperty(I,"__esModule",{value:!0});var le=new Map;I.default=le});var C=n(S=>{"use strict";Object.defineProperty(S,"__esModule",{value:!0});var j=class{get value(){return this._escape?this._value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):this._value}constructor(t,r=!1){this._escape=r,this._value=t}toString(){return this.value}};S.default=j});var M=n(f=>{"use strict";var ce=f&&f.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(f,"__esModule",{value:!0});var ie=ce(w()),ne=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"],D=class{get attributes(){return this._attributes}get children(){return this._children}get name(){return this._name}get props(){return this._props}constructor(t,r={},l="",i=[]){this._attributes={},this._name=t,this._attributes=r,this._props=l,this._children=new ie.default(i)}toString(){let t=Object.entries(this._attributes),r=t.length>0?" "+t.map(([i,u])=>{if(typeof u=="string"&&!/["<>\n]/.test(u))return`${i}="${u}"`;if(typeof u=="boolean")return u?i:""}).join(" "):"";if(ne.includes(this._name))return`<${this._name}${r} />`;let l=this._children.toString();return`<${this._name}${r}>${l}</${this._name}>`}};f.default=D});var P=n(p=>{"use strict";var H=p&&p.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(p,"__esModule",{value:!0});var oe=H(C()),Y=H(M()),O=class{static render(t){return t.filter(Boolean).map(r=>r.toString()).join("")}static registry(t,r=new Set){return t.forEach(l=>{l instanceof Y.default&&(["html","head","body"].includes(l.name)||r.add(l),l.name!=="head"&&l.children.length>0&&this.registry(l.children.toArray(),r))}),r}static createElement(t,r,l,i=[]){return new Y.default(t,r,l,i)}static createText(t,r=!0){return new oe.default(t,r)}};p.default=O});var J=n(x=>{"use strict";var U=x&&x.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(x,"__esModule",{value:!0});var ue=U(v()),A=U(m()),q=U(P()),$=class{bindings(){let t=q.default.registry(this.template());return`{ ${Array.from(t.values()).map((l,i)=>l.props!=="{ }"?`'${i}': ${l.props}`:"").filter(l=>l!=="").join(", ")} }`}render(t={}){A.default.set("props",t||{}),A.default.set("env",Object.assign(Object.assign({},process.env||{}),{BUILD_ID:this.id(),APP_DATA:btoa(JSON.stringify(Object.assign(Object.assign({},Object.fromEntries(A.default.entries())),{env:Object.assign(Object.assign({},Object.fromEntries(Object.entries(process.env||{}).filter(i=>i[0].startsWith("PUBLIC_")))),{BUILD_ID:this.id()})})))}));let r=this.template(),l=q.default.render(r).trim();if(!l.toLowerCase().startsWith("<html"))throw ue.default.for("Document must start with an <html> tag.");return`<!DOCTYPE html>
${l}`}_toNodeList(t){return typeof t=="object"&&typeof t.nodeType=="number"?[t]:Array.isArray(t)&&t.every(r=>typeof r=="object"&&typeof r.nodeType=="number")?t:[q.default.createText(String(t))]}};x.default=$});var z=n(d=>{"use strict";Object.defineProperty(d,"__esModule",{value:!0});d.InkEmitter=void 0;var k=class{emit(t,r){return this}on(t,r){return this}once(t,r){return this}unbind(t,r){return this}};d.InkEmitter=k;var me=new k;d.default=me});var G=n(h=>{"use strict";var fe=h&&h.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(h,"__esModule",{value:!0});var pe=fe(m());function xe(a){let t=pe.default.get("env")||{};return a?t[a]||null:t}h.default=xe});var R=n(b=>{"use strict";var de=b&&b.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(b,"__esModule",{value:!0});b.default=be;var he=de(m());function be(){return he.default.get("props")||{}}});var K=n(c=>{"use strict";var Te=c&&c.__createBinding||(Object.create?function(a,t,r,l){l===void 0&&(l=r);var i=Object.getOwnPropertyDescriptor(t,r);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(a,l,i)}:function(a,t,r,l){l===void 0&&(l=r),a[l]=t[r]}),ye=c&&c.__setModuleDefault||(Object.create?function(a,t){Object.defineProperty(a,"default",{enumerable:!0,value:t})}:function(a,t){a.default=t}),ke=c&&c.__importStar||function(a){if(a&&a.__esModule)return a;var t={};if(a!=null)for(var r in a)r!=="default"&&Object.prototype.hasOwnProperty.call(a,r)&&Te(t,a,r);return ye(t,a),t},o=c&&c.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(c,"__esModule",{value:!0});c.InkText=c.InkException=c.InkEmitter=c.InkElement=c.InkRegistry=c.InkDocument=c.InkCollection=c.props=c.emitter=c.env=c.data=void 0;var ge=o(v());c.InkException=ge.default;var Ee=o(w());c.InkCollection=Ee.default;var _e=o(J());c.InkDocument=_e.default;var ve=o(P());c.InkRegistry=ve.default;var Le=o(M());c.InkElement=Le.default;var V=ke(z());c.emitter=V.default;Object.defineProperty(c,"InkEmitter",{enumerable:!0,get:function(){return V.InkEmitter}});var Ne=o(C());c.InkText=Ne.default;var we=o(m());c.data=we.default;var Ie=o(G());c.env=Ie.default;var je=o(R());c.props=je.default});var B=n((He,Q)=>{Q.exports={...K()}});var Ce={};re(Ce,{default:()=>g});var e=W(B()),T=W(B());var s=function(a,...t){let r=Se(a);for(let l=0;l<t.length;l++)r=r.replace("%s",String(t[l]));return r},Se=function(a){return a};var g=class extends e.InkDocument{id(){return"496068ab2a75d6beb9a5"}styles(){return`@ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;`}template(){let t="/docs/markup-syntax.html",r=s("Markup Syntax - Ink reactive web component template engine."),l=s("Learn how to write markup in Ink."),i=()=>{document.getElementsByTagName("panel-layout")[0].toggle("left")};return[e.InkRegistry.createText(`
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
    `,!1),e.InkRegistry.createElement("i",{class:"fas fa-fw fa-bars cursor-pointer py-5 pr-10 none md-inline-block tx-t-1",click:i},"{ 'class': `fas fa-fw fa-bars cursor-pointer py-5 pr-10 none md-inline-block tx-t-1`, 'click': toggle }",[]),e.InkRegistry.createText(`
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
  `,!1),e.InkRegistry.createElement("i",{class:"fas fa-fw fa-chevron-left cursor-pointer none md-inline-block",click:i},"{ 'class': `fas fa-fw fa-chevron-left cursor-pointer none md-inline-block`, 'click': toggle }",[]),e.InkRegistry.createText(`
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
            `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-0",href:"#imports"},"{ 'class': `block tx-t-0`, 'href': `#imports` }",[...this._toNodeList(s("Imports"))]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-0",href:"#styles"},"{ 'class': `block tx-t-0`, 'href': `#styles` }",[...this._toNodeList(s("Styles"))]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-0",href:"#scripts"},"{ 'class': `block tx-t-0`, 'href': `#scripts` }",[...this._toNodeList(s("Scripts"))]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-0",href:"#markup"},"{ 'class': `block tx-t-0`, 'href': `#markup` }",[...this._toNodeList(s("Markup"))]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("nav",{class:"pl-20"},"{ 'class': `pl-20` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-1",href:"#tagnames"},"{ 'class': `block tx-t-1`, 'href': `#tagnames` }",[...this._toNodeList(s("Tag Names"))]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-1",href:"#attributes"},"{ 'class': `block tx-t-1`, 'href': `#attributes` }",[...this._toNodeList(s("Attributes"))]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-1",href:"#conditionals"},"{ 'class': `block tx-t-1`, 'href': `#conditionals` }",[...this._toNodeList(s("Conditionals"))]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-1",href:"#iterations"},"{ 'class': `block tx-t-1`, 'href': `#iterations` }",[...this._toNodeList(s("Iterations"))]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-t-1",href:"#trycatch"},"{ 'class': `block tx-t-1`, 'href': `#trycatch` }",[...this._toNodeList(s("Try/Catch"))]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
        `,!1)]),e.InkRegistry.createText(`
      `,!1)]),e.InkRegistry.createText(`
      `,!1),e.InkRegistry.createElement("main",{},"{ }",[e.InkRegistry.createText(`
        `,!1),e.InkRegistry.createElement("api-docs",{},"{ }",[e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h1",{class:"tx-primary tx-upper tx-30 py-20"},"{ 'class': `tx-primary tx-upper tx-30 py-20` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(s("Markup Syntax")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            Components are the building blocks of Ink files. Documents 
            and page level markup are written in 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText(".ink",!1)]),e.InkRegistry.createText(` files. Components 
            and templates are written in 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText(".ink",!1)]),e.InkRegistry.createText(` files. In both 
            cases, the code is written in a superset of HTML.
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            The four sections that make up a ink file \u2014 imports, 
            script, styles and markup \u2014 are all optional and can be 
            used in any order.
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("ide-app",{title:"Code Structure",class:"py-20"},"{ 'title': `Code Structure`, 'class': `py-20` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{numbers:!0,detab:14},"{ 'numbers': true, 'detab': 14 }",[...this._toNodeList(`
              <!-- imports go here -->

              <style>
                /* styles go here */
              </style>

              <script>
                // logic goes here
              </script>
              
              <!-- HTML goes here -->
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"imports"},"{ 'name': `imports` }",[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},"{ 'class': `tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(s("Imports")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            Imports are used to include additional components, templates 
            and stylesheets in the current component. Components can 
            be imported as a `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("template",!1)]),e.InkRegistry.createText(` or 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("component",!1)]),e.InkRegistry.createText(` type.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-app",{title:"Import Examples",class:"py-20"},"{ 'title': `Import Examples`, 'class': `py-20` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{class:"scroll-auto",numbers:!0,trim:!0,detab:14},"{ 'class': `scroll-auto`, 'numbers': true, 'trim': true, 'detab': 14 }",[...this._toNodeList(`
              <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/prism.min.css" />
              <link rel="stylesheet" type="text/css" href="/styles/layout.css" />
              <link rel="import" type="template" href="@/components/html-head.ink" />
              <link rel="import" type="component" href="@/components/i18n/translate.ink" name="i18n-translate" />

              <style>
                /* styles go here */
              </style>

              <script>
                // logic goes here
              </script>
              
              <!-- HTML goes here -->
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            The `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("rel",!1)]),e.InkRegistry.createText(` attribute 
            specifies the relationship between the current document and 
            the linked resource. 
            
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText('rel="import"',!1)]),e.InkRegistry.createText(` denotes
            that the imported resource is a component or template.
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            The `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("type",!1)]),e.InkRegistry.createText(` 
            attribute specifies the type of the linked resource. 
            
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText('type="component"',!1)]),e.InkRegistry.createText(` 
            imports a web component that can be used as regular markup
            with attributes and children. 
            
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText('type="template"',!1)]),e.InkRegistry.createText(` 
            imports a template partial that can be included in the current 
            markup. Template partials do not process attributes or children
            if given.
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            The 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("href",!1)]),e.InkRegistry.createText(` attribute specifies
            the URL of the linked resource. The 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("name",!1)]),e.InkRegistry.createText(`
            attribute specifies the tag name of the imported component or template.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"styles"},"{ 'name': `styles` }",[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},"{ 'class': `tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(s("Styles")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            CSS styles inside a `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("<style>")]),e.InkRegistry.createText(` 
            block enables the native `,!1),e.InkRegistry.createElement("a",{target:"_blank",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM"},"{ 'target': `_blank`, 'href': `https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM` }",[e.InkRegistry.createText("shadow DOM",!1)]),e.InkRegistry.createText(` and will be scoped only to that component. 
            Additionally styles defined outside of the component such as 
            global styles will not affect the component.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            External stylesheets can be imported using the 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("<link>")]),e.InkRegistry.createText(` tag or using 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("@import()")]),e.InkRegistry.createText(` CSS directive. 
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            You can use host selectors to style an element from within 
            a component. The `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList(":host")]),e.InkRegistry.createText(` 
            pseudo-class always applies styles to the root element of the 
            web component.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-app",{title:"Using :host",class:"py-20"},"{ 'title': `Using :host`, 'class': `py-20` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{numbers:!0,trim:!0,detab:14},"{ 'numbers': true, 'trim': true, 'detab': 14 }",[...this._toNodeList(`
              <style>
                :host {
                  display: block;
                }
              </style>
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            You can also add conditional styles using the 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList(":host")]),e.InkRegistry.createText(` selector function. 
            This can be used to style the host so long as it matches the 
            given selector. For example, it can be used to select for 
            hosts that have a given attribute or class.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-app",{title:":host Conditionals",class:"py-20"},"{ 'title': `:host Conditionals`, 'class': `py-20` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{numbers:!0,trim:!0,detab:14},"{ 'numbers': true, 'trim': true, 'detab': 14 }",[...this._toNodeList(`
              <style>
                :host([active]) {
                  background-color: #333;
                  color: #FFF;
                }
                :host(.active) {
                  background-color: #333;
                  color: #FFF;
                }
              </style>
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"scripts"},"{ 'name': `scripts` }",[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},"{ 'class': `tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(s("Scripts")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            The `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("<script>")]),e.InkRegistry.createText(` block is used 
            to write TypeScript logic for the component. The script block 
            can be used to define variables, functions, and event listeners.
            Variables declared (or imported) at the top level are 
            'visible' from the component's markup. 
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-app",{title:"Top-Level Variables",class:"py-20"},"{ 'title': `Top-Level Variables`, 'class': `py-20` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{numbers:!0,trim:!0,detab:14},"{ 'numbers': true, 'trim': true, 'detab': 14 }",[...this._toNodeList(`
              <script>
                const title = 'Hello World';
              </script>

              <h1>{title}</h1>
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            The `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("<script>")]),e.InkRegistry.createText(` block can also 
            be used to import variables from other components to be used
            in the markup.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-app",{title:"Importing Files",class:"py-20"},"{ 'title': `Importing Files`, 'class': `py-20` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{class:"scroll-auto",numbers:!0,trim:!0,detab:14},"{ 'class': `scroll-auto`, 'numbers': true, 'trim': true, 'detab': 14 }",[...this._toNodeList(`
              <script>
                import getTitle from './getTitle';
                const title = getTitle();
              </script>

              <h1 title={title}>{title}</h1>
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            You can use `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("@/")]),e.InkRegistry.createText(` to prefix the 
            current working directory. This is useful when importing
            files completely in a separate directory in your project
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-app",{title:"@ Imports",class:"py-20"},"{ 'title': `@ Imports`, 'class': `py-20` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{class:"scroll-auto",numbers:!0,trim:!0,detab:14},"{ 'class': `scroll-auto`, 'numbers': true, 'trim': true, 'detab': 14 }",[...this._toNodeList(`
              <script>
                import getTitle from '@/data/getTitle';
                const title = getTitle();
              </script>

              <h1 title={title}>{title}</h1>
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"markup"},"{ 'name': `markup` }",[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h2",{class:"tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0"},"{ 'class': `tx-primary tx-upper tx-26 pt-40 pb-10 mb-20 b-solid b-t-1 bb-1 bt-0 bx-0` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(s("Markup")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            In order to be closer to the native, Ink follows the same 
            standards and conventions as HTML5 web components. Ink 
            components are compiled to native web components that possibly 
            can be used in other projects any modern browser.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"tagnames"},"{ 'name': `tagnames` }",[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h3",{class:"tx-t-1 tx-upper tx-22 pt-40 pb-20"},"{ 'class': `tx-t-1 tx-upper tx-22 pt-40 pb-20` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(s("Tag Names")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            For web components it's recommended that tag names must have 
            at least one dash (-) in them. As such you probably want to 
            name your element with two distinct words like 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("i18n-translate")]),e.InkRegistry.createText(`. You can 
            use as many dashes as you want, you're not limited to one. 
            Some specific rules to follow in order to make a valid tag 
            name:
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ul",{},"{ }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("i18n-translate",{li:!0,trim:!0,class:"my-10 tx-lh-24"},"{ 'li': true, 'trim': true, 'class': `my-10 tx-lh-24` }",[e.InkRegistry.createText(`
              It must use all lowercase characters of the alphabet (a-z).
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("i18n-translate",{li:!0,trim:!0,class:"my-10 tx-lh-24"},"{ 'li': true, 'trim': true, 'class': `my-10 tx-lh-24` }",[e.InkRegistry.createText(`
              It must contain at least one dash (-). Ink will 
              auto prefix component names based on your configuration.
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("i18n-translate",{li:!0,trim:!0,class:"my-10 tx-lh-24"},"{ 'li': true, 'trim': true, 'class': `my-10 tx-lh-24` }",[e.InkRegistry.createText(`
              It must not be an already reserved tag name including 
              `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("annotation-xml",!1)]),e.InkRegistry.createText(`,
              `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("color-profile",!1)]),e.InkRegistry.createText(`,
              `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("font-face",!1)]),e.InkRegistry.createText(`,
              `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("font-face-src",!1)]),e.InkRegistry.createText(`,
              `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("font-face-uri",!1)]),e.InkRegistry.createText(`,
              `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("font-face-format",!1)]),e.InkRegistry.createText(`,
              `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("font-face-name",!1)]),e.InkRegistry.createText(`, and 
              `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[e.InkRegistry.createText("missing-glyph",!1)]),e.InkRegistry.createText(`.
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("i18n-translate",{li:!0,trim:!0,class:"my-10 tx-lh-24"},"{ 'li': true, 'trim': true, 'class': `my-10 tx-lh-24` }",[e.InkRegistry.createText(`
              It must not contain symbols, like =, @, $.
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("i18n-translate",{li:!0,trim:!0,class:"my-10 tx-lh-24"},"{ 'li': true, 'trim': true, 'class': `my-10 tx-lh-24` }",[e.InkRegistry.createText(`
              It can contain underscores, and numbers.
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("i18n-translate",{li:!0,trim:!0,class:"my-10 tx-lh-24"},"{ 'li': true, 'trim': true, 'class': `my-10 tx-lh-24` }",[e.InkRegistry.createText(`
              It can contain characters from different alphabets, 
              such as \xE9, \xF0, \xF6, \u7231.
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            Additionally, Ink works best with correct markup. The 
            following standards should be followed:
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ul",{},"{ }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("i18n-translate",{li:!0,trim:!0,class:"my-10 tx-lh-24"},"{ 'li': true, 'trim': true, 'class': `my-10 tx-lh-24` }",[e.InkRegistry.createText(`
              Self closing tags like 
              `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("<img />")]),e.InkRegistry.createText(`,
              `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("<link />")]),e.InkRegistry.createText(`,
              `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("<meta />")]),e.InkRegistry.createText(`,
              `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("<input />")]),e.InkRegistry.createText(`
              must have a slash before the closing.
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("i18n-translate",{li:!0,trim:!0,class:"my-10 tx-lh-24"},"{ 'li': true, 'trim': true, 'class': `my-10 tx-lh-24` }",[e.InkRegistry.createText(`
              When using tables, rows should be wrapped in a 
              `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("<tbody>")]),e.InkRegistry.createText(` tag and cells
              should be wrapped in a `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("<tr>")]),e.InkRegistry.createText(` 
              tag. ie. `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("<table><tbody><tr><td>")]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("i18n-translate",{li:!0,trim:!0,class:"my-10 tx-lh-24"},"{ 'li': true, 'trim': true, 'class': `my-10 tx-lh-24` }",[e.InkRegistry.createText(`
              When using lists, items should be wrapped in a 
              `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("<ul>")]),e.InkRegistry.createText(` or 
              `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("<ol>")]),e.InkRegistry.createText(` tags.
              ie. `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("<ul><li>")]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("element-alert",{solid:!0,curved:!0,secondary:!0,class:"my-20 tx-lh-24"},"{ 'solid': true, 'curved': true, 'secondary': true, 'class': `my-20 tx-lh-24` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("element-icon",{name:"exclamation-triangle"},"{ 'name': `exclamation-triangle` }"),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("strong",{},"{ }",[e.InkRegistry.createText("Warning:",!1)]),e.InkRegistry.createText(` Any markup auto corrected by browser will cause data syncing 
            issues with Ink.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            Ink components can loosely be self closing
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("<i18n-translate />")]),e.InkRegistry.createText(`
            or expressed as a block
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("<i18n-translate></i18n-translate>")]),e.InkRegistry.createText(`.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"attributes"},"{ 'name': `attributes` }",[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h3",{class:"tx-t-1 tx-upper tx-22 pt-40 pb-20"},"{ 'class': `tx-t-1 tx-upper tx-22 pt-40 pb-20` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(s("Attributes")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-app",{title:"Markup Expressions"},"{ 'title': `Markup Expressions` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{class:"scroll-auto",numbers:!0,trim:!0,detab:14},"{ 'class': `scroll-auto`, 'numbers': true, 'trim': true, 'detab': 14 }",[...this._toNodeList(`
              <a title={title} {href} {...attributes}>
                {title}
              </a>
              <i18n-translate title=title>
                {detail}
              </i18n-translate>
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            Attributes can be bound to expressions using the 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("{}")]),e.InkRegistry.createText(` syntax. 
            Expressions can be variables, functions, or any valid 
            JavaScript expression. By default, attributes work exactly 
            like their HTML counterparts.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("div",{class:"scroll-auto bg-black"},"{ 'class': `scroll-auto bg-black` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{trim:!0},"{ 'trim': true }",[...this._toNodeList(`
              <button type="button" disabled>Submit</button>
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            Traditional HTML attributes can be assigned string values or 
            no value evaluates as `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("true")]),e.InkRegistry.createText(`.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-code",{trim:!0},"{ 'trim': true }",[...this._toNodeList(`
            <a title={title}>Click</a>
          `)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            Attributes can be assigned variable names.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-code",{trim:!0},"{ 'trim': true }",[...this._toNodeList(`
            <a title=title>Click</a>
          `)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            Variable names do not need to be wrapped in curly braces
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("{}")]),e.InkRegistry.createText(`.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-code",{trim:!0},"{ 'trim': true }",[...this._toNodeList(`
            <a {title}>Click</a>
          `)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            Attributes with the same name as a variable can be assigned
            by just wrapping curly braces. ie. 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("{title}")]),e.InkRegistry.createText(`.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("div",{class:"scroll-auto bg-black"},"{ 'class': `scroll-auto bg-black` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{trim:!0,detab:14},"{ 'trim': true, 'detab': 14 }",[...this._toNodeList(`
              <script>
                const attributes = { target: '_blank' };
              </script>
              <a {...attributes}>Click</a>
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            Spread operators can be used to assign multiple attributes.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("div",{class:"scroll-auto bg-black"},"{ 'class': `scroll-auto bg-black` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{numbers:!0,trim:!0,detab:14},"{ 'numbers': true, 'trim': true, 'detab': 14 }",[...this._toNodeList(`
              <script>
                let count = 10
                const metadata = { foo: 'bar', baz: 1, qux: true };
                const data = () => metadata
              </script>
              <a {count} get={data} data-meta={metadata} disable={count < 10}>
                Click
              </a>
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            You can assign any valid JavaScript expression to an attribute.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"conditionals"},"{ 'name': `conditionals` }",[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h3",{class:"tx-t-1 tx-upper tx-22 pt-40 pb-20"},"{ 'class': `tx-t-1 tx-upper tx-22 pt-40 pb-20` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(s("Conditionals")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-app",{title:"Conditionals",class:"py-20"},"{ 'title': `Conditionals`, 'class': `py-20` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{class:"scroll-auto",numbers:!0,trim:!0,detab:14},"{ 'class': `scroll-auto`, 'numbers': true, 'trim': true, 'detab': 14 }",[...this._toNodeList(`
              <if true={count > 10}>
                <p>Count is greater than 10</p>
              <elif true={count < 5} />
                <p>Count is less than 5</p>
              <else />
                <p>Count is between 5 and 10</p>
              </if>
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            Conditionals can be used to show or hide elements based on 
            the value of a variable.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("div",{class:"scroll-auto bg-black"},"{ 'class': `scroll-auto bg-black` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{numbers:!0,trim:!0,detab:14},"{ 'numbers': true, 'trim': true, 'detab': 14 }",[...this._toNodeList(`
              <if true={count > 10}>
                <p>Count is greater than 10</p>
              </if>
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            The basic syntax for an if statement looks like this and can be 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("truesy")]),e.InkRegistry.createText(` or 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("falsey")]),e.InkRegistry.createText(`.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("div",{class:"scroll-auto bg-black"},"{ 'class': `scroll-auto bg-black` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{numbers:!0,trim:!0,detab:14},"{ 'numbers': true, 'trim': true, 'detab': 14 }",[...this._toNodeList(`
              <if false={count > 10}>
                <p>Count is not greater than 10</p>
              </if>
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            You can also use the `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("false")]),e.InkRegistry.createText(`
            attribute to negate the condition.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("div",{class:"scroll-auto bg-black"},"{ 'class': `scroll-auto bg-black` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{numbers:!0,trim:!0,detab:14},"{ 'numbers': true, 'trim': true, 'detab': 14 }",[...this._toNodeList(`
              <if true={count > 10}>
                <p>Count is greater than 10</p>
              <else />
                <p>Count is less than or equal to 10</p>
              </if>
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            You can use the `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("else")]),e.InkRegistry.createText(` block to 
            show content when the condition is false.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-code",{numbers:!0,trim:!0,detab:12},"{ 'numbers': true, 'trim': true, 'detab': 12 }",[...this._toNodeList(`
            <if true={count > 10}>
              <p>Count is greater than 10</p>
            <elif true={count < 5} />
              <p>Count is less than 5</p>
            </if>
          `)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            You can use the `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("elif")]),e.InkRegistry.createText(` block to 
            show content when the previous condition is false.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"iterations"},"{ 'name': `iterations` }",[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h3",{class:"tx-t-1 tx-upper tx-22 pt-40 pb-20"},"{ 'class': `tx-t-1 tx-upper tx-22 pt-40 pb-20` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(s("Iterations")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-app",{title:"Each",class:"py-20"},"{ 'title': `Each`, 'class': `py-20` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{class:"scroll-auto",numbers:!0,trim:!0,detab:14},"{ 'class': `scroll-auto`, 'numbers': true, 'trim': true, 'detab': 14 }",[...this._toNodeList(`
              <each key=index value=article from=articles>
                <h1>#{index + 1} {article.title}</h1>
                <p>{article.body}</p>
              </each>
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            The `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("<each>")]),e.InkRegistry.createText(` block can be used 
            to iterate over an array of items or objects.
            The `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("from")]),e.InkRegistry.createText(` attribute value is 
            required and can be an array, object or JavaScript expression 
            that evaluates to an array or object. Both the 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("key")]),e.InkRegistry.createText(` and 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("value")]),e.InkRegistry.createText(` attributes are optional.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("div",{class:"scroll-auto bg-black"},"{ 'class': `scroll-auto bg-black` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{numbers:!0,trim:!0,detab:14},"{ 'numbers': true, 'trim': true, 'detab': 14 }",[...this._toNodeList(`
              <each value={article} from={articles}>
                <h1>{article.title}</h1>
                <p>{article.body}</p>
              </each>
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            The value of `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("value")]),e.InkRegistry.createText(`, in this 
            case `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("article")]),e.InkRegistry.createText(` can be used 
            only with in the block. This can be any valid JavaScript 
            variable name.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-code",{numbers:!0,trim:!0,detab:12},"{ 'numbers': true, 'trim': true, 'detab': 12 }",[...this._toNodeList(`
            <each key={index} from={[1, 2, 3]}>
              <h1>#{index} ???</h1>
            </each>
          `)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            The value of `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("key")]),e.InkRegistry.createText(`, in this 
            case `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("index")]),e.InkRegistry.createText(` can be used 
            only with in the block. This can be any valid JavaScript 
            variable name.
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("a",{name:"trycatch"},"{ 'name': `trycatch` }",[]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h3",{class:"tx-t-1 tx-upper tx-22 pt-40 pb-20"},"{ 'class': `tx-t-1 tx-upper tx-22 pt-40 pb-20` }",[e.InkRegistry.createText(`
            `,!1),...this._toNodeList(s("Try/Catch")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("ide-app",{title:"Try/Catch Example",class:"py-20"},"{ 'title': `Try/Catch Example`, 'class': `py-20` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("ide-code",{numbers:!0,trim:!0,detab:14},"{ 'numbers': true, 'trim': true, 'detab': 14 }",[...this._toNodeList(`
              <try>
                <p>{mayCauseError()}</p>
              <catch error={e} />
                <p>Error: {e.message}</p>
              </try>
            `)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0,class:"tx-lh-36 py-20"},"{ 'p': true, 'trim': true, 'class': `tx-lh-36 py-20` }",[e.InkRegistry.createText(`
            The `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("<try><catch>")]),e.InkRegistry.createText(` block can 
            be used to catch errors that occur in the block. The 
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("<catch>")]),e.InkRegistry.createText(` block is required and 
            can be used to handle the error.

            The value of `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("error")]),e.InkRegistry.createText(`, in the  
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("<catch>")]),e.InkRegistry.createText(` block in this case
            `,!1),e.InkRegistry.createElement("ide-code",{inline:!0},"{ 'inline': true }",[...this._toNodeList("e")]),e.InkRegistry.createText(` is an 
            `,!1),e.InkRegistry.createElement("ide-code",{lang:"js",inline:!0},"{ 'lang': `js`, 'inline': true }",[...this._toNodeList("Error")]),e.InkRegistry.createText(` object
            that can only be used with in the block. 
          `,!1)]),e.InkRegistry.createText(`

          `,!1),e.InkRegistry.createElement("nav",{class:"flex"},"{ 'class': `flex` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"tx-primary py-40",href:"/ink/docs/getting-started.html"},"{ 'class': `tx-primary py-40`, 'href': `/ink/docs/getting-started.html` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-icon",{name:"chevron-left",theme:"tx-1"},"{ 'name': `chevron-left`, 'theme': `tx-1` }"),e.InkRegistry.createText(`
              `,!1),...this._toNodeList(s("Getting Started")),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("a",{class:"flex-grow tx-right tx-primary py-40",href:"/ink/docs/state-management.html"},"{ 'class': `flex-grow tx-right tx-primary py-40`, 'href': `/ink/docs/state-management.html` }",[e.InkRegistry.createText(`
              `,!1),...this._toNodeList(s("State Management")),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("element-icon",{name:"chevron-right",theme:"tx-1"},"{ 'name': `chevron-right`, 'theme': `tx-1` }"),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("footer",{class:"foot"},"{ 'class': `foot` }",[]),e.InkRegistry.createText(`
        `,!1)]),e.InkRegistry.createText(`
      `,!1)]),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
`,!1)])]}};return se(Ce);})();

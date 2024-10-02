var InkAPI=(()=>{var se=Object.create;var g=Object.defineProperty;var re=Object.getOwnPropertyDescriptor;var ce=Object.getOwnPropertyNames;var ie=Object.getPrototypeOf,ne=Object.prototype.hasOwnProperty;var n=(a,t)=>()=>(t||a((t={exports:{}}).exports,t),t.exports),fe=(a,t)=>{for(var l in t)g(a,l,{get:t[l],enumerable:!0})},Y=(a,t,l,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of ce(t))!ne.call(a,i)&&i!==l&&g(a,i,{get:()=>t[i],enumerable:!(s=re(t,i))||s.enumerable});return a};var R=(a,t,l)=>(l=a!=null?se(ie(a)):{},Y(t||!a||!a.__esModule?g(l,"default",{value:a,enumerable:!0}):l,a)),oe=a=>Y(g({},"__esModule",{value:!0}),a);var _=n(v=>{"use strict";Object.defineProperty(v,"__esModule",{value:!0});var y=class extends Error{static for(t,...l){return l.forEach(function(s){t=t.replace("%s",s)}),new this(t)}static forErrorsFound(t){let l=new this("Invalid Parameters");return l.errors=t,l}static require(t,l,...s){if(!t){for(let i of s)l=l.replace("%s",i);throw new this(l)}}constructor(t,l=500){super(),this.errors={},this.start=0,this.end=0,this.message=t,this.name=this.constructor.name,this.code=l}withCode(t){return this.code=t,this}withPosition(t,l){return this.start=t,this.end=l,this}toJSON(){return{error:!0,code:this.code,message:this.message}}};v.default=y});var I=n(j=>{"use strict";Object.defineProperty(j,"__esModule",{value:!0});var w=class{get length(){return this._elements.size}constructor(t=[]){this._elements=new Set,t.forEach(l=>this._elements.add(l))}add(t){this._elements.add(t)}toArray(){return Array.from(this._elements)}toString(){return Array.from(this._elements).filter(Boolean).map(t=>t.toString()).join("")}};j.default=w});var x=n(D=>{"use strict";Object.defineProperty(D,"__esModule",{value:!0});var xe=new Map;D.default=xe});var S=n(M=>{"use strict";Object.defineProperty(M,"__esModule",{value:!0});var L=class{get value(){return this._escape?this._value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):this._value}constructor(t,l=!1){this._escape=l,this._value=t}toString(){return this.value}};M.default=L});var O=n(m=>{"use strict";var me=m&&m.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(m,"__esModule",{value:!0});var he=me(I()),be=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"],N=class{get attributes(){return this._attributes}get children(){return this._children}get name(){return this._name}get props(){return this._props}constructor(t,l={},s="",i=[]){this._attributes={},this._name=t,this._attributes=l,this._props=s,this._children=new he.default(i)}toString(){let t=Object.entries(this._attributes),l=t.length>0?" "+t.map(([i,o])=>{if(typeof o=="string"&&!/["<>\n]/.test(o))return`${i}="${o}"`;if(typeof o=="boolean")return o?i:""}).join(" "):"";if(be.includes(this._name))return`<${this._name}${l} />`;let s=this._children.toString();return`<${this._name}${l}>${s}</${this._name}>`}};m.default=N});var A=n(h=>{"use strict";var W=h&&h.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(h,"__esModule",{value:!0});var de=W(S()),F=W(O()),P=class{static render(t){return t.filter(Boolean).map(l=>l.toString()).join("")}static registry(t,l=new Set){return t.forEach(s=>{s instanceof F.default&&(["html","head","body"].includes(s.name)||l.add(s),s.name!=="head"&&s.children.length>0&&this.registry(s.children.toArray(),l))}),l}static createElement(t,l,s,i=[]){return new F.default(t,l,s,i)}static createText(t,l=!0){return new de.default(t,l)}};h.default=P});var J=n(b=>{"use strict";var B=b&&b.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(b,"__esModule",{value:!0});var ue=B(_()),C=B(x()),q=B(A()),$=class{bindings(){let t=q.default.registry(this.template());return`{ ${Array.from(t.values()).map((s,i)=>s.props!=="{ }"?`'${i}': ${s.props}`:"").filter(s=>s!=="").join(", ")} }`}render(t={}){C.default.set("props",t||{}),C.default.set("env",Object.assign(Object.assign({},process.env||{}),{BUILD_ID:this.id(),APP_DATA:btoa(JSON.stringify(Object.assign(Object.assign({},Object.fromEntries(C.default.entries())),{env:Object.assign(Object.assign({},Object.fromEntries(Object.entries(process.env||{}).filter(i=>i[0].startsWith("PUBLIC_")))),{BUILD_ID:this.id()})})))}));let l=this.template(),s=q.default.render(l).trim();if(!s.toLowerCase().startsWith("<html"))throw ue.default.for("Document must start with an <html> tag.");return`<!DOCTYPE html>
${s}`}_toNodeList(t){return typeof t=="object"&&typeof t.nodeType=="number"?[t]:Array.isArray(t)&&t.every(l=>typeof l=="object"&&typeof l.nodeType=="number")?t:[q.default.createText(String(t))]}};b.default=$});var G=n(d=>{"use strict";Object.defineProperty(d,"__esModule",{value:!0});d.InkEmitter=void 0;var k=class{emit(t,l){return this}on(t,l){return this}once(t,l){return this}unbind(t,l){return this}};d.InkEmitter=k;var pe=new k;d.default=pe});var H=n(u=>{"use strict";var Te=u&&u.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(u,"__esModule",{value:!0});var ge=Te(x());function ke(a){let t=ge.default.get("env")||{};return a?t[a]||null:t}u.default=ke});var z=n(p=>{"use strict";var Ee=p&&p.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(p,"__esModule",{value:!0});p.default=ve;var ye=Ee(x());function ve(){return ye.default.get("props")||{}}});var K=n(r=>{"use strict";var _e=r&&r.__createBinding||(Object.create?function(a,t,l,s){s===void 0&&(s=l);var i=Object.getOwnPropertyDescriptor(t,l);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[l]}}),Object.defineProperty(a,s,i)}:function(a,t,l,s){s===void 0&&(s=l),a[s]=t[l]}),we=r&&r.__setModuleDefault||(Object.create?function(a,t){Object.defineProperty(a,"default",{enumerable:!0,value:t})}:function(a,t){a.default=t}),je=r&&r.__importStar||function(a){if(a&&a.__esModule)return a;var t={};if(a!=null)for(var l in a)l!=="default"&&Object.prototype.hasOwnProperty.call(a,l)&&_e(t,a,l);return we(t,a),t},f=r&&r.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(r,"__esModule",{value:!0});r.InkText=r.InkException=r.InkEmitter=r.InkElement=r.InkRegistry=r.InkDocument=r.InkCollection=r.props=r.emitter=r.env=r.data=void 0;var Ie=f(_());r.InkException=Ie.default;var De=f(I());r.InkCollection=De.default;var Le=f(J());r.InkDocument=Le.default;var Me=f(A());r.InkRegistry=Me.default;var Se=f(O());r.InkElement=Se.default;var V=je(G());r.emitter=V.default;Object.defineProperty(r,"InkEmitter",{enumerable:!0,get:function(){return V.InkEmitter}});var Ne=f(S());r.InkText=Ne.default;var Oe=f(x());r.data=Oe.default;var Pe=f(H());r.env=Pe.default;var Ae=f(z());r.props=Ae.default});var U=n((Qe,Q)=>{Q.exports={...K()}});var qe={};fe(qe,{default:()=>E});var e=R(U()),T=R(U());var c=function(a,...t){let l=Ce(a);for(let s=0;s<t.length;s++)l=l.replace("%s",String(t[s]));return l},Ce=function(a){return a};var E=class extends e.InkDocument{id(){return"abf141ff08e3db04b6fa"}styles(){return`@ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;`}template(){let t="/ink/panel.html",l=c("Ink UI - Web Components Meets Atomic Styles."),s=c("Ink UI atomically generates CSS styles and provides out of box web components."),i=()=>{document.querySelector("panel-layout").toggle("left")},o={icon:"book",label:"Docs"},X={x:10,y:20},Z='<h1><strong style="color: green">Hello</strong> World</h1>',ee=["https://images.wsj.net/im-580612/8SR","https://images.wsj.net/im-580612/8SR"],te=["Item 1","Item 2"],ae={name:"John Doe",age:25},le=[{id:2,name:"Jane Doe",age:25}],$e=["bg-t-2","bg-t-3"];return[e.InkRegistry.createText(`
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
            `,!1),...this._toNodeList(c("Formats")),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("section",{class:"flex flex-wrap gap-10"},"{ 'class': `flex flex-wrap gap-10` }",[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("format-code",{lang:"js"},"{ 'lang': `js` }",[e.InkRegistry.createText("compiler.render('./page.ink')",!1)]),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/code.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/format/code.html` }",[e.InkRegistry.createText(`
                Code
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("format-color",{"box-md":!0,"text-md":!0,value:"red"},"{ 'box-md': true, 'text-md': true, 'value': `red` }"),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/color.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/format/color.html` }",[e.InkRegistry.createText(`
                Color
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("format-country",{"flag-md":!0,"text-md":!0,value:"us"},"{ 'flag-md': true, 'text-md': true, 'value': `us` }"),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/country.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/format/country.html` }",[e.InkRegistry.createText(`
                Country
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("format-currency",{"flag-lg":!0,"text-lg":!0,value:"usd"},"{ 'flag-lg': true, 'text-lg': true, 'value': `usd` }"),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/currency.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/format/currency.html` }",[e.InkRegistry.createText(`
                Currency
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("format-date",{format:"MMMM D YYYY, h:mm:ss a"},"{ 'format': `MMMM D YYYY, h:mm:ss a` }"),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/date.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/format/date.html` }",[e.InkRegistry.createText(`
                Date
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("format-email",{primary:!0,underline:!0,md:!0,value:"john@doe.com"},"{ 'primary': true, 'underline': true, 'md': true, 'value': `john@doe.com` }"),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/email.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/format/email.html` }",[e.InkRegistry.createText(`
                Email
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                10 + 29 + 20 = 
                `,!1),e.InkRegistry.createElement("format-formula",{value:"29",formula:"{x} + {this} + {y}",data:X,bold:!0},"{ 'value': `29`, 'formula': `{x} + {this} + {y}`, 'data': variables, 'bold': true }"),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/formula.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/format/formula.html` }",[e.InkRegistry.createText(`
                Formula
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("format-html",{value:Z},"{ 'value': html }"),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/html.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/format/html.html` }",[e.InkRegistry.createText(`
                HTML
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("format-image",{width:"70",value:"https://images.wsj.net/im-580612/8SR"},"{ 'width': `70`, 'value': `https://images.wsj.net/im-580612/8SR` }"),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/image.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/format/image.html` }",[e.InkRegistry.createText(`
                Image
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("format-imagelist",{width:"70",value:ee},"{ 'width': `70`, 'value': images }"),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/imagelist.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/format/imagelist.html` }",[e.InkRegistry.createText(`
                Imagelist
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("format-json",{value:o},"{ 'value': json }"),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/json.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/format/json.html` }",[e.InkRegistry.createText(`
                JSON
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("format-link",{secondary:!0,underline:!0,md:!0,target:"_blank",value:"https://iamawesome.com/"},"{ 'secondary': true, 'underline': true, 'md': true, 'target': `_blank`, 'value': `https://iamawesome.com/` }"),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/link.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/format/link.html` }",[e.InkRegistry.createText(`
                Link
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("format-list",{value:te,item:"tx-lh-36"},"{ 'value': list, 'item': `tx-lh-36` }"),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/list.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/format/list.html` }",[e.InkRegistry.createText(`
                List
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("format-markdown",{value:"**Hello** World"},"{ 'value': `**Hello** World` }"),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/markdown.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/format/markdown.html` }",[e.InkRegistry.createText(`
                Markdown
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("format-metadata",{value:ae,padding:"10",align:"center","background-theme":"bg-1","stripe-theme":"bg-2","border-theme":"black",format:!0},"{ 'value': metadata, 'padding': `10`, 'align': `center`, 'background-theme': `bg-1`, 'stripe-theme': `bg-2`, 'border-theme': `black`, 'format': true }"),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/metadata.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/format/metadata.html` }",[e.InkRegistry.createText(`
                Metadata
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("format-number",{value:"12345.67",separator:",",decimal:".",decimals:2},"{ 'value': `12345.67`, 'separator': `,`, 'decimal': `.`, 'decimals': 2 }"),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/number.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/format/number.html` }",[e.InkRegistry.createText(`
                Number
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("format-overflow",{value:"Lorem Ipsum",length:8,hellip:!0},"{ 'value': `Lorem Ipsum`, 'length': 8, 'hellip': true }"),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/overflow.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/format/overflow.html` }",[e.InkRegistry.createText(`
                Overflow
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("format-phone",{value:"+63 (917) 555-2424"},"{ 'value': `+63 (917) 555-2424` }"),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/phone.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/format/phone.html` }",[e.InkRegistry.createText(`
                Phone
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("format-rating",{class:"tx-warning",value:"3.5",max:5,remainder:!0,round:"floor"},"{ 'class': `tx-warning`, 'value': `3.5`, 'max': 5, 'remainder': true, 'round': `floor` }"),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/rating.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/format/rating.html` }",[e.InkRegistry.createText(`
                Rating
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("format-separated",{value:["Foo","bar"],separator:"line"},"{ 'value': ['Foo', 'bar'], 'separator': `line` }"),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/separated.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/format/separated.html` }",[e.InkRegistry.createText(`
                Separated
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("format-table",{value:le,padding:"10",align:"center","background-theme":"bg-1","stripe-theme":"bg-2","header-theme":"bg-2","border-theme":"black"},"{ 'value': table, 'padding': `10`, 'align': `center`, 'background-theme': `bg-1`, 'stripe-theme': `bg-2`, 'header-theme': `bg-2`, 'border-theme': `black` }"),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/table.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/format/table.html` }",[e.InkRegistry.createText(`
                Table
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("format-taglist",{value:["Foo","bar"],pill:!0},"{ 'value': ['Foo', 'bar'], 'pill': true }"),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/taglist.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/format/taglist.html` }",[e.InkRegistry.createText(`
                Taglist
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("format-text",{value:"i am a title",capital:!0},"{ 'value': `i am a title`, 'capital': true }"),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/text.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/format/text.html` }",[e.InkRegistry.createText(`
                Text
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("div",{class:"basis-third-10 lg-basis-half-10 md-basis-full"},"{ 'class': `basis-third-10 lg-basis-half-10 md-basis-full` }",[e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("div",{class:"bg-t-3 h-120 flex flex-center"},"{ 'class': `bg-t-3 h-120 flex flex-center` }",[e.InkRegistry.createText(`
                `,!1),e.InkRegistry.createElement("format-yesno",{value:!0},"{ 'value': true }"),e.InkRegistry.createText(`
              `,!1)]),e.InkRegistry.createText(`
              `,!1),e.InkRegistry.createElement("a",{class:"block tx-center tx-white p-10 b-solid b-t-3 b-1",href:"/ink/ui/format/yesno.html"},"{ 'class': `block tx-center tx-white p-10 b-solid b-t-3 b-1`, 'href': `/ink/ui/format/yesno.html` }",[e.InkRegistry.createText(`
                Yesno
              `,!1)]),e.InkRegistry.createText(`
            `,!1)]),e.InkRegistry.createText(`
          `,!1)]),e.InkRegistry.createText(`
        `,!1)]),e.InkRegistry.createText(`
      `,!1)]),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
`,!1)])]}};return oe(qe);})();

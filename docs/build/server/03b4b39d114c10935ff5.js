var InkAPI=(()=>{var X=Object.create;var x=Object.defineProperty;var Z=Object.getOwnPropertyDescriptor;var ee=Object.getOwnPropertyNames;var te=Object.getPrototypeOf,re=Object.prototype.hasOwnProperty;var c=(r,t)=>()=>(t||r((t={exports:{}}).exports,t),t.exports),se=(r,t)=>{for(var s in t)x(r,s,{get:t[s],enumerable:!0})},R=(r,t,s,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of ee(t))!re.call(r,i)&&i!==s&&x(r,i,{get:()=>t[i],enumerable:!(n=Z(t,i))||n.enumerable});return r};var J=(r,t,s)=>(s=r!=null?X(te(r)):{},R(t||!r||!r.__esModule?x(s,"default",{value:r,enumerable:!0}):s,r)),ne=r=>R(x({},"__esModule",{value:!0}),r);var w=c(E=>{"use strict";Object.defineProperty(E,"__esModule",{value:!0});var T=class extends Error{static for(t,...s){return s.forEach(function(n){t=t.replace("%s",n)}),new this(t)}static forErrorsFound(t){let s=new this("Invalid Parameters");return s.errors=t,s}static require(t,s,...n){if(!t){for(let i of n)s=s.replace("%s",i);throw new this(s)}}constructor(t,s=500){super(),this.errors={},this.start=0,this.end=0,this.message=t,this.name=this.constructor.name,this.code=s}withCode(t){return this.code=t,this}withPosition(t,s){return this.start=t,this.end=s,this}toJSON(){return{error:!0,code:this.code,message:this.message}}};E.default=T});var I=c(j=>{"use strict";Object.defineProperty(j,"__esModule",{value:!0});var v=class{get length(){return this._elements.size}constructor(t=[]){this._elements=new Set,t.forEach(s=>this._elements.add(s))}add(t){this._elements.add(t)}toArray(){return Array.from(this._elements)}toString(){return Array.from(this._elements).filter(Boolean).map(t=>t.toString()).join("")}};j.default=v});var f=c(D=>{"use strict";Object.defineProperty(D,"__esModule",{value:!0});var ae=new Map;D.default=ae});var M=c(P=>{"use strict";Object.defineProperty(P,"__esModule",{value:!0});var O=class{get value(){return this._escape?this._value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):this._value}constructor(t,s=!1){this._escape=s,this._value=t}toString(){return this.value}};P.default=O});var $=c(p=>{"use strict";var ie=p&&p.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(p,"__esModule",{value:!0});var ce=ie(I()),le=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"],q=class{get attributes(){return this._attributes}get children(){return this._children}get name(){return this._name}get props(){return this._props}constructor(t,s={},n="",i=[]){this._attributes={},this._name=t,this._attributes=s,this._props=n,this._children=new ce.default(i)}toString(){let t=Object.entries(this._attributes),s=t.length>0?" "+t.map(([i,u])=>{if(typeof u=="string"&&!/["<>\n]/.test(u))return`${i}="${u}"`;if(typeof u=="boolean")return u?i:""}).join(" "):"";if(le.includes(this._name))return`<${this._name}${s} />`;let n=this._children.toString();return`<${this._name}${s}>${n}</${this._name}>`}};p.default=q});var S=c(h=>{"use strict";var z=h&&h.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(h,"__esModule",{value:!0});var oe=z(M()),W=z($()),A=class{static render(t){return t.filter(Boolean).map(s=>s.toString()).join("")}static registry(t,s=new Set){return t.forEach(n=>{n instanceof W.default&&(["html","head","body"].includes(n.name)||s.add(n),n.name!=="head"&&n.children.length>0&&this.registry(n.children.toArray(),s))}),s}static createElement(t,s,n,i=[]){return new W.default(t,s,n,i)}static createText(t,s=!0){return new oe.default(t,s)}};h.default=A});var F=c(m=>{"use strict";var U=m&&m.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(m,"__esModule",{value:!0});var ue=U(w()),L=U(f()),B=U(S()),C=class{bindings(){let t=B.default.registry(this.template());return`{ ${Array.from(t.values()).map((n,i)=>n.props!=="{ }"?`'${i}': ${n.props}`:"").filter(n=>n!=="").join(", ")} }`}render(t={}){L.default.set("props",t||{}),L.default.set("env",Object.assign(Object.assign({},process.env||{}),{BUILD_ID:this.id(),APP_DATA:btoa(JSON.stringify(Object.assign(Object.assign({},Object.fromEntries(L.default.entries())),{env:Object.assign(Object.assign({},Object.fromEntries(Object.entries(process.env||{}).filter(i=>i[0].startsWith("PUBLIC_")))),{BUILD_ID:this.id()})})))}));let s=this.template(),n=B.default.render(s).trim();if(!n.toLowerCase().startsWith("<html"))throw ue.default.for("Document must start with an <html> tag.");return`<!DOCTYPE html>
${n}`}_toNodeList(t){return typeof t=="object"&&typeof t.nodeType=="number"?[t]:Array.isArray(t)&&t.every(s=>typeof s=="object"&&typeof s.nodeType=="number")?t:[B.default.createText(String(t))]}};m.default=C});var V=c(d=>{"use strict";Object.defineProperty(d,"__esModule",{value:!0});d.InkEmitter=void 0;var b=class{emit(t,s){return this}on(t,s){return this}once(t,s){return this}unbind(t,s){return this}};d.InkEmitter=b;var fe=new b;d.default=fe});var Y=c(_=>{"use strict";var pe=_&&_.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(_,"__esModule",{value:!0});var he=pe(f());function me(r){let t=he.default.get("env")||{};return r?t[r]||null:t}_.default=me});var G=c(g=>{"use strict";var de=g&&g.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(g,"__esModule",{value:!0});g.default=ge;var _e=de(f());function ge(){return _e.default.get("props")||{}}});var K=c(a=>{"use strict";var xe=a&&a.__createBinding||(Object.create?function(r,t,s,n){n===void 0&&(n=s);var i=Object.getOwnPropertyDescriptor(t,s);(!i||("get"in i?!t.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return t[s]}}),Object.defineProperty(r,n,i)}:function(r,t,s,n){n===void 0&&(n=s),r[n]=t[s]}),be=a&&a.__setModuleDefault||(Object.create?function(r,t){Object.defineProperty(r,"default",{enumerable:!0,value:t})}:function(r,t){r.default=t}),ke=a&&a.__importStar||function(r){if(r&&r.__esModule)return r;var t={};if(r!=null)for(var s in r)s!=="default"&&Object.prototype.hasOwnProperty.call(r,s)&&xe(t,r,s);return be(t,r),t},l=a&&a.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(a,"__esModule",{value:!0});a.InkText=a.InkException=a.InkEmitter=a.InkElement=a.InkRegistry=a.InkDocument=a.InkCollection=a.props=a.emitter=a.env=a.data=void 0;var ye=l(w());a.InkException=ye.default;var Te=l(I());a.InkCollection=Te.default;var Ee=l(F());a.InkDocument=Ee.default;var we=l(S());a.InkRegistry=we.default;var ve=l($());a.InkElement=ve.default;var H=ke(V());a.emitter=H.default;Object.defineProperty(a,"InkEmitter",{enumerable:!0,get:function(){return H.InkEmitter}});var je=l(M());a.InkText=je.default;var Ie=l(f());a.data=Ie.default;var De=l(Y());a.env=De.default;var Oe=l(G());a.props=Oe.default});var N=c((ze,Q)=>{Q.exports={...K()}});var Me={};se(Me,{default:()=>y});var e=J(N()),o=J(N());var k=function(r,...t){let s=Pe(r);for(let n=0;n<t.length;n++)s=s.replace("%s",String(t[n]));return s},Pe=function(r){return r};var y=class extends e.InkDocument{id(){return"03b4b39d114c10935ff5"}styles(){return`@ink theme;
  @ink reset;
  @ink fouc-opacity;
  @ink utilities;`}template(){let t="/ink/500.html",s=k("Oops... - Ink - The reactive web component template engine."),n=k("Ink is a template engine hat generates web components and support reactivity."),{error:i="Unknown Error"}=(0,o.props)();return[e.InkRegistry.createText(`
`,!1),e.InkRegistry.createElement("html",{},"{ }",[e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("head",{},"{ }",[e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{charset:"utf-8"},"{ 'charset': `utf-8` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"},"{ 'name': `viewport`, 'content': `width=device-width, initial-scale=1` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("title",{},"{ }",[...this._toNodeList(s)]),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"description",content:n},"{ 'name': `description`, 'content': description }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{property:"og:title",content:s},"{ 'property': `og:title`, 'content': title }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{property:"og:description",content:n},"{ 'property': `og:description`, 'content': description }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{property:"og:image",content:"https://stackpress.github.io/ink/ink-logo.png"},"{ 'property': `og:image`, 'content': `https://stackpress.github.io/ink/ink-logo.png` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{property:"og:url",content:`https://stackpress.github.io/ink${t}`},"{ 'property': `og:url`, 'content': `https://stackpress.github.io/ink${url}` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{property:"og:type",content:"website"},"{ 'property': `og:type`, 'content': `website` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:card",content:"summary"},"{ 'name': `twitter:card`, 'content': `summary` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:site",content:"@stackpress"},"{ 'name': `twitter:site`, 'content': `@stackpress` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:title",content:s},"{ 'name': `twitter:title`, 'content': title }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:description",content:n},"{ 'name': `twitter:description`, 'content': description }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("meta",{name:"twitter:image",content:"https://stackpress.github.io/ink/ink-logo.png"},"{ 'name': `twitter:image`, 'content': `https://stackpress.github.io/ink/ink-logo.png` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"favicon",href:"/ink/favicon.ico"},"{ 'rel': `favicon`, 'href': `/ink/favicon.ico` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"shortcut icon",type:"image/png",href:"/ink/favicon.png"},"{ 'rel': `shortcut icon`, 'type': `image/png`, 'href': `/ink/favicon.png` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"},"{ 'rel': `stylesheet`, 'type': `text/css`, 'href': `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"stylesheet",media:"(prefers-color-scheme:light)",href:"https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.16.0/cdn/themes/light.css"},"{ 'rel': `stylesheet`, 'media': `(prefers-color-scheme:light)`, 'href': `https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.16.0/cdn/themes/light.css` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"stylesheet",media:"(prefers-color-scheme:dark)",href:"https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.16.0/cdn/themes/dark.css"},"{ 'rel': `stylesheet`, 'media': `(prefers-color-scheme:dark)`, 'href': `https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.16.0/cdn/themes/dark.css` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"stylesheet",type:"text/css",href:"/ink/styles/global.css"},"{ 'rel': `stylesheet`, 'type': `text/css`, 'href': `/ink/styles/global.css` }"),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("link",{rel:"stylesheet",type:"text/css",href:`/ink/build/client/${(0,o.env)("BUILD_ID")}.css`},"{ 'rel': `stylesheet`, 'type': `text/css`, 'href': `/ink/build/client/${env('BUILD_ID')}.css` }"),e.InkRegistry.createText(`
  
  `,!1),e.InkRegistry.createElement("script",{"data-app":(0,o.env)("APP_DATA"),src:`/ink/build/client/${(0,o.env)("BUILD_ID")}.js`},"{ 'data-app': env('APP_DATA'), 'src': `/ink/build/client/${env('BUILD_ID')}.js` }"),e.InkRegistry.createText(`
  `,!1),...(0,o.env)("NODE_ENV")==="development"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("script",{src:"/dev.js"},"{ 'src': `/dev.js` }"),e.InkRegistry.createText(`
  `,!1)]:[],e.InkRegistry.createText(`
`,!1)]),e.InkRegistry.createText(`
  `,!1),e.InkRegistry.createElement("body",{class:"light bg-t-0 tx-t-1 tx-arial"},"{ 'class': `light bg-t-0 tx-t-1 tx-arial` }",[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("panel-layout",{},"{ }",[e.InkRegistry.createText(`
      `,!1),e.InkRegistry.createElement("header",{},"{ }",[e.InkRegistry.createElement("menu",{class:"flex flex-center-y px-20 py-15 m-0 bg-t-1"},"{ 'class': `flex flex-center-y px-20 py-15 m-0 bg-t-1` }",[e.InkRegistry.createText(`
  `,!1),...t!=="/ink/index.html"&&t!=="/ink/500.html"?[e.InkRegistry.createText(`
    `,!1),e.InkRegistry.createElement("i",{class:"fas fa-fw fa-bars cursor-pointer py-5 pr-10 none md-inline-block tx-t-1",click:toggle},"{ 'class': `fas fa-fw fa-bars cursor-pointer py-5 pr-10 none md-inline-block tx-t-1`, 'click': toggle }",[]),e.InkRegistry.createText(`
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
      `,!1),e.InkRegistry.createElement("main",{class:"scroll-auto"},"{ 'class': `scroll-auto` }",[e.InkRegistry.createText(`
        `,!1),e.InkRegistry.createElement("div",{class:"p-20 w-calc-full-40"},"{ 'class': `p-20 w-calc-full-40` }",[e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("h1",{class:"pt-10 pb-20"},"{ 'class': `pt-10 pb-20` }",[...this._toNodeList(k("Oops..."))]),e.InkRegistry.createText(`
          `,!1),e.InkRegistry.createElement("i18n-translate",{p:!0,trim:!0},"{ 'p': true, 'trim': true }",[e.InkRegistry.createText(`
            Something went wrong. Please try again later.
          `,!1)]),e.InkRegistry.createText(`
          `,!1),...i?[e.InkRegistry.createText(`
            `,!1),e.InkRegistry.createElement("pre",{class:"bg-black courier tx-lh-22 tx-word-wrap p-10 scroll-x-auto tx-prewrap"},"{ 'class': `bg-black courier tx-lh-22 tx-word-wrap p-10 scroll-x-auto tx-prewrap` }",[...this._toNodeList(i)]),e.InkRegistry.createText(`
          `,!1)]:[],e.InkRegistry.createText(`
        `,!1)]),e.InkRegistry.createText(`
      `,!1)]),e.InkRegistry.createText(`
    `,!1)]),e.InkRegistry.createText(`
  `,!1)]),e.InkRegistry.createText(`
`,!1)])]}};return ne(Me);})();
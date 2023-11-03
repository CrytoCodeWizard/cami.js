var cami=(()=>{var Q=Object.defineProperty;var qe=Object.getOwnPropertyDescriptor;var et=Object.getOwnPropertyNames;var we=Object.getOwnPropertySymbols;var Se=Object.prototype.hasOwnProperty;var tt=Object.prototype.propertyIsEnumerable;var Pe=(t,e,r)=>e in t?Q(t,e,{enumerable:true,configurable:true,writable:true,value:r}):t[e]=r;var Ee=(t,e)=>{for(var r in e||(e={}))if(Se.call(e,r))Pe(t,r,e[r]);if(we)for(var r of we(e)){if(tt.call(e,r))Pe(t,r,e[r])}return t};var rt=(t,e)=>{for(var r in e)Q(t,r,{get:e[r],enumerable:true})};var nt=(t,e,r,n)=>{if(e&&typeof e==="object"||typeof e==="function"){for(let s of et(e))if(!Se.call(t,s)&&s!==r)Q(t,s,{get:()=>e[s],enumerable:!(n=qe(e,s))||n.enumerable})}return t};var st=t=>nt(Q({},"__esModule",{value:true}),t);var se=(t,e,r)=>{return new Promise((n,s)=>{var i=c=>{try{a(r.next(c))}catch(f){s(f)}};var o=c=>{try{a(r.throw(c))}catch(f){s(f)}};var a=c=>c.done?n(c.value):Promise.resolve(c.value).then(i,o);a((r=r.apply(t,e)).next())})};var $t={};rt($t,{ReactiveElement:()=>be,createStore:()=>At,html:()=>Ue});var I=globalThis;var G=I.trustedTypes;var Ne=G?G.createPolicy("lit-html",{createHTML:t=>t}):void 0;var Te="$lit$";var $=`lit$${(Math.random()+"").slice(9)}$`;var He="?"+$;var it=`<${He}>`;var w=document;var F=()=>w.createComment("");var R=t=>null===t||"object"!=typeof t&&"function"!=typeof t;var Ie=Array.isArray;var ot=t=>Ie(t)||"function"==typeof(t==null?void 0:t[Symbol.iterator]);var ie="[ 	\n\f\r]";var H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;var xe=/-->/g;var Oe=/>/g;var v=RegExp(`>|${ie}(?:([^\\s"'>=/]+)(${ie}*=${ie}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g");var ze=/'/g;var De=/"/g;var Fe=/^(?:script|style|textarea|title)$/i;var Re=t=>(e,...r)=>({_$litType$:t,strings:e,values:r});var Ue=Re(1);var bt=Re(2);var U=Symbol.for("lit-noChange");var d=Symbol.for("lit-nothing");var Me=new WeakMap;var b=w.createTreeWalker(w,129);function ke(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==Ne?Ne.createHTML(e):e}var ct=(t,e)=>{const r=t.length-1,n=[];let s,i=2===e?"<svg>":"",o=H;for(let a=0;a<r;a++){const c=t[a];let f,l,u=-1,m=0;for(;m<c.length&&(o.lastIndex=m,l=o.exec(c),null!==l);)m=o.lastIndex,o===H?"!--"===l[1]?o=xe:void 0!==l[1]?o=Oe:void 0!==l[2]?(Fe.test(l[2])&&(s=RegExp("</"+l[2],"g")),o=v):void 0!==l[3]&&(o=v):o===v?">"===l[0]?(o=s!=null?s:H,u=-1):void 0===l[1]?u=-2:(u=o.lastIndex-l[2].length,f=l[1],o=void 0===l[3]?v:'"'===l[3]?De:ze):o===De||o===ze?o=v:o===xe||o===Oe?o=H:(o=v,s=void 0);const A=o===v&&t[a+1].startsWith("/>")?" ":"";i+=o===H?c+it:u>=0?(n.push(f),c.slice(0,u)+Te+c.slice(u)+$+A):c+$+(-2===u?a:A)}return[ke(t,i+(t[r]||"<?>")+(2===e?"</svg>":"")),n]};var k=class t{constructor({strings:e,_$litType$:r},n){let s;this.parts=[];let i=0,o=0;const a=e.length-1,c=this.parts,[f,l]=ct(e,r);if(this.el=t.createElement(f,n),b.currentNode=this.el.content,2===r){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;null!==(s=b.nextNode())&&c.length<a;){if(1===s.nodeType){if(s.hasAttributes())for(const u of s.getAttributeNames())if(u.endsWith(Te)){const m=l[o++],A=s.getAttribute(u).split($),N=/([.?@])?(.*)/.exec(m);c.push({type:1,index:i,name:N[2],strings:A,ctor:"."===N[1]?ae:"?"===N[1]?ue:"@"===N[1]?fe:O}),s.removeAttribute(u)}else u.startsWith($)&&(c.push({type:6,index:i}),s.removeAttribute(u));if(Fe.test(s.tagName)){const u=s.textContent.split($),m=u.length-1;if(m>0){s.textContent=G?G.emptyScript:"";for(let A=0;A<m;A++)s.append(u[A],F()),b.nextNode(),c.push({type:2,index:++i});s.append(u[m],F())}}}else if(8===s.nodeType)if(s.data===He)c.push({type:2,index:i});else{let u=-1;for(;-1!==(u=s.data.indexOf($,u+1));)c.push({type:7,index:i}),u+=$.length-1}i++}}static createElement(e,r){const n=w.createElement("template");return n.innerHTML=e,n}};function x(t,e,r=t,n){var o,a,c;if(e===U)return e;let s=void 0!==n?(o=r._$Co)==null?void 0:o[n]:r._$Cl;const i=R(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==i&&((a=s==null?void 0:s._$AO)==null?void 0:a.call(s,false),void 0===i?s=void 0:(s=new i(t),s._$AT(t,r,n)),void 0!==n?((c=r._$Co)!=null?c:r._$Co=[])[n]=s:r._$Cl=s),void 0!==s&&(e=x(t,s._$AS(t,e.values),s,n)),e}var ce=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var f;const{el:{content:r},parts:n}=this._$AD,s=((f=e==null?void 0:e.creationScope)!=null?f:w).importNode(r,true);b.currentNode=s;let i=b.nextNode(),o=0,a=0,c=n[0];for(;void 0!==c;){if(o===c.index){let l;2===c.type?l=new B(i,i.nextSibling,this,e):1===c.type?l=new c.ctor(i,c.name,c.strings,this,e):6===c.type&&(l=new le(i,this,e)),this._$AV.push(l),c=n[++a]}o!==(c==null?void 0:c.index)&&(i=b.nextNode(),o++)}return b.currentNode=w,s}p(e){let r=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(e,n,r),r+=n.strings.length-2):n._$AI(e[r])),r++}};var B=class t{get _$AU(){var e,r;return(r=(e=this._$AM)==null?void 0:e._$AU)!=null?r:this._$Cv}constructor(e,r,n,s){var i;this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=n,this.options=s,this._$Cv=(i=s==null?void 0:s.isConnected)!=null?i:true}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return void 0!==r&&11===(e==null?void 0:e.nodeType)&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=x(this,e,r),R(e)?e===d||null==e||""===e?(this._$AH!==d&&this._$AR(),this._$AH=d):e!==this._$AH&&e!==U&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):ot(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==d&&R(this._$AH)?this._$AA.nextSibling.data=e:this.$(w.createTextNode(e)),this._$AH=e}g(e){var i;const{values:r,_$litType$:n}=e,s="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=k.createElement(ke(n.h,n.h[0]),this.options)),n);if(((i=this._$AH)==null?void 0:i._$AD)===s)this._$AH.p(r);else{const o=new ce(s,this),a=o.u(this.options);o.p(r),this.$(a),this._$AH=o}}_$AC(e){let r=Me.get(e.strings);return void 0===r&&Me.set(e.strings,r=new k(e)),r}T(e){Ie(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,s=0;for(const i of e)s===r.length?r.push(n=new t(this.k(F()),this.k(F()),this,this.options)):n=r[s],n._$AI(i),s++;s<r.length&&(this._$AR(n&&n._$AB.nextSibling,s),r.length=s)}_$AR(e=this._$AA.nextSibling,r){var n;for((n=this._$AP)==null?void 0:n.call(this,false,true,r);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var r;void 0===this._$AM&&(this._$Cv=e,(r=this._$AP)==null?void 0:r.call(this,e))}};var O=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,n,s,i){this.type=1,this._$AH=d,this._$AN=void 0,this.element=e,this.name=r,this._$AM=s,this.options=i,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=d}_$AI(e,r=this,n,s){const i=this.strings;let o=false;if(void 0===i)e=x(this,e,r,0),o=!R(e)||e!==this._$AH&&e!==U,o&&(this._$AH=e);else{const a=e;let c,f;for(e=i[0],c=0;c<i.length-1;c++)f=x(this,a[n+c],r,c),f===U&&(f=this._$AH[c]),o||(o=!R(f)||f!==this._$AH[c]),f===d?e=d:e!==d&&(e+=(f!=null?f:"")+i[c+1]),this._$AH[c]=f}o&&!s&&this.j(e)}j(e){e===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}};var ae=class extends O{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===d?void 0:e}};var ue=class extends O{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==d)}};var fe=class extends O{constructor(e,r,n,s,i){super(e,r,n,s,i),this.type=5}_$AI(e,r=this){var o;if((e=(o=x(this,e,r,0))!=null?o:d)===U)return;const n=this._$AH,s=e===d&&n!==d||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==d&&(n===d||s);s&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r,n;"function"==typeof this._$AH?this._$AH.call((n=(r=this.options)==null?void 0:r.host)!=null?n:this.element,e):this._$AH.handleEvent(e)}};var le=class{constructor(e,r,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){x(this,e)}};var oe=I.litHtmlPolyfillSupport;var Ce;oe==null?void 0:oe(k,B),((Ce=I.litHtmlVersions)!=null?Ce:I.litHtmlVersions=[]).push("3.0.0");var Be=(t,e,r)=>{var i,o;const n=(i=r==null?void 0:r.renderBefore)!=null?i:e;let s=n._$litPart$;if(void 0===s){const a=(o=r==null?void 0:r.renderBefore)!=null?o:null;n._$litPart$=s=new B(e.insertBefore(F(),a),a,void 0,r!=null?r:{})}return s._$AI(t),s};var Qe=Symbol.for("immer-nothing");var We=Symbol.for("immer-draftable");var p=Symbol.for("immer-state");var at=true?[function(t){return`The plugin for '${t}' has not been loaded into Immer. To enable the plugin, import and call \`enable${t}()\` when initializing your application.`},function(t){return`produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${t}'`},"This object has been frozen and should not be mutated",function(t){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+t},"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.","Immer forbids circular references","The first or second argument to `produce` must be a function","The third argument to `produce` must be a function or undefined","First argument to `createDraft` must be a plain object, an array, or an immerable object","First argument to `finishDraft` must be a draft returned by `createDraft`",function(t){return`'current' expects a draft, got: ${t}`},"Object.defineProperty() cannot be used on an Immer draft","Object.setPrototypeOf() cannot be used on an Immer draft","Immer only supports deleting array indices","Immer only supports setting array indices and the 'length' property",function(t){return`'original' expects a draft, got: ${t}`}]:[];function _(t,...e){if(true){const r=at[t];const n=typeof r==="function"?r.apply(null,e):r;throw new Error(`[Immer] ${n}`)}throw new Error(`[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`)}var z=Object.getPrototypeOf;function D(t){return!!t&&!!t[p]}function S(t){var e;if(!t)return false;return Ge(t)||Array.isArray(t)||!!t[We]||!!((e=t.constructor)==null?void 0:e[We])||Z(t)||q(t)}var ut=Object.prototype.constructor.toString();function Ge(t){if(!t||typeof t!=="object")return false;const e=z(t);if(e===null){return true}const r=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;if(r===Object)return true;return typeof r=="function"&&Function.toString.call(r)===ut}function W(t,e){if(Y(t)===0){Object.entries(t).forEach(([r,n])=>{e(r,n,t)})}else{t.forEach((r,n)=>e(n,r,t))}}function Y(t){const e=t[p];return e?e.type_:Array.isArray(t)?1:Z(t)?2:q(t)?3:0}function _e(t,e){return Y(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function Ke(t,e,r){const n=Y(t);if(n===2)t.set(e,r);else if(n===3){t.add(r)}else t[e]=r}function ft(t,e){if(t===e){return t!==0||1/t===1/e}else{return t!==t&&e!==e}}function Z(t){return t instanceof Map}function q(t){return t instanceof Set}function P(t){return t.copy_||t.base_}function pe(t,e){if(Z(t)){return new Map(t)}if(q(t)){return new Set(t)}if(Array.isArray(t))return Array.prototype.slice.call(t);if(!e&&Ge(t)){if(!z(t)){const s=Object.create(null);return Object.assign(s,t)}return Ee({},t)}const r=Object.getOwnPropertyDescriptors(t);delete r[p];let n=Reflect.ownKeys(r);for(let s=0;s<n.length;s++){const i=n[s];const o=r[i];if(o.writable===false){o.writable=true;o.configurable=true}if(o.get||o.set)r[i]={configurable:true,writable:true,enumerable:o.enumerable,value:t[i]}}return Object.create(z(t),r)}function $e(t,e=false){if(ee(t)||D(t)||!S(t))return t;if(Y(t)>1){t.set=t.add=t.clear=t.delete=lt}Object.freeze(t);if(e)W(t,(r,n)=>$e(n,true),true);return t}function lt(){_(2)}function ee(t){return Object.isFrozen(t)}var ht={};function E(t){const e=ht[t];if(!e){_(0,t)}return e}var V;function Je(){return V}function dt(t,e){return{drafts_:[],parent_:t,immer_:e,canAutoFreeze_:true,unfinalizedDrafts_:0}}function Ve(t,e){if(e){E("Patches");t.patches_=[];t.inversePatches_=[];t.patchListener_=e}}function ye(t){me(t);t.drafts_.forEach(_t);t.drafts_=null}function me(t){if(t===V){V=t.parent_}}function Le(t){return V=dt(V,t)}function _t(t){const e=t[p];if(e.type_===0||e.type_===1)e.revoke_();else e.revoked_=true}function je(t,e){e.unfinalizedDrafts_=e.drafts_.length;const r=e.drafts_[0];const n=t!==void 0&&t!==r;if(n){if(r[p].modified_){ye(e);_(4)}if(S(t)){t=K(e,t);if(!e.parent_)J(e,t)}if(e.patches_){E("Patches").generateReplacementPatches_(r[p].base_,t,e.patches_,e.inversePatches_)}}else{t=K(e,r,[])}ye(e);if(e.patches_){e.patchListener_(e.patches_,e.inversePatches_)}return t!==Qe?t:void 0}function K(t,e,r){if(ee(e))return e;const n=e[p];if(!n){W(e,(s,i)=>Xe(t,n,e,s,i,r),true);return e}if(n.scope_!==t)return e;if(!n.modified_){J(t,n.base_,true);return n.base_}if(!n.finalized_){n.finalized_=true;n.scope_.unfinalizedDrafts_--;const s=n.copy_;let i=s;let o=false;if(n.type_===3){i=new Set(s);s.clear();o=true}W(i,(a,c)=>Xe(t,n,s,a,c,r,o));J(t,s,false);if(r&&t.patches_){E("Patches").generatePatches_(n,r,t.patches_,t.inversePatches_)}}return n.copy_}function Xe(t,e,r,n,s,i,o){if(s===r)_(5);if(D(s)){const a=i&&e&&e.type_!==3&&!_e(e.assigned_,n)?i.concat(n):void 0;const c=K(t,s,a);Ke(r,n,c);if(D(c)){t.canAutoFreeze_=false}else return}else if(o){r.add(s)}if(S(s)&&!ee(s)){if(!t.immer_.autoFreeze_&&t.unfinalizedDrafts_<1){return}K(t,s);if(!e||!e.scope_.parent_)J(t,s)}}function J(t,e,r=false){if(!t.parent_&&t.immer_.autoFreeze_&&t.canAutoFreeze_){$e(e,r)}}function pt(t,e){const r=Array.isArray(t);const n={type_:r?1:0,scope_:e?e.scope_:Je(),modified_:false,finalized_:false,assigned_:{},parent_:e,base_:t,draft_:null,copy_:null,revoke_:null,isManual_:false};let s=n;let i=ve;if(r){s=[n];i=L}const{revoke:o,proxy:a}=Proxy.revocable(s,i);n.draft_=a;n.revoke_=o;return a}var ve={get(t,e){if(e===p)return t;const r=P(t);if(!_e(r,e)){return yt(t,r,e)}const n=r[e];if(t.finalized_||!S(n)){return n}if(n===he(t.base_,e)){de(t);return t.copy_[e]=Ae(n,t)}return n},has(t,e){return e in P(t)},ownKeys(t){return Reflect.ownKeys(P(t))},set(t,e,r){const n=Ye(P(t),e);if(n==null?void 0:n.set){n.set.call(t.draft_,r);return true}if(!t.modified_){const s=he(P(t),e);const i=s==null?void 0:s[p];if(i&&i.base_===r){t.copy_[e]=r;t.assigned_[e]=false;return true}if(ft(r,s)&&(r!==void 0||_e(t.base_,e)))return true;de(t);ge(t)}if(t.copy_[e]===r&&(r!==void 0||e in t.copy_)||Number.isNaN(r)&&Number.isNaN(t.copy_[e]))return true;t.copy_[e]=r;t.assigned_[e]=true;return true},deleteProperty(t,e){if(he(t.base_,e)!==void 0||e in t.base_){t.assigned_[e]=false;de(t);ge(t)}else{delete t.assigned_[e]}if(t.copy_){delete t.copy_[e]}return true},getOwnPropertyDescriptor(t,e){const r=P(t);const n=Reflect.getOwnPropertyDescriptor(r,e);if(!n)return n;return{writable:true,configurable:t.type_!==1||e!=="length",enumerable:n.enumerable,value:r[e]}},defineProperty(){_(11)},getPrototypeOf(t){return z(t.base_)},setPrototypeOf(){_(12)}};var L={};W(ve,(t,e)=>{L[t]=function(){arguments[0]=arguments[0][0];return e.apply(this,arguments)}});L.deleteProperty=function(t,e){if(isNaN(parseInt(e)))_(13);return L.set.call(this,t,e,void 0)};L.set=function(t,e,r){if(e!=="length"&&isNaN(parseInt(e)))_(14);return ve.set.call(this,t[0],e,r,t[0])};function he(t,e){const r=t[p];const n=r?P(r):t;return n[e]}function yt(t,e,r){var s;const n=Ye(e,r);return n?`value`in n?n.value:(s=n.get)==null?void 0:s.call(t.draft_):void 0}function Ye(t,e){if(!(e in t))return void 0;let r=z(t);while(r){const n=Object.getOwnPropertyDescriptor(r,e);if(n)return n;r=z(r)}return void 0}function ge(t){if(!t.modified_){t.modified_=true;if(t.parent_){ge(t.parent_)}}}function de(t){if(!t.copy_){t.copy_=pe(t.base_,t.scope_.immer_.useStrictShallowCopy_)}}var mt=class{constructor(t){this.autoFreeze_=true;this.useStrictShallowCopy_=false;this.produce=(e,r,n)=>{if(typeof e==="function"&&typeof r!=="function"){const i=r;r=e;const o=this;return function a(c=i,...f){return o.produce(c,l=>r.call(this,l,...f))}}if(typeof r!=="function")_(6);if(n!==void 0&&typeof n!=="function")_(7);let s;if(S(e)){const i=Le(this);const o=Ae(e,void 0);let a=true;try{s=r(o);a=false}finally{if(a)ye(i);else me(i)}Ve(i,n);return je(s,i)}else if(!e||typeof e!=="object"){s=r(e);if(s===void 0)s=e;if(s===Qe)s=void 0;if(this.autoFreeze_)$e(s,true);if(n){const i=[];const o=[];E("Patches").generateReplacementPatches_(e,s,i,o);n(i,o)}return s}else _(1,e)};this.produceWithPatches=(e,r)=>{if(typeof e==="function"){return(o,...a)=>this.produceWithPatches(o,c=>e(c,...a))}let n,s;const i=this.produce(e,r,(o,a)=>{n=o;s=a});return[i,n,s]};if(typeof(t==null?void 0:t.autoFreeze)==="boolean")this.setAutoFreeze(t.autoFreeze);if(typeof(t==null?void 0:t.useStrictShallowCopy)==="boolean")this.setUseStrictShallowCopy(t.useStrictShallowCopy)}createDraft(t){if(!S(t))_(8);if(D(t))t=gt(t);const e=Le(this);const r=Ae(t,void 0);r[p].isManual_=true;me(e);return r}finishDraft(t,e){const r=t&&t[p];if(!r||!r.isManual_)_(9);const{scope_:n}=r;Ve(n,e);return je(void 0,n)}setAutoFreeze(t){this.autoFreeze_=t}setUseStrictShallowCopy(t){this.useStrictShallowCopy_=t}applyPatches(t,e){let r;for(r=e.length-1;r>=0;r--){const s=e[r];if(s.path.length===0&&s.op==="replace"){t=s.value;break}}if(r>-1){e=e.slice(r+1)}const n=E("Patches").applyPatches_;if(D(t)){return n(t,e)}return this.produce(t,s=>n(s,e))}};function Ae(t,e){const r=Z(t)?E("MapSet").proxyMap_(t,e):q(t)?E("MapSet").proxySet_(t,e):pt(t,e);const n=e?e.scope_:Je();n.drafts_.push(r);return r}function gt(t){if(!D(t))_(10,t);return Ze(t)}function Ze(t){if(!S(t)||ee(t))return t;const e=t[p];let r;if(e){if(!e.modified_)return e.base_;e.finalized_=true;r=pe(t,e.scope_.immer_.useStrictShallowCopy_)}else{r=pe(t,true)}W(r,(n,s)=>{Ke(r,n,Ze(s))});if(e){e.finalized_=false}return r}var y=new mt;var j=y.produce;var Pt=y.produceWithPatches.bind(y);var St=y.setAutoFreeze.bind(y);var Et=y.setUseStrictShallowCopy.bind(y);var Nt=y.applyPatches.bind(y);var xt=y.createDraft.bind(y);var Ot=y.finishDraft.bind(y);var be=class extends HTMLElement{constructor(){super();this._observables=new Map;this._unsubscribers=new Map;this.store=null;this._effects=[]}observable(e,r){if(this._observables.has(e)){throw new Error(`Observable "${e}" is already defined`)}let n=j(r,s=>{});Object.defineProperty(this,e,{get:()=>n,set:s=>{n=j(s,i=>{});this.react()}});this._observables.set(e,n)}update(e,r){const n=this[e];const s=j(n,r);this[e]=s}computed(e,r){Object.defineProperty(this,e,{get:()=>r.call(this)})}effect(e){const r=e.call(this)||(()=>{});this._effects.push({effectFn:e,cleanup:r})}subscribe(e,r){this.store=r;this.observable(e,r.state[e]);const n=r.subscribe(s=>{this[e]=s[e]});this._unsubscribers.set(e,n)}dispatch(e,r){this.store.dispatch(e,r)}connectedCallback(){this.react()}disconnectedCallback(){this._unsubscribers.forEach(e=>e());this._effects.forEach(({cleanup:e})=>e&&e())}react(){const e=this.template();Be(e,this);this._effects.forEach(({effectFn:r})=>r.call(this))}template(){throw new Error("You have to implement the method template()!")}};var te=null;var At=t=>{if(te){return te}let e=t;let r=[];let n={};let s=[];let i=[];let o=false;const a=window["__REDUX_DEVTOOLS_EXTENSION__"]&&window["__REDUX_DEVTOOLS_EXTENSION__"].connect();const c=h=>{s.push(h)};const f=h=>{r.push(h);return()=>{const g=r.indexOf(h);if(g>-1){r.splice(g,1)}}};const l=(h,g)=>{if(n[h]){throw new Error(`Action type ${h} is already registered.`)}n[h]=g};const u=()=>se(void 0,null,function*(){if(i.length===0){o=false;return}o=true;const{action:h,payload:g}=i.shift();const M=n[h];if(!M){console.warn(`No reducer found for action ${h}`);return}const C={getState:()=>e,dispatch:(T,ne)=>m(T,ne)};const re=s.map(T=>T(C));const X=re.reduce((T,ne)=>ne(T),A);yield X(h,g);u()});const m=(h,g)=>{i.push({action:h,payload:g});if(!o){u()}};const A=(h,g)=>se(void 0,null,function*(){let M;let C=null;M=j(e,re=>{const X=n[h](re,g);if(X instanceof Promise){C=X;return}});if(C){yield C}e=M;N(h);return M});const N=h=>{for(const g of r){g(e,h)}a&&a.send(h,e)};te={state:e,subscribe:f,register:l,dispatch:m,use:c};return te};return st($t);})();
/**
 * @license
 * Copyright (c) 2023 Kenn Costales
 * MIT License
 */
/*! Bundled license information:

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=cami.cdn.js.map

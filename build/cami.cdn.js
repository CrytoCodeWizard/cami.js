var cami=(()=>{var Q=Object.defineProperty;var et=Object.getOwnPropertyDescriptor;var tt=Object.getOwnPropertyNames;var Se=Object.getOwnPropertySymbols;var Pe=Object.prototype.hasOwnProperty;var rt=Object.prototype.propertyIsEnumerable;var ie=(t,e,r)=>e in t?Q(t,e,{enumerable:true,configurable:true,writable:true,value:r}):t[e]=r;var Ee=(t,e)=>{for(var r in e||(e={}))if(Pe.call(e,r))ie(t,r,e[r]);if(Se)for(var r of Se(e)){if(rt.call(e,r))ie(t,r,e[r])}return t};var nt=(t,e)=>{for(var r in e)Q(t,r,{get:e[r],enumerable:true})};var st=(t,e,r,n)=>{if(e&&typeof e==="object"||typeof e==="function"){for(let s of tt(e))if(!Pe.call(t,s)&&s!==r)Q(t,s,{get:()=>e[s],enumerable:!(n=et(e,s))||n.enumerable})}return t};var it=t=>st(Q({},"__esModule",{value:true}),t);var Ne=(t,e,r)=>{ie(t,typeof e!=="symbol"?e+"":e,r);return r};var oe=(t,e,r)=>{return new Promise((n,s)=>{var i=c=>{try{a(r.next(c))}catch(f){s(f)}};var o=c=>{try{a(r.throw(c))}catch(f){s(f)}};var a=c=>c.done?n(c.value):Promise.resolve(c.value).then(i,o);a((r=r.apply(t,e)).next())})};var vt={};nt(vt,{ReactiveElement:()=>re,createStore:()=>$t,html:()=>ke});var I=globalThis;var G=I.trustedTypes;var xe=G?G.createPolicy("lit-html",{createHTML:t=>t}):void 0;var He="$lit$";var $=`lit$${(Math.random()+"").slice(9)}$`;var Ie="?"+$;var ot=`<${Ie}>`;var w=document;var F=()=>w.createComment("");var R=t=>null===t||"object"!=typeof t&&"function"!=typeof t;var Fe=Array.isArray;var ct=t=>Fe(t)||"function"==typeof(t==null?void 0:t[Symbol.iterator]);var ce="[ 	\n\f\r]";var H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;var ze=/-->/g;var De=/>/g;var v=RegExp(`>|${ce}(?:([^\\s"'>=/]+)(${ce}*=${ce}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g");var Oe=/'/g;var Me=/"/g;var Re=/^(?:script|style|textarea|title)$/i;var Ue=t=>(e,...r)=>({_$litType$:t,strings:e,values:r});var ke=Ue(1);var wt=Ue(2);var U=Symbol.for("lit-noChange");var d=Symbol.for("lit-nothing");var Ce=new WeakMap;var b=w.createTreeWalker(w,129);function Be(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==xe?xe.createHTML(e):e}var at=(t,e)=>{const r=t.length-1,n=[];let s,i=2===e?"<svg>":"",o=H;for(let a=0;a<r;a++){const c=t[a];let f,l,u=-1,m=0;for(;m<c.length&&(o.lastIndex=m,l=o.exec(c),null!==l);)m=o.lastIndex,o===H?"!--"===l[1]?o=ze:void 0!==l[1]?o=De:void 0!==l[2]?(Re.test(l[2])&&(s=RegExp("</"+l[2],"g")),o=v):void 0!==l[3]&&(o=v):o===v?">"===l[0]?(o=s!=null?s:H,u=-1):void 0===l[1]?u=-2:(u=o.lastIndex-l[2].length,f=l[1],o=void 0===l[3]?v:'"'===l[3]?Me:Oe):o===Me||o===Oe?o=v:o===ze||o===De?o=H:(o=v,s=void 0);const A=o===v&&t[a+1].startsWith("/>")?" ":"";i+=o===H?c+ot:u>=0?(n.push(f),c.slice(0,u)+He+c.slice(u)+$+A):c+$+(-2===u?a:A)}return[Be(t,i+(t[r]||"<?>")+(2===e?"</svg>":"")),n]};var k=class t{constructor({strings:e,_$litType$:r},n){let s;this.parts=[];let i=0,o=0;const a=e.length-1,c=this.parts,[f,l]=at(e,r);if(this.el=t.createElement(f,n),b.currentNode=this.el.content,2===r){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;null!==(s=b.nextNode())&&c.length<a;){if(1===s.nodeType){if(s.hasAttributes())for(const u of s.getAttributeNames())if(u.endsWith(He)){const m=l[o++],A=s.getAttribute(u).split($),N=/([.?@])?(.*)/.exec(m);c.push({type:1,index:i,name:N[2],strings:A,ctor:"."===N[1]?fe:"?"===N[1]?le:"@"===N[1]?he:z}),s.removeAttribute(u)}else u.startsWith($)&&(c.push({type:6,index:i}),s.removeAttribute(u));if(Re.test(s.tagName)){const u=s.textContent.split($),m=u.length-1;if(m>0){s.textContent=G?G.emptyScript:"";for(let A=0;A<m;A++)s.append(u[A],F()),b.nextNode(),c.push({type:2,index:++i});s.append(u[m],F())}}}else if(8===s.nodeType)if(s.data===Ie)c.push({type:2,index:i});else{let u=-1;for(;-1!==(u=s.data.indexOf($,u+1));)c.push({type:7,index:i}),u+=$.length-1}i++}}static createElement(e,r){const n=w.createElement("template");return n.innerHTML=e,n}};function x(t,e,r=t,n){var o,a,c;if(e===U)return e;let s=void 0!==n?(o=r._$Co)==null?void 0:o[n]:r._$Cl;const i=R(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==i&&((a=s==null?void 0:s._$AO)==null?void 0:a.call(s,false),void 0===i?s=void 0:(s=new i(t),s._$AT(t,r,n)),void 0!==n?((c=r._$Co)!=null?c:r._$Co=[])[n]=s:r._$Cl=s),void 0!==s&&(e=x(t,s._$AS(t,e.values),s,n)),e}var ue=class{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var f;const{el:{content:r},parts:n}=this._$AD,s=((f=e==null?void 0:e.creationScope)!=null?f:w).importNode(r,true);b.currentNode=s;let i=b.nextNode(),o=0,a=0,c=n[0];for(;void 0!==c;){if(o===c.index){let l;2===c.type?l=new B(i,i.nextSibling,this,e):1===c.type?l=new c.ctor(i,c.name,c.strings,this,e):6===c.type&&(l=new de(i,this,e)),this._$AV.push(l),c=n[++a]}o!==(c==null?void 0:c.index)&&(i=b.nextNode(),o++)}return b.currentNode=w,s}p(e){let r=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(e,n,r),r+=n.strings.length-2):n._$AI(e[r])),r++}};var B=class t{get _$AU(){var e,r;return(r=(e=this._$AM)==null?void 0:e._$AU)!=null?r:this._$Cv}constructor(e,r,n,s){var i;this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=n,this.options=s,this._$Cv=(i=s==null?void 0:s.isConnected)!=null?i:true}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return void 0!==r&&11===(e==null?void 0:e.nodeType)&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=x(this,e,r),R(e)?e===d||null==e||""===e?(this._$AH!==d&&this._$AR(),this._$AH=d):e!==this._$AH&&e!==U&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):ct(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==d&&R(this._$AH)?this._$AA.nextSibling.data=e:this.$(w.createTextNode(e)),this._$AH=e}g(e){var i;const{values:r,_$litType$:n}=e,s="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=k.createElement(Be(n.h,n.h[0]),this.options)),n);if(((i=this._$AH)==null?void 0:i._$AD)===s)this._$AH.p(r);else{const o=new ue(s,this),a=o.u(this.options);o.p(r),this.$(a),this._$AH=o}}_$AC(e){let r=Ce.get(e.strings);return void 0===r&&Ce.set(e.strings,r=new k(e)),r}T(e){Fe(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,s=0;for(const i of e)s===r.length?r.push(n=new t(this.k(F()),this.k(F()),this,this.options)):n=r[s],n._$AI(i),s++;s<r.length&&(this._$AR(n&&n._$AB.nextSibling,s),r.length=s)}_$AR(e=this._$AA.nextSibling,r){var n;for((n=this._$AP)==null?void 0:n.call(this,false,true,r);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var r;void 0===this._$AM&&(this._$Cv=e,(r=this._$AP)==null?void 0:r.call(this,e))}};var z=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,n,s,i){this.type=1,this._$AH=d,this._$AN=void 0,this.element=e,this.name=r,this._$AM=s,this.options=i,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=d}_$AI(e,r=this,n,s){const i=this.strings;let o=false;if(void 0===i)e=x(this,e,r,0),o=!R(e)||e!==this._$AH&&e!==U,o&&(this._$AH=e);else{const a=e;let c,f;for(e=i[0],c=0;c<i.length-1;c++)f=x(this,a[n+c],r,c),f===U&&(f=this._$AH[c]),o||(o=!R(f)||f!==this._$AH[c]),f===d?e=d:e!==d&&(e+=(f!=null?f:"")+i[c+1]),this._$AH[c]=f}o&&!s&&this.j(e)}j(e){e===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}};var fe=class extends z{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===d?void 0:e}};var le=class extends z{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==d)}};var he=class extends z{constructor(e,r,n,s,i){super(e,r,n,s,i),this.type=5}_$AI(e,r=this){var o;if((e=(o=x(this,e,r,0))!=null?o:d)===U)return;const n=this._$AH,s=e===d&&n!==d||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==d&&(n===d||s);s&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r,n;"function"==typeof this._$AH?this._$AH.call((n=(r=this.options)==null?void 0:r.host)!=null?n:this.element,e):this._$AH.handleEvent(e)}};var de=class{constructor(e,r,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){x(this,e)}};var ae=I.litHtmlPolyfillSupport;var Te;ae==null?void 0:ae(k,B),((Te=I.litHtmlVersions)!=null?Te:I.litHtmlVersions=[]).push("3.0.0");var We=(t,e,r)=>{var i,o;const n=(i=r==null?void 0:r.renderBefore)!=null?i:e;let s=n._$litPart$;if(void 0===s){const a=(o=r==null?void 0:r.renderBefore)!=null?o:null;n._$litPart$=s=new B(e.insertBefore(F(),a),a,void 0,r!=null?r:{})}return s._$AI(t),s};var Ge=Symbol.for("immer-nothing");var Le=Symbol.for("immer-draftable");var p=Symbol.for("immer-state");var ut=true?[function(t){return`The plugin for '${t}' has not been loaded into Immer. To enable the plugin, import and call \`enable${t}()\` when initializing your application.`},function(t){return`produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${t}'`},"This object has been frozen and should not be mutated",function(t){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+t},"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.","Immer forbids circular references","The first or second argument to `produce` must be a function","The third argument to `produce` must be a function or undefined","First argument to `createDraft` must be a plain object, an array, or an immerable object","First argument to `finishDraft` must be a draft returned by `createDraft`",function(t){return`'current' expects a draft, got: ${t}`},"Object.defineProperty() cannot be used on an Immer draft","Object.setPrototypeOf() cannot be used on an Immer draft","Immer only supports deleting array indices","Immer only supports setting array indices and the 'length' property",function(t){return`'original' expects a draft, got: ${t}`}]:[];function _(t,...e){if(true){const r=ut[t];const n=typeof r==="function"?r.apply(null,e):r;throw new Error(`[Immer] ${n}`)}throw new Error(`[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`)}var D=Object.getPrototypeOf;function O(t){return!!t&&!!t[p]}function P(t){var e;if(!t)return false;return Ke(t)||Array.isArray(t)||!!t[Le]||!!((e=t.constructor)==null?void 0:e[Le])||Z(t)||q(t)}var ft=Object.prototype.constructor.toString();function Ke(t){if(!t||typeof t!=="object")return false;const e=D(t);if(e===null){return true}const r=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;if(r===Object)return true;return typeof r=="function"&&Function.toString.call(r)===ft}function W(t,e){if(Y(t)===0){Object.entries(t).forEach(([r,n])=>{e(r,n,t)})}else{t.forEach((r,n)=>e(n,r,t))}}function Y(t){const e=t[p];return e?e.type_:Array.isArray(t)?1:Z(t)?2:q(t)?3:0}function ye(t,e){return Y(t)===2?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function Je(t,e,r){const n=Y(t);if(n===2)t.set(e,r);else if(n===3){t.add(r)}else t[e]=r}function lt(t,e){if(t===e){return t!==0||1/t===1/e}else{return t!==t&&e!==e}}function Z(t){return t instanceof Map}function q(t){return t instanceof Set}function S(t){return t.copy_||t.base_}function me(t,e){if(Z(t)){return new Map(t)}if(q(t)){return new Set(t)}if(Array.isArray(t))return Array.prototype.slice.call(t);if(!e&&Ke(t)){if(!D(t)){const s=Object.create(null);return Object.assign(s,t)}return Ee({},t)}const r=Object.getOwnPropertyDescriptors(t);delete r[p];let n=Reflect.ownKeys(r);for(let s=0;s<n.length;s++){const i=n[s];const o=r[i];if(o.writable===false){o.writable=true;o.configurable=true}if(o.get||o.set)r[i]={configurable:true,writable:true,enumerable:o.enumerable,value:t[i]}}return Object.create(D(t),r)}function be(t,e=false){if(ee(t)||O(t)||!P(t))return t;if(Y(t)>1){t.set=t.add=t.clear=t.delete=ht}Object.freeze(t);if(e)W(t,(r,n)=>be(n,true),true);return t}function ht(){_(2)}function ee(t){return Object.isFrozen(t)}var dt={};function E(t){const e=dt[t];if(!e){_(0,t)}return e}var L;function Ye(){return L}function _t(t,e){return{drafts_:[],parent_:t,immer_:e,canAutoFreeze_:true,unfinalizedDrafts_:0}}function Ve(t,e){if(e){E("Patches");t.patches_=[];t.inversePatches_=[];t.patchListener_=e}}function ge(t){Ae(t);t.drafts_.forEach(pt);t.drafts_=null}function Ae(t){if(t===L){L=t.parent_}}function je(t){return L=_t(L,t)}function pt(t){const e=t[p];if(e.type_===0||e.type_===1)e.revoke_();else e.revoked_=true}function Xe(t,e){e.unfinalizedDrafts_=e.drafts_.length;const r=e.drafts_[0];const n=t!==void 0&&t!==r;if(n){if(r[p].modified_){ge(e);_(4)}if(P(t)){t=K(e,t);if(!e.parent_)J(e,t)}if(e.patches_){E("Patches").generateReplacementPatches_(r[p].base_,t,e.patches_,e.inversePatches_)}}else{t=K(e,r,[])}ge(e);if(e.patches_){e.patchListener_(e.patches_,e.inversePatches_)}return t!==Ge?t:void 0}function K(t,e,r){if(ee(e))return e;const n=e[p];if(!n){W(e,(s,i)=>Qe(t,n,e,s,i,r),true);return e}if(n.scope_!==t)return e;if(!n.modified_){J(t,n.base_,true);return n.base_}if(!n.finalized_){n.finalized_=true;n.scope_.unfinalizedDrafts_--;const s=n.copy_;let i=s;let o=false;if(n.type_===3){i=new Set(s);s.clear();o=true}W(i,(a,c)=>Qe(t,n,s,a,c,r,o));J(t,s,false);if(r&&t.patches_){E("Patches").generatePatches_(n,r,t.patches_,t.inversePatches_)}}return n.copy_}function Qe(t,e,r,n,s,i,o){if(s===r)_(5);if(O(s)){const a=i&&e&&e.type_!==3&&!ye(e.assigned_,n)?i.concat(n):void 0;const c=K(t,s,a);Je(r,n,c);if(O(c)){t.canAutoFreeze_=false}else return}else if(o){r.add(s)}if(P(s)&&!ee(s)){if(!t.immer_.autoFreeze_&&t.unfinalizedDrafts_<1){return}K(t,s);if(!e||!e.scope_.parent_)J(t,s)}}function J(t,e,r=false){if(!t.parent_&&t.immer_.autoFreeze_&&t.canAutoFreeze_){be(e,r)}}function yt(t,e){const r=Array.isArray(t);const n={type_:r?1:0,scope_:e?e.scope_:Ye(),modified_:false,finalized_:false,assigned_:{},parent_:e,base_:t,draft_:null,copy_:null,revoke_:null,isManual_:false};let s=n;let i=we;if(r){s=[n];i=V}const{revoke:o,proxy:a}=Proxy.revocable(s,i);n.draft_=a;n.revoke_=o;return a}var we={get(t,e){if(e===p)return t;const r=S(t);if(!ye(r,e)){return mt(t,r,e)}const n=r[e];if(t.finalized_||!P(n)){return n}if(n===_e(t.base_,e)){pe(t);return t.copy_[e]=ve(n,t)}return n},has(t,e){return e in S(t)},ownKeys(t){return Reflect.ownKeys(S(t))},set(t,e,r){const n=Ze(S(t),e);if(n==null?void 0:n.set){n.set.call(t.draft_,r);return true}if(!t.modified_){const s=_e(S(t),e);const i=s==null?void 0:s[p];if(i&&i.base_===r){t.copy_[e]=r;t.assigned_[e]=false;return true}if(lt(r,s)&&(r!==void 0||ye(t.base_,e)))return true;pe(t);$e(t)}if(t.copy_[e]===r&&(r!==void 0||e in t.copy_)||Number.isNaN(r)&&Number.isNaN(t.copy_[e]))return true;t.copy_[e]=r;t.assigned_[e]=true;return true},deleteProperty(t,e){if(_e(t.base_,e)!==void 0||e in t.base_){t.assigned_[e]=false;pe(t);$e(t)}else{delete t.assigned_[e]}if(t.copy_){delete t.copy_[e]}return true},getOwnPropertyDescriptor(t,e){const r=S(t);const n=Reflect.getOwnPropertyDescriptor(r,e);if(!n)return n;return{writable:true,configurable:t.type_!==1||e!=="length",enumerable:n.enumerable,value:r[e]}},defineProperty(){_(11)},getPrototypeOf(t){return D(t.base_)},setPrototypeOf(){_(12)}};var V={};W(we,(t,e)=>{V[t]=function(){arguments[0]=arguments[0][0];return e.apply(this,arguments)}});V.deleteProperty=function(t,e){if(isNaN(parseInt(e)))_(13);return V.set.call(this,t,e,void 0)};V.set=function(t,e,r){if(e!=="length"&&isNaN(parseInt(e)))_(14);return we.set.call(this,t[0],e,r,t[0])};function _e(t,e){const r=t[p];const n=r?S(r):t;return n[e]}function mt(t,e,r){var s;const n=Ze(e,r);return n?`value`in n?n.value:(s=n.get)==null?void 0:s.call(t.draft_):void 0}function Ze(t,e){if(!(e in t))return void 0;let r=D(t);while(r){const n=Object.getOwnPropertyDescriptor(r,e);if(n)return n;r=D(r)}return void 0}function $e(t){if(!t.modified_){t.modified_=true;if(t.parent_){$e(t.parent_)}}}function pe(t){if(!t.copy_){t.copy_=me(t.base_,t.scope_.immer_.useStrictShallowCopy_)}}var gt=class{constructor(t){this.autoFreeze_=true;this.useStrictShallowCopy_=false;this.produce=(e,r,n)=>{if(typeof e==="function"&&typeof r!=="function"){const i=r;r=e;const o=this;return function a(c=i,...f){return o.produce(c,l=>r.call(this,l,...f))}}if(typeof r!=="function")_(6);if(n!==void 0&&typeof n!=="function")_(7);let s;if(P(e)){const i=je(this);const o=ve(e,void 0);let a=true;try{s=r(o);a=false}finally{if(a)ge(i);else Ae(i)}Ve(i,n);return Xe(s,i)}else if(!e||typeof e!=="object"){s=r(e);if(s===void 0)s=e;if(s===Ge)s=void 0;if(this.autoFreeze_)be(s,true);if(n){const i=[];const o=[];E("Patches").generateReplacementPatches_(e,s,i,o);n(i,o)}return s}else _(1,e)};this.produceWithPatches=(e,r)=>{if(typeof e==="function"){return(o,...a)=>this.produceWithPatches(o,c=>e(c,...a))}let n,s;const i=this.produce(e,r,(o,a)=>{n=o;s=a});return[i,n,s]};if(typeof(t==null?void 0:t.autoFreeze)==="boolean")this.setAutoFreeze(t.autoFreeze);if(typeof(t==null?void 0:t.useStrictShallowCopy)==="boolean")this.setUseStrictShallowCopy(t.useStrictShallowCopy)}createDraft(t){if(!P(t))_(8);if(O(t))t=At(t);const e=je(this);const r=ve(t,void 0);r[p].isManual_=true;Ae(e);return r}finishDraft(t,e){const r=t&&t[p];if(!r||!r.isManual_)_(9);const{scope_:n}=r;Ve(n,e);return Xe(void 0,n)}setAutoFreeze(t){this.autoFreeze_=t}setUseStrictShallowCopy(t){this.useStrictShallowCopy_=t}applyPatches(t,e){let r;for(r=e.length-1;r>=0;r--){const s=e[r];if(s.path.length===0&&s.op==="replace"){t=s.value;break}}if(r>-1){e=e.slice(r+1)}const n=E("Patches").applyPatches_;if(O(t)){return n(t,e)}return this.produce(t,s=>n(s,e))}};function ve(t,e){const r=Z(t)?E("MapSet").proxyMap_(t,e):q(t)?E("MapSet").proxySet_(t,e):yt(t,e);const n=e?e.scope_:Ye();n.drafts_.push(r);return r}function At(t){if(!O(t))_(10,t);return qe(t)}function qe(t){if(!P(t)||ee(t))return t;const e=t[p];let r;if(e){if(!e.modified_)return e.base_;e.finalized_=true;r=me(t,e.scope_.immer_.useStrictShallowCopy_)}else{r=me(t,true)}W(r,(n,s)=>{Je(r,n,qe(s))});if(e){e.finalized_=false}return r}var y=new gt;var j=y.produce;var Pt=y.produceWithPatches.bind(y);var Et=y.setAutoFreeze.bind(y);var Nt=y.setUseStrictShallowCopy.bind(y);var xt=y.applyPatches.bind(y);var zt=y.createDraft.bind(y);var Dt=y.finishDraft.bind(y);var re=class extends HTMLElement{constructor(){super();this._observables=new Map;this._unsubscribers=new Map;this.store=null;this._effects=[]}observable(e){let r=j(e,s=>{});const n=this.react.bind(this);return{get value(){return r},update:function(s){r=j(r,s);n()}.bind(this)}}computed(e){return{get value(){return e.call(this)}}}effect(e){const r=e.call(this)||(()=>{});this._effects.push({effectFn:e,cleanup:r})}observableAttr(e,r=n=>n){let n=this.getAttribute(e);n=j(n,r);const s=this.observable(n);return s}setObservables(e){Object.keys(e).forEach(r=>{if(this[r]&&typeof this[r].update==="function"){this[r].update(()=>e[r])}})}subscribe(e,r){this.store=e;const n=this.observable(e.state[r]);this._observables.set(r,n);const s=e.subscribe(i=>{this._observables.get(r).update(()=>i[r])});this._unsubscribers.set(r,s);return n}dispatch(e,r){this.store.dispatch(e,r)}connectedCallback(){this.react()}disconnectedCallback(){this._unsubscribers.forEach(e=>e());this._effects.forEach(({cleanup:e})=>e&&e())}react(){const e=this.template();We(e,this);this._effects.forEach(({effectFn:r})=>r.call(this))}template(){throw new Error("You have to implement the method template()!")}};Ne(re,"observedAttributesList",[]);var te=null;var $t=t=>{if(te){return te}let e=t;let r=[];let n={};let s=[];let i=[];let o=false;const a=window["__REDUX_DEVTOOLS_EXTENSION__"]&&window["__REDUX_DEVTOOLS_EXTENSION__"].connect();const c=h=>{s.push(h)};const f=h=>{r.push(h);return()=>{const g=r.indexOf(h);if(g>-1){r.splice(g,1)}}};const l=(h,g)=>{if(n[h]){throw new Error(`Action type ${h} is already registered.`)}n[h]=g};const u=()=>oe(void 0,null,function*(){if(i.length===0){o=false;return}o=true;const{action:h,payload:g}=i.shift();const M=n[h];if(!M){console.warn(`No reducer found for action ${h}`);return}const C={getState:()=>e,dispatch:(T,se)=>m(T,se)};const ne=s.map(T=>T(C));const X=ne.reduce((T,se)=>se(T),A);yield X(h,g);u()});const m=(h,g)=>{i.push({action:h,payload:g});if(!o){u()}};const A=(h,g)=>oe(void 0,null,function*(){let M;let C=null;M=j(e,ne=>{const X=n[h](ne,g);if(X instanceof Promise){C=X;return}});if(C){yield C}e=M;N(h);return M});const N=h=>{for(const g of r){g(e,h)}a&&a.send(h,e)};te={state:e,subscribe:f,register:l,dispatch:m,use:c};return te};return it(vt);})();
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

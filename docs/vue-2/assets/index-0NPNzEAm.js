(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}})();var qs={};var J=Object.freeze({}),O=Array.isArray;function $(e){return e==null}function p(e){return e!=null}function B(e){return e===!0}function Ws(e){return e===!1}function Tt(e){return typeof e=="string"||typeof e=="number"||typeof e=="symbol"||typeof e=="boolean"}function D(e){return typeof e=="function"}function X(e){return e!==null&&typeof e=="object"}var sa=Object.prototype.toString;function se(e){return sa.call(e)==="[object Object]"}function Ks(e){return sa.call(e)==="[object RegExp]"}function bi(e){var t=parseFloat(String(e));return t>=0&&Math.floor(t)===t&&isFinite(e)}function Or(e){return p(e)&&typeof e.then=="function"&&typeof e.catch=="function"}function Gs(e){return e==null?"":Array.isArray(e)||se(e)&&e.toString===sa?JSON.stringify(e,Ys,2):String(e)}function Ys(e,t){return t&&t.__v_isRef?t.value:t}function _t(e){var t=parseFloat(e);return isNaN(t)?e:t}function Y(e,t){for(var r=Object.create(null),a=e.split(","),n=0;n<a.length;n++)r[a[n]]=!0;return t?function(i){return r[i.toLowerCase()]}:function(i){return r[i]}}var Js=Y("slot,component",!0),Xs=Y("key,ref,slot,slot-scope,is");function Re(e,t){var r=e.length;if(r){if(t===e[r-1]){e.length=r-1;return}var a=e.indexOf(t);if(a>-1)return e.splice(a,1)}}var Zs=Object.prototype.hasOwnProperty;function V(e,t){return Zs.call(e,t)}function he(e){var t=Object.create(null);return function(a){var n=t[a];return n||(t[a]=e(a))}}var Vs=/-(\w)/g,re=he(function(e){return e.replace(Vs,function(t,r){return r?r.toUpperCase():""})}),yi=he(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),Qs=/\B([A-Z])/g,Ge=he(function(e){return e.replace(Qs,"-$1").toLowerCase()});function eo(e,t){function r(a){var n=arguments.length;return n?n>1?e.apply(t,arguments):e.call(t,a):e.call(t)}return r._length=e.length,r}function to(e,t){return e.bind(t)}var _i=Function.prototype.bind?to:eo;function zr(e,t){t=t||0;for(var r=e.length-t,a=new Array(r);r--;)a[r]=e[r+t];return a}function E(e,t){for(var r in t)e[r]=t[r];return e}function wi(e){for(var t={},r=0;r<e.length;r++)e[r]&&E(t,e[r]);return t}function M(e,t,r){}var ce=function(e,t,r){return!1},Ci=function(e){return e};function ro(e){return e.reduce(function(t,r){return t.concat(r.staticKeys||[])},[]).join(",")}function Ye(e,t){if(e===t)return!0;var r=X(e),a=X(t);if(r&&a)try{var n=Array.isArray(e),i=Array.isArray(t);if(n&&i)return e.length===t.length&&e.every(function(l,c){return Ye(l,t[c])});if(e instanceof Date&&t instanceof Date)return e.getTime()===t.getTime();if(!n&&!i){var s=Object.keys(e),o=Object.keys(t);return s.length===o.length&&s.every(function(l){return Ye(e[l],t[l])})}else return!1}catch{return!1}else return!r&&!a?String(e)===String(t):!1}function xi(e,t){for(var r=0;r<e.length;r++)if(Ye(e[r],t))return r;return-1}function Zt(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}function Pr(e,t){return e===t?e===0&&1/e!==1/t:e===e||t===t}var Da="data-server-rendered",cr=["component","directive","filter"],ki=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch","renderTracked","renderTriggered"],ae={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:ce,isReservedAttr:ce,isUnknownElement:ce,getTagNamespace:M,parsePlatformTagName:Ci,mustUseProp:ce,async:!0,_lifecycleHooks:ki},$i=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function Si(e){var t=(e+"").charCodeAt(0);return t===36||t===95}function ne(e,t,r,a){Object.defineProperty(e,t,{value:r,enumerable:!1,writable:!0,configurable:!0})}var ao=new RegExp("[^".concat($i.source,".$_\\d]"));function no(e){if(!ao.test(e)){var t=e.split(".");return function(r){for(var a=0;a<t.length;a++){if(!r)return;r=r[t[a]]}return r}}}var io="__proto__"in{},Q=typeof window<"u",fe=Q&&window.navigator.userAgent.toLowerCase(),Le=fe&&/msie|trident/.test(fe),lt=fe&&fe.indexOf("msie 9.0")>0,Ti=fe&&fe.indexOf("edge/")>0;fe&&fe.indexOf("android")>0;var so=fe&&/iphone|ipad|ipod|ios/.test(fe),Ma=fe&&fe.match(/firefox\/(\d+)/),Er={}.watch,Ai=!1;if(Q)try{var Ra={};Object.defineProperty(Ra,"passive",{get:function(){Ai=!0}}),window.addEventListener("test-passive",null,Ra)}catch{}var Pt,Te=function(){return Pt===void 0&&(!Q&&typeof global<"u"?Pt=global.process&&qs.VUE_ENV==="server":Pt=!1),Pt},Vt=Q&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function nt(e){return typeof e=="function"&&/native code/.test(e.toString())}var At=typeof Symbol<"u"&&nt(Symbol)&&typeof Reflect<"u"&&nt(Reflect.ownKeys),wt;typeof Set<"u"&&nt(Set)?wt=Set:wt=(function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(t){return this.set[t]===!0},e.prototype.add=function(t){this.set[t]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e})();var ue=null;function Ie(e){e===void 0&&(e=null),e||ue&&ue._scope.off(),ue=e,e&&e._scope.on()}var oe=(function(){function e(t,r,a,n,i,s,o,l){this.tag=t,this.data=r,this.children=a,this.text=n,this.elm=i,this.ns=void 0,this.context=s,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=r&&r.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=l,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1}return Object.defineProperty(e.prototype,"child",{get:function(){return this.componentInstance},enumerable:!1,configurable:!0}),e})(),qe=function(e){e===void 0&&(e="");var t=new oe;return t.text=e,t.isComment=!0,t};function et(e){return new oe(void 0,void 0,void 0,String(e))}function Nr(e){var t=new oe(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isComment=e.isComment,t.fnContext=e.fnContext,t.fnOptions=e.fnOptions,t.fnScopeId=e.fnScopeId,t.asyncMeta=e.asyncMeta,t.isCloned=!0,t}var oo=0,Ut=[],lo=function(){for(var e=0;e<Ut.length;e++){var t=Ut[e];t.subs=t.subs.filter(function(r){return r}),t._pending=!1}Ut.length=0},xe=(function(){function e(){this._pending=!1,this.id=oo++,this.subs=[]}return e.prototype.addSub=function(t){this.subs.push(t)},e.prototype.removeSub=function(t){this.subs[this.subs.indexOf(t)]=null,this._pending||(this._pending=!0,Ut.push(this))},e.prototype.depend=function(t){e.target&&e.target.addDep(this)},e.prototype.notify=function(t){for(var r=this.subs.filter(function(s){return s}),a=0,n=r.length;a<n;a++){var i=r[a];i.update()}},e})();xe.target=null;var jt=[];function ct(e){jt.push(e),xe.target=e}function ut(){jt.pop(),xe.target=jt[jt.length-1]}var Oi=Array.prototype,Qt=Object.create(Oi),co=["push","pop","shift","unshift","splice","sort","reverse"];co.forEach(function(e){var t=Oi[e];ne(Qt,e,function(){for(var a=[],n=0;n<arguments.length;n++)a[n]=arguments[n];var i=t.apply(this,a),s=this.__ob__,o;switch(e){case"push":case"unshift":o=a;break;case"splice":o=a.slice(2);break}return o&&s.observeArray(o),s.dep.notify(),i})});var Fa=Object.getOwnPropertyNames(Qt),zi={},oa=!0;function De(e){oa=e}var uo={notify:M,depend:M,addSub:M,removeSub:M},Ua=(function(){function e(t,r,a){if(r===void 0&&(r=!1),a===void 0&&(a=!1),this.value=t,this.shallow=r,this.mock=a,this.dep=a?uo:new xe,this.vmCount=0,ne(t,"__ob__",this),O(t)){if(!a)if(io)t.__proto__=Qt;else for(var n=0,i=Fa.length;n<i;n++){var s=Fa[n];ne(t,s,Qt[s])}r||this.observeArray(t)}else for(var o=Object.keys(t),n=0;n<o.length;n++){var s=o[n];Me(t,s,zi,void 0,r,a)}}return e.prototype.observeArray=function(t){for(var r=0,a=t.length;r<a;r++)ke(t[r],!1,this.mock)},e})();function ke(e,t,r){if(e&&V(e,"__ob__")&&e.__ob__ instanceof Ua)return e.__ob__;if(oa&&(r||!Te())&&(O(e)||se(e))&&Object.isExtensible(e)&&!e.__v_skip&&!ie(e)&&!(e instanceof oe))return new Ua(e,t,r)}function Me(e,t,r,a,n,i,s){s===void 0&&(s=!1);var o=new xe,l=Object.getOwnPropertyDescriptor(e,t);if(!(l&&l.configurable===!1)){var c=l&&l.get,u=l&&l.set;(!c||u)&&(r===zi||arguments.length===2)&&(r=e[t]);var v=n?r&&r.__ob__:ke(r,!1,i);return Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var b=c?c.call(e):r;return xe.target&&(o.depend(),v&&(v.dep.depend(),O(b)&&Ei(b))),ie(b)&&!n?b.value:b},set:function(b){var x=c?c.call(e):r;if(Pr(x,b)){if(u)u.call(e,b);else{if(c)return;if(!n&&ie(x)&&!ie(b)){x.value=b;return}else r=b}v=n?b&&b.__ob__:ke(b,!1,i),o.notify()}}}),o}}function la(e,t,r){if(!ur(e)){var a=e.__ob__;return O(e)&&bi(t)?(e.length=Math.max(e.length,t),e.splice(t,1,r),a&&!a.shallow&&a.mock&&ke(r,!1,!0),r):t in e&&!(t in Object.prototype)?(e[t]=r,r):e._isVue||a&&a.vmCount?r:a?(Me(a.value,t,r,void 0,a.shallow,a.mock),a.dep.notify(),r):(e[t]=r,r)}}function Pi(e,t){if(O(e)&&bi(t)){e.splice(t,1);return}var r=e.__ob__;e._isVue||r&&r.vmCount||ur(e)||V(e,t)&&(delete e[t],r&&r.dep.notify())}function Ei(e){for(var t=void 0,r=0,a=e.length;r<a;r++)t=e[r],t&&t.__ob__&&t.__ob__.dep.depend(),O(t)&&Ei(t)}function ja(e){return Li(e,!1),e}function Ni(e){return Li(e,!0),ne(e,"__v_isShallow",!0),e}function Li(e,t){ur(e)||ke(e,t,Te())}function Ht(e){return ur(e)?Ht(e.__v_raw):!!(e&&e.__ob__)}function Ha(e){return!!(e&&e.__v_isShallow)}function ur(e){return!!(e&&e.__v_isReadonly)}var Ii="__v_isRef";function ie(e){return!!(e&&e.__v_isRef===!0)}function Oe(e){return vo(e,!1)}function vo(e,t){if(ie(e))return e;var r={};return ne(r,Ii,!0),ne(r,"__v_isShallow",t),ne(r,"dep",Me(r,"value",e,null,t,Te())),r}function Lr(e,t,r){Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:function(){var a=t[r];if(ie(a))return a.value;var n=a&&a.__ob__;return n&&n.dep.depend(),a},set:function(a){var n=t[r];ie(n)&&!ie(a)?n.value=a:t[r]=a}})}function vt(e,t){var r,a,n=D(e);n?(r=e,a=M):(r=e.get,a=e.set);var i=Te()?null:new Ot(ue,r,M,{lazy:!0}),s={effect:i,get value(){return i?(i.dirty&&i.evaluate(),xe.target&&i.depend(),i.value):r()},set value(o){a(o)}};return ne(s,Ii,!0),ne(s,"__v_isReadonly",n),s}var Ba=he(function(e){var t=e.charAt(0)==="&";e=t?e.slice(1):e;var r=e.charAt(0)==="~";e=r?e.slice(1):e;var a=e.charAt(0)==="!";return e=a?e.slice(1):e,{name:e,once:r,capture:a,passive:t}});function Ir(e,t){function r(){var a=r.fns;if(O(a))for(var n=a.slice(),i=0;i<n.length;i++)$e(n[i],null,arguments,t,"v-on handler");else return $e(a,null,arguments,t,"v-on handler")}return r.fns=e,r}function Di(e,t,r,a,n,i){var s,o,l,c;for(s in e)o=e[s],l=t[s],c=Ba(s),$(o)||($(l)?($(o.fns)&&(o=e[s]=Ir(o,i)),B(c.once)&&(o=e[s]=n(c.name,o,c.capture)),r(c.name,o,c.capture,c.passive,c.params)):o!==l&&(l.fns=o,e[s]=l));for(s in t)$(e[s])&&(c=Ba(s),a(c.name,t[s],c.capture))}function Pe(e,t,r){e instanceof oe&&(e=e.data.hook||(e.data.hook={}));var a,n=e[t];function i(){r.apply(this,arguments),Re(a.fns,i)}$(n)?a=Ir([i]):p(n.fns)&&B(n.merged)?(a=n,a.fns.push(i)):a=Ir([n,i]),a.merged=!0,e[t]=a}function fo(e,t,r){var a=t.options.props;if(!$(a)){var n={},i=e.attrs,s=e.props;if(p(i)||p(s))for(var o in a){var l=Ge(o);qa(n,s,o,l,!0)||qa(n,i,o,l,!1)}return n}}function qa(e,t,r,a,n){if(p(t)){if(V(t,r))return e[r]=t[r],n||delete t[r],!0;if(V(t,a))return e[r]=t[a],n||delete t[a],!0}return!1}function po(e){for(var t=0;t<e.length;t++)if(O(e[t]))return Array.prototype.concat.apply([],e);return e}function ca(e){return Tt(e)?[et(e)]:O(e)?Mi(e):void 0}function ft(e){return p(e)&&p(e.text)&&Ws(e.isComment)}function Mi(e,t){var r=[],a,n,i,s;for(a=0;a<e.length;a++)n=e[a],!($(n)||typeof n=="boolean")&&(i=r.length-1,s=r[i],O(n)?n.length>0&&(n=Mi(n,"".concat(t||"","_").concat(a)),ft(n[0])&&ft(s)&&(r[i]=et(s.text+n[0].text),n.shift()),r.push.apply(r,n)):Tt(n)?ft(s)?r[i]=et(s.text+n):n!==""&&r.push(et(n)):ft(n)&&ft(s)?r[i]=et(s.text+n.text):(B(e._isVList)&&p(n.tag)&&$(n.key)&&p(t)&&(n.key="__vlist".concat(t,"_").concat(a,"__")),r.push(n)));return r}var ho=1,Ri=2;function Ct(e,t,r,a,n,i){return(O(r)||Tt(r))&&(n=a,a=r,r=void 0),B(i)&&(n=Ri),mo(e,t,r,a,n)}function mo(e,t,r,a,n){if(p(r)&&p(r.__ob__)||(p(r)&&p(r.is)&&(t=r.is),!t))return qe();O(a)&&D(a[0])&&(r=r||{},r.scopedSlots={default:a[0]},a.length=0),n===Ri?a=ca(a):n===ho&&(a=po(a));var i,s;if(typeof t=="string"){var o=void 0;s=e.$vnode&&e.$vnode.ns||ae.getTagNamespace(t),ae.isReservedTag(t)?i=new oe(ae.parsePlatformTagName(t),r,a,void 0,void 0,e):(!r||!r.pre)&&p(o=ar(e.$options,"components",t))?i=on(o,r,e,a,t):i=new oe(t,r,a,void 0,void 0,e)}else i=on(t,r,e,a);return O(i)?i:p(i)?(p(s)&&Fi(i,s),p(r)&&go(r),i):qe()}function Fi(e,t,r){if(e.ns=t,e.tag==="foreignObject"&&(t=void 0,r=!0),p(e.children))for(var a=0,n=e.children.length;a<n;a++){var i=e.children[a];p(i.tag)&&($(i.ns)||B(r)&&i.tag!=="svg")&&Fi(i,t,r)}}function go(e){X(e.style)&&st(e.style),X(e.class)&&st(e.class)}function bo(e,t){var r=null,a,n,i,s;if(O(e)||typeof e=="string")for(r=new Array(e.length),a=0,n=e.length;a<n;a++)r[a]=t(e[a],a);else if(typeof e=="number")for(r=new Array(e),a=0;a<e;a++)r[a]=t(a+1,a);else if(X(e))if(At&&e[Symbol.iterator]){r=[];for(var o=e[Symbol.iterator](),l=o.next();!l.done;)r.push(t(l.value,r.length)),l=o.next()}else for(i=Object.keys(e),r=new Array(i.length),a=0,n=i.length;a<n;a++)s=i[a],r[a]=t(e[s],s,a);return p(r)||(r=[]),r._isVList=!0,r}function yo(e,t,r,a){var n=this.$scopedSlots[e],i;n?(r=r||{},a&&(r=E(E({},a),r)),i=n(r)||(D(t)?t():t)):i=this.$slots[e]||(D(t)?t():t);var s=r&&r.slot;return s?this.$createElement("template",{slot:s},i):i}function _o(e){return ar(this.$options,"filters",e)||Ci}function Wa(e,t){return O(e)?e.indexOf(t)===-1:e!==t}function wo(e,t,r,a,n){var i=ae.keyCodes[t]||r;return n&&a&&!ae.keyCodes[t]?Wa(n,a):i?Wa(i,e):a?Ge(a)!==t:e===void 0}function Co(e,t,r,a,n){if(r&&X(r)){O(r)&&(r=wi(r));var i=void 0,s=function(l){if(l==="class"||l==="style"||Xs(l))i=e;else{var c=e.attrs&&e.attrs.type;i=a||ae.mustUseProp(t,c,l)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var u=re(l),v=Ge(l);if(!(u in i)&&!(v in i)&&(i[l]=r[l],n)){var m=e.on||(e.on={});m["update:".concat(l)]=function(b){r[l]=b}}};for(var o in r)s(o)}return e}function xo(e,t){var r=this._staticTrees||(this._staticTrees=[]),a=r[e];return a&&!t||(a=r[e]=this.$options.staticRenderFns[e].call(this._renderProxy,this._c,this),Ui(a,"__static__".concat(e),!1)),a}function ko(e,t,r){return Ui(e,"__once__".concat(t).concat(r?"_".concat(r):""),!0),e}function Ui(e,t,r){if(O(e))for(var a=0;a<e.length;a++)e[a]&&typeof e[a]!="string"&&Ka(e[a],"".concat(t,"_").concat(a),r);else Ka(e,t,r)}function Ka(e,t,r){e.isStatic=!0,e.key=t,e.isOnce=r}function $o(e,t){if(t&&se(t)){var r=e.on=e.on?E({},e.on):{};for(var a in t){var n=r[a],i=t[a];r[a]=n?[].concat(n,i):i}}return e}function ji(e,t,r,a){t=t||{$stable:!r};for(var n=0;n<e.length;n++){var i=e[n];O(i)?ji(i,t,r):i&&(i.proxy&&(i.fn.proxy=!0),t[i.key]=i.fn)}return a&&(t.$key=a),t}function So(e,t){for(var r=0;r<t.length;r+=2){var a=t[r];typeof a=="string"&&a&&(e[t[r]]=t[r+1])}return e}function To(e,t){return typeof e=="string"?t+e:e}function Hi(e){e._o=ko,e._n=_t,e._s=Gs,e._l=bo,e._t=yo,e._q=Ye,e._i=xi,e._m=xo,e._f=_o,e._k=wo,e._b=Co,e._v=et,e._e=qe,e._u=ji,e._g=$o,e._d=So,e._p=To}function ua(e,t){if(!e||!e.length)return{};for(var r={},a=0,n=e.length;a<n;a++){var i=e[a],s=i.data;if(s&&s.attrs&&s.attrs.slot&&delete s.attrs.slot,(i.context===t||i.fnContext===t)&&s&&s.slot!=null){var o=s.slot,l=r[o]||(r[o]=[]);i.tag==="template"?l.push.apply(l,i.children||[]):l.push(i)}else(r.default||(r.default=[])).push(i)}for(var c in r)r[c].every(Ao)&&delete r[c];return r}function Ao(e){return e.isComment&&!e.asyncFactory||e.text===" "}function xt(e){return e.isComment&&e.asyncFactory}function bt(e,t,r,a){var n,i=Object.keys(r).length>0,s=t?!!t.$stable:!i,o=t&&t.$key;if(!t)n={};else{if(t._normalized)return t._normalized;if(s&&a&&a!==J&&o===a.$key&&!i&&!a.$hasNormal)return a;n={};for(var l in t)t[l]&&l[0]!=="$"&&(n[l]=Oo(e,r,l,t[l]))}for(var c in r)c in n||(n[c]=zo(r,c));return t&&Object.isExtensible(t)&&(t._normalized=n),ne(n,"$stable",s),ne(n,"$key",o),ne(n,"$hasNormal",i),n}function Oo(e,t,r,a){var n=function(){var i=ue;Ie(e);var s=arguments.length?a.apply(null,arguments):a({});s=s&&typeof s=="object"&&!O(s)?[s]:ca(s);var o=s&&s[0];return Ie(i),s&&(!o||s.length===1&&o.isComment&&!xt(o))?void 0:s};return a.proxy&&Object.defineProperty(t,r,{get:n,enumerable:!0,configurable:!0}),n}function zo(e,t){return function(){return e[t]}}function Po(e){var t=e.$options,r=t.setup;if(r){var a=e._setupContext=Eo(e);Ie(e),ct();var n=$e(r,null,[e._props||Ni({}),a],e,"setup");if(ut(),Ie(),D(n))t.render=n;else if(X(n))if(e._setupState=n,n.__sfc){var s=e._setupProxy={};for(var i in n)i!=="__sfc"&&Lr(s,n,i)}else for(var i in n)Si(i)||Lr(e,n,i)}}function Eo(e){return{get attrs(){if(!e._attrsProxy){var t=e._attrsProxy={};ne(t,"_v_attr_proxy",!0),er(t,e.$attrs,J,e,"$attrs")}return e._attrsProxy},get listeners(){if(!e._listenersProxy){var t=e._listenersProxy={};er(t,e.$listeners,J,e,"$listeners")}return e._listenersProxy},get slots(){return Lo(e)},emit:_i(e.$emit,e),expose:function(t){t&&Object.keys(t).forEach(function(r){return Lr(e,t,r)})}}}function er(e,t,r,a,n){var i=!1;for(var s in t)s in e?t[s]!==r[s]&&(i=!0):(i=!0,No(e,s,a,n));for(var s in e)s in t||(i=!0,delete e[s]);return i}function No(e,t,r,a){Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){return r[a][t]}})}function Lo(e){return e._slotsProxy||Bi(e._slotsProxy={},e.$scopedSlots),e._slotsProxy}function Bi(e,t){for(var r in t)e[r]=t[r];for(var r in e)r in t||delete e[r]}function Io(e){e._vnode=null,e._staticTrees=null;var t=e.$options,r=e.$vnode=t._parentVnode,a=r&&r.context;e.$slots=ua(t._renderChildren,a),e.$scopedSlots=r?bt(e.$parent,r.data.scopedSlots,e.$slots):J,e._c=function(i,s,o,l){return Ct(e,i,s,o,l,!1)},e.$createElement=function(i,s,o,l){return Ct(e,i,s,o,l,!0)};var n=r&&r.data;Me(e,"$attrs",n&&n.attrs||J,null,!0),Me(e,"$listeners",t._parentListeners||J,null,!0)}var Bt=null;function Do(e){Hi(e.prototype),e.prototype.$nextTick=function(t){return pa(t,this)},e.prototype._render=function(){var t=this,r=t.$options,a=r.render,n=r._parentVnode;n&&t._isMounted&&(t.$scopedSlots=bt(t.$parent,n.data.scopedSlots,t.$slots,t.$scopedSlots),t._slotsProxy&&Bi(t._slotsProxy,t.$scopedSlots)),t.$vnode=n;var i=ue,s=Bt,o;try{Ie(t),Bt=t,o=a.call(t._renderProxy,t.$createElement)}catch(l){Je(l,t,"render"),o=t._vnode}finally{Bt=s,Ie(i)}return O(o)&&o.length===1&&(o=o[0]),o instanceof oe||(o=qe()),o.parent=n,o}}function pr(e,t){return(e.__esModule||At&&e[Symbol.toStringTag]==="Module")&&(e=e.default),X(e)?t.extend(e):e}function Mo(e,t,r,a,n){var i=qe();return i.asyncFactory=e,i.asyncMeta={data:t,context:r,children:a,tag:n},i}function Ro(e,t){if(B(e.error)&&p(e.errorComp))return e.errorComp;if(p(e.resolved))return e.resolved;var r=Bt;if(r&&p(e.owners)&&e.owners.indexOf(r)===-1&&e.owners.push(r),B(e.loading)&&p(e.loadingComp))return e.loadingComp;if(r&&!p(e.owners)){var a=e.owners=[r],n=!0,i=null,s=null;r.$on("hook:destroyed",function(){return Re(a,r)});var o=function(v){for(var m=0,b=a.length;m<b;m++)a[m].$forceUpdate();v&&(a.length=0,i!==null&&(clearTimeout(i),i=null),s!==null&&(clearTimeout(s),s=null))},l=Zt(function(v){e.resolved=pr(v,t),n?a.length=0:o(!0)}),c=Zt(function(v){p(e.errorComp)&&(e.error=!0,o(!0))}),u=e(l,c);return X(u)&&(Or(u)?$(e.resolved)&&u.then(l,c):Or(u.component)&&(u.component.then(l,c),p(u.error)&&(e.errorComp=pr(u.error,t)),p(u.loading)&&(e.loadingComp=pr(u.loading,t),u.delay===0?e.loading=!0:i=setTimeout(function(){i=null,$(e.resolved)&&$(e.error)&&(e.loading=!0,o(!1))},u.delay||200)),p(u.timeout)&&(s=setTimeout(function(){s=null,$(e.resolved)&&c(null)},u.timeout)))),n=!1,e.loading?e.loadingComp:e.resolved}}function qi(e){if(O(e))for(var t=0;t<e.length;t++){var r=e[t];if(p(r)&&(p(r.componentOptions)||xt(r)))return r}}function Fo(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&Wi(e,t)}var kt;function Uo(e,t){kt.$on(e,t)}function jo(e,t){kt.$off(e,t)}function Ho(e,t){var r=kt;return function a(){var n=t.apply(null,arguments);n!==null&&r.$off(e,a)}}function Wi(e,t,r){kt=e,Di(t,r||{},Uo,jo,Ho,e),kt=void 0}function Bo(e){var t=/^hook:/;e.prototype.$on=function(r,a){var n=this;if(O(r))for(var i=0,s=r.length;i<s;i++)n.$on(r[i],a);else(n._events[r]||(n._events[r]=[])).push(a),t.test(r)&&(n._hasHookEvent=!0);return n},e.prototype.$once=function(r,a){var n=this;function i(){n.$off(r,i),a.apply(n,arguments)}return i.fn=a,n.$on(r,i),n},e.prototype.$off=function(r,a){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(O(r)){for(var i=0,s=r.length;i<s;i++)n.$off(r[i],a);return n}var o=n._events[r];if(!o)return n;if(!a)return n._events[r]=null,n;for(var l,c=o.length;c--;)if(l=o[c],l===a||l.fn===a){o.splice(c,1);break}return n},e.prototype.$emit=function(r){var a=this,n=a._events[r];if(n){n=n.length>1?zr(n):n;for(var i=zr(arguments,1),s='event handler for "'.concat(r,'"'),o=0,l=n.length;o<l;o++)$e(n[o],a,i,a,s)}return a}}var ee,qo=(function(){function e(t){t===void 0&&(t=!1),this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=ee,!t&&ee&&(this.index=(ee.scopes||(ee.scopes=[])).push(this)-1)}return e.prototype.run=function(t){if(this.active){var r=ee;try{return ee=this,t()}finally{ee=r}}},e.prototype.on=function(){ee=this},e.prototype.off=function(){ee=this.parent},e.prototype.stop=function(t){if(this.active){var r=void 0,a=void 0;for(r=0,a=this.effects.length;r<a;r++)this.effects[r].teardown();for(r=0,a=this.cleanups.length;r<a;r++)this.cleanups[r]();if(this.scopes)for(r=0,a=this.scopes.length;r<a;r++)this.scopes[r].stop(!0);if(!this.detached&&this.parent&&!t){var n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.parent=void 0,this.active=!1}},e})();function Wo(e,t){t===void 0&&(t=ee),t&&t.active&&t.effects.push(e)}function Ko(){return ee}var We=null;function Ki(e){var t=We;return We=e,function(){We=t}}function Go(e){var t=e.$options,r=t.parent;if(r&&!t.abstract){for(;r.$options.abstract&&r.$parent;)r=r.$parent;r.$children.push(e)}e.$parent=r,e.$root=r?r.$root:e,e.$children=[],e.$refs={},e._provided=r?r._provided:Object.create(null),e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function Yo(e){e.prototype._update=function(t,r){var a=this,n=a.$el,i=a._vnode,s=Ki(a);a._vnode=t,i?a.$el=a.__patch__(i,t):a.$el=a.__patch__(a.$el,t,r,!1),s(),n&&(n.__vue__=null),a.$el&&(a.$el.__vue__=a);for(var o=a;o&&o.$vnode&&o.$parent&&o.$vnode===o.$parent._vnode;)o.$parent.$el=o.$el,o=o.$parent},e.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},e.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){pe(t,"beforeDestroy"),t._isBeingDestroyed=!0;var r=t.$parent;r&&!r._isBeingDestroyed&&!t.$options.abstract&&Re(r.$children,t),t._scope.stop(),t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),pe(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function Jo(e,t,r){e.$el=t,e.$options.render||(e.$options.render=qe),pe(e,"beforeMount");var a;a=function(){e._update(e._render(),r)};var n={before:function(){e._isMounted&&!e._isDestroyed&&pe(e,"beforeUpdate")}};new Ot(e,a,M,n,!0),r=!1;var i=e._preWatchers;if(i)for(var s=0;s<i.length;s++)i[s].run();return e.$vnode==null&&(e._isMounted=!0,pe(e,"mounted")),e}function Xo(e,t,r,a,n){var i=a.data.scopedSlots,s=e.$scopedSlots,o=!!(i&&!i.$stable||s!==J&&!s.$stable||i&&e.$scopedSlots.$key!==i.$key||!i&&e.$scopedSlots.$key),l=!!(n||e.$options._renderChildren||o),c=e.$vnode;e.$options._parentVnode=a,e.$vnode=a,e._vnode&&(e._vnode.parent=a),e.$options._renderChildren=n;var u=a.data.attrs||J;e._attrsProxy&&er(e._attrsProxy,u,c.data&&c.data.attrs||J,e,"$attrs")&&(l=!0),e.$attrs=u,r=r||J;var v=e.$options._parentListeners;if(e._listenersProxy&&er(e._listenersProxy,r,v||J,e,"$listeners"),e.$listeners=e.$options._parentListeners=r,Wi(e,r,v),t&&e.$options.props){De(!1);for(var m=e._props,b=e.$options._propKeys||[],x=0;x<b.length;x++){var w=b[x],g=e.$options.props;m[w]=ya(w,g,t,e)}De(!0),e.$options.propsData=t}l&&(e.$slots=ua(n,a.context),e.$forceUpdate())}function Gi(e){for(;e&&(e=e.$parent);)if(e._inactive)return!0;return!1}function va(e,t){if(t){if(e._directInactive=!1,Gi(e))return}else if(e._directInactive)return;if(e._inactive||e._inactive===null){e._inactive=!1;for(var r=0;r<e.$children.length;r++)va(e.$children[r]);pe(e,"activated")}}function Yi(e,t){if(!(t&&(e._directInactive=!0,Gi(e)))&&!e._inactive){e._inactive=!0;for(var r=0;r<e.$children.length;r++)Yi(e.$children[r]);pe(e,"deactivated")}}function pe(e,t,r,a){a===void 0&&(a=!0),ct();var n=ue,i=Ko();a&&Ie(e);var s=e.$options[t],o="".concat(t," hook");if(s)for(var l=0,c=s.length;l<c;l++)$e(s[l],e,null,e,o);e._hasHookEvent&&e.$emit("hook:"+t),a&&(Ie(n),i&&i.on()),ut()}var _e=[],fa=[],tr={},Dr=!1,da=!1,tt=0;function Zo(){tt=_e.length=fa.length=0,tr={},Dr=da=!1}var Ji=0,Mr=Date.now;if(Q&&!Le){var hr=window.performance;hr&&typeof hr.now=="function"&&Mr()>document.createEvent("Event").timeStamp&&(Mr=function(){return hr.now()})}var Vo=function(e,t){if(e.post){if(!t.post)return 1}else if(t.post)return-1;return e.id-t.id};function Qo(){Ji=Mr(),da=!0;var e,t;for(_e.sort(Vo),tt=0;tt<_e.length;tt++)e=_e[tt],e.before&&e.before(),t=e.id,tr[t]=null,e.run();var r=fa.slice(),a=_e.slice();Zo(),rl(r),el(a),lo(),Vt&&ae.devtools&&Vt.emit("flush")}function el(e){for(var t=e.length;t--;){var r=e[t],a=r.vm;a&&a._watcher===r&&a._isMounted&&!a._isDestroyed&&pe(a,"updated")}}function tl(e){e._inactive=!1,fa.push(e)}function rl(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,va(e[t],!0)}function Rr(e){var t=e.id;if(tr[t]==null&&!(e===xe.target&&e.noRecurse)){if(tr[t]=!0,!da)_e.push(e);else{for(var r=_e.length-1;r>tt&&_e[r].id>e.id;)r--;_e.splice(r+1,0,e)}Dr||(Dr=!0,pa(Qo))}}var vr="watcher",Ga="".concat(vr," callback"),Ya="".concat(vr," getter"),al="".concat(vr," cleanup"),Ja={};function Xa(e,t,r){return nl(e,t,r)}function nl(e,t,r){var a=r===void 0?J:r,n=a.immediate,i=a.deep,s=a.flush,o=s===void 0?"pre":s;a.onTrack,a.onTrigger;var l=ue,c=function(y,I,F){F===void 0&&(F=null);var q=$e(y,null,F,l,I);return i&&q&&q.__ob__&&q.__ob__.dep.depend(),q},u,v=!1,m=!1;if(ie(e)?(u=function(){return e.value},v=Ha(e)):Ht(e)?(u=function(){return e.__ob__.dep.depend(),e},i=!0):O(e)?(m=!0,v=e.some(function(y){return Ht(y)||Ha(y)}),u=function(){return e.map(function(y){if(ie(y))return y.value;if(Ht(y))return y.__ob__.dep.depend(),st(y);if(D(y))return c(y,Ya)})}):D(e)?t?u=function(){return c(e,Ya)}:u=function(){if(!(l&&l._isDestroyed))return x&&x(),c(e,vr,[w])}:u=M,t&&i){var b=u;u=function(){return st(b())}}var x,w=function(y){x=g.onStop=function(){c(y,al)}};if(Te())return w=M,t?n&&c(t,Ga,[u(),m?[]:void 0,w]):u(),M;var g=new Ot(ue,u,M,{lazy:!0});g.noRecurse=!t;var C=m?[]:Ja;return g.run=function(){if(g.active)if(t){var y=g.get();(i||v||(m?y.some(function(I,F){return Pr(I,C[F])}):Pr(y,C)))&&(x&&x(),c(t,Ga,[y,C===Ja?void 0:C,w]),C=y)}else g.get()},o==="sync"?g.update=g.run:o==="post"?(g.post=!0,g.update=function(){return Rr(g)}):g.update=function(){if(l&&l===ue&&!l._isMounted){var y=l._preWatchers||(l._preWatchers=[]);y.indexOf(g)<0&&y.push(g)}else Rr(g)},t?n?g.run():C=g.get():o==="post"&&l?l.$once("hook:mounted",function(){return g.get()}):g.get(),function(){g.teardown()}}function il(e){var t=e._provided,r=e.$parent&&e.$parent._provided;return r===t?e._provided=Object.create(r):t}function sl(e,t,r){return Ct(ue,e,t,r,2,!0)}function Je(e,t,r){ct();try{if(t)for(var a=t;a=a.$parent;){var n=a.$options.errorCaptured;if(n)for(var i=0;i<n.length;i++)try{var s=n[i].call(a,e,t,r)===!1;if(s)return}catch(o){Za(o,a,"errorCaptured hook")}}Za(e,t,r)}finally{ut()}}function $e(e,t,r,a,n){var i;try{i=r?e.apply(t,r):e.call(t),i&&!i._isVue&&Or(i)&&!i._handled&&(i.catch(function(s){return Je(s,a,n+" (Promise/async)")}),i._handled=!0)}catch(s){Je(s,a,n)}return i}function Za(e,t,r){if(ae.errorHandler)try{return ae.errorHandler.call(null,e,t,r)}catch(a){a!==e&&Va(a)}Va(e)}function Va(e,t,r){if(Q&&typeof console<"u")console.error(e);else throw e}var Fr=!1,Ur=[],jr=!1;function Et(){jr=!1;var e=Ur.slice(0);Ur.length=0;for(var t=0;t<e.length;t++)e[t]()}var gt;if(typeof Promise<"u"&&nt(Promise)){var ol=Promise.resolve();gt=function(){ol.then(Et),so&&setTimeout(M)},Fr=!0}else if(!Le&&typeof MutationObserver<"u"&&(nt(MutationObserver)||MutationObserver.toString()==="[object MutationObserverConstructor]")){var Nt=1,ll=new MutationObserver(Et),Qa=document.createTextNode(String(Nt));ll.observe(Qa,{characterData:!0}),gt=function(){Nt=(Nt+1)%2,Qa.data=String(Nt)},Fr=!0}else typeof setImmediate<"u"&&nt(setImmediate)?gt=function(){setImmediate(Et)}:gt=function(){setTimeout(Et,0)};function pa(e,t){var r;if(Ur.push(function(){if(e)try{e.call(t)}catch(a){Je(a,t,"nextTick")}else r&&r(t)}),jr||(jr=!0,gt()),!e&&typeof Promise<"u")return new Promise(function(a){r=a})}function Xi(e){return function(t,r){if(r===void 0&&(r=ue),!!r)return cl(r,e,t)}}function cl(e,t,r){var a=e.$options;a[t]=es(a[t],r)}var ul=Xi("mounted"),vl=Xi("beforeDestroy"),fl="2.7.16";var en=new wt;function st(e){return qt(e,en),en.clear(),e}function qt(e,t){var r,a,n=O(e);if(!(!n&&!X(e)||e.__v_skip||Object.isFrozen(e)||e instanceof oe)){if(e.__ob__){var i=e.__ob__.dep.id;if(t.has(i))return;t.add(i)}if(n)for(r=e.length;r--;)qt(e[r],t);else if(ie(e))qt(e.value,t);else for(a=Object.keys(e),r=a.length;r--;)qt(e[a[r]],t)}}var dl=0,Ot=(function(){function e(t,r,a,n,i){Wo(this,ee&&!ee._vm?ee:t?t._scope:void 0),(this.vm=t)&&i&&(t._watcher=this),n?(this.deep=!!n.deep,this.user=!!n.user,this.lazy=!!n.lazy,this.sync=!!n.sync,this.before=n.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=a,this.id=++dl,this.active=!0,this.post=!1,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new wt,this.newDepIds=new wt,this.expression="",D(r)?this.getter=r:(this.getter=no(r),this.getter||(this.getter=M)),this.value=this.lazy?void 0:this.get()}return e.prototype.get=function(){ct(this);var t,r=this.vm;try{t=this.getter.call(r,r)}catch(a){if(this.user)Je(a,r,'getter for watcher "'.concat(this.expression,'"'));else throw a}finally{this.deep&&st(t),ut(),this.cleanupDeps()}return t},e.prototype.addDep=function(t){var r=t.id;this.newDepIds.has(r)||(this.newDepIds.add(r),this.newDeps.push(t),this.depIds.has(r)||t.addSub(this))},e.prototype.cleanupDeps=function(){for(var t=this.deps.length;t--;){var r=this.deps[t];this.newDepIds.has(r.id)||r.removeSub(this)}var a=this.depIds;this.depIds=this.newDepIds,this.newDepIds=a,this.newDepIds.clear(),a=this.deps,this.deps=this.newDeps,this.newDeps=a,this.newDeps.length=0},e.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Rr(this)},e.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||X(t)||this.deep){var r=this.value;if(this.value=t,this.user){var a='callback for watcher "'.concat(this.expression,'"');$e(this.cb,this.vm,[t,r],this.vm,a)}else this.cb.call(this.vm,t,r)}}},e.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},e.prototype.depend=function(){for(var t=this.deps.length;t--;)this.deps[t].depend()},e.prototype.teardown=function(){if(this.vm&&!this.vm._isBeingDestroyed&&Re(this.vm._scope.effects,this),this.active){for(var t=this.deps.length;t--;)this.deps[t].removeSub(this);this.active=!1,this.onStop&&this.onStop()}},e})(),ze={enumerable:!0,configurable:!0,get:M,set:M};function ha(e,t,r){ze.get=function(){return this[t][r]},ze.set=function(n){this[t][r]=n},Object.defineProperty(e,r,ze)}function pl(e){var t=e.$options;if(t.props&&hl(e,t.props),Po(e),t.methods&&_l(e,t.methods),t.data)ml(e);else{var r=ke(e._data={});r&&r.vmCount++}t.computed&&yl(e,t.computed),t.watch&&t.watch!==Er&&wl(e,t.watch)}function hl(e,t){var r=e.$options.propsData||{},a=e._props=Ni({}),n=e.$options._propKeys=[],i=!e.$parent;i||De(!1);var s=function(l){n.push(l);var c=ya(l,t,r,e);Me(a,l,c,void 0,!0),l in e||ha(e,"_props",l)};for(var o in t)s(o);De(!0)}function ml(e){var t=e.$options.data;t=e._data=D(t)?gl(t,e):t||{},se(t)||(t={});var r=Object.keys(t),a=e.$options.props;e.$options.methods;for(var n=r.length;n--;){var i=r[n];a&&V(a,i)||Si(i)||ha(e,"_data",i)}var s=ke(t);s&&s.vmCount++}function gl(e,t){ct();try{return e.call(t,t)}catch(r){return Je(r,t,"data()"),{}}finally{ut()}}var bl={lazy:!0};function yl(e,t){var r=e._computedWatchers=Object.create(null),a=Te();for(var n in t){var i=t[n],s=D(i)?i:i.get;a||(r[n]=new Ot(e,s||M,M,bl)),n in e||Zi(e,n,i)}}function Zi(e,t,r){var a=!Te();D(r)?(ze.get=a?tn(t):rn(r),ze.set=M):(ze.get=r.get?a&&r.cache!==!1?tn(t):rn(r.get):M,ze.set=r.set||M),Object.defineProperty(e,t,ze)}function tn(e){return function(){var r=this._computedWatchers&&this._computedWatchers[e];if(r)return r.dirty&&r.evaluate(),xe.target&&r.depend(),r.value}}function rn(e){return function(){return e.call(this,this)}}function _l(e,t){e.$options.props;for(var r in t)e[r]=typeof t[r]!="function"?M:_i(t[r],e)}function wl(e,t){for(var r in t){var a=t[r];if(O(a))for(var n=0;n<a.length;n++)Hr(e,r,a[n]);else Hr(e,r,a)}}function Hr(e,t,r,a){return se(r)&&(a=r,r=r.handler),typeof r=="string"&&(r=e[r]),e.$watch(t,r,a)}function Cl(e){var t={};t.get=function(){return this._data};var r={};r.get=function(){return this._props},Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",r),e.prototype.$set=la,e.prototype.$delete=Pi,e.prototype.$watch=function(a,n,i){var s=this;if(se(n))return Hr(s,a,n,i);i=i||{},i.user=!0;var o=new Ot(s,a,n,i);if(i.immediate){var l='callback for immediate watcher "'.concat(o.expression,'"');ct(),$e(n,s,[o.value],s,l),ut()}return function(){o.teardown()}}}function xl(e){var t=e.$options.provide;if(t){var r=D(t)?t.call(e):t;if(!X(r))return;for(var a=il(e),n=At?Reflect.ownKeys(r):Object.keys(r),i=0;i<n.length;i++){var s=n[i];Object.defineProperty(a,s,Object.getOwnPropertyDescriptor(r,s))}}}function kl(e){var t=Vi(e.$options.inject,e);t&&(De(!1),Object.keys(t).forEach(function(r){Me(e,r,t[r])}),De(!0))}function Vi(e,t){if(e){for(var r=Object.create(null),a=At?Reflect.ownKeys(e):Object.keys(e),n=0;n<a.length;n++){var i=a[n];if(i!=="__ob__"){var s=e[i].from;if(s in t._provided)r[i]=t._provided[s];else if("default"in e[i]){var o=e[i].default;r[i]=D(o)?o.call(t):o}}}return r}}var $l=0;function Sl(e){e.prototype._init=function(t){var r=this;r._uid=$l++,r._isVue=!0,r.__v_skip=!0,r._scope=new qo(!0),r._scope.parent=void 0,r._scope._vm=!0,t&&t._isComponent?Tl(r,t):r.$options=Xe(ma(r.constructor),t||{},r),r._renderProxy=r,r._self=r,Go(r),Fo(r),Io(r),pe(r,"beforeCreate",void 0,!1),kl(r),pl(r),xl(r),pe(r,"created"),r.$options.el&&r.$mount(r.$options.el)}}function Tl(e,t){var r=e.$options=Object.create(e.constructor.options),a=t._parentVnode;r.parent=t.parent,r._parentVnode=a;var n=a.componentOptions;r.propsData=n.propsData,r._parentListeners=n.listeners,r._renderChildren=n.children,r._componentTag=n.tag,t.render&&(r.render=t.render,r.staticRenderFns=t.staticRenderFns)}function ma(e){var t=e.options;if(e.super){var r=ma(e.super),a=e.superOptions;if(r!==a){e.superOptions=r;var n=Al(e);n&&E(e.extendOptions,n),t=e.options=Xe(r,e.extendOptions),t.name&&(t.components[t.name]=e)}}return t}function Al(e){var t,r=e.options,a=e.sealedOptions;for(var n in r)r[n]!==a[n]&&(t||(t={}),t[n]=r[n]);return t}function ga(e,t,r,a,n){var i=this,s=n.options,o;V(a,"_uid")?(o=Object.create(a),o._original=a):(o=a,a=a._original);var l=B(s._compiled),c=!l;this.data=e,this.props=t,this.children=r,this.parent=a,this.listeners=e.on||J,this.injections=Vi(s.inject,a),this.slots=function(){return i.$slots||bt(a,e.scopedSlots,i.$slots=ua(r,a)),i.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return bt(a,e.scopedSlots,this.slots())}}),l&&(this.$options=s,this.$slots=this.slots(),this.$scopedSlots=bt(a,e.scopedSlots,this.$slots)),s._scopeId?this._c=function(u,v,m,b){var x=Ct(o,u,v,m,b,c);return x&&!O(x)&&(x.fnScopeId=s._scopeId,x.fnContext=a),x}:this._c=function(u,v,m,b){return Ct(o,u,v,m,b,c)}}Hi(ga.prototype);function Ol(e,t,r,a,n){var i=e.options,s={},o=i.props;if(p(o))for(var l in o)s[l]=ya(l,o,t||J);else p(r.attrs)&&nn(s,r.attrs),p(r.props)&&nn(s,r.props);var c=new ga(r,s,n,a,e),u=i.render.call(null,c._c,c);if(u instanceof oe)return an(u,r,c.parent,i);if(O(u)){for(var v=ca(u)||[],m=new Array(v.length),b=0;b<v.length;b++)m[b]=an(v[b],r,c.parent,i);return m}}function an(e,t,r,a,n){var i=Nr(e);return i.fnContext=r,i.fnOptions=a,t.slot&&((i.data||(i.data={})).slot=t.slot),i}function nn(e,t){for(var r in t)e[re(r)]=t[r]}function rr(e){return e.name||e.__name||e._componentTag}var ba={init:function(e,t){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var r=e;ba.prepatch(r,r)}else{var a=e.componentInstance=zl(e,We);a.$mount(t?e.elm:void 0,t)}},prepatch:function(e,t){var r=t.componentOptions,a=t.componentInstance=e.componentInstance;Xo(a,r.propsData,r.listeners,t,r.children)},insert:function(e){var t=e.context,r=e.componentInstance;r._isMounted||(r._isMounted=!0,pe(r,"mounted")),e.data.keepAlive&&(t._isMounted?tl(r):va(r,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?Yi(t,!0):t.$destroy())}},sn=Object.keys(ba);function on(e,t,r,a,n){if(!$(e)){var i=r.$options._base;if(X(e)&&(e=i.extend(e)),typeof e=="function"){var s;if($(e.cid)&&(s=e,e=Ro(s,i),e===void 0))return Mo(s,t,r,a,n);t=t||{},ma(e),p(t.model)&&Nl(e.options,t);var o=fo(t,e);if(B(e.options.functional))return Ol(e,o,t,r,a);var l=t.on;if(t.on=t.nativeOn,B(e.options.abstract)){var c=t.slot;t={},c&&(t.slot=c)}Pl(t);var u=rr(e.options)||n,v=new oe("vue-component-".concat(e.cid).concat(u?"-".concat(u):""),t,void 0,void 0,void 0,r,{Ctor:e,propsData:o,listeners:l,tag:n,children:a},s);return v}}}function zl(e,t){var r={_isComponent:!0,_parentVnode:e,parent:t},a=e.data.inlineTemplate;return p(a)&&(r.render=a.render,r.staticRenderFns=a.staticRenderFns),new e.componentOptions.Ctor(r)}function Pl(e){for(var t=e.hook||(e.hook={}),r=0;r<sn.length;r++){var a=sn[r],n=t[a],i=ba[a];n!==i&&!(n&&n._merged)&&(t[a]=n?El(i,n):i)}}function El(e,t){var r=function(a,n){e(a,n),t(a,n)};return r._merged=!0,r}function Nl(e,t){var r=e.model&&e.model.prop||"value",a=e.model&&e.model.event||"input";(t.attrs||(t.attrs={}))[r]=t.model.value;var n=t.on||(t.on={}),i=n[a],s=t.model.callback;p(i)?(O(i)?i.indexOf(s)===-1:i!==s)&&(n[a]=[s].concat(i)):n[a]=s}var Qi=M,me=ae.optionMergeStrategies;function $t(e,t,r){if(r===void 0&&(r=!0),!t)return e;for(var a,n,i,s=At?Reflect.ownKeys(t):Object.keys(t),o=0;o<s.length;o++)a=s[o],a!=="__ob__"&&(n=e[a],i=t[a],!r||!V(e,a)?la(e,a,i):n!==i&&se(n)&&se(i)&&$t(n,i));return e}function ln(e,t,r){return r?function(){var n=D(t)?t.call(r,r):t,i=D(e)?e.call(r,r):e;return n?$t(n,i):i}:t?e?function(){return $t(D(t)?t.call(this,this):t,D(e)?e.call(this,this):e)}:t:e}me.data=function(e,t,r){return r?ln(e,t,r):t&&typeof t!="function"?e:ln(e,t)};function es(e,t){var r=t?e?e.concat(t):O(t)?t:[t]:e;return r&&Ll(r)}function Ll(e){for(var t=[],r=0;r<e.length;r++)t.indexOf(e[r])===-1&&t.push(e[r]);return t}ki.forEach(function(e){me[e]=es});function Il(e,t,r,a){var n=Object.create(e||null);return t?E(n,t):n}cr.forEach(function(e){me[e+"s"]=Il});me.watch=function(e,t,r,a){if(e===Er&&(e=void 0),t===Er&&(t=void 0),!t)return Object.create(e||null);if(!e)return t;var n={};E(n,e);for(var i in t){var s=n[i],o=t[i];s&&!O(s)&&(s=[s]),n[i]=s?s.concat(o):O(o)?o:[o]}return n};me.props=me.methods=me.inject=me.computed=function(e,t,r,a){if(!e)return t;var n=Object.create(null);return E(n,e),t&&E(n,t),n};me.provide=function(e,t){return e?function(){var r=Object.create(null);return $t(r,D(e)?e.call(this):e),t&&$t(r,D(t)?t.call(this):t,!1),r}:t};var Dl=function(e,t){return t===void 0?e:t};function Ml(e,t){var r=e.props;if(r){var a={},n,i,s;if(O(r))for(n=r.length;n--;)i=r[n],typeof i=="string"&&(s=re(i),a[s]={type:null});else if(se(r))for(var o in r)i=r[o],s=re(o),a[s]=se(i)?i:{type:i};e.props=a}}function Rl(e,t){var r=e.inject;if(r){var a=e.inject={};if(O(r))for(var n=0;n<r.length;n++)a[r[n]]={from:r[n]};else if(se(r))for(var i in r){var s=r[i];a[i]=se(s)?E({from:i},s):{from:s}}}}function Fl(e){var t=e.directives;if(t)for(var r in t){var a=t[r];D(a)&&(t[r]={bind:a,update:a})}}function Xe(e,t,r){if(D(t)&&(t=t.options),Ml(t),Rl(t),Fl(t),!t._base&&(t.extends&&(e=Xe(e,t.extends,r)),t.mixins))for(var a=0,n=t.mixins.length;a<n;a++)e=Xe(e,t.mixins[a],r);var i={},s;for(s in e)o(s);for(s in t)V(e,s)||o(s);function o(l){var c=me[l]||Dl;i[l]=c(e[l],t[l],r,l)}return i}function ar(e,t,r,a){if(typeof r=="string"){var n=e[t];if(V(n,r))return n[r];var i=re(r);if(V(n,i))return n[i];var s=yi(i);if(V(n,s))return n[s];var o=n[r]||n[i]||n[s];return o}}function ya(e,t,r,a){var n=t[e],i=!V(r,e),s=r[e],o=un(Boolean,n.type);if(o>-1){if(i&&!V(n,"default"))s=!1;else if(s===""||s===Ge(e)){var l=un(String,n.type);(l<0||o<l)&&(s=!0)}}if(s===void 0){s=Ul(a,n,e);var c=oa;De(!0),ke(s),De(c)}return s}function Ul(e,t,r){if(V(t,"default")){var a=t.default;return e&&e.$options.propsData&&e.$options.propsData[r]===void 0&&e._props[r]!==void 0?e._props[r]:D(a)&&Br(t.type)!=="Function"?a.call(e):a}}var jl=/^\s*function (\w+)/;function Br(e){var t=e&&e.toString().match(jl);return t?t[1]:""}function cn(e,t){return Br(e)===Br(t)}function un(e,t){if(!O(t))return cn(t,e)?0:-1;for(var r=0,a=t.length;r<a;r++)if(cn(t[r],e))return r;return-1}function R(e){this._init(e)}Sl(R);Cl(R);Bo(R);Yo(R);Do(R);function Hl(e){e.use=function(t){var r=this._installedPlugins||(this._installedPlugins=[]);if(r.indexOf(t)>-1)return this;var a=zr(arguments,1);return a.unshift(this),D(t.install)?t.install.apply(t,a):D(t)&&t.apply(null,a),r.push(t),this}}function Bl(e){e.mixin=function(t){return this.options=Xe(this.options,t),this}}function ql(e){e.cid=0;var t=1;e.extend=function(r){r=r||{};var a=this,n=a.cid,i=r._Ctor||(r._Ctor={});if(i[n])return i[n];var s=rr(r)||rr(a.options),o=function(c){this._init(c)};return o.prototype=Object.create(a.prototype),o.prototype.constructor=o,o.cid=t++,o.options=Xe(a.options,r),o.super=a,o.options.props&&Wl(o),o.options.computed&&Kl(o),o.extend=a.extend,o.mixin=a.mixin,o.use=a.use,cr.forEach(function(l){o[l]=a[l]}),s&&(o.options.components[s]=o),o.superOptions=a.options,o.extendOptions=r,o.sealedOptions=E({},o.options),i[n]=o,o}}function Wl(e){var t=e.options.props;for(var r in t)ha(e.prototype,"_props",r)}function Kl(e){var t=e.options.computed;for(var r in t)Zi(e.prototype,r,t[r])}function Gl(e){cr.forEach(function(t){e[t]=function(r,a){return a?(t==="component"&&se(a)&&(a.name=a.name||r,a=this.options._base.extend(a)),t==="directive"&&D(a)&&(a={bind:a,update:a}),this.options[t+"s"][r]=a,a):this.options[t+"s"][r]}})}function vn(e){return e&&(rr(e.Ctor.options)||e.tag)}function Lt(e,t){return O(e)?e.indexOf(t)>-1:typeof e=="string"?e.split(",").indexOf(t)>-1:Ks(e)?e.test(t):!1}function fn(e,t){var r=e.cache,a=e.keys,n=e._vnode,i=e.$vnode;for(var s in r){var o=r[s];if(o){var l=o.name;l&&!t(l)&&qr(r,s,a,n)}}i.componentOptions.children=void 0}function qr(e,t,r,a){var n=e[t];n&&(!a||n.tag!==a.tag)&&n.componentInstance.$destroy(),e[t]=null,Re(r,t)}var dn=[String,RegExp,Array],Yl={name:"keep-alive",abstract:!0,props:{include:dn,exclude:dn,max:[String,Number]},methods:{cacheVNode:function(){var e=this,t=e.cache,r=e.keys,a=e.vnodeToCache,n=e.keyToCache;if(a){var i=a.tag,s=a.componentInstance,o=a.componentOptions;t[n]={name:vn(o),tag:i,componentInstance:s},r.push(n),this.max&&r.length>parseInt(this.max)&&qr(t,r[0],r,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)qr(this.cache,e,this.keys)},mounted:function(){var e=this;this.cacheVNode(),this.$watch("include",function(t){fn(e,function(r){return Lt(t,r)})}),this.$watch("exclude",function(t){fn(e,function(r){return!Lt(t,r)})})},updated:function(){this.cacheVNode()},render:function(){var e=this.$slots.default,t=qi(e),r=t&&t.componentOptions;if(r){var a=vn(r),n=this,i=n.include,s=n.exclude;if(i&&(!a||!Lt(i,a))||s&&a&&Lt(s,a))return t;var o=this,l=o.cache,c=o.keys,u=t.key==null?r.Ctor.cid+(r.tag?"::".concat(r.tag):""):t.key;l[u]?(t.componentInstance=l[u].componentInstance,Re(c,u),c.push(u)):(this.vnodeToCache=t,this.keyToCache=u),t.data.keepAlive=!0}return t||e&&e[0]}},Jl={KeepAlive:Yl};function Xl(e){var t={};t.get=function(){return ae},Object.defineProperty(e,"config",t),e.util={warn:Qi,extend:E,mergeOptions:Xe,defineReactive:Me},e.set=la,e.delete=Pi,e.nextTick=pa,e.observable=function(r){return ke(r),r},e.options=Object.create(null),cr.forEach(function(r){e.options[r+"s"]=Object.create(null)}),e.options._base=e,E(e.options.components,Jl),Hl(e),Bl(e),ql(e),Gl(e)}Xl(R);Object.defineProperty(R.prototype,"$isServer",{get:Te});Object.defineProperty(R.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}});Object.defineProperty(R,"FunctionalRenderContext",{value:ga});R.version=fl;var Zl=Y("style,class"),Vl=Y("input,textarea,option,select,progress"),ts=function(e,t,r){return r==="value"&&Vl(e)&&t!=="button"||r==="selected"&&e==="option"||r==="checked"&&e==="input"||r==="muted"&&e==="video"},rs=Y("contenteditable,draggable,spellcheck"),Ql=Y("events,caret,typing,plaintext-only"),ec=function(e,t){return nr(t)||t==="false"?"false":e==="contenteditable"&&Ql(t)?t:"true"},tc=Y("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),Wr="http://www.w3.org/1999/xlink",_a=function(e){return e.charAt(5)===":"&&e.slice(0,5)==="xlink"},as=function(e){return _a(e)?e.slice(6,e.length):""},nr=function(e){return e==null||e===!1};function rc(e){for(var t=e.data,r=e,a=e;p(a.componentInstance);)a=a.componentInstance._vnode,a&&a.data&&(t=pn(a.data,t));for(;p(r=r.parent);)r&&r.data&&(t=pn(t,r.data));return ac(t.staticClass,t.class)}function pn(e,t){return{staticClass:wa(e.staticClass,t.staticClass),class:p(e.class)?[e.class,t.class]:t.class}}function ac(e,t){return p(e)||p(t)?wa(e,Ca(t)):""}function wa(e,t){return e?t?e+" "+t:e:t||""}function Ca(e){return Array.isArray(e)?nc(e):X(e)?ic(e):typeof e=="string"?e:""}function nc(e){for(var t="",r,a=0,n=e.length;a<n;a++)p(r=Ca(e[a]))&&r!==""&&(t&&(t+=" "),t+=r);return t}function ic(e){var t="";for(var r in e)e[r]&&(t&&(t+=" "),t+=r);return t}var sc={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},oc=Y("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),xa=Y("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),lc=function(e){return e==="pre"},ka=function(e){return oc(e)||xa(e)};function ns(e){if(xa(e))return"svg";if(e==="math")return"math"}var It=Object.create(null);function cc(e){if(!Q)return!0;if(ka(e))return!1;if(e=e.toLowerCase(),It[e]!=null)return It[e];var t=document.createElement(e);return e.indexOf("-")>-1?It[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:It[e]=/HTMLUnknownElement/.test(t.toString())}var Kr=Y("text,number,password,search,email,tel,url");function $a(e){if(typeof e=="string"){var t=document.querySelector(e);return t||document.createElement("div")}else return e}function uc(e,t){var r=document.createElement(e);return e!=="select"||t.data&&t.data.attrs&&t.data.attrs.multiple!==void 0&&r.setAttribute("multiple","multiple"),r}function vc(e,t){return document.createElementNS(sc[e],t)}function fc(e){return document.createTextNode(e)}function dc(e){return document.createComment(e)}function pc(e,t,r){e.insertBefore(t,r)}function hc(e,t){e.removeChild(t)}function mc(e,t){e.appendChild(t)}function gc(e){return e.parentNode}function bc(e){return e.nextSibling}function yc(e){return e.tagName}function _c(e,t){e.textContent=t}function wc(e,t){e.setAttribute(t,"")}var Cc=Object.freeze({__proto__:null,createElement:uc,createElementNS:vc,createTextNode:fc,createComment:dc,insertBefore:pc,removeChild:hc,appendChild:mc,parentNode:gc,nextSibling:bc,tagName:yc,setTextContent:_c,setStyleScope:wc}),xc={create:function(e,t){rt(t)},update:function(e,t){e.data.ref!==t.data.ref&&(rt(e,!0),rt(t))},destroy:function(e){rt(e,!0)}};function rt(e,t){var r=e.data.ref;if(p(r)){var a=e.context,n=e.componentInstance||e.elm,i=t?null:n,s=t?void 0:n;if(D(r)){$e(r,a,[i],a,"template ref function");return}var o=e.data.refInFor,l=typeof r=="string"||typeof r=="number",c=ie(r),u=a.$refs;if(l||c){if(o){var v=l?u[r]:r.value;t?O(v)&&Re(v,n):O(v)?v.includes(n)||v.push(n):l?(u[r]=[n],hn(a,r,u[r])):r.value=[n]}else if(l){if(t&&u[r]!==n)return;u[r]=s,hn(a,r,i)}else if(c){if(t&&r.value!==n)return;r.value=i}}}}function hn(e,t,r){var a=e._setupState;a&&V(a,t)&&(ie(a[t])?a[t].value=r:a[t]=r)}var Ee=new oe("",{},[]),dt=["create","activate","update","remove","destroy"];function He(e,t){return e.key===t.key&&e.asyncFactory===t.asyncFactory&&(e.tag===t.tag&&e.isComment===t.isComment&&p(e.data)===p(t.data)&&kc(e,t)||B(e.isAsyncPlaceholder)&&$(t.asyncFactory.error))}function kc(e,t){if(e.tag!=="input")return!0;var r,a=p(r=e.data)&&p(r=r.attrs)&&r.type,n=p(r=t.data)&&p(r=r.attrs)&&r.type;return a===n||Kr(a)&&Kr(n)}function $c(e,t,r){var a,n,i={};for(a=t;a<=r;++a)n=e[a].key,p(n)&&(i[n]=a);return i}function Sc(e){var t,r,a={},n=e.modules,i=e.nodeOps;for(t=0;t<dt.length;++t)for(a[dt[t]]=[],r=0;r<n.length;++r)p(n[r][dt[t]])&&a[dt[t]].push(n[r][dt[t]]);function s(d){return new oe(i.tagName(d).toLowerCase(),{},[],void 0,d)}function o(d,f){function h(){--h.listeners===0&&l(d)}return h.listeners=f,h}function l(d){var f=i.parentNode(d);p(f)&&i.removeChild(f,d)}function c(d,f,h,_,k,z,S){if(p(d.elm)&&p(z)&&(d=z[S]=Nr(d)),d.isRootInsert=!k,!u(d,f,h,_)){var T=d.data,P=d.children,N=d.tag;p(N)?(d.elm=d.ns?i.createElementNS(d.ns,N):i.createElement(N,d),C(d),x(d,P,f),p(T)&&g(d,f),b(h,d.elm,_)):B(d.isComment)?(d.elm=i.createComment(d.text),b(h,d.elm,_)):(d.elm=i.createTextNode(d.text),b(h,d.elm,_))}}function u(d,f,h,_){var k=d.data;if(p(k)){var z=p(d.componentInstance)&&k.keepAlive;if(p(k=k.hook)&&p(k=k.init)&&k(d,!1),p(d.componentInstance))return v(d,f),b(h,d.elm,_),B(z)&&m(d,f,h,_),!0}}function v(d,f){p(d.data.pendingInsert)&&(f.push.apply(f,d.data.pendingInsert),d.data.pendingInsert=null),d.elm=d.componentInstance.$el,w(d)?(g(d,f),C(d)):(rt(d),f.push(d))}function m(d,f,h,_){for(var k,z=d;z.componentInstance;)if(z=z.componentInstance._vnode,p(k=z.data)&&p(k=k.transition)){for(k=0;k<a.activate.length;++k)a.activate[k](Ee,z);f.push(z);break}b(h,d.elm,_)}function b(d,f,h){p(d)&&(p(h)?i.parentNode(h)===d&&i.insertBefore(d,f,h):i.appendChild(d,f))}function x(d,f,h){if(O(f))for(var _=0;_<f.length;++_)c(f[_],h,d.elm,null,!0,f,_);else Tt(d.text)&&i.appendChild(d.elm,i.createTextNode(String(d.text)))}function w(d){for(;d.componentInstance;)d=d.componentInstance._vnode;return p(d.tag)}function g(d,f){for(var h=0;h<a.create.length;++h)a.create[h](Ee,d);t=d.data.hook,p(t)&&(p(t.create)&&t.create(Ee,d),p(t.insert)&&f.push(d))}function C(d){var f;if(p(f=d.fnScopeId))i.setStyleScope(d.elm,f);else for(var h=d;h;)p(f=h.context)&&p(f=f.$options._scopeId)&&i.setStyleScope(d.elm,f),h=h.parent;p(f=We)&&f!==d.context&&f!==d.fnContext&&p(f=f.$options._scopeId)&&i.setStyleScope(d.elm,f)}function y(d,f,h,_,k,z){for(;_<=k;++_)c(h[_],z,d,f,!1,h,_)}function I(d){var f,h,_=d.data;if(p(_))for(p(f=_.hook)&&p(f=f.destroy)&&f(d),f=0;f<a.destroy.length;++f)a.destroy[f](d);if(p(f=d.children))for(h=0;h<d.children.length;++h)I(d.children[h])}function F(d,f,h){for(;f<=h;++f){var _=d[f];p(_)&&(p(_.tag)?(q(_),I(_)):l(_.elm))}}function q(d,f){if(p(f)||p(d.data)){var h,_=a.remove.length+1;for(p(f)?f.listeners+=_:f=o(d.elm,_),p(h=d.componentInstance)&&p(h=h._vnode)&&p(h.data)&&q(h,f),h=0;h<a.remove.length;++h)a.remove[h](d,f);p(h=d.data.hook)&&p(h=h.remove)?h(d,f):f()}else l(d.elm)}function j(d,f,h,_,k){for(var z=0,S=0,T=f.length-1,P=f[0],N=f[T],L=h.length-1,G=h[0],le=h[L],Fe,Ue,je,Ve,dr=!k;z<=T&&S<=L;)$(P)?P=f[++z]:$(N)?N=f[--T]:He(P,G)?(A(P,G,_,h,S),P=f[++z],G=h[++S]):He(N,le)?(A(N,le,_,h,L),N=f[--T],le=h[--L]):He(P,le)?(A(P,le,_,h,L),dr&&i.insertBefore(d,P.elm,i.nextSibling(N.elm)),P=f[++z],le=h[--L]):He(N,G)?(A(N,G,_,h,S),dr&&i.insertBefore(d,N.elm,P.elm),N=f[--T],G=h[++S]):($(Fe)&&(Fe=$c(f,z,T)),Ue=p(G.key)?Fe[G.key]:U(G,f,z,T),$(Ue)?c(G,_,d,P.elm,!1,h,S):(je=f[Ue],He(je,G)?(A(je,G,_,h,S),f[Ue]=void 0,dr&&i.insertBefore(d,je.elm,P.elm)):c(G,_,d,P.elm,!1,h,S)),G=h[++S]);z>T?(Ve=$(h[L+1])?null:h[L+1].elm,y(d,Ve,h,S,L,_)):S>L&&F(f,z,T)}function U(d,f,h,_){for(var k=h;k<_;k++){var z=f[k];if(p(z)&&He(d,z))return k}}function A(d,f,h,_,k,z){if(d!==f){p(f.elm)&&p(_)&&(f=_[k]=Nr(f));var S=f.elm=d.elm;if(B(d.isAsyncPlaceholder)){p(f.asyncFactory.resolved)?Ae(d.elm,f,h):f.isAsyncPlaceholder=!0;return}if(B(f.isStatic)&&B(d.isStatic)&&f.key===d.key&&(B(f.isCloned)||B(f.isOnce))){f.componentInstance=d.componentInstance;return}var T,P=f.data;p(P)&&p(T=P.hook)&&p(T=T.prepatch)&&T(d,f);var N=d.children,L=f.children;if(p(P)&&w(f)){for(T=0;T<a.update.length;++T)a.update[T](d,f);p(T=P.hook)&&p(T=T.update)&&T(d,f)}$(f.text)?p(N)&&p(L)?N!==L&&j(S,N,L,h,z):p(L)?(p(d.text)&&i.setTextContent(S,""),y(S,null,L,0,L.length-1,h)):p(N)?F(N,0,N.length-1):p(d.text)&&i.setTextContent(S,""):d.text!==f.text&&i.setTextContent(S,f.text),p(P)&&p(T=P.hook)&&p(T=T.postpatch)&&T(d,f)}}function te(d,f,h){if(B(h)&&p(d.parent))d.parent.data.pendingInsert=f;else for(var _=0;_<f.length;++_)f[_].data.hook.insert(f[_])}var W=Y("attrs,class,staticClass,staticStyle,key");function Ae(d,f,h,_){var k,z=f.tag,S=f.data,T=f.children;if(_=_||S&&S.pre,f.elm=d,B(f.isComment)&&p(f.asyncFactory))return f.isAsyncPlaceholder=!0,!0;if(p(S)&&(p(k=S.hook)&&p(k=k.init)&&k(f,!0),p(k=f.componentInstance)))return v(f,h),!0;if(p(z)){if(p(T))if(!d.hasChildNodes())x(f,T,h);else if(p(k=S)&&p(k=k.domProps)&&p(k=k.innerHTML)){if(k!==d.innerHTML)return!1}else{for(var P=!0,N=d.firstChild,L=0;L<T.length;L++){if(!N||!Ae(N,T[L],h,_)){P=!1;break}N=N.nextSibling}if(!P||N)return!1}if(p(S)){var G=!1;for(var le in S)if(!W(le)){G=!0,g(f,h);break}!G&&S.class&&st(S.class)}}else d.data!==f.text&&(d.data=f.text);return!0}return function(f,h,_,k){if($(h)){p(f)&&I(f);return}var z=!1,S=[];if($(f))z=!0,c(h,S);else{var T=p(f.nodeType);if(!T&&He(f,h))A(f,h,S,null,null,k);else{if(T){if(f.nodeType===1&&f.hasAttribute(Da)&&(f.removeAttribute(Da),_=!0),B(_)&&Ae(f,h,S))return te(h,S,!0),f;f=s(f)}var P=f.elm,N=i.parentNode(P);if(c(h,S,P._leaveCb?null:N,i.nextSibling(P)),p(h.parent))for(var L=h.parent,G=w(h);L;){for(var le=0;le<a.destroy.length;++le)a.destroy[le](L);if(L.elm=h.elm,G){for(var Fe=0;Fe<a.create.length;++Fe)a.create[Fe](Ee,L);var Ue=L.data.hook.insert;if(Ue.merged)for(var je=Ue.fns.slice(1),Ve=0;Ve<je.length;Ve++)je[Ve]()}else rt(L);L=L.parent}p(N)?F([f],0,0):p(f.tag)&&I(f)}}return te(h,S,z),h.elm}}var Tc={create:mr,update:mr,destroy:function(t){mr(t,Ee)}};function mr(e,t){(e.data.directives||t.data.directives)&&Ac(e,t)}function Ac(e,t){var r=e===Ee,a=t===Ee,n=mn(e.data.directives,e.context),i=mn(t.data.directives,t.context),s=[],o=[],l,c,u;for(l in i)c=n[l],u=i[l],c?(u.oldValue=c.value,u.oldArg=c.arg,pt(u,"update",t,e),u.def&&u.def.componentUpdated&&o.push(u)):(pt(u,"bind",t,e),u.def&&u.def.inserted&&s.push(u));if(s.length){var v=function(){for(var m=0;m<s.length;m++)pt(s[m],"inserted",t,e)};r?Pe(t,"insert",v):v()}if(o.length&&Pe(t,"postpatch",function(){for(var m=0;m<o.length;m++)pt(o[m],"componentUpdated",t,e)}),!r)for(l in n)i[l]||pt(n[l],"unbind",e,e,a)}var Oc=Object.create(null);function mn(e,t){var r=Object.create(null);if(!e)return r;var a,n;for(a=0;a<e.length;a++){if(n=e[a],n.modifiers||(n.modifiers=Oc),r[zc(n)]=n,t._setupState&&t._setupState.__sfc){var i=n.def||ar(t,"_setupState","v-"+n.name);typeof i=="function"?n.def={bind:i,update:i}:n.def=i}n.def=n.def||ar(t.$options,"directives",n.name)}return r}function zc(e){return e.rawName||"".concat(e.name,".").concat(Object.keys(e.modifiers||{}).join("."))}function pt(e,t,r,a,n){var i=e.def&&e.def[t];if(i)try{i(r.elm,e,r,a,n)}catch(s){Je(s,r.context,"directive ".concat(e.name," ").concat(t," hook"))}}var Pc=[xc,Tc];function gn(e,t){var r=t.componentOptions;if(!(p(r)&&r.Ctor.options.inheritAttrs===!1)&&!($(e.data.attrs)&&$(t.data.attrs))){var a,n,i,s=t.elm,o=e.data.attrs||{},l=t.data.attrs||{};(p(l.__ob__)||B(l._v_attr_proxy))&&(l=t.data.attrs=E({},l));for(a in l)n=l[a],i=o[a],i!==n&&bn(s,a,n,t.data.pre);(Le||Ti)&&l.value!==o.value&&bn(s,"value",l.value);for(a in o)$(l[a])&&(_a(a)?s.removeAttributeNS(Wr,as(a)):rs(a)||s.removeAttribute(a))}}function bn(e,t,r,a){a||e.tagName.indexOf("-")>-1?yn(e,t,r):tc(t)?nr(r)?e.removeAttribute(t):(r=t==="allowfullscreen"&&e.tagName==="EMBED"?"true":t,e.setAttribute(t,r)):rs(t)?e.setAttribute(t,ec(t,r)):_a(t)?nr(r)?e.removeAttributeNS(Wr,as(t)):e.setAttributeNS(Wr,t,r):yn(e,t,r)}function yn(e,t,r){if(nr(r))e.removeAttribute(t);else{if(Le&&!lt&&e.tagName==="TEXTAREA"&&t==="placeholder"&&r!==""&&!e.__ieph){var a=function(n){n.stopImmediatePropagation(),e.removeEventListener("input",a)};e.addEventListener("input",a),e.__ieph=!0}e.setAttribute(t,r)}}var Ec={create:gn,update:gn};function _n(e,t){var r=t.elm,a=t.data,n=e.data;if(!($(a.staticClass)&&$(a.class)&&($(n)||$(n.staticClass)&&$(n.class)))){var i=rc(t),s=r._transitionClasses;p(s)&&(i=wa(i,Ca(s))),i!==r._prevClass&&(r.setAttribute("class",i),r._prevClass=i)}}var Nc={create:_n,update:_n},Lc=/[\w).+\-_$\]]/;function Sa(e){var t=!1,r=!1,a=!1,n=!1,i=0,s=0,o=0,l=0,c,u,v,m,b;for(v=0;v<e.length;v++)if(u=c,c=e.charCodeAt(v),t)c===39&&u!==92&&(t=!1);else if(r)c===34&&u!==92&&(r=!1);else if(a)c===96&&u!==92&&(a=!1);else if(n)c===47&&u!==92&&(n=!1);else if(c===124&&e.charCodeAt(v+1)!==124&&e.charCodeAt(v-1)!==124&&!i&&!s&&!o)m===void 0?(l=v+1,m=e.slice(0,v).trim()):g();else{switch(c){case 34:r=!0;break;case 39:t=!0;break;case 96:a=!0;break;case 40:o++;break;case 41:o--;break;case 91:s++;break;case 93:s--;break;case 123:i++;break;case 125:i--;break}if(c===47){for(var x=v-1,w=void 0;x>=0&&(w=e.charAt(x),w===" ");x--);(!w||!Lc.test(w))&&(n=!0)}}m===void 0?m=e.slice(0,v).trim():l!==0&&g();function g(){(b||(b=[])).push(e.slice(l,v).trim()),l=v+1}if(b)for(v=0;v<b.length;v++)m=Ic(m,b[v]);return m}function Ic(e,t){var r=t.indexOf("(");if(r<0)return'_f("'.concat(t,'")(').concat(e,")");var a=t.slice(0,r),n=t.slice(r+1);return'_f("'.concat(a,'")(').concat(e).concat(n!==")"?","+n:n)}function fr(e,t){console.error("[Vue compiler]: ".concat(e))}function yt(e,t){return e?e.map(function(r){return r[t]}).filter(function(r){return r}):[]}function Ze(e,t,r,a,n){(e.props||(e.props=[])).push(zt({name:t,value:r,dynamic:n},a)),e.plain=!1}function Gr(e,t,r,a,n){var i=n?e.dynamicAttrs||(e.dynamicAttrs=[]):e.attrs||(e.attrs=[]);i.push(zt({name:t,value:r,dynamic:n},a)),e.plain=!1}function gr(e,t,r,a){e.attrsMap[t]=r,e.attrsList.push(zt({name:t,value:r},a))}function Dc(e,t,r,a,n,i,s,o){(e.directives||(e.directives=[])).push(zt({name:t,rawName:r,value:a,arg:n,isDynamicArg:i,modifiers:s},o)),e.plain=!1}function br(e,t,r){return r?"_p(".concat(t,',"').concat(e,'")'):e+t}function we(e,t,r,a,n,i,s,o){a=a||J,a.right?o?t="(".concat(t,")==='click'?'contextmenu':(").concat(t,")"):t==="click"&&(t="contextmenu",delete a.right):a.middle&&(o?t="(".concat(t,")==='click'?'mouseup':(").concat(t,")"):t==="click"&&(t="mouseup")),a.capture&&(delete a.capture,t=br("!",t,o)),a.once&&(delete a.once,t=br("~",t,o)),a.passive&&(delete a.passive,t=br("&",t,o));var l;a.native?(delete a.native,l=e.nativeEvents||(e.nativeEvents={})):l=e.events||(e.events={});var c=zt({value:r.trim(),dynamic:o},s);a!==J&&(c.modifiers=a);var u=l[t];Array.isArray(u)?n?u.unshift(c):u.push(c):u?l[t]=n?[c,u]:[u,c]:l[t]=c,e.plain=!1}function Mc(e,t){return e.rawAttrsMap[":"+t]||e.rawAttrsMap["v-bind:"+t]||e.rawAttrsMap[t]}function ve(e,t,r){var a=K(e,":"+t)||K(e,"v-bind:"+t);if(a!=null)return Sa(a);if(r!==!1){var n=K(e,t);if(n!=null)return JSON.stringify(n)}}function K(e,t,r){var a;if((a=e.attrsMap[t])!=null){for(var n=e.attrsList,i=0,s=n.length;i<s;i++)if(n[i].name===t){n.splice(i,1);break}}return r&&delete e.attrsMap[t],a}function wn(e,t){for(var r=e.attrsList,a=0,n=r.length;a<n;a++){var i=r[a];if(t.test(i.name))return r.splice(a,1),i}}function zt(e,t){return t&&(t.start!=null&&(e.start=t.start),t.end!=null&&(e.end=t.end)),e}function Cn(e,t,r){var a=r||{},n=a.number,i=a.trim,s="$$v",o=s;i&&(o="(typeof ".concat(s," === 'string'")+"? ".concat(s,".trim()")+": ".concat(s,")")),n&&(o="_n(".concat(o,")"));var l=Ne(t,o);e.model={value:"(".concat(t,")"),expression:JSON.stringify(t),callback:"function (".concat(s,") {").concat(l,"}")}}function Ne(e,t){var r=Rc(e);return r.key===null?"".concat(e,"=").concat(t):"$set(".concat(r.exp,", ").concat(r.key,", ").concat(t,")")}var Yr,is,ht,ye,Wt,Jr;function Rc(e){if(e=e.trim(),Yr=e.length,e.indexOf("[")<0||e.lastIndexOf("]")<Yr-1)return ye=e.lastIndexOf("."),ye>-1?{exp:e.slice(0,ye),key:'"'+e.slice(ye+1)+'"'}:{exp:e,key:null};for(is=e,ye=Wt=Jr=0;!Aa();)ht=Ta(),ss(ht)?os(ht):ht===91&&Fc(ht);return{exp:e.slice(0,Wt),key:e.slice(Wt+1,Jr)}}function Ta(){return is.charCodeAt(++ye)}function Aa(){return ye>=Yr}function ss(e){return e===34||e===39}function Fc(e){var t=1;for(Wt=ye;!Aa();){if(e=Ta(),ss(e)){os(e);continue}if(e===91&&t++,e===93&&t--,t===0){Jr=ye;break}}}function os(e){for(var t=e;!Aa()&&(e=Ta(),e!==t););}var Kt="__r",yr="__c";function Uc(e,t,r){var a=t.value,n=t.modifiers,i=e.tag,s=e.attrsMap.type;if(e.component)return Cn(e,a,n),!1;if(i==="select")Bc(e,a,n);else if(i==="input"&&s==="checkbox")jc(e,a,n);else if(i==="input"&&s==="radio")Hc(e,a,n);else if(i==="input"||i==="textarea")qc(e,a,n);else if(!ae.isReservedTag(i))return Cn(e,a,n),!1;return!0}function jc(e,t,r){var a=r&&r.number,n=ve(e,"value")||"null",i=ve(e,"true-value")||"true",s=ve(e,"false-value")||"false";Ze(e,"checked","Array.isArray(".concat(t,")")+"?_i(".concat(t,",").concat(n,")>-1")+(i==="true"?":(".concat(t,")"):":_q(".concat(t,",").concat(i,")"))),we(e,"change","var $$a=".concat(t,",")+"$$el=$event.target,"+"$$c=$$el.checked?(".concat(i,"):(").concat(s,");")+"if(Array.isArray($$a)){"+"var $$v=".concat(a?"_n("+n+")":n,",")+"$$i=_i($$a,$$v);"+"if($$el.checked){$$i<0&&(".concat(Ne(t,"$$a.concat([$$v])"),")}")+"else{$$i>-1&&(".concat(Ne(t,"$$a.slice(0,$$i).concat($$a.slice($$i+1))"),")}")+"}else{".concat(Ne(t,"$$c"),"}"),null,!0)}function Hc(e,t,r){var a=r&&r.number,n=ve(e,"value")||"null";n=a?"_n(".concat(n,")"):n,Ze(e,"checked","_q(".concat(t,",").concat(n,")")),we(e,"change",Ne(t,n),null,!0)}function Bc(e,t,r){var a=r&&r.number,n='Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;'+"return ".concat(a?"_n(val)":"val","})"),i="$event.target.multiple ? $$selectedVal : $$selectedVal[0]",s="var $$selectedVal = ".concat(n,";");s="".concat(s," ").concat(Ne(t,i)),we(e,"change",s,null,!0)}function qc(e,t,r){var a=e.attrsMap.type,n=r||{},i=n.lazy,s=n.number,o=n.trim,l=!i&&a!=="range",c=i?"change":a==="range"?Kt:"input",u="$event.target.value";o&&(u="$event.target.value.trim()"),s&&(u="_n(".concat(u,")"));var v=Ne(t,u);l&&(v="if($event.target.composing)return;".concat(v)),Ze(e,"value","(".concat(t,")")),we(e,c,v,null,!0),(o||s)&&we(e,"blur","$forceUpdate()")}function Wc(e){if(p(e[Kt])){var t=Le?"change":"input";e[t]=[].concat(e[Kt],e[t]||[]),delete e[Kt]}p(e[yr])&&(e.change=[].concat(e[yr],e.change||[]),delete e[yr])}var St;function Kc(e,t,r){var a=St;return function n(){var i=t.apply(null,arguments);i!==null&&ls(e,n,r,a)}}var Gc=Fr&&!(Ma&&Number(Ma[1])<=53);function Yc(e,t,r,a){if(Gc){var n=Ji,i=t;t=i._wrapper=function(s){if(s.target===s.currentTarget||s.timeStamp>=n||s.timeStamp<=0||s.target.ownerDocument!==document)return i.apply(this,arguments)}}St.addEventListener(e,t,Ai?{capture:r,passive:a}:r)}function ls(e,t,r,a){(a||St).removeEventListener(e,t._wrapper||t,r)}function _r(e,t){if(!($(e.data.on)&&$(t.data.on))){var r=t.data.on||{},a=e.data.on||{};St=t.elm||e.elm,Wc(r),Di(r,a,Yc,ls,Kc,t.context),St=void 0}}var Jc={create:_r,update:_r,destroy:function(e){return _r(e,Ee)}},Dt;function xn(e,t){if(!($(e.data.domProps)&&$(t.data.domProps))){var r,a,n=t.elm,i=e.data.domProps||{},s=t.data.domProps||{};(p(s.__ob__)||B(s._v_attr_proxy))&&(s=t.data.domProps=E({},s));for(r in i)r in s||(n[r]="");for(r in s){if(a=s[r],r==="textContent"||r==="innerHTML"){if(t.children&&(t.children.length=0),a===i[r])continue;n.childNodes.length===1&&n.removeChild(n.childNodes[0])}if(r==="value"&&n.tagName!=="PROGRESS"){n._value=a;var o=$(a)?"":String(a);Xc(n,o)&&(n.value=o)}else if(r==="innerHTML"&&xa(n.tagName)&&$(n.innerHTML)){Dt=Dt||document.createElement("div"),Dt.innerHTML="<svg>".concat(a,"</svg>");for(var l=Dt.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;l.firstChild;)n.appendChild(l.firstChild)}else if(a!==i[r])try{n[r]=a}catch{}}}}function Xc(e,t){return!e.composing&&(e.tagName==="OPTION"||Zc(e,t)||Vc(e,t))}function Zc(e,t){var r=!0;try{r=document.activeElement!==e}catch{}return r&&e.value!==t}function Vc(e,t){var r=e.value,a=e._vModifiers;if(p(a)){if(a.number)return _t(r)!==_t(t);if(a.trim)return r.trim()!==t.trim()}return r!==t}var Qc={create:xn,update:xn},cs=he(function(e){var t={},r=/;(?![^(]*\))/g,a=/:(.+)/;return e.split(r).forEach(function(n){if(n){var i=n.split(a);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t});function wr(e){var t=us(e.style);return e.staticStyle?E(e.staticStyle,t):t}function us(e){return Array.isArray(e)?wi(e):typeof e=="string"?cs(e):e}function eu(e,t){for(var r={},a,n=e;n.componentInstance;)n=n.componentInstance._vnode,n&&n.data&&(a=wr(n.data))&&E(r,a);(a=wr(e.data))&&E(r,a);for(var i=e;i=i.parent;)i.data&&(a=wr(i.data))&&E(r,a);return r}var tu=/^--/,kn=/\s*!important$/,$n=function(e,t,r){if(tu.test(t))e.style.setProperty(t,r);else if(kn.test(r))e.style.setProperty(Ge(t),r.replace(kn,""),"important");else{var a=ru(t);if(Array.isArray(r))for(var n=0,i=r.length;n<i;n++)e.style[a]=r[n];else e.style[a]=r}},Sn=["Webkit","Moz","ms"],Mt,ru=he(function(e){if(Mt=Mt||document.createElement("div").style,e=re(e),e!=="filter"&&e in Mt)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),r=0;r<Sn.length;r++){var a=Sn[r]+t;if(a in Mt)return a}});function Tn(e,t){var r=t.data,a=e.data;if(!($(r.staticStyle)&&$(r.style)&&$(a.staticStyle)&&$(a.style))){var n,i,s=t.elm,o=a.staticStyle,l=a.normalizedStyle||a.style||{},c=o||l,u=us(t.data.style)||{};t.data.normalizedStyle=p(u.__ob__)?E({},u):u;var v=eu(t);for(i in c)$(v[i])&&$n(s,i,"");for(i in v)n=v[i],$n(s,i,n??"")}}var au={create:Tn,update:Tn},vs=/\s+/;function fs(e,t){if(!(!t||!(t=t.trim())))if(e.classList)t.indexOf(" ")>-1?t.split(vs).forEach(function(a){return e.classList.add(a)}):e.classList.add(t);else{var r=" ".concat(e.getAttribute("class")||""," ");r.indexOf(" "+t+" ")<0&&e.setAttribute("class",(r+t).trim())}}function ds(e,t){if(!(!t||!(t=t.trim())))if(e.classList)t.indexOf(" ")>-1?t.split(vs).forEach(function(n){return e.classList.remove(n)}):e.classList.remove(t),e.classList.length||e.removeAttribute("class");else{for(var r=" ".concat(e.getAttribute("class")||""," "),a=" "+t+" ";r.indexOf(a)>=0;)r=r.replace(a," ");r=r.trim(),r?e.setAttribute("class",r):e.removeAttribute("class")}}function ps(e){if(e){if(typeof e=="object"){var t={};return e.css!==!1&&E(t,An(e.name||"v")),E(t,e),t}else if(typeof e=="string")return An(e)}}var An=he(function(e){return{enterClass:"".concat(e,"-enter"),enterToClass:"".concat(e,"-enter-to"),enterActiveClass:"".concat(e,"-enter-active"),leaveClass:"".concat(e,"-leave"),leaveToClass:"".concat(e,"-leave-to"),leaveActiveClass:"".concat(e,"-leave-active")}}),hs=Q&&!lt,Qe="transition",Cr="animation",Gt="transition",ir="transitionend",Xr="animation",ms="animationend";hs&&(window.ontransitionend===void 0&&window.onwebkittransitionend!==void 0&&(Gt="WebkitTransition",ir="webkitTransitionEnd"),window.onanimationend===void 0&&window.onwebkitanimationend!==void 0&&(Xr="WebkitAnimation",ms="webkitAnimationEnd"));var On=Q?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:(function(e){return e()});function gs(e){On(function(){On(e)})}function Ke(e,t){var r=e._transitionClasses||(e._transitionClasses=[]);r.indexOf(t)<0&&(r.push(t),fs(e,t))}function Ce(e,t){e._transitionClasses&&Re(e._transitionClasses,t),ds(e,t)}function bs(e,t,r){var a=ys(e,t),n=a.type,i=a.timeout,s=a.propCount;if(!n)return r();var o=n===Qe?ir:ms,l=0,c=function(){e.removeEventListener(o,u),r()},u=function(v){v.target===e&&++l>=s&&c()};setTimeout(function(){l<s&&c()},i+1),e.addEventListener(o,u)}var nu=/\b(transform|all)(,|$)/;function ys(e,t){var r=window.getComputedStyle(e),a=(r[Gt+"Delay"]||"").split(", "),n=(r[Gt+"Duration"]||"").split(", "),i=zn(a,n),s=(r[Xr+"Delay"]||"").split(", "),o=(r[Xr+"Duration"]||"").split(", "),l=zn(s,o),c,u=0,v=0;t===Qe?i>0&&(c=Qe,u=i,v=n.length):t===Cr?l>0&&(c=Cr,u=l,v=o.length):(u=Math.max(i,l),c=u>0?i>l?Qe:Cr:null,v=c?c===Qe?n.length:o.length:0);var m=c===Qe&&nu.test(r[Gt+"Property"]);return{type:c,timeout:u,propCount:v,hasTransform:m}}function zn(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max.apply(null,t.map(function(r,a){return Pn(r)+Pn(e[a])}))}function Pn(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function Zr(e,t){var r=e.elm;p(r._leaveCb)&&(r._leaveCb.cancelled=!0,r._leaveCb());var a=ps(e.data.transition);if(!$(a)&&!(p(r._enterCb)||r.nodeType!==1)){for(var n=a.css,i=a.type,s=a.enterClass,o=a.enterToClass,l=a.enterActiveClass,c=a.appearClass,u=a.appearToClass,v=a.appearActiveClass,m=a.beforeEnter,b=a.enter,x=a.afterEnter,w=a.enterCancelled,g=a.beforeAppear,C=a.appear,y=a.afterAppear,I=a.appearCancelled,F=a.duration,q=We,j=We.$vnode;j&&j.parent;)q=j.context,j=j.parent;var U=!q._isMounted||!e.isRootInsert;if(!(U&&!C&&C!=="")){var A=U&&c?c:s,te=U&&v?v:l,W=U&&u?u:o,Ae=U&&g||m,d=U&&D(C)?C:b,f=U&&y||x,h=U&&I||w,_=_t(X(F)?F.enter:F),k=n!==!1&&!lt,z=Oa(d),S=r._enterCb=Zt(function(){k&&(Ce(r,W),Ce(r,te)),S.cancelled?(k&&Ce(r,A),h&&h(r)):f&&f(r),r._enterCb=null});e.data.show||Pe(e,"insert",function(){var T=r.parentNode,P=T&&T._pending&&T._pending[e.key];P&&P.tag===e.tag&&P.elm._leaveCb&&P.elm._leaveCb(),d&&d(r,S)}),Ae&&Ae(r),k&&(Ke(r,A),Ke(r,te),gs(function(){Ce(r,A),S.cancelled||(Ke(r,W),z||(ws(_)?setTimeout(S,_):bs(r,i,S)))})),e.data.show&&(t&&t(),d&&d(r,S)),!k&&!z&&S()}}}function _s(e,t){var r=e.elm;p(r._enterCb)&&(r._enterCb.cancelled=!0,r._enterCb());var a=ps(e.data.transition);if($(a)||r.nodeType!==1)return t();if(p(r._leaveCb))return;var n=a.css,i=a.type,s=a.leaveClass,o=a.leaveToClass,l=a.leaveActiveClass,c=a.beforeLeave,u=a.leave,v=a.afterLeave,m=a.leaveCancelled,b=a.delayLeave,x=a.duration,w=n!==!1&&!lt,g=Oa(u),C=_t(X(x)?x.leave:x),y=r._leaveCb=Zt(function(){r.parentNode&&r.parentNode._pending&&(r.parentNode._pending[e.key]=null),w&&(Ce(r,o),Ce(r,l)),y.cancelled?(w&&Ce(r,s),m&&m(r)):(t(),v&&v(r)),r._leaveCb=null});b?b(I):I();function I(){y.cancelled||(!e.data.show&&r.parentNode&&((r.parentNode._pending||(r.parentNode._pending={}))[e.key]=e),c&&c(r),w&&(Ke(r,s),Ke(r,l),gs(function(){Ce(r,s),y.cancelled||(Ke(r,o),g||(ws(C)?setTimeout(y,C):bs(r,i,y)))})),u&&u(r,y),!w&&!g&&y())}}function ws(e){return typeof e=="number"&&!isNaN(e)}function Oa(e){if($(e))return!1;var t=e.fns;return p(t)?Oa(Array.isArray(t)?t[0]:t):(e._length||e.length)>1}function En(e,t){t.data.show!==!0&&Zr(t)}var iu=Q?{create:En,activate:En,remove:function(e,t){e.data.show!==!0?_s(e,t):t()}}:{},su=[Ec,Nc,Jc,Qc,au,iu],ou=su.concat(Pc),lu=Sc({nodeOps:Cc,modules:ou});lt&&document.addEventListener("selectionchange",function(){var e=document.activeElement;e&&e.vmodel&&za(e,"input")});var Cs={inserted:function(e,t,r,a){r.tag==="select"?(a.elm&&!a.elm._vOptions?Pe(r,"postpatch",function(){Cs.componentUpdated(e,t,r)}):Nn(e,t,r.context),e._vOptions=[].map.call(e.options,sr)):(r.tag==="textarea"||Kr(e.type))&&(e._vModifiers=t.modifiers,t.modifiers.lazy||(e.addEventListener("compositionstart",cu),e.addEventListener("compositionend",Dn),e.addEventListener("change",Dn),lt&&(e.vmodel=!0)))},componentUpdated:function(e,t,r){if(r.tag==="select"){Nn(e,t,r.context);var a=e._vOptions,n=e._vOptions=[].map.call(e.options,sr);if(n.some(function(s,o){return!Ye(s,a[o])})){var i=e.multiple?t.value.some(function(s){return In(s,n)}):t.value!==t.oldValue&&In(t.value,n);i&&za(e,"change")}}}};function Nn(e,t,r){Ln(e,t),(Le||Ti)&&setTimeout(function(){Ln(e,t)},0)}function Ln(e,t,r){var a=t.value,n=e.multiple;if(!(n&&!Array.isArray(a))){for(var i,s,o=0,l=e.options.length;o<l;o++)if(s=e.options[o],n)i=xi(a,sr(s))>-1,s.selected!==i&&(s.selected=i);else if(Ye(sr(s),a)){e.selectedIndex!==o&&(e.selectedIndex=o);return}n||(e.selectedIndex=-1)}}function In(e,t){return t.every(function(r){return!Ye(r,e)})}function sr(e){return"_value"in e?e._value:e.value}function cu(e){e.target.composing=!0}function Dn(e){e.target.composing&&(e.target.composing=!1,za(e.target,"input"))}function za(e,t){var r=document.createEvent("HTMLEvents");r.initEvent(t,!0,!0),e.dispatchEvent(r)}function Vr(e){return e.componentInstance&&(!e.data||!e.data.transition)?Vr(e.componentInstance._vnode):e}var uu={bind:function(e,t,r){var a=t.value;r=Vr(r);var n=r.data&&r.data.transition,i=e.__vOriginalDisplay=e.style.display==="none"?"":e.style.display;a&&n?(r.data.show=!0,Zr(r,function(){e.style.display=i})):e.style.display=a?i:"none"},update:function(e,t,r){var a=t.value,n=t.oldValue;if(!a!=!n){r=Vr(r);var i=r.data&&r.data.transition;i?(r.data.show=!0,a?Zr(r,function(){e.style.display=e.__vOriginalDisplay}):_s(r,function(){e.style.display="none"})):e.style.display=a?e.__vOriginalDisplay:"none"}},unbind:function(e,t,r,a,n){n||(e.style.display=e.__vOriginalDisplay)}},vu={model:Cs,show:uu},xs={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function Qr(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?Qr(qi(t.children)):e}function ks(e){var t={},r=e.$options;for(var a in r.propsData)t[a]=e[a];var n=r._parentListeners;for(var a in n)t[re(a)]=n[a];return t}function Mn(e,t){if(/\d-keep-alive$/.test(t.tag))return e("keep-alive",{props:t.componentOptions.propsData})}function fu(e){for(;e=e.parent;)if(e.data.transition)return!0}function du(e,t){return t.key===e.key&&t.tag===e.tag}var pu=function(e){return e.tag||xt(e)},hu=function(e){return e.name==="show"},mu={name:"transition",props:xs,abstract:!0,render:function(e){var t=this,r=this.$slots.default;if(r&&(r=r.filter(pu),!!r.length)){var a=this.mode,n=r[0];if(fu(this.$vnode))return n;var i=Qr(n);if(!i)return n;if(this._leaving)return Mn(e,n);var s="__transition-".concat(this._uid,"-");i.key=i.key==null?i.isComment?s+"comment":s+i.tag:Tt(i.key)?String(i.key).indexOf(s)===0?i.key:s+i.key:i.key;var o=(i.data||(i.data={})).transition=ks(this),l=this._vnode,c=Qr(l);if(i.data.directives&&i.data.directives.some(hu)&&(i.data.show=!0),c&&c.data&&!du(i,c)&&!xt(c)&&!(c.componentInstance&&c.componentInstance._vnode.isComment)){var u=c.data.transition=E({},o);if(a==="out-in")return this._leaving=!0,Pe(u,"afterLeave",function(){t._leaving=!1,t.$forceUpdate()}),Mn(e,n);if(a==="in-out"){if(xt(i))return l;var v,m=function(){v()};Pe(o,"afterEnter",m),Pe(o,"enterCancelled",m),Pe(u,"delayLeave",function(b){v=b})}}return n}}},$s=E({tag:String,moveClass:String},xs);delete $s.mode;var gu={props:$s,beforeMount:function(){var e=this,t=this._update;this._update=function(r,a){var n=Ki(e);e.__patch__(e._vnode,e.kept,!1,!0),e._vnode=e.kept,n(),t.call(e,r,a)}},render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",r=Object.create(null),a=this.prevChildren=this.children,n=this.$slots.default||[],i=this.children=[],s=ks(this),o=0;o<n.length;o++){var l=n[o];l.tag&&l.key!=null&&String(l.key).indexOf("__vlist")!==0&&(i.push(l),r[l.key]=l,(l.data||(l.data={})).transition=s)}if(a){for(var c=[],u=[],o=0;o<a.length;o++){var l=a[o];l.data.transition=s,l.data.pos=l.elm.getBoundingClientRect(),r[l.key]?c.push(l):u.push(l)}this.kept=e(t,null,c),this.removed=u}return e(t,null,i)},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";!e.length||!this.hasMove(e[0].elm,t)||(e.forEach(bu),e.forEach(yu),e.forEach(_u),this._reflow=document.body.offsetHeight,e.forEach(function(r){if(r.data.moved){var a=r.elm,n=a.style;Ke(a,t),n.transform=n.WebkitTransform=n.transitionDuration="",a.addEventListener(ir,a._moveCb=function i(s){s&&s.target!==a||(!s||/transform$/.test(s.propertyName))&&(a.removeEventListener(ir,i),a._moveCb=null,Ce(a,t))})}}))},methods:{hasMove:function(e,t){if(!hs)return!1;if(this._hasMove)return this._hasMove;var r=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach(function(n){ds(r,n)}),fs(r,t),r.style.display="none",this.$el.appendChild(r);var a=ys(r);return this.$el.removeChild(r),this._hasMove=a.hasTransform}}};function bu(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function yu(e){e.data.newPos=e.elm.getBoundingClientRect()}function _u(e){var t=e.data.pos,r=e.data.newPos,a=t.left-r.left,n=t.top-r.top;if(a||n){e.data.moved=!0;var i=e.elm.style;i.transform=i.WebkitTransform="translate(".concat(a,"px,").concat(n,"px)"),i.transitionDuration="0s"}}var wu={Transition:mu,TransitionGroup:gu};R.config.mustUseProp=ts;R.config.isReservedTag=ka;R.config.isReservedAttr=Zl;R.config.getTagNamespace=ns;R.config.isUnknownElement=cc;E(R.options.directives,vu);E(R.options.components,wu);R.prototype.__patch__=Q?lu:M;R.prototype.$mount=function(e,t){return e=e&&Q?$a(e):void 0,Jo(this,e,t)};Q&&setTimeout(function(){ae.devtools&&Vt&&Vt.emit("init",R)},0);var Cu=/\{\{((?:.|\r?\n)+?)\}\}/g,Rn=/[-.*+?^${}()|[\]\/\\]/g,xu=he(function(e){var t=e[0].replace(Rn,"\\$&"),r=e[1].replace(Rn,"\\$&");return new RegExp(t+"((?:.|\\n)+?)"+r,"g")});function ku(e,t){var r=t?xu(t):Cu;if(r.test(e)){for(var a=[],n=[],i=r.lastIndex=0,s,o,l;s=r.exec(e);){o=s.index,o>i&&(n.push(l=e.slice(i,o)),a.push(JSON.stringify(l)));var c=Sa(s[1].trim());a.push("_s(".concat(c,")")),n.push({"@binding":c}),i=o+s[0].length}return i<e.length&&(n.push(l=e.slice(i)),a.push(JSON.stringify(l))),{expression:a.join("+"),tokens:n}}}function $u(e,t){t.warn;var r=K(e,"class");r&&(e.staticClass=JSON.stringify(r.replace(/\s+/g," ").trim()));var a=ve(e,"class",!1);a&&(e.classBinding=a)}function Su(e){var t="";return e.staticClass&&(t+="staticClass:".concat(e.staticClass,",")),e.classBinding&&(t+="class:".concat(e.classBinding,",")),t}var Tu={staticKeys:["staticClass"],transformNode:$u,genData:Su};function Au(e,t){t.warn;var r=K(e,"style");r&&(e.staticStyle=JSON.stringify(cs(r)));var a=ve(e,"style",!1);a&&(e.styleBinding=a)}function Ou(e){var t="";return e.staticStyle&&(t+="staticStyle:".concat(e.staticStyle,",")),e.styleBinding&&(t+="style:(".concat(e.styleBinding,"),")),t}var zu={staticKeys:["staticStyle"],transformNode:Au,genData:Ou},Rt,Pu={decode:function(e){return Rt=Rt||document.createElement("div"),Rt.innerHTML=e,Rt.textContent}},Eu=Y("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),Nu=Y("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),Lu=Y("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),Iu=/^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,Du=/^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+?\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,Fn="[a-zA-Z_][\\-\\.0-9_a-zA-Z".concat($i.source,"]*"),Ss="((?:".concat(Fn,"\\:)?").concat(Fn,")"),Un=new RegExp("^<".concat(Ss)),Mu=/^\s*(\/?)>/,jn=new RegExp("^<\\/".concat(Ss,"[^>]*>")),Ru=/^<!DOCTYPE [^>]+>/i,Hn=/^<!\--/,Bn=/^<!\[/,qn=Y("script,style,textarea",!0),Wn={},Fu={"&lt;":"<","&gt;":">","&quot;":'"',"&amp;":"&","&#10;":`
`,"&#9;":"	","&#39;":"'"},Uu=/&(?:lt|gt|quot|amp|#39);/g,ju=/&(?:lt|gt|quot|amp|#39|#10|#9);/g,Hu=Y("pre,textarea",!0),Kn=function(e,t){return e&&Hu(e)&&t[0]===`
`};function Bu(e,t){var r=t?ju:Uu;return e.replace(r,function(a){return Fu[a]})}function qu(e,t){for(var r=[],a=t.expectHTML,n=t.isUnaryTag||ce,i=t.canBeLeftOpenTag||ce,s=0,o,l,c=function(){if(o=e,!l||!qn(l)){var w=e.indexOf("<");if(w===0){if(Hn.test(e)){var g=e.indexOf("-->");if(g>=0)return t.shouldKeepComment&&t.comment&&t.comment(e.substring(4,g),s,s+g+3),v(g+3),"continue"}if(Bn.test(e)){var C=e.indexOf("]>");if(C>=0)return v(C+2),"continue"}var y=e.match(Ru);if(y)return v(y[0].length),"continue";var I=e.match(jn);if(I){var F=s;return v(I[0].length),x(I[1],F,s),"continue"}var q=m();if(q)return b(q),Kn(q.tagName,e)&&v(1),"continue"}var j=void 0,U=void 0,A=void 0;if(w>=0){for(U=e.slice(w);!jn.test(U)&&!Un.test(U)&&!Hn.test(U)&&!Bn.test(U)&&(A=U.indexOf("<",1),!(A<0));)w+=A,U=e.slice(w);j=e.substring(0,w)}w<0&&(j=e),j&&v(j.length),t.chars&&j&&t.chars(j,s-j.length,s)}else{var te=0,W=l.toLowerCase(),Ae=Wn[W]||(Wn[W]=new RegExp("([\\s\\S]*?)(</"+W+"[^>]*>)","i")),U=e.replace(Ae,function(f,h,_){return te=_.length,!qn(W)&&W!=="noscript"&&(h=h.replace(/<!\--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),Kn(W,h)&&(h=h.slice(1)),t.chars&&t.chars(h),""});s+=e.length-U.length,e=U,x(W,s-te,s)}if(e===o)return t.chars&&t.chars(e),"break"};e;){var u=c();if(u==="break")break}x();function v(w){s+=w,e=e.substring(w)}function m(){var w=e.match(Un);if(w){var g={tagName:w[1],attrs:[],start:s};v(w[0].length);for(var C=void 0,y=void 0;!(C=e.match(Mu))&&(y=e.match(Du)||e.match(Iu));)y.start=s,v(y[0].length),y.end=s,g.attrs.push(y);if(C)return g.unarySlash=C[1],v(C[0].length),g.end=s,g}}function b(w){var g=w.tagName,C=w.unarySlash;a&&(l==="p"&&Lu(g)&&x(l),i(g)&&l===g&&x(g));for(var y=n(g)||!!C,I=w.attrs.length,F=new Array(I),q=0;q<I;q++){var j=w.attrs[q],U=j[3]||j[4]||j[5]||"",A=g==="a"&&j[1]==="href"?t.shouldDecodeNewlinesForHref:t.shouldDecodeNewlines;F[q]={name:j[1],value:Bu(U,A)}}y||(r.push({tag:g,lowerCasedTag:g.toLowerCase(),attrs:F,start:w.start,end:w.end}),l=g),t.start&&t.start(g,F,y,w.start,w.end)}function x(w,g,C){var y,I;if(g==null&&(g=s),C==null&&(C=s),w)for(I=w.toLowerCase(),y=r.length-1;y>=0&&r[y].lowerCasedTag!==I;y--);else y=0;if(y>=0){for(var F=r.length-1;F>=y;F--)t.end&&t.end(r[F].tag,g,C);r.length=y,l=y&&r[y-1].tag}else I==="br"?t.start&&t.start(w,[],!0,g,C):I==="p"&&(t.start&&t.start(w,[],!1,g,C),t.end&&t.end(w,g,C))}}var Gn=/^@|^v-on:/,xr=/^v-|^@|^:|^#/,Wu=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,Yn=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,Ku=/^\(|\)$/g,Yt=/^\[.*\]$/,Gu=/:(.*)$/,Jn=/^:|^\.|^v-bind:/,Ts=/\.[^.\]]+(?=[^\]]*$)/g,ea=/^v-slot(:|$)|^#/,Yu=/[\r\n]/,Ju=/[ \f\t\r\n]+/g,Xu=he(Pu.decode),or="_empty_",at,Xn,ta,kr,$r,Sr,ra,Zn;function Pa(e,t,r){return{type:1,tag:e,attrsList:t,attrsMap:dv(t),rawAttrsMap:{},parent:r,children:[]}}function Zu(e,t){at=t.warn||fr,Sr=t.isPreTag||ce,ra=t.mustUseProp||ce,Zn=t.getTagNamespace||ce,t.isReservedTag,ta=yt(t.modules,"transformNode"),kr=yt(t.modules,"preTransformNode"),$r=yt(t.modules,"postTransformNode"),Xn=t.delimiters;var r=[],a=t.preserveWhitespace!==!1,n=t.whitespace,i,s,o=!1,l=!1;function c(v){if(u(v),!o&&!v.processed&&(v=Jt(v,t)),!r.length&&v!==i&&i.if&&(v.elseif||v.else)&&it(i,{exp:v.elseif,block:v}),s&&!v.forbidden)if(v.elseif||v.else)nv(v,s);else{if(v.slotScope){var m=v.slotTarget||'"default"';(s.scopedSlots||(s.scopedSlots={}))[m]=v}s.children.push(v),v.parent=s}v.children=v.children.filter(function(x){return!x.slotScope}),u(v),v.pre&&(o=!1),Sr(v.tag)&&(l=!1);for(var b=0;b<$r.length;b++)$r[b](v,t)}function u(v){if(!l)for(var m=void 0;(m=v.children[v.children.length-1])&&m.type===3&&m.text===" ";)v.children.pop()}return qu(e,{warn:at,expectHTML:t.expectHTML,isUnaryTag:t.isUnaryTag,canBeLeftOpenTag:t.canBeLeftOpenTag,shouldDecodeNewlines:t.shouldDecodeNewlines,shouldDecodeNewlinesForHref:t.shouldDecodeNewlinesForHref,shouldKeepComment:t.comments,outputSourceRange:t.outputSourceRange,start:function(v,m,b,x,w){var g=s&&s.ns||Zn(v);Le&&g==="svg"&&(m=bv(m));var C=Pa(v,m,s);g&&(C.ns=g),hv(C)&&!Te()&&(C.forbidden=!0);for(var y=0;y<kr.length;y++)C=kr[y](C,t)||C;o||(Vu(C),C.pre&&(o=!0)),Sr(C.tag)&&(l=!0),o?Qu(C):C.processed||(As(C),av(C),sv(C)),i||(i=C),b?c(C):(s=C,r.push(C))},end:function(v,m,b){var x=r[r.length-1];r.length-=1,s=r[r.length-1],c(x)},chars:function(v,m,b){if(s&&!(Le&&s.tag==="textarea"&&s.attrsMap.placeholder===v)){var x=s.children;if(l||v.trim()?v=pv(s)?v:Xu(v):x.length?n?n==="condense"?v=Yu.test(v)?"":" ":v=" ":v=a?" ":"":v="",v){!l&&n==="condense"&&(v=v.replace(Ju," "));var w=void 0,g=void 0;!o&&v!==" "&&(w=ku(v,Xn))?g={type:2,expression:w.expression,tokens:w.tokens,text:v}:(v!==" "||!x.length||x[x.length-1].text!==" ")&&(g={type:3,text:v}),g&&x.push(g)}}},comment:function(v,m,b){if(s){var x={type:3,text:v,isComment:!0};s.children.push(x)}}}),i}function Vu(e){K(e,"v-pre")!=null&&(e.pre=!0)}function Qu(e){var t=e.attrsList,r=t.length;if(r)for(var a=e.attrs=new Array(r),n=0;n<r;n++)a[n]={name:t[n].name,value:JSON.stringify(t[n].value)},t[n].start!=null&&(a[n].start=t[n].start,a[n].end=t[n].end);else e.pre||(e.plain=!0)}function Jt(e,t){ev(e),e.plain=!e.key&&!e.scopedSlots&&!e.attrsList.length,tv(e),ov(e),lv(e),cv(e);for(var r=0;r<ta.length;r++)e=ta[r](e,t)||e;return uv(e),e}function ev(e){var t=ve(e,"key");t&&(e.key=t)}function tv(e){var t=ve(e,"ref");t&&(e.ref=t,e.refInFor=vv(e))}function As(e){var t;if(t=K(e,"v-for")){var r=rv(t);r&&E(e,r)}}function rv(e){var t=e.match(Wu);if(t){var r={};r.for=t[2].trim();var a=t[1].trim().replace(Ku,""),n=a.match(Yn);return n?(r.alias=a.replace(Yn,"").trim(),r.iterator1=n[1].trim(),n[2]&&(r.iterator2=n[2].trim())):r.alias=a,r}}function av(e){var t=K(e,"v-if");if(t)e.if=t,it(e,{exp:t,block:e});else{K(e,"v-else")!=null&&(e.else=!0);var r=K(e,"v-else-if");r&&(e.elseif=r)}}function nv(e,t){var r=iv(t.children);r&&r.if&&it(r,{exp:e.elseif,block:e})}function iv(e){for(var t=e.length;t--;){if(e[t].type===1)return e[t];e.pop()}}function it(e,t){e.ifConditions||(e.ifConditions=[]),e.ifConditions.push(t)}function sv(e){var t=K(e,"v-once");t!=null&&(e.once=!0)}function ov(e){var t;e.tag==="template"?(t=K(e,"scope"),e.slotScope=t||K(e,"slot-scope")):(t=K(e,"slot-scope"))&&(e.slotScope=t);var r=ve(e,"slot");if(r&&(e.slotTarget=r==='""'?'"default"':r,e.slotTargetDynamic=!!(e.attrsMap[":slot"]||e.attrsMap["v-bind:slot"]),e.tag!=="template"&&!e.slotScope&&Gr(e,"slot",r,Mc(e,"slot"))),e.tag==="template"){var a=wn(e,ea);if(a){var n=Vn(a),i=n.name,s=n.dynamic;e.slotTarget=i,e.slotTargetDynamic=s,e.slotScope=a.value||or}}else{var a=wn(e,ea);if(a){var o=e.scopedSlots||(e.scopedSlots={}),l=Vn(a),c=l.name,s=l.dynamic,u=o[c]=Pa("template",[],e);u.slotTarget=c,u.slotTargetDynamic=s,u.children=e.children.filter(function(b){if(!b.slotScope)return b.parent=u,!0}),u.slotScope=a.value||or,e.children=[],e.plain=!1}}}function Vn(e){var t=e.name.replace(ea,"");return t||e.name[0]!=="#"&&(t="default"),Yt.test(t)?{name:t.slice(1,-1),dynamic:!0}:{name:'"'.concat(t,'"'),dynamic:!1}}function lv(e){e.tag==="slot"&&(e.slotName=ve(e,"name"))}function cv(e){var t;(t=ve(e,"is"))&&(e.component=t),K(e,"inline-template")!=null&&(e.inlineTemplate=!0)}function uv(e){var t=e.attrsList,r,a,n,i,s,o,l,c;for(r=0,a=t.length;r<a;r++)if(n=i=t[r].name,s=t[r].value,xr.test(n))if(e.hasBindings=!0,o=fv(n.replace(xr,"")),o&&(n=n.replace(Ts,"")),Jn.test(n))n=n.replace(Jn,""),s=Sa(s),c=Yt.test(n),c&&(n=n.slice(1,-1)),o&&(o.prop&&!c&&(n=re(n),n==="innerHtml"&&(n="innerHTML")),o.camel&&!c&&(n=re(n)),o.sync&&(l=Ne(s,"$event"),c?we(e,'"update:"+('.concat(n,")"),l,null,!1,at,t[r],!0):(we(e,"update:".concat(re(n)),l,null,!1,at,t[r]),Ge(n)!==re(n)&&we(e,"update:".concat(Ge(n)),l,null,!1,at,t[r])))),o&&o.prop||!e.component&&ra(e.tag,e.attrsMap.type,n)?Ze(e,n,s,t[r],c):Gr(e,n,s,t[r],c);else if(Gn.test(n))n=n.replace(Gn,""),c=Yt.test(n),c&&(n=n.slice(1,-1)),we(e,n,s,o,!1,at,t[r],c);else{n=n.replace(xr,"");var u=n.match(Gu),v=u&&u[1];c=!1,v&&(n=n.slice(0,-(v.length+1)),Yt.test(v)&&(v=v.slice(1,-1),c=!0)),Dc(e,n,i,s,v,c,o,t[r])}else Gr(e,n,JSON.stringify(s),t[r]),!e.component&&n==="muted"&&ra(e.tag,e.attrsMap.type,n)&&Ze(e,n,"true",t[r])}function vv(e){for(var t=e;t;){if(t.for!==void 0)return!0;t=t.parent}return!1}function fv(e){var t=e.match(Ts);if(t){var r={};return t.forEach(function(a){r[a.slice(1)]=!0}),r}}function dv(e){for(var t={},r=0,a=e.length;r<a;r++)t[e[r].name]=e[r].value;return t}function pv(e){return e.tag==="script"||e.tag==="style"}function hv(e){return e.tag==="style"||e.tag==="script"&&(!e.attrsMap.type||e.attrsMap.type==="text/javascript")}var mv=/^xmlns:NS\d+/,gv=/^NS\d+:/;function bv(e){for(var t=[],r=0;r<e.length;r++){var a=e[r];mv.test(a.name)||(a.name=a.name.replace(gv,""),t.push(a))}return t}function yv(e,t){if(e.tag==="input"){var r=e.attrsMap;if(!r["v-model"])return;var a=void 0;if((r[":type"]||r["v-bind:type"])&&(a=ve(e,"type")),!r.type&&!a&&r["v-bind"]&&(a="(".concat(r["v-bind"],").type")),a){var n=K(e,"v-if",!0),i=n?"&&(".concat(n,")"):"",s=K(e,"v-else",!0)!=null,o=K(e,"v-else-if",!0),l=Tr(e);As(l),gr(l,"type","checkbox"),Jt(l,t),l.processed=!0,l.if="(".concat(a,")==='checkbox'")+i,it(l,{exp:l.if,block:l});var c=Tr(e);K(c,"v-for",!0),gr(c,"type","radio"),Jt(c,t),it(l,{exp:"(".concat(a,")==='radio'")+i,block:c});var u=Tr(e);return K(u,"v-for",!0),gr(u,":type",a),Jt(u,t),it(l,{exp:n,block:u}),s?l.else=!0:o&&(l.elseif=o),l}}}function Tr(e){return Pa(e.tag,e.attrsList.slice(),e.parent)}var _v={preTransformNode:yv},Qn=[Tu,zu,_v];function wv(e,t){t.value&&Ze(e,"textContent","_s(".concat(t.value,")"),t)}function Cv(e,t){t.value&&Ze(e,"innerHTML","_s(".concat(t.value,")"),t)}var xv={model:Uc,text:wv,html:Cv},kv={expectHTML:!0,modules:Qn,directives:xv,isPreTag:lc,isUnaryTag:Eu,mustUseProp:ts,canBeLeftOpenTag:Nu,isReservedTag:ka,getTagNamespace:ns,staticKeys:ro(Qn)},Os,Ea,$v=he(Tv);function Sv(e,t){e&&(Os=$v(t.staticKeys||""),Ea=t.isReservedTag||ce,aa(e),na(e,!1))}function Tv(e){return Y("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap"+(e?","+e:""))}function aa(e){if(e.static=Av(e),e.type===1){if(!Ea(e.tag)&&e.tag!=="slot"&&e.attrsMap["inline-template"]==null)return;for(var t=0,r=e.children.length;t<r;t++){var a=e.children[t];aa(a),a.static||(e.static=!1)}if(e.ifConditions)for(var t=1,r=e.ifConditions.length;t<r;t++){var n=e.ifConditions[t].block;aa(n),n.static||(e.static=!1)}}}function na(e,t){if(e.type===1){if((e.static||e.once)&&(e.staticInFor=t),e.static&&e.children.length&&!(e.children.length===1&&e.children[0].type===3)){e.staticRoot=!0;return}else e.staticRoot=!1;if(e.children)for(var r=0,a=e.children.length;r<a;r++)na(e.children[r],t||!!e.for);if(e.ifConditions)for(var r=1,a=e.ifConditions.length;r<a;r++)na(e.ifConditions[r].block,t)}}function Av(e){return e.type===2?!1:e.type===3?!0:!!(e.pre||!e.hasBindings&&!e.if&&!e.for&&!Js(e.tag)&&Ea(e.tag)&&!Ov(e)&&Object.keys(e).every(Os))}function Ov(e){for(;e.parent;){if(e=e.parent,e.tag!=="template")return!1;if(e.for)return!0}return!1}var zv=/^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/,Pv=/\([^)]*?\);*$/,ei=/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,zs={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},Ev={esc:["Esc","Escape"],tab:"Tab",enter:"Enter",space:[" ","Spacebar"],up:["Up","ArrowUp"],left:["Left","ArrowLeft"],right:["Right","ArrowRight"],down:["Down","ArrowDown"],delete:["Backspace","Delete","Del"]},ge=function(e){return"if(".concat(e,")return null;")},ti={stop:"$event.stopPropagation();",prevent:"$event.preventDefault();",self:ge("$event.target !== $event.currentTarget"),ctrl:ge("!$event.ctrlKey"),shift:ge("!$event.shiftKey"),alt:ge("!$event.altKey"),meta:ge("!$event.metaKey"),left:ge("'button' in $event && $event.button !== 0"),middle:ge("'button' in $event && $event.button !== 1"),right:ge("'button' in $event && $event.button !== 2")};function ri(e,t){var r=t?"nativeOn:":"on:",a="",n="";for(var i in e){var s=Ps(e[i]);e[i]&&e[i].dynamic?n+="".concat(i,",").concat(s,","):a+='"'.concat(i,'":').concat(s,",")}return a="{".concat(a.slice(0,-1),"}"),n?r+"_d(".concat(a,",[").concat(n.slice(0,-1),"])"):r+a}function Ps(e){if(!e)return"function(){}";if(Array.isArray(e))return"[".concat(e.map(function(u){return Ps(u)}).join(","),"]");var t=ei.test(e.value),r=zv.test(e.value),a=ei.test(e.value.replace(Pv,""));if(e.modifiers){var n="",i="",s=[],o=function(u){if(ti[u])i+=ti[u],zs[u]&&s.push(u);else if(u==="exact"){var v=e.modifiers;i+=ge(["ctrl","shift","alt","meta"].filter(function(m){return!v[m]}).map(function(m){return"$event.".concat(m,"Key")}).join("||"))}else s.push(u)};for(var l in e.modifiers)o(l);s.length&&(n+=Nv(s)),i&&(n+=i);var c=t?"return ".concat(e.value,".apply(null, arguments)"):r?"return (".concat(e.value,").apply(null, arguments)"):a?"return ".concat(e.value):e.value;return"function($event){".concat(n).concat(c,"}")}else return t||r?e.value:"function($event){".concat(a?"return ".concat(e.value):e.value,"}")}function Nv(e){return"if(!$event.type.indexOf('key')&&"+"".concat(e.map(Lv).join("&&"),")return null;")}function Lv(e){var t=parseInt(e,10);if(t)return"$event.keyCode!==".concat(t);var r=zs[e],a=Ev[e];return"_k($event.keyCode,"+"".concat(JSON.stringify(e),",")+"".concat(JSON.stringify(r),",")+"$event.key,"+"".concat(JSON.stringify(a))+")"}function Iv(e,t){e.wrapListeners=function(r){return"_g(".concat(r,",").concat(t.value,")")}}function Dv(e,t){e.wrapData=function(r){return"_b(".concat(r,",'").concat(e.tag,"',").concat(t.value,",").concat(t.modifiers&&t.modifiers.prop?"true":"false").concat(t.modifiers&&t.modifiers.sync?",true":"",")")}}var Mv={on:Iv,bind:Dv,cloak:M},Rv=(function(){function e(t){this.options=t,this.warn=t.warn||fr,this.transforms=yt(t.modules,"transformCode"),this.dataGenFns=yt(t.modules,"genData"),this.directives=E(E({},Mv),t.directives);var r=t.isReservedTag||ce;this.maybeComponent=function(a){return!!a.component||!r(a.tag)},this.onceId=0,this.staticRenderFns=[],this.pre=!1}return e})();function Es(e,t){var r=new Rv(t),a=e?e.tag==="script"?"null":Se(e,r):'_c("div")';return{render:"with(this){return ".concat(a,"}"),staticRenderFns:r.staticRenderFns}}function Se(e,t){if(e.parent&&(e.pre=e.pre||e.parent.pre),e.staticRoot&&!e.staticProcessed)return Ns(e,t);if(e.once&&!e.onceProcessed)return Ls(e,t);if(e.for&&!e.forProcessed)return Ds(e,t);if(e.if&&!e.ifProcessed)return Na(e,t);if(e.tag==="template"&&!e.slotTarget&&!t.pre)return ot(e,t)||"void 0";if(e.tag==="slot")return Yv(e,t);var r=void 0;if(e.component)r=Jv(e.component,e,t);else{var a=void 0,n=t.maybeComponent(e);(!e.plain||e.pre&&n)&&(a=Ms(e,t));var i=void 0,s=t.options.bindings;n&&s&&s.__isScriptSetup!==!1&&(i=Fv(s,e.tag)),i||(i="'".concat(e.tag,"'"));var o=e.inlineTemplate?null:ot(e,t,!0);r="_c(".concat(i).concat(a?",".concat(a):"").concat(o?",".concat(o):"",")")}for(var l=0;l<t.transforms.length;l++)r=t.transforms[l](e,r);return r}function Fv(e,t){var r=re(t),a=yi(r),n=function(o){if(e[t]===o)return t;if(e[r]===o)return r;if(e[a]===o)return a},i=n("setup-const")||n("setup-reactive-const");if(i)return i;var s=n("setup-let")||n("setup-ref")||n("setup-maybe-ref");if(s)return s}function Ns(e,t){e.staticProcessed=!0;var r=t.pre;return e.pre&&(t.pre=e.pre),t.staticRenderFns.push("with(this){return ".concat(Se(e,t),"}")),t.pre=r,"_m(".concat(t.staticRenderFns.length-1).concat(e.staticInFor?",true":"",")")}function Ls(e,t){if(e.onceProcessed=!0,e.if&&!e.ifProcessed)return Na(e,t);if(e.staticInFor){for(var r="",a=e.parent;a;){if(a.for){r=a.key;break}a=a.parent}return r?"_o(".concat(Se(e,t),",").concat(t.onceId++,",").concat(r,")"):Se(e,t)}else return Ns(e,t)}function Na(e,t,r,a){return e.ifProcessed=!0,Is(e.ifConditions.slice(),t,r,a)}function Is(e,t,r,a){if(!e.length)return a||"_e()";var n=e.shift();if(n.exp)return"(".concat(n.exp,")?").concat(i(n.block),":").concat(Is(e,t,r,a));return"".concat(i(n.block));function i(s){return r?r(s,t):s.once?Ls(s,t):Se(s,t)}}function Ds(e,t,r,a){var n=e.for,i=e.alias,s=e.iterator1?",".concat(e.iterator1):"",o=e.iterator2?",".concat(e.iterator2):"";return e.forProcessed=!0,"".concat("_l","((").concat(n,"),")+"function(".concat(i).concat(s).concat(o,"){")+"return ".concat((r||Se)(e,t))+"})"}function Ms(e,t){var r="{",a=Uv(e,t);a&&(r+=a+","),e.key&&(r+="key:".concat(e.key,",")),e.ref&&(r+="ref:".concat(e.ref,",")),e.refInFor&&(r+="refInFor:true,"),e.pre&&(r+="pre:true,"),e.component&&(r+='tag:"'.concat(e.tag,'",'));for(var n=0;n<t.dataGenFns.length;n++)r+=t.dataGenFns[n](e);if(e.attrs&&(r+="attrs:".concat(Xt(e.attrs),",")),e.props&&(r+="domProps:".concat(Xt(e.props),",")),e.events&&(r+="".concat(ri(e.events,!1),",")),e.nativeEvents&&(r+="".concat(ri(e.nativeEvents,!0),",")),e.slotTarget&&!e.slotScope&&(r+="slot:".concat(e.slotTarget,",")),e.scopedSlots&&(r+="".concat(Hv(e,e.scopedSlots,t),",")),e.model&&(r+="model:{value:".concat(e.model.value,",callback:").concat(e.model.callback,",expression:").concat(e.model.expression,"},")),e.inlineTemplate){var i=jv(e,t);i&&(r+="".concat(i,","))}return r=r.replace(/,$/,"")+"}",e.dynamicAttrs&&(r="_b(".concat(r,',"').concat(e.tag,'",').concat(Xt(e.dynamicAttrs),")")),e.wrapData&&(r=e.wrapData(r)),e.wrapListeners&&(r=e.wrapListeners(r)),r}function Uv(e,t){var r=e.directives;if(r){var a="directives:[",n=!1,i,s,o,l;for(i=0,s=r.length;i<s;i++){o=r[i],l=!0;var c=t.directives[o.name];c&&(l=!!c(e,o,t.warn)),l&&(n=!0,a+='{name:"'.concat(o.name,'",rawName:"').concat(o.rawName,'"').concat(o.value?",value:(".concat(o.value,"),expression:").concat(JSON.stringify(o.value)):"").concat(o.arg?",arg:".concat(o.isDynamicArg?o.arg:'"'.concat(o.arg,'"')):"").concat(o.modifiers?",modifiers:".concat(JSON.stringify(o.modifiers)):"","},"))}if(n)return a.slice(0,-1)+"]"}}function jv(e,t){var r=e.children[0];if(r&&r.type===1){var a=Es(r,t.options);return"inlineTemplate:{render:function(){".concat(a.render,"},staticRenderFns:[").concat(a.staticRenderFns.map(function(n){return"function(){".concat(n,"}")}).join(","),"]}")}}function Hv(e,t,r){var a=e.for||Object.keys(t).some(function(o){var l=t[o];return l.slotTargetDynamic||l.if||l.for||Rs(l)}),n=!!e.if;if(!a)for(var i=e.parent;i;){if(i.slotScope&&i.slotScope!==or||i.for){a=!0;break}i.if&&(n=!0),i=i.parent}var s=Object.keys(t).map(function(o){return ia(t[o],r)}).join(",");return"scopedSlots:_u([".concat(s,"]").concat(a?",null,true":"").concat(!a&&n?",null,false,".concat(Bv(s)):"",")")}function Bv(e){for(var t=5381,r=e.length;r;)t=t*33^e.charCodeAt(--r);return t>>>0}function Rs(e){return e.type===1?e.tag==="slot"?!0:e.children.some(Rs):!1}function ia(e,t){var r=e.attrsMap["slot-scope"];if(e.if&&!e.ifProcessed&&!r)return Na(e,t,ia,"null");if(e.for&&!e.forProcessed)return Ds(e,t,ia);var a=e.slotScope===or?"":String(e.slotScope),n="function(".concat(a,"){")+"return ".concat(e.tag==="template"?e.if&&r?"(".concat(e.if,")?").concat(ot(e,t)||"undefined",":undefined"):ot(e,t)||"undefined":Se(e,t),"}"),i=a?"":",proxy:true";return"{key:".concat(e.slotTarget||'"default"',",fn:").concat(n).concat(i,"}")}function ot(e,t,r,a,n){var i=e.children;if(i.length){var s=i[0];if(i.length===1&&s.for&&s.tag!=="template"&&s.tag!=="slot"){var o=r?t.maybeComponent(s)?",1":",0":"";return"".concat(Se(s,t)).concat(o)}var l=r?qv(i,t.maybeComponent):0,c=Wv;return"[".concat(i.map(function(u){return c(u,t)}).join(","),"]").concat(l?",".concat(l):"")}}function qv(e,t){for(var r=0,a=0;a<e.length;a++){var n=e[a];if(n.type===1){if(ai(n)||n.ifConditions&&n.ifConditions.some(function(i){return ai(i.block)})){r=2;break}(t(n)||n.ifConditions&&n.ifConditions.some(function(i){return t(i.block)}))&&(r=1)}}return r}function ai(e){return e.for!==void 0||e.tag==="template"||e.tag==="slot"}function Wv(e,t){return e.type===1?Se(e,t):e.type===3&&e.isComment?Gv(e):Kv(e)}function Kv(e){return"_v(".concat(e.type===2?e.expression:Fs(JSON.stringify(e.text)),")")}function Gv(e){return"_e(".concat(JSON.stringify(e.text),")")}function Yv(e,t){var r=e.slotName||'"default"',a=ot(e,t),n="_t(".concat(r).concat(a?",function(){return ".concat(a,"}"):""),i=e.attrs||e.dynamicAttrs?Xt((e.attrs||[]).concat(e.dynamicAttrs||[]).map(function(o){return{name:re(o.name),value:o.value,dynamic:o.dynamic}})):null,s=e.attrsMap["v-bind"];return(i||s)&&!a&&(n+=",null"),i&&(n+=",".concat(i)),s&&(n+="".concat(i?"":",null",",").concat(s)),n+")"}function Jv(e,t,r){var a=t.inlineTemplate?null:ot(t,r,!0);return"_c(".concat(e,",").concat(Ms(t,r)).concat(a?",".concat(a):"",")")}function Xt(e){for(var t="",r="",a=0;a<e.length;a++){var n=e[a],i=Fs(n.value);n.dynamic?r+="".concat(n.name,",").concat(i,","):t+='"'.concat(n.name,'":').concat(i,",")}return t="{".concat(t.slice(0,-1),"}"),r?"_d(".concat(t,",[").concat(r.slice(0,-1),"])"):t}function Fs(e){return e.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}new RegExp("\\b"+"do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b")+"\\b");new RegExp("\\b"+"delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b")+"\\s*\\([^\\)]*\\)");function ni(e,t){try{return new Function(e)}catch(r){return t.push({err:r,code:e}),M}}function Xv(e){var t=Object.create(null);return function(a,n,i){n=E({},n),n.warn,delete n.warn;var s=n.delimiters?String(n.delimiters)+a:a;if(t[s])return t[s];var o=e(a,n),l={},c=[];return l.render=ni(o.render,c),l.staticRenderFns=o.staticRenderFns.map(function(u){return ni(u,c)}),t[s]=l}}function Zv(e){return function(r){function a(n,i){var s=Object.create(r),o=[],l=[],c=function(m,b,x){(x?l:o).push(m)};if(i){i.modules&&(s.modules=(r.modules||[]).concat(i.modules)),i.directives&&(s.directives=E(Object.create(r.directives||null),i.directives));for(var u in i)u!=="modules"&&u!=="directives"&&(s[u]=i[u])}s.warn=c;var v=e(n.trim(),s);return v.errors=o,v.tips=l,v}return{compile:a,compileToFunctions:Xv(a)}}}var Vv=Zv(function(t,r){var a=Zu(t.trim(),r);r.optimize!==!1&&Sv(a,r);var n=Es(a,r);return{ast:a,render:n.render,staticRenderFns:n.staticRenderFns}}),Qv=Vv(kv),Us=Qv.compileToFunctions,Ft;function js(e){return Ft=Ft||document.createElement("div"),Ft.innerHTML=e?`<a href="
"/>`:`<div a="
"/>`,Ft.innerHTML.indexOf("&#10;")>0}var ef=Q?js(!1):!1,tf=Q?js(!0):!1,rf=he(function(e){var t=$a(e);return t&&t.innerHTML}),af=R.prototype.$mount;R.prototype.$mount=function(e,t){if(e=e&&$a(e),e===document.body||e===document.documentElement)return this;var r=this.$options;if(!r.render){var a=r.template;if(a)if(typeof a=="string")a.charAt(0)==="#"&&(a=rf(a));else if(a.nodeType)a=a.innerHTML;else return this;else e&&(a=nf(e));if(a){var n=Us(a,{outputSourceRange:!1,shouldDecodeNewlines:ef,shouldDecodeNewlinesForHref:tf,delimiters:r.delimiters,comments:r.comments},this),i=n.render,s=n.staticRenderFns;r.render=i,r.staticRenderFns=s}}return af.call(this,e,t)};function nf(e){if(e.outerHTML)return e.outerHTML;var t=document.createElement("div");return t.appendChild(e.cloneNode(!0)),t.innerHTML}R.compile=Us;R.util.warn;var sf=Object.defineProperty,of=(e,t,r)=>t in e?sf(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Z=(e,t,r)=>of(e,typeof t!="symbol"?t+"":t,r);function be(e,t,r){return Math.min(Math.max(e,t),r)}function Be(e,t){return typeof e!="number"||Number.isNaN(e)?t:Math.max(0,e)}var Hs={ring:{value:"ring",label:"Ring",category:"spinner",description:"A refined circular spinner for general loading states.",recommendedUse:"Use for default async states inside cards, panels, and centered sections.",defaultCount:1,minCount:1,maxCount:1},"dual-ring":{value:"dual-ring",label:"Dual Ring",category:"spinner",description:"Two concentric rings rotating in opposite directions for more visual energy.",recommendedUse:"Use when you want a richer spinner without overwhelming compact layouts.",defaultCount:2,minCount:2,maxCount:2},"segmented-ring":{value:"segmented-ring",label:"Segmented Ring",category:"spinner",description:"A segmented circular loader with precise ticks and premium motion.",recommendedUse:"Use when you want a polished technical spinner for dashboards, analytics, or admin tools.",defaultCount:10,minCount:6,maxCount:12},arc:{value:"arc",label:"Arc",category:"spinner",description:"A thick curved sweep with strong motion and excellent legibility.",recommendedUse:"Use on dashboards or surfaces where the loader needs a bold silhouette.",defaultCount:1,minCount:1,maxCount:1},orbit:{value:"orbit",label:"Orbit",category:"spinner",description:"A premium orbital motion with a stable central anchor.",recommendedUse:"Use in hero states, polished overlays, or brand-forward experiences.",defaultCount:2,minCount:2,maxCount:2},comet:{value:"comet",label:"Comet",category:"spinner",description:"A luminous point with a trailing comet tail orbiting a soft ring.",recommendedUse:"Use for premium hero states, modal loading, and brand-forward async moments.",defaultCount:2,minCount:2,maxCount:2},halo:{value:"halo",label:"Halo",category:"spinner",description:"A thin halo with soft glow pulses and minimal visual noise.",recommendedUse:"Use in refined enterprise interfaces where the loading state should stay elegant.",defaultCount:2,minCount:2,maxCount:2},radar:{value:"radar",label:"Radar",category:"spinner",description:"A scanning beam effect with layered depth.",recommendedUse:"Use for search, sync, telemetry, or data discovery moments.",defaultCount:3,minCount:3,maxCount:3},astronaut:{value:"astronaut",label:"Astronaut",category:"surface",description:"A floating astronaut illustration with soft starfield motion.",recommendedUse:"Use for onboarding, empty states, playful overlays, and premium loading moments.",defaultCount:3,minCount:3,maxCount:3},"astronaut-to-mars":{value:"astronaut-to-mars",label:"Astronaut To Mars",category:"surface",description:"A tiny astronaut traveling toward Mars with a cinematic space-route feel.",recommendedUse:"Use for route transitions, splash states, and standout brand-forward loading sequences.",defaultCount:4,minCount:4,maxCount:4},"baseball-player":{value:"baseball-player",label:"Baseball Player",category:"surface",description:"A batter driving the ball with a clean swing and curved flight path.",recommendedUse:"Use for sports products, onboarding, and illustrative loading states with momentum.",defaultCount:4,minCount:4,maxCount:4},"football-player":{value:"football-player",label:"Football Player",category:"surface",description:"A footballer striking the ball forward with a smooth kick arc.",recommendedUse:"Use for soccer experiences, score views, and highly expressive loading moments.",defaultCount:4,minCount:4,maxCount:4},galaxy:{value:"galaxy",label:"Galaxy",category:"surface",description:"A glowing spiral galaxy with a bright core, orbiting stars, and drifting cosmic dust.",recommendedUse:"Use for splash screens, premium hero states, sci-fi interfaces, and high-drama loading moments.",defaultCount:6,minCount:6,maxCount:6},pulse:{value:"pulse",label:"Pulse",category:"surface",description:"A breathing pulse with soft echo rings.",recommendedUse:"Use for ambient loading and low-noise inline states.",defaultCount:2,minCount:2,maxCount:2},"wave-dots":{value:"wave-dots",label:"Wave Dots",category:"dots",description:"Dots that ripple upward in sequence.",recommendedUse:"Use for conversational UIs, message streams, and compact inline feedback.",defaultCount:4,minCount:3,maxCount:8},"bouncing-dots":{value:"bouncing-dots",label:"Bouncing Dots",category:"dots",description:"Classic dot rhythm with a more premium bounce curve.",recommendedUse:"Use for buttons, compact surfaces, and general-purpose text-adjacent loading.",defaultCount:3,minCount:3,maxCount:8},"typing-dots":{value:"typing-dots",label:"Typing Dots",category:"dots",description:"A staggered fade-and-scale sequence inspired by chat typing indicators.",recommendedUse:"Use in assistants, feeds, or message composer feedback states.",defaultCount:3,minCount:3,maxCount:5},"grid-pulse":{value:"grid-pulse",label:"Grid Pulse",category:"surface",description:"A 3x3 pulse grid that feels structured, compact, and modern.",recommendedUse:"Use for compact surfaces, icon-scale loading, and data-heavy interface chrome.",defaultCount:9,minCount:9,maxCount:9},"magnetic-dots":{value:"magnetic-dots",label:"Magnetic Dots",category:"dots",description:"Dots that pull toward the center and relax outward in a magnetic rhythm.",recommendedUse:"Use for inline controls, button states, and compact polished micro-feedback.",defaultCount:4,minCount:3,maxCount:6},"spiral-dots":{value:"spiral-dots",label:"Spiral Dots",category:"dots",description:"Layered dots arranged in a rotating spiral with subtle depth.",recommendedUse:"Use for premium overlays and loaders that should feel more bespoke than a standard spinner.",defaultCount:6,minCount:5,maxCount:8},constellation:{value:"constellation",label:"Constellation",category:"dots",description:"Network-like nodes with a soft connected-system feel.",recommendedUse:"Use for AI, search, sync, and graph-oriented product experiences.",defaultCount:6,minCount:5,maxCount:6},"equalizer-bars":{value:"equalizer-bars",label:"Equalizer Bars",category:"bars",description:"Animated bars with an audio-like rhythm.",recommendedUse:"Use for analytics, media, and lively data surfaces.",defaultCount:5,minCount:3,maxCount:8},"rising-bars":{value:"rising-bars",label:"Rising Bars",category:"bars",description:"Clean bars that rise from a subtle track.",recommendedUse:"Use in tables, forms, and panels where you want linear motion.",defaultCount:4,minCount:3,maxCount:8},shimmer:{value:"shimmer",label:"Shimmer",category:"surface",description:"A modern skeleton-like shimmer strip.",recommendedUse:"Use for content placeholders, cards, and container-level loading.",defaultCount:1,minCount:1,maxCount:1},"scan-line":{value:"scan-line",label:"Scan Line",category:"surface",description:"A scanning line that sweeps across a clean data surface.",recommendedUse:"Use for tables, data panes, security-style scans, and content inspection states.",defaultCount:1,minCount:1,maxCount:1},"liquid-pill":{value:"liquid-pill",label:"Liquid Pill",category:"surface",description:"A rounded pill loader with fluid motion and soft internal glow.",recommendedUse:"Use for buttons, compact forms, and ambient inline loading with branded motion.",defaultCount:2,minCount:2,maxCount:2},"ripple-stack":{value:"ripple-stack",label:"Ripple Stack",category:"surface",description:"Concentric ripples that radiate outward with a calm layered cadence.",recommendedUse:"Use for overlays, fullscreen states, and soft-focus loading moments.",defaultCount:3,minCount:3,maxCount:4},"minimal-spinner":{value:"minimal-spinner",label:"Minimal Spinner",category:"spinner",description:"A thin understated spinner with understated motion.",recommendedUse:"Use where UI chrome should stay quiet and elegant.",defaultCount:1,minCount:1,maxCount:1},"neon-spinner":{value:"neon-spinner",label:"Neon Spinner",category:"spinner",description:"A glowing spinner with high-contrast accents.",recommendedUse:"Use in dark surfaces, product tours, and expressive brand moments.",defaultCount:2,minCount:2,maxCount:2},"glass-spinner":{value:"glass-spinner",label:"Glass Spinner",category:"spinner",description:"A frosted, translucent spinner with soft highlights.",recommendedUse:"Use on overlays and premium surface treatments.",defaultCount:2,minCount:2,maxCount:2},vortex:{value:"vortex",label:"Vortex",category:"spinner",description:"Multiple rotating elements that create a layered vortex effect.",recommendedUse:"Use for major loading transitions, modals, and splash states.",defaultCount:3,minCount:3,maxCount:3},cube:{value:"cube",label:"Cube",category:"surface",description:"Rotating geometric blocks with a clean enterprise-friendly feel.",recommendedUse:"Use in dashboards, admin tools, and product surfaces with grid structure.",defaultCount:4,minCount:4,maxCount:4},diamond:{value:"diamond",label:"Diamond",category:"surface",description:"Four angular facets that pulse in a diamond pattern.",recommendedUse:"Use when you want geometric motion that still feels compact.",defaultCount:4,minCount:4,maxCount:4},prism:{value:"prism",label:"Prism",category:"surface",description:"Glass-like prism shards rotating with translucent layered highlights.",recommendedUse:"Use on premium overlays, polished product shells, and modern dark themes.",defaultCount:3,minCount:3,maxCount:3},"skeleton-blocks":{value:"skeleton-blocks",label:"Skeleton Blocks",category:"surface",description:"A compact skeleton-style block layout with animated shimmer passes.",recommendedUse:"Use for content placeholders, side panels, cards, and list loading states.",defaultCount:4,minCount:4,maxCount:4}},lf=Object.values(Hs);function La(e){return Hs[e]}function cf(e,t){const r=La(e);return be(t.count??r.defaultCount,r.minCount,r.maxCount)}function ii(e,t){const r=e??t;return typeof r=="number"?`${r}px`:r}function uf(e){return e.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}function vf(e,t){Object.entries(t).forEach(([r,a])=>{const n=r.startsWith("--")?r:uf(r);if(a==null){e.style.removeProperty(n);return}e.style.setProperty(n,ff(a))})}function ff(e){return typeof e=="number"?String(e):e??""}function df(e,t){const r=e.replace("#","").trim(),a=r.length===3?r.split("").map(l=>`${l}${l}`).join(""):r.length===4?r.split("").map(l=>`${l}${l}`).join(""):r;if(a.length!==6&&a.length!==8)return`color-mix(in srgb, ${e} ${Math.round(t*100)}%, transparent)`;const n=parseInt(a.slice(0,2),16),i=parseInt(a.slice(2,4),16),s=parseInt(a.slice(4,6),16),o=a.length===8?parseInt(a.slice(6,8),16)/255:1;return`rgba(${n}, ${i}, ${s}, ${Math.max(0,Math.min(1,o*t))})`}function pf(e,t){const r=e.replace(/rgba?\(/,"").replace(")","").split(",").map(a=>a.trim());return r.length<3?`color-mix(in srgb, ${e} ${Math.round(t*100)}%, transparent)`:`rgba(${r[0]}, ${r[1]}, ${r[2]}, ${t})`}function hf(e,t){const r=Math.max(0,Math.min(1,t));return e.startsWith("#")?df(e,r):e.startsWith("rgb")?pf(e,r):`color-mix(in srgb, ${e} ${Math.round(r*100)}%, transparent)`}var H={variant:"ring",size:"40px",color:"var(--rvl-theme-color)",speed:900,thickness:3,opacity:1,background:"var(--rvl-theme-overlay)",overlay:!1,blur:12,radius:"18px",gap:8,direction:"normal",label:"",inline:!1,centered:!1,fullscreen:!1,visible:!1,delay:0,minVisible:240,zIndex:1600,className:"",ariaLive:"polite",target:null};function si(e={}){const t=e.variant??H.variant,r=La(t),a=e.color??H.color,n=e.secondaryColor??hf(a,.2),i=Object.prototype.hasOwnProperty.call(e,"label"),s={variant:t,size:ii(e.size,H.size),color:a,secondaryColor:n,speed:be(Be(e.speed,H.speed),200,8e3),thickness:be(Be(e.thickness,H.thickness),1,16),opacity:be(typeof e.opacity=="number"?e.opacity:H.opacity,.12,1),background:e.background??H.background,overlay:e.overlay??H.overlay,blur:be(Be(e.blur,H.blur),0,32),radius:ii(e.radius,H.radius),gap:be(Be(e.gap,H.gap),0,48),count:cf(t,e),direction:e.direction??H.direction,label:i?e.label??"":H.label,inline:e.inline??H.inline,centered:e.centered??H.centered,fullscreen:e.fullscreen??H.fullscreen,visible:e.visible??H.visible,delay:be(Be(e.delay,H.delay),0,3e4),minVisible:be(Be(e.minVisible,H.minVisible),0,6e4),zIndex:be(Be(e.zIndex,H.zIndex),1,2147483647),className:e.className?.trim()??H.className,style:e.style??{},ariaLive:e.ariaLive??H.ariaLive,target:e.target??H.target};return s.fullscreen&&(s.overlay=!0,s.inline=!1,s.centered=!0),s.inline&&(s.overlay=!1,s.fullscreen=!1),!i&&!s.label&&(s.label=`Loading with ${r.label.toLowerCase()}`),s}var mf=`
:root {
  --rvl-theme-color: #2563eb;
  --rvl-theme-secondary: rgba(37, 99, 235, 0.18);
  --rvl-theme-surface: rgba(255, 255, 255, 0.92);
  --rvl-theme-overlay: rgba(255, 255, 255, 0.72);
  --rvl-theme-text: #0f172a;
  --rvl-theme-muted: #475569;
}

.rvl-loader {
  --rvl-size: 40px;
  --rvl-color: var(--rvl-theme-color);
  --rvl-secondary-color: var(--rvl-theme-secondary);
  --rvl-speed: 900ms;
  --rvl-thickness: 3px;
  --rvl-opacity: 1;
  --rvl-background: var(--rvl-theme-overlay);
  --rvl-blur: 12px;
  --rvl-radius: 18px;
  --rvl-gap: 8px;
  --rvl-z-index: 1600;
  position: relative;
  box-sizing: border-box;
  color: var(--rvl-color);
  opacity: var(--rvl-opacity);
  isolation: isolate;
}

.rvl-loader,
.rvl-loader * {
  box-sizing: border-box;
}

.rvl-loader[hidden] {
  display: none !important;
}

.rvl-loader.is-inline {
  display: inline-flex;
  vertical-align: middle;
}

.rvl-loader.is-block {
  display: flex;
}

.rvl-loader.is-centered:not(.is-overlay):not(.is-fullscreen) {
  width: 100%;
  min-height: calc(var(--rvl-size) * 1.9);
  justify-content: center;
}

.rvl-loader.is-overlay,
.rvl-loader.is-fullscreen {
  position: absolute;
  inset: 0;
  width: auto;
  min-height: 100%;
  display: grid;
  place-items: center;
  padding: 20px;
  background: var(--rvl-background);
  backdrop-filter: blur(var(--rvl-blur));
  border-radius: inherit;
  z-index: var(--rvl-z-index);
}

.rvl-loader.is-fullscreen {
  position: fixed;
  border-radius: 0;
}

.rvl-body {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: calc(var(--rvl-gap) * 0.7);
  min-width: max-content;
  padding: 0;
}

.rvl-loader.is-overlay .rvl-body,
.rvl-loader.is-fullscreen .rvl-body {
  padding: clamp(14px, 2vw, 22px);
  border-radius: var(--rvl-radius);
  background: color-mix(in srgb, var(--rvl-theme-surface) 86%, transparent);
  box-shadow: 0 18px 48px rgba(15, 23, 42, 0.14);
}

.rvl-visual {
  position: relative;
  display: inline-grid;
  place-items: center;
  width: var(--rvl-size);
  height: var(--rvl-size);
  flex: 0 0 auto;
}

.rvl-part {
  position: absolute;
  display: block;
}

.rvl-label {
  display: none;
  color: var(--rvl-theme-text);
  font: 600 0.92rem/1.3 "Inter", "Segoe UI", sans-serif;
  letter-spacing: -0.02em;
  white-space: nowrap;
}

.rvl-loader.has-label .rvl-label {
  display: inline-block;
}

.rvl-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@keyframes rvl-rotate {
  to {
    transform: rotate(360deg);
  }
}

@keyframes rvl-rotate-reverse {
  to {
    transform: rotate(-360deg);
  }
}

@keyframes rvl-pulse {
  0%, 100% {
    transform: scale(0.92);
    opacity: 0.55;
  }
  50% {
    transform: scale(1.08);
    opacity: 1;
  }
}

@keyframes rvl-wave {
  0%, 100% {
    transform: translateY(18%);
    opacity: 0.5;
  }
  50% {
    transform: translateY(-18%);
    opacity: 1;
  }
}

@keyframes rvl-bounce {
  0%, 80%, 100% {
    transform: translateY(0) scale(0.82);
    opacity: 0.45;
  }
  40% {
    transform: translateY(-28%) scale(1);
    opacity: 1;
  }
}

@keyframes rvl-bars {
  0%, 100% {
    transform: scaleY(0.35);
    opacity: 0.42;
  }
  50% {
    transform: scaleY(1);
    opacity: 1;
  }
}

@keyframes rvl-shimmer {
  0% {
    transform: translateX(-120%);
  }
  100% {
    transform: translateX(120%);
  }
}

@keyframes rvl-glow {
  0%, 100% {
    opacity: 0.45;
    transform: scale(0.94);
  }
  50% {
    opacity: 1;
    transform: scale(1.06);
  }
}

@keyframes rvl-scan {
  0% {
    transform: translateY(-115%);
  }
  100% {
    transform: translateY(220%);
  }
}

@keyframes rvl-liquid {
  0%, 100% {
    transform: translateX(-18%) scale(0.9);
  }
  50% {
    transform: translateX(18%) scale(1.06);
  }
}

@keyframes rvl-ripple {
  0% {
    transform: scale(0.28);
    opacity: 0;
  }
  35% {
    opacity: 0.85;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}

@keyframes rvl-prism {
  0%, 100% {
    transform: rotate(0deg) translateY(0) scale(0.96);
    opacity: 0.7;
  }
  50% {
    transform: rotate(180deg) translateY(-6%) scale(1.04);
    opacity: 1;
  }
}

@keyframes rvl-magnetic {
  0%, 100% {
    transform: translateX(var(--magnet-offset, 0)) scale(0.82);
    opacity: 0.48;
  }
  50% {
    transform: translateX(0) scale(1.08);
    opacity: 1;
  }
}

@keyframes rvl-float {
  0%, 100% {
    transform: translateY(0);
    opacity: 0.7;
  }
  50% {
    transform: translateY(-10%);
    opacity: 1;
  }
}

@keyframes rvl-space-float {
  0%, 100% {
    transform: translateY(4%) rotate(-5deg);
  }
  50% {
    transform: translateY(-4%) rotate(3deg);
  }
}

@keyframes rvl-star-twinkle {
  0%, 100% {
    opacity: 0.35;
    transform: scale(0.82);
  }
  50% {
    opacity: 1;
    transform: scale(1.06);
  }
}

@keyframes rvl-planet-bob {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3%);
  }
}

@keyframes rvl-mars-trip {
  0% {
    transform: translate(0, 0) rotate(-10deg) scale(0.92);
  }
  45% {
    transform: translate(calc(var(--rvl-size) * 0.44), calc(var(--rvl-size) * -0.16)) rotate(-2deg) scale(1);
  }
  100% {
    transform: translate(calc(var(--rvl-size) * 0.82), calc(var(--rvl-size) * -0.04)) rotate(8deg) scale(0.92);
  }
}

@keyframes rvl-athlete-sway {
  0%, 100% {
    transform: translateY(2%) rotate(-6deg);
  }
  50% {
    transform: translateY(-2%) rotate(4deg);
  }
}

@keyframes rvl-baseball-flight {
  0% {
    transform: translate(0, 0) scale(0.9);
  }
  50% {
    transform: translate(calc(var(--rvl-size) * 0.68), calc(var(--rvl-size) * -0.32)) scale(1);
  }
  100% {
    transform: translate(calc(var(--rvl-size) * 1.04), calc(var(--rvl-size) * -0.12)) scale(0.88);
  }
}

@keyframes rvl-football-flight {
  0% {
    transform: translate(0, 0) rotate(0deg) scale(0.9);
  }
  45% {
    transform: translate(calc(var(--rvl-size) * 0.58), calc(var(--rvl-size) * -0.22)) rotate(180deg) scale(1);
  }
  100% {
    transform: translate(calc(var(--rvl-size) * 0.96), calc(var(--rvl-size) * -0.04)) rotate(360deg) scale(0.88);
  }
}

@keyframes rvl-galaxy-core {
  0%, 100% {
    transform: translate(-50%, -50%) scale(0.92);
    box-shadow:
      0 0 calc(var(--rvl-size) * 0.2) rgba(125, 211, 252, 0.26),
      0 0 calc(var(--rvl-size) * 0.44) rgba(129, 140, 248, 0.16);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.06);
    box-shadow:
      0 0 calc(var(--rvl-size) * 0.28) rgba(125, 211, 252, 0.34),
      0 0 calc(var(--rvl-size) * 0.58) rgba(129, 140, 248, 0.22);
  }
}

@keyframes rvl-galaxy-drift {
  0%, 100% {
    transform: rotate(0deg) scale(0.96);
  }
  50% {
    transform: rotate(180deg) scale(1.04);
  }
}

@media (prefers-reduced-motion: reduce) {
  .rvl-loader,
  .rvl-loader * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`,de=`
.rvl-variant--ring .rvl-part:nth-child(1) {
  inset: 0;
  border: var(--rvl-thickness) solid var(--rvl-secondary-color);
  border-top-color: var(--rvl-color);
  border-radius: 999px;
  animation: rvl-rotate var(--rvl-speed) linear infinite;
}

.rvl-variant--dual-ring .rvl-part:nth-child(1),
.rvl-variant--dual-ring .rvl-part:nth-child(2) {
  border-radius: 999px;
  border-style: solid;
}

.rvl-variant--dual-ring .rvl-part:nth-child(1) {
  inset: 0;
  border-width: var(--rvl-thickness);
  border-color: var(--rvl-color) transparent var(--rvl-secondary-color) transparent;
  animation: rvl-rotate var(--rvl-speed) linear infinite;
}

.rvl-variant--dual-ring .rvl-part:nth-child(2) {
  inset: calc(var(--rvl-size) * 0.18);
  border-width: calc(var(--rvl-thickness) * 0.85);
  border-color: transparent var(--rvl-color) transparent var(--rvl-secondary-color);
  animation: rvl-rotate-reverse calc(var(--rvl-speed) * 1.35) linear infinite;
}

.rvl-variant--segmented-ring .rvl-visual {
  animation: rvl-rotate calc(var(--rvl-speed) * 1.4) linear infinite;
}

.rvl-variant--segmented-ring .rvl-part {
  top: 6%;
  left: 50%;
  width: calc(var(--rvl-thickness) * 0.9);
  height: calc(var(--rvl-size) * 0.18);
  margin-left: calc(var(--rvl-thickness) * -0.45);
  border-radius: 999px;
  background: var(--rvl-color);
  transform-origin: 50% calc((var(--rvl-size) * 0.44));
}

.rvl-variant--segmented-ring .rvl-part:nth-child(1) { transform: rotate(0deg); opacity: 0.28; }
.rvl-variant--segmented-ring .rvl-part:nth-child(2) { transform: rotate(30deg); opacity: 0.34; }
.rvl-variant--segmented-ring .rvl-part:nth-child(3) { transform: rotate(60deg); opacity: 0.4; }
.rvl-variant--segmented-ring .rvl-part:nth-child(4) { transform: rotate(90deg); opacity: 0.46; }
.rvl-variant--segmented-ring .rvl-part:nth-child(5) { transform: rotate(120deg); opacity: 0.52; }
.rvl-variant--segmented-ring .rvl-part:nth-child(6) { transform: rotate(150deg); opacity: 0.58; }
.rvl-variant--segmented-ring .rvl-part:nth-child(7) { transform: rotate(180deg); opacity: 0.66; }
.rvl-variant--segmented-ring .rvl-part:nth-child(8) { transform: rotate(210deg); opacity: 0.74; }
.rvl-variant--segmented-ring .rvl-part:nth-child(9) { transform: rotate(240deg); opacity: 0.82; }
.rvl-variant--segmented-ring .rvl-part:nth-child(10) { transform: rotate(270deg); opacity: 0.9; }
.rvl-variant--segmented-ring .rvl-part:nth-child(11) { transform: rotate(300deg); opacity: 0.96; }
.rvl-variant--segmented-ring .rvl-part:nth-child(12) { transform: rotate(330deg); opacity: 1; }

.rvl-variant--arc .rvl-part:nth-child(1) {
  inset: 0;
  border-radius: 999px;
  border: var(--rvl-thickness) solid transparent;
  border-top-color: var(--rvl-color);
  border-right-color: var(--rvl-color);
  box-shadow: inset 0 0 0 calc(var(--rvl-thickness) * 0.15) var(--rvl-secondary-color);
  animation: rvl-rotate var(--rvl-speed) cubic-bezier(0.65, 0.05, 0.36, 1) infinite;
}

.rvl-variant--orbit .rvl-part:nth-child(1) {
  inset: calc(var(--rvl-size) * 0.29);
  width: calc(var(--rvl-size) * 0.18);
  height: calc(var(--rvl-size) * 0.18);
  background: var(--rvl-color);
  border-radius: 999px;
  box-shadow: 0 0 0 calc(var(--rvl-size) * 0.12) var(--rvl-secondary-color);
}

.rvl-variant--orbit .rvl-part:nth-child(2) {
  inset: 0;
  border-radius: 999px;
  border: calc(var(--rvl-thickness) * 0.75) solid transparent;
  border-top-color: var(--rvl-color);
  animation: rvl-rotate calc(var(--rvl-speed) * 1.1) linear infinite;
}

.rvl-variant--orbit .rvl-visual::after {
  content: "";
  position: absolute;
  top: calc(var(--rvl-size) * 0.1);
  left: 50%;
  width: calc(var(--rvl-size) * 0.16);
  height: calc(var(--rvl-size) * 0.16);
  background: var(--rvl-color);
  border-radius: 999px;
  transform-origin: 50% calc((var(--rvl-size) * 0.4));
  animation: rvl-rotate calc(var(--rvl-speed) * 1.1) linear infinite;
}

.rvl-variant--comet .rvl-part:nth-child(1) {
  inset: 0;
  border-radius: 999px;
  border: calc(var(--rvl-thickness) * 0.7) solid color-mix(in srgb, var(--rvl-color) 20%, transparent);
}

.rvl-variant--comet .rvl-part:nth-child(2) {
  top: calc(var(--rvl-size) * 0.06);
  left: 50%;
  width: calc(var(--rvl-size) * 0.14);
  height: calc(var(--rvl-size) * 0.14);
  margin-left: calc(var(--rvl-size) * -0.07);
  background: var(--rvl-color);
  border-radius: 999px;
  box-shadow:
    0 0 0 calc(var(--rvl-size) * 0.08) color-mix(in srgb, var(--rvl-color) 16%, transparent),
    0 calc(var(--rvl-size) * 0.12) calc(var(--rvl-size) * 0.16) color-mix(in srgb, var(--rvl-color) 20%, transparent);
  transform-origin: 50% calc((var(--rvl-size) * 0.44));
  animation: rvl-rotate calc(var(--rvl-speed) * 1.08) linear infinite;
}

.rvl-variant--halo .rvl-part:nth-child(1),
.rvl-variant--halo .rvl-part:nth-child(2) {
  inset: 0;
  border-radius: 999px;
}

.rvl-variant--halo .rvl-part:nth-child(1) {
  border: calc(var(--rvl-thickness) * 0.75) solid color-mix(in srgb, var(--rvl-color) 34%, transparent);
  box-shadow:
    0 0 18px color-mix(in srgb, var(--rvl-color) 22%, transparent),
    inset 0 0 14px color-mix(in srgb, var(--rvl-color) 12%, transparent);
  animation: rvl-glow calc(var(--rvl-speed) * 1.4) ease-in-out infinite;
}

.rvl-variant--halo .rvl-part:nth-child(2) {
  inset: calc(var(--rvl-size) * 0.18);
  border: calc(var(--rvl-thickness) * 0.55) solid transparent;
  border-top-color: var(--rvl-color);
  animation: rvl-rotate calc(var(--rvl-speed) * 1.2) linear infinite;
}

.rvl-variant--radar .rvl-part:nth-child(1),
.rvl-variant--radar .rvl-part:nth-child(2) {
  border: 1px solid color-mix(in srgb, var(--rvl-color) 30%, transparent);
  border-radius: 999px;
}

.rvl-variant--radar .rvl-part:nth-child(1) {
  inset: 0;
}

.rvl-variant--radar .rvl-part:nth-child(2) {
  inset: calc(var(--rvl-size) * 0.18);
}

.rvl-variant--radar .rvl-part:nth-child(3) {
  width: 52%;
  height: 52%;
  top: 24%;
  left: 24%;
  background:
    linear-gradient(120deg, transparent 0%, color-mix(in srgb, var(--rvl-color) 56%, transparent) 55%, transparent 100%);
  clip-path: polygon(50% 50%, 100% 0%, 100% 100%);
  transform-origin: 50% 50%;
  animation: rvl-rotate calc(var(--rvl-speed) * 1.2) linear infinite;
}

.rvl-variant--astronaut .rvl-visual {
  width: calc(var(--rvl-size) * 1.18);
  height: calc(var(--rvl-size) * 1.18);
  animation: rvl-space-float calc(var(--rvl-speed) * 1.8) ease-in-out infinite;
}

.rvl-variant--astronaut .rvl-part:nth-child(1) {
  top: 13%;
  left: 37%;
  width: 30%;
  height: 30%;
  border-radius: 999px;
  background:
    radial-gradient(circle at 42% 34%, rgba(255, 255, 255, 0.98) 0 42%, #dbeafe 43% 62%, #bfdbfe 63% 100%);
  box-shadow:
    inset 0 -2px 0 rgba(96, 165, 250, 0.22),
    0 8px 18px color-mix(in srgb, var(--rvl-color) 14%, transparent);
}

.rvl-variant--astronaut .rvl-part:nth-child(1)::before {
  content: "";
  position: absolute;
  inset: 22% 18% 26% 18%;
  border-radius: 999px 999px 52% 52%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.88), color-mix(in srgb, var(--rvl-color) 72%, #0f172a));
}

.rvl-variant--astronaut .rvl-part:nth-child(1)::after {
  content: "";
  position: absolute;
  top: 28%;
  left: 28%;
  width: 18%;
  height: 18%;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.78);
}

.rvl-variant--astronaut .rvl-part:nth-child(2) {
  top: 42%;
  left: 34%;
  width: 32%;
  height: 34%;
  border-radius: 46% 46% 34% 34%;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.98), #dbeafe 70%, #bfdbfe 100%);
  box-shadow:
    inset 0 -2px 0 rgba(96, 165, 250, 0.16),
    0 10px 24px color-mix(in srgb, var(--rvl-color) 10%, transparent);
}

.rvl-variant--astronaut .rvl-part:nth-child(2)::before {
  content: "";
  position: absolute;
  left: -16%;
  top: 16%;
  width: 24%;
  height: 44%;
  border-radius: 10px;
  background: #c7d2fe;
  box-shadow: calc(var(--rvl-size) * 0.24) 0 0 #eff6ff;
}

.rvl-variant--astronaut .rvl-part:nth-child(2)::after {
  content: "";
  position: absolute;
  left: 21%;
  bottom: -18%;
  width: 16%;
  height: 26%;
  border-radius: 999px;
  background: #dbeafe;
  box-shadow:
    calc(var(--rvl-size) * 0.14) 0 0 #dbeafe,
    calc(var(--rvl-size) * -0.14) calc(var(--rvl-size) * -0.1) 0 #eff6ff,
    calc(var(--rvl-size) * 0.18) calc(var(--rvl-size) * -0.1) 0 #eff6ff;
}

.rvl-variant--astronaut .rvl-part:nth-child(3) {
  top: 16%;
  left: 18%;
  width: 4px;
  height: 4px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow:
    calc(var(--rvl-size) * 0.18) calc(var(--rvl-size) * 0.14) 0 rgba(255, 255, 255, 0.7),
    calc(var(--rvl-size) * 0.54) calc(var(--rvl-size) * 0.08) 0 rgba(255, 255, 255, 0.95),
    calc(var(--rvl-size) * 0.64) calc(var(--rvl-size) * 0.42) 0 rgba(255, 255, 255, 0.7),
    calc(var(--rvl-size) * 0.08) calc(var(--rvl-size) * 0.56) 0 rgba(255, 255, 255, 0.82);
  animation: rvl-star-twinkle calc(var(--rvl-speed) * 1.6) ease-in-out infinite;
}

.rvl-variant--astronaut-to-mars .rvl-visual {
  width: calc(var(--rvl-size) * 1.82);
  height: calc(var(--rvl-size) * 1.16);
}

.rvl-variant--astronaut-to-mars .rvl-part:nth-child(1) {
  top: 16%;
  right: 6%;
  width: 34%;
  height: 54%;
  border-radius: 999px;
  background:
    radial-gradient(circle at 34% 32%, rgba(254, 202, 202, 0.72) 0 10%, transparent 11%),
    radial-gradient(circle at 68% 60%, rgba(248, 113, 113, 0.64) 0 10%, transparent 11%),
    radial-gradient(circle at 52% 44%, #fb7185 0 16%, #ef4444 17% 60%, #991b1b 100%);
  box-shadow:
    0 0 0 calc(var(--rvl-size) * 0.06) rgba(248, 113, 113, 0.12),
    0 16px 28px rgba(127, 29, 29, 0.18);
  animation: rvl-planet-bob calc(var(--rvl-speed) * 1.8) ease-in-out infinite;
}

.rvl-variant--astronaut-to-mars .rvl-part:nth-child(2) {
  top: 26%;
  left: 14%;
  width: 58%;
  height: 34%;
  border-top: calc(var(--rvl-thickness) * 0.68) dashed color-mix(in srgb, var(--rvl-color) 26%, transparent);
  border-radius: 999px;
  opacity: 0.9;
  transform: rotate(8deg);
}

.rvl-variant--astronaut-to-mars .rvl-part:nth-child(3) {
  top: 44%;
  left: 6%;
  width: 10%;
  height: 18%;
  border-radius: 44% 44% 34% 34%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.98), #dbeafe 72%, #bfdbfe 100%);
  box-shadow: 0 8px 18px color-mix(in srgb, var(--rvl-color) 10%, transparent);
  animation: rvl-mars-trip calc(var(--rvl-speed) * 2.1) ease-in-out infinite;
}

.rvl-variant--astronaut-to-mars .rvl-part:nth-child(3)::before {
  content: "";
  position: absolute;
  top: -56%;
  left: 16%;
  width: 68%;
  height: 68%;
  border-radius: 999px;
  background:
    radial-gradient(circle at 42% 34%, rgba(255, 255, 255, 0.98) 0 42%, #dbeafe 43% 62%, #bfdbfe 63% 100%);
  box-shadow: inset 0 -1px 0 rgba(96, 165, 250, 0.18);
}

.rvl-variant--astronaut-to-mars .rvl-part:nth-child(3)::after {
  content: "";
  position: absolute;
  left: -120%;
  top: 46%;
  width: 120%;
  height: 2px;
  background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--rvl-color) 32%, transparent), transparent);
  opacity: 0.72;
}

.rvl-variant--astronaut-to-mars .rvl-part:nth-child(4) {
  top: 12%;
  left: 10%;
  width: 4px;
  height: 4px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow:
    calc(var(--rvl-size) * 0.34) calc(var(--rvl-size) * 0.12) 0 rgba(255, 255, 255, 0.7),
    calc(var(--rvl-size) * 0.88) calc(var(--rvl-size) * 0.04) 0 rgba(255, 255, 255, 0.9),
    calc(var(--rvl-size) * 1.08) calc(var(--rvl-size) * 0.44) 0 rgba(255, 255, 255, 0.74),
    calc(var(--rvl-size) * 0.42) calc(var(--rvl-size) * 0.56) 0 rgba(255, 255, 255, 0.86);
  animation: rvl-star-twinkle calc(var(--rvl-speed) * 1.7) ease-in-out infinite;
}

.rvl-variant--baseball-player .rvl-visual,
.rvl-variant--football-player .rvl-visual {
  width: calc(var(--rvl-size) * 1.76);
  height: calc(var(--rvl-size) * 1.12);
}

.rvl-variant--baseball-player .rvl-part:nth-child(1),
.rvl-variant--football-player .rvl-part:nth-child(1) {
  top: 28%;
  left: 14%;
  width: 18%;
  height: 42%;
  border-radius: 18px 18px 14px 14px;
  background: linear-gradient(180deg, color-mix(in srgb, var(--rvl-color) 78%, white), var(--rvl-color));
  clip-path: polygon(36% 0%, 70% 0%, 100% 22%, 80% 56%, 78% 100%, 54% 100%, 48% 72%, 34% 100%, 12% 100%, 18% 56%, 0% 22%);
  transform-origin: 50% 76%;
  animation: rvl-athlete-sway calc(var(--rvl-speed) * 1.45) ease-in-out infinite;
}

.rvl-variant--baseball-player .rvl-part:nth-child(1)::before,
.rvl-variant--football-player .rvl-part:nth-child(1)::before {
  content: "";
  position: absolute;
  top: -26%;
  left: 26%;
  width: 46%;
  height: 30%;
  border-radius: 999px;
  background: color-mix(in srgb, white 72%, var(--rvl-color));
}

.rvl-variant--baseball-player .rvl-part:nth-child(1)::after,
.rvl-variant--football-player .rvl-part:nth-child(1)::after {
  content: "";
  position: absolute;
  left: 92%;
  top: 32%;
  width: 92%;
  height: 6%;
  border-radius: 999px;
  background: color-mix(in srgb, var(--rvl-color) 32%, transparent);
  transform-origin: left center;
}

.rvl-variant--baseball-player .rvl-part:nth-child(1)::after {
  width: 116%;
  top: 12%;
  transform: rotate(-28deg);
  background: linear-gradient(90deg, color-mix(in srgb, #f59e0b 84%, white), color-mix(in srgb, #b45309 82%, white));
}

.rvl-variant--football-player .rvl-part:nth-child(1)::after {
  width: 82%;
  top: 52%;
  transform: rotate(-34deg);
  background: color-mix(in srgb, var(--rvl-color) 18%, transparent);
}

.rvl-variant--baseball-player .rvl-part:nth-child(3),
.rvl-variant--football-player .rvl-part:nth-child(3) {
  left: 8%;
  right: 8%;
  bottom: 12%;
  height: 2px;
  border-radius: 999px;
}

.rvl-variant--baseball-player .rvl-part:nth-child(2) {
  left: 34%;
  top: 42%;
  width: calc(var(--rvl-size) * 0.12);
  height: calc(var(--rvl-size) * 0.12);
  border-radius: 999px;
  background:
    radial-gradient(circle at 40% 40%, white 0 38%, #f8fafc 39% 100%);
  box-shadow:
    inset -1px -1px 0 rgba(239, 68, 68, 0.22),
    0 0 0 1px rgba(255, 255, 255, 0.5);
  animation: rvl-baseball-flight calc(var(--rvl-speed) * 1.42) ease-in-out infinite;
}

.rvl-variant--baseball-player .rvl-part:nth-child(3) {
  left: 24%;
  top: 18%;
  width: 54%;
  height: 54%;
  border-top: calc(var(--rvl-thickness) * 0.5) solid color-mix(in srgb, var(--rvl-color) 16%, transparent);
  border-radius: 999px;
  background: none;
}

.rvl-variant--baseball-player .rvl-part:nth-child(4) {
  left: 8%;
  right: 8%;
  bottom: 14%;
  background: linear-gradient(90deg, transparent, color-mix(in srgb, #94a3b8 44%, transparent), transparent);
}

.rvl-variant--football-player .rvl-part:nth-child(2) {
  left: 34%;
  top: 60%;
  width: calc(var(--rvl-size) * 0.16);
  height: calc(var(--rvl-size) * 0.1);
  border-radius: 999px;
  background:
    radial-gradient(circle at 36% 50%, white 0 20%, transparent 21%),
    radial-gradient(circle at 64% 50%, white 0 20%, transparent 21%),
    linear-gradient(90deg, white 0 16%, #111827 17% 26%, white 27% 42%, #111827 43% 58%, white 59% 74%, #111827 75% 84%, white 85% 100%);
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.2);
  animation: rvl-football-flight calc(var(--rvl-speed) * 1.36) ease-in-out infinite;
}

.rvl-variant--football-player .rvl-part:nth-child(3) {
  background: linear-gradient(90deg, transparent, rgba(74, 222, 128, 0.5), transparent);
}

.rvl-variant--football-player .rvl-part:nth-child(4) {
  left: 36%;
  top: 56%;
  width: calc(var(--rvl-size) * 0.28);
  height: 2px;
  border-radius: 999px;
  background: linear-gradient(90deg, color-mix(in srgb, white 58%, transparent), transparent);
  opacity: 0.68;
  animation: rvl-football-flight calc(var(--rvl-speed) * 1.36) ease-in-out infinite;
}

.rvl-variant--galaxy .rvl-visual {
  width: calc(var(--rvl-size) * 1.76);
  height: calc(var(--rvl-size) * 1.76);
  animation: rvl-galaxy-drift calc(var(--rvl-speed) * 2.6) linear infinite;
}

.rvl-variant--galaxy .rvl-visual::before {
  content: "";
  position: absolute;
  inset: 14%;
  border-radius: 999px;
  background:
    radial-gradient(circle at center, transparent 0 28%, color-mix(in srgb, var(--rvl-color) 18%, transparent) 28.8% 29.8%, transparent 30.8%),
    radial-gradient(circle at center, transparent 0 40%, color-mix(in srgb, #a78bfa 18%, transparent) 40.8% 41.8%, transparent 42.8%),
    linear-gradient(35deg, transparent 22%, color-mix(in srgb, var(--rvl-color) 24%, transparent) 42%, transparent 58%),
    linear-gradient(145deg, transparent 24%, color-mix(in srgb, #818cf8 22%, transparent) 44%, transparent 60%);
  filter: blur(1px);
  opacity: 0.95;
}

.rvl-variant--galaxy .rvl-visual::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: calc(var(--rvl-size) * 0.22);
  height: calc(var(--rvl-size) * 0.22);
  border-radius: 999px;
  background:
    radial-gradient(circle at center, #f8fafc 0 22%, #bfdbfe 23% 54%, #818cf8 55% 100%);
  transform: translate(-50%, -50%);
  animation: rvl-galaxy-core calc(var(--rvl-speed) * 1.8) ease-in-out infinite;
}

.rvl-variant--galaxy .rvl-part {
  border-radius: 999px;
}

.rvl-variant--galaxy .rvl-part:nth-child(1),
.rvl-variant--galaxy .rvl-part:nth-child(2) {
  top: 50%;
  left: 50%;
  width: calc(var(--rvl-size) * 1.08);
  height: calc(var(--rvl-size) * 0.38);
  margin-left: calc(var(--rvl-size) * -0.54);
  margin-top: calc(var(--rvl-size) * -0.19);
  border-radius: 999px;
  background:
    radial-gradient(circle at 18% 50%, rgba(255, 255, 255, 0.88) 0 3%, transparent 4%),
    radial-gradient(circle at 36% 38%, rgba(196, 181, 253, 0.88) 0 3%, transparent 4%),
    radial-gradient(circle at 62% 62%, rgba(125, 211, 252, 0.88) 0 3.2%, transparent 4.2%),
    radial-gradient(circle at 82% 44%, rgba(255, 255, 255, 0.74) 0 2.8%, transparent 3.8%),
    linear-gradient(
      90deg,
      transparent 0%,
      color-mix(in srgb, #a78bfa 24%, transparent) 18%,
      color-mix(in srgb, var(--rvl-color) 28%, transparent) 50%,
      color-mix(in srgb, #7dd3fc 24%, transparent) 82%,
      transparent 100%
    );
  filter: blur(2px);
}

.rvl-variant--galaxy .rvl-part:nth-child(1) {
  transform: rotate(28deg);
}

.rvl-variant--galaxy .rvl-part:nth-child(2) {
  transform: rotate(-24deg);
}

.rvl-variant--galaxy .rvl-part:nth-child(3),
.rvl-variant--galaxy .rvl-part:nth-child(4),
.rvl-variant--galaxy .rvl-part:nth-child(5),
.rvl-variant--galaxy .rvl-part:nth-child(6) {
  top: 50%;
  left: 50%;
  transform-origin: 0 0;
  animation: rvl-rotate linear infinite;
}

.rvl-variant--galaxy .rvl-part:nth-child(3) {
  width: calc(var(--rvl-size) * 0.64);
  height: calc(var(--rvl-size) * 0.64);
  margin-left: calc(var(--rvl-size) * -0.32);
  margin-top: calc(var(--rvl-size) * -0.32);
  animation-duration: calc(var(--rvl-speed) * 1.8);
}

.rvl-variant--galaxy .rvl-part:nth-child(3)::before {
  content: "";
  position: absolute;
  width: calc(var(--rvl-size) * 0.07);
  height: calc(var(--rvl-size) * 0.07);
  transform: translateX(calc(var(--rvl-size) * 0.32));
  border-radius: 999px;
  background: #f8fafc;
}

.rvl-variant--galaxy .rvl-part:nth-child(4) {
  width: calc(var(--rvl-size) * 0.88);
  height: calc(var(--rvl-size) * 0.88);
  margin-left: calc(var(--rvl-size) * -0.44);
  margin-top: calc(var(--rvl-size) * -0.44);
  animation-duration: calc(var(--rvl-speed) * 2.4);
}

.rvl-variant--galaxy .rvl-part:nth-child(4)::before {
  content: "";
  position: absolute;
  width: calc(var(--rvl-size) * 0.06);
  height: calc(var(--rvl-size) * 0.06);
  transform: translateX(calc(var(--rvl-size) * 0.44));
  border-radius: 999px;
  background: #a78bfa;
}

.rvl-variant--galaxy .rvl-part:nth-child(5) {
  width: calc(var(--rvl-size) * 1.08);
  height: calc(var(--rvl-size) * 1.08);
  margin-left: calc(var(--rvl-size) * -0.54);
  margin-top: calc(var(--rvl-size) * -0.54);
  animation-duration: calc(var(--rvl-speed) * 3.1);
}

.rvl-variant--galaxy .rvl-part:nth-child(5)::before {
  content: "";
  position: absolute;
  width: calc(var(--rvl-size) * 0.052);
  height: calc(var(--rvl-size) * 0.052);
  transform: translateX(calc(var(--rvl-size) * 0.54));
  border-radius: 999px;
  background: #7dd3fc;
}

.rvl-variant--galaxy .rvl-part:nth-child(6) {
  top: 18%;
  left: 20%;
  width: 4px;
  height: 4px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow:
    calc(var(--rvl-size) * 0.18) calc(var(--rvl-size) * 0.12) 0 rgba(255, 255, 255, 0.76),
    calc(var(--rvl-size) * 0.68) calc(var(--rvl-size) * 0.06) 0 rgba(196, 181, 253, 0.92),
    calc(var(--rvl-size) * 0.88) calc(var(--rvl-size) * 0.46) 0 rgba(125, 211, 252, 0.86),
    calc(var(--rvl-size) * 0.22) calc(var(--rvl-size) * 0.86) 0 rgba(255, 255, 255, 0.78);
  animation: rvl-star-twinkle calc(var(--rvl-speed) * 1.8) ease-in-out infinite;
}

.rvl-variant--pulse .rvl-part:nth-child(1),
.rvl-variant--pulse .rvl-part:nth-child(2) {
  inset: 0;
  border-radius: 999px;
}

.rvl-variant--pulse .rvl-part:nth-child(1) {
  background: var(--rvl-color);
  transform: scale(0.34);
}

.rvl-variant--pulse .rvl-part:nth-child(2) {
  border: calc(var(--rvl-thickness) * 0.8) solid var(--rvl-color);
  animation: rvl-pulse calc(var(--rvl-speed) * 1.5) ease-in-out infinite;
}

.rvl-variant--wave-dots .rvl-part,
.rvl-variant--bouncing-dots .rvl-part,
.rvl-variant--typing-dots .rvl-part,
.rvl-variant--magnetic-dots .rvl-part {
  position: static;
  width: calc(var(--rvl-size) / 5.5);
  height: calc(var(--rvl-size) / 5.5);
  border-radius: 999px;
  background: var(--rvl-color);
}

.rvl-variant--wave-dots .rvl-visual,
.rvl-variant--bouncing-dots .rvl-visual,
.rvl-variant--typing-dots .rvl-visual,
.rvl-variant--magnetic-dots .rvl-visual {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: calc(var(--rvl-gap) * 0.5);
  width: auto;
}

.rvl-variant--wave-dots .rvl-part {
  animation: rvl-wave calc(var(--rvl-speed) * 1.1) ease-in-out infinite;
}

.rvl-variant--bouncing-dots .rvl-part {
  animation: rvl-bounce var(--rvl-speed) ease-in-out infinite;
}

.rvl-variant--typing-dots .rvl-part {
  animation: rvl-pulse calc(var(--rvl-speed) * 1.2) ease-in-out infinite;
}

.rvl-variant--magnetic-dots .rvl-part {
  animation: rvl-magnetic calc(var(--rvl-speed) * 1.15) ease-in-out infinite;
}

.rvl-variant--magnetic-dots .rvl-part:nth-child(1) { --magnet-offset: -32%; }
.rvl-variant--magnetic-dots .rvl-part:nth-child(2) { --magnet-offset: -14%; }
.rvl-variant--magnetic-dots .rvl-part:nth-child(3) { --magnet-offset: 14%; }
.rvl-variant--magnetic-dots .rvl-part:nth-child(4) { --magnet-offset: 32%; }
.rvl-variant--magnetic-dots .rvl-part:nth-child(5) { --magnet-offset: 44%; }
.rvl-variant--magnetic-dots .rvl-part:nth-child(6) { --magnet-offset: -44%; }

.rvl-variant--grid-pulse .rvl-visual {
  display: grid;
  width: calc(var(--rvl-size) * 0.98);
  height: calc(var(--rvl-size) * 0.98);
  grid-template-columns: repeat(3, 1fr);
  gap: calc(var(--rvl-gap) * 0.24);
}

.rvl-variant--grid-pulse .rvl-part {
  position: static;
  width: calc(var(--rvl-size) * 0.22);
  height: calc(var(--rvl-size) * 0.22);
  border-radius: calc(var(--rvl-radius) * 0.14);
  background: linear-gradient(180deg, color-mix(in srgb, var(--rvl-color) 84%, white), var(--rvl-color));
  animation: rvl-pulse calc(var(--rvl-speed) * 1.1) ease-in-out infinite;
}

.rvl-variant--spiral-dots .rvl-visual {
  animation: rvl-rotate calc(var(--rvl-speed) * 1.4) linear infinite;
}

.rvl-variant--spiral-dots .rvl-part,
.rvl-variant--constellation .rvl-part {
  width: calc(var(--rvl-size) * 0.12);
  height: calc(var(--rvl-size) * 0.12);
  border-radius: 999px;
  background: var(--rvl-color);
}

.rvl-variant--spiral-dots .rvl-part {
  box-shadow: 0 0 0 calc(var(--rvl-size) * 0.05) color-mix(in srgb, var(--rvl-color) 10%, transparent);
  animation: rvl-pulse calc(var(--rvl-speed) * 1.1) ease-in-out infinite;
}

.rvl-variant--spiral-dots .rvl-part:nth-child(1) { top: 50%; left: 50%; margin: calc(var(--rvl-size) * -0.06); }
.rvl-variant--spiral-dots .rvl-part:nth-child(2) { top: 30%; left: 50%; margin: calc(var(--rvl-size) * -0.06); }
.rvl-variant--spiral-dots .rvl-part:nth-child(3) { top: 28%; left: 67%; margin: calc(var(--rvl-size) * -0.06); }
.rvl-variant--spiral-dots .rvl-part:nth-child(4) { top: 48%; left: 78%; margin: calc(var(--rvl-size) * -0.06); }
.rvl-variant--spiral-dots .rvl-part:nth-child(5) { top: 68%; left: 66%; margin: calc(var(--rvl-size) * -0.06); }
.rvl-variant--spiral-dots .rvl-part:nth-child(6) { top: 74%; left: 42%; margin: calc(var(--rvl-size) * -0.06); }
.rvl-variant--spiral-dots .rvl-part:nth-child(7) { top: 58%; left: 22%; margin: calc(var(--rvl-size) * -0.06); }
.rvl-variant--spiral-dots .rvl-part:nth-child(8) { top: 24%; left: 24%; margin: calc(var(--rvl-size) * -0.06); }

.rvl-variant--wave-dots .rvl-part,
.rvl-variant--bouncing-dots .rvl-part,
.rvl-variant--typing-dots .rvl-part,
.rvl-variant--magnetic-dots .rvl-part,
.rvl-variant--grid-pulse .rvl-part,
.rvl-variant--spiral-dots .rvl-part,
.rvl-variant--equalizer-bars .rvl-part,
.rvl-variant--rising-bars .rvl-part {
  animation-delay: calc(var(--part-index, 0) * 90ms);
}

.rvl-variant--constellation .rvl-visual::before {
  content: "";
  position: absolute;
  inset: calc(var(--rvl-size) * 0.14);
  background:
    linear-gradient(28deg, transparent 47%, color-mix(in srgb, var(--rvl-color) 22%, transparent) 49%, color-mix(in srgb, var(--rvl-color) 22%, transparent) 51%, transparent 53%),
    linear-gradient(152deg, transparent 47%, color-mix(in srgb, var(--rvl-color) 22%, transparent) 49%, color-mix(in srgb, var(--rvl-color) 22%, transparent) 51%, transparent 53%);
  opacity: 0.9;
}

.rvl-variant--constellation .rvl-part {
  animation: rvl-float calc(var(--rvl-speed) * 1.5) ease-in-out infinite;
  box-shadow: 0 0 0 calc(var(--rvl-size) * 0.05) color-mix(in srgb, var(--rvl-color) 12%, transparent);
}

.rvl-variant--constellation .rvl-part:nth-child(1) { top: 18%; left: 28%; }
.rvl-variant--constellation .rvl-part:nth-child(2) { top: 34%; left: 62%; }
.rvl-variant--constellation .rvl-part:nth-child(3) { top: 58%; left: 74%; }
.rvl-variant--constellation .rvl-part:nth-child(4) { top: 74%; left: 42%; }
.rvl-variant--constellation .rvl-part:nth-child(5) { top: 52%; left: 16%; }
.rvl-variant--constellation .rvl-part:nth-child(6) { top: 24%; left: 78%; }

.rvl-variant--equalizer-bars .rvl-visual,
.rvl-variant--rising-bars .rvl-visual {
  display: inline-flex;
  align-items: end;
  justify-content: center;
  gap: calc(var(--rvl-gap) * 0.35);
  width: auto;
}

.rvl-variant--equalizer-bars .rvl-part,
.rvl-variant--rising-bars .rvl-part {
  position: static;
  width: calc(var(--rvl-size) / 9);
  min-width: 4px;
  border-radius: 999px;
  background: linear-gradient(180deg, var(--rvl-color), color-mix(in srgb, var(--rvl-color) 36%, white));
  transform-origin: bottom center;
}

.rvl-variant--equalizer-bars .rvl-part {
  height: calc(var(--rvl-size) * 0.72);
  animation: rvl-bars calc(var(--rvl-speed) * 1.1) ease-in-out infinite;
}

.rvl-variant--rising-bars .rvl-part {
  height: calc(var(--rvl-size) * 0.74);
  animation: rvl-bars calc(var(--rvl-speed) * 1.35) cubic-bezier(0.65, 0.05, 0.36, 1) infinite;
}

.rvl-variant--shimmer .rvl-visual {
  width: calc(var(--rvl-size) * 2.6);
  height: calc(var(--rvl-size) * 0.42);
  overflow: hidden;
  border-radius: calc(var(--rvl-radius) * 0.8);
  background: color-mix(in srgb, var(--rvl-color) 12%, transparent);
}

.rvl-variant--shimmer .rvl-part:nth-child(1) {
  inset: 0;
  background:
    linear-gradient(
      90deg,
      transparent 0%,
      color-mix(in srgb, white 78%, var(--rvl-color)) 45%,
      transparent 100%
    );
  transform: translateX(-120%);
  animation: rvl-shimmer calc(var(--rvl-speed) * 1.35) linear infinite;
}

.rvl-variant--scan-line .rvl-visual,
.rvl-variant--skeleton-blocks .rvl-visual {
  width: calc(var(--rvl-size) * 2.85);
  overflow: hidden;
  border-radius: calc(var(--rvl-radius) * 0.85);
}

.rvl-variant--scan-line .rvl-visual {
  height: calc(var(--rvl-size) * 1.55);
  background:
    linear-gradient(180deg, color-mix(in srgb, var(--rvl-color) 5%, transparent), transparent 40%),
    color-mix(in srgb, var(--rvl-color) 9%, transparent);
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--rvl-color) 12%, transparent);
}

.rvl-variant--scan-line .rvl-part:nth-child(1) {
  top: 0;
  left: 0;
  right: 0;
  height: calc(var(--rvl-thickness) * 1.6);
  background: linear-gradient(90deg, transparent, var(--rvl-color), transparent);
  box-shadow: 0 0 20px color-mix(in srgb, var(--rvl-color) 24%, transparent);
  animation: rvl-scan calc(var(--rvl-speed) * 1.5) ease-in-out infinite;
}

.rvl-variant--liquid-pill .rvl-visual {
  width: calc(var(--rvl-size) * 2.4);
  height: calc(var(--rvl-size) * 0.66);
  overflow: hidden;
  border-radius: 999px;
  background: color-mix(in srgb, var(--rvl-color) 12%, transparent);
  box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--rvl-color) 10%, transparent);
}

.rvl-variant--liquid-pill .rvl-part:nth-child(1),
.rvl-variant--liquid-pill .rvl-part:nth-child(2) {
  top: 12%;
  bottom: 12%;
  border-radius: 999px;
}

.rvl-variant--liquid-pill .rvl-part:nth-child(1) {
  left: 10%;
  width: 44%;
  background: linear-gradient(90deg, color-mix(in srgb, var(--rvl-color) 84%, white), var(--rvl-color));
  filter: blur(0.4px);
  animation: rvl-liquid calc(var(--rvl-speed) * 1.1) ease-in-out infinite;
}

.rvl-variant--liquid-pill .rvl-part:nth-child(2) {
  left: 22%;
  width: 32%;
  background: color-mix(in srgb, white 68%, var(--rvl-color));
  opacity: 0.56;
  animation: rvl-liquid calc(var(--rvl-speed) * 1.1) ease-in-out infinite reverse;
}

.rvl-variant--ripple-stack .rvl-part {
  inset: 0;
  border-radius: 999px;
  border: calc(var(--rvl-thickness) * 0.72) solid var(--rvl-color);
  opacity: 0;
  animation: rvl-ripple calc(var(--rvl-speed) * 1.65) ease-out infinite;
}

.rvl-variant--ripple-stack .rvl-part:nth-child(2) {
  animation-delay: calc(var(--rvl-speed) * 0.22);
}

.rvl-variant--ripple-stack .rvl-part:nth-child(3) {
  animation-delay: calc(var(--rvl-speed) * 0.44);
}

.rvl-variant--ripple-stack .rvl-part:nth-child(4) {
  animation-delay: calc(var(--rvl-speed) * 0.66);
}

.rvl-variant--minimal-spinner .rvl-part:nth-child(1) {
  inset: 0;
  border-radius: 999px;
  border: calc(var(--rvl-thickness) * 0.72) solid transparent;
  border-top-color: var(--rvl-color);
  animation: rvl-rotate calc(var(--rvl-speed) * 0.85) linear infinite;
}

.rvl-variant--neon-spinner .rvl-part:nth-child(1),
.rvl-variant--neon-spinner .rvl-part:nth-child(2),
.rvl-variant--glass-spinner .rvl-part:nth-child(1),
.rvl-variant--glass-spinner .rvl-part:nth-child(2) {
  inset: 0;
  border-radius: 999px;
}

.rvl-variant--neon-spinner .rvl-part:nth-child(1) {
  border: var(--rvl-thickness) solid color-mix(in srgb, var(--rvl-color) 24%, transparent);
  box-shadow:
    0 0 16px color-mix(in srgb, var(--rvl-color) 35%, transparent),
    inset 0 0 12px color-mix(in srgb, var(--rvl-color) 20%, transparent);
}

.rvl-variant--neon-spinner .rvl-part:nth-child(2) {
  border: var(--rvl-thickness) solid transparent;
  border-top-color: var(--rvl-color);
  border-right-color: color-mix(in srgb, var(--rvl-color) 66%, white);
  animation: rvl-rotate var(--rvl-speed) linear infinite;
}

.rvl-variant--glass-spinner .rvl-part:nth-child(1) {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.42), rgba(255, 255, 255, 0.08));
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.44),
    0 14px 28px rgba(15, 23, 42, 0.12);
}

.rvl-variant--glass-spinner .rvl-part:nth-child(2) {
  inset: calc(var(--rvl-size) * 0.06);
  border: calc(var(--rvl-thickness) * 0.8) solid transparent;
  border-top-color: var(--rvl-color);
  animation: rvl-rotate calc(var(--rvl-speed) * 1.1) linear infinite;
}

.rvl-variant--vortex .rvl-part {
  border-radius: 999px;
  border-style: solid;
}

.rvl-variant--vortex .rvl-part:nth-child(1) {
  inset: 0;
  border-width: calc(var(--rvl-thickness) * 0.55);
  border-color: color-mix(in srgb, var(--rvl-color) 24%, transparent);
}

.rvl-variant--vortex .rvl-part:nth-child(2) {
  inset: calc(var(--rvl-size) * 0.12);
  border-width: calc(var(--rvl-thickness) * 0.75);
  border-color: var(--rvl-color) transparent transparent transparent;
  animation: rvl-rotate calc(var(--rvl-speed) * 0.95) linear infinite;
}

.rvl-variant--vortex .rvl-part:nth-child(3) {
  inset: calc(var(--rvl-size) * 0.28);
  border-width: calc(var(--rvl-thickness) * 0.85);
  border-color: transparent transparent var(--rvl-color) transparent;
  animation: rvl-rotate-reverse calc(var(--rvl-speed) * 1.25) linear infinite;
}

.rvl-variant--cube .rvl-visual,
.rvl-variant--diamond .rvl-visual {
  display: grid;
  place-items: center;
  width: calc(var(--rvl-size) * 0.92);
  height: calc(var(--rvl-size) * 0.92);
  grid-template-columns: repeat(2, 1fr);
  gap: calc(var(--rvl-gap) * 0.35);
}

.rvl-variant--cube .rvl-part,
.rvl-variant--diamond .rvl-part {
  position: static;
  width: calc(var(--rvl-size) * 0.34);
  height: calc(var(--rvl-size) * 0.34);
  background: linear-gradient(180deg, color-mix(in srgb, var(--rvl-color) 82%, white), var(--rvl-color));
  border-radius: calc(var(--rvl-radius) * 0.28);
  animation: rvl-pulse calc(var(--rvl-speed) * 1.12) ease-in-out infinite;
}

.rvl-variant--diamond .rvl-part {
  transform: rotate(45deg);
  border-radius: calc(var(--rvl-radius) * 0.18);
}

.rvl-variant--prism .rvl-visual {
  width: calc(var(--rvl-size) * 1.02);
  height: calc(var(--rvl-size) * 1.02);
}

.rvl-variant--prism .rvl-part {
  width: calc(var(--rvl-size) * 0.4);
  height: calc(var(--rvl-size) * 0.4);
  border-radius: calc(var(--rvl-radius) * 0.2);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.34), color-mix(in srgb, var(--rvl-color) 78%, transparent));
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.38),
    0 10px 24px color-mix(in srgb, var(--rvl-color) 12%, transparent);
  clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
  animation: rvl-prism calc(var(--rvl-speed) * 1.45) ease-in-out infinite;
}

.rvl-variant--prism .rvl-part:nth-child(1) { top: 10%; left: 31%; }
.rvl-variant--prism .rvl-part:nth-child(2) { top: 41%; left: 7%; animation-delay: 120ms; }
.rvl-variant--prism .rvl-part:nth-child(3) { top: 41%; right: 7%; animation-delay: 240ms; }

.rvl-variant--skeleton-blocks .rvl-visual {
  height: calc(var(--rvl-size) * 1.78);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-content: start;
  gap: calc(var(--rvl-gap) * 0.45);
  padding: calc(var(--rvl-gap) * 0.35);
  background: color-mix(in srgb, var(--rvl-color) 6%, transparent);
}

.rvl-variant--skeleton-blocks .rvl-part {
  position: static;
  width: 100%;
  height: calc(var(--rvl-size) * 0.38);
  border-radius: calc(var(--rvl-radius) * 0.5);
  background: color-mix(in srgb, var(--rvl-color) 12%, transparent);
  overflow: hidden;
}

.rvl-variant--skeleton-blocks .rvl-part::after {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background:
    linear-gradient(
      90deg,
      transparent 0%,
      color-mix(in srgb, white 80%, var(--rvl-color)) 48%,
      transparent 100%
    );
  transform: translateX(-120%);
  animation: rvl-shimmer calc(var(--rvl-speed) * 1.4) linear infinite;
}

.rvl-variant--skeleton-blocks .rvl-part:nth-child(3) {
  grid-column: span 2;
  height: calc(var(--rvl-size) * 0.48);
}

.rvl-variant--skeleton-blocks .rvl-part:nth-child(4) {
  grid-column: span 2;
  height: calc(var(--rvl-size) * 0.28);
  width: 62%;
}
`,oi=".rvl-variant--",li=new Map;function gf(e){const t=`${oi}${e}`,r=[];let a=0;for(;a<de.length;){for(;a<de.length&&/\s/.test(de[a]??"");)a+=1;if(a>=de.length)break;const n=a;for(;a<de.length&&de[a]!=="{";)a+=1;if(a>=de.length)break;const i=de.slice(n,a).trim();a+=1;const s=a;let o=1;for(;a<de.length&&o>0;){const u=de[a];u==="{"?o+=1:u==="}"&&(o-=1),a+=1}if(!i.includes(oi))continue;const l=i.split(",").map(u=>u.trim()).filter(Boolean).filter(u=>u.includes(t));if(!l.length)continue;const c=de.slice(s,a-1).trimEnd();r.push(`${l.join(`,
`)} {
${c}
}`)}return r.join(`

`)}function bf(e){const t=li.get(e);if(t)return t;const r=gf(e);return li.set(e,r),r}var yf=mf;function Bs(){return typeof window<"u"&&typeof document<"u"}var ci="data-rvl-loading-base",ui="data-rvl-loading-variant";function _f(e){if(e.head.querySelector(`[${ci}]`))return;const t=e.createElement("style");t.setAttribute(ci,"true"),t.textContent=yf,e.head.append(t)}function wf(e,t){if(t.head.querySelector(`[${ui}="${e}"]`))return;const r=bf(e);if(!r.trim())return;const a=t.createElement("style");a.setAttribute(ui,e),a.textContent=r,t.head.append(a)}function vi(e,t=document){Bs()&&(_f(t),wf(e,t))}function Cf(e,t=document){if(typeof e=="string"){const r=t.querySelector(e);if(!r)throw new Error(`@stackline/loading could not find target "${e}".`);return r}return e instanceof HTMLElement?e:t.body}function xf(e){if(e===document.body||e===document.documentElement)return()=>{};const t=window.getComputedStyle(e).position;if(t&&t!=="static")return()=>{};const r=e.style.position;return e.style.position="relative",()=>{if(r){e.style.position=r;return}e.style.removeProperty("position")}}var fi=0;function kf(e="rvl"){return fi+=1,`${e}-${fi}`}var $f=class{constructor(e={}){if(Z(this,"id",kf()),Z(this,"element"),Z(this,"state",{mounted:!1,visible:!1,destroyed:!1,pending:null}),Z(this,"bodyElement"),Z(this,"visualElement"),Z(this,"labelElement"),Z(this,"srElement"),Z(this,"options"),Z(this,"mountedTarget",null),Z(this,"restorePositionContext",null),Z(this,"showTimeoutId",null),Z(this,"hideTimeoutId",null),Z(this,"showResolver",null),Z(this,"hideResolver",null),Z(this,"shownAt",0),!Bs())throw new Error("@stackline/loading requires a browser-like DOM to create loaders.");this.options=si(e),vi(this.options.variant),this.element=document.createElement("div"),this.element.dataset.rvlLoader=this.id,this.bodyElement=document.createElement("div"),this.bodyElement.className="rvl-body",this.visualElement=document.createElement("div"),this.visualElement.className="rvl-visual",this.visualElement.setAttribute("aria-hidden","true"),this.labelElement=document.createElement("span"),this.labelElement.className="rvl-label",this.srElement=document.createElement("span"),this.srElement.className="rvl-sr-only",this.bodyElement.append(this.visualElement,this.labelElement,this.srElement),this.element.append(this.bodyElement),this.render(),(this.options.target||this.options.fullscreen)&&this.mount(this.options.target),this.options.visible?this.show():this.element.hidden=!0}getOptions(){return{...this.options,style:{...this.options.style}}}mount(e){this.assertAlive();const t=this.resolveMountTarget(e);return this.mountedTarget===t&&this.state.mounted?this:(this.unmount(),this.options.overlay&&!this.options.fullscreen&&(this.restorePositionContext=xf(t)),t.append(this.element),this.mountedTarget=t,this.state.mounted=!0,this)}unmount(){return this.element.parentElement&&this.element.parentElement.removeChild(this.element),this.restorePositionContext&&(this.restorePositionContext(),this.restorePositionContext=null),this.mountedTarget=null,this.state.mounted=!1,this}show(){return this.assertAlive(),this.state.visible&&this.state.pending!=="hide"?Promise.resolve():(this.clearHideTimer(!0),this.state.pending="show",this.state.mounted||this.mount(this.options.target),new Promise(e=>{const t=()=>{this.state.pending=null,this.state.visible=!0,this.shownAt=Date.now(),this.element.hidden=!1,this.syncVisibility(),this.showResolver?.(),this.showResolver=null};if(this.clearShowTimer(!0),this.showResolver=e,this.options.delay>0){this.showTimeoutId=window.setTimeout(t,this.options.delay);return}t()}))}hide(){return this.assertAlive(),!this.state.visible&&this.state.pending!=="show"?(this.syncVisibility(),Promise.resolve()):(this.clearShowTimer(!0),this.state.pending="hide",new Promise(e=>{const t=()=>{this.state.pending=null,this.state.visible=!1,this.syncVisibility(),this.hideResolver?.(),this.hideResolver=null};if(this.clearHideTimer(!0),this.hideResolver=e,!this.state.visible){t();return}const r=this.shownAt?Date.now()-this.shownAt:0,a=Math.max(0,this.options.minVisible-r);if(a>0){this.hideTimeoutId=window.setTimeout(t,a);return}t()}))}toggle(e){return(typeof e=="boolean"?e:!this.state.visible)?this.show():this.hide()}update(e){this.assertAlive();const t=this.resolveMountTarget();this.options=si({...this.options,...e,style:{...this.options.style,...e.style??{}}}),vi(this.options.variant),this.render();const r=this.resolveMountTarget();return t!==r&&this.state.mounted&&this.mount(r),this}destroy(){this.state.destroyed||(this.clearShowTimer(!0),this.clearHideTimer(!0),this.unmount(),this.state.destroyed=!0)}render(){const e=La(this.options.variant);this.element.className=["rvl-loader",`rvl-variant--${this.options.variant}`,this.options.inline?"is-inline":"is-block",this.options.overlay?"is-overlay":"",this.options.fullscreen?"is-fullscreen":"",this.options.centered?"is-centered":"",this.options.label?"has-label":"",this.options.className].filter(Boolean).join(" "),this.element.setAttribute("role","status"),this.element.setAttribute("aria-live",this.options.ariaLive),this.element.setAttribute("aria-atomic","true"),this.element.setAttribute("aria-busy",this.state.visible?"true":"false"),this.element.dataset.variant=this.options.variant,this.element.style.cssText="",this.element.style.setProperty("--rvl-size",this.options.size),this.element.style.setProperty("--rvl-color",this.options.color),this.element.style.setProperty("--rvl-secondary-color",this.options.secondaryColor),this.element.style.setProperty("--rvl-speed",`${this.options.speed}ms`),this.element.style.setProperty("--rvl-thickness",`${this.options.thickness}px`),this.element.style.setProperty("--rvl-opacity",`${this.options.opacity}`),this.element.style.setProperty("--rvl-background",this.options.background),this.element.style.setProperty("--rvl-blur",`${this.options.blur}px`),this.element.style.setProperty("--rvl-radius",this.options.radius),this.element.style.setProperty("--rvl-gap",`${this.options.gap}px`),this.element.style.setProperty("--rvl-z-index",`${this.options.zIndex}`),this.element.style.setProperty("animation-direction",this.options.direction),vf(this.element,this.options.style),this.labelElement.textContent=this.options.label,this.srElement.textContent=this.options.label,this.options.label?this.element.setAttribute("aria-label",this.options.label):this.element.removeAttribute("aria-label"),this.element.title=e.label,this.visualElement.replaceChildren();for(let t=0;t<this.options.count;t+=1){const r=document.createElement("span");r.className="rvl-part",r.style.setProperty("--part-index",String(t)),this.visualElement.append(r)}this.syncVisibility()}syncVisibility(){this.element.hidden=!this.state.visible,this.element.setAttribute("aria-busy",this.state.visible?"true":"false"),this.element.setAttribute("aria-hidden",this.state.visible?"false":"true")}resolveMountTarget(e){return this.options.fullscreen?document.body:Cf(e??this.options.target)}clearShowTimer(e=!1){this.showTimeoutId!=null&&(window.clearTimeout(this.showTimeoutId),this.showTimeoutId=null),e&&this.showResolver&&(this.showResolver(),this.showResolver=null)}clearHideTimer(e=!1){this.hideTimeoutId!=null&&(window.clearTimeout(this.hideTimeoutId),this.hideTimeoutId=null),e&&this.hideResolver&&(this.hideResolver(),this.hideResolver=null)}assertAlive(){if(this.state.destroyed)throw new Error("@stackline/loading cannot operate on a destroyed loader.")}};function Ia(e={}){return new $f(e)}function di(e,t,r){return e?r?(r.update({...t,target:e}),r):Ia({...t,target:e,visible:!1}):null}const pi={name:"StacklineLoading",inheritAttrs:!1,props:{visible:{type:Boolean,default:!0},options:{type:Object,default:()=>({})}},emits:["create","shown","hidden","updated","destroyed"],setup(e,{attrs:t,emit:r,expose:a,slots:n}){const i=Oe(null),s=Oe(null);function o(){if(s.value=di(i.value,e.options||{},s.value),!!s.value){if(r("updated",s.value),e.visible){s.value.show().then(()=>{s.value&&r("shown",s.value)});return}s.value.hide().then(()=>{s.value&&r("hidden",s.value)})}}function l(){if(s.value){const c=s.value;c.destroy(),s.value=null,r("destroyed",c)}}return ul(()=>{s.value=di(i.value,e.options||{},s.value),s.value&&r("create",s.value),o()}),Xa(()=>e.visible,()=>{o()}),Xa(()=>e.options,()=>{o()},{deep:!0}),vl(()=>{l()}),a({getInstance(){return s.value},show(){return s.value?s.value.show():Promise.resolve()},hide(){return s.value?s.value.hide():Promise.resolve()},toggle(c){return s.value?s.value.toggle(c):Promise.resolve()},update(c){s.value&&s.value.update(c)},destroy(){l()}}),()=>sl("div",{...t,ref:i},n.default?n.default():void 0)}},lr=new WeakMap;function Sf(e){if(typeof e=="boolean")return{visible:e,options:{}};if(e&&typeof e=="object"&&("visible"in e||"options"in e)){const t=e;return{visible:typeof t.visible=="boolean"?t.visible:!0,options:t.options||{}}}return{visible:!0,options:e||{}}}function Tf(e,t){const r=Sf(t.value),a=lr.get(e);if(!a){const n=Ia({...r.options,target:e,visible:!1});return lr.set(e,n),{instance:n,normalized:r}}return a.update({...r.options,target:e}),{instance:a,normalized:r}}function mt(e,t){const{instance:r,normalized:a}=Tf(e,t);if(a.visible){r.show();return}r.hide()}function hi(e){const t=lr.get(e);t&&(t.destroy(),lr.delete(e))}const Af={mounted(e,t){mt(e,t)},updated(e,t){mt(e,t)},beforeUnmount(e){hi(e)},bind(e,t){mt(e,t)},inserted(e,t){mt(e,t)},update(e,t){mt(e,t)},unbind(e){hi(e)}};function Of(e,t,r){const a={...e,...r||{}};return typeof t<"u"&&(a.target=t),a}function zf(e={}){let t=null;function r(a,n){const i=Of(e,a,n);return t?(typeof i.target<"u"&&t.mount(i.target),t.update(i),t):(t=Ia({...i,visible:!1}),t)}return{create(a,n){return r(a,n)},mount(a,n){return r(a,n)},async show(a,n){const i=r(a,n);return await i.show(),i},hide(){return t?t.hide():Promise.resolve()},toggle(a){return t?t.toggle(a):Promise.resolve()},update(a){return t?(t.update(a),t):null},destroy(){t&&(t.destroy(),t=null)},getInstance(){return t}}}const Pf={install(e){e.component("stackline-loading",pi),e.component("StacklineLoading",pi),e.directive("stackline-loading",Af)}};function Ef(e,t,r,a,n,i,s,o){var l=typeof e=="function"?e.options:e;return t&&(l.render=t,l.staticRenderFns=r,l._compiled=!0),{exports:e,options:l}}const Nf="npm install @stackline/vue-loading@2",Lf=`import { createApp } from 'vue';
import App from './App.vue';
import VueLoading from '@stackline/vue-loading';

createApp(App).use(VueLoading).mount('#app');`,If='<div v-stackline-loading="{ visible: isLoading, options: loadingOptions }">...</div>',Df=`<stackline-loading
  :visible="true"
  :options="{
    variant: 'orbit',
    size: 56,
    centered: true,
    label: 'Loading dashboard'
  }"
  :style="{ minHeight: '180px' }"
/>`,Mf=`<section
  v-stackline-loading="{ visible: isLoading, options: loadingOptions }"
  class="card-shell"
>
  ...
</section>`,Rf=`import { createLoadingController } from '@stackline/vue-loading';

const loading = createLoadingController();

async function showLoader() {
  const instance = await loading.show(document.body, {
    fullscreen: true,
    overlay: true,
    centered: true,
    variant: 'galaxy',
    label: 'Loading workspace'
  });

  window.setTimeout(() => {
    void instance.hide();
  }, 1200);
}`,Ff=[{id:"default",label:"Default",description:"A clean centered stage for checking size, color, speed, and label choices."},{id:"dashboard",label:"Dashboard",description:"Keep product cards visible while the active region stays anchored to a loading state."},{id:"table",label:"Table",description:"A common analytics refresh pattern where the user should keep their table context."},{id:"page",label:"Page",description:"Simulate a route-level or workspace-level loading state inside the docs shell."},{id:"modal",label:"Modal",description:"Load only the modal body while keeping the dialog frame stable."},{id:"chart",label:"Chart",description:"Useful for analytical surfaces where movement should feel intentional and data-centric."},{id:"upload",label:"Upload",description:"A drop zone preview for uploads, media workflows, and file-heavy forms."}];function mi(e){return`${new Date().toLocaleTimeString("en-US",{hour12:!1})}  ${e}`}function gi(e,t){let r="";for(let a=0;a<t;a+=1)r+=e;return r}function Uf(e){return String(e).split("'").join("\\'")}function jf(e){const t=e.fullscreen,r=e.overlay||t,a={variant:e.variant,size:e.size,speed:e.speed,color:e.color,secondaryColor:e.secondaryColor,centered:r?!0:e.centered,delay:e.delay,minVisible:e.minVisible};return e.label&&(a.label=e.label),r&&(a.overlay=!0),t&&(a.background="rgba(15, 23, 42, 0.54)"),a}function Ar(e,t,r=!1){const a=gi(" ",t),n=gi(" ",t+2),i=["{",`${n}variant: '${e.variant}',`,`${n}size: ${e.size},`,`${n}speed: ${e.speed},`,`${n}color: '${e.color}',`,`${n}secondaryColor: '${e.secondaryColor}',`];return(e.overlay||e.fullscreen||r)&&i.push(`${n}overlay: true,`),e.fullscreen&&(i.push(`${n}fullscreen: true,`),i.push(`${n}background: 'rgba(15, 23, 42, 0.54)',`)),e.centered&&!e.fullscreen&&i.push(`${n}centered: true,`),e.label&&i.push(`${n}label: '${Uf(e.label)}',`),e.delay>0&&i.push(`${n}delay: ${e.delay},`),e.minVisible!==240&&i.push(`${n}minVisible: ${e.minVisible},`),i.push(`${a}}`),i.join(`
`)}function Hf(e){return e==="modal"?['<div class="modal-shell">','  <div class="modal-header"></div>','  <div class="modal-body">','    <div class="modal-line"></div>','    <div class="modal-line short"></div>','    <div class="modal-line"></div>',"  </div>","</div>"].join(`
`):e==="table"?['<div class="table-shell">','  <div class="table-head">',"    <span>Status</span>","    <span>Customer</span>","    <span>Plan</span>","    <span>MRR</span>","  </div>",'  <div class="table-row">...</div>','  <div class="table-row">...</div>',"</div>"].join(`
`):e==="chart"?['<div class="chart-panel">','  <div class="chart-bar"></div>','  <div class="chart-bar"></div>','  <div class="chart-bar"></div>',"</div>"].join(`
`):e==="upload"?['<div class="upload-zone">','  <div class="upload-icon"></div>',"  <p>Drop files here</p>","</div>"].join(`
`):e==="page"?['<section class="page-shell">','  <header class="page-topbar"></header>','  <div class="page-grid">...</div>',"</section>"].join(`
`):['<section class="dashboard-cards">','  <div class="card"></div>','  <div class="card"></div>','  <div class="card card-wide"></div>',"</section>"].join(`
`)}function Bf(e,t){return e.fullscreen?["import { createLoadingController } from '@stackline/vue-loading';","","const loading = createLoadingController();","","async function showLoader() {",`  const instance = await loading.show(document.body, ${Ar(e,4,!0)});`,"  window.setTimeout(() => {","    void instance.hide();","  }, 1200);","}"].join(`
`):t==="default"&&!e.overlay?["<stackline-loading",'  :visible="isLoading"',`  :options="${Ar(e,2)}"`,`  :style="{ minHeight: '220px' }"`,"/>"].join(`
`):["<section",`  v-stackline-loading="{ visible: isLoading, options: ${Ar(e,2,!0)} }"`,">",Hf(t),"</section>"].join(`
`)}const qf={name:"VueLoadingDocsApp",props:{vueLine:{type:String,required:!0}},setup(e){const t=zf(),r=Oe([mi(`Vue ${e.vueLine} docs ready.`)]),a=Ff,n=lf.map(A=>({value:A.value,label:A.label})),i=Oe("default"),s=Oe("Copy code"),o=ja({install:"Copy",plugin:"Copy",directive:"Copy",component:"Copy",overlay:"Copy",controller:"Copy"}),l=Oe(!0),c=Oe(!0),u=Oe(!1),v=ja({variant:"orbit",size:60,speed:900,color:"#2563eb",secondaryColor:"#c7d2fe",overlay:!1,fullscreen:!1,centered:!0,label:"Loading preview",delay:0,minVisible:240,reducedMotion:!1}),m=vt(()=>jf(v)),b=vt(()=>Bf(v,i.value)),x=vt(()=>{const A=a.find(te=>te.id===i.value);return A?A.description:""}),w=vt(()=>({overlay:!0,centered:!0,variant:"glass-spinner",color:"#2563eb",secondaryColor:"#dbeafe",label:"Loading revenue card",minVisible:400})),g=vt(()=>({overlay:!0,centered:!0,variant:"liquid-pill",size:42,label:""}));function C(A){r.value=[mi(A),...r.value].slice(0,16)}async function y(){C("Showing fullscreen loader from createLoadingController.");const A=await t.show(document.body,{fullscreen:!0,overlay:!0,centered:!0,variant:"galaxy",color:"#38bdf8",secondaryColor:"#bfdbfe",minVisible:500,label:"Loading workspace"});window.setTimeout(()=>{A.hide().then(()=>{C("Fullscreen loader hidden.")})},1300)}function I(){c.value=!1,window.setTimeout(()=>{c.value=!0,C("Dashboard overlay replayed.")},40)}function F(){u.value=!0,C("Button loading state activated."),window.setTimeout(()=>{u.value=!1,C("Button loading state cleared.")},1200)}function q(){l.value=!1,window.setTimeout(()=>{l.value=!0},40)}async function j(){try{if(navigator.clipboard&&navigator.clipboard.writeText)await navigator.clipboard.writeText(b.value);else{const A=document.createElement("textarea");A.value=b.value,A.setAttribute("readonly","true"),A.style.position="absolute",A.style.left="-9999px",document.body.appendChild(A),A.select(),document.execCommand("copy"),document.body.removeChild(A)}s.value="Copied"}catch{s.value="Copy failed"}window.setTimeout(()=>{s.value="Copy code"},1200)}async function U(A,te){try{if(navigator.clipboard&&navigator.clipboard.writeText)await navigator.clipboard.writeText(te);else{const W=document.createElement("textarea");W.value=te,W.setAttribute("readonly","true"),W.style.position="absolute",W.style.left="-9999px",document.body.appendChild(W),W.select(),document.execCommand("copy"),document.body.removeChild(W)}o[A]="Copied"}catch{o[A]="Copy failed"}window.setTimeout(()=>{o[A]="Copy"},1200)}return{activeDescription:x,activeSurface:i,buttonOptions:g,buttonVisible:u,cardSurfaceOptions:w,componentCode:Df,controllerCode:Rf,copyButtonLabel:s,copyCode:j,copySnippet:U,directiveCode:If,generatedCode:b,installCode:Nf,logs:r,overlayCode:Mf,pluginCode:Lf,previewOptions:m,previewVisible:l,replayButtonSurface:F,replayCardSurface:I,replayTiming:q,runFullscreenDemo:y,state:v,snippetCopyLabels:o,surfaceVisible:c,surfaces:a,variants:n}}};var Wf=function(){var t=this,r=t._self._c;return t._self._setupProxy,r("div",{staticClass:"app-shell"},[r("header",{staticClass:"hero-grid"},[r("section",{staticClass:"hero-card hero-main"},[r("span",{staticClass:"badge"},[t._v("Vue "+t._s(t.vueLine)+" · Loading wrapper")]),r("h1",[t._v("@stackline/vue-loading")]),r("p",[t._v(" Maintained Vue bindings for the Stackline loading toolkit. Keep the loading engine framework-agnostic, then add Vue-native ergonomics for declarative components, host directives, and fullscreen programmatic states. ")]),t._m(0),t._m(1)]),r("section",{staticClass:"hero-card hero-setup"},[r("h2",[t._v("Setup in 3 steps")]),r("div",{staticClass:"step"},[r("span",[t._v("1")]),r("div",[r("strong",[t._v("Install the wrapper")]),r("div",{staticClass:"code-block-shell is-compact"},[r("div",{staticClass:"code-block-head"},[r("button",{staticClass:"ghost-button copy-button",attrs:{type:"button"},on:{click:function(a){return t.copySnippet("install",t.installCode)}}},[t._v(t._s(t.snippetCopyLabels.install))])]),r("pre",{staticClass:"code-block compact"},[t._v(t._s(t.installCode))])])])]),r("div",{staticClass:"step"},[r("span",[t._v("2")]),r("div",[r("strong",[t._v("Register the plugin")]),r("div",{staticClass:"code-block-shell is-compact"},[r("div",{staticClass:"code-block-head"},[r("button",{staticClass:"ghost-button copy-button",attrs:{type:"button"},on:{click:function(a){return t.copySnippet("plugin",t.pluginCode)}}},[t._v(t._s(t.snippetCopyLabels.plugin))])]),r("pre",{staticClass:"code-block compact"},[t._v(t._s(t.pluginCode))])])])]),r("div",{staticClass:"step"},[r("span",[t._v("3")]),r("div",[r("strong",[t._v("Choose component, directive, or controller")]),r("div",{staticClass:"code-block-shell is-compact"},[r("div",{staticClass:"code-block-head"},[r("button",{staticClass:"ghost-button copy-button",attrs:{type:"button"},on:{click:function(a){return t.copySnippet("directive",t.directiveCode)}}},[t._v(t._s(t.snippetCopyLabels.directive))])]),r("pre",{staticClass:"code-block compact"},[t._v(t._s(t.directiveCode))])])])])])]),r("div",{staticClass:"playground-row"},[r("section",{staticClass:"demo-card playground-card",attrs:{id:"playground"}},[t._m(2),r("div",{staticClass:"playground-shell"},[r("form",{staticClass:"playground-controls"},[r("div",{staticClass:"field"},[r("label",{attrs:{for:"playground-variant"}},[t._v("Variant")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.state.variant,expression:"state.variant"}],attrs:{id:"playground-variant"},on:{change:function(a){var n=Array.prototype.filter.call(a.target.options,function(i){return i.selected}).map(function(i){var s="_value"in i?i._value:i.value;return s});t.$set(t.state,"variant",a.target.multiple?n:n[0])}}},t._l(t.variants,function(a){return r("option",{key:a.value,domProps:{value:a.value}},[t._v(" "+t._s(a.label)+" ")])}),0)]),r("div",{staticClass:"field"},[r("label",{attrs:{for:"playground-size"}},[t._v("Size "),r("span",[t._v(t._s(t.state.size)+"px")])]),r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.state.size,expression:"state.size",modifiers:{number:!0}}],attrs:{id:"playground-size",type:"range",min:"18",max:"96"},domProps:{value:t.state.size},on:{__r:function(a){t.$set(t.state,"size",t._n(a.target.value))},blur:function(a){return t.$forceUpdate()}}})]),r("div",{staticClass:"field"},[r("label",{attrs:{for:"playground-speed"}},[t._v("Speed "),r("span",[t._v(t._s(t.state.speed)+"ms")])]),r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.state.speed,expression:"state.speed",modifiers:{number:!0}}],attrs:{id:"playground-speed",type:"range",min:"300",max:"2200",step:"50"},domProps:{value:t.state.speed},on:{__r:function(a){t.$set(t.state,"speed",t._n(a.target.value))},blur:function(a){return t.$forceUpdate()}}})]),r("div",{staticClass:"field two-up"},[r("div",[r("label",{attrs:{for:"playground-color"}},[t._v("Primary")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.state.color,expression:"state.color"}],attrs:{id:"playground-color",type:"color"},domProps:{value:t.state.color},on:{input:function(a){a.target.composing||t.$set(t.state,"color",a.target.value)}}})]),r("div",[r("label",{attrs:{for:"playground-secondary-color"}},[t._v("Secondary")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.state.secondaryColor,expression:"state.secondaryColor"}],attrs:{id:"playground-secondary-color",type:"color"},domProps:{value:t.state.secondaryColor},on:{input:function(a){a.target.composing||t.$set(t.state,"secondaryColor",a.target.value)}}})])]),r("div",{staticClass:"field"},[r("label",{attrs:{for:"playground-label"}},[t._v("Label")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.state.label,expression:"state.label"}],attrs:{id:"playground-label",type:"text"},domProps:{value:t.state.label},on:{input:function(a){a.target.composing||t.$set(t.state,"label",a.target.value)}}})]),r("div",{staticClass:"field two-up"},[r("div",[r("label",{attrs:{for:"playground-delay"}},[t._v("Delay")]),r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.state.delay,expression:"state.delay",modifiers:{number:!0}}],attrs:{id:"playground-delay",type:"number",min:"0",step:"50"},domProps:{value:t.state.delay},on:{input:function(a){a.target.composing||t.$set(t.state,"delay",t._n(a.target.value))},blur:function(a){return t.$forceUpdate()}}})]),r("div",[r("label",{attrs:{for:"playground-min-visible"}},[t._v("Min visible")]),r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.state.minVisible,expression:"state.minVisible",modifiers:{number:!0}}],attrs:{id:"playground-min-visible",type:"number",min:"0",step:"50"},domProps:{value:t.state.minVisible},on:{input:function(a){a.target.composing||t.$set(t.state,"minVisible",t._n(a.target.value))},blur:function(a){return t.$forceUpdate()}}})])]),r("div",{staticClass:"toggle-row"},[r("label",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.state.overlay,expression:"state.overlay"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.state.overlay)?t._i(t.state.overlay,null)>-1:t.state.overlay},on:{change:function(a){var n=t.state.overlay,i=a.target,s=!!i.checked;if(Array.isArray(n)){var o=null,l=t._i(n,o);i.checked?l<0&&t.$set(t.state,"overlay",n.concat([o])):l>-1&&t.$set(t.state,"overlay",n.slice(0,l).concat(n.slice(l+1)))}else t.$set(t.state,"overlay",s)}}}),t._v(" Overlay")]),r("label",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.state.fullscreen,expression:"state.fullscreen"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.state.fullscreen)?t._i(t.state.fullscreen,null)>-1:t.state.fullscreen},on:{change:function(a){var n=t.state.fullscreen,i=a.target,s=!!i.checked;if(Array.isArray(n)){var o=null,l=t._i(n,o);i.checked?l<0&&t.$set(t.state,"fullscreen",n.concat([o])):l>-1&&t.$set(t.state,"fullscreen",n.slice(0,l).concat(n.slice(l+1)))}else t.$set(t.state,"fullscreen",s)}}}),t._v(" Fullscreen")]),r("label",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.state.centered,expression:"state.centered"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.state.centered)?t._i(t.state.centered,null)>-1:t.state.centered},on:{change:function(a){var n=t.state.centered,i=a.target,s=!!i.checked;if(Array.isArray(n)){var o=null,l=t._i(n,o);i.checked?l<0&&t.$set(t.state,"centered",n.concat([o])):l>-1&&t.$set(t.state,"centered",n.slice(0,l).concat(n.slice(l+1)))}else t.$set(t.state,"centered",s)}}}),t._v(" Centered")]),r("label",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.state.reducedMotion,expression:"state.reducedMotion"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.state.reducedMotion)?t._i(t.state.reducedMotion,null)>-1:t.state.reducedMotion},on:{change:function(a){var n=t.state.reducedMotion,i=a.target,s=!!i.checked;if(Array.isArray(n)){var o=null,l=t._i(n,o);i.checked?l<0&&t.$set(t.state,"reducedMotion",n.concat([o])):l>-1&&t.$set(t.state,"reducedMotion",n.slice(0,l).concat(n.slice(l+1)))}else t.$set(t.state,"reducedMotion",s)}}}),t._v(" Reduced motion")])]),r("div",{staticClass:"playground-actions"},[r("button",{attrs:{type:"button"},on:{click:t.replayTiming}},[t._v("Replay timing")]),r("button",{staticClass:"ghost-button",attrs:{type:"button"},on:{click:t.copyCode}},[t._v(t._s(t.copyButtonLabel))])])]),r("div",{staticClass:"playground-preview"},[r("div",{staticClass:"playground-preview-tabs",attrs:{role:"tablist","aria-label":"Preview surfaces"}},t._l(t.surfaces,function(a){return r("button",{key:a.id,staticClass:"playground-preview-tab",class:{"is-active":t.activeSurface===a.id},attrs:{type:"button",role:"tab","aria-selected":t.activeSurface===a.id},on:{click:function(n){t.activeSurface=a.id}}},[t._v(" "+t._s(a.label)+" ")])}),0),r("p",{staticClass:"playground-description"},[t._v(t._s(t.activeDescription))]),r("div",{staticClass:"playground-stage",class:{"is-reduced-motion":t.state.reducedMotion}},[t.activeSurface==="default"&&!t.previewOptions.overlay?r("div",{class:["playground-surface","playground-surface--clean",{"is-fullscreen-simulated":t.state.fullscreen}]},[r("stackline-loading",{staticClass:"playground-loader-host",style:{minHeight:t.state.fullscreen?"400px":"320px",width:"100%"},attrs:{visible:t.previewVisible,options:t.previewOptions}})],1):t.activeSurface==="table"?r("div",{directives:[{name:"stackline-loading",rawName:"v-stackline-loading",value:{visible:t.previewVisible,options:t.previewOptions},expression:"{ visible: previewVisible, options: previewOptions }"}],class:["playground-surface","surface-table",{"is-fullscreen-simulated":t.state.fullscreen}]},[t._m(3),t._l(4,function(a){return r("div",{key:"table-"+a,staticClass:"playground-table-row"},[t._m(4,!0),t._m(5,!0),t._m(6,!0),t._m(7,!0)])})],2):t.activeSurface==="page"?r("div",{directives:[{name:"stackline-loading",rawName:"v-stackline-loading",value:{visible:t.previewVisible,options:t.previewOptions},expression:"{ visible: previewVisible, options: previewOptions }"}],class:["playground-surface","surface-page",{"is-fullscreen-simulated":t.state.fullscreen}]},[r("div",{staticClass:"page-topbar"}),t._m(8)]):t.activeSurface==="modal"?r("div",{class:["playground-surface","surface-modal",{"is-fullscreen-simulated":t.state.fullscreen}]},[r("div",{staticClass:"modal-shell"},[r("div",{staticClass:"modal-header"}),r("div",{directives:[{name:"stackline-loading",rawName:"v-stackline-loading",value:{visible:t.previewVisible,options:t.previewOptions},expression:"{ visible: previewVisible, options: previewOptions }"}],staticClass:"modal-body"},[r("div",{staticClass:"modal-line"}),r("div",{staticClass:"modal-line short"}),r("div",{staticClass:"modal-line"})])])]):t.activeSurface==="chart"?r("div",{directives:[{name:"stackline-loading",rawName:"v-stackline-loading",value:{visible:t.previewVisible,options:t.previewOptions},expression:"{ visible: previewVisible, options: previewOptions }"}],class:["playground-surface","surface-chart",{"is-fullscreen-simulated":t.state.fullscreen}]},[r("div",{staticClass:"chart-bar",staticStyle:{height:"28%"}}),r("div",{staticClass:"chart-bar",staticStyle:{height:"46%"}}),r("div",{staticClass:"chart-bar",staticStyle:{height:"60%"}}),r("div",{staticClass:"chart-bar",staticStyle:{height:"38%"}}),r("div",{staticClass:"chart-bar",staticStyle:{height:"72%"}}),r("div",{staticClass:"chart-bar",staticStyle:{height:"55%"}})]):t.activeSurface==="upload"?r("div",{directives:[{name:"stackline-loading",rawName:"v-stackline-loading",value:{visible:t.previewVisible,options:t.previewOptions},expression:"{ visible: previewVisible, options: previewOptions }"}],class:["playground-surface","surface-upload",{"is-fullscreen-simulated":t.state.fullscreen}]},[r("div",{staticClass:"upload-icon"}),r("div",{staticClass:"upload-title"},[t._v("Drop files here")]),r("div",{staticClass:"upload-caption"},[t._v("PNG, SVG, PDF up to 25 MB")])]):r("div",{directives:[{name:"stackline-loading",rawName:"v-stackline-loading",value:{visible:t.previewVisible,options:t.previewOptions},expression:"{ visible: previewVisible, options: previewOptions }"}],class:["playground-surface","surface-card-grid",{"is-fullscreen-simulated":t.state.fullscreen}]},[r("div",{staticClass:"surface-card-cell"}),r("div",{staticClass:"surface-card-cell"}),r("div",{staticClass:"surface-card-cell wide"})])]),r("pre",{staticClass:"code-block code-preview"},[t._v(t._s(t.generatedCode))])])])])]),r("main",{staticClass:"content-grid",attrs:{id:"examples"}},[r("section",{staticClass:"examples-column"},[r("section",{staticClass:"demo-card"},[t._m(9),r("div",{staticClass:"code-block-shell"},[r("div",{staticClass:"code-block-head"},[r("button",{staticClass:"ghost-button copy-button",attrs:{type:"button"},on:{click:function(a){return t.copySnippet("component",t.componentCode)}}},[t._v(t._s(t.snippetCopyLabels.component))])]),r("pre",{staticClass:"code-block"},[t._v(t._s(t.componentCode))])]),r("div",{staticClass:"surface-frame"},[r("stackline-loading",{staticClass:"component-stage",style:{minHeight:"220px"},attrs:{visible:"",options:{variant:"orbit",size:56,centered:!0,color:"#2563eb",secondaryColor:"#bfdbfe",label:"Loading dashboard"}}})],1)]),r("section",{staticClass:"demo-card"},[t._m(10),r("div",{staticClass:"code-block-shell"},[r("div",{staticClass:"code-block-head"},[r("button",{staticClass:"ghost-button copy-button",attrs:{type:"button"},on:{click:function(a){return t.copySnippet("overlay",t.overlayCode)}}},[t._v(t._s(t.snippetCopyLabels.overlay))])]),r("pre",{staticClass:"code-block"},[t._v(t._s(t.overlayCode))])]),r("div",{staticClass:"inline-actions"},[r("button",{staticClass:"button secondary",attrs:{type:"button"},on:{click:t.replayCardSurface}},[t._v("Replay card loader")])]),r("div",{directives:[{name:"stackline-loading",rawName:"v-stackline-loading",value:{visible:t.surfaceVisible,options:t.cardSurfaceOptions},expression:"{ visible: surfaceVisible, options: cardSurfaceOptions }"}],staticClass:"card-shell"},[r("div",{staticClass:"card-metric"},[t._v("$128,400")]),r("div",{staticClass:"card-caption"},[t._v("Quarterly expansion pipeline")]),t._m(11)])]),r("section",{staticClass:"demo-card"},[t._m(12),r("div",{staticClass:"button-surface"},[r("div",{directives:[{name:"stackline-loading",rawName:"v-stackline-loading",value:{visible:t.buttonVisible,options:t.buttonOptions},expression:"{ visible: buttonVisible, options: buttonOptions }"}],staticClass:"button-shell"},[r("button",{staticClass:"cta-button",attrs:{type:"button"},on:{click:t.replayButtonSurface}},[t._v("Sync invoice")])])])]),r("section",{staticClass:"demo-card"},[t._m(13),r("div",{staticClass:"code-block-shell"},[r("div",{staticClass:"code-block-head"},[r("button",{staticClass:"ghost-button copy-button",attrs:{type:"button"},on:{click:function(a){return t.copySnippet("controller",t.controllerCode)}}},[t._v(t._s(t.snippetCopyLabels.controller))])]),r("pre",{staticClass:"code-block"},[t._v(t._s(t.controllerCode))])]),r("div",{staticClass:"inline-actions"},[r("button",{staticClass:"button primary",attrs:{type:"button"},on:{click:t.runFullscreenDemo}},[t._v("Show fullscreen loader")])])])]),r("aside",{staticClass:"sidebar-column"},[t._m(14),t._m(15),r("section",{staticClass:"demo-card side-card"},[t._m(16),r("div",{staticClass:"event-log"},t._l(t.logs,function(a){return r("div",{key:a,staticClass:"log-line"},[t._v(t._s(a))])}),0)])])])])},Kf=[function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",{staticClass:"hero-actions"},[t("a",{staticClass:"button primary",attrs:{href:"#playground"}},[e._v("Open playground")]),t("a",{staticClass:"button secondary",attrs:{href:"https://github.com/alexandroit/vue-loading#readme",rel:"noreferrer",target:"_blank"}},[e._v(" README ")])])},function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",{staticClass:"hero-notes"},[t("div",[t("strong",[e._v("Declarative")]),e._v(" Use a plain Vue component when the loader itself is what you want to render.")]),t("div",[t("strong",[e._v("Directive-ready")]),e._v(" Turn an existing card, table, chart shell, modal body, or upload zone into a loading surface.")]),t("div",[t("strong",[e._v("Programmatic")]),e._v(" Use a controller for fullscreen and workspace-level loading flows.")])])},function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",{staticClass:"demo-head"},[t("div",[t("h3",[e._v("Playground")]),t("p",[e._v("Use the Vue wrapper against the same kind of interactive preview shell as the core docs.")])])])},function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",{staticClass:"playground-table-head"},[t("span",[e._v("Status")]),t("span",[e._v("Customer")]),t("span",[e._v("Plan")]),t("span",[e._v("MRR")])])},function(){var e=this,t=e._self._c;return e._self._setupProxy,t("span",[t("i")])},function(){var e=this,t=e._self._c;return e._self._setupProxy,t("span",[t("i")])},function(){var e=this,t=e._self._c;return e._self._setupProxy,t("span",[t("i")])},function(){var e=this,t=e._self._c;return e._self._setupProxy,t("span",[t("i")])},function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",{staticClass:"page-grid"},[t("div",{staticClass:"page-tile"}),t("div",{staticClass:"page-tile"}),t("div",{staticClass:"page-tile"}),t("div",{staticClass:"page-tile"})])},function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",{staticClass:"demo-head"},[t("div",[t("h3",[e._v("Basic component")]),t("p",[e._v("Use the Vue component when the loader itself is the thing being rendered in the tree.")])])])},function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",{staticClass:"demo-head"},[t("div",[t("h3",[e._v("Directive overlay surface")]),t("p",[e._v("Turn an existing card surface into a loading region without rebuilding the layout around the loader.")])])])},function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",{staticClass:"card-bars"},[t("span",{staticStyle:{height:"46%"}}),t("span",{staticStyle:{height:"68%"}}),t("span",{staticStyle:{height:"54%"}}),t("span",{staticStyle:{height:"79%"}})])},function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",{staticClass:"demo-head"},[t("div",[t("h3",[e._v("Button and submit states")]),t("p",[e._v("Use the same directive around a button surface when the request should stay anchored to the action.")])])])},function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",{staticClass:"demo-head"},[t("div",[t("h3",[e._v("Fullscreen and programmatic controller")]),t("p",[e._v("Use a controller when the loading state is tied to navigation, bootstrapping, or a larger workspace transition.")])])])},function(){var e=this,t=e._self._c;return e._self._setupProxy,t("section",{staticClass:"demo-card side-card"},[t("div",{staticClass:"demo-head"},[t("div",[t("h3",[e._v("Wrapper surface")]),t("p",[e._v("The public API stays intentionally small so the real behavior continues to live in the core loading package.")])])]),t("ul",{staticClass:"feature-list"},[t("li",[t("code",[e._v("<stackline-loading />")]),e._v(" for component-first loading states.")]),t("li",[t("code",[e._v("v-stackline-loading")]),e._v(" for cards, tables, modals, charts, and buttons.")]),t("li",[t("code",[e._v("createLoadingController()")]),e._v(" and "),t("code",[e._v("useLoading()")]),e._v(" for fullscreen and programmatic flows.")]),t("li",[e._v("Core exports like "),t("code",[e._v("loaderVariants")]),e._v(", "),t("code",[e._v("createLoader")]),e._v(", and theme helpers stay available.")])])])},function(){var e=this,t=e._self._c;return e._self._setupProxy,t("section",{staticClass:"demo-card side-card"},[t("div",{staticClass:"demo-head"},[t("div",[t("h3",[e._v("Release lines")]),t("p",[e._v("Each maintained runtime line gets its own docs build and npm release.")])])]),t("div",{staticClass:"release-links"},[t("a",{attrs:{href:"../vue-2/"}},[e._v("Vue 2")]),t("a",{attrs:{href:"../vue-3/"}},[e._v("Vue 3")])])])},function(){var e=this,t=e._self._c;return e._self._setupProxy,t("div",{staticClass:"demo-head"},[t("div",[t("h3",[e._v("Event log")]),t("p",[e._v("Small runtime notes from the docs interactions while you test the wrapper.")])])])}],Gf=Ef(qf,Wf,Kf);const Yf=Gf.exports;R.use(Pf);new R({render:e=>e(Yf,{props:{vueLine:"2.0.0 -> 2.7.16"}})}).$mount("#app");

(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();function st(e){const t=Object.create(null);for(const r of e.split(","))t[r]=1;return r=>r in t}const re={},Vr=[],Le=()=>{},Lr=()=>!1,Tr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Hi=e=>e.startsWith("onUpdate:"),ee=Object.assign,tl=(e,t)=>{const r=e.indexOf(t);r>-1&&e.splice(r,1)},wf=Object.prototype.hasOwnProperty,le=(e,t)=>wf.call(e,t),z=Array.isArray,Fr=e=>en(e)==="[object Map]",xr=e=>en(e)==="[object Set]",Zl=e=>en(e)==="[object Date]",_f=e=>en(e)==="[object RegExp]",G=e=>typeof e=="function",Q=e=>typeof e=="string",Be=e=>typeof e=="symbol",se=e=>e!==null&&typeof e=="object",rl=e=>(se(e)||G(e))&&G(e.then)&&G(e.catch),Sa=Object.prototype.toString,en=e=>Sa.call(e),Tf=e=>en(e).slice(8,-1),ji=e=>en(e)==="[object Object]",Ki=e=>Q(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ut=st(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),xf=st("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),qi=e=>{const t=Object.create(null);return(r=>t[r]||(t[r]=e(r)))},Ef=/-\w/g,ae=qi(e=>e.replace(Ef,t=>t.slice(1).toUpperCase())),kf=/\B([A-Z])/g,Xe=qi(e=>e.replace(kf,"-$1").toLowerCase()),Er=qi(e=>e.charAt(0).toUpperCase()+e.slice(1)),$r=qi(e=>e?`on${Er(e)}`:""),Re=(e,t)=>!Object.is(e,t),Ur=(e,...t)=>{for(let r=0;r<e.length;r++)e[r](...t)},wa=(e,t,r,n=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:n,value:r})},Wi=e=>{const t=parseFloat(e);return isNaN(t)?e:t},mi=e=>{const t=Q(e)?Number(e):NaN;return isNaN(t)?e:t};let eo;const Gi=()=>eo||(eo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Af(e,t){return e+JSON.stringify(t,(r,n)=>typeof n=="function"?n.toString():n)}const Nf="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol",If=st(Nf);function tn(e){if(z(e)){const t={};for(let r=0;r<e.length;r++){const n=e[r],i=Q(n)?_a(n):tn(n);if(i)for(const s in i)t[s]=i[s]}return t}else if(Q(e)||se(e))return e}const Of=/;(?![^(]*\))/g,Rf=/:([^]+)/,Pf=/\/\*[^]*?\*\//g;function _a(e){const t={};return e.replace(Pf,"").split(Of).forEach(r=>{if(r){const n=r.split(Rf);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function Ye(e){let t="";if(Q(e))t=e;else if(z(e))for(let r=0;r<e.length;r++){const n=Ye(e[r]);n&&(t+=n+" ")}else if(se(e))for(const r in e)e[r]&&(t+=r+" ");return t.trim()}function Mf(e){if(!e)return null;let{class:t,style:r}=e;return t&&!Q(t)&&(e.class=Ye(t)),r&&(e.style=tn(r)),e}const Lf="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",Df="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",Vf="annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics",Ff="area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr",$f=st(Lf),Uf=st(Df),zf=st(Vf),Bf=st(Ff),Hf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",jf=st(Hf);function Ta(e){return!!e||e===""}function Kf(e,t){if(e.length!==t.length)return!1;let r=!0;for(let n=0;r&&n<e.length;n++)r=jt(e[n],t[n]);return r}function jt(e,t){if(e===t)return!0;let r=Zl(e),n=Zl(t);if(r||n)return r&&n?e.getTime()===t.getTime():!1;if(r=Be(e),n=Be(t),r||n)return e===t;if(r=z(e),n=z(t),r||n)return r&&n?Kf(e,t):!1;if(r=se(e),n=se(t),r||n){if(!r||!n)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const l in e){const o=e.hasOwnProperty(l),a=t.hasOwnProperty(l);if(o&&!a||!o&&a||!jt(e[l],t[l]))return!1}}return String(e)===String(t)}function Yi(e,t){return e.findIndex(r=>jt(r,t))}const xa=e=>!!(e&&e.__v_isRef===!0),me=e=>Q(e)?e:e==null?"":z(e)||se(e)&&(e.toString===Sa||!G(e.toString))?xa(e)?me(e.value):JSON.stringify(e,Ea,2):String(e),Ea=(e,t)=>xa(t)?Ea(e,t.value):Fr(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((r,[n,i],s)=>(r[gs(n,s)+" =>"]=i,r),{})}:xr(t)?{[`Set(${t.size})`]:[...t.values()].map(r=>gs(r))}:Be(t)?gs(t):se(t)&&!z(t)&&!ji(t)?String(t):t,gs=(e,t="")=>{var r;return Be(e)?`Symbol(${(r=e.description)!=null?r:t})`:e};function qf(e){return e==null?"initial":typeof e=="string"?e===""?" ":e:String(e)}let Ve;class nl{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Ve,!t&&Ve&&(this.index=(Ve.scopes||(Ve.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,r;if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].pause();for(t=0,r=this.effects.length;t<r;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,r;if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].resume();for(t=0,r=this.effects.length;t<r;t++)this.effects[t].resume()}}run(t){if(this._active){const r=Ve;try{return Ve=this,t()}finally{Ve=r}}}on(){++this._on===1&&(this.prevScope=Ve,Ve=this)}off(){this._on>0&&--this._on===0&&(Ve=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let r,n;for(r=0,n=this.effects.length;r<n;r++)this.effects[r].stop();for(this.effects.length=0,r=0,n=this.cleanups.length;r<n;r++)this.cleanups[r]();if(this.cleanups.length=0,this.scopes){for(r=0,n=this.scopes.length;r<n;r++)this.scopes[r].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Wf(e){return new nl(e)}function ka(){return Ve}function Gf(e,t=!1){Ve&&Ve.cleanups.push(e)}let de;const ms=new WeakSet;class xn{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ve&&Ve.active&&Ve.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ms.has(this)&&(ms.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Na(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,to(this),Ia(this);const t=de,r=mt;de=this,mt=!0;try{return this.fn()}finally{Oa(this),de=t,mt=r,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)ll(t);this.deps=this.depsTail=void 0,to(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ms.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Is(this)&&this.run()}get dirty(){return Is(this)}}let Aa=0,bn,yn;function Na(e,t=!1){if(e.flags|=8,t){e.next=yn,yn=e;return}e.next=bn,bn=e}function il(){Aa++}function sl(){if(--Aa>0)return;if(yn){let t=yn;for(yn=void 0;t;){const r=t.next;t.next=void 0,t.flags&=-9,t=r}}let e;for(;bn;){let t=bn;for(bn=void 0;t;){const r=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){e||(e=n)}t=r}}if(e)throw e}function Ia(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Oa(e){let t,r=e.depsTail,n=r;for(;n;){const i=n.prevDep;n.version===-1?(n===r&&(r=i),ll(n),Yf(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=i}e.deps=t,e.depsTail=r}function Is(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Ra(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Ra(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===En)||(e.globalVersion=En,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Is(e))))return;e.flags|=2;const t=e.dep,r=de,n=mt;de=e,mt=!0;try{Ia(e);const i=e.fn(e._value);(t.version===0||Re(i,e._value))&&(e.flags|=128,e._value=i,t.version++)}catch(i){throw t.version++,i}finally{de=r,mt=n,Oa(e),e.flags&=-3}}function ll(e,t=!1){const{dep:r,prevSub:n,nextSub:i}=e;if(n&&(n.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=n,e.nextSub=void 0),r.subs===e&&(r.subs=n,!n&&r.computed)){r.computed.flags&=-5;for(let s=r.computed.deps;s;s=s.nextDep)ll(s,!0)}!t&&!--r.sc&&r.map&&r.map.delete(r.key)}function Yf(e){const{prevDep:t,nextDep:r}=e;t&&(t.nextDep=r,e.prevDep=void 0),r&&(r.prevDep=t,e.nextDep=void 0)}function Jf(e,t){e.effect instanceof xn&&(e=e.effect.fn);const r=new xn(e);t&&ee(r,t);try{r.run()}catch(i){throw r.stop(),i}const n=r.run.bind(r);return n.effect=r,n}function Xf(e){e.effect.stop()}let mt=!0;const Pa=[];function Kt(){Pa.push(mt),mt=!1}function qt(){const e=Pa.pop();mt=e===void 0?!0:e}function to(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const r=de;de=void 0;try{t()}finally{de=r}}}let En=0;class Qf{constructor(t,r){this.sub=t,this.dep=r,this.version=r.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ji{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!de||!mt||de===this.computed)return;let r=this.activeLink;if(r===void 0||r.sub!==de)r=this.activeLink=new Qf(de,this),de.deps?(r.prevDep=de.depsTail,de.depsTail.nextDep=r,de.depsTail=r):de.deps=de.depsTail=r,Ma(r);else if(r.version===-1&&(r.version=this.version,r.nextDep)){const n=r.nextDep;n.prevDep=r.prevDep,r.prevDep&&(r.prevDep.nextDep=n),r.prevDep=de.depsTail,r.nextDep=void 0,de.depsTail.nextDep=r,de.depsTail=r,de.deps===r&&(de.deps=n)}return r}trigger(t){this.version++,En++,this.notify(t)}notify(t){il();try{for(let r=this.subs;r;r=r.prevSub)r.sub.notify()&&r.sub.dep.notify()}finally{sl()}}}function Ma(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)Ma(n)}const r=e.dep.subs;r!==e&&(e.prevSub=r,r&&(r.nextSub=e)),e.dep.subs=e}}const bi=new WeakMap,gr=Symbol(""),Os=Symbol(""),kn=Symbol("");function $e(e,t,r){if(mt&&de){let n=bi.get(e);n||bi.set(e,n=new Map);let i=n.get(r);i||(n.set(r,i=new Ji),i.map=n,i.key=r),i.track()}}function Vt(e,t,r,n,i,s){const l=bi.get(e);if(!l){En++;return}const o=a=>{a&&a.trigger()};if(il(),t==="clear")l.forEach(o);else{const a=z(e),c=a&&Ki(r);if(a&&r==="length"){const u=Number(n);l.forEach((f,p)=>{(p==="length"||p===kn||!Be(p)&&p>=u)&&o(f)})}else switch((r!==void 0||l.has(void 0))&&o(l.get(r)),c&&o(l.get(kn)),t){case"add":a?c&&o(l.get("length")):(o(l.get(gr)),Fr(e)&&o(l.get(Os)));break;case"delete":a||(o(l.get(gr)),Fr(e)&&o(l.get(Os)));break;case"set":Fr(e)&&o(l.get(gr));break}}sl()}function Zf(e,t){const r=bi.get(e);return r&&r.get(t)}function Nr(e){const t=ne(e);return t===e?t:($e(t,"iterate",kn),Ze(e)?t:t.map(yt))}function Xi(e){return $e(e=ne(e),"iterate",kn),e}function kt(e,t){return At(e)?qr(zt(e)?yt(t):t):yt(t)}const ed={__proto__:null,[Symbol.iterator](){return bs(this,Symbol.iterator,e=>kt(this,e))},concat(...e){return Nr(this).concat(...e.map(t=>z(t)?Nr(t):t))},entries(){return bs(this,"entries",e=>(e[1]=kt(this,e[1]),e))},every(e,t){return It(this,"every",e,t,void 0,arguments)},filter(e,t){return It(this,"filter",e,t,r=>r.map(n=>kt(this,n)),arguments)},find(e,t){return It(this,"find",e,t,r=>kt(this,r),arguments)},findIndex(e,t){return It(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return It(this,"findLast",e,t,r=>kt(this,r),arguments)},findLastIndex(e,t){return It(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return It(this,"forEach",e,t,void 0,arguments)},includes(...e){return ys(this,"includes",e)},indexOf(...e){return ys(this,"indexOf",e)},join(e){return Nr(this).join(e)},lastIndexOf(...e){return ys(this,"lastIndexOf",e)},map(e,t){return It(this,"map",e,t,void 0,arguments)},pop(){return an(this,"pop")},push(...e){return an(this,"push",e)},reduce(e,...t){return ro(this,"reduce",e,t)},reduceRight(e,...t){return ro(this,"reduceRight",e,t)},shift(){return an(this,"shift")},some(e,t){return It(this,"some",e,t,void 0,arguments)},splice(...e){return an(this,"splice",e)},toReversed(){return Nr(this).toReversed()},toSorted(e){return Nr(this).toSorted(e)},toSpliced(...e){return Nr(this).toSpliced(...e)},unshift(...e){return an(this,"unshift",e)},values(){return bs(this,"values",e=>kt(this,e))}};function bs(e,t,r){const n=Xi(e),i=n[t]();return n!==e&&!Ze(e)&&(i._next=i.next,i.next=()=>{const s=i._next();return s.done||(s.value=r(s.value)),s}),i}const td=Array.prototype;function It(e,t,r,n,i,s){const l=Xi(e),o=l!==e&&!Ze(e),a=l[t];if(a!==td[t]){const f=a.apply(e,s);return o?yt(f):f}let c=r;l!==e&&(o?c=function(f,p){return r.call(this,kt(e,f),p,e)}:r.length>2&&(c=function(f,p){return r.call(this,f,p,e)}));const u=a.call(l,c,n);return o&&i?i(u):u}function ro(e,t,r,n){const i=Xi(e),s=i!==e&&!Ze(e);let l=r,o=!1;i!==e&&(s?(o=n.length===0,l=function(c,u,f){return o&&(o=!1,c=kt(e,c)),r.call(this,c,kt(e,u),f,e)}):r.length>3&&(l=function(c,u,f){return r.call(this,c,u,f,e)}));const a=i[t](l,...n);return o?kt(e,a):a}function ys(e,t,r){const n=ne(e);$e(n,"iterate",kn);const i=n[t](...r);return(i===-1||i===!1)&&zn(r[0])?(r[0]=ne(r[0]),n[t](...r)):i}function an(e,t,r=[]){Kt(),il();const n=ne(e)[t].apply(e,r);return sl(),qt(),n}const rd=st("__proto__,__v_isRef,__isVue"),La=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Be));function nd(e){Be(e)||(e=String(e));const t=ne(this);return $e(t,"has",e),t.hasOwnProperty(e)}class Da{constructor(t=!1,r=!1){this._isReadonly=t,this._isShallow=r}get(t,r,n){if(r==="__v_skip")return t.__v_skip;const i=this._isReadonly,s=this._isShallow;if(r==="__v_isReactive")return!i;if(r==="__v_isReadonly")return i;if(r==="__v_isShallow")return s;if(r==="__v_raw")return n===(i?s?Ba:za:s?Ua:$a).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const l=z(t);if(!i){let a;if(l&&(a=ed[r]))return a;if(r==="hasOwnProperty")return nd}const o=Reflect.get(t,r,ke(t)?t:n);if((Be(r)?La.has(r):rd(r))||(i||$e(t,"get",r),s))return o;if(ke(o)){const a=l&&Ki(r)?o:o.value;return i&&se(a)?yi(a):a}return se(o)?i?yi(o):Kr(o):o}}class Va extends Da{constructor(t=!1){super(!1,t)}set(t,r,n,i){let s=t[r];const l=z(t)&&Ki(r);if(!this._isShallow){const c=At(s);if(!Ze(n)&&!At(n)&&(s=ne(s),n=ne(n)),!l&&ke(s)&&!ke(n))return c||(s.value=n),!0}const o=l?Number(r)<t.length:le(t,r),a=Reflect.set(t,r,n,ke(t)?t:i);return t===ne(i)&&(o?Re(n,s)&&Vt(t,"set",r,n):Vt(t,"add",r,n)),a}deleteProperty(t,r){const n=le(t,r);t[r];const i=Reflect.deleteProperty(t,r);return i&&n&&Vt(t,"delete",r,void 0),i}has(t,r){const n=Reflect.has(t,r);return(!Be(r)||!La.has(r))&&$e(t,"has",r),n}ownKeys(t){return $e(t,"iterate",z(t)?"length":gr),Reflect.ownKeys(t)}}class Fa extends Da{constructor(t=!1){super(!0,t)}set(t,r){return!0}deleteProperty(t,r){return!0}}const id=new Va,sd=new Fa,ld=new Va(!0),od=new Fa(!0),Rs=e=>e,Qn=e=>Reflect.getPrototypeOf(e);function ad(e,t,r){return function(...n){const i=this.__v_raw,s=ne(i),l=Fr(s),o=e==="entries"||e===Symbol.iterator&&l,a=e==="keys"&&l,c=i[e](...n),u=r?Rs:t?qr:yt;return!t&&$e(s,"iterate",a?Os:gr),ee(Object.create(c),{next(){const{value:f,done:p}=c.next();return p?{value:f,done:p}:{value:o?[u(f[0]),u(f[1])]:u(f),done:p}}})}}function Zn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function cd(e,t){const r={get(i){const s=this.__v_raw,l=ne(s),o=ne(i);e||(Re(i,o)&&$e(l,"get",i),$e(l,"get",o));const{has:a}=Qn(l),c=t?Rs:e?qr:yt;if(a.call(l,i))return c(s.get(i));if(a.call(l,o))return c(s.get(o));s!==l&&s.get(i)},get size(){const i=this.__v_raw;return!e&&$e(ne(i),"iterate",gr),i.size},has(i){const s=this.__v_raw,l=ne(s),o=ne(i);return e||(Re(i,o)&&$e(l,"has",i),$e(l,"has",o)),i===o?s.has(i):s.has(i)||s.has(o)},forEach(i,s){const l=this,o=l.__v_raw,a=ne(o),c=t?Rs:e?qr:yt;return!e&&$e(a,"iterate",gr),o.forEach((u,f)=>i.call(s,c(u),c(f),l))}};return ee(r,e?{add:Zn("add"),set:Zn("set"),delete:Zn("delete"),clear:Zn("clear")}:{add(i){const s=ne(this),l=Qn(s),o=ne(i),a=!t&&!Ze(i)&&!At(i)?o:i;return l.has.call(s,a)||Re(i,a)&&l.has.call(s,i)||Re(o,a)&&l.has.call(s,o)||(s.add(a),Vt(s,"add",a,a)),this},set(i,s){!t&&!Ze(s)&&!At(s)&&(s=ne(s));const l=ne(this),{has:o,get:a}=Qn(l);let c=o.call(l,i);c||(i=ne(i),c=o.call(l,i));const u=a.call(l,i);return l.set(i,s),c?Re(s,u)&&Vt(l,"set",i,s):Vt(l,"add",i,s),this},delete(i){const s=ne(this),{has:l,get:o}=Qn(s);let a=l.call(s,i);a||(i=ne(i),a=l.call(s,i)),o&&o.call(s,i);const c=s.delete(i);return a&&Vt(s,"delete",i,void 0),c},clear(){const i=ne(this),s=i.size!==0,l=i.clear();return s&&Vt(i,"clear",void 0,void 0),l}}),["keys","values","entries",Symbol.iterator].forEach(i=>{r[i]=ad(i,e,t)}),r}function Qi(e,t){const r=cd(e,t);return(n,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?n:Reflect.get(le(r,i)&&i in n?r:n,i,s)}const ud={get:Qi(!1,!1)},fd={get:Qi(!1,!0)},dd={get:Qi(!0,!1)},hd={get:Qi(!0,!0)},$a=new WeakMap,Ua=new WeakMap,za=new WeakMap,Ba=new WeakMap;function pd(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function vd(e){return e.__v_skip||!Object.isExtensible(e)?0:pd(Tf(e))}function Kr(e){return At(e)?e:Zi(e,!1,id,ud,$a)}function Ha(e){return Zi(e,!1,ld,fd,Ua)}function yi(e){return Zi(e,!0,sd,dd,za)}function gd(e){return Zi(e,!0,od,hd,Ba)}function Zi(e,t,r,n,i){if(!se(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=vd(e);if(s===0)return e;const l=i.get(e);if(l)return l;const o=new Proxy(e,s===2?n:r);return i.set(e,o),o}function zt(e){return At(e)?zt(e.__v_raw):!!(e&&e.__v_isReactive)}function At(e){return!!(e&&e.__v_isReadonly)}function Ze(e){return!!(e&&e.__v_isShallow)}function zn(e){return e?!!e.__v_raw:!1}function ne(e){const t=e&&e.__v_raw;return t?ne(t):e}function ja(e){return!le(e,"__v_skip")&&Object.isExtensible(e)&&wa(e,"__v_skip",!0),e}const yt=e=>se(e)?Kr(e):e,qr=e=>se(e)?yi(e):e;function ke(e){return e?e.__v_isRef===!0:!1}function nt(e){return qa(e,!1)}function Ka(e){return qa(e,!0)}function qa(e,t){return ke(e)?e:new md(e,t)}class md{constructor(t,r){this.dep=new Ji,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=r?t:ne(t),this._value=r?t:yt(t),this.__v_isShallow=r}get value(){return this.dep.track(),this._value}set value(t){const r=this._rawValue,n=this.__v_isShallow||Ze(t)||At(t);t=n?t:ne(t),Re(t,r)&&(this._rawValue=t,this._value=n?t:yt(t),this.dep.trigger())}}function bd(e){e.dep&&e.dep.trigger()}function Bn(e){return ke(e)?e.value:e}function yd(e){return G(e)?e():Bn(e)}const Cd={get:(e,t,r)=>t==="__v_raw"?e:Bn(Reflect.get(e,t,r)),set:(e,t,r,n)=>{const i=e[t];return ke(i)&&!ke(r)?(i.value=r,!0):Reflect.set(e,t,r,n)}};function ol(e){return zt(e)?e:new Proxy(e,Cd)}class Sd{constructor(t){this.__v_isRef=!0,this._value=void 0;const r=this.dep=new Ji,{get:n,set:i}=t(r.track.bind(r),r.trigger.bind(r));this._get=n,this._set=i}get value(){return this._value=this._get()}set value(t){this._set(t)}}function Wa(e){return new Sd(e)}function wd(e){const t=z(e)?new Array(e.length):{};for(const r in e)t[r]=Ga(e,r);return t}class _d{constructor(t,r,n){this._object=t,this._defaultValue=n,this.__v_isRef=!0,this._value=void 0,this._key=Be(r)?r:String(r),this._raw=ne(t);let i=!0,s=t;if(!z(t)||Be(this._key)||!Ki(this._key))do i=!zn(s)||Ze(s);while(i&&(s=s.__v_raw));this._shallow=i}get value(){let t=this._object[this._key];return this._shallow&&(t=Bn(t)),this._value=t===void 0?this._defaultValue:t}set value(t){if(this._shallow&&ke(this._raw[this._key])){const r=this._object[this._key];if(ke(r)){r.value=t;return}}this._object[this._key]=t}get dep(){return Zf(this._raw,this._key)}}class Td{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function xd(e,t,r){return ke(e)?e:G(e)?new Td(e):se(e)&&arguments.length>1?Ga(e,t,r):nt(e)}function Ga(e,t,r){return new _d(e,t,r)}class Ed{constructor(t,r,n){this.fn=t,this.setter=r,this._value=void 0,this.dep=new Ji(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=En-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!r,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&de!==this)return Na(this,!0),!0}get value(){const t=this.dep.track();return Ra(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function kd(e,t,r=!1){let n,i;return G(e)?n=e:(n=e.get,i=e.set),new Ed(n,i,r)}const Ad={GET:"get",HAS:"has",ITERATE:"iterate"},Nd={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"},ei={},Ci=new WeakMap;let Zt;function Id(){return Zt}function Ya(e,t=!1,r=Zt){if(r){let n=Ci.get(r);n||Ci.set(r,n=[]),n.push(e)}}function Od(e,t,r=re){const{immediate:n,deep:i,once:s,scheduler:l,augmentJob:o,call:a}=r,c=m=>i?m:Ze(m)||i===!1||i===0?Ft(m,1):Ft(m);let u,f,p,v,y=!1,b=!1;if(ke(e)?(f=()=>e.value,y=Ze(e)):zt(e)?(f=()=>c(e),y=!0):z(e)?(b=!0,y=e.some(m=>zt(m)||Ze(m)),f=()=>e.map(m=>{if(ke(m))return m.value;if(zt(m))return c(m);if(G(m))return a?a(m,2):m()})):G(e)?t?f=a?()=>a(e,2):e:f=()=>{if(p){Kt();try{p()}finally{qt()}}const m=Zt;Zt=u;try{return a?a(e,3,[v]):e(v)}finally{Zt=m}}:f=Le,t&&i){const m=f,S=i===!0?1/0:i;f=()=>Ft(m(),S)}const P=ka(),N=()=>{u.stop(),P&&P.active&&tl(P.effects,u)};if(s&&t){const m=t;t=(...S)=>{m(...S),N()}}let _=b?new Array(e.length).fill(ei):ei;const h=m=>{if(!(!(u.flags&1)||!u.dirty&&!m))if(t){const S=u.run();if(i||y||(b?S.some((A,L)=>Re(A,_[L])):Re(S,_))){p&&p();const A=Zt;Zt=u;try{const L=[S,_===ei?void 0:b&&_[0]===ei?[]:_,v];_=S,a?a(t,3,L):t(...L)}finally{Zt=A}}}else u.run()};return o&&o(h),u=new xn(f),u.scheduler=l?()=>l(h,!1):h,v=m=>Ya(m,!1,u),p=u.onStop=()=>{const m=Ci.get(u);if(m){if(a)a(m,4);else for(const S of m)S();Ci.delete(u)}},t?n?h(!0):_=u.run():l?l(h.bind(null,!0),!0):u.run(),N.pause=u.pause.bind(u),N.resume=u.resume.bind(u),N.stop=N,N}function Ft(e,t=1/0,r){if(t<=0||!se(e)||e.__v_skip||(r=r||new Map,(r.get(e)||0)>=t))return e;if(r.set(e,t),t--,ke(e))Ft(e.value,t,r);else if(z(e))for(let n=0;n<e.length;n++)Ft(e[n],t,r);else if(xr(e)||Fr(e))e.forEach(n=>{Ft(n,t,r)});else if(ji(e)){for(const n in e)Ft(e[n],t,r);for(const n of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,n)&&Ft(e[n],t,r)}return e}const Ja=[];function Rd(e){Ja.push(e)}function Pd(){Ja.pop()}function Md(e,t){}const Ld={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER",COMPONENT_UPDATE:15,15:"COMPONENT_UPDATE",APP_UNMOUNT_CLEANUP:16,16:"APP_UNMOUNT_CLEANUP"},Dd={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush",15:"component update",16:"app unmount cleanup function"};function rn(e,t,r,n){try{return n?e(...n):e()}catch(i){kr(i,t,r)}}function ft(e,t,r,n){if(G(e)){const i=rn(e,t,r,n);return i&&rl(i)&&i.catch(s=>{kr(s,t,r)}),i}if(z(e)){const i=[];for(let s=0;s<e.length;s++)i.push(ft(e[s],t,r,n));return i}}function kr(e,t,r,n=!0){const i=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:l}=t&&t.appContext.config||re;if(t){let o=t.parent;const a=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${r}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](e,a,c)===!1)return}o=o.parent}if(s){Kt(),rn(s,null,10,[e,a,c]),qt();return}}Vd(e,r,i,n,l)}function Vd(e,t,r,n=!0,i=!1){if(i)throw e;console.error(e)}const Ke=[];let Tt=-1;const zr=[];let er=null,Rr=0;const Xa=Promise.resolve();let Si=null;function es(e){const t=Si||Xa;return e?t.then(this?e.bind(this):e):t}function Fd(e){let t=Tt+1,r=Ke.length;for(;t<r;){const n=t+r>>>1,i=Ke[n],s=Nn(i);s<e||s===e&&i.flags&2?t=n+1:r=n}return t}function al(e){if(!(e.flags&1)){const t=Nn(e),r=Ke[Ke.length-1];!r||!(e.flags&2)&&t>=Nn(r)?Ke.push(e):Ke.splice(Fd(t),0,e),e.flags|=1,Qa()}}function Qa(){Si||(Si=Xa.then(Za))}function An(e){z(e)?zr.push(...e):er&&e.id===-1?er.splice(Rr+1,0,e):e.flags&1||(zr.push(e),e.flags|=1),Qa()}function no(e,t,r=Tt+1){for(;r<Ke.length;r++){const n=Ke[r];if(n&&n.flags&2){if(e&&n.id!==e.uid)continue;Ke.splice(r,1),r--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function wi(e){if(zr.length){const t=[...new Set(zr)].sort((r,n)=>Nn(r)-Nn(n));if(zr.length=0,er){er.push(...t);return}for(er=t,Rr=0;Rr<er.length;Rr++){const r=er[Rr];r.flags&4&&(r.flags&=-2),r.flags&8||r(),r.flags&=-2}er=null,Rr=0}}const Nn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Za(e){try{for(Tt=0;Tt<Ke.length;Tt++){const t=Ke[Tt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),rn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Tt<Ke.length;Tt++){const t=Ke[Tt];t&&(t.flags&=-2)}Tt=-1,Ke.length=0,wi(),Si=null,(Ke.length||zr.length)&&Za()}}let Pr,ti=[];function ec(e,t){var r,n;Pr=e,Pr?(Pr.enabled=!0,ti.forEach(({event:i,args:s})=>Pr.emit(i,...s)),ti=[]):typeof window<"u"&&window.HTMLElement&&!((n=(r=window.navigator)==null?void 0:r.userAgent)!=null&&n.includes("jsdom"))?((t.__VUE_DEVTOOLS_HOOK_REPLAY__=t.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(s=>{ec(s,t)}),setTimeout(()=>{Pr||(t.__VUE_DEVTOOLS_HOOK_REPLAY__=null,ti=[])},3e3)):ti=[]}let Me=null,ts=null;function In(e){const t=Me;return Me=e,ts=e&&e.type.__scopeId||null,t}function $d(e){ts=e}function Ud(){ts=null}const zd=e=>cl;function cl(e,t=Me,r){if(!t||e._n)return e;const n=(...i)=>{n._d&&Pn(-1);const s=In(t);let l;try{l=e(...i)}finally{In(s),n._d&&Pn(1)}return l};return n._n=!0,n._c=!0,n._d=!0,n}function Se(e,t){if(Me===null)return e;const r=Wn(Me),n=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[s,l,o,a=re]=t[i];s&&(G(s)&&(s={mounted:s,updated:s}),s.deep&&Ft(l),n.push({dir:s,instance:r,value:l,oldValue:void 0,arg:o,modifiers:a}))}return e}function xt(e,t,r,n){const i=e.dirs,s=t&&t.dirs;for(let l=0;l<i.length;l++){const o=i[l];s&&(o.oldValue=s[l].value);let a=o.dir[n];a&&(Kt(),ft(a,r,8,[e.el,o,e,t]),qt())}}function tc(e,t){if(Pe){let r=Pe.provides;const n=Pe.parent&&Pe.parent.provides;n===r&&(r=Pe.provides=Object.create(n)),r[e]=t}}function Cn(e,t,r=!1){const n=qe();if(n||mr){let i=mr?mr._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return r&&G(t)?t.call(n&&n.proxy):t}}function Bd(){return!!(qe()||mr)}const rc=Symbol.for("v-scx"),nc=()=>Cn(rc);function Hd(e,t){return Hn(e,null,t)}function jd(e,t){return Hn(e,null,{flush:"post"})}function ic(e,t){return Hn(e,null,{flush:"sync"})}function rr(e,t,r){return Hn(e,t,r)}function Hn(e,t,r=re){const{immediate:n,deep:i,flush:s,once:l}=r,o=ee({},r),a=t&&n||!t&&s!=="post";let c;if(wr){if(s==="sync"){const v=nc();c=v.__watcherHandles||(v.__watcherHandles=[])}else if(!a){const v=()=>{};return v.stop=Le,v.resume=Le,v.pause=Le,v}}const u=Pe;o.call=(v,y,b)=>ft(v,u,y,b);let f=!1;s==="post"?o.scheduler=v=>{xe(v,u&&u.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(v,y)=>{y?v():al(v)}),o.augmentJob=v=>{t&&(v.flags|=4),f&&(v.flags|=2,u&&(v.id=u.uid,v.i=u))};const p=Od(e,t,o);return wr&&(c?c.push(p):a&&p()),p}function Kd(e,t,r){const n=this.proxy,i=Q(e)?e.includes(".")?sc(n,e):()=>n[e]:e.bind(n,n);let s;G(t)?s=t:(s=t.handler,r=t);const l=sn(this),o=Hn(i,s.bind(n),r);return l(),o}function sc(e,t){const r=t.split(".");return()=>{let n=e;for(let i=0;i<r.length&&n;i++)n=n[r[i]];return n}}const lr=new WeakMap,lc=Symbol("_vte"),oc=e=>e.__isTeleport,fr=e=>e&&(e.disabled||e.disabled===""),qd=e=>e&&(e.defer||e.defer===""),io=e=>typeof SVGElement<"u"&&e instanceof SVGElement,so=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,Ps=(e,t)=>{const r=e&&e.to;return Q(r)?t?t(r):null:r},Wd={name:"Teleport",__isTeleport:!0,process(e,t,r,n,i,s,l,o,a,c){const{mc:u,pc:f,pbc:p,o:{insert:v,querySelector:y,createText:b,createComment:P}}=c,N=fr(t.props);let{dynamicChildren:_}=t;const h=(A,L,E)=>{A.shapeFlag&16&&u(A.children,L,E,i,s,l,o,a)},m=(A=t)=>{const L=fr(A.props),E=A.target=Ps(A.props,y),w=Ms(E,A,b,v);E&&(l!=="svg"&&io(E)?l="svg":l!=="mathml"&&so(E)&&(l="mathml"),i&&i.isCE&&(i.ce._teleportTargets||(i.ce._teleportTargets=new Set)).add(E),L||(h(A,E,w),pn(A,!1)))},S=A=>{const L=()=>{lr.get(A)===L&&(lr.delete(A),fr(A.props)&&(h(A,r,A.anchor),pn(A,!0)),m(A))};lr.set(A,L),xe(L,s)};if(e==null){const A=t.el=b(""),L=t.anchor=b("");if(v(A,r,n),v(L,r,n),qd(t.props)||s&&s.pendingBranch){S(t);return}N&&(h(t,r,L),pn(t,!0)),m()}else{t.el=e.el;const A=t.anchor=e.anchor,L=lr.get(e);if(L){L.flags|=8,lr.delete(e),S(t);return}t.targetStart=e.targetStart;const E=t.target=e.target,w=t.targetAnchor=e.targetAnchor,x=fr(e.props),D=x?r:E,T=x?A:w;if(l==="svg"||io(E)?l="svg":(l==="mathml"||so(E))&&(l="mathml"),_?(p(e.dynamicChildren,_,D,i,s,l,o),Cl(e,t,!0)):a||f(e,t,D,T,i,s,l,o,!1),N)x?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):ri(t,r,A,c,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const V=t.target=Ps(t.props,y);V&&ri(t,V,null,c,0)}else x&&ri(t,E,w,c,1);pn(t,N)}},remove(e,t,r,{um:n,o:{remove:i}},s){const{shapeFlag:l,children:o,anchor:a,targetStart:c,targetAnchor:u,target:f,props:p}=e;let v=s||!fr(p);const y=lr.get(e);if(y&&(y.flags|=8,lr.delete(e),v=!1),f&&(i(c),i(u)),s&&i(a),l&16)for(let b=0;b<o.length;b++){const P=o[b];n(P,t,r,v,!!P.dynamicChildren)}},move:ri,hydrate:Gd};function ri(e,t,r,{o:{insert:n},m:i},s=2){s===0&&n(e.targetAnchor,t,r);const{el:l,anchor:o,shapeFlag:a,children:c,props:u}=e,f=s===2;if(f&&n(l,t,r),(!f||fr(u))&&a&16)for(let p=0;p<c.length;p++)i(c[p],t,r,2);f&&n(o,t,r)}function Gd(e,t,r,n,i,s,{o:{nextSibling:l,parentNode:o,querySelector:a,insert:c,createText:u}},f){function p(P,N){let _=N;for(;_;){if(_&&_.nodeType===8){if(_.data==="teleport start anchor")t.targetStart=_;else if(_.data==="teleport anchor"){t.targetAnchor=_,P._lpa=t.targetAnchor&&l(t.targetAnchor);break}}_=l(_)}}function v(P,N){N.anchor=f(l(P),N,o(P),r,n,i,s)}const y=t.target=Ps(t.props,a),b=fr(t.props);if(y){const P=y._lpa||y.firstChild;t.shapeFlag&16&&(b?(v(e,t),p(y,P),t.targetAnchor||Ms(y,t,u,c,o(e)===y?e:null)):(t.anchor=l(e),p(y,P),t.targetAnchor||Ms(y,t,u,c),f(P&&l(P),t,y,r,n,i,s))),pn(t,b)}else b&&t.shapeFlag&16&&(v(e,t),t.targetStart=e,t.targetAnchor=l(e));return t.anchor&&l(t.anchor)}const Yd=Wd;function pn(e,t){const r=e.ctx;if(r&&r.ut){let n,i;for(t?(n=e.el,i=e.anchor):(n=e.targetStart,i=e.targetAnchor);n&&n!==i;)n.nodeType===1&&n.setAttribute("data-v-owner",r.uid),n=n.nextSibling;r.ut()}}function Ms(e,t,r,n,i=null){const s=t.targetStart=r(""),l=t.targetAnchor=r("");return s[lc]=l,e&&(n(s,e,i),n(l,e,i)),l}const Et=Symbol("_leaveCb"),cn=Symbol("_enterCb");function ul(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return nn(()=>{e.isMounted=!0}),qn(()=>{e.isUnmounting=!0}),e}const ot=[Function,Array],fl={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ot,onEnter:ot,onAfterEnter:ot,onEnterCancelled:ot,onBeforeLeave:ot,onLeave:ot,onAfterLeave:ot,onLeaveCancelled:ot,onBeforeAppear:ot,onAppear:ot,onAfterAppear:ot,onAppearCancelled:ot},ac=e=>{const t=e.subTree;return t.component?ac(t.component):t},Jd={name:"BaseTransition",props:fl,setup(e,{slots:t}){const r=qe(),n=ul();return()=>{const i=t.default&&rs(t.default(),!0);if(!i||!i.length)return;const s=cc(i),l=ne(e),{mode:o}=l;if(n.isLeaving)return Cs(s);const a=lo(s);if(!a)return Cs(s);let c=Wr(a,l,n,r,f=>c=f);a.type!==_e&&Wt(a,c);let u=r.subTree&&lo(r.subTree);if(u&&u.type!==_e&&!gt(u,a)&&ac(r).type!==_e){let f=Wr(u,l,n,r);if(Wt(u,f),o==="out-in"&&a.type!==_e)return n.isLeaving=!0,f.afterLeave=()=>{n.isLeaving=!1,r.job.flags&8||r.update(),delete f.afterLeave,u=void 0},Cs(s);o==="in-out"&&a.type!==_e?f.delayLeave=(p,v,y)=>{const b=fc(n,u);b[String(u.key)]=u,p[Et]=()=>{v(),p[Et]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{y(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function cc(e){let t=e[0];if(e.length>1){for(const r of e)if(r.type!==_e){t=r;break}}return t}const uc=Jd;function fc(e,t){const{leavingVNodes:r}=e;let n=r.get(t.type);return n||(n=Object.create(null),r.set(t.type,n)),n}function Wr(e,t,r,n,i){const{appear:s,mode:l,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:p,onLeave:v,onAfterLeave:y,onLeaveCancelled:b,onBeforeAppear:P,onAppear:N,onAfterAppear:_,onAppearCancelled:h}=t,m=String(e.key),S=fc(r,e),A=(w,x)=>{w&&ft(w,n,9,x)},L=(w,x)=>{const D=x[1];A(w,x),z(w)?w.every(T=>T.length<=1)&&D():w.length<=1&&D()},E={mode:l,persisted:o,beforeEnter(w){let x=a;if(!r.isMounted)if(s)x=P||a;else return;w[Et]&&w[Et](!0);const D=S[m];D&&gt(e,D)&&D.el[Et]&&D.el[Et](),A(x,[w])},enter(w){if(S[m]===e)return;let x=c,D=u,T=f;if(!r.isMounted)if(s)x=N||c,D=_||u,T=h||f;else return;let V=!1;w[cn]=J=>{V||(V=!0,J?A(T,[w]):A(D,[w]),E.delayedLeave&&E.delayedLeave(),w[cn]=void 0)};const q=w[cn].bind(null,!1);x?L(x,[w,q]):q()},leave(w,x){const D=String(e.key);if(w[cn]&&w[cn](!0),r.isUnmounting)return x();A(p,[w]);let T=!1;w[Et]=q=>{T||(T=!0,x(),q?A(b,[w]):A(y,[w]),w[Et]=void 0,S[D]===e&&delete S[D])};const V=w[Et].bind(null,!1);S[D]=e,v?L(v,[w,V]):V()},clone(w){const x=Wr(w,t,r,n,i);return i&&i(x),x}};return E}function Cs(e){if(Kn(e))return e=Nt(e),e.children=null,e}function lo(e){if(!Kn(e))return oc(e.type)&&e.children?cc(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:r}=e;if(r){if(t&16)return r[0];if(t&32&&G(r.default))return r.default()}}function Wt(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Wt(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function rs(e,t=!1,r){let n=[],i=0;for(let s=0;s<e.length;s++){let l=e[s];const o=r==null?l.key:String(r)+String(l.key!=null?l.key:s);l.type===ye?(l.patchFlag&128&&i++,n=n.concat(rs(l.children,t,o))):(t||l.type!==_e)&&n.push(o!=null?Nt(l,{key:o}):l)}if(i>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}function jn(e,t){return G(e)?ee({name:e.name},t,{setup:e}):e}function Xd(){const e=qe();return e?(e.appContext.config.idPrefix||"v")+"-"+e.ids[0]+e.ids[1]++:""}function dl(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Qd(e){const t=qe(),r=Ka(null);if(t){const i=t.refs===re?t.refs={}:t.refs;Object.defineProperty(i,e,{enumerable:!0,get:()=>r.value,set:s=>r.value=s})}return r}function oo(e,t){let r;return!!((r=Object.getOwnPropertyDescriptor(e,t))&&!r.configurable)}const _i=new WeakMap;function Br(e,t,r,n,i=!1){if(z(e)){e.forEach((b,P)=>Br(b,t&&(z(t)?t[P]:t),r,n,i));return}if(Bt(n)&&!i){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&Br(e,t,r,n.component.subTree);return}const s=n.shapeFlag&4?Wn(n.component):n.el,l=i?null:s,{i:o,r:a}=e,c=t&&t.r,u=o.refs===re?o.refs={}:o.refs,f=o.setupState,p=ne(f),v=f===re?Lr:b=>oo(u,b)?!1:le(p,b),y=(b,P)=>!(P&&oo(u,P));if(c!=null&&c!==a){if(ao(t),Q(c))u[c]=null,v(c)&&(f[c]=null);else if(ke(c)){const b=t;y(c,b.k)&&(c.value=null),b.k&&(u[b.k]=null)}}if(G(a))rn(a,o,12,[l,u]);else{const b=Q(a),P=ke(a);if(b||P){const N=()=>{if(e.f){const _=b?v(a)?f[a]:u[a]:y()||!e.k?a.value:u[e.k];if(i)z(_)&&tl(_,s);else if(z(_))_.includes(s)||_.push(s);else if(b)u[a]=[s],v(a)&&(f[a]=u[a]);else{const h=[s];y(a,e.k)&&(a.value=h),e.k&&(u[e.k]=h)}}else b?(u[a]=l,v(a)&&(f[a]=l)):P&&(y(a,e.k)&&(a.value=l),e.k&&(u[e.k]=l))};if(l){const _=()=>{N(),_i.delete(e)};_.id=-1,_i.set(e,_),xe(_,r)}else ao(e),N()}}}function ao(e){const t=_i.get(e);t&&(t.flags|=8,_i.delete(e))}let co=!1;const Ir=()=>{co||(console.error("Hydration completed but contains mismatches."),co=!0)},Zd=e=>e.namespaceURI.includes("svg")&&e.tagName!=="foreignObject",eh=e=>e.namespaceURI.includes("MathML"),ni=e=>{if(e.nodeType===1){if(Zd(e))return"svg";if(eh(e))return"mathml"}},Dr=e=>e.nodeType===8;function th(e){const{mt:t,p:r,o:{patchProp:n,createText:i,nextSibling:s,parentNode:l,remove:o,insert:a,createComment:c}}=e,u=(h,m)=>{if(!m.hasChildNodes()){r(null,h,m),wi(),m._vnode=h;return}f(m.firstChild,h,null,null,null),wi(),m._vnode=h},f=(h,m,S,A,L,E=!1)=>{E=E||!!m.dynamicChildren;const w=Dr(h)&&h.data==="[",x=()=>b(h,m,S,A,L,w),{type:D,ref:T,shapeFlag:V,patchFlag:q}=m;let J=h.nodeType;m.el=h,q===-2&&(E=!1,m.dynamicChildren=null);let H=null;switch(D){case nr:J!==3?m.children===""?(a(m.el=i(""),l(h),h),H=h):H=x():(h.data!==m.children&&(Ir(),h.data=m.children),H=s(h));break;case _e:_(h)?(H=s(h),N(m.el=h.content.firstChild,h,S)):J!==8||w?H=x():H=s(h);break;case br:if(w&&(h=s(h),J=h.nodeType),J===1||J===3){H=h;const Y=!m.children.length;for(let j=0;j<m.staticCount;j++)Y&&(m.children+=H.nodeType===1?H.outerHTML:H.data),j===m.staticCount-1&&(m.anchor=H),H=s(H);return w?s(H):H}else x();break;case ye:w?H=y(h,m,S,A,L,E):H=x();break;default:if(V&1)(J!==1||m.type.toLowerCase()!==h.tagName.toLowerCase())&&!_(h)?H=x():H=p(h,m,S,A,L,E);else if(V&6){m.slotScopeIds=L;const Y=l(h);if(w?H=P(h):Dr(h)&&h.data==="teleport start"?H=P(h,h.data,"teleport end"):H=s(h),t(m,Y,null,S,A,ni(Y),E),Bt(m)&&!m.type.__asyncResolved){let j;w?(j=he(ye),j.anchor=H?H.previousSibling:Y.lastChild):j=h.nodeType===3?Lt(""):he("div"),j.el=h,m.component.subTree=j}}else V&64?J!==8?H=x():H=m.type.hydrate(h,m,S,A,L,E,e,v):V&128&&(H=m.type.hydrate(h,m,S,A,ni(l(h)),L,E,e,f))}return T!=null&&Br(T,null,A,m),H},p=(h,m,S,A,L,E)=>{E=E||!!m.dynamicChildren;const{type:w,props:x,patchFlag:D,shapeFlag:T,dirs:V,transition:q}=m,J=w==="input"||w==="option";if(J||D!==-1){V&&xt(m,null,S,"created");let H=!1;if(_(h)){H=Uc(null,q)&&S&&S.vnode.props&&S.vnode.props.appear;const j=h.content.firstChild;if(H){const ce=j.getAttribute("class");ce&&(j.$cls=ce),q.beforeEnter(j)}N(j,h,S),m.el=h=j}if(T&16&&!(x&&(x.innerHTML||x.textContent))){let j=v(h.firstChild,m,h,S,A,L,E);for(;j;){ii(h,1)||Ir();const ce=j;j=j.nextSibling,o(ce)}}else if(T&8){let j=m.children;j[0]===`
`&&(h.tagName==="PRE"||h.tagName==="TEXTAREA")&&(j=j.slice(1));const{textContent:ce}=h;ce!==j&&ce!==j.replace(/\r\n|\r/g,`
`)&&(ii(h,0)||Ir(),h.textContent=m.children)}if(x){if(J||!E||D&48){const j=h.tagName.includes("-");for(const ce in x)(J&&(ce.endsWith("value")||ce==="indeterminate")||Tr(ce)&&!Ut(ce)||ce[0]==="."||j&&!Ut(ce))&&n(h,ce,null,x[ce],void 0,S)}else if(x.onClick)n(h,"onClick",null,x.onClick,void 0,S);else if(D&4&&zt(x.style))for(const j in x.style)x.style[j]}let Y;(Y=x&&x.onVnodeBeforeMount)&&Ge(Y,S,m),V&&xt(m,null,S,"beforeMount"),((Y=x&&x.onVnodeMounted)||V||H)&&jc(()=>{Y&&Ge(Y,S,m),H&&q.enter(h),V&&xt(m,null,S,"mounted")},A)}return h.nextSibling},v=(h,m,S,A,L,E,w)=>{w=w||!!m.dynamicChildren;const x=m.children,D=x.length;for(let T=0;T<D;T++){const V=w?x[T]:x[T]=Je(x[T]),q=V.type===nr;h?(q&&!w&&T+1<D&&Je(x[T+1]).type===nr&&(a(i(h.data.slice(V.children.length)),S,s(h)),h.data=V.children),h=f(h,V,A,L,E,w)):q&&!V.children?a(V.el=i(""),S):(ii(S,1)||Ir(),r(null,V,S,null,A,L,ni(S),E))}return h},y=(h,m,S,A,L,E)=>{const{slotScopeIds:w}=m;w&&(L=L?L.concat(w):w);const x=l(h),D=v(s(h),m,x,S,A,L,E);return D&&Dr(D)&&D.data==="]"?s(m.anchor=D):(Ir(),a(m.anchor=c("]"),x,D),D)},b=(h,m,S,A,L,E)=>{if(ii(h.parentElement,1)||Ir(),m.el=null,E){const D=P(h);for(;;){const T=s(h);if(T&&T!==D)o(T);else break}}const w=s(h),x=l(h);return o(h),r(null,m,x,w,S,A,ni(x),L),S&&(S.vnode.el=m.el,os(S,m.el)),w},P=(h,m="[",S="]")=>{let A=0;for(;h;)if(h=s(h),h&&Dr(h)&&(h.data===m&&A++,h.data===S)){if(A===0)return s(h);A--}return h},N=(h,m,S)=>{const A=m.parentNode;A&&A.replaceChild(h,m);let L=S;for(;L;)L.vnode.el===m&&(L.vnode.el=L.subTree.el=h),L=L.parent},_=h=>h.nodeType===1&&h.tagName==="TEMPLATE";return[u,f]}const uo="data-allow-mismatch",rh={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function ii(e,t){if(t===0||t===1)for(;e&&!e.hasAttribute(uo);)e=e.parentElement;const r=e&&e.getAttribute(uo);if(r==null)return!1;if(r==="")return!0;{const n=r.split(",");return t===0&&n.includes("children")?!0:n.includes(rh[t])}}const nh=Gi().requestIdleCallback||(e=>setTimeout(e,1)),ih=Gi().cancelIdleCallback||(e=>clearTimeout(e)),sh=(e=1e4)=>t=>{const r=nh(t,{timeout:e});return()=>ih(r)};function lh(e){const{top:t,left:r,bottom:n,right:i}=e.getBoundingClientRect(),{innerHeight:s,innerWidth:l}=window;return(t>0&&t<s||n>0&&n<s)&&(r>0&&r<l||i>0&&i<l)}const oh=e=>(t,r)=>{const n=new IntersectionObserver(i=>{for(const s of i)if(s.isIntersecting){n.disconnect(),t();break}},e);return r(i=>{if(i instanceof Element){if(lh(i))return t(),n.disconnect(),!1;n.observe(i)}}),()=>n.disconnect()},ah=e=>t=>{if(e){const r=matchMedia(e);if(r.matches)t();else return r.addEventListener("change",t,{once:!0}),()=>r.removeEventListener("change",t)}},ch=(e=[])=>(t,r)=>{Q(e)&&(e=[e]);let n=!1;const i=l=>{n||(n=!0,s(),t(),l.target.dispatchEvent(new l.constructor(l.type,l)))},s=()=>{r(l=>{for(const o of e)l.removeEventListener(o,i)})};return r(l=>{for(const o of e)l.addEventListener(o,i,{once:!0})}),s};function uh(e,t){if(Dr(e)&&e.data==="["){let r=1,n=e.nextSibling;for(;n;){if(n.nodeType===1){if(t(n)===!1)break}else if(Dr(n))if(n.data==="]"){if(--r===0)break}else n.data==="["&&r++;n=n.nextSibling}}else t(e)}const Bt=e=>!!e.type.__asyncLoader;function fh(e){G(e)&&(e={loader:e});const{loader:t,loadingComponent:r,errorComponent:n,delay:i=200,hydrate:s,timeout:l,suspensible:o=!0,onError:a}=e;let c=null,u,f=0;const p=()=>(f++,c=null,v()),v=()=>{let y;return c||(y=c=t().catch(b=>{if(b=b instanceof Error?b:new Error(String(b)),a)return new Promise((P,N)=>{a(b,()=>P(p()),()=>N(b),f+1)});throw b}).then(b=>y!==c&&c?c:(b&&(b.__esModule||b[Symbol.toStringTag]==="Module")&&(b=b.default),u=b,b)))};return jn({name:"AsyncComponentWrapper",__asyncLoader:v,__asyncHydrate(y,b,P){let N=!1;(b.bu||(b.bu=[])).push(()=>N=!0);const _=()=>{N||P()},h=s?()=>{const m=s(_,S=>uh(y,S));m&&(b.bum||(b.bum=[])).push(m)}:_;u?h():v().then(()=>!b.isUnmounted&&h())},get __asyncResolved(){return u},setup(){const y=Pe;if(dl(y),u)return()=>si(u,y);const b=h=>{c=null,kr(h,y,13,!n)};if(o&&y.suspense||wr)return v().then(h=>()=>si(h,y)).catch(h=>(b(h),()=>n?he(n,{error:h}):null));const P=nt(!1),N=nt(),_=nt(!!i);return i&&setTimeout(()=>{_.value=!1},i),l!=null&&setTimeout(()=>{if(!P.value&&!N.value){const h=new Error(`Async component timed out after ${l}ms.`);b(h),N.value=h}},l),v().then(()=>{P.value=!0,y.parent&&Kn(y.parent.vnode)&&y.parent.update()}).catch(h=>{b(h),N.value=h}),()=>{if(P.value&&u)return si(u,y);if(N.value&&n)return he(n,{error:N.value});if(r&&!_.value)return si(r,y)}}})}function si(e,t){const{ref:r,props:n,children:i,ce:s}=t.vnode,l=he(e,n,i);return l.ref=r,l.ce=s,delete t.vnode.ce,l}const Kn=e=>e.type.__isKeepAlive,dh={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const r=qe(),n=r.ctx;if(!n.renderer)return()=>{const _=t.default&&t.default();return _&&_.length===1?_[0]:_};const i=new Map,s=new Set;let l=null;const o=r.suspense,{renderer:{p:a,m:c,um:u,o:{createElement:f}}}=n,p=f("div");n.activate=(_,h,m,S,A)=>{const L=_.component;c(_,h,m,0,o),a(L.vnode,_,h,m,L,o,S,_.slotScopeIds,A),xe(()=>{L.isDeactivated=!1,L.a&&Ur(L.a);const E=_.props&&_.props.onVnodeMounted;E&&Ge(E,L.parent,_)},o)},n.deactivate=_=>{const h=_.component;xi(h.m),xi(h.a),c(_,p,null,1,o),xe(()=>{h.da&&Ur(h.da);const m=_.props&&_.props.onVnodeUnmounted;m&&Ge(m,h.parent,_),h.isDeactivated=!0},o)};function v(_){Ss(_),u(_,r,o,!0)}function y(_){i.forEach((h,m)=>{const S=Hs(Bt(h)?h.type.__asyncResolved||{}:h.type);S&&!_(S)&&b(m)})}function b(_){const h=i.get(_);h&&(!l||!gt(h,l))?v(h):l&&Ss(l),i.delete(_),s.delete(_)}rr(()=>[e.include,e.exclude],([_,h])=>{_&&y(m=>vn(_,m)),h&&y(m=>!vn(h,m))},{flush:"post",deep:!0});let P=null;const N=()=>{P!=null&&(Ei(r.subTree.type)?xe(()=>{i.set(P,li(r.subTree))},r.subTree.suspense):i.set(P,li(r.subTree)))};return nn(N),is(N),qn(()=>{i.forEach(_=>{const{subTree:h,suspense:m}=r,S=li(h);if(_.type===S.type&&_.key===S.key){Ss(S);const A=S.component.da;A&&xe(A,m);return}v(_)})}),()=>{if(P=null,!t.default)return l=null;const _=t.default(),h=_[0];if(_.length>1)return l=null,_;if(!Gt(h)||!(h.shapeFlag&4)&&!(h.shapeFlag&128))return l=null,h;let m=li(h);if(m.type===_e)return l=null,m;const S=m.type,A=Hs(Bt(m)?m.type.__asyncResolved||{}:S),{include:L,exclude:E,max:w}=e;if(L&&(!A||!vn(L,A))||E&&A&&vn(E,A))return m.shapeFlag&=-257,l=m,h;const x=m.key==null?S:m.key,D=i.get(x);return m.el&&(m=Nt(m),h.shapeFlag&128&&(h.ssContent=m)),P=x,D?(m.el=D.el,m.component=D.component,m.transition&&Wt(m,m.transition),m.shapeFlag|=512,s.delete(x),s.add(x)):(s.add(x),w&&s.size>parseInt(w,10)&&b(s.values().next().value)),m.shapeFlag|=256,l=m,Ei(h.type)?h:m}}},hh=dh;function vn(e,t){return z(e)?e.some(r=>vn(r,t)):Q(e)?e.split(",").includes(t):_f(e)?(e.lastIndex=0,e.test(t)):!1}function dc(e,t){pc(e,"a",t)}function hc(e,t){pc(e,"da",t)}function pc(e,t,r=Pe){const n=e.__wdc||(e.__wdc=()=>{let i=r;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(ns(t,n,r),r){let i=r.parent;for(;i&&i.parent;)Kn(i.parent.vnode)&&ph(n,t,r,i),i=i.parent}}function ph(e,t,r,n){const i=ns(t,e,n,!0);ss(()=>{tl(n[t],i)},r)}function Ss(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function li(e){return e.shapeFlag&128?e.ssContent:e}function ns(e,t,r=Pe,n=!1){if(r){const i=r[e]||(r[e]=[]),s=t.__weh||(t.__weh=(...l)=>{Kt();const o=sn(r),a=ft(t,r,e,l);return o(),qt(),a});return n?i.unshift(s):i.push(s),s}}const Yt=e=>(t,r=Pe)=>{(!wr||e==="sp")&&ns(e,(...n)=>t(...n),r)},vc=Yt("bm"),nn=Yt("m"),hl=Yt("bu"),is=Yt("u"),qn=Yt("bum"),ss=Yt("um"),gc=Yt("sp"),mc=Yt("rtg"),bc=Yt("rtc");function yc(e,t=Pe){ns("ec",e,t)}const pl="components",vh="directives";function Cc(e,t){return vl(pl,e,!0,t)||e}const Sc=Symbol.for("v-ndc");function gh(e){return Q(e)?vl(pl,e,!1)||e:e||Sc}function wc(e){return vl(vh,e)}function vl(e,t,r=!0,n=!1){const i=Me||Pe;if(i){const s=i.type;if(e===pl){const o=Hs(s,!1);if(o&&(o===t||o===ae(t)||o===Er(ae(t))))return s}const l=fo(i[e]||s[e],t)||fo(i.appContext[e],t);return!l&&n?s:l}}function fo(e,t){return e&&(e[t]||e[ae(t)]||e[Er(ae(t))])}function gn(e,t,r,n){let i;const s=r&&r[n],l=z(e);if(l||Q(e)){const o=l&&zt(e);let a=!1,c=!1;o&&(a=!Ze(e),c=At(e),e=Xi(e)),i=new Array(e.length);for(let u=0,f=e.length;u<f;u++)i[u]=t(a?c?qr(yt(e[u])):yt(e[u]):e[u],u,void 0,s&&s[u])}else if(typeof e=="number"){i=new Array(e);for(let o=0;o<e;o++)i[o]=t(o+1,o,void 0,s&&s[o])}else if(se(e))if(e[Symbol.iterator])i=Array.from(e,(o,a)=>t(o,a,void 0,s&&s[a]));else{const o=Object.keys(e);i=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];i[a]=t(e[u],u,a,s&&s[a])}}else i=[];return r&&(r[n]=i),i}function mh(e,t){for(let r=0;r<t.length;r++){const n=t[r];if(z(n))for(let i=0;i<n.length;i++)e[n[i].name]=n[i].fn;else n&&(e[n.name]=n.key?(...i)=>{const s=n.fn(...i);return s&&(s.key=n.key),s}:n.fn)}return e}function bh(e,t,r={},n,i){if(Me.ce||Me.parent&&Bt(Me.parent)&&Me.parent.ce){const c=Object.keys(r).length>0;return t!=="default"&&(r.name=t),be(),ki(ye,null,[he("slot",r,n&&n())],c?-2:64)}let s=e[t];s&&s._c&&(s._d=!1),be();const l=s&&gl(s(r)),o=r.key||l&&l.key,a=ki(ye,{key:(o&&!Be(o)?o:`_${t}`)+(!l&&n?"_fb":"")},l||(n?n():[]),l&&e._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function gl(e){return e.some(t=>Gt(t)?!(t.type===_e||t.type===ye&&!gl(t.children)):!0)?e:null}function yh(e,t){const r={};for(const n in e)r[t&&/[A-Z]/.test(n)?`on:${n}`:$r(n)]=e[n];return r}const Ls=e=>e?Xc(e)?Wn(e):Ls(e.parent):null,Sn=ee(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ls(e.parent),$root:e=>Ls(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>ml(e),$forceUpdate:e=>e.f||(e.f=()=>{al(e.update)}),$nextTick:e=>e.n||(e.n=es.bind(e.proxy)),$watch:e=>Kd.bind(e)}),ws=(e,t)=>e!==re&&!e.__isScriptSetup&&le(e,t),Ds={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:r,setupState:n,data:i,props:s,accessCache:l,type:o,appContext:a}=e;if(t[0]!=="$"){const p=l[t];if(p!==void 0)switch(p){case 1:return n[t];case 2:return i[t];case 4:return r[t];case 3:return s[t]}else{if(ws(n,t))return l[t]=1,n[t];if(i!==re&&le(i,t))return l[t]=2,i[t];if(le(s,t))return l[t]=3,s[t];if(r!==re&&le(r,t))return l[t]=4,r[t];Vs&&(l[t]=0)}}const c=Sn[t];let u,f;if(c)return t==="$attrs"&&$e(e.attrs,"get",""),c(e);if((u=o.__cssModules)&&(u=u[t]))return u;if(r!==re&&le(r,t))return l[t]=4,r[t];if(f=a.config.globalProperties,le(f,t))return f[t]},set({_:e},t,r){const{data:n,setupState:i,ctx:s}=e;return ws(i,t)?(i[t]=r,!0):n!==re&&le(n,t)?(n[t]=r,!0):le(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=r,!0)},has({_:{data:e,setupState:t,accessCache:r,ctx:n,appContext:i,props:s,type:l}},o){let a;return!!(r[o]||e!==re&&o[0]!=="$"&&le(e,o)||ws(t,o)||le(s,o)||le(n,o)||le(Sn,o)||le(i.config.globalProperties,o)||(a=l.__cssModules)&&a[o])},defineProperty(e,t,r){return r.get!=null?e._.accessCache[t]=0:le(r,"value")&&this.set(e,t,r.value,null),Reflect.defineProperty(e,t,r)}},Ch=ee({},Ds,{get(e,t){if(t!==Symbol.unscopables)return Ds.get(e,t,e)},has(e,t){return t[0]!=="_"&&!If(t)}});function Sh(){return null}function wh(){return null}function _h(e){}function Th(e){}function xh(){return null}function Eh(){}function kh(e,t){return null}function Ah(){return _c().slots}function Nh(){return _c().attrs}function _c(e){const t=qe();return t.setupContext||(t.setupContext=tu(t))}function On(e){return z(e)?e.reduce((t,r)=>(t[r]=null,t),{}):e}function Ih(e,t){const r=On(e);for(const n in t){if(n.startsWith("__skip"))continue;let i=r[n];i?z(i)||G(i)?i=r[n]={type:i,default:t[n]}:i.default=t[n]:i===null&&(i=r[n]={default:t[n]}),i&&t[`__skip_${n}`]&&(i.skipFactory=!0)}return r}function Oh(e,t){return!e||!t?e||t:z(e)&&z(t)?e.concat(t):ee({},On(e),On(t))}function Rh(e,t){const r={};for(const n in e)t.includes(n)||Object.defineProperty(r,n,{enumerable:!0,get:()=>e[n]});return r}function Ph(e){const t=qe(),r=wr;let n=e();Mn(),r&&jr(!1);const i=()=>{sn(t),r&&jr(!0)},s=()=>{qe()!==t&&t.scope.off(),Mn(),r&&jr(!1)};return rl(n)&&(n=n.catch(l=>{throw i(),Promise.resolve().then(()=>Promise.resolve().then(s)),l})),[n,()=>{i(),Promise.resolve().then(s)}]}let Vs=!0;function Mh(e){const t=ml(e),r=e.proxy,n=e.ctx;Vs=!1,t.beforeCreate&&ho(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:l,watch:o,provide:a,inject:c,created:u,beforeMount:f,mounted:p,beforeUpdate:v,updated:y,activated:b,deactivated:P,beforeDestroy:N,beforeUnmount:_,destroyed:h,unmounted:m,render:S,renderTracked:A,renderTriggered:L,errorCaptured:E,serverPrefetch:w,expose:x,inheritAttrs:D,components:T,directives:V,filters:q}=t;if(c&&Lh(c,n,null),l)for(const Y in l){const j=l[Y];G(j)&&(n[Y]=j.bind(r))}if(i){const Y=i.call(r,r);se(Y)&&(e.data=Kr(Y))}if(Vs=!0,s)for(const Y in s){const j=s[Y],ce=G(j)?j.bind(r,r):G(j.get)?j.get.bind(r,r):Le,Ct=!G(j)&&G(j.set)?j.set.bind(r):Le,dt=dr({get:ce,set:Ct});Object.defineProperty(n,Y,{enumerable:!0,configurable:!0,get:()=>dt.value,set:St=>dt.value=St})}if(o)for(const Y in o)Tc(o[Y],n,r,Y);if(a){const Y=G(a)?a.call(r):a;Reflect.ownKeys(Y).forEach(j=>{tc(j,Y[j])})}u&&ho(u,e,"c");function H(Y,j){z(j)?j.forEach(ce=>Y(ce.bind(r))):j&&Y(j.bind(r))}if(H(vc,f),H(nn,p),H(hl,v),H(is,y),H(dc,b),H(hc,P),H(yc,E),H(bc,A),H(mc,L),H(qn,_),H(ss,m),H(gc,w),z(x))if(x.length){const Y=e.exposed||(e.exposed={});x.forEach(j=>{Object.defineProperty(Y,j,{get:()=>r[j],set:ce=>r[j]=ce,enumerable:!0})})}else e.exposed||(e.exposed={});S&&e.render===Le&&(e.render=S),D!=null&&(e.inheritAttrs=D),T&&(e.components=T),V&&(e.directives=V),w&&dl(e)}function Lh(e,t,r=Le){z(e)&&(e=Fs(e));for(const n in e){const i=e[n];let s;se(i)?"default"in i?s=Cn(i.from||n,i.default,!0):s=Cn(i.from||n):s=Cn(i),ke(s)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>s.value,set:l=>s.value=l}):t[n]=s}}function ho(e,t,r){ft(z(e)?e.map(n=>n.bind(t.proxy)):e.bind(t.proxy),t,r)}function Tc(e,t,r,n){let i=n.includes(".")?sc(r,n):()=>r[n];if(Q(e)){const s=t[e];G(s)&&rr(i,s)}else if(G(e))rr(i,e.bind(r));else if(se(e))if(z(e))e.forEach(s=>Tc(s,t,r,n));else{const s=G(e.handler)?e.handler.bind(r):t[e.handler];G(s)&&rr(i,s,e)}}function ml(e){const t=e.type,{mixins:r,extends:n}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:l}}=e.appContext,o=s.get(t);let a;return o?a=o:!i.length&&!r&&!n?a=t:(a={},i.length&&i.forEach(c=>Ti(a,c,l,!0)),Ti(a,t,l)),se(t)&&s.set(t,a),a}function Ti(e,t,r,n=!1){const{mixins:i,extends:s}=t;s&&Ti(e,s,r,!0),i&&i.forEach(l=>Ti(e,l,r,!0));for(const l in t)if(!(n&&l==="expose")){const o=Dh[l]||r&&r[l];e[l]=o?o(e[l],t[l]):t[l]}return e}const Dh={data:po,props:vo,emits:vo,methods:mn,computed:mn,beforeCreate:je,created:je,beforeMount:je,mounted:je,beforeUpdate:je,updated:je,beforeDestroy:je,beforeUnmount:je,destroyed:je,unmounted:je,activated:je,deactivated:je,errorCaptured:je,serverPrefetch:je,components:mn,directives:mn,watch:Fh,provide:po,inject:Vh};function po(e,t){return t?e?function(){return ee(G(e)?e.call(this,this):e,G(t)?t.call(this,this):t)}:t:e}function Vh(e,t){return mn(Fs(e),Fs(t))}function Fs(e){if(z(e)){const t={};for(let r=0;r<e.length;r++)t[e[r]]=e[r];return t}return e}function je(e,t){return e?[...new Set([].concat(e,t))]:t}function mn(e,t){return e?ee(Object.create(null),e,t):t}function vo(e,t){return e?z(e)&&z(t)?[...new Set([...e,...t])]:ee(Object.create(null),On(e),On(t??{})):t}function Fh(e,t){if(!e)return t;if(!t)return e;const r=ee(Object.create(null),e);for(const n in t)r[n]=je(e[n],t[n]);return r}function xc(){return{app:null,config:{isNativeTag:Lr,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $h=0;function Uh(e,t){return function(n,i=null){G(n)||(n=ee({},n)),i!=null&&!se(i)&&(i=null);const s=xc(),l=new WeakSet,o=[];let a=!1;const c=s.app={_uid:$h++,_component:n,_props:i,_container:null,_context:s,_instance:null,version:nu,get config(){return s.config},set config(u){},use(u,...f){return l.has(u)||(u&&G(u.install)?(l.add(u),u.install(c,...f)):G(u)&&(l.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,p){if(!a){const v=c._ceVNode||he(n,i);return v.appContext=s,p===!0?p="svg":p===!1&&(p=void 0),f&&t?t(v,u):e(v,u,p),a=!0,c._container=u,u.__vue_app__=c,Wn(v.component)}},onUnmount(u){o.push(u)},unmount(){a&&(ft(o,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=mr;mr=c;try{return u()}finally{mr=f}}};return c}}let mr=null;function zh(e,t,r=re){const n=qe(),i=ae(t),s=Xe(t),l=Ec(e,i),o=Wa((a,c)=>{let u,f=re,p;return ic(()=>{const v=e[i];Re(u,v)&&(u=v,c())}),{get(){return a(),r.get?r.get(u):u},set(v){const y=r.set?r.set(v):v;if(!Re(y,u)&&!(f!==re&&Re(v,f)))return;const b=n.vnode.props;b&&(t in b||i in b||s in b)&&(`onUpdate:${t}`in b||`onUpdate:${i}`in b||`onUpdate:${s}`in b)||(u=v,c()),n.emit(`update:${t}`,y),Re(v,y)&&Re(v,f)&&!Re(y,p)&&c(),f=v,p=y}}});return o[Symbol.iterator]=()=>{let a=0;return{next(){return a<2?{value:a++?l||re:o,done:!1}:{done:!0}}}},o}const Ec=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${ae(t)}Modifiers`]||e[`${Xe(t)}Modifiers`];function Bh(e,t,...r){if(e.isUnmounted)return;const n=e.vnode.props||re;let i=r;const s=t.startsWith("update:"),l=s&&Ec(n,t.slice(7));l&&(l.trim&&(i=r.map(u=>Q(u)?u.trim():u)),l.number&&(i=r.map(Wi)));let o,a=n[o=$r(t)]||n[o=$r(ae(t))];!a&&s&&(a=n[o=$r(Xe(t))]),a&&ft(a,e,6,i);const c=n[o+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,ft(c,e,6,i)}}const Hh=new WeakMap;function kc(e,t,r=!1){const n=r?Hh:t.emitsCache,i=n.get(e);if(i!==void 0)return i;const s=e.emits;let l={},o=!1;if(!G(e)){const a=c=>{const u=kc(c,t,!0);u&&(o=!0,ee(l,u))};!r&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!s&&!o?(se(e)&&n.set(e,null),null):(z(s)?s.forEach(a=>l[a]=null):ee(l,s),se(e)&&n.set(e,l),l)}function ls(e,t){return!e||!Tr(t)?!1:(t=t.slice(2).replace(/Once$/,""),le(e,t[0].toLowerCase()+t.slice(1))||le(e,Xe(t))||le(e,t))}function ui(e){const{type:t,vnode:r,proxy:n,withProxy:i,propsOptions:[s],slots:l,attrs:o,emit:a,render:c,renderCache:u,props:f,data:p,setupState:v,ctx:y,inheritAttrs:b}=e,P=In(e);let N,_;try{if(r.shapeFlag&4){const m=i||n,S=m;N=Je(c.call(S,m,u,f,v,p,y)),_=o}else{const m=t;N=Je(m.length>1?m(f,{attrs:o,slots:l,emit:a}):m(f,null)),_=t.props?o:Kh(o)}}catch(m){wn.length=0,kr(m,e,1),N=he(_e)}let h=N;if(_&&b!==!1){const m=Object.keys(_),{shapeFlag:S}=h;m.length&&S&7&&(s&&m.some(Hi)&&(_=qh(_,s)),h=Nt(h,_,!1,!0))}return r.dirs&&(h=Nt(h,null,!1,!0),h.dirs=h.dirs?h.dirs.concat(r.dirs):r.dirs),r.transition&&Wt(h,r.transition),N=h,In(P),N}function jh(e,t=!0){let r;for(let n=0;n<e.length;n++){const i=e[n];if(Gt(i)){if(i.type!==_e||i.children==="v-if"){if(r)return;r=i}}else return}return r}const Kh=e=>{let t;for(const r in e)(r==="class"||r==="style"||Tr(r))&&((t||(t={}))[r]=e[r]);return t},qh=(e,t)=>{const r={};for(const n in e)(!Hi(n)||!(n.slice(9)in t))&&(r[n]=e[n]);return r};function Wh(e,t,r){const{props:n,children:i,component:s}=e,{props:l,children:o,patchFlag:a}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(r&&a>=0){if(a&1024)return!0;if(a&16)return n?go(n,l,c):!!l;if(a&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(Ac(l,n,p)&&!ls(c,p))return!0}}}else return(i||o)&&(!o||!o.$stable)?!0:n===l?!1:n?l?go(n,l,c):!0:!!l;return!1}function go(e,t,r){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let i=0;i<n.length;i++){const s=n[i];if(Ac(t,e,s)&&!ls(r,s))return!0}return!1}function Ac(e,t,r){const n=e[r],i=t[r];return r==="style"&&se(n)&&se(i)?!jt(n,i):n!==i}function os({vnode:e,parent:t,suspense:r},n){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.suspense.vnode.el=i.el=n,e=i),i===e)(e=t.vnode).el=n,t=t.parent;else break}r&&r.activeBranch===e&&(r.vnode.el=n)}const Nc={},Ic=()=>Object.create(Nc),Oc=e=>Object.getPrototypeOf(e)===Nc;function Gh(e,t,r,n=!1){const i={},s=Ic();e.propsDefaults=Object.create(null),Rc(e,t,i,s);for(const l in e.propsOptions[0])l in i||(i[l]=void 0);r?e.props=n?i:Ha(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function Yh(e,t,r,n){const{props:i,attrs:s,vnode:{patchFlag:l}}=e,o=ne(i),[a]=e.propsOptions;let c=!1;if((n||l>0)&&!(l&16)){if(l&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(ls(e.emitsOptions,p))continue;const v=t[p];if(a)if(le(s,p))v!==s[p]&&(s[p]=v,c=!0);else{const y=ae(p);i[y]=$s(a,o,y,v,e,!1)}else v!==s[p]&&(s[p]=v,c=!0)}}}else{Rc(e,t,i,s)&&(c=!0);let u;for(const f in o)(!t||!le(t,f)&&((u=Xe(f))===f||!le(t,u)))&&(a?r&&(r[f]!==void 0||r[u]!==void 0)&&(i[f]=$s(a,o,f,void 0,e,!0)):delete i[f]);if(s!==o)for(const f in s)(!t||!le(t,f))&&(delete s[f],c=!0)}c&&Vt(e.attrs,"set","")}function Rc(e,t,r,n){const[i,s]=e.propsOptions;let l=!1,o;if(t)for(let a in t){if(Ut(a))continue;const c=t[a];let u;i&&le(i,u=ae(a))?!s||!s.includes(u)?r[u]=c:(o||(o={}))[u]=c:ls(e.emitsOptions,a)||(!(a in n)||c!==n[a])&&(n[a]=c,l=!0)}if(s){const a=ne(r),c=o||re;for(let u=0;u<s.length;u++){const f=s[u];r[f]=$s(i,a,f,c[f],e,!le(c,f))}}return l}function $s(e,t,r,n,i,s){const l=e[r];if(l!=null){const o=le(l,"default");if(o&&n===void 0){const a=l.default;if(l.type!==Function&&!l.skipFactory&&G(a)){const{propsDefaults:c}=i;if(r in c)n=c[r];else{const u=sn(i);n=c[r]=a.call(null,t),u()}}else n=a;i.ce&&i.ce._setProp(r,n)}l[0]&&(s&&!o?n=!1:l[1]&&(n===""||n===Xe(r))&&(n=!0))}return n}const Jh=new WeakMap;function Pc(e,t,r=!1){const n=r?Jh:t.propsCache,i=n.get(e);if(i)return i;const s=e.props,l={},o=[];let a=!1;if(!G(e)){const u=f=>{a=!0;const[p,v]=Pc(f,t,!0);ee(l,p),v&&o.push(...v)};!r&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!s&&!a)return se(e)&&n.set(e,Vr),Vr;if(z(s))for(let u=0;u<s.length;u++){const f=ae(s[u]);mo(f)&&(l[f]=re)}else if(s)for(const u in s){const f=ae(u);if(mo(f)){const p=s[u],v=l[f]=z(p)||G(p)?{type:p}:ee({},p),y=v.type;let b=!1,P=!0;if(z(y))for(let N=0;N<y.length;++N){const _=y[N],h=G(_)&&_.name;if(h==="Boolean"){b=!0;break}else h==="String"&&(P=!1)}else b=G(y)&&y.name==="Boolean";v[0]=b,v[1]=P,(b||le(v,"default"))&&o.push(f)}}const c=[l,o];return se(e)&&n.set(e,c),c}function mo(e){return e[0]!=="$"&&!Ut(e)}const bl=e=>e==="_"||e==="_ctx"||e==="$stable",yl=e=>z(e)?e.map(Je):[Je(e)],Xh=(e,t,r)=>{if(t._n)return t;const n=cl((...i)=>yl(t(...i)),r);return n._c=!1,n},Mc=(e,t,r)=>{const n=e._ctx;for(const i in e){if(bl(i))continue;const s=e[i];if(G(s))t[i]=Xh(i,s,n);else if(s!=null){const l=yl(s);t[i]=()=>l}}},Lc=(e,t)=>{const r=yl(t);e.slots.default=()=>r},Dc=(e,t,r)=>{for(const n in t)(r||!bl(n))&&(e[n]=t[n])},Qh=(e,t,r)=>{const n=e.slots=Ic();if(e.vnode.shapeFlag&32){const i=t._;i?(Dc(n,t,r),r&&wa(n,"_",i,!0)):Mc(t,n)}else t&&Lc(e,t)},Zh=(e,t,r)=>{const{vnode:n,slots:i}=e;let s=!0,l=re;if(n.shapeFlag&32){const o=t._;o?r&&o===1?s=!1:Dc(i,t,r):(s=!t.$stable,Mc(t,i)),l=t}else t&&(Lc(e,t),l={default:1});if(s)for(const o in i)!bl(o)&&l[o]==null&&delete i[o]},xe=jc;function Vc(e){return $c(e)}function Fc(e){return $c(e,th)}function $c(e,t){const r=Gi();r.__VUE__=!0;const{insert:n,remove:i,patchProp:s,createElement:l,createText:o,createComment:a,setText:c,setElementText:u,parentNode:f,nextSibling:p,setScopeId:v=Le,insertStaticContent:y}=e,b=(d,g,k,M=null,I=null,O=null,U=void 0,$=null,F=!!g.dynamicChildren)=>{if(d===g)return;d&&!gt(d,g)&&(M=Xn(d),St(d,I,O,!0),d=null),g.patchFlag===-2&&(F=!1,g.dynamicChildren=null);const{type:R,ref:W,shapeFlag:B}=g;switch(R){case nr:P(d,g,k,M);break;case _e:N(d,g,k,M);break;case br:d==null&&_(g,k,M,U);break;case ye:T(d,g,k,M,I,O,U,$,F);break;default:B&1?S(d,g,k,M,I,O,U,$,F):B&6?V(d,g,k,M,I,O,U,$,F):(B&64||B&128)&&R.process(d,g,k,M,I,O,U,$,F,Ar)}W!=null&&I?Br(W,d&&d.ref,O,g||d,!g):W==null&&d&&d.ref!=null&&Br(d.ref,null,O,d,!0)},P=(d,g,k,M)=>{if(d==null)n(g.el=o(g.children),k,M);else{const I=g.el=d.el;g.children!==d.children&&c(I,g.children)}},N=(d,g,k,M)=>{d==null?n(g.el=a(g.children||""),k,M):g.el=d.el},_=(d,g,k,M)=>{[d.el,d.anchor]=y(d.children,g,k,M,d.el,d.anchor)},h=({el:d,anchor:g},k,M)=>{let I;for(;d&&d!==g;)I=p(d),n(d,k,M),d=I;n(g,k,M)},m=({el:d,anchor:g})=>{let k;for(;d&&d!==g;)k=p(d),i(d),d=k;i(g)},S=(d,g,k,M,I,O,U,$,F)=>{if(g.type==="svg"?U="svg":g.type==="math"&&(U="mathml"),d==null)A(g,k,M,I,O,U,$,F);else{const R=d.el&&d.el._isVueCE?d.el:null;try{R&&R._beginPatch(),w(d,g,I,O,U,$,F)}finally{R&&R._endPatch()}}},A=(d,g,k,M,I,O,U,$)=>{let F,R;const{props:W,shapeFlag:B,transition:K,dirs:X}=d;if(F=d.el=l(d.type,O,W&&W.is,W),B&8?u(F,d.children):B&16&&E(d.children,F,null,M,I,_s(d,O),U,$),X&&xt(d,null,M,"created"),L(F,d,d.scopeId,U,M),W){for(const ue in W)ue!=="value"&&!Ut(ue)&&s(F,ue,null,W[ue],O,M);"value"in W&&s(F,"value",null,W.value,O),(R=W.onVnodeBeforeMount)&&Ge(R,M,d)}X&&xt(d,null,M,"beforeMount");const ie=Uc(I,K);ie&&K.beforeEnter(F),n(F,g,k),((R=W&&W.onVnodeMounted)||ie||X)&&xe(()=>{R&&Ge(R,M,d),ie&&K.enter(F),X&&xt(d,null,M,"mounted")},I)},L=(d,g,k,M,I)=>{if(k&&v(d,k),M)for(let O=0;O<M.length;O++)v(d,M[O]);if(I){let O=I.subTree;if(g===O||Ei(O.type)&&(O.ssContent===g||O.ssFallback===g)){const U=I.vnode;L(d,U,U.scopeId,U.slotScopeIds,I.parent)}}},E=(d,g,k,M,I,O,U,$,F=0)=>{for(let R=F;R<d.length;R++){const W=d[R]=$?Dt(d[R]):Je(d[R]);b(null,W,g,k,M,I,O,U,$)}},w=(d,g,k,M,I,O,U)=>{const $=g.el=d.el;let{patchFlag:F,dynamicChildren:R,dirs:W}=g;F|=d.patchFlag&16;const B=d.props||re,K=g.props||re;let X;if(k&&or(k,!1),(X=K.onVnodeBeforeUpdate)&&Ge(X,k,g,d),W&&xt(g,d,k,"beforeUpdate"),k&&or(k,!0),(B.innerHTML&&K.innerHTML==null||B.textContent&&K.textContent==null)&&u($,""),R?x(d.dynamicChildren,R,$,k,M,_s(g,I),O):U||j(d,g,$,null,k,M,_s(g,I),O,!1),F>0){if(F&16)D($,B,K,k,I);else if(F&2&&B.class!==K.class&&s($,"class",null,K.class,I),F&4&&s($,"style",B.style,K.style,I),F&8){const ie=g.dynamicProps;for(let ue=0;ue<ie.length;ue++){const fe=ie[ue],Te=B[fe],Ae=K[fe];(Ae!==Te||fe==="value")&&s($,fe,Te,Ae,I,k)}}F&1&&d.children!==g.children&&u($,g.children)}else!U&&R==null&&D($,B,K,k,I);((X=K.onVnodeUpdated)||W)&&xe(()=>{X&&Ge(X,k,g,d),W&&xt(g,d,k,"updated")},M)},x=(d,g,k,M,I,O,U)=>{for(let $=0;$<g.length;$++){const F=d[$],R=g[$],W=F.el&&(F.type===ye||!gt(F,R)||F.shapeFlag&198)?f(F.el):k;b(F,R,W,null,M,I,O,U,!0)}},D=(d,g,k,M,I)=>{if(g!==k){if(g!==re)for(const O in g)!Ut(O)&&!(O in k)&&s(d,O,g[O],null,I,M);for(const O in k){if(Ut(O))continue;const U=k[O],$=g[O];U!==$&&O!=="value"&&s(d,O,$,U,I,M)}"value"in k&&s(d,"value",g.value,k.value,I)}},T=(d,g,k,M,I,O,U,$,F)=>{const R=g.el=d?d.el:o(""),W=g.anchor=d?d.anchor:o("");let{patchFlag:B,dynamicChildren:K,slotScopeIds:X}=g;X&&($=$?$.concat(X):X),d==null?(n(R,k,M),n(W,k,M),E(g.children||[],k,W,I,O,U,$,F)):B>0&&B&64&&K&&d.dynamicChildren&&d.dynamicChildren.length===K.length?(x(d.dynamicChildren,K,k,I,O,U,$),(g.key!=null||I&&g===I.subTree)&&Cl(d,g,!0)):j(d,g,k,W,I,O,U,$,F)},V=(d,g,k,M,I,O,U,$,F)=>{g.slotScopeIds=$,d==null?g.shapeFlag&512?I.ctx.activate(g,k,M,U,F):q(g,k,M,I,O,U,F):J(d,g,F)},q=(d,g,k,M,I,O,U)=>{const $=d.component=Jc(d,M,I);if(Kn(d)&&($.ctx.renderer=Ar),Qc($,!1,U),$.asyncDep){if(I&&I.registerDep($,H,U),!d.el){const F=$.subTree=he(_e);N(null,F,g,k),d.placeholder=F.el}}else H($,d,g,k,I,O,U)},J=(d,g,k)=>{const M=g.component=d.component;if(Wh(d,g,k))if(M.asyncDep&&!M.asyncResolved){Y(M,g,k);return}else M.next=g,M.update();else g.el=d.el,M.vnode=g},H=(d,g,k,M,I,O,U)=>{const $=()=>{if(d.isMounted){let{next:B,bu:K,u:X,parent:ie,vnode:ue}=d;{const et=zc(d);if(et){B&&(B.el=ue.el,Y(d,B,U)),et.asyncDep.then(()=>{xe(()=>{d.isUnmounted||R()},I)});return}}let fe=B,Te;or(d,!1),B?(B.el=ue.el,Y(d,B,U)):B=ue,K&&Ur(K),(Te=B.props&&B.props.onVnodeBeforeUpdate)&&Ge(Te,ie,B,ue),or(d,!0);const Ae=ui(d),ht=d.subTree;d.subTree=Ae,b(ht,Ae,f(ht.el),Xn(ht),d,I,O),B.el=Ae.el,fe===null&&os(d,Ae.el),X&&xe(X,I),(Te=B.props&&B.props.onVnodeUpdated)&&xe(()=>Ge(Te,ie,B,ue),I)}else{let B;const{el:K,props:X}=g,{bm:ie,m:ue,parent:fe,root:Te,type:Ae}=d,ht=Bt(g);if(or(d,!1),ie&&Ur(ie),!ht&&(B=X&&X.onVnodeBeforeMount)&&Ge(B,fe,g),or(d,!0),K&&vs){const et=()=>{d.subTree=ui(d),vs(K,d.subTree,d,I,null)};ht&&Ae.__asyncHydrate?Ae.__asyncHydrate(K,d,et):et()}else{Te.ce&&Te.ce._hasShadowRoot()&&Te.ce._injectChildStyle(Ae,d.parent?d.parent.type:void 0);const et=d.subTree=ui(d);b(null,et,k,M,d,I,O),g.el=et.el}if(ue&&xe(ue,I),!ht&&(B=X&&X.onVnodeMounted)){const et=g;xe(()=>Ge(B,fe,et),I)}(g.shapeFlag&256||fe&&Bt(fe.vnode)&&fe.vnode.shapeFlag&256)&&d.a&&xe(d.a,I),d.isMounted=!0,g=k=M=null}};d.scope.on();const F=d.effect=new xn($);d.scope.off();const R=d.update=F.run.bind(F),W=d.job=F.runIfDirty.bind(F);W.i=d,W.id=d.uid,F.scheduler=()=>al(W),or(d,!0),R()},Y=(d,g,k)=>{g.component=d;const M=d.vnode.props;d.vnode=g,d.next=null,Yh(d,g.props,M,k),Zh(d,g.children,k),Kt(),no(d),qt()},j=(d,g,k,M,I,O,U,$,F=!1)=>{const R=d&&d.children,W=d?d.shapeFlag:0,B=g.children,{patchFlag:K,shapeFlag:X}=g;if(K>0){if(K&128){Ct(R,B,k,M,I,O,U,$,F);return}else if(K&256){ce(R,B,k,M,I,O,U,$,F);return}}X&8?(W&16&&ln(R,I,O),B!==R&&u(k,B)):W&16?X&16?Ct(R,B,k,M,I,O,U,$,F):ln(R,I,O,!0):(W&8&&u(k,""),X&16&&E(B,k,M,I,O,U,$,F))},ce=(d,g,k,M,I,O,U,$,F)=>{d=d||Vr,g=g||Vr;const R=d.length,W=g.length,B=Math.min(R,W);let K;for(K=0;K<B;K++){const X=g[K]=F?Dt(g[K]):Je(g[K]);b(d[K],X,k,null,I,O,U,$,F)}R>W?ln(d,I,O,!0,!1,B):E(g,k,M,I,O,U,$,F,B)},Ct=(d,g,k,M,I,O,U,$,F)=>{let R=0;const W=g.length;let B=d.length-1,K=W-1;for(;R<=B&&R<=K;){const X=d[R],ie=g[R]=F?Dt(g[R]):Je(g[R]);if(gt(X,ie))b(X,ie,k,null,I,O,U,$,F);else break;R++}for(;R<=B&&R<=K;){const X=d[B],ie=g[K]=F?Dt(g[K]):Je(g[K]);if(gt(X,ie))b(X,ie,k,null,I,O,U,$,F);else break;B--,K--}if(R>B){if(R<=K){const X=K+1,ie=X<W?g[X].el:M;for(;R<=K;)b(null,g[R]=F?Dt(g[R]):Je(g[R]),k,ie,I,O,U,$,F),R++}}else if(R>K)for(;R<=B;)St(d[R],I,O,!0),R++;else{const X=R,ie=R,ue=new Map;for(R=ie;R<=K;R++){const tt=g[R]=F?Dt(g[R]):Je(g[R]);tt.key!=null&&ue.set(tt.key,R)}let fe,Te=0;const Ae=K-ie+1;let ht=!1,et=0;const on=new Array(Ae);for(R=0;R<Ae;R++)on[R]=0;for(R=X;R<=B;R++){const tt=d[R];if(Te>=Ae){St(tt,I,O,!0);continue}let wt;if(tt.key!=null)wt=ue.get(tt.key);else for(fe=ie;fe<=K;fe++)if(on[fe-ie]===0&&gt(tt,g[fe])){wt=fe;break}wt===void 0?St(tt,I,O,!0):(on[wt-ie]=R+1,wt>=et?et=wt:ht=!0,b(tt,g[wt],k,null,I,O,U,$,F),Te++)}const Jl=ht?ep(on):Vr;for(fe=Jl.length-1,R=Ae-1;R>=0;R--){const tt=ie+R,wt=g[tt],Xl=g[tt+1],Ql=tt+1<W?Xl.el||Bc(Xl):M;on[R]===0?b(null,wt,k,Ql,I,O,U,$,F):ht&&(fe<0||R!==Jl[fe]?dt(wt,k,Ql,2):fe--)}}},dt=(d,g,k,M,I=null)=>{const{el:O,type:U,transition:$,children:F,shapeFlag:R}=d;if(R&6){dt(d.component.subTree,g,k,M);return}if(R&128){d.suspense.move(g,k,M);return}if(R&64){U.move(d,g,k,Ar);return}if(U===ye){n(O,g,k);for(let B=0;B<F.length;B++)dt(F[B],g,k,M);n(d.anchor,g,k);return}if(U===br){h(d,g,k);return}if(M!==2&&R&1&&$)if(M===0)$.beforeEnter(O),n(O,g,k),xe(()=>$.enter(O),I);else{const{leave:B,delayLeave:K,afterLeave:X}=$,ie=()=>{d.ctx.isUnmounted?i(O):n(O,g,k)},ue=()=>{O._isLeaving&&O[Et](!0),B(O,()=>{ie(),X&&X()})};K?K(O,ie,ue):ue()}else n(O,g,k)},St=(d,g,k,M=!1,I=!1)=>{const{type:O,props:U,ref:$,children:F,dynamicChildren:R,shapeFlag:W,patchFlag:B,dirs:K,cacheIndex:X,memo:ie}=d;if(B===-2&&(I=!1),$!=null&&(Kt(),Br($,null,k,d,!0),qt()),X!=null&&(g.renderCache[X]=void 0),W&256){g.ctx.deactivate(d);return}const ue=W&1&&K,fe=!Bt(d);let Te;if(fe&&(Te=U&&U.onVnodeBeforeUnmount)&&Ge(Te,g,d),W&6)Sf(d.component,k,M);else{if(W&128){d.suspense.unmount(k,M);return}ue&&xt(d,null,g,"beforeUnmount"),W&64?d.type.remove(d,g,k,Ar,M):R&&!R.hasOnce&&(O!==ye||B>0&&B&64)?ln(R,g,k,!1,!0):(O===ye&&B&384||!I&&W&16)&&ln(F,g,k),M&&Gl(d)}const Ae=ie!=null&&X==null;(fe&&(Te=U&&U.onVnodeUnmounted)||ue||Ae)&&xe(()=>{Te&&Ge(Te,g,d),ue&&xt(d,null,g,"unmounted"),Ae&&(d.el=null)},k)},Gl=d=>{const{type:g,el:k,anchor:M,transition:I}=d;if(g===ye){Cf(k,M);return}if(g===br){m(d);return}const O=()=>{i(k),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(d.shapeFlag&1&&I&&!I.persisted){const{leave:U,delayLeave:$}=I,F=()=>U(k,O);$?$(d.el,O,F):F()}else O()},Cf=(d,g)=>{let k;for(;d!==g;)k=p(d),i(d),d=k;i(g)},Sf=(d,g,k)=>{const{bum:M,scope:I,job:O,subTree:U,um:$,m:F,a:R}=d;xi(F),xi(R),M&&Ur(M),I.stop(),O&&(O.flags|=8,St(U,d,g,k)),$&&xe($,g),xe(()=>{d.isUnmounted=!0},g)},ln=(d,g,k,M=!1,I=!1,O=0)=>{for(let U=O;U<d.length;U++)St(d[U],g,k,M,I)},Xn=d=>{if(d.shapeFlag&6)return Xn(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const g=p(d.anchor||d.el),k=g&&g[lc];return k?p(k):g};let hs=!1;const Yl=(d,g,k)=>{let M;d==null?g._vnode&&(St(g._vnode,null,null,!0),M=g._vnode.component):b(g._vnode||null,d,g,null,null,null,k),g._vnode=d,hs||(hs=!0,no(M),wi(),hs=!1)},Ar={p:b,um:St,m:dt,r:Gl,mt:q,mc:E,pc:j,pbc:x,n:Xn,o:e};let ps,vs;return t&&([ps,vs]=t(Ar)),{render:Yl,hydrate:ps,createApp:Uh(Yl,ps)}}function _s({type:e,props:t},r){return r==="svg"&&e==="foreignObject"||r==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:r}function or({effect:e,job:t},r){r?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Uc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Cl(e,t,r=!1){const n=e.children,i=t.children;if(z(n)&&z(i))for(let s=0;s<n.length;s++){const l=n[s];let o=i[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[s]=Dt(i[s]),o.el=l.el),!r&&o.patchFlag!==-2&&Cl(l,o)),o.type===nr&&(o.patchFlag===-1&&(o=i[s]=Dt(o)),o.el=l.el),o.type===_e&&!o.el&&(o.el=l.el)}}function ep(e){const t=e.slice(),r=[0];let n,i,s,l,o;const a=e.length;for(n=0;n<a;n++){const c=e[n];if(c!==0){if(i=r[r.length-1],e[i]<c){t[n]=i,r.push(n);continue}for(s=0,l=r.length-1;s<l;)o=s+l>>1,e[r[o]]<c?s=o+1:l=o;c<e[r[s]]&&(s>0&&(t[n]=r[s-1]),r[s]=n)}}for(s=r.length,l=r[s-1];s-- >0;)r[s]=l,l=t[l];return r}function zc(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:zc(t)}function xi(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Bc(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Bc(t.subTree):null}const Ei=e=>e.__isSuspense;let Us=0;const tp={name:"Suspense",__isSuspense:!0,process(e,t,r,n,i,s,l,o,a,c){if(e==null)np(t,r,n,i,s,l,o,a,c);else{if(s&&s.deps>0&&!e.suspense.isInFallback){t.suspense=e.suspense,t.suspense.vnode=t,t.el=e.el;return}ip(e,t,r,n,i,l,o,a,c)}},hydrate:sp,normalize:lp},rp=tp;function Rn(e,t){const r=e.props&&e.props[t];G(r)&&r()}function np(e,t,r,n,i,s,l,o,a){const{p:c,o:{createElement:u}}=a,f=u("div"),p=e.suspense=Hc(e,i,n,t,f,r,s,l,o,a);c(null,p.pendingBranch=e.ssContent,f,null,n,p,s,l),p.deps>0?(Rn(e,"onPending"),Rn(e,"onFallback"),c(null,e.ssFallback,t,r,n,null,s,l),Hr(p,e.ssFallback)):p.resolve(!1,!0)}function ip(e,t,r,n,i,s,l,o,{p:a,um:c,o:{createElement:u}}){const f=t.suspense=e.suspense;f.vnode=t,t.el=e.el;const p=t.ssContent,v=t.ssFallback,{activeBranch:y,pendingBranch:b,isInFallback:P,isHydrating:N}=f;if(b)f.pendingBranch=p,gt(b,p)?(a(b,p,f.hiddenContainer,null,i,f,s,l,o),f.deps<=0?f.resolve():P&&(N||(a(y,v,r,n,i,null,s,l,o),Hr(f,v)))):(f.pendingId=Us++,N?(f.isHydrating=!1,f.activeBranch=b):c(b,i,f),f.deps=0,f.effects.length=0,f.hiddenContainer=u("div"),P?(a(null,p,f.hiddenContainer,null,i,f,s,l,o),f.deps<=0?f.resolve():(a(y,v,r,n,i,null,s,l,o),Hr(f,v))):y&&gt(y,p)?(a(y,p,r,n,i,f,s,l,o),f.resolve(!0)):(a(null,p,f.hiddenContainer,null,i,f,s,l,o),f.deps<=0&&f.resolve()));else if(y&&gt(y,p))a(y,p,r,n,i,f,s,l,o),Hr(f,p);else if(Rn(t,"onPending"),f.pendingBranch=p,p.shapeFlag&512?f.pendingId=p.component.suspenseId:f.pendingId=Us++,a(null,p,f.hiddenContainer,null,i,f,s,l,o),f.deps<=0)f.resolve();else{const{timeout:_,pendingId:h}=f;_>0?setTimeout(()=>{f.pendingId===h&&f.fallback(v)},_):_===0&&f.fallback(v)}}function Hc(e,t,r,n,i,s,l,o,a,c,u=!1){const{p:f,m:p,um:v,n:y,o:{parentNode:b,remove:P}}=c;let N;const _=op(e);_&&t&&t.pendingBranch&&(N=t.pendingId,t.deps++);const h=e.props?mi(e.props.timeout):void 0,m=s,S={vnode:e,parent:t,parentComponent:r,namespace:l,container:n,hiddenContainer:i,deps:0,pendingId:Us++,timeout:typeof h=="number"?h:-1,activeBranch:null,isFallbackMountPending:!1,pendingBranch:null,isInFallback:!u,isHydrating:u,isUnmounted:!1,effects:[],resolve(A=!1,L=!1){const{vnode:E,activeBranch:w,pendingBranch:x,pendingId:D,effects:T,parentComponent:V,container:q,isInFallback:J}=S;let H=!1;S.isHydrating?S.isHydrating=!1:A||(H=w&&x.transition&&x.transition.mode==="out-in",H&&(w.transition.afterLeave=()=>{D===S.pendingId&&(p(x,q,s===m?y(w):s,0),An(T),J&&E.ssFallback&&(E.ssFallback.el=null))}),w&&!S.isFallbackMountPending&&(b(w.el)===q&&(s=y(w)),v(w,V,S,!0),!H&&J&&E.ssFallback&&xe(()=>E.ssFallback.el=null,S)),H||p(x,q,s,0)),S.isFallbackMountPending=!1,Hr(S,x),S.pendingBranch=null,S.isInFallback=!1;let Y=S.parent,j=!1;for(;Y;){if(Y.pendingBranch){Y.effects.push(...T),j=!0;break}Y=Y.parent}!j&&!H&&An(T),S.effects=[],_&&t&&t.pendingBranch&&N===t.pendingId&&(t.deps--,t.deps===0&&!L&&t.resolve()),Rn(E,"onResolve")},fallback(A){if(!S.pendingBranch)return;const{vnode:L,activeBranch:E,parentComponent:w,container:x,namespace:D}=S;Rn(L,"onFallback");const T=y(E),V=()=>{S.isFallbackMountPending=!1,S.isInFallback&&(f(null,A,x,T,w,null,D,o,a),Hr(S,A))},q=A.transition&&A.transition.mode==="out-in";q&&(S.isFallbackMountPending=!0,E.transition.afterLeave=V),S.isInFallback=!0,v(E,w,null,!0),q||V()},move(A,L,E){S.activeBranch&&p(S.activeBranch,A,L,E),S.container=A},next(){return S.activeBranch&&y(S.activeBranch)},registerDep(A,L,E){const w=!!S.pendingBranch;w&&S.deps++;const x=A.vnode.el;A.asyncDep.catch(D=>{kr(D,A,0)}).then(D=>{if(A.isUnmounted||S.isUnmounted||S.pendingId!==A.suspenseId)return;Mn(),A.asyncResolved=!0;const{vnode:T}=A;zs(A,D,!1),x&&(T.el=x);const V=!x&&A.subTree.el;L(A,T,b(x||A.subTree.el),x?null:y(A.subTree),S,l,E),V&&(T.placeholder=null,P(V)),os(A,T.el),w&&--S.deps===0&&S.resolve()})},unmount(A,L){S.isUnmounted=!0,S.activeBranch&&v(S.activeBranch,r,A,L),S.pendingBranch&&v(S.pendingBranch,r,A,L)}};return S}function sp(e,t,r,n,i,s,l,o,a){const c=t.suspense=Hc(t,n,r,e.parentNode,document.createElement("div"),null,i,s,l,o,!0),u=a(e,c.pendingBranch=t.ssContent,r,c,s,l);return c.deps===0&&c.resolve(!1,!0),u}function lp(e){const{shapeFlag:t,children:r}=e,n=t&32;e.ssContent=bo(n?r.default:r),e.ssFallback=n?bo(r.fallback):he(_e)}function bo(e){let t;if(G(e)){const r=Sr&&e._c;r&&(e._d=!1,be()),e=e(),r&&(e._d=!0,t=Ue,Kc())}return z(e)&&(e=jh(e)),e=Je(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter(r=>r!==e)),e}function jc(e,t){t&&t.pendingBranch?z(e)?t.effects.push(...e):t.effects.push(e):An(e)}function Hr(e,t){e.activeBranch=t;const{vnode:r,parentComponent:n}=e;let i=t.el;for(;!i&&t.component;)t=t.component.subTree,i=t.el;r.el=i,n&&n.subTree===r&&(n.vnode.el=i,os(n,i))}function op(e){const t=e.props&&e.props.suspensible;return t!=null&&t!==!1}const ye=Symbol.for("v-fgt"),nr=Symbol.for("v-txt"),_e=Symbol.for("v-cmt"),br=Symbol.for("v-stc"),wn=[];let Ue=null;function be(e=!1){wn.push(Ue=e?null:[])}function Kc(){wn.pop(),Ue=wn[wn.length-1]||null}let Sr=1;function Pn(e,t=!1){Sr+=e,e<0&&Ue&&t&&(Ue.hasOnce=!0)}function qc(e){return e.dynamicChildren=Sr>0?Ue||Vr:null,Kc(),Sr>0&&Ue&&Ue.push(e),e}function Ne(e,t,r,n,i,s){return qc(C(e,t,r,n,i,s,!0))}function ki(e,t,r,n,i){return qc(he(e,t,r,n,i,!0))}function Gt(e){return e?e.__v_isVNode===!0:!1}function gt(e,t){return e.type===t.type&&e.key===t.key}function ap(e){}const Wc=({key:e})=>e??null,fi=({ref:e,ref_key:t,ref_for:r})=>(typeof e=="number"&&(e=""+e),e!=null?Q(e)||ke(e)||G(e)?{i:Me,r:e,k:t,f:!!r}:e:null);function C(e,t=null,r=null,n=0,i=null,s=e===ye?0:1,l=!1,o=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Wc(t),ref:t&&fi(t),scopeId:ts,slotScopeIds:null,children:r,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Me};return o?(Sl(a,r),s&128&&e.normalize(a)):r&&(a.shapeFlag|=Q(r)?8:16),Sr>0&&!l&&Ue&&(a.patchFlag>0||s&6)&&a.patchFlag!==32&&Ue.push(a),a}const he=cp;function cp(e,t=null,r=null,n=0,i=null,s=!1){if((!e||e===Sc)&&(e=_e),Gt(e)){const o=Nt(e,t,!0);return r&&Sl(o,r),Sr>0&&!s&&Ue&&(o.shapeFlag&6?Ue[Ue.indexOf(e)]=o:Ue.push(o)),o.patchFlag=-2,o}if(gp(e)&&(e=e.__vccOpts),t){t=Gc(t);let{class:o,style:a}=t;o&&!Q(o)&&(t.class=Ye(o)),se(a)&&(zn(a)&&!z(a)&&(a=ee({},a)),t.style=tn(a))}const l=Q(e)?1:Ei(e)?128:oc(e)?64:se(e)?4:G(e)?2:0;return C(e,t,r,n,i,l,s,!0)}function Gc(e){return e?zn(e)||Oc(e)?ee({},e):e:null}function Nt(e,t,r=!1,n=!1){const{props:i,ref:s,patchFlag:l,children:o,transition:a}=e,c=t?Yc(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Wc(c),ref:t&&t.ref?r&&s?z(s)?s.concat(fi(t)):[s,fi(t)]:fi(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ye?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Nt(e.ssContent),ssFallback:e.ssFallback&&Nt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return a&&n&&Wt(u,a.clone(u)),u}function Lt(e=" ",t=0){return he(nr,null,e,t)}function Mr(e,t){const r=he(br,null,e);return r.staticCount=t,r}function up(e="",t=!1){return t?(be(),ki(_e,null,e)):he(_e,null,e)}function Je(e){return e==null||typeof e=="boolean"?he(_e):z(e)?he(ye,null,e.slice()):Gt(e)?Dt(e):he(nr,null,String(e))}function Dt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Nt(e)}function Sl(e,t){let r=0;const{shapeFlag:n}=e;if(t==null)t=null;else if(z(t))r=16;else if(typeof t=="object")if(n&65){const i=t.default;i&&(i._c&&(i._d=!1),Sl(e,i()),i._c&&(i._d=!0));return}else{r=32;const i=t._;!i&&!Oc(t)?t._ctx=Me:i===3&&Me&&(Me.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else G(t)?(t={default:t,_ctx:Me},r=32):(t=String(t),n&64?(r=16,t=[Lt(t)]):r=8);e.children=t,e.shapeFlag|=r}function Yc(...e){const t={};for(let r=0;r<e.length;r++){const n=e[r];for(const i in n)if(i==="class")t.class!==n.class&&(t.class=Ye([t.class,n.class]));else if(i==="style")t.style=tn([t.style,n.style]);else if(Tr(i)){const s=t[i],l=n[i];l&&s!==l&&!(z(s)&&s.includes(l))?t[i]=s?[].concat(s,l):l:l==null&&s==null&&!Hi(i)&&(t[i]=l)}else i!==""&&(t[i]=n[i])}return t}function Ge(e,t,r,n=null){ft(e,t,7,[r,n])}const fp=xc();let dp=0;function Jc(e,t,r){const n=e.type,i=(t?t.appContext:e.appContext)||fp,s={uid:dp++,vnode:e,type:n,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new nl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Pc(n,i),emitsOptions:kc(n,i),emit:null,emitted:null,propsDefaults:re,inheritAttrs:n.inheritAttrs,ctx:re,data:re,props:re,attrs:re,slots:re,refs:re,setupState:re,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Bh.bind(null,s),e.ce&&e.ce(s),s}let Pe=null;const qe=()=>Pe||Me;let Ai,jr;{const e=Gi(),t=(r,n)=>{let i;return(i=e[r])||(i=e[r]=[]),i.push(n),s=>{i.length>1?i.forEach(l=>l(s)):i[0](s)}};Ai=t("__VUE_INSTANCE_SETTERS__",r=>Pe=r),jr=t("__VUE_SSR_SETTERS__",r=>wr=r)}const sn=e=>{const t=Pe;return Ai(e),e.scope.on(),()=>{e.scope.off(),Ai(t)}},Mn=()=>{Pe&&Pe.scope.off(),Ai(null)};function Xc(e){return e.vnode.shapeFlag&4}let wr=!1;function Qc(e,t=!1,r=!1){t&&jr(t);const{props:n,children:i}=e.vnode,s=Xc(e);Gh(e,n,s,t),Qh(e,i,r||t);const l=s?hp(e,t):void 0;return t&&jr(!1),l}function hp(e,t){const r=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Ds);const{setup:n}=r;if(n){Kt();const i=e.setupContext=n.length>1?tu(e):null,s=sn(e),l=rn(n,e,0,[e.props,i]),o=rl(l);if(qt(),s(),(o||e.sp)&&!Bt(e)&&dl(e),o){if(l.then(Mn,Mn),t)return l.then(a=>{zs(e,a,t)}).catch(a=>{kr(a,e,0)});e.asyncDep=l}else zs(e,l,t)}else eu(e,t)}function zs(e,t,r){G(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:se(t)&&(e.setupState=ol(t)),eu(e,r)}let Ni,Bs;function Zc(e){Ni=e,Bs=t=>{t.render._rc&&(t.withProxy=new Proxy(t.ctx,Ch))}}const pp=()=>!Ni;function eu(e,t,r){const n=e.type;if(!e.render){if(!t&&Ni&&!n.render){const i=n.template||ml(e).template;if(i){const{isCustomElement:s,compilerOptions:l}=e.appContext.config,{delimiters:o,compilerOptions:a}=n,c=ee(ee({isCustomElement:s,delimiters:o},l),a);n.render=Ni(i,c)}}e.render=n.render||Le,Bs&&Bs(e)}{const i=sn(e);Kt();try{Mh(e)}finally{qt(),i()}}}const vp={get(e,t){return $e(e,"get",""),e[t]}};function tu(e){const t=r=>{e.exposed=r||{}};return{attrs:new Proxy(e.attrs,vp),slots:e.slots,emit:e.emit,expose:t}}function Wn(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(ol(ja(e.exposed)),{get(t,r){if(r in t)return t[r];if(r in Sn)return Sn[r](e)},has(t,r){return r in t||r in Sn}})):e.proxy}function Hs(e,t=!0){return G(e)?e.displayName||e.name:e.name||t&&e.__name}function gp(e){return G(e)&&"__vccOpts"in e}const dr=(e,t)=>kd(e,t,wr);function wl(e,t,r){try{Pn(-1);const n=arguments.length;return n===2?se(t)&&!z(t)?Gt(t)?he(e,null,[t]):he(e,t):he(e,null,t):(n>3?r=Array.prototype.slice.call(arguments,2):n===3&&Gt(r)&&(r=[r]),he(e,t,r))}finally{Pn(1)}}function mp(){}function bp(e,t,r,n){const i=r[n];if(i&&ru(i,e))return i;const s=t();return s.memo=e.slice(),s.cacheIndex=n,r[n]=s}function ru(e,t){const r=e.memo;if(r.length!=t.length)return!1;for(let n=0;n<r.length;n++)if(Re(r[n],t[n]))return!1;return Sr>0&&Ue&&Ue.push(e),!0}const nu="3.5.32",yp=Le,Cp=Dd,Sp=Pr,wp=ec,_p={createComponentInstance:Jc,setupComponent:Qc,renderComponentRoot:ui,setCurrentRenderingInstance:In,isVNode:Gt,normalizeVNode:Je,getComponentPublicInstance:Wn,ensureValidVNode:gl,pushWarningContext:Rd,popWarningContext:Pd},Tp=_p,xp=null,Ep=null,kp=null;let js;const yo=typeof window<"u"&&window.trustedTypes;if(yo)try{js=yo.createPolicy("vue",{createHTML:e=>e})}catch{}const iu=js?e=>js.createHTML(e):e=>e,Ap="http://www.w3.org/2000/svg",Np="http://www.w3.org/1998/Math/MathML",Mt=typeof document<"u"?document:null,Co=Mt&&Mt.createElement("template"),su={insert:(e,t,r)=>{t.insertBefore(e,r||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,r,n)=>{const i=t==="svg"?Mt.createElementNS(Ap,e):t==="mathml"?Mt.createElementNS(Np,e):r?Mt.createElement(e,{is:r}):Mt.createElement(e);return e==="select"&&n&&n.multiple!=null&&i.setAttribute("multiple",n.multiple),i},createText:e=>Mt.createTextNode(e),createComment:e=>Mt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Mt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,r,n,i,s){const l=r?r.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),r),!(i===s||!(i=i.nextSibling)););else{Co.innerHTML=iu(n==="svg"?`<svg>${e}</svg>`:n==="mathml"?`<math>${e}</math>`:e);const o=Co.content;if(n==="svg"||n==="mathml"){const a=o.firstChild;for(;a.firstChild;)o.appendChild(a.firstChild);o.removeChild(a)}t.insertBefore(o,r)}return[l?l.nextSibling:t.firstChild,r?r.previousSibling:t.lastChild]}},Jt="transition",un="animation",Gr=Symbol("_vtc"),lu={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ou=ee({},fl,lu),Ip=e=>(e.displayName="Transition",e.props=ou,e),Op=Ip((e,{slots:t})=>wl(uc,au(e),t)),ar=(e,t=[])=>{z(e)?e.forEach(r=>r(...t)):e&&e(...t)},So=e=>e?z(e)?e.some(t=>t.length>1):e.length>1:!1;function au(e){const t={};for(const T in e)T in lu||(t[T]=e[T]);if(e.css===!1)return t;const{name:r="v",type:n,duration:i,enterFromClass:s=`${r}-enter-from`,enterActiveClass:l=`${r}-enter-active`,enterToClass:o=`${r}-enter-to`,appearFromClass:a=s,appearActiveClass:c=l,appearToClass:u=o,leaveFromClass:f=`${r}-leave-from`,leaveActiveClass:p=`${r}-leave-active`,leaveToClass:v=`${r}-leave-to`}=e,y=Rp(i),b=y&&y[0],P=y&&y[1],{onBeforeEnter:N,onEnter:_,onEnterCancelled:h,onLeave:m,onLeaveCancelled:S,onBeforeAppear:A=N,onAppear:L=_,onAppearCancelled:E=h}=t,w=(T,V,q,J)=>{T._enterCancelled=J,Qt(T,V?u:o),Qt(T,V?c:l),q&&q()},x=(T,V)=>{T._isLeaving=!1,Qt(T,f),Qt(T,v),Qt(T,p),V&&V()},D=T=>(V,q)=>{const J=T?L:_,H=()=>w(V,T,q);ar(J,[V,H]),wo(()=>{Qt(V,T?a:s),_t(V,T?u:o),So(J)||_o(V,n,b,H)})};return ee(t,{onBeforeEnter(T){ar(N,[T]),_t(T,s),_t(T,l)},onBeforeAppear(T){ar(A,[T]),_t(T,a),_t(T,c)},onEnter:D(!1),onAppear:D(!0),onLeave(T,V){T._isLeaving=!0;const q=()=>x(T,V);_t(T,f),T._enterCancelled?(_t(T,p),Ks(T)):(Ks(T),_t(T,p)),wo(()=>{T._isLeaving&&(Qt(T,f),_t(T,v),So(m)||_o(T,n,P,q))}),ar(m,[T,q])},onEnterCancelled(T){w(T,!1,void 0,!0),ar(h,[T])},onAppearCancelled(T){w(T,!0,void 0,!0),ar(E,[T])},onLeaveCancelled(T){x(T),ar(S,[T])}})}function Rp(e){if(e==null)return null;if(se(e))return[Ts(e.enter),Ts(e.leave)];{const t=Ts(e);return[t,t]}}function Ts(e){return mi(e)}function _t(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.add(r)),(e[Gr]||(e[Gr]=new Set)).add(t)}function Qt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.remove(n));const r=e[Gr];r&&(r.delete(t),r.size||(e[Gr]=void 0))}function wo(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Pp=0;function _o(e,t,r,n){const i=e._endId=++Pp,s=()=>{i===e._endId&&n()};if(r!=null)return setTimeout(s,r);const{type:l,timeout:o,propCount:a}=cu(e,t);if(!l)return n();const c=l+"end";let u=0;const f=()=>{e.removeEventListener(c,p),s()},p=v=>{v.target===e&&++u>=a&&f()};setTimeout(()=>{u<a&&f()},o+1),e.addEventListener(c,p)}function cu(e,t){const r=window.getComputedStyle(e),n=y=>(r[y]||"").split(", "),i=n(`${Jt}Delay`),s=n(`${Jt}Duration`),l=To(i,s),o=n(`${un}Delay`),a=n(`${un}Duration`),c=To(o,a);let u=null,f=0,p=0;t===Jt?l>0&&(u=Jt,f=l,p=s.length):t===un?c>0&&(u=un,f=c,p=a.length):(f=Math.max(l,c),u=f>0?l>c?Jt:un:null,p=u?u===Jt?s.length:a.length:0);const v=u===Jt&&/\b(?:transform|all)(?:,|$)/.test(n(`${Jt}Property`).toString());return{type:u,timeout:f,propCount:p,hasTransform:v}}function To(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((r,n)=>xo(r)+xo(e[n])))}function xo(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Ks(e){return(e?e.ownerDocument:document).body.offsetHeight}function Mp(e,t,r){const n=e[Gr];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?e.removeAttribute("class"):r?e.setAttribute("class",t):e.className=t}const Ii=Symbol("_vod"),uu=Symbol("_vsh"),fu={name:"show",beforeMount(e,{value:t},{transition:r}){e[Ii]=e.style.display==="none"?"":e.style.display,r&&t?r.beforeEnter(e):fn(e,t)},mounted(e,{value:t},{transition:r}){r&&t&&r.enter(e)},updated(e,{value:t,oldValue:r},{transition:n}){!t!=!r&&(n?t?(n.beforeEnter(e),fn(e,!0),n.enter(e)):n.leave(e,()=>{fn(e,!1)}):fn(e,t))},beforeUnmount(e,{value:t}){fn(e,t)}};function fn(e,t){e.style.display=t?e[Ii]:"none",e[uu]=!t}function Lp(){fu.getSSRProps=({value:e})=>{if(!e)return{style:{display:"none"}}}}const du=Symbol("");function Dp(e){const t=qe();if(!t)return;const r=t.ut=(i=e(t.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach(s=>Oi(s,i))},n=()=>{const i=e(t.proxy);t.ce?Oi(t.ce,i):qs(t.subTree,i),r(i)};hl(()=>{An(n)}),nn(()=>{rr(n,Le,{flush:"post"});const i=new MutationObserver(n);i.observe(t.subTree.el.parentNode,{childList:!0}),ss(()=>i.disconnect())})}function qs(e,t){if(e.shapeFlag&128){const r=e.suspense;e=r.activeBranch,r.pendingBranch&&!r.isHydrating&&r.effects.push(()=>{qs(r.activeBranch,t)})}for(;e.component;)e=e.component.subTree;if(e.shapeFlag&1&&e.el)Oi(e.el,t);else if(e.type===ye)e.children.forEach(r=>qs(r,t));else if(e.type===br){let{el:r,anchor:n}=e;for(;r&&(Oi(r,t),r!==n);)r=r.nextSibling}}function Oi(e,t){if(e.nodeType===1){const r=e.style;let n="";for(const i in t){const s=qf(t[i]);r.setProperty(`--${i}`,s),n+=`--${i}: ${s};`}r[du]=n}}const Vp=/(?:^|;)\s*display\s*:/;function Fp(e,t,r){const n=e.style,i=Q(r);let s=!1;if(r&&!i){if(t)if(Q(t))for(const l of t.split(";")){const o=l.slice(0,l.indexOf(":")).trim();r[o]==null&&di(n,o,"")}else for(const l in t)r[l]==null&&di(n,l,"");for(const l in r)l==="display"&&(s=!0),di(n,l,r[l])}else if(i){if(t!==r){const l=n[du];l&&(r+=";"+l),n.cssText=r,s=Vp.test(r)}}else t&&e.removeAttribute("style");Ii in e&&(e[Ii]=s?n.display:"",e[uu]&&(n.display="none"))}const Eo=/\s*!important$/;function di(e,t,r){if(z(r))r.forEach(n=>di(e,t,n));else if(r==null&&(r=""),t.startsWith("--"))e.setProperty(t,r);else{const n=$p(e,t);Eo.test(r)?e.setProperty(Xe(n),r.replace(Eo,""),"important"):e[n]=r}}const ko=["Webkit","Moz","ms"],xs={};function $p(e,t){const r=xs[t];if(r)return r;let n=ae(t);if(n!=="filter"&&n in e)return xs[t]=n;n=Er(n);for(let i=0;i<ko.length;i++){const s=ko[i]+n;if(s in e)return xs[t]=s}return t}const Ao="http://www.w3.org/1999/xlink";function No(e,t,r,n,i,s=jf(t)){n&&t.startsWith("xlink:")?r==null?e.removeAttributeNS(Ao,t.slice(6,t.length)):e.setAttributeNS(Ao,t,r):r==null||s&&!Ta(r)?e.removeAttribute(t):e.setAttribute(t,s?"":Be(r)?String(r):r)}function Io(e,t,r,n,i){if(t==="innerHTML"||t==="textContent"){r!=null&&(e[t]=t==="innerHTML"?iu(r):r);return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?e.getAttribute("value")||"":e.value,a=r==null?e.type==="checkbox"?"on":"":String(r);(o!==a||!("_value"in e))&&(e.value=a),r==null&&e.removeAttribute(t),e._value=r;return}let l=!1;if(r===""||r==null){const o=typeof e[t];o==="boolean"?r=Ta(r):r==null&&o==="string"?(r="",l=!0):o==="number"&&(r=0,l=!0)}try{e[t]=r}catch{}l&&e.removeAttribute(i||t)}function $t(e,t,r,n){e.addEventListener(t,r,n)}function Up(e,t,r,n){e.removeEventListener(t,r,n)}const Oo=Symbol("_vei");function zp(e,t,r,n,i=null){const s=e[Oo]||(e[Oo]={}),l=s[t];if(n&&l)l.value=n;else{const[o,a]=Bp(t);if(n){const c=s[t]=Kp(n,i);$t(e,o,c,a)}else l&&(Up(e,o,l,a),s[t]=void 0)}}const Ro=/(?:Once|Passive|Capture)$/;function Bp(e){let t;if(Ro.test(e)){t={};let n;for(;n=e.match(Ro);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Xe(e.slice(2)),t]}let Es=0;const Hp=Promise.resolve(),jp=()=>Es||(Hp.then(()=>Es=0),Es=Date.now());function Kp(e,t){const r=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=r.attached)return;ft(qp(n,r.value),t,5,[n])};return r.value=e,r.attached=jp(),r}function qp(e,t){if(z(t)){const r=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{r.call(e),e._stopped=!0},t.map(n=>i=>!i._stopped&&n&&n(i))}else return t}const Po=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,hu=(e,t,r,n,i,s)=>{const l=i==="svg";t==="class"?Mp(e,n,l):t==="style"?Fp(e,r,n):Tr(t)?Hi(t)||zp(e,t,r,n,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Wp(e,t,n,l))?(Io(e,t,n),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&No(e,t,n,l,s,t!=="value")):e._isVueCE&&(Gp(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!Q(n)))?Io(e,ae(t),n,s,t):(t==="true-value"?e._trueValue=n:t==="false-value"&&(e._falseValue=n),No(e,t,n,l))};function Wp(e,t,r,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in e&&Po(t)&&G(r));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Po(t)&&Q(r)?!1:t in e}function Gp(e,t){const r=e._def.props;if(!r)return!1;const n=ae(t);return Array.isArray(r)?r.some(i=>ae(i)===n):Object.keys(r).some(i=>ae(i)===n)}const Mo={};function pu(e,t,r){let n=jn(e,t);ji(n)&&(n=ee({},n,t));class i extends as{constructor(l){super(n,l,r)}}return i.def=n,i}const Yp=((e,t)=>pu(e,t,Eu)),Jp=typeof HTMLElement<"u"?HTMLElement:class{};class as extends Jp{constructor(t,r={},n=Pi){super(),this._def=t,this._props=r,this._createApp=n,this._isVueCE=!0,this._instance=null,this._app=null,this._nonce=this._def.nonce,this._connected=!1,this._resolved=!1,this._patching=!1,this._dirty=!1,this._numberProps=null,this._styleChildren=new WeakSet,this._styleAnchors=new WeakMap,this._ob=null,this.shadowRoot&&n!==Pi?this._root=this.shadowRoot:t.shadowRoot!==!1?(this.attachShadow(ee({},t.shadowRootOptions,{mode:"open"})),this._root=this.shadowRoot):this._root=this}connectedCallback(){if(!this.isConnected)return;!this.shadowRoot&&!this._resolved&&this._parseSlots(),this._connected=!0;let t=this;for(;t=t&&(t.assignedSlot||t.parentNode||t.host);)if(t instanceof as){this._parent=t;break}this._instance||(this._resolved?this._mount(this._def):t&&t._pendingResolve?this._pendingResolve=t._pendingResolve.then(()=>{this._pendingResolve=void 0,this._resolveDef()}):this._resolveDef())}_setParent(t=this._parent){t&&(this._instance.parent=t._instance,this._inheritParentContext(t))}_inheritParentContext(t=this._parent){t&&this._app&&Object.setPrototypeOf(this._app._context.provides,t._instance.provides)}disconnectedCallback(){this._connected=!1,es(()=>{this._connected||(this._ob&&(this._ob.disconnect(),this._ob=null),this._app&&this._app.unmount(),this._instance&&(this._instance.ce=void 0),this._app=this._instance=null,this._teleportTargets&&(this._teleportTargets.clear(),this._teleportTargets=void 0))})}_processMutations(t){for(const r of t)this._setAttr(r.attributeName)}_resolveDef(){if(this._pendingResolve)return;for(let n=0;n<this.attributes.length;n++)this._setAttr(this.attributes[n].name);this._ob=new MutationObserver(this._processMutations.bind(this)),this._ob.observe(this,{attributes:!0});const t=(n,i=!1)=>{this._resolved=!0,this._pendingResolve=void 0;const{props:s,styles:l}=n;let o;if(s&&!z(s))for(const a in s){const c=s[a];(c===Number||c&&c.type===Number)&&(a in this._props&&(this._props[a]=mi(this._props[a])),(o||(o=Object.create(null)))[ae(a)]=!0)}this._numberProps=o,this._resolveProps(n),this.shadowRoot&&this._applyStyles(l),this._mount(n)},r=this._def.__asyncLoader;r?this._pendingResolve=r().then(n=>{n.configureApp=this._def.configureApp,t(this._def=n,!0)}):t(this._def)}_mount(t){this._app=this._createApp(t),this._inheritParentContext(),t.configureApp&&t.configureApp(this._app),this._app._ceVNode=this._createVNode(),this._app.mount(this._root);const r=this._instance&&this._instance.exposed;if(r)for(const n in r)le(this,n)||Object.defineProperty(this,n,{get:()=>Bn(r[n])})}_resolveProps(t){const{props:r}=t,n=z(r)?r:Object.keys(r||{});for(const i of Object.keys(this))i[0]!=="_"&&n.includes(i)&&this._setProp(i,this[i]);for(const i of n.map(ae))Object.defineProperty(this,i,{get(){return this._getProp(i)},set(s){this._setProp(i,s,!0,!this._patching)}})}_setAttr(t){if(t.startsWith("data-v-"))return;const r=this.hasAttribute(t);let n=r?this.getAttribute(t):Mo;const i=ae(t);r&&this._numberProps&&this._numberProps[i]&&(n=mi(n)),this._setProp(i,n,!1,!0)}_getProp(t){return this._props[t]}_setProp(t,r,n=!0,i=!1){if(r!==this._props[t]&&(this._dirty=!0,r===Mo?delete this._props[t]:(this._props[t]=r,t==="key"&&this._app&&(this._app._ceVNode.key=r)),i&&this._instance&&this._update(),n)){const s=this._ob;s&&(this._processMutations(s.takeRecords()),s.disconnect()),r===!0?this.setAttribute(Xe(t),""):typeof r=="string"||typeof r=="number"?this.setAttribute(Xe(t),r+""):r||this.removeAttribute(Xe(t)),s&&s.observe(this,{attributes:!0})}}_update(){const t=this._createVNode();this._app&&(t.appContext=this._app._context),xu(t,this._root)}_createVNode(){const t={};this.shadowRoot||(t.onVnodeMounted=t.onVnodeUpdated=this._renderSlots.bind(this));const r=he(this._def,ee(t,this._props));return this._instance||(r.ce=n=>{this._instance=n,n.ce=this,n.isCE=!0;const i=(s,l)=>{this.dispatchEvent(new CustomEvent(s,ji(l[0])?ee({detail:l},l[0]):{detail:l}))};n.emit=(s,...l)=>{i(s,l),Xe(s)!==s&&i(Xe(s),l)},this._setParent()}),r}_applyStyles(t,r,n){if(!t)return;if(r){if(r===this._def||this._styleChildren.has(r))return;this._styleChildren.add(r)}const i=this._nonce,s=this.shadowRoot,l=n?this._getStyleAnchor(n)||this._getStyleAnchor(this._def):this._getRootStyleInsertionAnchor(s);let o=null;for(let a=t.length-1;a>=0;a--){const c=document.createElement("style");i&&c.setAttribute("nonce",i),c.textContent=t[a],s.insertBefore(c,o||l),o=c,a===0&&(n||this._styleAnchors.set(this._def,c),r&&this._styleAnchors.set(r,c))}}_getStyleAnchor(t){if(!t)return null;const r=this._styleAnchors.get(t);return r&&r.parentNode===this.shadowRoot?r:(r&&this._styleAnchors.delete(t),null)}_getRootStyleInsertionAnchor(t){for(let r=0;r<t.childNodes.length;r++){const n=t.childNodes[r];if(!(n instanceof HTMLStyleElement))return n}return null}_parseSlots(){const t=this._slots={};let r;for(;r=this.firstChild;){const n=r.nodeType===1&&r.getAttribute("slot")||"default";(t[n]||(t[n]=[])).push(r),this.removeChild(r)}}_renderSlots(){const t=this._getSlots(),r=this._instance.type.__scopeId;for(let n=0;n<t.length;n++){const i=t[n],s=i.getAttribute("name")||"default",l=this._slots[s],o=i.parentNode;if(l)for(const a of l){if(r&&a.nodeType===1){const c=r+"-s",u=document.createTreeWalker(a,1);a.setAttribute(c,"");let f;for(;f=u.nextNode();)f.setAttribute(c,"")}o.insertBefore(a,i)}else for(;i.firstChild;)o.insertBefore(i.firstChild,i);o.removeChild(i)}}_getSlots(){const t=[this];this._teleportTargets&&t.push(...this._teleportTargets);const r=new Set;for(const n of t){const i=n.querySelectorAll("slot");for(let s=0;s<i.length;s++)r.add(i[s])}return Array.from(r)}_injectChildStyle(t,r){this._applyStyles(t.styles,t,r)}_beginPatch(){this._patching=!0,this._dirty=!1}_endPatch(){this._patching=!1,this._dirty&&this._instance&&this._update()}_hasShadowRoot(){return this._def.shadowRoot!==!1}_removeChildStyle(t){}}function vu(e){const t=qe(),r=t&&t.ce;return r||null}function Xp(){const e=vu();return e&&e.shadowRoot}function Qp(e="$style"){{const t=qe();if(!t)return re;const r=t.type.__cssModules;if(!r)return re;const n=r[e];return n||re}}const gu=new WeakMap,mu=new WeakMap,Ri=Symbol("_moveCb"),Lo=Symbol("_enterCb"),Zp=e=>(delete e.props.mode,e),ev=Zp({name:"TransitionGroup",props:ee({},ou,{tag:String,moveClass:String}),setup(e,{slots:t}){const r=qe(),n=ul();let i,s;return is(()=>{if(!i.length)return;const l=e.moveClass||`${e.name||"v"}-move`;if(!sv(i[0].el,r.vnode.el,l)){i=[];return}i.forEach(rv),i.forEach(nv);const o=i.filter(iv);Ks(r.vnode.el),o.forEach(a=>{const c=a.el,u=c.style;_t(c,l),u.transform=u.webkitTransform=u.transitionDuration="";const f=c[Ri]=p=>{p&&p.target!==c||(!p||p.propertyName.endsWith("transform"))&&(c.removeEventListener("transitionend",f),c[Ri]=null,Qt(c,l))};c.addEventListener("transitionend",f)}),i=[]}),()=>{const l=ne(e),o=au(l);let a=l.tag||ye;if(i=[],s)for(let c=0;c<s.length;c++){const u=s[c];u.el&&u.el instanceof Element&&(i.push(u),Wt(u,Wr(u,o,n,r)),gu.set(u,bu(u.el)))}s=t.default?rs(t.default()):[];for(let c=0;c<s.length;c++){const u=s[c];u.key!=null&&Wt(u,Wr(u,o,n,r))}return he(a,null,s)}}}),tv=ev;function rv(e){const t=e.el;t[Ri]&&t[Ri](),t[Lo]&&t[Lo]()}function nv(e){mu.set(e,bu(e.el))}function iv(e){const t=gu.get(e),r=mu.get(e),n=t.left-r.left,i=t.top-r.top;if(n||i){const s=e.el,l=s.style,o=s.getBoundingClientRect();let a=1,c=1;return s.offsetWidth&&(a=o.width/s.offsetWidth),s.offsetHeight&&(c=o.height/s.offsetHeight),(!Number.isFinite(a)||a===0)&&(a=1),(!Number.isFinite(c)||c===0)&&(c=1),Math.abs(a-1)<.01&&(a=1),Math.abs(c-1)<.01&&(c=1),l.transform=l.webkitTransform=`translate(${n/a}px,${i/c}px)`,l.transitionDuration="0s",e}}function bu(e){const t=e.getBoundingClientRect();return{left:t.left,top:t.top}}function sv(e,t,r){const n=e.cloneNode(),i=e[Gr];i&&i.forEach(o=>{o.split(/\s+/).forEach(a=>a&&n.classList.remove(a))}),r.split(/\s+/).forEach(o=>o&&n.classList.add(o)),n.style.display="none";const s=t.nodeType===1?t:t.parentNode;s.appendChild(n);const{hasTransform:l}=cu(n);return s.removeChild(n),l}const sr=e=>{const t=e.props["onUpdate:modelValue"]||!1;return z(t)?r=>Ur(t,r):t};function lv(e){e.target.composing=!0}function Do(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ut=Symbol("_assign");function Vo(e,t,r){return t&&(e=e.trim()),r&&(e=Wi(e)),e}const vt={created(e,{modifiers:{lazy:t,trim:r,number:n}},i){e[ut]=sr(i);const s=n||i.props&&i.props.type==="number";$t(e,t?"change":"input",l=>{l.target.composing||e[ut](Vo(e.value,r,s))}),(r||s)&&$t(e,"change",()=>{e.value=Vo(e.value,r,s)}),t||($t(e,"compositionstart",lv),$t(e,"compositionend",Do),$t(e,"change",Do))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:r,modifiers:{lazy:n,trim:i,number:s}},l){if(e[ut]=sr(l),e.composing)return;const o=(s||e.type==="number")&&!/^0\d/.test(e.value)?Wi(e.value):e.value,a=t??"";if(o===a)return;const c=e.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===e&&e.type!=="range"&&(n&&t===r||i&&e.value.trim()===a)||(e.value=a)}},hr={deep:!0,created(e,t,r){e[ut]=sr(r),$t(e,"change",()=>{const n=e._modelValue,i=Yr(e),s=e.checked,l=e[ut];if(z(n)){const o=Yi(n,i),a=o!==-1;if(s&&!a)l(n.concat(i));else if(!s&&a){const c=[...n];c.splice(o,1),l(c)}}else if(xr(n)){const o=new Set(n);s?o.add(i):o.delete(i),l(o)}else l(yu(e,s))})},mounted:Fo,beforeUpdate(e,t,r){e[ut]=sr(r),Fo(e,t,r)}};function Fo(e,{value:t,oldValue:r},n){e._modelValue=t;let i;if(z(t))i=Yi(t,n.props.value)>-1;else if(xr(t))i=t.has(n.props.value);else{if(t===r)return;i=jt(t,yu(e,!0))}e.checked!==i&&(e.checked=i)}const _l={created(e,{value:t},r){e.checked=jt(t,r.props.value),e[ut]=sr(r),$t(e,"change",()=>{e[ut](Yr(e))})},beforeUpdate(e,{value:t,oldValue:r},n){e[ut]=sr(n),t!==r&&(e.checked=jt(t,n.props.value))}},Tl={deep:!0,created(e,{value:t,modifiers:{number:r}},n){const i=xr(t);$t(e,"change",()=>{const s=Array.prototype.filter.call(e.options,l=>l.selected).map(l=>r?Wi(Yr(l)):Yr(l));e[ut](e.multiple?i?new Set(s):s:s[0]),e._assigning=!0,es(()=>{e._assigning=!1})}),e[ut]=sr(n)},mounted(e,{value:t}){$o(e,t)},beforeUpdate(e,t,r){e[ut]=sr(r)},updated(e,{value:t}){e._assigning||$o(e,t)}};function $o(e,t){const r=e.multiple,n=z(t);if(!(r&&!n&&!xr(t))){for(let i=0,s=e.options.length;i<s;i++){const l=e.options[i],o=Yr(l);if(r)if(n){const a=typeof o;a==="string"||a==="number"?l.selected=t.some(c=>String(c)===String(o)):l.selected=Yi(t,o)>-1}else l.selected=t.has(o);else if(jt(Yr(l),t)){e.selectedIndex!==i&&(e.selectedIndex=i);return}}!r&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Yr(e){return"_value"in e?e._value:e.value}function yu(e,t){const r=t?"_trueValue":"_falseValue";return r in e?e[r]:t}const Cu={created(e,t,r){oi(e,t,r,null,"created")},mounted(e,t,r){oi(e,t,r,null,"mounted")},beforeUpdate(e,t,r,n){oi(e,t,r,n,"beforeUpdate")},updated(e,t,r,n){oi(e,t,r,n,"updated")}};function Su(e,t){switch(e){case"SELECT":return Tl;case"TEXTAREA":return vt;default:switch(t){case"checkbox":return hr;case"radio":return _l;default:return vt}}}function oi(e,t,r,n,i){const l=Su(e.tagName,r.props&&r.props.type)[i];l&&l(e,t,r,n)}function ov(){vt.getSSRProps=({value:e})=>({value:e}),_l.getSSRProps=({value:e},t)=>{if(t.props&&jt(t.props.value,e))return{checked:!0}},hr.getSSRProps=({value:e},t)=>{if(z(e)){if(t.props&&Yi(e,t.props.value)>-1)return{checked:!0}}else if(xr(e)){if(t.props&&e.has(t.props.value))return{checked:!0}}else if(e)return{checked:!0}},Cu.getSSRProps=(e,t)=>{if(typeof t.type!="string")return;const r=Su(t.type.toUpperCase(),t.props&&t.props.type);if(r.getSSRProps)return r.getSSRProps(e,t)}}const av=["ctrl","shift","alt","meta"],cv={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>av.some(r=>e[`${r}Key`]&&!t.includes(r))},uv=(e,t)=>{if(!e)return e;const r=e._withMods||(e._withMods={}),n=t.join(".");return r[n]||(r[n]=((i,...s)=>{for(let l=0;l<t.length;l++){const o=cv[t[l]];if(o&&o(i,t))return}return e(i,...s)}))},fv={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},dv=(e,t)=>{const r=e._withKeys||(e._withKeys={}),n=t.join(".");return r[n]||(r[n]=(i=>{if(!("key"in i))return;const s=Xe(i.key);if(t.some(l=>l===s||fv[l]===s))return e(i)}))},wu=ee({patchProp:hu},su);let _n,Uo=!1;function _u(){return _n||(_n=Vc(wu))}function Tu(){return _n=Uo?_n:Fc(wu),Uo=!0,_n}const xu=((...e)=>{_u().render(...e)}),hv=((...e)=>{Tu().hydrate(...e)}),Pi=((...e)=>{const t=_u().createApp(...e),{mount:r}=t;return t.mount=n=>{const i=Au(n);if(!i)return;const s=t._component;!G(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const l=r(i,!1,ku(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),l},t}),Eu=((...e)=>{const t=Tu().createApp(...e),{mount:r}=t;return t.mount=n=>{const i=Au(n);if(i)return r(i,!0,ku(i))},t});function ku(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Au(e){return Q(e)?document.querySelector(e):e}let zo=!1;const pv=()=>{zo||(zo=!0,ov(),Lp())},vv=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:uc,BaseTransitionPropsValidators:fl,Comment:_e,DeprecationTypes:kp,EffectScope:nl,ErrorCodes:Ld,ErrorTypeStrings:Cp,Fragment:ye,KeepAlive:hh,ReactiveEffect:xn,Static:br,Suspense:rp,Teleport:Yd,Text:nr,TrackOpTypes:Ad,Transition:Op,TransitionGroup:tv,TriggerOpTypes:Nd,VueElement:as,assertNumber:Md,callWithAsyncErrorHandling:ft,callWithErrorHandling:rn,camelize:ae,capitalize:Er,cloneVNode:Nt,compatUtils:Ep,computed:dr,createApp:Pi,createBlock:ki,createCommentVNode:up,createElementBlock:Ne,createElementVNode:C,createHydrationRenderer:Fc,createPropsRestProxy:Rh,createRenderer:Vc,createSSRApp:Eu,createSlots:mh,createStaticVNode:Mr,createTextVNode:Lt,createVNode:he,customRef:Wa,defineAsyncComponent:fh,defineComponent:jn,defineCustomElement:pu,defineEmits:wh,defineExpose:_h,defineModel:Eh,defineOptions:Th,defineProps:Sh,defineSSRCustomElement:Yp,defineSlots:xh,devtools:Sp,effect:Jf,effectScope:Wf,getCurrentInstance:qe,getCurrentScope:ka,getCurrentWatcher:Id,getTransitionRawChildren:rs,guardReactiveProps:Gc,h:wl,handleError:kr,hasInjectionContext:Bd,hydrate:hv,hydrateOnIdle:sh,hydrateOnInteraction:ch,hydrateOnMediaQuery:ah,hydrateOnVisible:oh,initCustomFormatter:mp,initDirectivesForSSR:pv,inject:Cn,isMemoSame:ru,isProxy:zn,isReactive:zt,isReadonly:At,isRef:ke,isRuntimeOnly:pp,isShallow:Ze,isVNode:Gt,markRaw:ja,mergeDefaults:Ih,mergeModels:Oh,mergeProps:Yc,nextTick:es,nodeOps:su,normalizeClass:Ye,normalizeProps:Mf,normalizeStyle:tn,onActivated:dc,onBeforeMount:vc,onBeforeUnmount:qn,onBeforeUpdate:hl,onDeactivated:hc,onErrorCaptured:yc,onMounted:nn,onRenderTracked:bc,onRenderTriggered:mc,onScopeDispose:Gf,onServerPrefetch:gc,onUnmounted:ss,onUpdated:is,onWatcherCleanup:Ya,openBlock:be,patchProp:hu,popScopeId:Ud,provide:tc,proxyRefs:ol,pushScopeId:$d,queuePostFlushCb:An,reactive:Kr,readonly:yi,ref:nt,registerRuntimeCompiler:Zc,render:xu,renderList:gn,renderSlot:bh,resolveComponent:Cc,resolveDirective:wc,resolveDynamicComponent:gh,resolveFilter:xp,resolveTransitionHooks:Wr,setBlockTracking:Pn,setDevtoolsHook:wp,setTransitionHooks:Wt,shallowReactive:Ha,shallowReadonly:gd,shallowRef:Ka,ssrContextKey:rc,ssrUtils:Tp,stop:Xf,toDisplayString:me,toHandlerKey:$r,toHandlers:yh,toRaw:ne,toRef:xd,toRefs:wd,toValue:yd,transformVNodeArgs:ap,triggerRef:bd,unref:Bn,useAttrs:Nh,useCssModule:Qp,useCssVars:Dp,useHost:vu,useId:Xd,useModel:zh,useSSRContext:nc,useShadowRoot:Xp,useSlots:Ah,useTemplateRef:Qd,useTransitionState:ul,vModelCheckbox:hr,vModelDynamic:Cu,vModelRadio:_l,vModelSelect:Tl,vModelText:vt,vShow:fu,version:nu,warn:yp,watch:rr,watchEffect:Hd,watchPostEffect:jd,watchSyncEffect:ic,withAsyncContext:Ph,withCtx:cl,withDefaults:kh,withDirectives:Se,withKeys:dv,withMemo:bp,withModifiers:uv,withScopeId:zd},Symbol.toStringTag,{value:"Module"}));const Ln=Symbol(""),Tn=Symbol(""),xl=Symbol(""),Mi=Symbol(""),Nu=Symbol(""),_r=Symbol(""),Iu=Symbol(""),Ou=Symbol(""),El=Symbol(""),kl=Symbol(""),Gn=Symbol(""),Al=Symbol(""),Ru=Symbol(""),Nl=Symbol(""),Il=Symbol(""),Ol=Symbol(""),Rl=Symbol(""),Pl=Symbol(""),Ml=Symbol(""),Pu=Symbol(""),Mu=Symbol(""),cs=Symbol(""),Li=Symbol(""),Ll=Symbol(""),Dl=Symbol(""),Dn=Symbol(""),Yn=Symbol(""),Vl=Symbol(""),Ws=Symbol(""),gv=Symbol(""),Gs=Symbol(""),Di=Symbol(""),mv=Symbol(""),bv=Symbol(""),Fl=Symbol(""),yv=Symbol(""),Cv=Symbol(""),$l=Symbol(""),Lu=Symbol(""),Jr={[Ln]:"Fragment",[Tn]:"Teleport",[xl]:"Suspense",[Mi]:"KeepAlive",[Nu]:"BaseTransition",[_r]:"openBlock",[Iu]:"createBlock",[Ou]:"createElementBlock",[El]:"createVNode",[kl]:"createElementVNode",[Gn]:"createCommentVNode",[Al]:"createTextVNode",[Ru]:"createStaticVNode",[Nl]:"resolveComponent",[Il]:"resolveDynamicComponent",[Ol]:"resolveDirective",[Rl]:"resolveFilter",[Pl]:"withDirectives",[Ml]:"renderList",[Pu]:"renderSlot",[Mu]:"createSlots",[cs]:"toDisplayString",[Li]:"mergeProps",[Ll]:"normalizeClass",[Dl]:"normalizeStyle",[Dn]:"normalizeProps",[Yn]:"guardReactiveProps",[Vl]:"toHandlers",[Ws]:"camelize",[gv]:"capitalize",[Gs]:"toHandlerKey",[Di]:"setBlockTracking",[mv]:"pushScopeId",[bv]:"popScopeId",[Fl]:"withCtx",[yv]:"unref",[Cv]:"isRef",[$l]:"withMemo",[Lu]:"isMemoSame"};function Sv(e){Object.getOwnPropertySymbols(e).forEach(t=>{Jr[t]=e[t]})}const lt={start:{line:1,column:1,offset:0},end:{line:1,column:1,offset:0},source:""};function wv(e,t=""){return{type:0,source:t,children:e,helpers:new Set,components:[],directives:[],hoists:[],imports:[],cached:[],temps:0,codegenNode:void 0,loc:lt}}function Vn(e,t,r,n,i,s,l,o=!1,a=!1,c=!1,u=lt){return e&&(o?(e.helper(_r),e.helper(Zr(e.inSSR,c))):e.helper(Qr(e.inSSR,c)),l&&e.helper(Pl)),{type:13,tag:t,props:r,children:n,patchFlag:i,dynamicProps:s,directives:l,isBlock:o,disableTracking:a,isComponent:c,loc:u}}function yr(e,t=lt){return{type:17,loc:t,elements:e}}function ct(e,t=lt){return{type:15,loc:t,properties:e}}function Ee(e,t){return{type:16,loc:lt,key:Q(e)?Z(e,!0):e,value:t}}function Z(e,t=!1,r=lt,n=0){return{type:4,loc:r,content:e,isStatic:t,constType:t?3:n}}function bt(e,t=lt){return{type:8,loc:t,children:e}}function Ie(e,t=[],r=lt){return{type:14,loc:r,callee:e,arguments:t}}function Xr(e,t=void 0,r=!1,n=!1,i=lt){return{type:18,params:e,returns:t,newline:r,isSlot:n,loc:i}}function Ys(e,t,r,n=!0){return{type:19,test:e,consequent:t,alternate:r,newline:n,loc:lt}}function _v(e,t,r=!1,n=!1){return{type:20,index:e,value:t,needPauseTracking:r,inVOnce:n,needArraySpread:!1,loc:lt}}function Tv(e){return{type:21,body:e,loc:lt}}function Qr(e,t){return e||t?El:kl}function Zr(e,t){return e||t?Iu:Ou}function Ul(e,{helper:t,removeHelper:r,inSSR:n}){e.isBlock||(e.isBlock=!0,r(Qr(n,e.isComponent)),t(_r),t(Zr(n,e.isComponent)))}const Bo=new Uint8Array([123,123]),Ho=new Uint8Array([125,125]);function jo(e){return e>=97&&e<=122||e>=65&&e<=90}function rt(e){return e===32||e===10||e===9||e===12||e===13}function Xt(e){return e===47||e===62||rt(e)}function Vi(e){const t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}const De={Cdata:new Uint8Array([67,68,65,84,65,91]),CdataEnd:new Uint8Array([93,93,62]),CommentEnd:new Uint8Array([45,45,62]),ScriptEnd:new Uint8Array([60,47,115,99,114,105,112,116]),StyleEnd:new Uint8Array([60,47,115,116,121,108,101]),TitleEnd:new Uint8Array([60,47,116,105,116,108,101]),TextareaEnd:new Uint8Array([60,47,116,101,120,116,97,114,101,97])};class xv{constructor(t,r){this.stack=t,this.cbs=r,this.state=1,this.buffer="",this.sectionStart=0,this.index=0,this.entityStart=0,this.baseState=1,this.inRCDATA=!1,this.inXML=!1,this.inVPre=!1,this.newlines=[],this.mode=0,this.delimiterOpen=Bo,this.delimiterClose=Ho,this.delimiterIndex=-1,this.currentSequence=void 0,this.sequenceIndex=0}get inSFCRoot(){return this.mode===2&&this.stack.length===0}reset(){this.state=1,this.mode=0,this.buffer="",this.sectionStart=0,this.index=0,this.baseState=1,this.inRCDATA=!1,this.currentSequence=void 0,this.newlines.length=0,this.delimiterOpen=Bo,this.delimiterClose=Ho}getPos(t){let r=1,n=t+1;const i=this.newlines.length;let s=-1;if(i>100){let l=-1,o=i;for(;l+1<o;){const a=l+o>>>1;this.newlines[a]<t?l=a:o=a}s=l}else for(let l=i-1;l>=0;l--)if(t>this.newlines[l]){s=l;break}return s>=0&&(r=s+2,n=t-this.newlines[s]),{column:n,line:r,offset:t}}peek(){return this.buffer.charCodeAt(this.index+1)}stateText(t){t===60?(this.index>this.sectionStart&&this.cbs.ontext(this.sectionStart,this.index),this.state=5,this.sectionStart=this.index):!this.inVPre&&t===this.delimiterOpen[0]&&(this.state=2,this.delimiterIndex=0,this.stateInterpolationOpen(t))}stateInterpolationOpen(t){if(t===this.delimiterOpen[this.delimiterIndex])if(this.delimiterIndex===this.delimiterOpen.length-1){const r=this.index+1-this.delimiterOpen.length;r>this.sectionStart&&this.cbs.ontext(this.sectionStart,r),this.state=3,this.sectionStart=r}else this.delimiterIndex++;else this.inRCDATA?(this.state=32,this.stateInRCDATA(t)):(this.state=1,this.stateText(t))}stateInterpolation(t){t===this.delimiterClose[0]&&(this.state=4,this.delimiterIndex=0,this.stateInterpolationClose(t))}stateInterpolationClose(t){t===this.delimiterClose[this.delimiterIndex]?this.delimiterIndex===this.delimiterClose.length-1?(this.cbs.oninterpolation(this.sectionStart,this.index+1),this.inRCDATA?this.state=32:this.state=1,this.sectionStart=this.index+1):this.delimiterIndex++:(this.state=3,this.stateInterpolation(t))}stateSpecialStartSequence(t){const r=this.sequenceIndex===this.currentSequence.length;if(!(r?Xt(t):(t|32)===this.currentSequence[this.sequenceIndex]))this.inRCDATA=!1;else if(!r){this.sequenceIndex++;return}this.sequenceIndex=0,this.state=6,this.stateInTagName(t)}stateInRCDATA(t){if(this.sequenceIndex===this.currentSequence.length){if(t===62||rt(t)){const r=this.index-this.currentSequence.length;if(this.sectionStart<r){const n=this.index;this.index=r,this.cbs.ontext(this.sectionStart,r),this.index=n}this.sectionStart=r+2,this.stateInClosingTagName(t),this.inRCDATA=!1;return}this.sequenceIndex=0}(t|32)===this.currentSequence[this.sequenceIndex]?this.sequenceIndex+=1:this.sequenceIndex===0?this.currentSequence===De.TitleEnd||this.currentSequence===De.TextareaEnd&&!this.inSFCRoot?!this.inVPre&&t===this.delimiterOpen[0]&&(this.state=2,this.delimiterIndex=0,this.stateInterpolationOpen(t)):this.fastForwardTo(60)&&(this.sequenceIndex=1):this.sequenceIndex=+(t===60)}stateCDATASequence(t){t===De.Cdata[this.sequenceIndex]?++this.sequenceIndex===De.Cdata.length&&(this.state=28,this.currentSequence=De.CdataEnd,this.sequenceIndex=0,this.sectionStart=this.index+1):(this.sequenceIndex=0,this.state=23,this.stateInDeclaration(t))}fastForwardTo(t){for(;++this.index<this.buffer.length;){const r=this.buffer.charCodeAt(this.index);if(r===10&&this.newlines.push(this.index),r===t)return!0}return this.index=this.buffer.length-1,!1}stateInCommentLike(t){t===this.currentSequence[this.sequenceIndex]?++this.sequenceIndex===this.currentSequence.length&&(this.currentSequence===De.CdataEnd?this.cbs.oncdata(this.sectionStart,this.index-2):this.cbs.oncomment(this.sectionStart,this.index-2),this.sequenceIndex=0,this.sectionStart=this.index+1,this.state=1):this.sequenceIndex===0?this.fastForwardTo(this.currentSequence[0])&&(this.sequenceIndex=1):t!==this.currentSequence[this.sequenceIndex-1]&&(this.sequenceIndex=0)}startSpecial(t,r){this.enterRCDATA(t,r),this.state=31}enterRCDATA(t,r){this.inRCDATA=!0,this.currentSequence=t,this.sequenceIndex=r}stateBeforeTagName(t){t===33?(this.state=22,this.sectionStart=this.index+1):t===63?(this.state=24,this.sectionStart=this.index+1):jo(t)?(this.sectionStart=this.index,this.mode===0?this.state=6:this.inSFCRoot?this.state=34:this.inXML?this.state=6:t===116?this.state=30:this.state=t===115?29:6):t===47?this.state=8:(this.state=1,this.stateText(t))}stateInTagName(t){Xt(t)&&this.handleTagName(t)}stateInSFCRootTagName(t){if(Xt(t)){const r=this.buffer.slice(this.sectionStart,this.index);r!=="template"&&this.enterRCDATA(Vi("</"+r),0),this.handleTagName(t)}}handleTagName(t){this.cbs.onopentagname(this.sectionStart,this.index),this.sectionStart=-1,this.state=11,this.stateBeforeAttrName(t)}stateBeforeClosingTagName(t){rt(t)||(t===62?(this.state=1,this.sectionStart=this.index+1):(this.state=jo(t)?9:27,this.sectionStart=this.index))}stateInClosingTagName(t){(t===62||rt(t))&&(this.cbs.onclosetag(this.sectionStart,this.index),this.sectionStart=-1,this.state=10,this.stateAfterClosingTagName(t))}stateAfterClosingTagName(t){t===62&&(this.state=1,this.sectionStart=this.index+1)}stateBeforeAttrName(t){t===62?(this.cbs.onopentagend(this.index),this.inRCDATA?this.state=32:this.state=1,this.sectionStart=this.index+1):t===47?this.state=7:t===60&&this.peek()===47?(this.cbs.onopentagend(this.index),this.state=5,this.sectionStart=this.index):rt(t)||this.handleAttrStart(t)}handleAttrStart(t){t===118&&this.peek()===45?(this.state=13,this.sectionStart=this.index):t===46||t===58||t===64||t===35?(this.cbs.ondirname(this.index,this.index+1),this.state=14,this.sectionStart=this.index+1):(this.state=12,this.sectionStart=this.index)}stateInSelfClosingTag(t){t===62?(this.cbs.onselfclosingtag(this.index),this.state=1,this.sectionStart=this.index+1,this.inRCDATA=!1):rt(t)||(this.state=11,this.stateBeforeAttrName(t))}stateInAttrName(t){(t===61||Xt(t))&&(this.cbs.onattribname(this.sectionStart,this.index),this.handleAttrNameEnd(t))}stateInDirName(t){t===61||Xt(t)?(this.cbs.ondirname(this.sectionStart,this.index),this.handleAttrNameEnd(t)):t===58?(this.cbs.ondirname(this.sectionStart,this.index),this.state=14,this.sectionStart=this.index+1):t===46&&(this.cbs.ondirname(this.sectionStart,this.index),this.state=16,this.sectionStart=this.index+1)}stateInDirArg(t){t===61||Xt(t)?(this.cbs.ondirarg(this.sectionStart,this.index),this.handleAttrNameEnd(t)):t===91?this.state=15:t===46&&(this.cbs.ondirarg(this.sectionStart,this.index),this.state=16,this.sectionStart=this.index+1)}stateInDynamicDirArg(t){t===93?this.state=14:(t===61||Xt(t))&&(this.cbs.ondirarg(this.sectionStart,this.index+1),this.handleAttrNameEnd(t))}stateInDirModifier(t){t===61||Xt(t)?(this.cbs.ondirmodifier(this.sectionStart,this.index),this.handleAttrNameEnd(t)):t===46&&(this.cbs.ondirmodifier(this.sectionStart,this.index),this.sectionStart=this.index+1)}handleAttrNameEnd(t){this.sectionStart=this.index,this.state=17,this.cbs.onattribnameend(this.index),this.stateAfterAttrName(t)}stateAfterAttrName(t){t===61?this.state=18:t===47||t===62?(this.cbs.onattribend(0,this.sectionStart),this.sectionStart=-1,this.state=11,this.stateBeforeAttrName(t)):rt(t)||(this.cbs.onattribend(0,this.sectionStart),this.handleAttrStart(t))}stateBeforeAttrValue(t){t===34?(this.state=19,this.sectionStart=this.index+1):t===39?(this.state=20,this.sectionStart=this.index+1):rt(t)||(this.sectionStart=this.index,this.state=21,this.stateInAttrValueNoQuotes(t))}handleInAttrValue(t,r){(t===r||this.fastForwardTo(r))&&(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=-1,this.cbs.onattribend(r===34?3:2,this.index+1),this.state=11)}stateInAttrValueDoubleQuotes(t){this.handleInAttrValue(t,34)}stateInAttrValueSingleQuotes(t){this.handleInAttrValue(t,39)}stateInAttrValueNoQuotes(t){rt(t)||t===62?(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=-1,this.cbs.onattribend(1,this.index),this.state=11,this.stateBeforeAttrName(t)):(t===39||t===60||t===61||t===96)&&this.cbs.onerr(18,this.index)}stateBeforeDeclaration(t){t===91?(this.state=26,this.sequenceIndex=0):this.state=t===45?25:23}stateInDeclaration(t){(t===62||this.fastForwardTo(62))&&(this.state=1,this.sectionStart=this.index+1)}stateInProcessingInstruction(t){(t===62||this.fastForwardTo(62))&&(this.cbs.onprocessinginstruction(this.sectionStart,this.index),this.state=1,this.sectionStart=this.index+1)}stateBeforeComment(t){t===45?(this.state=28,this.currentSequence=De.CommentEnd,this.sequenceIndex=2,this.sectionStart=this.index+1):this.state=23}stateInSpecialComment(t){(t===62||this.fastForwardTo(62))&&(this.cbs.oncomment(this.sectionStart,this.index),this.state=1,this.sectionStart=this.index+1)}stateBeforeSpecialS(t){t===De.ScriptEnd[3]?this.startSpecial(De.ScriptEnd,4):t===De.StyleEnd[3]?this.startSpecial(De.StyleEnd,4):(this.state=6,this.stateInTagName(t))}stateBeforeSpecialT(t){t===De.TitleEnd[3]?this.startSpecial(De.TitleEnd,4):t===De.TextareaEnd[3]?this.startSpecial(De.TextareaEnd,4):(this.state=6,this.stateInTagName(t))}startEntity(){}stateInEntity(){}parse(t){for(this.buffer=t;this.index<this.buffer.length;){const r=this.buffer.charCodeAt(this.index);switch(r===10&&this.state!==33&&this.newlines.push(this.index),this.state){case 1:{this.stateText(r);break}case 2:{this.stateInterpolationOpen(r);break}case 3:{this.stateInterpolation(r);break}case 4:{this.stateInterpolationClose(r);break}case 31:{this.stateSpecialStartSequence(r);break}case 32:{this.stateInRCDATA(r);break}case 26:{this.stateCDATASequence(r);break}case 19:{this.stateInAttrValueDoubleQuotes(r);break}case 12:{this.stateInAttrName(r);break}case 13:{this.stateInDirName(r);break}case 14:{this.stateInDirArg(r);break}case 15:{this.stateInDynamicDirArg(r);break}case 16:{this.stateInDirModifier(r);break}case 28:{this.stateInCommentLike(r);break}case 27:{this.stateInSpecialComment(r);break}case 11:{this.stateBeforeAttrName(r);break}case 6:{this.stateInTagName(r);break}case 34:{this.stateInSFCRootTagName(r);break}case 9:{this.stateInClosingTagName(r);break}case 5:{this.stateBeforeTagName(r);break}case 17:{this.stateAfterAttrName(r);break}case 20:{this.stateInAttrValueSingleQuotes(r);break}case 18:{this.stateBeforeAttrValue(r);break}case 8:{this.stateBeforeClosingTagName(r);break}case 10:{this.stateAfterClosingTagName(r);break}case 29:{this.stateBeforeSpecialS(r);break}case 30:{this.stateBeforeSpecialT(r);break}case 21:{this.stateInAttrValueNoQuotes(r);break}case 7:{this.stateInSelfClosingTag(r);break}case 23:{this.stateInDeclaration(r);break}case 22:{this.stateBeforeDeclaration(r);break}case 25:{this.stateBeforeComment(r);break}case 24:{this.stateInProcessingInstruction(r);break}case 33:{this.stateInEntity();break}}this.index++}this.cleanup(),this.finish()}cleanup(){this.sectionStart!==this.index&&(this.state===1||this.state===32&&this.sequenceIndex===0?(this.cbs.ontext(this.sectionStart,this.index),this.sectionStart=this.index):(this.state===19||this.state===20||this.state===21)&&(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=this.index))}finish(){this.handleTrailingData(),this.cbs.onend()}handleTrailingData(){const t=this.buffer.length;this.sectionStart>=t||(this.state===28?this.currentSequence===De.CdataEnd?this.cbs.oncdata(this.sectionStart,t):this.cbs.oncomment(this.sectionStart,t):this.state===6||this.state===11||this.state===18||this.state===17||this.state===12||this.state===13||this.state===14||this.state===15||this.state===16||this.state===20||this.state===19||this.state===21||this.state===9||this.cbs.ontext(this.sectionStart,t))}emitCodePoint(t,r){}}function Ko(e,{compatConfig:t}){const r=t&&t[e];return e==="MODE"?r||3:r}function Cr(e,t){const r=Ko("MODE",t),n=Ko(e,t);return r===3?n===!0:n!==!1}function Fn(e,t,r,...n){return Cr(e,t)}function zl(e){throw e}function Du(e){}function pe(e,t,r,n){const i=`https://vuejs.org/error-reference/#compiler-${e}`,s=new SyntaxError(String(i));return s.code=e,s.loc=t,s}const Qe=e=>e.type===4&&e.isStatic;function Vu(e){switch(e){case"Teleport":case"teleport":return Tn;case"Suspense":case"suspense":return xl;case"KeepAlive":case"keep-alive":return Mi;case"BaseTransition":case"base-transition":return Nu}}const Ev=/^$|^\d|[^\$\w\xA0-\uFFFF]/,Bl=e=>!Ev.test(e),Fu=/[A-Za-z_$\xA0-\uFFFF]/,kv=/[\.\?\w$\xA0-\uFFFF]/,Av=/\s+[.[]\s*|\s*[.[]\s+/g,$u=e=>e.type===4?e.content:e.loc.source,Nv=e=>{const t=$u(e).trim().replace(Av,o=>o.trim());let r=0,n=[],i=0,s=0,l=null;for(let o=0;o<t.length;o++){const a=t.charAt(o);switch(r){case 0:if(a==="[")n.push(r),r=1,i++;else if(a==="(")n.push(r),r=2,s++;else if(!(o===0?Fu:kv).test(a))return!1;break;case 1:a==="'"||a==='"'||a==="`"?(n.push(r),r=3,l=a):a==="["?i++:a==="]"&&(--i||(r=n.pop()));break;case 2:if(a==="'"||a==='"'||a==="`")n.push(r),r=3,l=a;else if(a==="(")s++;else if(a===")"){if(o===t.length-1)return!1;--s||(r=n.pop())}break;case 3:a===l&&(r=n.pop(),l=null);break}}return!i&&!s},Uu=Nv,Iv=/^\s*(?:async\s*)?(?:\([^)]*?\)|[\w$_]+)\s*(?::[^=]+)?=>|^\s*(?:async\s+)?function(?:\s+[\w$]+)?\s*\(/,Ov=e=>Iv.test($u(e)),Rv=Ov;function at(e,t,r=!1){for(let n=0;n<e.props.length;n++){const i=e.props[n];if(i.type===7&&(r||i.exp)&&(Q(t)?i.name===t:t.test(i.name)))return i}}function us(e,t,r=!1,n=!1){for(let i=0;i<e.props.length;i++){const s=e.props[i];if(s.type===6){if(r)continue;if(s.name===t&&(s.value||n))return s}else if(s.name==="bind"&&(s.exp||n)&&pr(s.arg,t))return s}}function pr(e,t){return!!(e&&Qe(e)&&e.content===t)}function Pv(e){return e.props.some(t=>t.type===7&&t.name==="bind"&&(!t.arg||t.arg.type!==4||!t.arg.isStatic))}function ks(e){return e.type===5||e.type===2}function qo(e){return e.type===7&&e.name==="pre"}function Mv(e){return e.type===7&&e.name==="slot"}function Fi(e){return e.type===1&&e.tagType===3}function $i(e){return e.type===1&&e.tagType===2}const Lv=new Set([Dn,Yn]);function zu(e,t=[]){if(e&&!Q(e)&&e.type===14){const r=e.callee;if(!Q(r)&&Lv.has(r))return zu(e.arguments[0],t.concat(e))}return[e,t]}function Ui(e,t,r){let n,i=e.type===13?e.props:e.arguments[2],s=[],l;if(i&&!Q(i)&&i.type===14){const o=zu(i);i=o[0],s=o[1],l=s[s.length-1]}if(i==null||Q(i))n=ct([t]);else if(i.type===14){const o=i.arguments[0];!Q(o)&&o.type===15?Wo(t,o)||o.properties.unshift(t):i.callee===Vl?n=Ie(r.helper(Li),[ct([t]),i]):i.arguments.unshift(ct([t])),!n&&(n=i)}else i.type===15?(Wo(t,i)||i.properties.unshift(t),n=i):(n=Ie(r.helper(Li),[ct([t]),i]),l&&l.callee===Yn&&(l=s[s.length-2]));e.type===13?l?l.arguments[0]=n:e.props=n:l?l.arguments[0]=n:e.arguments[2]=n}function Wo(e,t){let r=!1;if(e.key.type===4){const n=e.key.content;r=t.properties.some(i=>i.key.type===4&&i.key.content===n)}return r}function $n(e,t){return`_${t}_${e.replace(/[^\w]/g,(r,n)=>r==="-"?"_":e.charCodeAt(n).toString())}`}function Dv(e){return e.type===14&&e.callee===$l?e.arguments[1].returns:e}const Vv=/([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/;function Bu(e){for(let t=0;t<e.length;t++)if(!rt(e.charCodeAt(t)))return!1;return!0}function Hl(e){return e.type===2&&Bu(e.content)||e.type===12&&Hl(e.content)}function Hu(e){return e.type===3||Hl(e)}const ju={parseMode:"base",ns:0,delimiters:["{{","}}"],getNamespace:()=>0,isVoidTag:Lr,isPreTag:Lr,isIgnoreNewlineTag:Lr,isCustomElement:Lr,onError:zl,onWarn:Du,comments:!1,prefixIdentifiers:!1};let oe=ju,Un=null,Ht="",Fe=null,te=null,We="",Rt=-1,ur=-1,jl=0,tr=!1,Js=null;const ve=[],Ce=new xv(ve,{onerr:Ot,ontext(e,t){ai(Oe(e,t),e,t)},ontextentity(e,t,r){ai(e,t,r)},oninterpolation(e,t){if(tr)return ai(Oe(e,t),e,t);let r=e+Ce.delimiterOpen.length,n=t-Ce.delimiterClose.length;for(;rt(Ht.charCodeAt(r));)r++;for(;rt(Ht.charCodeAt(n-1));)n--;let i=Oe(r,n);i.includes("&")&&(i=oe.decodeEntities(i,!1)),Xs({type:5,content:pi(i,!1,we(r,n)),loc:we(e,t)})},onopentagname(e,t){const r=Oe(e,t);Fe={type:1,tag:r,ns:oe.getNamespace(r,ve[0],oe.ns),tagType:0,props:[],children:[],loc:we(e-1,t),codegenNode:void 0}},onopentagend(e){Yo(e)},onclosetag(e,t){const r=Oe(e,t);if(!oe.isVoidTag(r)){let n=!1;for(let i=0;i<ve.length;i++)if(ve[i].tag.toLowerCase()===r.toLowerCase()){n=!0,i>0&&Ot(24,ve[0].loc.start.offset);for(let l=0;l<=i;l++){const o=ve.shift();hi(o,t,l<i)}break}n||Ot(23,Ku(e,60))}},onselfclosingtag(e){const t=Fe.tag;Fe.isSelfClosing=!0,Yo(e),ve[0]&&ve[0].tag===t&&hi(ve.shift(),e)},onattribname(e,t){te={type:6,name:Oe(e,t),nameLoc:we(e,t),value:void 0,loc:we(e)}},ondirname(e,t){const r=Oe(e,t),n=r==="."||r===":"?"bind":r==="@"?"on":r==="#"?"slot":r.slice(2);if(!tr&&n===""&&Ot(26,e),tr||n==="")te={type:6,name:r,nameLoc:we(e,t),value:void 0,loc:we(e)};else if(te={type:7,name:n,rawName:r,exp:void 0,arg:void 0,modifiers:r==="."?[Z("prop")]:[],loc:we(e)},n==="pre"){tr=Ce.inVPre=!0,Js=Fe;const i=Fe.props;for(let s=0;s<i.length;s++)i[s].type===7&&(i[s]=Wv(i[s]))}},ondirarg(e,t){if(e===t)return;const r=Oe(e,t);if(tr&&!qo(te))te.name+=r,vr(te.nameLoc,t);else{const n=r[0]!=="[";te.arg=pi(n?r:r.slice(1,-1),n,we(e,t),n?3:0)}},ondirmodifier(e,t){const r=Oe(e,t);if(tr&&!qo(te))te.name+="."+r,vr(te.nameLoc,t);else if(te.name==="slot"){const n=te.arg;n&&(n.content+="."+r,vr(n.loc,t))}else{const n=Z(r,!0,we(e,t));te.modifiers.push(n)}},onattribdata(e,t){We+=Oe(e,t),Rt<0&&(Rt=e),ur=t},onattribentity(e,t,r){We+=e,Rt<0&&(Rt=t),ur=r},onattribnameend(e){const t=te.loc.start.offset,r=Oe(t,e);te.type===7&&(te.rawName=r),Fe.props.some(n=>(n.type===7?n.rawName:n.name)===r)&&Ot(2,t)},onattribend(e,t){if(Fe&&te){if(vr(te.loc,t),e!==0)if(We.includes("&")&&(We=oe.decodeEntities(We,!0)),te.type===6)te.name==="class"&&(We=Wu(We).trim()),e===1&&!We&&Ot(13,t),te.value={type:2,content:We,loc:e===1?we(Rt,ur):we(Rt-1,ur+1)},Ce.inSFCRoot&&Fe.tag==="template"&&te.name==="lang"&&We&&We!=="html"&&Ce.enterRCDATA(Vi("</template"),0);else{let r=0;te.exp=pi(We,!1,we(Rt,ur),0,r),te.name==="for"&&(te.forParseResult=$v(te.exp));let n=-1;te.name==="bind"&&(n=te.modifiers.findIndex(i=>i.content==="sync"))>-1&&Fn("COMPILER_V_BIND_SYNC",oe,te.loc,te.arg.loc.source)&&(te.name="model",te.modifiers.splice(n,1))}(te.type!==7||te.name!=="pre")&&Fe.props.push(te)}We="",Rt=ur=-1},oncomment(e,t){oe.comments&&Xs({type:3,content:Oe(e,t),loc:we(e-4,t+3)})},onend(){const e=Ht.length;for(let t=0;t<ve.length;t++)hi(ve[t],e-1),Ot(24,ve[t].loc.start.offset)},oncdata(e,t){ve[0].ns!==0?ai(Oe(e,t),e,t):Ot(1,e-9)},onprocessinginstruction(e){(ve[0]?ve[0].ns:oe.ns)===0&&Ot(21,e-1)}}),Go=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,Fv=/^\(|\)$/g;function $v(e){const t=e.loc,r=e.content,n=r.match(Vv);if(!n)return;const[,i,s]=n,l=(f,p,v=!1)=>{const y=t.start.offset+p,b=y+f.length;return pi(f,!1,we(y,b),0,v?1:0)},o={source:l(s.trim(),r.indexOf(s,i.length)),value:void 0,key:void 0,index:void 0,finalized:!1};let a=i.trim().replace(Fv,"").trim();const c=i.indexOf(a),u=a.match(Go);if(u){a=a.replace(Go,"").trim();const f=u[1].trim();let p;if(f&&(p=r.indexOf(f,c+a.length),o.key=l(f,p,!0)),u[2]){const v=u[2].trim();v&&(o.index=l(v,r.indexOf(v,o.key?p+f.length:c+a.length),!0))}}return a&&(o.value=l(a,c,!0)),o}function Oe(e,t){return Ht.slice(e,t)}function Yo(e){Ce.inSFCRoot&&(Fe.innerLoc=we(e+1,e+1)),Xs(Fe);const{tag:t,ns:r}=Fe;r===0&&oe.isPreTag(t)&&jl++,oe.isVoidTag(t)?hi(Fe,e):(ve.unshift(Fe),(r===1||r===2)&&(Ce.inXML=!0)),Fe=null}function ai(e,t,r){{const s=ve[0]&&ve[0].tag;s!=="script"&&s!=="style"&&e.includes("&")&&(e=oe.decodeEntities(e,!1))}const n=ve[0]||Un,i=n.children[n.children.length-1];i&&i.type===2?(i.content+=e,vr(i.loc,r)):n.children.push({type:2,content:e,loc:we(t,r)})}function hi(e,t,r=!1){r?vr(e.loc,Ku(t,60)):vr(e.loc,Uv(t,62)+1),Ce.inSFCRoot&&(e.children.length?e.innerLoc.end=ee({},e.children[e.children.length-1].loc.end):e.innerLoc.end=ee({},e.innerLoc.start),e.innerLoc.source=Oe(e.innerLoc.start.offset,e.innerLoc.end.offset));const{tag:n,ns:i,children:s}=e;if(tr||(n==="slot"?e.tagType=2:Jo(e)?e.tagType=3:Bv(e)&&(e.tagType=1)),Ce.inRCDATA||(e.children=qu(s)),i===0&&oe.isIgnoreNewlineTag(n)){const l=s[0];l&&l.type===2&&(l.content=l.content.replace(/^\r?\n/,""))}i===0&&oe.isPreTag(n)&&jl--,Js===e&&(tr=Ce.inVPre=!1,Js=null),Ce.inXML&&(ve[0]?ve[0].ns:oe.ns)===0&&(Ce.inXML=!1);{const l=e.props;if(!Ce.inSFCRoot&&Cr("COMPILER_NATIVE_TEMPLATE",oe)&&e.tag==="template"&&!Jo(e)){const a=ve[0]||Un,c=a.children.indexOf(e);a.children.splice(c,1,...e.children)}const o=l.find(a=>a.type===6&&a.name==="inline-template");o&&Fn("COMPILER_INLINE_TEMPLATE",oe,o.loc)&&e.children.length&&(o.value={type:2,content:Oe(e.children[0].loc.start.offset,e.children[e.children.length-1].loc.end.offset),loc:o.loc})}}function Uv(e,t){let r=e;for(;Ht.charCodeAt(r)!==t&&r<Ht.length-1;)r++;return r}function Ku(e,t){let r=e;for(;Ht.charCodeAt(r)!==t&&r>=0;)r--;return r}const zv=new Set(["if","else","else-if","for","slot"]);function Jo({tag:e,props:t}){if(e==="template"){for(let r=0;r<t.length;r++)if(t[r].type===7&&zv.has(t[r].name))return!0}return!1}function Bv({tag:e,props:t}){if(oe.isCustomElement(e))return!1;if(e==="component"||Hv(e.charCodeAt(0))||Vu(e)||oe.isBuiltInComponent&&oe.isBuiltInComponent(e)||oe.isNativeTag&&!oe.isNativeTag(e))return!0;for(let r=0;r<t.length;r++){const n=t[r];if(n.type===6){if(n.name==="is"&&n.value){if(n.value.content.startsWith("vue:"))return!0;if(Fn("COMPILER_IS_ON_ELEMENT",oe,n.loc))return!0}}else if(n.name==="bind"&&pr(n.arg,"is")&&Fn("COMPILER_IS_ON_ELEMENT",oe,n.loc))return!0}return!1}function Hv(e){return e>64&&e<91}const jv=/\r\n/g;function qu(e){const t=oe.whitespace!=="preserve";let r=!1;for(let n=0;n<e.length;n++){const i=e[n];if(i.type===2)if(jl)i.content=i.content.replace(jv,`
`);else if(Bu(i.content)){const s=e[n-1]&&e[n-1].type,l=e[n+1]&&e[n+1].type;!s||!l||t&&(s===3&&(l===3||l===1)||s===1&&(l===3||l===1&&Kv(i.content)))?(r=!0,e[n]=null):i.content=" "}else t&&(i.content=Wu(i.content))}return r?e.filter(Boolean):e}function Kv(e){for(let t=0;t<e.length;t++){const r=e.charCodeAt(t);if(r===10||r===13)return!0}return!1}function Wu(e){let t="",r=!1;for(let n=0;n<e.length;n++)rt(e.charCodeAt(n))?r||(t+=" ",r=!0):(t+=e[n],r=!1);return t}function Xs(e){(ve[0]||Un).children.push(e)}function we(e,t){return{start:Ce.getPos(e),end:t==null?t:Ce.getPos(t),source:t==null?t:Oe(e,t)}}function qv(e){return we(e.start.offset,e.end.offset)}function vr(e,t){e.end=Ce.getPos(t),e.source=Oe(e.start.offset,t)}function Wv(e){const t={type:6,name:e.rawName,nameLoc:we(e.loc.start.offset,e.loc.start.offset+e.rawName.length),value:void 0,loc:e.loc};if(e.exp){const r=e.exp.loc;r.end.offset<e.loc.end.offset&&(r.start.offset--,r.start.column--,r.end.offset++,r.end.column++),t.value={type:2,content:e.exp.content,loc:r}}return t}function pi(e,t=!1,r,n=0,i=0){return Z(e,t,r,n)}function Ot(e,t,r){oe.onError(pe(e,we(t,t)))}function Gv(){Ce.reset(),Fe=null,te=null,We="",Rt=-1,ur=-1,ve.length=0}function Yv(e,t){if(Gv(),Ht=e,oe=ee({},ju),t){let i;for(i in t)t[i]!=null&&(oe[i]=t[i])}Ce.mode=oe.parseMode==="html"?1:oe.parseMode==="sfc"?2:0,Ce.inXML=oe.ns===1||oe.ns===2;const r=t&&t.delimiters;r&&(Ce.delimiterOpen=Vi(r[0]),Ce.delimiterClose=Vi(r[1]));const n=Un=wv([],e);return Ce.parse(Ht),n.loc=we(0,e.length),n.children=qu(n.children),Un=null,n}function Jv(e,t){vi(e,void 0,t,!!Gu(e))}function Gu(e){const t=e.children.filter(r=>r.type!==3);return t.length===1&&t[0].type===1&&!$i(t[0])?t[0]:null}function vi(e,t,r,n=!1,i=!1){const{children:s}=e,l=[];for(let u=0;u<s.length;u++){const f=s[u];if(f.type===1&&f.tagType===0){const p=n?0:it(f,r);if(p>0){if(p>=2){f.codegenNode.patchFlag=-1,l.push(f);continue}}else{const v=f.codegenNode;if(v.type===13){const y=v.patchFlag;if((y===void 0||y===512||y===1)&&Ju(f,r)>=2){const b=Xu(f);b&&(v.props=r.hoist(b))}v.dynamicProps&&(v.dynamicProps=r.hoist(v.dynamicProps))}}}else if(f.type===12&&(n?0:it(f,r))>=2){f.codegenNode.type===14&&f.codegenNode.arguments.length>0&&f.codegenNode.arguments.push("-1"),l.push(f);continue}if(f.type===1){const p=f.tagType===1;p&&r.scopes.vSlot++,vi(f,e,r,!1,i),p&&r.scopes.vSlot--}else if(f.type===11)vi(f,e,r,f.children.length===1,!0);else if(f.type===9)for(let p=0;p<f.branches.length;p++)vi(f.branches[p],e,r,f.branches[p].children.length===1,i)}let o=!1;if(l.length===s.length&&e.type===1){if(e.tagType===0&&e.codegenNode&&e.codegenNode.type===13&&z(e.codegenNode.children))e.codegenNode.children=a(yr(e.codegenNode.children)),o=!0;else if(e.tagType===1&&e.codegenNode&&e.codegenNode.type===13&&e.codegenNode.children&&!z(e.codegenNode.children)&&e.codegenNode.children.type===15){const u=c(e.codegenNode,"default");u&&(u.returns=a(yr(u.returns)),o=!0)}else if(e.tagType===3&&t&&t.type===1&&t.tagType===1&&t.codegenNode&&t.codegenNode.type===13&&t.codegenNode.children&&!z(t.codegenNode.children)&&t.codegenNode.children.type===15){const u=at(e,"slot",!0),f=u&&u.arg&&c(t.codegenNode,u.arg);f&&(f.returns=a(yr(f.returns)),o=!0)}}if(!o)for(const u of l)u.codegenNode=r.cache(u.codegenNode);function a(u){const f=r.cache(u);return f.needArraySpread=!0,f}function c(u,f){if(u.children&&!z(u.children)&&u.children.type===15){const p=u.children.properties.find(v=>v.key===f||v.key.content===f);return p&&p.value}}l.length&&r.transformHoist&&r.transformHoist(s,r,e)}function it(e,t){const{constantCache:r}=t;switch(e.type){case 1:if(e.tagType!==0)return 0;const n=r.get(e);if(n!==void 0)return n;const i=e.codegenNode;if(i.type!==13||i.isBlock&&e.tag!=="svg"&&e.tag!=="foreignObject"&&e.tag!=="math")return 0;if(i.patchFlag===void 0){let l=3;const o=Ju(e,t);if(o===0)return r.set(e,0),0;o<l&&(l=o);for(let a=0;a<e.children.length;a++){const c=it(e.children[a],t);if(c===0)return r.set(e,0),0;c<l&&(l=c)}if(l>1)for(let a=0;a<e.props.length;a++){const c=e.props[a];if(c.type===7&&c.name==="bind"&&c.exp){const u=it(c.exp,t);if(u===0)return r.set(e,0),0;u<l&&(l=u)}}if(i.isBlock){for(let a=0;a<e.props.length;a++)if(e.props[a].type===7)return r.set(e,0),0;t.removeHelper(_r),t.removeHelper(Zr(t.inSSR,i.isComponent)),i.isBlock=!1,t.helper(Qr(t.inSSR,i.isComponent))}return r.set(e,l),l}else return r.set(e,0),0;case 2:case 3:return 3;case 9:case 11:case 10:return 0;case 5:case 12:return it(e.content,t);case 4:return e.constType;case 8:let s=3;for(let l=0;l<e.children.length;l++){const o=e.children[l];if(Q(o)||Be(o))continue;const a=it(o,t);if(a===0)return 0;a<s&&(s=a)}return s;case 20:return 2;default:return 0}}const Xv=new Set([Ll,Dl,Dn,Yn]);function Yu(e,t){if(e.type===14&&!Q(e.callee)&&Xv.has(e.callee)){const r=e.arguments[0];if(r.type===4)return it(r,t);if(r.type===14)return Yu(r,t)}return 0}function Ju(e,t){let r=3;const n=Xu(e);if(n&&n.type===15){const{properties:i}=n;for(let s=0;s<i.length;s++){const{key:l,value:o}=i[s],a=it(l,t);if(a===0)return a;a<r&&(r=a);let c;if(o.type===4?c=it(o,t):o.type===14?c=Yu(o,t):c=0,c===0)return c;c<r&&(r=c)}}return r}function Xu(e){const t=e.codegenNode;if(t.type===13)return t.props}function Qv(e,{filename:t="",prefixIdentifiers:r=!1,hoistStatic:n=!1,hmr:i=!1,cacheHandlers:s=!1,nodeTransforms:l=[],directiveTransforms:o={},transformHoist:a=null,isBuiltInComponent:c=Le,isCustomElement:u=Le,expressionPlugins:f=[],scopeId:p=null,slotted:v=!0,ssr:y=!1,inSSR:b=!1,ssrCssVars:P="",bindingMetadata:N=re,inline:_=!1,isTS:h=!1,onError:m=zl,onWarn:S=Du,compatConfig:A}){const L=t.replace(/\?.*$/,"").match(/([^/\\]+)\.\w+$/),E={filename:t,selfName:L&&Er(ae(L[1])),prefixIdentifiers:r,hoistStatic:n,hmr:i,cacheHandlers:s,nodeTransforms:l,directiveTransforms:o,transformHoist:a,isBuiltInComponent:c,isCustomElement:u,expressionPlugins:f,scopeId:p,slotted:v,ssr:y,inSSR:b,ssrCssVars:P,bindingMetadata:N,inline:_,isTS:h,onError:m,onWarn:S,compatConfig:A,root:e,helpers:new Map,components:new Set,directives:new Set,hoists:[],imports:[],cached:[],constantCache:new WeakMap,temps:0,identifiers:Object.create(null),scopes:{vFor:0,vSlot:0,vPre:0,vOnce:0},parent:null,grandParent:null,currentNode:e,childIndex:0,inVOnce:!1,helper(w){const x=E.helpers.get(w)||0;return E.helpers.set(w,x+1),w},removeHelper(w){const x=E.helpers.get(w);if(x){const D=x-1;D?E.helpers.set(w,D):E.helpers.delete(w)}},helperString(w){return`_${Jr[E.helper(w)]}`},replaceNode(w){E.parent.children[E.childIndex]=E.currentNode=w},removeNode(w){const x=E.parent.children,D=w?x.indexOf(w):E.currentNode?E.childIndex:-1;!w||w===E.currentNode?(E.currentNode=null,E.onNodeRemoved()):E.childIndex>D&&(E.childIndex--,E.onNodeRemoved()),E.parent.children.splice(D,1)},onNodeRemoved:Le,addIdentifiers(w){},removeIdentifiers(w){},hoist(w){Q(w)&&(w=Z(w)),E.hoists.push(w);const x=Z(`_hoisted_${E.hoists.length}`,!1,w.loc,2);return x.hoisted=w,x},cache(w,x=!1,D=!1){const T=_v(E.cached.length,w,x,D);return E.cached.push(T),T}};return E.filters=new Set,E}function Zv(e,t){const r=Qv(e,t);fs(e,r),t.hoistStatic&&Jv(e,r),t.ssr||eg(e,r),e.helpers=new Set([...r.helpers.keys()]),e.components=[...r.components],e.directives=[...r.directives],e.imports=r.imports,e.hoists=r.hoists,e.temps=r.temps,e.cached=r.cached,e.transformed=!0,e.filters=[...r.filters]}function eg(e,t){const{helper:r}=t,{children:n}=e;if(n.length===1){const i=Gu(e);if(i&&i.codegenNode){const s=i.codegenNode;s.type===13&&Ul(s,t),e.codegenNode=s}else e.codegenNode=n[0]}else if(n.length>1){let i=64;e.codegenNode=Vn(t,r(Ln),void 0,e.children,i,void 0,void 0,!0,void 0,!1)}}function tg(e,t){let r=0;const n=()=>{r--};for(;r<e.children.length;r++){const i=e.children[r];Q(i)||(t.grandParent=t.parent,t.parent=e,t.childIndex=r,t.onNodeRemoved=n,fs(i,t))}}function fs(e,t){t.currentNode=e;const{nodeTransforms:r}=t,n=[];for(let s=0;s<r.length;s++){const l=r[s](e,t);if(l&&(z(l)?n.push(...l):n.push(l)),t.currentNode)e=t.currentNode;else return}switch(e.type){case 3:t.ssr||t.helper(Gn);break;case 5:t.ssr||t.helper(cs);break;case 9:for(let s=0;s<e.branches.length;s++)fs(e.branches[s],t);break;case 10:case 11:case 1:case 0:tg(e,t);break}t.currentNode=e;let i=n.length;for(;i--;)n[i]()}function Qu(e,t){const r=Q(e)?n=>n===e:n=>e.test(n);return(n,i)=>{if(n.type===1){const{props:s}=n;if(n.tagType===3&&s.some(Mv))return;const l=[];for(let o=0;o<s.length;o++){const a=s[o];if(a.type===7&&r(a.name)){s.splice(o,1),o--;const c=t(n,a,i);c&&l.push(c)}}return l}}}const ds="/*@__PURE__*/",Zu=e=>`${Jr[e]}: _${Jr[e]}`;function rg(e,{mode:t="function",prefixIdentifiers:r=t==="module",sourceMap:n=!1,filename:i="template.vue.html",scopeId:s=null,optimizeImports:l=!1,runtimeGlobalName:o="Vue",runtimeModuleName:a="vue",ssrRuntimeModuleName:c="vue/server-renderer",ssr:u=!1,isTS:f=!1,inSSR:p=!1}){const v={mode:t,prefixIdentifiers:r,sourceMap:n,filename:i,scopeId:s,optimizeImports:l,runtimeGlobalName:o,runtimeModuleName:a,ssrRuntimeModuleName:c,ssr:u,isTS:f,inSSR:p,source:e.source,code:"",column:1,line:1,offset:0,indentLevel:0,pure:!1,map:void 0,helper(b){return`_${Jr[b]}`},push(b,P=-2,N){v.code+=b},indent(){y(++v.indentLevel)},deindent(b=!1){b?--v.indentLevel:y(--v.indentLevel)},newline(){y(v.indentLevel)}};function y(b){v.push(`
`+"  ".repeat(b),0)}return v}function ng(e,t={}){const r=rg(e,t);t.onContextCreated&&t.onContextCreated(r);const{mode:n,push:i,prefixIdentifiers:s,indent:l,deindent:o,newline:a,scopeId:c,ssr:u}=r,f=Array.from(e.helpers),p=f.length>0,v=!s&&n!=="module";ig(e,r);const b=u?"ssrRender":"render",N=(u?["_ctx","_push","_parent","_attrs"]:["_ctx","_cache"]).join(", ");if(i(`function ${b}(${N}) {`),l(),v&&(i("with (_ctx) {"),l(),p&&(i(`const { ${f.map(Zu).join(", ")} } = _Vue
`,-1),a())),e.components.length&&(As(e.components,"component",r),(e.directives.length||e.temps>0)&&a()),e.directives.length&&(As(e.directives,"directive",r),e.temps>0&&a()),e.filters&&e.filters.length&&(a(),As(e.filters,"filter",r),a()),e.temps>0){i("let ");for(let _=0;_<e.temps;_++)i(`${_>0?", ":""}_temp${_}`)}return(e.components.length||e.directives.length||e.temps)&&(i(`
`,0),a()),u||i("return "),e.codegenNode?ze(e.codegenNode,r):i("null"),v&&(o(),i("}")),o(),i("}"),{ast:e,code:r.code,preamble:"",map:r.map?r.map.toJSON():void 0}}function ig(e,t){const{ssr:r,prefixIdentifiers:n,push:i,newline:s,runtimeModuleName:l,runtimeGlobalName:o,ssrRuntimeModuleName:a}=t,c=o,u=Array.from(e.helpers);if(u.length>0&&(i(`const _Vue = ${c}
`,-1),e.hoists.length)){const f=[El,kl,Gn,Al,Ru].filter(p=>u.includes(p)).map(Zu).join(", ");i(`const { ${f} } = _Vue
`,-1)}sg(e.hoists,t),s(),i("return ")}function As(e,t,{helper:r,push:n,newline:i,isTS:s}){const l=r(t==="filter"?Rl:t==="component"?Nl:Ol);for(let o=0;o<e.length;o++){let a=e[o];const c=a.endsWith("__self");c&&(a=a.slice(0,-6)),n(`const ${$n(a,t)} = ${l}(${JSON.stringify(a)}${c?", true":""})${s?"!":""}`),o<e.length-1&&i()}}function sg(e,t){if(!e.length)return;t.pure=!0;const{push:r,newline:n}=t;n();for(let i=0;i<e.length;i++){const s=e[i];s&&(r(`const _hoisted_${i+1} = `),ze(s,t),n())}t.pure=!1}function Kl(e,t){const r=e.length>3||!1;t.push("["),r&&t.indent(),Jn(e,t,r),r&&t.deindent(),t.push("]")}function Jn(e,t,r=!1,n=!0){const{push:i,newline:s}=t;for(let l=0;l<e.length;l++){const o=e[l];Q(o)?i(o,-3):z(o)?Kl(o,t):ze(o,t),l<e.length-1&&(r?(n&&i(","),s()):n&&i(", "))}}function ze(e,t){if(Q(e)){t.push(e,-3);return}if(Be(e)){t.push(t.helper(e));return}switch(e.type){case 1:case 9:case 11:ze(e.codegenNode,t);break;case 2:lg(e,t);break;case 4:ef(e,t);break;case 5:og(e,t);break;case 12:ze(e.codegenNode,t);break;case 8:tf(e,t);break;case 3:cg(e,t);break;case 13:ug(e,t);break;case 14:dg(e,t);break;case 15:hg(e,t);break;case 17:pg(e,t);break;case 18:vg(e,t);break;case 19:gg(e,t);break;case 20:mg(e,t);break;case 21:Jn(e.body,t,!0,!1);break}}function lg(e,t){t.push(JSON.stringify(e.content),-3,e)}function ef(e,t){const{content:r,isStatic:n}=e;t.push(n?JSON.stringify(r):r,-3,e)}function og(e,t){const{push:r,helper:n,pure:i}=t;i&&r(ds),r(`${n(cs)}(`),ze(e.content,t),r(")")}function tf(e,t){for(let r=0;r<e.children.length;r++){const n=e.children[r];Q(n)?t.push(n,-3):ze(n,t)}}function ag(e,t){const{push:r}=t;if(e.type===8)r("["),tf(e,t),r("]");else if(e.isStatic){const n=Bl(e.content)?e.content:JSON.stringify(e.content);r(n,-2,e)}else r(`[${e.content}]`,-3,e)}function cg(e,t){const{push:r,helper:n,pure:i}=t;i&&r(ds),r(`${n(Gn)}(${JSON.stringify(e.content)})`,-3,e)}function ug(e,t){const{push:r,helper:n,pure:i}=t,{tag:s,props:l,children:o,patchFlag:a,dynamicProps:c,directives:u,isBlock:f,disableTracking:p,isComponent:v}=e;let y;a&&(y=String(a)),u&&r(n(Pl)+"("),f&&r(`(${n(_r)}(${p?"true":""}), `),i&&r(ds);const b=f?Zr(t.inSSR,v):Qr(t.inSSR,v);r(n(b)+"(",-2,e),Jn(fg([s,l,o,y,c]),t),r(")"),f&&r(")"),u&&(r(", "),ze(u,t),r(")"))}function fg(e){let t=e.length;for(;t--&&e[t]==null;);return e.slice(0,t+1).map(r=>r||"null")}function dg(e,t){const{push:r,helper:n,pure:i}=t,s=Q(e.callee)?e.callee:n(e.callee);i&&r(ds),r(s+"(",-2,e),Jn(e.arguments,t),r(")")}function hg(e,t){const{push:r,indent:n,deindent:i,newline:s}=t,{properties:l}=e;if(!l.length){r("{}",-2,e);return}const o=l.length>1||!1;r(o?"{":"{ "),o&&n();for(let a=0;a<l.length;a++){const{key:c,value:u}=l[a];ag(c,t),r(": "),ze(u,t),a<l.length-1&&(r(","),s())}o&&i(),r(o?"}":" }")}function pg(e,t){Kl(e.elements,t)}function vg(e,t){const{push:r,indent:n,deindent:i}=t,{params:s,returns:l,body:o,newline:a,isSlot:c}=e;c&&r(`_${Jr[Fl]}(`),r("(",-2,e),z(s)?Jn(s,t):s&&ze(s,t),r(") => "),(a||o)&&(r("{"),n()),l?(a&&r("return "),z(l)?Kl(l,t):ze(l,t)):o&&ze(o,t),(a||o)&&(i(),r("}")),c&&(e.isNonScopedSlot&&r(", undefined, true"),r(")"))}function gg(e,t){const{test:r,consequent:n,alternate:i,newline:s}=e,{push:l,indent:o,deindent:a,newline:c}=t;if(r.type===4){const f=!Bl(r.content);f&&l("("),ef(r,t),f&&l(")")}else l("("),ze(r,t),l(")");s&&o(),t.indentLevel++,s||l(" "),l("? "),ze(n,t),t.indentLevel--,s&&c(),s||l(" "),l(": ");const u=i.type===19;u||t.indentLevel++,ze(i,t),u||t.indentLevel--,s&&a(!0)}function mg(e,t){const{push:r,helper:n,indent:i,deindent:s,newline:l}=t,{needPauseTracking:o,needArraySpread:a}=e;a&&r("[...("),r(`_cache[${e.index}] || (`),o&&(i(),r(`${n(Di)}(-1`),e.inVOnce&&r(", true"),r("),"),l(),r("(")),r(`_cache[${e.index}] = `),ze(e.value,t),o&&(r(`).cacheIndex = ${e.index},`),l(),r(`${n(Di)}(1),`),l(),r(`_cache[${e.index}]`),s()),r(")"),a&&r(")]")}new RegExp("\\b"+"arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b")+"\\b");const bg=Qu(/^(?:if|else|else-if)$/,(e,t,r)=>yg(e,t,r,(n,i,s)=>{const l=r.parent.children;let o=l.indexOf(n),a=0;for(;o-->=0;){const c=l[o];c&&c.type===9&&(a+=c.branches.length)}return()=>{if(s)n.codegenNode=Qo(i,a,r);else{const c=Cg(n.codegenNode);c.alternate=Qo(i,a+n.branches.length-1,r)}}}));function yg(e,t,r,n){if(t.name!=="else"&&(!t.exp||!t.exp.content.trim())){const i=t.exp?t.exp.loc:e.loc;r.onError(pe(28,t.loc)),t.exp=Z("true",!1,i)}if(t.name==="if"){const i=Xo(e,t),s={type:9,loc:qv(e.loc),branches:[i]};if(r.replaceNode(s),n)return n(s,i,!0)}else{const i=r.parent.children;let s=i.indexOf(e);for(;s-->=-1;){const l=i[s];if(l&&Hu(l)){r.removeNode(l);continue}if(l&&l.type===9){(t.name==="else-if"||t.name==="else")&&l.branches[l.branches.length-1].condition===void 0&&r.onError(pe(30,e.loc)),r.removeNode();const o=Xo(e,t);l.branches.push(o);const a=n&&n(l,o,!1);fs(o,r),a&&a(),r.currentNode=null}else r.onError(pe(30,e.loc));break}}}function Xo(e,t){const r=e.tagType===3;return{type:10,loc:e.loc,condition:t.name==="else"?void 0:t.exp,children:r&&!at(e,"for")?e.children:[e],userKey:us(e,"key"),isTemplateIf:r}}function Qo(e,t,r){return e.condition?Ys(e.condition,Zo(e,t,r),Ie(r.helper(Gn),['""',"true"])):Zo(e,t,r)}function Zo(e,t,r){const{helper:n}=r,i=Ee("key",Z(`${t}`,!1,lt,2)),{children:s}=e,l=s[0];if(s.length!==1||l.type!==1)if(s.length===1&&l.type===11){const a=l.codegenNode;return Ui(a,i,r),a}else return Vn(r,n(Ln),ct([i]),s,64,void 0,void 0,!0,!1,!1,e.loc);else{const a=l.codegenNode,c=Dv(a);return c.type===13&&Ul(c,r),Ui(c,i,r),a}}function Cg(e){for(;;)if(e.type===19)if(e.alternate.type===19)e=e.alternate;else return e;else e.type===20&&(e=e.value)}const Sg=Qu("for",(e,t,r)=>{const{helper:n,removeHelper:i}=r;return wg(e,t,r,s=>{const l=Ie(n(Ml),[s.source]),o=Fi(e),a=at(e,"memo"),c=us(e,"key",!1,!0);c&&c.type;let u=c&&(c.type===6?c.value?Z(c.value.content,!0):void 0:c.exp);const f=c&&u?Ee("key",u):null,p=s.source.type===4&&s.source.constType>0,v=p?64:c?128:256;return s.codegenNode=Vn(r,n(Ln),void 0,l,v,void 0,void 0,!0,!p,!1,e.loc),()=>{let y;const{children:b}=s,P=b.length!==1||b[0].type!==1,N=$i(e)?e:o&&e.children.length===1&&$i(e.children[0])?e.children[0]:null;if(N?(y=N.codegenNode,o&&f&&Ui(y,f,r)):P?y=Vn(r,n(Ln),f?ct([f]):void 0,e.children,64,void 0,void 0,!0,void 0,!1):(y=b[0].codegenNode,o&&f&&Ui(y,f,r),y.isBlock!==!p&&(y.isBlock?(i(_r),i(Zr(r.inSSR,y.isComponent))):i(Qr(r.inSSR,y.isComponent))),y.isBlock=!p,y.isBlock?(n(_r),n(Zr(r.inSSR,y.isComponent))):n(Qr(r.inSSR,y.isComponent))),a){const _=Xr(Qs(s.parseResult,[Z("_cached")]));_.body=Tv([bt(["const _memo = (",a.exp,")"]),bt(["if (_cached && _cached.el",...u?[" && _cached.key === ",u]:[],` && ${r.helperString(Lu)}(_cached, _memo)) return _cached`]),bt(["const _item = ",y]),Z("_item.memo = _memo"),Z("return _item")]),l.arguments.push(_,Z("_cache"),Z(String(r.cached.length))),r.cached.push(null)}else l.arguments.push(Xr(Qs(s.parseResult),y,!0))}})});function wg(e,t,r,n){if(!t.exp){r.onError(pe(31,t.loc));return}const i=t.forParseResult;if(!i){r.onError(pe(32,t.loc));return}rf(i);const{addIdentifiers:s,removeIdentifiers:l,scopes:o}=r,{source:a,value:c,key:u,index:f}=i,p={type:11,loc:t.loc,source:a,valueAlias:c,keyAlias:u,objectIndexAlias:f,parseResult:i,children:Fi(e)?e.children:[e]};r.replaceNode(p),o.vFor++;const v=n&&n(p);return()=>{o.vFor--,v&&v()}}function rf(e,t){e.finalized||(e.finalized=!0)}function Qs({value:e,key:t,index:r},n=[]){return _g([e,t,r,...n])}function _g(e){let t=e.length;for(;t--&&!e[t];);return e.slice(0,t+1).map((r,n)=>r||Z("_".repeat(n+1),!1))}const ea=Z("undefined",!1),Tg=(e,t)=>{if(e.type===1&&(e.tagType===1||e.tagType===3)){const r=at(e,"slot");if(r)return r.exp,t.scopes.vSlot++,()=>{t.scopes.vSlot--}}},xg=(e,t,r,n)=>Xr(e,r,!1,!0,r.length?r[0].loc:n);function Eg(e,t,r=xg){t.helper(Fl);const{children:n,loc:i}=e,s=[],l=[];let o=t.scopes.vSlot>0||t.scopes.vFor>0;const a=at(e,"slot",!0);if(a){const{arg:P,exp:N}=a;P&&!Qe(P)&&(o=!0),s.push(Ee(P||Z("default",!0),r(N,void 0,n,i)))}let c=!1,u=!1;const f=[],p=new Set;let v=0;for(let P=0;P<n.length;P++){const N=n[P];let _;if(!Fi(N)||!(_=at(N,"slot",!0))){N.type!==3&&f.push(N);continue}if(a){t.onError(pe(37,_.loc));break}c=!0;const{children:h,loc:m}=N,{arg:S=Z("default",!0),exp:A,loc:L}=_;let E;Qe(S)?E=S?S.content:"default":o=!0;const w=at(N,"for"),x=r(A,w,h,m);let D,T;if(D=at(N,"if"))o=!0,l.push(Ys(D.exp,ci(S,x,v++),ea));else if(T=at(N,/^else(?:-if)?$/,!0)){let V=P,q;for(;V--&&(q=n[V],!!Hu(q)););if(q&&Fi(q)&&at(q,/^(?:else-)?if$/)){let J=l[l.length-1];for(;J.alternate.type===19;)J=J.alternate;J.alternate=T.exp?Ys(T.exp,ci(S,x,v++),ea):ci(S,x,v++)}else t.onError(pe(30,T.loc))}else if(w){o=!0;const V=w.forParseResult;V?(rf(V),l.push(Ie(t.helper(Ml),[V.source,Xr(Qs(V),ci(S,x),!0)]))):t.onError(pe(32,w.loc))}else{if(E){if(p.has(E)){t.onError(pe(38,L));continue}p.add(E),E==="default"&&(u=!0)}s.push(Ee(S,x))}}if(!a){const P=(N,_)=>{const h=r(N,void 0,_,i);return t.compatConfig&&(h.isNonScopedSlot=!0),Ee("default",h)};c?f.length&&!f.every(Hl)&&(u?t.onError(pe(39,f[0].loc)):s.push(P(void 0,f))):s.push(P(void 0,n))}const y=o?2:gi(e.children)?3:1;let b=ct(s.concat(Ee("_",Z(y+"",!1))),i);return l.length&&(b=Ie(t.helper(Mu),[b,yr(l)])),{slots:b,hasDynamicSlots:o}}function ci(e,t,r){const n=[Ee("name",e),Ee("fn",t)];return r!=null&&n.push(Ee("key",Z(String(r),!0))),ct(n)}function gi(e){for(let t=0;t<e.length;t++){const r=e[t];switch(r.type){case 1:if(r.tagType===2||gi(r.children))return!0;break;case 9:if(gi(r.branches))return!0;break;case 10:case 11:if(gi(r.children))return!0;break}}return!1}const nf=new WeakMap,kg=(e,t)=>function(){if(e=t.currentNode,!(e.type===1&&(e.tagType===0||e.tagType===1)))return;const{tag:n,props:i}=e,s=e.tagType===1;let l=s?Ag(e,t):`"${n}"`;const o=se(l)&&l.callee===Il;let a,c,u=0,f,p,v,y=o||l===Tn||l===xl||!s&&(n==="svg"||n==="foreignObject"||n==="math");if(i.length>0){const b=sf(e,t,void 0,s,o);a=b.props,u=b.patchFlag,p=b.dynamicPropNames;const P=b.directives;v=P&&P.length?yr(P.map(N=>Ig(N,t))):void 0,b.shouldUseBlock&&(y=!0)}if(e.children.length>0)if(l===Mi&&(y=!0,u|=1024),s&&l!==Tn&&l!==Mi){const{slots:P,hasDynamicSlots:N}=Eg(e,t);c=P,N&&(u|=1024)}else if(e.children.length===1&&l!==Tn){const P=e.children[0],N=P.type,_=N===5||N===8;_&&it(P,t)===0&&(u|=1),_||N===2?c=P:c=e.children}else c=e.children;p&&p.length&&(f=Og(p)),e.codegenNode=Vn(t,l,a,c,u===0?void 0:u,f,v,!!y,!1,s,e.loc)};function Ag(e,t,r=!1){let{tag:n}=e;const i=Zs(n),s=us(e,"is",!1,!0);if(s)if(i||Cr("COMPILER_IS_ON_ELEMENT",t)){let o;if(s.type===6?o=s.value&&Z(s.value.content,!0):(o=s.exp,o||(o=Z("is",!1,s.arg.loc))),o)return Ie(t.helper(Il),[o])}else s.type===6&&s.value.content.startsWith("vue:")&&(n=s.value.content.slice(4));const l=Vu(n)||t.isBuiltInComponent(n);return l?(r||t.helper(l),l):(t.helper(Nl),t.components.add(n),$n(n,"component"))}function sf(e,t,r=e.props,n,i,s=!1){const{tag:l,loc:o,children:a}=e;let c=[];const u=[],f=[],p=a.length>0;let v=!1,y=0,b=!1,P=!1,N=!1,_=!1,h=!1,m=!1;const S=[],A=x=>{c.length&&(u.push(ct(ta(c),o)),c=[]),x&&u.push(x)},L=()=>{t.scopes.vFor>0&&c.push(Ee(Z("ref_for",!0),Z("true")))},E=({key:x,value:D})=>{if(Qe(x)){const T=x.content,V=Tr(T);if(V&&(!n||i)&&T.toLowerCase()!=="onclick"&&T!=="onUpdate:modelValue"&&!Ut(T)&&(_=!0),V&&Ut(T)&&(m=!0),V&&D.type===14&&(D=D.arguments[0]),D.type===20||(D.type===4||D.type===8)&&it(D,t)>0)return;T==="ref"?b=!0:T==="class"?P=!0:T==="style"?N=!0:T!=="key"&&!S.includes(T)&&S.push(T),n&&(T==="class"||T==="style")&&!S.includes(T)&&S.push(T)}else h=!0};for(let x=0;x<r.length;x++){const D=r[x];if(D.type===6){const{loc:T,name:V,nameLoc:q,value:J}=D;let H=!0;if(V==="ref"&&(b=!0,L()),V==="is"&&(Zs(l)||J&&J.content.startsWith("vue:")||Cr("COMPILER_IS_ON_ELEMENT",t)))continue;c.push(Ee(Z(V,!0,q),Z(J?J.content:"",H,J?J.loc:T)))}else{const{name:T,arg:V,exp:q,loc:J,modifiers:H}=D,Y=T==="bind",j=T==="on";if(T==="slot"){n||t.onError(pe(40,J));continue}if(T==="once"||T==="memo"||T==="is"||Y&&pr(V,"is")&&(Zs(l)||Cr("COMPILER_IS_ON_ELEMENT",t))||j&&s)continue;if((Y&&pr(V,"key")||j&&p&&pr(V,"vue:before-update"))&&(v=!0),Y&&pr(V,"ref")&&L(),!V&&(Y||j)){if(h=!0,q)if(Y){if(A(),Cr("COMPILER_V_BIND_OBJECT_ORDER",t)){u.unshift(q);continue}L(),A(),u.push(q)}else A({type:14,loc:J,callee:t.helper(Vl),arguments:n?[q]:[q,"true"]});else t.onError(pe(Y?34:35,J));continue}Y&&H.some(Ct=>Ct.content==="prop")&&(y|=32);const ce=t.directiveTransforms[T];if(ce){const{props:Ct,needRuntime:dt}=ce(D,e,t);!s&&Ct.forEach(E),j&&V&&!Qe(V)?A(ct(Ct,o)):c.push(...Ct),dt&&(f.push(D),Be(dt)&&nf.set(D,dt))}else xf(T)||(f.push(D),p&&(v=!0))}}let w;if(u.length?(A(),u.length>1?w=Ie(t.helper(Li),u,o):w=u[0]):c.length&&(w=ct(ta(c),o)),h?y|=16:(P&&!n&&(y|=2),N&&!n&&(y|=4),S.length&&(y|=8),_&&(y|=32)),!v&&(y===0||y===32)&&(b||m||f.length>0)&&(y|=512),!t.inSSR&&w)switch(w.type){case 15:let x=-1,D=-1,T=!1;for(let J=0;J<w.properties.length;J++){const H=w.properties[J].key;Qe(H)?H.content==="class"?x=J:H.content==="style"&&(D=J):H.isHandlerKey||(T=!0)}const V=w.properties[x],q=w.properties[D];T?w=Ie(t.helper(Dn),[w]):(V&&!Qe(V.value)&&(V.value=Ie(t.helper(Ll),[V.value])),q&&(N||q.value.type===4&&q.value.content.trim()[0]==="["||q.value.type===17)&&(q.value=Ie(t.helper(Dl),[q.value])));break;case 14:break;default:w=Ie(t.helper(Dn),[Ie(t.helper(Yn),[w])]);break}return{props:w,directives:f,patchFlag:y,dynamicPropNames:S,shouldUseBlock:v}}function ta(e){const t=new Map,r=[];for(let n=0;n<e.length;n++){const i=e[n];if(i.key.type===8||!i.key.isStatic){r.push(i);continue}const s=i.key.content,l=t.get(s);l?(s==="style"||s==="class"||Tr(s))&&Ng(l,i):(t.set(s,i),r.push(i))}return r}function Ng(e,t){e.value.type===17?e.value.elements.push(t.value):e.value=yr([e.value,t.value],e.loc)}function Ig(e,t){const r=[],n=nf.get(e);n?r.push(t.helperString(n)):(t.helper(Ol),t.directives.add(e.name),r.push($n(e.name,"directive")));const{loc:i}=e;if(e.exp&&r.push(e.exp),e.arg&&(e.exp||r.push("void 0"),r.push(e.arg)),Object.keys(e.modifiers).length){e.arg||(e.exp||r.push("void 0"),r.push("void 0"));const s=Z("true",!1,i);r.push(ct(e.modifiers.map(l=>Ee(l,s)),i))}return yr(r,e.loc)}function Og(e){let t="[";for(let r=0,n=e.length;r<n;r++)t+=JSON.stringify(e[r]),r<n-1&&(t+=", ");return t+"]"}function Zs(e){return e==="component"||e==="Component"}const Rg=(e,t)=>{if($i(e)){const{children:r,loc:n}=e,{slotName:i,slotProps:s}=Pg(e,t),l=[t.prefixIdentifiers?"_ctx.$slots":"$slots",i,"{}","undefined","true"];let o=2;s&&(l[2]=s,o=3),r.length&&(l[3]=Xr([],r,!1,!1,n),o=4),t.scopeId&&!t.slotted&&(o=5),l.splice(o),e.codegenNode=Ie(t.helper(Pu),l,n)}};function Pg(e,t){let r='"default"',n;const i=[];for(let s=0;s<e.props.length;s++){const l=e.props[s];if(l.type===6)l.value&&(l.name==="name"?r=JSON.stringify(l.value.content):(l.name=ae(l.name),i.push(l)));else if(l.name==="bind"&&pr(l.arg,"name")){if(l.exp)r=l.exp;else if(l.arg&&l.arg.type===4){const o=ae(l.arg.content);r=l.exp=Z(o,!1,l.arg.loc)}}else l.name==="bind"&&l.arg&&Qe(l.arg)&&(l.arg.content=ae(l.arg.content)),i.push(l)}if(i.length>0){const{props:s,directives:l}=sf(e,t,i,!1,!1);n=s,l.length&&t.onError(pe(36,l[0].loc))}return{slotName:r,slotProps:n}}const lf=(e,t,r,n)=>{const{loc:i,modifiers:s,arg:l}=e;!e.exp&&!s.length&&r.onError(pe(35,i));let o;if(l.type===4)if(l.isStatic){let f=l.content;f.startsWith("vue:")&&(f=`vnode-${f.slice(4)}`);const p=t.tagType!==0||f.startsWith("vnode")||!/[A-Z]/.test(f)?$r(ae(f)):`on:${f}`;o=Z(p,!0,l.loc)}else o=bt([`${r.helperString(Gs)}(`,l,")"]);else o=l,o.children.unshift(`${r.helperString(Gs)}(`),o.children.push(")");let a=e.exp;a&&!a.content.trim()&&(a=void 0);let c=r.cacheHandlers&&!a&&!r.inVOnce;if(a){const f=Uu(a),p=!(f||Rv(a)),v=a.content.includes(";");(p||c&&f)&&(a=bt([`${p?"$event":"(...args)"} => ${v?"{":"("}`,a,v?"}":")"]))}let u={props:[Ee(o,a||Z("() => {}",!1,i))]};return n&&(u=n(u)),c&&(u.props[0].value=r.cache(u.props[0].value)),u.props.forEach(f=>f.key.isHandlerKey=!0),u},Mg=(e,t,r)=>{const{modifiers:n,loc:i}=e,s=e.arg;let{exp:l}=e;return l&&l.type===4&&!l.content.trim()&&(l=void 0),s.type!==4?(s.children.unshift("("),s.children.push(') || ""')):s.isStatic||(s.content=s.content?`${s.content} || ""`:'""'),n.some(o=>o.content==="camel")&&(s.type===4?s.isStatic?s.content=ae(s.content):s.content=`${r.helperString(Ws)}(${s.content})`:(s.children.unshift(`${r.helperString(Ws)}(`),s.children.push(")"))),r.inSSR||(n.some(o=>o.content==="prop")&&ra(s,"."),n.some(o=>o.content==="attr")&&ra(s,"^")),{props:[Ee(s,l)]}},ra=(e,t)=>{e.type===4?e.isStatic?e.content=t+e.content:e.content=`\`${t}\${${e.content}}\``:(e.children.unshift(`'${t}' + (`),e.children.push(")"))},Lg=(e,t)=>{if(e.type===0||e.type===1||e.type===11||e.type===10)return()=>{const r=e.children;let n,i=!1;for(let s=0;s<r.length;s++){const l=r[s];if(ks(l)){i=!0;for(let o=s+1;o<r.length;o++){const a=r[o];if(ks(a))n||(n=r[s]=bt([l],l.loc)),n.children.push(" + ",a),r.splice(o,1),o--;else{n=void 0;break}}}}if(!(!i||r.length===1&&(e.type===0||e.type===1&&e.tagType===0&&!e.props.find(s=>s.type===7&&!t.directiveTransforms[s.name])&&e.tag!=="template")))for(let s=0;s<r.length;s++){const l=r[s];if(ks(l)||l.type===8){const o=[];(l.type!==2||l.content!==" ")&&o.push(l),!t.ssr&&it(l,t)===0&&o.push("1"),r[s]={type:12,content:l,loc:l.loc,codegenNode:Ie(t.helper(Al),o)}}}}},na=new WeakSet,Dg=(e,t)=>{if(e.type===1&&at(e,"once",!0))return na.has(e)||t.inVOnce||t.inSSR?void 0:(na.add(e),t.inVOnce=!0,t.helper(Di),()=>{t.inVOnce=!1;const r=t.currentNode;r.codegenNode&&(r.codegenNode=t.cache(r.codegenNode,!0,!0))})},of=(e,t,r)=>{const{exp:n,arg:i}=e;if(!n)return r.onError(pe(41,e.loc)),dn();const s=n.loc.source.trim(),l=n.type===4?n.content:s,o=r.bindingMetadata[s];if(o==="props"||o==="props-aliased")return r.onError(pe(44,n.loc)),dn();if(o==="literal-const"||o==="setup-const")return r.onError(pe(45,n.loc)),dn();if(!l.trim()||!Uu(n))return r.onError(pe(42,n.loc)),dn();const a=i||Z("modelValue",!0),c=i?Qe(i)?`onUpdate:${ae(i.content)}`:bt(['"onUpdate:" + ',i]):"onUpdate:modelValue";let u;const f=r.isTS?"($event: any)":"$event";u=bt([`${f} => ((`,n,") = $event)"]);const p=[Ee(a,e.exp),Ee(c,u)];if(e.modifiers.length&&t.tagType===1){const v=e.modifiers.map(b=>b.content).map(b=>(Bl(b)?b:JSON.stringify(b))+": true").join(", "),y=i?Qe(i)?`${i.content}Modifiers`:bt([i,' + "Modifiers"']):"modelModifiers";p.push(Ee(y,Z(`{ ${v} }`,!1,e.loc,2)))}return dn(p)};function dn(e=[]){return{props:e}}const Vg=/[\w).+\-_$\]]/,Fg=(e,t)=>{Cr("COMPILER_FILTERS",t)&&(e.type===5?zi(e.content,t):e.type===1&&e.props.forEach(r=>{r.type===7&&r.name!=="for"&&r.exp&&zi(r.exp,t)}))};function zi(e,t){if(e.type===4)ia(e,t);else for(let r=0;r<e.children.length;r++){const n=e.children[r];typeof n=="object"&&(n.type===4?ia(n,t):n.type===8?zi(e,t):n.type===5&&zi(n.content,t))}}function ia(e,t){const r=e.content;let n=!1,i=!1,s=!1,l=!1,o=0,a=0,c=0,u=0,f,p,v,y,b=[];for(v=0;v<r.length;v++)if(p=f,f=r.charCodeAt(v),n)f===39&&p!==92&&(n=!1);else if(i)f===34&&p!==92&&(i=!1);else if(s)f===96&&p!==92&&(s=!1);else if(l)f===47&&p!==92&&(l=!1);else if(f===124&&r.charCodeAt(v+1)!==124&&r.charCodeAt(v-1)!==124&&!o&&!a&&!c)y===void 0?(u=v+1,y=r.slice(0,v).trim()):P();else{switch(f){case 34:i=!0;break;case 39:n=!0;break;case 96:s=!0;break;case 40:c++;break;case 41:c--;break;case 91:a++;break;case 93:a--;break;case 123:o++;break;case 125:o--;break}if(f===47){let N=v-1,_;for(;N>=0&&(_=r.charAt(N),_===" ");N--);(!_||!Vg.test(_))&&(l=!0)}}y===void 0?y=r.slice(0,v).trim():u!==0&&P();function P(){b.push(r.slice(u,v).trim()),u=v+1}if(b.length){for(v=0;v<b.length;v++)y=$g(y,b[v],t);e.content=y,e.ast=void 0}}function $g(e,t,r){r.helper(Rl);const n=t.indexOf("(");if(n<0)return r.filters.add(t),`${$n(t,"filter")}(${e})`;{const i=t.slice(0,n),s=t.slice(n+1);return r.filters.add(i),`${$n(i,"filter")}(${e}${s!==")"?","+s:s}`}}const sa=new WeakSet,Ug=(e,t)=>{if(e.type===1){const r=at(e,"memo");return!r||sa.has(e)||t.inSSR?void 0:(sa.add(e),()=>{const n=e.codegenNode||t.currentNode.codegenNode;n&&n.type===13&&(e.tagType!==1&&Ul(n,t),e.codegenNode=Ie(t.helper($l),[r.exp,Xr(void 0,n),"_cache",String(t.cached.length)]),t.cached.push(null))})}},zg=(e,t)=>{if(e.type===1){for(const r of e.props)if(r.type===7&&r.name==="bind"&&(!r.exp||r.exp.type===4&&!r.exp.content.trim())&&r.arg){const n=r.arg;if(n.type!==4||!n.isStatic)t.onError(pe(53,n.loc)),r.exp=Z("",!0,n.loc);else{const i=ae(n.content);(Fu.test(i[0])||i[0]==="-")&&(r.exp=Z(i,!1,n.loc))}}}};function Bg(e){return[[zg,Dg,bg,Ug,Sg,Fg,Rg,kg,Tg,Lg],{on:lf,bind:Mg,model:of}]}function Hg(e,t={}){const r=t.onError||zl,n=t.mode==="module";t.prefixIdentifiers===!0?r(pe(48)):n&&r(pe(49));const i=!1;t.cacheHandlers&&r(pe(50)),t.scopeId&&!n&&r(pe(51));const s=ee({},t,{prefixIdentifiers:i}),l=Q(e)?Yv(e,s):e,[o,a]=Bg();return Zv(l,ee({},s,{nodeTransforms:[...o,...t.nodeTransforms||[]],directiveTransforms:ee({},a,t.directiveTransforms||{})})),ng(l,s)}const jg=()=>({props:[]});const af=Symbol(""),cf=Symbol(""),uf=Symbol(""),ff=Symbol(""),el=Symbol(""),df=Symbol(""),hf=Symbol(""),pf=Symbol(""),vf=Symbol(""),gf=Symbol("");Sv({[af]:"vModelRadio",[cf]:"vModelCheckbox",[uf]:"vModelText",[ff]:"vModelSelect",[el]:"vModelDynamic",[df]:"withModifiers",[hf]:"withKeys",[pf]:"vShow",[vf]:"Transition",[gf]:"TransitionGroup"});let Or;function Kg(e,t=!1){return Or||(Or=document.createElement("div")),t?(Or.innerHTML=`<div foo="${e.replace(/"/g,"&quot;")}">`,Or.children[0].getAttribute("foo")):(Or.innerHTML=e,Or.textContent)}const qg={parseMode:"html",isVoidTag:Bf,isNativeTag:e=>$f(e)||Uf(e)||zf(e),isPreTag:e=>e==="pre",isIgnoreNewlineTag:e=>e==="pre"||e==="textarea",decodeEntities:Kg,isBuiltInComponent:e=>{if(e==="Transition"||e==="transition")return vf;if(e==="TransitionGroup"||e==="transition-group")return gf},getNamespace(e,t,r){let n=t?t.ns:r;if(t&&n===2)if(t.tag==="annotation-xml"){if(e==="svg")return 1;t.props.some(i=>i.type===6&&i.name==="encoding"&&i.value!=null&&(i.value.content==="text/html"||i.value.content==="application/xhtml+xml"))&&(n=0)}else/^m(?:[ions]|text)$/.test(t.tag)&&e!=="mglyph"&&e!=="malignmark"&&(n=0);else t&&n===1&&(t.tag==="foreignObject"||t.tag==="desc"||t.tag==="title")&&(n=0);if(n===0){if(e==="svg")return 1;if(e==="math")return 2}return n}},Wg=e=>{e.type===1&&e.props.forEach((t,r)=>{t.type===6&&t.name==="style"&&t.value&&(e.props[r]={type:7,name:"bind",arg:Z("style",!0,t.loc),exp:Gg(t.value.content,t.loc),modifiers:[],loc:t.loc})})},Gg=(e,t)=>{const r=_a(e);return Z(JSON.stringify(r),!1,t,3)};function ir(e,t){return pe(e,t)}const Yg=(e,t,r)=>{const{exp:n,loc:i}=e;return n||r.onError(ir(54,i)),t.children.length&&(r.onError(ir(55,i)),t.children.length=0),{props:[Ee(Z("innerHTML",!0,i),n||Z("",!0))]}},Jg=(e,t,r)=>{const{exp:n,loc:i}=e;return n||r.onError(ir(56,i)),t.children.length&&(r.onError(ir(57,i)),t.children.length=0),{props:[Ee(Z("textContent",!0),n?it(n,r)>0?n:Ie(r.helperString(cs),[n],i):Z("",!0))]}},Xg=(e,t,r)=>{const n=of(e,t,r);if(!n.props.length||t.tagType===1)return n;e.arg&&r.onError(ir(59,e.arg.loc));const{tag:i}=t,s=r.isCustomElement(i);if(i==="input"||i==="textarea"||i==="select"||s){let l=uf,o=!1;if(i==="input"||s){const a=us(t,"type");if(a){if(a.type===7)l=el;else if(a.value)switch(a.value.content){case"radio":l=af;break;case"checkbox":l=cf;break;case"file":o=!0,r.onError(ir(60,e.loc));break}}else Pv(t)&&(l=el)}else i==="select"&&(l=ff);o||(n.needRuntime=r.helper(l))}else r.onError(ir(58,e.loc));return n.props=n.props.filter(l=>!(l.key.type===4&&l.key.content==="modelValue")),n},Qg=st("passive,once,capture"),Zg=st("stop,prevent,self,ctrl,shift,alt,meta,exact,middle"),em=st("left,right"),mf=st("onkeyup,onkeydown,onkeypress"),tm=(e,t,r,n)=>{const i=[],s=[],l=[];for(let o=0;o<t.length;o++){const a=t[o].content;a==="native"&&Fn("COMPILER_V_ON_NATIVE",r)||Qg(a)?l.push(a):em(a)?Qe(e)?mf(e.content.toLowerCase())?i.push(a):s.push(a):(i.push(a),s.push(a)):Zg(a)?s.push(a):i.push(a)}return{keyModifiers:i,nonKeyModifiers:s,eventOptionModifiers:l}},la=(e,t)=>Qe(e)&&e.content.toLowerCase()==="onclick"?Z(t,!0):e.type!==4?bt(["(",e,`) === "onClick" ? "${t}" : (`,e,")"]):e,rm=(e,t,r)=>lf(e,t,r,n=>{const{modifiers:i}=e;if(!i.length)return n;let{key:s,value:l}=n.props[0];const{keyModifiers:o,nonKeyModifiers:a,eventOptionModifiers:c}=tm(s,i,r,e.loc);if(a.includes("right")&&(s=la(s,"onContextmenu")),a.includes("middle")&&(s=la(s,"onMouseup")),a.length&&(l=Ie(r.helper(df),[l,JSON.stringify(a)])),o.length&&(!Qe(s)||mf(s.content.toLowerCase()))&&(l=Ie(r.helper(hf),[l,JSON.stringify(o)])),c.length){const u=c.map(Er).join("");s=Qe(s)?Z(`${s.content}${u}`,!0):bt(["(",s,`) + "${u}"`])}return{props:[Ee(s,l)]}}),nm=(e,t,r)=>{const{exp:n,loc:i}=e;return n||r.onError(ir(62,i)),{props:[],needRuntime:r.helper(pf)}},im=(e,t)=>{e.type===1&&e.tagType===0&&(e.tag==="script"||e.tag==="style")&&t.removeNode()},sm=[Wg],lm={cloak:jg,html:Yg,text:Jg,model:Xg,on:rm,show:nm};function om(e,t={}){return Hg(e,ee({},qg,t,{nodeTransforms:[im,...sm,...t.nodeTransforms||[]],directiveTransforms:ee({},lm,t.directiveTransforms||{}),transformHoist:null}))}const oa=Object.create(null);function am(e,t){if(!Q(e))if(e.nodeType)e=e.innerHTML;else return Le;const r=Af(e,t),n=oa[r];if(n)return n;if(e[0]==="#"){const o=document.querySelector(e);e=o?o.innerHTML:""}const i=ee({hoistStatic:!0,onError:void 0,onWarn:Le},t);!i.isCustomElement&&typeof customElements<"u"&&(i.isCustomElement=o=>!!customElements.get(o));const{code:s}=om(e,i),l=new Function("Vue",s)(vv);return l._rc=!0,oa[r]=l}Zc(am);var cm=Object.defineProperty,um=(e,t,r)=>t in e?cm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,He=(e,t,r)=>um(e,typeof t!="symbol"?t+"":t,r);function Pt(e,t,r){return Math.min(Math.max(e,t),r)}function cr(e,t){return typeof e!="number"||Number.isNaN(e)?t:Math.max(0,e)}var bf={ring:{value:"ring",label:"Ring",category:"spinner",description:"A refined circular spinner for general loading states.",recommendedUse:"Use for default async states inside cards, panels, and centered sections.",defaultCount:1,minCount:1,maxCount:1},"dual-ring":{value:"dual-ring",label:"Dual Ring",category:"spinner",description:"Two concentric rings rotating in opposite directions for more visual energy.",recommendedUse:"Use when you want a richer spinner without overwhelming compact layouts.",defaultCount:2,minCount:2,maxCount:2},"segmented-ring":{value:"segmented-ring",label:"Segmented Ring",category:"spinner",description:"A segmented circular loader with precise ticks and premium motion.",recommendedUse:"Use when you want a polished technical spinner for dashboards, analytics, or admin tools.",defaultCount:10,minCount:6,maxCount:12},arc:{value:"arc",label:"Arc",category:"spinner",description:"A thick curved sweep with strong motion and excellent legibility.",recommendedUse:"Use on dashboards or surfaces where the loader needs a bold silhouette.",defaultCount:1,minCount:1,maxCount:1},orbit:{value:"orbit",label:"Orbit",category:"spinner",description:"A premium orbital motion with a stable central anchor.",recommendedUse:"Use in hero states, polished overlays, or brand-forward experiences.",defaultCount:2,minCount:2,maxCount:2},comet:{value:"comet",label:"Comet",category:"spinner",description:"A luminous point with a trailing comet tail orbiting a soft ring.",recommendedUse:"Use for premium hero states, modal loading, and brand-forward async moments.",defaultCount:2,minCount:2,maxCount:2},halo:{value:"halo",label:"Halo",category:"spinner",description:"A thin halo with soft glow pulses and minimal visual noise.",recommendedUse:"Use in refined enterprise interfaces where the loading state should stay elegant.",defaultCount:2,minCount:2,maxCount:2},radar:{value:"radar",label:"Radar",category:"spinner",description:"A scanning beam effect with layered depth.",recommendedUse:"Use for search, sync, telemetry, or data discovery moments.",defaultCount:3,minCount:3,maxCount:3},astronaut:{value:"astronaut",label:"Astronaut",category:"surface",description:"A floating astronaut illustration with soft starfield motion.",recommendedUse:"Use for onboarding, empty states, playful overlays, and premium loading moments.",defaultCount:3,minCount:3,maxCount:3},"astronaut-to-mars":{value:"astronaut-to-mars",label:"Astronaut To Mars",category:"surface",description:"A tiny astronaut traveling toward Mars with a cinematic space-route feel.",recommendedUse:"Use for route transitions, splash states, and standout brand-forward loading sequences.",defaultCount:4,minCount:4,maxCount:4},"baseball-player":{value:"baseball-player",label:"Baseball Player",category:"surface",description:"A batter driving the ball with a clean swing and curved flight path.",recommendedUse:"Use for sports products, onboarding, and illustrative loading states with momentum.",defaultCount:4,minCount:4,maxCount:4},"football-player":{value:"football-player",label:"Football Player",category:"surface",description:"A footballer striking the ball forward with a smooth kick arc.",recommendedUse:"Use for soccer experiences, score views, and highly expressive loading moments.",defaultCount:4,minCount:4,maxCount:4},galaxy:{value:"galaxy",label:"Galaxy",category:"surface",description:"A glowing spiral galaxy with a bright core, orbiting stars, and drifting cosmic dust.",recommendedUse:"Use for splash screens, premium hero states, sci-fi interfaces, and high-drama loading moments.",defaultCount:6,minCount:6,maxCount:6},pulse:{value:"pulse",label:"Pulse",category:"surface",description:"A breathing pulse with soft echo rings.",recommendedUse:"Use for ambient loading and low-noise inline states.",defaultCount:2,minCount:2,maxCount:2},"wave-dots":{value:"wave-dots",label:"Wave Dots",category:"dots",description:"Dots that ripple upward in sequence.",recommendedUse:"Use for conversational UIs, message streams, and compact inline feedback.",defaultCount:4,minCount:3,maxCount:8},"bouncing-dots":{value:"bouncing-dots",label:"Bouncing Dots",category:"dots",description:"Classic dot rhythm with a more premium bounce curve.",recommendedUse:"Use for buttons, compact surfaces, and general-purpose text-adjacent loading.",defaultCount:3,minCount:3,maxCount:8},"typing-dots":{value:"typing-dots",label:"Typing Dots",category:"dots",description:"A staggered fade-and-scale sequence inspired by chat typing indicators.",recommendedUse:"Use in assistants, feeds, or message composer feedback states.",defaultCount:3,minCount:3,maxCount:5},"grid-pulse":{value:"grid-pulse",label:"Grid Pulse",category:"surface",description:"A 3x3 pulse grid that feels structured, compact, and modern.",recommendedUse:"Use for compact surfaces, icon-scale loading, and data-heavy interface chrome.",defaultCount:9,minCount:9,maxCount:9},"magnetic-dots":{value:"magnetic-dots",label:"Magnetic Dots",category:"dots",description:"Dots that pull toward the center and relax outward in a magnetic rhythm.",recommendedUse:"Use for inline controls, button states, and compact polished micro-feedback.",defaultCount:4,minCount:3,maxCount:6},"spiral-dots":{value:"spiral-dots",label:"Spiral Dots",category:"dots",description:"Layered dots arranged in a rotating spiral with subtle depth.",recommendedUse:"Use for premium overlays and loaders that should feel more bespoke than a standard spinner.",defaultCount:6,minCount:5,maxCount:8},constellation:{value:"constellation",label:"Constellation",category:"dots",description:"Network-like nodes with a soft connected-system feel.",recommendedUse:"Use for AI, search, sync, and graph-oriented product experiences.",defaultCount:6,minCount:5,maxCount:6},"equalizer-bars":{value:"equalizer-bars",label:"Equalizer Bars",category:"bars",description:"Animated bars with an audio-like rhythm.",recommendedUse:"Use for analytics, media, and lively data surfaces.",defaultCount:5,minCount:3,maxCount:8},"rising-bars":{value:"rising-bars",label:"Rising Bars",category:"bars",description:"Clean bars that rise from a subtle track.",recommendedUse:"Use in tables, forms, and panels where you want linear motion.",defaultCount:4,minCount:3,maxCount:8},shimmer:{value:"shimmer",label:"Shimmer",category:"surface",description:"A modern skeleton-like shimmer strip.",recommendedUse:"Use for content placeholders, cards, and container-level loading.",defaultCount:1,minCount:1,maxCount:1},"scan-line":{value:"scan-line",label:"Scan Line",category:"surface",description:"A scanning line that sweeps across a clean data surface.",recommendedUse:"Use for tables, data panes, security-style scans, and content inspection states.",defaultCount:1,minCount:1,maxCount:1},"liquid-pill":{value:"liquid-pill",label:"Liquid Pill",category:"surface",description:"A rounded pill loader with fluid motion and soft internal glow.",recommendedUse:"Use for buttons, compact forms, and ambient inline loading with branded motion.",defaultCount:2,minCount:2,maxCount:2},"ripple-stack":{value:"ripple-stack",label:"Ripple Stack",category:"surface",description:"Concentric ripples that radiate outward with a calm layered cadence.",recommendedUse:"Use for overlays, fullscreen states, and soft-focus loading moments.",defaultCount:3,minCount:3,maxCount:4},"minimal-spinner":{value:"minimal-spinner",label:"Minimal Spinner",category:"spinner",description:"A thin understated spinner with understated motion.",recommendedUse:"Use where UI chrome should stay quiet and elegant.",defaultCount:1,minCount:1,maxCount:1},"neon-spinner":{value:"neon-spinner",label:"Neon Spinner",category:"spinner",description:"A glowing spinner with high-contrast accents.",recommendedUse:"Use in dark surfaces, product tours, and expressive brand moments.",defaultCount:2,minCount:2,maxCount:2},"glass-spinner":{value:"glass-spinner",label:"Glass Spinner",category:"spinner",description:"A frosted, translucent spinner with soft highlights.",recommendedUse:"Use on overlays and premium surface treatments.",defaultCount:2,minCount:2,maxCount:2},vortex:{value:"vortex",label:"Vortex",category:"spinner",description:"Multiple rotating elements that create a layered vortex effect.",recommendedUse:"Use for major loading transitions, modals, and splash states.",defaultCount:3,minCount:3,maxCount:3},cube:{value:"cube",label:"Cube",category:"surface",description:"Rotating geometric blocks with a clean enterprise-friendly feel.",recommendedUse:"Use in dashboards, admin tools, and product surfaces with grid structure.",defaultCount:4,minCount:4,maxCount:4},diamond:{value:"diamond",label:"Diamond",category:"surface",description:"Four angular facets that pulse in a diamond pattern.",recommendedUse:"Use when you want geometric motion that still feels compact.",defaultCount:4,minCount:4,maxCount:4},prism:{value:"prism",label:"Prism",category:"surface",description:"Glass-like prism shards rotating with translucent layered highlights.",recommendedUse:"Use on premium overlays, polished product shells, and modern dark themes.",defaultCount:3,minCount:3,maxCount:3},"skeleton-blocks":{value:"skeleton-blocks",label:"Skeleton Blocks",category:"surface",description:"A compact skeleton-style block layout with animated shimmer passes.",recommendedUse:"Use for content placeholders, side panels, cards, and list loading states.",defaultCount:4,minCount:4,maxCount:4}},fm=Object.values(bf);function ql(e){return bf[e]}function dm(e,t){const r=ql(e);return Pt(t.count??r.defaultCount,r.minCount,r.maxCount)}function aa(e,t){const r=e??t;return typeof r=="number"?`${r}px`:r}function hm(e){return e.replace(/[A-Z]/g,t=>`-${t.toLowerCase()}`)}function pm(e,t){Object.entries(t).forEach(([r,n])=>{const i=r.startsWith("--")?r:hm(r);if(n==null){e.style.removeProperty(i);return}e.style.setProperty(i,vm(n))})}function vm(e){return typeof e=="number"?String(e):e??""}function gm(e,t){const r=e.replace("#","").trim(),n=r.length===3?r.split("").map(a=>`${a}${a}`).join(""):r.length===4?r.split("").map(a=>`${a}${a}`).join(""):r;if(n.length!==6&&n.length!==8)return`color-mix(in srgb, ${e} ${Math.round(t*100)}%, transparent)`;const i=parseInt(n.slice(0,2),16),s=parseInt(n.slice(2,4),16),l=parseInt(n.slice(4,6),16),o=n.length===8?parseInt(n.slice(6,8),16)/255:1;return`rgba(${i}, ${s}, ${l}, ${Math.max(0,Math.min(1,o*t))})`}function mm(e,t){const r=e.replace(/rgba?\(/,"").replace(")","").split(",").map(n=>n.trim());return r.length<3?`color-mix(in srgb, ${e} ${Math.round(t*100)}%, transparent)`:`rgba(${r[0]}, ${r[1]}, ${r[2]}, ${t})`}function bm(e,t){const r=Math.max(0,Math.min(1,t));return e.startsWith("#")?gm(e,r):e.startsWith("rgb")?mm(e,r):`color-mix(in srgb, ${e} ${Math.round(r*100)}%, transparent)`}var ge={variant:"ring",size:"40px",color:"var(--rvl-theme-color)",speed:900,thickness:3,opacity:1,background:"var(--rvl-theme-overlay)",overlay:!1,blur:12,radius:"18px",gap:8,direction:"normal",label:"",inline:!1,centered:!1,fullscreen:!1,visible:!1,delay:0,minVisible:240,zIndex:1600,className:"",ariaLive:"polite",target:null};function ca(e={}){const t=e.variant??ge.variant,r=ql(t),n=e.color??ge.color,i=e.secondaryColor??bm(n,.2),s=Object.prototype.hasOwnProperty.call(e,"label"),l={variant:t,size:aa(e.size,ge.size),color:n,secondaryColor:i,speed:Pt(cr(e.speed,ge.speed),200,8e3),thickness:Pt(cr(e.thickness,ge.thickness),1,16),opacity:Pt(typeof e.opacity=="number"?e.opacity:ge.opacity,.12,1),background:e.background??ge.background,overlay:e.overlay??ge.overlay,blur:Pt(cr(e.blur,ge.blur),0,32),radius:aa(e.radius,ge.radius),gap:Pt(cr(e.gap,ge.gap),0,48),count:dm(t,e),direction:e.direction??ge.direction,label:s?e.label??"":ge.label,inline:e.inline??ge.inline,centered:e.centered??ge.centered,fullscreen:e.fullscreen??ge.fullscreen,visible:e.visible??ge.visible,delay:Pt(cr(e.delay,ge.delay),0,3e4),minVisible:Pt(cr(e.minVisible,ge.minVisible),0,6e4),zIndex:Pt(cr(e.zIndex,ge.zIndex),1,2147483647),className:e.className?.trim()??ge.className,style:e.style??{},ariaLive:e.ariaLive??ge.ariaLive,target:e.target??ge.target};return l.fullscreen&&(l.overlay=!0,l.inline=!1,l.centered=!0),l.inline&&(l.overlay=!1,l.fullscreen=!1),!s&&!l.label&&(l.label=`Loading with ${r.label.toLowerCase()}`),l}var ym=`
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
`,pt=`
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
`,ua=".rvl-variant--",fa=new Map;function Cm(e){const t=`${ua}${e}`,r=[];let n=0;for(;n<pt.length;){for(;n<pt.length&&/\s/.test(pt[n]??"");)n+=1;if(n>=pt.length)break;const i=n;for(;n<pt.length&&pt[n]!=="{";)n+=1;if(n>=pt.length)break;const s=pt.slice(i,n).trim();n+=1;const l=n;let o=1;for(;n<pt.length&&o>0;){const u=pt[n];u==="{"?o+=1:u==="}"&&(o-=1),n+=1}if(!s.includes(ua))continue;const a=s.split(",").map(u=>u.trim()).filter(Boolean).filter(u=>u.includes(t));if(!a.length)continue;const c=pt.slice(l,n-1).trimEnd();r.push(`${a.join(`,
`)} {
${c}
}`)}return r.join(`

`)}function Sm(e){const t=fa.get(e);if(t)return t;const r=Cm(e);return fa.set(e,r),r}var wm=ym;function yf(){return typeof window<"u"&&typeof document<"u"}var da="data-rvl-loading-base",ha="data-rvl-loading-variant";function _m(e){if(e.head.querySelector(`[${da}]`))return;const t=e.createElement("style");t.setAttribute(da,"true"),t.textContent=wm,e.head.append(t)}function Tm(e,t){if(t.head.querySelector(`[${ha}="${e}"]`))return;const r=Sm(e);if(!r.trim())return;const n=t.createElement("style");n.setAttribute(ha,e),n.textContent=r,t.head.append(n)}function pa(e,t=document){yf()&&(_m(t),Tm(e,t))}function xm(e,t=document){if(typeof e=="string"){const r=t.querySelector(e);if(!r)throw new Error(`@stackline/loading could not find target "${e}".`);return r}return e instanceof HTMLElement?e:t.body}function Em(e){if(e===document.body||e===document.documentElement)return()=>{};const t=window.getComputedStyle(e).position;if(t&&t!=="static")return()=>{};const r=e.style.position;return e.style.position="relative",()=>{if(r){e.style.position=r;return}e.style.removeProperty("position")}}var va=0;function km(e="rvl"){return va+=1,`${e}-${va}`}var Am=class{constructor(e={}){if(He(this,"id",km()),He(this,"element"),He(this,"state",{mounted:!1,visible:!1,destroyed:!1,pending:null}),He(this,"bodyElement"),He(this,"visualElement"),He(this,"labelElement"),He(this,"srElement"),He(this,"options"),He(this,"mountedTarget",null),He(this,"restorePositionContext",null),He(this,"showTimeoutId",null),He(this,"hideTimeoutId",null),He(this,"showResolver",null),He(this,"hideResolver",null),He(this,"shownAt",0),!yf())throw new Error("@stackline/loading requires a browser-like DOM to create loaders.");this.options=ca(e),pa(this.options.variant),this.element=document.createElement("div"),this.element.dataset.rvlLoader=this.id,this.bodyElement=document.createElement("div"),this.bodyElement.className="rvl-body",this.visualElement=document.createElement("div"),this.visualElement.className="rvl-visual",this.visualElement.setAttribute("aria-hidden","true"),this.labelElement=document.createElement("span"),this.labelElement.className="rvl-label",this.srElement=document.createElement("span"),this.srElement.className="rvl-sr-only",this.bodyElement.append(this.visualElement,this.labelElement,this.srElement),this.element.append(this.bodyElement),this.render(),(this.options.target||this.options.fullscreen)&&this.mount(this.options.target),this.options.visible?this.show():this.element.hidden=!0}getOptions(){return{...this.options,style:{...this.options.style}}}mount(e){this.assertAlive();const t=this.resolveMountTarget(e);return this.mountedTarget===t&&this.state.mounted?this:(this.unmount(),this.options.overlay&&!this.options.fullscreen&&(this.restorePositionContext=Em(t)),t.append(this.element),this.mountedTarget=t,this.state.mounted=!0,this)}unmount(){return this.element.parentElement&&this.element.parentElement.removeChild(this.element),this.restorePositionContext&&(this.restorePositionContext(),this.restorePositionContext=null),this.mountedTarget=null,this.state.mounted=!1,this}show(){return this.assertAlive(),this.state.visible&&this.state.pending!=="hide"?Promise.resolve():(this.clearHideTimer(!0),this.state.pending="show",this.state.mounted||this.mount(this.options.target),new Promise(e=>{const t=()=>{this.state.pending=null,this.state.visible=!0,this.shownAt=Date.now(),this.element.hidden=!1,this.syncVisibility(),this.showResolver?.(),this.showResolver=null};if(this.clearShowTimer(!0),this.showResolver=e,this.options.delay>0){this.showTimeoutId=window.setTimeout(t,this.options.delay);return}t()}))}hide(){return this.assertAlive(),!this.state.visible&&this.state.pending!=="show"?(this.syncVisibility(),Promise.resolve()):(this.clearShowTimer(!0),this.state.pending="hide",new Promise(e=>{const t=()=>{this.state.pending=null,this.state.visible=!1,this.syncVisibility(),this.hideResolver?.(),this.hideResolver=null};if(this.clearHideTimer(!0),this.hideResolver=e,!this.state.visible){t();return}const r=this.shownAt?Date.now()-this.shownAt:0,n=Math.max(0,this.options.minVisible-r);if(n>0){this.hideTimeoutId=window.setTimeout(t,n);return}t()}))}toggle(e){return(typeof e=="boolean"?e:!this.state.visible)?this.show():this.hide()}update(e){this.assertAlive();const t=this.resolveMountTarget();this.options=ca({...this.options,...e,style:{...this.options.style,...e.style??{}}}),pa(this.options.variant),this.render();const r=this.resolveMountTarget();return t!==r&&this.state.mounted&&this.mount(r),this}destroy(){this.state.destroyed||(this.clearShowTimer(!0),this.clearHideTimer(!0),this.unmount(),this.state.destroyed=!0)}render(){const e=ql(this.options.variant);this.element.className=["rvl-loader",`rvl-variant--${this.options.variant}`,this.options.inline?"is-inline":"is-block",this.options.overlay?"is-overlay":"",this.options.fullscreen?"is-fullscreen":"",this.options.centered?"is-centered":"",this.options.label?"has-label":"",this.options.className].filter(Boolean).join(" "),this.element.setAttribute("role","status"),this.element.setAttribute("aria-live",this.options.ariaLive),this.element.setAttribute("aria-atomic","true"),this.element.setAttribute("aria-busy",this.state.visible?"true":"false"),this.element.dataset.variant=this.options.variant,this.element.style.cssText="",this.element.style.setProperty("--rvl-size",this.options.size),this.element.style.setProperty("--rvl-color",this.options.color),this.element.style.setProperty("--rvl-secondary-color",this.options.secondaryColor),this.element.style.setProperty("--rvl-speed",`${this.options.speed}ms`),this.element.style.setProperty("--rvl-thickness",`${this.options.thickness}px`),this.element.style.setProperty("--rvl-opacity",`${this.options.opacity}`),this.element.style.setProperty("--rvl-background",this.options.background),this.element.style.setProperty("--rvl-blur",`${this.options.blur}px`),this.element.style.setProperty("--rvl-radius",this.options.radius),this.element.style.setProperty("--rvl-gap",`${this.options.gap}px`),this.element.style.setProperty("--rvl-z-index",`${this.options.zIndex}`),this.element.style.setProperty("animation-direction",this.options.direction),pm(this.element,this.options.style),this.labelElement.textContent=this.options.label,this.srElement.textContent=this.options.label,this.options.label?this.element.setAttribute("aria-label",this.options.label):this.element.removeAttribute("aria-label"),this.element.title=e.label,this.visualElement.replaceChildren();for(let t=0;t<this.options.count;t+=1){const r=document.createElement("span");r.className="rvl-part",r.style.setProperty("--part-index",String(t)),this.visualElement.append(r)}this.syncVisibility()}syncVisibility(){this.element.hidden=!this.state.visible,this.element.setAttribute("aria-busy",this.state.visible?"true":"false"),this.element.setAttribute("aria-hidden",this.state.visible?"false":"true")}resolveMountTarget(e){return this.options.fullscreen?document.body:xm(e??this.options.target)}clearShowTimer(e=!1){this.showTimeoutId!=null&&(window.clearTimeout(this.showTimeoutId),this.showTimeoutId=null),e&&this.showResolver&&(this.showResolver(),this.showResolver=null)}clearHideTimer(e=!1){this.hideTimeoutId!=null&&(window.clearTimeout(this.hideTimeoutId),this.hideTimeoutId=null),e&&this.hideResolver&&(this.hideResolver(),this.hideResolver=null)}assertAlive(){if(this.state.destroyed)throw new Error("@stackline/loading cannot operate on a destroyed loader.")}};function Wl(e={}){return new Am(e)}function ga(e,t,r){return e?r?(r.update({...t,target:e}),r):Wl({...t,target:e,visible:!1}):null}const ma=jn({name:"ReviveLoading",inheritAttrs:!1,props:{visible:{type:Boolean,default:!0},options:{type:Object,default:()=>({})}},emits:["create","shown","hidden","updated","destroyed"],setup(e,{attrs:t,emit:r,expose:n,slots:i}){const s=nt(null),l=nt(null);function o(){if(l.value=ga(s.value,e.options||{},l.value),!!l.value){if(r("updated",l.value),e.visible){l.value.show().then(()=>{l.value&&r("shown",l.value)});return}l.value.hide().then(()=>{l.value&&r("hidden",l.value)})}}function a(){if(l.value){const c=l.value;c.destroy(),l.value=null,r("destroyed",c)}}return nn(()=>{l.value=ga(s.value,e.options||{},l.value),l.value&&r("create",l.value),o()}),rr(()=>e.visible,()=>{o()}),rr(()=>e.options,()=>{o()},{deep:!0}),qn(()=>{a()}),n({getInstance(){return l.value},show(){return l.value?l.value.show():Promise.resolve()},hide(){return l.value?l.value.hide():Promise.resolve()},toggle(c){return l.value?l.value.toggle(c):Promise.resolve()},update(c){l.value&&l.value.update(c)},destroy(){a()}}),()=>wl("div",{...t,ref:s},i.default?i.default():void 0)}}),Bi=new WeakMap;function Nm(e){if(typeof e=="boolean")return{visible:e,options:{}};if(e&&typeof e=="object"&&("visible"in e||"options"in e)){const t=e;return{visible:typeof t.visible=="boolean"?t.visible:!0,options:t.options||{}}}return{visible:!0,options:e||{}}}function Im(e,t){const r=Nm(t.value),n=Bi.get(e);if(!n){const i=Wl({...r.options,target:e,visible:!1});return Bi.set(e,i),{instance:i,normalized:r}}return n.update({...r.options,target:e}),{instance:n,normalized:r}}function hn(e,t){const{instance:r,normalized:n}=Im(e,t);if(n.visible){r.show();return}r.hide()}function ba(e){const t=Bi.get(e);t&&(t.destroy(),Bi.delete(e))}const Om={mounted(e,t){hn(e,t)},updated(e,t){hn(e,t)},beforeUnmount(e){ba(e)},bind(e,t){hn(e,t)},inserted(e,t){hn(e,t)},update(e,t){hn(e,t)},unbind(e){ba(e)}};function Rm(e,t,r){const n={...e,...r||{}};return typeof t<"u"&&(n.target=t),n}function Pm(e={}){let t=null;function r(n,i){const s=Rm(e,n,i);return t?(typeof s.target<"u"&&t.mount(s.target),t.update(s),t):(t=Wl({...s,visible:!1}),t)}return{create(n,i){return r(n,i)},mount(n,i){return r(n,i)},async show(n,i){const s=r(n,i);return await s.show(),s},hide(){return t?t.hide():Promise.resolve()},toggle(n){return t?t.toggle(n):Promise.resolve()},update(n){return t?(t.update(n),t):null},destroy(){t&&(t.destroy(),t=null)},getInstance(){return t}}}const Mm={install(e){e.component("revive-loading",ma),e.component("ReviveLoading",ma),e.directive("revive-loading",Om)}},Lm=(e,t)=>{const r=e.__vccOpts||e;for(const[n,i]of t)r[n]=i;return r},Dm="npm install @stackline/vue-loading@3",Vm=`import { createApp } from 'vue';
import App from './App.vue';
import VueLoading from '@stackline/vue-loading';

createApp(App).use(VueLoading).mount('#app');`,Fm='<div v-revive-loading="{ visible: isLoading, options: loadingOptions }">...</div>',$m=`<revive-loading
  :visible="true"
  :options="{
    variant: 'orbit',
    size: 56,
    centered: true,
    label: 'Loading dashboard'
  }"
  :style="{ minHeight: '180px' }"
/>`,Um=`<section
  v-revive-loading="{ visible: isLoading, options: loadingOptions }"
  class="card-shell"
>
  ...
</section>`,zm=`import { createLoadingController } from '@stackline/vue-loading';

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
}`,Bm=[{id:"default",label:"Default",description:"A clean centered stage for checking size, color, speed, and label choices."},{id:"dashboard",label:"Dashboard",description:"Keep product cards visible while the active region stays anchored to a loading state."},{id:"table",label:"Table",description:"A common analytics refresh pattern where the user should keep their table context."},{id:"page",label:"Page",description:"Simulate a route-level or workspace-level loading state inside the docs shell."},{id:"modal",label:"Modal",description:"Load only the modal body while keeping the dialog frame stable."},{id:"chart",label:"Chart",description:"Useful for analytical surfaces where movement should feel intentional and data-centric."},{id:"upload",label:"Upload",description:"A drop zone preview for uploads, media workflows, and file-heavy forms."}];function ya(e){return`${new Date().toLocaleTimeString("en-US",{hour12:!1})}  ${e}`}function Ca(e,t){let r="";for(let n=0;n<t;n+=1)r+=e;return r}function Hm(e){return String(e).split("'").join("\\'")}function jm(e){const t=e.fullscreen,r=e.overlay||t,n={variant:e.variant,size:e.size,speed:e.speed,color:e.color,secondaryColor:e.secondaryColor,centered:r?!0:e.centered,delay:e.delay,minVisible:e.minVisible};return e.label&&(n.label=e.label),r&&(n.overlay=!0),t&&(n.background="rgba(15, 23, 42, 0.54)"),n}function Ns(e,t,r=!1){const n=Ca(" ",t),i=Ca(" ",t+2),s=["{",`${i}variant: '${e.variant}',`,`${i}size: ${e.size},`,`${i}speed: ${e.speed},`,`${i}color: '${e.color}',`,`${i}secondaryColor: '${e.secondaryColor}',`];return(e.overlay||e.fullscreen||r)&&s.push(`${i}overlay: true,`),e.fullscreen&&(s.push(`${i}fullscreen: true,`),s.push(`${i}background: 'rgba(15, 23, 42, 0.54)',`)),e.centered&&!e.fullscreen&&s.push(`${i}centered: true,`),e.label&&s.push(`${i}label: '${Hm(e.label)}',`),e.delay>0&&s.push(`${i}delay: ${e.delay},`),e.minVisible!==240&&s.push(`${i}minVisible: ${e.minVisible},`),s.push(`${n}}`),s.join(`
`)}function Km(e){return e==="modal"?['<div class="modal-shell">','  <div class="modal-header"></div>','  <div class="modal-body">','    <div class="modal-line"></div>','    <div class="modal-line short"></div>','    <div class="modal-line"></div>',"  </div>","</div>"].join(`
`):e==="table"?['<div class="table-shell">','  <div class="table-head">',"    <span>Status</span>","    <span>Customer</span>","    <span>Plan</span>","    <span>MRR</span>","  </div>",'  <div class="table-row">...</div>','  <div class="table-row">...</div>',"</div>"].join(`
`):e==="chart"?['<div class="chart-panel">','  <div class="chart-bar"></div>','  <div class="chart-bar"></div>','  <div class="chart-bar"></div>',"</div>"].join(`
`):e==="upload"?['<div class="upload-zone">','  <div class="upload-icon"></div>',"  <p>Drop files here</p>","</div>"].join(`
`):e==="page"?['<section class="page-shell">','  <header class="page-topbar"></header>','  <div class="page-grid">...</div>',"</section>"].join(`
`):['<section class="dashboard-cards">','  <div class="card"></div>','  <div class="card"></div>','  <div class="card card-wide"></div>',"</section>"].join(`
`)}function qm(e,t){return e.fullscreen?["import { createLoadingController } from '@stackline/vue-loading';","","const loading = createLoadingController();","","async function showLoader() {",`  const instance = await loading.show(document.body, ${Ns(e,4,!0)});`,"  window.setTimeout(() => {","    void instance.hide();","  }, 1200);","}"].join(`
`):t==="default"&&!e.overlay?["<revive-loading",'  :visible="isLoading"',`  :options="${Ns(e,2)}"`,`  :style="{ minHeight: '220px' }"`,"/>"].join(`
`):["<section",`  v-revive-loading="{ visible: isLoading, options: ${Ns(e,2,!0)} }"`,">",Km(t),"</section>"].join(`
`)}const Wm=jn({name:"VueLoadingDocsApp",props:{vueLine:{type:String,required:!0}},setup(e){const t=Pm(),r=nt([ya(`Vue ${e.vueLine} docs ready.`)]),n=Bm,i=fm.map(E=>({value:E.value,label:E.label})),s=nt("default"),l=nt("Copy code"),o=Kr({install:"Copy",plugin:"Copy",directive:"Copy",component:"Copy",overlay:"Copy",controller:"Copy"}),a=nt(!0),c=nt(!0),u=nt(!1),f=Kr({variant:"orbit",size:60,speed:900,color:"#2563eb",secondaryColor:"#c7d2fe",overlay:!1,fullscreen:!1,centered:!0,label:"Loading preview",delay:0,minVisible:240,reducedMotion:!1}),p=dr(()=>jm(f)),v=dr(()=>qm(f,s.value)),y=dr(()=>{const E=n.find(w=>w.id===s.value);return E?E.description:""}),b=dr(()=>({overlay:!0,centered:!0,variant:"glass-spinner",color:"#2563eb",secondaryColor:"#dbeafe",label:"Loading revenue card",minVisible:400})),P=dr(()=>({overlay:!0,centered:!0,variant:"liquid-pill",size:42,label:""}));function N(E){r.value=[ya(E),...r.value].slice(0,16)}async function _(){N("Showing fullscreen loader from createLoadingController.");const E=await t.show(document.body,{fullscreen:!0,overlay:!0,centered:!0,variant:"galaxy",color:"#38bdf8",secondaryColor:"#bfdbfe",minVisible:500,label:"Loading workspace"});window.setTimeout(()=>{E.hide().then(()=>{N("Fullscreen loader hidden.")})},1300)}function h(){c.value=!1,window.setTimeout(()=>{c.value=!0,N("Dashboard overlay replayed.")},40)}function m(){u.value=!0,N("Button loading state activated."),window.setTimeout(()=>{u.value=!1,N("Button loading state cleared.")},1200)}function S(){a.value=!1,window.setTimeout(()=>{a.value=!0},40)}async function A(){try{if(navigator.clipboard&&navigator.clipboard.writeText)await navigator.clipboard.writeText(v.value);else{const E=document.createElement("textarea");E.value=v.value,E.setAttribute("readonly","true"),E.style.position="absolute",E.style.left="-9999px",document.body.appendChild(E),E.select(),document.execCommand("copy"),document.body.removeChild(E)}l.value="Copied"}catch{l.value="Copy failed"}window.setTimeout(()=>{l.value="Copy code"},1200)}async function L(E,w){try{if(navigator.clipboard&&navigator.clipboard.writeText)await navigator.clipboard.writeText(w);else{const x=document.createElement("textarea");x.value=w,x.setAttribute("readonly","true"),x.style.position="absolute",x.style.left="-9999px",document.body.appendChild(x),x.select(),document.execCommand("copy"),document.body.removeChild(x)}o[E]="Copied"}catch{o[E]="Copy failed"}window.setTimeout(()=>{o[E]="Copy"},1200)}return{activeDescription:y,activeSurface:s,buttonOptions:P,buttonVisible:u,cardSurfaceOptions:b,componentCode:$m,controllerCode:zm,copyButtonLabel:l,copyCode:A,copySnippet:L,directiveCode:Fm,generatedCode:v,installCode:Dm,logs:r,overlayCode:Um,pluginCode:Vm,previewOptions:p,previewVisible:a,replayButtonSurface:m,replayCardSurface:h,replayTiming:S,runFullscreenDemo:_,state:f,snippetCopyLabels:o,surfaceVisible:c,surfaces:n,variants:i}}}),Gm={class:"app-shell"},Ym={class:"hero-grid"},Jm={class:"hero-card hero-main"},Xm={class:"badge"},Qm={class:"hero-card hero-setup"},Zm={class:"step"},eb={class:"code-block-shell is-compact"},tb={class:"code-block-head"},rb={class:"code-block compact"},nb={class:"step"},ib={class:"code-block-shell is-compact"},sb={class:"code-block-head"},lb={class:"code-block compact"},ob={class:"step"},ab={class:"code-block-shell is-compact"},cb={class:"code-block-head"},ub={class:"code-block compact"},fb={class:"playground-row"},db={class:"demo-card playground-card",id:"playground"},hb={class:"playground-shell"},pb={class:"playground-controls"},vb={class:"field"},gb=["value"],mb={class:"field"},bb={for:"playground-size"},yb={class:"field"},Cb={for:"playground-speed"},Sb={class:"field two-up"},wb={class:"field"},_b={class:"field two-up"},Tb={class:"toggle-row"},xb={class:"playground-actions"},Eb={class:"playground-preview"},kb={class:"playground-preview-tabs",role:"tablist","aria-label":"Preview surfaces"},Ab=["aria-selected","onClick"],Nb={class:"playground-description"},Ib={class:"modal-shell"},Ob={class:"modal-body"},Rb={class:"code-block code-preview"},Pb={class:"content-grid",id:"examples"},Mb={class:"examples-column"},Lb={class:"demo-card"},Db={class:"code-block-shell"},Vb={class:"code-block-head"},Fb={class:"code-block"},$b={class:"surface-frame"},Ub={class:"demo-card"},zb={class:"code-block-shell"},Bb={class:"code-block-head"},Hb={class:"code-block"},jb={class:"inline-actions"},Kb={class:"card-shell"},qb={class:"demo-card"},Wb={class:"button-surface"},Gb={class:"button-shell"},Yb={class:"demo-card"},Jb={class:"code-block-shell"},Xb={class:"code-block-head"},Qb={class:"code-block"},Zb={class:"inline-actions"},ey={class:"sidebar-column"},ty={class:"demo-card side-card"},ry={class:"event-log"};function ny(e,t,r,n,i,s){const l=Cc("revive-loading"),o=wc("revive-loading");return be(),Ne("div",Gm,[C("header",Ym,[C("section",Jm,[C("span",Xm,"Vue "+me(e.vueLine)+" · Loading wrapper",1),t[23]||(t[23]=Mr('<h1>@stackline/vue-loading</h1><p> Maintained Vue bindings for the Stackline loading toolkit. Keep the loading engine framework-agnostic, then add Vue-native ergonomics for declarative components, host directives, and fullscreen programmatic states. </p><div class="hero-actions"><a class="button primary" href="#playground">Open playground</a><a class="button secondary" href="https://github.com/alexandroit/vue-loading#readme" rel="noreferrer" target="_blank"> README </a></div><div class="hero-notes"><div><strong>Declarative</strong> Use a plain Vue component when the loader itself is what you want to render.</div><div><strong>Directive-ready</strong> Turn an existing card, table, chart shell, modal body, or upload zone into a loading surface.</div><div><strong>Programmatic</strong> Use a controller for fullscreen and workspace-level loading flows.</div></div>',4))]),C("section",Qm,[t[30]||(t[30]=C("h2",null,"Setup in 3 steps",-1)),C("div",Zm,[t[25]||(t[25]=C("span",null,"1",-1)),C("div",null,[t[24]||(t[24]=C("strong",null,"Install the wrapper",-1)),C("div",eb,[C("div",tb,[C("button",{type:"button",class:"ghost-button copy-button",onClick:t[0]||(t[0]=a=>e.copySnippet("install",e.installCode))},me(e.snippetCopyLabels.install),1)]),C("pre",rb,me(e.installCode),1)])])]),C("div",nb,[t[27]||(t[27]=C("span",null,"2",-1)),C("div",null,[t[26]||(t[26]=C("strong",null,"Register the plugin",-1)),C("div",ib,[C("div",sb,[C("button",{type:"button",class:"ghost-button copy-button",onClick:t[1]||(t[1]=a=>e.copySnippet("plugin",e.pluginCode))},me(e.snippetCopyLabels.plugin),1)]),C("pre",lb,me(e.pluginCode),1)])])]),C("div",ob,[t[29]||(t[29]=C("span",null,"3",-1)),C("div",null,[t[28]||(t[28]=C("strong",null,"Choose component, directive, or controller",-1)),C("div",ab,[C("div",cb,[C("button",{type:"button",class:"ghost-button copy-button",onClick:t[2]||(t[2]=a=>e.copySnippet("directive",e.directiveCode))},me(e.snippetCopyLabels.directive),1)]),C("pre",ub,me(e.directiveCode),1)])])])])]),C("div",fb,[C("section",db,[t[51]||(t[51]=C("div",{class:"demo-head"},[C("div",null,[C("h3",null,"Playground"),C("p",null,"Use the Vue wrapper against the same kind of interactive preview shell as the core docs.")])],-1)),C("div",hb,[C("form",pb,[C("div",vb,[t[31]||(t[31]=C("label",{for:"playground-variant"},"Variant",-1)),Se(C("select",{id:"playground-variant","onUpdate:modelValue":t[3]||(t[3]=a=>e.state.variant=a)},[(be(!0),Ne(ye,null,gn(e.variants,a=>(be(),Ne("option",{key:a.value,value:a.value},me(a.label),9,gb))),128))],512),[[Tl,e.state.variant]])]),C("div",mb,[C("label",bb,[t[32]||(t[32]=Lt("Size ",-1)),C("span",null,me(e.state.size)+"px",1)]),Se(C("input",{id:"playground-size","onUpdate:modelValue":t[4]||(t[4]=a=>e.state.size=a),type:"range",min:"18",max:"96"},null,512),[[vt,e.state.size,void 0,{number:!0}]])]),C("div",yb,[C("label",Cb,[t[33]||(t[33]=Lt("Speed ",-1)),C("span",null,me(e.state.speed)+"ms",1)]),Se(C("input",{id:"playground-speed","onUpdate:modelValue":t[5]||(t[5]=a=>e.state.speed=a),type:"range",min:"300",max:"2200",step:"50"},null,512),[[vt,e.state.speed,void 0,{number:!0}]])]),C("div",Sb,[C("div",null,[t[34]||(t[34]=C("label",{for:"playground-color"},"Primary",-1)),Se(C("input",{id:"playground-color","onUpdate:modelValue":t[6]||(t[6]=a=>e.state.color=a),type:"color"},null,512),[[vt,e.state.color]])]),C("div",null,[t[35]||(t[35]=C("label",{for:"playground-secondary-color"},"Secondary",-1)),Se(C("input",{id:"playground-secondary-color","onUpdate:modelValue":t[7]||(t[7]=a=>e.state.secondaryColor=a),type:"color"},null,512),[[vt,e.state.secondaryColor]])])]),C("div",wb,[t[36]||(t[36]=C("label",{for:"playground-label"},"Label",-1)),Se(C("input",{id:"playground-label","onUpdate:modelValue":t[8]||(t[8]=a=>e.state.label=a),type:"text"},null,512),[[vt,e.state.label]])]),C("div",_b,[C("div",null,[t[37]||(t[37]=C("label",{for:"playground-delay"},"Delay",-1)),Se(C("input",{id:"playground-delay","onUpdate:modelValue":t[9]||(t[9]=a=>e.state.delay=a),type:"number",min:"0",step:"50"},null,512),[[vt,e.state.delay,void 0,{number:!0}]])]),C("div",null,[t[38]||(t[38]=C("label",{for:"playground-min-visible"},"Min visible",-1)),Se(C("input",{id:"playground-min-visible","onUpdate:modelValue":t[10]||(t[10]=a=>e.state.minVisible=a),type:"number",min:"0",step:"50"},null,512),[[vt,e.state.minVisible,void 0,{number:!0}]])])]),C("div",Tb,[C("label",null,[Se(C("input",{"onUpdate:modelValue":t[11]||(t[11]=a=>e.state.overlay=a),type:"checkbox"},null,512),[[hr,e.state.overlay]]),t[39]||(t[39]=Lt(" Overlay",-1))]),C("label",null,[Se(C("input",{"onUpdate:modelValue":t[12]||(t[12]=a=>e.state.fullscreen=a),type:"checkbox"},null,512),[[hr,e.state.fullscreen]]),t[40]||(t[40]=Lt(" Fullscreen",-1))]),C("label",null,[Se(C("input",{"onUpdate:modelValue":t[13]||(t[13]=a=>e.state.centered=a),type:"checkbox"},null,512),[[hr,e.state.centered]]),t[41]||(t[41]=Lt(" Centered",-1))]),C("label",null,[Se(C("input",{"onUpdate:modelValue":t[14]||(t[14]=a=>e.state.reducedMotion=a),type:"checkbox"},null,512),[[hr,e.state.reducedMotion]]),t[42]||(t[42]=Lt(" Reduced motion",-1))])]),C("div",xb,[C("button",{type:"button",onClick:t[15]||(t[15]=(...a)=>e.replayTiming&&e.replayTiming(...a))},"Replay timing"),C("button",{type:"button",class:"ghost-button",onClick:t[16]||(t[16]=(...a)=>e.copyCode&&e.copyCode(...a))},me(e.copyButtonLabel),1)])]),C("div",Eb,[C("div",kb,[(be(!0),Ne(ye,null,gn(e.surfaces,a=>(be(),Ne("button",{key:a.id,type:"button",role:"tab",class:Ye(["playground-preview-tab",{"is-active":e.activeSurface===a.id}]),"aria-selected":e.activeSurface===a.id,onClick:c=>e.activeSurface=a.id},me(a.label),11,Ab))),128))]),C("p",Nb,me(e.activeDescription),1),C("div",{class:Ye(["playground-stage",{"is-reduced-motion":e.state.reducedMotion}])},[e.activeSurface==="default"&&!e.previewOptions.overlay?(be(),Ne("div",{key:0,class:Ye(["playground-surface","playground-surface--clean",{"is-fullscreen-simulated":e.state.fullscreen}])},[he(l,{visible:e.previewVisible,options:e.previewOptions,class:"playground-loader-host",style:tn({minHeight:e.state.fullscreen?"400px":"320px",width:"100%"})},null,8,["visible","options","style"])],2)):e.activeSurface==="table"?Se((be(),Ne("div",{key:1,class:Ye(["playground-surface","surface-table",{"is-fullscreen-simulated":e.state.fullscreen}])},[t[44]||(t[44]=C("div",{class:"playground-table-head"},[C("span",null,"Status"),C("span",null,"Customer"),C("span",null,"Plan"),C("span",null,"MRR")],-1)),(be(),Ne(ye,null,gn(4,a=>C("div",{key:"table-"+a,class:"playground-table-row"},[...t[43]||(t[43]=[C("span",null,[C("i")],-1),C("span",null,[C("i")],-1),C("span",null,[C("i")],-1),C("span",null,[C("i")],-1)])])),64))],2)),[[o,{visible:e.previewVisible,options:e.previewOptions}]]):e.activeSurface==="page"?Se((be(),Ne("div",{key:2,class:Ye(["playground-surface","surface-page",{"is-fullscreen-simulated":e.state.fullscreen}])},[...t[45]||(t[45]=[Mr('<div class="page-topbar"></div><div class="page-grid"><div class="page-tile"></div><div class="page-tile"></div><div class="page-tile"></div><div class="page-tile"></div></div>',2)])],2)),[[o,{visible:e.previewVisible,options:e.previewOptions}]]):e.activeSurface==="modal"?(be(),Ne("div",{key:3,class:Ye(["playground-surface","surface-modal",{"is-fullscreen-simulated":e.state.fullscreen}])},[C("div",Ib,[t[47]||(t[47]=C("div",{class:"modal-header"},null,-1)),Se((be(),Ne("div",Ob,[...t[46]||(t[46]=[C("div",{class:"modal-line"},null,-1),C("div",{class:"modal-line short"},null,-1),C("div",{class:"modal-line"},null,-1)])])),[[o,{visible:e.previewVisible,options:e.previewOptions}]])])],2)):e.activeSurface==="chart"?Se((be(),Ne("div",{key:4,class:Ye(["playground-surface","surface-chart",{"is-fullscreen-simulated":e.state.fullscreen}])},[...t[48]||(t[48]=[Mr('<div class="chart-bar" style="height:28%;"></div><div class="chart-bar" style="height:46%;"></div><div class="chart-bar" style="height:60%;"></div><div class="chart-bar" style="height:38%;"></div><div class="chart-bar" style="height:72%;"></div><div class="chart-bar" style="height:55%;"></div>',6)])],2)),[[o,{visible:e.previewVisible,options:e.previewOptions}]]):e.activeSurface==="upload"?Se((be(),Ne("div",{key:5,class:Ye(["playground-surface","surface-upload",{"is-fullscreen-simulated":e.state.fullscreen}])},[...t[49]||(t[49]=[C("div",{class:"upload-icon"},null,-1),C("div",{class:"upload-title"},"Drop files here",-1),C("div",{class:"upload-caption"},"PNG, SVG, PDF up to 25 MB",-1)])],2)),[[o,{visible:e.previewVisible,options:e.previewOptions}]]):Se((be(),Ne("div",{key:6,class:Ye(["playground-surface","surface-card-grid",{"is-fullscreen-simulated":e.state.fullscreen}])},[...t[50]||(t[50]=[C("div",{class:"surface-card-cell"},null,-1),C("div",{class:"surface-card-cell"},null,-1),C("div",{class:"surface-card-cell wide"},null,-1)])],2)),[[o,{visible:e.previewVisible,options:e.previewOptions}]])],2),C("pre",Rb,me(e.generatedCode),1)])])])]),C("main",Pb,[C("section",Mb,[C("section",Lb,[t[52]||(t[52]=C("div",{class:"demo-head"},[C("div",null,[C("h3",null,"Basic component"),C("p",null,"Use the Vue component when the loader itself is the thing being rendered in the tree.")])],-1)),C("div",Db,[C("div",Vb,[C("button",{type:"button",class:"ghost-button copy-button",onClick:t[17]||(t[17]=a=>e.copySnippet("component",e.componentCode))},me(e.snippetCopyLabels.component),1)]),C("pre",Fb,me(e.componentCode),1)]),C("div",$b,[he(l,{visible:"",options:{variant:"orbit",size:56,centered:!0,color:"#2563eb",secondaryColor:"#bfdbfe",label:"Loading dashboard"},class:"component-stage",style:{minHeight:"220px"}})])]),C("section",Ub,[t[54]||(t[54]=C("div",{class:"demo-head"},[C("div",null,[C("h3",null,"Directive overlay surface"),C("p",null,"Turn an existing card surface into a loading region without rebuilding the layout around the loader.")])],-1)),C("div",zb,[C("div",Bb,[C("button",{type:"button",class:"ghost-button copy-button",onClick:t[18]||(t[18]=a=>e.copySnippet("overlay",e.overlayCode))},me(e.snippetCopyLabels.overlay),1)]),C("pre",Hb,me(e.overlayCode),1)]),C("div",jb,[C("button",{type:"button",class:"button secondary",onClick:t[19]||(t[19]=(...a)=>e.replayCardSurface&&e.replayCardSurface(...a))},"Replay card loader")]),Se((be(),Ne("div",Kb,[...t[53]||(t[53]=[Mr('<div class="card-metric">$128,400</div><div class="card-caption">Quarterly expansion pipeline</div><div class="card-bars"><span style="height:46%;"></span><span style="height:68%;"></span><span style="height:54%;"></span><span style="height:79%;"></span></div>',3)])])),[[o,{visible:e.surfaceVisible,options:e.cardSurfaceOptions}]])]),C("section",qb,[t[55]||(t[55]=C("div",{class:"demo-head"},[C("div",null,[C("h3",null,"Button and submit states"),C("p",null,"Use the same directive around a button surface when the request should stay anchored to the action.")])],-1)),C("div",Wb,[Se((be(),Ne("div",Gb,[C("button",{type:"button",class:"cta-button",onClick:t[20]||(t[20]=(...a)=>e.replayButtonSurface&&e.replayButtonSurface(...a))},"Sync invoice")])),[[o,{visible:e.buttonVisible,options:e.buttonOptions}]])])]),C("section",Yb,[t[56]||(t[56]=C("div",{class:"demo-head"},[C("div",null,[C("h3",null,"Fullscreen and programmatic controller"),C("p",null,"Use a controller when the loading state is tied to navigation, bootstrapping, or a larger workspace transition.")])],-1)),C("div",Jb,[C("div",Xb,[C("button",{type:"button",class:"ghost-button copy-button",onClick:t[21]||(t[21]=a=>e.copySnippet("controller",e.controllerCode))},me(e.snippetCopyLabels.controller),1)]),C("pre",Qb,me(e.controllerCode),1)]),C("div",Zb,[C("button",{type:"button",class:"button primary",onClick:t[22]||(t[22]=(...a)=>e.runFullscreenDemo&&e.runFullscreenDemo(...a))},"Show fullscreen loader")])])]),C("aside",ey,[t[58]||(t[58]=Mr('<section class="demo-card side-card"><div class="demo-head"><div><h3>Wrapper surface</h3><p>The public API stays intentionally small so the real behavior continues to live in the core loading package.</p></div></div><ul class="feature-list"><li><code>&lt;revive-loading /&gt;</code> for component-first loading states.</li><li><code>v-revive-loading</code> for cards, tables, modals, charts, and buttons.</li><li><code>createLoadingController()</code> and <code>useLoading()</code> for fullscreen and programmatic flows.</li><li>Core exports like <code>loaderVariants</code>, <code>createLoader</code>, and theme helpers stay available.</li></ul></section><section class="demo-card side-card"><div class="demo-head"><div><h3>Release lines</h3><p>Each maintained runtime line gets its own docs build and npm release.</p></div></div><div class="release-links"><a href="../vue-2/">Vue 2</a><a href="../vue-3/">Vue 3</a></div></section>',2)),C("section",ty,[t[57]||(t[57]=C("div",{class:"demo-head"},[C("div",null,[C("h3",null,"Event log"),C("p",null,"Small runtime notes from the docs interactions while you test the wrapper.")])],-1)),C("div",ry,[(be(!0),Ne(ye,null,gn(e.logs,a=>(be(),Ne("div",{key:a,class:"log-line"},me(a),1))),128))])])])])])}const iy=Lm(Wm,[["render",ny]]);Pi(iy,{vueLine:"3.0.0 -> 3.5.32"}).use(Mm).mount("#app");

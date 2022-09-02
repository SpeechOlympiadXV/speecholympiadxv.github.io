const Go=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};Go();function Tr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const Zo="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",es=Tr(Zo);function xi(e){return!!e||e===""}function Mr(e){if(R(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=Z(r)?rs(r):Mr(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(Z(e))return e;if(G(e))return e}}const ts=/;(?![^(]*\))/g,ns=/:(.+)/;function rs(e){const t={};return e.split(ts).forEach(n=>{if(n){const r=n.split(ns);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function En(e){let t="";if(Z(e))t=e;else if(R(e))for(let n=0;n<e.length;n++){const r=En(e[n]);r&&(t+=r+" ")}else if(G(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const nr=e=>Z(e)?e:e==null?"":R(e)||G(e)&&(e.toString===ki||!j(e.toString))?JSON.stringify(e,wi,2):String(e),wi=(e,t)=>t&&t.__v_isRef?wi(e,t.value):yt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:_i(t)?{[`Set(${t.size})`]:[...t.values()]}:G(t)&&!R(t)&&!Oi(t)?String(t):t,K={},bt=[],Ae=()=>{},as=()=>!1,is=/^on[^a-z]/,Cn=e=>is.test(e),Nr=e=>e.startsWith("onUpdate:"),ae=Object.assign,Fr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},os=Object.prototype.hasOwnProperty,z=(e,t)=>os.call(e,t),R=Array.isArray,yt=e=>Pn(e)==="[object Map]",_i=e=>Pn(e)==="[object Set]",j=e=>typeof e=="function",Z=e=>typeof e=="string",Rr=e=>typeof e=="symbol",G=e=>e!==null&&typeof e=="object",Ai=e=>G(e)&&j(e.then)&&j(e.catch),ki=Object.prototype.toString,Pn=e=>ki.call(e),ss=e=>Pn(e).slice(8,-1),Oi=e=>Pn(e)==="[object Object]",Lr=e=>Z(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,rn=Tr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Sn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ls=/-(\w)/g,Me=Sn(e=>e.replace(ls,(t,n)=>n?n.toUpperCase():"")),fs=/\B([A-Z])/g,kt=Sn(e=>e.replace(fs,"-$1").toLowerCase()),In=Sn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Vn=Sn(e=>e?`on${In(e)}`:""),pn=(e,t)=>!Object.is(e,t),Xn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},hn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},cs=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let wa;const us=()=>wa||(wa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Pe;class ds{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Pe&&(this.parent=Pe,this.index=(Pe.scopes||(Pe.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Pe;try{return Pe=this,t()}finally{Pe=n}}}on(){Pe=this}off(){Pe=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function ms(e,t=Pe){t&&t.active&&t.effects.push(e)}const jr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ei=e=>(e.w&Qe)>0,Ci=e=>(e.n&Qe)>0,ps=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Qe},hs=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Ei(a)&&!Ci(a)?a.delete(e):t[n++]=a,a.w&=~Qe,a.n&=~Qe}t.length=n}},rr=new WeakMap;let Nt=0,Qe=1;const ar=30;let ye;const at=Symbol(""),ir=Symbol("");class $r{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ms(this,r)}run(){if(!this.active)return this.fn();let t=ye,n=Ve;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=ye,ye=this,Ve=!0,Qe=1<<++Nt,Nt<=ar?ps(this):_a(this),this.fn()}finally{Nt<=ar&&hs(this),Qe=1<<--Nt,ye=this.parent,Ve=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ye===this?this.deferStop=!0:this.active&&(_a(this),this.onStop&&this.onStop(),this.active=!1)}}function _a(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ve=!0;const Pi=[];function Ot(){Pi.push(Ve),Ve=!1}function Et(){const e=Pi.pop();Ve=e===void 0?!0:e}function he(e,t,n){if(Ve&&ye){let r=rr.get(e);r||rr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=jr()),Si(a)}}function Si(e,t){let n=!1;Nt<=ar?Ci(e)||(e.n|=Qe,n=!Ei(e)):n=!e.has(ye),n&&(e.add(ye),ye.deps.push(e))}function Le(e,t,n,r,a,i){const o=rr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&R(e))o.forEach((l,u)=>{(u==="length"||u>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":R(e)?Lr(n)&&s.push(o.get("length")):(s.push(o.get(at)),yt(e)&&s.push(o.get(ir)));break;case"delete":R(e)||(s.push(o.get(at)),yt(e)&&s.push(o.get(ir)));break;case"set":yt(e)&&s.push(o.get(at));break}if(s.length===1)s[0]&&or(s[0]);else{const l=[];for(const u of s)u&&l.push(...u);or(jr(l))}}function or(e,t){const n=R(e)?e:[...e];for(const r of n)r.computed&&Aa(r);for(const r of n)r.computed||Aa(r)}function Aa(e,t){(e!==ye||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const gs=Tr("__proto__,__v_isRef,__isVue"),Ii=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Rr)),vs=Dr(),bs=Dr(!1,!0),ys=Dr(!0),ka=xs();function xs(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=B(this);for(let i=0,o=this.length;i<o;i++)he(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(B)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Ot();const r=B(this)[t].apply(this,n);return Et(),r}}),e}function Dr(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Ls:Ri:t?Fi:Ni).get(r))return r;const o=R(r);if(!e&&o&&z(ka,a))return Reflect.get(ka,a,i);const s=Reflect.get(r,a,i);return(Rr(a)?Ii.has(a):gs(a))||(e||he(r,"get",a),t)?s:re(s)?o&&Lr(a)?s:s.value:G(s)?e?Li(s):Br(s):s}}const ws=Ti(),_s=Ti(!0);function Ti(e=!1){return function(n,r,a,i){let o=n[r];if(Bt(o)&&re(o)&&!re(a))return!1;if(!e&&!Bt(a)&&(sr(a)||(a=B(a),o=B(o)),!R(n)&&re(o)&&!re(a)))return o.value=a,!0;const s=R(n)&&Lr(r)?Number(r)<n.length:z(n,r),l=Reflect.set(n,r,a,i);return n===B(i)&&(s?pn(a,o)&&Le(n,"set",r,a):Le(n,"add",r,a)),l}}function As(e,t){const n=z(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Le(e,"delete",t,void 0),r}function ks(e,t){const n=Reflect.has(e,t);return(!Rr(t)||!Ii.has(t))&&he(e,"has",t),n}function Os(e){return he(e,"iterate",R(e)?"length":at),Reflect.ownKeys(e)}const Mi={get:vs,set:ws,deleteProperty:As,has:ks,ownKeys:Os},Es={get:ys,set(e,t){return!0},deleteProperty(e,t){return!0}},Cs=ae({},Mi,{get:bs,set:_s}),zr=e=>e,Tn=e=>Reflect.getPrototypeOf(e);function Jt(e,t,n=!1,r=!1){e=e.__v_raw;const a=B(e),i=B(t);n||(t!==i&&he(a,"get",t),he(a,"get",i));const{has:o}=Tn(a),s=r?zr:n?Wr:Ur;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function Gt(e,t=!1){const n=this.__v_raw,r=B(n),a=B(e);return t||(e!==a&&he(r,"has",e),he(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function Zt(e,t=!1){return e=e.__v_raw,!t&&he(B(e),"iterate",at),Reflect.get(e,"size",e)}function Oa(e){e=B(e);const t=B(this);return Tn(t).has.call(t,e)||(t.add(e),Le(t,"add",e,e)),this}function Ea(e,t){t=B(t);const n=B(this),{has:r,get:a}=Tn(n);let i=r.call(n,e);i||(e=B(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?pn(t,o)&&Le(n,"set",e,t):Le(n,"add",e,t),this}function Ca(e){const t=B(this),{has:n,get:r}=Tn(t);let a=n.call(t,e);a||(e=B(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Le(t,"delete",e,void 0),i}function Pa(){const e=B(this),t=e.size!==0,n=e.clear();return t&&Le(e,"clear",void 0,void 0),n}function en(e,t){return function(r,a){const i=this,o=i.__v_raw,s=B(o),l=t?zr:e?Wr:Ur;return!e&&he(s,"iterate",at),o.forEach((u,d)=>r.call(a,l(u),l(d),i))}}function tn(e,t,n){return function(...r){const a=this.__v_raw,i=B(a),o=yt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,u=a[e](...r),d=n?zr:t?Wr:Ur;return!t&&he(i,"iterate",l?ir:at),{next(){const{value:m,done:y}=u.next();return y?{value:m,done:y}:{value:s?[d(m[0]),d(m[1])]:d(m),done:y}},[Symbol.iterator](){return this}}}}function Ye(e){return function(...t){return e==="delete"?!1:this}}function Ps(){const e={get(i){return Jt(this,i)},get size(){return Zt(this)},has:Gt,add:Oa,set:Ea,delete:Ca,clear:Pa,forEach:en(!1,!1)},t={get(i){return Jt(this,i,!1,!0)},get size(){return Zt(this)},has:Gt,add:Oa,set:Ea,delete:Ca,clear:Pa,forEach:en(!1,!0)},n={get(i){return Jt(this,i,!0)},get size(){return Zt(this,!0)},has(i){return Gt.call(this,i,!0)},add:Ye("add"),set:Ye("set"),delete:Ye("delete"),clear:Ye("clear"),forEach:en(!0,!1)},r={get(i){return Jt(this,i,!0,!0)},get size(){return Zt(this,!0)},has(i){return Gt.call(this,i,!0)},add:Ye("add"),set:Ye("set"),delete:Ye("delete"),clear:Ye("clear"),forEach:en(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=tn(i,!1,!1),n[i]=tn(i,!0,!1),t[i]=tn(i,!1,!0),r[i]=tn(i,!0,!0)}),[e,n,t,r]}const[Ss,Is,Ts,Ms]=Ps();function Hr(e,t){const n=t?e?Ms:Ts:e?Is:Ss;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(z(n,a)&&a in r?n:r,a,i)}const Ns={get:Hr(!1,!1)},Fs={get:Hr(!1,!0)},Rs={get:Hr(!0,!1)},Ni=new WeakMap,Fi=new WeakMap,Ri=new WeakMap,Ls=new WeakMap;function js(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function $s(e){return e.__v_skip||!Object.isExtensible(e)?0:js(ss(e))}function Br(e){return Bt(e)?e:Yr(e,!1,Mi,Ns,Ni)}function Ds(e){return Yr(e,!1,Cs,Fs,Fi)}function Li(e){return Yr(e,!0,Es,Rs,Ri)}function Yr(e,t,n,r,a){if(!G(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=$s(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function xt(e){return Bt(e)?xt(e.__v_raw):!!(e&&e.__v_isReactive)}function Bt(e){return!!(e&&e.__v_isReadonly)}function sr(e){return!!(e&&e.__v_isShallow)}function ji(e){return xt(e)||Bt(e)}function B(e){const t=e&&e.__v_raw;return t?B(t):e}function $i(e){return hn(e,"__v_skip",!0),e}const Ur=e=>G(e)?Br(e):e,Wr=e=>G(e)?Li(e):e;function zs(e){Ve&&ye&&(e=B(e),Si(e.dep||(e.dep=jr())))}function Hs(e,t){e=B(e),e.dep&&or(e.dep)}function re(e){return!!(e&&e.__v_isRef===!0)}function Bs(e){return re(e)?e.value:e}const Ys={get:(e,t,n)=>Bs(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return re(a)&&!re(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Di(e){return xt(e)?e:new Proxy(e,Ys)}class Us{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new $r(t,()=>{this._dirty||(this._dirty=!0,Hs(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=B(this);return zs(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Ws(e,t,n=!1){let r,a;const i=j(e);return i?(r=e,a=Ae):(r=e.get,a=e.set),new Us(r,a,i||!a,n)}function Xe(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Mn(i,t,n)}return a}function ke(e,t,n,r){if(j(e)){const i=Xe(e,t,n,r);return i&&Ai(i)&&i.catch(o=>{Mn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(ke(e[i],t,n,r));return a}function Mn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Xe(l,null,10,[e,o,s]);return}}Ks(e,n,a,r)}function Ks(e,t,n,r=!0){console.error(e)}let gn=!1,lr=!1;const pe=[];let Re=0;const Lt=[];let Ft=null,mt=0;const jt=[];let We=null,pt=0;const zi=Promise.resolve();let Kr=null,fr=null;function Vs(e){const t=Kr||zi;return e?t.then(this?e.bind(this):e):t}function Xs(e){let t=Re+1,n=pe.length;for(;t<n;){const r=t+n>>>1;Yt(pe[r])<e?t=r+1:n=r}return t}function Hi(e){(!pe.length||!pe.includes(e,gn&&e.allowRecurse?Re+1:Re))&&e!==fr&&(e.id==null?pe.push(e):pe.splice(Xs(e.id),0,e),Bi())}function Bi(){!gn&&!lr&&(lr=!0,Kr=zi.then(Wi))}function qs(e){const t=pe.indexOf(e);t>Re&&pe.splice(t,1)}function Yi(e,t,n,r){R(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),Bi()}function Qs(e){Yi(e,Ft,Lt,mt)}function Js(e){Yi(e,We,jt,pt)}function Nn(e,t=null){if(Lt.length){for(fr=t,Ft=[...new Set(Lt)],Lt.length=0,mt=0;mt<Ft.length;mt++)Ft[mt]();Ft=null,mt=0,fr=null,Nn(e,t)}}function Ui(e){if(Nn(),jt.length){const t=[...new Set(jt)];if(jt.length=0,We){We.push(...t);return}for(We=t,We.sort((n,r)=>Yt(n)-Yt(r)),pt=0;pt<We.length;pt++)We[pt]();We=null,pt=0}}const Yt=e=>e.id==null?1/0:e.id;function Wi(e){lr=!1,gn=!0,Nn(e),pe.sort((n,r)=>Yt(n)-Yt(r));const t=Ae;try{for(Re=0;Re<pe.length;Re++){const n=pe[Re];n&&n.active!==!1&&Xe(n,null,14)}}finally{Re=0,pe.length=0,Ui(),gn=!1,Kr=null,(pe.length||Lt.length||jt.length)&&Wi(e)}}function Gs(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||K;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:y}=r[d]||K;y&&(a=n.map(E=>E.trim())),m&&(a=n.map(cs))}let s,l=r[s=Vn(t)]||r[s=Vn(Me(t))];!l&&i&&(l=r[s=Vn(kt(t))]),l&&ke(l,e,6,a);const u=r[s+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,ke(u,e,6,a)}}function Ki(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!j(e)){const l=u=>{const d=Ki(u,t,!0);d&&(s=!0,ae(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(r.set(e,null),null):(R(i)?i.forEach(l=>o[l]=null):ae(o,i),r.set(e,o),o)}function Fn(e,t){return!e||!Cn(t)?!1:(t=t.slice(2).replace(/Once$/,""),z(e,t[0].toLowerCase()+t.slice(1))||z(e,kt(t))||z(e,t))}let Ie=null,Rn=null;function vn(e){const t=Ie;return Ie=e,Rn=e&&e.type.__scopeId||null,t}function Vr(e){Rn=e}function Xr(){Rn=null}function Zs(e,t=Ie,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&$a(-1);const i=vn(t),o=e(...a);return vn(i),r._d&&$a(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function qn(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:u,render:d,renderCache:m,data:y,setupState:E,ctx:L,inheritAttrs:$}=e;let M,x;const C=vn(e);try{if(n.shapeFlag&4){const D=a||r;M=Se(d.call(D,D,m,i,E,y,L)),x=l}else{const D=t;M=Se(D.length>1?D(i,{attrs:l,slots:s,emit:u}):D(i,null)),x=t.props?l:el(l)}}catch(D){$t.length=0,Mn(D,e,1),M=J(Ut)}let N=M;if(x&&$!==!1){const D=Object.keys(x),{shapeFlag:W}=N;D.length&&W&7&&(o&&D.some(Nr)&&(x=tl(x,o)),N=_t(N,x))}return n.dirs&&(N=_t(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),M=N,vn(C),M}const el=e=>{let t;for(const n in e)(n==="class"||n==="style"||Cn(n))&&((t||(t={}))[n]=e[n]);return t},tl=(e,t)=>{const n={};for(const r in e)(!Nr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function nl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Sa(r,o,u):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const y=d[m];if(o[y]!==r[y]&&!Fn(u,y))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Sa(r,o,u):!0:!!o;return!1}function Sa(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Fn(n,i))return!0}return!1}function rl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const al=e=>e.__isSuspense;function il(e,t){t&&t.pendingBranch?R(e)?t.effects.push(...e):t.effects.push(e):Js(e)}function ol(e,t){if(ee){let n=ee.provides;const r=ee.parent&&ee.parent.provides;r===n&&(n=ee.provides=Object.create(r)),n[e]=t}}function Qn(e,t,n=!1){const r=ee||Ie;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&j(t)?t.call(r.proxy):t}}const Ia={};function an(e,t,n){return Vi(e,t,n)}function Vi(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=K){const s=ee;let l,u=!1,d=!1;if(re(e)?(l=()=>e.value,u=sr(e)):xt(e)?(l=()=>e,r=!0):R(e)?(d=!0,u=e.some(x=>xt(x)||sr(x)),l=()=>e.map(x=>{if(re(x))return x.value;if(xt(x))return ht(x);if(j(x))return Xe(x,s,2)})):j(e)?t?l=()=>Xe(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),ke(e,s,3,[y])}:l=Ae,t&&r){const x=l;l=()=>ht(x())}let m,y=x=>{m=M.onStop=()=>{Xe(x,s,4)}};if(Kt)return y=Ae,t?n&&ke(t,s,3,[l(),d?[]:void 0,y]):l(),Ae;let E=d?[]:Ia;const L=()=>{if(!!M.active)if(t){const x=M.run();(r||u||(d?x.some((C,N)=>pn(C,E[N])):pn(x,E)))&&(m&&m(),ke(t,s,3,[x,E===Ia?void 0:E,y]),E=x)}else M.run()};L.allowRecurse=!!t;let $;a==="sync"?$=L:a==="post"?$=()=>le(L,s&&s.suspense):$=()=>Qs(L);const M=new $r(l,$);return t?n?L():E=M.run():a==="post"?le(M.run.bind(M),s&&s.suspense):M.run(),()=>{M.stop(),s&&s.scope&&Fr(s.scope.effects,M)}}function sl(e,t,n){const r=this.proxy,a=Z(e)?e.includes(".")?Xi(r,e):()=>r[e]:e.bind(r,r);let i;j(t)?i=t:(i=t.handler,n=t);const o=ee;At(this);const s=Vi(a,i.bind(r),n);return o?At(o):it(),s}function Xi(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function ht(e,t){if(!G(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),re(e))ht(e.value,t);else if(R(e))for(let n=0;n<e.length;n++)ht(e[n],t);else if(_i(e)||yt(e))e.forEach(n=>{ht(n,t)});else if(Oi(e))for(const n in e)ht(e[n],t);return e}function qr(e){return j(e)?{setup:e,name:e.name}:e}const on=e=>!!e.type.__asyncLoader,qi=e=>e.type.__isKeepAlive;function ll(e,t){Qi(e,"a",t)}function fl(e,t){Qi(e,"da",t)}function Qi(e,t,n=ee){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Ln(t,r,n),n){let a=n.parent;for(;a&&a.parent;)qi(a.parent.vnode)&&cl(r,t,n,a),a=a.parent}}function cl(e,t,n,r){const a=Ln(t,e,r,!0);Ji(()=>{Fr(r[t],a)},n)}function Ln(e,t,n=ee,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Ot(),At(n);const s=ke(t,n,e,o);return it(),Et(),s});return r?a.unshift(i):a.push(i),i}}const ze=e=>(t,n=ee)=>(!Kt||e==="sp")&&Ln(e,t,n),ul=ze("bm"),dl=ze("m"),ml=ze("bu"),pl=ze("u"),hl=ze("bum"),Ji=ze("um"),gl=ze("sp"),vl=ze("rtg"),bl=ze("rtc");function yl(e,t=ee){Ln("ec",e,t)}function Ze(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Ot(),ke(l,n,8,[e.el,s,e,t]),Et())}}const Gi="components";function qe(e,t){return wl(Gi,e,!0,t)||e}const xl=Symbol();function wl(e,t,n=!0,r=!1){const a=Ie||ee;if(a){const i=a.type;if(e===Gi){const s=Gl(i,!1);if(s&&(s===t||s===Me(t)||s===In(Me(t))))return i}const o=Ta(a[e]||i[e],t)||Ta(a.appContext[e],t);return!o&&r?i:o}}function Ta(e,t){return e&&(e[t]||e[Me(t)]||e[In(Me(t))])}function sn(e,t,n,r){let a;const i=n&&n[r];if(R(e)||Z(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(G(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const u=o[s];a[s]=t(e[u],u,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const cr=e=>e?fo(e)?Zr(e)||e.proxy:cr(e.parent):null,bn=ae(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>cr(e.parent),$root:e=>cr(e.root),$emit:e=>e.emit,$options:e=>eo(e),$forceUpdate:e=>e.f||(e.f=()=>Hi(e.update)),$nextTick:e=>e.n||(e.n=Vs.bind(e.proxy)),$watch:e=>sl.bind(e)}),_l={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let u;if(t[0]!=="$"){const E=o[t];if(E!==void 0)switch(E){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==K&&z(r,t))return o[t]=1,r[t];if(a!==K&&z(a,t))return o[t]=2,a[t];if((u=e.propsOptions[0])&&z(u,t))return o[t]=3,i[t];if(n!==K&&z(n,t))return o[t]=4,n[t];ur&&(o[t]=0)}}const d=bn[t];let m,y;if(d)return t==="$attrs"&&he(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==K&&z(n,t))return o[t]=4,n[t];if(y=l.config.globalProperties,z(y,t))return y[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==K&&z(a,t)?(a[t]=n,!0):r!==K&&z(r,t)?(r[t]=n,!0):z(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==K&&z(e,o)||t!==K&&z(t,o)||(s=i[0])&&z(s,o)||z(r,o)||z(bn,o)||z(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:z(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let ur=!0;function Al(e){const t=eo(e),n=e.proxy,r=e.ctx;ur=!1,t.beforeCreate&&Ma(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:u,created:d,beforeMount:m,mounted:y,beforeUpdate:E,updated:L,activated:$,deactivated:M,beforeDestroy:x,beforeUnmount:C,destroyed:N,unmounted:D,render:W,renderTracked:te,renderTriggered:ue,errorCaptured:Oe,serverPrefetch:ie,expose:Pt,inheritAttrs:ft,components:St,directives:qt,filters:ha}=t;if(u&&kl(u,r,null,e.appContext.config.unwrapInjectedRef),o)for(const Q in o){const V=o[Q];j(V)&&(r[Q]=V.bind(n))}if(a){const Q=a.call(n,n);G(Q)&&(e.data=Br(Q))}if(ur=!0,i)for(const Q in i){const V=i[Q],Ne=j(V)?V.bind(n,n):j(V.get)?V.get.bind(n,n):Ae,Un=!j(V)&&j(V.set)?V.set.bind(n):Ae,It=ve({get:Ne,set:Un});Object.defineProperty(r,Q,{enumerable:!0,configurable:!0,get:()=>It.value,set:ct=>It.value=ct})}if(s)for(const Q in s)Zi(s[Q],r,n,Q);if(l){const Q=j(l)?l.call(n):l;Reflect.ownKeys(Q).forEach(V=>{ol(V,Q[V])})}d&&Ma(d,e,"c");function oe(Q,V){R(V)?V.forEach(Ne=>Q(Ne.bind(n))):V&&Q(V.bind(n))}if(oe(ul,m),oe(dl,y),oe(ml,E),oe(pl,L),oe(ll,$),oe(fl,M),oe(yl,Oe),oe(bl,te),oe(vl,ue),oe(hl,C),oe(Ji,D),oe(gl,ie),R(Pt))if(Pt.length){const Q=e.exposed||(e.exposed={});Pt.forEach(V=>{Object.defineProperty(Q,V,{get:()=>n[V],set:Ne=>n[V]=Ne})})}else e.exposed||(e.exposed={});W&&e.render===Ae&&(e.render=W),ft!=null&&(e.inheritAttrs=ft),St&&(e.components=St),qt&&(e.directives=qt)}function kl(e,t,n=Ae,r=!1){R(e)&&(e=dr(e));for(const a in e){const i=e[a];let o;G(i)?"default"in i?o=Qn(i.from||a,i.default,!0):o=Qn(i.from||a):o=Qn(i),re(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function Ma(e,t,n){ke(R(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Zi(e,t,n,r){const a=r.includes(".")?Xi(n,r):()=>n[r];if(Z(e)){const i=t[e];j(i)&&an(a,i)}else if(j(e))an(a,e.bind(n));else if(G(e))if(R(e))e.forEach(i=>Zi(i,t,n,r));else{const i=j(e.handler)?e.handler.bind(n):t[e.handler];j(i)&&an(a,i,e)}}function eo(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(u=>yn(l,u,o,!0)),yn(l,t,o)),i.set(t,l),l}function yn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&yn(e,i,n,!0),a&&a.forEach(o=>yn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Ol[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Ol={data:Na,props:tt,emits:tt,methods:tt,computed:tt,beforeCreate:ne,created:ne,beforeMount:ne,mounted:ne,beforeUpdate:ne,updated:ne,beforeDestroy:ne,beforeUnmount:ne,destroyed:ne,unmounted:ne,activated:ne,deactivated:ne,errorCaptured:ne,serverPrefetch:ne,components:tt,directives:tt,watch:Cl,provide:Na,inject:El};function Na(e,t){return t?e?function(){return ae(j(e)?e.call(this,this):e,j(t)?t.call(this,this):t)}:t:e}function El(e,t){return tt(dr(e),dr(t))}function dr(e){if(R(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ne(e,t){return e?[...new Set([].concat(e,t))]:t}function tt(e,t){return e?ae(ae(Object.create(null),e),t):t}function Cl(e,t){if(!e)return t;if(!t)return e;const n=ae(Object.create(null),e);for(const r in t)n[r]=ne(e[r],t[r]);return n}function Pl(e,t,n,r=!1){const a={},i={};hn(i,jn,1),e.propsDefaults=Object.create(null),to(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Ds(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Sl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=B(a),[l]=e.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let y=d[m];if(Fn(e.emitsOptions,y))continue;const E=t[y];if(l)if(z(i,y))E!==i[y]&&(i[y]=E,u=!0);else{const L=Me(y);a[L]=mr(l,s,L,E,e,!1)}else E!==i[y]&&(i[y]=E,u=!0)}}}else{to(e,t,a,i)&&(u=!0);let d;for(const m in s)(!t||!z(t,m)&&((d=kt(m))===m||!z(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=mr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!z(t,m)&&!0)&&(delete i[m],u=!0)}u&&Le(e,"set","$attrs")}function to(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(rn(l))continue;const u=t[l];let d;a&&z(a,d=Me(l))?!i||!i.includes(d)?n[d]=u:(s||(s={}))[d]=u:Fn(e.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=B(n),u=s||K;for(let d=0;d<i.length;d++){const m=i[d];n[m]=mr(a,l,m,u[m],e,!z(u,m))}}return o}function mr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=z(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&j(l)){const{propsDefaults:u}=a;n in u?r=u[n]:(At(a),r=u[n]=l.call(null,t),it())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===kt(n))&&(r=!0))}return r}function no(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!j(e)){const d=m=>{l=!0;const[y,E]=no(m,t,!0);ae(o,y),E&&s.push(...E)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return r.set(e,bt),bt;if(R(i))for(let d=0;d<i.length;d++){const m=Me(i[d]);Fa(m)&&(o[m]=K)}else if(i)for(const d in i){const m=Me(d);if(Fa(m)){const y=i[d],E=o[m]=R(y)||j(y)?{type:y}:y;if(E){const L=ja(Boolean,E.type),$=ja(String,E.type);E[0]=L>-1,E[1]=$<0||L<$,(L>-1||z(E,"default"))&&s.push(m)}}}const u=[o,s];return r.set(e,u),u}function Fa(e){return e[0]!=="$"}function Ra(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function La(e,t){return Ra(e)===Ra(t)}function ja(e,t){return R(t)?t.findIndex(n=>La(n,e)):j(t)&&La(t,e)?0:-1}const ro=e=>e[0]==="_"||e==="$stable",Qr=e=>R(e)?e.map(Se):[Se(e)],Il=(e,t,n)=>{if(t._n)return t;const r=Zs((...a)=>Qr(t(...a)),n);return r._c=!1,r},ao=(e,t,n)=>{const r=e._ctx;for(const a in e){if(ro(a))continue;const i=e[a];if(j(i))t[a]=Il(a,i,r);else if(i!=null){const o=Qr(i);t[a]=()=>o}}},io=(e,t)=>{const n=Qr(t);e.slots.default=()=>n},Tl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=B(t),hn(t,"_",n)):ao(t,e.slots={})}else e.slots={},t&&io(e,t);hn(e.slots,jn,1)},Ml=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=K;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(ae(a,t),!n&&s===1&&delete a._):(i=!t.$stable,ao(t,a)),o=t}else t&&(io(e,t),o={default:1});if(i)for(const s in a)!ro(s)&&!(s in o)&&delete a[s]};function oo(){return{app:null,config:{isNativeTag:as,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Nl=0;function Fl(e,t){return function(r,a=null){j(r)||(r=Object.assign({},r)),a!=null&&!G(a)&&(a=null);const i=oo(),o=new Set;let s=!1;const l=i.app={_uid:Nl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:ef,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&j(u.install)?(o.add(u),u.install(l,...d)):j(u)&&(o.add(u),u(l,...d))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,d){return d?(i.components[u]=d,l):i.components[u]},directive(u,d){return d?(i.directives[u]=d,l):i.directives[u]},mount(u,d,m){if(!s){const y=J(r,a);return y.appContext=i,d&&t?t(y,u):e(y,u,m),s=!0,l._container=u,u.__vue_app__=l,Zr(y.component)||y.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,d){return i.provides[u]=d,l}};return l}}function pr(e,t,n,r,a=!1){if(R(e)){e.forEach((y,E)=>pr(y,t&&(R(t)?t[E]:t),n,r,a));return}if(on(r)&&!a)return;const i=r.shapeFlag&4?Zr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,u=t&&t.r,d=s.refs===K?s.refs={}:s.refs,m=s.setupState;if(u!=null&&u!==l&&(Z(u)?(d[u]=null,z(m,u)&&(m[u]=null)):re(u)&&(u.value=null)),j(l))Xe(l,s,12,[o,d]);else{const y=Z(l),E=re(l);if(y||E){const L=()=>{if(e.f){const $=y?d[l]:l.value;a?R($)&&Fr($,i):R($)?$.includes(i)||$.push(i):y?(d[l]=[i],z(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else y?(d[l]=o,z(m,l)&&(m[l]=o)):E&&(l.value=o,e.k&&(d[e.k]=o))};o?(L.id=-1,le(L,n)):L()}}}const le=il;function Rl(e){return Ll(e)}function Ll(e,t){const n=us();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:u,setElementText:d,parentNode:m,nextSibling:y,setScopeId:E=Ae,cloneNode:L,insertStaticContent:$}=e,M=(f,c,p,v=null,g=null,_=null,k=!1,w=null,A=!!c.dynamicChildren)=>{if(f===c)return;f&&!Mt(f,c)&&(v=Qt(f),Be(f,g,_,!0),f=null),c.patchFlag===-2&&(A=!1,c.dynamicChildren=null);const{type:b,ref:S,shapeFlag:P}=c;switch(b){case Jr:x(f,c,p,v);break;case Ut:C(f,c,p,v);break;case ln:f==null&&N(c,p,v,k);break;case me:qt(f,c,p,v,g,_,k,w,A);break;default:P&1?te(f,c,p,v,g,_,k,w,A):P&6?ha(f,c,p,v,g,_,k,w,A):(P&64||P&128)&&b.process(f,c,p,v,g,_,k,w,A,ut)}S!=null&&g&&pr(S,f&&f.ref,_,c||f,!c)},x=(f,c,p,v)=>{if(f==null)r(c.el=s(c.children),p,v);else{const g=c.el=f.el;c.children!==f.children&&u(g,c.children)}},C=(f,c,p,v)=>{f==null?r(c.el=l(c.children||""),p,v):c.el=f.el},N=(f,c,p,v)=>{[f.el,f.anchor]=$(f.children,c,p,v,f.el,f.anchor)},D=({el:f,anchor:c},p,v)=>{let g;for(;f&&f!==c;)g=y(f),r(f,p,v),f=g;r(c,p,v)},W=({el:f,anchor:c})=>{let p;for(;f&&f!==c;)p=y(f),a(f),f=p;a(c)},te=(f,c,p,v,g,_,k,w,A)=>{k=k||c.type==="svg",f==null?ue(c,p,v,g,_,k,w,A):Pt(f,c,g,_,k,w,A)},ue=(f,c,p,v,g,_,k,w)=>{let A,b;const{type:S,props:P,shapeFlag:I,transition:F,patchFlag:H,dirs:Y}=f;if(f.el&&L!==void 0&&H===-1)A=f.el=L(f.el);else{if(A=f.el=o(f.type,_,P&&P.is,P),I&8?d(A,f.children):I&16&&ie(f.children,A,null,v,g,_&&S!=="foreignObject",k,w),Y&&Ze(f,null,v,"created"),P){for(const X in P)X!=="value"&&!rn(X)&&i(A,X,null,P[X],_,f.children,v,g,Fe);"value"in P&&i(A,"value",null,P.value),(b=P.onVnodeBeforeMount)&&Ce(b,v,f)}Oe(A,f,f.scopeId,k,v)}Y&&Ze(f,null,v,"beforeMount");const U=(!g||g&&!g.pendingBranch)&&F&&!F.persisted;U&&F.beforeEnter(A),r(A,c,p),((b=P&&P.onVnodeMounted)||U||Y)&&le(()=>{b&&Ce(b,v,f),U&&F.enter(A),Y&&Ze(f,null,v,"mounted")},g)},Oe=(f,c,p,v,g)=>{if(p&&E(f,p),v)for(let _=0;_<v.length;_++)E(f,v[_]);if(g){let _=g.subTree;if(c===_){const k=g.vnode;Oe(f,k,k.scopeId,k.slotScopeIds,g.parent)}}},ie=(f,c,p,v,g,_,k,w,A=0)=>{for(let b=A;b<f.length;b++){const S=f[b]=w?Ke(f[b]):Se(f[b]);M(null,S,c,p,v,g,_,k,w)}},Pt=(f,c,p,v,g,_,k)=>{const w=c.el=f.el;let{patchFlag:A,dynamicChildren:b,dirs:S}=c;A|=f.patchFlag&16;const P=f.props||K,I=c.props||K;let F;p&&et(p,!1),(F=I.onVnodeBeforeUpdate)&&Ce(F,p,c,f),S&&Ze(c,f,p,"beforeUpdate"),p&&et(p,!0);const H=g&&c.type!=="foreignObject";if(b?ft(f.dynamicChildren,b,w,p,v,H,_):k||Ne(f,c,w,null,p,v,H,_,!1),A>0){if(A&16)St(w,c,P,I,p,v,g);else if(A&2&&P.class!==I.class&&i(w,"class",null,I.class,g),A&4&&i(w,"style",P.style,I.style,g),A&8){const Y=c.dynamicProps;for(let U=0;U<Y.length;U++){const X=Y[U],be=P[X],dt=I[X];(dt!==be||X==="value")&&i(w,X,be,dt,g,f.children,p,v,Fe)}}A&1&&f.children!==c.children&&d(w,c.children)}else!k&&b==null&&St(w,c,P,I,p,v,g);((F=I.onVnodeUpdated)||S)&&le(()=>{F&&Ce(F,p,c,f),S&&Ze(c,f,p,"updated")},v)},ft=(f,c,p,v,g,_,k)=>{for(let w=0;w<c.length;w++){const A=f[w],b=c[w],S=A.el&&(A.type===me||!Mt(A,b)||A.shapeFlag&70)?m(A.el):p;M(A,b,S,null,v,g,_,k,!0)}},St=(f,c,p,v,g,_,k)=>{if(p!==v){for(const w in v){if(rn(w))continue;const A=v[w],b=p[w];A!==b&&w!=="value"&&i(f,w,b,A,k,c.children,g,_,Fe)}if(p!==K)for(const w in p)!rn(w)&&!(w in v)&&i(f,w,p[w],null,k,c.children,g,_,Fe);"value"in v&&i(f,"value",p.value,v.value)}},qt=(f,c,p,v,g,_,k,w,A)=>{const b=c.el=f?f.el:s(""),S=c.anchor=f?f.anchor:s("");let{patchFlag:P,dynamicChildren:I,slotScopeIds:F}=c;F&&(w=w?w.concat(F):F),f==null?(r(b,p,v),r(S,p,v),ie(c.children,p,S,g,_,k,w,A)):P>0&&P&64&&I&&f.dynamicChildren?(ft(f.dynamicChildren,I,p,g,_,k,w),(c.key!=null||g&&c===g.subTree)&&so(f,c,!0)):Ne(f,c,p,S,g,_,k,w,A)},ha=(f,c,p,v,g,_,k,w,A)=>{c.slotScopeIds=w,f==null?c.shapeFlag&512?g.ctx.activate(c,p,v,k,A):Yn(c,p,v,g,_,k,A):oe(f,c,A)},Yn=(f,c,p,v,g,_,k)=>{const w=f.component=Vl(f,v,g);if(qi(f)&&(w.ctx.renderer=ut),Xl(w),w.asyncDep){if(g&&g.registerDep(w,Q),!f.el){const A=w.subTree=J(Ut);C(null,A,c,p)}return}Q(w,f,c,p,g,_,k)},oe=(f,c,p)=>{const v=c.component=f.component;if(nl(f,c,p))if(v.asyncDep&&!v.asyncResolved){V(v,c,p);return}else v.next=c,qs(v.update),v.update();else c.el=f.el,v.vnode=c},Q=(f,c,p,v,g,_,k)=>{const w=()=>{if(f.isMounted){let{next:S,bu:P,u:I,parent:F,vnode:H}=f,Y=S,U;et(f,!1),S?(S.el=H.el,V(f,S,k)):S=H,P&&Xn(P),(U=S.props&&S.props.onVnodeBeforeUpdate)&&Ce(U,F,S,H),et(f,!0);const X=qn(f),be=f.subTree;f.subTree=X,M(be,X,m(be.el),Qt(be),f,g,_),S.el=X.el,Y===null&&rl(f,X.el),I&&le(I,g),(U=S.props&&S.props.onVnodeUpdated)&&le(()=>Ce(U,F,S,H),g)}else{let S;const{el:P,props:I}=c,{bm:F,m:H,parent:Y}=f,U=on(c);if(et(f,!1),F&&Xn(F),!U&&(S=I&&I.onVnodeBeforeMount)&&Ce(S,Y,c),et(f,!0),P&&Kn){const X=()=>{f.subTree=qn(f),Kn(P,f.subTree,f,g,null)};U?c.type.__asyncLoader().then(()=>!f.isUnmounted&&X()):X()}else{const X=f.subTree=qn(f);M(null,X,p,v,f,g,_),c.el=X.el}if(H&&le(H,g),!U&&(S=I&&I.onVnodeMounted)){const X=c;le(()=>Ce(S,Y,X),g)}(c.shapeFlag&256||Y&&on(Y.vnode)&&Y.vnode.shapeFlag&256)&&f.a&&le(f.a,g),f.isMounted=!0,c=p=v=null}},A=f.effect=new $r(w,()=>Hi(b),f.scope),b=f.update=()=>A.run();b.id=f.uid,et(f,!0),b()},V=(f,c,p)=>{c.component=f;const v=f.vnode.props;f.vnode=c,f.next=null,Sl(f,c.props,v,p),Ml(f,c.children,p),Ot(),Nn(void 0,f.update),Et()},Ne=(f,c,p,v,g,_,k,w,A=!1)=>{const b=f&&f.children,S=f?f.shapeFlag:0,P=c.children,{patchFlag:I,shapeFlag:F}=c;if(I>0){if(I&128){It(b,P,p,v,g,_,k,w,A);return}else if(I&256){Un(b,P,p,v,g,_,k,w,A);return}}F&8?(S&16&&Fe(b,g,_),P!==b&&d(p,P)):S&16?F&16?It(b,P,p,v,g,_,k,w,A):Fe(b,g,_,!0):(S&8&&d(p,""),F&16&&ie(P,p,v,g,_,k,w,A))},Un=(f,c,p,v,g,_,k,w,A)=>{f=f||bt,c=c||bt;const b=f.length,S=c.length,P=Math.min(b,S);let I;for(I=0;I<P;I++){const F=c[I]=A?Ke(c[I]):Se(c[I]);M(f[I],F,p,null,g,_,k,w,A)}b>S?Fe(f,g,_,!0,!1,P):ie(c,p,v,g,_,k,w,A,P)},It=(f,c,p,v,g,_,k,w,A)=>{let b=0;const S=c.length;let P=f.length-1,I=S-1;for(;b<=P&&b<=I;){const F=f[b],H=c[b]=A?Ke(c[b]):Se(c[b]);if(Mt(F,H))M(F,H,p,null,g,_,k,w,A);else break;b++}for(;b<=P&&b<=I;){const F=f[P],H=c[I]=A?Ke(c[I]):Se(c[I]);if(Mt(F,H))M(F,H,p,null,g,_,k,w,A);else break;P--,I--}if(b>P){if(b<=I){const F=I+1,H=F<S?c[F].el:v;for(;b<=I;)M(null,c[b]=A?Ke(c[b]):Se(c[b]),p,H,g,_,k,w,A),b++}}else if(b>I)for(;b<=P;)Be(f[b],g,_,!0),b++;else{const F=b,H=b,Y=new Map;for(b=H;b<=I;b++){const de=c[b]=A?Ke(c[b]):Se(c[b]);de.key!=null&&Y.set(de.key,b)}let U,X=0;const be=I-H+1;let dt=!1,ba=0;const Tt=new Array(be);for(b=0;b<be;b++)Tt[b]=0;for(b=F;b<=P;b++){const de=f[b];if(X>=be){Be(de,g,_,!0);continue}let Ee;if(de.key!=null)Ee=Y.get(de.key);else for(U=H;U<=I;U++)if(Tt[U-H]===0&&Mt(de,c[U])){Ee=U;break}Ee===void 0?Be(de,g,_,!0):(Tt[Ee-H]=b+1,Ee>=ba?ba=Ee:dt=!0,M(de,c[Ee],p,null,g,_,k,w,A),X++)}const ya=dt?jl(Tt):bt;for(U=ya.length-1,b=be-1;b>=0;b--){const de=H+b,Ee=c[de],xa=de+1<S?c[de+1].el:v;Tt[b]===0?M(null,Ee,p,xa,g,_,k,w,A):dt&&(U<0||b!==ya[U]?ct(Ee,p,xa,2):U--)}}},ct=(f,c,p,v,g=null)=>{const{el:_,type:k,transition:w,children:A,shapeFlag:b}=f;if(b&6){ct(f.component.subTree,c,p,v);return}if(b&128){f.suspense.move(c,p,v);return}if(b&64){k.move(f,c,p,ut);return}if(k===me){r(_,c,p);for(let P=0;P<A.length;P++)ct(A[P],c,p,v);r(f.anchor,c,p);return}if(k===ln){D(f,c,p);return}if(v!==2&&b&1&&w)if(v===0)w.beforeEnter(_),r(_,c,p),le(()=>w.enter(_),g);else{const{leave:P,delayLeave:I,afterLeave:F}=w,H=()=>r(_,c,p),Y=()=>{P(_,()=>{H(),F&&F()})};I?I(_,H,Y):Y()}else r(_,c,p)},Be=(f,c,p,v=!1,g=!1)=>{const{type:_,props:k,ref:w,children:A,dynamicChildren:b,shapeFlag:S,patchFlag:P,dirs:I}=f;if(w!=null&&pr(w,null,p,f,!0),S&256){c.ctx.deactivate(f);return}const F=S&1&&I,H=!on(f);let Y;if(H&&(Y=k&&k.onVnodeBeforeUnmount)&&Ce(Y,c,f),S&6)Jo(f.component,p,v);else{if(S&128){f.suspense.unmount(p,v);return}F&&Ze(f,null,c,"beforeUnmount"),S&64?f.type.remove(f,c,p,g,ut,v):b&&(_!==me||P>0&&P&64)?Fe(b,c,p,!1,!0):(_===me&&P&384||!g&&S&16)&&Fe(A,c,p),v&&ga(f)}(H&&(Y=k&&k.onVnodeUnmounted)||F)&&le(()=>{Y&&Ce(Y,c,f),F&&Ze(f,null,c,"unmounted")},p)},ga=f=>{const{type:c,el:p,anchor:v,transition:g}=f;if(c===me){Qo(p,v);return}if(c===ln){W(f);return}const _=()=>{a(p),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(f.shapeFlag&1&&g&&!g.persisted){const{leave:k,delayLeave:w}=g,A=()=>k(p,_);w?w(f.el,_,A):A()}else _()},Qo=(f,c)=>{let p;for(;f!==c;)p=y(f),a(f),f=p;a(c)},Jo=(f,c,p)=>{const{bum:v,scope:g,update:_,subTree:k,um:w}=f;v&&Xn(v),g.stop(),_&&(_.active=!1,Be(k,f,c,p)),w&&le(w,c),le(()=>{f.isUnmounted=!0},c),c&&c.pendingBranch&&!c.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===c.pendingId&&(c.deps--,c.deps===0&&c.resolve())},Fe=(f,c,p,v=!1,g=!1,_=0)=>{for(let k=_;k<f.length;k++)Be(f[k],c,p,v,g)},Qt=f=>f.shapeFlag&6?Qt(f.component.subTree):f.shapeFlag&128?f.suspense.next():y(f.anchor||f.el),va=(f,c,p)=>{f==null?c._vnode&&Be(c._vnode,null,null,!0):M(c._vnode||null,f,c,null,null,null,p),Ui(),c._vnode=f},ut={p:M,um:Be,m:ct,r:ga,mt:Yn,mc:ie,pc:Ne,pbc:ft,n:Qt,o:e};let Wn,Kn;return t&&([Wn,Kn]=t(ut)),{render:va,hydrate:Wn,createApp:Fl(va,Wn)}}function et({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function so(e,t,n=!1){const r=e.children,a=t.children;if(R(r)&&R(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Ke(a[i]),s.el=o.el),n||so(o,s))}}function jl(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const u=e[r];if(u!==0){if(a=n[n.length-1],e[a]<u){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<u?i=s+1:o=s;u<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const $l=e=>e.__isTeleport,me=Symbol(void 0),Jr=Symbol(void 0),Ut=Symbol(void 0),ln=Symbol(void 0),$t=[];let we=null;function fe(e=!1){$t.push(we=e?null:[])}function Dl(){$t.pop(),we=$t[$t.length-1]||null}let Wt=1;function $a(e){Wt+=e}function zl(e){return e.dynamicChildren=Wt>0?we||bt:null,Dl(),Wt>0&&we&&we.push(e),e}function ce(e,t,n,r,a,i){return zl(h(e,t,n,r,a,i,!0))}function hr(e){return e?e.__v_isVNode===!0:!1}function Mt(e,t){return e.type===t.type&&e.key===t.key}const jn="__vInternal",lo=({key:e})=>e!=null?e:null,fn=({ref:e,ref_key:t,ref_for:n})=>e!=null?Z(e)||re(e)||j(e)?{i:Ie,r:e,k:t,f:!!n}:e:null;function h(e,t=null,n=null,r=0,a=null,i=e===me?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&lo(t),ref:t&&fn(t),scopeId:Rn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(Gr(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=Z(n)?8:16),Wt>0&&!o&&we&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&we.push(l),l}const J=Hl;function Hl(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===xl)&&(e=Ut),hr(e)){const s=_t(e,t,!0);return n&&Gr(s,n),Wt>0&&!i&&we&&(s.shapeFlag&6?we[we.indexOf(e)]=s:we.push(s)),s.patchFlag|=-2,s}if(Zl(e)&&(e=e.__vccOpts),t){t=Bl(t);let{class:s,style:l}=t;s&&!Z(s)&&(t.class=En(s)),G(l)&&(ji(l)&&!R(l)&&(l=ae({},l)),t.style=Mr(l))}const o=Z(e)?1:al(e)?128:$l(e)?64:G(e)?4:j(e)?2:0;return h(e,t,n,r,a,o,i,!0)}function Bl(e){return e?ji(e)||jn in e?ae({},e):e:null}function _t(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Ul(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&lo(s),ref:t&&t.ref?n&&a?R(a)?a.concat(fn(t)):[a,fn(t)]:fn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==me?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&_t(e.ssContent),ssFallback:e.ssFallback&&_t(e.ssFallback),el:e.el,anchor:e.anchor}}function cn(e=" ",t=0){return J(Jr,null,e,t)}function Yl(e,t){const n=J(ln,null,e);return n.staticCount=t,n}function Se(e){return e==null||typeof e=="boolean"?J(Ut):R(e)?J(me,null,e.slice()):typeof e=="object"?Ke(e):J(Jr,null,String(e))}function Ke(e){return e.el===null||e.memo?e:_t(e)}function Gr(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(R(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Gr(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(jn in t)?t._ctx=Ie:a===3&&Ie&&(Ie.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else j(t)?(t={default:t,_ctx:Ie},n=32):(t=String(t),r&64?(n=16,t=[cn(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ul(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=En([t.class,r.class]));else if(a==="style")t.style=Mr([t.style,r.style]);else if(Cn(a)){const i=t[a],o=r[a];o&&i!==o&&!(R(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Ce(e,t,n,r=null){ke(e,t,7,[n,r])}const Wl=oo();let Kl=0;function Vl(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Wl,i={uid:Kl++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new ds(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:no(r,a),emitsOptions:Ki(r,a),emit:null,emitted:null,propsDefaults:K,inheritAttrs:r.inheritAttrs,ctx:K,data:K,props:K,attrs:K,slots:K,refs:K,setupState:K,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Gs.bind(null,i),e.ce&&e.ce(i),i}let ee=null;const At=e=>{ee=e,e.scope.on()},it=()=>{ee&&ee.scope.off(),ee=null};function fo(e){return e.vnode.shapeFlag&4}let Kt=!1;function Xl(e,t=!1){Kt=t;const{props:n,children:r}=e.vnode,a=fo(e);Pl(e,n,a,t),Tl(e,r);const i=a?ql(e,t):void 0;return Kt=!1,i}function ql(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=$i(new Proxy(e.ctx,_l));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Jl(e):null;At(e),Ot();const i=Xe(r,e,0,[e.props,a]);if(Et(),it(),Ai(i)){if(i.then(it,it),t)return i.then(o=>{Da(e,o,t)}).catch(o=>{Mn(o,e,0)});e.asyncDep=i}else Da(e,i,t)}else co(e,t)}function Da(e,t,n){j(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:G(t)&&(e.setupState=Di(t)),co(e,n)}let za;function co(e,t,n){const r=e.type;if(!e.render){if(!t&&za&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,u=ae(ae({isCustomElement:i,delimiters:s},o),l);r.render=za(a,u)}}e.render=r.render||Ae}At(e),Ot(),Al(e),Et(),it()}function Ql(e){return new Proxy(e.attrs,{get(t,n){return he(e,"get","$attrs"),t[n]}})}function Jl(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Ql(e))},slots:e.slots,emit:e.emit,expose:t}}function Zr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Di($i(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in bn)return bn[n](e)}}))}function Gl(e,t=!0){return j(e)?e.displayName||e.name:e.name||t&&e.__name}function Zl(e){return j(e)&&"__vccOpts"in e}const ve=(e,t)=>Ws(e,t,Kt);function uo(e,t,n){const r=arguments.length;return r===2?G(t)&&!R(t)?hr(t)?J(e,null,[t]):J(e,t):J(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&hr(n)&&(n=[n]),J(e,t,n))}const ef="3.2.37",tf="http://www.w3.org/2000/svg",nt=typeof document<"u"?document:null,Ha=nt&&nt.createElement("template"),nf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?nt.createElementNS(tf,e):nt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>nt.createTextNode(e),createComment:e=>nt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>nt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Ha.innerHTML=r?`<svg>${e}</svg>`:e;const s=Ha.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function rf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function af(e,t,n){const r=e.style,a=Z(n);if(n&&!a){for(const i in n)gr(r,i,n[i]);if(t&&!Z(t))for(const i in t)n[i]==null&&gr(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Ba=/\s*!important$/;function gr(e,t,n){if(R(n))n.forEach(r=>gr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=of(e,t);Ba.test(n)?e.setProperty(kt(r),n.replace(Ba,""),"important"):e[r]=n}}const Ya=["Webkit","Moz","ms"],Jn={};function of(e,t){const n=Jn[t];if(n)return n;let r=Me(t);if(r!=="filter"&&r in e)return Jn[t]=r;r=In(r);for(let a=0;a<Ya.length;a++){const i=Ya[a]+r;if(i in e)return Jn[t]=i}return t}const Ua="http://www.w3.org/1999/xlink";function sf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ua,t.slice(6,t.length)):e.setAttributeNS(Ua,t,n);else{const i=es(t);n==null||i&&!xi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function lf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=xi(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}const[mo,ff]=(()=>{let e=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let vr=0;const cf=Promise.resolve(),uf=()=>{vr=0},df=()=>vr||(cf.then(uf),vr=mo());function mf(e,t,n,r){e.addEventListener(t,n,r)}function pf(e,t,n,r){e.removeEventListener(t,n,r)}function hf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=gf(t);if(r){const u=i[t]=vf(r,a);mf(e,s,u,l)}else o&&(pf(e,s,o,l),i[t]=void 0)}}const Wa=/(?:Once|Passive|Capture)$/;function gf(e){let t;if(Wa.test(e)){t={};let n;for(;n=e.match(Wa);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[kt(e.slice(2)),t]}function vf(e,t){const n=r=>{const a=r.timeStamp||mo();(ff||a>=n.attached-1)&&ke(bf(r,n.value),t,5,[r])};return n.value=e,n.attached=df(),n}function bf(e,t){if(R(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Ka=/^on[a-z]/,yf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?rf(e,r,a):t==="style"?af(e,n,r):Cn(t)?Nr(t)||hf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):xf(e,t,r,a))?lf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),sf(e,t,r,a))};function xf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Ka.test(t)&&j(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ka.test(t)&&Z(n)?!1:t in e}const wf=ae({patchProp:yf},nf);let Va;function _f(){return Va||(Va=Rl(wf))}const Af=(...e)=>{const t=_f().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=kf(r);if(!a)return;const i=t._component;!j(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function kf(e){return Z(e)?document.querySelector(e):e}const lt=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Of={},po=e=>(Vr("data-v-f52a6cf2"),e=e(),Xr(),e),Ef={id:"myCarousel",class:"carousel slide","data-bs-ride":"carousel"},Cf=po(()=>h("div",{class:"carousel-indicators"},[h("button",{type:"button","data-bs-target":"#myCarousel","data-bs-slide-to":"0",class:"active","aria-current":"true","aria-label":"Slide 1"}),h("button",{type:"button","data-bs-target":"#myCarousel","data-bs-slide-to":"1","aria-label":"Slide 2"}),h("button",{type:"button","data-bs-target":"#myCarousel","data-bs-slide-to":"2","aria-label":"Slide 3"})],-1)),Pf=po(()=>h("div",{class:"carousel-inner"},[h("div",{class:"carousel-item active"},[h("svg",{class:"bd-placeholder-img",width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",preserveAspectRatio:"xMidYMid slice",focusable:"false"},[h("rect",{width:"100%",height:"100%",fill:"#777"})]),h("div",{class:"container"},[h("div",{class:"carousel-caption text-start"},[h("h1",null,"Example headline."),h("p",null,"Some representative placeholder content for the first slide of the carousel."),h("p",null,[h("a",{class:"btn btn-lg btn-primary",href:"#"},"Sign up today")])])])]),h("div",{class:"carousel-item"},[h("svg",{class:"bd-placeholder-img",width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",preserveAspectRatio:"xMidYMid slice",focusable:"false"},[h("rect",{width:"100%",height:"100%",fill:"#777"})]),h("div",{class:"container"},[h("div",{class:"carousel-caption"},[h("h1",null,"Another example headline."),h("p",null,"Some representative placeholder content for the second slide of the carousel."),h("p",null,[h("a",{class:"btn btn-lg btn-primary",href:"#"},"Learn more")])])])]),h("div",{class:"carousel-item"},[h("svg",{class:"bd-placeholder-img",width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",preserveAspectRatio:"xMidYMid slice",focusable:"false"},[h("rect",{width:"100%",height:"100%",fill:"#777"})]),h("div",{class:"container"},[h("div",{class:"carousel-caption text-end"},[h("h1",null,"One more for good measure."),h("p",null,"Some representative placeholder content for the third slide of this carousel."),h("p",null,[h("a",{class:"btn btn-lg btn-primary",href:"#"},"Browse gallery")])])])])],-1)),Sf=Yl('<button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev" data-v-f52a6cf2><span class="carousel-control-prev-icon" aria-hidden="true" data-v-f52a6cf2></span><span class="visually-hidden" data-v-f52a6cf2>Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next" data-v-f52a6cf2><span class="carousel-control-next-icon" aria-hidden="true" data-v-f52a6cf2></span><span class="visually-hidden" data-v-f52a6cf2>Next</span></button>',2),If=[Cf,Pf,Sf];function Tf(e,t){return fe(),ce("div",Ef,If)}const Mf=lt(Of,[["render",Tf],["__scopeId","data-v-f52a6cf2"]]);const Nf={components:{AppCarousel:Mf}},Ff=e=>(Vr("data-v-af25b99b"),e=e(),Xr(),e),Rf=Ff(()=>h("div",{class:"container marketing"},[h("div",{class:"row"},[h("div",{class:"col-lg-4"},[h("svg",{class:"bd-placeholder-img rounded-circle",width:"140",height:"140",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":"Placeholder: 140x140",preserveAspectRatio:"xMidYMid slice",focusable:"false"},[h("title",null,"Placeholder"),h("rect",{width:"100%",height:"100%",fill:"#777"}),h("text",{x:"50%",y:"50%",fill:"#777",dy:".3em"},"140x140")]),h("h2",null,"Heading"),h("p",null,"Some representative placeholder content for the three columns of text below the carousel. This is the first column."),h("p",null,[h("a",{class:"btn btn-secondary",href:"#"},"View details \xBB")])]),h("div",{class:"col-lg-4"},[h("svg",{class:"bd-placeholder-img rounded-circle",width:"140",height:"140",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":"Placeholder: 140x140",preserveAspectRatio:"xMidYMid slice",focusable:"false"},[h("title",null,"Placeholder"),h("rect",{width:"100%",height:"100%",fill:"#777"}),h("text",{x:"50%",y:"50%",fill:"#777",dy:".3em"},"140x140")]),h("h2",null,"Heading"),h("p",null,"Another exciting bit of representative placeholder content. This time, we've moved on to the second column."),h("p",null,[h("a",{class:"btn btn-secondary",href:"#"},"View details \xBB")])]),h("div",{class:"col-lg-4"},[h("svg",{class:"bd-placeholder-img rounded-circle",width:"140",height:"140",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":"Placeholder: 140x140",preserveAspectRatio:"xMidYMid slice",focusable:"false"},[h("title",null,"Placeholder"),h("rect",{width:"100%",height:"100%",fill:"#777"}),h("text",{x:"50%",y:"50%",fill:"#777",dy:".3em"},"140x140")]),h("h2",null,"Heading"),h("p",null,"And lastly this, the third column of representative placeholder content."),h("p",null,[h("a",{class:"btn btn-secondary",href:"#"},"View details \xBB")])])]),h("hr",{class:"featurette-divider"}),h("div",{class:"row featurette"},[h("div",{class:"col-md-7"},[h("h2",{class:"featurette-heading"},[cn("First featurette heading. "),h("span",{class:"text-muted"},"It\u2019ll blow your mind.")]),h("p",{class:"lead"},"Some great placeholder content for the first featurette here. Imagine some exciting prose here.")]),h("div",{class:"col-md-5"},[h("svg",{class:"bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto",width:"500",height:"500",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":"Placeholder: 500x500",preserveAspectRatio:"xMidYMid slice",focusable:"false"},[h("title",null,"Placeholder"),h("rect",{width:"100%",height:"100%",fill:"#eee"}),h("text",{x:"50%",y:"50%",fill:"#aaa",dy:".3em"},"500x500")])])]),h("hr",{class:"featurette-divider"}),h("div",{class:"row featurette"},[h("div",{class:"col-md-7 order-md-2"},[h("h2",{class:"featurette-heading"},[cn("Oh yeah, it\u2019s that good. "),h("span",{class:"text-muted"},"See for yourself.")]),h("p",{class:"lead"},"Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.")]),h("div",{class:"col-md-5 order-md-1"},[h("svg",{class:"bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto",width:"500",height:"500",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":"Placeholder: 500x500",preserveAspectRatio:"xMidYMid slice",focusable:"false"},[h("title",null,"Placeholder"),h("rect",{width:"100%",height:"100%",fill:"#eee"}),h("text",{x:"50%",y:"50%",fill:"#aaa",dy:".3em"},"500x500")])])]),h("hr",{class:"featurette-divider"}),h("div",{class:"row featurette"},[h("div",{class:"col-md-7"},[h("h2",{class:"featurette-heading"},[cn("And lastly, this one. "),h("span",{class:"text-muted"},"Checkmate.")]),h("p",{class:"lead"},"And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.")]),h("div",{class:"col-md-5"},[h("svg",{class:"bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto",width:"500",height:"500",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":"Placeholder: 500x500",preserveAspectRatio:"xMidYMid slice",focusable:"false"},[h("title",null,"Placeholder"),h("rect",{width:"100%",height:"100%",fill:"#eee"}),h("text",{x:"50%",y:"50%",fill:"#aaa",dy:".3em"},"500x500")])])])],-1));function Lf(e,t,n,r,a,i){const o=qe("AppCarousel");return fe(),ce("main",null,[J(o),Rf])}const jf=lt(Nf,[["render",Lf],["__scopeId","data-v-af25b99b"]]),$f="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAA9CAYAAACNxhYOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAcSSURBVHgB7VxBctQ6EH2hsv9zg4gTML84wBcHoJIbxJyAcIJxVmyoCv8EMRcg5AQ2a6ginCBmAysqsGAd3Fhd0iiSLRnPgDV+VSpPrFZL1nO3WrIUYPqQTTpr0ocmXatEvy+adNIkgXQhmnSOtJ/xF2STyibdBqRUO+Ql9PP1Yh/TBFnyifr9rUlVky6bVBsyyyYdon0pMnV9ZMlMHQskDnqL2WLJVfc98BFa107yGdJCgQjLnhpW0ETnEeUE0iOaUCBRsgWGEZ0yCkSQfQ/TAT/QFTZLNg0LAn8OXH/y47EPAtqqlxgfEm3Qd4P1KJ6mcBnc5JM8xQKhpAgl77JC0rGCji04sbzw6CyQoBunyJs7f2ycYb2DiXBXp9svWYm4IcX3DEurPq7/pqd+QoEEyaaomx7qJcaFSTR1mLTyM6wTYeZLaHJCrNs1IxDQpJaO+pfQL9UN7hJeIEGy+YEzjIcMmsSsR7aAm1gm8ARhdV1b97n8BcLqLz33kyLbZRU+kEzuScKhM0c/Fh75DG4Sbbjaf2SUFeivnz2ANO4X2GHLFuheNs2VnIS21FBknjIuElzl7BfiHHFDEy+N5sa9Agkul35S175IvG7SE9y1lEOrrFTXtwjHG7SdSlZ2YLTpf7SRNKXKUe7YkDMhoNss0Y9bdT1A4uBItsQwFFi3CraS2IDPZcU+F0tYQnsDYeWZgV9MKh3PlZRlF2gjZ6lShXHwD+LgirrpQ4zPup+qK3mFGm4U0F4iBG8wEPvv3r3LMRCfP3/G4eEhWcc3bBb8ZUvC7y5jUKurQDi6hhDqAyJWQr+MAjrGOHWUuVIyNJQU2AL29/b2VhiIe/d+rbbSeEifDjdN+DO0CxISLeGnGI5KXSXaDq8Dyhx35JnWfaz0c78WHv0f0Ubkx9gS2WOsjfPEf9NruWQJz9TvHLozh+qq1O+Q8U6gfybAHo7klui2apYnSLSkD0GUgY31IWRbhFMHvVK/c4TtQJFN+s9x/5mRf9GhJ/TZqOMv1W9+gQr4vQbJnxryGfw4Um20h5IrI7+37/fev39/i4H48uULHj9+bFe+DZeeY92yC7RukR+eHvwB2k7gDqpxd6dKBk0M3afghwkTaIcotrpTo07SU+EuqMy18bdPDlbbeYgg2VdGG83dNoQnWHf5vNizUGWovDcGGJtswrYIlwjfW1ah7ah6gJ5vqiy9CNxXXSSW0EHaI4QhR/ewxF7ANVV0eZ49l5JNTL248k0TXjXpPvSYR5YsjHx66d4quasAPUdK1wN1v0brLQro5+AFm6pDH8mcIG4On6t6JNohR6g6aUpGL9kV/H1Jef+i9VIH6Fgo8lr27e3tW/SsG79+/Xrx/Plz3yL+aV/5GduF17KbadX1w4cPK3RDYMZkMKVtSTN+EzPZO4SZ7B3CTPYOYSZ7hzCTvUOYyd4h7L948aL+8eOHsDO+fv0q0f9FaNMfPlyg78bfsaXPgqlBYPgWmZDNfWO3lfXPiAS58RrpnVue4QCP2TVmwpOHGaDVmAlPGnY0XmMmPFm4pl41dpfwMc9mC4yra6MzH37woWkTjRMYPxqXaDdb+M5mxyDz6CoRp4vPa5e4e5yY9g8M3aA4KQiMRzZ16AWGnc12tat0lHPpEj26lp5y9gt0jsT/O4PAeGR/wPqagLDyM+hOd52NNttkyuVYJ2Fh6eoiXECTSnL2rlGh9JveJ1nCBcYhe4V+EgnUkfxS8C5OGxcIs1oBTXjpkeH8PhIF9EtxhkQh8PtkC4QfwieYB/dyK08augT6IQx5aeVlCHf1dt1JWrfA75OdQXdqKHK4LfIcEacoFQpPGR7zTxCOqDK7+NWL3fZlRJlCXaV1X6ird/uuA5VHF7era9uzjY/q+iBEeBfJNveFh8Lcs31g/BYDdPlk2RXHeJwrqx2d2EWyP6nr0HHuu+Penxozo+rdRbLZSg8iyiyNsqaVR1mWpcsG672PcLCX+hgivItkv1FXew7bhWN1tcdm7uRDhMMne2nVFQKprjHj/GQgMM48m+ezIXNUAf90ycwLiYifYn1VzITsqMeFFeJnFZOCwDhkS0PPqkeOXwzf9Oolwgg/hibHR1IBvdiTdehaIW6t4Bf2MC0I6E46jShX4+6etRyaaMqnf5NhjsFEjlR/9x1DLg3ZCq1LZl3mGetatftc/bbH54XSxeM6nxevoT9MPYWOEZI+PCkQvxeOkyswytC//44sN2Rsz3v0lKr9Ev3ut08XWf4RIjE1yyaQqwxaRDBA0628Iz/kbHYIhNJDlrzA+hnrSslQ+8/Qf1hfeHRVKsW0a8YfAnuSDDMmB3LPoR8vOBq/CZSf8ZeByA75WmVOu3LMmCQE1oM8+r5N47JUiX6XmIlOCjn6I+iYz5ejY4rR+N8MgfX/eESoMSyyHx0/AWvj3kFGNDWeAAAAAElFTkSuQmCC",Df={data(){return{logo:{filename:$f,alt:"Speech Olympiad Logo"}}}},zf=["src","alt"];function Hf(e,t,n,r,a,i){return fe(),ce("img",{src:a.logo.filename,alt:a.logo.alt},null,8,zf)}const ho=lt(Df,[["render",Hf]]);/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function Xa(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Xa(Object(n),!0).forEach(function(r){Uf(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xa(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function xn(e){return xn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xn(e)}function Bf(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function qa(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Yf(e,t,n){return t&&qa(e.prototype,t),n&&qa(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Uf(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ea(e,t){return Kf(e)||Xf(e,t)||go(e,t)||Qf()}function $n(e){return Wf(e)||Vf(e)||go(e)||qf()}function Wf(e){if(Array.isArray(e))return br(e)}function Kf(e){if(Array.isArray(e))return e}function Vf(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Xf(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function go(e,t){if(!!e){if(typeof e=="string")return br(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return br(e,t)}}function br(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function qf(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Qf(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Qa=function(){},ta={},vo={},bo=null,yo={mark:Qa,measure:Qa};try{typeof window<"u"&&(ta=window),typeof document<"u"&&(vo=document),typeof MutationObserver<"u"&&(bo=MutationObserver),typeof performance<"u"&&(yo=performance)}catch{}var Jf=ta.navigator||{},Ja=Jf.userAgent,Ga=Ja===void 0?"":Ja,Je=ta,q=vo,Za=bo,nn=yo;Je.document;var He=!!q.documentElement&&!!q.head&&typeof q.addEventListener=="function"&&typeof q.createElement=="function",xo=~Ga.indexOf("MSIE")||~Ga.indexOf("Trident/"),je="___FONT_AWESOME___",yr=16,wo="fa",_o="svg-inline--fa",ot="data-fa-i2svg",xr="data-fa-pseudo-element",Gf="data-fa-pseudo-element-pending",na="data-prefix",ra="data-icon",ei="fontawesome-i2svg",Zf="async",ec=["HTML","HEAD","STYLE","SCRIPT"],Ao=function(){try{return!0}catch{return!1}}(),aa={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},wn={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},ko={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},tc={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},nc=/fa[srltdbk]?[\-\ ]/,Oo="fa-layers-text",rc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,ac={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},Eo=[1,2,3,4,5,6,7,8,9,10],ic=Eo.concat([11,12,13,14,15,16,17,18,19,20]),oc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],rt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},sc=[].concat($n(Object.keys(wn)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",rt.GROUP,rt.SWAP_OPACITY,rt.PRIMARY,rt.SECONDARY]).concat(Eo.map(function(e){return"".concat(e,"x")})).concat(ic.map(function(e){return"w-".concat(e)})),Co=Je.FontAwesomeConfig||{};function lc(e){var t=q.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function fc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(q&&typeof q.querySelector=="function"){var cc=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];cc.forEach(function(e){var t=ea(e,2),n=t[0],r=t[1],a=fc(lc(n));a!=null&&(Co[r]=a)})}var uc={familyPrefix:wo,styleDefault:"solid",replacementClass:_o,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Dt=O(O({},uc),Co);Dt.autoReplaceSvg||(Dt.observeMutations=!1);var T={};Object.keys(Dt).forEach(function(e){Object.defineProperty(T,e,{enumerable:!0,set:function(n){Dt[e]=n,un.forEach(function(r){return r(T)})},get:function(){return Dt[e]}})});Je.FontAwesomeConfig=T;var un=[];function dc(e){return un.push(e),function(){un.splice(un.indexOf(e),1)}}var Ue=yr,Te={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function mc(e){if(!(!e||!He)){var t=q.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=q.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return q.head.insertBefore(t,r),e}}var pc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Vt(){for(var e=12,t="";e-- >0;)t+=pc[Math.random()*62|0];return t}function Ct(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ia(e){return e.classList?Ct(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Po(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function hc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Po(e[n]),'" ')},"").trim()}function Dn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function oa(e){return e.size!==Te.size||e.x!==Te.x||e.y!==Te.y||e.rotate!==Te.rotate||e.flipX||e.flipY}function gc(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:u}}function vc(e){var t=e.transform,n=e.width,r=n===void 0?yr:n,a=e.height,i=a===void 0?yr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&xo?l+="translate(".concat(t.x/Ue-r/2,"em, ").concat(t.y/Ue-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Ue,"em), calc(-50% + ").concat(t.y/Ue,"em)) "):l+="translate(".concat(t.x/Ue,"em, ").concat(t.y/Ue,"em) "),l+="scale(".concat(t.size/Ue*(t.flipX?-1:1),", ").concat(t.size/Ue*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var bc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function So(){var e=wo,t=_o,n=T.familyPrefix,r=T.replacementClass,a=bc;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var ti=!1;function Gn(){T.autoAddCss&&!ti&&(mc(So()),ti=!0)}var yc={mixout:function(){return{dom:{css:So,insertCss:Gn}}},hooks:function(){return{beforeDOMElementCreation:function(){Gn()},beforeI2svg:function(){Gn()}}}},$e=Je||{};$e[je]||($e[je]={});$e[je].styles||($e[je].styles={});$e[je].hooks||($e[je].hooks={});$e[je].shims||($e[je].shims=[]);var _e=$e[je],Io=[],xc=function e(){q.removeEventListener("DOMContentLoaded",e),_n=1,Io.map(function(t){return t()})},_n=!1;He&&(_n=(q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(q.readyState),_n||q.addEventListener("DOMContentLoaded",xc));function wc(e){!He||(_n?setTimeout(e,0):Io.push(e))}function Xt(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Po(e):"<".concat(t," ").concat(hc(r),">").concat(i.map(Xt).join(""),"</").concat(t,">")}function ni(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var _c=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Zn=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?_c(n,a):n,l,u,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)u=i[l],d=s(d,t[u],u,t);return d};function Ac(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function wr(e){var t=Ac(e);return t.length===1?t[0].toString(16):null}function kc(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function ri(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function _r(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=ri(t);typeof _e.hooks.addPack=="function"&&!a?_e.hooks.addPack(e,ri(t)):_e.styles[e]=O(O({},_e.styles[e]||{}),i),e==="fas"&&_r("fa",t)}var zt=_e.styles,Oc=_e.shims,Ec=Object.values(ko),sa=null,To={},Mo={},No={},Fo={},Ro={},Cc=Object.keys(aa);function Pc(e){return~sc.indexOf(e)}function Sc(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Pc(a)?a:null}var Lo=function(){var t=function(i){return Zn(zt,function(o,s,l){return o[l]=Zn(s,i,{}),o},{})};To=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Mo=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Ro=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in zt||T.autoFetchSvg,r=Zn(Oc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});No=r.names,Fo=r.unicodes,sa=zn(T.styleDefault)};dc(function(e){sa=zn(e.styleDefault)});Lo();function la(e,t){return(To[e]||{})[t]}function Ic(e,t){return(Mo[e]||{})[t]}function gt(e,t){return(Ro[e]||{})[t]}function jo(e){return No[e]||{prefix:null,iconName:null}}function Tc(e){var t=Fo[e],n=la("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ge(){return sa}var fa=function(){return{prefix:null,iconName:null,rest:[]}};function zn(e){var t=aa[e],n=wn[e]||wn[t],r=e in _e.styles?e:null;return n||r||null}function Hn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,a=null,i=e.reduce(function(o,s){var l=Sc(T.familyPrefix,s);if(zt[s]?(s=Ec.includes(s)?tc[s]:s,a=s,o.prefix=s):Cc.indexOf(s)>-1?(a=s,o.prefix=zn(s)):l?o.iconName=l:s!==T.replacementClass&&o.rest.push(s),!r&&o.prefix&&o.iconName){var u=a==="fa"?jo(o.iconName):{},d=gt(o.prefix,o.iconName);u.prefix&&(a=null),o.iconName=u.iconName||d||o.iconName,o.prefix=u.prefix||o.prefix,o.prefix==="far"&&!zt.far&&zt.fas&&!T.autoFetchSvg&&(o.prefix="fas")}return o},fa());return(i.prefix==="fa"||a==="fa")&&(i.prefix=Ge()||"fas"),i}var Mc=function(){function e(){Bf(this,e),this.definitions={}}return Yf(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=O(O({},n.definitions[s]||{}),o[s]),_r(s,o[s]);var l=ko[s];l&&_r(l,o[s]),Lo()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,u=o.icon,d=u[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=u)}),n[s][l]=u}),n}}]),e}(),ai=[],vt={},wt={},Nc=Object.keys(wt);function Fc(e,t){var n=t.mixoutsTo;return ai=e,vt={},Object.keys(wt).forEach(function(r){Nc.indexOf(r)===-1&&delete wt[r]}),ai.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),xn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){vt[o]||(vt[o]=[]),vt[o].push(i[o])})}r.provides&&r.provides(wt)}),n}function Ar(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=vt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function st(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=vt[e]||[];a.forEach(function(i){i.apply(null,n)})}function De(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return wt[e]?wt[e].apply(null,t):void 0}function kr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Ge();if(!!t)return t=gt(n,t)||t,ni($o.definitions,n,t)||ni(_e.styles,n,t)}var $o=new Mc,Rc=function(){T.autoReplaceSvg=!1,T.observeMutations=!1,st("noAuto")},Lc={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return He?(st("beforeI2svg",t),De("pseudoElements2svg",t),De("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;T.autoReplaceSvg===!1&&(T.autoReplaceSvg=!0),T.observeMutations=!0,wc(function(){$c({autoReplaceSvgRoot:n}),st("watch",t)})}},jc={icon:function(t){if(t===null)return null;if(xn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:gt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=zn(t[0]);return{prefix:r,iconName:gt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(T.familyPrefix,"-"))>-1||t.match(nc))){var a=Hn(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Ge(),iconName:gt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Ge();return{prefix:i,iconName:gt(i,t)||t}}}},ge={noAuto:Rc,config:T,dom:Lc,parse:jc,library:$o,findIconDefinition:kr,toHtml:Xt},$c=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?q:n;(Object.keys(_e.styles).length>0||T.autoFetchSvg)&&He&&T.autoReplaceSvg&&ge.dom.i2svg({node:r})};function Bn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Xt(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!He){var r=q.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Dc(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(oa(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};a.style=Dn(O(O({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function zc(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(T.familyPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},a),{},{id:o}),children:r}]}]}function ca(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,d=e.titleId,m=e.extra,y=e.watchable,E=y===void 0?!1:y,L=r.found?r:n,$=L.width,M=L.height,x=a==="fak",C=[T.replacementClass,i?"".concat(T.familyPrefix,"-").concat(i):""].filter(function(ie){return m.classes.indexOf(ie)===-1}).filter(function(ie){return ie!==""||!!ie}).concat(m.classes).join(" "),N={children:[],attributes:O(O({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:C,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat($," ").concat(M)})},D=x&&!~m.classes.indexOf("fa-fw")?{width:"".concat($/M*16*.0625,"em")}:{};E&&(N.attributes[ot]=""),l&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(d||Vt())},children:[l]}),delete N.attributes.title);var W=O(O({},N),{},{prefix:a,iconName:i,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:O(O({},D),m.styles)}),te=r.found&&n.found?De("generateAbstractMask",W)||{children:[],attributes:{}}:De("generateAbstractIcon",W)||{children:[],attributes:{}},ue=te.children,Oe=te.attributes;return W.children=ue,W.attributes=Oe,s?zc(W):Dc(W)}function ii(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=O(O(O({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(u[ot]="");var d=O({},o.styles);oa(a)&&(d.transform=vc({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=Dn(d);m.length>0&&(u.style=m);var y=[];return y.push({tag:"span",attributes:u,children:[t]}),i&&y.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),y}function Hc(e){var t=e.content,n=e.title,r=e.extra,a=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Dn(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var er=_e.styles;function Or(e){var t=e[0],n=e[1],r=e.slice(4),a=ea(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(T.familyPrefix,"-").concat(rt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(T.familyPrefix,"-").concat(rt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(T.familyPrefix,"-").concat(rt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Bc={found:!1,width:512,height:512};function Yc(e,t){!Ao&&!T.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Er(e,t){var n=t;return t==="fa"&&T.styleDefault!==null&&(t=Ge()),new Promise(function(r,a){if(De("missingIconAbstract"),n==="fa"){var i=jo(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&er[t]&&er[t][e]){var o=er[t][e];return r(Or(o))}Yc(e,t),r(O(O({},Bc),{},{icon:T.showMissingIcons&&e?De("missingIconAbstract")||{}:{}}))})}var oi=function(){},Cr=T.measurePerformance&&nn&&nn.mark&&nn.measure?nn:{mark:oi,measure:oi},Rt='FA "6.1.2"',Uc=function(t){return Cr.mark("".concat(Rt," ").concat(t," begins")),function(){return Do(t)}},Do=function(t){Cr.mark("".concat(Rt," ").concat(t," ends")),Cr.measure("".concat(Rt," ").concat(t),"".concat(Rt," ").concat(t," begins"),"".concat(Rt," ").concat(t," ends"))},ua={begin:Uc,end:Do},dn=function(){};function si(e){var t=e.getAttribute?e.getAttribute(ot):null;return typeof t=="string"}function Wc(e){var t=e.getAttribute?e.getAttribute(na):null,n=e.getAttribute?e.getAttribute(ra):null;return t&&n}function Kc(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(T.replacementClass)}function Vc(){if(T.autoReplaceSvg===!0)return mn.replace;var e=mn[T.autoReplaceSvg];return e||mn.replace}function Xc(e){return q.createElementNS("http://www.w3.org/2000/svg",e)}function qc(e){return q.createElement(e)}function zo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Xc:qc:n;if(typeof e=="string")return q.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(zo(o,{ceFn:r}))}),a}function Qc(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var mn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(zo(a),n)}),n.getAttribute(ot)===null&&T.keepOriginalSource){var r=q.createComment(Qc(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ia(n).indexOf(T.replacementClass))return mn.replace(t);var a=new RegExp("".concat(T.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===T.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Xt(s)}).join(`
`);n.setAttribute(ot,""),n.innerHTML=o}};function li(e){e()}function Ho(e,t){var n=typeof t=="function"?t:dn;if(e.length===0)n();else{var r=li;T.mutateApproach===Zf&&(r=Je.requestAnimationFrame||li),r(function(){var a=Vc(),i=ua.begin("mutate");e.map(a),i(),n()})}}var da=!1;function Bo(){da=!0}function Pr(){da=!1}var An=null;function fi(e){if(!!Za&&!!T.observeMutations){var t=e.treeCallback,n=t===void 0?dn:t,r=e.nodeCallback,a=r===void 0?dn:r,i=e.pseudoElementsCallback,o=i===void 0?dn:i,s=e.observeMutationsRoot,l=s===void 0?q:s;An=new Za(function(u){if(!da){var d=Ge();Ct(u).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!si(m.addedNodes[0])&&(T.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&T.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&si(m.target)&&~oc.indexOf(m.attributeName))if(m.attributeName==="class"&&Wc(m.target)){var y=Hn(ia(m.target)),E=y.prefix,L=y.iconName;m.target.setAttribute(na,E||d),L&&m.target.setAttribute(ra,L)}else Kc(m.target)&&a(m.target)})}}),He&&An.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Jc(){!An||An.disconnect()}function Gc(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Zc(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Hn(ia(e));return a.prefix||(a.prefix=Ge()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Ic(a.prefix,e.innerText)||la(a.prefix,wr(e.innerText))),!a.iconName&&T.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function eu(e){var t=Ct(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return T.autoA11y&&(n?t["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(r||Vt()):(t["aria-hidden"]="true",t.focusable="false")),t}function tu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Te,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ci(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Zc(e),r=n.iconName,a=n.prefix,i=n.rest,o=eu(e),s=Ar("parseNodeAttributes",{},e),l=t.styleParser?Gc(e):[];return O({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Te,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var nu=_e.styles;function Yo(e){var t=T.autoReplaceSvg==="nest"?ci(e,{styleParser:!1}):ci(e);return~t.extra.classes.indexOf(Oo)?De("generateLayersText",e,t):De("generateSvgReplacementMutation",e,t)}function ui(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!He)return Promise.resolve();var n=q.documentElement.classList,r=function(m){return n.add("".concat(ei,"-").concat(m))},a=function(m){return n.remove("".concat(ei,"-").concat(m))},i=T.autoFetchSvg?Object.keys(aa):Object.keys(nu);i.includes("fa")||i.push("fa");var o=[".".concat(Oo,":not([").concat(ot,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(ot,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Ct(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ua.begin("onTree"),u=s.reduce(function(d,m){try{var y=Yo(m);y&&d.push(y)}catch(E){Ao||E.name==="MissingIcon"&&console.error(E)}return d},[]);return new Promise(function(d,m){Promise.all(u).then(function(y){Ho(y,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(y){l(),m(y)})})}function ru(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Yo(e).then(function(n){n&&Ho([n],t)})}function au(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:kr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:kr(a||{})),e(r,O(O({},n),{},{mask:a}))}}var iu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Te:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,u=n.maskId,d=u===void 0?null:u,m=n.title,y=m===void 0?null:m,E=n.titleId,L=E===void 0?null:E,$=n.classes,M=$===void 0?[]:$,x=n.attributes,C=x===void 0?{}:x,N=n.styles,D=N===void 0?{}:N;if(!!t){var W=t.prefix,te=t.iconName,ue=t.icon;return Bn(O({type:"icon"},t),function(){return st("beforeDOMElementCreation",{iconDefinition:t,params:n}),T.autoA11y&&(y?C["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(L||Vt()):(C["aria-hidden"]="true",C.focusable="false")),ca({icons:{main:Or(ue),mask:l?Or(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:W,iconName:te,transform:O(O({},Te),a),symbol:o,title:y,maskId:d,titleId:L,extra:{attributes:C,styles:D,classes:M}})})}},ou={mixout:function(){return{icon:au(iu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ui,n.nodeCallback=ru,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?q:r,i=n.callback,o=i===void 0?function(){}:i;return ui(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,d=r.mask,m=r.maskId,y=r.extra;return new Promise(function(E,L){Promise.all([Er(a,s),d.iconName?Er(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function($){var M=ea($,2),x=M[0],C=M[1];E([n,ca({icons:{main:x,mask:C},prefix:s,iconName:a,transform:l,symbol:u,maskId:m,title:i,titleId:o,extra:y,watchable:!0})])}).catch(L)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Dn(s);l.length>0&&(a.style=l);var u;return oa(o)&&(u=De("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:a}}}},su={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Bn({type:"layer"},function(){st("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(T.familyPrefix,"-layers")].concat($n(i)).join(" ")},children:o}]})}}}},lu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return Bn({type:"counter",content:n},function(){return st("beforeDOMElementCreation",{content:n,params:r}),Hc({content:n.toString(),title:i,extra:{attributes:u,styles:m,classes:["".concat(T.familyPrefix,"-layers-counter")].concat($n(s))}})})}}}},fu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Te:a,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,y=r.styles,E=y===void 0?{}:y;return Bn({type:"text",content:n},function(){return st("beforeDOMElementCreation",{content:n,params:r}),ii({content:n,transform:O(O({},Te),i),title:s,extra:{attributes:m,styles:E,classes:["".concat(T.familyPrefix,"-layers-text")].concat($n(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(xo){var u=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/u,l=d.height/u}return T.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,ii({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},cu=new RegExp('"',"ug"),di=[1105920,1112319];function uu(e){var t=e.replace(cu,""),n=kc(t,0),r=n>=di[0]&&n<=di[1],a=t.length===2?t[0]===t[1]:!1;return{value:wr(a?t[0]:t),isSecondary:r||a}}function mi(e,t){var n="".concat(Gf).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Ct(e.children),o=i.filter(function(te){return te.getAttribute(xr)===t})[0],s=Je.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(rc),u=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),y=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?wn[l[2].toLowerCase()]:ac[u],E=uu(m),L=E.value,$=E.isSecondary,M=l[0].startsWith("FontAwesome"),x=la(y,L),C=x;if(M){var N=Tc(L);N.iconName&&N.prefix&&(x=N.iconName,y=N.prefix)}if(x&&!$&&(!o||o.getAttribute(na)!==y||o.getAttribute(ra)!==C)){e.setAttribute(n,C),o&&e.removeChild(o);var D=tu(),W=D.extra;W.attributes[xr]=t,Er(x,y).then(function(te){var ue=ca(O(O({},D),{},{icons:{main:te,mask:fa()},prefix:y,iconName:C,extra:W,watchable:!0})),Oe=q.createElement("svg");t==="::before"?e.insertBefore(Oe,e.firstChild):e.appendChild(Oe),Oe.outerHTML=ue.map(function(ie){return Xt(ie)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function du(e){return Promise.all([mi(e,"::before"),mi(e,"::after")])}function mu(e){return e.parentNode!==document.head&&!~ec.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(xr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function pi(e){if(!!He)return new Promise(function(t,n){var r=Ct(e.querySelectorAll("*")).filter(mu).map(du),a=ua.begin("searchPseudoElements");Bo(),Promise.all(r).then(function(){a(),Pr(),t()}).catch(function(){a(),Pr(),n()})})}var pu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=pi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?q:r;T.searchPseudoElements&&pi(a)}}},hi=!1,hu={mixout:function(){return{dom:{unwatch:function(){Bo(),hi=!0}}}},hooks:function(){return{bootstrap:function(){fi(Ar("mutationObserverCallbacks",{}))},noAuto:function(){Jc()},watch:function(n){var r=n.observeMutationsRoot;hi?Pr():fi(Ar("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},gi=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},gu={mixout:function(){return{parse:{transform:function(n){return gi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=gi(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(u," ").concat(d)},y={transform:"translate(".concat(o/2*-1," -256)")},E={outer:s,inner:m,path:y};return{tag:"g",attributes:O({},E.outer),children:[{tag:"g",attributes:O({},E.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),E.path)}]}]}}}},tr={x:0,y:0,width:"100%",height:"100%"};function vi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function vu(e){return e.tag==="g"?e.children:[e]}var bu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Hn(a.split(" ").map(function(o){return o.trim()})):fa();return i.prefix||(i.prefix=Ge()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,u=i.width,d=i.icon,m=o.width,y=o.icon,E=gc({transform:l,containerWidth:m,iconWidth:u}),L={tag:"rect",attributes:O(O({},tr),{},{fill:"white"})},$=d.children?{children:d.children.map(vi)}:{},M={tag:"g",attributes:O({},E.inner),children:[vi(O({tag:d.tag,attributes:O(O({},d.attributes),E.path)},$))]},x={tag:"g",attributes:O({},E.outer),children:[M]},C="mask-".concat(s||Vt()),N="clip-".concat(s||Vt()),D={tag:"mask",attributes:O(O({},tr),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[L,x]},W={tag:"defs",children:[{tag:"clipPath",attributes:{id:N},children:vu(y)},D]};return r.push(W,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(N,")"),mask:"url(#".concat(C,")")},tr)}),{children:r,attributes:a}}}},yu={provides:function(t){var n=!1;Je.matchMedia&&(n=Je.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=O(O({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:O(O({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:O(O({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:O(O({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},xu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},wu=[yc,ou,su,lu,fu,pu,hu,gu,bu,yu,xu];Fc(wu,{mixoutsTo:ge});ge.noAuto;var Uo=ge.config,_u=ge.library;ge.dom;var kn=ge.parse;ge.findIconDefinition;ge.toHtml;var Au=ge.icon;ge.layer;var ku=ge.text;ge.counter;function bi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function xe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?bi(Object(n),!0).forEach(function(r){se(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function On(e){return On=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},On(e)}function se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ou(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Eu(e,t){if(e==null)return{};var n=Ou(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function Sr(e){return Cu(e)||Pu(e)||Su(e)||Iu()}function Cu(e){if(Array.isArray(e))return Ir(e)}function Pu(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Su(e,t){if(!!e){if(typeof e=="string")return Ir(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ir(e,t)}}function Ir(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Iu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Tu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Wo={exports:{}};(function(e){(function(t){var n=function(x,C,N){if(!u(C)||m(C)||y(C)||E(C)||l(C))return C;var D,W=0,te=0;if(d(C))for(D=[],te=C.length;W<te;W++)D.push(n(x,C[W],N));else{D={};for(var ue in C)Object.prototype.hasOwnProperty.call(C,ue)&&(D[x(ue,N)]=n(x,C[ue],N))}return D},r=function(x,C){C=C||{};var N=C.separator||"_",D=C.split||/(?=[A-Z])/;return x.split(D).join(N)},a=function(x){return L(x)?x:(x=x.replace(/[\-_\s]+(.)?/g,function(C,N){return N?N.toUpperCase():""}),x.substr(0,1).toLowerCase()+x.substr(1))},i=function(x){var C=a(x);return C.substr(0,1).toUpperCase()+C.substr(1)},o=function(x,C){return r(x,C).toLowerCase()},s=Object.prototype.toString,l=function(x){return typeof x=="function"},u=function(x){return x===Object(x)},d=function(x){return s.call(x)=="[object Array]"},m=function(x){return s.call(x)=="[object Date]"},y=function(x){return s.call(x)=="[object RegExp]"},E=function(x){return s.call(x)=="[object Boolean]"},L=function(x){return x=x-0,x===x},$=function(x,C){var N=C&&"process"in C?C.process:C;return typeof N!="function"?x:function(D,W){return N(D,x,W)}},M={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(x,C){return n($(a,C),x)},decamelizeKeys:function(x,C){return n($(o,C),x,C)},pascalizeKeys:function(x,C){return n($(i,C),x)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=M:t.humps=M})(Tu)})(Wo);var Mu=Wo.exports,Nu=["class","style"];function Fu(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Mu.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Ru(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ma(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ma(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,u){var d=e.attributes[u];switch(u){case"class":l.class=Ru(d);break;case"style":l.style=Fu(d);break;default:l.attrs[u]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Eu(n,Nu);return uo(e.tag,xe(xe(xe({},t),{},{class:a.class,style:xe(xe({},a.style),o)},a.attrs),s),r)}var Ko=!1;try{Ko=!0}catch{}function Lu(){if(!Ko&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ht(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?se({},e,t):{}}function ju(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},se(t,"fa-".concat(e.size),e.size!==null),se(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),se(t,"fa-pull-".concat(e.pull),e.pull!==null),se(t,"fa-swap-opacity",e.swapOpacity),se(t,"fa-bounce",e.bounce),se(t,"fa-shake",e.shake),se(t,"fa-beat",e.beat),se(t,"fa-fade",e.fade),se(t,"fa-beat-fade",e.beatFade),se(t,"fa-flash",e.flash),se(t,"fa-spin-pulse",e.spinPulse),se(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function yi(e){if(e&&On(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(kn.icon)return kn.icon(e);if(e===null)return null;if(On(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var $u=qr({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=ve(function(){return yi(t.icon)}),i=ve(function(){return Ht("classes",ju(t))}),o=ve(function(){return Ht("transform",typeof t.transform=="string"?kn.transform(t.transform):t.transform)}),s=ve(function(){return Ht("mask",yi(t.mask))}),l=ve(function(){return Au(a.value,xe(xe(xe(xe({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});an(l,function(d){if(!d)return Lu("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var u=ve(function(){return l.value?ma(l.value.abstract[0],{},r):null});return function(){return u.value}}});qr({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=Uo.familyPrefix,i=ve(function(){return["".concat(a,"-layers")].concat(Sr(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return uo("div",{class:i.value},r.default?r.default():[])}}});qr({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=Uo.familyPrefix,i=ve(function(){return Ht("classes",[].concat(Sr(t.counter?["".concat(a,"-layers-counter")]:[]),Sr(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=ve(function(){return Ht("transform",typeof t.transform=="string"?kn.transform(t.transform):t.transform)}),s=ve(function(){var u=ku(t.value.toString(),xe(xe({},o.value),i.value)),d=u.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=ve(function(){return ma(s.value,{},r)});return function(){return l.value}}});/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var Vo={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M504 256C504 119 393 8 256 8S8 119 8 256c0 123.8 90.69 226.4 209.3 245V327.7h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.3 482.4 504 379.8 504 256z"]},Xo={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},qo={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]};_u.add(Xo,Vo,qo);const Du={components:{SOLogo:ho,FontAwesomeIcon:$u},data(){return{footer_menus:[{title:"Contact",items:["Link 1","Link 2","Link 3"]},{title:"Contact",items:["Link 1","Link 2","Link 3"]}],social_media_profiles:[{profile:"instagram",icon:Xo,link:"https://www.instagram.com/gavelmora_"},{profile:"facebook",icon:Vo,link:"https://www.facebook.com/gavelmora/"},{profile:"linkedin",icon:qo,link:"https://www.linkedin.com/company/gavel-club-of-university-of-moratuwa/"}]}}},pa=e=>(Vr("data-v-ecda76da"),e=e(),Xr(),e),zu={class:"container-fluid"},Hu={class:"row"},Bu={class:"col-12 col-md-8 d-flex align-items-center justify-content-center justify-content-md-start my-md-0 my-4"},Yu={class:"col-12 col-md-4"},Uu={class:"row justify-content-end"},Wu={class:"col-md-4 col-12 text-center text-md-start"},Ku={class:"footer-menu-title mt-2 mb-1"},Vu=pa(()=>h("div",{class:"row"},[h("div",{class:"col"},[h("hr")])],-1)),Xu={class:"row"},qu=pa(()=>h("div",{class:"col-md-4 col-12 d-flex justify-content-center justify-content-md-start align-items-center order-last order-md-first my-2 my-lg-0"},[h("span",null,"\xA9 Speech Olympiad 2022")],-1)),Qu={class:"col-md-8 col-12 order-first order-md-last"},Ju={class:"row"},Gu=pa(()=>h("div",{class:"col-12 col-md-6 my-2 my-md-0 d-flex justify-content-center justify-content-md-end align-items-center"},[h("span",null,"Follow us on")],-1)),Zu={class:"col my-2 my-md-0 d-flex justify-content-center"},ed=["href"];function td(e,t,n,r,a,i){const o=qe("SOLogo"),s=qe("FontAwesomeIcon");return fe(),ce("div",zu,[h("div",Hu,[h("div",Bu,[J(o)]),h("div",Yu,[h("div",Uu,[(fe(!0),ce(me,null,sn(a.footer_menus,l=>(fe(),ce("div",Wu,[h("div",Ku,nr(l.title),1),(fe(!0),ce(me,null,sn(l.items,u=>(fe(),ce("div",null,nr(u),1))),256))]))),256))])])]),Vu,h("div",Xu,[qu,h("div",Qu,[h("div",Ju,[Gu,(fe(!0),ce(me,null,sn(a.social_media_profiles,l=>(fe(),ce("div",Zu,[h("a",{href:l.link},[J(s,{icon:l.icon,size:"2x",color:"#000000"},null,8,["icon"])],8,ed)]))),256))])])])])}const nd=lt(Du,[["render",td],["__scopeId","data-v-ecda76da"]]),rd={data(){return{items:[{name:"Home",url:"/home"},{name:"About",url:"/about"},{name:"Speakers",url:"/speakers"},{name:"Contact",url:"/contact"}],activeItem:-1}},methods:{clickHandler(e){this.activeItem=e}}},ad=["onClick"],id=["href"];function od(e,t,n,r,a,i){return fe(!0),ce(me,null,sn(a.items,(o,s)=>(fe(),ce("li",{class:En(["nav-item",{active:s==a.activeItem}]),key:s,onClick:l=>i.clickHandler(s)},[h("div",null,[h("a",{class:"nav-link",href:o.url},nr(o.name),9,id)])],10,ad))),128)}const sd=lt(rd,[["render",od]]),ld={components:{AppHeaderMenu:sd,SOLogo:ho}},fd={class:"headerbar"},cd={class:"navbar navbar-expand-md navbar-dark fixed-top bg-dark","aria-label":"NavBar"},ud={class:"container-fluid"},dd={id:"logo",style:{width:"2opx !important,height=20px !important"}},md={class:"navbar-brand",href:"/home"},pd=h("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navBar1","aria-controls":"navBar1","aria-expanded":"false","aria-label":"Toggle navigation"},[h("span",{class:"navbar-toggler-icon"})],-1),hd={class:"collapse navbar-collapse",id:"navBar1"},gd={class:"navbar-nav ms-auto mb-2 mb-md-0"};function vd(e,t,n,r,a,i){const o=qe("SOLogo"),s=qe("AppHeaderMenu");return fe(),ce("div",fd,[h("nav",cd,[h("div",ud,[h("div",dd,[h("a",md,[J(o)])]),pd,h("div",hd,[h("ul",gd,[J(s)])])])])])}const bd=lt(ld,[["render",vd]]),yd={components:{Sample:jf,AppHeader:bd,AppFooter:nd}};function xd(e,t,n,r,a,i){const o=qe("AppHeader"),s=qe("Sample"),l=qe("AppFooter");return fe(),ce("div",null,[J(o),J(s),J(l)])}const wd=lt(yd,[["render",xd]]);Af(wd).mount("#app");

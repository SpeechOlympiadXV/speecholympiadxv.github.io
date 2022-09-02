const Go=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};Go();function Tr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const Zo="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Qo=Tr(Zo);function xi(e){return!!e||e===""}function Nr(e){if($(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=Q(r)?ns(r):Nr(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(Q(e))return e;if(Z(e))return e}}const es=/;(?![^(]*\))/g,ts=/:(.+)/;function ns(e){const t={};return e.split(es).forEach(n=>{if(n){const r=n.split(ts);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function En(e){let t="";if(Q(e))t=e;else if($(e))for(let n=0;n<e.length;n++){const r=En(e[n]);r&&(t+=r+" ")}else if(Z(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const nr=e=>Q(e)?e:e==null?"":$(e)||Z(e)&&(e.toString===Ai||!L(e.toString))?JSON.stringify(e,_i,2):String(e),_i=(e,t)=>t&&t.__v_isRef?_i(e,t.value):yt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:wi(t)?{[`Set(${t.size})`]:[...t.values()]}:Z(t)&&!$(t)&&!Oi(t)?String(t):t,K={},bt=[],ke=()=>{},rs=()=>!1,as=/^on[^a-z]/,Cn=e=>as.test(e),Mr=e=>e.startsWith("onUpdate:"),oe=Object.assign,Fr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},is=Object.prototype.hasOwnProperty,D=(e,t)=>is.call(e,t),$=Array.isArray,yt=e=>Pn(e)==="[object Map]",wi=e=>Pn(e)==="[object Set]",L=e=>typeof e=="function",Q=e=>typeof e=="string",$r=e=>typeof e=="symbol",Z=e=>e!==null&&typeof e=="object",ki=e=>Z(e)&&L(e.then)&&L(e.catch),Ai=Object.prototype.toString,Pn=e=>Ai.call(e),os=e=>Pn(e).slice(8,-1),Oi=e=>Pn(e)==="[object Object]",Rr=e=>Q(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,rn=Tr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Sn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ss=/-(\w)/g,Ne=Sn(e=>e.replace(ss,(t,n)=>n?n.toUpperCase():"")),ls=/\B([A-Z])/g,At=Sn(e=>e.replace(ls,"-$1").toLowerCase()),In=Sn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Vn=Sn(e=>e?`on${In(e)}`:""),pn=(e,t)=>!Object.is(e,t),qn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},hn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},fs=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let _a;const cs=()=>_a||(_a=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Pe;class us{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Pe&&(this.parent=Pe,this.index=(Pe.scopes||(Pe.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Pe;try{return Pe=this,t()}finally{Pe=n}}}on(){Pe=this}off(){Pe=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function ds(e,t=Pe){t&&t.active&&t.effects.push(e)}const Lr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ei=e=>(e.w&Je)>0,Ci=e=>(e.n&Je)>0,ms=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Je},ps=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Ei(a)&&!Ci(a)?a.delete(e):t[n++]=a,a.w&=~Je,a.n&=~Je}t.length=n}},rr=new WeakMap;let Mt=0,Je=1;const ar=30;let ye;const it=Symbol(""),ir=Symbol("");class jr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ds(this,r)}run(){if(!this.active)return this.fn();let t=ye,n=Ve;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=ye,ye=this,Ve=!0,Je=1<<++Mt,Mt<=ar?ms(this):wa(this),this.fn()}finally{Mt<=ar&&ps(this),Je=1<<--Mt,ye=this.parent,Ve=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ye===this?this.deferStop=!0:this.active&&(wa(this),this.onStop&&this.onStop(),this.active=!1)}}function wa(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ve=!0;const Pi=[];function Ot(){Pi.push(Ve),Ve=!1}function Et(){const e=Pi.pop();Ve=e===void 0?!0:e}function he(e,t,n){if(Ve&&ye){let r=rr.get(e);r||rr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Lr()),Si(a)}}function Si(e,t){let n=!1;Mt<=ar?Ci(e)||(e.n|=Je,n=!Ei(e)):n=!e.has(ye),n&&(e.add(ye),ye.deps.push(e))}function Re(e,t,n,r,a,i){const o=rr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&$(e))o.forEach((l,u)=>{(u==="length"||u>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":$(e)?Rr(n)&&s.push(o.get("length")):(s.push(o.get(it)),yt(e)&&s.push(o.get(ir)));break;case"delete":$(e)||(s.push(o.get(it)),yt(e)&&s.push(o.get(ir)));break;case"set":yt(e)&&s.push(o.get(it));break}if(s.length===1)s[0]&&or(s[0]);else{const l=[];for(const u of s)u&&l.push(...u);or(Lr(l))}}function or(e,t){const n=$(e)?e:[...e];for(const r of n)r.computed&&ka(r);for(const r of n)r.computed||ka(r)}function ka(e,t){(e!==ye||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const hs=Tr("__proto__,__v_isRef,__isVue"),Ii=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter($r)),gs=zr(),vs=zr(!1,!0),bs=zr(!0),Aa=ys();function ys(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=U(this);for(let i=0,o=this.length;i<o;i++)he(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(U)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Ot();const r=U(this)[t].apply(this,n);return Et(),r}}),e}function zr(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?$s:$i:t?Fi:Mi).get(r))return r;const o=$(r);if(!e&&o&&D(Aa,a))return Reflect.get(Aa,a,i);const s=Reflect.get(r,a,i);return($r(a)?Ii.has(a):hs(a))||(e||he(r,"get",a),t)?s:ie(s)?o&&Rr(a)?s:s.value:Z(s)?e?Ri(s):Ur(s):s}}const xs=Ti(),_s=Ti(!0);function Ti(e=!1){return function(n,r,a,i){let o=n[r];if(Ut(o)&&ie(o)&&!ie(a))return!1;if(!e&&!Ut(a)&&(sr(a)||(a=U(a),o=U(o)),!$(n)&&ie(o)&&!ie(a)))return o.value=a,!0;const s=$(n)&&Rr(r)?Number(r)<n.length:D(n,r),l=Reflect.set(n,r,a,i);return n===U(i)&&(s?pn(a,o)&&Re(n,"set",r,a):Re(n,"add",r,a)),l}}function ws(e,t){const n=D(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Re(e,"delete",t,void 0),r}function ks(e,t){const n=Reflect.has(e,t);return(!$r(t)||!Ii.has(t))&&he(e,"has",t),n}function As(e){return he(e,"iterate",$(e)?"length":it),Reflect.ownKeys(e)}const Ni={get:gs,set:xs,deleteProperty:ws,has:ks,ownKeys:As},Os={get:bs,set(e,t){return!0},deleteProperty(e,t){return!0}},Es=oe({},Ni,{get:vs,set:_s}),Dr=e=>e,Tn=e=>Reflect.getPrototypeOf(e);function Gt(e,t,n=!1,r=!1){e=e.__v_raw;const a=U(e),i=U(t);n||(t!==i&&he(a,"get",t),he(a,"get",i));const{has:o}=Tn(a),s=r?Dr:n?Wr:Yr;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function Zt(e,t=!1){const n=this.__v_raw,r=U(n),a=U(e);return t||(e!==a&&he(r,"has",e),he(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function Qt(e,t=!1){return e=e.__v_raw,!t&&he(U(e),"iterate",it),Reflect.get(e,"size",e)}function Oa(e){e=U(e);const t=U(this);return Tn(t).has.call(t,e)||(t.add(e),Re(t,"add",e,e)),this}function Ea(e,t){t=U(t);const n=U(this),{has:r,get:a}=Tn(n);let i=r.call(n,e);i||(e=U(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?pn(t,o)&&Re(n,"set",e,t):Re(n,"add",e,t),this}function Ca(e){const t=U(this),{has:n,get:r}=Tn(t);let a=n.call(t,e);a||(e=U(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Re(t,"delete",e,void 0),i}function Pa(){const e=U(this),t=e.size!==0,n=e.clear();return t&&Re(e,"clear",void 0,void 0),n}function en(e,t){return function(r,a){const i=this,o=i.__v_raw,s=U(o),l=t?Dr:e?Wr:Yr;return!e&&he(s,"iterate",it),o.forEach((u,d)=>r.call(a,l(u),l(d),i))}}function tn(e,t,n){return function(...r){const a=this.__v_raw,i=U(a),o=yt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,u=a[e](...r),d=n?Dr:t?Wr:Yr;return!t&&he(i,"iterate",l?ir:it),{next(){const{value:m,done:y}=u.next();return y?{value:m,done:y}:{value:s?[d(m[0]),d(m[1])]:d(m),done:y}},[Symbol.iterator](){return this}}}}function Be(e){return function(...t){return e==="delete"?!1:this}}function Cs(){const e={get(i){return Gt(this,i)},get size(){return Qt(this)},has:Zt,add:Oa,set:Ea,delete:Ca,clear:Pa,forEach:en(!1,!1)},t={get(i){return Gt(this,i,!1,!0)},get size(){return Qt(this)},has:Zt,add:Oa,set:Ea,delete:Ca,clear:Pa,forEach:en(!1,!0)},n={get(i){return Gt(this,i,!0)},get size(){return Qt(this,!0)},has(i){return Zt.call(this,i,!0)},add:Be("add"),set:Be("set"),delete:Be("delete"),clear:Be("clear"),forEach:en(!0,!1)},r={get(i){return Gt(this,i,!0,!0)},get size(){return Qt(this,!0)},has(i){return Zt.call(this,i,!0)},add:Be("add"),set:Be("set"),delete:Be("delete"),clear:Be("clear"),forEach:en(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=tn(i,!1,!1),n[i]=tn(i,!0,!1),t[i]=tn(i,!1,!0),r[i]=tn(i,!0,!0)}),[e,n,t,r]}const[Ps,Ss,Is,Ts]=Cs();function Hr(e,t){const n=t?e?Ts:Is:e?Ss:Ps;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(D(n,a)&&a in r?n:r,a,i)}const Ns={get:Hr(!1,!1)},Ms={get:Hr(!1,!0)},Fs={get:Hr(!0,!1)},Mi=new WeakMap,Fi=new WeakMap,$i=new WeakMap,$s=new WeakMap;function Rs(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ls(e){return e.__v_skip||!Object.isExtensible(e)?0:Rs(os(e))}function Ur(e){return Ut(e)?e:Br(e,!1,Ni,Ns,Mi)}function js(e){return Br(e,!1,Es,Ms,Fi)}function Ri(e){return Br(e,!0,Os,Fs,$i)}function Br(e,t,n,r,a){if(!Z(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Ls(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function xt(e){return Ut(e)?xt(e.__v_raw):!!(e&&e.__v_isReactive)}function Ut(e){return!!(e&&e.__v_isReadonly)}function sr(e){return!!(e&&e.__v_isShallow)}function Li(e){return xt(e)||Ut(e)}function U(e){const t=e&&e.__v_raw;return t?U(t):e}function ji(e){return hn(e,"__v_skip",!0),e}const Yr=e=>Z(e)?Ur(e):e,Wr=e=>Z(e)?Ri(e):e;function zs(e){Ve&&ye&&(e=U(e),Si(e.dep||(e.dep=Lr())))}function Ds(e,t){e=U(e),e.dep&&or(e.dep)}function ie(e){return!!(e&&e.__v_isRef===!0)}function Hs(e){return ie(e)?e.value:e}const Us={get:(e,t,n)=>Hs(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ie(a)&&!ie(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function zi(e){return xt(e)?e:new Proxy(e,Us)}class Bs{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new jr(t,()=>{this._dirty||(this._dirty=!0,Ds(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=U(this);return zs(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Ys(e,t,n=!1){let r,a;const i=L(e);return i?(r=e,a=ke):(r=e.get,a=e.set),new Bs(r,a,i||!a,n)}function qe(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Nn(i,t,n)}return a}function Ae(e,t,n,r){if(L(e)){const i=qe(e,t,n,r);return i&&ki(i)&&i.catch(o=>{Nn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Ae(e[i],t,n,r));return a}function Nn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){qe(l,null,10,[e,o,s]);return}}Ws(e,n,a,r)}function Ws(e,t,n,r=!0){console.error(e)}let gn=!1,lr=!1;const pe=[];let $e=0;const Rt=[];let Ft=null,mt=0;const Lt=[];let We=null,pt=0;const Di=Promise.resolve();let Kr=null,fr=null;function Ks(e){const t=Kr||Di;return e?t.then(this?e.bind(this):e):t}function Vs(e){let t=$e+1,n=pe.length;for(;t<n;){const r=t+n>>>1;Bt(pe[r])<e?t=r+1:n=r}return t}function Hi(e){(!pe.length||!pe.includes(e,gn&&e.allowRecurse?$e+1:$e))&&e!==fr&&(e.id==null?pe.push(e):pe.splice(Vs(e.id),0,e),Ui())}function Ui(){!gn&&!lr&&(lr=!0,Kr=Di.then(Wi))}function qs(e){const t=pe.indexOf(e);t>$e&&pe.splice(t,1)}function Bi(e,t,n,r){$(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),Ui()}function Xs(e){Bi(e,Ft,Rt,mt)}function Js(e){Bi(e,We,Lt,pt)}function Mn(e,t=null){if(Rt.length){for(fr=t,Ft=[...new Set(Rt)],Rt.length=0,mt=0;mt<Ft.length;mt++)Ft[mt]();Ft=null,mt=0,fr=null,Mn(e,t)}}function Yi(e){if(Mn(),Lt.length){const t=[...new Set(Lt)];if(Lt.length=0,We){We.push(...t);return}for(We=t,We.sort((n,r)=>Bt(n)-Bt(r)),pt=0;pt<We.length;pt++)We[pt]();We=null,pt=0}}const Bt=e=>e.id==null?1/0:e.id;function Wi(e){lr=!1,gn=!0,Mn(e),pe.sort((n,r)=>Bt(n)-Bt(r));const t=ke;try{for($e=0;$e<pe.length;$e++){const n=pe[$e];n&&n.active!==!1&&qe(n,null,14)}}finally{$e=0,pe.length=0,Yi(),gn=!1,Kr=null,(pe.length||Rt.length||Lt.length)&&Wi(e)}}function Gs(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||K;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:y}=r[d]||K;y&&(a=n.map(E=>E.trim())),m&&(a=n.map(fs))}let s,l=r[s=Vn(t)]||r[s=Vn(Ne(t))];!l&&i&&(l=r[s=Vn(At(t))]),l&&Ae(l,e,6,a);const u=r[s+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Ae(u,e,6,a)}}function Ki(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!L(e)){const l=u=>{const d=Ki(u,t,!0);d&&(s=!0,oe(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(r.set(e,null),null):($(i)?i.forEach(l=>o[l]=null):oe(o,i),r.set(e,o),o)}function Fn(e,t){return!e||!Cn(t)?!1:(t=t.slice(2).replace(/Once$/,""),D(e,t[0].toLowerCase()+t.slice(1))||D(e,At(t))||D(e,t))}let Ie=null,$n=null;function vn(e){const t=Ie;return Ie=e,$n=e&&e.type.__scopeId||null,t}function Vr(e){$n=e}function qr(){$n=null}function Zs(e,t=Ie,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&ja(-1);const i=vn(t),o=e(...a);return vn(i),r._d&&ja(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Xn(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:u,render:d,renderCache:m,data:y,setupState:E,ctx:R,inheritAttrs:j}=e;let N,x;const C=vn(e);try{if(n.shapeFlag&4){const z=a||r;N=Se(d.call(z,z,m,i,E,y,R)),x=l}else{const z=t;N=Se(z.length>1?z(i,{attrs:l,slots:s,emit:u}):z(i,null)),x=t.props?l:Qs(l)}}catch(z){jt.length=0,Nn(z,e,1),N=G(Yt)}let M=N;if(x&&j!==!1){const z=Object.keys(x),{shapeFlag:W}=M;z.length&&W&7&&(o&&z.some(Mr)&&(x=el(x,o)),M=wt(M,x))}return n.dirs&&(M=wt(M),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&(M.transition=n.transition),N=M,vn(C),N}const Qs=e=>{let t;for(const n in e)(n==="class"||n==="style"||Cn(n))&&((t||(t={}))[n]=e[n]);return t},el=(e,t)=>{const n={};for(const r in e)(!Mr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function tl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Sa(r,o,u):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const y=d[m];if(o[y]!==r[y]&&!Fn(u,y))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Sa(r,o,u):!0:!!o;return!1}function Sa(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Fn(n,i))return!0}return!1}function nl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const rl=e=>e.__isSuspense;function al(e,t){t&&t.pendingBranch?$(e)?t.effects.push(...e):t.effects.push(e):Js(e)}function il(e,t){if(ee){let n=ee.provides;const r=ee.parent&&ee.parent.provides;r===n&&(n=ee.provides=Object.create(r)),n[e]=t}}function Jn(e,t,n=!1){const r=ee||Ie;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&L(t)?t.call(r.proxy):t}}const Ia={};function an(e,t,n){return Vi(e,t,n)}function Vi(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=K){const s=ee;let l,u=!1,d=!1;if(ie(e)?(l=()=>e.value,u=sr(e)):xt(e)?(l=()=>e,r=!0):$(e)?(d=!0,u=e.some(x=>xt(x)||sr(x)),l=()=>e.map(x=>{if(ie(x))return x.value;if(xt(x))return ht(x);if(L(x))return qe(x,s,2)})):L(e)?t?l=()=>qe(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),Ae(e,s,3,[y])}:l=ke,t&&r){const x=l;l=()=>ht(x())}let m,y=x=>{m=N.onStop=()=>{qe(x,s,4)}};if(Kt)return y=ke,t?n&&Ae(t,s,3,[l(),d?[]:void 0,y]):l(),ke;let E=d?[]:Ia;const R=()=>{if(!!N.active)if(t){const x=N.run();(r||u||(d?x.some((C,M)=>pn(C,E[M])):pn(x,E)))&&(m&&m(),Ae(t,s,3,[x,E===Ia?void 0:E,y]),E=x)}else N.run()};R.allowRecurse=!!t;let j;a==="sync"?j=R:a==="post"?j=()=>ce(R,s&&s.suspense):j=()=>Xs(R);const N=new jr(l,j);return t?n?R():E=N.run():a==="post"?ce(N.run.bind(N),s&&s.suspense):N.run(),()=>{N.stop(),s&&s.scope&&Fr(s.scope.effects,N)}}function ol(e,t,n){const r=this.proxy,a=Q(e)?e.includes(".")?qi(r,e):()=>r[e]:e.bind(r,r);let i;L(t)?i=t:(i=t.handler,n=t);const o=ee;kt(this);const s=Vi(a,i.bind(r),n);return o?kt(o):ot(),s}function qi(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function ht(e,t){if(!Z(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ie(e))ht(e.value,t);else if($(e))for(let n=0;n<e.length;n++)ht(e[n],t);else if(wi(e)||yt(e))e.forEach(n=>{ht(n,t)});else if(Oi(e))for(const n in e)ht(e[n],t);return e}function Xr(e){return L(e)?{setup:e,name:e.name}:e}const on=e=>!!e.type.__asyncLoader,Xi=e=>e.type.__isKeepAlive;function sl(e,t){Ji(e,"a",t)}function ll(e,t){Ji(e,"da",t)}function Ji(e,t,n=ee){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Rn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Xi(a.parent.vnode)&&fl(r,t,n,a),a=a.parent}}function fl(e,t,n,r){const a=Rn(t,e,r,!0);Gi(()=>{Fr(r[t],a)},n)}function Rn(e,t,n=ee,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Ot(),kt(n);const s=Ae(t,n,e,o);return ot(),Et(),s});return r?a.unshift(i):a.push(i),i}}const De=e=>(t,n=ee)=>(!Kt||e==="sp")&&Rn(e,t,n),cl=De("bm"),ul=De("m"),dl=De("bu"),ml=De("u"),pl=De("bum"),Gi=De("um"),hl=De("sp"),gl=De("rtg"),vl=De("rtc");function bl(e,t=ee){Rn("ec",e,t)}function et(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Ot(),Ae(l,n,8,[e.el,s,e,t]),Et())}}const Zi="components";function Xe(e,t){return xl(Zi,e,!0,t)||e}const yl=Symbol();function xl(e,t,n=!0,r=!1){const a=Ie||ee;if(a){const i=a.type;if(e===Zi){const s=Gl(i,!1);if(s&&(s===t||s===Ne(t)||s===In(Ne(t))))return i}const o=Ta(a[e]||i[e],t)||Ta(a.appContext[e],t);return!o&&r?i:o}}function Ta(e,t){return e&&(e[t]||e[Ne(t)]||e[In(Ne(t))])}function sn(e,t,n,r){let a;const i=n&&n[r];if($(e)||Q(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(Z(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const u=o[s];a[s]=t(e[u],u,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const cr=e=>e?fo(e)?Qr(e)||e.proxy:cr(e.parent):null,bn=oe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>cr(e.parent),$root:e=>cr(e.root),$emit:e=>e.emit,$options:e=>eo(e),$forceUpdate:e=>e.f||(e.f=()=>Hi(e.update)),$nextTick:e=>e.n||(e.n=Ks.bind(e.proxy)),$watch:e=>ol.bind(e)}),_l={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let u;if(t[0]!=="$"){const E=o[t];if(E!==void 0)switch(E){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==K&&D(r,t))return o[t]=1,r[t];if(a!==K&&D(a,t))return o[t]=2,a[t];if((u=e.propsOptions[0])&&D(u,t))return o[t]=3,i[t];if(n!==K&&D(n,t))return o[t]=4,n[t];ur&&(o[t]=0)}}const d=bn[t];let m,y;if(d)return t==="$attrs"&&he(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==K&&D(n,t))return o[t]=4,n[t];if(y=l.config.globalProperties,D(y,t))return y[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==K&&D(a,t)?(a[t]=n,!0):r!==K&&D(r,t)?(r[t]=n,!0):D(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==K&&D(e,o)||t!==K&&D(t,o)||(s=i[0])&&D(s,o)||D(r,o)||D(bn,o)||D(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:D(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let ur=!0;function wl(e){const t=eo(e),n=e.proxy,r=e.ctx;ur=!1,t.beforeCreate&&Na(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:u,created:d,beforeMount:m,mounted:y,beforeUpdate:E,updated:R,activated:j,deactivated:N,beforeDestroy:x,beforeUnmount:C,destroyed:M,unmounted:z,render:W,renderTracked:te,renderTriggered:ue,errorCaptured:Oe,serverPrefetch:se,expose:Pt,inheritAttrs:ft,components:St,directives:Xt,filters:ha}=t;if(u&&kl(u,r,null,e.appContext.config.unwrapInjectedRef),o)for(const J in o){const V=o[J];L(V)&&(r[J]=V.bind(n))}if(a){const J=a.call(n,n);Z(J)&&(e.data=Ur(J))}if(ur=!0,i)for(const J in i){const V=i[J],Me=L(V)?V.bind(n,n):L(V.get)?V.get.bind(n,n):ke,Yn=!L(V)&&L(V.set)?V.set.bind(n):ke,It=ve({get:Me,set:Yn});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>It.value,set:ct=>It.value=ct})}if(s)for(const J in s)Qi(s[J],r,n,J);if(l){const J=L(l)?l.call(n):l;Reflect.ownKeys(J).forEach(V=>{il(V,J[V])})}d&&Na(d,e,"c");function le(J,V){$(V)?V.forEach(Me=>J(Me.bind(n))):V&&J(V.bind(n))}if(le(cl,m),le(ul,y),le(dl,E),le(ml,R),le(sl,j),le(ll,N),le(bl,Oe),le(vl,te),le(gl,ue),le(pl,C),le(Gi,z),le(hl,se),$(Pt))if(Pt.length){const J=e.exposed||(e.exposed={});Pt.forEach(V=>{Object.defineProperty(J,V,{get:()=>n[V],set:Me=>n[V]=Me})})}else e.exposed||(e.exposed={});W&&e.render===ke&&(e.render=W),ft!=null&&(e.inheritAttrs=ft),St&&(e.components=St),Xt&&(e.directives=Xt)}function kl(e,t,n=ke,r=!1){$(e)&&(e=dr(e));for(const a in e){const i=e[a];let o;Z(i)?"default"in i?o=Jn(i.from||a,i.default,!0):o=Jn(i.from||a):o=Jn(i),ie(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function Na(e,t,n){Ae($(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Qi(e,t,n,r){const a=r.includes(".")?qi(n,r):()=>n[r];if(Q(e)){const i=t[e];L(i)&&an(a,i)}else if(L(e))an(a,e.bind(n));else if(Z(e))if($(e))e.forEach(i=>Qi(i,t,n,r));else{const i=L(e.handler)?e.handler.bind(n):t[e.handler];L(i)&&an(a,i,e)}}function eo(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(u=>yn(l,u,o,!0)),yn(l,t,o)),i.set(t,l),l}function yn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&yn(e,i,n,!0),a&&a.forEach(o=>yn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Al[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Al={data:Ma,props:nt,emits:nt,methods:nt,computed:nt,beforeCreate:ne,created:ne,beforeMount:ne,mounted:ne,beforeUpdate:ne,updated:ne,beforeDestroy:ne,beforeUnmount:ne,destroyed:ne,unmounted:ne,activated:ne,deactivated:ne,errorCaptured:ne,serverPrefetch:ne,components:nt,directives:nt,watch:El,provide:Ma,inject:Ol};function Ma(e,t){return t?e?function(){return oe(L(e)?e.call(this,this):e,L(t)?t.call(this,this):t)}:t:e}function Ol(e,t){return nt(dr(e),dr(t))}function dr(e){if($(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ne(e,t){return e?[...new Set([].concat(e,t))]:t}function nt(e,t){return e?oe(oe(Object.create(null),e),t):t}function El(e,t){if(!e)return t;if(!t)return e;const n=oe(Object.create(null),e);for(const r in t)n[r]=ne(e[r],t[r]);return n}function Cl(e,t,n,r=!1){const a={},i={};hn(i,Ln,1),e.propsDefaults=Object.create(null),to(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:js(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Pl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=U(a),[l]=e.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let y=d[m];if(Fn(e.emitsOptions,y))continue;const E=t[y];if(l)if(D(i,y))E!==i[y]&&(i[y]=E,u=!0);else{const R=Ne(y);a[R]=mr(l,s,R,E,e,!1)}else E!==i[y]&&(i[y]=E,u=!0)}}}else{to(e,t,a,i)&&(u=!0);let d;for(const m in s)(!t||!D(t,m)&&((d=At(m))===m||!D(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=mr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!D(t,m)&&!0)&&(delete i[m],u=!0)}u&&Re(e,"set","$attrs")}function to(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(rn(l))continue;const u=t[l];let d;a&&D(a,d=Ne(l))?!i||!i.includes(d)?n[d]=u:(s||(s={}))[d]=u:Fn(e.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=U(n),u=s||K;for(let d=0;d<i.length;d++){const m=i[d];n[m]=mr(a,l,m,u[m],e,!D(u,m))}}return o}function mr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=D(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&L(l)){const{propsDefaults:u}=a;n in u?r=u[n]:(kt(a),r=u[n]=l.call(null,t),ot())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===At(n))&&(r=!0))}return r}function no(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!L(e)){const d=m=>{l=!0;const[y,E]=no(m,t,!0);oe(o,y),E&&s.push(...E)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return r.set(e,bt),bt;if($(i))for(let d=0;d<i.length;d++){const m=Ne(i[d]);Fa(m)&&(o[m]=K)}else if(i)for(const d in i){const m=Ne(d);if(Fa(m)){const y=i[d],E=o[m]=$(y)||L(y)?{type:y}:y;if(E){const R=La(Boolean,E.type),j=La(String,E.type);E[0]=R>-1,E[1]=j<0||R<j,(R>-1||D(E,"default"))&&s.push(m)}}}const u=[o,s];return r.set(e,u),u}function Fa(e){return e[0]!=="$"}function $a(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Ra(e,t){return $a(e)===$a(t)}function La(e,t){return $(t)?t.findIndex(n=>Ra(n,e)):L(t)&&Ra(t,e)?0:-1}const ro=e=>e[0]==="_"||e==="$stable",Jr=e=>$(e)?e.map(Se):[Se(e)],Sl=(e,t,n)=>{if(t._n)return t;const r=Zs((...a)=>Jr(t(...a)),n);return r._c=!1,r},ao=(e,t,n)=>{const r=e._ctx;for(const a in e){if(ro(a))continue;const i=e[a];if(L(i))t[a]=Sl(a,i,r);else if(i!=null){const o=Jr(i);t[a]=()=>o}}},io=(e,t)=>{const n=Jr(t);e.slots.default=()=>n},Il=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=U(t),hn(t,"_",n)):ao(t,e.slots={})}else e.slots={},t&&io(e,t);hn(e.slots,Ln,1)},Tl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=K;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(oe(a,t),!n&&s===1&&delete a._):(i=!t.$stable,ao(t,a)),o=t}else t&&(io(e,t),o={default:1});if(i)for(const s in a)!ro(s)&&!(s in o)&&delete a[s]};function oo(){return{app:null,config:{isNativeTag:rs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Nl=0;function Ml(e,t){return function(r,a=null){L(r)||(r=Object.assign({},r)),a!=null&&!Z(a)&&(a=null);const i=oo(),o=new Set;let s=!1;const l=i.app={_uid:Nl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Ql,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&L(u.install)?(o.add(u),u.install(l,...d)):L(u)&&(o.add(u),u(l,...d))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,d){return d?(i.components[u]=d,l):i.components[u]},directive(u,d){return d?(i.directives[u]=d,l):i.directives[u]},mount(u,d,m){if(!s){const y=G(r,a);return y.appContext=i,d&&t?t(y,u):e(y,u,m),s=!0,l._container=u,u.__vue_app__=l,Qr(y.component)||y.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,d){return i.provides[u]=d,l}};return l}}function pr(e,t,n,r,a=!1){if($(e)){e.forEach((y,E)=>pr(y,t&&($(t)?t[E]:t),n,r,a));return}if(on(r)&&!a)return;const i=r.shapeFlag&4?Qr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,u=t&&t.r,d=s.refs===K?s.refs={}:s.refs,m=s.setupState;if(u!=null&&u!==l&&(Q(u)?(d[u]=null,D(m,u)&&(m[u]=null)):ie(u)&&(u.value=null)),L(l))qe(l,s,12,[o,d]);else{const y=Q(l),E=ie(l);if(y||E){const R=()=>{if(e.f){const j=y?d[l]:l.value;a?$(j)&&Fr(j,i):$(j)?j.includes(i)||j.push(i):y?(d[l]=[i],D(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else y?(d[l]=o,D(m,l)&&(m[l]=o)):E&&(l.value=o,e.k&&(d[e.k]=o))};o?(R.id=-1,ce(R,n)):R()}}}const ce=al;function Fl(e){return $l(e)}function $l(e,t){const n=cs();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:u,setElementText:d,parentNode:m,nextSibling:y,setScopeId:E=ke,cloneNode:R,insertStaticContent:j}=e,N=(f,c,p,v=null,g=null,w=null,A=!1,_=null,k=!!c.dynamicChildren)=>{if(f===c)return;f&&!Nt(f,c)&&(v=Jt(f),Ue(f,g,w,!0),f=null),c.patchFlag===-2&&(k=!1,c.dynamicChildren=null);const{type:b,ref:S,shapeFlag:P}=c;switch(b){case Gr:x(f,c,p,v);break;case Yt:C(f,c,p,v);break;case ln:f==null&&M(c,p,v,A);break;case me:Xt(f,c,p,v,g,w,A,_,k);break;default:P&1?te(f,c,p,v,g,w,A,_,k):P&6?ha(f,c,p,v,g,w,A,_,k):(P&64||P&128)&&b.process(f,c,p,v,g,w,A,_,k,ut)}S!=null&&g&&pr(S,f&&f.ref,w,c||f,!c)},x=(f,c,p,v)=>{if(f==null)r(c.el=s(c.children),p,v);else{const g=c.el=f.el;c.children!==f.children&&u(g,c.children)}},C=(f,c,p,v)=>{f==null?r(c.el=l(c.children||""),p,v):c.el=f.el},M=(f,c,p,v)=>{[f.el,f.anchor]=j(f.children,c,p,v,f.el,f.anchor)},z=({el:f,anchor:c},p,v)=>{let g;for(;f&&f!==c;)g=y(f),r(f,p,v),f=g;r(c,p,v)},W=({el:f,anchor:c})=>{let p;for(;f&&f!==c;)p=y(f),a(f),f=p;a(c)},te=(f,c,p,v,g,w,A,_,k)=>{A=A||c.type==="svg",f==null?ue(c,p,v,g,w,A,_,k):Pt(f,c,g,w,A,_,k)},ue=(f,c,p,v,g,w,A,_)=>{let k,b;const{type:S,props:P,shapeFlag:I,transition:F,patchFlag:H,dirs:B}=f;if(f.el&&R!==void 0&&H===-1)k=f.el=R(f.el);else{if(k=f.el=o(f.type,w,P&&P.is,P),I&8?d(k,f.children):I&16&&se(f.children,k,null,v,g,w&&S!=="foreignObject",A,_),B&&et(f,null,v,"created"),P){for(const q in P)q!=="value"&&!rn(q)&&i(k,q,null,P[q],w,f.children,v,g,Fe);"value"in P&&i(k,"value",null,P.value),(b=P.onVnodeBeforeMount)&&Ce(b,v,f)}Oe(k,f,f.scopeId,A,v)}B&&et(f,null,v,"beforeMount");const Y=(!g||g&&!g.pendingBranch)&&F&&!F.persisted;Y&&F.beforeEnter(k),r(k,c,p),((b=P&&P.onVnodeMounted)||Y||B)&&ce(()=>{b&&Ce(b,v,f),Y&&F.enter(k),B&&et(f,null,v,"mounted")},g)},Oe=(f,c,p,v,g)=>{if(p&&E(f,p),v)for(let w=0;w<v.length;w++)E(f,v[w]);if(g){let w=g.subTree;if(c===w){const A=g.vnode;Oe(f,A,A.scopeId,A.slotScopeIds,g.parent)}}},se=(f,c,p,v,g,w,A,_,k=0)=>{for(let b=k;b<f.length;b++){const S=f[b]=_?Ke(f[b]):Se(f[b]);N(null,S,c,p,v,g,w,A,_)}},Pt=(f,c,p,v,g,w,A)=>{const _=c.el=f.el;let{patchFlag:k,dynamicChildren:b,dirs:S}=c;k|=f.patchFlag&16;const P=f.props||K,I=c.props||K;let F;p&&tt(p,!1),(F=I.onVnodeBeforeUpdate)&&Ce(F,p,c,f),S&&et(c,f,p,"beforeUpdate"),p&&tt(p,!0);const H=g&&c.type!=="foreignObject";if(b?ft(f.dynamicChildren,b,_,p,v,H,w):A||Me(f,c,_,null,p,v,H,w,!1),k>0){if(k&16)St(_,c,P,I,p,v,g);else if(k&2&&P.class!==I.class&&i(_,"class",null,I.class,g),k&4&&i(_,"style",P.style,I.style,g),k&8){const B=c.dynamicProps;for(let Y=0;Y<B.length;Y++){const q=B[Y],be=P[q],dt=I[q];(dt!==be||q==="value")&&i(_,q,be,dt,g,f.children,p,v,Fe)}}k&1&&f.children!==c.children&&d(_,c.children)}else!A&&b==null&&St(_,c,P,I,p,v,g);((F=I.onVnodeUpdated)||S)&&ce(()=>{F&&Ce(F,p,c,f),S&&et(c,f,p,"updated")},v)},ft=(f,c,p,v,g,w,A)=>{for(let _=0;_<c.length;_++){const k=f[_],b=c[_],S=k.el&&(k.type===me||!Nt(k,b)||k.shapeFlag&70)?m(k.el):p;N(k,b,S,null,v,g,w,A,!0)}},St=(f,c,p,v,g,w,A)=>{if(p!==v){for(const _ in v){if(rn(_))continue;const k=v[_],b=p[_];k!==b&&_!=="value"&&i(f,_,b,k,A,c.children,g,w,Fe)}if(p!==K)for(const _ in p)!rn(_)&&!(_ in v)&&i(f,_,p[_],null,A,c.children,g,w,Fe);"value"in v&&i(f,"value",p.value,v.value)}},Xt=(f,c,p,v,g,w,A,_,k)=>{const b=c.el=f?f.el:s(""),S=c.anchor=f?f.anchor:s("");let{patchFlag:P,dynamicChildren:I,slotScopeIds:F}=c;F&&(_=_?_.concat(F):F),f==null?(r(b,p,v),r(S,p,v),se(c.children,p,S,g,w,A,_,k)):P>0&&P&64&&I&&f.dynamicChildren?(ft(f.dynamicChildren,I,p,g,w,A,_),(c.key!=null||g&&c===g.subTree)&&so(f,c,!0)):Me(f,c,p,S,g,w,A,_,k)},ha=(f,c,p,v,g,w,A,_,k)=>{c.slotScopeIds=_,f==null?c.shapeFlag&512?g.ctx.activate(c,p,v,A,k):Bn(c,p,v,g,w,A,k):le(f,c,k)},Bn=(f,c,p,v,g,w,A)=>{const _=f.component=Kl(f,v,g);if(Xi(f)&&(_.ctx.renderer=ut),Vl(_),_.asyncDep){if(g&&g.registerDep(_,J),!f.el){const k=_.subTree=G(Yt);C(null,k,c,p)}return}J(_,f,c,p,g,w,A)},le=(f,c,p)=>{const v=c.component=f.component;if(tl(f,c,p))if(v.asyncDep&&!v.asyncResolved){V(v,c,p);return}else v.next=c,qs(v.update),v.update();else c.el=f.el,v.vnode=c},J=(f,c,p,v,g,w,A)=>{const _=()=>{if(f.isMounted){let{next:S,bu:P,u:I,parent:F,vnode:H}=f,B=S,Y;tt(f,!1),S?(S.el=H.el,V(f,S,A)):S=H,P&&qn(P),(Y=S.props&&S.props.onVnodeBeforeUpdate)&&Ce(Y,F,S,H),tt(f,!0);const q=Xn(f),be=f.subTree;f.subTree=q,N(be,q,m(be.el),Jt(be),f,g,w),S.el=q.el,B===null&&nl(f,q.el),I&&ce(I,g),(Y=S.props&&S.props.onVnodeUpdated)&&ce(()=>Ce(Y,F,S,H),g)}else{let S;const{el:P,props:I}=c,{bm:F,m:H,parent:B}=f,Y=on(c);if(tt(f,!1),F&&qn(F),!Y&&(S=I&&I.onVnodeBeforeMount)&&Ce(S,B,c),tt(f,!0),P&&Kn){const q=()=>{f.subTree=Xn(f),Kn(P,f.subTree,f,g,null)};Y?c.type.__asyncLoader().then(()=>!f.isUnmounted&&q()):q()}else{const q=f.subTree=Xn(f);N(null,q,p,v,f,g,w),c.el=q.el}if(H&&ce(H,g),!Y&&(S=I&&I.onVnodeMounted)){const q=c;ce(()=>Ce(S,B,q),g)}(c.shapeFlag&256||B&&on(B.vnode)&&B.vnode.shapeFlag&256)&&f.a&&ce(f.a,g),f.isMounted=!0,c=p=v=null}},k=f.effect=new jr(_,()=>Hi(b),f.scope),b=f.update=()=>k.run();b.id=f.uid,tt(f,!0),b()},V=(f,c,p)=>{c.component=f;const v=f.vnode.props;f.vnode=c,f.next=null,Pl(f,c.props,v,p),Tl(f,c.children,p),Ot(),Mn(void 0,f.update),Et()},Me=(f,c,p,v,g,w,A,_,k=!1)=>{const b=f&&f.children,S=f?f.shapeFlag:0,P=c.children,{patchFlag:I,shapeFlag:F}=c;if(I>0){if(I&128){It(b,P,p,v,g,w,A,_,k);return}else if(I&256){Yn(b,P,p,v,g,w,A,_,k);return}}F&8?(S&16&&Fe(b,g,w),P!==b&&d(p,P)):S&16?F&16?It(b,P,p,v,g,w,A,_,k):Fe(b,g,w,!0):(S&8&&d(p,""),F&16&&se(P,p,v,g,w,A,_,k))},Yn=(f,c,p,v,g,w,A,_,k)=>{f=f||bt,c=c||bt;const b=f.length,S=c.length,P=Math.min(b,S);let I;for(I=0;I<P;I++){const F=c[I]=k?Ke(c[I]):Se(c[I]);N(f[I],F,p,null,g,w,A,_,k)}b>S?Fe(f,g,w,!0,!1,P):se(c,p,v,g,w,A,_,k,P)},It=(f,c,p,v,g,w,A,_,k)=>{let b=0;const S=c.length;let P=f.length-1,I=S-1;for(;b<=P&&b<=I;){const F=f[b],H=c[b]=k?Ke(c[b]):Se(c[b]);if(Nt(F,H))N(F,H,p,null,g,w,A,_,k);else break;b++}for(;b<=P&&b<=I;){const F=f[P],H=c[I]=k?Ke(c[I]):Se(c[I]);if(Nt(F,H))N(F,H,p,null,g,w,A,_,k);else break;P--,I--}if(b>P){if(b<=I){const F=I+1,H=F<S?c[F].el:v;for(;b<=I;)N(null,c[b]=k?Ke(c[b]):Se(c[b]),p,H,g,w,A,_,k),b++}}else if(b>I)for(;b<=P;)Ue(f[b],g,w,!0),b++;else{const F=b,H=b,B=new Map;for(b=H;b<=I;b++){const de=c[b]=k?Ke(c[b]):Se(c[b]);de.key!=null&&B.set(de.key,b)}let Y,q=0;const be=I-H+1;let dt=!1,ba=0;const Tt=new Array(be);for(b=0;b<be;b++)Tt[b]=0;for(b=F;b<=P;b++){const de=f[b];if(q>=be){Ue(de,g,w,!0);continue}let Ee;if(de.key!=null)Ee=B.get(de.key);else for(Y=H;Y<=I;Y++)if(Tt[Y-H]===0&&Nt(de,c[Y])){Ee=Y;break}Ee===void 0?Ue(de,g,w,!0):(Tt[Ee-H]=b+1,Ee>=ba?ba=Ee:dt=!0,N(de,c[Ee],p,null,g,w,A,_,k),q++)}const ya=dt?Rl(Tt):bt;for(Y=ya.length-1,b=be-1;b>=0;b--){const de=H+b,Ee=c[de],xa=de+1<S?c[de+1].el:v;Tt[b]===0?N(null,Ee,p,xa,g,w,A,_,k):dt&&(Y<0||b!==ya[Y]?ct(Ee,p,xa,2):Y--)}}},ct=(f,c,p,v,g=null)=>{const{el:w,type:A,transition:_,children:k,shapeFlag:b}=f;if(b&6){ct(f.component.subTree,c,p,v);return}if(b&128){f.suspense.move(c,p,v);return}if(b&64){A.move(f,c,p,ut);return}if(A===me){r(w,c,p);for(let P=0;P<k.length;P++)ct(k[P],c,p,v);r(f.anchor,c,p);return}if(A===ln){z(f,c,p);return}if(v!==2&&b&1&&_)if(v===0)_.beforeEnter(w),r(w,c,p),ce(()=>_.enter(w),g);else{const{leave:P,delayLeave:I,afterLeave:F}=_,H=()=>r(w,c,p),B=()=>{P(w,()=>{H(),F&&F()})};I?I(w,H,B):B()}else r(w,c,p)},Ue=(f,c,p,v=!1,g=!1)=>{const{type:w,props:A,ref:_,children:k,dynamicChildren:b,shapeFlag:S,patchFlag:P,dirs:I}=f;if(_!=null&&pr(_,null,p,f,!0),S&256){c.ctx.deactivate(f);return}const F=S&1&&I,H=!on(f);let B;if(H&&(B=A&&A.onVnodeBeforeUnmount)&&Ce(B,c,f),S&6)Jo(f.component,p,v);else{if(S&128){f.suspense.unmount(p,v);return}F&&et(f,null,c,"beforeUnmount"),S&64?f.type.remove(f,c,p,g,ut,v):b&&(w!==me||P>0&&P&64)?Fe(b,c,p,!1,!0):(w===me&&P&384||!g&&S&16)&&Fe(k,c,p),v&&ga(f)}(H&&(B=A&&A.onVnodeUnmounted)||F)&&ce(()=>{B&&Ce(B,c,f),F&&et(f,null,c,"unmounted")},p)},ga=f=>{const{type:c,el:p,anchor:v,transition:g}=f;if(c===me){Xo(p,v);return}if(c===ln){W(f);return}const w=()=>{a(p),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(f.shapeFlag&1&&g&&!g.persisted){const{leave:A,delayLeave:_}=g,k=()=>A(p,w);_?_(f.el,w,k):k()}else w()},Xo=(f,c)=>{let p;for(;f!==c;)p=y(f),a(f),f=p;a(c)},Jo=(f,c,p)=>{const{bum:v,scope:g,update:w,subTree:A,um:_}=f;v&&qn(v),g.stop(),w&&(w.active=!1,Ue(A,f,c,p)),_&&ce(_,c),ce(()=>{f.isUnmounted=!0},c),c&&c.pendingBranch&&!c.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===c.pendingId&&(c.deps--,c.deps===0&&c.resolve())},Fe=(f,c,p,v=!1,g=!1,w=0)=>{for(let A=w;A<f.length;A++)Ue(f[A],c,p,v,g)},Jt=f=>f.shapeFlag&6?Jt(f.component.subTree):f.shapeFlag&128?f.suspense.next():y(f.anchor||f.el),va=(f,c,p)=>{f==null?c._vnode&&Ue(c._vnode,null,null,!0):N(c._vnode||null,f,c,null,null,null,p),Yi(),c._vnode=f},ut={p:N,um:Ue,m:ct,r:ga,mt:Bn,mc:se,pc:Me,pbc:ft,n:Jt,o:e};let Wn,Kn;return t&&([Wn,Kn]=t(ut)),{render:va,hydrate:Wn,createApp:Ml(va,Wn)}}function tt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function so(e,t,n=!1){const r=e.children,a=t.children;if($(r)&&$(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Ke(a[i]),s.el=o.el),n||so(o,s))}}function Rl(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const u=e[r];if(u!==0){if(a=n[n.length-1],e[a]<u){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<u?i=s+1:o=s;u<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Ll=e=>e.__isTeleport,me=Symbol(void 0),Gr=Symbol(void 0),Yt=Symbol(void 0),ln=Symbol(void 0),jt=[];let _e=null;function re(e=!1){jt.push(_e=e?null:[])}function jl(){jt.pop(),_e=jt[jt.length-1]||null}let Wt=1;function ja(e){Wt+=e}function zl(e){return e.dynamicChildren=Wt>0?_e||bt:null,jl(),Wt>0&&_e&&_e.push(e),e}function ae(e,t,n,r,a,i){return zl(h(e,t,n,r,a,i,!0))}function hr(e){return e?e.__v_isVNode===!0:!1}function Nt(e,t){return e.type===t.type&&e.key===t.key}const Ln="__vInternal",lo=({key:e})=>e!=null?e:null,fn=({ref:e,ref_key:t,ref_for:n})=>e!=null?Q(e)||ie(e)||L(e)?{i:Ie,r:e,k:t,f:!!n}:e:null;function h(e,t=null,n=null,r=0,a=null,i=e===me?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&lo(t),ref:t&&fn(t),scopeId:$n,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(Zr(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=Q(n)?8:16),Wt>0&&!o&&_e&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&_e.push(l),l}const G=Dl;function Dl(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===yl)&&(e=Yt),hr(e)){const s=wt(e,t,!0);return n&&Zr(s,n),Wt>0&&!i&&_e&&(s.shapeFlag&6?_e[_e.indexOf(e)]=s:_e.push(s)),s.patchFlag|=-2,s}if(Zl(e)&&(e=e.__vccOpts),t){t=Hl(t);let{class:s,style:l}=t;s&&!Q(s)&&(t.class=En(s)),Z(l)&&(Li(l)&&!$(l)&&(l=oe({},l)),t.style=Nr(l))}const o=Q(e)?1:rl(e)?128:Ll(e)?64:Z(e)?4:L(e)?2:0;return h(e,t,n,r,a,o,i,!0)}function Hl(e){return e?Li(e)||Ln in e?oe({},e):e:null}function wt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Bl(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&lo(s),ref:t&&t.ref?n&&a?$(a)?a.concat(fn(t)):[a,fn(t)]:fn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==me?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&wt(e.ssContent),ssFallback:e.ssFallback&&wt(e.ssFallback),el:e.el,anchor:e.anchor}}function cn(e=" ",t=0){return G(Gr,null,e,t)}function Ul(e,t){const n=G(ln,null,e);return n.staticCount=t,n}function Se(e){return e==null||typeof e=="boolean"?G(Yt):$(e)?G(me,null,e.slice()):typeof e=="object"?Ke(e):G(Gr,null,String(e))}function Ke(e){return e.el===null||e.memo?e:wt(e)}function Zr(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if($(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Zr(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Ln in t)?t._ctx=Ie:a===3&&Ie&&(Ie.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else L(t)?(t={default:t,_ctx:Ie},n=32):(t=String(t),r&64?(n=16,t=[cn(t)]):n=8);e.children=t,e.shapeFlag|=n}function Bl(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=En([t.class,r.class]));else if(a==="style")t.style=Nr([t.style,r.style]);else if(Cn(a)){const i=t[a],o=r[a];o&&i!==o&&!($(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Ce(e,t,n,r=null){Ae(e,t,7,[n,r])}const Yl=oo();let Wl=0;function Kl(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Yl,i={uid:Wl++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new us(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:no(r,a),emitsOptions:Ki(r,a),emit:null,emitted:null,propsDefaults:K,inheritAttrs:r.inheritAttrs,ctx:K,data:K,props:K,attrs:K,slots:K,refs:K,setupState:K,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Gs.bind(null,i),e.ce&&e.ce(i),i}let ee=null;const kt=e=>{ee=e,e.scope.on()},ot=()=>{ee&&ee.scope.off(),ee=null};function fo(e){return e.vnode.shapeFlag&4}let Kt=!1;function Vl(e,t=!1){Kt=t;const{props:n,children:r}=e.vnode,a=fo(e);Cl(e,n,a,t),Il(e,r);const i=a?ql(e,t):void 0;return Kt=!1,i}function ql(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=ji(new Proxy(e.ctx,_l));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Jl(e):null;kt(e),Ot();const i=qe(r,e,0,[e.props,a]);if(Et(),ot(),ki(i)){if(i.then(ot,ot),t)return i.then(o=>{za(e,o,t)}).catch(o=>{Nn(o,e,0)});e.asyncDep=i}else za(e,i,t)}else co(e,t)}function za(e,t,n){L(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Z(t)&&(e.setupState=zi(t)),co(e,n)}let Da;function co(e,t,n){const r=e.type;if(!e.render){if(!t&&Da&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,u=oe(oe({isCustomElement:i,delimiters:s},o),l);r.render=Da(a,u)}}e.render=r.render||ke}kt(e),Ot(),wl(e),Et(),ot()}function Xl(e){return new Proxy(e.attrs,{get(t,n){return he(e,"get","$attrs"),t[n]}})}function Jl(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Xl(e))},slots:e.slots,emit:e.emit,expose:t}}function Qr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(zi(ji(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in bn)return bn[n](e)}}))}function Gl(e,t=!0){return L(e)?e.displayName||e.name:e.name||t&&e.__name}function Zl(e){return L(e)&&"__vccOpts"in e}const ve=(e,t)=>Ys(e,t,Kt);function uo(e,t,n){const r=arguments.length;return r===2?Z(t)&&!$(t)?hr(t)?G(e,null,[t]):G(e,t):G(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&hr(n)&&(n=[n]),G(e,t,n))}const Ql="3.2.37",ef="http://www.w3.org/2000/svg",rt=typeof document<"u"?document:null,Ha=rt&&rt.createElement("template"),tf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?rt.createElementNS(ef,e):rt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>rt.createTextNode(e),createComment:e=>rt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>rt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Ha.innerHTML=r?`<svg>${e}</svg>`:e;const s=Ha.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function nf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function rf(e,t,n){const r=e.style,a=Q(n);if(n&&!a){for(const i in n)gr(r,i,n[i]);if(t&&!Q(t))for(const i in t)n[i]==null&&gr(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Ua=/\s*!important$/;function gr(e,t,n){if($(n))n.forEach(r=>gr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=af(e,t);Ua.test(n)?e.setProperty(At(r),n.replace(Ua,""),"important"):e[r]=n}}const Ba=["Webkit","Moz","ms"],Gn={};function af(e,t){const n=Gn[t];if(n)return n;let r=Ne(t);if(r!=="filter"&&r in e)return Gn[t]=r;r=In(r);for(let a=0;a<Ba.length;a++){const i=Ba[a]+r;if(i in e)return Gn[t]=i}return t}const Ya="http://www.w3.org/1999/xlink";function of(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ya,t.slice(6,t.length)):e.setAttributeNS(Ya,t,n);else{const i=Qo(t);n==null||i&&!xi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function sf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=xi(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}const[mo,lf]=(()=>{let e=Date.now,t=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let vr=0;const ff=Promise.resolve(),cf=()=>{vr=0},uf=()=>vr||(ff.then(cf),vr=mo());function df(e,t,n,r){e.addEventListener(t,n,r)}function mf(e,t,n,r){e.removeEventListener(t,n,r)}function pf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=hf(t);if(r){const u=i[t]=gf(r,a);df(e,s,u,l)}else o&&(mf(e,s,o,l),i[t]=void 0)}}const Wa=/(?:Once|Passive|Capture)$/;function hf(e){let t;if(Wa.test(e)){t={};let n;for(;n=e.match(Wa);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[At(e.slice(2)),t]}function gf(e,t){const n=r=>{const a=r.timeStamp||mo();(lf||a>=n.attached-1)&&Ae(vf(r,n.value),t,5,[r])};return n.value=e,n.attached=uf(),n}function vf(e,t){if($(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Ka=/^on[a-z]/,bf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?nf(e,r,a):t==="style"?rf(e,n,r):Cn(t)?Mr(t)||pf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):yf(e,t,r,a))?sf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),of(e,t,r,a))};function yf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Ka.test(t)&&L(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ka.test(t)&&Q(n)?!1:t in e}const xf=oe({patchProp:bf},tf);let Va;function _f(){return Va||(Va=Fl(xf))}const wf=(...e)=>{const t=_f().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=kf(r);if(!a)return;const i=t._component;!L(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function kf(e){return Q(e)?document.querySelector(e):e}const Qe=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Af={},po=e=>(Vr("data-v-f52a6cf2"),e=e(),qr(),e),Of={id:"myCarousel",class:"carousel slide","data-bs-ride":"carousel"},Ef=po(()=>h("div",{class:"carousel-indicators"},[h("button",{type:"button","data-bs-target":"#myCarousel","data-bs-slide-to":"0",class:"active","aria-current":"true","aria-label":"Slide 1"}),h("button",{type:"button","data-bs-target":"#myCarousel","data-bs-slide-to":"1","aria-label":"Slide 2"}),h("button",{type:"button","data-bs-target":"#myCarousel","data-bs-slide-to":"2","aria-label":"Slide 3"})],-1)),Cf=po(()=>h("div",{class:"carousel-inner"},[h("div",{class:"carousel-item active"},[h("svg",{class:"bd-placeholder-img",width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",preserveAspectRatio:"xMidYMid slice",focusable:"false"},[h("rect",{width:"100%",height:"100%",fill:"#777"})]),h("div",{class:"container"},[h("div",{class:"carousel-caption text-start"},[h("h1",null,"Example headline."),h("p",null,"Some representative placeholder content for the first slide of the carousel."),h("p",null,[h("a",{class:"btn btn-lg btn-primary",href:"#"},"Sign up today")])])])]),h("div",{class:"carousel-item"},[h("svg",{class:"bd-placeholder-img",width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",preserveAspectRatio:"xMidYMid slice",focusable:"false"},[h("rect",{width:"100%",height:"100%",fill:"#777"})]),h("div",{class:"container"},[h("div",{class:"carousel-caption"},[h("h1",null,"Another example headline."),h("p",null,"Some representative placeholder content for the second slide of the carousel."),h("p",null,[h("a",{class:"btn btn-lg btn-primary",href:"#"},"Learn more")])])])]),h("div",{class:"carousel-item"},[h("svg",{class:"bd-placeholder-img",width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",preserveAspectRatio:"xMidYMid slice",focusable:"false"},[h("rect",{width:"100%",height:"100%",fill:"#777"})]),h("div",{class:"container"},[h("div",{class:"carousel-caption text-end"},[h("h1",null,"One more for good measure."),h("p",null,"Some representative placeholder content for the third slide of this carousel."),h("p",null,[h("a",{class:"btn btn-lg btn-primary",href:"#"},"Browse gallery")])])])])],-1)),Pf=Ul('<button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev" data-v-f52a6cf2><span class="carousel-control-prev-icon" aria-hidden="true" data-v-f52a6cf2></span><span class="visually-hidden" data-v-f52a6cf2>Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next" data-v-f52a6cf2><span class="carousel-control-next-icon" aria-hidden="true" data-v-f52a6cf2></span><span class="visually-hidden" data-v-f52a6cf2>Next</span></button>',2),Sf=[Ef,Cf,Pf];function If(e,t){return re(),ae("div",Of,Sf)}const Tf=Qe(Af,[["render",If],["__scopeId","data-v-f52a6cf2"]]);const Nf={components:{AppCarousel:Tf}},Mf=e=>(Vr("data-v-af25b99b"),e=e(),qr(),e),Ff=Mf(()=>h("div",{class:"container marketing"},[h("div",{class:"row"},[h("div",{class:"col-lg-4"},[h("svg",{class:"bd-placeholder-img rounded-circle",width:"140",height:"140",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":"Placeholder: 140x140",preserveAspectRatio:"xMidYMid slice",focusable:"false"},[h("title",null,"Placeholder"),h("rect",{width:"100%",height:"100%",fill:"#777"}),h("text",{x:"50%",y:"50%",fill:"#777",dy:".3em"},"140x140")]),h("h2",null,"Heading"),h("p",null,"Some representative placeholder content for the three columns of text below the carousel. This is the first column."),h("p",null,[h("a",{class:"btn btn-secondary",href:"#"},"View details \xBB")])]),h("div",{class:"col-lg-4"},[h("svg",{class:"bd-placeholder-img rounded-circle",width:"140",height:"140",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":"Placeholder: 140x140",preserveAspectRatio:"xMidYMid slice",focusable:"false"},[h("title",null,"Placeholder"),h("rect",{width:"100%",height:"100%",fill:"#777"}),h("text",{x:"50%",y:"50%",fill:"#777",dy:".3em"},"140x140")]),h("h2",null,"Heading"),h("p",null,"Another exciting bit of representative placeholder content. This time, we've moved on to the second column."),h("p",null,[h("a",{class:"btn btn-secondary",href:"#"},"View details \xBB")])]),h("div",{class:"col-lg-4"},[h("svg",{class:"bd-placeholder-img rounded-circle",width:"140",height:"140",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":"Placeholder: 140x140",preserveAspectRatio:"xMidYMid slice",focusable:"false"},[h("title",null,"Placeholder"),h("rect",{width:"100%",height:"100%",fill:"#777"}),h("text",{x:"50%",y:"50%",fill:"#777",dy:".3em"},"140x140")]),h("h2",null,"Heading"),h("p",null,"And lastly this, the third column of representative placeholder content."),h("p",null,[h("a",{class:"btn btn-secondary",href:"#"},"View details \xBB")])])]),h("hr",{class:"featurette-divider"}),h("div",{class:"row featurette"},[h("div",{class:"col-md-7"},[h("h2",{class:"featurette-heading"},[cn("First featurette heading. "),h("span",{class:"text-muted"},"It\u2019ll blow your mind.")]),h("p",{class:"lead"},"Some great placeholder content for the first featurette here. Imagine some exciting prose here.")]),h("div",{class:"col-md-5"},[h("svg",{class:"bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto",width:"500",height:"500",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":"Placeholder: 500x500",preserveAspectRatio:"xMidYMid slice",focusable:"false"},[h("title",null,"Placeholder"),h("rect",{width:"100%",height:"100%",fill:"#eee"}),h("text",{x:"50%",y:"50%",fill:"#aaa",dy:".3em"},"500x500")])])]),h("hr",{class:"featurette-divider"}),h("div",{class:"row featurette"},[h("div",{class:"col-md-7 order-md-2"},[h("h2",{class:"featurette-heading"},[cn("Oh yeah, it\u2019s that good. "),h("span",{class:"text-muted"},"See for yourself.")]),h("p",{class:"lead"},"Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.")]),h("div",{class:"col-md-5 order-md-1"},[h("svg",{class:"bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto",width:"500",height:"500",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":"Placeholder: 500x500",preserveAspectRatio:"xMidYMid slice",focusable:"false"},[h("title",null,"Placeholder"),h("rect",{width:"100%",height:"100%",fill:"#eee"}),h("text",{x:"50%",y:"50%",fill:"#aaa",dy:".3em"},"500x500")])])]),h("hr",{class:"featurette-divider"}),h("div",{class:"row featurette"},[h("div",{class:"col-md-7"},[h("h2",{class:"featurette-heading"},[cn("And lastly, this one. "),h("span",{class:"text-muted"},"Checkmate.")]),h("p",{class:"lead"},"And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.")]),h("div",{class:"col-md-5"},[h("svg",{class:"bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto",width:"500",height:"500",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":"Placeholder: 500x500",preserveAspectRatio:"xMidYMid slice",focusable:"false"},[h("title",null,"Placeholder"),h("rect",{width:"100%",height:"100%",fill:"#eee"}),h("text",{x:"50%",y:"50%",fill:"#aaa",dy:".3em"},"500x500")])])])],-1));function $f(e,t,n,r,a,i){const o=Xe("AppCarousel");return re(),ae("main",null,[G(o),Ff])}const Rf=Qe(Nf,[["render",$f],["__scopeId","data-v-af25b99b"]]),Lf={data(){return{images_path:"src/assets/images/",logo:{filename:"so-logo.png",alt:"Speech Olympiad Logo"}}}},jf=["src","alt"];function zf(e,t,n,r,a,i){return re(),ae("img",{src:a.images_path+a.logo.filename,alt:a.logo.alt},null,8,jf)}const Df=Qe(Lf,[["render",zf]]);/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function qa(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?qa(Object(n),!0).forEach(function(r){Bf(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qa(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function xn(e){return xn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xn(e)}function Hf(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Xa(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Uf(e,t,n){return t&&Xa(e.prototype,t),n&&Xa(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Bf(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ea(e,t){return Wf(e)||Vf(e,t)||ho(e,t)||Xf()}function jn(e){return Yf(e)||Kf(e)||ho(e)||qf()}function Yf(e){if(Array.isArray(e))return br(e)}function Wf(e){if(Array.isArray(e))return e}function Kf(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Vf(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function ho(e,t){if(!!e){if(typeof e=="string")return br(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return br(e,t)}}function br(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function qf(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Xf(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ja=function(){},ta={},go={},vo=null,bo={mark:Ja,measure:Ja};try{typeof window<"u"&&(ta=window),typeof document<"u"&&(go=document),typeof MutationObserver<"u"&&(vo=MutationObserver),typeof performance<"u"&&(bo=performance)}catch{}var Jf=ta.navigator||{},Ga=Jf.userAgent,Za=Ga===void 0?"":Ga,Ge=ta,X=go,Qa=vo,nn=bo;Ge.document;var He=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",yo=~Za.indexOf("MSIE")||~Za.indexOf("Trident/"),Le="___FONT_AWESOME___",yr=16,xo="fa",_o="svg-inline--fa",st="data-fa-i2svg",xr="data-fa-pseudo-element",Gf="data-fa-pseudo-element-pending",na="data-prefix",ra="data-icon",ei="fontawesome-i2svg",Zf="async",Qf=["HTML","HEAD","STYLE","SCRIPT"],wo=function(){try{return!0}catch{return!1}}(),aa={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},_n={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},ko={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},ec={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},tc=/fa[srltdbk]?[\-\ ]/,Ao="fa-layers-text",nc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,rc={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},Oo=[1,2,3,4,5,6,7,8,9,10],ac=Oo.concat([11,12,13,14,15,16,17,18,19,20]),ic=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],at={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},oc=[].concat(jn(Object.keys(_n)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",at.GROUP,at.SWAP_OPACITY,at.PRIMARY,at.SECONDARY]).concat(Oo.map(function(e){return"".concat(e,"x")})).concat(ac.map(function(e){return"w-".concat(e)})),Eo=Ge.FontAwesomeConfig||{};function sc(e){var t=X.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function lc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(X&&typeof X.querySelector=="function"){var fc=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];fc.forEach(function(e){var t=ea(e,2),n=t[0],r=t[1],a=lc(sc(n));a!=null&&(Eo[r]=a)})}var cc={familyPrefix:xo,styleDefault:"solid",replacementClass:_o,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},zt=O(O({},cc),Eo);zt.autoReplaceSvg||(zt.observeMutations=!1);var T={};Object.keys(zt).forEach(function(e){Object.defineProperty(T,e,{enumerable:!0,set:function(n){zt[e]=n,un.forEach(function(r){return r(T)})},get:function(){return zt[e]}})});Ge.FontAwesomeConfig=T;var un=[];function uc(e){return un.push(e),function(){un.splice(un.indexOf(e),1)}}var Ye=yr,Te={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function dc(e){if(!(!e||!He)){var t=X.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=X.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return X.head.insertBefore(t,r),e}}var mc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Vt(){for(var e=12,t="";e-- >0;)t+=mc[Math.random()*62|0];return t}function Ct(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ia(e){return e.classList?Ct(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Co(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function pc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Co(e[n]),'" ')},"").trim()}function zn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function oa(e){return e.size!==Te.size||e.x!==Te.x||e.y!==Te.y||e.rotate!==Te.rotate||e.flipX||e.flipY}function hc(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:u}}function gc(e){var t=e.transform,n=e.width,r=n===void 0?yr:n,a=e.height,i=a===void 0?yr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&yo?l+="translate(".concat(t.x/Ye-r/2,"em, ").concat(t.y/Ye-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Ye,"em), calc(-50% + ").concat(t.y/Ye,"em)) "):l+="translate(".concat(t.x/Ye,"em, ").concat(t.y/Ye,"em) "),l+="scale(".concat(t.size/Ye*(t.flipX?-1:1),", ").concat(t.size/Ye*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var vc=`:root, :host {
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
}`;function Po(){var e=xo,t=_o,n=T.familyPrefix,r=T.replacementClass,a=vc;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var ti=!1;function Zn(){T.autoAddCss&&!ti&&(dc(Po()),ti=!0)}var bc={mixout:function(){return{dom:{css:Po,insertCss:Zn}}},hooks:function(){return{beforeDOMElementCreation:function(){Zn()},beforeI2svg:function(){Zn()}}}},je=Ge||{};je[Le]||(je[Le]={});je[Le].styles||(je[Le].styles={});je[Le].hooks||(je[Le].hooks={});je[Le].shims||(je[Le].shims=[]);var we=je[Le],So=[],yc=function e(){X.removeEventListener("DOMContentLoaded",e),wn=1,So.map(function(t){return t()})},wn=!1;He&&(wn=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),wn||X.addEventListener("DOMContentLoaded",yc));function xc(e){!He||(wn?setTimeout(e,0):So.push(e))}function qt(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Co(e):"<".concat(t," ").concat(pc(r),">").concat(i.map(qt).join(""),"</").concat(t,">")}function ni(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var _c=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Qn=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?_c(n,a):n,l,u,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)u=i[l],d=s(d,t[u],u,t);return d};function wc(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function _r(e){var t=wc(e);return t.length===1?t[0].toString(16):null}function kc(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function ri(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function wr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=ri(t);typeof we.hooks.addPack=="function"&&!a?we.hooks.addPack(e,ri(t)):we.styles[e]=O(O({},we.styles[e]||{}),i),e==="fas"&&wr("fa",t)}var Dt=we.styles,Ac=we.shims,Oc=Object.values(ko),sa=null,Io={},To={},No={},Mo={},Fo={},Ec=Object.keys(aa);function Cc(e){return~oc.indexOf(e)}function Pc(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Cc(a)?a:null}var $o=function(){var t=function(i){return Qn(Dt,function(o,s,l){return o[l]=Qn(s,i,{}),o},{})};Io=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),To=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Fo=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Dt||T.autoFetchSvg,r=Qn(Ac,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});No=r.names,Mo=r.unicodes,sa=Dn(T.styleDefault)};uc(function(e){sa=Dn(e.styleDefault)});$o();function la(e,t){return(Io[e]||{})[t]}function Sc(e,t){return(To[e]||{})[t]}function gt(e,t){return(Fo[e]||{})[t]}function Ro(e){return No[e]||{prefix:null,iconName:null}}function Ic(e){var t=Mo[e],n=la("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ze(){return sa}var fa=function(){return{prefix:null,iconName:null,rest:[]}};function Dn(e){var t=aa[e],n=_n[e]||_n[t],r=e in we.styles?e:null;return n||r||null}function Hn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,a=null,i=e.reduce(function(o,s){var l=Pc(T.familyPrefix,s);if(Dt[s]?(s=Oc.includes(s)?ec[s]:s,a=s,o.prefix=s):Ec.indexOf(s)>-1?(a=s,o.prefix=Dn(s)):l?o.iconName=l:s!==T.replacementClass&&o.rest.push(s),!r&&o.prefix&&o.iconName){var u=a==="fa"?Ro(o.iconName):{},d=gt(o.prefix,o.iconName);u.prefix&&(a=null),o.iconName=u.iconName||d||o.iconName,o.prefix=u.prefix||o.prefix,o.prefix==="far"&&!Dt.far&&Dt.fas&&!T.autoFetchSvg&&(o.prefix="fas")}return o},fa());return(i.prefix==="fa"||a==="fa")&&(i.prefix=Ze()||"fas"),i}var Tc=function(){function e(){Hf(this,e),this.definitions={}}return Uf(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=O(O({},n.definitions[s]||{}),o[s]),wr(s,o[s]);var l=ko[s];l&&wr(l,o[s]),$o()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,u=o.icon,d=u[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=u)}),n[s][l]=u}),n}}]),e}(),ai=[],vt={},_t={},Nc=Object.keys(_t);function Mc(e,t){var n=t.mixoutsTo;return ai=e,vt={},Object.keys(_t).forEach(function(r){Nc.indexOf(r)===-1&&delete _t[r]}),ai.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),xn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){vt[o]||(vt[o]=[]),vt[o].push(i[o])})}r.provides&&r.provides(_t)}),n}function kr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=vt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function lt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=vt[e]||[];a.forEach(function(i){i.apply(null,n)})}function ze(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return _t[e]?_t[e].apply(null,t):void 0}function Ar(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Ze();if(!!t)return t=gt(n,t)||t,ni(Lo.definitions,n,t)||ni(we.styles,n,t)}var Lo=new Tc,Fc=function(){T.autoReplaceSvg=!1,T.observeMutations=!1,lt("noAuto")},$c={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return He?(lt("beforeI2svg",t),ze("pseudoElements2svg",t),ze("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;T.autoReplaceSvg===!1&&(T.autoReplaceSvg=!0),T.observeMutations=!0,xc(function(){Lc({autoReplaceSvgRoot:n}),lt("watch",t)})}},Rc={icon:function(t){if(t===null)return null;if(xn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:gt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Dn(t[0]);return{prefix:r,iconName:gt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(T.familyPrefix,"-"))>-1||t.match(tc))){var a=Hn(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Ze(),iconName:gt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Ze();return{prefix:i,iconName:gt(i,t)||t}}}},ge={noAuto:Fc,config:T,dom:$c,parse:Rc,library:Lo,findIconDefinition:Ar,toHtml:qt},Lc=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?X:n;(Object.keys(we.styles).length>0||T.autoFetchSvg)&&He&&T.autoReplaceSvg&&ge.dom.i2svg({node:r})};function Un(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return qt(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!He){var r=X.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function jc(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(oa(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};a.style=zn(O(O({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function zc(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(T.familyPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},a),{},{id:o}),children:r}]}]}function ca(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,d=e.titleId,m=e.extra,y=e.watchable,E=y===void 0?!1:y,R=r.found?r:n,j=R.width,N=R.height,x=a==="fak",C=[T.replacementClass,i?"".concat(T.familyPrefix,"-").concat(i):""].filter(function(se){return m.classes.indexOf(se)===-1}).filter(function(se){return se!==""||!!se}).concat(m.classes).join(" "),M={children:[],attributes:O(O({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:C,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(j," ").concat(N)})},z=x&&!~m.classes.indexOf("fa-fw")?{width:"".concat(j/N*16*.0625,"em")}:{};E&&(M.attributes[st]=""),l&&(M.children.push({tag:"title",attributes:{id:M.attributes["aria-labelledby"]||"title-".concat(d||Vt())},children:[l]}),delete M.attributes.title);var W=O(O({},M),{},{prefix:a,iconName:i,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:O(O({},z),m.styles)}),te=r.found&&n.found?ze("generateAbstractMask",W)||{children:[],attributes:{}}:ze("generateAbstractIcon",W)||{children:[],attributes:{}},ue=te.children,Oe=te.attributes;return W.children=ue,W.attributes=Oe,s?zc(W):jc(W)}function ii(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=O(O(O({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(u[st]="");var d=O({},o.styles);oa(a)&&(d.transform=gc({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=zn(d);m.length>0&&(u.style=m);var y=[];return y.push({tag:"span",attributes:u,children:[t]}),i&&y.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),y}function Dc(e){var t=e.content,n=e.title,r=e.extra,a=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=zn(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var er=we.styles;function Or(e){var t=e[0],n=e[1],r=e.slice(4),a=ea(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(T.familyPrefix,"-").concat(at.GROUP)},children:[{tag:"path",attributes:{class:"".concat(T.familyPrefix,"-").concat(at.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(T.familyPrefix,"-").concat(at.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Hc={found:!1,width:512,height:512};function Uc(e,t){!wo&&!T.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Er(e,t){var n=t;return t==="fa"&&T.styleDefault!==null&&(t=Ze()),new Promise(function(r,a){if(ze("missingIconAbstract"),n==="fa"){var i=Ro(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&er[t]&&er[t][e]){var o=er[t][e];return r(Or(o))}Uc(e,t),r(O(O({},Hc),{},{icon:T.showMissingIcons&&e?ze("missingIconAbstract")||{}:{}}))})}var oi=function(){},Cr=T.measurePerformance&&nn&&nn.mark&&nn.measure?nn:{mark:oi,measure:oi},$t='FA "6.1.2"',Bc=function(t){return Cr.mark("".concat($t," ").concat(t," begins")),function(){return jo(t)}},jo=function(t){Cr.mark("".concat($t," ").concat(t," ends")),Cr.measure("".concat($t," ").concat(t),"".concat($t," ").concat(t," begins"),"".concat($t," ").concat(t," ends"))},ua={begin:Bc,end:jo},dn=function(){};function si(e){var t=e.getAttribute?e.getAttribute(st):null;return typeof t=="string"}function Yc(e){var t=e.getAttribute?e.getAttribute(na):null,n=e.getAttribute?e.getAttribute(ra):null;return t&&n}function Wc(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(T.replacementClass)}function Kc(){if(T.autoReplaceSvg===!0)return mn.replace;var e=mn[T.autoReplaceSvg];return e||mn.replace}function Vc(e){return X.createElementNS("http://www.w3.org/2000/svg",e)}function qc(e){return X.createElement(e)}function zo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Vc:qc:n;if(typeof e=="string")return X.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(zo(o,{ceFn:r}))}),a}function Xc(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var mn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(zo(a),n)}),n.getAttribute(st)===null&&T.keepOriginalSource){var r=X.createComment(Xc(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ia(n).indexOf(T.replacementClass))return mn.replace(t);var a=new RegExp("".concat(T.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===T.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return qt(s)}).join(`
`);n.setAttribute(st,""),n.innerHTML=o}};function li(e){e()}function Do(e,t){var n=typeof t=="function"?t:dn;if(e.length===0)n();else{var r=li;T.mutateApproach===Zf&&(r=Ge.requestAnimationFrame||li),r(function(){var a=Kc(),i=ua.begin("mutate");e.map(a),i(),n()})}}var da=!1;function Ho(){da=!0}function Pr(){da=!1}var kn=null;function fi(e){if(!!Qa&&!!T.observeMutations){var t=e.treeCallback,n=t===void 0?dn:t,r=e.nodeCallback,a=r===void 0?dn:r,i=e.pseudoElementsCallback,o=i===void 0?dn:i,s=e.observeMutationsRoot,l=s===void 0?X:s;kn=new Qa(function(u){if(!da){var d=Ze();Ct(u).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!si(m.addedNodes[0])&&(T.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&T.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&si(m.target)&&~ic.indexOf(m.attributeName))if(m.attributeName==="class"&&Yc(m.target)){var y=Hn(ia(m.target)),E=y.prefix,R=y.iconName;m.target.setAttribute(na,E||d),R&&m.target.setAttribute(ra,R)}else Wc(m.target)&&a(m.target)})}}),He&&kn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Jc(){!kn||kn.disconnect()}function Gc(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Zc(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Hn(ia(e));return a.prefix||(a.prefix=Ze()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Sc(a.prefix,e.innerText)||la(a.prefix,_r(e.innerText))),!a.iconName&&T.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Qc(e){var t=Ct(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return T.autoA11y&&(n?t["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(r||Vt()):(t["aria-hidden"]="true",t.focusable="false")),t}function eu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Te,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ci(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Zc(e),r=n.iconName,a=n.prefix,i=n.rest,o=Qc(e),s=kr("parseNodeAttributes",{},e),l=t.styleParser?Gc(e):[];return O({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Te,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var tu=we.styles;function Uo(e){var t=T.autoReplaceSvg==="nest"?ci(e,{styleParser:!1}):ci(e);return~t.extra.classes.indexOf(Ao)?ze("generateLayersText",e,t):ze("generateSvgReplacementMutation",e,t)}function ui(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!He)return Promise.resolve();var n=X.documentElement.classList,r=function(m){return n.add("".concat(ei,"-").concat(m))},a=function(m){return n.remove("".concat(ei,"-").concat(m))},i=T.autoFetchSvg?Object.keys(aa):Object.keys(tu);i.includes("fa")||i.push("fa");var o=[".".concat(Ao,":not([").concat(st,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(st,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Ct(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ua.begin("onTree"),u=s.reduce(function(d,m){try{var y=Uo(m);y&&d.push(y)}catch(E){wo||E.name==="MissingIcon"&&console.error(E)}return d},[]);return new Promise(function(d,m){Promise.all(u).then(function(y){Do(y,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(y){l(),m(y)})})}function nu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Uo(e).then(function(n){n&&Do([n],t)})}function ru(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Ar(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Ar(a||{})),e(r,O(O({},n),{},{mask:a}))}}var au=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Te:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,u=n.maskId,d=u===void 0?null:u,m=n.title,y=m===void 0?null:m,E=n.titleId,R=E===void 0?null:E,j=n.classes,N=j===void 0?[]:j,x=n.attributes,C=x===void 0?{}:x,M=n.styles,z=M===void 0?{}:M;if(!!t){var W=t.prefix,te=t.iconName,ue=t.icon;return Un(O({type:"icon"},t),function(){return lt("beforeDOMElementCreation",{iconDefinition:t,params:n}),T.autoA11y&&(y?C["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(R||Vt()):(C["aria-hidden"]="true",C.focusable="false")),ca({icons:{main:Or(ue),mask:l?Or(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:W,iconName:te,transform:O(O({},Te),a),symbol:o,title:y,maskId:d,titleId:R,extra:{attributes:C,styles:z,classes:N}})})}},iu={mixout:function(){return{icon:ru(au)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ui,n.nodeCallback=nu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?X:r,i=n.callback,o=i===void 0?function(){}:i;return ui(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,d=r.mask,m=r.maskId,y=r.extra;return new Promise(function(E,R){Promise.all([Er(a,s),d.iconName?Er(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(j){var N=ea(j,2),x=N[0],C=N[1];E([n,ca({icons:{main:x,mask:C},prefix:s,iconName:a,transform:l,symbol:u,maskId:m,title:i,titleId:o,extra:y,watchable:!0})])}).catch(R)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=zn(s);l.length>0&&(a.style=l);var u;return oa(o)&&(u=ze("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:a}}}},ou={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Un({type:"layer"},function(){lt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(T.familyPrefix,"-layers")].concat(jn(i)).join(" ")},children:o}]})}}}},su={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return Un({type:"counter",content:n},function(){return lt("beforeDOMElementCreation",{content:n,params:r}),Dc({content:n.toString(),title:i,extra:{attributes:u,styles:m,classes:["".concat(T.familyPrefix,"-layers-counter")].concat(jn(s))}})})}}}},lu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Te:a,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,y=r.styles,E=y===void 0?{}:y;return Un({type:"text",content:n},function(){return lt("beforeDOMElementCreation",{content:n,params:r}),ii({content:n,transform:O(O({},Te),i),title:s,extra:{attributes:m,styles:E,classes:["".concat(T.familyPrefix,"-layers-text")].concat(jn(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(yo){var u=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/u,l=d.height/u}return T.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,ii({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},fu=new RegExp('"',"ug"),di=[1105920,1112319];function cu(e){var t=e.replace(fu,""),n=kc(t,0),r=n>=di[0]&&n<=di[1],a=t.length===2?t[0]===t[1]:!1;return{value:_r(a?t[0]:t),isSecondary:r||a}}function mi(e,t){var n="".concat(Gf).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Ct(e.children),o=i.filter(function(te){return te.getAttribute(xr)===t})[0],s=Ge.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(nc),u=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),y=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?_n[l[2].toLowerCase()]:rc[u],E=cu(m),R=E.value,j=E.isSecondary,N=l[0].startsWith("FontAwesome"),x=la(y,R),C=x;if(N){var M=Ic(R);M.iconName&&M.prefix&&(x=M.iconName,y=M.prefix)}if(x&&!j&&(!o||o.getAttribute(na)!==y||o.getAttribute(ra)!==C)){e.setAttribute(n,C),o&&e.removeChild(o);var z=eu(),W=z.extra;W.attributes[xr]=t,Er(x,y).then(function(te){var ue=ca(O(O({},z),{},{icons:{main:te,mask:fa()},prefix:y,iconName:C,extra:W,watchable:!0})),Oe=X.createElement("svg");t==="::before"?e.insertBefore(Oe,e.firstChild):e.appendChild(Oe),Oe.outerHTML=ue.map(function(se){return qt(se)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function uu(e){return Promise.all([mi(e,"::before"),mi(e,"::after")])}function du(e){return e.parentNode!==document.head&&!~Qf.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(xr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function pi(e){if(!!He)return new Promise(function(t,n){var r=Ct(e.querySelectorAll("*")).filter(du).map(uu),a=ua.begin("searchPseudoElements");Ho(),Promise.all(r).then(function(){a(),Pr(),t()}).catch(function(){a(),Pr(),n()})})}var mu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=pi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?X:r;T.searchPseudoElements&&pi(a)}}},hi=!1,pu={mixout:function(){return{dom:{unwatch:function(){Ho(),hi=!0}}}},hooks:function(){return{bootstrap:function(){fi(kr("mutationObserverCallbacks",{}))},noAuto:function(){Jc()},watch:function(n){var r=n.observeMutationsRoot;hi?Pr():fi(kr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},gi=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},hu={mixout:function(){return{parse:{transform:function(n){return gi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=gi(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(u," ").concat(d)},y={transform:"translate(".concat(o/2*-1," -256)")},E={outer:s,inner:m,path:y};return{tag:"g",attributes:O({},E.outer),children:[{tag:"g",attributes:O({},E.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),E.path)}]}]}}}},tr={x:0,y:0,width:"100%",height:"100%"};function vi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function gu(e){return e.tag==="g"?e.children:[e]}var vu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Hn(a.split(" ").map(function(o){return o.trim()})):fa();return i.prefix||(i.prefix=Ze()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,u=i.width,d=i.icon,m=o.width,y=o.icon,E=hc({transform:l,containerWidth:m,iconWidth:u}),R={tag:"rect",attributes:O(O({},tr),{},{fill:"white"})},j=d.children?{children:d.children.map(vi)}:{},N={tag:"g",attributes:O({},E.inner),children:[vi(O({tag:d.tag,attributes:O(O({},d.attributes),E.path)},j))]},x={tag:"g",attributes:O({},E.outer),children:[N]},C="mask-".concat(s||Vt()),M="clip-".concat(s||Vt()),z={tag:"mask",attributes:O(O({},tr),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[R,x]},W={tag:"defs",children:[{tag:"clipPath",attributes:{id:M},children:gu(y)},z]};return r.push(W,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(M,")"),mask:"url(#".concat(C,")")},tr)}),{children:r,attributes:a}}}},bu={provides:function(t){var n=!1;Ge.matchMedia&&(n=Ge.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=O(O({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:O(O({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:O(O({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:O(O({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},yu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},xu=[bc,iu,ou,su,lu,mu,pu,hu,vu,bu,yu];Mc(xu,{mixoutsTo:ge});ge.noAuto;var Bo=ge.config,_u=ge.library;ge.dom;var An=ge.parse;ge.findIconDefinition;ge.toHtml;var wu=ge.icon;ge.layer;var ku=ge.text;ge.counter;function bi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function xe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?bi(Object(n),!0).forEach(function(r){fe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function On(e){return On=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},On(e)}function fe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Au(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Ou(e,t){if(e==null)return{};var n=Au(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function Sr(e){return Eu(e)||Cu(e)||Pu(e)||Su()}function Eu(e){if(Array.isArray(e))return Ir(e)}function Cu(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Pu(e,t){if(!!e){if(typeof e=="string")return Ir(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ir(e,t)}}function Ir(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Su(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Iu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Yo={exports:{}};(function(e){(function(t){var n=function(x,C,M){if(!u(C)||m(C)||y(C)||E(C)||l(C))return C;var z,W=0,te=0;if(d(C))for(z=[],te=C.length;W<te;W++)z.push(n(x,C[W],M));else{z={};for(var ue in C)Object.prototype.hasOwnProperty.call(C,ue)&&(z[x(ue,M)]=n(x,C[ue],M))}return z},r=function(x,C){C=C||{};var M=C.separator||"_",z=C.split||/(?=[A-Z])/;return x.split(z).join(M)},a=function(x){return R(x)?x:(x=x.replace(/[\-_\s]+(.)?/g,function(C,M){return M?M.toUpperCase():""}),x.substr(0,1).toLowerCase()+x.substr(1))},i=function(x){var C=a(x);return C.substr(0,1).toUpperCase()+C.substr(1)},o=function(x,C){return r(x,C).toLowerCase()},s=Object.prototype.toString,l=function(x){return typeof x=="function"},u=function(x){return x===Object(x)},d=function(x){return s.call(x)=="[object Array]"},m=function(x){return s.call(x)=="[object Date]"},y=function(x){return s.call(x)=="[object RegExp]"},E=function(x){return s.call(x)=="[object Boolean]"},R=function(x){return x=x-0,x===x},j=function(x,C){var M=C&&"process"in C?C.process:C;return typeof M!="function"?x:function(z,W){return M(z,x,W)}},N={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(x,C){return n(j(a,C),x)},decamelizeKeys:function(x,C){return n(j(o,C),x,C)},pascalizeKeys:function(x,C){return n(j(i,C),x)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=N:t.humps=N})(Iu)})(Yo);var Tu=Yo.exports,Nu=["class","style"];function Mu(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Tu.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Fu(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ma(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ma(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,u){var d=e.attributes[u];switch(u){case"class":l.class=Fu(d);break;case"style":l.style=Mu(d);break;default:l.attrs[u]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Ou(n,Nu);return uo(e.tag,xe(xe(xe({},t),{},{class:a.class,style:xe(xe({},a.style),o)},a.attrs),s),r)}var Wo=!1;try{Wo=!0}catch{}function $u(){if(!Wo&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ht(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?fe({},e,t):{}}function Ru(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},fe(t,"fa-".concat(e.size),e.size!==null),fe(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),fe(t,"fa-pull-".concat(e.pull),e.pull!==null),fe(t,"fa-swap-opacity",e.swapOpacity),fe(t,"fa-bounce",e.bounce),fe(t,"fa-shake",e.shake),fe(t,"fa-beat",e.beat),fe(t,"fa-fade",e.fade),fe(t,"fa-beat-fade",e.beatFade),fe(t,"fa-flash",e.flash),fe(t,"fa-spin-pulse",e.spinPulse),fe(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function yi(e){if(e&&On(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(An.icon)return An.icon(e);if(e===null)return null;if(On(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Lu=Xr({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=ve(function(){return yi(t.icon)}),i=ve(function(){return Ht("classes",Ru(t))}),o=ve(function(){return Ht("transform",typeof t.transform=="string"?An.transform(t.transform):t.transform)}),s=ve(function(){return Ht("mask",yi(t.mask))}),l=ve(function(){return wu(a.value,xe(xe(xe(xe({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});an(l,function(d){if(!d)return $u("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var u=ve(function(){return l.value?ma(l.value.abstract[0],{},r):null});return function(){return u.value}}});Xr({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=Bo.familyPrefix,i=ve(function(){return["".concat(a,"-layers")].concat(Sr(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return uo("div",{class:i.value},r.default?r.default():[])}}});Xr({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=Bo.familyPrefix,i=ve(function(){return Ht("classes",[].concat(Sr(t.counter?["".concat(a,"-layers-counter")]:[]),Sr(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=ve(function(){return Ht("transform",typeof t.transform=="string"?An.transform(t.transform):t.transform)}),s=ve(function(){var u=ku(t.value.toString(),xe(xe({},o.value),i.value)),d=u.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=ve(function(){return ma(s.value,{},r)});return function(){return l.value}}});/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var Ko={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M504 256C504 119 393 8 256 8S8 119 8 256c0 123.8 90.69 226.4 209.3 245V327.7h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.3 482.4 504 379.8 504 256z"]},Vo={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},qo={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]};_u.add(Vo,Ko,qo);const ju={components:{SOLogo:Df,FontAwesomeIcon:Lu},data(){return{footer_menus:[{title:"Contact",items:["Link 1","Link 2","Link 3"]},{title:"Contact",items:["Link 1","Link 2","Link 3"]}],social_media_profiles:[{profile:"instagram",icon:Vo,link:"https://www.instagram.com/gavelmora_"},{profile:"facebook",icon:Ko,link:"https://www.facebook.com/gavelmora/"},{profile:"linkedin",icon:qo,link:"https://www.linkedin.com/company/gavel-club-of-university-of-moratuwa/"}]}}},pa=e=>(Vr("data-v-ecda76da"),e=e(),qr(),e),zu={class:"container-fluid"},Du={class:"row"},Hu={class:"col-12 col-md-8 d-flex align-items-center justify-content-center justify-content-md-start my-md-0 my-4"},Uu={class:"col-12 col-md-4"},Bu={class:"row justify-content-end"},Yu={class:"col-md-4 col-12 text-center text-md-start"},Wu={class:"footer-menu-title mt-2 mb-1"},Ku=pa(()=>h("div",{class:"row"},[h("div",{class:"col"},[h("hr")])],-1)),Vu={class:"row"},qu=pa(()=>h("div",{class:"col-md-4 col-12 d-flex justify-content-center justify-content-md-start align-items-center order-last order-md-first my-2 my-lg-0"},[h("span",null,"\xA9 Speech Olympiad 2022")],-1)),Xu={class:"col-md-8 col-12 order-first order-md-last"},Ju={class:"row"},Gu=pa(()=>h("div",{class:"col-12 col-md-6 my-2 my-md-0 d-flex justify-content-center justify-content-md-end align-items-center"},[h("span",null,"Follow us on")],-1)),Zu={class:"col my-2 my-md-0 d-flex justify-content-center"},Qu=["href"];function ed(e,t,n,r,a,i){const o=Xe("SOLogo"),s=Xe("FontAwesomeIcon");return re(),ae("div",zu,[h("div",Du,[h("div",Hu,[G(o)]),h("div",Uu,[h("div",Bu,[(re(!0),ae(me,null,sn(a.footer_menus,l=>(re(),ae("div",Yu,[h("div",Wu,nr(l.title),1),(re(!0),ae(me,null,sn(l.items,u=>(re(),ae("div",null,nr(u),1))),256))]))),256))])])]),Ku,h("div",Vu,[qu,h("div",Xu,[h("div",Ju,[Gu,(re(!0),ae(me,null,sn(a.social_media_profiles,l=>(re(),ae("div",Zu,[h("a",{href:l.link},[G(s,{icon:l.icon,size:"2x",color:"#000000"},null,8,["icon"])],8,Qu)]))),256))])])])])}const td=Qe(ju,[["render",ed],["__scopeId","data-v-ecda76da"]]),nd={data(){return{items:[{name:"Home",url:"/home"},{name:"About",url:"/about"},{name:"Speakers",url:"/speakers"},{name:"Contact",url:"/contact"}],activeItem:-1}},methods:{clickHandler(e){this.activeItem=e}}},rd=["onClick"],ad=["href"];function id(e,t,n,r,a,i){return re(!0),ae(me,null,sn(a.items,(o,s)=>(re(),ae("li",{class:En(["nav-item",{active:s==a.activeItem}]),key:s,onClick:l=>i.clickHandler(s)},[h("div",null,[h("a",{class:"nav-link",href:o.url},nr(o.name),9,ad)])],10,rd))),128)}const od=Qe(nd,[["render",id]]),sd={data(){return{images_path:"src/assets/images/",logo:{filename:"so-logo.png",alt:"Speech Olympiad Logo"}}}},ld=["src","alt"];function fd(e,t,n,r,a,i){return re(),ae("img",{src:a.images_path+a.logo.filename,alt:a.logo.alt},null,8,ld)}const cd=Qe(sd,[["render",fd]]),ud={components:{AppHeaderMenu:od,SOLogo:cd}},dd={class:"headerbar"},md={class:"navbar navbar-expand-md navbar-dark fixed-top bg-dark","aria-label":"NavBar"},pd={class:"container-fluid"},hd={id:"logo",style:{width:"2opx !important,height=20px !important"}},gd={class:"navbar-brand",href:"/home"},vd=h("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navBar1","aria-controls":"navBar1","aria-expanded":"false","aria-label":"Toggle navigation"},[h("span",{class:"navbar-toggler-icon"})],-1),bd={class:"collapse navbar-collapse",id:"navBar1"},yd={class:"navbar-nav ms-auto mb-2 mb-md-0"};function xd(e,t,n,r,a,i){const o=Xe("SOLogo"),s=Xe("AppHeaderMenu");return re(),ae("div",dd,[h("nav",md,[h("div",pd,[h("div",hd,[h("a",gd,[G(o)])]),vd,h("div",bd,[h("ul",yd,[G(s)])])])])])}const _d=Qe(ud,[["render",xd]]),wd={components:{Sample:Rf,AppHeader:_d,AppFooter:td}};function kd(e,t,n,r,a,i){const o=Xe("AppHeader"),s=Xe("Sample"),l=Xe("AppFooter");return re(),ae("div",null,[G(o),G(s),G(l)])}const Ad=Qe(wd,[["render",kd]]);wf(Ad).mount("#app");

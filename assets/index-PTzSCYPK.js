(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function W_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var H_={exports:{}},Xu={},G_={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pa=Symbol.for("react.element"),YI=Symbol.for("react.portal"),XI=Symbol.for("react.fragment"),JI=Symbol.for("react.strict_mode"),ZI=Symbol.for("react.profiler"),eA=Symbol.for("react.provider"),tA=Symbol.for("react.context"),nA=Symbol.for("react.forward_ref"),rA=Symbol.for("react.suspense"),iA=Symbol.for("react.memo"),sA=Symbol.for("react.lazy"),Vg=Symbol.iterator;function oA(t){return t===null||typeof t!="object"?null:(t=Vg&&t[Vg]||t["@@iterator"],typeof t=="function"?t:null)}var K_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q_=Object.assign,Y_={};function Es(t,e,n){this.props=t,this.context=e,this.refs=Y_,this.updater=n||K_}Es.prototype.isReactComponent={};Es.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Es.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function X_(){}X_.prototype=Es.prototype;function ap(t,e,n){this.props=t,this.context=e,this.refs=Y_,this.updater=n||K_}var lp=ap.prototype=new X_;lp.constructor=ap;Q_(lp,Es.prototype);lp.isPureReactComponent=!0;var Ng=Array.isArray,J_=Object.prototype.hasOwnProperty,up={current:null},Z_={key:!0,ref:!0,__self:!0,__source:!0};function e0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)J_.call(e,r)&&!Z_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:pa,type:t,key:s,ref:o,props:i,_owner:up.current}}function aA(t,e){return{$$typeof:pa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function cp(t){return typeof t=="object"&&t!==null&&t.$$typeof===pa}function lA(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var bg=/\/+/g;function nf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?lA(""+t.key):e.toString(36)}function Sl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case pa:case YI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+nf(o,0):r,Ng(i)?(n="",t!=null&&(n=t.replace(bg,"$&/")+"/"),Sl(i,e,n,"",function(u){return u})):i!=null&&(cp(i)&&(i=aA(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(bg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Ng(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+nf(s,a);o+=Sl(s,e,n,l,i)}else if(l=oA(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+nf(s,a++),o+=Sl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ja(t,e,n){if(t==null)return t;var r=[],i=0;return Sl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function uA(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ot={current:null},Pl={transition:null},cA={ReactCurrentDispatcher:ot,ReactCurrentBatchConfig:Pl,ReactCurrentOwner:up};G.Children={map:ja,forEach:function(t,e,n){ja(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ja(t,function(){e++}),e},toArray:function(t){return ja(t,function(e){return e})||[]},only:function(t){if(!cp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};G.Component=Es;G.Fragment=XI;G.Profiler=ZI;G.PureComponent=ap;G.StrictMode=JI;G.Suspense=rA;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cA;G.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Q_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=up.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)J_.call(e,l)&&!Z_.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:pa,type:t.type,key:i,ref:s,props:r,_owner:o}};G.createContext=function(t){return t={$$typeof:tA,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:eA,_context:t},t.Consumer=t};G.createElement=e0;G.createFactory=function(t){var e=e0.bind(null,t);return e.type=t,e};G.createRef=function(){return{current:null}};G.forwardRef=function(t){return{$$typeof:nA,render:t}};G.isValidElement=cp;G.lazy=function(t){return{$$typeof:sA,_payload:{_status:-1,_result:t},_init:uA}};G.memo=function(t,e){return{$$typeof:iA,type:t,compare:e===void 0?null:e}};G.startTransition=function(t){var e=Pl.transition;Pl.transition={};try{t()}finally{Pl.transition=e}};G.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};G.useCallback=function(t,e){return ot.current.useCallback(t,e)};G.useContext=function(t){return ot.current.useContext(t)};G.useDebugValue=function(){};G.useDeferredValue=function(t){return ot.current.useDeferredValue(t)};G.useEffect=function(t,e){return ot.current.useEffect(t,e)};G.useId=function(){return ot.current.useId()};G.useImperativeHandle=function(t,e,n){return ot.current.useImperativeHandle(t,e,n)};G.useInsertionEffect=function(t,e){return ot.current.useInsertionEffect(t,e)};G.useLayoutEffect=function(t,e){return ot.current.useLayoutEffect(t,e)};G.useMemo=function(t,e){return ot.current.useMemo(t,e)};G.useReducer=function(t,e,n){return ot.current.useReducer(t,e,n)};G.useRef=function(t){return ot.current.useRef(t)};G.useState=function(t){return ot.current.useState(t)};G.useSyncExternalStore=function(t,e,n){return ot.current.useSyncExternalStore(t,e,n)};G.useTransition=function(){return ot.current.useTransition()};G.version="18.2.0";G_.exports=G;var kn=G_.exports;const pr=W_(kn);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fA=kn,hA=Symbol.for("react.element"),dA=Symbol.for("react.fragment"),pA=Object.prototype.hasOwnProperty,mA=fA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,gA={key:!0,ref:!0,__self:!0,__source:!0};function t0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)pA.call(e,r)&&!gA.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:hA,type:t,key:s,ref:o,props:i,_owner:mA.current}}Xu.Fragment=dA;Xu.jsx=t0;Xu.jsxs=t0;H_.exports=Xu;var re=H_.exports,nh={},n0={exports:{}},St={},r0={exports:{}},i0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,$){var M=R.length;R.push($);e:for(;0<M;){var de=M-1>>>1,ve=R[de];if(0<i(ve,$))R[de]=$,R[M]=ve,M=de;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var $=R[0],M=R.pop();if(M!==$){R[0]=M;e:for(var de=0,ve=R.length,yn=ve>>>1;de<yn;){var gt=2*(de+1)-1,jn=R[gt],yt=gt+1,Ct=R[yt];if(0>i(jn,M))yt<ve&&0>i(Ct,jn)?(R[de]=Ct,R[yt]=M,de=yt):(R[de]=jn,R[gt]=M,de=gt);else if(yt<ve&&0>i(Ct,M))R[de]=Ct,R[yt]=M,de=yt;else break e}}return $}function i(R,$){var M=R.sortIndex-$.sortIndex;return M!==0?M:R.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,h=3,p=!1,y=!1,v=!1,E=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(R){for(var $=n(u);$!==null;){if($.callback===null)r(u);else if($.startTime<=R)r(u),$.sortIndex=$.expirationTime,e(l,$);else break;$=n(u)}}function _(R){if(v=!1,g(R),!y)if(n(l)!==null)y=!0,Vr(w);else{var $=n(u);$!==null&&Rt(_,$.startTime-R)}}function w(R,$){y=!1,v&&(v=!1,m(N),N=-1),p=!0;var M=h;try{for(g($),f=n(l);f!==null&&(!(f.expirationTime>$)||R&&!mt());){var de=f.callback;if(typeof de=="function"){f.callback=null,h=f.priorityLevel;var ve=de(f.expirationTime<=$);$=t.unstable_now(),typeof ve=="function"?f.callback=ve:f===n(l)&&r(l),g($)}else r(l);f=n(l)}if(f!==null)var yn=!0;else{var gt=n(u);gt!==null&&Rt(_,gt.startTime-$),yn=!1}return yn}finally{f=null,h=M,p=!1}}var S=!1,I=null,N=-1,K=5,U=-1;function mt(){return!(t.unstable_now()-U<K)}function Cr(){if(I!==null){var R=t.unstable_now();U=R;var $=!0;try{$=I(!0,R)}finally{$?xr():(S=!1,I=null)}}else S=!1}var xr;if(typeof d=="function")xr=function(){d(Cr)};else if(typeof MessageChannel<"u"){var za=new MessageChannel,ef=za.port2;za.port1.onmessage=Cr,xr=function(){ef.postMessage(null)}}else xr=function(){E(Cr,0)};function Vr(R){I=R,S||(S=!0,xr())}function Rt(R,$){N=E(function(){R(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){y||p||(y=!0,Vr(w))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(R){switch(h){case 1:case 2:case 3:var $=3;break;default:$=h}var M=h;h=$;try{return R()}finally{h=M}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,$){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var M=h;h=R;try{return $()}finally{h=M}},t.unstable_scheduleCallback=function(R,$,M){var de=t.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?de+M:de):M=de,R){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=M+ve,R={id:c++,callback:$,priorityLevel:R,startTime:M,expirationTime:ve,sortIndex:-1},M>de?(R.sortIndex=M,e(u,R),n(l)===null&&R===n(u)&&(v?(m(N),N=-1):v=!0,Rt(_,M-de))):(R.sortIndex=ve,e(l,R),y||p||(y=!0,Vr(w))),R},t.unstable_shouldYield=mt,t.unstable_wrapCallback=function(R){var $=h;return function(){var M=h;h=$;try{return R.apply(this,arguments)}finally{h=M}}}})(i0);r0.exports=i0;var yA=r0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s0=kn,Tt=yA;function P(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o0=new Set,So={};function li(t,e){Yi(t,e),Yi(t+"Capture",e)}function Yi(t,e){for(So[t]=e,t=0;t<e.length;t++)o0.add(e[t])}var Rn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rh=Object.prototype.hasOwnProperty,vA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dg={},Og={};function _A(t){return rh.call(Og,t)?!0:rh.call(Dg,t)?!1:vA.test(t)?Og[t]=!0:(Dg[t]=!0,!1)}function wA(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function EA(t,e,n,r){if(e===null||typeof e>"u"||wA(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function at(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var We={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){We[t]=new at(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];We[e]=new at(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){We[t]=new at(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){We[t]=new at(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){We[t]=new at(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){We[t]=new at(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){We[t]=new at(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){We[t]=new at(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){We[t]=new at(t,5,!1,t.toLowerCase(),null,!1,!1)});var fp=/[\-:]([a-z])/g;function hp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(fp,hp);We[e]=new at(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(fp,hp);We[e]=new at(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(fp,hp);We[e]=new at(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){We[t]=new at(t,1,!1,t.toLowerCase(),null,!1,!1)});We.xlinkHref=new at("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){We[t]=new at(t,1,!1,t.toLowerCase(),null,!0,!0)});function dp(t,e,n,r){var i=We.hasOwnProperty(e)?We[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(EA(e,n,i,r)&&(n=null),r||i===null?_A(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Fn=s0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ba=Symbol.for("react.element"),Ei=Symbol.for("react.portal"),Ti=Symbol.for("react.fragment"),pp=Symbol.for("react.strict_mode"),ih=Symbol.for("react.profiler"),a0=Symbol.for("react.provider"),l0=Symbol.for("react.context"),mp=Symbol.for("react.forward_ref"),sh=Symbol.for("react.suspense"),oh=Symbol.for("react.suspense_list"),gp=Symbol.for("react.memo"),Gn=Symbol.for("react.lazy"),u0=Symbol.for("react.offscreen"),$g=Symbol.iterator;function Ds(t){return t===null||typeof t!="object"?null:(t=$g&&t[$g]||t["@@iterator"],typeof t=="function"?t:null)}var ye=Object.assign,rf;function Ws(t){if(rf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);rf=e&&e[1]||""}return`
`+rf+t}var sf=!1;function of(t,e){if(!t||sf)return"";sf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{sf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ws(t):""}function TA(t){switch(t.tag){case 5:return Ws(t.type);case 16:return Ws("Lazy");case 13:return Ws("Suspense");case 19:return Ws("SuspenseList");case 0:case 2:case 15:return t=of(t.type,!1),t;case 11:return t=of(t.type.render,!1),t;case 1:return t=of(t.type,!0),t;default:return""}}function ah(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ti:return"Fragment";case Ei:return"Portal";case ih:return"Profiler";case pp:return"StrictMode";case sh:return"Suspense";case oh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case l0:return(t.displayName||"Context")+".Consumer";case a0:return(t._context.displayName||"Context")+".Provider";case mp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case gp:return e=t.displayName||null,e!==null?e:ah(t.type)||"Memo";case Gn:e=t._payload,t=t._init;try{return ah(t(e))}catch{}}return null}function IA(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ah(e);case 8:return e===pp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function mr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function c0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function AA(t){var e=c0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function qa(t){t._valueTracker||(t._valueTracker=AA(t))}function f0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=c0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Xl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function lh(t,e){var n=e.checked;return ye({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Mg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=mr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function h0(t,e){e=e.checked,e!=null&&dp(t,"checked",e,!1)}function uh(t,e){h0(t,e);var n=mr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ch(t,e.type,n):e.hasOwnProperty("defaultValue")&&ch(t,e.type,mr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Lg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ch(t,e,n){(e!=="number"||Xl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Hs=Array.isArray;function Fi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+mr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function fh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(P(91));return ye({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Fg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(P(92));if(Hs(n)){if(1<n.length)throw Error(P(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:mr(n)}}function d0(t,e){var n=mr(e.value),r=mr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function zg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function p0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?p0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Wa,m0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Wa=Wa||document.createElement("div"),Wa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Wa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Po(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ro={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},SA=["Webkit","ms","Moz","O"];Object.keys(ro).forEach(function(t){SA.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ro[e]=ro[t]})});function g0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ro.hasOwnProperty(t)&&ro[t]?(""+e).trim():e+"px"}function y0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=g0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var PA=ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dh(t,e){if(e){if(PA[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(P(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(P(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(P(61))}if(e.style!=null&&typeof e.style!="object")throw Error(P(62))}}function ph(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mh=null;function yp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var gh=null,zi=null,Ui=null;function Ug(t){if(t=ya(t)){if(typeof gh!="function")throw Error(P(280));var e=t.stateNode;e&&(e=nc(e),gh(t.stateNode,t.type,e))}}function v0(t){zi?Ui?Ui.push(t):Ui=[t]:zi=t}function _0(){if(zi){var t=zi,e=Ui;if(Ui=zi=null,Ug(t),e)for(t=0;t<e.length;t++)Ug(e[t])}}function w0(t,e){return t(e)}function E0(){}var af=!1;function T0(t,e,n){if(af)return t(e,n);af=!0;try{return w0(t,e,n)}finally{af=!1,(zi!==null||Ui!==null)&&(E0(),_0())}}function ko(t,e){var n=t.stateNode;if(n===null)return null;var r=nc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(P(231,e,typeof n));return n}var yh=!1;if(Rn)try{var Os={};Object.defineProperty(Os,"passive",{get:function(){yh=!0}}),window.addEventListener("test",Os,Os),window.removeEventListener("test",Os,Os)}catch{yh=!1}function kA(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var io=!1,Jl=null,Zl=!1,vh=null,RA={onError:function(t){io=!0,Jl=t}};function CA(t,e,n,r,i,s,o,a,l){io=!1,Jl=null,kA.apply(RA,arguments)}function xA(t,e,n,r,i,s,o,a,l){if(CA.apply(this,arguments),io){if(io){var u=Jl;io=!1,Jl=null}else throw Error(P(198));Zl||(Zl=!0,vh=u)}}function ui(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function I0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function jg(t){if(ui(t)!==t)throw Error(P(188))}function VA(t){var e=t.alternate;if(!e){if(e=ui(t),e===null)throw Error(P(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return jg(i),t;if(s===r)return jg(i),e;s=s.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?t:e}function A0(t){return t=VA(t),t!==null?S0(t):null}function S0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=S0(t);if(e!==null)return e;t=t.sibling}return null}var P0=Tt.unstable_scheduleCallback,Bg=Tt.unstable_cancelCallback,NA=Tt.unstable_shouldYield,bA=Tt.unstable_requestPaint,Te=Tt.unstable_now,DA=Tt.unstable_getCurrentPriorityLevel,vp=Tt.unstable_ImmediatePriority,k0=Tt.unstable_UserBlockingPriority,eu=Tt.unstable_NormalPriority,OA=Tt.unstable_LowPriority,R0=Tt.unstable_IdlePriority,Ju=null,hn=null;function $A(t){if(hn&&typeof hn.onCommitFiberRoot=="function")try{hn.onCommitFiberRoot(Ju,t,void 0,(t.current.flags&128)===128)}catch{}}var Kt=Math.clz32?Math.clz32:FA,MA=Math.log,LA=Math.LN2;function FA(t){return t>>>=0,t===0?32:31-(MA(t)/LA|0)|0}var Ha=64,Ga=4194304;function Gs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function tu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Gs(a):(s&=o,s!==0&&(r=Gs(s)))}else o=n&~i,o!==0?r=Gs(o):s!==0&&(r=Gs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Kt(e),i=1<<n,r|=t[n],e&=~i;return r}function zA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function UA(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Kt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=zA(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function _h(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function C0(){var t=Ha;return Ha<<=1,!(Ha&4194240)&&(Ha=64),t}function lf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ma(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Kt(e),t[e]=n}function jA(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Kt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function _p(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Kt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var te=0;function x0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var V0,wp,N0,b0,D0,wh=!1,Ka=[],tr=null,nr=null,rr=null,Ro=new Map,Co=new Map,Qn=[],BA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qg(t,e){switch(t){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":Ro.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Co.delete(e.pointerId)}}function $s(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ya(e),e!==null&&wp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function qA(t,e,n,r,i){switch(e){case"focusin":return tr=$s(tr,t,e,n,r,i),!0;case"dragenter":return nr=$s(nr,t,e,n,r,i),!0;case"mouseover":return rr=$s(rr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ro.set(s,$s(Ro.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Co.set(s,$s(Co.get(s)||null,t,e,n,r,i)),!0}return!1}function O0(t){var e=Or(t.target);if(e!==null){var n=ui(e);if(n!==null){if(e=n.tag,e===13){if(e=I0(n),e!==null){t.blockedOn=e,D0(t.priority,function(){N0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function kl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Eh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);mh=r,n.target.dispatchEvent(r),mh=null}else return e=ya(n),e!==null&&wp(e),t.blockedOn=n,!1;e.shift()}return!0}function Wg(t,e,n){kl(t)&&n.delete(e)}function WA(){wh=!1,tr!==null&&kl(tr)&&(tr=null),nr!==null&&kl(nr)&&(nr=null),rr!==null&&kl(rr)&&(rr=null),Ro.forEach(Wg),Co.forEach(Wg)}function Ms(t,e){t.blockedOn===e&&(t.blockedOn=null,wh||(wh=!0,Tt.unstable_scheduleCallback(Tt.unstable_NormalPriority,WA)))}function xo(t){function e(i){return Ms(i,t)}if(0<Ka.length){Ms(Ka[0],t);for(var n=1;n<Ka.length;n++){var r=Ka[n];r.blockedOn===t&&(r.blockedOn=null)}}for(tr!==null&&Ms(tr,t),nr!==null&&Ms(nr,t),rr!==null&&Ms(rr,t),Ro.forEach(e),Co.forEach(e),n=0;n<Qn.length;n++)r=Qn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Qn.length&&(n=Qn[0],n.blockedOn===null);)O0(n),n.blockedOn===null&&Qn.shift()}var ji=Fn.ReactCurrentBatchConfig,nu=!0;function HA(t,e,n,r){var i=te,s=ji.transition;ji.transition=null;try{te=1,Ep(t,e,n,r)}finally{te=i,ji.transition=s}}function GA(t,e,n,r){var i=te,s=ji.transition;ji.transition=null;try{te=4,Ep(t,e,n,r)}finally{te=i,ji.transition=s}}function Ep(t,e,n,r){if(nu){var i=Eh(t,e,n,r);if(i===null)vf(t,e,r,ru,n),qg(t,r);else if(qA(i,t,e,n,r))r.stopPropagation();else if(qg(t,r),e&4&&-1<BA.indexOf(t)){for(;i!==null;){var s=ya(i);if(s!==null&&V0(s),s=Eh(t,e,n,r),s===null&&vf(t,e,r,ru,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else vf(t,e,r,null,n)}}var ru=null;function Eh(t,e,n,r){if(ru=null,t=yp(r),t=Or(t),t!==null)if(e=ui(t),e===null)t=null;else if(n=e.tag,n===13){if(t=I0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ru=t,null}function $0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(DA()){case vp:return 1;case k0:return 4;case eu:case OA:return 16;case R0:return 536870912;default:return 16}default:return 16}}var Xn=null,Tp=null,Rl=null;function M0(){if(Rl)return Rl;var t,e=Tp,n=e.length,r,i="value"in Xn?Xn.value:Xn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Rl=i.slice(t,1<r?1-r:void 0)}function Cl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Qa(){return!0}function Hg(){return!1}function Pt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Qa:Hg,this.isPropagationStopped=Hg,this}return ye(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qa)},persist:function(){},isPersistent:Qa}),e}var Ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ip=Pt(Ts),ga=ye({},Ts,{view:0,detail:0}),KA=Pt(ga),uf,cf,Ls,Zu=ye({},ga,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ap,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ls&&(Ls&&t.type==="mousemove"?(uf=t.screenX-Ls.screenX,cf=t.screenY-Ls.screenY):cf=uf=0,Ls=t),uf)},movementY:function(t){return"movementY"in t?t.movementY:cf}}),Gg=Pt(Zu),QA=ye({},Zu,{dataTransfer:0}),YA=Pt(QA),XA=ye({},ga,{relatedTarget:0}),ff=Pt(XA),JA=ye({},Ts,{animationName:0,elapsedTime:0,pseudoElement:0}),ZA=Pt(JA),eS=ye({},Ts,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),tS=Pt(eS),nS=ye({},Ts,{data:0}),Kg=Pt(nS),rS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},iS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function oS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=sS[t])?!!e[t]:!1}function Ap(){return oS}var aS=ye({},ga,{key:function(t){if(t.key){var e=rS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Cl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?iS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ap,charCode:function(t){return t.type==="keypress"?Cl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Cl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),lS=Pt(aS),uS=ye({},Zu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qg=Pt(uS),cS=ye({},ga,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ap}),fS=Pt(cS),hS=ye({},Ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),dS=Pt(hS),pS=ye({},Zu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),mS=Pt(pS),gS=[9,13,27,32],Sp=Rn&&"CompositionEvent"in window,so=null;Rn&&"documentMode"in document&&(so=document.documentMode);var yS=Rn&&"TextEvent"in window&&!so,L0=Rn&&(!Sp||so&&8<so&&11>=so),Yg=" ",Xg=!1;function F0(t,e){switch(t){case"keyup":return gS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function z0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ii=!1;function vS(t,e){switch(t){case"compositionend":return z0(e);case"keypress":return e.which!==32?null:(Xg=!0,Yg);case"textInput":return t=e.data,t===Yg&&Xg?null:t;default:return null}}function _S(t,e){if(Ii)return t==="compositionend"||!Sp&&F0(t,e)?(t=M0(),Rl=Tp=Xn=null,Ii=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return L0&&e.locale!=="ko"?null:e.data;default:return null}}var wS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!wS[t.type]:e==="textarea"}function U0(t,e,n,r){v0(r),e=iu(e,"onChange"),0<e.length&&(n=new Ip("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var oo=null,Vo=null;function ES(t){J0(t,0)}function ec(t){var e=Pi(t);if(f0(e))return t}function TS(t,e){if(t==="change")return e}var j0=!1;if(Rn){var hf;if(Rn){var df="oninput"in document;if(!df){var Zg=document.createElement("div");Zg.setAttribute("oninput","return;"),df=typeof Zg.oninput=="function"}hf=df}else hf=!1;j0=hf&&(!document.documentMode||9<document.documentMode)}function ey(){oo&&(oo.detachEvent("onpropertychange",B0),Vo=oo=null)}function B0(t){if(t.propertyName==="value"&&ec(Vo)){var e=[];U0(e,Vo,t,yp(t)),T0(ES,e)}}function IS(t,e,n){t==="focusin"?(ey(),oo=e,Vo=n,oo.attachEvent("onpropertychange",B0)):t==="focusout"&&ey()}function AS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ec(Vo)}function SS(t,e){if(t==="click")return ec(e)}function PS(t,e){if(t==="input"||t==="change")return ec(e)}function kS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Jt=typeof Object.is=="function"?Object.is:kS;function No(t,e){if(Jt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!rh.call(e,i)||!Jt(t[i],e[i]))return!1}return!0}function ty(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ny(t,e){var n=ty(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ty(n)}}function q0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?q0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function W0(){for(var t=window,e=Xl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Xl(t.document)}return e}function Pp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function RS(t){var e=W0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&q0(n.ownerDocument.documentElement,n)){if(r!==null&&Pp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=ny(n,s);var o=ny(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var CS=Rn&&"documentMode"in document&&11>=document.documentMode,Ai=null,Th=null,ao=null,Ih=!1;function ry(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ih||Ai==null||Ai!==Xl(r)||(r=Ai,"selectionStart"in r&&Pp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ao&&No(ao,r)||(ao=r,r=iu(Th,"onSelect"),0<r.length&&(e=new Ip("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ai)))}function Ya(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Si={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionend:Ya("Transition","TransitionEnd")},pf={},H0={};Rn&&(H0=document.createElement("div").style,"AnimationEvent"in window||(delete Si.animationend.animation,delete Si.animationiteration.animation,delete Si.animationstart.animation),"TransitionEvent"in window||delete Si.transitionend.transition);function tc(t){if(pf[t])return pf[t];if(!Si[t])return t;var e=Si[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in H0)return pf[t]=e[n];return t}var G0=tc("animationend"),K0=tc("animationiteration"),Q0=tc("animationstart"),Y0=tc("transitionend"),X0=new Map,iy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ir(t,e){X0.set(t,e),li(e,[t])}for(var mf=0;mf<iy.length;mf++){var gf=iy[mf],xS=gf.toLowerCase(),VS=gf[0].toUpperCase()+gf.slice(1);Ir(xS,"on"+VS)}Ir(G0,"onAnimationEnd");Ir(K0,"onAnimationIteration");Ir(Q0,"onAnimationStart");Ir("dblclick","onDoubleClick");Ir("focusin","onFocus");Ir("focusout","onBlur");Ir(Y0,"onTransitionEnd");Yi("onMouseEnter",["mouseout","mouseover"]);Yi("onMouseLeave",["mouseout","mouseover"]);Yi("onPointerEnter",["pointerout","pointerover"]);Yi("onPointerLeave",["pointerout","pointerover"]);li("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));li("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));li("onBeforeInput",["compositionend","keypress","textInput","paste"]);li("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));li("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));li("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ks="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),NS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ks));function sy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,xA(r,e,void 0,t),t.currentTarget=null}function J0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;sy(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;sy(i,a,u),s=l}}}if(Zl)throw t=vh,Zl=!1,vh=null,t}function se(t,e){var n=e[Rh];n===void 0&&(n=e[Rh]=new Set);var r=t+"__bubble";n.has(r)||(Z0(e,t,2,!1),n.add(r))}function yf(t,e,n){var r=0;e&&(r|=4),Z0(n,t,r,e)}var Xa="_reactListening"+Math.random().toString(36).slice(2);function bo(t){if(!t[Xa]){t[Xa]=!0,o0.forEach(function(n){n!=="selectionchange"&&(NS.has(n)||yf(n,!1,t),yf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Xa]||(e[Xa]=!0,yf("selectionchange",!1,e))}}function Z0(t,e,n,r){switch($0(e)){case 1:var i=HA;break;case 4:i=GA;break;default:i=Ep}n=i.bind(null,e,n,t),i=void 0,!yh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function vf(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Or(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}T0(function(){var u=s,c=yp(n),f=[];e:{var h=X0.get(t);if(h!==void 0){var p=Ip,y=t;switch(t){case"keypress":if(Cl(n)===0)break e;case"keydown":case"keyup":p=lS;break;case"focusin":y="focus",p=ff;break;case"focusout":y="blur",p=ff;break;case"beforeblur":case"afterblur":p=ff;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Gg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=YA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=fS;break;case G0:case K0:case Q0:p=ZA;break;case Y0:p=dS;break;case"scroll":p=KA;break;case"wheel":p=mS;break;case"copy":case"cut":case"paste":p=tS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Qg}var v=(e&4)!==0,E=!v&&t==="scroll",m=v?h!==null?h+"Capture":null:h;v=[];for(var d=u,g;d!==null;){g=d;var _=g.stateNode;if(g.tag===5&&_!==null&&(g=_,m!==null&&(_=ko(d,m),_!=null&&v.push(Do(d,_,g)))),E)break;d=d.return}0<v.length&&(h=new p(h,y,null,n,c),f.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==mh&&(y=n.relatedTarget||n.fromElement)&&(Or(y)||y[Cn]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=u,y=y?Or(y):null,y!==null&&(E=ui(y),y!==E||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=u),p!==y)){if(v=Gg,_="onMouseLeave",m="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(v=Qg,_="onPointerLeave",m="onPointerEnter",d="pointer"),E=p==null?h:Pi(p),g=y==null?h:Pi(y),h=new v(_,d+"leave",p,n,c),h.target=E,h.relatedTarget=g,_=null,Or(c)===u&&(v=new v(m,d+"enter",y,n,c),v.target=g,v.relatedTarget=E,_=v),E=_,p&&y)t:{for(v=p,m=y,d=0,g=v;g;g=pi(g))d++;for(g=0,_=m;_;_=pi(_))g++;for(;0<d-g;)v=pi(v),d--;for(;0<g-d;)m=pi(m),g--;for(;d--;){if(v===m||m!==null&&v===m.alternate)break t;v=pi(v),m=pi(m)}v=null}else v=null;p!==null&&oy(f,h,p,v,!1),y!==null&&E!==null&&oy(f,E,y,v,!0)}}e:{if(h=u?Pi(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var w=TS;else if(Jg(h))if(j0)w=PS;else{w=AS;var S=IS}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(w=SS);if(w&&(w=w(t,u))){U0(f,w,n,c);break e}S&&S(t,h,u),t==="focusout"&&(S=h._wrapperState)&&S.controlled&&h.type==="number"&&ch(h,"number",h.value)}switch(S=u?Pi(u):window,t){case"focusin":(Jg(S)||S.contentEditable==="true")&&(Ai=S,Th=u,ao=null);break;case"focusout":ao=Th=Ai=null;break;case"mousedown":Ih=!0;break;case"contextmenu":case"mouseup":case"dragend":Ih=!1,ry(f,n,c);break;case"selectionchange":if(CS)break;case"keydown":case"keyup":ry(f,n,c)}var I;if(Sp)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Ii?F0(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(L0&&n.locale!=="ko"&&(Ii||N!=="onCompositionStart"?N==="onCompositionEnd"&&Ii&&(I=M0()):(Xn=c,Tp="value"in Xn?Xn.value:Xn.textContent,Ii=!0)),S=iu(u,N),0<S.length&&(N=new Kg(N,t,null,n,c),f.push({event:N,listeners:S}),I?N.data=I:(I=z0(n),I!==null&&(N.data=I)))),(I=yS?vS(t,n):_S(t,n))&&(u=iu(u,"onBeforeInput"),0<u.length&&(c=new Kg("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=I))}J0(f,e)})}function Do(t,e,n){return{instance:t,listener:e,currentTarget:n}}function iu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ko(t,n),s!=null&&r.unshift(Do(t,s,i)),s=ko(t,e),s!=null&&r.push(Do(t,s,i))),t=t.return}return r}function pi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function oy(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ko(n,s),l!=null&&o.unshift(Do(n,l,a))):i||(l=ko(n,s),l!=null&&o.push(Do(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var bS=/\r\n?/g,DS=/\u0000|\uFFFD/g;function ay(t){return(typeof t=="string"?t:""+t).replace(bS,`
`).replace(DS,"")}function Ja(t,e,n){if(e=ay(e),ay(t)!==e&&n)throw Error(P(425))}function su(){}var Ah=null,Sh=null;function Ph(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var kh=typeof setTimeout=="function"?setTimeout:void 0,OS=typeof clearTimeout=="function"?clearTimeout:void 0,ly=typeof Promise=="function"?Promise:void 0,$S=typeof queueMicrotask=="function"?queueMicrotask:typeof ly<"u"?function(t){return ly.resolve(null).then(t).catch(MS)}:kh;function MS(t){setTimeout(function(){throw t})}function _f(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),xo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);xo(e)}function ir(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function uy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Is=Math.random().toString(36).slice(2),on="__reactFiber$"+Is,Oo="__reactProps$"+Is,Cn="__reactContainer$"+Is,Rh="__reactEvents$"+Is,LS="__reactListeners$"+Is,FS="__reactHandles$"+Is;function Or(t){var e=t[on];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Cn]||n[on]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=uy(t);t!==null;){if(n=t[on])return n;t=uy(t)}return e}t=n,n=t.parentNode}return null}function ya(t){return t=t[on]||t[Cn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Pi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(P(33))}function nc(t){return t[Oo]||null}var Ch=[],ki=-1;function Ar(t){return{current:t}}function ce(t){0>ki||(t.current=Ch[ki],Ch[ki]=null,ki--)}function ie(t,e){ki++,Ch[ki]=t.current,t.current=e}var gr={},et=Ar(gr),ft=Ar(!1),Xr=gr;function Xi(t,e){var n=t.type.contextTypes;if(!n)return gr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ht(t){return t=t.childContextTypes,t!=null}function ou(){ce(ft),ce(et)}function cy(t,e,n){if(et.current!==gr)throw Error(P(168));ie(et,e),ie(ft,n)}function e1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(P(108,IA(t)||"Unknown",i));return ye({},n,r)}function au(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||gr,Xr=et.current,ie(et,t),ie(ft,ft.current),!0}function fy(t,e,n){var r=t.stateNode;if(!r)throw Error(P(169));n?(t=e1(t,e,Xr),r.__reactInternalMemoizedMergedChildContext=t,ce(ft),ce(et),ie(et,t)):ce(ft),ie(ft,n)}var En=null,rc=!1,wf=!1;function t1(t){En===null?En=[t]:En.push(t)}function zS(t){rc=!0,t1(t)}function Sr(){if(!wf&&En!==null){wf=!0;var t=0,e=te;try{var n=En;for(te=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}En=null,rc=!1}catch(i){throw En!==null&&(En=En.slice(t+1)),P0(vp,Sr),i}finally{te=e,wf=!1}}return null}var Ri=[],Ci=0,lu=null,uu=0,Vt=[],Nt=0,Jr=null,Tn=1,In="";function Nr(t,e){Ri[Ci++]=uu,Ri[Ci++]=lu,lu=t,uu=e}function n1(t,e,n){Vt[Nt++]=Tn,Vt[Nt++]=In,Vt[Nt++]=Jr,Jr=t;var r=Tn;t=In;var i=32-Kt(r)-1;r&=~(1<<i),n+=1;var s=32-Kt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Tn=1<<32-Kt(e)+i|n<<i|r,In=s+t}else Tn=1<<s|n<<i|r,In=t}function kp(t){t.return!==null&&(Nr(t,1),n1(t,1,0))}function Rp(t){for(;t===lu;)lu=Ri[--Ci],Ri[Ci]=null,uu=Ri[--Ci],Ri[Ci]=null;for(;t===Jr;)Jr=Vt[--Nt],Vt[Nt]=null,In=Vt[--Nt],Vt[Nt]=null,Tn=Vt[--Nt],Vt[Nt]=null}var Et=null,wt=null,pe=!1,qt=null;function r1(t,e){var n=Ot(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function hy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Et=t,wt=ir(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Et=t,wt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Jr!==null?{id:Tn,overflow:In}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ot(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Et=t,wt=null,!0):!1;default:return!1}}function xh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Vh(t){if(pe){var e=wt;if(e){var n=e;if(!hy(t,e)){if(xh(t))throw Error(P(418));e=ir(n.nextSibling);var r=Et;e&&hy(t,e)?r1(r,n):(t.flags=t.flags&-4097|2,pe=!1,Et=t)}}else{if(xh(t))throw Error(P(418));t.flags=t.flags&-4097|2,pe=!1,Et=t}}}function dy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Et=t}function Za(t){if(t!==Et)return!1;if(!pe)return dy(t),pe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ph(t.type,t.memoizedProps)),e&&(e=wt)){if(xh(t))throw i1(),Error(P(418));for(;e;)r1(t,e),e=ir(e.nextSibling)}if(dy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(P(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){wt=ir(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}wt=null}}else wt=Et?ir(t.stateNode.nextSibling):null;return!0}function i1(){for(var t=wt;t;)t=ir(t.nextSibling)}function Ji(){wt=Et=null,pe=!1}function Cp(t){qt===null?qt=[t]:qt.push(t)}var US=Fn.ReactCurrentBatchConfig;function jt(t,e){if(t&&t.defaultProps){e=ye({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var cu=Ar(null),fu=null,xi=null,xp=null;function Vp(){xp=xi=fu=null}function Np(t){var e=cu.current;ce(cu),t._currentValue=e}function Nh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Bi(t,e){fu=t,xp=xi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ut=!0),t.firstContext=null)}function Lt(t){var e=t._currentValue;if(xp!==t)if(t={context:t,memoizedValue:e,next:null},xi===null){if(fu===null)throw Error(P(308));xi=t,fu.dependencies={lanes:0,firstContext:t}}else xi=xi.next=t;return e}var $r=null;function bp(t){$r===null?$r=[t]:$r.push(t)}function s1(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,bp(e)):(n.next=i.next,i.next=n),e.interleaved=n,xn(t,r)}function xn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Kn=!1;function Dp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function o1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Sn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function sr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,J&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,xn(t,n)}return i=r.interleaved,i===null?(e.next=e,bp(r)):(e.next=i.next,i.next=e),r.interleaved=e,xn(t,n)}function xl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,_p(t,n)}}function py(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function hu(t,e,n,r){var i=t.updateQueue;Kn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(h=e,p=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){f=y.call(p,f,h);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,h=typeof y=="function"?y.call(p,f,h):y,h==null)break e;f=ye({},f,h);break e;case 2:Kn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ei|=o,t.lanes=o,t.memoizedState=f}}function my(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var a1=new s0.Component().refs;function bh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ye({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ic={isMounted:function(t){return(t=t._reactInternals)?ui(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=it(),i=ar(t),s=Sn(r,i);s.payload=e,n!=null&&(s.callback=n),e=sr(t,s,i),e!==null&&(Qt(e,t,i,r),xl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=it(),i=ar(t),s=Sn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=sr(t,s,i),e!==null&&(Qt(e,t,i,r),xl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=it(),r=ar(t),i=Sn(n,r);i.tag=2,e!=null&&(i.callback=e),e=sr(t,i,r),e!==null&&(Qt(e,t,r,n),xl(e,t,r))}};function gy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!No(n,r)||!No(i,s):!0}function l1(t,e,n){var r=!1,i=gr,s=e.contextType;return typeof s=="object"&&s!==null?s=Lt(s):(i=ht(e)?Xr:et.current,r=e.contextTypes,s=(r=r!=null)?Xi(t,i):gr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ic,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function yy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ic.enqueueReplaceState(e,e.state,null)}function Dh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=a1,Dp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Lt(s):(s=ht(e)?Xr:et.current,i.context=Xi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(bh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ic.enqueueReplaceState(i,i.state,null),hu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Fs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===a1&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,t))}return t}function el(t,e){throw t=Object.prototype.toString.call(e),Error(P(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function vy(t){var e=t._init;return e(t._payload)}function u1(t){function e(m,d){if(t){var g=m.deletions;g===null?(m.deletions=[d],m.flags|=16):g.push(d)}}function n(m,d){if(!t)return null;for(;d!==null;)e(m,d),d=d.sibling;return null}function r(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function i(m,d){return m=lr(m,d),m.index=0,m.sibling=null,m}function s(m,d,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<d?(m.flags|=2,d):g):(m.flags|=2,d)):(m.flags|=1048576,d)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,d,g,_){return d===null||d.tag!==6?(d=kf(g,m.mode,_),d.return=m,d):(d=i(d,g),d.return=m,d)}function l(m,d,g,_){var w=g.type;return w===Ti?c(m,d,g.props.children,_,g.key):d!==null&&(d.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Gn&&vy(w)===d.type)?(_=i(d,g.props),_.ref=Fs(m,d,g),_.return=m,_):(_=$l(g.type,g.key,g.props,null,m.mode,_),_.ref=Fs(m,d,g),_.return=m,_)}function u(m,d,g,_){return d===null||d.tag!==4||d.stateNode.containerInfo!==g.containerInfo||d.stateNode.implementation!==g.implementation?(d=Rf(g,m.mode,_),d.return=m,d):(d=i(d,g.children||[]),d.return=m,d)}function c(m,d,g,_,w){return d===null||d.tag!==7?(d=Wr(g,m.mode,_,w),d.return=m,d):(d=i(d,g),d.return=m,d)}function f(m,d,g){if(typeof d=="string"&&d!==""||typeof d=="number")return d=kf(""+d,m.mode,g),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Ba:return g=$l(d.type,d.key,d.props,null,m.mode,g),g.ref=Fs(m,null,d),g.return=m,g;case Ei:return d=Rf(d,m.mode,g),d.return=m,d;case Gn:var _=d._init;return f(m,_(d._payload),g)}if(Hs(d)||Ds(d))return d=Wr(d,m.mode,g,null),d.return=m,d;el(m,d)}return null}function h(m,d,g,_){var w=d!==null?d.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return w!==null?null:a(m,d,""+g,_);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ba:return g.key===w?l(m,d,g,_):null;case Ei:return g.key===w?u(m,d,g,_):null;case Gn:return w=g._init,h(m,d,w(g._payload),_)}if(Hs(g)||Ds(g))return w!==null?null:c(m,d,g,_,null);el(m,g)}return null}function p(m,d,g,_,w){if(typeof _=="string"&&_!==""||typeof _=="number")return m=m.get(g)||null,a(d,m,""+_,w);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ba:return m=m.get(_.key===null?g:_.key)||null,l(d,m,_,w);case Ei:return m=m.get(_.key===null?g:_.key)||null,u(d,m,_,w);case Gn:var S=_._init;return p(m,d,g,S(_._payload),w)}if(Hs(_)||Ds(_))return m=m.get(g)||null,c(d,m,_,w,null);el(d,_)}return null}function y(m,d,g,_){for(var w=null,S=null,I=d,N=d=0,K=null;I!==null&&N<g.length;N++){I.index>N?(K=I,I=null):K=I.sibling;var U=h(m,I,g[N],_);if(U===null){I===null&&(I=K);break}t&&I&&U.alternate===null&&e(m,I),d=s(U,d,N),S===null?w=U:S.sibling=U,S=U,I=K}if(N===g.length)return n(m,I),pe&&Nr(m,N),w;if(I===null){for(;N<g.length;N++)I=f(m,g[N],_),I!==null&&(d=s(I,d,N),S===null?w=I:S.sibling=I,S=I);return pe&&Nr(m,N),w}for(I=r(m,I);N<g.length;N++)K=p(I,m,N,g[N],_),K!==null&&(t&&K.alternate!==null&&I.delete(K.key===null?N:K.key),d=s(K,d,N),S===null?w=K:S.sibling=K,S=K);return t&&I.forEach(function(mt){return e(m,mt)}),pe&&Nr(m,N),w}function v(m,d,g,_){var w=Ds(g);if(typeof w!="function")throw Error(P(150));if(g=w.call(g),g==null)throw Error(P(151));for(var S=w=null,I=d,N=d=0,K=null,U=g.next();I!==null&&!U.done;N++,U=g.next()){I.index>N?(K=I,I=null):K=I.sibling;var mt=h(m,I,U.value,_);if(mt===null){I===null&&(I=K);break}t&&I&&mt.alternate===null&&e(m,I),d=s(mt,d,N),S===null?w=mt:S.sibling=mt,S=mt,I=K}if(U.done)return n(m,I),pe&&Nr(m,N),w;if(I===null){for(;!U.done;N++,U=g.next())U=f(m,U.value,_),U!==null&&(d=s(U,d,N),S===null?w=U:S.sibling=U,S=U);return pe&&Nr(m,N),w}for(I=r(m,I);!U.done;N++,U=g.next())U=p(I,m,N,U.value,_),U!==null&&(t&&U.alternate!==null&&I.delete(U.key===null?N:U.key),d=s(U,d,N),S===null?w=U:S.sibling=U,S=U);return t&&I.forEach(function(Cr){return e(m,Cr)}),pe&&Nr(m,N),w}function E(m,d,g,_){if(typeof g=="object"&&g!==null&&g.type===Ti&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ba:e:{for(var w=g.key,S=d;S!==null;){if(S.key===w){if(w=g.type,w===Ti){if(S.tag===7){n(m,S.sibling),d=i(S,g.props.children),d.return=m,m=d;break e}}else if(S.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Gn&&vy(w)===S.type){n(m,S.sibling),d=i(S,g.props),d.ref=Fs(m,S,g),d.return=m,m=d;break e}n(m,S);break}else e(m,S);S=S.sibling}g.type===Ti?(d=Wr(g.props.children,m.mode,_,g.key),d.return=m,m=d):(_=$l(g.type,g.key,g.props,null,m.mode,_),_.ref=Fs(m,d,g),_.return=m,m=_)}return o(m);case Ei:e:{for(S=g.key;d!==null;){if(d.key===S)if(d.tag===4&&d.stateNode.containerInfo===g.containerInfo&&d.stateNode.implementation===g.implementation){n(m,d.sibling),d=i(d,g.children||[]),d.return=m,m=d;break e}else{n(m,d);break}else e(m,d);d=d.sibling}d=Rf(g,m.mode,_),d.return=m,m=d}return o(m);case Gn:return S=g._init,E(m,d,S(g._payload),_)}if(Hs(g))return y(m,d,g,_);if(Ds(g))return v(m,d,g,_);el(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,d!==null&&d.tag===6?(n(m,d.sibling),d=i(d,g),d.return=m,m=d):(n(m,d),d=kf(g,m.mode,_),d.return=m,m=d),o(m)):n(m,d)}return E}var Zi=u1(!0),c1=u1(!1),va={},dn=Ar(va),$o=Ar(va),Mo=Ar(va);function Mr(t){if(t===va)throw Error(P(174));return t}function Op(t,e){switch(ie(Mo,e),ie($o,t),ie(dn,va),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:hh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=hh(e,t)}ce(dn),ie(dn,e)}function es(){ce(dn),ce($o),ce(Mo)}function f1(t){Mr(Mo.current);var e=Mr(dn.current),n=hh(e,t.type);e!==n&&(ie($o,t),ie(dn,n))}function $p(t){$o.current===t&&(ce(dn),ce($o))}var me=Ar(0);function du(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ef=[];function Mp(){for(var t=0;t<Ef.length;t++)Ef[t]._workInProgressVersionPrimary=null;Ef.length=0}var Vl=Fn.ReactCurrentDispatcher,Tf=Fn.ReactCurrentBatchConfig,Zr=0,ge=null,xe=null,De=null,pu=!1,lo=!1,Lo=0,jS=0;function He(){throw Error(P(321))}function Lp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Jt(t[n],e[n]))return!1;return!0}function Fp(t,e,n,r,i,s){if(Zr=s,ge=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Vl.current=t===null||t.memoizedState===null?HS:GS,t=n(r,i),lo){s=0;do{if(lo=!1,Lo=0,25<=s)throw Error(P(301));s+=1,De=xe=null,e.updateQueue=null,Vl.current=KS,t=n(r,i)}while(lo)}if(Vl.current=mu,e=xe!==null&&xe.next!==null,Zr=0,De=xe=ge=null,pu=!1,e)throw Error(P(300));return t}function zp(){var t=Lo!==0;return Lo=0,t}function nn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return De===null?ge.memoizedState=De=t:De=De.next=t,De}function Ft(){if(xe===null){var t=ge.alternate;t=t!==null?t.memoizedState:null}else t=xe.next;var e=De===null?ge.memoizedState:De.next;if(e!==null)De=e,xe=t;else{if(t===null)throw Error(P(310));xe=t,t={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},De===null?ge.memoizedState=De=t:De=De.next=t}return De}function Fo(t,e){return typeof e=="function"?e(t):e}function If(t){var e=Ft(),n=e.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=t;var r=xe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Zr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,ge.lanes|=c,ei|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Jt(r,e.memoizedState)||(ut=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ge.lanes|=s,ei|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Af(t){var e=Ft(),n=e.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Jt(s,e.memoizedState)||(ut=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function h1(){}function d1(t,e){var n=ge,r=Ft(),i=e(),s=!Jt(r.memoizedState,i);if(s&&(r.memoizedState=i,ut=!0),r=r.queue,Up(g1.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||De!==null&&De.memoizedState.tag&1){if(n.flags|=2048,zo(9,m1.bind(null,n,r,i,e),void 0,null),Me===null)throw Error(P(349));Zr&30||p1(n,e,i)}return i}function p1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function m1(t,e,n,r){e.value=n,e.getSnapshot=r,y1(e)&&v1(t)}function g1(t,e,n){return n(function(){y1(e)&&v1(t)})}function y1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Jt(t,n)}catch{return!0}}function v1(t){var e=xn(t,1);e!==null&&Qt(e,t,1,-1)}function _y(t){var e=nn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:t},e.queue=t,t=t.dispatch=WS.bind(null,ge,t),[e.memoizedState,t]}function zo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function _1(){return Ft().memoizedState}function Nl(t,e,n,r){var i=nn();ge.flags|=t,i.memoizedState=zo(1|e,n,void 0,r===void 0?null:r)}function sc(t,e,n,r){var i=Ft();r=r===void 0?null:r;var s=void 0;if(xe!==null){var o=xe.memoizedState;if(s=o.destroy,r!==null&&Lp(r,o.deps)){i.memoizedState=zo(e,n,s,r);return}}ge.flags|=t,i.memoizedState=zo(1|e,n,s,r)}function wy(t,e){return Nl(8390656,8,t,e)}function Up(t,e){return sc(2048,8,t,e)}function w1(t,e){return sc(4,2,t,e)}function E1(t,e){return sc(4,4,t,e)}function T1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function I1(t,e,n){return n=n!=null?n.concat([t]):null,sc(4,4,T1.bind(null,e,t),n)}function jp(){}function A1(t,e){var n=Ft();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Lp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function S1(t,e){var n=Ft();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Lp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function P1(t,e,n){return Zr&21?(Jt(n,e)||(n=C0(),ge.lanes|=n,ei|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ut=!0),t.memoizedState=n)}function BS(t,e){var n=te;te=n!==0&&4>n?n:4,t(!0);var r=Tf.transition;Tf.transition={};try{t(!1),e()}finally{te=n,Tf.transition=r}}function k1(){return Ft().memoizedState}function qS(t,e,n){var r=ar(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},R1(t))C1(e,n);else if(n=s1(t,e,n,r),n!==null){var i=it();Qt(n,t,r,i),x1(n,e,r)}}function WS(t,e,n){var r=ar(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(R1(t))C1(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Jt(a,o)){var l=e.interleaved;l===null?(i.next=i,bp(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=s1(t,e,i,r),n!==null&&(i=it(),Qt(n,t,r,i),x1(n,e,r))}}function R1(t){var e=t.alternate;return t===ge||e!==null&&e===ge}function C1(t,e){lo=pu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function x1(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,_p(t,n)}}var mu={readContext:Lt,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useInsertionEffect:He,useLayoutEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useMutableSource:He,useSyncExternalStore:He,useId:He,unstable_isNewReconciler:!1},HS={readContext:Lt,useCallback:function(t,e){return nn().memoizedState=[t,e===void 0?null:e],t},useContext:Lt,useEffect:wy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Nl(4194308,4,T1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Nl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Nl(4,2,t,e)},useMemo:function(t,e){var n=nn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=nn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=qS.bind(null,ge,t),[r.memoizedState,t]},useRef:function(t){var e=nn();return t={current:t},e.memoizedState=t},useState:_y,useDebugValue:jp,useDeferredValue:function(t){return nn().memoizedState=t},useTransition:function(){var t=_y(!1),e=t[0];return t=BS.bind(null,t[1]),nn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ge,i=nn();if(pe){if(n===void 0)throw Error(P(407));n=n()}else{if(n=e(),Me===null)throw Error(P(349));Zr&30||p1(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,wy(g1.bind(null,r,s,t),[t]),r.flags|=2048,zo(9,m1.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=nn(),e=Me.identifierPrefix;if(pe){var n=In,r=Tn;n=(r&~(1<<32-Kt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Lo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=jS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},GS={readContext:Lt,useCallback:A1,useContext:Lt,useEffect:Up,useImperativeHandle:I1,useInsertionEffect:w1,useLayoutEffect:E1,useMemo:S1,useReducer:If,useRef:_1,useState:function(){return If(Fo)},useDebugValue:jp,useDeferredValue:function(t){var e=Ft();return P1(e,xe.memoizedState,t)},useTransition:function(){var t=If(Fo)[0],e=Ft().memoizedState;return[t,e]},useMutableSource:h1,useSyncExternalStore:d1,useId:k1,unstable_isNewReconciler:!1},KS={readContext:Lt,useCallback:A1,useContext:Lt,useEffect:Up,useImperativeHandle:I1,useInsertionEffect:w1,useLayoutEffect:E1,useMemo:S1,useReducer:Af,useRef:_1,useState:function(){return Af(Fo)},useDebugValue:jp,useDeferredValue:function(t){var e=Ft();return xe===null?e.memoizedState=t:P1(e,xe.memoizedState,t)},useTransition:function(){var t=Af(Fo)[0],e=Ft().memoizedState;return[t,e]},useMutableSource:h1,useSyncExternalStore:d1,useId:k1,unstable_isNewReconciler:!1};function ts(t,e){try{var n="",r=e;do n+=TA(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Sf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Oh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var QS=typeof WeakMap=="function"?WeakMap:Map;function V1(t,e,n){n=Sn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){yu||(yu=!0,Wh=r),Oh(t,e)},n}function N1(t,e,n){n=Sn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Oh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Oh(t,e),typeof r!="function"&&(or===null?or=new Set([this]):or.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ey(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new QS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=uP.bind(null,t,e,n),e.then(t,t))}function Ty(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Iy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Sn(-1,1),e.tag=2,sr(n,e,1))),n.lanes|=1),t)}var YS=Fn.ReactCurrentOwner,ut=!1;function nt(t,e,n,r){e.child=t===null?c1(e,null,n,r):Zi(e,t.child,n,r)}function Ay(t,e,n,r,i){n=n.render;var s=e.ref;return Bi(e,i),r=Fp(t,e,n,r,s,i),n=zp(),t!==null&&!ut?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Vn(t,e,i)):(pe&&n&&kp(e),e.flags|=1,nt(t,e,r,i),e.child)}function Sy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Yp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,b1(t,e,s,r,i)):(t=$l(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:No,n(o,r)&&t.ref===e.ref)return Vn(t,e,i)}return e.flags|=1,t=lr(s,r),t.ref=e.ref,t.return=e,e.child=t}function b1(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(No(s,r)&&t.ref===e.ref)if(ut=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ut=!0);else return e.lanes=t.lanes,Vn(t,e,i)}return $h(t,e,n,r,i)}function D1(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(Ni,_t),_t|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ie(Ni,_t),_t|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ie(Ni,_t),_t|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ie(Ni,_t),_t|=r;return nt(t,e,i,n),e.child}function O1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function $h(t,e,n,r,i){var s=ht(n)?Xr:et.current;return s=Xi(e,s),Bi(e,i),n=Fp(t,e,n,r,s,i),r=zp(),t!==null&&!ut?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Vn(t,e,i)):(pe&&r&&kp(e),e.flags|=1,nt(t,e,n,i),e.child)}function Py(t,e,n,r,i){if(ht(n)){var s=!0;au(e)}else s=!1;if(Bi(e,i),e.stateNode===null)bl(t,e),l1(e,n,r),Dh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Lt(u):(u=ht(n)?Xr:et.current,u=Xi(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&yy(e,o,r,u),Kn=!1;var h=e.memoizedState;o.state=h,hu(e,r,o,i),l=e.memoizedState,a!==r||h!==l||ft.current||Kn?(typeof c=="function"&&(bh(e,n,c,r),l=e.memoizedState),(a=Kn||gy(e,n,a,r,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,o1(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:jt(e.type,a),o.props=u,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Lt(l):(l=ht(n)?Xr:et.current,l=Xi(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&yy(e,o,r,l),Kn=!1,h=e.memoizedState,o.state=h,hu(e,r,o,i);var y=e.memoizedState;a!==f||h!==y||ft.current||Kn?(typeof p=="function"&&(bh(e,n,p,r),y=e.memoizedState),(u=Kn||gy(e,n,u,r,h,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Mh(t,e,n,r,s,i)}function Mh(t,e,n,r,i,s){O1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&fy(e,n,!1),Vn(t,e,s);r=e.stateNode,YS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Zi(e,t.child,null,s),e.child=Zi(e,null,a,s)):nt(t,e,a,s),e.memoizedState=r.state,i&&fy(e,n,!0),e.child}function $1(t){var e=t.stateNode;e.pendingContext?cy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&cy(t,e.context,!1),Op(t,e.containerInfo)}function ky(t,e,n,r,i){return Ji(),Cp(i),e.flags|=256,nt(t,e,n,r),e.child}var Lh={dehydrated:null,treeContext:null,retryLane:0};function Fh(t){return{baseLanes:t,cachePool:null,transitions:null}}function M1(t,e,n){var r=e.pendingProps,i=me.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ie(me,i&1),t===null)return Vh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=lc(o,r,0,null),t=Wr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Fh(n),e.memoizedState=Lh,t):Bp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return XS(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=lr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=lr(a,s):(s=Wr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Fh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Lh,r}return s=t.child,t=s.sibling,r=lr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Bp(t,e){return e=lc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function tl(t,e,n,r){return r!==null&&Cp(r),Zi(e,t.child,null,n),t=Bp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function XS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Sf(Error(P(422))),tl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=lc({mode:"visible",children:r.children},i,0,null),s=Wr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Zi(e,t.child,null,o),e.child.memoizedState=Fh(o),e.memoizedState=Lh,s);if(!(e.mode&1))return tl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(P(419)),r=Sf(s,r,void 0),tl(t,e,o,r)}if(a=(o&t.childLanes)!==0,ut||a){if(r=Me,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,xn(t,i),Qt(r,t,i,-1))}return Qp(),r=Sf(Error(P(421))),tl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=cP.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,wt=ir(i.nextSibling),Et=e,pe=!0,qt=null,t!==null&&(Vt[Nt++]=Tn,Vt[Nt++]=In,Vt[Nt++]=Jr,Tn=t.id,In=t.overflow,Jr=e),e=Bp(e,r.children),e.flags|=4096,e)}function Ry(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Nh(t.return,e,n)}function Pf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function L1(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(nt(t,e,r.children,n),r=me.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ry(t,n,e);else if(t.tag===19)Ry(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ie(me,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&du(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Pf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&du(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Pf(e,!0,n,null,s);break;case"together":Pf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function bl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Vn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ei|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(P(153));if(e.child!==null){for(t=e.child,n=lr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=lr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function JS(t,e,n){switch(e.tag){case 3:$1(e),Ji();break;case 5:f1(e);break;case 1:ht(e.type)&&au(e);break;case 4:Op(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ie(cu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ie(me,me.current&1),e.flags|=128,null):n&e.child.childLanes?M1(t,e,n):(ie(me,me.current&1),t=Vn(t,e,n),t!==null?t.sibling:null);ie(me,me.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return L1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ie(me,me.current),r)break;return null;case 22:case 23:return e.lanes=0,D1(t,e,n)}return Vn(t,e,n)}var F1,zh,z1,U1;F1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};zh=function(){};z1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Mr(dn.current);var s=null;switch(n){case"input":i=lh(t,i),r=lh(t,r),s=[];break;case"select":i=ye({},i,{value:void 0}),r=ye({},r,{value:void 0}),s=[];break;case"textarea":i=fh(t,i),r=fh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=su)}dh(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(So.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(So.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&se("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};U1=function(t,e,n,r){n!==r&&(e.flags|=4)};function zs(t,e){if(!pe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ge(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function ZS(t,e,n){var r=e.pendingProps;switch(Rp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ge(e),null;case 1:return ht(e.type)&&ou(),Ge(e),null;case 3:return r=e.stateNode,es(),ce(ft),ce(et),Mp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Za(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,qt!==null&&(Kh(qt),qt=null))),zh(t,e),Ge(e),null;case 5:$p(e);var i=Mr(Mo.current);if(n=e.type,t!==null&&e.stateNode!=null)z1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(P(166));return Ge(e),null}if(t=Mr(dn.current),Za(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[on]=e,r[Oo]=s,t=(e.mode&1)!==0,n){case"dialog":se("cancel",r),se("close",r);break;case"iframe":case"object":case"embed":se("load",r);break;case"video":case"audio":for(i=0;i<Ks.length;i++)se(Ks[i],r);break;case"source":se("error",r);break;case"img":case"image":case"link":se("error",r),se("load",r);break;case"details":se("toggle",r);break;case"input":Mg(r,s),se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},se("invalid",r);break;case"textarea":Fg(r,s),se("invalid",r)}dh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ja(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ja(r.textContent,a,t),i=["children",""+a]):So.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&se("scroll",r)}switch(n){case"input":qa(r),Lg(r,s,!0);break;case"textarea":qa(r),zg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=su)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=p0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[on]=e,t[Oo]=r,F1(t,e,!1,!1),e.stateNode=t;e:{switch(o=ph(n,r),n){case"dialog":se("cancel",t),se("close",t),i=r;break;case"iframe":case"object":case"embed":se("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ks.length;i++)se(Ks[i],t);i=r;break;case"source":se("error",t),i=r;break;case"img":case"image":case"link":se("error",t),se("load",t),i=r;break;case"details":se("toggle",t),i=r;break;case"input":Mg(t,r),i=lh(t,r),se("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ye({},r,{value:void 0}),se("invalid",t);break;case"textarea":Fg(t,r),i=fh(t,r),se("invalid",t);break;default:i=r}dh(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?y0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&m0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Po(t,l):typeof l=="number"&&Po(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(So.hasOwnProperty(s)?l!=null&&s==="onScroll"&&se("scroll",t):l!=null&&dp(t,s,l,o))}switch(n){case"input":qa(t),Lg(t,r,!1);break;case"textarea":qa(t),zg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+mr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Fi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Fi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=su)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ge(e),null;case 6:if(t&&e.stateNode!=null)U1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(P(166));if(n=Mr(Mo.current),Mr(dn.current),Za(e)){if(r=e.stateNode,n=e.memoizedProps,r[on]=e,(s=r.nodeValue!==n)&&(t=Et,t!==null))switch(t.tag){case 3:Ja(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ja(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[on]=e,e.stateNode=r}return Ge(e),null;case 13:if(ce(me),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(pe&&wt!==null&&e.mode&1&&!(e.flags&128))i1(),Ji(),e.flags|=98560,s=!1;else if(s=Za(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(P(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(P(317));s[on]=e}else Ji(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ge(e),s=!1}else qt!==null&&(Kh(qt),qt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||me.current&1?Ve===0&&(Ve=3):Qp())),e.updateQueue!==null&&(e.flags|=4),Ge(e),null);case 4:return es(),zh(t,e),t===null&&bo(e.stateNode.containerInfo),Ge(e),null;case 10:return Np(e.type._context),Ge(e),null;case 17:return ht(e.type)&&ou(),Ge(e),null;case 19:if(ce(me),s=e.memoizedState,s===null)return Ge(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)zs(s,!1);else{if(Ve!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=du(t),o!==null){for(e.flags|=128,zs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ie(me,me.current&1|2),e.child}t=t.sibling}s.tail!==null&&Te()>ns&&(e.flags|=128,r=!0,zs(s,!1),e.lanes=4194304)}else{if(!r)if(t=du(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),zs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!pe)return Ge(e),null}else 2*Te()-s.renderingStartTime>ns&&n!==1073741824&&(e.flags|=128,r=!0,zs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Te(),e.sibling=null,n=me.current,ie(me,r?n&1|2:n&1),e):(Ge(e),null);case 22:case 23:return Kp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?_t&1073741824&&(Ge(e),e.subtreeFlags&6&&(e.flags|=8192)):Ge(e),null;case 24:return null;case 25:return null}throw Error(P(156,e.tag))}function eP(t,e){switch(Rp(e),e.tag){case 1:return ht(e.type)&&ou(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return es(),ce(ft),ce(et),Mp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return $p(e),null;case 13:if(ce(me),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(P(340));Ji()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ce(me),null;case 4:return es(),null;case 10:return Np(e.type._context),null;case 22:case 23:return Kp(),null;case 24:return null;default:return null}}var nl=!1,Ye=!1,tP=typeof WeakSet=="function"?WeakSet:Set,x=null;function Vi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){_e(t,e,r)}else n.current=null}function Uh(t,e,n){try{n()}catch(r){_e(t,e,r)}}var Cy=!1;function nP(t,e){if(Ah=nu,t=W0(),Pp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=t,h=null;t:for(;;){for(var p;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===n&&++u===i&&(a=o),h===s&&++c===r&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sh={focusedElem:t,selectionRange:n},nu=!1,x=e;x!==null;)if(e=x,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,x=t;else for(;x!==null;){e=x;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,E=y.memoizedState,m=e.stateNode,d=m.getSnapshotBeforeUpdate(e.elementType===e.type?v:jt(e.type,v),E);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(_){_e(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,x=t;break}x=e.return}return y=Cy,Cy=!1,y}function uo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Uh(e,n,s)}i=i.next}while(i!==r)}}function oc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function jh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function j1(t){var e=t.alternate;e!==null&&(t.alternate=null,j1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[on],delete e[Oo],delete e[Rh],delete e[LS],delete e[FS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function B1(t){return t.tag===5||t.tag===3||t.tag===4}function xy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||B1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=su));else if(r!==4&&(t=t.child,t!==null))for(Bh(t,e,n),t=t.sibling;t!==null;)Bh(t,e,n),t=t.sibling}function qh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(qh(t,e,n),t=t.sibling;t!==null;)qh(t,e,n),t=t.sibling}var ze=null,Bt=!1;function qn(t,e,n){for(n=n.child;n!==null;)q1(t,e,n),n=n.sibling}function q1(t,e,n){if(hn&&typeof hn.onCommitFiberUnmount=="function")try{hn.onCommitFiberUnmount(Ju,n)}catch{}switch(n.tag){case 5:Ye||Vi(n,e);case 6:var r=ze,i=Bt;ze=null,qn(t,e,n),ze=r,Bt=i,ze!==null&&(Bt?(t=ze,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ze.removeChild(n.stateNode));break;case 18:ze!==null&&(Bt?(t=ze,n=n.stateNode,t.nodeType===8?_f(t.parentNode,n):t.nodeType===1&&_f(t,n),xo(t)):_f(ze,n.stateNode));break;case 4:r=ze,i=Bt,ze=n.stateNode.containerInfo,Bt=!0,qn(t,e,n),ze=r,Bt=i;break;case 0:case 11:case 14:case 15:if(!Ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Uh(n,e,o),i=i.next}while(i!==r)}qn(t,e,n);break;case 1:if(!Ye&&(Vi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){_e(n,e,a)}qn(t,e,n);break;case 21:qn(t,e,n);break;case 22:n.mode&1?(Ye=(r=Ye)||n.memoizedState!==null,qn(t,e,n),Ye=r):qn(t,e,n);break;default:qn(t,e,n)}}function Vy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new tP),e.forEach(function(r){var i=fP.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ut(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ze=a.stateNode,Bt=!1;break e;case 3:ze=a.stateNode.containerInfo,Bt=!0;break e;case 4:ze=a.stateNode.containerInfo,Bt=!0;break e}a=a.return}if(ze===null)throw Error(P(160));q1(s,o,i),ze=null,Bt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){_e(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)W1(e,t),e=e.sibling}function W1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ut(e,t),tn(t),r&4){try{uo(3,t,t.return),oc(3,t)}catch(v){_e(t,t.return,v)}try{uo(5,t,t.return)}catch(v){_e(t,t.return,v)}}break;case 1:Ut(e,t),tn(t),r&512&&n!==null&&Vi(n,n.return);break;case 5:if(Ut(e,t),tn(t),r&512&&n!==null&&Vi(n,n.return),t.flags&32){var i=t.stateNode;try{Po(i,"")}catch(v){_e(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&h0(i,s),ph(a,o);var u=ph(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?y0(i,f):c==="dangerouslySetInnerHTML"?m0(i,f):c==="children"?Po(i,f):dp(i,c,f,u)}switch(a){case"input":uh(i,s);break;case"textarea":d0(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Fi(i,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Fi(i,!!s.multiple,s.defaultValue,!0):Fi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Oo]=s}catch(v){_e(t,t.return,v)}}break;case 6:if(Ut(e,t),tn(t),r&4){if(t.stateNode===null)throw Error(P(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){_e(t,t.return,v)}}break;case 3:if(Ut(e,t),tn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{xo(e.containerInfo)}catch(v){_e(t,t.return,v)}break;case 4:Ut(e,t),tn(t);break;case 13:Ut(e,t),tn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Hp=Te())),r&4&&Vy(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ye=(u=Ye)||c,Ut(e,t),Ye=u):Ut(e,t),tn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(x=t,c=t.child;c!==null;){for(f=x=c;x!==null;){switch(h=x,p=h.child,h.tag){case 0:case 11:case 14:case 15:uo(4,h,h.return);break;case 1:Vi(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){_e(r,n,v)}}break;case 5:Vi(h,h.return);break;case 22:if(h.memoizedState!==null){by(f);continue}}p!==null?(p.return=h,x=p):by(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=g0("display",o))}catch(v){_e(t,t.return,v)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(v){_e(t,t.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ut(e,t),tn(t),r&4&&Vy(t);break;case 21:break;default:Ut(e,t),tn(t)}}function tn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(B1(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Po(i,""),r.flags&=-33);var s=xy(t);qh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=xy(t);Bh(t,a,o);break;default:throw Error(P(161))}}catch(l){_e(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function rP(t,e,n){x=t,H1(t)}function H1(t,e,n){for(var r=(t.mode&1)!==0;x!==null;){var i=x,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||nl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ye;a=nl;var u=Ye;if(nl=o,(Ye=l)&&!u)for(x=i;x!==null;)o=x,l=o.child,o.tag===22&&o.memoizedState!==null?Dy(i):l!==null?(l.return=o,x=l):Dy(i);for(;s!==null;)x=s,H1(s),s=s.sibling;x=i,nl=a,Ye=u}Ny(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,x=s):Ny(t)}}function Ny(t){for(;x!==null;){var e=x;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ye||oc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ye)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:jt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&my(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}my(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&xo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}Ye||e.flags&512&&jh(e)}catch(h){_e(e,e.return,h)}}if(e===t){x=null;break}if(n=e.sibling,n!==null){n.return=e.return,x=n;break}x=e.return}}function by(t){for(;x!==null;){var e=x;if(e===t){x=null;break}var n=e.sibling;if(n!==null){n.return=e.return,x=n;break}x=e.return}}function Dy(t){for(;x!==null;){var e=x;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{oc(4,e)}catch(l){_e(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){_e(e,i,l)}}var s=e.return;try{jh(e)}catch(l){_e(e,s,l)}break;case 5:var o=e.return;try{jh(e)}catch(l){_e(e,o,l)}}}catch(l){_e(e,e.return,l)}if(e===t){x=null;break}var a=e.sibling;if(a!==null){a.return=e.return,x=a;break}x=e.return}}var iP=Math.ceil,gu=Fn.ReactCurrentDispatcher,qp=Fn.ReactCurrentOwner,$t=Fn.ReactCurrentBatchConfig,J=0,Me=null,ke=null,Be=0,_t=0,Ni=Ar(0),Ve=0,Uo=null,ei=0,ac=0,Wp=0,co=null,lt=null,Hp=0,ns=1/0,_n=null,yu=!1,Wh=null,or=null,rl=!1,Jn=null,vu=0,fo=0,Hh=null,Dl=-1,Ol=0;function it(){return J&6?Te():Dl!==-1?Dl:Dl=Te()}function ar(t){return t.mode&1?J&2&&Be!==0?Be&-Be:US.transition!==null?(Ol===0&&(Ol=C0()),Ol):(t=te,t!==0||(t=window.event,t=t===void 0?16:$0(t.type)),t):1}function Qt(t,e,n,r){if(50<fo)throw fo=0,Hh=null,Error(P(185));ma(t,n,r),(!(J&2)||t!==Me)&&(t===Me&&(!(J&2)&&(ac|=n),Ve===4&&Yn(t,Be)),dt(t,r),n===1&&J===0&&!(e.mode&1)&&(ns=Te()+500,rc&&Sr()))}function dt(t,e){var n=t.callbackNode;UA(t,e);var r=tu(t,t===Me?Be:0);if(r===0)n!==null&&Bg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Bg(n),e===1)t.tag===0?zS(Oy.bind(null,t)):t1(Oy.bind(null,t)),$S(function(){!(J&6)&&Sr()}),n=null;else{switch(x0(r)){case 1:n=vp;break;case 4:n=k0;break;case 16:n=eu;break;case 536870912:n=R0;break;default:n=eu}n=ew(n,G1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function G1(t,e){if(Dl=-1,Ol=0,J&6)throw Error(P(327));var n=t.callbackNode;if(qi()&&t.callbackNode!==n)return null;var r=tu(t,t===Me?Be:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=_u(t,r);else{e=r;var i=J;J|=2;var s=Q1();(Me!==t||Be!==e)&&(_n=null,ns=Te()+500,qr(t,e));do try{aP();break}catch(a){K1(t,a)}while(!0);Vp(),gu.current=s,J=i,ke!==null?e=0:(Me=null,Be=0,e=Ve)}if(e!==0){if(e===2&&(i=_h(t),i!==0&&(r=i,e=Gh(t,i))),e===1)throw n=Uo,qr(t,0),Yn(t,r),dt(t,Te()),n;if(e===6)Yn(t,r);else{if(i=t.current.alternate,!(r&30)&&!sP(i)&&(e=_u(t,r),e===2&&(s=_h(t),s!==0&&(r=s,e=Gh(t,s))),e===1))throw n=Uo,qr(t,0),Yn(t,r),dt(t,Te()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(P(345));case 2:br(t,lt,_n);break;case 3:if(Yn(t,r),(r&130023424)===r&&(e=Hp+500-Te(),10<e)){if(tu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){it(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=kh(br.bind(null,t,lt,_n),e);break}br(t,lt,_n);break;case 4:if(Yn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Kt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*iP(r/1960))-r,10<r){t.timeoutHandle=kh(br.bind(null,t,lt,_n),r);break}br(t,lt,_n);break;case 5:br(t,lt,_n);break;default:throw Error(P(329))}}}return dt(t,Te()),t.callbackNode===n?G1.bind(null,t):null}function Gh(t,e){var n=co;return t.current.memoizedState.isDehydrated&&(qr(t,e).flags|=256),t=_u(t,e),t!==2&&(e=lt,lt=n,e!==null&&Kh(e)),t}function Kh(t){lt===null?lt=t:lt.push.apply(lt,t)}function sP(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Jt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Yn(t,e){for(e&=~Wp,e&=~ac,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Kt(e),r=1<<n;t[n]=-1,e&=~r}}function Oy(t){if(J&6)throw Error(P(327));qi();var e=tu(t,0);if(!(e&1))return dt(t,Te()),null;var n=_u(t,e);if(t.tag!==0&&n===2){var r=_h(t);r!==0&&(e=r,n=Gh(t,r))}if(n===1)throw n=Uo,qr(t,0),Yn(t,e),dt(t,Te()),n;if(n===6)throw Error(P(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,br(t,lt,_n),dt(t,Te()),null}function Gp(t,e){var n=J;J|=1;try{return t(e)}finally{J=n,J===0&&(ns=Te()+500,rc&&Sr())}}function ti(t){Jn!==null&&Jn.tag===0&&!(J&6)&&qi();var e=J;J|=1;var n=$t.transition,r=te;try{if($t.transition=null,te=1,t)return t()}finally{te=r,$t.transition=n,J=e,!(J&6)&&Sr()}}function Kp(){_t=Ni.current,ce(Ni)}function qr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,OS(n)),ke!==null)for(n=ke.return;n!==null;){var r=n;switch(Rp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ou();break;case 3:es(),ce(ft),ce(et),Mp();break;case 5:$p(r);break;case 4:es();break;case 13:ce(me);break;case 19:ce(me);break;case 10:Np(r.type._context);break;case 22:case 23:Kp()}n=n.return}if(Me=t,ke=t=lr(t.current,null),Be=_t=e,Ve=0,Uo=null,Wp=ac=ei=0,lt=co=null,$r!==null){for(e=0;e<$r.length;e++)if(n=$r[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}$r=null}return t}function K1(t,e){do{var n=ke;try{if(Vp(),Vl.current=mu,pu){for(var r=ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}pu=!1}if(Zr=0,De=xe=ge=null,lo=!1,Lo=0,qp.current=null,n===null||n.return===null){Ve=1,Uo=e,ke=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Be,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Ty(o);if(p!==null){p.flags&=-257,Iy(p,o,a,s,e),p.mode&1&&Ey(s,u,e),e=p,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){Ey(s,u,e),Qp();break e}l=Error(P(426))}}else if(pe&&a.mode&1){var E=Ty(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Iy(E,o,a,s,e),Cp(ts(l,a));break e}}s=l=ts(l,a),Ve!==4&&(Ve=2),co===null?co=[s]:co.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=V1(s,l,e);py(s,m);break e;case 1:a=l;var d=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(or===null||!or.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=N1(s,a,e);py(s,_);break e}}s=s.return}while(s!==null)}X1(n)}catch(w){e=w,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(!0)}function Q1(){var t=gu.current;return gu.current=mu,t===null?mu:t}function Qp(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),Me===null||!(ei&268435455)&&!(ac&268435455)||Yn(Me,Be)}function _u(t,e){var n=J;J|=2;var r=Q1();(Me!==t||Be!==e)&&(_n=null,qr(t,e));do try{oP();break}catch(i){K1(t,i)}while(!0);if(Vp(),J=n,gu.current=r,ke!==null)throw Error(P(261));return Me=null,Be=0,Ve}function oP(){for(;ke!==null;)Y1(ke)}function aP(){for(;ke!==null&&!NA();)Y1(ke)}function Y1(t){var e=Z1(t.alternate,t,_t);t.memoizedProps=t.pendingProps,e===null?X1(t):ke=e,qp.current=null}function X1(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=eP(n,e),n!==null){n.flags&=32767,ke=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ve=6,ke=null;return}}else if(n=ZS(n,e,_t),n!==null){ke=n;return}if(e=e.sibling,e!==null){ke=e;return}ke=e=t}while(e!==null);Ve===0&&(Ve=5)}function br(t,e,n){var r=te,i=$t.transition;try{$t.transition=null,te=1,lP(t,e,n,r)}finally{$t.transition=i,te=r}return null}function lP(t,e,n,r){do qi();while(Jn!==null);if(J&6)throw Error(P(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(P(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(jA(t,s),t===Me&&(ke=Me=null,Be=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||rl||(rl=!0,ew(eu,function(){return qi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=$t.transition,$t.transition=null;var o=te;te=1;var a=J;J|=4,qp.current=null,nP(t,n),W1(n,t),RS(Sh),nu=!!Ah,Sh=Ah=null,t.current=n,rP(n),bA(),J=a,te=o,$t.transition=s}else t.current=n;if(rl&&(rl=!1,Jn=t,vu=i),s=t.pendingLanes,s===0&&(or=null),$A(n.stateNode),dt(t,Te()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(yu)throw yu=!1,t=Wh,Wh=null,t;return vu&1&&t.tag!==0&&qi(),s=t.pendingLanes,s&1?t===Hh?fo++:(fo=0,Hh=t):fo=0,Sr(),null}function qi(){if(Jn!==null){var t=x0(vu),e=$t.transition,n=te;try{if($t.transition=null,te=16>t?16:t,Jn===null)var r=!1;else{if(t=Jn,Jn=null,vu=0,J&6)throw Error(P(331));var i=J;for(J|=4,x=t.current;x!==null;){var s=x,o=s.child;if(x.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(x=u;x!==null;){var c=x;switch(c.tag){case 0:case 11:case 15:uo(8,c,s)}var f=c.child;if(f!==null)f.return=c,x=f;else for(;x!==null;){c=x;var h=c.sibling,p=c.return;if(j1(c),c===u){x=null;break}if(h!==null){h.return=p,x=h;break}x=p}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var E=v.sibling;v.sibling=null,v=E}while(v!==null)}}x=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,x=o;else e:for(;x!==null;){if(s=x,s.flags&2048)switch(s.tag){case 0:case 11:case 15:uo(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,x=m;break e}x=s.return}}var d=t.current;for(x=d;x!==null;){o=x;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,x=g;else e:for(o=d;x!==null;){if(a=x,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:oc(9,a)}}catch(w){_e(a,a.return,w)}if(a===o){x=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,x=_;break e}x=a.return}}if(J=i,Sr(),hn&&typeof hn.onPostCommitFiberRoot=="function")try{hn.onPostCommitFiberRoot(Ju,t)}catch{}r=!0}return r}finally{te=n,$t.transition=e}}return!1}function $y(t,e,n){e=ts(n,e),e=V1(t,e,1),t=sr(t,e,1),e=it(),t!==null&&(ma(t,1,e),dt(t,e))}function _e(t,e,n){if(t.tag===3)$y(t,t,n);else for(;e!==null;){if(e.tag===3){$y(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(or===null||!or.has(r))){t=ts(n,t),t=N1(e,t,1),e=sr(e,t,1),t=it(),e!==null&&(ma(e,1,t),dt(e,t));break}}e=e.return}}function uP(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=it(),t.pingedLanes|=t.suspendedLanes&n,Me===t&&(Be&n)===n&&(Ve===4||Ve===3&&(Be&130023424)===Be&&500>Te()-Hp?qr(t,0):Wp|=n),dt(t,e)}function J1(t,e){e===0&&(t.mode&1?(e=Ga,Ga<<=1,!(Ga&130023424)&&(Ga=4194304)):e=1);var n=it();t=xn(t,e),t!==null&&(ma(t,e,n),dt(t,n))}function cP(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),J1(t,n)}function fP(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(e),J1(t,n)}var Z1;Z1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ft.current)ut=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ut=!1,JS(t,e,n);ut=!!(t.flags&131072)}else ut=!1,pe&&e.flags&1048576&&n1(e,uu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;bl(t,e),t=e.pendingProps;var i=Xi(e,et.current);Bi(e,n),i=Fp(null,e,r,t,i,n);var s=zp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ht(r)?(s=!0,au(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Dp(e),i.updater=ic,e.stateNode=i,i._reactInternals=e,Dh(e,r,t,n),e=Mh(null,e,r,!0,s,n)):(e.tag=0,pe&&s&&kp(e),nt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(bl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=dP(r),t=jt(r,t),i){case 0:e=$h(null,e,r,t,n);break e;case 1:e=Py(null,e,r,t,n);break e;case 11:e=Ay(null,e,r,t,n);break e;case 14:e=Sy(null,e,r,jt(r.type,t),n);break e}throw Error(P(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jt(r,i),$h(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jt(r,i),Py(t,e,r,i,n);case 3:e:{if($1(e),t===null)throw Error(P(387));r=e.pendingProps,s=e.memoizedState,i=s.element,o1(t,e),hu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ts(Error(P(423)),e),e=ky(t,e,r,n,i);break e}else if(r!==i){i=ts(Error(P(424)),e),e=ky(t,e,r,n,i);break e}else for(wt=ir(e.stateNode.containerInfo.firstChild),Et=e,pe=!0,qt=null,n=c1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ji(),r===i){e=Vn(t,e,n);break e}nt(t,e,r,n)}e=e.child}return e;case 5:return f1(e),t===null&&Vh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ph(r,i)?o=null:s!==null&&Ph(r,s)&&(e.flags|=32),O1(t,e),nt(t,e,o,n),e.child;case 6:return t===null&&Vh(e),null;case 13:return M1(t,e,n);case 4:return Op(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Zi(e,null,r,n):nt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jt(r,i),Ay(t,e,r,i,n);case 7:return nt(t,e,e.pendingProps,n),e.child;case 8:return nt(t,e,e.pendingProps.children,n),e.child;case 12:return nt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ie(cu,r._currentValue),r._currentValue=o,s!==null)if(Jt(s.value,o)){if(s.children===i.children&&!ft.current){e=Vn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Sn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Nh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(P(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Nh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}nt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Bi(e,n),i=Lt(i),r=r(i),e.flags|=1,nt(t,e,r,n),e.child;case 14:return r=e.type,i=jt(r,e.pendingProps),i=jt(r.type,i),Sy(t,e,r,i,n);case 15:return b1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jt(r,i),bl(t,e),e.tag=1,ht(r)?(t=!0,au(e)):t=!1,Bi(e,n),l1(e,r,i),Dh(e,r,i,n),Mh(null,e,r,!0,t,n);case 19:return L1(t,e,n);case 22:return D1(t,e,n)}throw Error(P(156,e.tag))};function ew(t,e){return P0(t,e)}function hP(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(t,e,n,r){return new hP(t,e,n,r)}function Yp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function dP(t){if(typeof t=="function")return Yp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===mp)return 11;if(t===gp)return 14}return 2}function lr(t,e){var n=t.alternate;return n===null?(n=Ot(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function $l(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Yp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ti:return Wr(n.children,i,s,e);case pp:o=8,i|=8;break;case ih:return t=Ot(12,n,e,i|2),t.elementType=ih,t.lanes=s,t;case sh:return t=Ot(13,n,e,i),t.elementType=sh,t.lanes=s,t;case oh:return t=Ot(19,n,e,i),t.elementType=oh,t.lanes=s,t;case u0:return lc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case a0:o=10;break e;case l0:o=9;break e;case mp:o=11;break e;case gp:o=14;break e;case Gn:o=16,r=null;break e}throw Error(P(130,t==null?t:typeof t,""))}return e=Ot(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Wr(t,e,n,r){return t=Ot(7,t,r,e),t.lanes=n,t}function lc(t,e,n,r){return t=Ot(22,t,r,e),t.elementType=u0,t.lanes=n,t.stateNode={isHidden:!1},t}function kf(t,e,n){return t=Ot(6,t,null,e),t.lanes=n,t}function Rf(t,e,n){return e=Ot(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function pP(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=lf(0),this.expirationTimes=lf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Xp(t,e,n,r,i,s,o,a,l){return t=new pP(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ot(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Dp(s),t}function mP(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ei,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function tw(t){if(!t)return gr;t=t._reactInternals;e:{if(ui(t)!==t||t.tag!==1)throw Error(P(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ht(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(P(171))}if(t.tag===1){var n=t.type;if(ht(n))return e1(t,n,e)}return e}function nw(t,e,n,r,i,s,o,a,l){return t=Xp(n,r,!0,t,i,s,o,a,l),t.context=tw(null),n=t.current,r=it(),i=ar(n),s=Sn(r,i),s.callback=e??null,sr(n,s,i),t.current.lanes=i,ma(t,i,r),dt(t,r),t}function uc(t,e,n,r){var i=e.current,s=it(),o=ar(i);return n=tw(n),e.context===null?e.context=n:e.pendingContext=n,e=Sn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=sr(i,e,o),t!==null&&(Qt(t,i,o,s),xl(t,i,o)),o}function wu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function My(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Jp(t,e){My(t,e),(t=t.alternate)&&My(t,e)}function gP(){return null}var rw=typeof reportError=="function"?reportError:function(t){console.error(t)};function Zp(t){this._internalRoot=t}cc.prototype.render=Zp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(P(409));uc(t,e,null,null)};cc.prototype.unmount=Zp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ti(function(){uc(null,t,null,null)}),e[Cn]=null}};function cc(t){this._internalRoot=t}cc.prototype.unstable_scheduleHydration=function(t){if(t){var e=b0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Qn.length&&e!==0&&e<Qn[n].priority;n++);Qn.splice(n,0,t),n===0&&O0(t)}};function em(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function fc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ly(){}function yP(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=wu(o);s.call(u)}}var o=nw(e,r,t,0,null,!1,!1,"",Ly);return t._reactRootContainer=o,t[Cn]=o.current,bo(t.nodeType===8?t.parentNode:t),ti(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=wu(l);a.call(u)}}var l=Xp(t,0,!1,null,null,!1,!1,"",Ly);return t._reactRootContainer=l,t[Cn]=l.current,bo(t.nodeType===8?t.parentNode:t),ti(function(){uc(e,l,n,r)}),l}function hc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=wu(o);a.call(l)}}uc(e,o,t,i)}else o=yP(n,e,t,i,r);return wu(o)}V0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Gs(e.pendingLanes);n!==0&&(_p(e,n|1),dt(e,Te()),!(J&6)&&(ns=Te()+500,Sr()))}break;case 13:ti(function(){var r=xn(t,1);if(r!==null){var i=it();Qt(r,t,1,i)}}),Jp(t,1)}};wp=function(t){if(t.tag===13){var e=xn(t,134217728);if(e!==null){var n=it();Qt(e,t,134217728,n)}Jp(t,134217728)}};N0=function(t){if(t.tag===13){var e=ar(t),n=xn(t,e);if(n!==null){var r=it();Qt(n,t,e,r)}Jp(t,e)}};b0=function(){return te};D0=function(t,e){var n=te;try{return te=t,e()}finally{te=n}};gh=function(t,e,n){switch(e){case"input":if(uh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=nc(r);if(!i)throw Error(P(90));f0(r),uh(r,i)}}}break;case"textarea":d0(t,n);break;case"select":e=n.value,e!=null&&Fi(t,!!n.multiple,e,!1)}};w0=Gp;E0=ti;var vP={usingClientEntryPoint:!1,Events:[ya,Pi,nc,v0,_0,Gp]},Us={findFiberByHostInstance:Or,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},_P={bundleType:Us.bundleType,version:Us.version,rendererPackageName:Us.rendererPackageName,rendererConfig:Us.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Fn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=A0(t),t===null?null:t.stateNode},findFiberByHostInstance:Us.findFiberByHostInstance||gP,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!il.isDisabled&&il.supportsFiber)try{Ju=il.inject(_P),hn=il}catch{}}St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vP;St.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!em(e))throw Error(P(200));return mP(t,e,null,n)};St.createRoot=function(t,e){if(!em(t))throw Error(P(299));var n=!1,r="",i=rw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Xp(t,1,!1,null,null,n,!1,r,i),t[Cn]=e.current,bo(t.nodeType===8?t.parentNode:t),new Zp(e)};St.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(P(188)):(t=Object.keys(t).join(","),Error(P(268,t)));return t=A0(e),t=t===null?null:t.stateNode,t};St.flushSync=function(t){return ti(t)};St.hydrate=function(t,e,n){if(!fc(e))throw Error(P(200));return hc(null,t,e,!0,n)};St.hydrateRoot=function(t,e,n){if(!em(t))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=rw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=nw(e,null,t,1,n??null,i,!1,s,o),t[Cn]=e.current,bo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new cc(e)};St.render=function(t,e,n){if(!fc(e))throw Error(P(200));return hc(null,t,e,!1,n)};St.unmountComponentAtNode=function(t){if(!fc(t))throw Error(P(40));return t._reactRootContainer?(ti(function(){hc(null,null,t,!1,function(){t._reactRootContainer=null,t[Cn]=null})}),!0):!1};St.unstable_batchedUpdates=Gp;St.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!fc(n))throw Error(P(200));if(t==null||t._reactInternals===void 0)throw Error(P(38));return hc(t,e,n,!1,r)};St.version="18.2.0-next-9e3b772b8-20220608";function iw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(iw)}catch(t){console.error(t)}}iw(),n0.exports=St;var wP=n0.exports,Fy=wP;nh.createRoot=Fy.createRoot,nh.hydrateRoot=Fy.hydrateRoot;var ct=function(){return ct=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},ct.apply(this,arguments)};function Eu(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var oe="-ms-",ho="-moz-",ee="-webkit-",sw="comm",dc="rule",tm="decl",EP="@import",ow="@keyframes",TP="@layer",IP=Math.abs,nm=String.fromCharCode,Qh=Object.assign;function AP(t,e){return Oe(t,0)^45?(((e<<2^Oe(t,0))<<2^Oe(t,1))<<2^Oe(t,2))<<2^Oe(t,3):0}function aw(t){return t.trim()}function wn(t,e){return(t=e.exec(t))?t[0]:t}function B(t,e,n){return t.replace(e,n)}function Ml(t,e){return t.indexOf(e)}function Oe(t,e){return t.charCodeAt(e)|0}function rs(t,e,n){return t.slice(e,n)}function sn(t){return t.length}function lw(t){return t.length}function Qs(t,e){return e.push(t),t}function SP(t,e){return t.map(e).join("")}function zy(t,e){return t.filter(function(n){return!wn(n,e)})}var pc=1,is=1,uw=0,zt=0,Pe=0,As="";function mc(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:pc,column:is,length:o,return:"",siblings:a}}function Hn(t,e){return Qh(mc("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function mi(t){for(;t.root;)t=Hn(t.root,{children:[t]});Qs(t,t.siblings)}function PP(){return Pe}function kP(){return Pe=zt>0?Oe(As,--zt):0,is--,Pe===10&&(is=1,pc--),Pe}function Yt(){return Pe=zt<uw?Oe(As,zt++):0,is++,Pe===10&&(is=1,pc++),Pe}function Hr(){return Oe(As,zt)}function Ll(){return zt}function gc(t,e){return rs(As,t,e)}function Yh(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function RP(t){return pc=is=1,uw=sn(As=t),zt=0,[]}function CP(t){return As="",t}function Cf(t){return aw(gc(zt-1,Xh(t===91?t+2:t===40?t+1:t)))}function xP(t){for(;(Pe=Hr())&&Pe<33;)Yt();return Yh(t)>2||Yh(Pe)>3?"":" "}function VP(t,e){for(;--e&&Yt()&&!(Pe<48||Pe>102||Pe>57&&Pe<65||Pe>70&&Pe<97););return gc(t,Ll()+(e<6&&Hr()==32&&Yt()==32))}function Xh(t){for(;Yt();)switch(Pe){case t:return zt;case 34:case 39:t!==34&&t!==39&&Xh(Pe);break;case 40:t===41&&Xh(t);break;case 92:Yt();break}return zt}function NP(t,e){for(;Yt()&&t+Pe!==57;)if(t+Pe===84&&Hr()===47)break;return"/*"+gc(e,zt-1)+"*"+nm(t===47?t:Yt())}function bP(t){for(;!Yh(Hr());)Yt();return gc(t,zt)}function DP(t){return CP(Fl("",null,null,null,[""],t=RP(t),0,[0],t))}function Fl(t,e,n,r,i,s,o,a,l){for(var u=0,c=0,f=o,h=0,p=0,y=0,v=1,E=1,m=1,d=0,g="",_=i,w=s,S=r,I=g;E;)switch(y=d,d=Yt()){case 40:if(y!=108&&Oe(I,f-1)==58){Ml(I+=B(Cf(d),"&","&\f"),"&\f")!=-1&&(m=-1);break}case 34:case 39:case 91:I+=Cf(d);break;case 9:case 10:case 13:case 32:I+=xP(y);break;case 92:I+=VP(Ll()-1,7);continue;case 47:switch(Hr()){case 42:case 47:Qs(OP(NP(Yt(),Ll()),e,n,l),l);break;default:I+="/"}break;case 123*v:a[u++]=sn(I)*m;case 125*v:case 59:case 0:switch(d){case 0:case 125:E=0;case 59+c:m==-1&&(I=B(I,/\f/g,"")),p>0&&sn(I)-f&&Qs(p>32?jy(I+";",r,n,f-1,l):jy(B(I," ","")+";",r,n,f-2,l),l);break;case 59:I+=";";default:if(Qs(S=Uy(I,e,n,u,c,i,a,g,_=[],w=[],f,s),s),d===123)if(c===0)Fl(I,e,S,S,_,s,f,a,w);else switch(h===99&&Oe(I,3)===110?100:h){case 100:case 108:case 109:case 115:Fl(t,S,S,r&&Qs(Uy(t,S,S,0,0,i,a,g,i,_=[],f,w),w),i,w,f,a,r?_:w);break;default:Fl(I,S,S,S,[""],w,0,a,w)}}u=c=p=0,v=m=1,g=I="",f=o;break;case 58:f=1+sn(I),p=y;default:if(v<1){if(d==123)--v;else if(d==125&&v++==0&&kP()==125)continue}switch(I+=nm(d),d*v){case 38:m=c>0?1:(I+="\f",-1);break;case 44:a[u++]=(sn(I)-1)*m,m=1;break;case 64:Hr()===45&&(I+=Cf(Yt())),h=Hr(),c=f=sn(g=I+=bP(Ll())),d++;break;case 45:y===45&&sn(I)==2&&(v=0)}}return s}function Uy(t,e,n,r,i,s,o,a,l,u,c,f){for(var h=i-1,p=i===0?s:[""],y=lw(p),v=0,E=0,m=0;v<r;++v)for(var d=0,g=rs(t,h+1,h=IP(E=o[v])),_=t;d<y;++d)(_=aw(E>0?p[d]+" "+g:B(g,/&\f/g,p[d])))&&(l[m++]=_);return mc(t,e,n,i===0?dc:a,l,u,c,f)}function OP(t,e,n,r){return mc(t,e,n,sw,nm(PP()),rs(t,2,-2),0,r)}function jy(t,e,n,r,i){return mc(t,e,n,tm,rs(t,0,r),rs(t,r+1,-1),r,i)}function cw(t,e,n){switch(AP(t,e)){case 5103:return ee+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ee+t+t;case 4789:return ho+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return ee+t+ho+t+oe+t+t;case 5936:switch(Oe(t,e+11)){case 114:return ee+t+oe+B(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return ee+t+oe+B(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return ee+t+oe+B(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return ee+t+oe+t+t;case 6165:return ee+t+oe+"flex-"+t+t;case 5187:return ee+t+B(t,/(\w+).+(:[^]+)/,ee+"box-$1$2"+oe+"flex-$1$2")+t;case 5443:return ee+t+oe+"flex-item-"+B(t,/flex-|-self/g,"")+(wn(t,/flex-|baseline/)?"":oe+"grid-row-"+B(t,/flex-|-self/g,""))+t;case 4675:return ee+t+oe+"flex-line-pack"+B(t,/align-content|flex-|-self/g,"")+t;case 5548:return ee+t+oe+B(t,"shrink","negative")+t;case 5292:return ee+t+oe+B(t,"basis","preferred-size")+t;case 6060:return ee+"box-"+B(t,"-grow","")+ee+t+oe+B(t,"grow","positive")+t;case 4554:return ee+B(t,/([^-])(transform)/g,"$1"+ee+"$2")+t;case 6187:return B(B(B(t,/(zoom-|grab)/,ee+"$1"),/(image-set)/,ee+"$1"),t,"")+t;case 5495:case 3959:return B(t,/(image-set\([^]*)/,ee+"$1$`$1");case 4968:return B(B(t,/(.+:)(flex-)?(.*)/,ee+"box-pack:$3"+oe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ee+t+t;case 4200:if(!wn(t,/flex-|baseline/))return oe+"grid-column-align"+rs(t,e)+t;break;case 2592:case 3360:return oe+B(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,wn(r.props,/grid-\w+-end/)})?~Ml(t+(n=n[e].value),"span")?t:oe+B(t,"-start","")+t+oe+"grid-row-span:"+(~Ml(n,"span")?wn(n,/\d+/):+wn(n,/\d+/)-+wn(t,/\d+/))+";":oe+B(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return wn(r.props,/grid-\w+-start/)})?t:oe+B(B(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return B(t,/(.+)-inline(.+)/,ee+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(sn(t)-1-e>6)switch(Oe(t,e+1)){case 109:if(Oe(t,e+4)!==45)break;case 102:return B(t,/(.+:)(.+)-([^]+)/,"$1"+ee+"$2-$3$1"+ho+(Oe(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Ml(t,"stretch")?cw(B(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return B(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,u){return oe+i+":"+s+u+(o?oe+i+"-span:"+(a?l:+l-+s)+u:"")+t});case 4949:if(Oe(t,e+6)===121)return B(t,":",":"+ee)+t;break;case 6444:switch(Oe(t,Oe(t,14)===45?18:11)){case 120:return B(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ee+(Oe(t,14)===45?"inline-":"")+"box$3$1"+ee+"$2$3$1"+oe+"$2box$3")+t;case 100:return B(t,":",":"+oe)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return B(t,"scroll-","scroll-snap-")+t}return t}function Tu(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function $P(t,e,n,r){switch(t.type){case TP:if(t.children.length)break;case EP:case tm:return t.return=t.return||t.value;case sw:return"";case ow:return t.return=t.value+"{"+Tu(t.children,r)+"}";case dc:if(!sn(t.value=t.props.join(",")))return""}return sn(n=Tu(t.children,r))?t.return=t.value+"{"+n+"}":""}function MP(t){var e=lw(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function LP(t){return function(e){e.root||(e=e.return)&&t(e)}}function FP(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case tm:t.return=cw(t.value,t.length,n);return;case ow:return Tu([Hn(t,{value:B(t.value,"@","@"+ee)})],r);case dc:if(t.length)return SP(n=t.props,function(i){switch(wn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":mi(Hn(t,{props:[B(i,/:(read-\w+)/,":"+ho+"$1")]})),mi(Hn(t,{props:[i]})),Qh(t,{props:zy(n,r)});break;case"::placeholder":mi(Hn(t,{props:[B(i,/:(plac\w+)/,":"+ee+"input-$1")]})),mi(Hn(t,{props:[B(i,/:(plac\w+)/,":"+ho+"$1")]})),mi(Hn(t,{props:[B(i,/:(plac\w+)/,oe+"input-$1")]})),mi(Hn(t,{props:[i]})),Qh(t,{props:zy(n,r)});break}return""})}}var zP={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},vt={},ss=typeof process<"u"&&vt!==void 0&&(vt.REACT_APP_SC_ATTR||vt.SC_ATTR)||"data-styled",rm=typeof window<"u"&&"HTMLElement"in window,UP=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&vt!==void 0&&vt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&vt.REACT_APP_SC_DISABLE_SPEEDY!==""?vt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&vt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&vt!==void 0&&vt.SC_DISABLE_SPEEDY!==void 0&&vt.SC_DISABLE_SPEEDY!==""&&vt.SC_DISABLE_SPEEDY!=="false"&&vt.SC_DISABLE_SPEEDY),yc=Object.freeze([]),os=Object.freeze({});function jP(t,e,n){return n===void 0&&(n=os),t.theme!==n.theme&&t.theme||e||n.theme}var fw=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),BP=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,qP=/(^-|-$)/g;function By(t){return t.replace(BP,"-").replace(qP,"")}var WP=/(a)(d)/gi,qy=function(t){return String.fromCharCode(t+(t>25?39:97))};function Jh(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=qy(e%52)+n;return(qy(e%52)+n).replace(WP,"$1-$2")}var xf,bi=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},hw=function(t){return bi(5381,t)};function HP(t){return Jh(hw(t)>>>0)}function GP(t){return t.displayName||t.name||"Component"}function Vf(t){return typeof t=="string"&&!0}var dw=typeof Symbol=="function"&&Symbol.for,pw=dw?Symbol.for("react.memo"):60115,KP=dw?Symbol.for("react.forward_ref"):60112,QP={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},YP={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},mw={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},XP=((xf={})[KP]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},xf[pw]=mw,xf);function Wy(t){return("type"in(e=t)&&e.type.$$typeof)===pw?mw:"$$typeof"in t?XP[t.$$typeof]:QP;var e}var JP=Object.defineProperty,ZP=Object.getOwnPropertyNames,Hy=Object.getOwnPropertySymbols,ek=Object.getOwnPropertyDescriptor,tk=Object.getPrototypeOf,Gy=Object.prototype;function gw(t,e,n){if(typeof e!="string"){if(Gy){var r=tk(e);r&&r!==Gy&&gw(t,r,n)}var i=ZP(e);Hy&&(i=i.concat(Hy(e)));for(var s=Wy(t),o=Wy(e),a=0;a<i.length;++a){var l=i[a];if(!(l in YP||n&&n[l]||o&&l in o||s&&l in s)){var u=ek(e,l);try{JP(t,l,u)}catch{}}}}return t}function as(t){return typeof t=="function"}function im(t){return typeof t=="object"&&"styledComponentId"in t}function Lr(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Ky(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=e?e+t[r]:t[r];return n}function jo(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Zh(t,e,n){if(n===void 0&&(n=!1),!n&&!jo(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=Zh(t[r],e[r]);else if(jo(e))for(var r in e)t[r]=Zh(t[r],e[r]);return t}function sm(t,e){Object.defineProperty(t,"toString",{value:e})}function _a(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var nk=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw _a(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);return n},t}(),zl=new Map,Iu=new Map,Nf=1,sl=function(t){if(zl.has(t))return zl.get(t);for(;Iu.has(Nf);)Nf++;var e=Nf++;return zl.set(t,e),Iu.set(e,t),e},rk=function(t,e){zl.set(t,e),Iu.set(e,t)},ik="style[".concat(ss,"][").concat("data-styled-version",'="').concat("6.0.7",'"]'),sk=new RegExp("^".concat(ss,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ok=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},ak=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(sk);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(rk(c,u),ok(t,c,l[3]),t.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function lk(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var yw=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(ss,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(ss,"active"),r.setAttribute("data-styled-version","6.0.7");var o=lk();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},uk=function(){function t(e){this.element=yw(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw _a(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),ck=function(){function t(e){this.element=yw(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),fk=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),Qy=rm,hk={isServer:!rm,useCSSOMInjection:!UP},vw=function(){function t(e,n,r){e===void 0&&(e=os),n===void 0&&(n={});var i=this;this.options=ct(ct({},hk),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&rm&&Qy&&(Qy=!1,function(s){for(var o=document.querySelectorAll(ik),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(ss)!=="active"&&(ak(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),sm(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",u=function(f){var h=function(m){return Iu.get(m)}(f);if(h===void 0)return"continue";var p=s.names.get(h),y=o.getGroup(f);if(p===void 0||y.length===0)return"continue";var v="".concat(ss,".g").concat(f,'[id="').concat(h,'"]'),E="";p!==void 0&&p.forEach(function(m){m.length>0&&(E+="".concat(m,","))}),l+="".concat(y).concat(v,'{content:"').concat(E,'"}').concat(`/*!sc*/
`)},c=0;c<a;c++)u(c);return l}(i)})}return t.registerId=function(e){return sl(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(ct(ct({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new fk(i):r?new uk(i):new ck(i)}(this.options),new nk(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(sl(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(sl(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(sl(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),dk=/&/g,pk=/^\s*\/\/.*$/gm;function _w(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=_w(n.children,e)),n})}function mk(t){var e,n,r,i=t===void 0?os:t,s=i.options,o=s===void 0?os:s,a=i.plugins,l=a===void 0?yc:a,u=function(h,p,y){return y===n||y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(e):h},c=l.slice();c.push(function(h){h.type===dc&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(dk,n).replace(r,u))}),o.prefix&&c.push(FP),c.push($P);var f=function(h,p,y,v){p===void 0&&(p=""),y===void 0&&(y=""),v===void 0&&(v="&"),e=v,n=p,r=new RegExp("\\".concat(n,"\\b"),"g");var E=h.replace(pk,""),m=DP(y||p?"".concat(y," ").concat(p," { ").concat(E," }"):E);o.namespace&&(m=_w(m,o.namespace));var d=[];return Tu(m,MP(c.concat(LP(function(g){return d.push(g)})))),d};return f.hash=l.length?l.reduce(function(h,p){return p.name||_a(15),bi(h,p.name)},5381).toString():"",f}var gk=new vw,ed=mk(),ww=pr.createContext({shouldForwardProp:void 0,styleSheet:gk,stylis:ed});ww.Consumer;pr.createContext(void 0);function Yy(){return kn.useContext(ww)}var yk=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=ed);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,sm(this,function(){throw _a(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=ed),this.name+e.hash},t}(),vk=function(t){return t>="A"&&t<="Z"};function Xy(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;vk(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var Ew=function(t){return t==null||t===!1||t===""},Tw=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!Ew(s)&&(Array.isArray(s)&&s.isCss||as(s)?r.push("".concat(Xy(i),":"),s,";"):jo(s)?r.push.apply(r,Eu(Eu(["".concat(i," {")],Tw(s),!1),["}"],!1)):r.push("".concat(Xy(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in zP||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Gr(t,e,n,r){if(Ew(t))return[];if(im(t))return[".".concat(t.styledComponentId)];if(as(t)){if(!as(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return Gr(i,e,n,r)}var s;return t instanceof yk?n?(t.inject(n,r),[t.getName(r)]):[t]:jo(t)?Tw(t):Array.isArray(t)?Array.prototype.concat.apply(yc,t.map(function(o){return Gr(o,e,n,r)})):[t.toString()]}function _k(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(as(n)&&!im(n))return!1}return!0}var wk=hw("6.0.7"),Ek=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&_k(e),this.componentId=n,this.baseHash=bi(wk,n),this.baseStyle=r,vw.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Lr(i,this.staticRulesId);else{var s=Ky(Gr(this.rules,e,n,r)),o=Jh(bi(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=Lr(i,o),this.staticRulesId=o}else{for(var l=bi(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var f=this.rules[c];if(typeof f=="string")u+=f;else if(f){var h=Ky(Gr(f,e,n,r));l=bi(l,h),u+=h}}if(u){var p=Jh(l>>>0);n.hasNameForId(this.componentId,p)||n.insertRules(this.componentId,p,r(u,".".concat(p),void 0,this.componentId)),i=Lr(i,p)}}return i},t}(),Iw=pr.createContext(void 0);Iw.Consumer;var bf={};function Tk(t,e,n){var r=im(t),i=t,s=!Vf(t),o=e.attrs,a=o===void 0?yc:o,l=e.componentId,u=l===void 0?function(g,_){var w=typeof g!="string"?"sc":By(g);bf[w]=(bf[w]||0)+1;var S="".concat(w,"-").concat(HP("6.0.7"+w+bf[w]));return _?"".concat(_,"-").concat(S):S}(e.displayName,e.parentComponentId):l,c=e.displayName;c===void 0&&function(g){return Vf(g)?"styled.".concat(g):"Styled(".concat(GP(g),")")}(t);var f=e.displayName&&e.componentId?"".concat(By(e.displayName),"-").concat(e.componentId):e.componentId||u,h=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,p=e.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(e.shouldForwardProp){var v=e.shouldForwardProp;p=function(g,_){return y(g,_)&&v(g,_)}}else p=y}var E=new Ek(n,f,r?i.componentStyle:void 0);function m(g,_){return function(w,S,I){var N=w.attrs,K=w.componentStyle,U=w.defaultProps,mt=w.foldedComponentIds,Cr=w.styledComponentId,xr=w.target,za=pr.useContext(Iw),ef=Yy(),Vr=w.shouldForwardProp||ef.shouldForwardProp,Rt=function(yn,gt,jn){for(var yt,Ct=ct(ct({},gt),{className:void 0,theme:jn}),tf=0;tf<yn.length;tf+=1){var Ua=as(yt=yn[tf])?yt(Ct):yt;for(var Bn in Ua)Ct[Bn]=Bn==="className"?Lr(Ct[Bn],Ua[Bn]):Bn==="style"?ct(ct({},Ct[Bn]),Ua[Bn]):Ua[Bn]}return gt.className&&(Ct.className=Lr(Ct.className,gt.className)),Ct}(N,S,jP(S,za,U)||os),R=Rt.as||xr,$={};for(var M in Rt)Rt[M]===void 0||M[0]==="$"||M==="as"||M==="theme"||(M==="forwardedAs"?$.as=Rt.forwardedAs:Vr&&!Vr(M,R)||($[M]=Rt[M]));var de=function(yn,gt){var jn=Yy(),yt=yn.generateAndInjectStyles(gt,jn.styleSheet,jn.stylis);return yt}(K,Rt),ve=Lr(mt,Cr);return de&&(ve+=" "+de),Rt.className&&(ve+=" "+Rt.className),$[Vf(R)&&!fw.has(R)?"class":"className"]=ve,$.ref=I,kn.createElement(R,$)}(d,g,_)}var d=pr.forwardRef(m);return d.attrs=h,d.componentStyle=E,d.shouldForwardProp=p,d.foldedComponentIds=r?Lr(i.foldedComponentIds,i.styledComponentId):"",d.styledComponentId=f,d.target=r?i.target:t,Object.defineProperty(d,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(g){this._foldedDefaultProps=r?function(_){for(var w=[],S=1;S<arguments.length;S++)w[S-1]=arguments[S];for(var I=0,N=w;I<N.length;I++)Zh(_,N[I],!0);return _}({},i.defaultProps,g):g}}),sm(d,function(){return".".concat(d.styledComponentId)}),s&&gw(d,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),d}function Jy(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var Zy=function(t){return Object.assign(t,{isCss:!0})};function Ik(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(as(t)||jo(t)){var r=t;return Zy(Gr(Jy(yc,Eu([r],e,!0))))}var i=t;return e.length===0&&i.length===1&&typeof i[0]=="string"?Gr(i):Zy(Gr(Jy(i,e)))}function td(t,e,n){if(n===void 0&&(n=os),!e)throw _a(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,Ik.apply(void 0,Eu([i],s,!1)))};return r.attrs=function(i){return td(t,e,ct(ct({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return td(t,e,ct(ct({},n),i))},r}var Aw=function(t){return td(Tk,t)},zn=Aw;fw.forEach(function(t){zn[t]=Aw(t)});const Ak=zn.nav``;function Sk(){return re.jsx(Ak,{})}var ev={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Pk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Pw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,f=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(h=64)),r.push(n[c],n[f],n[h],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Sw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Pk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||f==null)throw new kk;const h=s<<2|a>>4;if(r.push(h),u!==64){const p=a<<4&240|u>>2;if(r.push(p),f!==64){const y=u<<6&192|f;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class kk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Rk=function(t){const e=Sw(t);return Pw.encodeByteArray(e,!0)},Au=function(t){return Rk(t).replace(/\./g,"")},Ck=function(t){try{return Pw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vk=()=>xk().__FIREBASE_DEFAULTS__,Nk=()=>{if(typeof process>"u"||typeof ev>"u")return;const t=ev.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},bk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ck(t[1]);return e&&JSON.parse(e)},kw=()=>{try{return Vk()||Nk()||bk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Dk=t=>{var e,n;return(n=(e=kw())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ok=t=>{const e=Dk(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Rw=()=>{var t;return(t=kw())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mk(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Au(JSON.stringify(n)),Au(JSON.stringify(o)),a].join(".")}function Lk(){try{return typeof indexedDB=="object"}catch{return!1}}function Fk(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zk="FirebaseError";class ci extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=zk,Object.setPrototypeOf(this,ci.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Cw.prototype.create)}}class Cw{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Uk(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ci(i,a,r)}}function Uk(t,e){return t.replace(jk,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const jk=/\{\$([^}]+)}/g;function nd(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(tv(s)&&tv(o)){if(!nd(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function tv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(t){return t&&t._delegate?t._delegate:t}class ls{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new $k;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Wk(e))try{this.getOrInitializeService({instanceIdentifier:Dr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Dr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Dr){return this.instances.has(e)}getOptions(e=Dr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:qk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Dr){return this.component?this.component.multipleInstances?e:Dr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qk(t){return t===Dr?void 0:t}function Wk(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Bk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(W||(W={}));const Gk={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},Kk=W.INFO,Qk={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},Yk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Qk[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class om{constructor(e){this.name=e,this._logLevel=Kk,this._logHandler=Yk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in W))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Gk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...e),this._logHandler(this,W.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...e),this._logHandler(this,W.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,W.INFO,...e),this._logHandler(this,W.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,W.WARN,...e),this._logHandler(this,W.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...e),this._logHandler(this,W.ERROR,...e)}}const Xk=(t,e)=>e.some(n=>t instanceof n);let nv,rv;function Jk(){return nv||(nv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zk(){return rv||(rv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xw=new WeakMap,rd=new WeakMap,Vw=new WeakMap,Df=new WeakMap,am=new WeakMap;function eR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ur(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&xw.set(n,t)}).catch(()=>{}),am.set(e,t),e}function tR(t){if(rd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});rd.set(t,e)}let id={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return rd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Vw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ur(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function nR(t){id=t(id)}function rR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Of(this),e,...n);return Vw.set(r,e.sort?e.sort():[e]),ur(r)}:Zk().includes(t)?function(...e){return t.apply(Of(this),e),ur(xw.get(this))}:function(...e){return ur(t.apply(Of(this),e))}}function iR(t){return typeof t=="function"?rR(t):(t instanceof IDBTransaction&&tR(t),Xk(t,Jk())?new Proxy(t,id):t)}function ur(t){if(t instanceof IDBRequest)return eR(t);if(Df.has(t))return Df.get(t);const e=iR(t);return e!==t&&(Df.set(t,e),am.set(e,t)),e}const Of=t=>am.get(t);function sR(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ur(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ur(o.result),l.oldVersion,l.newVersion,ur(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const oR=["get","getKey","getAll","getAllKeys","count"],aR=["put","add","delete","clear"],$f=new Map;function iv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($f.get(e))return $f.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=aR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||oR.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return $f.set(e,s),s}nR(t=>({...t,get:(e,n,r)=>iv(e,n)||t.get(e,n,r),has:(e,n)=>!!iv(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(uR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function uR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const sd="@firebase/app",sv="0.9.23";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni=new om("@firebase/app"),cR="@firebase/app-compat",fR="@firebase/analytics-compat",hR="@firebase/analytics",dR="@firebase/app-check-compat",pR="@firebase/app-check",mR="@firebase/auth",gR="@firebase/auth-compat",yR="@firebase/database",vR="@firebase/database-compat",_R="@firebase/functions",wR="@firebase/functions-compat",ER="@firebase/installations",TR="@firebase/installations-compat",IR="@firebase/messaging",AR="@firebase/messaging-compat",SR="@firebase/performance",PR="@firebase/performance-compat",kR="@firebase/remote-config",RR="@firebase/remote-config-compat",CR="@firebase/storage",xR="@firebase/storage-compat",VR="@firebase/firestore",NR="@firebase/firestore-compat",bR="firebase",DR="10.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od="[DEFAULT]",OR={[sd]:"fire-core",[cR]:"fire-core-compat",[hR]:"fire-analytics",[fR]:"fire-analytics-compat",[pR]:"fire-app-check",[dR]:"fire-app-check-compat",[mR]:"fire-auth",[gR]:"fire-auth-compat",[yR]:"fire-rtdb",[vR]:"fire-rtdb-compat",[_R]:"fire-fn",[wR]:"fire-fn-compat",[ER]:"fire-iid",[TR]:"fire-iid-compat",[IR]:"fire-fcm",[AR]:"fire-fcm-compat",[SR]:"fire-perf",[PR]:"fire-perf-compat",[kR]:"fire-rc",[RR]:"fire-rc-compat",[CR]:"fire-gcs",[xR]:"fire-gcs-compat",[VR]:"fire-fst",[NR]:"fire-fst-compat","fire-js":"fire-js",[bR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su=new Map,ad=new Map;function $R(t,e){try{t.container.addComponent(e)}catch(n){ni.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Bo(t){const e=t.name;if(ad.has(e))return ni.debug(`There were multiple attempts to register component ${e}.`),!1;ad.set(e,t);for(const n of Su.values())$R(n,t);return!0}function MR(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},cr=new Cw("app","Firebase",LR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ls("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw cr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw=DR;function bw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:od,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw cr.create("bad-app-name",{appName:String(i)});if(n||(n=Rw()),!n)throw cr.create("no-options");const s=Su.get(i);if(s){if(nd(n,s.options)&&nd(r,s.config))return s;throw cr.create("duplicate-app",{appName:i})}const o=new Hk(i);for(const l of ad.values())o.addComponent(l);const a=new FR(n,r,o);return Su.set(i,a),a}function zR(t=od){const e=Su.get(t);if(!e&&t===od&&Rw())return bw();if(!e)throw cr.create("no-app",{appName:t});return e}function fr(t,e,n){var r;let i=(r=OR[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ni.warn(a.join(" "));return}Bo(new ls(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UR="firebase-heartbeat-database",jR=1,qo="firebase-heartbeat-store";let Mf=null;function Dw(){return Mf||(Mf=sR(UR,jR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(qo)}}}).catch(t=>{throw cr.create("idb-open",{originalErrorMessage:t.message})})),Mf}async function BR(t){try{return await(await Dw()).transaction(qo).objectStore(qo).get(Ow(t))}catch(e){if(e instanceof ci)ni.warn(e.message);else{const n=cr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ni.warn(n.message)}}}async function ov(t,e){try{const r=(await Dw()).transaction(qo,"readwrite");await r.objectStore(qo).put(e,Ow(t)),await r.done}catch(n){if(n instanceof ci)ni.warn(n.message);else{const r=cr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ni.warn(r.message)}}}function Ow(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qR=1024,WR=30*24*60*60*1e3;class HR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new KR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=av();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const o=new Date(s.date).valueOf();return Date.now()-o<=WR}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=av(),{heartbeatsToSend:r,unsentEntries:i}=GR(this._heartbeatsCache.heartbeats),s=Au(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function av(){return new Date().toISOString().substring(0,10)}function GR(t,e=qR){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),lv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),lv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class KR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Lk()?Fk().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await BR(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ov(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ov(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function lv(t){return Au(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QR(t){Bo(new ls("platform-logger",e=>new lR(e),"PRIVATE")),Bo(new ls("heartbeat",e=>new HR(e),"PRIVATE")),fr(sd,sv,t),fr(sd,sv,"esm2017"),fr("fire-js","")}QR("");var YR="firebase",XR="10.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fr(YR,XR,"app");var JR=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},k,lm=lm||{},F=JR||self;function vc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function wa(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function ZR(t){return Object.prototype.hasOwnProperty.call(t,Lf)&&t[Lf]||(t[Lf]=++eC)}var Lf="closure_uid_"+(1e9*Math.random()>>>0),eC=0;function tC(t,e,n){return t.call.apply(t.bind,arguments)}function nC(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Je(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Je=tC:Je=nC,Je.apply(null,arguments)}function ol(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Fe(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Pr(){this.s=this.s,this.o=this.o}var rC=0;Pr.prototype.s=!1;Pr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),rC!=0)&&ZR(this)};Pr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const $w=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function um(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function uv(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(vc(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Ze(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ze.prototype.h=function(){this.defaultPrevented=!0};var iC=function(){if(!F.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{F.addEventListener("test",()=>{},e),F.removeEventListener("test",()=>{},e)}catch{}return t}();function Wo(t){return/^[\s\xa0]*$/.test(t)}function _c(){var t=F.navigator;return t&&(t=t.userAgent)?t:""}function an(t){return _c().indexOf(t)!=-1}function cm(t){return cm[" "](t),t}cm[" "]=function(){};function sC(t,e){var n=XC;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var oC=an("Opera"),us=an("Trident")||an("MSIE"),Mw=an("Edge"),ld=Mw||us,Lw=an("Gecko")&&!(_c().toLowerCase().indexOf("webkit")!=-1&&!an("Edge"))&&!(an("Trident")||an("MSIE"))&&!an("Edge"),aC=_c().toLowerCase().indexOf("webkit")!=-1&&!an("Edge");function Fw(){var t=F.document;return t?t.documentMode:void 0}var ud;e:{var Ff="",zf=function(){var t=_c();if(Lw)return/rv:([^\);]+)(\)|;)/.exec(t);if(Mw)return/Edge\/([\d\.]+)/.exec(t);if(us)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(aC)return/WebKit\/(\S+)/.exec(t);if(oC)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(zf&&(Ff=zf?zf[1]:""),us){var Uf=Fw();if(Uf!=null&&Uf>parseFloat(Ff)){ud=String(Uf);break e}}ud=Ff}var cd;if(F.document&&us){var cv=Fw();cd=cv||parseInt(ud,10)||void 0}else cd=void 0;var lC=cd;function Ho(t,e){if(Ze.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Lw){e:{try{cm(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:uC[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ho.$.h.call(this)}}Fe(Ho,Ze);var uC={2:"touch",3:"pen",4:"mouse"};Ho.prototype.h=function(){Ho.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ea="closure_listenable_"+(1e6*Math.random()|0),cC=0;function fC(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++cC,this.fa=this.ia=!1}function wc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function fm(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function hC(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function zw(t){const e={};for(const n in t)e[n]=t[n];return e}const fv="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Uw(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<fv.length;s++)n=fv[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ec(t){this.src=t,this.g={},this.h=0}Ec.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=hd(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new fC(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function fd(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=$w(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(wc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function hd(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var hm="closure_lm_"+(1e6*Math.random()|0),jf={};function jw(t,e,n,r,i){if(r&&r.once)return qw(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)jw(t,e[s],n,r,i);return null}return n=mm(n),t&&t[Ea]?t.O(e,n,wa(r)?!!r.capture:!!r,i):Bw(t,e,n,!1,r,i)}function Bw(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=wa(i)?!!i.capture:!!i,a=pm(t);if(a||(t[hm]=a=new Ec(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=dC(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)iC||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Hw(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function dC(){function t(n){return e.call(t.src,t.listener,n)}const e=pC;return t}function qw(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)qw(t,e[s],n,r,i);return null}return n=mm(n),t&&t[Ea]?t.P(e,n,wa(r)?!!r.capture:!!r,i):Bw(t,e,n,!0,r,i)}function Ww(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Ww(t,e[s],n,r,i);else r=wa(r)?!!r.capture:!!r,n=mm(n),t&&t[Ea]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=hd(s,n,r,i),-1<n&&(wc(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=pm(t))&&(e=t.g[e.toString()],t=-1,e&&(t=hd(e,n,r,i)),(n=-1<t?e[t]:null)&&dm(n))}function dm(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Ea])fd(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Hw(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=pm(e))?(fd(n,t),n.h==0&&(n.src=null,e[hm]=null)):wc(t)}}}function Hw(t){return t in jf?jf[t]:jf[t]="on"+t}function pC(t,e){if(t.fa)t=!0;else{e=new Ho(e,this);var n=t.listener,r=t.la||t.src;t.ia&&dm(t),t=n.call(r,e)}return t}function pm(t){return t=t[hm],t instanceof Ec?t:null}var Bf="__closure_events_fn_"+(1e9*Math.random()>>>0);function mm(t){return typeof t=="function"?t:(t[Bf]||(t[Bf]=function(e){return t.handleEvent(e)}),t[Bf])}function Le(){Pr.call(this),this.i=new Ec(this),this.S=this,this.J=null}Fe(Le,Pr);Le.prototype[Ea]=!0;Le.prototype.removeEventListener=function(t,e,n,r){Ww(this,t,e,n,r)};function qe(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Ze(e,t);else if(e instanceof Ze)e.target=e.target||t;else{var i=e;e=new Ze(r,t),Uw(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=al(o,r,!0,e)&&i}if(o=e.g=t,i=al(o,r,!0,e)&&i,i=al(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=al(o,r,!1,e)&&i}Le.prototype.N=function(){if(Le.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)wc(n[r]);delete t.g[e],t.h--}}this.J=null};Le.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Le.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function al(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&fd(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var gm=F.JSON.stringify;class mC{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function gC(){var t=ym;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class yC{constructor(){this.h=this.g=null}add(e,n){const r=Gw.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Gw=new mC(()=>new vC,t=>t.reset());class vC{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function _C(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function wC(t){F.setTimeout(()=>{throw t},0)}let Go,Ko=!1,ym=new yC,Kw=()=>{const t=F.Promise.resolve(void 0);Go=()=>{t.then(EC)}};var EC=()=>{for(var t;t=gC();){try{t.h.call(t.g)}catch(n){wC(n)}var e=Gw;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ko=!1};function Tc(t,e){Le.call(this),this.h=t||1,this.g=e||F,this.j=Je(this.qb,this),this.l=Date.now()}Fe(Tc,Le);k=Tc.prototype;k.ga=!1;k.T=null;k.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),qe(this,"tick"),this.ga&&(vm(this),this.start()))}};k.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function vm(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}k.N=function(){Tc.$.N.call(this),vm(this),delete this.g};function _m(t,e,n){if(typeof t=="function")n&&(t=Je(t,n));else if(t&&typeof t.handleEvent=="function")t=Je(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:F.setTimeout(t,e||0)}function Qw(t){t.g=_m(()=>{t.g=null,t.i&&(t.i=!1,Qw(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class TC extends Pr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Qw(this)}N(){super.N(),this.g&&(F.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qo(t){Pr.call(this),this.h=t,this.g={}}Fe(Qo,Pr);var hv=[];function Yw(t,e,n,r){Array.isArray(n)||(n&&(hv[0]=n.toString()),n=hv);for(var i=0;i<n.length;i++){var s=jw(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Xw(t){fm(t.g,function(e,n){this.g.hasOwnProperty(n)&&dm(e)},t),t.g={}}Qo.prototype.N=function(){Qo.$.N.call(this),Xw(this)};Qo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ic(){this.g=!0}Ic.prototype.Ea=function(){this.g=!1};function IC(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var f=c.split("_");o=2<=f.length&&f[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function AC(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Di(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+PC(t,n)+(r?" "+r:"")})}function SC(t,e){t.info(function(){return"TIMEOUT: "+e})}Ic.prototype.info=function(){};function PC(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return gm(n)}catch{return e}}var fi={},dv=null;function Ac(){return dv=dv||new Le}fi.Ta="serverreachability";function Jw(t){Ze.call(this,fi.Ta,t)}Fe(Jw,Ze);function Yo(t){const e=Ac();qe(e,new Jw(e))}fi.STAT_EVENT="statevent";function Zw(t,e){Ze.call(this,fi.STAT_EVENT,t),this.stat=e}Fe(Zw,Ze);function rt(t){const e=Ac();qe(e,new Zw(e,t))}fi.Ua="timingevent";function eE(t,e){Ze.call(this,fi.Ua,t),this.size=e}Fe(eE,Ze);function Ta(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return F.setTimeout(function(){t()},e)}var Sc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},tE={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function wm(){}wm.prototype.h=null;function pv(t){return t.h||(t.h=t.i())}function nE(){}var Ia={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Em(){Ze.call(this,"d")}Fe(Em,Ze);function Tm(){Ze.call(this,"c")}Fe(Tm,Ze);var dd;function Pc(){}Fe(Pc,wm);Pc.prototype.g=function(){return new XMLHttpRequest};Pc.prototype.i=function(){return{}};dd=new Pc;function Aa(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Qo(this),this.P=kC,t=ld?125:void 0,this.V=new Tc(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new rE}function rE(){this.i=null,this.g="",this.h=!1}var kC=45e3,pd={},Pu={};k=Aa.prototype;k.setTimeout=function(t){this.P=t};function md(t,e,n){t.L=1,t.v=Rc(Nn(e)),t.s=n,t.S=!0,iE(t,null)}function iE(t,e){t.G=Date.now(),Sa(t),t.A=Nn(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),hE(n.i,"t",r),t.C=0,n=t.l.J,t.h=new rE,t.g=bE(t.l,n?e:null,!t.s),0<t.O&&(t.M=new TC(Je(t.Pa,t,t.g),t.O)),Yw(t.U,t.g,"readystatechange",t.nb),e=t.I?zw(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Yo(),IC(t.j,t.u,t.A,t.m,t.W,t.s)}k.nb=function(t){t=t.target;const e=this.M;e&&ln(t)==3?e.l():this.Pa(t)};k.Pa=function(t){try{if(t==this.g)e:{const c=ln(this.g);var e=this.g.Ia();const f=this.g.da();if(!(3>c)&&(c!=3||ld||this.g&&(this.h.h||this.g.ja()||vv(this.g)))){this.J||c!=4||e==7||(e==8||0>=f?Yo(3):Yo(2)),kc(this);var n=this.g.da();this.ca=n;t:if(sE(this)){var r=vv(this.g);t="";var i=r.length,s=ln(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Fr(this),po(this);var o="";break t}this.h.i=new F.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,AC(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Wo(a)){var u=a;break t}}u=null}if(n=u)Di(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,gd(this,n);else{this.i=!1,this.o=3,rt(12),Fr(this),po(this);break e}}this.S?(oE(this,c,o),ld&&this.i&&c==3&&(Yw(this.U,this.V,"tick",this.mb),this.V.start())):(Di(this.j,this.m,o,null),gd(this,o)),c==4&&Fr(this),this.i&&!this.J&&(c==4?CE(this.l,this):(this.i=!1,Sa(this)))}else KC(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,rt(12)):(this.o=0,rt(13)),Fr(this),po(this)}}}catch{}finally{}};function sE(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function oE(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=RC(t,n),i==Pu){e==4&&(t.o=4,rt(14),r=!1),Di(t.j,t.m,null,"[Incomplete Response]");break}else if(i==pd){t.o=4,rt(15),Di(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Di(t.j,t.m,i,null),gd(t,i);sE(t)&&i!=Pu&&i!=pd&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,rt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Rm(e),e.M=!0,rt(11))):(Di(t.j,t.m,n,"[Invalid Chunked Response]"),Fr(t),po(t))}k.mb=function(){if(this.g){var t=ln(this.g),e=this.g.ja();this.C<e.length&&(kc(this),oE(this,t,e),this.i&&t!=4&&Sa(this))}};function RC(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Pu:(n=Number(e.substring(n,r)),isNaN(n)?pd:(r+=1,r+n>e.length?Pu:(e=e.slice(r,r+n),t.C=r+n,e)))}k.cancel=function(){this.J=!0,Fr(this)};function Sa(t){t.Y=Date.now()+t.P,aE(t,t.P)}function aE(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ta(Je(t.lb,t),e)}function kc(t){t.B&&(F.clearTimeout(t.B),t.B=null)}k.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(SC(this.j,this.A),this.L!=2&&(Yo(),rt(17)),Fr(this),this.o=2,po(this)):aE(this,this.Y-t)};function po(t){t.l.H==0||t.J||CE(t.l,t)}function Fr(t){kc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,vm(t.V),Xw(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function gd(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||yd(n.i,t))){if(!t.K&&yd(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Cu(n),Vc(n);else break e;km(n),rt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ta(Je(n.ib,n),6e3));if(1>=mE(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else zr(n,11)}else if((t.K||n.g==t)&&Cu(n),!Wo(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const f=u[4];f!=null&&(n.Ga=f,n.l.info("SVER="+n.Ga));const h=u[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Im(s,s.h),s.h=null))}if(r.F){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,le(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=NE(r,r.J?r.pa:null,r.Y),o.K){gE(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(kc(a),Sa(a)),r.g=o}else kE(r);0<n.j.length&&Nc(n)}else u[0]!="stop"&&u[0]!="close"||zr(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?zr(n,7):Pm(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Yo(4)}catch{}}function CC(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(vc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function xC(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(vc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function lE(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(vc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=xC(t),r=CC(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var uE=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function VC(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Kr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Kr){this.h=t.h,ku(this,t.j),this.s=t.s,this.g=t.g,Ru(this,t.m),this.l=t.l;var e=t.i,n=new Xo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),mv(this,n),this.o=t.o}else t&&(e=String(t).match(uE))?(this.h=!1,ku(this,e[1]||"",!0),this.s=Ys(e[2]||""),this.g=Ys(e[3]||"",!0),Ru(this,e[4]),this.l=Ys(e[5]||"",!0),mv(this,e[6]||"",!0),this.o=Ys(e[7]||"")):(this.h=!1,this.i=new Xo(null,this.h))}Kr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Xs(e,gv,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Xs(e,gv,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Xs(n,n.charAt(0)=="/"?DC:bC,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Xs(n,$C)),t.join("")};function Nn(t){return new Kr(t)}function ku(t,e,n){t.j=n?Ys(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ru(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function mv(t,e,n){e instanceof Xo?(t.i=e,MC(t.i,t.h)):(n||(e=Xs(e,OC)),t.i=new Xo(e,t.h))}function le(t,e,n){t.i.set(e,n)}function Rc(t){return le(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ys(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Xs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,NC),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function NC(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var gv=/[#\/\?@]/g,bC=/[#\?:]/g,DC=/[#\?]/g,OC=/[#\?@]/g,$C=/#/g;function Xo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function kr(t){t.g||(t.g=new Map,t.h=0,t.i&&VC(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}k=Xo.prototype;k.add=function(t,e){kr(this),this.i=null,t=Ss(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function cE(t,e){kr(t),e=Ss(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function fE(t,e){return kr(t),e=Ss(t,e),t.g.has(e)}k.forEach=function(t,e){kr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};k.ta=function(){kr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};k.Z=function(t){kr(this);let e=[];if(typeof t=="string")fE(this,t)&&(e=e.concat(this.g.get(Ss(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};k.set=function(t,e){return kr(this),this.i=null,t=Ss(this,t),fE(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};k.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function hE(t,e,n){cE(t,e),0<n.length&&(t.i=null,t.g.set(Ss(t,e),um(n)),t.h+=n.length)}k.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Ss(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function MC(t,e){e&&!t.j&&(kr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(cE(this,r),hE(this,i,n))},t)),t.j=e}var LC=class{constructor(t,e){this.g=t,this.map=e}};function dE(t){this.l=t||FC,F.PerformanceNavigationTiming?(t=F.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(F.g&&F.g.Ka&&F.g.Ka()&&F.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var FC=10;function pE(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function mE(t){return t.h?1:t.g?t.g.size:0}function yd(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Im(t,e){t.g?t.g.add(e):t.h=e}function gE(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}dE.prototype.cancel=function(){if(this.i=yE(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function yE(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return um(t.i)}var zC=class{stringify(t){return F.JSON.stringify(t,void 0)}parse(t){return F.JSON.parse(t,void 0)}};function UC(){this.g=new zC}function jC(t,e,n){const r=n||"";try{lE(t,function(i,s){let o=i;wa(i)&&(o=gm(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function BC(t,e){const n=new Ic;if(F.Image){const r=new Image;r.onload=ol(ll,n,r,"TestLoadImage: loaded",!0,e),r.onerror=ol(ll,n,r,"TestLoadImage: error",!1,e),r.onabort=ol(ll,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=ol(ll,n,r,"TestLoadImage: timeout",!1,e),F.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ll(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Pa(t){this.l=t.ec||null,this.j=t.ob||!1}Fe(Pa,wm);Pa.prototype.g=function(){return new Cc(this.l,this.j)};Pa.prototype.i=function(t){return function(){return t}}({});function Cc(t,e){Le.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Am,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Fe(Cc,Le);var Am=0;k=Cc.prototype;k.open=function(t,e){if(this.readyState!=Am)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Jo(this)};k.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||F).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};k.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ka(this)),this.readyState=Am};k.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Jo(this)),this.g&&(this.readyState=3,Jo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof F.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;vE(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function vE(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}k.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ka(this):Jo(this),this.readyState==3&&vE(this)}};k.Za=function(t){this.g&&(this.response=this.responseText=t,ka(this))};k.Ya=function(t){this.g&&(this.response=t,ka(this))};k.ka=function(){this.g&&ka(this)};function ka(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Jo(t)}k.setRequestHeader=function(t,e){this.v.append(t,e)};k.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};k.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Jo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Cc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var qC=F.JSON.parse;function Ee(t){Le.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=_E,this.L=this.M=!1}Fe(Ee,Le);var _E="",WC=/^https?$/i,HC=["POST","PUT"];k=Ee.prototype;k.Oa=function(t){this.M=t};k.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():dd.g(),this.C=this.u?pv(this.u):pv(dd),this.g.onreadystatechange=Je(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){yv(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=F.FormData&&t instanceof F.FormData,!(0<=$w(HC,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{TE(this),0<this.B&&((this.L=GC(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Je(this.ua,this)):this.A=_m(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){yv(this,s)}};function GC(t){return us&&typeof t.timeout=="number"&&t.ontimeout!==void 0}k.ua=function(){typeof lm<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,qe(this,"timeout"),this.abort(8))};function yv(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,wE(t),xc(t)}function wE(t){t.F||(t.F=!0,qe(t,"complete"),qe(t,"error"))}k.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,qe(this,"complete"),qe(this,"abort"),xc(this))};k.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),xc(this,!0)),Ee.$.N.call(this)};k.La=function(){this.s||(this.G||this.v||this.l?EE(this):this.kb())};k.kb=function(){EE(this)};function EE(t){if(t.h&&typeof lm<"u"&&(!t.C[1]||ln(t)!=4||t.da()!=2)){if(t.v&&ln(t)==4)_m(t.La,0,t);else if(qe(t,"readystatechange"),ln(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(uE)[1]||null;!i&&F.self&&F.self.location&&(i=F.self.location.protocol.slice(0,-1)),r=!WC.test(i?i.toLowerCase():"")}n=r}if(n)qe(t,"complete"),qe(t,"success");else{t.m=6;try{var s=2<ln(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",wE(t)}}finally{xc(t)}}}}function xc(t,e){if(t.g){TE(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||qe(t,"ready");try{n.onreadystatechange=r}catch{}}}function TE(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(F.clearTimeout(t.A),t.A=null)}k.isActive=function(){return!!this.g};function ln(t){return t.g?t.g.readyState:0}k.da=function(){try{return 2<ln(this)?this.g.status:-1}catch{return-1}};k.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};k.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),qC(e)}};function vv(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case _E:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function KC(t){const e={};t=(t.g&&2<=ln(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Wo(t[r]))continue;var n=_C(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}hC(e,function(r){return r.join(", ")})}k.Ia=function(){return this.m};k.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function IE(t){let e="";return fm(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Sm(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=IE(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):le(t,e,n))}function js(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function AE(t){this.Ga=0,this.j=[],this.l=new Ic,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=js("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=js("baseRetryDelayMs",5e3,t),this.hb=js("retryDelaySeedMs",1e4,t),this.eb=js("forwardChannelMaxRetries",2,t),this.xa=js("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new dE(t&&t.concurrentRequestLimit),this.Ja=new UC,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}k=AE.prototype;k.ra=8;k.H=1;function Pm(t){if(SE(t),t.H==3){var e=t.W++,n=Nn(t.I);if(le(n,"SID",t.K),le(n,"RID",e),le(n,"TYPE","terminate"),Ra(t,n),e=new Aa(t,t.l,e),e.L=2,e.v=Rc(Nn(n)),n=!1,F.navigator&&F.navigator.sendBeacon)try{n=F.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&F.Image&&(new Image().src=e.v,n=!0),n||(e.g=bE(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Sa(e)}VE(t)}function Vc(t){t.g&&(Rm(t),t.g.cancel(),t.g=null)}function SE(t){Vc(t),t.u&&(F.clearTimeout(t.u),t.u=null),Cu(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&F.clearTimeout(t.m),t.m=null)}function Nc(t){if(!pE(t.i)&&!t.m){t.m=!0;var e=t.Na;Go||Kw(),Ko||(Go(),Ko=!0),ym.add(e,t),t.C=0}}function QC(t,e){return mE(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Ta(Je(t.Na,t,e),xE(t,t.C)),t.C++,!0)}k.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Aa(this,this.l,t);let s=this.s;if(this.U&&(s?(s=zw(s),Uw(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=PE(this,i,e),n=Nn(this.I),le(n,"RID",t),le(n,"CVER",22),this.F&&le(n,"X-HTTP-Session-Id",this.F),Ra(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(IE(s)))+"&"+e:this.o&&Sm(n,this.o,s)),Im(this.i,i),this.bb&&le(n,"TYPE","init"),this.P?(le(n,"$req",e),le(n,"SID","null"),i.aa=!0,md(i,n,null)):md(i,n,e),this.H=2}}else this.H==3&&(t?_v(this,t):this.j.length==0||pE(this.i)||_v(this))};function _v(t,e){var n;e?n=e.m:n=t.W++;const r=Nn(t.I);le(r,"SID",t.K),le(r,"RID",n),le(r,"AID",t.V),Ra(t,r),t.o&&t.s&&Sm(r,t.o,t.s),n=new Aa(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=PE(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Im(t.i,n),md(n,r,e)}function Ra(t,e){t.na&&fm(t.na,function(n,r){le(e,r,n)}),t.h&&lE({},function(n,r){le(e,r,n)})}function PE(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Je(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{jC(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function kE(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Go||Kw(),Ko||(Go(),Ko=!0),ym.add(e,t),t.A=0}}function km(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Ta(Je(t.Ma,t),xE(t,t.A)),t.A++,!0)}k.Ma=function(){if(this.u=null,RE(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Ta(Je(this.jb,this),t)}};k.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,rt(10),Vc(this),RE(this))};function Rm(t){t.B!=null&&(F.clearTimeout(t.B),t.B=null)}function RE(t){t.g=new Aa(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Nn(t.wa);le(e,"RID","rpc"),le(e,"SID",t.K),le(e,"AID",t.V),le(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&le(e,"TO",t.qa),le(e,"TYPE","xmlhttp"),Ra(t,e),t.o&&t.s&&Sm(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Rc(Nn(e)),n.s=null,n.S=!0,iE(n,t)}k.ib=function(){this.v!=null&&(this.v=null,Vc(this),km(this),rt(19))};function Cu(t){t.v!=null&&(F.clearTimeout(t.v),t.v=null)}function CE(t,e){var n=null;if(t.g==e){Cu(t),Rm(t),t.g=null;var r=2}else if(yd(t.i,e))n=e.F,gE(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Ac(),qe(r,new eE(r,n)),Nc(t)}else kE(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&QC(t,e)||r==2&&km(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:zr(t,5);break;case 4:zr(t,10);break;case 3:zr(t,6);break;default:zr(t,2)}}}function xE(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function zr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Je(t.pb,t);n||(n=new Kr("//www.google.com/images/cleardot.gif"),F.location&&F.location.protocol=="http"||ku(n,"https"),Rc(n)),BC(n.toString(),r)}else rt(2);t.H=0,t.h&&t.h.za(e),VE(t),SE(t)}k.pb=function(t){t?(this.l.info("Successfully pinged google.com"),rt(2)):(this.l.info("Failed to ping google.com"),rt(1))};function VE(t){if(t.H=0,t.ma=[],t.h){const e=yE(t.i);(e.length!=0||t.j.length!=0)&&(uv(t.ma,e),uv(t.ma,t.j),t.i.i.length=0,um(t.j),t.j.length=0),t.h.ya()}}function NE(t,e,n){var r=n instanceof Kr?Nn(n):new Kr(n);if(r.g!="")e&&(r.g=e+"."+r.g),Ru(r,r.m);else{var i=F.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Kr(null);r&&ku(s,r),e&&(s.g=e),i&&Ru(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&le(r,n,e),le(r,"VER",t.ra),Ra(t,r),r}function bE(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ee(new Pa({ob:!0})):new Ee(t.va),e.Oa(t.J),e}k.isActive=function(){return!!this.h&&this.h.isActive(this)};function DE(){}k=DE.prototype;k.Ba=function(){};k.Aa=function(){};k.za=function(){};k.ya=function(){};k.isActive=function(){return!0};k.Va=function(){};function xu(){if(us&&!(10<=Number(lC)))throw Error("Environmental error: no available transport.")}xu.prototype.g=function(t,e){return new It(t,e)};function It(t,e){Le.call(this),this.g=new AE(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Wo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Wo(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ps(this)}Fe(It,Le);It.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;rt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=NE(t,null,t.Y),Nc(t)};It.prototype.close=function(){Pm(this.g)};It.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=gm(t),t=n);e.j.push(new LC(e.fb++,t)),e.H==3&&Nc(e)};It.prototype.N=function(){this.g.h=null,delete this.j,Pm(this.g),delete this.g,It.$.N.call(this)};function OE(t){Em.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Fe(OE,Em);function $E(){Tm.call(this),this.status=1}Fe($E,Tm);function Ps(t){this.g=t}Fe(Ps,DE);Ps.prototype.Ba=function(){qe(this.g,"a")};Ps.prototype.Aa=function(t){qe(this.g,new OE(t))};Ps.prototype.za=function(t){qe(this.g,new $E)};Ps.prototype.ya=function(){qe(this.g,"b")};function YC(){this.blockSize=-1}function Zt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Fe(Zt,YC);Zt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function qf(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Zt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)qf(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){qf(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){qf(this,r),i=0;break}}this.h=i,this.i+=e};Zt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ne(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var XC={};function Cm(t){return-128<=t&&128>t?sC(t,function(e){return new ne([e|0],0>e?-1:0)}):new ne([t|0],0>t?-1:0)}function un(t){if(isNaN(t)||!isFinite(t))return Wi;if(0>t)return je(un(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=vd;return new ne(e,0)}function ME(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return je(ME(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=un(Math.pow(e,8)),r=Wi,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=un(Math.pow(e,s)),r=r.R(s).add(un(o))):(r=r.R(n),r=r.add(un(o)))}return r}var vd=4294967296,Wi=Cm(0),_d=Cm(1),wv=Cm(16777216);k=ne.prototype;k.ea=function(){if(Dt(this))return-je(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:vd+r)*e,e*=vd}return t};k.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(An(this))return"0";if(Dt(this))return"-"+je(this).toString(t);for(var e=un(Math.pow(t,6)),n=this,r="";;){var i=Nu(n,e).g;n=Vu(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,An(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};k.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function An(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Dt(t){return t.h==-1}k.X=function(t){return t=Vu(this,t),Dt(t)?-1:An(t)?0:1};function je(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ne(n,~t.h).add(_d)}k.abs=function(){return Dt(this)?je(this):this};k.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new ne(n,n[n.length-1]&-2147483648?-1:0)};function Vu(t,e){return t.add(je(e))}k.R=function(t){if(An(this)||An(t))return Wi;if(Dt(this))return Dt(t)?je(this).R(je(t)):je(je(this).R(t));if(Dt(t))return je(this.R(je(t)));if(0>this.X(wv)&&0>t.X(wv))return un(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,ul(n,2*r+2*i),n[2*r+2*i+1]+=s*l,ul(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,ul(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,ul(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ne(n,0)};function ul(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Bs(t,e){this.g=t,this.h=e}function Nu(t,e){if(An(e))throw Error("division by zero");if(An(t))return new Bs(Wi,Wi);if(Dt(t))return e=Nu(je(t),e),new Bs(je(e.g),je(e.h));if(Dt(e))return e=Nu(t,je(e)),new Bs(je(e.g),e.h);if(30<t.g.length){if(Dt(t)||Dt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=_d,r=e;0>=r.X(t);)n=Ev(n),r=Ev(r);var i=gi(n,1),s=gi(r,1);for(r=gi(r,2),n=gi(n,2);!An(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=gi(r,1),n=gi(n,1)}return e=Vu(t,i.R(e)),new Bs(i,e)}for(i=Wi;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=un(n),o=s.R(e);Dt(o)||0<o.X(t);)n-=r,s=un(n),o=s.R(e);An(s)&&(s=_d),i=i.add(s),t=Vu(t,o)}return new Bs(i,t)}k.gb=function(t){return Nu(this,t).h};k.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ne(n,this.h&t.h)};k.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ne(n,this.h|t.h)};k.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ne(n,this.h^t.h)};function Ev(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ne(n,t.h)}function gi(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new ne(i,t.h)}xu.prototype.createWebChannel=xu.prototype.g;It.prototype.send=It.prototype.u;It.prototype.open=It.prototype.m;It.prototype.close=It.prototype.close;Sc.NO_ERROR=0;Sc.TIMEOUT=8;Sc.HTTP_ERROR=6;tE.COMPLETE="complete";nE.EventType=Ia;Ia.OPEN="a";Ia.CLOSE="b";Ia.ERROR="c";Ia.MESSAGE="d";Le.prototype.listen=Le.prototype.O;Ee.prototype.listenOnce=Ee.prototype.P;Ee.prototype.getLastError=Ee.prototype.Sa;Ee.prototype.getLastErrorCode=Ee.prototype.Ia;Ee.prototype.getStatus=Ee.prototype.da;Ee.prototype.getResponseJson=Ee.prototype.Wa;Ee.prototype.getResponseText=Ee.prototype.ja;Ee.prototype.send=Ee.prototype.ha;Ee.prototype.setWithCredentials=Ee.prototype.Oa;Zt.prototype.digest=Zt.prototype.l;Zt.prototype.reset=Zt.prototype.reset;Zt.prototype.update=Zt.prototype.j;ne.prototype.add=ne.prototype.add;ne.prototype.multiply=ne.prototype.R;ne.prototype.modulo=ne.prototype.gb;ne.prototype.compare=ne.prototype.X;ne.prototype.toNumber=ne.prototype.ea;ne.prototype.toString=ne.prototype.toString;ne.prototype.getBits=ne.prototype.D;ne.fromNumber=un;ne.fromString=ME;var JC=function(){return new xu},ZC=function(){return Ac()},Wf=Sc,ex=tE,tx=fi,Tv={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},nx=Pa,cl=nE,rx=Ee,ix=Zt,Hi=ne;const Iv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qe=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Qe.UNAUTHENTICATED=new Qe(null),Qe.GOOGLE_CREDENTIALS=new Qe("google-credentials-uid"),Qe.FIRST_PARTY=new Qe("first-party-uid"),Qe.MOCK_USER=new Qe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ks="10.5.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=new om("@firebase/firestore");function qs(){return ri.logLevel}function b(t,...e){if(ri.logLevel<=W.DEBUG){const n=e.map(xm);ri.debug(`Firestore (${ks}): ${t}`,...n)}}function bn(t,...e){if(ri.logLevel<=W.ERROR){const n=e.map(xm);ri.error(`Firestore (${ks}): ${t}`,...n)}}function cs(t,...e){if(ri.logLevel<=W.WARN){const n=e.map(xm);ri.warn(`Firestore (${ks}): ${t}`,...n)}}function xm(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t="Unexpected state"){const e=`FIRESTORE (${ks}) INTERNAL ASSERTION FAILED: `+t;throw bn(e),new Error(e)}function he(t,e){t||L()}function j(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};let V=class extends ci{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let LE=class{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}},sx=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Qe.UNAUTHENTICATED))}shutdown(){}};class ox{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ax{constructor(e){this.t=e,this.currentUser=Qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Qr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Qr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{b("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(b("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Qr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(b("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(he(typeof r.accessToken=="string"),new LE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return he(e===null||typeof e=="string"),new Qe(e)}}let lx=class{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Qe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}},ux=class{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new lx(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}},cx=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}};class fx{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&b("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,b("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{b("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):b("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(he(typeof n.token=="string"),this.R=n.token,new cx(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hx(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=hx(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Z(t,e){return t<e?-1:t>e?1:0}function fs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let st=class Ul{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new V(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new V(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new V(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ul.fromMillis(Date.now())}static fromDate(e){return Ul.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ul(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Z(this.nanoseconds,e.nanoseconds):Z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new z(e)}static min(){return new z(new st(0,0))}static max(){return new z(new st(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zE=class wd{constructor(e,n,r){n===void 0?n=0:n>e.length&&L(),r===void 0?r=e.length-n:r>e.length-n&&L(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return wd.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof wd?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}},Ie=class jl extends zE{construct(e,n,r){return new jl(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new V(T.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new jl(n)}static emptyPath(){return new jl([])}};const dx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let Xt=class yi extends zE{construct(e,n,r){return new yi(e,n,r)}static isValidIdentifier(e){return dx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yi.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new yi(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new V(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new V(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new V(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new V(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new yi(n)}static emptyPath(){return new yi([])}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let O=class Js{constructor(e){this.path=e}static fromPath(e){return new Js(Ie.fromString(e))}static fromName(e){return new Js(Ie.fromString(e).popFirst(5))}static empty(){return new Js(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Js(new Ie(e.slice()))}};function px(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=z.fromTimestamp(r===1e9?new st(n+1,0):new st(n,r));return new yr(i,O.empty(),e)}function mx(t){return new yr(t.readTime,t.key,-1)}class yr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new yr(z.min(),O.empty(),-1)}static max(){return new yr(z.max(),O.empty(),-1)}}function gx(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=O.comparator(t.documentKey,e.documentKey),n!==0?n:Z(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class vx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ca(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==yx)throw t;b("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&L(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,r)=>{n(e)})}static reject(e){return new A((n,r)=>{r(e)})}static waitFor(e){return new A((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=A.resolve(!1);for(const r of e)n=n.next(i=>i?A.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new A((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new A((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function xa(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Vm._e=-1;function bc(t){return t==null}function bu(t){return t===0&&1/t==-1/0}function _x(t){return typeof t=="number"&&Number.isInteger(t)&&!bu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Av(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function hi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function UE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ce=class Ed{constructor(e,n){this.comparator=e,this.root=n||hr.EMPTY}insert(e,n){return new Ed(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,hr.BLACK,null,null))}remove(e){return new Ed(this.comparator,this.root.remove(e,this.comparator).copy(null,null,hr.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fl(this.root,e,this.comparator,!1)}getReverseIterator(){return new fl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fl(this.root,e,this.comparator,!0)}},fl=class{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},hr=class vn{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??vn.RED,this.left=i??vn.EMPTY,this.right=s??vn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new vn(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return vn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return vn.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,vn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,vn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw L();const e=this.left.check();if(e!==this.right.check())throw L();return e+(this.isRed()?0:1)}};hr.EMPTY=null,hr.RED=!0,hr.BLACK=!1;hr.EMPTY=new class{constructor(){this.size=0}get key(){throw L()}get value(){throw L()}get color(){throw L()}get left(){throw L()}get right(){throw L()}copy(e,n,r,i,s){return this}insert(e,n,r){return new hr(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pt=class Td{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Sv(this.data.getIterator())}getIteratorFrom(e){return new Sv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Td)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Td(this.comparator);return n.data=e,n}},Sv=class{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cn=class Id{constructor(e){this.fields=e,e.sort(Xt.comparator)}static empty(){return new Id([])}unionWith(e){let n=new pt(Xt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Id(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return fs(this.fields,e.fields,(n,r)=>n.isEqual(r))}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jE=class extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let At=class Ad{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new jE("Invalid base64 string: "+s):s}}(e);return new Ad(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ad(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}};At.EMPTY_BYTE_STRING=new At("");const wx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vr(t){if(he(!!t),typeof t=="string"){let e=0;const n=wx.exec(t);if(he(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Se(t.seconds),nanos:Se(t.nanos)}}function Se(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ii(t){return typeof t=="string"?At.fromBase64String(t):At.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function bm(t){const e=t.mapValue.fields.__previous_value__;return Nm(e)?bm(e):e}function Zo(t){const e=vr(t.mapValue.fields.__local_write_time__.timestampValue);return new st(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ex=class{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}},BE=class Sd{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Sd("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Sd&&e.projectId===this.projectId&&e.database===this.database}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function si(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Nm(t)?4:Tx(t)?9007199254740991:10:L()}function gn(t,e){if(t===e)return!0;const n=si(t);if(n!==si(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Zo(t).isEqual(Zo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=vr(i.timestampValue),a=vr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ii(i.bytesValue).isEqual(ii(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Se(i.geoPointValue.latitude)===Se(s.geoPointValue.latitude)&&Se(i.geoPointValue.longitude)===Se(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Se(i.integerValue)===Se(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Se(i.doubleValue),a=Se(s.doubleValue);return o===a?bu(o)===bu(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return fs(t.arrayValue.values||[],e.arrayValue.values||[],gn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Av(o)!==Av(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!gn(o[l],a[l])))return!1;return!0}(t,e);default:return L()}}function ea(t,e){return(t.values||[]).find(n=>gn(n,e))!==void 0}function hs(t,e){if(t===e)return 0;const n=si(t),r=si(e);if(n!==r)return Z(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Z(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Se(s.integerValue||s.doubleValue),l=Se(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Pv(t.timestampValue,e.timestampValue);case 4:return Pv(Zo(t),Zo(e));case 5:return Z(t.stringValue,e.stringValue);case 6:return function(s,o){const a=ii(s),l=ii(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=Z(a[u],l[u]);if(c!==0)return c}return Z(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=Z(Se(s.latitude),Se(o.latitude));return a!==0?a:Z(Se(s.longitude),Se(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=hs(a[u],l[u]);if(c)return c}return Z(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===hl.mapValue&&o===hl.mapValue)return 0;if(s===hl.mapValue)return 1;if(o===hl.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let f=0;f<l.length&&f<c.length;++f){const h=Z(l[f],c[f]);if(h!==0)return h;const p=hs(a[l[f]],u[c[f]]);if(p!==0)return p}return Z(l.length,c.length)}(t.mapValue,e.mapValue);default:throw L()}}function Pv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Z(t,e);const n=vr(t),r=vr(e),i=Z(n.seconds,r.seconds);return i!==0?i:Z(n.nanos,r.nanos)}function ds(t){return Pd(t)}function Pd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=vr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ii(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return O.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Pd(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Pd(n.fields[o])}`;return i+"}"}(t.mapValue):L()}function kv(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function kd(t){return!!t&&"integerValue"in t}function Dm(t){return!!t&&"arrayValue"in t}function Rv(t){return!!t&&"nullValue"in t}function Cv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Bl(t){return!!t&&"mapValue"in t}function mo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return hi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=mo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=mo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Tx(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wt=class Rd{constructor(e){this.value=e}static empty(){return new Rd({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Bl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=mo(n)}setAll(e){let n=Xt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=mo(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Bl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return gn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Bl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){hi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Rd(mo(this.value))}};function qE(t){const e=[];return hi(t.fields,(n,r)=>{const i=new Xt([n]);if(Bl(r)){const s=qE(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new cn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Xe(e,0,z.min(),z.min(),z.min(),Wt.empty(),0)}static newFoundDocument(e,n,r,i){return new Xe(e,1,n,z.min(),r,i,0)}static newNoDocument(e,n){return new Xe(e,2,n,z.min(),z.min(),Wt.empty(),0)}static newUnknownDocument(e,n){return new Xe(e,3,n,z.min(),z.min(),Wt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Xe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Xe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,n){this.position=e,this.inclusive=n}}function xv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=O.comparator(O.fromName(o.referenceValue),n.key):r=hs(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Vv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!gn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,n="asc"){this.field=e,this.dir=n}}function Ix(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{}class Re extends WE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Sx(e,n,r):n==="array-contains"?new Rx(e,r):n==="in"?new Cx(e,r):n==="not-in"?new xx(e,r):n==="array-contains-any"?new Vx(e,r):new Re(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Px(e,r):new kx(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(hs(n,this.value)):n!==null&&si(this.value)===si(n)&&this.matchesComparison(hs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return L()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class en extends WE{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new en(e,n)}matches(e){return HE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function HE(t){return t.op==="and"}function GE(t){return Ax(t)&&HE(t)}function Ax(t){for(const e of t.filters)if(e instanceof en)return!1;return!0}function Cd(t){if(t instanceof Re)return t.field.canonicalString()+t.op.toString()+ds(t.value);if(GE(t))return t.filters.map(e=>Cd(e)).join(",");{const e=t.filters.map(n=>Cd(n)).join(",");return`${t.op}(${e})`}}function KE(t,e){return t instanceof Re?function(r,i){return i instanceof Re&&r.op===i.op&&r.field.isEqual(i.field)&&gn(r.value,i.value)}(t,e):t instanceof en?function(r,i){return i instanceof en&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&KE(o,i.filters[a]),!0):!1}(t,e):void L()}function QE(t){return t instanceof Re?function(n){return`${n.field.canonicalString()} ${n.op} ${ds(n.value)}`}(t):t instanceof en?function(n){return n.op.toString()+" {"+n.getFilters().map(QE).join(" ,")+"}"}(t):"Filter"}class Sx extends Re{constructor(e,n,r){super(e,n,r),this.key=O.fromName(r.referenceValue)}matches(e){const n=O.comparator(e.key,this.key);return this.matchesComparison(n)}}class Px extends Re{constructor(e,n){super(e,"in",n),this.keys=YE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class kx extends Re{constructor(e,n){super(e,"not-in",n),this.keys=YE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function YE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>O.fromName(r.referenceValue))}class Rx extends Re{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Dm(n)&&ea(n.arrayValue,this.value)}}class Cx extends Re{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ea(this.value.arrayValue,n)}}class xx extends Re{constructor(e,n){super(e,"not-in",n)}matches(e){if(ea(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ea(this.value.arrayValue,n)}}class Vx extends Re{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Dm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ea(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nx{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function Nv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Nx(t,e,n,r,i,s,o)}function Om(t){const e=j(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Cd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),bc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ds(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ds(r)).join(",")),e.ce=n}return e.ce}function $m(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Ix(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!KE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Vv(t.startAt,e.startAt)&&Vv(t.endAt,e.endAt)}function xd(t){return O.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rs=class{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}};function bx(t,e,n,r,i,s,o,a){return new Rs(t,e,n,r,i,s,o,a)}function Mm(t){return new Rs(t)}function bv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function XE(t){return t.collectionGroup!==null}function go(t){const e=j(t);if(e.le===null){e.le=[];const n=new Set;for(const s of e.explicitOrderBy)e.le.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new pt(Xt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.le.push(new ta(s,r))}),n.has(Xt.keyField().canonicalString())||e.le.push(new ta(Xt.keyField(),r))}return e.le}function pn(t){const e=j(t);return e.he||(e.he=Dx(e,go(t))),e.he}function Dx(t,e){if(t.limitType==="F")return Nv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ta(i.field,s)});const n=t.endAt?new Du(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Du(t.startAt.position,t.startAt.inclusive):null;return Nv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Vd(t,e){const n=t.filters.concat([e]);return new Rs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Nd(t,e,n){return new Rs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Dc(t,e){return $m(pn(t),pn(e))&&t.limitType===e.limitType}function JE(t){return`${Om(pn(t))}|lt:${t.limitType}`}function vi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>QE(i)).join(", ")}]`),bc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ds(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ds(i)).join(",")),`Target(${r})`}(pn(t))}; limitType=${t.limitType})`}function Oc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):O.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of go(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=xv(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,go(r),i)||r.endAt&&!function(o,a,l){const u=xv(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,go(r),i))}(t,e)}function Ox(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ZE(t){return(e,n)=>{let r=!1;for(const i of go(t)){const s=$x(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function $x(t,e,n){const r=t.field.isKeyField()?O.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?hs(l,u):L()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return L()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){hi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return UE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mx=new Ce(O.comparator);function Dn(){return Mx}const eT=new Ce(O.comparator);function Zs(...t){let e=eT;for(const n of t)e=e.insert(n.key,n);return e}function tT(t){let e=eT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ur(){return yo()}function nT(){return yo()}function yo(){return new Cs(t=>t.toString(),(t,e)=>t.isEqual(e))}const Lx=new Ce(O.comparator),Fx=new pt(O.comparator);function H(...t){let e=Fx;for(const n of t)e=e.add(n);return e}const zx=new pt(Z);function Ux(){return zx}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bu(e)?"-0":e}}function iT(t){return{integerValue:""+t}}function jx(t,e){return _x(e)?iT(e):rT(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $c=class{constructor(){this._=void 0}};function Bx(t,e,n){return t instanceof Ou?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Nm(s)&&(s=bm(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof na?oT(t,e):t instanceof ra?aT(t,e):function(i,s){const o=sT(i,s),a=Dv(o)+Dv(i.Ie);return kd(o)&&kd(i.Ie)?iT(a):rT(i.serializer,a)}(t,e)}function qx(t,e,n){return t instanceof na?oT(t,e):t instanceof ra?aT(t,e):n}function sT(t,e){return t instanceof $u?function(r){return kd(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}let Ou=class extends $c{},na=class extends $c{constructor(e){super(),this.elements=e}};function oT(t,e){const n=lT(e);for(const r of t.elements)n.some(i=>gn(i,r))||n.push(r);return{arrayValue:{values:n}}}let ra=class extends $c{constructor(e){super(),this.elements=e}};function aT(t,e){let n=lT(e);for(const r of t.elements)n=n.filter(i=>!gn(i,r));return{arrayValue:{values:n}}}let $u=class extends $c{constructor(e,n){super(),this.serializer=e,this.Ie=n}};function Dv(t){return Se(t.integerValue||t.doubleValue)}function lT(t){return Dm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Wx(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof na&&i instanceof na||r instanceof ra&&i instanceof ra?fs(r.elements,i.elements,gn):r instanceof $u&&i instanceof $u?gn(r.Ie,i.Ie):r instanceof Ou&&i instanceof Ou}(t.transform,e.transform)}class Hx{constructor(e,n){this.version=e,this.transformResults=n}}let Yr=class ql{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ql}static exists(e){return new ql(void 0,e)}static updateTime(e){return new ql(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}};function Wl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}let Mc=class{};function uT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Lm(t.key,Yr.none()):new Va(t.key,t.data,Yr.none());{const n=t.data,r=Wt.empty();let i=new pt(Xt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Rr(t.key,r,new cn(i.toArray()),Yr.none())}}function Gx(t,e,n){t instanceof Va?function(i,s,o){const a=i.value.clone(),l=$v(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Rr?function(i,s,o){if(!Wl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=$v(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(cT(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function vo(t,e,n,r){return t instanceof Va?function(s,o,a,l){if(!Wl(s.precondition,o))return a;const u=s.value.clone(),c=Mv(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Rr?function(s,o,a,l){if(!Wl(s.precondition,o))return a;const u=Mv(s.fieldTransforms,l,o),c=o.data;return c.setAll(cT(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return Wl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function Kx(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=sT(r.transform,i||null);s!=null&&(n===null&&(n=Wt.empty()),n.set(r.field,s))}return n||null}function Ov(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&fs(r,i,(s,o)=>Wx(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}let Va=class extends Mc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}},Rr=class extends Mc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}};function cT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function $v(t,e,n){const r=new Map;he(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,qx(o,a,n[i]))}return r}function Mv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Bx(s,o,e))}return r}let Lm=class extends Mc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}},Qx=class extends Mc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yx{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Gx(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=vo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=vo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=nT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=uT(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),H())}isEqual(e){return this.batchId===e.batchId&&fs(this.mutations,e.mutations,(n,r)=>Ov(n,r))&&fs(this.baseMutations,e.baseMutations,(n,r)=>Ov(n,r))}}class Fm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){he(e.mutations.length===r.length);let i=function(){return Lx}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Fm(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xx{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jx{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae,Q;function Zx(t){switch(t){default:return L();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function fT(t){if(t===void 0)return bn("GRPC error has no .code"),T.UNKNOWN;switch(t){case Ae.OK:return T.OK;case Ae.CANCELLED:return T.CANCELLED;case Ae.UNKNOWN:return T.UNKNOWN;case Ae.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case Ae.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case Ae.INTERNAL:return T.INTERNAL;case Ae.UNAVAILABLE:return T.UNAVAILABLE;case Ae.UNAUTHENTICATED:return T.UNAUTHENTICATED;case Ae.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case Ae.NOT_FOUND:return T.NOT_FOUND;case Ae.ALREADY_EXISTS:return T.ALREADY_EXISTS;case Ae.PERMISSION_DENIED:return T.PERMISSION_DENIED;case Ae.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case Ae.ABORTED:return T.ABORTED;case Ae.OUT_OF_RANGE:return T.OUT_OF_RANGE;case Ae.UNIMPLEMENTED:return T.UNIMPLEMENTED;case Ae.DATA_LOSS:return T.DATA_LOSS;default:return L()}}(Q=Ae||(Ae={}))[Q.OK=0]="OK",Q[Q.CANCELLED=1]="CANCELLED",Q[Q.UNKNOWN=2]="UNKNOWN",Q[Q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Q[Q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Q[Q.NOT_FOUND=5]="NOT_FOUND",Q[Q.ALREADY_EXISTS=6]="ALREADY_EXISTS",Q[Q.PERMISSION_DENIED=7]="PERMISSION_DENIED",Q[Q.UNAUTHENTICATED=16]="UNAUTHENTICATED",Q[Q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Q[Q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Q[Q.ABORTED=10]="ABORTED",Q[Q.OUT_OF_RANGE=11]="OUT_OF_RANGE",Q[Q.UNIMPLEMENTED=12]="UNIMPLEMENTED",Q[Q.INTERNAL=13]="INTERNAL",Q[Q.UNAVAILABLE=14]="UNAVAILABLE",Q[Q.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e2(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t2=new Hi([4294967295,4294967295],0);function Lv(t){const e=e2().encode(t),n=new ix;return n.update(e),new Uint8Array(n.digest())}function Fv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Hi([n,r],0),new Hi([i,s],0)]}class zm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new eo(`Invalid padding: ${n}`);if(r<0)throw new eo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new eo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new eo(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Hi.fromNumber(this.Te)}de(e,n,r){let i=e.add(n.multiply(Hi.fromNumber(r)));return i.compare(t2)===1&&(i=new Hi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Lv(e),[r,i]=Fv(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new zm(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=Lv(e),[r,i]=Fv(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class eo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Na.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Lc(z.min(),i,new Ce(Z),Dn(),H())}}class Na{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Na(r,n,H(),H(),H())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,n,r,i){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=i}}class hT{constructor(e,n){this.targetId=e,this.fe=n}}class dT{constructor(e,n,r=At.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class zv{constructor(){this.ge=0,this.pe=jv(),this.ye=At.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=H(),n=H(),r=H();return this.pe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:L()}}),new Na(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=jv()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1}Be(){this.Se=!0,this.we=!0}}class n2{constructor(e){this.Le=e,this.ke=new Map,this.qe=Dn(),this.Qe=Uv(),this.Ke=new Ce(Z)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:L()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.fe.count,i=this.Ye(n);if(i){const s=i.target;if(xd(s))if(r===0){const o=new O(s.path);this.We(n,o,Xe.newNoDocument(o,z.min()))}else he(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=ii(r).toUint8Array()}catch(l){if(l instanceof jE)return cs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new zm(o,i,s)}catch(l){return cs(l instanceof eo?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&xd(a.target)){const l=new O(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,Xe.newNoDocument(l,e))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=H();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(e));const i=new Lc(e,n,this.Ke,this.qe,r);return this.qe=Dn(),this.Qe=Uv(),this.Ke=new Ce(Z),i}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new zv,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new pt(Z),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||b("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new zv),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Uv(){return new Ce(O.comparator)}function jv(){return new Ce(O.comparator)}const r2={asc:"ASCENDING",desc:"DESCENDING"},i2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},s2={and:"AND",or:"OR"};let o2=class{constructor(e,n){this.databaseId=e,this.useProto3Json=n}};function bd(t,e){return t.useProto3Json||bc(e)?e:{value:e}}function Mu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function pT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function a2(t,e){return Mu(t,e.toTimestamp())}function mn(t){return he(!!t),z.fromTimestamp(function(n){const r=vr(n);return new st(r.seconds,r.nanos)}(t))}function Um(t,e){return function(r){return new Ie(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function mT(t){const e=Ie.fromString(t);return he(_T(e)),e}function Dd(t,e){return Um(t.databaseId,e.path)}function Hf(t,e){const n=mT(e);if(n.get(1)!==t.databaseId.projectId)throw new V(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new V(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new O(gT(n))}function Od(t,e){return Um(t.databaseId,e)}function l2(t){const e=mT(t);return e.length===4?Ie.emptyPath():gT(e)}function $d(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function gT(t){return he(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Bv(t,e,n){return{name:Dd(t,e),fields:n.value.mapValue.fields}}function u2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:L()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(he(c===void 0||typeof c=="string"),At.fromBase64String(c||"")):(he(c===void 0||c instanceof Uint8Array),At.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?T.UNKNOWN:fT(u.code);return new V(c,u.message||"")}(o);n=new dT(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Hf(t,r.document.name),s=mn(r.document.updateTime),o=r.document.createTime?mn(r.document.createTime):z.min(),a=new Wt({mapValue:{fields:r.document.fields}}),l=Xe.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Hl(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Hf(t,r.document),s=r.readTime?mn(r.readTime):z.min(),o=Xe.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Hl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Hf(t,r.document),s=r.removedTargetIds||[];n=new Hl([],s,i,null)}else{if(!("filter"in e))return L();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Jx(i,s),a=r.targetId;n=new hT(a,o)}}return n}function c2(t,e){let n;if(e instanceof Va)n={update:Bv(t,e.key,e.value)};else if(e instanceof Lm)n={delete:Dd(t,e.key)};else if(e instanceof Rr)n={update:Bv(t,e.key,e.data),updateMask:_2(e.fieldMask)};else{if(!(e instanceof Qx))return L();n={verify:Dd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Ou)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof na)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ra)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof $u)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw L()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:a2(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:L()}(t,e.precondition)),n}function f2(t,e){return t&&t.length>0?(he(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?mn(i.updateTime):mn(s);return o.isEqual(z.min())&&(o=mn(s)),new Hx(o,i.transformResults||[])}(n,e))):[]}function h2(t,e){return{documents:[Od(t,e.path)]}}function d2(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Od(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Od(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return vT(en.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(f){return{field:_i(f.field),direction:g2(f.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=bd(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function p2(t){let e=l2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){he(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(f){const h=yT(f);return h instanceof en&&GE(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(h=>function(y){return new ta(wi(y.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(h))}(n.orderBy));let a=null;n.limit&&(a=function(f){let h;return h=typeof f=="object"?f.value:f,bc(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(f){const h=!!f.before,p=f.values||[];return new Du(p,h)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const h=!f.before,p=f.values||[];return new Du(p,h)}(n.endAt)),bx(e,i,o,s,a,"F",l,u)}function m2(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function yT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=wi(n.unaryFilter.field);return Re.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=wi(n.unaryFilter.field);return Re.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=wi(n.unaryFilter.field);return Re.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=wi(n.unaryFilter.field);return Re.create(o,"!=",{nullValue:"NULL_VALUE"});default:return L()}}(t):t.fieldFilter!==void 0?function(n){return Re.create(wi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return L()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return en.create(n.compositeFilter.filters.map(r=>yT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return L()}}(n.compositeFilter.op))}(t):L()}function g2(t){return r2[t]}function y2(t){return i2[t]}function v2(t){return s2[t]}function _i(t){return{fieldPath:t.canonicalString()}}function wi(t){return Xt.fromServerFormat(t.fieldPath)}function vT(t){return t instanceof Re?function(n){if(n.op==="=="){if(Cv(n.value))return{unaryFilter:{field:_i(n.field),op:"IS_NAN"}};if(Rv(n.value))return{unaryFilter:{field:_i(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Cv(n.value))return{unaryFilter:{field:_i(n.field),op:"IS_NOT_NAN"}};if(Rv(n.value))return{unaryFilter:{field:_i(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_i(n.field),op:y2(n.op),value:n.value}}}(t):t instanceof en?function(n){const r=n.getFilters().map(i=>vT(i));return r.length===1?r[0]:{compositeFilter:{op:v2(n.op),filters:r}}}(t):L()}function _2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function _T(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,n,r,i,s=z.min(),o=z.min(),a=At.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Zn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w2{constructor(e){this.ut=e}}function E2(t){const e=p2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Nd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T2{constructor(){this.on=new I2}addToCollectionParentIndex(e,n){return this.on.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}deleteAllFieldIndexes(e){return A.resolve()}createTargetIndexes(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getIndexType(e,n){return A.resolve(0)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,n){return A.resolve(yr.min())}getMinOffsetFromCollectionGroup(e,n){return A.resolve(yr.min())}updateCollectionGroup(e,n,r){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class I2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new pt(Ie.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new pt(Ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new ps(0)}static Nn(){return new ps(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A2{constructor(){this.changes=new Cs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Xe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?A.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P2{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&vo(r.mutation,i,cn.empty(),st.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,H()).next(()=>r))}getLocalViewOfDocuments(e,n,r=H()){const i=Ur();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Zs();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ur();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,H()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Dn();const o=yo(),a=function(){return yo()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Rr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),vo(c.mutation,u,c.mutation.getFieldMask(),st.now())):o.set(u.key,cn.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var f;return a.set(u,new S2(c,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=yo();let i=new Ce((o,a)=>o-a),s=H();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||cn.empty();c=a.applyToLocalView(u,c),r.set(l,c);const f=(i.get(a.batchId)||H()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,f=nT();c.forEach(h=>{if(!s.has(h)){const p=uT(n.get(h),r.get(h));p!==null&&f.set(h,p),s=s.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return A.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return O.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):XE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):A.resolve(Ur());let a=-1,l=s;return o.next(u=>A.forEach(u,(c,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(c)?A.resolve():this.remoteDocumentCache.getEntry(e,c).next(h=>{l=l.insert(c,h)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,H())).next(c=>({batchId:a,changes:tT(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new O(n)).next(r=>{let i=Zs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Zs();return this.indexManager.getCollectionParents(e,s).next(a=>A.forEach(a,l=>{const u=function(f,h){return new Rs(h,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((f,h)=>{o=o.insert(f,h)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,Xe.newInvalidDocument(c)))});let a=Zs();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&vo(c.mutation,u,cn.empty(),st.now()),Oc(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k2{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return A.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:mn(i.createTime)}}(n)),A.resolve()}getNamedQuery(e,n){return A.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(i){return{name:i.name,query:E2(i.bundledQuery),readTime:mn(i.readTime)}}(n)),A.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R2{constructor(){this.overlays=new Ce(O.comparator),this.lr=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ur();return A.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.lt(e,n,s)}),A.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),A.resolve()}getOverlaysForCollection(e,n,r){const i=Ur(),s=n.length+1,o=new O(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return A.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ce((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Ur(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Ur(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return A.resolve(a)}lt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Xx(n,r));let s=this.lr.get(n);s===void 0&&(s=H(),this.lr.set(n,s)),this.lr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(){this.hr=new pt(be.Pr),this.Ir=new pt(be.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new be(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new be(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new O(new Ie([])),r=new be(n,e),i=new be(n,e+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new O(new Ie([])),r=new be(n,e),i=new be(n,e+1);let s=H();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new be(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class be{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return O.comparator(e.key,n.key)||Z(e.gr,n.gr)}static Tr(e,n){return Z(e.gr,n.gr)||O.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new pt(be.Pr)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Yx(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new be(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Sr(r),s=i<0?0:i;return A.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new be(n,0),i=new be(n,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),A.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new pt(Z);return n.forEach(i=>{const s=new be(i,0),o=new be(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),A.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;O.isDocumentKey(s)||(s=s.child(""));const o=new be(new O(s),0);let a=new pt(Z);return this.yr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.gr)),!0)},o),A.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const i=this.wr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){he(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return A.forEach(n.mutations,i=>{const s=new be(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new be(n,0),i=this.yr.firstAfterOrEqual(r);return A.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x2{constructor(e){this.Cr=e,this.docs=function(){return new Ce(O.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return A.resolve(r?r.document.mutableCopy():Xe.newInvalidDocument(n))}getEntries(e,n){let r=Dn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Xe.newInvalidDocument(i))}),A.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Dn();const o=n.path,a=new O(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||gx(mx(c),r)<=0||(i.has(c.key)||Oc(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return A.resolve(s)}getAllFromCollectionGroup(e,n,r,i){L()}vr(e,n){return A.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new V2(this)}getSize(e){return A.resolve(this.size)}}class V2 extends A2{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this._r.addEntry(e,i)):this._r.removeEntry(r)}),A.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N2{constructor(e){this.persistence=e,this.Fr=new Cs(n=>Om(n),$m),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.Mr=0,this.Or=new jm,this.targetCount=0,this.Nr=ps.On()}forEachTarget(e,n){return this.Fr.forEach((r,i)=>n(i)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),A.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new ps(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.kn(n),A.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),A.waitFor(s).next(()=>i)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return A.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),A.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),A.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),A.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return A.resolve(r)}containsKey(e,n){return A.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b2{constructor(e,n){this.Br={},this.overlays={},this.Lr=new Vm(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new N2(this),this.indexManager=new T2,this.remoteDocumentCache=function(i){return new x2(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new w2(n),this.Kr=new k2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new R2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new C2(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){b("MemoryPersistence","Starting transaction:",e);const i=new D2(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(e,n){return A.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class D2 extends vx{constructor(e){super(),this.currentSequenceNumber=e}}class Bm{constructor(e){this.persistence=e,this.Gr=new jm,this.zr=null}static jr(e){return new Bm(e)}get Hr(){if(this.zr)return this.zr;throw L()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),A.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),A.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Hr,r=>{const i=O.fromPath(r);return this.Jr(e,i).next(s=>{s||n.removeEntry(i,z.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return A.or([()=>A.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=i}static Qi(e,n){let r=H(),i=H();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new qm(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $2{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.zi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ji(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new O2;return this.Hi(e,n,o).next(a=>{if(s.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>s.result)}Ji(e,n,r,i){return r.documentReadCount<this.Ui?(qs()<=W.DEBUG&&b("QueryEngine","SDK will not create cache indexes for query:",vi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),A.resolve()):(qs()<=W.DEBUG&&b("QueryEngine","Query:",vi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?(qs()<=W.DEBUG&&b("QueryEngine","The SDK decides to create cache indexes for query:",vi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,pn(n))):A.resolve())}zi(e,n){if(bv(n))return A.resolve(null);let r=pn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Nd(n,null,"F"),r=pn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=H(...s);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Yi(n,a);return this.Zi(n,u,o,l.readTime)?this.zi(e,Nd(n,null,"F")):this.Xi(e,u,n,l)}))})))}ji(e,n,r,i){return bv(n)||i.isEqual(z.min())?A.resolve(null):this.Gi.getDocuments(e,r).next(s=>{const o=this.Yi(n,s);return this.Zi(n,o,r,i)?A.resolve(null):(qs()<=W.DEBUG&&b("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),vi(n)),this.Xi(e,o,n,px(i,-1)).next(a=>a))})}Yi(e,n){let r=new pt(ZE(e));return n.forEach((i,s)=>{Oc(e,s)&&(r=r.add(s))}),r}Zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Hi(e,n,r){return qs()<=W.DEBUG&&b("QueryEngine","Using full collection scan to execute query:",vi(n)),this.Gi.getDocumentsMatchingQuery(e,n,yr.min(),r)}Xi(e,n,r,i){return this.Gi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M2{constructor(e,n,r,i){this.persistence=e,this.es=n,this.serializer=i,this.ts=new Ce(Z),this.ns=new Cs(s=>Om(s),$m),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new P2(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function L2(t,e,n,r){return new M2(t,e,n,r)}async function wT(t,e){const n=j(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=H();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({_s:u,removedBatchIds:o,addedBatchIds:a}))})})}function F2(t,e){const n=j(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const f=u.batch,h=f.keys();let p=A.resolve();return h.forEach(y=>{p=p.next(()=>c.getEntry(l,y)).next(v=>{const E=u.docVersions.get(y);he(E!==null),v.version.compareTo(E)<0&&(f.applyToRemoteDocument(v,u),v.isValidDocument()&&(v.setReadTime(u.commitVersion),c.addEntry(v)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=H();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function ET(t){const e=j(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function z2(t,e){const n=j(t),r=e.snapshotVersion;let i=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});i=n.ts;const a=[];e.targetChanges.forEach((c,f)=>{const h=i.get(f);if(!h)return;a.push(n.qr.removeMatchingKeys(s,c.removedDocuments,f).next(()=>n.qr.addMatchingKeys(s,c.addedDocuments,f)));let p=h.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?p=p.withResumeToken(At.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(f,p),function(v,E,m){return v.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(h,p,c)&&a.push(n.qr.updateTargetData(s,p))});let l=Dn(),u=H();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(U2(s,o,e.documentUpdates).next(c=>{l=c.us,u=c.cs})),!r.isEqual(z.min())){const c=n.qr.getLastRemoteSnapshotVersion(s).next(f=>n.qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return A.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.ts=i,s))}function U2(t,e,n){let r=H(),i=H();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Dn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(z.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):b("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{us:o,cs:i}})}function j2(t,e){const n=j(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function B2(t,e){const n=j(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.qr.getTargetData(r,e).next(s=>s?(i=s,A.resolve(i)):n.qr.allocateTargetId(r).next(o=>(i=new Zn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function Md(t,e,n){const r=j(t),i=r.ts.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!xa(o))throw o;b("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(i.target)}function qv(t,e,n){const r=j(t);let i=z.min(),s=H();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const f=j(l),h=f.ns.get(c);return h!==void 0?A.resolve(f.ts.get(h)):f.qr.getTargetData(u,c)}(r,o,pn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,n?i:z.min(),n?s:H())).next(a=>(q2(r,Ox(e),a),{documents:a,ls:s})))}function q2(t,e,n){let r=t.rs.get(e)||z.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.rs.set(e,r)}class Wv{constructor(){this.activeTargetIds=Ux()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class W2{constructor(){this.eo=new Wv,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new Wv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{ro(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){b("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){b("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dl=null;function Gf(){return dl===null?dl=function(){return 268435456+Math.round(2147483648*Math.random())}():dl++,"0x"+dl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K2{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ke="WebChannelConnection";class Q2 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${i}/databases/${s}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get yo(){return!1}wo(n,r,i,s,o){const a=Gf(),l=this.So(n,r);b("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(u,s,o),this.Do(n,l,u,i).then(c=>(b("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw cs("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}Co(n,r,i,s,o,a){return this.wo(n,r,i,s,o)}bo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ks}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}So(n,r){const i=G2[n];return`${this.mo}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,r,i){const s=Gf();return new Promise((o,a)=>{const l=new rx;l.setWithCredentials(!0),l.listenOnce(ex.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Wf.NO_ERROR:const c=l.getResponseJson();b(Ke,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Wf.TIMEOUT:b(Ke,`RPC '${e}' ${s} timed out`),a(new V(T.DEADLINE_EXCEEDED,"Request time out"));break;case Wf.HTTP_ERROR:const f=l.getStatus();if(b(Ke,`RPC '${e}' ${s} failed with status:`,f,"response text:",l.getResponseText()),f>0){let h=l.getResponseJson();Array.isArray(h)&&(h=h[0]);const p=h==null?void 0:h.error;if(p&&p.status&&p.message){const y=function(E){const m=E.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(m)>=0?m:T.UNKNOWN}(p.status);a(new V(y,p.message))}else a(new V(T.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new V(T.UNAVAILABLE,"Connection failed."));break;default:L()}}finally{b(Ke,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);b(Ke,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}vo(e,n,r){const i=Gf(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=JC(),a=ZC(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new nx({})),this.bo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");b(Ke,`Creating RPC '${e}' stream ${i}: ${c}`,l);const f=o.createWebChannel(c,l);let h=!1,p=!1;const y=new K2({co:E=>{p?b(Ke,`Not sending because RPC '${e}' stream ${i} is closed:`,E):(h||(b(Ke,`Opening RPC '${e}' stream ${i} transport.`),f.open(),h=!0),b(Ke,`RPC '${e}' stream ${i} sending:`,E),f.send(E))},lo:()=>f.close()}),v=(E,m,d)=>{E.listen(m,g=>{try{d(g)}catch(_){setTimeout(()=>{throw _},0)}})};return v(f,cl.EventType.OPEN,()=>{p||b(Ke,`RPC '${e}' stream ${i} transport opened.`)}),v(f,cl.EventType.CLOSE,()=>{p||(p=!0,b(Ke,`RPC '${e}' stream ${i} transport closed`),y.Ro())}),v(f,cl.EventType.ERROR,E=>{p||(p=!0,cs(Ke,`RPC '${e}' stream ${i} transport errored:`,E),y.Ro(new V(T.UNAVAILABLE,"The operation could not be completed")))}),v(f,cl.EventType.MESSAGE,E=>{var m;if(!p){const d=E.data[0];he(!!d);const g=d,_=g.error||((m=g[0])===null||m===void 0?void 0:m.error);if(_){b(Ke,`RPC '${e}' stream ${i} received error:`,_);const w=_.status;let S=function(K){const U=Ae[K];if(U!==void 0)return fT(U)}(w),I=_.message;S===void 0&&(S=T.INTERNAL,I="Unknown error status: "+w+" with message "+_.message),p=!0,y.Ro(new V(S,I)),f.close()}else b(Ke,`RPC '${e}' stream ${i} received:`,d),y.Vo(d)}}),v(a,tx.STAT_EVENT,E=>{E.stat===Tv.PROXY?b(Ke,`RPC '${e}' stream ${i} detected buffering proxy`):E.stat===Tv.NOPROXY&&b(Ke,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.Ao()},0),y}}function Kf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fc(t){return new o2(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(e,n,r=1e3,i=1.5,s=6e4){this.si=e,this.timerId=n,this.Fo=r,this.Mo=i,this.xo=s,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&b("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{constructor(e,n,r,i,s,o,a,l){this.si=e,this.Ko=r,this.$o=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new TT(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(bn(n.toString()),bn("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Uo===n&&this.s_(r,i)},r=>{e(()=>{const i=new V(T.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(i)})})}s_(e,n){const r=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{r(()=>this.o_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return b("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(b("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Y2 extends IT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=u2(this.serializer,e),r=function(s){if(!("targetChange"in s))return z.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?z.min():o.readTime?mn(o.readTime):z.min()}(e);return this.listener.a_(n,r)}u_(e){const n={};n.database=$d(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=xd(l)?{documents:h2(s,l)}:{query:d2(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=pT(s,o.resumeToken);const u=bd(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(z.min())>0){a.readTime=Mu(s,o.snapshotVersion.toTimestamp());const u=bd(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=m2(this.serializer,e);r&&(n.labels=r),this.e_(n)}c_(e){const n={};n.database=$d(this.serializer),n.removeTarget=e,this.e_(n)}}class X2 extends IT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(he(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=f2(e.writeResults,e.commitTime),r=mn(e.commitTime);return this.listener.I_(r,n)}return he(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=$d(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>c2(this.serializer,r))};this.e_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let J2=class extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new V(T.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.wo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new V(T.UNKNOWN,i.toString())})}Co(e,n,r,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new V(T.UNKNOWN,s.toString())})}terminate(){this.d_=!0}};class Z2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(bn(n),this.f_=!1):b("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eV{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=s,this.F_.ro(o=>{r.enqueueAndForget(async()=>{di(this)&&(b("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=j(l);u.C_.add(4),await ba(u),u.M_.set("Unknown"),u.C_.delete(4),await zc(u)}(this))})}),this.M_=new Z2(r,i)}}async function zc(t){if(di(t))for(const e of t.v_)await e(!0)}async function ba(t){for(const e of t.v_)await e(!1)}function AT(t,e){const n=j(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),Gm(n)?Hm(n):xs(n).Ho()&&Wm(n,e))}function ST(t,e){const n=j(t),r=xs(n);n.D_.delete(e),r.Ho()&&PT(n,e),n.D_.size===0&&(r.Ho()?r.Zo():di(n)&&n.M_.set("Unknown"))}function Wm(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(z.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}xs(t).u_(e)}function PT(t,e){t.x_.Oe(e),xs(t).c_(e)}function Hm(t){t.x_=new n2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),xs(t).start(),t.M_.g_()}function Gm(t){return di(t)&&!xs(t).jo()&&t.D_.size>0}function di(t){return j(t).C_.size===0}function kT(t){t.x_=void 0}async function tV(t){t.D_.forEach((e,n)=>{Wm(t,e)})}async function nV(t,e){kT(t),Gm(t)?(t.M_.w_(e),Hm(t)):t.M_.set("Unknown")}async function rV(t,e,n){if(t.M_.set("Online"),e instanceof dT&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.D_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.D_.delete(a),i.x_.removeTarget(a))}(t,e)}catch(r){b("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Lu(t,r)}else if(e instanceof Hl?t.x_.$e(e):e instanceof hT?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(z.min()))try{const r=await ET(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.x_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.D_.get(u);c&&s.D_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.D_.get(l);if(!c)return;s.D_.set(l,c.withResumeToken(At.EMPTY_BYTE_STRING,c.snapshotVersion)),PT(s,l);const f=new Zn(c.target,l,u,c.sequenceNumber);Wm(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){b("RemoteStore","Failed to raise snapshot:",r),await Lu(t,r)}}async function Lu(t,e,n){if(!xa(e))throw e;t.C_.add(1),await ba(t),t.M_.set("Offline"),n||(n=()=>ET(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{b("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await zc(t)})}function RT(t,e){return e().catch(n=>Lu(t,n,e))}async function Uc(t){const e=j(t),n=_r(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;iV(e);)try{const i=await j2(e.localStore,r);if(i===null){e.b_.length===0&&n.Zo();break}r=i.batchId,sV(e,i)}catch(i){await Lu(e,i)}CT(e)&&xT(e)}function iV(t){return di(t)&&t.b_.length<10}function sV(t,e){t.b_.push(e);const n=_r(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function CT(t){return di(t)&&!_r(t).jo()&&t.b_.length>0}function xT(t){_r(t).start()}async function oV(t){_r(t).E_()}async function aV(t){const e=_r(t);for(const n of t.b_)e.P_(n.mutations)}async function lV(t,e,n){const r=t.b_.shift(),i=Fm.from(r,e,n);await RT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Uc(t)}async function uV(t,e){e&&_r(t).h_&&await async function(r,i){if(function(o){return Zx(o)&&o!==T.ABORTED}(i.code)){const s=r.b_.shift();_r(r).Yo(),await RT(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Uc(r)}}(t,e),CT(t)&&xT(t)}async function Gv(t,e){const n=j(t);n.asyncQueue.verifyOperationInProgress(),b("RemoteStore","RemoteStore received new credentials");const r=di(n);n.C_.add(3),await ba(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await zc(n)}async function cV(t,e){const n=j(t);e?(n.C_.delete(2),await zc(n)):e||(n.C_.add(2),await ba(n),n.M_.set("Unknown"))}function xs(t){return t.O_||(t.O_=function(n,r,i){const s=j(n);return s.A_(),new Y2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:tV.bind(null,t),Io:nV.bind(null,t),a_:rV.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),Gm(t)?Hm(t):t.M_.set("Unknown")):(await t.O_.stop(),kT(t))})),t.O_}function _r(t){return t.N_||(t.N_=function(n,r,i){const s=j(n);return s.A_(),new X2(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:oV.bind(null,t),Io:uV.bind(null,t),T_:aV.bind(null,t),I_:lV.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await Uc(t)):(await t.N_.stop(),t.b_.length>0&&(b("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Qr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Km(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qm(t,e){if(bn("AsyncQueue",`${e}: ${t}`),xa(t))return new V(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||O.comparator(n.key,r.key):(n,r)=>O.comparator(n.key,r.key),this.keyedMap=Zs(),this.sortedSet=new Ce(this.comparator)}static emptySet(e){return new Gi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Gi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Gi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{constructor(){this.B_=new Ce(O.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):L():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ms{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ms(e,n,Gi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Dc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fV{constructor(){this.k_=void 0,this.listeners=[]}}class hV{constructor(){this.queries=new Cs(e=>JE(e),Dc),this.onlineState="Unknown",this.q_=new Set}}async function dV(t,e){const n=j(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new fV),i)try{s.k_=await n.onListen(r)}catch(o){const a=Qm(o,`Initialization of query '${vi(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Q_(n.onlineState),s.k_&&e.K_(s.k_)&&Ym(n)}async function pV(t,e){const n=j(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function mV(t,e){const n=j(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.K_(i)&&(r=!0);o.k_=i}}r&&Ym(n)}function gV(t,e,n){const r=j(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Ym(t){t.q_.forEach(e=>{e.next()})}class yV{constructor(e,n,r){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ms(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=ms.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(e){this.key=e}}class NT{constructor(e){this.key=e}}class vV{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=H(),this.mutatedKeys=H(),this._a=ZE(e),this.aa=new Gi(this._a)}get ua(){return this.ia}ca(e,n){const r=n?n.la:new Kv,i=n?n.aa:this.aa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,f)=>{const h=i.get(c),p=Oc(this.query,f)?f:null,y=!!h&&this.mutatedKeys.has(h.key),v=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let E=!1;h&&p?h.data.isEqual(p.data)?y!==v&&(r.track({type:3,doc:p}),E=!0):this.ha(h,p)||(r.track({type:2,doc:p}),E=!0,(l&&this._a(p,l)>0||u&&this._a(p,u)<0)&&(a=!0)):!h&&p?(r.track({type:0,doc:p}),E=!0):h&&!p&&(r.track({type:1,doc:h}),E=!0,(l||u)&&(a=!0)),E&&(p?(o=o.add(p),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{aa:o,la:r,Zi:a,mutatedKeys:s}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const s=e.la.L_();s.sort((u,c)=>function(h,p){const y=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L()}};return y(h)-y(p)}(u.type,c.type)||this._a(u.doc,c.doc)),this.Pa(r);const o=n?this.Ia():[],a=this.oa.size===0&&this.current?1:0,l=a!==this.sa;return this.sa=a,s.length!==0||l?{snapshot:new ms(this.query,e.aa,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:o}:{Ta:o}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new Kv,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=H(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return e.forEach(r=>{this.oa.has(r)||n.push(new NT(r))}),this.oa.forEach(r=>{e.has(r)||n.push(new VT(r))}),n}da(e){this.ia=e.ls,this.oa=H();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return ms.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class _V{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class wV{constructor(e){this.key=e,this.Ra=!1}}class EV{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new Cs(a=>JE(a),Dc),this.fa=new Map,this.ga=new Set,this.pa=new Ce(O.comparator),this.ya=new Map,this.wa=new jm,this.Sa={},this.ba=new Map,this.Da=ps.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function TV(t,e){const n=NV(t);let r,i;const s=n.ma.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Aa();else{const o=await B2(n.localStore,pn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await IV(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&AT(n.remoteStore,o)}return i}async function IV(t,e,n,r,i){t.va=(f,h,p)=>async function(v,E,m,d){let g=E.view.ca(m);g.Zi&&(g=await qv(v.localStore,E.query,!1).then(({documents:S})=>E.view.ca(S,g)));const _=d&&d.targetChanges.get(E.targetId),w=E.view.applyChanges(g,v.isPrimaryClient,_);return Yv(v,E.targetId,w.Ta),w.snapshot}(t,f,h,p);const s=await qv(t.localStore,e,!0),o=new vV(e,s.ls),a=o.ca(s.documents),l=Na.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);Yv(t,n,u.Ta);const c=new _V(e,n,o);return t.ma.set(e,c),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),u.snapshot}async function AV(t,e){const n=j(t),r=n.ma.get(e),i=n.fa.get(r.targetId);if(i.length>1)return n.fa.set(r.targetId,i.filter(s=>!Dc(s,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Md(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),ST(n.remoteStore,r.targetId),Ld(n,r.targetId)}).catch(Ca)):(Ld(n,r.targetId),await Md(n.localStore,r.targetId,!0))}async function SV(t,e,n){const r=bV(t);try{const i=await function(o,a){const l=j(o),u=st.now(),c=a.reduce((p,y)=>p.add(y.key),H());let f,h;return l.persistence.runTransaction("Locally write mutations","readwrite",p=>{let y=Dn(),v=H();return l.ss.getEntries(p,c).next(E=>{y=E,y.forEach((m,d)=>{d.isValidDocument()||(v=v.add(m))})}).next(()=>l.localDocuments.getOverlayedDocuments(p,y)).next(E=>{f=E;const m=[];for(const d of a){const g=Kx(d,f.get(d.key).overlayedDocument);g!=null&&m.push(new Rr(d.key,g,qE(g.value.mapValue),Yr.exists(!0)))}return l.mutationQueue.addMutationBatch(p,u,m,a)}).next(E=>{h=E;const m=E.applyToLocalDocumentSet(f,v);return l.documentOverlayCache.saveOverlays(p,E.batchId,m)})}).then(()=>({batchId:h.batchId,changes:tT(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Sa[o.currentUser.toKey()];u||(u=new Ce(Z)),u=u.insert(a,l),o.Sa[o.currentUser.toKey()]=u}(r,i.batchId,n),await Da(r,i.changes),await Uc(r.remoteStore)}catch(i){const s=Qm(i,"Failed to persist write");n.reject(s)}}async function bT(t,e){const n=j(t);try{const r=await z2(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.ya.get(s);o&&(he(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ra=!0:i.modifiedDocuments.size>0?he(o.Ra):i.removedDocuments.size>0&&(he(o.Ra),o.Ra=!1))}),await Da(n,r,e)}catch(r){await Ca(r)}}function Qv(t,e,n){const r=j(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ma.forEach((s,o)=>{const a=o.view.Q_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=j(o);l.onlineState=a;let u=!1;l.queries.forEach((c,f)=>{for(const h of f.listeners)h.Q_(a)&&(u=!0)}),u&&Ym(l)}(r.eventManager,e),i.length&&r.Va.a_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function PV(t,e,n){const r=j(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ya.get(e),s=i&&i.key;if(s){let o=new Ce(O.comparator);o=o.insert(s,Xe.newNoDocument(s,z.min()));const a=H().add(s),l=new Lc(z.min(),new Map,new Ce(Z),o,a);await bT(r,l),r.pa=r.pa.remove(s),r.ya.delete(e),Xm(r)}else await Md(r.localStore,e,!1).then(()=>Ld(r,e,n)).catch(Ca)}async function kV(t,e){const n=j(t),r=e.batch.batchId;try{const i=await F2(n.localStore,e);OT(n,r,null),DT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Da(n,i)}catch(i){await Ca(i)}}async function RV(t,e,n){const r=j(t);try{const i=await function(o,a){const l=j(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(f=>(he(f!==null),c=f.keys(),l.mutationQueue.removeMutationBatch(u,f))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);OT(r,e,n),DT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Da(r,i)}catch(i){await Ca(i)}}function DT(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function OT(t,e,n){const r=j(t);let i=r.Sa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Sa[r.currentUser.toKey()]=i}}function Ld(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.fa.get(e))t.ma.delete(r),n&&t.Va.Fa(r,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(r=>{t.wa.containsKey(r)||$T(t,r)})}function $T(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(ST(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),Xm(t))}function Yv(t,e,n){for(const r of n)r instanceof VT?(t.wa.addReference(r.key,e),CV(t,r)):r instanceof NT?(b("SyncEngine","Document no longer in limbo: "+r.key),t.wa.removeReference(r.key,e),t.wa.containsKey(r.key)||$T(t,r.key)):L()}function CV(t,e){const n=e.key,r=n.path.canonicalString();t.pa.get(n)||t.ga.has(r)||(b("SyncEngine","New document in limbo: "+n),t.ga.add(r),Xm(t))}function Xm(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new O(Ie.fromString(e)),r=t.Da.next();t.ya.set(r,new wV(n)),t.pa=t.pa.insert(n,r),AT(t.remoteStore,new Zn(pn(Mm(n.path)),r,"TargetPurposeLimboResolution",Vm._e))}}async function Da(t,e,n){const r=j(t),i=[],s=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,l)=>{o.push(r.va(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=qm.Qi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Va.a_(i),await async function(l,u){const c=j(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>A.forEach(u,h=>A.forEach(h.ki,p=>c.persistence.referenceDelegate.addReference(f,h.targetId,p)).next(()=>A.forEach(h.qi,p=>c.persistence.referenceDelegate.removeReference(f,h.targetId,p)))))}catch(f){if(!xa(f))throw f;b("LocalStore","Failed to update sequence numbers: "+f)}for(const f of u){const h=f.targetId;if(!f.fromCache){const p=c.ts.get(h),y=p.snapshotVersion,v=p.withLastLimboFreeSnapshotVersion(y);c.ts=c.ts.insert(h,v)}}}(r.localStore,s))}async function xV(t,e){const n=j(t);if(!n.currentUser.isEqual(e)){b("SyncEngine","User change. New user:",e.toKey());const r=await wT(n.localStore,e);n.currentUser=e,function(s,o){s.ba.forEach(a=>{a.forEach(l=>{l.reject(new V(T.CANCELLED,o))})}),s.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Da(n,r._s)}}function VV(t,e){const n=j(t),r=n.ya.get(e);if(r&&r.Ra)return H().add(r.key);{let i=H();const s=n.fa.get(e);if(!s)return i;for(const o of s){const a=n.ma.get(o);i=i.unionWith(a.view.ua)}return i}}function NV(t){const e=j(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=bT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=VV.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=PV.bind(null,e),e.Va.a_=mV.bind(null,e.eventManager),e.Va.Fa=gV.bind(null,e.eventManager),e}function bV(t){const e=j(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=kV.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=RV.bind(null,e),e}class Xv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Fc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return L2(this.persistence,new $2,e.initialUser,this.serializer)}createPersistence(e){return new b2(Bm.jr,this.serializer)}createSharedClientState(e){return new W2}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class DV{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Qv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=xV.bind(null,this.syncEngine),await cV(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new hV}()}createDatastore(e){const n=Fc(e.databaseInfo.databaseId),r=function(s){return new Q2(s)}(e.databaseInfo);return function(s,o,a,l){return new J2(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new eV(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Qv(this.syncEngine,n,0),function(){return Hv.D()?new Hv:new H2}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const f=new EV(i,s,o,a,l,u);return c&&(f.Ca=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=j(n);b("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await ba(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OV{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):bn("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $V{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Qe.UNAUTHENTICATED,this.clientId=FE.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{b("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(b("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new V(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Qr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Qm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Qf(t,e){t.asyncQueue.verifyOperationInProgress(),b("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await wT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Jv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await LV(t);b("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Gv(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Gv(e.remoteStore,s)),t._onlineComponents=e}function MV(t){return t.name==="FirebaseError"?t.code===T.FAILED_PRECONDITION||t.code===T.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function LV(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){b("FirestoreClient","Using user provided OfflineComponentProvider");try{await Qf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!MV(n))throw n;cs("Error using user provided cache. Falling back to memory cache: "+n),await Qf(t,new Xv)}}else b("FirestoreClient","Using default OfflineComponentProvider"),await Qf(t,new Xv);return t._offlineComponents}async function MT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(b("FirestoreClient","Using user provided OnlineComponentProvider"),await Jv(t,t._uninitializedComponentsProvider._online)):(b("FirestoreClient","Using default OnlineComponentProvider"),await Jv(t,new DV))),t._onlineComponents}function FV(t){return MT(t).then(e=>e.syncEngine)}async function Zv(t){const e=await MT(t),n=e.eventManager;return n.onListen=TV.bind(null,e.syncEngine),n.onUnlisten=AV.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FT(t,e,n){if(!n)throw new V(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function zV(t,e,n,r){if(e===!0&&r===!0)throw new V(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function t_(t){if(!O.isDocumentKey(t))throw new V(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function n_(t){if(O.isDocumentKey(t))throw new V(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function jc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":L()}function dr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new V(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=jc(t);throw new V(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let r_=class{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new V(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new V(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}zV("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=LT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new V(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new V(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new V(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}};class Bc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new r_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new V(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new V(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new r_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new sx;switch(r.type){case"firstParty":return new ux(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new V(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=e_.get(n);r&&(b("ComponentProvider","Removing Datastore"),e_.delete(n),r.terminate())}(this),Promise.resolve()}}function UV(t,e,n,r={}){var i;const s=(t=dr(t,Bc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&cs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Qe.MOCK_USER;else{a=Mk(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new V(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Qe(u)}t._authCredentials=new ox(new LE(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oa=class zT{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new zT(this.firestore,e,this._query)}},Mt=class UT{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ki(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new UT(this.firestore,e,this._key)}},Ki=class jT extends Oa{constructor(e,n,r){super(e,n,Mm(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Mt(this.firestore,null,new O(e))}withConverter(e){return new jT(this.firestore,e,this._path)}};function BT(t,e,...n){if(t=tt(t),FT("collection","path",e),t instanceof Bc){const r=Ie.fromString(e,...n);return n_(r),new Ki(t,null,r)}{if(!(t instanceof Mt||t instanceof Ki))throw new V(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return n_(r),new Ki(t.firestore,null,r)}}function Fd(t,e,...n){if(t=tt(t),arguments.length===1&&(e=FE.newId()),FT("doc","path",e),t instanceof Bc){const r=Ie.fromString(e,...n);return t_(r),new Mt(t,null,new O(r))}{if(!(t instanceof Mt||t instanceof Ki))throw new V(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return t_(r),new Mt(t.firestore,t instanceof Ki?t.converter:null,new O(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jV{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new TT(this,"async_queue_retry"),this.iu=()=>{const n=Kf();n&&b("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=Kf();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=Kf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new Qr;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!xa(e))throw e;b("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw bn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(e,n,r){this.su(),this.ru.indexOf(e)>-1&&(n=0);const i=Km.createAndSchedule(this,e,n,r,s=>this.au(s));return this.Xa.push(i),i}su(){this.eu&&L()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}function i_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}let gs=class extends Bc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new jV}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||WT(this),this._firestoreClient.terminate()}};function BV(t,e){const n=typeof t=="object"?t:zR(),r=typeof t=="string"?t:e||"(default)",i=MR(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Ok("firestore");s&&UV(i,...s)}return i}function qT(t){return t._firestoreClient||WT(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function WT(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new Ex(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,LT(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new $V(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jm=class zd{constructor(e){this._byteString=e}static fromBase64String(e){try{return new zd(At.fromBase64String(e))}catch(n){throw new V(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new zd(At.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qc=class{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new V(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zm=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eg=class{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new V(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new V(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Z(this._lat,e._lat)||Z(this._long,e._long)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qV=/^__.*__$/;class WV{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Rr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Va(e,this.data,n,this.fieldTransforms)}}let HT=class{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Rr(e,this.data,this.fieldMask,n,this.fieldTransforms)}};function GT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L()}}let HV=class KT{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new KT(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:r,du:!1});return i.Au(e),i}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:r,du:!1});return i.Pu(),i}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return Fu(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(GT(this.Iu)&&qV.test(e))throw this.mu('Document fields cannot begin and end with "__"')}},GV=class{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Fc(e)}pu(e,n,r,i=!1){return new HV({Iu:e,methodName:n,gu:r,path:Xt.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}};function tg(t){const e=t._freezeSettings(),n=Fc(t._databaseId);return new GV(t._databaseId,!!e.ignoreUndefinedProperties,n)}function KV(t,e,n,r,i,s={}){const o=t.pu(s.merge||s.mergeFields?2:0,e,n,i);ng("Data must be an object, but it was:",o,r);const a=XT(r,o);let l,u;if(s.merge)l=new cn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const f of s.mergeFields){const h=Ud(e,f,n);if(!o.contains(h))throw new V(T.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);ZT(c,h)||c.push(h)}l=new cn(c),u=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,u=o.fieldTransforms;return new WV(new Wt(a),l,u)}let QT=class YT extends Zm{_toFieldTransform(e){if(e.Iu!==2)throw e.Iu===1?e.mu(`${this._methodName}() can only appear at the top level of your update data`):e.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof YT}};function QV(t,e,n,r){const i=t.pu(1,e,n);ng("Data must be an object, but it was:",i,r);const s=[],o=Wt.empty();hi(r,(l,u)=>{const c=rg(e,l,n);u=tt(u);const f=i.Ru(c);if(u instanceof QT)s.push(c);else{const h=$a(u,f);h!=null&&(s.push(c),o.set(c,h))}});const a=new cn(s);return new HT(o,a,i.fieldTransforms)}function YV(t,e,n,r,i,s){const o=t.pu(1,e,n),a=[Ud(e,r,n)],l=[i];if(s.length%2!=0)throw new V(T.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<s.length;h+=2)a.push(Ud(e,s[h])),l.push(s[h+1]);const u=[],c=Wt.empty();for(let h=a.length-1;h>=0;--h)if(!ZT(u,a[h])){const p=a[h];let y=l[h];y=tt(y);const v=o.Ru(p);if(y instanceof QT)u.push(p);else{const E=$a(y,v);E!=null&&(u.push(p),c.set(p,E))}}const f=new cn(u);return new HT(c,f,o.fieldTransforms)}function XV(t,e,n,r=!1){return $a(n,t.pu(r?4:3,e))}function $a(t,e){if(JT(t=tt(t)))return ng("Unsupported field value:",e,t),XT(t,e);if(t instanceof Zm)return function(r,i){if(!GT(i.Iu))throw i.mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=$a(a,i.Vu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=tt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return jx(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=st.fromDate(r);return{timestampValue:Mu(i.serializer,s)}}if(r instanceof st){const s=new st(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Mu(i.serializer,s)}}if(r instanceof eg)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Jm)return{bytesValue:pT(i.serializer,r._byteString)};if(r instanceof Mt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Um(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.mu(`Unsupported field value: ${jc(r)}`)}(t,e)}function XT(t,e){const n={};return UE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):hi(t,(r,i)=>{const s=$a(i,e.Eu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function JT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof st||t instanceof eg||t instanceof Jm||t instanceof Mt||t instanceof Zm)}function ng(t,e,n){if(!JT(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=jc(n);throw r==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+r)}}function Ud(t,e,n){if((e=tt(e))instanceof qc)return e._internalPath;if(typeof e=="string")return rg(t,e);throw Fu("Field path arguments must be of type string or ",t,!1,void 0,n)}const JV=new RegExp("[~\\*/\\[\\]]");function rg(t,e,n){if(e.search(JV)>=0)throw Fu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new qc(...e.split("."))._internalPath}catch{throw Fu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Fu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new V(T.INVALID_ARGUMENT,a+t+l)}function ZT(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ZV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ig("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ZV extends eI{data(){return super.data()}}function ig(t,e){return typeof e=="string"?rg(t,e):e instanceof qc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eN(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new V(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class sg{}class tI extends sg{}function tN(t,e,...n){let r=[];e instanceof sg&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof ag).length,a=s.filter(l=>l instanceof og).length;if(o>1||o>0&&a>0)throw new V(T.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class og extends tI{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new og(e,n,r)}_apply(e){const n=this._parse(e);return nI(e._query,n),new Oa(e.firestore,e.converter,Vd(e._query,n))}_parse(e){const n=tg(e.firestore);return function(s,o,a,l,u,c,f){let h;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new V(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){o_(f,c);const p=[];for(const y of f)p.push(s_(l,s,y));h={arrayValue:{values:p}}}else h=s_(l,s,f)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||o_(f,c),h=XV(a,o,f,c==="in"||c==="not-in");return Re.create(u,c,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class ag extends sg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ag(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:en.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)nI(o,l),o=Vd(o,l)}(e._query,n),new Oa(e.firestore,e.converter,Vd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class lg extends tI{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new lg(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new V(T.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new V(T.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ta(s,o)}(e._query,this._field,this._direction);return new Oa(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Rs(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function nN(t,e="asc"){const n=e,r=ig("orderBy",t);return lg._create(r,n)}function s_(t,e,n){if(typeof(n=tt(n))=="string"){if(n==="")throw new V(T.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!XE(e)&&n.indexOf("/")!==-1)throw new V(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ie.fromString(n));if(!O.isDocumentKey(r))throw new V(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return kv(t,new O(r))}if(n instanceof Mt)return kv(t,n._key);throw new V(T.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${jc(n)}.`)}function o_(t,e){if(!Array.isArray(t)||t.length===0)throw new V(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function nI(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new V(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new V(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class rN{convertValue(e,n="none"){switch(si(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ii(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw L()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return hi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new eg(Se(e.latitude),Se(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=bm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Zo(e));default:return null}}convertTimestamp(e){const n=vr(e);return new st(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ie.fromString(e);he(_T(r));const i=new BE(r.get(1),r.get(3)),s=new O(r.popFirst(5));return i.isEqual(n)||bn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iN(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class rI extends eI{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Gl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ig("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Gl extends rI{data(e={}){return super.data(e)}}class sN{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new to(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Gl(this._firestore,this._userDataWriter,r.key,r,new to(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new V(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Gl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new to(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Gl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new to(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:oN(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function oN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L()}}class iI extends rN{constructor(e){super(),this.firestore=e}convertBytes(e){return new Jm(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Mt(this.firestore,null,n)}}function aN(t,e,n,...r){t=dr(t,Mt);const i=dr(t.firestore,gs),s=tg(i);let o;return o=typeof(e=tt(e))=="string"||e instanceof qc?YV(s,"updateDoc",t._key,e,n,r):QV(s,"updateDoc",t._key,e),ug(i,[o.toMutation(t._key,Yr.exists(!0))])}function lN(t){return ug(dr(t.firestore,gs),[new Lm(t._key,Yr.none())])}function uN(t,e){const n=dr(t.firestore,gs),r=Fd(t),i=iN(t.converter,e);return ug(n,[KV(tg(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Yr.exists(!1))]).then(()=>r)}function cN(t,...e){var n,r,i;t=tt(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||i_(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(i_(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let l,u,c;if(t instanceof Mt)u=dr(t.firestore,gs),c=Mm(t._key.path),l={next:f=>{e[o]&&e[o](fN(u,t,f))},error:e[o+1],complete:e[o+2]};else{const f=dr(t,Oa);u=dr(f.firestore,gs),c=f._query;const h=new iI(u);l={next:p=>{e[o]&&e[o](new sN(u,h,f,p))},error:e[o+1],complete:e[o+2]},eN(t._query)}return function(h,p,y,v){const E=new OV(v),m=new yV(p,E,y);return h.asyncQueue.enqueueAndForget(async()=>dV(await Zv(h),m)),()=>{E.Na(),h.asyncQueue.enqueueAndForget(async()=>pV(await Zv(h),m))}}(qT(u),c,a,l)}function ug(t,e){return function(r,i){const s=new Qr;return r.asyncQueue.enqueueAndForget(async()=>SV(await FV(r),i,s)),s.promise}(qT(t),e)}function fN(t,e,n){const r=n.docs.get(e._key),i=new iI(t);return new rI(t,i,e._key,r,new to(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){ks=i})(Nw),Bo(new ls("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new gs(new ax(r.getProvider("auth-internal")),new fx(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new V(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new BE(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),fr(Iv,"4.3.2",e),fr(Iv,"4.3.2","esm2017")})();const hN={apiKey:"AIzaSyCIt0neSRoIsfhvXTQ5o9T9yX1rLKSk2jc",authDomain:"react-to-do-list-484d0.firebaseapp.com",projectId:"react-to-do-list-484d0",storageBucket:"react-to-do-list-484d0.appspot.com",messagingSenderId:"989453431340",appId:"1:989453431340:web:aad8413f0daa6d65ba5789"},dN=bw(hN),Kl=BV(dN);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}xt.UNAUTHENTICATED=new xt(null),xt.GOOGLE_CREDENTIALS=new xt("google-credentials-uid"),xt.FIRST_PARTY=new xt("first-party-uid"),xt.MOCK_USER=new xt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vs="10.5.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys=new om("@firebase/firestore");function zu(t,...e){if(ys.logLevel<=W.DEBUG){const n=e.map(cg);ys.debug(`Firestore (${Vs}): ${t}`,...n)}}function sI(t,...e){if(ys.logLevel<=W.ERROR){const n=e.map(cg);ys.error(`Firestore (${Vs}): ${t}`,...n)}}function pN(t,...e){if(ys.logLevel<=W.WARN){const n=e.map(cg);ys.warn(`Firestore (${Vs}): ${t}`,...n)}}function cg(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(t="Unexpected state"){const e=`FIRESTORE (${Vs}) INTERNAL ASSERTION FAILED: `+t;throw sI(e),new Error(e)}function Uu(t,e){t||$e()}function mN(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_="ok",gN="cancelled",_o="unknown",ue="invalid-argument",yN="deadline-exceeded",vN="not-found",_N="permission-denied",jd="unauthenticated",wN="resource-exhausted",vs="failed-precondition",EN="aborted",TN="out-of-range",IN="unimplemented",AN="internal",SN="unavailable";class X extends ci{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class kN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(xt.UNAUTHENTICATED))}shutdown(){}}class RN{constructor(e){this.auth=null,e.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(Uu(typeof e.accessToken=="string"),new PN(e.accessToken,new xt(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class CN{constructor(e,n,r){this.t=e,this.i=n,this.o=r,this.type="FirstParty",this.user=xt.FIRST_PARTY,this.u=new Map}l(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.l();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class xN{constructor(e,n,r){this.t=e,this.i=n,this.o=r}getToken(){return Promise.resolve(new CN(this.t,this.i,this.o))}start(e,n){e.enqueueRetryable(()=>n(xt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class VN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class NN{constructor(e){this.h=e,this.appCheck=null,e.onInit(n=>{this.appCheck=n})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(Uu(typeof e.token=="string"),new VN(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class ju{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ju("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ju&&e.projectId===this.projectId&&e.database===this.database}}class ia{constructor(e,n,r){n===void 0?n=0:n>e.length&&$e(),r===void 0?r=e.length-n:r>e.length-n&&$e(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ia.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ia?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class bt extends ia{construct(e,n,r){return new bt(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new X(ue,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new bt(n)}static emptyPath(){return new bt([])}}const DN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ht extends ia{construct(e,n,r){return new Ht(e,n,r)}static isValidIdentifier(e){return DN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ht.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ht(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new X(ue,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new X(ue,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new X(ue,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new X(ue,"Unterminated ` in path: "+e);return new Ht(n)}static emptyPath(){return new Ht([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e){this.path=e}static fromPath(e){return new Oi(bt.fromString(e))}static fromName(e){return new Oi(bt.fromString(e).popFirst(5))}static empty(){return new Oi(bt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&bt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return bt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Oi(new bt(e.slice()))}}function fg(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":$e()}function ON(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new X(ue,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=fg(t);throw new X(ue,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pl=null;function $N(){return pl===null?pl=function(){return 268435456+Math.round(2147483648*Math.random())}():pl++,"0x"+pl.toString(16)}function Bu(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var l_,Y;function u_(t){if(t===void 0)return sI("RPC_ERROR","HTTP error has no status"),_o;switch(t){case 200:return a_;case 400:return vs;case 401:return jd;case 403:return _N;case 404:return vN;case 409:return EN;case 416:return TN;case 429:return wN;case 499:return gN;case 500:return _o;case 501:return IN;case 503:return SN;case 504:return yN;default:return t>=200&&t<300?a_:t>=400&&t<500?vs:t>=500&&t<600?AN:_o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Y=l_||(l_={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";class LN extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.m=r+"://"+n.host,this.A=`projects/${i}/databases/${s}`,this.T=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get P(){return!1}R(n,r,i,s,o){const a=$N(),l=this.I(n,r);zu("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.A,"x-goog-request-params":this.T};return this.V(u,s,o),this.p(n,l,u,i).then(c=>(zu("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw pN("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}g(n,r,i,s,o,a){return this.R(n,r,i,s,o)}V(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Vs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}I(n,r){const i=MN[n];return`${this.m}/v1/${r}:${i}`}}{constructor(e,n){super(e),this.F=n}v(e,n){throw new Error("Not supported by FetchConnection")}async p(e,n,r,i){var s;const o=JSON.stringify(i);let a;try{a=await this.F(n,{method:"POST",headers:r,body:o})}catch(l){const u=l;throw new X(u_(u.status),"Request failed with error: "+u.statusText)}if(!a.ok){let l=await a.json();Array.isArray(l)&&(l=l[0]);const u=(s=l==null?void 0:l.error)===null||s===void 0?void 0:s.message;throw new X(u_(a.status),`Request failed with error: ${u??a.statusText}`)}return a.json()}}function sa(t,e){return t<e?-1:t>e?1:0}function aI(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Wc(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FN extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new FN("Invalid base64 string: "+s):s}}(e);return new On(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new On(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return sa(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}On.EMPTY_BYTE_STRING=new On("");const zN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Bd(t){if(Uu(!!t),typeof t=="string"){let e=0;const n=zN.exec(t);if(Uu(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:rn(t.seconds),nanos:rn(t.nanos)}}function rn(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function f_(t){return typeof t=="string"?On.fromBase64String(t):On.fromUint8Array(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new X(ue,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new X(ue,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new X(ue,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new X(ue,"Timestamp seconds out of range: "+e)}static now(){return Pn.fromMillis(Date.now())}static fromDate(e){return Pn.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Pn(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?sa(this.nanoseconds,e.nanoseconds):sa(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UN(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function h_(t){const e=Bd(t.mapValue.fields.__local_write_time__.timestampValue);return new Pn(e.seconds,e.nanos)}function d_(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?UN(t)?4:function(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(t)?9007199254740991:10:$e()}function qd(t,e){if(t===e)return!0;const n=d_(t);if(n!==d_(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return h_(t).isEqual(h_(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Bd(i.timestampValue),a=Bd(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return f_(i.bytesValue).isEqual(f_(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return rn(i.geoPointValue.latitude)===rn(s.geoPointValue.latitude)&&rn(i.geoPointValue.longitude)===rn(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return rn(i.integerValue)===rn(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=rn(i.doubleValue),a=rn(s.doubleValue);return o===a?Bu(o)===Bu(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return aI(t.arrayValue.values||[],e.arrayValue.values||[],qd);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(c_(o)!==c_(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!qd(o[l],a[l])))return!1;return!0}(t,e);default:return $e()}}function Yf(t){return!!t&&"mapValue"in t}function wo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Wc(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=wo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=wo(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e,n){this.comparator=e,this.root=n||Ue.EMPTY}insert(e,n){return new qu(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ue.BLACK,null,null))}remove(e){return new qu(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ue.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ml(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ml(this.root,e,this.comparator,!1)}getReverseIterator(){return new ml(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ml(this.root,e,this.comparator,!0)}}class ml{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ue{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ue.RED,this.left=i??Ue.EMPTY,this.right=s??Ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ue(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ue.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ue.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw $e();const e=this.left.check();if(e!==this.right.check())throw $e();return e+(this.isRed()?0:1)}}Ue.EMPTY=null,Ue.RED=!0,Ue.BLACK=!1;Ue.EMPTY=new class{constructor(){this.size=0}get key(){throw $e()}get value(){throw $e()}get color(){throw $e()}get left(){throw $e()}get right(){throw $e()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ue(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e){this.comparator=e,this.data=new qu(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new p_(this.data.getIterator())}getIteratorFrom(e){return new p_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Wu)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Wu(this.comparator);return n.data=e,n}}class p_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e){this.fields=e,e.sort(Ht.comparator)}static empty(){return new oa([])}unionWith(e){let n=new Wu(Ht.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new oa(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return aI(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e){this.value=e}static empty(){return new aa({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Yf(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=wo(n)}setAll(e){let n=Ht.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=wo(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Yf(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return qd(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Yf(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Wc(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new aa(wo(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jN{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.S=null,this.N=null,this.O=null,this.startAt,this.endAt}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BN(t,e){return function(r){return typeof r=="number"&&Number.isInteger(r)&&!Bu(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}(e)?function(r){return{integerValue:""+r}}(e):function(r,i){if(r.useProto3Json){if(isNaN(i))return{doubleValue:"NaN"};if(i===1/0)return{doubleValue:"Infinity"};if(i===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bu(i)?"-0":i}}(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(){this._=void 0}}class qN extends Hc{}class WN extends Hc{constructor(e){super(),this.elements=e}}class HN extends Hc{constructor(e){super(),this.elements=e}}class GN extends Hc{constructor(e,n){super(),this.serializer=e,this.q=n}}class Eo{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Eo}static exists(e){return new Eo(void 0,e)}static updateTime(e){return new Eo(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class Gc{}class KN extends Gc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class lI extends Gc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}class QN extends Gc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class YN extends Gc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}class XN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Wd(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function JN(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ZN(t,e){return Wd(t,e.toTimestamp())}function uI(t,e){return function(r){return new bt(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function Hd(t,e){return uI(t.databaseId,e.path)}function eb(t){return new bt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function m_(t,e,n){return{name:Hd(t,e),fields:n.value.mapValue.fields}}function tb(t,e){let n;if(e instanceof KN)n={update:m_(t,e.key,e.value)};else if(e instanceof QN)n={delete:Hd(t,e.key)};else if(e instanceof lI)n={update:m_(t,e.key,e.data),updateMask:nb(e.fieldMask)};else{if(!(e instanceof YN))return $e();n={verify:Hd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof qN)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof WN)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof HN)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof GN)return{fieldPath:o.field.canonicalString(),increment:a.q};throw $e()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:ZN(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:$e()}(t,e.precondition)),n}function nb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hg(t){return new XN(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.J=!1}Y(){if(this.J)throw new X(vs,"The client has already been terminated.")}R(e,n,r){return this.Y(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.R(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===jd&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new X(_o,i.toString())})}g(e,n,r,i){return this.Y(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.g(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===jd&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new X(_o,s.toString())})}terminate(){this.J=!0}}async function ib(t,e){const n=mN(t),r=eb(n.serializer)+"/documents",i={writes:e.map(s=>tb(n.serializer,s))};await n.R("Commit",r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To=new Map;function sb(t){if(t._terminated)throw new X(vs,"The client has already been terminated.");if(!To.has(t)){zu("ComponentProvider","Initializing Datastore");const e=function(s){return new LN(s,fetch.bind(null))}(function(s,o,a,l){return new bN(s,o,a,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,oI(l.experimentalLongPollingOptions),l.useFetchStreams)}(t._databaseId,t.app.options.appId||"",t._persistenceKey,t._freezeSettings())),n=hg(t._databaseId),r=function(s,o,a,l){return new rb(s,o,a,l)}(t._authCredentials,t._appCheckCredentials,e,n);To.set(t,r)}return To.get(t)}class g_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new X(ue,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new X(ue,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(s,o,a,l){if(o===!0&&l===!0)throw new X(ue,`${s} and ${a} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=oI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new X(ue,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new X(ue,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new X(ue,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ob{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new g_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new X(vs,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new X(vs,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new g_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new kN;switch(r.type){case"firstParty":return new xN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new X(ue,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=To.get(n);r&&(zu("ComponentProvider","Removing Datastore"),To.delete(n),r.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new dg(this.firestore,e,this._query)}}class Ns{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pg(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ns(this.firestore,e,this._key)}}class pg extends dg{constructor(e,n,r){super(e,n,function(s){return new jN(s)}(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ns(this.firestore,null,new Oi(e))}withConverter(e){return new pg(this.firestore,e,this._path)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e){this._byteString=e}static fromBase64String(e){try{return new la(On.fromBase64String(e))}catch(n){throw new X(ue,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new la(On.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new X(ue,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ht(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new X(ue,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new X(ue,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return sa(this._lat,e._lat)||sa(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ab=/^__.*__$/;class fI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new lI(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function hI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $e()}}class yg{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.X(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get tt(){return this.settings.tt}et(e){return new yg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}rt(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.et({path:r,nt:!1});return i.it(e),i}st(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.et({path:r,nt:!1});return i.X(),i}ot(e){return this.et({path:void 0,nt:!0})}ut(e){return Hu(e,this.settings.methodName,this.settings._t||!1,this.path,this.settings.ct)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}X(){if(this.path)for(let e=0;e<this.path.length;e++)this.it(this.path.get(e))}it(e){if(e.length===0)throw this.ut("Document fields must not be empty");if(hI(this.tt)&&ab.test(e))throw this.ut('Document fields cannot begin and end with "__"')}}class lb{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||hg(e)}lt(e,n,r,i=!1){return new yg({tt:e,methodName:n,ct:r,path:Ht.emptyPath(),nt:!1,_t:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ub(t){const e=t._freezeSettings(),n=hg(t._databaseId);return new lb(t._databaseId,!!e.ignoreUndefinedProperties,n)}class Kc extends gg{_toFieldTransform(e){if(e.tt!==2)throw e.tt===1?e.ut(`${this._methodName}() can only appear at the top level of your update data`):e.ut(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Kc}}function cb(t,e,n,r){const i=t.lt(1,e,n);pI("Data must be an object, but it was:",i,r);const s=[],o=aa.empty();Wc(r,(l,u)=>{const c=mI(e,l,n);u=tt(u);const f=i.st(c);if(u instanceof Kc)s.push(c);else{const h=Qc(u,f);h!=null&&(s.push(c),o.set(c,h))}});const a=new oa(s);return new fI(o,a,i.fieldTransforms)}function fb(t,e,n,r,i,s){const o=t.lt(1,e,n),a=[y_(e,r,n)],l=[i];if(s.length%2!=0)throw new X(ue,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<s.length;h+=2)a.push(y_(e,s[h])),l.push(s[h+1]);const u=[],c=aa.empty();for(let h=a.length-1;h>=0;--h)if(!pb(u,a[h])){const p=a[h];let y=l[h];y=tt(y);const v=o.st(p);if(y instanceof Kc)u.push(p);else{const E=Qc(y,v);E!=null&&(u.push(p),c.set(p,E))}}const f=new oa(u);return new fI(c,f,o.fieldTransforms)}function Qc(t,e){if(dI(t=tt(t)))return pI("Unsupported field value:",e,t),hb(t,e);if(t instanceof gg)return function(r,i){if(!hI(i.tt))throw i.ut(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.ut(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.nt&&e.tt!==4)throw e.ut("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Qc(a,i.ot(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=tt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return BN(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Pn.fromDate(r);return{timestampValue:Wd(i.serializer,s)}}if(r instanceof Pn){const s=new Pn(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Wd(i.serializer,s)}}if(r instanceof cI)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof la)return{bytesValue:JN(i.serializer,r._byteString)};if(r instanceof Ns){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.ut(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:uI(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.ut(`Unsupported field value: ${fg(r)}`)}(t,e)}function hb(t,e){const n={};return function(i){for(const s in i)if(Object.prototype.hasOwnProperty.call(i,s))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Wc(t,(r,i)=>{const s=Qc(i,e.rt(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function dI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Pn||t instanceof cI||t instanceof la||t instanceof Ns||t instanceof gg)}function pI(t,e,n){if(!dI(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=fg(n);throw r==="an object"?e.ut(t+" a custom object"):e.ut(t+" "+r)}}function y_(t,e,n){if((e=tt(e))instanceof mg)return e._internalPath;if(typeof e=="string")return mI(t,e);throw Hu("Field path arguments must be of type string or ",t,!1,void 0,n)}const db=new RegExp("[~\\*/\\[\\]]");function mI(t,e,n){if(e.search(db)>=0)throw Hu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new mg(...e.split("."))._internalPath}catch{throw Hu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Hu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new X(ue,a+t+l)}function pb(t,e){return t.some(n=>n.isEqual(e))}function mb(t,e,n,...r){const i=ub((t=ON(t,Ns)).firestore);let s;return s=typeof(e=tt(e))=="string"||e instanceof mg?fb(i,"updateDoc",t._key,e,n,r):cb(i,"updateDoc",t._key,e),ib(sb(t.firestore),[s.toMutation(t._key,Eo.exists(!0))])}(function(){(function(n){Vs=n})(`${Nw}_lite`),Bo(new ls("firestore/lite",(e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new ob(new RN(e.getProvider("auth-internal")),new NN(e.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new X(ue,'"projectId" not provided in firebase.initializeApp.');return new ju(a.options.projectId,l)}(i,n),i);return r&&s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),fr("firestore-lite","4.3.2",""),fr("firestore-lite","4.3.2","esm2017")})();const gb=zn.form`
    position : relative;
    width: 80%;
    margin : 0 auto;
`,yb=zn.input`
    width : 100%;
    border : 0;
    border-bottom : 1px solid #B799FF;
    color : #B799FF;
    box-sizing :border-box;
    &:focus {
        outline : none;
    }
    &::placeholder {
        color : #d6d6d6;
    }
`,vb=zn.button`
    position : absolute;
    right:0;
    bottom :0;
    border : 1px solid #B799FF;
    background : #B799FF;
    color : #fff;
    cursor : pointer;
`;function _b(){const[t,e]=kn.useState(""),[n]=kn.useState(null),r=s=>{const o=s.currentTarget.value;e(o)},i=async s=>{if(s.preventDefault(),!t){alert("할 일을 입력해주세요!");return}try{const o=await uN(BT(Kl,"todo"),{todo:t,status:!1,createdAt:Date.now()});e(""),await mb(o,{id:o.id})}catch(o){console.log(o),n(o)}finally{}};return re.jsx(re.Fragment,{children:re.jsxs(gb,{onSubmit:i,children:[re.jsx(yb,{onChange:r,value:t,type:"text",placeholder:"할 일을 입력해주세요."}),re.jsx(vb,{type:"submit",children:"+"})]})})}function v_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function C(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?v_(Object(n),!0).forEach(function(r){Ne(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Gu(t){"@babel/helpers - typeof";return Gu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Gu(t)}function wb(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function __(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Eb(t,e,n){return e&&__(t.prototype,e),n&&__(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Ne(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function vg(t,e){return Ib(t)||Sb(t,e)||gI(t,e)||kb()}function Ma(t){return Tb(t)||Ab(t)||gI(t)||Pb()}function Tb(t){if(Array.isArray(t))return Gd(t)}function Ib(t){if(Array.isArray(t))return t}function Ab(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Sb(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function gI(t,e){if(t){if(typeof t=="string")return Gd(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Gd(t,e)}}function Gd(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Pb(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function kb(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var w_=function(){},_g={},yI={},vI=null,_I={mark:w_,measure:w_};try{typeof window<"u"&&(_g=window),typeof document<"u"&&(yI=document),typeof MutationObserver<"u"&&(vI=MutationObserver),typeof performance<"u"&&(_I=performance)}catch{}var Rb=_g.navigator||{},E_=Rb.userAgent,T_=E_===void 0?"":E_,wr=_g,fe=yI,I_=vI,gl=_I;wr.document;var Un=!!fe.documentElement&&!!fe.head&&typeof fe.addEventListener=="function"&&typeof fe.createElement=="function",wI=~T_.indexOf("MSIE")||~T_.indexOf("Trident/"),yl,vl,_l,wl,El,$n="___FONT_AWESOME___",Kd=16,EI="fa",TI="svg-inline--fa",oi="data-fa-i2svg",Qd="data-fa-pseudo-element",Cb="data-fa-pseudo-element-pending",wg="data-prefix",Eg="data-icon",A_="fontawesome-i2svg",xb="async",Vb=["HTML","HEAD","STYLE","SCRIPT"],II=function(){try{return!0}catch{return!1}}(),ae="classic",we="sharp",Tg=[ae,we];function La(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[ae]}})}var ua=La((yl={},Ne(yl,ae,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),Ne(yl,we,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),yl)),ca=La((vl={},Ne(vl,ae,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Ne(vl,we,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),vl)),fa=La((_l={},Ne(_l,ae,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Ne(_l,we,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),_l)),Nb=La((wl={},Ne(wl,ae,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Ne(wl,we,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),wl)),bb=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,AI="fa-layers-text",Db=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ob=La((El={},Ne(El,ae,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Ne(El,we,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),El)),SI=[1,2,3,4,5,6,7,8,9,10],$b=SI.concat([11,12,13,14,15,16,17,18,19,20]),Mb=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],jr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ha=new Set;Object.keys(ca[ae]).map(ha.add.bind(ha));Object.keys(ca[we]).map(ha.add.bind(ha));var Lb=[].concat(Tg,Ma(ha),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",jr.GROUP,jr.SWAP_OPACITY,jr.PRIMARY,jr.SECONDARY]).concat(SI.map(function(t){return"".concat(t,"x")})).concat($b.map(function(t){return"w-".concat(t)})),Io=wr.FontAwesomeConfig||{};function Fb(t){var e=fe.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function zb(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(fe&&typeof fe.querySelector=="function"){var Ub=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ub.forEach(function(t){var e=vg(t,2),n=e[0],r=e[1],i=zb(Fb(n));i!=null&&(Io[r]=i)})}var PI={styleDefault:"solid",familyDefault:"classic",cssPrefix:EI,replacementClass:TI,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Io.familyPrefix&&(Io.cssPrefix=Io.familyPrefix);var _s=C(C({},PI),Io);_s.autoReplaceSvg||(_s.observeMutations=!1);var D={};Object.keys(PI).forEach(function(t){Object.defineProperty(D,t,{enumerable:!0,set:function(n){_s[t]=n,Ao.forEach(function(r){return r(D)})},get:function(){return _s[t]}})});Object.defineProperty(D,"familyPrefix",{enumerable:!0,set:function(e){_s.cssPrefix=e,Ao.forEach(function(n){return n(D)})},get:function(){return _s.cssPrefix}});wr.FontAwesomeConfig=D;var Ao=[];function jb(t){return Ao.push(t),function(){Ao.splice(Ao.indexOf(t),1)}}var Wn=Kd,fn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Bb(t){if(!(!t||!Un)){var e=fe.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=fe.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return fe.head.insertBefore(e,r),t}}var qb="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function da(){for(var t=12,e="";t-- >0;)e+=qb[Math.random()*62|0];return e}function bs(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Ig(t){return t.classList?bs(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function kI(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Wb(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(kI(t[n]),'" ')},"").trim()}function Yc(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Ag(t){return t.size!==fn.size||t.x!==fn.x||t.y!==fn.y||t.rotate!==fn.rotate||t.flipX||t.flipY}function Hb(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function Gb(t){var e=t.transform,n=t.width,r=n===void 0?Kd:n,i=t.height,s=i===void 0?Kd:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&wI?l+="translate(".concat(e.x/Wn-r/2,"em, ").concat(e.y/Wn-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/Wn,"em), calc(-50% + ").concat(e.y/Wn,"em)) "):l+="translate(".concat(e.x/Wn,"em, ").concat(e.y/Wn,"em) "),l+="scale(".concat(e.size/Wn*(e.flipX?-1:1),", ").concat(e.size/Wn*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var Kb=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
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
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
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
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
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
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
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
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
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
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
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
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
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
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
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
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
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
}`;function RI(){var t=EI,e=TI,n=D.cssPrefix,r=D.replacementClass,i=Kb;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var S_=!1;function Xf(){D.autoAddCss&&!S_&&(Bb(RI()),S_=!0)}var Qb={mixout:function(){return{dom:{css:RI,insertCss:Xf}}},hooks:function(){return{beforeDOMElementCreation:function(){Xf()},beforeI2svg:function(){Xf()}}}},Mn=wr||{};Mn[$n]||(Mn[$n]={});Mn[$n].styles||(Mn[$n].styles={});Mn[$n].hooks||(Mn[$n].hooks={});Mn[$n].shims||(Mn[$n].shims=[]);var Gt=Mn[$n],CI=[],Yb=function t(){fe.removeEventListener("DOMContentLoaded",t),Ku=1,CI.map(function(e){return e()})},Ku=!1;Un&&(Ku=(fe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(fe.readyState),Ku||fe.addEventListener("DOMContentLoaded",Yb));function Xb(t){Un&&(Ku?setTimeout(t,0):CI.push(t))}function Fa(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?kI(t):"<".concat(e," ").concat(Wb(r),">").concat(s.map(Fa).join(""),"</").concat(e,">")}function P_(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Jb=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},Jf=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?Jb(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function Zb(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Yd(t){var e=Zb(t);return e.length===1?e[0].toString(16):null}function e4(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function k_(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Xd(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=k_(e);typeof Gt.hooks.addPack=="function"&&!i?Gt.hooks.addPack(t,k_(e)):Gt.styles[t]=C(C({},Gt.styles[t]||{}),s),t==="fas"&&Xd("fa",e)}var Tl,Il,Al,$i=Gt.styles,t4=Gt.shims,n4=(Tl={},Ne(Tl,ae,Object.values(fa[ae])),Ne(Tl,we,Object.values(fa[we])),Tl),Sg=null,xI={},VI={},NI={},bI={},DI={},r4=(Il={},Ne(Il,ae,Object.keys(ua[ae])),Ne(Il,we,Object.keys(ua[we])),Il);function i4(t){return~Lb.indexOf(t)}function s4(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!i4(i)?i:null}var OI=function(){var e=function(s){return Jf($i,function(o,a,l){return o[l]=Jf(a,s,{}),o},{})};xI=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),VI=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),DI=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in $i||D.autoFetchSvg,r=Jf(t4,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});NI=r.names,bI=r.unicodes,Sg=Xc(D.styleDefault,{family:D.familyDefault})};jb(function(t){Sg=Xc(t.styleDefault,{family:D.familyDefault})});OI();function Pg(t,e){return(xI[t]||{})[e]}function o4(t,e){return(VI[t]||{})[e]}function Br(t,e){return(DI[t]||{})[e]}function $I(t){return NI[t]||{prefix:null,iconName:null}}function a4(t){var e=bI[t],n=Pg("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Er(){return Sg}var kg=function(){return{prefix:null,iconName:null,rest:[]}};function Xc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?ae:n,i=ua[r][t],s=ca[r][t]||ca[r][i],o=t in Gt.styles?t:null;return s||o||null}var R_=(Al={},Ne(Al,ae,Object.keys(fa[ae])),Ne(Al,we,Object.keys(fa[we])),Al);function Jc(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},Ne(e,ae,"".concat(D.cssPrefix,"-").concat(ae)),Ne(e,we,"".concat(D.cssPrefix,"-").concat(we)),e),o=null,a=ae;(t.includes(s[ae])||t.some(function(u){return R_[ae].includes(u)}))&&(a=ae),(t.includes(s[we])||t.some(function(u){return R_[we].includes(u)}))&&(a=we);var l=t.reduce(function(u,c){var f=s4(D.cssPrefix,c);if($i[c]?(c=n4[a].includes(c)?Nb[a][c]:c,o=c,u.prefix=c):r4[a].indexOf(c)>-1?(o=c,u.prefix=Xc(c,{family:a})):f?u.iconName=f:c!==D.replacementClass&&c!==s[ae]&&c!==s[we]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var h=o==="fa"?$I(u.iconName):{},p=Br(u.prefix,u.iconName);h.prefix&&(o=null),u.iconName=h.iconName||p||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!$i.far&&$i.fas&&!D.autoFetchSvg&&(u.prefix="fas")}return u},kg());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===we&&($i.fass||D.autoFetchSvg)&&(l.prefix="fass",l.iconName=Br(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Er()||"fas"),l}var l4=function(){function t(){wb(this,t),this.definitions={}}return Eb(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=C(C({},n.definitions[a]||{}),o[a]),Xd(a,o[a]);var l=fa[ae][a];l&&Xd(l,o[a]),OI()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[a][f]=u)}),n[a][l]=u}),n}}]),t}(),C_=[],Mi={},Qi={},u4=Object.keys(Qi);function c4(t,e){var n=e.mixoutsTo;return C_=t,Mi={},Object.keys(Qi).forEach(function(r){u4.indexOf(r)===-1&&delete Qi[r]}),C_.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Gu(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){Mi[o]||(Mi[o]=[]),Mi[o].push(s[o])})}r.provides&&r.provides(Qi)}),n}function Jd(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Mi[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function ai(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Mi[t]||[];i.forEach(function(s){s.apply(null,n)})}function Ln(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Qi[t]?Qi[t].apply(null,e):void 0}function Zd(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Er();if(e)return e=Br(n,e)||e,P_(MI.definitions,n,e)||P_(Gt.styles,n,e)}var MI=new l4,f4=function(){D.autoReplaceSvg=!1,D.observeMutations=!1,ai("noAuto")},h4={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Un?(ai("beforeI2svg",e),Ln("pseudoElements2svg",e),Ln("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;D.autoReplaceSvg===!1&&(D.autoReplaceSvg=!0),D.observeMutations=!0,Xb(function(){p4({autoReplaceSvgRoot:n}),ai("watch",e)})}},d4={icon:function(e){if(e===null)return null;if(Gu(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Br(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Xc(e[0]);return{prefix:r,iconName:Br(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(D.cssPrefix,"-"))>-1||e.match(bb))){var i=Jc(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Er(),iconName:Br(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=Er();return{prefix:s,iconName:Br(s,e)||e}}}},kt={noAuto:f4,config:D,dom:h4,parse:d4,library:MI,findIconDefinition:Zd,toHtml:Fa},p4=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?fe:n;(Object.keys(Gt.styles).length>0||D.autoFetchSvg)&&Un&&D.autoReplaceSvg&&kt.dom.i2svg({node:r})};function Zc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Fa(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Un){var r=fe.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function m4(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(Ag(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=Yc(C(C({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function g4(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(D.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:C(C({},i),{},{id:o}),children:r}]}]}function Rg(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,f=t.extra,h=t.watchable,p=h===void 0?!1:h,y=r.found?r:n,v=y.width,E=y.height,m=i==="fak",d=[D.replacementClass,s?"".concat(D.cssPrefix,"-").concat(s):""].filter(function(K){return f.classes.indexOf(K)===-1}).filter(function(K){return K!==""||!!K}).concat(f.classes).join(" "),g={children:[],attributes:C(C({},f.attributes),{},{"data-prefix":i,"data-icon":s,class:d,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(E)})},_=m&&!~f.classes.indexOf("fa-fw")?{width:"".concat(v/E*16*.0625,"em")}:{};p&&(g.attributes[oi]=""),l&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(c||da())},children:[l]}),delete g.attributes.title);var w=C(C({},g),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:C(C({},_),f.styles)}),S=r.found&&n.found?Ln("generateAbstractMask",w)||{children:[],attributes:{}}:Ln("generateAbstractIcon",w)||{children:[],attributes:{}},I=S.children,N=S.attributes;return w.children=I,w.attributes=N,a?g4(w):m4(w)}function x_(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=C(C(C({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[oi]="");var c=C({},o.styles);Ag(i)&&(c.transform=Gb({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=Yc(c);f.length>0&&(u.style=f);var h=[];return h.push({tag:"span",attributes:u,children:[e]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function y4(t){var e=t.content,n=t.title,r=t.extra,i=C(C(C({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Yc(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Zf=Gt.styles;function ep(t){var e=t[0],n=t[1],r=t.slice(4),i=vg(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(D.cssPrefix,"-").concat(jr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(D.cssPrefix,"-").concat(jr.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(D.cssPrefix,"-").concat(jr.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var v4={found:!1,width:512,height:512};function _4(t,e){!II&&!D.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function tp(t,e){var n=e;return e==="fa"&&D.styleDefault!==null&&(e=Er()),new Promise(function(r,i){if(Ln("missingIconAbstract"),n==="fa"){var s=$I(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Zf[e]&&Zf[e][t]){var o=Zf[e][t];return r(ep(o))}_4(t,e),r(C(C({},v4),{},{icon:D.showMissingIcons&&t?Ln("missingIconAbstract")||{}:{}}))})}var V_=function(){},np=D.measurePerformance&&gl&&gl.mark&&gl.measure?gl:{mark:V_,measure:V_},no='FA "6.5.0"',w4=function(e){return np.mark("".concat(no," ").concat(e," begins")),function(){return LI(e)}},LI=function(e){np.mark("".concat(no," ").concat(e," ends")),np.measure("".concat(no," ").concat(e),"".concat(no," ").concat(e," begins"),"".concat(no," ").concat(e," ends"))},Cg={begin:w4,end:LI},Ql=function(){};function N_(t){var e=t.getAttribute?t.getAttribute(oi):null;return typeof e=="string"}function E4(t){var e=t.getAttribute?t.getAttribute(wg):null,n=t.getAttribute?t.getAttribute(Eg):null;return e&&n}function T4(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(D.replacementClass)}function I4(){if(D.autoReplaceSvg===!0)return Yl.replace;var t=Yl[D.autoReplaceSvg];return t||Yl.replace}function A4(t){return fe.createElementNS("http://www.w3.org/2000/svg",t)}function S4(t){return fe.createElement(t)}function FI(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?A4:S4:n;if(typeof t=="string")return fe.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(FI(o,{ceFn:r}))}),i}function P4(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Yl={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(FI(i),n)}),n.getAttribute(oi)===null&&D.keepOriginalSource){var r=fe.createComment(P4(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Ig(n).indexOf(D.replacementClass))return Yl.replace(e);var i=new RegExp("".concat(D.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===D.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Fa(a)}).join(`
`);n.setAttribute(oi,""),n.innerHTML=o}};function b_(t){t()}function zI(t,e){var n=typeof e=="function"?e:Ql;if(t.length===0)n();else{var r=b_;D.mutateApproach===xb&&(r=wr.requestAnimationFrame||b_),r(function(){var i=I4(),s=Cg.begin("mutate");t.map(i),s(),n()})}}var xg=!1;function UI(){xg=!0}function rp(){xg=!1}var Qu=null;function D_(t){if(I_&&D.observeMutations){var e=t.treeCallback,n=e===void 0?Ql:e,r=t.nodeCallback,i=r===void 0?Ql:r,s=t.pseudoElementsCallback,o=s===void 0?Ql:s,a=t.observeMutationsRoot,l=a===void 0?fe:a;Qu=new I_(function(u){if(!xg){var c=Er();bs(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!N_(f.addedNodes[0])&&(D.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&D.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&N_(f.target)&&~Mb.indexOf(f.attributeName))if(f.attributeName==="class"&&E4(f.target)){var h=Jc(Ig(f.target)),p=h.prefix,y=h.iconName;f.target.setAttribute(wg,p||c),y&&f.target.setAttribute(Eg,y)}else T4(f.target)&&i(f.target)})}}),Un&&Qu.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function k4(){Qu&&Qu.disconnect()}function R4(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function C4(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Jc(Ig(t));return i.prefix||(i.prefix=Er()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=o4(i.prefix,t.innerText)||Pg(i.prefix,Yd(t.innerText))),!i.iconName&&D.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function x4(t){var e=bs(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return D.autoA11y&&(n?e["aria-labelledby"]="".concat(D.replacementClass,"-title-").concat(r||da()):(e["aria-hidden"]="true",e.focusable="false")),e}function V4(){return{iconName:null,title:null,titleId:null,prefix:null,transform:fn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function O_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=C4(t),r=n.iconName,i=n.prefix,s=n.rest,o=x4(t),a=Jd("parseNodeAttributes",{},t),l=e.styleParser?R4(t):[];return C({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:fn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var N4=Gt.styles;function jI(t){var e=D.autoReplaceSvg==="nest"?O_(t,{styleParser:!1}):O_(t);return~e.extra.classes.indexOf(AI)?Ln("generateLayersText",t,e):Ln("generateSvgReplacementMutation",t,e)}var Tr=new Set;Tg.map(function(t){Tr.add("fa-".concat(t))});Object.keys(ua[ae]).map(Tr.add.bind(Tr));Object.keys(ua[we]).map(Tr.add.bind(Tr));Tr=Ma(Tr);function $_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Un)return Promise.resolve();var n=fe.documentElement.classList,r=function(f){return n.add("".concat(A_,"-").concat(f))},i=function(f){return n.remove("".concat(A_,"-").concat(f))},s=D.autoFetchSvg?Tr:Tg.map(function(c){return"fa-".concat(c)}).concat(Object.keys(N4));s.includes("fa")||s.push("fa");var o=[".".concat(AI,":not([").concat(oi,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(oi,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=bs(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Cg.begin("onTree"),u=a.reduce(function(c,f){try{var h=jI(f);h&&c.push(h)}catch(p){II||p.name==="MissingIcon"&&console.error(p)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(h){zI(h,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(h){l(),f(h)})})}function b4(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;jI(t).then(function(n){n&&zI([n],e)})}function D4(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Zd(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Zd(i||{})),t(r,C(C({},n),{},{mask:i}))}}var O4=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?fn:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,f=n.title,h=f===void 0?null:f,p=n.titleId,y=p===void 0?null:p,v=n.classes,E=v===void 0?[]:v,m=n.attributes,d=m===void 0?{}:m,g=n.styles,_=g===void 0?{}:g;if(e){var w=e.prefix,S=e.iconName,I=e.icon;return Zc(C({type:"icon"},e),function(){return ai("beforeDOMElementCreation",{iconDefinition:e,params:n}),D.autoA11y&&(h?d["aria-labelledby"]="".concat(D.replacementClass,"-title-").concat(y||da()):(d["aria-hidden"]="true",d.focusable="false")),Rg({icons:{main:ep(I),mask:l?ep(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:w,iconName:S,transform:C(C({},fn),i),symbol:o,title:h,maskId:c,titleId:y,extra:{attributes:d,styles:_,classes:E}})})}},$4={mixout:function(){return{icon:D4(O4)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=$_,n.nodeCallback=b4,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?fe:r,s=n.callback,o=s===void 0?function(){}:s;return $_(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,h=r.extra;return new Promise(function(p,y){Promise.all([tp(i,a),c.iconName?tp(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var E=vg(v,2),m=E[0],d=E[1];p([n,Rg({icons:{main:m,mask:d},prefix:a,iconName:i,transform:l,symbol:u,maskId:f,title:s,titleId:o,extra:h,watchable:!0})])}).catch(y)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Yc(a);l.length>0&&(i.style=l);var u;return Ag(o)&&(u=Ln("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},M4={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Zc({type:"layer"},function(){ai("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(D.cssPrefix,"-layers")].concat(Ma(s)).join(" ")},children:o}]})}}}},L4={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return Zc({type:"counter",content:n},function(){return ai("beforeDOMElementCreation",{content:n,params:r}),y4({content:n.toString(),title:s,extra:{attributes:u,styles:f,classes:["".concat(D.cssPrefix,"-layers-counter")].concat(Ma(a))}})})}}}},F4={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?fn:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,h=r.styles,p=h===void 0?{}:h;return Zc({type:"text",content:n},function(){return ai("beforeDOMElementCreation",{content:n,params:r}),x_({content:n,transform:C(C({},fn),s),title:a,extra:{attributes:f,styles:p,classes:["".concat(D.cssPrefix,"-layers-text")].concat(Ma(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(wI){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return D.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,x_({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},z4=new RegExp('"',"ug"),M_=[1105920,1112319];function U4(t){var e=t.replace(z4,""),n=e4(e,0),r=n>=M_[0]&&n<=M_[1],i=e.length===2?e[0]===e[1]:!1;return{value:Yd(i?e[0]:e),isSecondary:r||i}}function L_(t,e){var n="".concat(Cb).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=bs(t.children),o=s.filter(function(I){return I.getAttribute(Qd)===e})[0],a=wr.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(Db),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var f=a.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?we:ae,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?ca[h][l[2].toLowerCase()]:Ob[h][u],y=U4(f),v=y.value,E=y.isSecondary,m=l[0].startsWith("FontAwesome"),d=Pg(p,v),g=d;if(m){var _=a4(v);_.iconName&&_.prefix&&(d=_.iconName,p=_.prefix)}if(d&&!E&&(!o||o.getAttribute(wg)!==p||o.getAttribute(Eg)!==g)){t.setAttribute(n,g),o&&t.removeChild(o);var w=V4(),S=w.extra;S.attributes[Qd]=e,tp(d,p).then(function(I){var N=Rg(C(C({},w),{},{icons:{main:I,mask:kg()},prefix:p,iconName:g,extra:S,watchable:!0})),K=fe.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(K,t.firstChild):t.appendChild(K),K.outerHTML=N.map(function(U){return Fa(U)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function j4(t){return Promise.all([L_(t,"::before"),L_(t,"::after")])}function B4(t){return t.parentNode!==document.head&&!~Vb.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Qd)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function F_(t){if(Un)return new Promise(function(e,n){var r=bs(t.querySelectorAll("*")).filter(B4).map(j4),i=Cg.begin("searchPseudoElements");UI(),Promise.all(r).then(function(){i(),rp(),e()}).catch(function(){i(),rp(),n()})})}var q4={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=F_,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?fe:r;D.searchPseudoElements&&F_(i)}}},z_=!1,W4={mixout:function(){return{dom:{unwatch:function(){UI(),z_=!0}}}},hooks:function(){return{bootstrap:function(){D_(Jd("mutationObserverCallbacks",{}))},noAuto:function(){k4()},watch:function(n){var r=n.observeMutationsRoot;z_?rp():D_(Jd("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},U_=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},H4={mixout:function(){return{parse:{transform:function(n){return U_(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=U_(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},h={transform:"translate(".concat(o/2*-1," -256)")},p={outer:a,inner:f,path:h};return{tag:"g",attributes:C({},p.outer),children:[{tag:"g",attributes:C({},p.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:C(C({},r.icon.attributes),p.path)}]}]}}}},eh={x:0,y:0,width:"100%",height:"100%"};function j_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function G4(t){return t.tag==="g"?t.children:[t]}var K4={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Jc(i.split(" ").map(function(o){return o.trim()})):kg();return s.prefix||(s.prefix=Er()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,f=o.width,h=o.icon,p=Hb({transform:l,containerWidth:f,iconWidth:u}),y={tag:"rect",attributes:C(C({},eh),{},{fill:"white"})},v=c.children?{children:c.children.map(j_)}:{},E={tag:"g",attributes:C({},p.inner),children:[j_(C({tag:c.tag,attributes:C(C({},c.attributes),p.path)},v))]},m={tag:"g",attributes:C({},p.outer),children:[E]},d="mask-".concat(a||da()),g="clip-".concat(a||da()),_={tag:"mask",attributes:C(C({},eh),{},{id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,m]},w={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:G4(h)},_]};return r.push(w,{tag:"rect",attributes:C({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(d,")")},eh)}),{children:r,attributes:i}}}},Q4={provides:function(e){var n=!1;wr.matchMedia&&(n=wr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:C(C({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=C(C({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:C(C({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:C(C({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:C(C({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:C(C({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:C(C({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:C(C({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:C(C({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Y4={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},X4=[Qb,$4,M4,L4,F4,q4,W4,H4,K4,Q4,Y4];c4(X4,{mixoutsTo:kt});kt.noAuto;kt.config;kt.library;kt.dom;var ip=kt.parse;kt.findIconDefinition;kt.toHtml;var J4=kt.icon;kt.layer;kt.text;kt.counter;var BI={exports:{}},Z4="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",eD=Z4,tD=eD;function qI(){}function WI(){}WI.resetWarningCache=qI;var nD=function(){function t(r,i,s,o,a,l){if(l!==tD){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:WI,resetWarningCache:qI};return n.PropTypes=n,n};BI.exports=nD();var rD=BI.exports;const q=W_(rD);function B_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function er(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?B_(Object(n),!0).forEach(function(r){Li(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):B_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Yu(t){"@babel/helpers - typeof";return Yu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Yu(t)}function Li(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function iD(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function sD(t,e){if(t==null)return{};var n=iD(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function sp(t){return oD(t)||aD(t)||lD(t)||uD()}function oD(t){if(Array.isArray(t))return op(t)}function aD(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function lD(t,e){if(t){if(typeof t=="string")return op(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return op(t,e)}}function op(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function uD(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cD(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,f=t.pulse,h=t.fixedWidth,p=t.inverse,y=t.border,v=t.listItem,E=t.flip,m=t.size,d=t.rotation,g=t.pull,_=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":h,"fa-inverse":p,"fa-border":y,"fa-li":v,"fa-flip":E===!0,"fa-flip-horizontal":E==="horizontal"||E==="both","fa-flip-vertical":E==="vertical"||E==="both"},Li(e,"fa-".concat(m),typeof m<"u"&&m!==null),Li(e,"fa-rotate-".concat(d),typeof d<"u"&&d!==null&&d!==0),Li(e,"fa-pull-".concat(g),typeof g<"u"&&g!==null),Li(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(_).map(function(w){return _[w]?w:null}).filter(function(w){return w})}function fD(t){return t=t-0,t===t}function HI(t){return fD(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var hD=["style"];function dD(t){return t.charAt(0).toUpperCase()+t.slice(1)}function pD(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=HI(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[dD(i)]=s:e[i]=s,e},{})}function GI(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return GI(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=pD(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[HI(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=sD(n,hD);return i.attrs.style=er(er({},i.attrs.style),o),t.apply(void 0,[e.tag,er(er({},i.attrs),a)].concat(sp(r)))}var KI=!1;try{KI=!0}catch{}function mD(){if(!KI&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function q_(t){if(t&&Yu(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(ip.icon)return ip.icon(t);if(t===null)return null;if(t&&Yu(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function th(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Li({},t,e):{}}var ws=pr.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,u=q_(n),c=th("classes",[].concat(sp(cD(t)),sp(s.split(" ")))),f=th("transform",typeof t.transform=="string"?ip.transform(t.transform):t.transform),h=th("mask",q_(r)),p=J4(u,er(er(er(er({},c),f),h),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!p)return mD("Could not find icon",u),null;var y=p.abstract,v={ref:e};return Object.keys(t).forEach(function(E){ws.defaultProps.hasOwnProperty(E)||(v[E]=t[E])}),gD(y[0],v)});ws.displayName="FontAwesomeIcon";ws.propTypes={beat:q.bool,border:q.bool,beatFade:q.bool,bounce:q.bool,className:q.string,fade:q.bool,flash:q.bool,mask:q.oneOfType([q.object,q.array,q.string]),maskId:q.string,fixedWidth:q.bool,inverse:q.bool,flip:q.oneOf([!0,!1,"horizontal","vertical","both"]),icon:q.oneOfType([q.object,q.array,q.string]),listItem:q.bool,pull:q.oneOf(["right","left"]),pulse:q.bool,rotation:q.oneOf([0,90,180,270]),shake:q.bool,size:q.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:q.bool,spinPulse:q.bool,spinReverse:q.bool,symbol:q.oneOfType([q.bool,q.string]),title:q.string,titleId:q.string,transform:q.oneOfType([q.string,q.object]),swapOpacity:q.bool};ws.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var gD=GI.bind(null,pr.createElement),yD={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"]},QI={};(function(t){Object.defineProperty(t,"__esModule",{value:!0});var e="fas",n="square-xmark",r=448,i=512,s=[10062,"times-square","xmark-square"],o="f2d3",a="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm79 143c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z";t.definition={prefix:e,iconName:n,icon:[r,i,s,o,a]},t.faSquareXmark=t.definition,t.prefix=e,t.iconName=n,t.width=r,t.height=i,t.ligatures=s,t.unicode=o,t.svgPathData=a,t.aliases=s})(QI);const vD=zn.div``,_D=zn.div`
    width : 80%;
    margin : 0 auto;
    font-size : 14px;
    text-align : left;
    padding: 8px 0;
    & .todoWrap {display:flex; justify-content:space-between;align-items:center;}
    & .todoCont {display:flex;align-items:center;font-size:10px;}
    & input {appearance : none;padding:7px;border: 1.5px solid #B799FF;border-radius:100%;margin-right:10px;}
    & input:checked {
        background:#B799FF;
        background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    }
    & button {font-size:10px;border:0;background:unset; color:#B799FF;cursor:pointer;}
    & .todoContchecked {text-decoration: line-through;display:flex;align-items:center;font-size:10px;}
`;function wD(){const[t,e]=kn.useState([]);kn.useEffect(()=>{const i=BT(Kl,"todo"),s=tN(i,nN("createdAt","desc")),o=cN(s,a=>{const l=a.docs.map(u=>({id:u.id,...u.data()}));e(l)});return()=>o()},[]);const n=async i=>{var o;e(a=>a.map(l=>l.id===i?{...l,checked:!l.checked}:l));const s=Fd(Kl,"todo",i);try{await aN(s,{checked:!((o=t.find(a=>a.id===i))!=null&&o.checked)}),console.log("문서가 성공적으로 업데이트되었습니다!")}catch(a){console.error("문서 업데이트 중 오류 발생: ",a)}},r=async i=>{e(t.filter(o=>o.id!==i));const s=Fd(Kl,"todo",i);try{await lN(s),console.log("Document successfully deleted!")}catch(o){console.error("Error deleting document: ",o)}};return re.jsx(vD,{children:t.map((i,s)=>re.jsx(_D,{children:re.jsx("label",{"data-id":i.id,children:re.jsxs("div",{className:"todoWrap",children:[re.jsxs("span",{className:"todoCont"+(i.checked?"checked":""),children:[re.jsx("input",{onClick:()=>n(i.id),className:"todoCheck",type:"checkbox",checked:i.checked}),i.todo]}),re.jsxs("span",{className:"todoBtn",children:[re.jsx("button",{type:"button",className:"update",children:re.jsx(ws,{icon:yD})}),re.jsx("button",{type:"button",className:"delete",onClick:()=>r(i.id),children:re.jsx(ws,{icon:QI.faSquareXmark})})]})]})})},`list${i.createdAt}${s}`))})}const ED=zn.div`
    width: 80%;
    max-width : 400px;
    margin : 30px auto;
    text-align : center;
    background : #fff;
    border-radius :20px;
    padding: 35px 15px;
    & > h2 {
        margin : 0;
        margin-bottom : 20px;
        color : #B799FF;
    }
`;function TD(){return re.jsxs(ED,{children:[re.jsx("h2",{children:"To Do List"}),re.jsx(_b,{}),re.jsx(wD,{})]})}const ID=zn.div`
    max-width: 1920px;
    margin: 0 auto;
`;function AD(){return re.jsxs(ID,{children:[re.jsx(Sk,{}),re.jsx(TD,{})]})}function SD(){return re.jsx("div",{children:re.jsx(AD,{})})}nh.createRoot(document.getElementById("root")).render(re.jsx(pr.StrictMode,{children:re.jsx(SD,{})}));

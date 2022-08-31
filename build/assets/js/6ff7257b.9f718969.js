"use strict";(self.webpackChunkweb_3_blog=self.webpackChunkweb_3_blog||[]).push([[6891],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(r),f=o,v=m["".concat(i,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(v,c(c({ref:t},s),{},{components:r})):n.createElement(v,c({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7364:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={},c="\u5168\u5c40\u5b58\u50a8 - \u7ed3\u6784",l={unversionedId:"move/move_basic/\u5168\u5c40\u5b58\u50a8",id:"move/move_basic/\u5168\u5c40\u5b58\u50a8",title:"\u5168\u5c40\u5b58\u50a8 - \u7ed3\u6784",description:"Move \u7a0b\u5e8f\u7684\u76ee\u7684\u662f\u8bfb\u53d6\u548c\u5199\u5165\u6811\u5f62\u6301\u4e45\u5168\u5c40\u5b58\u50a8.",source:"@site/docs\\move\\move_basic\\\u5168\u5c40\u5b58\u50a8.md",sourceDirName:"move/move_basic",slug:"/move/move_basic/\u5168\u5c40\u5b58\u50a8",permalink:"/docs/move/move_basic/\u5168\u5c40\u5b58\u50a8",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"move",previous:{title:"\u5355\u5143\u6d4b\u8bd5",permalink:"/docs/move/move_basic/\u5355\u5143\u6d4b\u8bd5"},next:{title:"\u5168\u5c40\u5b58\u50a8\u7684\u64cd\u4f5c",permalink:"/docs/move/move_basic/\u5168\u5c40\u5b58\u50a8\u64cd\u4f5c"}},i={},p=[],s={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5168\u5c40\u5b58\u50a8---\u7ed3\u6784"},"\u5168\u5c40\u5b58\u50a8 - \u7ed3\u6784"),(0,o.kt)("p",null,"Move \u7a0b\u5e8f\u7684\u76ee\u7684\u662f",(0,o.kt)("a",{parentName:"p",href:"https://diem.github.io/move/global-storage-operators.html"},"\u8bfb\u53d6\u548c\u5199\u5165"),"\u6811\u5f62\u6301\u4e45\u5168\u5c40\u5b58\u50a8."),(0,o.kt)("p",null,"\u5168\u5c40\u5b58\u50a8\u7c7b\u4f3c\u4ee5\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"struct GlobalStorage {\n  resources: Map<(address, ResourceType), ResourceValue>\n  modules: Map<(address, ModuleName), ModuleBytecode>\n}\n")),(0,o.kt)("p",null,"\u6bcf\u4e2a\u5730\u5740\u90fd\u53ef\u4ee5\u5b58\u50a8\u8d44\u6e90\u6570\u636e\u503c\u548c\u6a21\u5757\u4ee3\u7801\u503c."))}u.isMDXComponent=!0}}]);
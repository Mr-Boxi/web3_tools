"use strict";(self.webpackChunkweb_3_blog=self.webpackChunkweb_3_blog||[]).push([[2226],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(t),f=o,v=m["".concat(l,".").concat(f)]||m[f]||s[f]||a;return t?r.createElement(v,i(i({ref:n},p),{},{components:t})):r.createElement(v,i({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2929:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=t(7462),o=(t(7294),t(3905));const a={},i="\u5faa\u73af",c={unversionedId:"move/move_basic/\u5faa\u73af",id:"move/move_basic/\u5faa\u73af",title:"\u5faa\u73af",description:"while \u548c loop",source:"@site/docs\\move\\move_basic\\\u5faa\u73af.md",sourceDirName:"move/move_basic",slug:"/move/move_basic/\u5faa\u73af",permalink:"/docs/move/move_basic/\u5faa\u73af",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"move",previous:{title:"\u6761\u4ef6\u8bed\u53e5",permalink:"/docs/move/move_basic/\u6761\u4ef6"},next:{title:"\u51fd\u6570",permalink:"/docs/move/move_basic/\u51fd\u6570"}},l={},u=[],p={toc:u};function s(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5faa\u73af"},"\u5faa\u73af"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"while")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"loop")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-move"},"fun sum(n: u64): u64 {\n    let sum = 0;\n    let i = 1;\n    while (i <= n) {\n        sum = sum + i;\n        i = i + 1;\n    };\n    \n    sum\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-move"},"fun sum(n: u64): u64 {\n    let sum = 0;\n    let i = 0;\n    loop {\n        i = i + 1;\n        if (i > n) break;\n        sum = sum + i\n    };\n\n    sum\n}\n")))}s.isMDXComponent=!0}}]);
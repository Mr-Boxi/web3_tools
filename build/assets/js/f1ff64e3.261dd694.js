"use strict";(self.webpackChunkweb_3_blog=self.webpackChunkweb_3_blog||[]).push([[5610],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=i(r),m=o,y=f["".concat(c,".").concat(m)]||f[m]||p[m]||a;return r?n.createElement(y,l(l({ref:t},s),{},{components:r})):n.createElement(y,l({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,l[1]=u;for(var i=2;i<a;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4565:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>i});var n=r(7462),o=(r(7294),r(3905));const a={},l="\u6570\u7ec4",u={unversionedId:"rust/rust\u57fa\u7840\u77e5\u8bc6/\u6570\u7ec4",id:"rust/rust\u57fa\u7840\u77e5\u8bc6/\u6570\u7ec4",title:"\u6570\u7ec4",description:"- \u957f\u5ea6\u56fa\u5b9a",source:"@site/docs\\rust\\rust\u57fa\u7840\u77e5\u8bc6\\\u6570\u7ec4.md",sourceDirName:"rust/rust\u57fa\u7840\u77e5\u8bc6",slug:"/rust/rust\u57fa\u7840\u77e5\u8bc6/\u6570\u7ec4",permalink:"/docs/rust/rust\u57fa\u7840\u77e5\u8bc6/\u6570\u7ec4",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"rust",previous:{title:"\u5b57\u7b26\u7c7b\u578b",permalink:"/docs/rust/rust\u57fa\u7840\u77e5\u8bc6/\u5b57\u7b26\u7c7b\u578b"},next:{title:"\u5143\u7ec4",permalink:"/docs/rust/rust\u57fa\u7840\u77e5\u8bc6/\u5143\u7ec4"}},c={},i=[],s={toc:i};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6570\u7ec4"},"\u6570\u7ec4"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u957f\u5ea6\u56fa\u5b9a"),(0,o.kt)("li",{parentName:"ul"},"\u5143\u7d20\u7c7b\u578b\u76f8\u540c"),(0,o.kt)("li",{parentName:"ul"},"\u7ebf\u6027\u6392\u5217")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"}," rust\u4e2d\uff0c \u6570\u7ec4\u662f\u57fa\u672c\u7c7b\u578b"),", \u5b9e\u73b0 copy trait\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'fn main() {\n    // \u81ea\u52a8\u63a8\u5bfc one \u7c7b\u578b\n    let one = [1,2,3];\n    // \u663e\u5f0f\u6807\u6ce8\n    let two: [u8; 3] = [1,2,3];\n    let blank1 = [0; 3];\n    let blank2: [u8; 3] = [0; 3];\n    \n    let arrays: [[u8, 3]; 4] = [one, two, blank1, blank2];\n    \n    // \u501f\u7528 arrays \u7684\u5143\u7d20\u7528\u4f5c\u5faa\u73af\n    for a in &arrays {\n        for n in a.iter() {\n            print!("\\t{} + 10 = {}", n, n+10);\n        }\n    }\n}\n')))}p.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkweb_3_blog=self.webpackChunkweb_3_blog||[]).push([[3113],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),f=s(r),d=a,m=f["".concat(i,".").concat(d)]||f[d]||p[d]||o;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2775:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={},l=void 0,u={unversionedId:"rust/rust\u57fa\u7840\u77e5\u8bc6/\u7c7b\u578b\u8f6c\u6362",id:"rust/rust\u57fa\u7840\u77e5\u8bc6/\u7c7b\u578b\u8f6c\u6362",title:"\u7c7b\u578b\u8f6c\u6362",description:"\u7c7b\u578b\u8f6c\u6362",source:"@site/docs\\rust\\rust\u57fa\u7840\u77e5\u8bc6\\\u7c7b\u578b\u8f6c\u6362.md",sourceDirName:"rust/rust\u57fa\u7840\u77e5\u8bc6",slug:"/rust/rust\u57fa\u7840\u77e5\u8bc6/\u7c7b\u578b\u8f6c\u6362",permalink:"/docs/rust/rust\u57fa\u7840\u77e5\u8bc6/\u7c7b\u578b\u8f6c\u6362",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"rust",previous:{title:"\u952e\u503c\u5bf9",permalink:"/docs/rust/rust\u57fa\u7840\u77e5\u8bc6/\u952e\u503c\u5bf9"},next:{title:"\u6d41\u7a0b\u63a7\u5236",permalink:"/docs/rust/rust\u57fa\u7840\u77e5\u8bc6/\u6d41\u7a0b\u63a7\u5236"}},i={},s=[{value:"\u7c7b\u578b\u8f6c\u6362",id:"\u7c7b\u578b\u8f6c\u6362",level:2},{value:"as \u8f6c\u6362",id:"as-\u8f6c\u6362",level:3},{value:"TryInto \u8f6c\u6362",id:"tryinto-\u8f6c\u6362",level:3}],c={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u7c7b\u578b\u8f6c\u6362"},"\u7c7b\u578b\u8f6c\u6362"),(0,a.kt)("p",null,"\u8003\u8651\u7cbe\u5ea6\u95ee\u9898"),(0,a.kt)("h3",{id:"as-\u8f6c\u6362"},"as \u8f6c\u6362"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"// as \u4e00\u822c\u662f\u6570\u503c\u4e0a\u5904\u7406\nfn main() {\n    let a = 3.1 as i8;\n    let b = 100_i8 as i32;\n    let c = 'a' as u8;\n}\n")),(0,a.kt)("h3",{id:"tryinto-\u8f6c\u6362"},"TryInto \u8f6c\u6362"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use std::convert::TryInto;\n//\u5982\u679c\u4f60\u8981\u4f7f\u7528\u4e00\u4e2a\u7279\u5f81\u7684\u65b9\u6cd5\uff0c\u90a3\u4e48\u4f60\u9700\u8981\u5f15\u5165\u8be5\u7279\u5f81\u5230\u5f53\u524d\u7684\u4f5c\u7528\u57df\u4e2d\nfn main() {\n    let a: u8 = 10;\n    let b: u16 = 1500;\n    \n    let b_: u8 = match b.try_into() {\n        Ok(b1) => b1,\n        Err(e) => {\n            println!("{:?}", e.to_string());\n            0\n        }\n    };\n    if a < b_ {\n        println!("Ten is less than one hundred.");\n    }\n}\n')))}p.isMDXComponent=!0}}]);
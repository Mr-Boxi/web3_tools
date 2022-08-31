"use strict";(self.webpackChunkweb_3_blog=self.webpackChunkweb_3_blog||[]).push([[3250],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),y=i,b=u["".concat(c,".").concat(y)]||u[y]||d[y]||o;return r?n.createElement(b,a(a({ref:t},p),{},{components:r})):n.createElement(b,a({ref:t},p))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},461:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),i=(r(7294),r(3905));const o={},a="ether and wei",l={unversionedId:"solidity/solidity_basic/ether_and_wei",id:"solidity/solidity_basic/ether_and_wei",title:"ether and wei",description:"\u53d1\u8d77\u4ea4\u6613\u662f\u9700\u8981\u652f\u4ed8 ether.",source:"@site/docs/solidity/solidity_basic/08_ether_and_wei.md",sourceDirName:"solidity/solidity_basic",slug:"/solidity/solidity_basic/ether_and_wei",permalink:"/docs/solidity/solidity_basic/ether_and_wei",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"solidity",previous:{title:"\u72b6\u6001\u53d8\u91cf\u7684\u8bfb\u5199",permalink:"/docs/solidity/solidity_basic/read_and_write_state_variable"},next:{title:"gas",permalink:"/docs/solidity/solidity_basic/gas"}},c={},s=[],p={toc:s};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ether-and-wei"},"ether and wei"),(0,i.kt)("p",null,"\u53d1\u8d77\u4ea4\u6613\u662f\u9700\u8981\u652f\u4ed8 ether."),(0,i.kt)("p",null," 1 ether = 10**18 wei"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"// SPDX-License-Identifier: MIT\npragma solidity ^0.8.13;\n\ncontract EtherUints {\n    uint public oneWei = 1 wei;\n    bool public isOneWei = 1 wei == 1;\n    \n    uint public oneEther = 1 ether;\n    \n    bool public isOneEther = 1 ether == 1e18;\n}\n")))}d.isMDXComponent=!0}}]);
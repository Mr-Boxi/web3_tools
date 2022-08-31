"use strict";(self.webpackChunkweb_3_blog=self.webpackChunkweb_3_blog||[]).push([[6937],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=i,y=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(y,a(a({ref:t},u),{},{components:n})):r.createElement(y,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8853:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const o={},a="\u51fd\u6570\u9009\u62e9\u5668",l={unversionedId:"solidity/solidity_basic/function_selector",id:"solidity/solidity_basic/function_selector",title:"\u51fd\u6570\u9009\u62e9\u5668",description:"\u8c03\u7528\u51fd\u6570\u65f6\uff0ccalldata \u7684\u524d 4 \u4e2a\u5b57\u8282\u6307\u5b9a\u8c03\u7528\u54ea\u4e2a\u51fd\u6570\u3002",source:"@site/docs/solidity/solidity_basic/33_function_selector.md",sourceDirName:"solidity/solidity_basic",slug:"/solidity/solidity_basic/function_selector",permalink:"/docs/solidity/solidity_basic/function_selector",draft:!1,tags:[],version:"current",sidebarPosition:33,frontMatter:{},sidebar:"solidity",previous:{title:"\u59d4\u6258\u8c03\u7528",permalink:"/docs/solidity/solidity_basic/delegatecall"},next:{title:"\u8c03\u7528\u5176\u4ed6\u5408\u7ea6",permalink:"/docs/solidity/solidity_basic/calling_other_contract"}},c={},s=[],u={toc:s};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u51fd\u6570\u9009\u62e9\u5668"},"\u51fd\u6570\u9009\u62e9\u5668"),(0,i.kt)("p",null,"\u8c03\u7528\u51fd\u6570\u65f6\uff0ccalldata \u7684\u524d 4 \u4e2a\u5b57\u8282\u6307\u5b9a\u8c03\u7528\u54ea\u4e2a\u51fd\u6570\u3002"),(0,i.kt)("p",null,"\u8fd9 4 \u4e2a\u5b57\u8282\u79f0\u4e3a\u51fd\u6570\u9009\u62e9\u5668\u3002"),(0,i.kt)("p",null,"\u4f8b\u5982\u4e0b\u9762\u7684\u4ee3\u7801\uff1a\u8c03\u7528\u5408\u7ea6\u7684 transfer \u51fd\u6570"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},'addr.call(abi.encodeWithSignature("transfer(address,uint256)",0xSomeaddress, 123))\n')),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"abi.encodeWithSignature(....)")," \u8fd4\u56de\u7684\u524d 4\u4e2a\u5b57\u8282\u5c31\u662f\u51fd\u6570\u9009\u62e9\u5668\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u60a8\u5728\u4ee3\u7801\u4e2d\u9884\u5148\u8ba1\u7b97\u5e76\u5185\u8054\u51fd\u6570\u9009\u62e9\u5668\uff0c\u4e5f\u8bb8\u60a8\u53ef\u4ee5\u8282\u7701\u5c11\u91cf\u6c14\u4f53\u3002"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u662f\u51fd\u6570\u9009\u62e9\u5668\u7684\u8ba1\u7b97\u65b9\u5f0f\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},'\n// SPDX-License-Identifier: MIT\npragma solidity ^0.8.13;\n\ncontract FunctionSelector {\n    /*\n    "transfer(address,uint256)"\n    0xa9059cbb\n    "transferFrom(address,address,uint256)"\n    0x23b872dd\n    */\n    function getSelector(string calldata _func) external pure returns (bytes4) {\n        return bytes4(keccak256(bytes(_func)));\n    }\n}\n')))}d.isMDXComponent=!0}}]);
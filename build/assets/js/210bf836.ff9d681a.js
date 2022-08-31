"use strict";(self.webpackChunkweb_3_blog=self.webpackChunkweb_3_blog||[]).push([[9323],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=l(t),d=i,y=f["".concat(s,".").concat(d)]||f[d]||p[d]||o;return t?r.createElement(y,c(c({ref:n},u),{},{components:t})):r.createElement(y,c({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,c=new Array(o);c[0]=f;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var l=2;l<o;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4439:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=t(7462),i=(t(7294),t(3905));const o={},c="\u7ee7\u627f",a={unversionedId:"solidity/solidity_basic/inheritance",id:"solidity/solidity_basic/inheritance",title:"\u7ee7\u627f",description:"solidity \u652f\u6301\u591a\u7ee7\u627f\uff0c \u4f7f\u7528 is \u5173\u952e\u5b57\u3002",source:"@site/docs/solidity/solidity_basic/23_inheritance.md",sourceDirName:"solidity/solidity_basic",slug:"/solidity/solidity_basic/inheritance",permalink:"/docs/solidity/solidity_basic/inheritance",draft:!1,tags:[],version:"current",sidebarPosition:23,frontMatter:{},sidebar:"solidity",previous:{title:"\u6784\u9020\u51fd\u6570",permalink:"/docs/solidity/solidity_basic/constructor"},next:{title:"\u906e\u853d\u7ee7\u627f\u72b6\u6001\u53d8\u91cf",permalink:"/docs/solidity/solidity_basic/shadowing_inherited_state_variables"}},s={},l=[],u={toc:l};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u7ee7\u627f"},"\u7ee7\u627f"),(0,i.kt)("p",null,"solidity \u652f\u6301\u591a\u7ee7\u627f\uff0c \u4f7f\u7528 is \u5173\u952e\u5b57\u3002"),(0,i.kt)("p",null,"\u4f7f\u7528 virtual  \u5173\u952e\u5b57 \u53ef\u4ee5\u4f7f\u5f97\u51fd\u6570\u88ab\u91cd\u5199\u3002"),(0,i.kt)("p",null,"\u4f7f\u7528 override \u5173\u952e\u5b57\u58f0\u660e\u51fd\u6570\u91cd\u5199\u3002"),(0,i.kt)("p",null,"\u7ee7\u627f\u7684\u987a\u5e8f\u662f\u5f88\u91cd\u8981\u7684\u3002"),(0,i.kt)("p",null,"\u60a8\u5fc5\u987b\u6309\u7167\u4ece\u201c\u6700\u57fa\u7840\u201d\u5230\u201c\u6700\u884d\u751f\u201d\u7684\u987a\u5e8f\u5217\u51fa\u7236\u5408\u7ea6\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.13;\n\n/* Graph of inheritance\n    A\n   / \\\n  B   C\n / \\ /\nF  D,E\n\n*/\n\ncontract A {\n    function foo() public pure virtual returns (string memory) {\n        return "A";\n    }\n}\n\n// Contracts inherit other contracts by using the keyword \'is\'.\ncontract B is A {\n    // Override A.foo()\n    function foo() public pure virtual override returns (string memory) {\n        return "B";\n    }\n}\n\ncontract C is A {\n    // Override A.foo()\n    function foo() public pure virtual override returns (string memory) {\n        return "C";\n    }\n}\n\n// Contracts can inherit from multiple parent contracts.\n// When a function is called that is defined multiple times in\n// different contracts, parent contracts are searched from\n// right to left, and in depth-first manner.\n\ncontract D is B, C {\n    // D.foo() returns "C"\n    // since C is the right most parent contract with function foo()\n    function foo() public pure override(B, C) returns (string memory) {\n        return super.foo();\n    }\n}\n\ncontract E is C, B {\n    // E.foo() returns "B"\n    // since B is the right most parent contract with function foo()\n    function foo() public pure override(C, B) returns (string memory) {\n        return super.foo();\n    }\n}\n\n// Inheritance must be ordered from \u201cmost base-like\u201d to \u201cmost derived\u201d.\n// Swapping the order of A and B will throw a compilation error.\ncontract F is A, B {\n    function foo() public pure override(A, B) returns (string memory) {\n        return super.foo();\n    }\n}\n')))}p.isMDXComponent=!0}}]);
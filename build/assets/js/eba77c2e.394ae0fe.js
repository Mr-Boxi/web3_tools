"use strict";(self.webpackChunkweb_3_blog=self.webpackChunkweb_3_blog||[]).push([[7497],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(n),y=i,b=p["".concat(s,".").concat(y)]||p[y]||d[y]||a;return n?r.createElement(b,c(c({ref:t},u),{},{components:n})):r.createElement(b,c({ref:t},u))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,c=new Array(a);c[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7537:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const a={},c="keccak256",o={unversionedId:"solidity/solidity_basic/hashing_with_keccak256",id:"solidity/solidity_basic/hashing_with_keccak256",title:"keccak256",description:"keccak256 \u8ba1\u7b97\u8f93\u5165\u7684 Keccak-256 \u54c8\u5e0c",source:"@site/docs/solidity/solidity_basic/40_hashing_with_keccak256.md",sourceDirName:"solidity/solidity_basic",slug:"/solidity/solidity_basic/hashing_with_keccak256",permalink:"/docs/solidity/solidity_basic/hashing_with_keccak256",draft:!1,tags:[],version:"current",sidebarPosition:40,frontMatter:{},sidebar:"solidity",previous:{title:"abi decode",permalink:"/docs/solidity/solidity_basic/abi_decode"},next:{title:"\u9a8c\u8bc1\u7b7e\u540d",permalink:"/docs/solidity/solidity_basic/verifying_signature"}},s={},l=[],u={toc:l};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"keccak256"},"keccak256"),(0,i.kt)("p",null,"keccak256 \u8ba1\u7b97\u8f93\u5165\u7684 Keccak-256 \u54c8\u5e0c"),(0,i.kt)("p",null,"\u4f7f\u7528\u4f8b\u5b50\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4ece\u8f93\u5165\u6570\u636e\u521b\u5efa\u786e\u5b9a\u6027\u552f\u4e00 ID")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u63d0\u4ea4-\u663e\u793a\u65b9\u6848")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u7d27\u51d1\u7684\u52a0\u5bc6\u7b7e\u540d"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.13;\n\ncontract HashFunction {\n    function hash(\n        string memory _text,\n        uint _num,\n        address _addr\n    ) public pure returns (bytes32) {\n        return keccak256(abi.encodePacked(_text, _num, _addr));\n    }\n\n    // Example of hash collision\n    // Hash collision can occur when you pass more than one dynamic data type\n    // to abi.encodePacked. In such case, you should use abi.encode instead.\n    function collision(string memory _text, string memory _anotherText)\n        public\n        pure\n        returns (bytes32)\n    {\n        // encodePacked(AAA, BBB) -> AAABBB\n        // encodePacked(AA, ABBB) -> AAABBB\n        return keccak256(abi.encodePacked(_text, _anotherText));\n    }\n}\n\ncontract GuessTheMagicWord {\n    bytes32 public answer =\n        0x60298f78cc0b47170ba79c10aa3851d7648bd96f2f8e46a19dbc777c36fb0c00;\n\n    // Magic word is "Solidity"\n    function guess(string memory _word) public view returns (bool) {\n        return keccak256(abi.encodePacked(_word)) == answer;\n    }\n}\n')))}d.isMDXComponent=!0}}]);
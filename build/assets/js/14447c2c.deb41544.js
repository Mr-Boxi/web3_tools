"use strict";(self.webpackChunkweb_3_blog=self.webpackChunkweb_3_blog||[]).push([[7408],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),p=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),y=o,f=d["".concat(a,".").concat(y)]||d[y]||u[y]||i;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var p=2;p<i;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1743:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={},c="ERC777",l={unversionedId:"solidity/solidity_contracts/openzepplin/02.3_erc777",id:"solidity/solidity_contracts/openzepplin/02.3_erc777",title:"ERC777",description:"\u63a5\u6536\u6302\u94a9\u3002\u94a9\u5b50\u53ea\u662f\u5408\u7ea6\u4e2d\u7684\u4e00\u4e2a\u51fd\u6570\uff0c\u5728\u5411\u5176\u53d1\u9001\u4ee3\u5e01\u65f6\u8c03\u7528\u5b83\uff0c\u8fd9\u610f\u5473\u7740\u8d26\u6237\u548c\u5408\u7ea6\u53ef\u4ee5\u5bf9\u63a5\u6536\u4ee3\u5e01\u505a\u51fa\u53cd\u5e94\u3002",source:"@site/docs/solidity/solidity_contracts/openzepplin/02.3_erc777.md",sourceDirName:"solidity/solidity_contracts/openzepplin",slug:"/solidity/solidity_contracts/openzepplin/02.3_erc777",permalink:"/docs/solidity/solidity_contracts/openzepplin/02.3_erc777",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"solidity",previous:{title:"ERC721",permalink:"/docs/solidity/solidity_contracts/openzepplin/02.2_erc721"},next:{title:"ERC1155",permalink:"/docs/solidity/solidity_contracts/openzepplin/02.4_erc1155"}},a={},p=[{value:"\u6784\u5efaERC777\u5408\u7ea6",id:"\u6784\u5efaerc777\u5408\u7ea6",level:3}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"erc777"},"ERC777"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u63a5\u6536\u6302\u94a9"),"\u3002\u94a9\u5b50\u53ea\u662f\u5408\u7ea6\u4e2d\u7684\u4e00\u4e2a\u51fd\u6570\uff0c\u5728\u5411\u5176\u53d1\u9001\u4ee3\u5e01\u65f6\u8c03\u7528\u5b83\uff0c\u8fd9\u610f\u5473\u7740",(0,o.kt)("strong",{parentName:"p"},"\u8d26\u6237\u548c\u5408\u7ea6\u53ef\u4ee5\u5bf9\u63a5\u6536\u4ee3\u5e01\u505a\u51fa\u53cd\u5e94"),"\u3002"),(0,o.kt)("h3",{id:"\u6784\u5efaerc777\u5408\u7ea6"},"\u6784\u5efaERC777\u5408\u7ea6"),(0,o.kt)("p",null,"\u517c\u5bb9erc20"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n\nimport "@openzeppelin/contracts/token/ERC777/ERC777.sol";\n\ncontract GLDToken is ERC777 {\n    contract(uint256 initialSupply, address[] memory defaultOperators)\n        ERC777("Gold", "GLD", defaultOperators)\n    {\n        _mint(msg.sender, initialSupply, "", "");\n    }\n}\n')))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkweb_3_blog=self.webpackChunkweb_3_blog||[]).push([[3411],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),g=a,f=u["".concat(c,".").concat(g)]||u[g]||d[g]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9791:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={},l="\u53ef\u5347\u7ea7\u5408\u7ea6",i={unversionedId:"solidity/hardhat_workflow/upgrading_contract",id:"solidity/hardhat_workflow/upgrading_contract",title:"\u53ef\u5347\u7ea7\u5408\u7ea6",description:"\u5b89\u88c5\u53ef\u5347\u7ea7\u63d2\u4ef6",source:"@site/docs/solidity/hardhat_workflow/06_upgrading_contract.md",sourceDirName:"solidity/hardhat_workflow",slug:"/solidity/hardhat_workflow/upgrading_contract",permalink:"/docs/solidity/hardhat_workflow/upgrading_contract",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"solidity",previous:{title:"\u8fde\u63a5\u6d4b\u8bd5\u7f51",permalink:"/docs/solidity/hardhat_workflow/connect_test_networks"},next:{title:"ether\u94b1\u5305",permalink:"/docs/solidity/solidity_contracts/application/ether_wallet"}},c={},s=[{value:"\u5b89\u88c5\u53ef\u5347\u7ea7\u63d2\u4ef6",id:"\u5b89\u88c5\u53ef\u5347\u7ea7\u63d2\u4ef6",level:2},{value:"\u7f16\u5199v2\u7248\u672c\u5408\u7ea6",id:"\u7f16\u5199v2\u7248\u672c\u5408\u7ea6",level:3}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u53ef\u5347\u7ea7\u5408\u7ea6"},"\u53ef\u5347\u7ea7\u5408\u7ea6"),(0,a.kt)("h2",{id:"\u5b89\u88c5\u53ef\u5347\u7ea7\u63d2\u4ef6"},"\u5b89\u88c5\u53ef\u5347\u7ea7\u63d2\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev @openzeppelin/hardhat-upgrades\n")),(0,a.kt)("p",null,"\u5728\u914d\u7f6e\u4e2d\u542f\u7528\u63d2\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// hardhat.config.js\nrequire('@nomiclabs/hardhat-ethers');\nrequire('@openzeppelin/hardhat-upgrades');\n")),(0,a.kt)("p",null,"\u7f16\u5199\u90e8\u7f72\u811a\u672c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// scripts/deploy_upgradeabel_box.js\nconst {ethers, upgrades} = require('hardhat');\n\nasync function main() {\n    const  Box = await ethers.getContractFactory('Box');\n    console.log('deploying box ...')\n    const box = await upgrades.deployProxy(Box, [42], {initializer: 'store'});\n    await  box.deployed();\n    console.lgo(`box deployed to:`, box.address);\n}\n\nmain();\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"// \u90e8\u7f72\n npx hardhat run --network localhost scripts/deploy_upgradeable_box.js\n")),(0,a.kt)("h3",{id:"\u7f16\u5199v2\u7248\u672c\u5408\u7ea6"},"\u7f16\u5199v2\u7248\u672c\u5408\u7ea6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n\ncontract BoxV2 {\n    // ... code from Box.sol\n\n    // Increments the stored value by 1\n    function increment() public {\n        _value = _value + 1;\n        emit ValueChanged(_value);\n    }\n}\n")),(0,a.kt)("p",null,"\u5347\u7ea7\u811a\u672c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { ethers, upgrades } = require('hardhat');\n\nasync function main() {\n  const BoxV2 = await ethers.getContractFactory(`BoxV2`);\n  await upgrades.upgradeProxy(\"0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0\",BoxV2);\n}\nmain();\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," npx hardhat run --network localhost scripts/upgrade_box.js\n")),(0,a.kt)("h1",{id:"\u5347\u7ea7\u662f\u5982\u4f55\u8fd0\u884c\u7684"},"\u5347\u7ea7\u662f\u5982\u4f55\u8fd0\u884c\u7684"))}d.isMDXComponent=!0}}]);
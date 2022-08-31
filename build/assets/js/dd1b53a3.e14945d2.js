"use strict";(self.webpackChunkweb_3_blog=self.webpackChunkweb_3_blog||[]).push([[7317],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>v});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(r),v=o,d=m["".concat(l,".").concat(v)]||m[v]||u[v]||a;return r?n.createElement(d,c(c({ref:t},s),{},{components:r})):n.createElement(d,c({ref:t},s))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},951:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={},c="\u52a8\u6001\u6570\u7ec4",i={unversionedId:"move/move_basic/\u52a8\u6001\u6570\u7ec4",id:"move/move_basic/\u52a8\u6001\u6570\u7ec4",title:"\u52a8\u6001\u6570\u7ec4",description:"vector\u662f\u552f\u4e00\u4e00\u4e2a\u539f\u59cb\u7684\u96c6\u5408\u7c7b\u578b\u3002",source:"@site/docs\\move\\move_basic\\\u52a8\u6001\u6570\u7ec4.md",sourceDirName:"move/move_basic",slug:"/move/move_basic/\u52a8\u6001\u6570\u7ec4",permalink:"/docs/move/move_basic/\u52a8\u6001\u6570\u7ec4",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"move",previous:{title:"\u5730\u5740",permalink:"/docs/move/move_basic/\u5730\u5740"},next:{title:"\u7b7e\u540d\u8005",permalink:"/docs/move/move_basic/\u7b7e\u540d\u8005"}},l={},p=[{value:"\u64cd\u4f5c",id:"\u64cd\u4f5c",level:3},{value:"\u9500\u6bc1\u548c\u590d\u5236vector",id:"\u9500\u6bc1\u548c\u590d\u5236vector",level:3},{value:"\u6240\u6709\u6743",id:"\u6240\u6709\u6743",level:3}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u52a8\u6001\u6570\u7ec4"},"\u52a8\u6001\u6570\u7ec4"),(0,o.kt)("p",null," ",(0,o.kt)("inlineCode",{parentName:"p"},"vector<T>"),"\u662f\u552f\u4e00\u4e00\u4e2a\u539f\u59cb\u7684\u96c6\u5408\u7c7b\u578b\u3002"),(0,o.kt)("h3",{id:"\u64cd\u4f5c"},"\u64cd\u4f5c"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Std::Vector")," \u6a21\u5757\u63d0\u4f9b\u4e86\u5982\u4e0b\u64cd\u4f5c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-move"},"use Std::Vector;\n\nlet v = Vector::empty<u64>();\nVector::push_bach(&mut v, 5);\nVector::push_back(&mut v, 6);\n\nassert!(*Vector::borrow(&v, 0) == 5, 42);\nassert!(*Vector::borrwo(&v, 1) == 6, 42);\nassert!(Vector::pop_back(&mut v) == 6, 42);\nassert!(Vector::pop_back(&mut v) == 5, 42);\n")),(0,o.kt)("h3",{id:"\u9500\u6bc1\u548c\u590d\u5236vector"},"\u9500\u6bc1\u548c\u590d\u5236vector"),(0,o.kt)("h3",{id:"\u6240\u6709\u6743"},"\u6240\u6709\u6743"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"vector"),"\u53ea\u6709\u53ef\u4ee5\u590d\u5236\u5143\u7d20\u624d\u80fd\u590d\u5236\u503c\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u526f\u672c\u5fc5\u987b\u901a\u8fc7\u663e\u793a\u6307\u4ee4\u590d\u5236 ",(0,o.kt)("inlineCode",{parentName:"p"},"copy"),"  \u6216\u8005\u89e3\u5f15\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"*")))}u.isMDXComponent=!0}}]);
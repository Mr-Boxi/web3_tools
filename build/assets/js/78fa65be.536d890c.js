"use strict";(self.webpackChunkweb_3_blog=self.webpackChunkweb_3_blog||[]).push([[7515],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,k=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return r?n.createElement(k,i(i({ref:t},c),{},{components:r})):n.createElement(k,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1517:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const l={},i=void 0,o={unversionedId:"rust/rust\u57fa\u7840\u77e5\u8bc6/\u5305\u548c\u6a21\u5757",id:"rust/rust\u57fa\u7840\u77e5\u8bc6/\u5305\u548c\u6a21\u5757",title:"\u5305\u548c\u6a21\u5757",description:"\u9879\u76ee\u7ed3\u6784",source:"@site/docs\\rust\\rust\u57fa\u7840\u77e5\u8bc6\\\u5305\u548c\u6a21\u5757.md",sourceDirName:"rust/rust\u57fa\u7840\u77e5\u8bc6",slug:"/rust/rust\u57fa\u7840\u77e5\u8bc6/\u5305\u548c\u6a21\u5757",permalink:"/docs/rust/rust\u57fa\u7840\u77e5\u8bc6/\u5305\u548c\u6a21\u5757",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"rust",previous:{title:"\u9519\u8bef\u5904\u7406",permalink:"/docs/rust/rust\u57fa\u7840\u77e5\u8bc6/\u9519\u8bef\u5904\u7406"},next:{title:"\u6ce8\u91ca\u548c\u6587\u6863",permalink:"/docs/rust/rust\u57fa\u7840\u77e5\u8bc6/\u6ce8\u91ca\u548c\u6587\u6863"}},s={},u=[{value:"\u9879\u76ee\u7ed3\u6784",id:"\u9879\u76ee\u7ed3\u6784",level:2},{value:"\u5305crate",id:"\u5305crate",level:2},{value:"\u6a21\u5757module",id:"\u6a21\u5757module",level:2},{value:"\u5de5\u4f5c\u7a7a\u95f4  workspace",id:"\u5de5\u4f5c\u7a7a\u95f4--workspace",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u9879\u76ee\u7ed3\u6784"},"\u9879\u76ee\u7ed3\u6784"),(0,a.kt)("p",null,"\u5e38\u89c1\u7684\u9879\u76ee\u7ed3\u6784"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 Cargo.toml\n\u251c\u2500\u2500 Cargo.lock\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 main.rs\n\u2502   \u251c\u2500\u2500 lib.rs\n\u2502   \u2514\u2500\u2500 bin\n\u2502       \u2514\u2500\u2500 main1.rs\n\u2502       \u2514\u2500\u2500 main2.rs\n\u251c\u2500\u2500 tests\n\u2502   \u2514\u2500\u2500 some_integration_tests.rs\n\u251c\u2500\u2500 benches\n\u2502   \u2514\u2500\u2500 simple_bench.rs\n\u2514\u2500\u2500 examples\n    \u2514\u2500\u2500 simple_example.rs\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u552f\u4e00\u5e93\u5305\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"src/lib.rs")),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4e8c\u8fdb\u5236\u5305\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"src/main.rs"),"\uff0c\u7f16\u8bd1\u540e\u751f\u6210\u7684\u53ef\u6267\u884c\u6587\u4ef6\u4e0e ",(0,a.kt)("inlineCode",{parentName:"li"},"Package")," \u540c\u540d"),(0,a.kt)("li",{parentName:"ul"},"\u5176\u4f59\u4e8c\u8fdb\u5236\u5305\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"src/bin/main1.rs")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"src/bin/main2.rs"),"\uff0c\u5b83\u4eec\u4f1a\u5206\u522b\u751f\u6210\u4e00\u4e2a\u6587\u4ef6\u540c\u540d\u7684\u4e8c\u8fdb\u5236\u53ef\u6267\u884c\u6587\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"\u96c6\u6210\u6d4b\u8bd5\u6587\u4ef6\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"tests")," \u76ee\u5f55\u4e0b"),(0,a.kt)("li",{parentName:"ul"},"\u57fa\u51c6\u6027\u80fd\u6d4b\u8bd5 ",(0,a.kt)("inlineCode",{parentName:"li"},"benchmark")," \u6587\u4ef6\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"benches")," \u76ee\u5f55\u4e0b"),(0,a.kt)("li",{parentName:"ul"},"\u9879\u76ee\u793a\u4f8b\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"examples")," \u76ee\u5f55\u4e0b")),(0,a.kt)("h2",{id:"\u5305crate"},"\u5305crate"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u5305(Crate)"),"\uff1a\u4e00\u4e2a\u7531\u591a\u4e2a\u6a21\u5757\u7ec4\u6210\u7684\u6811\u5f62\u7ed3\u6784\uff0c\u53ef\u4ee5\u4f5c\u4e3a\u4e09\u65b9\u5e93\u8fdb\u884c\u5206\u53d1\uff0c\u4e5f\u53ef\u4ee5\u751f\u6210\u53ef\u6267\u884c\u6587\u4ef6\u8fdb\u884c\u8fd0\u884c")),(0,a.kt)("h2",{id:"\u6a21\u5757module"},"\u6a21\u5757module"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u6a21\u5757(Module)"),"\uff1a\u53ef\u4ee5\u4e00\u4e2a\u6587\u4ef6\u591a\u4e2a\u6a21\u5757\uff0c\u4e5f\u53ef\u4ee5\u4e00\u4e2a\u6587\u4ef6\u4e00\u4e2a\u6a21\u5757\uff0c\u6a21\u5757\u53ef\u4ee5\u88ab\u8ba4\u4e3a\u662f\u771f\u5b9e\u9879\u76ee\u4e2d\u7684\u4ee3\u7801\u7ec4\u7ec7\u5355\u5143")),(0,a.kt)("h2",{id:"\u5de5\u4f5c\u7a7a\u95f4--workspace"},"\u5de5\u4f5c\u7a7a\u95f4  workspace"),(0,a.kt)("p",null,"..."))}p.isMDXComponent=!0}}]);
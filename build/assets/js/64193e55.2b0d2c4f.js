"use strict";(self.webpackChunkweb_3_blog=self.webpackChunkweb_3_blog||[]).push([[8385],{3905:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>m});var a=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function u(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var l=a.createContext({}),s=function(n){var e=a.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):c(c({},e),n)),t},p=function(n){var e=s(n.components);return a.createElement(l.Provider,{value:e},n.children)},i={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,o=n.originalType,l=n.parentName,p=u(n,["components","mdxType","originalType","parentName"]),d=s(t),m=r,k=d["".concat(l,".").concat(m)]||d[m]||i[m]||o;return t?a.createElement(k,c(c({ref:e},p),{},{components:t})):a.createElement(k,c({ref:e},p))}));function m(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=t.length,c=new Array(o);c[0]=d;var u={};for(var l in e)hasOwnProperty.call(e,l)&&(u[l]=e[l]);u.originalType=n,u.mdxType="string"==typeof n?n:r,c[1]=u;for(var s=2;s<o;s++)c[s]=t[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},678:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>i,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var a=t(7462),r=(t(7294),t(3905));const o={},c="\u7f16\u5199\u5408\u7ea6",u={unversionedId:"rust_contract/solana/solana_workflow/\u7f16\u5199\u5408\u7ea6",id:"rust_contract/solana/solana_workflow/\u7f16\u5199\u5408\u7ea6",title:"\u7f16\u5199\u5408\u7ea6",description:"- 1 \u5b9a\u4e49\u5b58\u50a8\u7ed3\u6784",source:"@site/docs\\rust_contract\\solana\\01_solana_workflow\\\u7f16\u5199\u5408\u7ea6.md",sourceDirName:"rust_contract/solana/01_solana_workflow",slug:"/rust_contract/solana/solana_workflow/\u7f16\u5199\u5408\u7ea6",permalink:"/docs/rust_contract/solana/solana_workflow/\u7f16\u5199\u5408\u7ea6",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"rust_contract",previous:{title:"\u9879\u76ee\u8bbe\u7f6e",permalink:"/docs/rust_contract/solana/solana_workflow/\u9879\u76ee\u8bbe\u7f6e"},next:{title:"\u8de8\u5408\u7ea6\u8c03\u7528",permalink:"/docs/rust_contract/solana/solana_workflow/\u8de8\u5408\u7ea6\u8c03\u7528"}},l={},s=[{value:"1 \u4f7f\u7528 <code>#[account]</code> \u5b9a\u4e49\u9700\u8981\u5b58\u50a8\u7684\u7ed3\u6784",id:"1-\u4f7f\u7528-account-\u5b9a\u4e49\u9700\u8981\u5b58\u50a8\u7684\u7ed3\u6784",level:2},{value:"2 \u4f7f\u7528 <code>#[derive(Accounts)]</code> \u5b9a\u4e49\u4ea4\u6613\u9700\u8981\u7684\u6570\u636e(account)",id:"2-\u4f7f\u7528-deriveaccounts-\u5b9a\u4e49\u4ea4\u6613\u9700\u8981\u7684\u6570\u636eaccount",level:2},{value:"\u5bf9\u4e8e account \u7684\u7ea6\u675f",id:"\u5bf9\u4e8e-account-\u7684\u7ea6\u675f",level:3},{value:"3 \u5728<code>program</code>\u5b9e\u73b0\u51fd\u6570\u7684\u903b\u8f91",id:"3-\u5728program\u5b9e\u73b0\u51fd\u6570\u7684\u903b\u8f91",level:2},{value:"Context  \u7c7b\u578b",id:"context--\u7c7b\u578b",level:3},{value:"\u6307\u4ee4\u7684\u5176\u4ed6\u6570\u636e",id:"\u6307\u4ee4\u7684\u5176\u4ed6\u6570\u636e",level:3},{value:"\u81ea\u5df1\u5b9a\u4e49Err",id:"\u81ea\u5df1\u5b9a\u4e49err",level:3},{value:"example",id:"example",level:2}],p={toc:s};function i(n){let{components:e,...t}=n;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u7f16\u5199\u5408\u7ea6"},"\u7f16\u5199\u5408\u7ea6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1 \u5b9a\u4e49\u5b58\u50a8\u7ed3\u6784"),(0,r.kt)("li",{parentName:"ul"},"2 \u5b9a\u4e49\u51fd\u6570\u7684\u5165\u53c2\u7ed3\u6784"),(0,r.kt)("li",{parentName:"ul"},"3 \u5b9e\u73b0\u51fd\u6570\u903b\u8f91")),(0,r.kt)("h2",{id:"1-\u4f7f\u7528-account-\u5b9a\u4e49\u9700\u8981\u5b58\u50a8\u7684\u7ed3\u6784"},"1 \u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"h2"},"#[account]")," \u5b9a\u4e49\u9700\u8981\u5b58\u50a8\u7684\u7ed3\u6784"),(0,r.kt)("p",null,"\u5728solana\u4e2d\uff0cacocunt \u662f\u5bf9\u5b58\u50a8\u7ed3\u6784\u7684\u7684\u62bd\u8c61\uff0c\u9700\u8981\u8bfb\u5199\u7684\u6570\u636e\u90fd\u653e\u5728\u8fd9\u91cc\u3002"),(0,r.kt)("p",null,"\u7f16\u5199\u5408\u7ea6\u7684\u65f6\u5019\uff0c\u6211\u4eec\u53ef\u4ee5\u5148\u5b9a\u4e49\u4e0b\u6211\u4eec\u7684\u5b58\u50a8\u7ed3\u6784\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[account]\npub struct MyAccount{\n    data: u64\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"#[account]"),"\u5c06\u6570\u636e\u7684\u6240\u6709\u8005\u8bbe\u7f6e\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"declare_id ")),(0,r.kt)("h2",{id:"2-\u4f7f\u7528-deriveaccounts-\u5b9a\u4e49\u4ea4\u6613\u9700\u8981\u7684\u6570\u636eaccount"},"2 \u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"h2"},"#[derive(Accounts)]")," \u5b9a\u4e49\u4ea4\u6613\u9700\u8981\u7684\u6570\u636e(account)"),(0,r.kt)("p",null,"\u8c03\u597d\u51fd\u6570\u7684\u65f6\u5019\uff0c\u6211\u4eec\u9700\u8981\u8bfb\u5199\u6570\u636e\u3002\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"#[derive(Accounts)]")," \u5c06\u9700\u8981\u4f7f\u7528\u7684\u7684\u6570\u636e\u5305\u542b\u8fdb\u6765\uff0c\u65b9\u4fbf\u6211\u4eec\u64cd\u4f5c\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\uff0c\u6211\u4eec\u9700\u8981\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"setData")," \u51fd\u6570\uff0c\u6211\u4eec\u9700\u8981\u4f7f\u7528\u7684\u6570\u636e\u5982\u4e0b\uff08\u5c06\u8fd9\u4e9b\u6570\u636e\u4f7f\u7528\u7ed3\u6784\u4f53\u5c01\u88c5\u8d77\u6765\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Accounts)]\npub struct SetData<'info> {\n    #[account(mut)]\n    pub my_account: Account<'info, MyAccount>\n    pub owner: Signer<'info>\n}\n")),(0,r.kt)("h3",{id:"\u5bf9\u4e8e-account-\u7684\u7ea6\u675f"},"\u5bf9\u4e8e account \u7684\u7ea6\u675f"),(0,r.kt)("p",null,"\u8fd9\u91cc\u7684\u610f\u601d\u662f\u5bf9\u8bfb\u5199\u6570\u636e\u7684\u7ea6\u675f\u3002(solana \u5c06\u6570\u636e\u62bd\u8c61\u6210\u8d26\u53f7\u7c7b\u578b)"),(0,r.kt)("p",null,"\u4e00\u822c\u5f62\u5f0f\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[account(<constraints>)]\npub account: AccountType\n")),(0,r.kt)("p",null,"todo \u603b\u7ed3\u5e38\u7528\u7684\u7ea6\u675f"),(0,r.kt)("h2",{id:"3-\u5728program\u5b9e\u73b0\u51fd\u6570\u7684\u903b\u8f91"},"3 \u5728",(0,r.kt)("inlineCode",{parentName:"h2"},"program"),"\u5b9e\u73b0\u51fd\u6570\u7684\u903b\u8f91"),(0,r.kt)("p",null," program \u6a21\u5757\u91cc\uff0c\u5b9e\u73b0\u4e1a\u52a1\u903b\u8f91\uff0c\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"}," #[program]\n mod hello_anchor {\n     use super::*;\n     pub fn set_data(ctx: Context<SetData>, data: u64) -> Result<()> {\n         if ctx.accounts.token_account.amount > 0 {\n             ctx.accounts.my_account.data = data;\n         }\n         Ok(())\n     }\n }\n")),(0,r.kt)("h3",{id:"context--\u7c7b\u578b"},"Context  \u7c7b\u578b"),(0,r.kt)("p",null,"ctx.program_id : \u7a0b\u5e8f\u7684 id\nctx.accounts : \u8bbf\u95eeaccount\nctx.remaining_accounts : \u5176\u4e2d\u5305\u542b\u4f20\u9012\u5230\u6307\u4ee4\u4e2d\u4f46\u672a\u5728 Accounts \u7ed3\u6784\u4e2d\u58f0\u660e\u7684\u6240\u6709\u5e10\u6237\u3002"),(0,r.kt)("h3",{id:"\u6307\u4ee4\u7684\u5176\u4ed6\u6570\u636e"},"\u6307\u4ee4\u7684\u5176\u4ed6\u6570\u636e"),(0,r.kt)("p",null,"\u5f53\u6211\u4eec\u9700\u8981\u4f20\u5165\u66f4\u591a\u7684\u53c2\u6570\u65f6\u5019\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u5165\u53c2\u5b9a\u4e49\u3002\u6211\u4eec\u751a\u81f3\u53ef\u4ee5\u6dfb\u52a0\u81ea\u5b9a\u4e49\u7684\u7ed3\u6784\u3002"),(0,r.kt)("p",null,"\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"[derive(AnchorDeserialize)]")," \u5b9a\u4e49\uff0cData\u5c31\u662f\u6211\u4eec\u81ea\u5b9a\u4e49\u7684\u5165\u53c2\u6570\u636e\uff0c\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[program]\nmod hello_anchor {\n    use super::*;\n    pub fn set_data(ctx: Context<SetData>, data: Data) -> Result<()> {\n        ctx.accounts.my_account.data = data.data;\n        ctx.accounts.my_account.age = data.age;\n        Ok(())\n    }\n}\n\n#[account]\n#[derive(Default)]\npub struct MyAccount {\n    pub data: u64,\n    pub age: u8\n}\n\n\n#[derive(AnchorSerialize, AnchorDeserialize, Eq, PartialEq, Clone, Copy, Debug)]\npub struct Data {\n    pub data: u64,\n    pub age: u8\n}\n")),(0,r.kt)("h3",{id:"\u81ea\u5df1\u5b9a\u4e49err"},"\u81ea\u5df1\u5b9a\u4e49Err"),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"[error_code]")," \u5b9e\u73b0\u81ea\u5b9a\u4e49\u7684\u9519\u8bef\uff0c\u4f8b\u5982"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[program]\nmod hello_anchor {\n    use super::*;\n    pub fn set_data(ctx: Context<SetData>, data: MyAccount) -> Result<()> {\n        if data.data >= 100 {\n            return err!(MyError::DataTooLarge);\n        }\n        ctx.accounts.my_account.set_inner(data);\n        Ok(())\n    }\n}\n\n#[error_code]\npub enum MyError {\n    #[msg("MyAccount may only hold data below 100")]\n    DataTooLarge\n}\n')),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"require!")," \u5224\u65ad\u6761\u4ef6\uff0c \u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[program]\nmod hello_anchor {\n    use super::*;\n    pub fn set_data(ctx: Context<SetData>, data: MyAccount) -> Result<()> {\n        require!(data.data < 100, MyError::DataTooLarge);\n        ctx.accounts.my_account.set_inner(data);\n        Ok(())\n    }\n}\n#[error_code]\npub enum MyError {\n    #[msg("MyAccount may only hold data below 100")]\n    DataTooLarge\n}\n')),(0,r.kt)("h2",{id:"example"},"example"),(0,r.kt)("p",null,"\u4ee5\u4e00\u4e2a\u8ba1\u6570\u5668\u5408\u7ea6\u4e3a\u4f8b\u5b50:"),(0,r.kt)("p",null,"\u6587\u4ef6:  programs/mysolanaapp/src/lib.rs"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use anchor_lang::prelude::*;\n\ndeclare_id!(\"Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS\");\n\n\nmod mysolanaapp {\n    use super::*;\n    \n    // \u903b\u8f91\n    pub fn create(ctx: Context<Create>) -> ProgramResult{\n        let base_account = &mut ctx.accounts.base_account;\n        base_account.count = 0;\n        Ok(())\n    }\n    pub fn increment(ctx: Context<Increment>) -> ProgramResult {\n        let base_account = &mut ctx.accounts.base_account;\n        base_account.count += 1;\n        Ok(())\n    }\n\n}\n#[derive(Accounts)]\npub struct Create<'info> {\n    #[account(init, payer = user, space = 16 + 16)]\n    pub base_account: Account<'info, BaseAccount>,\n    #[account(mut)]\n    pub user: Signer<'info>,\n    pub system_program: Program <'info, System>,\n}\n\n\n#[derive(Accounts)]\npub struct Increment<'info> {\n    #[account(mut)]\n   pub base_account: Account<'info, BaseAccount>,\n}\n\n#[account]\npub struct BaseAccount {\n    pub count: u64\n}\n")))}i.isMDXComponent=!0}}]);
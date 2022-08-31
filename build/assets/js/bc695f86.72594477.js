"use strict";(self.webpackChunkweb_3_blog=self.webpackChunkweb_3_blog||[]).push([[7096],{3905:(n,t,e)=>{e.d(t,{Zo:()=>u,kt:()=>m});var r=e(7294);function o(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function a(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function c(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?a(Object(e),!0).forEach((function(t){o(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function i(n,t){if(null==n)return{};var e,r,o=function(n,t){if(null==n)return{};var e,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||(o[e]=n[e]);return o}(n,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(o[e]=n[e])}return o}var s=r.createContext({}),l=function(n){var t=r.useContext(s),e=t;return n&&(e="function"==typeof n?n(t):c(c({},t),n)),e},u=function(n){var t=l(n.components);return r.createElement(s.Provider,{value:t},n.children)},p={inlineCode:"code",wrapper:function(n){var t=n.children;return r.createElement(r.Fragment,{},t)}},_=r.forwardRef((function(n,t){var e=n.components,o=n.mdxType,a=n.originalType,s=n.parentName,u=i(n,["components","mdxType","originalType","parentName"]),_=l(e),m=o,y=_["".concat(s,".").concat(m)]||_[m]||p[m]||a;return e?r.createElement(y,c(c({ref:t},u),{},{components:e})):r.createElement(y,c({ref:t},u))}));function m(n,t){var e=arguments,o=t&&t.mdxType;if("string"==typeof n||o){var a=e.length,c=new Array(a);c[0]=_;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=n,i.mdxType="string"==typeof n?n:o,c[1]=i;for(var l=2;l<a;l++)c[l]=e[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,e)}_.displayName="MDXCreateElement"},5253:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=e(7462),o=(e(7294),e(3905));const a={},c="\u5408\u7ea6\u4e2d\u83b7\u53d6\u65f6\u949f",i={unversionedId:"rust_contract/solana/solana_\u5408\u7ea6\u5f00\u53d1\u5e93/get_block",id:"rust_contract/solana/solana_\u5408\u7ea6\u5f00\u53d1\u5e93/get_block",title:"\u5408\u7ea6\u4e2d\u83b7\u53d6\u65f6\u949f",description:"1.\u5c06 SYSVARCLOCKPUBKEY \u4f20\u9012\u7ed9\u6307\u4ee4",source:"@site/docs\\rust_contract\\solana\\02_solana_\u5408\u7ea6\u5f00\u53d1\u5e93\\get_block.md",sourceDirName:"rust_contract/solana/02_solana_\u5408\u7ea6\u5f00\u53d1\u5e93",slug:"/rust_contract/solana/solana_\u5408\u7ea6\u5f00\u53d1\u5e93/get_block",permalink:"/docs/rust_contract/solana/solana_\u5408\u7ea6\u5f00\u53d1\u5e93/get_block",draft:!1,tags:[],version:"current",frontMatter:{}},s={},l=[{value:"passing clock as an account inside an instruction",id:"passing-clock-as-an-account-inside-an-instruction",level:3},{value:"\u76f4\u63a5\u5728\u6307\u4ee4\u5185\u8bbf\u95ee\u65f6\u949f",id:"\u76f4\u63a5\u5728\u6307\u4ee4\u5185\u8bbf\u95ee\u65f6\u949f",level:3}],u={toc:l};function p(n){let{components:t,...e}=n;return(0,o.kt)("wrapper",(0,r.Z)({},u,e,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5408\u7ea6\u4e2d\u83b7\u53d6\u65f6\u949f"},"\u5408\u7ea6\u4e2d\u83b7\u53d6\u65f6\u949f"),(0,o.kt)("p",null,"1.\u5c06 SYSVAR_CLOCK_PUBKEY \u4f20\u9012\u7ed9\u6307\u4ee4"),(0,o.kt)("p",null,"2.\u76f4\u63a5\u5728\u6307\u4ee4\u5185\u8bbf\u95ee\u65f6\u949f\u3002"),(0,o.kt)("h3",{id:"passing-clock-as-an-account-inside-an-instruction"},"passing clock as an account inside an instruction"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use borsh::{BorshDeserialize, BorshSerialize};\nuse solana_program::{\n  account_info::{next_account_info, AccountInfo},\n    clock::Clock,\n    entrypoint,\n    entrypoint::ProgramResult,\n    msg,\n    pubkey::Pubkey,\n    sysvar::SysVar,\n};\n\nentrypoint!(process_instruction);\n\n#[derive(BorshSerialize, BorshDeserialize, Debug)]\npub struct HelloState {\n    is_initialized: bool,\n}\n\n// Accounts required\n/// 1. [signer, writable] Payer\n/// 2. [writable] Hello state account\n/// 3. [] Clock sys var\npub fn process_instruction(\n    _program_id: &Pubkey,\n    accounts: &[AccountInfo],\n    _instruction_data: &[u8],\n) -> ProgramResult{\n     let accounts_iter = &mut accounts.iter();\n    // Payer account\n    let _payer_account = next_account_info(accounts_iter)?;\n    // Hello state account\n    let hello_state_account = next_account_info(accounts_iter)?;\n    // Clock sysvar\n    let sysvar_clock_pubkey = next_account_info(accounts_iter)?;\n    \n    let mut hello_state = HelloState::try_from_slice(&hello_state_account.data.borrow())?;\n    hello_state.is_initialized = true;\n    hello_state.serialize(&mut &mut  hello_state_account.data.borrow_mut()[..])?;\n    msg!("Account initialized:");\n    \n    let clock = Clock::from_account_info(&sys_clock_pubkey);\n    // geting timestamp\n    let current_timestamp = clock.uinx_timestamp;\n    msg!("Current Timestamp: {}", current_timestamp);\n    Ok(())\n    \n}\n')),(0,o.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u901a\u8fc7\u5ba2\u6237\u7aef\u4f20\u9012\u65f6\u949f\u7684 sysvar \u516c\u5171\u5730\u5740"),(0,o.kt)("h3",{id:"\u76f4\u63a5\u5728\u6307\u4ee4\u5185\u8bbf\u95ee\u65f6\u949f"},"\u76f4\u63a5\u5728\u6307\u4ee4\u5185\u8bbf\u95ee\u65f6\u949f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use borsh::{BorshDeserialize, BorshSerialize};\nuse solana_program::{\n    account_info::{next_account_info, AccountInfo},\n    clock::Clock,\n    entrypoint,\n    entrypoint::ProgramResult,\n    msg,\n    pubkey::Pubkey,\n    sysvar::Sysvar,\n};\n\nentrypoint!(process_instruction);\n\n#[derive(BorshSerialize, BorshDeserialize, Debug)]\npub struct HelloState {\n    is_initialized: bool,\n}\n\n// Accounts required\n/// 1. [signer, writable] Payer\n/// 2. [writable] Hello state account\npub fn process_instruction(\n    _program_id: &Pubkey,\n    accounts: &[AccountInfo],\n    _instruction_data: &[u8],   \n) -> ProgramResult {\n     let accounts_iter = &mut accounts.iter();\n    // Payer account\n    let _payer_account = next_account_info(accounts_iter)?;\n    // Hello state account\n    let hello_state_account = next_account_info(accounts_iter)?;\n    \n    \n    // getting clock directly\n    let clock = Clock::get()?;\n    \n    let mut hello_state = HelloState:;try_from_slice(&hello_state_account.data.borrow())?;\n    hello_state.is_initialized = true;\n    hello_state.serialize(&mut &mut hello_state_account.data.borrow_mut()[..])?;\n    msg!("Account initialized :)");\n    \n    // Getting timestamp\n    let current_timestamp = clock.unix_timestamp;\n    msg!("Current Timestamp: {}", current_timestamp);\n\n    Ok(())\n}\n')),(0,o.kt)("p",null,"\u5ba2\u6237\u7aef\u6307\u4ee4\uff0c\u73b0\u5728\u53ea\u9700\u8981\u4f20\u9012\u72b6\u6001\u548c\u4ed8\u6b3e\u4eba\u5e10\u6237\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n  clusterApiUrl,\n  Connection,\n  Keypair,\n  LAMPORTS_PER_SOL,\n  PublicKey,\n  SystemProgram,\n  Transaction,\n  TransactionInstruction, \n} from "@solana/web3.js";\n\n(async () => {\n    const programId = new PublicKey("4ZEdbCtb5UyCSiAMHV5eSHfyjq3QwbG3yXb6oHD7RYjk");\n    \n    const connection = new Connection(clusterApiUrl("devnet"), "confirmed");\n    // todo\n})();\n')))}p.isMDXComponent=!0}}]);
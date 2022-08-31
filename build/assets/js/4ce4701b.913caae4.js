"use strict";(self.webpackChunkweb_3_blog=self.webpackChunkweb_3_blog||[]).push([[4148],{3905:(n,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var a=t(7294);function e(n,r,t){return r in n?Object.defineProperty(n,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[r]=t,n}function o(n,r){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),t.push.apply(t,a)}return t}function i(n){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){e(n,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))}))}return n}function c(n,r){if(null==n)return{};var t,a,e=function(n,r){if(null==n)return{};var t,a,e={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(e[t]=n[t]);return e}(n,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(e[t]=n[t])}return e}var u=a.createContext({}),s=function(n){var r=a.useContext(u),t=r;return n&&(t="function"==typeof n?n(r):i(i({},r),n)),t},l=function(n){var r=s(n.components);return a.createElement(u.Provider,{value:r},n.children)},p={inlineCode:"code",wrapper:function(n){var r=n.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(n,r){var t=n.components,e=n.mdxType,o=n.originalType,u=n.parentName,l=c(n,["components","mdxType","originalType","parentName"]),d=s(t),m=e,g=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return t?a.createElement(g,i(i({ref:r},l),{},{components:t})):a.createElement(g,i({ref:r},l))}));function m(n,r){var t=arguments,e=r&&r.mdxType;if("string"==typeof n||e){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=n,c.mdxType="string"==typeof n?n:e,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8067:(n,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=t(7462),e=(t(7294),t(3905));const o={},i="\u4f17\u7b79dapp",c={unversionedId:"rust_contract/solana/solana_\u9879\u76ee/crowdfunding_dapp",id:"rust_contract/solana/solana_\u9879\u76ee/crowdfunding_dapp",title:"\u4f17\u7b79dapp",description:"git//github.com/SushantChandla/solana-crowd-funding/blob/main/program/src/lib.rs",source:"@site/docs\\rust_contract\\solana\\05_solana_\u9879\u76ee\\crowdfunding_dapp.md",sourceDirName:"rust_contract/solana/05_solana_\u9879\u76ee",slug:"/rust_contract/solana/solana_\u9879\u76ee/crowdfunding_dapp",permalink:"/docs/rust_contract/solana/solana_\u9879\u76ee/crowdfunding_dapp",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"rust_contract",previous:{title:"\u4f7f\u7528anchor\u521b\u5efa\u4e00\u4e2ablog dapp",permalink:"/docs/rust_contract/solana/solana_\u9879\u76ee/blog_dapp_by_anchor"},next:{title:"\u4f7f\u7528\u5408\u7ea6\u53d1\u884c\u81ea\u5df1\u7684token",permalink:"/docs/rust_contract/solana/solana_\u9879\u76ee/crypto_currency"}},u={},s=[{value:"\u9879\u76ee\u8bbe\u7f6e",id:"\u9879\u76ee\u8bbe\u7f6e",level:2},{value:"\u786e\u5b9a\u4f17\u7b79\u7684\u529f\u80fd",id:"\u786e\u5b9a\u4f17\u7b79\u7684\u529f\u80fd",level:3},{value:"\u7f16\u5199\u4ee3\u7801",id:"\u7f16\u5199\u4ee3\u7801",level:3},{value:"\u521b\u5efa\u6d3b\u52a8\u8be6\u7ec6",id:"\u521b\u5efa\u6d3b\u52a8\u8be6\u7ec6",level:2},{value:"\u63d0\u53d6\u5b58\u6b3e\u5b9e\u73b0",id:"\u63d0\u53d6\u5b58\u6b3e\u5b9e\u73b0",level:2},{value:"\u5411\u6d3b\u52a8\u6350\u6b3e",id:"\u5411\u6d3b\u52a8\u6350\u6b3e",level:3},{value:"\u90e8\u7f72\u5408\u7ea6",id:"\u90e8\u7f72\u5408\u7ea6",level:2},{value:"\u524d\u7aef\u5f00\u53d1",id:"\u524d\u7aef\u5f00\u53d1",level:2}],l={toc:s};function p(n){let{components:r,...t}=n;return(0,e.kt)("wrapper",(0,a.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,e.kt)("h1",{id:"\u4f17\u7b79dapp"},"\u4f17\u7b79dapp"),(0,e.kt)("p",null,"git: ",(0,e.kt)("a",{parentName:"p",href:"https://github.com/SushantChandla/solana-crowd-funding/blob/main/program/src/lib.rs"},"https://github.com/SushantChandla/solana-crowd-funding/blob/main/program/src/lib.rs")),(0,e.kt)("h2",{id:"\u9879\u76ee\u8bbe\u7f6e"},"\u9879\u76ee\u8bbe\u7f6e"),(0,e.kt)("pre",null,(0,e.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-react-app crowd-funding\n")),(0,e.kt)("p",null,"\u521b\u5efa\u5408\u7ea6\u9879\u76ee"),(0,e.kt)("pre",null,(0,e.kt)("code",{parentName:"pre",className:"language-bash"},"cd crowd-funding\ncargo new program --lib\n")),(0,e.kt)("p",null,"\u521b\u5efa ",(0,e.kt)("inlineCode",{parentName:"p"},"Xargo.toml"),", \u5199\u5165"),(0,e.kt)("pre",null,(0,e.kt)("code",{parentName:"pre",className:"language-toml"},"[target.bpfel-unknown-unknown.dependencies.std]\nfeatures = []\n")),(0,e.kt)("p",null,"\u66f4\u65b0",(0,e.kt)("inlineCode",{parentName:"p"},"Cargo.toml")),(0,e.kt)("pre",null,(0,e.kt)("code",{parentName:"pre",className:"language-toml"},'[package]\nname = "program"\nversion = "0.1.0"\nedition = "2018"\n\n[dependencies]\nsolana-program = "1.7.14"\nborsh = "0.9.1"\nborsh-derive = "0.9.1"\n\n[features]\nno-entrypoint = []\n\n[dev-dependencies]\nsolana-program-test = "1.7.14"\nsolana-sdk = "1.7.14"\n\n[lib]\ncrate-type = ["cdylib", "lib"]\n')),(0,e.kt)("h3",{id:"\u786e\u5b9a\u4f17\u7b79\u7684\u529f\u80fd"},"\u786e\u5b9a\u4f17\u7b79\u7684\u529f\u80fd"),(0,e.kt)("ul",null,(0,e.kt)("li",{parentName:"ul"},(0,e.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a\u4f17\u7b79\u6d3b\u52a8")),(0,e.kt)("li",{parentName:"ul"},(0,e.kt)("p",{parentName:"li"},"\u4ece\u6d3b\u52a8\u4e2d\u63d0\u6b3e")),(0,e.kt)("li",{parentName:"ul"},(0,e.kt)("p",{parentName:"li"},"\u5411\u6d3b\u52a8\u6350\u8d60"))),(0,e.kt)("h3",{id:"\u7f16\u5199\u4ee3\u7801"},"\u7f16\u5199\u4ee3\u7801"),(0,e.kt)("p",null,"\u5148\u5199\u5165\u57fa\u7840\u4ee3\u7801"),(0,e.kt)("pre",null,(0,e.kt)("code",{parentName:"pre",className:"language-rust"},"// First we include what we are going to need in our program. \n// This  is the Rust style of importing things.\n// Remember we added the dependencies in cargo.toml\n// And from the `solana_program` crate we are including  all the required things.\nuse solana_program::{\n    account_info::{next_account_info, AccountInfo},\n    entrypoint,\n    entrypoint::ProgramResult,\n    msg,\n    program_error::ProgramError,\n    pubkey::Pubkey,\n    rent::Rent,\n    sysvar::Sysvar,\n};\n\nentrypoint!(process_instruction);\n\nfn process_instruction(\n    program_id: &Pubkey,\n    accounts: &[AccountInfo],\n    instruction_data: &[u8],\n) -> ProgramResult{\n     Ok(())\n}\n")),(0,e.kt)("p",null,"\u7136\u540e\u5199\u5165\u57fa\u672c\u6d41\u7a0b"),(0,e.kt)("pre",null,(0,e.kt)("code",{parentName:"pre",className:"language-rust"},'use solana_program::{\n    account_info::{next_account_info, AccountInfo},\n    entrypoint,\n    entrypoint::ProgramResult,\n    msg,\n    program_error::ProgramError,\n    pubkey::Pubkey,\n    rent::Rent,\n    sysvar::Sysvar,\n};\n\nentrypoint!(process_instruction);\n\nfn process_instruction(\n    program_id: &Pubkey,\n    accounts: &[AccountInfo],\n    instruction_data: &[u8],\n) -> ProgramResult{\n    if instruction_data.len() == 0{\n        return Err(ProgramError::InvalidInstructionData);\n    }\n    \n    // 1. choose 0 for crate_campaign\n    // 2. 1 for withdraw\n    // 3. 2 fro donate\n    if instruction_data[0] == 0 {\n        return create_campaign(\n            program_id,\n            accounts,\n            &instruction_data[1..instrction_data.len()],\n        );\n    }else if instruction_data[0] == 1 {\n        return withdraw(\n             program_id,\n             accounts,\n             &instruction_data[1..instrction_data.len()],       \n        );\n    }else if instuction_data[0] == 2 {\n        return donate(\n             program_id,\n             accounts,\n             &instruction_data[1..instrction_data.len()],       \n        );\n    }\n    msg!("din\'t find the entrypoint required");\n    Err(ProgramError::InvalidInstructionData)\n}\n\nfn create_campaign(\n    program_id: &Pubkey,\n    accounts: &[AccountInfo],\n    instruction_data: &[u8],\n) -> ProgramResult {\n    Ok(())\n}\n\nfn withdraw(\n    program_id: &Pubkey,\n    accounts: &[AccountInfo],\n    instruction_data: &[u8],\n) -> ProgramResult {\n    Ok(())\n}\n\nfn donate(\n    program_id: &Pubkey,\n    accounts: &[AccountInfo],\n    instruction_data: &[u8],\n) -> ProgramResult {\n    Ok(())\n}\n')),(0,e.kt)("h2",{id:"\u521b\u5efa\u6d3b\u52a8\u8be6\u7ec6"},"\u521b\u5efa\u6d3b\u52a8\u8be6\u7ec6"),(0,e.kt)("pre",null,(0,e.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Debug)]\nstruct Human {\n    /// we can add all the fields in our struct here.\n    /// we also have to specify the type of each variable.\n    /// Like the [eyes_color] here is a `String` type object.\n    pub eyes_color: String,\n    pub name: String,\n    pub height: i32,\n}\n")),(0,e.kt)("pre",null,(0,e.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(BorshSerialize, BorshDeserialize, Debug)]\nstruct CampaignDetails {\n    pub admin: Pubkey,\n    pub name: String,\n    pub description: String,\n    pub image_link: String,\n    pub amount_donated: u64,\n}\n")),(0,e.kt)("p",null,"\u5b8c\u6210\u521b\u5efa\u903b\u8f91"),(0,e.kt)("pre",null,(0,e.kt)("code",{parentName:"pre",className:"language-rust"},'fn create_campaign(\n    program_id: &Pubkey,\n    accounts: &[AccountInfo],\n    instruction_data: &[u8],\n) -> ProgramResult {\n    let account_iter = &mut accounts.iter();\n    \n    let writing_account = next_account_info(accounts_iter)?;\n    \n    let creator_account = next_account_info(accounts_iter)?;\n\n    if !create_account.is_signer{\n        msg!("creator_account should be signer");\n        return Err(ProgramError::IncorrectProgramId);\n    }\n    \n    if writing_account.owner != program_id {\n       msg!("writing_account isn\'t owned by program");\n       return Err(ProgramError::IncorrectProgramId);    \n    }\n    \n    let mut input_data = CampaignDetails::try_from_slice(&instruction_data)\n        .expect("Instruction data serialization didn\'t worked");\n    \n    if input_data.admin != *creator_account.key{\n        msg!("Invaild instruction data");\n        return Err(ProgramError::InvalidInstructionData);\n    }\n\n    /// get the minimum balance we need in our program account.\n    let rent_exemption = Rent::get()?.minimum_balance(writing_account.data_len());\n    /// And we make sure our program account (`writing_account`) has that much lamports(balance).\n    if **writing_account.lamports.borrow() < rent_exemption {\n        msg!("The balance of writing_account should be more then rent_exemption");\n        return Err(ProgramError::InsufficientFunds);\n    }\n    // Then we can set the initial amount donate to be zero.\n    input_data.amount_donated=0;\n    \n    input_data.serialize(&mut &mut writing_account.data.borrow_mut()[..]?;\n    Ok(())\n);\n\n}\n')),(0,e.kt)("h2",{id:"\u63d0\u53d6\u5b58\u6b3e\u5b9e\u73b0"},"\u63d0\u53d6\u5b58\u6b3e\u5b9e\u73b0"),(0,e.kt)("p",null,"\u63d0\u53d6\u5b58\u6b3e\u7684\u6570\u636e\u6570\u636e\u7ed3\u6784"),(0,e.kt)("pre",null,(0,e.kt)("code",{parentName:"pre",className:"language-rus#[derive(BorshSerialize,",metastring:"BorshDeserialize, Debug)]","BorshDeserialize,":!0,"Debug)]":!0},"  struct WithdrawRequest {\n      pub amount: u64,\n  }\n")),(0,e.kt)("p",null,"\u5b9e\u73b0\u63d0\u53d6\u903b\u8f91"),(0,e.kt)("pre",null,(0,e.kt)("code",{parentName:"pre",className:"language-rust"},'fn withdraw(\n    program_id: &Pubkey,\n    accounts: &[AccountInfo],\n    instruction_data: &[u8],\n) -> ProgramResult{\n    let accounts_iter = &mut accounts.iter();\n    let writing_account = next_account_info(accounts_iter)?;\n    let admin_account = next_account_info(accounts_iter)?;\n    \n    // We check if the writing account is owned by program.\n    if writing_account.owner != program_id {\n        msg!("writing_account isn\'t owned by program");\n        return Err(ProgramError::IncorrectProgramId);\n    }\n\n    // Admin account should be the signer in this trasaction.\n    if !admin_account.is_signer {\n        msg!("admin should be signer");\n        return Err(ProgramError::IncorrectProgramId);\n    }\n    \n    let campaign_data = CampaignDetails::try_from_slice(*writing_account.data.borrow())\n        .expect("Error deserializing data");\n    \n    let campaign_data.admin != *admin_account.key {\n        msg!("Only the account admin can withdraw");\n        return Err(ProgramError::InvalidAccountData);\n    }\n\n    let input_data = WithdrawRequest::try_from_slice(&instruction_data)\n        .expect("Instruction data serialization didn\'t worked");\n    \n     let rent_exemption = Rent::get()?.minimum_balance(writing_account.data_len());\n \n     /// We check if we have enough funds\n     if **writing_account.lamports.borrow() - rent_exemption < input_data.amount {\n         msg!("Insufficent balance");\n         return Err(ProgramError::InsufficientFunds);\n     }\n    \n     /// Transfer balance\n     /// We will decrease the balance of the program account, and increase the admin_account balance.\n     **writing_account.try_borrow_mut_lamports()? -= input_data.amount;\n     **admin_account.try_borrow_mut_lamports()? += input_data.amount;\n     Ok(())   \n}\n')),(0,e.kt)("h3",{id:"\u5411\u6d3b\u52a8\u6350\u6b3e"},"\u5411\u6d3b\u52a8\u6350\u6b3e"),(0,e.kt)("pre",null,(0,e.kt)("code",{parentName:"pre",className:"language-rust"},'fn donate(\n    program_id: &Pubkey,\n    accounts: &[AccountInfo],\n    _instruction_data: &[u8],\n) -> ProgramResult {\n    let accounts_iter = &mut accounts.iter();\n    let writing_account = next_account_info(accounts_iter)?;\n    let donator_program_account = next_account_info(accounts_iter)?;\n    let donator = next_account_info(accounts_iter)?;\n    \n    if writing_account.owner != program_id {\n        msg!("writing_account isn\'t owned by program");\n        return Err(ProgramError::IncorrectProgramId);\n    }\n    if donator_program_account.owner != program_id {\n        msg!("donator_program_account isn\'t owned by program");\n        return Err(ProgramError::IncorrectProgramId);\n    }\n    if !donator.is_signer {\n        msg!("donator should be signer");\n        return Err(ProgramError::IncorrectProgramId);\n    }\n    \n    let mut campaign_data = CampaignDetails::try_from_slice(*writing_account.data.borrow())\n        .expect("Error deserializing data");\n\n    campaign_data.amount_donated += **donator_program_account.lamports.borrow();\n\n    **writing_account.try_borrow_mut_lamports()? += **donator_program_account.lamports.borrow();\n    **donator_program_account.try_borrow_mut_lamports()? = 0;\n\n    campaign_data.serialize(&mut &mut writing_account.data.borrow_mut()[..])?;\n\n    Ok(())\n}\n')),(0,e.kt)("h2",{id:"\u90e8\u7f72\u5408\u7ea6"},"\u90e8\u7f72\u5408\u7ea6"),(0,e.kt)("pre",null,(0,e.kt)("code",{parentName:"pre",className:"language-bash"},"cargo build-bpf --manifest-path=Cargo.toml --bpf-out-dir=dist/program\n\nsolana-keygen new -o keypair.json\n\nsolana airdrop 1 <YourPublicKey> --url https://api.devnet.solana.com \n\nsolana deploy --keypair keypair.json dist/program/program.so --url https://api.devnet.solana.com \n\nProgram Id: 286rapsUbvDe1ZgBeNhp37YHvEPwWPTr4Bkce4oMpUKT\n")),(0,e.kt)("h2",{id:"\u524d\u7aef\u5f00\u53d1"},"\u524d\u7aef\u5f00\u53d1"),(0,e.kt)("p",null,"todo"))}p.isMDXComponent=!0}}]);
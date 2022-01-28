"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2205],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(n),h=o,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||r;return n?a.createElement(m,c(c({ref:t},d),{},{components:n})):a.createElement(m,c({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<r;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2618:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>l,metadata:()=>s,toc:()=>d,default:()=>u});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),c=["components"],i={id:"polyjuice",title:"Technical Bits on Polyjuice"},l=void 0,s={unversionedId:"essays/polyjuice",id:"essays/polyjuice",title:"Technical Bits on Polyjuice",description:"Polyjuice is an Ethereum compatible layer and has implemented most of the functions of Ethereum on CKB,\xa0including running an EVM contract on CKB-VM.\xa0We believe that we have achieved full-featured compatibility with the implementation of EVM,which is also the power of CKB-VM.By polyjuice we want to showcase that it is perfectly possible to use account model on Nervos CKB. The flexibility here actually enables countless opportunities.",source:"@site/docs/essays/polyjuice.mdx",sourceDirName:"essays",slug:"/essays/polyjuice",permalink:"/docs/essays/polyjuice",tags:[],version:"current",lastUpdatedBy:"xy2101",lastUpdatedAt:1643343856,formattedLastUpdatedAt:"1/28/2022",frontMatter:{id:"polyjuice",title:"Technical Bits on Polyjuice"},sidebar:"Essays",previous:{title:"Introduction to CKB Studio",permalink:"/docs/essays/introduction-to-ckb-studio"},next:{title:"CKB FAQs",permalink:"/docs/essays/faq"}},d=[{value:"Basic Concepts",id:"basic-concepts",children:[{value:"Account",id:"account",children:[],level:3},{value:"Contract",id:"contract",children:[],level:3},{value:"Program",id:"program",children:[],level:3},{value:"Generator",id:"generator",children:[],level:3},{value:"Validator",id:"validator",children:[],level:3},{value:"Indexer",id:"indexer",children:[],level:3}],level:2},{value:"Design Details",id:"design-details",children:[{value:"How to organize cells in a CKB transaction?",id:"how-to-organize-cells-in-a-ckb-transaction",children:[],level:3},{value:"The CKB transaction generation process",id:"the-ckb-transaction-generation-process",children:[],level:3},{value:"The CKB transaction validation process",id:"the-ckb-transaction-validation-process",children:[],level:3},{value:"Communicate through ckb-vm syscalls",id:"communicate-through-ckb-vm-syscalls",children:[],level:3}],level:2},{value:"Implementation Details",id:"implementation-details",children:[{value:"How to handle contract creation?",id:"how-to-handle-contract-creation",children:[],level:3},{value:"How to handle contract destruction?",id:"how-to-handle-contract-destruction",children:[],level:3},{value:"How to generate a contract call contract CKB transaction?",id:"how-to-generate-a-contract-call-contract-ckb-transaction",children:[],level:3},{value:"How to validate contract call contract CKB transaction?",id:"how-to-validate-contract-call-contract-ckb-transaction",children:[],level:3},{value:"How to verify the contract sender (EoA account)?",id:"how-to-verify-the-contract-sender-eoa-account",children:[],level:3},{value:"How to handle logs?",id:"how-to-handle-logs",children:[],level:3}],level:2}],p={toc:d};function u(e){var t=e.components,i=(0,o.Z)(e,c);return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/polyjuice"},"Polyjuice")," is an Ethereum compatible layer and has implemented most of the functions of Ethereum on CKB,\xa0including running an EVM contract on CKB-VM.\xa0We believe that we have achieved full-featured compatibility with the implementation of EVM,which is also the power of CKB-VM.By polyjuice we want to showcase that it is perfectly possible to use account model on Nervos CKB. The flexibility here actually enables countless opportunities."),(0,r.kt)("h2",{id:"basic-concepts"},"Basic Concepts"),(0,r.kt)("h3",{id:"account"},"Account"),(0,r.kt)("p",null,"There are two kinds of accounts, contract account, and EoA account."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Contract Account")),(0,r.kt)("p",null," The contract account in Polyjuice is a cell constrained by Polyjuice type script. The type script args is a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0022-transaction-structure/0022-transaction-structure.md#type-id"},(0,r.kt)("inlineCode",{parentName:"a"},"type_id"))," value so that the type script is unique. The first 32 bytes of the cell data is the ",(0,r.kt)("inlineCode",{parentName:"p"},"storage root")," (sparse-merkle-tree) of the contract. The second 32 bytes of the cell data is the ",(0,r.kt)("inlineCode",{parentName:"p"},"code_hash")," (",(0,r.kt)("inlineCode",{parentName:"p"},"blake2b(code)"),") of the contract. Since we want everyone to use the contract, we default the use of an always success lock script. We can also use any lock script for access control or other purposes."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"EoA Account")),(0,r.kt)("p",null,"The EoA account in Polyjuice is all live cells locked by default secp256k1 sighash lock script. The id of the account is the lock script args."),(0,r.kt)("h3",{id:"contract"},"Contract"),(0,r.kt)("p",null,"A contract in Polyjuice is mostly the same as an ethereum contract. You can write your contract in Solidity, Vyper, or Assembly, then compile to EVM byte code. There are some minor differences. Since it's ",(0,r.kt)("strong",{parentName:"p"},"impossible")," to read block information from the current block, we instead read block information from the most recent block. The most recent means the latest block of blocks includes the transaction inputs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"max(block_number(inputs))\n")),(0,r.kt)("p",null,"It will effect following op codes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"BLOCKHASH")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"COINBASE")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TIMESTAMP")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NUMBER")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DIFFICULTY")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GASLIMIT"))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"DIFFICULTY")," value is the difficulty of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0020-ckb-consensus-protocol/0020-ckb-consensus-protocol.md#dynamic-difficulty-adjustment-mechanism"},"Nervos CKB chain"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"GASLIMIT")," here is a constant value, which equals the max value of ",(0,r.kt)("inlineCode",{parentName:"p"},"int64_t "),"(9223372036854775807). The transaction cost is determined by its size and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0014-vm-cycle-limits/0014-vm-cycle-limits.md"},"cycles"),", so gas limit is meaningless in Polyjuice."),(0,r.kt)("p",null," The ",(0,r.kt)("inlineCode",{parentName:"p"},"COINBASE")," return value and ",(0,r.kt)("inlineCode",{parentName:"p"},"SELFDESTRUCT")," beneficiary address are the first 20 bytes of lock script hash, which is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"blake2b(lock_script)[0..20]\n")),(0,r.kt)("h3",{id:"program"},"Program"),(0,r.kt)("p",null,"A program is a ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"CALL")," with parameters. Since polyjuice supports contract call contract, a polyjuice transaction can contain multiple programs, which will be serialized and put into witness."),(0,r.kt)("h3",{id:"generator"},"Generator"),(0,r.kt)("p",null,"Polyjuice generator can generate a Polyjuice transaction through JSONRPC API as below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"fn create(sender: H160, code: Bytes) -> TransactionReceipt;\nfn call(sender: H160, contract_address: H160, input: Bytes) -> TransactionReceipt;\n")),(0,r.kt)("h3",{id:"validator"},"Validator"),(0,r.kt)("p",null,"Polyjuice validator is the type script that verifies the transformation of contract cells."),(0,r.kt)("h3",{id:"indexer"},"Indexer"),(0,r.kt)("p",null,"Indexer is a Polyjuice module for indexing every Polyjuice transaction in CKB block. The contract metadata, alteration, and all the logs emitted from the Polyjuice transaction will be saved. Also, all live cells will be indexed for running the generator (build Polyjuice transaction)."),(0,r.kt)("h2",{id:"design-details"},"Design Details"),(0,r.kt)("h3",{id:"how-to-organize-cells-in-a-ckb-transaction"},"How to organize cells in a CKB transaction?"),(0,r.kt)("img",{src:n(2322).Z,width:"600"}),(0,r.kt)("p",null,"If the picture is not clear, please click\uff1a\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/TheWaWaR/polyjuice/blob/docs/docs/assets/polyjuice-transaction-structure.pdf"},"Organize cells in a CKB transaction"))),(0,r.kt)("h3",{id:"the-ckb-transaction-generation-process"},"The CKB transaction generation process"),(0,r.kt)("img",{src:n(9105).Z,width:"600"}),(0,r.kt)("p",null,"If the picture is not clear, please click\uff1a\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/TheWaWaR/polyjuice/blob/docs/docs/assets/polyjuice-how-generator-works.pdf"},"CKB transaction generation process"))),(0,r.kt)("h3",{id:"the-ckb-transaction-validation-process"},"The CKB transaction validation process"),(0,r.kt)("img",{src:n(8192).Z,width:"600"}),(0,r.kt)("p",null,"If the picture is not clear, please click\uff1a\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/TheWaWaR/polyjuice/blob/docs/docs/assets/polyjuice-how-validator-works.pdf"},"CKB transaction validation process"))),(0,r.kt)("h3",{id:"communicate-through-ckb-vm-syscalls"},"Communicate through ckb-vm syscalls"),(0,r.kt)("p",null,"In Generator and Indexer, we use syscalls to handle the event emitted from the program execution process. The syscalls we currently used are shown below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"2177 is for ckb_debug, useful when you want to debug the generator."),(0,r.kt)("li",{parentName:"ul"},"3075 is for returning the EVM result."),(0,r.kt)("li",{parentName:"ul"},"3076 is for logging."),(0,r.kt)("li",{parentName:"ul"},"3077 is for saving ",(0,r.kt)("inlineCode",{parentName:"li"},"SELFDESTRUCT")," beneficiary address."),(0,r.kt)("li",{parentName:"ul"},"3078 is for handle CALL and CREATE opcodes."),(0,r.kt)("li",{parentName:"ul"},"3079 is for returning code size of a contract to EVM."),(0,r.kt)("li",{parentName:"ul"},"3080 is for returning a coded slice of a contract to EVM.")),(0,r.kt)("h2",{id:"implementation-details"},"Implementation Details"),(0,r.kt)("h3",{id:"how-to-handle-contract-creation"},"How to handle contract creation?"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE")," from a sender (EoA account) or contract will lead to contract creation. In generator,  the created cell will be assigned a type_id type script, and the contract code hash will be saved in the data field next to the account storage root hash. In validator, type script will check the contract code hash match the code_hash in the data field."),(0,r.kt)("h3",{id:"how-to-handle-contract-destruction"},"How to handle contract destruction?"),(0,r.kt)("p",null,"Contract destruction only happens when a ",(0,r.kt)("inlineCode",{parentName:"p"},"SELFDESTRUCT")," opcode is executed. In the generator, the destructed contract cell is consumed as input, then put an output cell as the beneficiary cell, and the beneficiary address is the corresponding secp256k1 sighash lock script."),(0,r.kt)("h3",{id:"how-to-generate-a-contract-call-contract-ckb-transaction"},"How to generate a contract call contract CKB transaction?"),(0,r.kt)("p",null,"When CALL or CREATE opcode is invoked in EVM, we call it a contract call contract transaction. When invoking CALL opcode, generator load contract code and latest storage from the database or saved state (the contract has already been loaded from database) by destination and execute it. When CREATE opcode executed after EVM started, the generator will put an output cell just like how contract creation works."),(0,r.kt)("h3",{id:"how-to-validate-contract-call-contract-ckb-transaction"},"How to validate contract call contract CKB transaction?"),(0,r.kt)("p",null,"The first contract created or called by EoA account we call it ",(0,r.kt)("strong",{parentName:"p"},"entrance")," contract, other contracts if there is any, we call them normal contracts. Only one program is allowed in ",(0,r.kt)("strong",{parentName:"p"},"the entrance")," contract, and all its calls to normal contracts' programs must match the order and count. All normal contracts' calls to sub normal contracts' programs must check they match the request. Since multiple contracts may call one contract, the count can not be checked by a normal contract. Normal contracts only check their own programs, and ",(0,r.kt)("strong",{parentName:"p"},"the entrance")," contract will check all programs in current CKB transaction that are being called with the restricted sequence."),(0,r.kt)("h3",{id:"how-to-verify-the-contract-sender-eoa-account"},"How to verify the contract sender (EoA account)?"),(0,r.kt)("p",null,"Since EVM execution will use the sender information, we require the sender to sign the Polyjuice transaction and put the signature into witness. The sign content must include two parts:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"transaction hash  "),(0,r.kt)("li",{parentName:"ol"},"all contracts' related witnesses ")),(0,r.kt)("p",null,"The contract-related witness is serialized as part of the ",(0,r.kt)("inlineCode",{parentName:"p"},"WitnessArgs")," molecule structure, and the information is located in input_type (contract call/destruction) field or output_type (contract creation) field."),(0,r.kt)("h3",{id:"how-to-handle-logs"},"How to handle logs?"),(0,r.kt)("p",null,"In validator, the logs are just being ignored. When the generator generates the Polyjuice transaction, the logs are saved and returned as part of the transaction receipt. When the Indexer processes the Polyjuice transaction, the logs are saved to the database for users to query."),(0,r.kt)("p",null," In generator and Indexer the logs are trigged by LOG opcode, then:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"callback function ",(0,r.kt)("inlineCode",{parentName:"li"},"emit_log")," is called"),(0,r.kt)("li",{parentName:"ol"},"emit_log invoke a log syscall with topics and data as arguments"),(0,r.kt)("li",{parentName:"ol"},"Rust syscall handler function is called, the arguments been extracted and saved")))}u.isMDXComponent=!0},9105:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/polyjuice-how-generator-works-1f5bc5615400ce064ec0747af04cbe33.jpg"},8192:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/polyjuice-how-validator-works-665c47b8a838a156c893e9cf0f39b894.jpg"},2322:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/polyjuice-transaction-structure-9234b8a127cfdd9fc26f7e7a9239e25a.jpg"}}]);
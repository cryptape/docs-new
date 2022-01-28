"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[703],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var o=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),p=s,m=d["".concat(c,".").concat(p)]||d[p]||h[p]||a;return n?o.createElement(m,r(r({ref:t},u),{},{components:n})):o.createElement(m,r({ref:t},u))}));function p(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,r=new Array(a);r[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,r[1]=i;for(var l=2;l<a;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4647:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>c,metadata:()=>l,toc:()=>u,default:()=>d});var o=n(7462),s=n(3366),a=(n(7294),n(3905)),r=["components"],i={id:"economics",title:"Economics"},c=void 0,l={unversionedId:"basics/concepts/economics",id:"basics/concepts/economics",title:"Economics",description:"The Economics of the CKByte",source:"@site/docs/basics/concepts/economics.md",sourceDirName:"basics/concepts",slug:"/basics/concepts/economics",permalink:"/docs/basics/concepts/economics",tags:[],version:"current",lastUpdatedBy:"xy2101",lastUpdatedAt:1643343856,formattedLastUpdatedAt:"1/28/2022",frontMatter:{id:"economics",title:"Economics"},sidebar:"Basics",previous:{title:"Consensus",permalink:"/docs/basics/concepts/consensus"},next:{title:"CKB-VM",permalink:"/docs/basics/concepts/ckb-vm"}},u=[{value:"The Economics of the CKByte",id:"the-economics-of-the-ckbyte",children:[],level:2},{value:"Value Alignment",id:"value-alignment",children:[],level:2},{value:"State Rent",id:"state-rent",children:[],level:2},{value:"Base Issuance",id:"base-issuance",children:[],level:2},{value:"Secondary Issuance",id:"secondary-issuance",children:[],level:2},{value:"Nervos DAO",id:"nervos-dao",children:[],level:2},{value:"Further Reading",id:"further-reading",children:[],level:2}],h={toc:u};function d(e){var t=e.components,n=(0,s.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"the-economics-of-the-ckbyte"},"The Economics of the CKByte"),(0,a.kt)("p",null,"The CKByte is the native token of Nervos, and it is used to pay for the three types of fees that exist: Cycles (computation), Transaction Fees (security), and State Rent (storage)."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Cycles are fees paid to miners based on the amount of computer resources that are used to verify a transaction. These are measured by CKB-VM during the execution of any smart contracts in a transaction."),(0,a.kt)("li",{parentName:"ul"},"Transaction Fees are paid to miners for providing the computing power that provides security to the network. "),(0,a.kt)("li",{parentName:"ul"},"State Rent is paid to miners for providing storage space to persist the data in a transaction. ")),(0,a.kt)("p",null,"Cycles and Transaction Fees are paid one time to process and insert the transaction into the blockchain. State Rent is paid continuously to persist the data until it is removed."),(0,a.kt)("p",null,"Owning one CKByte entitles the holder to one byte of data storage on Nervos. When a new Cell is created, the user must own an amount of CKBytes equal to the space the Cell will occupy. These CKBytes will remain locked the entire time the Cell exists. When the Cell is consumed, the lock is released, and the CKBytes can be used again. State Rent is automatically paid while the CKBytes are locked."),(0,a.kt)("p",null,"All assets on Nervos require data storage, which means they are subject to State Rent. This creates direct value alignment because CKBytes are required to maintain an asset on Nervos. More about Value Alignment and State Rent are covered in the following sections."),(0,a.kt)("h2",{id:"value-alignment"},"Value Alignment"),(0,a.kt)("p",null,"As the value on a platform grows, it is important that the security of the platform also grows. If it does not, you can end up in a scenario where there is too little security for the value being stored. It would be like adding more and more gold into a bank vault, but never adding any additional guards. This makes it a potential target for attack. "),(0,a.kt)("p",null,"When miners are paid for their contributions, they are paid using the native token, the CKByte. As the value of the CKByte increases, so do the rewards for protecting the network. This ensures that a scenario is not created where the value of the CKBytes being stored on the network is very high, but the reward for securing the network is too low."),(0,a.kt)("p",null,"However, a problem can develop on multi-asset platforms if the total value of the assets gain value but the native token providing security does not. This is known as the \u201cheavy asset problem\u201d, and it is common among multi-asset platforms."),(0,a.kt)("p",null,"The heavy asset problem exists when there isn\u2019t a strong enough value correlation between the assets and the native token used to secure the underlying platform. Usage of CKBytes for the payment of Cycle and Transaction fees creates some demand similar to Bitcoin and Ethereum. However, history has demonstrated that this model does not rectify the problem."),(0,a.kt)("p",null,"Nervos addresses this by aligning the CKByte with data storage and mandating State Rent. This creates long-term demand directly, because assets require data storage. Every asset requires CKBytes and is subject to State Rent for the entire duration of its existence."),(0,a.kt)("h2",{id:"state-rent"},"State Rent"),(0,a.kt)("p",null,"Miners are responsible for ensuring that the data on the network is valid and preserved. The Cycle and Transaction fees are paid to ensure proper validation, but once the fee is paid there is no continued incentive for a miner to ensure the data is preserved. State Rent addresses this by continuously providing fees to miners for their participation in preserving the data on the network."),(0,a.kt)("p",null,"When a user puts data on Nervos they must pay a small amount of State Rent for the space their data occupies. Paying an upfront recurring fee presents a user experience problem since this requires continuous time and attention. Nervos solves this by using targeted inflation on users who are occupying space on Nervos."),(0,a.kt)("p",null,"When data is stored on Nervos, an amount of CKBytes is required to be locked. The locked CKBytes are ineligible for interest payments. Even though the number of CKBytes does not change while locked, the value is slowly decreasing because of inflation that only affects users who are storing data on Nervos. This small decrease in value is how State Rent is paid."),(0,a.kt)("p",null,"The inflation that pays the State Rent is created through a process called Secondary Issuance. Users who are not occupying space on Nervos have the option of gaining interest from Secondary Issuance by locking their CKBytes in the Nervos DAO. We will cover more on these topics in the following sections."),(0,a.kt)("h2",{id:"base-issuance"},"Base Issuance"),(0,a.kt)("p",null,"During the initial launch of the network the value of the CKByte will be low, which means the security on the network is low. In order to make Nervos a safe and attractive place to store assets, the security must be temporarily subsidized through a process known as Base Issuance."),(0,a.kt)("p",null,"Base Issuance is very similar to the mining process found in Bitcoin. Miners are paid a fixed amount of CKBytes for providing the computer resources to process transactions and secure the network. Over time the assets stored on the network will gain value, and fewer subsidies are necessary."),(0,a.kt)("p",null,"Base Issuance is paid for through using a fixed inflationary schedule. Approximately every four years the subsidy amount is halved until eventually stopping when the cap of 33.6 billion CKBytes have been issued. This provides a monetary policy that is transparent and predictable."),(0,a.kt)("h2",{id:"secondary-issuance"},"Secondary Issuance"),(0,a.kt)("p",null,"After the Base Issuance has ended, some have theorized that the incentive to miners will not provide enough security if it is only paid with fees from Cycles and Transactions. At the same time, miners require long term incentives that are directly aligned to ensure the data in Nervos is persisted. Both of these concerns are addressed through a process called Secondary Issuance."),(0,a.kt)("p",null,"Secondary Issuance follows a fixed inflation schedule of 1.344 billion CKBytes per year. This amount does not change. Unlike Base Issuance, Secondary Issuance does not affect everyone on the network. It is a small and targeted inflation from users that occupy space on Nervos or hold their CKBytes outside of the Nervos DAO."),(0,a.kt)("p",null,"The CKBytes from Secondary Issuance are distributed to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Miners maintaining the network (State Rent)."),(0,a.kt)("li",{parentName:"ul"},"Users of the Nervos DAO."),(0,a.kt)("li",{parentName:"ul"},"The Nervos Treasury for continued development.")),(0,a.kt)("h2",{id:"nervos-dao"},"Nervos DAO"),(0,a.kt)("p",null,"Holders of CKBytes have the option of locking them in the Nervos DAO to gain interest in a process similar to staking on other platforms. When this is done, the holder will accrue CKByte interest at a rate directly proportional to that of Secondary Issuance. This offsets the long-term inflationary effects of Secondary Issuance exactly, resulting in no loss of value over time."),(0,a.kt)("p",null,"Users who are occupying space on Nervos have their CKBytes locked, which are then ineligible to be placed in the Nervos DAO. Once the Cells occupying space are consumed, the CKBytes are released, and can then be placed in the Nervos DAO. This provides an incentive to remove unnecessary data from Nervos, therefore keeping the blockchain more manageable in the long term."),(0,a.kt)("h2",{id:"further-reading"},"Further Reading"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For more information on the economics of Nervos, please see the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0015-ckb-cryptoeconomics/0015-ckb-cryptoeconomics.md"},"Crypto-Economics RFC"),".")))}d.isMDXComponent=!0}}]);
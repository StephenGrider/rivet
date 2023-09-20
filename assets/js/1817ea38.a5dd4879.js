"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1905],{6593:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(1644);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=u(r),m=o,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||s;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:o,a[1]=i;for(var u=2;u<s;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2418:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var n=r(373),o=(r(1644),r(6593));const s={},a="Prompt Designer",i={unversionedId:"user-guide/features/prompt-designer",id:"user-guide/features/prompt-designer",title:"Prompt Designer",description:"The Prompt Designer gives you a UI to tweak and design your prompts that you pass into your Chat nodes.",source:"@site/docs/user-guide/features/prompt-designer.md",sourceDirName:"user-guide/features",slug:"/user-guide/features/prompt-designer",permalink:"/docs/user-guide/features/prompt-designer",draft:!1,editUrl:"https://github.com/ironclad/rivet/tree/main/packages/docs/docs/user-guide/features/prompt-designer.md",tags:[],version:"current",frontMatter:{},sidebar:"userGuide",previous:{title:"Recordings",permalink:"/docs/user-guide/recordings"},next:{title:"Trivet Tests",permalink:"/docs/user-guide/features/trivet-tests"}},p={},u=[{value:"Messages",id:"messages",level:2},{value:"Response",id:"response",level:2},{value:"Parameters",id:"parameters",level:2}],l={toc:u},c="wrapper";function d(e){let{components:t,...s}=e;return(0,o.kt)(c,(0,n.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"prompt-designer"},"Prompt Designer"),(0,o.kt)("p",null,"The Prompt Designer gives you a UI to tweak and design your prompts that you pass into your Chat nodes."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Prompt Designer",src:r(9687).Z,width:"1811",height:"1527"})),(0,o.kt)("p",null,"It is accessible either by:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Clicking the "Prompt Viewer" tab at the top of Rivet'),(0,o.kt)("li",{parentName:"ul"},"Clicking the flask icon on the output of a Chat node.")),(0,o.kt)("p",null,"When clicking the flask icon, the inputs and output of the Chat node will be copied into the Prompt Designer automatically."),(0,o.kt)("h2",{id:"messages"},"Messages"),(0,o.kt)("p",null,"The left side of the Prompt Designer contains the list of messages that will be sent to GPT. You can add, remove, and edit messages here."),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("p",null,"The middle of the Prompt Designer contains the response from GPT."),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,"The right side of the Prompt Designer contains tweakable parameters for GPT, such as the temperature, max tokens, etc."),(0,o.kt)("p",null,"Once you have tweaked your prompt, and set the settings to your desired values, you can click Run at the bottom left to test your prompt."))}d.isMDXComponent=!0},9687:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/prompt-designer-62bf993face1258cb9a3602f08fb2f00.png"}}]);
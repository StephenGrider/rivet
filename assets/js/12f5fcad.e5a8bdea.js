"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6828],{1042:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(3249);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,h=p["".concat(i,".").concat(d)]||p[d]||c[d]||r;return n?a.createElement(h,l(l({ref:t},m),{},{components:n})):a.createElement(h,l({ref:t},m))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:o,l[1]=s;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9119:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(3249),o=n(2689),r=n(9423),l=n(1872);const s={admonition:"admonition_ZmbV",admonitionHeading:"admonitionHeading_osZu",admonitionIcon:"admonitionIcon_MdRj",admonitionContent:"admonitionContent_xkkw"};const i={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(l.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(l.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(l.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(l.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(l.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},u={secondary:"note",important:"info",success:"tip",warning:"danger"};function m(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=a.Children.toArray(e),n=t.find((e=>a.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),o=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:o}}(e.children);return{...e,title:e.title??t,children:n}}function p(e){const{children:t,type:n,title:l,icon:p}=m(e),c=function(e){const t=u[e]??e,n=i[t];return n||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),i.info)}(n),d=l??c.label,{iconComponent:h}=c,f=p??a.createElement(h,null);return a.createElement("div",{className:(0,o.Z)(r.k.common.admonition,r.k.common.admonitionType(e.type),"alert",`alert--${c.infimaClassName}`,s.admonition)},a.createElement("div",{className:s.admonitionHeading},a.createElement("span",{className:s.admonitionIcon},f),d),a.createElement("div",{className:s.admonitionContent},t))}},5089:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(3249),o=n(2689);const r={tabItem:"tabItem_o9Hs"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,l),hidden:n},t)}},2327:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(7396),o=n(3249),r=n(2689),l=n(5986),s=n(6659),i=n(4532),u=n(5821),m=n(3312);function p(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function c(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=c(e),[l,s]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[i,u]=h({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,m.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),g=(()=>{const e=i??p;return d({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,r]),tabValues:r}}var g=n(3072);const b={tabList:"tabList_Dwv5",tabItem:"tabItem_KiUr"};function v(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:u}=e;const m=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),c=e=>{const t=e.currentTarget,n=m.indexOf(t),a=u[n].value;a!==s&&(p(t),i(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=m.indexOf(e.currentTarget)+1;t=m[n]??m[0];break}case"ArrowLeft":{const n=m.indexOf(e.currentTarget)-1;t=m[n]??m[m.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>m.push(e),onKeyDown:d,onClick:c},l,{className:(0,r.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":s===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=f(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",b.tabList)},o.createElement(v,(0,a.Z)({},e,t)),o.createElement(k,(0,a.Z)({},e,t)))}function N(e){const t=(0,g.Z)();return o.createElement(y,(0,a.Z)({key:String(t)},e))}},6285:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var a=n(7396),o=(n(3249),n(1042)),r=n(2327),l=n(5089);n(9119);const s={id:"assemble-prompt",title:"Assemble Prompt Node",sidebar_label:"Assemble Prompt"},i=void 0,u={unversionedId:"node-reference/assemble-prompt",id:"node-reference/assemble-prompt",title:"Assemble Prompt Node",description:"Overview",source:"@site/docs/node-reference/assemble-prompt.mdx",sourceDirName:"node-reference",slug:"/node-reference/assemble-prompt",permalink:"/docs/node-reference/assemble-prompt",draft:!1,editUrl:"https://github.com/ironclad/rivet/tree/main/packages/docs/docs/node-reference/assemble-prompt.mdx",tags:[],version:"current",frontMatter:{id:"assemble-prompt",title:"Assemble Prompt Node",sidebar_label:"Assemble Prompt"},sidebar:"nodeReference",previous:{title:"Assemble Message",permalink:"/docs/node-reference/assemble-message"},next:{title:"Chat",permalink:"/docs/node-reference/chat"}},m={},p=[{value:"Overview",id:"overview",level:2},{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2},{value:"Editor Settings",id:"editor-settings",level:2},{value:"Example: Assembling Multiple Chat Messages",id:"example-assembling-multiple-chat-messages",level:3},{value:"Example: Appending Chat Messages in a Loop",id:"example-appending-chat-messages-in-a-loop",level:3},{value:"Handling Missing Inputs",id:"handling-missing-inputs",level:3},{value:"Error Handling",id:"error-handling",level:2},{value:"See Also",id:"see-also",level:2}],c={toc:p},d="wrapper";function h(e){let{components:t,...s}=e;return(0,o.kt)(d,(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"./chat"},"Chat Node")," takes in a single Prompt input which can be a single message, or an array of messages that forms the message chain. The Assemble Prompt Node is used to assemble multiple chat messages into a single prompt. It takes multiple chat messages or strings as inputs and outputs a single prompt containing all the messages."),(0,o.kt)("p",null,"If a string is connected to any of the inputs, it will be converted to a User type chat message with the string as the message."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Assemble Prompt Node Screenshot",src:n(5730).Z,width:"684",height:"636"})),(0,o.kt)(r.Z,{defaultValue:"inputs",values:[{label:"Inputs",value:"inputs"},{label:"Outputs",value:"outputs"},{label:"Editor Settings",value:"settings"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"inputs",mdxType:"TabItem"},(0,o.kt)("h2",{id:"inputs"},"Inputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Title"),(0,o.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Message ","[i]"),(0,o.kt)("td",{parentName:"tr",align:null},"chat-message, chat-message[]"),(0,o.kt)("td",{parentName:"tr",align:null},"The ith chat message input to be assembled"),(0,o.kt)("td",{parentName:"tr",align:null},"N/A"),(0,o.kt)("td",{parentName:"tr",align:null},"Dynamic number of inputs based on how many connections there are"))))),(0,o.kt)(l.Z,{value:"outputs",mdxType:"TabItem"},(0,o.kt)("h2",{id:"outputs"},"Outputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Title"),(0,o.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Prompt"),(0,o.kt)("td",{parentName:"tr",align:null},"chat-message[]"),(0,o.kt)("td",{parentName:"tr",align:null},"The assembled chat messages"),(0,o.kt)("td",{parentName:"tr",align:null},"The output will be a single prompt resulting from assembling all valid chat messages"))))),(0,o.kt)(l.Z,{value:"settings",mdxType:"TabItem"},(0,o.kt)("h2",{id:"editor-settings"},"Editor Settings"),(0,o.kt)("p",null,"This node does not have any specific settings."))),(0,o.kt)("h3",{id:"example-assembling-multiple-chat-messages"},"Example: Assembling Multiple Chat Messages"),(0,o.kt)("p",null,"Let's say you have two ",(0,o.kt)("a",{parentName:"p",href:"./prompt"},"Prompt nodes"),': one with the the AI\'s text "How can I assist you today?" and the user\'s response "Hello". If you want to assemble these two messages into a single prompt to feed into a Chat Node, you can do the following:'),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add an Assemble Prompt Node to your graph."),(0,o.kt)("li",{parentName:"ol"},"Connect the output of the first Prompt node (AI's message) to ",(0,o.kt)("inlineCode",{parentName:"li"},"Message 1")," of the Assemble Prompt Node."),(0,o.kt)("li",{parentName:"ol"},"Connect the output of the second Prompt node (user's response) to ",(0,o.kt)("inlineCode",{parentName:"li"},"Message 2")," of the Assemble Prompt Node."),(0,o.kt)("li",{parentName:"ol"},"Connect the output of the Assemble Prompt Node to the ",(0,o.kt)("inlineCode",{parentName:"li"},"Prompt")," input of a Chat Node.")),(0,o.kt)("h3",{id:"example-appending-chat-messages-in-a-loop"},"Example: Appending Chat Messages in a Loop"),(0,o.kt)("p",null,"A common use case for the Assemble Prompt Node is to append chat messages in a loop. This can be achieved by using a Loop Controller Node in conjunction with the Assemble Prompt Node."),(0,o.kt)("p",null,"Here's how you can set this up:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add a Loop Controller Node to your graph."),(0,o.kt)("li",{parentName:"ol"},"Add an Assemble Prompt Node to your graph."),(0,o.kt)("li",{parentName:"ol"},"Connect the ",(0,o.kt)("inlineCode",{parentName:"li"},"Output 1")," of the Loop Controller Node to ",(0,o.kt)("inlineCode",{parentName:"li"},"Input 1")," of the Assemble Prompt Node. This will feed the output of the loop back into the Assemble Prompt Node."),(0,o.kt)("li",{parentName:"ol"},"Connect the ",(0,o.kt)("inlineCode",{parentName:"li"},"Output 1")," of the Assemble Prompt Node to ",(0,o.kt)("inlineCode",{parentName:"li"},"Input 1")," of the Loop Controller Node. This will effectively create a feedback loop where the Assemble Prompt Node feeds back into itself."),(0,o.kt)("li",{parentName:"ol"},"Connect your first message to ",(0,o.kt)("inlineCode",{parentName:"li"},"Input 1 Default")," of the Loop Controller Node. This will be the initial message that starts the loop."),(0,o.kt)("li",{parentName:"ol"},"Any additional messages that you want to append during each loop iteration can be connected to ",(0,o.kt)("inlineCode",{parentName:"li"},"Input 2"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"Input 3"),", etc of the Assemble Prompt Node.")),(0,o.kt)("p",null,"The Assemble Prompt Node will flatten the output, resulting in a list of the current messages. During each loop iteration, the Assemble Prompt Node will append any additional messages connected to its inputs."),(0,o.kt)("p",null,"This setup allows you to dynamically append chat messages in a loop, which can be useful in various scenarios such as creating a chatbot that can carry on a conversation with a user."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," If you want to control the number of loop iterations, you can do so by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"Max Iterations")," property of the Loop Controller Node."),(0,o.kt)("p",null,"Here's a diagram to help visualize the setup:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Loop Controller with Assemble Prompt Node",src:n(9844).Z,width:"2098",height:"874"})),(0,o.kt)("p",null,"This example demonstrates the power and flexibility of Rivet's node-based system, allowing you to create complex behaviors with just a few nodes."),(0,o.kt)("h3",{id:"handling-missing-inputs"},"Handling Missing Inputs"),(0,o.kt)("p",null,"If an input is missing or not a chat message, the Assemble Prompt Node will simply ignore it during the assembling process. This can be useful when dealing with optional inputs that may not always be present."),(0,o.kt)("h2",{id:"error-handling"},"Error Handling"),(0,o.kt)("p",null,"If no valid chat message inputs are provided, the output will be an empty array."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Q: What happens if I connect a non-chat message to the Assemble Prompt Node?")),(0,o.kt)("p",null,"A: The Assemble Prompt Node is designed to work with chat message inputs. If a non-chat message input is connected, the node will attempt to convert it to a chat message. In most cases, this will be a User type message with message being the data converted to a string. If this conversion isn't possible, the input will be ignored during the assembling process."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Q: Can I connect an Array Node to the Assemble Prompt Node?")),(0,o.kt)("p",null,"A: Yes, you can connect an Array Node to the Assemble Prompt Node. Each element of the array will be treated as a separate chat message to be assembled (flattens the array)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Q: How does the Assemble Prompt Node handle empty strings or null values?")),(0,o.kt)("p",null,"A: The Assemble Prompt Node will ignore any inputs that are null or not a chat message. Empty chat messages, however, will be included in the assembling operation."),(0,o.kt)("h2",{id:"see-also"},"See Also"))}h.isMDXComponent=!0},9844:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/assemble-prompt-node-example-02-58281e375e9beb27853612bdc6383d78.png"},5730:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/assemble-prompt-node-5c657f5eaed8b0847daaf9835178e1c7.png"}}]);
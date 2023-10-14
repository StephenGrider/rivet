"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2147],{6593:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(1644);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(a),p=r,h=m["".concat(i,".").concat(p)]||m[p]||d[p]||l;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},7026:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(1644),r=a(156);const l={tabItem:"tabItem_hFhF"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:a},t)}},6663:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(373),r=a(1644),l=a(156),o=a(1476),s=a(2824),i=a(9643),u=a(7190),c=a(6985);function m(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=d(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[i,u]=h({queryString:a,groupId:n}),[m,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),f=(()=>{const e=i??m;return p({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),g(e)}),[u,g,l]),tabValues:l}}var f=a(8810);const k={tabList:"tabList_A6Ol",tabItem:"tabItem_djxK"};function b(e){let{className:t,block:a,selectedValue:s,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==s&&(m(t),i(n))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:d},o,{className:(0,l.Z)("tabs__item",k.tabItem,o?.className,{"tabs__item--active":s===t})}),a??t)})))}function N(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=g(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",k.tabList)},r.createElement(b,(0,n.Z)({},e,t)),r.createElement(N,(0,n.Z)({},e,t)))}function y(e){const t=(0,f.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},62:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var n=a(373),r=(a(1644),a(6593)),l=a(6663),o=a(7026);const s={id:"trim-chat-messages",title:"Trim Chat Messages Node",sidebar_label:"Trim Chat Messages"},i=void 0,u={unversionedId:"node-reference/trim-chat-messages",id:"node-reference/trim-chat-messages",title:"Trim Chat Messages Node",description:"Trim Chat Messages Node Screenshot",source:"@site/docs/node-reference/trim-chat-messages.mdx",sourceDirName:"node-reference",slug:"/node-reference/trim-chat-messages",permalink:"/docs/node-reference/trim-chat-messages",draft:!1,editUrl:"https://github.com/ironclad/rivet/tree/main/packages/docs/docs/node-reference/trim-chat-messages.mdx",tags:[],version:"current",frontMatter:{id:"trim-chat-messages",title:"Trim Chat Messages Node",sidebar_label:"Trim Chat Messages"},sidebar:"nodeReference",previous:{title:"Get Embedding",permalink:"/docs/node-reference/get-embedding"},next:{title:"Array",permalink:"/docs/node-reference/array"}},c={},m=[{value:"Overview",id:"overview",level:2},{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2},{value:"Editor Settings",id:"editor-settings",level:2},{value:"Example 1: Trim a long chat message chain",id:"example-1-trim-a-long-chat-message-chain",level:2},{value:"Error Handling",id:"error-handling",level:2},{value:"FAQ",id:"faq",level:2},{value:"See Also",id:"see-also",level:2}],d={toc:m},p="wrapper";function h(e){let{components:t,...s}=e;return(0,r.kt)(p,(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Trim Chat Messages Node Screenshot",src:a(8140).Z,width:"1096",height:"604"})),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The Trim Chat Messages Node is used to manage the length of chat message chains in terms of tokens. It takes an array of chat messages and trims messages from either the beginning or the end of the list until the total length of the messages is under the configured token length. This is particularly useful for setting up infinite message chains that stay under the language model's context limit."),(0,r.kt)(l.Z,{defaultValue:"inputs",values:[{label:"Inputs",value:"inputs"},{label:"Outputs",value:"outputs"},{label:"Editor Settings",value:"settings"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"inputs",mdxType:"TabItem"},(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Input"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"chat-message[]")),(0,r.kt)("td",{parentName:"tr",align:null},"The array of chat messages to trim."),(0,r.kt)("td",{parentName:"tr",align:null},"(required)"),(0,r.kt)("td",{parentName:"tr",align:null}))))),(0,r.kt)(o.Z,{value:"outputs",mdxType:"TabItem"},(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Trimmed"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"chat-message[]")),(0,r.kt)("td",{parentName:"tr",align:null},"The array of chat messages after being trimmed to fit within the configured maximum token count."),(0,r.kt)("td",{parentName:"tr",align:null}))))),(0,r.kt)(o.Z,{value:"settings",mdxType:"TabItem"},(0,r.kt)("h2",{id:"editor-settings"},"Editor Settings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Setting"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Use Input Toggle"),(0,r.kt)("th",{parentName:"tr",align:null},"Input Data Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Max Token Count"),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum token count for the total length of the chat messages."),(0,r.kt)("td",{parentName:"tr",align:null},"4096"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Remove From Beginning"),(0,r.kt)("td",{parentName:"tr",align:null},"If enabled, messages will be removed from the beginning of the list. If disabled, messages will be removed from the end."),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")))))),(0,r.kt)("h2",{id:"example-1-trim-a-long-chat-message-chain"},"Example 1: Trim a long chat message chain"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create an ",(0,r.kt)("a",{parentName:"p",href:"/docs/node-reference/array"},"Array Node")," and set the value to an array of chat messages that exceeds a certain token count.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a Trim Chat Messages Node and connect the Array Node to its ",(0,r.kt)("inlineCode",{parentName:"p"},"Input")," port. Set the ",(0,r.kt)("inlineCode",{parentName:"p"},"Max Token Count")," to a value lower than the total token count of the chat messages.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the graph. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Trimmed")," output of the Trim Chat Messages Node should contain an array of chat messages with a total token count that does not exceed the configured ",(0,r.kt)("inlineCode",{parentName:"p"},"Max Token Count"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Trim Chat Messages Node Example 1",src:a(5364).Z,width:"1174",height:"481"})))),(0,r.kt)("h2",{id:"error-handling"},"Error Handling"),(0,r.kt)("p",null,"The Trim Chat Messages Node does not have any notable error handling behavior. If the input is not an array of chat messages, it will be coerced into one."),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q: What happens if the ",(0,r.kt)("inlineCode",{parentName:"strong"},"Max Token Count")," is set to a value lower than the token count of a single chat message?")),(0,r.kt)("p",null,"A: The Trim Chat Messages Node will keep removing messages until the total token count is under the ",(0,r.kt)("inlineCode",{parentName:"p"},"Max Token Count"),". If a single chat message exceeds the ",(0,r.kt)("inlineCode",{parentName:"p"},"Max Token Count"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"Trimmed")," output will be an empty array."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q: Can I use the Trim Chat Messages Node to trim an array of strings or other data types?")),(0,r.kt)("p",null,"A: No, the Trim Chat Messages Node is specifically designed to work with arrays of chat messages. If you need to trim an array of other data types, you may need to use a different node or a custom solution."),(0,r.kt)("h2",{id:"see-also"},"See Also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/node-reference/array"},"Array Node")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/node-reference/chat"},"Chat Node")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/node-reference/extract-json"},"Extract JSON Node")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/node-reference/extract-object-path"},"Extract Object Path Node")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/node-reference/code"},"Code Node"))))}h.isMDXComponent=!0},8140:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/trim-chat-messages-node-66f48465a01fd85c00cd86a006496493.png"},5364:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/trim-chat-node-example-01-84d7f96feffc407e4ef3311771060e5e.png"}}]);
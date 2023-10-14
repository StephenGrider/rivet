"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7410],{6593:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(1644);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7026:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(1644),r=n(156);const l={tabItem:"tabItem_hFhF"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:n},t)}},6663:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(373),r=n(1644),l=n(156),i=n(1476),o=n(2824),s=n(9643),p=n(7190),u=n(6985);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function c(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=c(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[s,p]=h({queryString:n,groupId:a}),[d,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),k=(()=>{const e=s??d;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),g(e)}),[p,g,l]),tabValues:l}}var k=n(8810);const f={tabList:"tabList_A6Ol",tabItem:"tabItem_djxK"};function N(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),c=e=>{const t=e.currentTarget,n=u.indexOf(t),a=p[n].value;a!==o&&(d(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:c},i,{className:(0,l.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=g(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",f.tabList)},r.createElement(N,(0,a.Z)({},e,t)),r.createElement(b,(0,a.Z)({},e,t)))}function y(e){const t=(0,k.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},4151:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var a=n(373),r=(n(1644),n(6593)),l=n(6663),i=n(7026);const o={id:"split-text",title:"Split Text Node",sidebar_label:"Split Text"},s=void 0,p={unversionedId:"node-reference/split-text",id:"node-reference/split-text",title:"Split Text Node",description:"Split Text Node Screenshot",source:"@site/docs/node-reference/split-text.mdx",sourceDirName:"node-reference",slug:"/node-reference/split-text",permalink:"/docs/node-reference/split-text",draft:!1,editUrl:"https://github.com/ironclad/rivet/tree/main/packages/docs/docs/node-reference/split-text.mdx",tags:[],version:"current",frontMatter:{id:"split-text",title:"Split Text Node",sidebar_label:"Split Text"},sidebar:"nodeReference",previous:{title:"Prompt",permalink:"/docs/node-reference/prompt"},next:{title:"Text",permalink:"/docs/node-reference/text"}},u={},d=[{value:"Overview",id:"overview",level:2},{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2},{value:"Editor Settings",id:"editor-settings",level:2},{value:"Example 1: Split a string into words",id:"example-1-split-a-string-into-words",level:2},{value:"Example 2: Split a string into lines",id:"example-2-split-a-string-into-lines",level:2},{value:"Error Handling",id:"error-handling",level:2},{value:"FAQ",id:"faq",level:2},{value:"See Also",id:"see-also",level:2}],c={toc:d},m="wrapper";function h(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Split Text Node Screenshot",src:n(8565).Z,width:"391",height:"175"})),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The Split Text Node is used to split a string into an array of substrings based on a specified delimiter. This is useful when you want to separate a string into individual elements for further processing."),(0,r.kt)("p",null,"The node allows you to specify the delimiter either directly in the node settings or dynamically via an input port. The delimiter can be any string, including special characters like newline (",(0,r.kt)("inlineCode",{parentName:"p"},"\\n"),"), tab (",(0,r.kt)("inlineCode",{parentName:"p"},"\\t"),"), and space (",(0,r.kt)("inlineCode",{parentName:"p"}," "),")."),(0,r.kt)("p",null,"When entering special characters such as a new line in the node settings, put the literal character, not the escape sequence. For example, to split a string by a new line, press the Enter key to insert a new line in the node settings."),(0,r.kt)(l.Z,{defaultValue:"inputs",values:[{label:"Inputs",value:"inputs"},{label:"Outputs",value:"outputs"},{label:"Editor Settings",value:"settings"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"inputs",mdxType:"TabItem"},(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The string that should be split."),(0,r.kt)("td",{parentName:"tr",align:null},"(required)"),(0,r.kt)("td",{parentName:"tr",align:null},"The input will be coerced into a string if it is not a string.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Delimiter"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The delimiter to split the string by. This input is only available if ",(0,r.kt)("inlineCode",{parentName:"td"},"Use Delimiter Input")," is enabled."),(0,r.kt)("td",{parentName:"tr",align:null},"(empty)"),(0,r.kt)("td",{parentName:"tr",align:null},"The input will be coerced into a string if it is not a string."))))),(0,r.kt)(i.Z,{value:"outputs",mdxType:"TabItem"},(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Split String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string[]")),(0,r.kt)("td",{parentName:"tr",align:null},"The array of substrings resulting from splitting the input string by the specified delimiter."),(0,r.kt)("td",{parentName:"tr",align:null}))))),(0,r.kt)(i.Z,{value:"settings",mdxType:"TabItem"},(0,r.kt)("h2",{id:"editor-settings"},"Editor Settings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Setting"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Use Input Toggle"),(0,r.kt)("th",{parentName:"tr",align:null},"Input Data Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Delimiter"),(0,r.kt)("td",{parentName:"tr",align:null},"The delimiter to split the string by."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},",")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Use Delimiter Input"),(0,r.kt)("td",{parentName:"tr",align:null},"If enabled, the delimiter can be provided via the Delimiter input port."),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")))))),(0,r.kt)("h2",{id:"example-1-split-a-string-into-words"},"Example 1: Split a string into words"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a ",(0,r.kt)("a",{parentName:"li",href:"/docs/node-reference/text"},"Text Node")," and set the value to ",(0,r.kt)("inlineCode",{parentName:"li"},"Hello, world!"),"."),(0,r.kt)("li",{parentName:"ol"},"Create a Split Text Node and set the Delimiter to ",(0,r.kt)("inlineCode",{parentName:"li"},","),"."),(0,r.kt)("li",{parentName:"ol"},"Connect the Text Node to the ",(0,r.kt)("inlineCode",{parentName:"li"},"String")," input of the Split Text Node."),(0,r.kt)("li",{parentName:"ol"},"Run the graph. The ",(0,r.kt)("inlineCode",{parentName:"li"},"Split")," output of the Split Text Node should contain the array ",(0,r.kt)("inlineCode",{parentName:"li"},'["Hello", " world!"]'),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Split Text Node Example 1",src:n(1198).Z,width:"662",height:"249"})),(0,r.kt)("h2",{id:"example-2-split-a-string-into-lines"},"Example 2: Split a string into lines"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a ",(0,r.kt)("a",{parentName:"p",href:"/docs/node-reference/text"},"Text Node")," and set the value to:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Hello,\nworld!\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a Split Text Node and set the Delimiter to ",(0,r.kt)("inlineCode",{parentName:"p"},"\\n"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Connect the Text Node to the ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," input of the Split Text Node.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the graph. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Split")," output of the Split Text Node should contain the array ",(0,r.kt)("inlineCode",{parentName:"p"},'["Hello,", "world!"]'),"."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Split Text Node Example 2",src:n(2489).Z,width:"643",height:"264"})),(0,r.kt)("h2",{id:"error-handling"},"Error Handling"),(0,r.kt)("p",null,"The Split Text Node will error if the ",(0,r.kt)("inlineCode",{parentName:"p"},"String")," input is not provided. If the ",(0,r.kt)("inlineCode",{parentName:"p"},"Delimiter")," input or setting is not provided, the node will not split the string and will output the original string as a single-element array."),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q: Can I split a string by multiple delimiters?")),(0,r.kt)("p",null,"A: No, the Split Text Node can only split a string by a single delimiter. If you want to split a string by multiple delimiters, you can use multiple Split Text Nodes in sequence."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q: Can I split a string by a regular expression?")),(0,r.kt)("p",null,"A: No, the Split Text Node does not support splitting a string by a regular expression. You can use a ",(0,r.kt)("a",{parentName:"p",href:"/docs/node-reference/code"},"Code Node")," to split a string by a regular expression using JavaScript's ",(0,r.kt)("inlineCode",{parentName:"p"},"split()")," method."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q: What happens if the delimiter is not found in the string?")),(0,r.kt)("p",null,"A: If the delimiter is not found in the string, the Split Text Node will output the original string as a single-element array."),(0,r.kt)("h2",{id:"see-also"},"See Also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/node-reference/join"},"Join Node")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/node-reference/text"},"Text Node")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/node-reference/code"},"Code Node")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/node-reference/array"},"Array Node")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/node-reference/extract-with-regex"},"Extract with Regex Node"))))}h.isMDXComponent=!0},1198:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/split-text-node-example-01-8364bfaa9764c1b938bc75dcfede7019.png"},2489:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/split-text-node-example-02-4187a59fb0997d1d720c6d0b574bdb51.png"},8565:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/split-text-node-48a7e69e0176e42a57e2fd5d80e44c44.png"}}]);
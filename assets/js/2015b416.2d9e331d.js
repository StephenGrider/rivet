"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5842],{1042:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>b});var n=a(3249);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(a),m=l,b=p["".concat(u,".").concat(m)]||p[m]||c[m]||r;return a?n.createElement(b,o(o({ref:t},d),{},{components:a})):n.createElement(b,o({ref:t},d))}));function b(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:l,o[1]=i;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5089:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(3249),l=a(2689);const r={tabItem:"tabItem_o9Hs"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,o),hidden:a},t)}},2327:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(7396),l=a(3249),r=a(2689),o=a(5986),i=a(6659),u=a(4532),s=a(5821),d=a(3312);function p(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function c(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=c(e),[o,i]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[u,s]=b({queryString:a,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,d.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),f=(()=>{const e=u??p;return m({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),h(e)}),[s,h,r]),tabValues:r}}var f=a(3072);const g={tabList:"tabList_Dwv5",tabItem:"tabItem_KiUr"};function k(e){let{className:t,block:a,selectedValue:i,selectValue:u,tabValues:s}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),c=e=>{const t=e.currentTarget,a=d.indexOf(t),n=s[a].value;n!==i&&(p(t),u(n))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:o}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:c},o,{className:(0,r.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=h(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",g.tabList)},l.createElement(k,(0,n.Z)({},e,t)),l.createElement(v,(0,n.Z)({},e,t)))}function y(e){const t=(0,f.Z)();return l.createElement(N,(0,n.Z)({key:String(t)},e))}},4714:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>b,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(7396),l=(a(3249),a(1042)),r=a(2327),o=a(5089);const i={id:"set-global",title:"Set Global Node",sidebar_label:"Set Global"},u=void 0,s={unversionedId:"node-reference/set-global",id:"node-reference/set-global",title:"Set Global Node",description:"Set Global Node Screenshot",source:"@site/docs/node-reference/set-global.mdx",sourceDirName:"node-reference",slug:"/node-reference/set-global",permalink:"/docs/node-reference/set-global",draft:!1,editUrl:"https://github.com/ironclad/rivet/tree/main/packages/docs/docs/node-reference/set-global.mdx",tags:[],version:"current",frontMatter:{id:"set-global",title:"Set Global Node",sidebar_label:"Set Global"},sidebar:"nodeReference",previous:{title:"Raise Event",permalink:"/docs/node-reference/raise-event"},next:{title:"Subgraph",permalink:"/docs/node-reference/subgraph"}},d={},p=[{value:"Overview",id:"overview",level:2},{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2},{value:"Editor Settings",id:"editor-settings",level:2},{value:"Example 1: Set a global value",id:"example-1-set-a-global-value",level:2},{value:"Error Handling",id:"error-handling",level:2},{value:"FAQ",id:"faq",level:2},{value:"See Also",id:"see-also",level:2}],c={toc:p},m="wrapper";function b(e){let{components:t,...i}=e;return(0,l.kt)(m,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Set Global Node Screenshot",src:a(9718).Z,width:"357",height:"222"})),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"The Set Global Node is used to set a global value that is shared across all graphs and subgraphs during an execution in Rivet. This can be useful for storing and retrieving values that need to be accessed by multiple graphs."),(0,l.kt)("p",null,"The Set Global Node allows you to specify the ID of the global value and the value itself. The ID can be either a static string or an input value. The value can be of any data type."),(0,l.kt)(r.Z,{defaultValue:"inputs",values:[{label:"Inputs",value:"inputs"},{label:"Outputs",value:"outputs"},{label:"Editor Settings",value:"settings"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"inputs",mdxType:"TabItem"},(0,l.kt)("h2",{id:"inputs"},"Inputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Title"),(0,l.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Value"),(0,l.kt)("td",{parentName:"tr",align:null},"Any"),(0,l.kt)("td",{parentName:"tr",align:null},"The value to be set as the global value."),(0,l.kt)("td",{parentName:"tr",align:null},"(required)"),(0,l.kt)("td",{parentName:"tr",align:null},"The input will be coerced into the data type specified in the node's settings.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Variable ID"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the global value to be set. This input is only available if ",(0,l.kt)("inlineCode",{parentName:"td"},"Use Variable ID Input")," is on."),(0,l.kt)("td",{parentName:"tr",align:null},"(optional)"),(0,l.kt)("td",{parentName:"tr",align:null},"The input will be coerced into a string if it is not a string. The ID must be unique in the context."))))),(0,l.kt)(o.Z,{value:"outputs",mdxType:"TabItem"},(0,l.kt)("h2",{id:"outputs"},"Outputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Title"),(0,l.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Value"),(0,l.kt)("td",{parentName:"tr",align:null},"Any"),(0,l.kt)("td",{parentName:"tr",align:null},"The value that was set as the global value."),(0,l.kt)("td",{parentName:"tr",align:null},"The output will be of the same data type as the ",(0,l.kt)("inlineCode",{parentName:"td"},"Value")," input.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Previous Value"),(0,l.kt)("td",{parentName:"tr",align:null},"Any"),(0,l.kt)("td",{parentName:"tr",align:null},"The previous value of the global variable before the new value was set."),(0,l.kt)("td",{parentName:"tr",align:null},"The output will be of the same data type as the ",(0,l.kt)("inlineCode",{parentName:"td"},"Value")," input. If there was no previous value, this output will not be ran."))))),(0,l.kt)(o.Z,{value:"settings",mdxType:"TabItem"},(0,l.kt)("h2",{id:"editor-settings"},"Editor Settings"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Setting"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Use Input Toggle"),(0,l.kt)("th",{parentName:"tr",align:null},"Input Data Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ID"),(0,l.kt)("td",{parentName:"tr",align:null},"The ID of the global value to be set."),(0,l.kt)("td",{parentName:"tr",align:null},"(required)"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Data Type"),(0,l.kt)("td",{parentName:"tr",align:null},"The data type of the value to be set. This determines how the ",(0,l.kt)("inlineCode",{parentName:"td"},"Value")," input is coerced."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A")))))),(0,l.kt)("h2",{id:"example-1-set-a-global-value"},"Example 1: Set a global value"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Create a ",(0,l.kt)("a",{parentName:"li",href:"/docs/node-reference/text"},"Text Node")," and set the value to ",(0,l.kt)("inlineCode",{parentName:"li"},"Hello, World!"),"."),(0,l.kt)("li",{parentName:"ol"},"Create a Set Global Node and set the ID to ",(0,l.kt)("inlineCode",{parentName:"li"},"greeting"),"."),(0,l.kt)("li",{parentName:"ol"},"Connect the Text Node to the ",(0,l.kt)("inlineCode",{parentName:"li"},"Value")," input of the Set Global Node."),(0,l.kt)("li",{parentName:"ol"},"Run the graph. The ",(0,l.kt)("inlineCode",{parentName:"li"},"Value")," output of the Set Global Node should contain the value ",(0,l.kt)("inlineCode",{parentName:"li"},"Hello, World!"),".")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Set Global Node Example 1",src:a(3603).Z,width:"786",height:"363"})),(0,l.kt)("h2",{id:"error-handling"},"Error Handling"),(0,l.kt)("p",null,"The Set Global Node will error if the ",(0,l.kt)("inlineCode",{parentName:"p"},"Value")," input is not provided or if the ID of the global value is not provided or not unique."),(0,l.kt)("h2",{id:"faq"},"FAQ"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Q: Can I set a global value to an array or an object?")),(0,l.kt)("p",null,"A: Yes, you can set a global value to any data type, including arrays and objects. You can use an ",(0,l.kt)("a",{parentName:"p",href:"/docs/node-reference/array"},"Array Node")," or an ",(0,l.kt)("a",{parentName:"p",href:"/docs/node-reference/object"},"Object Node")," to create an array or an object, and then connect it to the ",(0,l.kt)("inlineCode",{parentName:"p"},"Value")," input of the Set Global Node."),(0,l.kt)("h2",{id:"see-also"},"See Also"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/node-reference/get-global"},"Get Global Node")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/node-reference/text"},"Text Node")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/node-reference/array"},"Array Node")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/node-reference/object"},"Object Node"))))}b.isMDXComponent=!0},3603:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/set-global-node-example-01-d89ccf1fc3b325d6a66bf0fadae7e6e3.png"},9718:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/set-global-node-01f306e5ccd724933157bb9674bd0406.png"}}]);
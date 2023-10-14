"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4049],{6593:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var a=n(1644);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),d=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=d(n),c=r,b=s["".concat(i,".").concat(c)]||s[c]||m[c]||l;return n?a.createElement(b,o(o({ref:t},p),{},{components:n})):a.createElement(b,o({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[s]="string"==typeof e?e:r,o[1]=u;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7026:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(1644),r=n(156);const l={tabItem:"tabItem_hFhF"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:n},t)}},6663:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(373),r=n(1644),l=n(156),o=n(1476),u=n(2824),i=n(9643),d=n(7190),p=n(6985);function s(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??s(n);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,u.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function N(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=m(e),[o,u]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[i,d]=b({queryString:n,groupId:a}),[s,N]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),k=(()=>{const e=i??s;return c({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{k&&u(k)}),[k]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!c({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),N(e)}),[d,N,l]),tabValues:l}}var k=n(8810);const h={tabList:"tabList_A6Ol",tabItem:"tabItem_djxK"};function f(e){let{className:t,block:n,selectedValue:u,selectValue:i,tabValues:d}=e;const p=[],{blockElementScrollPositionUntilNextRender:s}=(0,o.o5)(),m=e=>{const t=e.currentTarget,n=p.indexOf(t),a=d[n].value;a!==u&&(s(t),i(a))},c=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},d.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>p.push(e),onKeyDown:c,onClick:m},o,{className:(0,l.Z)("tabs__item",h.tabItem,o?.className,{"tabs__item--active":u===t})}),n??t)})))}function g(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=N(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},r.createElement(f,(0,a.Z)({},e,t)),r.createElement(g,(0,a.Z)({},e,t)))}function y(e){const t=(0,k.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},4931:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>b,frontMatter:()=>u,metadata:()=>d,toc:()=>s});var a=n(373),r=(n(1644),n(6593)),l=n(6663),o=n(7026);const u={id:"number",title:"Number Node",sidebar_label:"Number"},i=void 0,d={unversionedId:"node-reference/number",id:"node-reference/number",title:"Number Node",description:"Number Node Screenshot",source:"@site/docs/node-reference/number.mdx",sourceDirName:"node-reference",slug:"/node-reference/number",permalink:"/docs/node-reference/number",draft:!1,editUrl:"https://github.com/ironclad/rivet/tree/main/packages/docs/docs/node-reference/number.mdx",tags:[],version:"current",frontMatter:{id:"number",title:"Number Node",sidebar_label:"Number"},sidebar:"nodeReference",previous:{title:"Slice",permalink:"/docs/node-reference/slice"},next:{title:"RNG",permalink:"/docs/node-reference/RNG"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2},{value:"Editor Settings",id:"editor-settings",level:2},{value:"Example 1: Output a constant number",id:"example-1-output-a-constant-number",level:2},{value:"Example 2: Convert a string to a number",id:"example-2-convert-a-string-to-a-number",level:2},{value:"Example 3: Round a number",id:"example-3-round-a-number",level:2},{value:"Error Handling",id:"error-handling",level:2},{value:"FAQ",id:"faq",level:2},{value:"See Also",id:"see-also",level:2}],m={toc:s},c="wrapper";function b(e){let{components:t,...u}=e;return(0,r.kt)(c,(0,a.Z)({},m,u,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Number Node Screenshot",src:n(726).Z,width:"305",height:"158"})),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The Number Node is used to output a constant number value or convert an input value into a number. It can also be configured to round the number to a certain number of decimal places."),(0,r.kt)(l.Z,{defaultValue:"inputs",values:[{label:"Inputs",value:"inputs"},{label:"Outputs",value:"outputs"},{label:"Editor Settings",value:"settings"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"inputs",mdxType:"TabItem"},(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Input"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"any")),(0,r.kt)("td",{parentName:"tr",align:null},"The value to be converted into a number."),(0,r.kt)("td",{parentName:"tr",align:null},"(empty)"),(0,r.kt)("td",{parentName:"tr",align:null},"This input is only available if ",(0,r.kt)("inlineCode",{parentName:"td"},"Use Value Input")," is enabled. The input will be coerced to a number."))))),(0,r.kt)(o.Z,{value:"outputs",mdxType:"TabItem"},(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Value"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"The output number value. This can either be a constant value or a converted input value."),(0,r.kt)("td",{parentName:"tr",align:null},"None"))))),(0,r.kt)(o.Z,{value:"settings",mdxType:"TabItem"},(0,r.kt)("h2",{id:"editor-settings"},"Editor Settings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Setting"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Use Input Toggle"),(0,r.kt)("th",{parentName:"tr",align:null},"Input Data Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Value"),(0,r.kt)("td",{parentName:"tr",align:null},"The constant number value to be outputted."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Round"),(0,r.kt)("td",{parentName:"tr",align:null},"If enabled, the output number will be rounded to the specified decimal places."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Round To"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of decimal places to round the output number to."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")))))),(0,r.kt)("h2",{id:"example-1-output-a-constant-number"},"Example 1: Output a constant number"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a Number Node."),(0,r.kt)("li",{parentName:"ol"},"Set the ",(0,r.kt)("inlineCode",{parentName:"li"},"Value")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"123.456"),"."),(0,r.kt)("li",{parentName:"ol"},"Run the graph. The ",(0,r.kt)("inlineCode",{parentName:"li"},"Value")," output of the Number Node should be ",(0,r.kt)("inlineCode",{parentName:"li"},"123.456"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Number Node Example 1",src:n(9479).Z,width:"338",height:"207"})),(0,r.kt)("h2",{id:"example-2-convert-a-string-to-a-number"},"Example 2: Convert a string to a number"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a Text Node and set the text to ",(0,r.kt)("inlineCode",{parentName:"li"},"123.456"),"."),(0,r.kt)("li",{parentName:"ol"},"Create a Number Node and enable the ",(0,r.kt)("inlineCode",{parentName:"li"},"Use Value Input")," setting."),(0,r.kt)("li",{parentName:"ol"},"Connect the Text Node to the ",(0,r.kt)("inlineCode",{parentName:"li"},"Input")," of the Number Node."),(0,r.kt)("li",{parentName:"ol"},"Run the graph. The ",(0,r.kt)("inlineCode",{parentName:"li"},"Value")," output of the Number Node should be ",(0,r.kt)("inlineCode",{parentName:"li"},"123.456"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Number Node Example 2",src:n(2916).Z,width:"589",height:"223"})),(0,r.kt)("h2",{id:"example-3-round-a-number"},"Example 3: Round a number"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a Number Node."),(0,r.kt)("li",{parentName:"ol"},"Set the ",(0,r.kt)("inlineCode",{parentName:"li"},"Value")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"123.456"),"."),(0,r.kt)("li",{parentName:"ol"},"Enable the ",(0,r.kt)("inlineCode",{parentName:"li"},"Round")," setting and set ",(0,r.kt)("inlineCode",{parentName:"li"},"Round To")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"2"),"."),(0,r.kt)("li",{parentName:"ol"},"Run the graph. The ",(0,r.kt)("inlineCode",{parentName:"li"},"Value")," output of the Number Node should be ",(0,r.kt)("inlineCode",{parentName:"li"},"123.46"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Number Node Example 3",src:n(155).Z,width:"563",height:"199"})),(0,r.kt)("h2",{id:"error-handling"},"Error Handling"),(0,r.kt)("p",null,"The Number Node will not error under normal circumstances. If the ",(0,r.kt)("inlineCode",{parentName:"p"},"Input")," value cannot be converted to a number, it will default to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Value")," setting."),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q: Can I use the Number Node to convert a boolean to a number?")),(0,r.kt)("p",null,"A: Yes, you can use the Number Node to convert a boolean to a number. A ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," value will be converted to ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," value will be converted to ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q: What happens if I connect a non-numeric value to the ",(0,r.kt)("inlineCode",{parentName:"strong"},"Input")," of the Number Node?")),(0,r.kt)("p",null,"A: The Number Node will attempt to convert the input value to a number. If the conversion is not possible, the node will default to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Value")," setting."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q: Can I use the Number Node to round a number to an integer?")),(0,r.kt)("p",null,"A: Yes, you can use the Number Node to round a number to an integer by enabling the ",(0,r.kt)("inlineCode",{parentName:"p"},"Round")," setting and setting ",(0,r.kt)("inlineCode",{parentName:"p"},"Round To")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,r.kt)("h2",{id:"see-also"},"See Also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/node-reference/text"},"Text Node")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/node-reference/bool"},"Bool Node")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/node-reference/compare"},"Compare Node")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/node-reference/evaluate"},"Evaluate Node")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/node-reference/RNG"},"RNG Node"))))}b.isMDXComponent=!0},9479:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/number-node-example-01-59c2659d8a62a9d3cab08c3b92decd9c.png"},2916:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/number-node-example-02-171efc8af1a2f85a20d9f6e5ea9cb9c5.png"},155:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/number-node-example-03-5c4f94ac9df4402777007ab18d50d285.png"},726:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/number-node-d9b6e305e86e31b52cf0c5fb0954aa47.png"}}]);
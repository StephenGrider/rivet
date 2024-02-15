"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6252],{1042:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(3249);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=l,h=p["".concat(u,".").concat(m)]||p[m]||c[m]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:l,o[1]=i;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5089:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(3249),l=n(2689);const r={tabItem:"tabItem_o9Hs"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,o),hidden:n},t)}},2327:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(7396),l=n(3249),r=n(2689),o=n(5986),i=n(6659),u=n(4532),s=n(5821),d=n(3312);function p(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:l}}=e;return{value:t,label:n,attributes:a,default:l}}))}function c(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=c(e),[o,i]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[u,s]=h({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,d.Nk)(n);return[a,(0,l.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),A=(()=>{const e=u??p;return m({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{A&&i(A)}),[A]);return{selectedValue:o,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),s(e),f(e)}),[s,f,r]),tabValues:r}}var A=n(3072);const N={tabList:"tabList_Dwv5",tabItem:"tabItem_KiUr"};function k(e){let{className:t,block:n,selectedValue:i,selectValue:u,tabValues:s}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),c=e=>{const t=e.currentTarget,n=d.indexOf(t),a=s[n].value;a!==i&&(p(t),u(a))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:o}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:c},o,{className:(0,r.Z)("tabs__item",N.tabItem,o?.className,{"tabs__item--active":i===t})}),n??t)})))}function g(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function b(e){const t=f(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",N.tabList)},l.createElement(k,(0,a.Z)({},e,t)),l.createElement(g,(0,a.Z)({},e,t)))}function v(e){const t=(0,A.Z)();return l.createElement(b,(0,a.Z)({key:String(t)},e))}},2415:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7396),l=(n(3249),n(1042)),r=n(2327),o=n(5089);const i={id:"if-else",title:"If/Else Node",sidebar_label:"If/Else"},u=void 0,s={unversionedId:"node-reference/if-else",id:"node-reference/if-else",title:"If/Else Node",description:"If/Else Node Screenshot",source:"@site/docs/node-reference/if-else.mdx",sourceDirName:"node-reference",slug:"/node-reference/if-else",permalink:"/docs/node-reference/if-else",draft:!1,editUrl:"https://github.com/ironclad/rivet/tree/main/packages/docs/docs/node-reference/if-else.mdx",tags:[],version:"current",frontMatter:{id:"if-else",title:"If/Else Node",sidebar_label:"If/Else"},sidebar:"nodeReference",previous:{title:"If",permalink:"/docs/node-reference/if"},next:{title:"Loop Controller",permalink:"/docs/node-reference/loop-controller"}},d={},p=[{value:"Overview",id:"overview",level:2},{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2},{value:"Editor Settings",id:"editor-settings",level:2},{value:"Example 1: Choose between two values based on a condition",id:"example-1-choose-between-two-values-based-on-a-condition",level:2},{value:"Example 2: Provide a default value for a missing input",id:"example-2-provide-a-default-value-for-a-missing-input",level:2},{value:"Error Handling",id:"error-handling",level:2},{value:"FAQ",id:"faq",level:2},{value:"See Also",id:"see-also",level:2}],c={toc:p},m="wrapper";function h(e){let{components:t,...i}=e;return(0,l.kt)(m,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"If/Else Node Screenshot",src:n(5643).Z,width:"271",height:"204"})),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"The If/Else Node is a control flow node that allows you to choose between two different values based on a condition. It takes in three inputs: a condition, a true value, and a false value. If the condition is truthy, the true value is passed through the output port. If the condition is not truthy, the false value is passed through the output port."),(0,l.kt)("p",null,'This node can "consume" a ',(0,l.kt)("inlineCode",{parentName:"p"},"Not Ran")," to continue a graph from that point. This means that if a ",(0,l.kt)("inlineCode",{parentName:"p"},"Not Ran")," value is passed into the ",(0,l.kt)("inlineCode",{parentName:"p"},"If")," port, the ",(0,l.kt)("inlineCode",{parentName:"p"},"False")," value will be passed through instead. If the ",(0,l.kt)("inlineCode",{parentName:"p"},"False")," value is not connected, then the result will again be ",(0,l.kt)("inlineCode",{parentName:"p"},"Not Ran"),"."),(0,l.kt)("p",null,"The If/Else node is particularly useful for always ensuring that a graph returns a value, and the outputs of the graph always run, or ensuring that a later node in the graph always receives a value, even if intermediate nodes do not run."),(0,l.kt)(r.Z,{defaultValue:"inputs",values:[{label:"Inputs",value:"inputs"},{label:"Outputs",value:"outputs"},{label:"Editor Settings",value:"settings"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"inputs",mdxType:"TabItem"},(0,l.kt)("h2",{id:"inputs"},"Inputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Title"),(0,l.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"If"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"any")),(0,l.kt)("td",{parentName:"tr",align:null},"The condition to evaluate. If truthy, the true value is passed through."),(0,l.kt)("td",{parentName:"tr",align:null},"(required)"),(0,l.kt)("td",{parentName:"tr",align:null},"The input will be coerced into a boolean if it is not a boolean.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"True"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"any")),(0,l.kt)("td",{parentName:"tr",align:null},"The value to pass through if the condition is truthy."),(0,l.kt)("td",{parentName:"tr",align:null},"(empty)"),(0,l.kt)("td",{parentName:"tr",align:null},"The input will be coerced into the same data type as the ",(0,l.kt)("inlineCode",{parentName:"td"},"False")," input if it is not the same type.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"False"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"any")),(0,l.kt)("td",{parentName:"tr",align:null},"The value to pass through if the condition is not truthy or is not provided."),(0,l.kt)("td",{parentName:"tr",align:null},"(empty)"),(0,l.kt)("td",{parentName:"tr",align:null},"The input will be coerced into the same data type as the ",(0,l.kt)("inlineCode",{parentName:"td"},"True")," input if it is not the same type."))))),(0,l.kt)(o.Z,{value:"outputs",mdxType:"TabItem"},(0,l.kt)("h2",{id:"outputs"},"Outputs"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Title"),(0,l.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Output"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"any")),(0,l.kt)("td",{parentName:"tr",align:null},"The value that was passed through based on the condition. Either the true value or false value."),(0,l.kt)("td",{parentName:"tr",align:null}))))),(0,l.kt)(o.Z,{value:"settings",mdxType:"TabItem"},(0,l.kt)("h2",{id:"editor-settings"},"Editor Settings"),(0,l.kt)("p",null,"This node has no configurable editor settings."))),(0,l.kt)("h2",{id:"example-1-choose-between-two-values-based-on-a-condition"},"Example 1: Choose between two values based on a condition"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Create a ",(0,l.kt)("a",{parentName:"li",href:"/docs/node-reference/bool"},"Bool Node"),". Set the value of the Bool Node to ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"."),(0,l.kt)("li",{parentName:"ol"},"Create two ",(0,l.kt)("a",{parentName:"li",href:"/docs/node-reference/text"},"Text Nodes"),". Set the text of one node to ",(0,l.kt)("inlineCode",{parentName:"li"},"Hello")," and the other to ",(0,l.kt)("inlineCode",{parentName:"li"},"World"),"."),(0,l.kt)("li",{parentName:"ol"},"Create an If/Else Node. Connect the Bool Node to the ",(0,l.kt)("inlineCode",{parentName:"li"},"If")," input of the If/Else Node. Connect the Text Node with the text ",(0,l.kt)("inlineCode",{parentName:"li"},"Hello")," to the ",(0,l.kt)("inlineCode",{parentName:"li"},"True")," input of the If/Else Node. Connect the Text Node with the text ",(0,l.kt)("inlineCode",{parentName:"li"},"World")," to the ",(0,l.kt)("inlineCode",{parentName:"li"},"False")," input of the If/Else Node."),(0,l.kt)("li",{parentName:"ol"},"Run the graph. The output of the If/Else Node should be ",(0,l.kt)("inlineCode",{parentName:"li"},"Hello"),"."),(0,l.kt)("li",{parentName:"ol"},"Try changing the value of the Bool Node to ",(0,l.kt)("inlineCode",{parentName:"li"},"false"),". Run the graph again. The output of the If/Else Node should now be ",(0,l.kt)("inlineCode",{parentName:"li"},"World"),".")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"If/Else Node Example 1",src:n(4986).Z,width:"582",height:"542"})),(0,l.kt)("h2",{id:"example-2-provide-a-default-value-for-a-missing-input"},"Example 2: Provide a default value for a missing input"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Create an ",(0,l.kt)("a",{parentName:"li",href:"/docs/node-reference/if"},"If Node")," but do not connect anything to its ",(0,l.kt)("inlineCode",{parentName:"li"},"If")," input."),(0,l.kt)("li",{parentName:"ol"},"Create two ",(0,l.kt)("a",{parentName:"li",href:"/docs/node-reference/text"},"Text Nodes"),". Set the text of one node to ",(0,l.kt)("inlineCode",{parentName:"li"},"Hello")," and the other to ",(0,l.kt)("inlineCode",{parentName:"li"},"World"),"."),(0,l.kt)("li",{parentName:"ol"},"Connect the Hello Text Node to the ",(0,l.kt)("inlineCode",{parentName:"li"},"Value")," input of the If Node."),(0,l.kt)("li",{parentName:"ol"},"Create an If/Else Node. Connect the If Node to the ",(0,l.kt)("inlineCode",{parentName:"li"},"If")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"True")," inputs of the If/Else Node. Connect the Text Node with the text ",(0,l.kt)("inlineCode",{parentName:"li"},"World")," to the ",(0,l.kt)("inlineCode",{parentName:"li"},"False")," input of the If/Else Node."),(0,l.kt)("li",{parentName:"ol"},"Run the graph. The output of the If/Else Node should be ",(0,l.kt)("inlineCode",{parentName:"li"},"World"),".")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"If/Else Node Example 2",src:n(8e3).Z,width:"740",height:"396"})),(0,l.kt)("h2",{id:"error-handling"},"Error Handling"),(0,l.kt)("p",null,"The If/Else node will not throw an error under normal circumstances."),(0,l.kt)("h2",{id:"faq"},"FAQ"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Q: What is considered truthy in Rivet?")),(0,l.kt)("p",null,"A: Any value that is considered truthy in JavaScript, plus any non-empty Array, is considered truthy in Rivet. This includes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"true")),(0,l.kt)("li",{parentName:"ul"},"Any non-zero number"),(0,l.kt)("li",{parentName:"ul"},"Any non-empty string"),(0,l.kt)("li",{parentName:"ul"},"Any non-empty Array"),(0,l.kt)("li",{parentName:"ul"},"Any object"),(0,l.kt)("li",{parentName:"ul"},"Any function")),(0,l.kt)("p",null,"All other values are considered falsy, including the string value ",(0,l.kt)("inlineCode",{parentName:"p"},'"false"'),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Q: What happens if the ",(0,l.kt)("inlineCode",{parentName:"strong"},"If")," input is ",(0,l.kt)("inlineCode",{parentName:"strong"},"Not Ran"),"?")),(0,l.kt)("p",null,"A: If the ",(0,l.kt)("inlineCode",{parentName:"p"},"If")," input is ",(0,l.kt)("inlineCode",{parentName:"p"},"Not Ran"),", the ",(0,l.kt)("inlineCode",{parentName:"p"},"False")," value will be passed through instead. If the ",(0,l.kt)("inlineCode",{parentName:"p"},"False")," value is not connected, then the result will again be ",(0,l.kt)("inlineCode",{parentName:"p"},"Not Ran"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Q: What happens if the ",(0,l.kt)("inlineCode",{parentName:"strong"},"True")," or ",(0,l.kt)("inlineCode",{parentName:"strong"},"False")," inputs are not provided?")),(0,l.kt)("p",null,"A: If the ",(0,l.kt)("inlineCode",{parentName:"p"},"True")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"False")," inputs are not provided, they will default to ",(0,l.kt)("inlineCode",{parentName:"p"},"Not Ran"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Q: Can I use the If/Else Node to choose between two different types of values?")),(0,l.kt)("p",null,"A: Yes, you can use the If/Else Node to choose between two different types of values. For example, you can use it to choose between a string and a number based on a condition. However, keep in mind that the output of the If/Else Node will be of the same type as the value that was passed through."),(0,l.kt)("h2",{id:"see-also"},"See Also"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/node-reference/if"},"If Node")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/node-reference/match"},"Match Node")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/node-reference/coalesce"},"Coalesce Node")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/user-guide/control-flow"},"Control Flow"))))}h.isMDXComponent=!0},4986:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/if-else-node-example-01-322f8dce41864e2da84fc9e80d7d3e41.png"},8e3:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/if-else-node-example-02-1c4220c7ecf0776b838c8df52bae42f5.png"},5643:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);
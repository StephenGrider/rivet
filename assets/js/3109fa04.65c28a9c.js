"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2118],{1042:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>b});var a=n(3249);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),d=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(u.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=d(n),c=r,b=s["".concat(u,".").concat(c)]||s[c]||p[c]||l;return n?a.createElement(b,i(i({ref:t},m),{},{components:n})):a.createElement(b,i({ref:t},m))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5089:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(3249),r=n(2689);const l={tabItem:"tabItem_o9Hs"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:n},t)}},2327:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(7396),r=n(3249),l=n(2689),i=n(5986),o=n(6659),u=n(4532),d=n(5821),m=n(3312);function s(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??s(n);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function N(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=p(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[u,d]=b({queryString:n,groupId:a}),[s,N]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,m.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),g=(()=>{const e=u??s;return c({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!c({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),N(e)}),[d,N,l]),tabValues:l}}var g=n(3072);const f={tabList:"tabList_Dwv5",tabItem:"tabItem_KiUr"};function h(e){let{className:t,block:n,selectedValue:o,selectValue:u,tabValues:d}=e;const m=[],{blockElementScrollPositionUntilNextRender:s}=(0,i.o5)(),p=e=>{const t=e.currentTarget,n=m.indexOf(t),a=d[n].value;a!==o&&(s(t),u(a))},c=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=m.indexOf(e.currentTarget)+1;t=m[n]??m[0];break}case"ArrowLeft":{const n=m.indexOf(e.currentTarget)-1;t=m[n]??m[m.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},d.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>m.push(e),onKeyDown:c,onClick:p},i,{className:(0,l.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=N(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",f.tabList)},r.createElement(h,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function y(e){const t=(0,g.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},4595:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>b,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var a=n(7396),r=(n(3249),n(1042)),l=n(2327),i=n(5089);const o={id:"RNG",title:"RNG Node",sidebar_label:"RNG"},u=void 0,d={unversionedId:"node-reference/RNG",id:"node-reference/RNG",title:"RNG Node",description:"Random Number Node Screenshot",source:"@site/docs/node-reference/rng.mdx",sourceDirName:"node-reference",slug:"/node-reference/RNG",permalink:"/docs/node-reference/RNG",draft:!1,editUrl:"https://github.com/ironclad/rivet/tree/main/packages/docs/docs/node-reference/rng.mdx",tags:[],version:"current",frontMatter:{id:"RNG",title:"RNG Node",sidebar_label:"RNG"},sidebar:"nodeReference",previous:{title:"Number",permalink:"/docs/node-reference/number"},next:{title:"Destructure",permalink:"/docs/node-reference/destructure"}},m={},s=[{value:"Overview",id:"overview",level:2},{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2},{value:"Editor Settings",id:"editor-settings",level:2},{value:"Example 1: Generate a random integer",id:"example-1-generate-a-random-integer",level:2},{value:"Example 2: Generate a random floating-point number",id:"example-2-generate-a-random-floating-point-number",level:2},{value:"Error Handling",id:"error-handling",level:2},{value:"FAQ",id:"faq",level:2},{value:"See Also",id:"see-also",level:2}],p={toc:s},c="wrapper";function b(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Random Number Node Screenshot",src:n(3058).Z,width:"283",height:"242"})),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The Random Number Node, also known as RNG, generates a random number within a specified range. This node is useful for creating randomized behavior in your graph."),(0,r.kt)("p",null,"The node can be configured to generate either integers or floating-point numbers. The range of the random number can be specified with a minimum and maximum value. The maximum value can be set to be either inclusive or exclusive."),(0,r.kt)(l.Z,{defaultValue:"inputs",values:[{label:"Inputs",value:"inputs"},{label:"Outputs",value:"outputs"},{label:"Editor Settings",value:"settings"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"inputs",mdxType:"TabItem"},(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Min"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"The minimum value of the random number. This input is only available if ",(0,r.kt)("inlineCode",{parentName:"td"},"Use Min Input")," is enabled in the editor settings."),(0,r.kt)("td",{parentName:"tr",align:null},"(optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"The input will be coerced into a number if it is not a number.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Max"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum value of the random number. This input is only available if ",(0,r.kt)("inlineCode",{parentName:"td"},"Use Max Input")," is enabled in the editor settings."),(0,r.kt)("td",{parentName:"tr",align:null},"(optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"The input will be coerced into a number if it is not a number."))))),(0,r.kt)(i.Z,{value:"outputs",mdxType:"TabItem"},(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Value"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"The generated random number."),(0,r.kt)("td",{parentName:"tr",align:null}))))),(0,r.kt)(i.Z,{value:"settings",mdxType:"TabItem"},(0,r.kt)("h2",{id:"editor-settings"},"Editor Settings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Setting"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Use Input Toggle"),(0,r.kt)("th",{parentName:"tr",align:null},"Input Data Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Min"),(0,r.kt)("td",{parentName:"tr",align:null},"The minimum value of the random number."),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Max"),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum value of the random number."),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Integers"),(0,r.kt)("td",{parentName:"tr",align:null},"If enabled, the node will generate integer numbers. If disabled, the node will generate floating-point numbers."),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Max Inclusive"),(0,r.kt)("td",{parentName:"tr",align:null},"If enabled, the maximum value will be inclusive. If disabled, the maximum value will be exclusive."),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")))))),(0,r.kt)("h2",{id:"example-1-generate-a-random-integer"},"Example 1: Generate a random integer"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a Random Number Node."),(0,r.kt)("li",{parentName:"ol"},"Set the ",(0,r.kt)("inlineCode",{parentName:"li"},"Min")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"1")," and the ",(0,r.kt)("inlineCode",{parentName:"li"},"Max")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"10"),"."),(0,r.kt)("li",{parentName:"ol"},"Enable the ",(0,r.kt)("inlineCode",{parentName:"li"},"Integers")," setting."),(0,r.kt)("li",{parentName:"ol"},"Run the graph. The output of the Random Number Node should be a random integer between 1 and 10.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Random Number Node Example 1",src:n(4082).Z,width:"315",height:"293"})),(0,r.kt)("h2",{id:"example-2-generate-a-random-floating-point-number"},"Example 2: Generate a random floating-point number"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a Random Number Node."),(0,r.kt)("li",{parentName:"ol"},"Set the ",(0,r.kt)("inlineCode",{parentName:"li"},"Min")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"0")," and the ",(0,r.kt)("inlineCode",{parentName:"li"},"Max")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,r.kt)("li",{parentName:"ol"},"Disable the ",(0,r.kt)("inlineCode",{parentName:"li"},"Integers")," setting."),(0,r.kt)("li",{parentName:"ol"},"Run the graph. The output of the Random Number Node should be a random floating-point number between 0 and 1.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Random Number Node Example 2",src:n(2240).Z,width:"327",height:"287"})),(0,r.kt)("h2",{id:"error-handling"},"Error Handling"),(0,r.kt)("p",null,"The Random Number Node will error if the ",(0,r.kt)("inlineCode",{parentName:"p"},"Min")," is greater than the ",(0,r.kt)("inlineCode",{parentName:"p"},"Max"),". If the ",(0,r.kt)("inlineCode",{parentName:"p"},"Min")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Max")," are equal, the node will always output the ",(0,r.kt)("inlineCode",{parentName:"p"},"Min")," value."),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q: Can I use the Random Number Node to generate a random boolean value?")),(0,r.kt)("p",null,"A: Yes, you can use the Random Number Node to generate a random boolean value by setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"Min")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"Max")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),", and enabling the ",(0,r.kt)("inlineCode",{parentName:"p"},"Integers")," setting. The node will then output either ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),", which can be interpreted as ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," by a ",(0,r.kt)("a",{parentName:"p",href:"/docs/node-reference/bool"},"Bool Node"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q: Can I use the Random Number Node to generate a random string?")),(0,r.kt)("p",null,"A: No, the Random Number Node can only generate random numbers. If you want to generate a random string, you can use a ",(0,r.kt)("a",{parentName:"p",href:"/docs/node-reference/code"},"Code Node")," with a custom JavaScript function."),(0,r.kt)("h2",{id:"see-also"},"See Also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/node-reference/code"},"Code Node")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/node-reference/number"},"Number Node")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/node-reference/text"},"Text Node")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/node-reference/shuffle"},"Shuffle Node"))))}b.isMDXComponent=!0},4082:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rng-node-example-01-43485f5671007b50962f67a8f9b4f532.png"},2240:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rng-node-example-02-1a2be0a8d44c4f9c15438cffaeb7143b.png"},3058:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rng-node-567d02d7d8388e059a613a01f5a36b93.png"}}]);
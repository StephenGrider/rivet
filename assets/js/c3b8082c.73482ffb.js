"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5913],{6593:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(1644);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7026:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(1644),r=n(156);const l={tabItem:"tabItem_hFhF"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:n},t)}},6663:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(373),r=n(1644),l=n(156),i=n(1476),o=n(2824),s=n(9643),u=n(7190),p=n(6985);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function c(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=c(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[s,u]=h({queryString:n,groupId:a}),[d,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),f=(()=>{const e=s??d;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),g(e)}),[u,g,l]),tabValues:l}}var f=n(8810);const k={tabList:"tabList_A6Ol",tabItem:"tabItem_djxK"};function N(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),c=e=>{const t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==o&&(d(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:c},i,{className:(0,l.Z)("tabs__item",k.tabItem,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=g(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",k.tabList)},r.createElement(N,(0,a.Z)({},e,t)),r.createElement(b,(0,a.Z)({},e,t)))}function v(e){const t=(0,f.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},7785:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var a=n(373),r=(n(1644),n(6593)),l=n(6663),i=n(7026);const o={id:"join",title:"Join Node",sidebar_label:"Join"},s=void 0,u={unversionedId:"node-reference/join",id:"node-reference/join",title:"Join Node",description:"Join Node Screenshot",source:"@site/docs/node-reference/join.mdx",sourceDirName:"node-reference",slug:"/node-reference/join",permalink:"/docs/node-reference/join",draft:!1,editUrl:"https://github.com/ironclad/rivet/tree/main/packages/docs/docs/node-reference/join.mdx",tags:[],version:"current",frontMatter:{id:"join",title:"Join Node",sidebar_label:"Join"},sidebar:"nodeReference",previous:{title:"Extract with Regex",permalink:"/docs/node-reference/extract-with-regex"},next:{title:"Prompt",permalink:"/docs/node-reference/prompt"}},p={},d=[{value:"Overview",id:"overview",level:2},{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2},{value:"Editor Settings",id:"editor-settings",level:2},{value:"Example 1: Join an array of strings with a newline",id:"example-1-join-an-array-of-strings-with-a-newline",level:2},{value:"Example 2: Join multiple inputs with a space",id:"example-2-join-multiple-inputs-with-a-space",level:2},{value:"Error Handling",id:"error-handling",level:2},{value:"FAQ",id:"faq",level:2},{value:"See Also",id:"see-also",level:2}],c={toc:d},m="wrapper";function h(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Join Node Screenshot",src:n(1350).Z,width:"662",height:"556"})),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The Join Node is used to concatenate an array of strings into a single string. The strings are joined using a specified delimiter."),(0,r.kt)("p",null,"The Join Node can be used to flatten arrays of strings into a single string. This is useful when you want to format a list of items in a specific way, such as creating a comma-separated list, or joining lines of text with newline characters."),(0,r.kt)("p",null,"The node also supports the use of special characters as delimiters, such as newline (",(0,r.kt)("inlineCode",{parentName:"p"},"\\n"),"), tab (",(0,r.kt)("inlineCode",{parentName:"p"},"\\t"),"), and space (",(0,r.kt)("inlineCode",{parentName:"p"}," "),"). To use them, put the literal character in the Join String field in the settings. For example, to use a newline character, you need to press ",(0,r.kt)("inlineCode",{parentName:"p"},"Enter")," in the Join String field."),(0,r.kt)("p",null,"Arrays that are input into the Join Node will be flattened before being joined. If you connect an array to Input 1 such as ",(0,r.kt)("inlineCode",{parentName:"p"},'["apple", "banana", "cherry"]'),", and a single value into Input 2, such as ",(0,r.kt)("inlineCode",{parentName:"p"},'"orange"'),", the output of the Join Node will be ",(0,r.kt)("inlineCode",{parentName:"p"},"apple, banana, cherry, orange"),", if the delimiter is set to ",(0,r.kt)("inlineCode",{parentName:"p"},", "),"."),(0,r.kt)("p",null,"Array items and inputs will be coerced into strings before joining."),(0,r.kt)(l.Z,{defaultValue:"inputs",values:[{label:"Inputs",value:"inputs"},{label:"Outputs",value:"outputs"},{label:"Editor Settings",value:"settings"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"inputs",mdxType:"TabItem"},(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Input ","[i]"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The ith string to be joined."),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"Dynamic number of inputs based on how many connections there are.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Join String"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The string used as a delimiter to join the inputs. This input is only available if ",(0,r.kt)("inlineCode",{parentName:"td"},"Use Join String Input")," is enabled."),(0,r.kt)("td",{parentName:"tr",align:null},"N/A"),(0,r.kt)("td",{parentName:"tr",align:null},"The input will be coerced into a string if it is not a string. If not provided, the Join String specified in the settings will be used."))))),(0,r.kt)(i.Z,{value:"outputs",mdxType:"TabItem"},(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Joined"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The joined string."),(0,r.kt)("td",{parentName:"tr",align:null}))))),(0,r.kt)(i.Z,{value:"settings",mdxType:"TabItem"},(0,r.kt)("h2",{id:"editor-settings"},"Editor Settings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Setting"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Use Input Toggle"),(0,r.kt)("th",{parentName:"tr",align:null},"Input Data Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Flatten"),(0,r.kt)("td",{parentName:"tr",align:null},"If enabled, the node will flatten array inputs before joining them."),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Join String"),(0,r.kt)("td",{parentName:"tr",align:null},"The string used as a delimiter to join the inputs."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\\n")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Use Join String Input"),(0,r.kt)("td",{parentName:"tr",align:null},"If enabled, the Join String can be provided via the Join String input port."),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")))))),(0,r.kt)("h2",{id:"example-1-join-an-array-of-strings-with-a-newline"},"Example 1: Join an array of strings with a newline"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create an ",(0,r.kt)("a",{parentName:"p",href:"/docs/node-reference/array"},"Array Node")," and set the values to ",(0,r.kt)("inlineCode",{parentName:"p"},'["apple", "banana", "cherry"]')," with Text Nodes.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a Join Node and set the Join String to ",(0,r.kt)("inlineCode",{parentName:"p"},"\\n")," by deleting the current value and pressing ",(0,r.kt)("inlineCode",{parentName:"p"},"Enter")," in the Join String field in the settings.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Connect the Array Node to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Input 1")," port of the Join Node.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the graph. The output of the Join Node should be:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"apple\nbanana\ncherry\n")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Join Node Example 1",src:n(2152).Z,width:"1219",height:"601"})),(0,r.kt)("h2",{id:"example-2-join-multiple-inputs-with-a-space"},"Example 2: Join multiple inputs with a space"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create three ",(0,r.kt)("a",{parentName:"li",href:"/docs/node-reference/text"},"Text Nodes")," and set their values to ",(0,r.kt)("inlineCode",{parentName:"li"},"Hello"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"World"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"!"),", respectively."),(0,r.kt)("li",{parentName:"ol"},"Create a Join Node and set the Join String to ",(0,r.kt)("inlineCode",{parentName:"li"}," ")," (a space)."),(0,r.kt)("li",{parentName:"ol"},"Connect the Text Nodes to the ",(0,r.kt)("inlineCode",{parentName:"li"},"Input 1"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Input 2"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"Input 3")," ports of the Join Node, respectively."),(0,r.kt)("li",{parentName:"ol"},"Run the graph. The output of the Join Node should be ",(0,r.kt)("inlineCode",{parentName:"li"},"Hello World !"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Join Node Example 2",src:n(864).Z,width:"876",height:"605"})),(0,r.kt)("h2",{id:"error-handling"},"Error Handling"),(0,r.kt)("p",null,"The Join Node will not error under normal circumstances. If an input is not provided, the Join Node will output an empty string."),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q: Can I use special characters as the Join String?")),(0,r.kt)("p",null,"A: Yes, you can use special characters such as newline (",(0,r.kt)("inlineCode",{parentName:"p"},"\\n"),"), tab (",(0,r.kt)("inlineCode",{parentName:"p"},"\\t"),"), and space (",(0,r.kt)("inlineCode",{parentName:"p"}," "),") as the Join String. To use these characters, you need to enter them literally in the Join String field in the settings. For example, to use a newline character, you need to press ",(0,r.kt)("inlineCode",{parentName:"p"},"Enter")," in the Join String field."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q: Can I join an array of numbers or other non-string values?")),(0,r.kt)("p",null,"A: Yes, you can join an array of any data type. The values will be coerced into strings before being joined."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q: Can I use a dynamic Join String?")),(0,r.kt)("p",null,"A: Yes, you can use a dynamic Join String by enabling the input port toggle for the join string setting. This will create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"Join String")," input port on the node, and you can connect another node to this port to provide the Join String."),(0,r.kt)("h2",{id:"see-also"},"See Also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/node-reference/split-text"},"Split Text Node")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/node-reference/array"},"Array Node")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/node-reference/text"},"Text Node")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/node-reference/code"},"Code Node")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/user-guide/data-types"},"Data Types"))))}h.isMDXComponent=!0},2152:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/join-node-example-01-49974839cfb2cfb68362aa8625336c95.png"},864:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/join-node-example-02-743305d82b12f995e48bf96b791f0649.png"},1350:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/join-node-1d6f0a6eecfb4046dbf63b38756d1dd3.png"}}]);
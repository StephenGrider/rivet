"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3456],{6593:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(1644);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),d=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,h=p["".concat(u,".").concat(m)]||p[m]||c[m]||l;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7026:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(1644),r=n(156);const l={tabItem:"tabItem_hFhF"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:n},t)}},6663:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(373),r=n(1644),l=n(156),i=n(1476),o=n(2824),u=n(9643),d=n(7190),s=n(6985);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function c(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=c(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[u,d]=h({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,s.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),k=(()=>{const e=u??p;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,l]),tabValues:l}}var k=n(8810);const g={tabList:"tabList_A6Ol",tabItem:"tabItem_djxK"};function b(e){let{className:t,block:n,selectedValue:o,selectValue:u,tabValues:d}=e;const s=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),c=e=>{const t=e.currentTarget,n=s.indexOf(t),a=d[n].value;a!==o&&(p(t),u(a))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},d.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>s.push(e),onKeyDown:m,onClick:c},i,{className:(0,l.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function N(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(N,(0,a.Z)({},e,t)))}function v(e){const t=(0,k.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},3217:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var a=n(373),r=(n(1644),n(6593)),l=n(6663),i=n(7026);const o={id:"read-directory",title:"Read Directory Node",sidebar_label:"Read Directory"},u=void 0,d={unversionedId:"node-reference/read-directory",id:"node-reference/read-directory",title:"Read Directory Node",description:"Read Directory Node Screenshot",source:"@site/docs/node-reference/read-directory.mdx",sourceDirName:"node-reference",slug:"/node-reference/read-directory",permalink:"/docs/node-reference/read-directory",draft:!1,editUrl:"https://github.com/ironclad/rivet/tree/main/packages/docs/docs/node-reference/read-directory.mdx",tags:[],version:"current",frontMatter:{id:"read-directory",title:"Read Directory Node",sidebar_label:"Read Directory"},sidebar:"nodeReference",previous:{title:"Load Dataset",permalink:"/docs/node-reference/load-dataset"},next:{title:"Read File",permalink:"/docs/node-reference/read-file"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2},{value:"Editor Settings",id:"editor-settings",level:2},{value:"Example 1: Read the contents of a directory",id:"example-1-read-the-contents-of-a-directory",level:2},{value:"Error Handling",id:"error-handling",level:2},{value:"FAQ",id:"faq",level:2},{value:"See Also",id:"see-also",level:2}],c={toc:p},m="wrapper";function h(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Read Directory Node Screenshot",src:n(9375).Z,width:"377",height:"295"})),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The Read Directory Node reads the contents of a specified directory and outputs an array of filenames. The node can also be configured to read directories recursively, include directories in the output, filter the filenames, return relative paths, and ignore certain files or directories."),(0,r.kt)("p",null,"If you are using the Rivet SDK, this node requires a native API to be available in the context when the graph is being run. The native API is responsible for providing the functionality to read the contents of a directory."),(0,r.kt)(l.Z,{defaultValue:"inputs",values:[{label:"Inputs",value:"inputs"},{label:"Outputs",value:"outputs"},{label:"Editor Settings",value:"settings"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"inputs",mdxType:"TabItem"},(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("p",null,"The only inputs for the Read Directory node are toggleable Editor Settings. See that section for possible inputs.")),(0,r.kt)(i.Z,{value:"outputs",mdxType:"TabItem"},(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Paths"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string[]")),(0,r.kt)("td",{parentName:"tr",align:null},"An array of filenames in the specified directory."),(0,r.kt)("td",{parentName:"tr",align:null},"If the directory does not exist or is not accessible, the output will be an array with one element containing the string ",(0,r.kt)("inlineCode",{parentName:"td"},"(no such path)"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Root Path"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The path of the directory that was read."),(0,r.kt)("td",{parentName:"tr",align:null},"The output will be the same as the Path input or the Path specified in the settings."))))),(0,r.kt)(i.Z,{value:"settings",mdxType:"TabItem"},(0,r.kt)("h2",{id:"editor-settings"},"Editor Settings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Setting"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Use Input Toggle"),(0,r.kt)("th",{parentName:"tr",align:null},"Input Data Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Path"),(0,r.kt)("td",{parentName:"tr",align:null},"The path of the directory to read."),(0,r.kt)("td",{parentName:"tr",align:null},"(required)"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Recursive"),(0,r.kt)("td",{parentName:"tr",align:null},"If enabled, the node will read directories recursively."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Include Directories"),(0,r.kt)("td",{parentName:"tr",align:null},"If enabled, the node will include directories in the output."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Filter Globs"),(0,r.kt)("td",{parentName:"tr",align:null},"An array of glob patterns to filter the filenames, comma-separated."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string[]"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Relative"),(0,r.kt)("td",{parentName:"tr",align:null},"If enabled, the node will return relative paths."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ignores"),(0,r.kt)("td",{parentName:"tr",align:null},"An array of glob patterns to ignore certain files or directories, comma-separated. For example, to filter out ",(0,r.kt)("inlineCode",{parentName:"td"},"node_modules"),", you can do ",(0,r.kt)("inlineCode",{parentName:"td"},"**/node_modules/**/*"),"."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[]")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string[]"))))))),(0,r.kt)("h2",{id:"example-1-read-the-contents-of-a-directory"},"Example 1: Read the contents of a directory"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a Read Directory Node and set the ",(0,r.kt)("inlineCode",{parentName:"li"},"Path")," to the directory you want to read."),(0,r.kt)("li",{parentName:"ol"},"Run the graph. The ",(0,r.kt)("inlineCode",{parentName:"li"},"Paths")," output of the Read Directory Node should contain an array of filenames in the specified directory.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Read Directory Node Example 1",src:n(3446).Z,width:"606",height:"903"})),(0,r.kt)("h2",{id:"error-handling"},"Error Handling"),(0,r.kt)("p",null,"The Read Directory Node will error if the native API is not available in the context when the graph is being run. It will also error if the ",(0,r.kt)("inlineCode",{parentName:"p"},"Path")," input is not provided."),(0,r.kt)("p",null,"If the directory does not exist or is not accessible, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Paths")," output will be an array with one element containing the string ",(0,r.kt)("inlineCode",{parentName:"p"},"(no such path)"),"."),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q: What is a native API?")),(0,r.kt)("p",null,"A: A native API is an object that is responsible for providing native functionality to nodes. It is passed to the context when the graph is being run. The native API must implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"NativeApi")," interface, which includes methods for reading directories, reading and writing files, and other native operations. See the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference"},"API Reference")," for more information."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q: Can I read directories recursively?")),(0,r.kt)("p",null,"A: Yes, you can set the ",(0,r.kt)("inlineCode",{parentName:"p"},"Recursive")," input or setting to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," to read directories recursively."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q: What does it mean to include directories in the output?")),(0,r.kt)("p",null,"A: If the ",(0,r.kt)("inlineCode",{parentName:"p"},"Include Directories")," input or setting is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"Paths")," output will contain directory names in addition to filenames. For example, if the ",(0,r.kt)("inlineCode",{parentName:"p"},"Path")," input is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"/Users/username/Documents"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"Paths")," output will contain filenames like ",(0,r.kt)("inlineCode",{parentName:"p"},"file.txt")," and directory names like ",(0,r.kt)("inlineCode",{parentName:"p"},"subdirectory")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"subdirectory2"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q: How to I filter or ignore using globs?")),(0,r.kt)("p",null,"A: Glob patterns are a way to filter filenames using wildcards. For example, to filter out all ",(0,r.kt)("inlineCode",{parentName:"p"},".txt")," files, you can do ",(0,r.kt)("inlineCode",{parentName:"p"},"**/*.txt"),". To filter out all files in a ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," directory, you can do ",(0,r.kt)("inlineCode",{parentName:"p"},"**/node_modules/**/*"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q: What does it mean to return relative paths?")),(0,r.kt)("p",null,"A: If the ",(0,r.kt)("inlineCode",{parentName:"p"},"Relative")," input or setting is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"Paths")," output will contain relative paths instead of absolute paths. For example, if the ",(0,r.kt)("inlineCode",{parentName:"p"},"Path")," input is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"/Users/username/Documents"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"Paths")," output will contain filenames like ",(0,r.kt)("inlineCode",{parentName:"p"},"file.txt")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"/Users/username/Documents/file.txt"),"."),(0,r.kt)("h2",{id:"see-also"},"See Also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/node-reference/read-file"},"Read File Node"))))}h.isMDXComponent=!0},3446:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/read-directory-node-example-01-20ec97ffd65968f7ba9f6afef8c63a26.png"},9375:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/read-directory-node-e7eaa4f058d4a933eee30e7126beae62.png"}}]);
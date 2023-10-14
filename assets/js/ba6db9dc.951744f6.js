"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7501],{6593:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(1644);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),s=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(a),m=n,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return a?r.createElement(h,i(i({ref:t},c),{},{components:a})):r.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7026:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(1644),n=a(156);const l={tabItem:"tabItem_hFhF"};function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l.tabItem,i),hidden:a},t)}},6663:(e,t,a)=>{a.d(t,{Z:()=>v});var r=a(373),n=a(1644),l=a(156),i=a(1476),o=a(2824),u=a(9643),s=a(7190),c=a(6985);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function d(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const r=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=d(e),[i,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,s]=h({queryString:a,groupId:r}),[p,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),f=(()=>{const e=u??p;return m({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),g(e)}),[s,g,l]),tabValues:l}}var f=a(8810);const k={tabList:"tabList_A6Ol",tabItem:"tabItem_djxK"};function b(e){let{className:t,block:a,selectedValue:o,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),r=s[a].value;r!==o&&(p(t),u(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},i,{className:(0,l.Z)("tabs__item",k.tabItem,i?.className,{"tabs__item--active":o===t})}),a??t)})))}function N(e){let{lazy:t,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function x(e){const t=g(e);return n.createElement("div",{className:(0,l.Z)("tabs-container",k.tabList)},n.createElement(b,(0,r.Z)({},e,t)),n.createElement(N,(0,r.Z)({},e,t)))}function v(e){const t=(0,f.Z)();return n.createElement(x,(0,r.Z)({key:String(t)},e))}},69:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=a(373),n=(a(1644),a(6593)),l=a(6663),i=a(7026);const o={id:"extract-with-regex",title:"Extract with Regex Node",sidebar_label:"Extract with Regex"},u=void 0,s={unversionedId:"node-reference/extract-with-regex",id:"node-reference/extract-with-regex",title:"Extract with Regex Node",description:"Extract with Regex Node Screenshot",source:"@site/docs/node-reference/extract-with-regex.mdx",sourceDirName:"node-reference",slug:"/node-reference/extract-with-regex",permalink:"/docs/node-reference/extract-with-regex",draft:!1,editUrl:"https://github.com/ironclad/rivet/tree/main/packages/docs/docs/node-reference/extract-with-regex.mdx",tags:[],version:"current",frontMatter:{id:"extract-with-regex",title:"Extract with Regex Node",sidebar_label:"Extract with Regex"},sidebar:"nodeReference",previous:{title:"Extract Markdown Code Blocks",permalink:"/docs/node-reference/extract-markdown-code-blocks"},next:{title:"Join",permalink:"/docs/node-reference/join"}},c={},p=[{value:"Overview",id:"overview",level:2},{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2},{value:"Editor Settings",id:"editor-settings",level:2},{value:"Example 1: Extract a command from an LLM response",id:"example-1-extract-a-command-from-an-llm-response",level:2},{value:"Error Handling",id:"error-handling",level:2},{value:"FAQ",id:"faq",level:2},{value:"See Also",id:"see-also",level:2}],d={toc:p},m="wrapper";function h(e){let{components:t,...o}=e;return(0,n.kt)(m,(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Extract with Regex Node Screenshot",src:a(3487).Z,width:"347",height:"228"})),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"The Extract With Regex (or Extract Regex) node allows you to extract one or more strings from a string using a regular expression."),(0,n.kt)("p",null,"Each capture group in the regular expression will correspond to an output port on the node, so the number of outputs will be equal to the number of capture groups in the regular expression."),(0,n.kt)("p",null,"The Extract With Regex node can be used for many cases such as parsing a response from an LLM to extract specific values, or parsing a string from a file to extract specific values."),(0,n.kt)("p",null,"If you do not have any capture groups in your regex, you can still use the ",(0,n.kt)("inlineCode",{parentName:"p"},"Matches"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"Succeeded"),", and ",(0,n.kt)("inlineCode",{parentName:"p"},"Failed")," outputs of the node to determine if the regex matched the input string."),(0,n.kt)(l.Z,{defaultValue:"inputs",values:[{label:"Inputs",value:"inputs"},{label:"Outputs",value:"outputs"},{label:"Editor Settings",value:"settings"}],mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"inputs",mdxType:"TabItem"},(0,n.kt)("h2",{id:"inputs"},"Inputs"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Title"),(0,n.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Input"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:null},"The string to match the regex against."),(0,n.kt)("td",{parentName:"tr",align:null},"(required)"),(0,n.kt)("td",{parentName:"tr",align:null},"If the value is not a string, it will be coerced into a string before matching."))))),(0,n.kt)(i.Z,{value:"outputs",mdxType:"TabItem"},(0,n.kt)("h2",{id:"outputs"},"Outputs"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Title"),(0,n.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Output N"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:null},"Output ports are created, one per capture group in the regular expression path. The value is the contents of the capture group."),(0,n.kt)("td",{parentName:"tr",align:null},"Dynamic count based on the number of capture groups.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Matches"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string[]")),(0,n.kt)("td",{parentName:"tr",align:null},"All matches of the regular expression on the string, as an array."),(0,n.kt)("td",{parentName:"tr",align:null},"Contains all matched strings, ignoring capture groups.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Succeeded"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"boolean")),(0,n.kt)("td",{parentName:"tr",align:null},"Outputs true if the regex was matched on the input string. Outputs false if it was node."),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Failed"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"boolean")),(0,n.kt)("td",{parentName:"tr",align:null},"Outputs true if the regex did not match the input string. Outputs false if it was matched."),(0,n.kt)("td",{parentName:"tr",align:null}))))),(0,n.kt)(i.Z,{value:"settings",mdxType:"TabItem"},(0,n.kt)("h2",{id:"editor-settings"},"Editor Settings"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Setting"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Use Input Toggle"),(0,n.kt)("th",{parentName:"tr",align:null},"Input Data Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Error on failed"),(0,n.kt)("td",{parentName:"tr",align:null},"If true, the Extract With Regex node will error entirely if the input string was not found. This is useful for required matches."),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"N/A")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Multiline Mode"),(0,n.kt)("td",{parentName:"tr",align:null},"If true, the ",(0,n.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline"},"multiline flag")," is set on the regular expression, causing ",(0,n.kt)("inlineCode",{parentName:"td"},"^")," and ",(0,n.kt)("inlineCode",{parentName:"td"},"$")," to match the beginning and ends of lines within the string."),(0,n.kt)("td",{parentName:"tr",align:null},"False"),(0,n.kt)("td",{parentName:"tr",align:null},"No"),(0,n.kt)("td",{parentName:"tr",align:null},"N/A")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Regex"),(0,n.kt)("td",{parentName:"tr",align:null},"The regular expression to use for matching against the input string."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"([a-zA-Z]+)")," (a string of alphabetic characters)"),(0,n.kt)("td",{parentName:"tr",align:null},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"string"))))))),(0,n.kt)("h2",{id:"example-1-extract-a-command-from-an-llm-response"},"Example 1: Extract a command from an LLM response"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create a ",(0,n.kt)("a",{parentName:"li",href:"/docs/node-reference/chat"},"Chat Node")," and pass a ",(0,n.kt)("a",{parentName:"li",href:"/docs/node-reference/text"},"Prompt Node")," set to ",(0,n.kt)("inlineCode",{parentName:"li"},"System")," into its ",(0,n.kt)("inlineCode",{parentName:"li"},"prompt")," input, with something like the following:",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'Your reply can initiate commands, for example `!hello` will cause "Hello world" to appear for the user. Try it out now!\n'))),(0,n.kt)("li",{parentName:"ol"},"Feed the output of the Chat node into an Extract With Regex node with the following regular expression:",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"!([a-zA-Z]+)\n"))),(0,n.kt)("li",{parentName:"ol"},"Feed the output of the ",(0,n.kt)("inlineCode",{parentName:"li"},"Output 1")," port into another Text node to get the matched command. The output of the Text node should be ",(0,n.kt)("inlineCode",{parentName:"li"},"hello"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Extract with Regex Example 1",src:a(2594).Z,width:"1054",height:"750"})),(0,n.kt)("h2",{id:"error-handling"},"Error Handling"),(0,n.kt)("p",null,"If the input string is not provided, the node will error. If the input is not a string, it will be coerced into a string before matching."),(0,n.kt)("p",null,"If the regular expression is invalid, the node will error."),(0,n.kt)("p",null,"If the ",(0,n.kt)("inlineCode",{parentName:"p"},"Error on failed")," setting is enabled, the node will error if the regular expression did not match the input string."),(0,n.kt)("h2",{id:"faq"},"FAQ"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Q: How do I match a string that contains a special character?")),(0,n.kt)("p",null,"Special characters such as a newline cannot be escaped in the regular expression editor, however you can put literal newlines in the regular expression in the editor, and they will be preserved. So to match a new line, put a new line in the regular expression editor."),(0,n.kt)("h2",{id:"see-also"},"See Also"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/node-reference/extract-object-path"},"Extract Object Path Node")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/node-reference/extract-json"},"Extract JSON Node")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/node-reference/extract-yaml"},"Extract YAML Node")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/node-reference/extract-object-path"},"Extract Object Path Node")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/node-reference/match"},"Match Node"))))}h.isMDXComponent=!0},2594:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/extract-with-regex-node-example-01-e607bc5e46c68dbaad10f3cdbbe5a8a3.png"},3487:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/extract-with-regex-node-ed6b317ad6e2df504d3023145cd7bf0f.png"}}]);
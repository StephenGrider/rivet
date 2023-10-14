"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6530],{6593:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(1644);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(n),h=r,m=c["".concat(u,".").concat(h)]||c[h]||d[h]||o;return n?a.createElement(m,l(l({ref:t},s),{},{components:n})):a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=h;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7026:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(1644),r=n(156);const o={tabItem:"tabItem_hFhF"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:n},t)}},6663:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(373),r=n(1644),o=n(156),l=n(1476),i=n(2824),u=n(9643),p=n(7190),s=n(6985);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[u,p]=m({queryString:n,groupId:a}),[c,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,s.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=u??c;return h({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),f(e)}),[p,f,o]),tabValues:o}}var g=n(8810);const k={tabList:"tabList_A6Ol",tabItem:"tabItem_djxK"};function b(e){let{className:t,block:n,selectedValue:i,selectValue:u,tabValues:p}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=s.indexOf(t),a=p[n].value;a!==i&&(c(t),u(a))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>s.push(e),onKeyDown:h,onClick:d},l,{className:(0,o.Z)("tabs__item",k.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function N(e){const t=(0,g.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},9706:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=n(373),r=(n(1644),n(6593)),o=n(6663),l=n(7026);const i={id:"loop-controller",title:"Loop Controller Node",sidebar_label:"Loop Controller"},u=void 0,p={unversionedId:"node-reference/loop-controller",id:"node-reference/loop-controller",title:"Loop Controller Node",description:"Loop Controller Node Screenshot",source:"@site/docs/node-reference/loop-controller.mdx",sourceDirName:"node-reference",slug:"/node-reference/loop-controller",permalink:"/docs/node-reference/loop-controller",draft:!1,editUrl:"https://github.com/ironclad/rivet/tree/main/packages/docs/docs/node-reference/loop-controller.mdx",tags:[],version:"current",frontMatter:{id:"loop-controller",title:"Loop Controller Node",sidebar_label:"Loop Controller"},sidebar:"nodeReference",previous:{title:"If/Else",permalink:"/docs/node-reference/if-else"},next:{title:"Match",permalink:"/docs/node-reference/match"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2},{value:"Editor Settings",id:"editor-settings",level:2},{value:"Example 1: AI Chatting To Itself",id:"example-1-ai-chatting-to-itself",level:2},{value:"Example 2: Iterating Over an Array",id:"example-2-iterating-over-an-array",level:2},{value:"Error Handling",id:"error-handling",level:2},{value:"FAQ",id:"faq",level:2},{value:"See Also",id:"see-also",level:2}],d={toc:c},h="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(h,(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Loop Controller Node Screenshot",src:n(478).Z,width:"519",height:"298"})),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The Loop Controller Node is a powerful node that allows you to create loops in your graph. It is the only node in Rivet that is allowed to contain cycles of nodes, including itself."),(0,r.kt)("p",null,"The Loop Controller Node maintains the state of the loop and controls the flow of values through the loop. All values that can change in a loop must flow through the Loop Controller Node itself."),(0,r.kt)("p",null,"The Loop Controller Node has a dynamic number of pairs of inputs. Each pair consists of an input and a default input. The default input is the initial state of the loop and the input is the value that changes in each iteration of the loop."),(0,r.kt)("p",null,"The Loop Controller Node also has a dynamic number of output ports. On the first iteration, the value of each output port is the value passed into the corresponding default input port. On subsequent iterations, the value of each output port is the value passed into the corresponding input port on the previous iteration."),(0,r.kt)("p",null,"The Loop Controller Node has a ",(0,r.kt)("inlineCode",{parentName:"p"},"Continue")," input port. If the value passed into the ",(0,r.kt)("inlineCode",{parentName:"p"},"Continue")," input port is truthy, the loop will continue executing. If the value is falsy, the loop will stop executing."),(0,r.kt)("p",null,"For more information on loops, see the ",(0,r.kt)("a",{parentName:"p",href:"/docs/user-guide/loops"},"Loops")," section of the user guide."),(0,r.kt)(o.Z,{defaultValue:"inputs",values:[{label:"Inputs",value:"inputs"},{label:"Outputs",value:"outputs"},{label:"Editor Settings",value:"settings"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"inputs",mdxType:"TabItem"},(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Continue"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"any")),(0,r.kt)("td",{parentName:"tr",align:null},"If the value is truthy, the loop will continue executing. If the value is falsy, the loop will stop."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},"The input will be coerced into a boolean. If the input is not provided, the loop will continue by default.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Input X"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"any")),(0,r.kt)("td",{parentName:"tr",align:null},"The value that changes in each iteration of the loop."),(0,r.kt)("td",{parentName:"tr",align:null},"(Required)"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Input X Default"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"any")),(0,r.kt)("td",{parentName:"tr",align:null},"The initial value of the loop."),(0,r.kt)("td",{parentName:"tr",align:null},"(Required)"),(0,r.kt)("td",{parentName:"tr",align:null}))))),(0,r.kt)(l.Z,{value:"outputs",mdxType:"TabItem"},(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Break"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"any")),(0,r.kt)("td",{parentName:"tr",align:null},"If the ",(0,r.kt)("inlineCode",{parentName:"td"},"Continue")," input is falsy, this output port will run with an array of all the input values."),(0,r.kt)("td",{parentName:"tr",align:null},"If the ",(0,r.kt)("inlineCode",{parentName:"td"},"Continue")," input is truthy, this output port will not run.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Output X"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"any")),(0,r.kt)("td",{parentName:"tr",align:null},"The value of the corresponding input or default input."),(0,r.kt)("td",{parentName:"tr",align:null},"On the first iteration, the value is the value passed into the corresponding default input port. On subsequent iterations, the value is the value passed into the corresponding input port on the previous iteration."))))),(0,r.kt)(l.Z,{value:"settings",mdxType:"TabItem"},(0,r.kt)("h2",{id:"editor-settings"},"Editor Settings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Setting"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Use Input Toggle"),(0,r.kt)("th",{parentName:"tr",align:null},"Input Data Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Max Iterations"),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum number of iterations that the loop can run. If the loop exceeds this number, it will error."),(0,r.kt)("td",{parentName:"tr",align:null},"100"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number"))))))),(0,r.kt)("h2",{id:"example-1-ai-chatting-to-itself"},"Example 1: AI Chatting To Itself"),(0,r.kt)("p",null,"The following example shows how you can use the Loop Controller Node to create a loop that will never break."),(0,r.kt)("p",null,"The AI is prompted with a single message, which is given into the Chat node. The existing message history and the AI's response are combined together to form the new message history, which feeds back into the loop controller. Effectively, the AI starts chatting with itself."),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:n(5252).Z},(0,r.kt)("img",{alt:"Loop Controller Node Example 1",src:n(9411).Z,width:"1636",height:"504"}))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This loop will never break. If you run this graph, it will eventually fail after the default of 100 iterations.")),(0,r.kt)("h2",{id:"example-2-iterating-over-an-array"},"Example 2: Iterating Over an Array"),(0,r.kt)("p",null,"A common use-case is to iterate over an array. The following example shows how you can use the Loop Controller Node to iterate over an array, and return a new array containing ",(0,r.kt)("inlineCode",{parentName:"p"}," Mapped")," appended to each element."),(0,r.kt)("p",null,"In each iteration of the loop, we use a ",(0,r.kt)("a",{parentName:"p",href:"/docs/node-reference/pop"},"Pop Node")," to pop the first value off the array and append ",(0,r.kt)("inlineCode",{parentName:"p"}," Mapped")," to it. We then push the new value into the output array using an ",(0,r.kt)("a",{parentName:"p",href:"/docs/node-reference/array"},"Array Node"),", which is a combination of the existing output array, and the new value. Once the input array is empty, the loop will break, using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/node-reference/compare"},"Compare Node"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/node-reference/graph-output"},"Graph Output")," node is connected to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Break")," output of the loop controller. It is given all of the inputs in an array, so the first array will be empty and the second array will contain the mapped values. You could use an ",(0,r.kt)("a",{parentName:"p",href:"/docs/node-reference/extract-object-path"},"Extract Object Path Node")," to extract the second array using ",(0,r.kt)("inlineCode",{parentName:"p"},"$[1]"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:n(3868).Z},(0,r.kt)("img",{alt:"Loop Controller Node Example 2",src:n(1189).Z,width:"2312",height:"1001"}))),(0,r.kt)("h2",{id:"error-handling"},"Error Handling"),(0,r.kt)("p",null,"The Loop Controller Node will error if the loop exceeds the maximum number of iterations specified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Max Iterations")," setting."),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q: Why do I need to connect something to the Break output port?")),(0,r.kt)("p",null,'A: The graph needs to traverse from the output nodes of the graph to the input node due to how the processing works, so there needs to be a "leaf" node for the graph execution to start from. The "Break" output port is convenient to connect to, even if the loop never breaks.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q: Why does the my loop run forever?")),(0,r.kt)("p",null,'A: You may have not connected the "Continue" input port to anything. If the "Continue" input port is not connected to anything, it will default to ',(0,r.kt)("inlineCode",{parentName:"p"},"true"),", which means the loop will never break."),(0,r.kt)("p",null,'If you have an output that is "Not Ran" connected to the input port, such as an ',(0,r.kt)("a",{parentName:"p",href:"/docs/node-reference/if"},"If Node"),', the loop will never break because the "Not Ran" output will always be ',(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q: What happens if I don't connect the default input port?")),(0,r.kt)("p",null,"A: Right now, this is undefined behavior, so try to connect all the defaults with something."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q: How can I remember the ports better?")),(0,r.kt)("p",null,'You can give the nodes connected to the input ports descriptive names, as the names of the nodes connected to the input ports are what show on the loop controller. Or, you could just remember that the loop controller\'s inputs are in "pairs" so try to group them that way.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q: Why does the loop controller have a maximum number of iterations?")),(0,r.kt)("p",null,"A: The maximum number of iterations is there to prevent accidental infinite loops. If you have a loop that is not breaking, it will eventually error after the maximum number of iterations. If you need an truly infinite loop, you can set the maximum number of iterations to an extremely high number."),(0,r.kt)("h2",{id:"see-also"},"See Also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/user-guide/loops"},"Loops")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/user-guide/control-flow"},"Control Flow"))))}m.isMDXComponent=!0},5252:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/loop-controller-node-example-01-890cf30bd6381f3ee3ac5cfc9b57a775.png"},3868:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/loop-controller-node-example-02-05d5881b2d34b81ca6c2c53beb5760fb.png"},9411:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/loop-controller-node-example-01-890cf30bd6381f3ee3ac5cfc9b57a775.png"},1189:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/loop-controller-node-example-02-05d5881b2d34b81ca6c2c53beb5760fb.png"},478:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/loop-controller-node-6bb250b8c455e17b7b0f498689de4db8.png"}}]);
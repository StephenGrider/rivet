"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5494],{1042:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(3249);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(n),p=a,f=d["".concat(i,".").concat(p)]||d[p]||m[p]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[d]="string"==typeof e?e:a,l[1]=u;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5089:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(3249),a=n(2689);const o={tabItem:"tabItem_o9Hs"};function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:n},t)}},2327:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(7396),a=n(3249),o=n(2689),l=n(5986),u=n(6659),i=n(4532),s=n(5821),c=n(3312);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,u.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=m(e),[l,u]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[i,s]=f({queryString:n,groupId:r}),[d,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),h=(()=>{const e=i??d;return p({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{h&&u(h)}),[h]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),s(e),b(e)}),[s,b,o]),tabValues:o}}var h=n(3072);const g={tabList:"tabList_Dwv5",tabItem:"tabItem_KiUr"};function v(e){let{className:t,block:n,selectedValue:u,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==u&&(d(t),i(r))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:m},l,{className:(0,o.Z)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":u===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function k(e){const t=b(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},a.createElement(v,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function w(e){const t=(0,h.Z)();return a.createElement(k,(0,r.Z)({key:String(t)},e))}},6153:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>u,metadata:()=>s,toc:()=>d});var r=n(7396),a=(n(3249),n(1042)),o=n(2327),l=n(5089);const u={id:"comment",title:"Comment Node",sidebar_label:"Comment"},i=void 0,s={unversionedId:"node-reference/comment",id:"node-reference/comment",title:"Comment Node",description:"Comment Node Screenshot",source:"@site/docs/node-reference/comment.mdx",sourceDirName:"node-reference",slug:"/node-reference/comment",permalink:"/docs/node-reference/comment",draft:!1,editUrl:"https://github.com/ironclad/rivet/tree/main/packages/docs/docs/node-reference/comment.mdx",tags:[],version:"current",frontMatter:{id:"comment",title:"Comment Node",sidebar_label:"Comment"},sidebar:"nodeReference",previous:{title:"Code",permalink:"/docs/node-reference/code"},next:{title:"Context",permalink:"/docs/node-reference/context"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2},{value:"Editor Settings",id:"editor-settings",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"See Also",id:"see-also",level:2}],m={toc:d},p="wrapper";function f(e){let{components:t,...u}=e;return(0,a.kt)(p,(0,r.Z)({},m,u,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Comment Node Screenshot",src:n(7746).Z,width:"670",height:"342"})),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The Comment Node is a special type of node that doesn't perform any operations but serves as a way to add notes or comments to a graph. It can be used to provide additional context or explanation for a group of nodes, making the graph easier to understand. The Comment Node is always rendered behind other nodes and has a distinct appearance with customizable colors."),(0,a.kt)("p",null,"A comment node is always rendered behind all other nodes in the graph."),(0,a.kt)(o.Z,{defaultValue:"settings",values:[{label:"Inputs",value:"inputs"},{label:"Outputs",value:"outputs"},{label:"Editor Settings",value:"settings"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"inputs",mdxType:"TabItem"},(0,a.kt)("h2",{id:"inputs"},"Inputs"),(0,a.kt)("p",null,"The Comment Node does not have any inputs.")),(0,a.kt)(l.Z,{value:"outputs",mdxType:"TabItem"},(0,a.kt)("h2",{id:"outputs"},"Outputs"),(0,a.kt)("p",null,"The Comment Node does not produce any outputs.")),(0,a.kt)(l.Z,{value:"settings",mdxType:"TabItem"},(0,a.kt)("h2",{id:"editor-settings"},"Editor Settings"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Setting"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Color"),(0,a.kt)("td",{parentName:"tr",align:null},"The color of the text in the comment node."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"rgba(255,255,255,1)"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Background Color"),(0,a.kt)("td",{parentName:"tr",align:null},"The background color of the comment node."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"rgba(0,0,0,0.05)"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Text"),(0,a.kt)("td",{parentName:"tr",align:null},"The text content of the comment node. Supports Markdown syntax, allowing for rich text formatting including headings, lists, etc."),(0,a.kt)("td",{parentName:"tr",align:null},"(Empty)")))))),(0,a.kt)("h2",{id:"example-usage"},"Example Usage"),(0,a.kt)("p",null,"The Comment Node can be used to add notes or comments to a graph. For example, if you have a group of nodes performing a specific operation, you can add a Comment Node behind them to provide a brief explanation of what they do."),(0,a.kt)("p",null,"Additionally, you can use different colors for the text and background of different Comment Nodes to visually distinguish between different sections of your graph."),(0,a.kt)("h2",{id:"see-also"},"See Also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.markdownguide.org/"},"Markdown Guide"))))}f.isMDXComponent=!0},7746:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/comment-node-fa74a26d2d23154c7ccdf136902d45b9.png"}}]);
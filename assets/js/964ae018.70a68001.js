"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8491],{1042:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(3249);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=l(r),v=o,f=s["".concat(p,".").concat(v)]||s[v]||u[v]||i;return r?n.createElement(f,a(a({ref:t},d),{},{components:r})):n.createElement(f,a({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=v;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[s]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},8189:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(7396),o=(r(3249),r(1042));const i={},a="Rivet API Reference",c={unversionedId:"api-reference",id:"api-reference",title:"Rivet API Reference",description:"This section of the Rivet documentation goes over the TypeScript APIs for @ironclad/rivet-core and @ironclad/rivet-node.",source:"@site/docs/api-reference.md",sourceDirName:".",slug:"/api-reference",permalink:"/docs/api-reference",draft:!1,editUrl:"https://github.com/ironclad/rivet/tree/main/packages/docs/docs/api-reference.md",tags:[],version:"current",frontMatter:{},sidebar:"apiReference",next:{title:"Rivet Integration Getting Started",permalink:"/docs/api-reference/getting-started-integration"}},p={},l=[{value:"<code>@ironclad/rivet-core</code>",id:"ironcladrivet-core",level:2},{value:"<code>@ironclad/rivet-node</code>",id:"ironcladrivet-node",level:2},{value:"Requirements",id:"requirements",level:3}],d={toc:l},s="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rivet-api-reference"},"Rivet API Reference"),(0,o.kt)("p",null,"This section of the Rivet documentation goes over the TypeScript APIs for ",(0,o.kt)("inlineCode",{parentName:"p"},"@ironclad/rivet-core")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"@ironclad/rivet-node"),"."),(0,o.kt)("p",null,"To get started with integrating Rivet into your existing TypeScript or JavaScript application, see the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/getting-started-integration"},"Integration - Getting Started")," page."),(0,o.kt)("h2",{id:"ironcladrivet-core"},(0,o.kt)("inlineCode",{parentName:"h2"},"@ironclad/rivet-core")),(0,o.kt)("p",null,"Rivet core is a pure ESM package that contains the core Rivet APIs. It has no dependencies on browser or node.js APIs and can be used in any JavaScript environment that supports modern ESM, including embedded environments such as PythonMonkey."),(0,o.kt)("p",null,"The Rivet application uses Rivet core to run graphs directly in the application."),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/overview"},"Rivet core overview")," for more information."),(0,o.kt)("h2",{id:"ironcladrivet-node"},(0,o.kt)("inlineCode",{parentName:"h2"},"@ironclad/rivet-node")),(0,o.kt)("p",null,"Rivet node is a Node.js binding for Rivet core. It includes helper APIs to load rivet graphs from the filesystem and execute them."),(0,o.kt)("p",null,"You will most likely want to use Rivet node in your application. All types from Rivet core are re-exported from Rivet node, so you can use Rivet node as a drop-in replacement for Rivet core."),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/node/overview"},"Rivet node overview")," for more information."),(0,o.kt)("h3",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"Rivet node requires Node.js 16 or later."))}u.isMDXComponent=!0}}]);
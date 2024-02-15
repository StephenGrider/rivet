"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[133],{1042:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>f});var n=t(3249);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return t?n.createElement(f,l(l({ref:r},s),{},{components:t})):n.createElement(f,l({ref:r},s))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4074:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=t(7396),o=(t(3249),t(1042));const a={},l="loadProjectFromFile",i={unversionedId:"api-reference/node/loadProjectFromFile",id:"api-reference/node/loadProjectFromFile",title:"loadProjectFromFile",description:"Description",source:"@site/docs/api-reference/node/loadProjectFromFile.mdx",sourceDirName:"api-reference/node",slug:"/api-reference/node/loadProjectFromFile",permalink:"/docs/api-reference/node/loadProjectFromFile",draft:!1,editUrl:"https://github.com/ironclad/rivet/tree/main/packages/docs/docs/api-reference/node/loadProjectFromFile.mdx",tags:[],version:"current",frontMatter:{},sidebar:"apiReference",previous:{title:"createProcessor",permalink:"/docs/api-reference/node/createProcessor"},next:{title:"loadProjectFromString",permalink:"/docs/api-reference/node/loadProjectFromString"}},c={},p=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Return",id:"return",level:2},{value:"Examples",id:"examples",level:2},{value:"See Also",id:"see-also",level:2}],s={toc:p},d="wrapper";function u(e){let{components:r,...t}=e;return(0,o.kt)(d,(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"loadprojectfromfile"},"loadProjectFromFile"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"loadProjectFromFile")," function loads a project from a given file path."),(0,o.kt)("h2",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function loadProjectFromFile(path: string): Promise<Project>;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"path")," (string): The file path to the project. This must be a valid path to a project file.")),(0,o.kt)("h2",{id:"return"},"Return"),(0,o.kt)("p",null,"Returns a Promise that resolves to a ",(0,o.kt)("inlineCode",{parentName:"p"},"Project"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"Project")," is a representation of the loaded project."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const project = await loadProjectFromFile('./path/to/project.json');\n")),(0,o.kt)("h2",{id:"see-also"},"See Also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./loadProjectFromString"},"loadProjectFromString")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./runGraphInFile"},"runGraphInFile")),(0,o.kt)("li",{parentName:"ul"},"Project")))}u.isMDXComponent=!0}}]);
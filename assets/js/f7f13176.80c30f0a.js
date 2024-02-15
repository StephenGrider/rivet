"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4363],{1042:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>A});var i=n(3249);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},g=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),p=u(n),c=a,A=p["".concat(s,".").concat(c)]||p[c]||d[c]||l;return n?i.createElement(A,r(r({ref:t},g),{},{components:n})):i.createElement(A,r({ref:t},g))}));function A(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,r[1]=o;for(var u=2;u<l;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9191:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var i=n(7396),a=(n(3249),n(1042));const l={},r="Plugins",o={unversionedId:"user-guide/plugins",id:"user-guide/plugins",title:"Plugins",description:"Plugins allow authors to extend the functionality of Rivet, such as adding new nodes that you can use in your graphs.",source:"@site/docs/user-guide/plugins.md",sourceDirName:"user-guide",slug:"/user-guide/plugins",permalink:"/docs/user-guide/plugins",draft:!1,editUrl:"https://github.com/ironclad/rivet/tree/main/packages/docs/docs/user-guide/plugins.md",tags:[],version:"current",frontMatter:{},sidebar:"userGuide",previous:{title:"Data Studio",permalink:"/docs/user-guide/features/data-studio"},next:{title:"Creating a Plugin",permalink:"/docs/user-guide/plugins/creating-plugins"}},s={},u=[{value:"Enabling Plugins",id:"enabling-plugins",level:2},{value:"Removing Plugins",id:"removing-plugins",level:2},{value:"Installing Custom Plugins",id:"installing-custom-plugins",level:2},{value:"Installing Plugins from Source",id:"installing-plugins-from-source",level:2}],g={toc:u},p="wrapper";function d(e){let{components:t,...l}=e;return(0,a.kt)(p,(0,i.Z)({},g,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"plugins"},"Plugins"),(0,a.kt)("p",null,"Plugins allow authors to extend the functionality of Rivet, such as adding new nodes that you can use in your graphs."),(0,a.kt)("h2",{id:"enabling-plugins"},"Enabling Plugins"),(0,a.kt)("p",null,"Plugins are configured per-project, and the plugins enabled for a project will be remembered when opening a project."),(0,a.kt)("p",null,"To enable a plugin, go to the ",(0,a.kt)("strong",{parentName:"p"},"Plugins")," tab at the top of the screen. You will see all plugins that are available to install on the plugins screen."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Plugins",src:n(8740).Z,width:"1463",height:"1302"})),(0,a.kt)("p",null,"Click the Add buttton next to any plugin to install it to your current project."),(0,a.kt)("h2",{id:"removing-plugins"},"Removing Plugins"),(0,a.kt)("p",null,"To remove a plugin, navigate to the ",(0,a.kt)("strong",{parentName:"p"},"Project")," tab in the left sidebar, and find your plugin in the plugins list. Click the ",(0,a.kt)("inlineCode",{parentName:"p"},"...")," menu next to the plugin and select ",(0,a.kt)("strong",{parentName:"p"},"Remove"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Remove Plugin",src:n(6858).Z,width:"237",height:"147"})),(0,a.kt)("h2",{id:"installing-custom-plugins"},"Installing Custom Plugins"),(0,a.kt)("p",null,"If the plugin you want to install is not part of the plugins shown in Rivet, you can install any Rivet plugin using the ",(0,a.kt)("inlineCode",{parentName:"p"},"NPM Plugin")," option at the bottom of the plugins list."),(0,a.kt)("p",null,"The plugin you are installing must be published on NPM. Click the Add button, and in the modal, enter the name of the plugin (and optionally the version) you want to install."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Add NPM Plugin",src:n(337).Z,width:"815",height:"297"})),(0,a.kt)("h2",{id:"installing-plugins-from-source"},"Installing Plugins from Source"),(0,a.kt)("p",null,"You can install plugins from their source code by following the steps here:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In a terminal, navigate to plugin install directory for your operating system. The plugin install directory is shown below the plugins list in Rivet, with a copy button."),(0,a.kt)("li",{parentName:"ol"},"Make a directory for the plugin. It must be named ",(0,a.kt)("inlineCode",{parentName:"li"},"<package-name>-latest"),", where ",(0,a.kt)("inlineCode",{parentName:"li"},"<package-name>")," is the name of the plugin package."),(0,a.kt)("li",{parentName:"ol"},"Inside the directory you have created, run ",(0,a.kt)("inlineCode",{parentName:"li"},"git clone <git-url> package")," to clone the plugin source code into the ",(0,a.kt)("inlineCode",{parentName:"li"},"package")," directory."),(0,a.kt)("li",{parentName:"ol"},"In Rivet, choose Add NPM Plugin at the bottom of the plugins list. Enter ",(0,a.kt)("inlineCode",{parentName:"li"},"<package-name>")," for the package name. It must match exactly to the package name you used above, and the ",(0,a.kt)("inlineCode",{parentName:"li"},"name")," field of the package.json must also match this name."),(0,a.kt)("li",{parentName:"ol"},"If the plugin does not commit its bundled files, you may need to run ",(0,a.kt)("inlineCode",{parentName:"li"},"yarn")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"yarn build")," inside the ",(0,a.kt)("inlineCode",{parentName:"li"},"package")," directory to build the plugin. Ideally plugins will commit their bundled files so that you do not need to build them yourself."),(0,a.kt)("li",{parentName:"ol"},"Click Add to install the plugin. It will now be available in your project.")))}d.isMDXComponent=!0},337:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/add-npm-plugin-e5ca1eceeb5c34d19b0f7e4f77ed1e61.png"},8740:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/plugins-5c27e58ab75928951824538beb0093f8.png"},6858:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,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"}}]);
"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[4714],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),c=u(n),d=i,k=c["".concat(p,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(k,l(l({ref:e},s),{},{components:n})):r.createElement(k,l({ref:e},s))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,l=new Array(a);l[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:i,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3419:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},assets:function(){return s},toc:function(){return m},default:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),l=["components"],o={},p="File",u={unversionedId:"flink/configuration/sink-plugins/File",id:"flink/configuration/sink-plugins/File",title:"File",description:"Sink plugin : File [Flink]",source:"@site/docs/flink/configuration/sink-plugins/File.md",sourceDirName:"flink/configuration/sink-plugins",slug:"/flink/configuration/sink-plugins/File",permalink:"/docs/flink/configuration/sink-plugins/File",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/flink/configuration/sink-plugins/File.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Elasticsearch",permalink:"/docs/flink/configuration/sink-plugins/Elasticsearch"},next:{title:"InfluxDB",permalink:"/docs/flink/configuration/sink-plugins/InfluxDb"}},s={},m=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"format string",id:"format-string",level:3},{value:"path string",id:"path-string",level:3},{value:"write_mode string",id:"write_mode-string",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"parallelism Int",id:"parallelism-int",level:3},{value:"Examples",id:"examples",level:2}],c={toc:m};function d(t){var e=t.components,n=(0,i.Z)(t,l);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"file"},"File"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Sink plugin : File ","[Flink]")),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Write data to the file system"),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"name"),(0,a.kt)("th",{parentName:"tr",align:null},"type"),(0,a.kt)("th",{parentName:"tr",align:null},"required"),(0,a.kt)("th",{parentName:"tr",align:null},"default value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"format"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"path"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"write_mode"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"common-options"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"parallelism"),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"-")))),(0,a.kt)("h3",{id:"format-string"},"format ","[string]"),(0,a.kt)("p",null,"Currently, ",(0,a.kt)("inlineCode",{parentName:"p"},"csv")," , ",(0,a.kt)("inlineCode",{parentName:"p"},"json")," , and ",(0,a.kt)("inlineCode",{parentName:"p"},"text")," are supported. The streaming mode currently only supports ",(0,a.kt)("inlineCode",{parentName:"p"},"text")),(0,a.kt)("h3",{id:"path-string"},"path ","[string]"),(0,a.kt)("p",null,"The file path is required. The ",(0,a.kt)("inlineCode",{parentName:"p"},"hdfs file")," starts with ",(0,a.kt)("inlineCode",{parentName:"p"},"hdfs://")," , and the ",(0,a.kt)("inlineCode",{parentName:"p"},"local file")," starts with ",(0,a.kt)("inlineCode",{parentName:"p"},"file://")," ."),(0,a.kt)("h3",{id:"write_mode-string"},"write_mode ","[string]"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"NO_OVERWRITE"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"No overwrite, there is an error in the path"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"OVERWRITE"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Overwrite, delete and then write if the path exists")))),(0,a.kt)("h3",{id:"common-options-string"},"common options ","[string]"),(0,a.kt)("p",null,"Sink plugin common parameters, please refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/flink/configuration/sink-plugins/sink-plugin"},"Sink Plugin")," for details"),(0,a.kt)("h3",{id:"parallelism-int"},"parallelism ","[",(0,a.kt)("inlineCode",{parentName:"h3"},"Int"),"]"),(0,a.kt)("p",null,"The parallelism of an individual operator, for FileSink"),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'  FileSink {\n    format = "json"\n    path = "hdfs://localhost:9000/flink/output/"\n    write_mode = "OVERWRITE"\n  }\n')))}d.isMDXComponent=!0}}]);
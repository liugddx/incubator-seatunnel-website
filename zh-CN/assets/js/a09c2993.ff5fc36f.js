"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[4128],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=l,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8495:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return p},toc:function(){return c},default:function(){return m}});var a=n(7462),l=n(3366),o=(n(7294),n(3905)),r=["components"],i={title:"Introduction",sidebar_position:1},s="SeaTunnel",u={unversionedId:"introduction",id:"introduction",title:"Introduction",description:"Slack",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/zh-CN/docs/introduction",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",sidebar_position:1},sidebar:"tutorialSidebar"},p={},c=[{value:"Why do we need SeaTunnel",id:"why-do-we-need-seatunnel",level:2},{value:"SeaTunnel use scenarios",id:"seatunnel-use-scenarios",level:2},{value:"Features of SeaTunnel",id:"features-of-seatunnel",level:2},{value:"Workflow of SeaTunnel",id:"workflow-of-seatunnel",level:2},{value:"Plugins supported by SeaTunnel",id:"plugins-supported-by-seatunnel",level:2},{value:"Environmental dependency",id:"environmental-dependency",level:2},{value:"Downloads",id:"downloads",level:2},{value:"Quick start",id:"quick-start",level:2},{value:"Application practice cases",id:"application-practice-cases",level:2},{value:"Code of conduct",id:"code-of-conduct",level:2},{value:"Developer",id:"developer",level:2},{value:"Contact Us",id:"contact-us",level:2},{value:"Landscapes",id:"landscapes",level:2}],d={toc:c};function m(e){var t=e.components,i=(0,l.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"seatunnel"},"SeaTunnel"),(0,o.kt)("img",{src:"https://seatunnel.apache.org/image/logo.png",alt:"seatunnel logo",width:"200px",height:"200px",align:"right"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://join.slack.com/t/apacheseatunnel/shared_invite/zt-123jmewxe-RjB_DW3M3gV~xL91pZ0oVQ"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/slack-%23seatunnel-4f8eba?logo=slack",alt:"Slack"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/ASFSeaTunnel"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/twitter/follow/ASFSeaTunnel.svg?label=Follow&logo=twitter",alt:"Twitter Follow"}))),(0,o.kt)("hr",null),(0,o.kt)("p",null,"SeaTunnel was formerly named Waterdrop , and renamed SeaTunnel since October 12, 2021."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"SeaTunnel is a very easy-to-use ultra-high-performance distributed data integration platform that supports real-time\nsynchronization of massive data. It can synchronize tens of billions of data stably and efficiently every day, and has\nbeen used in the production of nearly 100 companies."),(0,o.kt)("h2",{id:"why-do-we-need-seatunnel"},"Why do we need SeaTunnel"),(0,o.kt)("p",null,"SeaTunnel will do its best to solve the problems that may be encountered in the synchronization of massive data:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Data loss and duplication"),(0,o.kt)("li",{parentName:"ul"},"Task accumulation and delay"),(0,o.kt)("li",{parentName:"ul"},"Low throughput"),(0,o.kt)("li",{parentName:"ul"},"Long cycle to be applied in the production environment"),(0,o.kt)("li",{parentName:"ul"},"Lack of application running status monitoring")),(0,o.kt)("h2",{id:"seatunnel-use-scenarios"},"SeaTunnel use scenarios"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Mass data synchronization"),(0,o.kt)("li",{parentName:"ul"},"Mass data integration"),(0,o.kt)("li",{parentName:"ul"},"ETL with massive data"),(0,o.kt)("li",{parentName:"ul"},"Mass data aggregation"),(0,o.kt)("li",{parentName:"ul"},"Multi-source data processing")),(0,o.kt)("h2",{id:"features-of-seatunnel"},"Features of SeaTunnel"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Easy to use, flexible configuration, low code development"),(0,o.kt)("li",{parentName:"ul"},"Real-time streaming"),(0,o.kt)("li",{parentName:"ul"},"Offline multi-source data analysis"),(0,o.kt)("li",{parentName:"ul"},"High-performance, massive data processing capabilities"),(0,o.kt)("li",{parentName:"ul"},"Modular and plug-in mechanism, easy to extend"),(0,o.kt)("li",{parentName:"ul"},"Support data processing and aggregation by SQL"),(0,o.kt)("li",{parentName:"ul"},"Support Spark structured streaming"),(0,o.kt)("li",{parentName:"ul"},"Support Spark 2.x")),(0,o.kt)("h2",{id:"workflow-of-seatunnel"},"Workflow of SeaTunnel"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"seatunnel-workflow.svg",src:n(8040).Z,width:"622",height:"718"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Source[Data Source Input] -> Transform[Data Processing] -> Sink[Result Output]\n")),(0,o.kt)("p",null,"The data processing pipeline is constituted by multiple filters to meet a variety of data processing needs. If you are\naccustomed to SQL, you can also directly construct a data processing pipeline by SQL, which is simple and efficient.\nCurrently, the filter list supported by SeaTunnel is still being expanded. Furthermore, you can develop your own data\nprocessing plug-in, because the whole system is easy to expand."),(0,o.kt)("h2",{id:"plugins-supported-by-seatunnel"},"Plugins supported by SeaTunnel"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Input plugin Fake, File, Hdfs, Kafka, Druid, InfluxDB, S3, Socket, self-developed Input plugin")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Filter plugin Add, Checksum, Convert, Date, Drop, Grok, Json, Kv, Lowercase, Remove, Rename, Repartition, Replace,\nSample, Split, Sql, Table, Truncate, Uppercase, Uuid, Self-developed Filter plugin")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Output plugin Elasticsearch, File, Hdfs, Jdbc, Kafka, Druid, InfluxDB, Mysql, S3, Stdout, self-developed Output plugin"))),(0,o.kt)("h2",{id:"environmental-dependency"},"Environmental dependency"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"java runtime environment, java >= 8")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you want to run SeaTunnel in a cluster environment, any of the following Spark cluster environments is usable:"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Spark on Yarn"),(0,o.kt)("li",{parentName:"ul"},"Spark Standalone")),(0,o.kt)("p",null,"If the data volume is small, or the goal is merely for functional verification, you can also start in local mode without\na cluster environment, because SeaTunnel supports standalone operation. Note: SeaTunnel 2.0 supports running on Spark\nand Flink."),(0,o.kt)("h2",{id:"downloads"},"Downloads"),(0,o.kt)("p",null,"Download address for run-directly software package :",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel/releases"},"https://github.com/apache/incubator-seatunnel/releases")),(0,o.kt)("h2",{id:"quick-start"},"Quick start"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Spark"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://seatunnel.apache.org/docs/spark/quick-start"},"https://seatunnel.apache.org/docs/spark/quick-start")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Flink"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://seatunnel.apache.org/docs/flink/quick-start"},"https://seatunnel.apache.org/docs/flink/quick-start")),(0,o.kt)("p",null,"Detailed documentation on SeaTunnel\n",(0,o.kt)("a",{parentName:"p",href:"https://seatunnel.apache.org/docs/introduction"},"https://seatunnel.apache.org/docs/introduction")),(0,o.kt)("h2",{id:"application-practice-cases"},"Application practice cases"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Weibo, Value-added Business Department Data Platform")),(0,o.kt)("p",null,"Weibo business uses an internal customized version of SeaTunnel and its sub-project Guardian for SeaTunnel On Yarn task\nmonitoring for hundreds of real-time streaming computing tasks."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sina, Big Data Operation Analysis Platform")),(0,o.kt)("p",null,"Sina Data Operation Analysis Platform uses SeaTunnel to perform real-time and offline analysis of data operation and\nmaintenance for Sina News, CDN and other services, and write it into Clickhouse."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sogou, Sogou Qiqian System")),(0,o.kt)("p",null,"Sogou Qiqian System takes SeaTunnel as an ETL tool to help establish a real-time data warehouse system."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Qutoutiao, Qutoutiao Data Center")),(0,o.kt)("p",null,"Qutoutiao Data Center uses SeaTunnel to support mysql to hive offline ETL tasks, real-time hive to clickhouse backfill\ntechnical support, and well covers most offline and real-time tasks needs."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Yixia Technology, Yizhibo Data Platform")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Yonghui Superstores Founders' Alliance-Yonghui Yunchuang Technology, Member E-commerce Data Analysis Platform"))),(0,o.kt)("p",null,"SeaTunnel provides real-time streaming and offline SQL computing of e-commerce user behavior data for Yonghui Life, a\nnew retail brand of Yonghui Yunchuang Technology."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Shuidichou, Data Platform")),(0,o.kt)("p",null,"Shuidichou adopts SeaTunnel to do real-time streaming and regular offline batch processing on Yarn, processing 3~4T data\nvolume average daily, and later writing the data to Clickhouse."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Tencent Cloud")),(0,o.kt)("p",null,"Collecting various logs from business services into Apache Kafka, some of the data in Apache Kafka is consumed and extracted through Seatunnel, and then store into Clickhouse."),(0,o.kt)("p",null,"For more use cases, please refer to: ",(0,o.kt)("a",{parentName:"p",href:"https://seatunnel.apache.org/blog"},"https://seatunnel.apache.org/blog")),(0,o.kt)("h2",{id:"code-of-conduct"},"Code of conduct"),(0,o.kt)("p",null,"This project adheres to the Contributor Covenant ",(0,o.kt)("a",{parentName:"p",href:"https://www.apache.org/foundation/policies/conduct"},"code of conduct"),".\nBy participating, you are expected to uphold this code. Please follow\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://www.apache.org/foundation/policies/conduct#reporting-guidelines"},"REPORTING GUIDELINES")," to report\nunacceptable behavior."),(0,o.kt)("h2",{id:"developer"},"Developer"),(0,o.kt)("p",null,"Thanks to all developers!"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel/graphs/contributors"},(0,o.kt)("img",{parentName:"a",src:"https://opencollective.com/seatunnel/contributors.svg?width=666",alt:null}))),(0,o.kt)("h2",{id:"contact-us"},"Contact Us"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Mail list: ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"mailto:dev@seatunnel.apache.org"},"dev@seatunnel.apache.org")),". Mail to ",(0,o.kt)("inlineCode",{parentName:"li"},"dev-subscribe@seatunnel.apache.org"),", follow the reply to subscribe\nthe mail list."),(0,o.kt)("li",{parentName:"ul"},"Slack: ",(0,o.kt)("a",{parentName:"li",href:"https://join.slack.com/t/apacheseatunnel/shared_invite/zt-123jmewxe-RjB_DW3M3gV~xL91pZ0oVQ"},"https://join.slack.com/t/apacheseatunnel/shared_invite/zt-123jmewxe-RjB_DW3M3gV~xL91pZ0oVQ")),(0,o.kt)("li",{parentName:"ul"},"Twitter: ",(0,o.kt)("a",{parentName:"li",href:"https://twitter.com/ASFSeaTunnel"},"https://twitter.com/ASFSeaTunnel")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://space.bilibili.com/1542095008"},"Bilibili")," (for Chinese users)")),(0,o.kt)("h2",{id:"landscapes"},"Landscapes"),(0,o.kt)("p",{align:"center"},(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("img",{src:"https://landscape.cncf.io/images/left-logo.svg",width:"150",alt:""}),"\xa0\xa0",(0,o.kt)("img",{src:"https://landscape.cncf.io/images/right-logo.svg",width:"200",alt:""}),(0,o.kt)("br",null),(0,o.kt)("br",null),"SeaTunnel enriches the ",(0,o.kt)("a",{href:"https://landscape.cncf.io/landscape=observability-and-analysis&license=apache-license-2-0"},"CNCF CLOUD NATIVE Landscape.")))}m.isMDXComponent=!0},8040:function(e,t,n){t.Z=n.p+"assets/images/seatunnel-workflow-3e339663d6a50d0f13b0d4cfb2997898.svg"}}]);
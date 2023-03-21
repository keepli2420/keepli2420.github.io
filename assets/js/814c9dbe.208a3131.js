"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[4529],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>d});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=n.createContext({}),c=function(e){var a=n.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=c(e.components);return n.createElement(u.Provider,{value:a},e.children)},i="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},b=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),i=c(t),b=r,d=i["".concat(u,".").concat(b)]||i[b]||m[b]||l;return t?n.createElement(d,o(o({ref:a},p),{},{components:t})):n.createElement(d,o({ref:a},p))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=b;var s={};for(var u in a)hasOwnProperty.call(a,u)&&(s[u]=a[u]);s.originalType=e,s[i]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<l;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}b.displayName="MDXCreateElement"},5162:(e,a,t)=>{t.d(a,{Z:()=>o});var n=t(7294),r=t(6010);const l="tabItem_Ymn6";function o(e){let{children:a,hidden:t,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:t},a)}},5488:(e,a,t)=>{t.d(a,{Z:()=>b});var n=t(7462),r=t(7294),l=t(6010),o=t(2389),s=t(7392),u=t(7094),c=t(2466);const p="tabList__CuJ",i="tabItem_LNqP";function m(e){const{lazy:a,block:t,defaultValue:o,values:m,groupId:b,className:d}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??k.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),T=(0,s.l)(v,((e,a)=>e.value===a.value));if(T.length>0)throw new Error(`Docusaurus error: Duplicate values "${T.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===o?o:o??k.find((e=>e.props.default))?.props.value??k[0].props.value;if(null!==g&&!v.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:f}=(0,u.U)(),[y,I]=(0,r.useState)(g),h=[],{blockElementScrollPositionUntilNextRender:N}=(0,c.o5)();if(null!=b){const e=w[b];null!=e&&e!==y&&v.some((a=>a.value===e))&&I(e)}const Z=e=>{const a=e.currentTarget,t=h.indexOf(a),n=v[t].value;n!==y&&(N(a),I(n),null!=b&&f(b,String(n)))},x=e=>{let a=null;switch(e.key){case"Enter":Z(e);break;case"ArrowRight":{const t=h.indexOf(e.currentTarget)+1;a=h[t]??h[0];break}case"ArrowLeft":{const t=h.indexOf(e.currentTarget)-1;a=h[t]??h[h.length-1];break}}a?.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},d)},v.map((e=>{let{value:a,label:t,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:y===a?0:-1,"aria-selected":y===a,key:a,ref:e=>h.push(e),onKeyDown:x,onClick:Z},o,{className:(0,l.Z)("tabs__item",i,o?.className,{"tabs__item--active":y===a})}),t??a)}))),a?(0,r.cloneElement)(k.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==y})))))}function b(e){const a=(0,o.Z)();return r.createElement(m,(0,n.Z)({key:String(a)},e))}},1007:(e,a,t)=>{t.d(a,{Z:()=>b});var n=t(7294),r=t(6010);const l="browserWindow_my1Q",o="browserWindowHeader_jXSR",s="buttons_uHc7",u="browserWindowAddressBar_Pd8y",c="dot_giz1",p="browserWindowMenuIcon_Vhuh",i="bar_rrRL",m="browserWindowBody_Idgs";function b(e){let{children:a,minHeight:t,url:b="http://localhost:3000"}=e;return n.createElement("div",{className:l,style:{minHeight:t}},n.createElement("div",{className:o},n.createElement("div",{className:s},n.createElement("span",{className:c,style:{background:"#f25f58"}}),n.createElement("span",{className:c,style:{background:"#fbbe3c"}}),n.createElement("span",{className:c,style:{background:"#58cb42"}})),n.createElement("div",{className:(0,r.Z)(u,"text--truncate")},b),n.createElement("div",{className:p},n.createElement("div",null,n.createElement("span",{className:i}),n.createElement("span",{className:i}),n.createElement("span",{className:i})))),n.createElement("div",{className:m},a))}},275:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>b,contentTitle:()=>i,default:()=>v,frontMatter:()=>p,metadata:()=>m,toc:()=>d});var n=t(7462),r=(t(7294),t(3905)),l=t(5488),o=t(5162),s=t(9048),u=t(1007),c=t(3442);const p={custom_edit_url:null,description:"Docusaurus\u63d0\u4f9b\u4e86 <Tabs> \u7ec4\u4ef6\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 MDX \u5728 Markdown \u4e2d\u4f7f\u7528\uff1a"},i="\u9009\u9879\u5361",m={unversionedId:"front/Docusaurus/markdown/MarkDownTab",id:"front/Docusaurus/markdown/MarkDownTab",title:"\u9009\u9879\u5361",description:"Docusaurus\u63d0\u4f9b\u4e86 <Tabs> \u7ec4\u4ef6\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 MDX \u5728 Markdown \u4e2d\u4f7f\u7528\uff1a",source:"@site/docs/front/Docusaurus/markdown/MarkDownTab.mdx",sourceDirName:"front/Docusaurus/markdown",slug:"/front/Docusaurus/markdown/MarkDownTab",permalink:"/docs/front/Docusaurus/markdown/MarkDownTab",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{custom_edit_url:null,description:"Docusaurus\u63d0\u4f9b\u4e86 <Tabs> \u7ec4\u4ef6\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 MDX \u5728 Markdown \u4e2d\u4f7f\u7528\uff1a"},sidebar:"frontIndex",previous:{title:"MDX \u548c React",permalink:"/docs/front/Docusaurus/markdown/MarkDownFeatures"},next:{title:"\u4ee3\u7801\u5757",permalink:"/docs/front/Docusaurus/markdown/MarkDownCodeBlock"}},b={},d=[{value:"\u663e\u793a\u9ed8\u8ba4\u9009\u9879\u5361",id:"\u663e\u793a\u9ed8\u8ba4\u9009\u9879\u5361",level:2},{value:"\u540c\u6b65\u9009\u9879",id:"\u540c\u6b65\u9009\u9879",level:2},{value:"\u81ea\u5b9a\u4e49\u9009\u9879\u5361\u5916\u89c2",id:"\u81ea\u5b9a\u4e49\u9009\u9879\u5361\u5916\u89c2",level:2}],k={toc:d};function v(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},k,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u9009\u9879\u5361"},"\u9009\u9879\u5361"),(0,r.kt)("p",null,"Docusaurus\u63d0\u4f9b\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"<Tabs>")," \u7ec4\u4ef6\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 MDX \u5728 Markdown \u4e2d\u4f7f\u7528\uff1a"),(0,r.kt)(u.Z,{mdxType:"BrowserWindow"},(0,r.kt)("div",{className:s.Z.wrappingBlock70},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import Tabs from \'@theme/Tabs\';\nimport TabItem from \'@theme/TabItem\';\n\n<Tabs>\n  <TabItem value="apple" label="\u82f9\u679c" default>\n    \u8fd9\u662f\u4e2a\u82f9\u679c \ud83c\udf4e\n  </TabItem>\n  <TabItem value="orange" label="\u6a59\u5b50">\n    \u8fd9\u662f\u4e2a\u6a59\u5b50 \ud83c\udf4a\n  </TabItem>\n  <TabItem value="banana" label="\u9999\u8549">\n    \u8fd9\u662f\u4e2a\u9999\u8549 \ud83c\udf4c\n  </TabItem>\n</Tabs>\n'))),(0,r.kt)("div",{className:s.Z.wrappingBlock30,style:{color:"red"}},(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"apple",label:"\u82f9\u679c",default:!0,mdxType:"TabItem"},"\u8fd9\u662f\u4e2a\u82f9\u679c \ud83c\udf4e"),(0,r.kt)(o.Z,{value:"orange",label:"\u6a59\u5b50",mdxType:"TabItem"},"\u8fd9\u662f\u4e2a\u6a59\u5b50 \ud83c\udf4a"),(0,r.kt)(o.Z,{value:"banana",label:"\u9999\u8549",mdxType:"TabItem"},"\u8fd9\u662f\u4e2a\u9999\u8549 \ud83c\udf4c")))),(0,r.kt)("h2",{id:"\u663e\u793a\u9ed8\u8ba4\u9009\u9879\u5361"},"\u663e\u793a\u9ed8\u8ba4\u9009\u9879\u5361"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Tabs \u7684 props \u4f18\u5148\u4e8e TabItem \u7684 props\uff1a"),"\u4f60\u53ef\u4ee5\u628a values \u548c defaultValue props \u63d0\u4f9b\u7ed9 Tabs\uff1a",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Tabs\n  defaultValue="orange"\n  values={[\n    {label: \'\u82f9\u679c 1\', value: \'apple\'},\n    {label: \'\u6a59\u5b50 1\', value: \'orange\'},\n    {label: \'\u9999\u8549 1\', value: \'banana\'},\n  ]}>\n  <TabItem value="apple" label="\u82f9\u679c 2">\n    \u8fd9\u662f\u4e2a\u82f9\u679c \ud83c\udf4e\n  </TabItem>\n  <TabItem value="orange" label="\u6a59\u5b50 2">\n    \u8fd9\u662f\u4e2a\u6a59\u5b50 \ud83c\udf4a\n  </TabItem>\n  <TabItem value="banana" label="\u9999\u8549 2" default>\n    \u8fd9\u662f\u4e2a\u9999\u8549 \ud83c\udf4c\n  </TabItem>\n</Tabs>\n')),(0,r.kt)(l.Z,{defaultValue:"orange",values:[{label:"\u82f9\u679c 1",value:"apple"},{label:"\u6a59\u5b50 1",value:"orange"},{label:"\u9999\u8549 1",value:"banana"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"apple",label:"\u82f9\u679c 2",mdxType:"TabItem"},"\u8fd9\u662f\u4e2a\u82f9\u679c \ud83c\udf4e"),(0,r.kt)(o.Z,{value:"orange",label:"\u6a59\u5b50 2",mdxType:"TabItem"},"\u8fd9\u662f\u4e2a\u6a59\u5b50 \ud83c\udf4a"),(0,r.kt)(o.Z,{value:"banana",label:"\u9999\u8549 2",default:!0,mdxType:"TabItem"},"\u8fd9\u662f\u4e2a\u9999\u8549 \ud83c\udf4c"))),(0,r.kt)("h2",{id:"\u540c\u6b65\u9009\u9879"},"\u540c\u6b65\u9009\u9879"),(0,r.kt)("p",null,"\u4f60\u53ef\u80fd\u60f3\u8981\u5728\u540c\u7c7b\u9009\u9879\u5361\u4e4b\u95f4\u8fdb\u884c\u540c\u6b65\u3002 \u6bd4\u5982\uff0c\u4f60\u53ef\u80fd\u4f1a\u7ed9 macOS \u548c Windows \u7684\u7528\u6237\u63d0\u4f9b\u4e0d\u540c\u7684\u8bf4\u660e\uff0c\n\u5e76\u4e14\u4f60\u60f3\u8981\u70b9\u51fb\u4e00\u6b21\u5c31\u53ef\u4ee5\u540c\u65f6\u5207\u6362\u6240\u6709\u64cd\u4f5c\u7cfb\u7edf\u76f8\u5173\u7684\u8bf4\u660e\u9009\u9879\u3002 \u8981\u505a\u5230\u8fd9\u4e00\u70b9\uff0c\u4f60\u53ef\u4ee5\u7ed9\u6240\u6709\u76f8\u5173\u6807\u7b7e\u63d0\u4f9b\u76f8\u540c\u7684 groupId prop\u3002\n\u8fd9\u4f1a\u628a\u7528\u6237\u7684\u9009\u62e9\u5b58\u50a8\u5728 localStorage \u4e2d\uff0c\u800c\u6240\u6709 groupId \u76f8\u540c\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"<Tab>")," \u5b9e\u4f8b\u90fd\u4f1a\u5728\u5176\u4e2d\u4e00\u4e2a\u7684\u503c\u53d1\u751f\u53d8\u5316\u65f6\u81ea\u52a8\u66f4\u65b0\u3002\n\u8981\u6ce8\u610f groupId \u7684\u547d\u540d\u662f\u5168\u5c40\u5171\u4eab\u7684\u3002"),(0,r.kt)("div",{className:s.Z.wrappingBlock70},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Tabs groupId="operating-systems">\n  <TabItem value="win" label="Windows">\u7528 Ctrl + C \u590d\u5236\u3002</TabItem>\n  <TabItem value="mac" label="macOS">\u7528 Command + C \u590d\u5236\u3002</TabItem>\n</Tabs>\n\n<Tabs groupId="operating-systems">\n  <TabItem value="win" label="Windows">\u7528 Ctrl + V \u7c98\u8d34\u3002</TabItem>\n  <TabItem value="mac" label="macOS">\u7528 Command + V \u7c98\u8d34\u3002</TabItem>\n</Tabs>\n'))),(0,r.kt)("div",{className:s.Z.wrappingBlock30},(0,r.kt)(l.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"win",label:"Windows",mdxType:"TabItem"},"\u7528 Ctrl + C \u590d\u5236\u3002"),(0,r.kt)(o.Z,{value:"mac",label:"macOS",mdxType:"TabItem"},"\u7528 Command + C \u590d\u5236\u3002")),(0,r.kt)(l.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"win",label:"Windows",mdxType:"TabItem"},"\u7528 Ctrl + V \u7c98\u8d34\u3002"),(0,r.kt)(o.Z,{value:"mac",label:"macOS",mdxType:"TabItem"},"\u7528 Command + V \u7c98\u8d34\u3002"))),(0,r.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u9009\u9879\u5361\u5916\u89c2"},"\u81ea\u5b9a\u4e49\u9009\u9879\u5361\u5916\u89c2"),(0,r.kt)("p",null,"\u4f60\u53ef\u80fd\u60f3\u8981\u81ea\u5b9a\u4e49\u67d0\u7ec4\u9009\u9879\u5361\u7684\u5916\u89c2\u3002 \u4f60\u53ef\u4ee5\u7ed9 className prop \u8d4b\u503c\uff0c\u6307\u5b9a\u7684 CSS class \u4f1a\u88ab\u6dfb\u52a0\u5230\u5bf9\u5e94\u7684 Tabs \u7ec4\u4ef6\uff1a"),(0,r.kt)("div",{className:s.Z.wrappingBlock80},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Tabs>\n  <TabItem value="apple" label="\u82f9\u679c" attributes={{className: tabstyles.red}}>\n    \u8fd9\u662f\u4e2a\u82f9\u679c \ud83c\udf4e\n  </TabItem>\n  <TabItem value="orange" label="\u6a59\u5b50" attributes={{className: tabstyles.orange}}>\n    \u8fd9\u662f\u4e2a\u6a59\u5b50 \ud83c\udf4a\n  </TabItem>\n  <TabItem value="banana" label="\u9999\u8549" attributes={{className: tabstyles.yellow}}>\n    \u8fd9\u662f\u4e2a\u9999\u8549 \ud83c\udf4c\n  </TabItem>\n</Tabs>\n'))),(0,r.kt)("div",{className:s.Z.wrappingBlock20},(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"apple",label:"\u82f9\u679c",attributes:{className:c.Z.red},mdxType:"TabItem"},"\u8fd9\u662f\u4e2a\u82f9\u679c \ud83c\udf4e"),(0,r.kt)(o.Z,{value:"orange",label:"\u6a59\u5b50",attributes:{className:c.Z.orange},mdxType:"TabItem"},"\u8fd9\u662f\u4e2a\u6a59\u5b50 \ud83c\udf4a"),(0,r.kt)(o.Z,{value:"banana",label:"\u9999\u8549",attributes:{className:c.Z.yellow},mdxType:"TabItem"},"\u8fd9\u662f\u4e2a\u9999\u8549 \ud83c\udf4c"))))}v.isMDXComponent=!0},3442:(e,a,t)=>{t.d(a,{Z:()=>n});const n={red:"red_8gYa",orange:"orange_nwrv",yellow:"yellow_DjUu",aqua:"aqua_TqLi"}},9048:(e,a,t)=>{t.d(a,{Z:()=>n});const n={wrappingBlock10:"wrappingBlock10_QKY_",wrappingBlock20:"wrappingBlock20_w3VO",wrappingBlock30:"wrappingBlock30_sehj",wrappingBlock40:"wrappingBlock40_lIqN",wrappingBlock45:"wrappingBlock45_ULDg",wrappingBlock:"wrappingBlock_x513",wrappingBlock55:"wrappingBlock55_RHw_",wrappingBlock60:"wrappingBlock60_rzn6",wrappingBlock70:"wrappingBlock70_tjMU",wrappingBlock80:"wrappingBlock80_trCQ",wrappingBlock90:"wrappingBlock90_zuiy",themedDocusaurus:"themedDocusaurus_LFRK"}}}]);
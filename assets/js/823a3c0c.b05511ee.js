"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[5216],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,k=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return t?r.createElement(k,o(o({ref:n},u),{},{components:t})):r.createElement(k,o({ref:n},u))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(7294),a=t(6010);const l="tabItem_Ymn6";function o(e){let{children:n,hidden:t,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>m});var r=t(7462),a=t(7294),l=t(6010),o=t(2389),i=t(7392),s=t(7094),c=t(2466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){const{lazy:n,block:t,defaultValue:o,values:d,groupId:m,className:k}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=d??g.map((e=>{let{props:{value:n,label:t,attributes:r}}=e;return{value:n,label:t,attributes:r}})),f=(0,i.l)(h,((e,n)=>e.value===n.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===o?o:o??g.find((e=>e.props.default))?.props.value??g[0].props.value;if(null!==v&&!h.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:w}=(0,s.U)(),[N,y]=(0,a.useState)(v),x=[],{blockElementScrollPositionUntilNextRender:j}=(0,c.o5)();if(null!=m){const e=b[m];null!=e&&e!==N&&h.some((n=>n.value===e))&&y(e)}const D=e=>{const n=e.currentTarget,t=x.indexOf(n),r=h[t].value;r!==N&&(j(n),y(r),null!=m&&w(m,String(r)))},B=e=>{let n=null;switch(e.key){case"Enter":D(e);break;case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]??x[x.length-1];break}}n?.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},k)},h.map((e=>{let{value:n,label:t,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,key:n,ref:e=>x.push(e),onKeyDown:B,onClick:D},o,{className:(0,l.Z)("tabs__item",p,o?.className,{"tabs__item--active":N===n})}),t??n)}))),n?(0,a.cloneElement)(g.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==N})))))}function m(e){const n=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(n)},e))}},1007:(e,n,t)=>{t.d(n,{Z:()=>m});var r=t(7294),a=t(6010);const l="browserWindow_my1Q",o="browserWindowHeader_jXSR",i="buttons_uHc7",s="browserWindowAddressBar_Pd8y",c="dot_giz1",u="browserWindowMenuIcon_Vhuh",p="bar_rrRL",d="browserWindowBody_Idgs";function m(e){let{children:n,minHeight:t,url:m="http://localhost:3000"}=e;return r.createElement("div",{className:l,style:{minHeight:t}},r.createElement("div",{className:o},r.createElement("div",{className:i},r.createElement("span",{className:c,style:{background:"#f25f58"}}),r.createElement("span",{className:c,style:{background:"#fbbe3c"}}),r.createElement("span",{className:c,style:{background:"#58cb42"}})),r.createElement("div",{className:(0,a.Z)(s,"text--truncate")},m),r.createElement("div",{className:u},r.createElement("div",null,r.createElement("span",{className:p}),r.createElement("span",{className:p}),r.createElement("span",{className:p})))),r.createElement("div",{className:d},n))}},8167:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>u,default:()=>g,frontMatter:()=>c,metadata:()=>p,toc:()=>m});var r=t(7462),a=(t(7294),t(3905)),l=t(1007),o=t(9048),i=t(5488),s=t(5162);const c={description:"\u6587\u6863\u4e2d\u7684\u4ee3\u7801\u5757\u8d85\u7ea7\u5389\u5bb3 \ud83d\udcaa\u3002",custom_edit_url:null},u="\u4ee3\u7801\u5757",p={unversionedId:"front/Docusaurus/markdown/MarkDownCodeBlock",id:"front/Docusaurus/markdown/MarkDownCodeBlock",title:"\u4ee3\u7801\u5757",description:"\u6587\u6863\u4e2d\u7684\u4ee3\u7801\u5757\u8d85\u7ea7\u5389\u5bb3 \ud83d\udcaa\u3002",source:"@site/docs/front/Docusaurus/markdown/MarkDownCodeBlock.mdx",sourceDirName:"front/Docusaurus/markdown",slug:"/front/Docusaurus/markdown/MarkDownCodeBlock",permalink:"/docs/front/Docusaurus/markdown/MarkDownCodeBlock",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{description:"\u6587\u6863\u4e2d\u7684\u4ee3\u7801\u5757\u8d85\u7ea7\u5389\u5bb3 \ud83d\udcaa\u3002",custom_edit_url:null},sidebar:"frontIndex",previous:{title:"\u9009\u9879\u5361",permalink:"/docs/front/Docusaurus/markdown/MarkDownTab"},next:{title:"\u544a\u793a",permalink:"/docs/front/Docusaurus/markdown/MarkDownPlacard"}},d={},m=[{value:"\u4ee3\u7801\u6807\u9898",id:"\u4ee3\u7801\u6807\u9898",level:2},{value:"\u8bed\u6cd5\u9ad8\u4eae",id:"\u8bed\u6cd5\u9ad8\u4eae",level:2},{value:"\u8bed\u6cd5\u9ad8\u4eae",id:"\u8bed\u6cd5\u9ad8\u4eae-1",level:2},{value:"\u9ad8\u4eae\u4e3b\u9898",id:"\u9ad8\u4eae\u4e3b\u9898",level:2},{value:"\u652f\u6301\u7684\u8bed\u8a00",id:"\u652f\u6301\u7684\u8bed\u8a00",level:2},{value:"\u884c\u9ad8\u4eae",id:"\u884c\u9ad8\u4eae",level:2},{value:"\u7528\u6ce8\u91ca\u5b9e\u73b0\u884c\u9ad8\u4eae",id:"\u7528\u6ce8\u91ca\u5b9e\u73b0\u884c\u9ad8\u4eae",level:3},{value:"\u7528\u5143\u6570\u636e\u5b57\u7b26\u4e32\u5b9e\u73b0\u9ad8\u4eae",id:"\u7528\u5143\u6570\u636e\u5b57\u7b26\u4e32\u5b9e\u73b0\u9ad8\u4eae",level:3},{value:"\u884c\u53f7",id:"\u884c\u53f7",level:2},{value:"\u4ea4\u4e92\u5f0f\u4ee3\u7801\u7f16\u8f91\u5668",id:"\u4ea4\u4e92\u5f0f\u4ee3\u7801\u7f16\u8f91\u5668",level:2}],k={toc:m};function g(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4ee3\u7801\u5757"},"\u4ee3\u7801\u5757"),(0,a.kt)("h2",{id:"\u4ee3\u7801\u6807\u9898"},"\u4ee3\u7801\u6807\u9898"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u8bed\u8a00\u540e\u6dfb\u52a0 title\uff08\u8bb0\u5f97\u5728\u8bed\u8a00\u548c title \u4e4b\u95f4\u52a0\u4e00\u4e2a\u7a7a\u683c\uff09\u6765\u8bbe\u7f6e\u6807\u9898\u3002"),(0,a.kt)(l.Z,{mdxType:"BrowserWindow"},(0,a.kt)("div",{className:o.Z.wrappingBlock55},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'```jsx title="/src/components/HelloCodeTitle.js"\nfunction HelloCodeTitle(props) {\n  return <h1>\u4f60\u597d\uff0c{props.name}</h1>;\n}\n```\n'))),(0,a.kt)("div",{className:o.Z.wrappingBlock45},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/src/components/HelloCodeTitle.js"',title:'"/src/components/HelloCodeTitle.js"'},"function HelloCodeTitle(props) {\n  return <h1>\u4f60\u597d\uff0c{props.name}</h1>;\n}\n")))),(0,a.kt)("h2",{id:"\u8bed\u6cd5\u9ad8\u4eae"},"\u8bed\u6cd5\u9ad8\u4eae"),(0,a.kt)("p",null,"\u4ee3\u7801\u5757\u662f\u4f7f\u7528 3 \u4e2a\u53cd\u5f15\u53f7\u5305\u88f9\u7684\u6587\u672c\u5757\u3002 \u4f60\u53ef\u4ee5\u53c2\u9605 MDX \u7684\u89c4\u8303\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'if (responseEntity.getStatusCode().is2xxSuccessful()) {\n    Object body = responseEntity.getBody();\n    log.info("\u8bf7\u6c42\u7684\u8fd4\u56de\u503c\u4e3a\uff1a{}", body);\n    try {\n        String resultValue = jsonMapper.writeValueAsString(body);\n        Result result = jsonMapper.readValue(resultValue, Result.class);\n        return result;\n    } catch (JsonProcessingException e) {\n        log.info("\u8bf7\u6c42\u65e0\u8fd4\u56de\u503c");\n        return Result.success(body);\n    }\n} else {\n    log.error("\u8bf7\u6c42\u5931\u8d25\uff0c\u8fd4\u56de\u7684\u7ed3\u679c\uff1a{}", responseEntity);\n    throw new BusinessException(ResultEnum.FAILURE.getCode(), "\u8bf7\u6c42\u5931\u8d25");\n}\n\n')),(0,a.kt)("h2",{id:"\u8bed\u6cd5\u9ad8\u4eae-1"},"\u8bed\u6cd5\u9ad8\u4eae"),(0,a.kt)("p",null,"\u4ee3\u7801\u5757\u662f\u4f7f\u7528 3(4) \u4e2a\u53cd\u5f15\u53f7\u5305\u88f9\u7684\u6587\u672c\u5757\u3002\u4f60\u53ef\u4ee5\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mdx-js/specification"},"MDX")," \u7684\u89c4\u8303\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"console.log('\u6bcf\u4e2a\u4ed3\u5e93\u90fd\u5e94\u8be5\u6709\u4e2a\u5409\u7965\u7269\u3002');\n")),(0,a.kt)("p",null,"\u5728\u4ee3\u7801\u5757\u4e2d\u4f7f\u7528\u76f8\u5e94\u8bed\u8a00\u7684\u6807\u7b7e\uff0cDocusaurus \u4f1a\u81ea\u52a8\u7528\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/FormidableLabs/prism-react-renderer"},"Prism React Renderer")," \u9009\u62e9\u76f8\u5e94\u7684\u8bed\u6cd5\u9ad8\u4eae\u3002"),(0,a.kt)("h2",{id:"\u9ad8\u4eae\u4e3b\u9898"},"\u9ad8\u4eae\u4e3b\u9898"),(0,a.kt)("p",null,"\u6211\u4eec\u9ed8\u8ba4\u4f7f\u7528\u7684\u8bed\u6cd5\u9ad8\u4eae\u4e3b\u9898\u662f\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/FormidableLabs/prism-react-renderer/blob/master/src/themes/palenight.js"},"Palenight")," \u3002\n\u4f60\u53ef\u4ee5\u901a\u8fc7 docusaurus.config.js \u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"themeConfig.prism")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"theme")," \u5b57\u6bb5\u6765\u66f4\u6539\u4e3b\u9898\u3002"),(0,a.kt)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u5982\u679c\u4f60\u559c\u6b22 dracula \u9ad8\u4eae\u4e3b\u9898\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"module.exports = {\n  themeConfig: {\n    prism: {\n      theme: require('prism-react-renderer/themes/dracula'),\n    },\n  },\n};\n")),(0,a.kt)("p",null,"\u56e0\u4e3a\u6bcf\u4e2a Prism \u4e3b\u9898\u90fd\u53ea\u662f\u4e00\u4e2a JS \u5bf9\u8c61\uff0c\u6240\u4ee5\u5982\u679c\u4f60\u5bf9\u9ed8\u8ba4\u503c\u4e0d\u6ee1\u610f\uff0c\u4e5f\u53ef\u4ee5\u5199\u4e00\u4e2a\u81ea\u5df1\u7684\u4e3b\u9898\u3002\nDocusaurus \u81ea\u5df1\u5c31\u589e\u5f3a\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"github")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"vsDark")," \u4e3b\u9898\u6765\u63d0\u4f9b\u66f4\u4e30\u5bcc\u7684\u9ad8\u4eae\uff0c\u4f60\u53ef\u4ee5\u770b\u770b\u6211\u4eec\u4eae\u8272\u548c\u6697\u8272\u4ee3\u7801\u4e3b\u9898\u7684\u5b9e\u73b0\u3002"),(0,a.kt)("h2",{id:"\u652f\u6301\u7684\u8bed\u8a00"},"\u652f\u6301\u7684\u8bed\u8a00"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cDocusaurus \u81ea\u5e26\u90e8\u5206\u5e38\u7528\u8bed\u8a00\u7684\u652f\u6301\u3002"),(0,a.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u4e00\u4e9b\u6d41\u884c\u8bed\u8a00\uff0c\u5305\u62ec Java\u3001C#\u3001PHP \u5728\u5185\uff0c\u9ed8\u8ba4\u672a\u542f\u7528\u3002\n\u8981\u6dfb\u52a0\u5176\u4ed6 ",(0,a.kt)("a",{parentName:"p",href:"https://prismjs.com/#supported-languages"},"Prism \u6240\u652f\u6301\u7684\u8bed\u8a00"),"\u7684\u4ee3\u7801\u9ad8\u4eae\uff0c\u8bf7\u5b9a\u4e49\u5728 additionalLanguages \u5217\u8868\u4e2d\u3002"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"prism: {\n  theme: lightCodeTheme,\n  darkTheme: darkCodeTheme,\n  additionalLanguages: ['java','yaml'],\n}\n")),(0,a.kt)("p",{parentName:"admonition"},"\u6dfb\u52a0 additionalLanguages \u540e\uff0c\u91cd\u542f Docusaurus\u3002")),(0,a.kt)("h2",{id:"\u884c\u9ad8\u4eae"},"\u884c\u9ad8\u4eae"),(0,a.kt)("h3",{id:"\u7528\u6ce8\u91ca\u5b9e\u73b0\u884c\u9ad8\u4eae"},"\u7528\u6ce8\u91ca\u5b9e\u73b0\u884c\u9ad8\u4eae"),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528\u5e26\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"highlight-next-line"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"highlight-start")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"highlight-end")," \u7684\u6ce8\u91ca\u6765\u9009\u62e9\u8981\u7a81\u51fa\u663e\u793a\u7684\u884c\u3002"),(0,a.kt)(l.Z,{mdxType:"BrowserWindow"},(0,a.kt)("div",{className:o.Z.wrappingBlock},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"```js\nfunction HighlightSomeText(highlight) {\n  if (highlight) {\n    // highlight-next-line\n    return '\u8fd9\u884c\u88ab\u9ad8\u4eae\u4e86\uff01';\n  }\n  return '\u8fd9\u91cc\u4e0d\u4f1a';\n}\n\nfunction HighlightMoreText(highlight) {\n  // highlight-start\n  if (highlight) {\n    return '\u8fd9\u5757\u88ab\u9ad8\u4eae\u4e86\uff01';\n  }\n  // highlight-end\n  return '\u8fd9\u91cc\u4e0d\u4f1a';\n}\n```\n"))),(0,a.kt)("div",{className:o.Z.wrappingBlock},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"\nfunction HighlightSomeText(highlight) {\n  if (highlight) {\n    // highlight-next-line\n    return '\u8fd9\u884c\u88ab\u9ad8\u4eae\u4e86\uff01';\n  }\n  return '\u8fd9\u91cc\u4e0d\u4f1a';\n}\n\nfunction HighlightMoreText(highlight) {\n  // highlight-start\n  if (highlight) {\n    return '\u8fd9\u5757\u88ab\u9ad8\u4eae\u4e86\uff01';\n  }\n  // highlight-end\n  return '\u8fd9\u91cc\u4e0d\u4f1a';\n}\n\n")))),(0,a.kt)("h3",{id:"\u7528\u5143\u6570\u636e\u5b57\u7b26\u4e32\u5b9e\u73b0\u9ad8\u4eae"},"\u7528\u5143\u6570\u636e\u5b57\u7b26\u4e32\u5b9e\u73b0\u9ad8\u4eae"),(0,a.kt)(l.Z,{mdxType:"BrowserWindow"},(0,a.kt)("div",{className:o.Z.wrappingBlock},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"```jsx {1,4-6,11}\nimport React from 'react';\n\nfunction MyComponent(props) {\n  if (props.isBar) {\n    return <div>Bar</div>;\n  }\n\n  return <div>Foo</div>;\n}\n\nexport default MyComponent;\n```\n"))),(0,a.kt)("div",{className:o.Z.wrappingBlock},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{2,5-7,12}","{2,5-7,12}":!0},"\nimport React from 'react';\n\nfunction MyComponent(props) {\n  if (props.isBar) {\n    return <div>Bar</div>;\n  }\n\n  return <div>Foo</div>;\n}\n\nexport default MyComponent;\n")))),(0,a.kt)("h2",{id:"\u884c\u53f7"},"\u884c\u53f7"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u5728\u5143\u5b57\u7b26\u4e32\u4e2d\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"showLineNumbers")," \u6765\u4e3a\u4f60\u7684\u4ee3\u7801\u5757\u542f\u7528\u884c\u53f7\uff08\u522b\u5fd8\u4e86\u5728\u8fd9\u4e2a\u952e\u524d\u9762\u52a0\u4e00\u4e2a\u7a7a\u683c\uff09\u3002"),(0,a.kt)(l.Z,{mdxType:"BrowserWindow"},(0,a.kt)("div",{className:o.Z.wrappingBlock55},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"```jsx showLineNumbers\nfunction HelloCodeTitle(props) {\n  return <h1>\u4f60\u597d\uff0c{props.name}</h1>;\n}\n```\n"))),(0,a.kt)("div",{className:o.Z.wrappingBlock45},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"showLineNumbers",showLineNumbers:!0},"function HelloCodeTitle(props) {\n  return <h1>\u4f60\u597d\uff0c{props.name}</h1>;\n}\n")))),(0,a.kt)("h2",{id:"\u4ea4\u4e92\u5f0f\u4ee3\u7801\u7f16\u8f91\u5668"},"\u4ea4\u4e92\u5f0f\u4ee3\u7801\u7f16\u8f91\u5668"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"@docusaurus/theme-live-codeblock")," \u63d2\u4ef6\u521b\u5efa\u53ef\u4ea4\u4e92\u7684\u4ee3\u7801\u7f16\u8f91\u5668\uff0c \u9996\u5148\uff0c\u5728\u7ad9\u70b9\u4e2d\u6dfb\u52a0\u8fd9\u4e2a\u63d2\u4ef6\u3002"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install --save @docusaurus/theme-live-codeblock \n"))),(0,a.kt)(s.Z,{value:"yarn",label:"yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yarn add @docusaurus/theme-live-codeblock  \n")))),(0,a.kt)("p",null,"\u4f60\u8fd8\u9700\u8981\u628a\u63d2\u4ef6\u6dfb\u52a0\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," \u4e2d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"module.exports = {\n  // ...\n  themes: ['@docusaurus/theme-live-codeblock'],\n  // ...\n};\n")),(0,a.kt)("p",null,"\u8981\u4f7f\u7528\u6b64\u63d2\u4ef6\uff0c\u53ea\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u4ee3\u7801\u5757\uff0c\u540c\u65f6\u5728\u8bed\u8a00\u5143\u6807\u7b7e\u4e2d\u52a0\u4e0a ",(0,a.kt)("inlineCode",{parentName:"p"},"live"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"```jsx live\nfunction Clock(props) {\n  const [date, setDate] = useState(new Date());\n  useEffect(() => {\n    const timerID = setInterval(() => tick(), 1000);\n\n    return function cleanup() {\n      clearInterval(timerID);\n    };\n  });\n\n  function tick() {\n    setDate(new Date());\n  }\n\n  return (\n    <div>\n      <h2>\u73b0\u5728\u662f {date.toLocaleTimeString()}\u3002</h2>\n    </div>\n  );\n}\n```\n")),(0,a.kt)(l.Z,{mdxType:"BrowserWindow"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Clock(props) {\n  const [date, setDate] = useState(new Date());\n  useEffect(() => {\n    const timerID = setInterval(() => tick(), 1000);\n\n    return function cleanup() {\n      clearInterval(timerID);\n    };\n  });\n\n  function tick() {\n    setDate(new Date());\n  }\n\n  return (\n    <div>\n      <h2>\u73b0\u5728\u662f {date.toLocaleTimeString()}\u3002</h2>\n    </div>\n  );\n}\n"))))}g.isMDXComponent=!0},9048:(e,n,t)=>{t.d(n,{Z:()=>r});const r={wrappingBlock10:"wrappingBlock10_QKY_",wrappingBlock20:"wrappingBlock20_w3VO",wrappingBlock30:"wrappingBlock30_sehj",wrappingBlock40:"wrappingBlock40_lIqN",wrappingBlock45:"wrappingBlock45_ULDg",wrappingBlock:"wrappingBlock_x513",wrappingBlock55:"wrappingBlock55_RHw_",wrappingBlock60:"wrappingBlock60_rzn6",wrappingBlock70:"wrappingBlock70_tjMU",wrappingBlock80:"wrappingBlock80_trCQ",wrappingBlock90:"wrappingBlock90_zuiy",themedDocusaurus:"themedDocusaurus_LFRK"}}}]);
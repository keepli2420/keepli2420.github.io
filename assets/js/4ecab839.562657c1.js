"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[4775],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>d});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),l=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):u(u({},e),t)),a},p=function(t){var e=l(t.components);return n.createElement(i.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),m=l(a),k=r,d=m["".concat(i,".").concat(k)]||m[k]||c[k]||o;return a?n.createElement(d,u(u({ref:e},p),{},{components:a})):n.createElement(d,u({ref:e},p))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,u=new Array(o);u[0]=k;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s[m]="string"==typeof t?t:r,u[1]=s;for(var l=2;l<o;l++)u[l]=a[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},5162:(t,e,a)=>{a.d(e,{Z:()=>u});var n=a(7294),r=a(6010);const o="tabItem_Ymn6";function u(t){let{children:e,hidden:a,className:u}=t;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,u),hidden:a},e)}},5488:(t,e,a)=>{a.d(e,{Z:()=>k});var n=a(7462),r=a(7294),o=a(6010),u=a(2389),s=a(7392),i=a(7094),l=a(2466);const p="tabList__CuJ",m="tabItem_LNqP";function c(t){const{lazy:e,block:a,defaultValue:u,values:c,groupId:k,className:d}=t,N=r.Children.map(t.children,(t=>{if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=c??N.map((t=>{let{props:{value:e,label:a,attributes:n}}=t;return{value:e,label:a,attributes:n}})),f=(0,s.l)(h,((t,e)=>t.value===e.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===u?u:u??N.find((t=>t.props.default))?.props.value??N[0].props.value;if(null!==b&&!h.some((t=>t.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${h.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:y}=(0,i.U)(),[v,D]=(0,r.useState)(b),w=[],{blockElementScrollPositionUntilNextRender:j}=(0,l.o5)();if(null!=k){const t=g[k];null!=t&&t!==v&&h.some((e=>e.value===t))&&D(t)}const x=t=>{const e=t.currentTarget,a=w.indexOf(e),n=h[a].value;n!==v&&(j(e),D(n),null!=k&&y(k,String(n)))},T=t=>{let e=null;switch(t.key){case"Enter":x(t);break;case"ArrowRight":{const a=w.indexOf(t.currentTarget)+1;e=w[a]??w[0];break}case"ArrowLeft":{const a=w.indexOf(t.currentTarget)-1;e=w[a]??w[w.length-1];break}}e?.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},d)},h.map((t=>{let{value:e,label:a,attributes:u}=t;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:v===e?0:-1,"aria-selected":v===e,key:e,ref:t=>w.push(t),onKeyDown:T,onClick:x},u,{className:(0,o.Z)("tabs__item",m,u?.className,{"tabs__item--active":v===e})}),a??e)}))),e?(0,r.cloneElement)(N.filter((t=>t.props.value===v))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},N.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==v})))))}function k(t){const e=(0,u.Z)();return r.createElement(c,(0,n.Z)({key:String(e)},t))}},1464:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var n=a(7462),r=(a(7294),a(3905)),o=a(5488),u=a(5162);const s={description:"Docusaurus \u81ea\u8bbe\u8ba1\u4e4b\u521d\u7684\u76ee\u6807\u5c31\u662f\u6613\u4e8e\u5b89\u88c5\u4e14\u8fd0\u884c\u5feb\u901f\u3002",custom_edit_url:null,hide_table_of_contents:!0},i="\u4ecb\u7ecd",l={unversionedId:"front/Docusaurus/introduction",id:"front/Docusaurus/introduction",title:"\u4ecb\u7ecd",description:"Docusaurus \u81ea\u8bbe\u8ba1\u4e4b\u521d\u7684\u76ee\u6807\u5c31\u662f\u6613\u4e8e\u5b89\u88c5\u4e14\u8fd0\u884c\u5feb\u901f\u3002",source:"@site/docs/front/Docusaurus/introduction.md",sourceDirName:"front/Docusaurus",slug:"/front/Docusaurus/introduction",permalink:"/docs/front/Docusaurus/introduction",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{description:"Docusaurus \u81ea\u8bbe\u8ba1\u4e4b\u521d\u7684\u76ee\u6807\u5c31\u662f\u6613\u4e8e\u5b89\u88c5\u4e14\u8fd0\u884c\u5feb\u901f\u3002",custom_edit_url:null,hide_table_of_contents:!0},sidebar:"frontIndex",previous:{title:"Docusaurus",permalink:"/docs/front/Docusaurus"},next:{title:"MarkDown\u7279\u6027",permalink:"/docs/front/Docusaurus/markdown"}},p={},m=[{value:"\u5feb\u901f\u901a\u9053 \u23f1\ufe0f",id:"fast-track",level:2}],c={toc:m};function k(t){let{components:e,...s}=t;return(0,r.kt)("wrapper",(0,n.Z)({},c,s,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,r.kt)("p",null,"\u26a1\ufe0f Docusaurus \u4f1a\u5e2e\u52a9\u4f60\u5728",(0,r.kt)("strong",{parentName:"p"},"\u6781\u77ed\u65f6\u95f4\u5185\u642d\u5efa\u6f02\u4eae\u7684\u6587\u6863\u7f51\u7ad9"),"\u3002"),(0,r.kt)("p",null,"\ud83d\udcb8 \u81ea\u5df1\u9020\u8f6e\u5b50\u662f\u4e00\u4ef6\u82e6\u5dee\u4e8b\u3002 \u73b0\u5728\uff0c\u4f60\u53ef\u4ee5",(0,r.kt)("strong",{parentName:"p"},"\u4e13\u6ce8\u4e8e\u5185\u5bb9\u521b\u4f5c"),"\uff0c\u53ea\u9700\u7f16\u5199 Markdown \u6587\u4ef6\u5373\u53ef\u3002"),(0,r.kt)("p",null,"\ud83d\udca5 \u60f3\u6df1\u5165\u4e86\u89e3\u5417\uff1f \u6765\u8bd5\u8bd5\u5305\u62ec\u6587\u6863\u5206\u7248\u3001\u672c\u5730\u5316\u3001\u81ea\u5b9a\u4e49\u641c\u7d22\u3001\u4e2a\u6027\u5316\u4e3b\u9898\u5728\u5185\u7684",(0,r.kt)("strong",{parentName:"p"},"\u8fdb\u9636\u529f\u80fd\u7279\u6027"),"\u5427\uff01"),(0,r.kt)("p",null,"\ud83d\udc85 \u770b\u770b",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/#"},"\u6211\u4eec\u6700\u7231\u7684 Docusaurus \u7f51\u7ad9")),"\u6765\u83b7\u53d6\u7075\u611f\uff0c\u5e76\u8bfb\u8bfb\u5176\u4ed6\u4eba\u7684",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://twitter.com/sebastienlorber/timelines/1392048416872706049"},"\u4f7f\u7528\u611f\u8a00")),"\u5427\uff01"),(0,r.kt)("p",null,"\ud83e\uddd0 Docusaurus \u662f\u4e00\u6b3e",(0,r.kt)("strong",{parentName:"p"},"\u9759\u6001\u7ad9\u70b9\u751f\u6210\u5668"),"\u3002 \u53ef\u4ee5\u642d\u5efa\u5e26\u6709\u5feb\u901f\u5ba2\u6237\u7aef\u5bfc\u822a\u7684",(0,r.kt)("strong",{parentName:"p"},"\u5355\u9875\u5e94\u7528"),"\uff0c\u5145\u5206\u5229\u7528\u4e86 ",(0,r.kt)("strong",{parentName:"p"},"React"),"\uff0c\u8ba9\u4f60\u7684\u7f51\u7ad9\u5177\u6709\u4ea4\u4e92\u80fd\u529b\u3002 \u5b83\u63d0\u4f9b\u4e86\u5f00\u7bb1\u5373\u7528\u7684",(0,r.kt)("strong",{parentName:"p"},"\u6587\u6863\u529f\u80fd"),"\uff0c\u4e0d\u8fc7\u4e5f\u53ef\u7528\u4e8e\u642d\u5efa",(0,r.kt)("strong",{parentName:"p"},"\u5404\u79cd\u7f51\u7ad9"),"\uff08\u4e2a\u4eba\u7f51\u7ad9\u3001\u4ea7\u54c1\u3001\u535a\u5ba2\u3001\u8425\u9500\u4e3b\u9875\uff0c\u7b49\u7b49\uff09\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(3365).Z,width:"760",height:"160"})),(0,r.kt)("h2",{id:"fast-track"},"\u5feb\u901f\u901a\u9053 \u23f1\ufe0f"),(0,r.kt)("p",null,"\u8fb9\u73a9\u8fb9\u5b66 Docusaurus\uff0c\u4ec5\u9700 ",(0,r.kt)("strong",{parentName:"p"},"5 \u5206\u949f"),"\uff01"),(0,r.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 Docusaurus \u7f51\u7ad9\uff0c\u5e76\u8ddf\u968f\u5185\u542b\u7684",(0,r.kt)("strong",{parentName:"p"},"\u6781\u4e3a\u7b80\u77ed"),"\u7684\u6559\u7a0b\u3002"),(0,r.kt)("p",null,"\u5b89\u88c5 ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/zh-cn/download/"},"Node.js"),"\uff0c\nNode.js v16.14 \u6216\u4ee5\u4e0a\u7248\u672c\uff08\u4f60\u53ef\u4ee5\u8fd0\u884c node -v \u547d\u4ee4\u67e5\u770b\u7248\u672c\u53f7\uff09\u3002 \u4f60\u53ef\u4ee5\u7528 nvm \u6765\u7ba1\u7406\u540c\u4e00\u673a\u5668\u4e0a\u7684\u591a\u4e2a Node \u7248\u672c\u3002\n\u5b89\u88c5 Node.js \u65f6\uff0c\u5efa\u8bae\u52fe\u9009\u6240\u6709\u548c\u4f9d\u8d56\u76f8\u5173\u7684\u9009\u9879\u3002"),(0,r.kt)("p",null,"\u7136\u540e\u521b\u5efa\u4e00\u4e2a\u65b0 Docusaurus \u7f51\u7ad9\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-docusaurus@latest my-website classic\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"\u5176\u4ed6\u5b89\u88c5\u6307\u4ee4"),(0,r.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u7528\u4f60\u559c\u6b22\u7684\u5305\u7ba1\u7406\u5668\u6765\u521d\u59cb\u5316\u65b0\u9879\u76ee\uff1a"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(u.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm init docusaurus\n"))),(0,r.kt)(u.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn create docusaurus\n"))),(0,r.kt)(u.Z,{value:"pnpm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm create docusaurus\n"))))),(0,r.kt)("p",null,"\u8fd0\u884c\u7f51\u7ad9\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd my-website\nnpx docusaurus start\n")),(0,r.kt)("p",null,"\u6253\u5f00 ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000")," \u5e76\u9075\u5faa\u6559\u7a0b\u3002"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u7528 ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://docusaurus.new"},"docusaurus.new"))," \u5728\u6d4f\u89c8\u5668\u4e2d\u5373\u523b\u4f53\u9a8c Docusaurus\uff01"),(0,r.kt)("p",{parentName:"admonition"},"\u6216\u8005\u5728\u7ebf\u9605\u8bfb",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://tutorial.docusaurus.io"},"5\u5206\u949f\u6559\u7a0b")),"\u3002"),(0,r.kt)("h2",{parentName:"admonition",id:"features"},"\u7279\u6027"),(0,r.kt)("p",{parentName:"admonition"},"Docusaurus \u4ece\u8bbe\u8ba1\u4e4b\u521d\u5c31\u6781\u5ea6\u91cd\u89c6\u5f00\u53d1\u8005\u53ca\u8d21\u732e\u8005\u7684\u4f53\u9a8c\u3002"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u269b\ufe0f ",(0,r.kt)("strong",{parentName:"li"},"\u7528 \ud83d\udc9a \u548c React \u6253\u9020"),"\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 React \u5b9e\u73b0\u6269\u5c55\u4e0e\u81ea\u5b9a\u4e49"),(0,r.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u4f60\u81ea\u5df1\u7684 React \u7ec4\u4ef6\uff0c\u4ece\u800c\u5b8c\u5168\u638c\u63a7\u7f51\u7ad9\u7684\u6d4f\u89c8\u4f53\u9a8c"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u53ef\u63d2\u62d4"),"\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u57fa\u7840\u6a21\u677f\u642d\u5efa\u7f51\u7ad9\uff0c\u968f\u540e\u4f7f\u7528\u8fdb\u9636\u529f\u80fd\u53ca\u63d2\u4ef6"),(0,r.kt)("li",{parentName:"ul"},"\u5f00\u653e\u4f60\u7684\u63d2\u4ef6\u6e90\u7801\uff0c\u4e0e\u793e\u533a\u5171\u4eab"))),(0,r.kt)("li",{parentName:"ul"},"\u2702\ufe0f ",(0,r.kt)("strong",{parentName:"li"},"\u5f00\u53d1\u8005\u4f53\u9a8c"),"\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7acb\u5373\u5f00\u59cb\u64b0\u5199\u4f60\u7684\u8f6f\u4ef6\u6587\u6863"),(0,r.kt)("li",{parentName:"ul"},"\u7edf\u4e00\u914d\u7f6e\u6587\u4ef6\uff0c\u8d21\u732e\u8005\u53ef\u4ee5\u8f7b\u677e\u7ef4\u62a4"),(0,r.kt)("li",{parentName:"ul"},"\u70ed\u91cd\u8f7d\uff0c\u98de\u901f\u589e\u91cf\u6784\u5efa"),(0,r.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u8def\u7531\u7684\u4ee3\u7801\u53ca\u6570\u636e\u62c6\u5206"),(0,r.kt)("li",{parentName:"ul"},"\u8f7b\u677e\u53d1\u5e03\u5230 GitHub Pages\u3001Netlify\u3001Vercel \u548c\u5176\u4ed6\u90e8\u7f72\u670d\u52a1")))),(0,r.kt)("p",{parentName:"admonition"},"\u6211\u4eec\u7684\u5171\u540c\u76ee\u6807\u2014\u2014\u5feb\u901f\u8ba9\u7528\u6237\u627e\u5230\u9700\u8981\u7684\u5185\u5bb9\uff0c\u5e76\u66f4\u597d\u5730\u4e86\u89e3\u4f60\u7684\u4ea7\u54c1\u3002 \u6211\u4eec\u548c\u4f60\u5206\u4eab\u6211\u4eec\u7684\u6700\u4f73\u5b9e\u8df5\uff0c\u5e2e\u52a9\u4f60\u6b63\u786e\u800c\u4f18\u96c5\u5730\u6784\u5efa\u81ea\u5df1\u7684\u6587\u6863\u7f51\u7ad9\u3002"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\ud83c\udfaf ",(0,r.kt)("strong",{parentName:"li"},"SEO \u53cb\u597d"),"\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e3a\u6bcf\u6761\u8def\u5f84\u9759\u6001\u751f\u6210 HTML \u6587\u4ef6\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4e3a\u6bcf\u4e2a\u9875\u9762\u505a\u5355\u72ec\u641c\u7d22\u5f15\u64ce\u4f18\u5316\uff0c\u5e2e\u52a9\u7528\u6237\u5feb\u901f\u5230\u8fbe\u5b98\u65b9\u6587\u6863\uff0c\u89e3\u51b3\u5f53\u524d\u95ee\u9898\u3002"))),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udcdd ",(0,r.kt)("strong",{parentName:"li"},"\u7531 MDX \u9a71\u52a8"),"\uff1a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7528 JSX \u548c React \u64b0\u5199\u4ea4\u4e92\u7ec4\u4ef6\uff0c\u5e76\u5c06\u5176\u5d4c\u5165 Markdown\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5728\u5b9e\u65f6\u7f16\u8f91\u5668\u4e2d\u5206\u4eab\u4f60\u7684\u4ee3\u7801\uff0c\u8ba9\u4f60\u7684\u7528\u6237\u8fc5\u901f\u7231\u4e0a\u4f60\u7684\u4ea7\u54c1\u3002"))),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udd0d ",(0,r.kt)("strong",{parentName:"li"},"\u641c\u7d22"),"\uff1a\u5168\u7ad9\u5747\u53ef\u88ab\u641c\u7d22\u3002"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udcbe ",(0,r.kt)("strong",{parentName:"li"},"\u6587\u6863\u5206\u7248"),"\uff1a\u5e2e\u52a9\u4f60\u7684\u6587\u6863\u4e0e\u9879\u76ee\u53d1\u5e03\u4fdd\u6301\u540c\u6b65\u3002"),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf0d ",(0,r.kt)("strong",{parentName:"li"},"\u56fd\u9645\u5316 (i18n)"),"\uff1a\u5c06\u4f60\u7684\u7f51\u7ad9\u7ffb\u8bd1\u6210\u591a\u56fd\u8bed\u8a00\u3002")),(0,r.kt)("p",{parentName:"admonition"},"Docusaurus 2 \u751f\u800c\u4e50\u610f\u4e3a\u5168\u4f53\u7528\u6237\u670d\u52a1\uff0c\u800c\u4e14\u5feb\u5982\u95ea\u7535\u3002"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u26a1\ufe0f ",(0,r.kt)("strong",{parentName:"li"},"\u5feb\u5982\u95ea\u7535"),"\u3002 Docusaurus 2 \u9075\u5faa ",(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/web/fundamentals/performance/prpl-pattern/"},"PRPL \u6a21\u5f0f"),"\u6765\u786e\u4fdd\u5185\u5bb9\u53ef\u4ee5\u8fc5\u901f\u52a0\u8f7d\u3002"),(0,r.kt)("li",{parentName:"ul"},"\ud83e\udd96 ",(0,r.kt)("strong",{parentName:"li"},"\u65e0\u969c\u788d\u8bbf\u95ee"),"\u3002 \u6211\u4eec\u91cd\u89c6\u65e0\u969c\u788d\u8bbf\u95ee\u6027\uff0c\u8ba9\u6240\u6709\u7528\u6237\u90fd\u80fd\u5e73\u7b49\u5730\u8bbf\u95ee\u4f60\u7684\u7f51\u7ad9\u3002")),(0,r.kt)("h2",{parentName:"admonition",id:"design-principles"},"\u8bbe\u8ba1\u7406\u5ff5"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u4f4e\u5b66\u4e60\u6210\u672c"),"\u3002 Docusaurus \u7684 API \u5c0f\u800c\u7cbe\uff0c\u4fdd\u8bc1\u6613\u4e8e\u4e0a\u624b\u4f7f\u7528\u3002 \u7528\u6237\u4ecd\u7136\u53ef\u4ee5\u5b8c\u6210\u5927\u591a\u6570\u529f\u80fd\uff0c\u5373\u4f7f\u9700\u8981\u82b1\u66f4\u591a\u65f6\u95f4\u5199\u66f4\u591a\u4ee3\u7801\u3002 \u6ca1\u6709\u62bd\u8c61\u8981\u6bd4\u9519\u8bef\u7684\u62bd\u8c61\u66f4\u597d\uff0c\u6211\u4eec\u4e0d\u5e0c\u671b\u7528\u6237\u5728\u9519\u8bef\u7684\u62bd\u8c61\u4e0a\u6363\u9f13\u89e3\u51b3\u65b9\u6848\u3002 \u5fc5\u770b\u8bb2\u5ea7\u2014\u2014",(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=4anAwXYqLG8"},"\u6700\u5c0f\u5316 API \u8868\u9762\u79ef"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u76f4\u89c2\u6613\u61c2"),"\u3002 \u7528\u6237\u67e5\u770b Docusaurus \u9879\u76ee\u76ee\u5f55\u6216\u6dfb\u52a0\u65b0\u7279\u6027\u65f6\u4e0d\u4f1a\u611f\u5230\u5934\u660f\u8111\u80c0\u3002 \u8f6f\u4ef6\u5e94\u7b80\u5355\u76f4\u89c2\uff0c\u7528\u6237\u5219\u53ef\u8f7b\u677e\u6269\u5c55\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5206\u5c42\u7ed3\u6784"),"\u3002 \u8f6f\u4ef6\u6808\u7684\u5206\u5c42\uff08\u5185\u5bb9/\u4e3b\u9898/\u6837\u5f0f\uff09\u5e94\u4e00\u76ee\u4e86\u7136\u2014\u2014\u5145\u5206\u62bd\u8c61\u4e14\u6a21\u5757\u5316\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5408\u7406\u7684\u9ed8\u8ba4\u503c"),"\u3002 \u5e38\u89c1\u3001\u70ed\u95e8\u7684\u6027\u80fd\u4f18\u5316\u9009\u9879\u4f1a\u81ea\u52a8\u652f\u6301\uff0c\u5e76\u4ecd\u63d0\u4f9b\u624b\u52a8\u8986\u76d6\u7684\u65b9\u5f0f\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u4e0d\u53d7\u7ea6\u675f"),"\u3002 \u7528\u6237\u65e0\u9700\u4f7f\u7528\u9ed8\u8ba4\u63d2\u4ef6\u6216 CSS\uff08\u867d\u7136\u6211\u4eec\u5f3a\u70c8\u63a8\u8350\u8fd9\u4e48\u505a\uff09\u3002 \u67d0\u4e9b\u6838\u5fc3\u57fa\u7840\u8bbe\u65bd\uff0c\u4f8b\u5982 React Loadable \u548c React Router \u4e0d\u80fd\u66ff\u6362\uff0c\u56e0\u4e3a\u6211\u4eec\u57fa\u4e8e\u8fd9\u4e9b\u505a\u4e86\u9ed8\u8ba4\u6027\u80fd\u4f18\u5316\uff0c\u4f46\u66f4\u9ad8\u5c42\u7684\u67b6\u6784\u5219\u53ef\u4ee5\u968f\u610f\u66ff\u6362\u3002 Markdown \u5f15\u64ce\u3001CSS \u6846\u67b6\u3001CSS \u65b9\u6cd5\u548c\u5176\u4ed6\u67b6\u6784\u7684\u9009\u62e9\u5b8c\u5168\u53d6\u51b3\u4e8e\u7528\u6237\u3002")),(0,r.kt)("p",{parentName:"admonition"},"\u6211\u4eec\u76f8\u4fe1\uff0c\u5f00\u53d1\u8005\u8db3\u591f\u4e86\u89e3\u4e00\u4e2a\u5e94\u7528\u5e93\u7684\u8fd0\u884c\u539f\u7406\uff0c\u624d\u80fd\u591f\u66f4\u597d\u5730\u4f7f\u7528\u5b83\u3002 \u56e0\u6b64\uff0c\u6211\u4eec\u613f\u610f\u82b1\u8d39\u7cbe\u529b\u6765\u9610\u91ca Docusaurus \u7684\u67b6\u6784\u548c\u5404\u4e2a\u7ec4\u6210\u90e8\u5206\uff0c\u5e0c\u671b\u8bfb\u8005\u4eec\u53ef\u4ee5\u62e5\u6709\u5bf9\u5b83\u66f4\u6df1\u7684\u7406\u89e3\uff0c\u4ece\u800c\u66f4\u719f\u7ec3\u5730\u4f7f\u7528\u5b83\u3002"),(0,r.kt)("h2",{parentName:"admonition",id:"comparison-with-other-tools"},"\u4e0e\u5176\u4ed6\u5de5\u5177\u7684\u5bf9\u6bd4"),(0,r.kt)("p",{parentName:"admonition"},"\u5728\u6240\u6709\u7684\u9759\u6001\u7f51\u7ad9\u751f\u6210\u5668\u4e2d\uff0cDocusaurus \u72ec\u6811\u4e00\u5e1c\uff0c\u4e13\u6ce8\u4e8e\u6587\u6863\u7f51\u7ad9\uff0c\u62e5\u6709\u8bf8\u591a\u5f00\u7bb1\u5373\u7528\u7684\u529f\u80fd\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u6211\u4eec\u540c\u65f6\u4e5f\u7814\u7a76\u4e86\u5176\u4ed6\u4e00\u4e9b\u4e3b\u6d41\u9759\u6001\u7ad9\u70b9\u751f\u6210\u5668\uff0c\u60f3\u548c\u4f60\u4e00\u8d77\u5206\u4eab\u6211\u4eec\u6bd4\u8f83\u540e\u7684\u770b\u6cd5\uff0c\u5e0c\u671b\u80fd\u5e2e\u4f60\u5728\u591a\u79cd\u9009\u62e9\u4e2d\u505a\u51fa\u5224\u65ad\u3002"),(0,r.kt)("h3",{parentName:"admonition",id:"gatsby"},"Gatsby"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://www.gatsbyjs.com/"},"Gatsby")," \u81ea\u5e26\u8bf8\u591a\u529f\u80fd\uff0c\u800c\u4e14\u62e5\u6709\u4e30\u5bcc\u7684\u63d2\u4ef6\u751f\u6001\uff0c\u8db3\u4ee5\u80dc\u4efb Docusaurus \u7684\u6240\u6709\u529f\u80fd\u3002 \u5f53\u7136\uff0c\u8fd9\u5e26\u6765\u4e86\u8f83\u9661\u7684\u5b66\u4e60\u66f2\u7ebf\u3002 Gatsby \u5728\u8bb8\u591a\u65b9\u9762\u505a\u5f97\u90fd\u5f88\u51fa\u8272\uff0c\u9002\u5408\u6784\u5efa\u8bb8\u591a\u7c7b\u578b\u7684\u7f51\u7ad9\u3002 \u53e6\u4e00\u65b9\u9762\uff0cDocusaurus \u529b\u56fe\u5c06\u4e00\u4ef6\u4e8b\u505a\u5230\u5c3d\u5584\u5c3d\u7f8e\u2014\u2014\u6210\u4e3a\u6700\u597d\u7684\u5185\u5bb9\u64b0\u5199\u4e0e\u53d1\u5e03\u5de5\u5177\u3002"),(0,r.kt)("p",{parentName:"admonition"},"GraphQL \u662f Gatsby \u7684\u6838\u5fc3\uff0c\u4f46\u642d\u5efa Gatsby \u7f51\u7ad9\u4e0d\u4e00\u5b9a\u8981\u7528\u5230\u5b83\u3002 \u800c\u5728\u5927\u591a\u6570\u9759\u6001\u7f51\u7ad9\u4e2d\uff0c\u4f60\u66f4\u4e0d\u9700\u8981 GraphQL \u6240\u63d0\u4f9b\u7684\u7075\u6d3b\u6027\u3002"),(0,r.kt)("p",{parentName:"admonition"},"Docusaurus 2 \u7684\u8bb8\u591a\u65b9\u9762\u90fd\u88ab Gatsby \u7684\u51fa\u8272\u4e4b\u5904\u6240\u542f\u53d1\uff0c\u8fd9\u662f\u4e00\u4e2a\u4f18\u79c0\u7684\u66ff\u4ee3\u54c1\u3002"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/pedronauck/docz"},"Docz")," \u662f\u4e00\u4e2a Gatsby \u4e3b\u9898\uff0c\u7528\u4e8e\u642d\u5efa\u6587\u6863\u7f51\u7ad9\u3002 \u5b83\u7684\u529f\u80fd\u4e0e Docusaurus \u76f8\u6bd4\u8981\u532e\u4e4f\u3002"),(0,r.kt)("h3",{parentName:"admonition",id:"nextjs"},"Next.js"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://nextjs.org/"},"Next.js")," \u662f\u53e6\u4e00\u6b3e\u6781\u4e3a\u70ed\u95e8\u7684 React \u6df7\u5408\u6846\u67b6\u3002 \u5b83\u53ef\u4ee5\u5e2e\u52a9\u4f60\u6784\u5efa\u51fa\u8272\u7684\u6587\u6863\u7f51\u7ad9\uff0c\u4f46\u5b83\u5e76\u4e0d\u7740\u91cd\u4e8e\u6587\u6863\u529f\u80fd\u672c\u8eab\uff0c\u800c\u4e14\u9700\u8981\u4f60\u624b\u52a8\u5b9e\u73b0 Docusaurus \u6240\u81ea\u5e26\u7684\u529f\u80fd\u3002"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/shuding/nextra"},"Nextra")," \u662f\u4e00\u6b3e\u57fa\u4e8e Next.js \u7684\u9759\u6001\u7ad9\u70b9\u751f\u6210\u5668\u3002 \u5b83\u7684\u529f\u80fd\u4e0e Docusaurus \u76f8\u6bd4\u8981\u532e\u4e4f\u3002"),(0,r.kt)("h3",{parentName:"admonition",id:"vuepress"},"VuePress"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://vuepress.vuejs.org/"},"VuePress")," \u4e0e Docusaurus \u6709\u8bb8\u591a\u5171\u540c\u70b9\u2014\u2014\u90fd\u975e\u5e38\u4e13\u6ce8\u4e8e\u4ee5\u5185\u5bb9\u4e3a\u4e2d\u5fc3\u7684\u7f51\u7ad9\uff0c\u4e14\u90fd\u63d0\u4f9b\u91cf\u8eab\u5b9a\u5236\u7684\u6587\u6863\u7279\u6027\u3002 \u4f46\u662f\uff0cVuePress \u662f Vue \u9a71\u52a8\u7684\uff0c\u800c Docusaurus \u5219\u662f React \u9a71\u52a8\u7684\u3002 \u5982\u679c\u4f60\u60f3\u8981\u4e00\u4e2a\u57fa\u4e8e Vue \u7684\u89e3\u51b3\u65b9\u6848\uff0cVuePress \u662f\u4e2a\u4e0d\u9519\u7684\u9009\u62e9\u3002"),(0,r.kt)("h3",{parentName:"admonition",id:"mkdocs"},"MkDocs"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://www.mkdocs.org/"},"MkDocs")," \u662f\u4e00\u6b3e\u53d7\u6b22\u8fce\u7684 Python \u9759\u6001\u7ad9\u70b9\u751f\u6210\u5668\uff0c\u5176\u8bbe\u8ba1\u7406\u5ff5\u4e0e Docusaurus \u7c7b\u4f3c\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u4e0d\u9700\u8981\u5355\u9875\u5e94\u7528\uff0c\u4e5f\u4e0d\u6253\u7b97\u5229\u7528 React \u7684\u8bdd\uff0c\u8fd9\u662f\u4e2a\u597d\u9009\u62e9\u3002"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://squidfunk.github.io/mkdocs-material/"},"Material for MkDocs")," \u662f\u4e00\u6b3e\u5f88\u597d\u770b\u7684\u4e3b\u9898\u3002"),(0,r.kt)("h3",{parentName:"admonition",id:"docsify"},"Docsify"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://docsify.js.org/"},"Docsify")," \u8ba9\u4f60\u80fd\u8f7b\u677e\u521b\u5efa\u6587\u6863\u7f51\u7ad9\uff0c\u4f46\u5b83\u5e76\u4e0d\u662f\u4e00\u6b3e\u9759\u6001\u7f51\u7ad9\u751f\u6210\u5668\uff0c\u800c\u4e14\u5bf9\u641c\u7d22\u5f15\u64ce\u4e0d\u592a\u53cb\u597d\u3002"),(0,r.kt)("h3",{parentName:"admonition",id:"gitbook"},"GitBook"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://www.gitbook.com/"},"GitBook")," \u7684\u8bbe\u8ba1\u6e05\u723d\uff0c\u8bf8\u591a\u5f00\u6e90\u9879\u76ee\u90fd\u5728\u4f7f\u7528\u3002 \u4f46\u968f\u7740\u5b83\u628a\u91cd\u70b9\u9010\u6e10\u4ece\u5f00\u6e90\u5de5\u5177\u8f6c\u5411\u5546\u4e1a\u4ea7\u54c1\uff0c\u5b83\u4e0d\u518d\u7b26\u5408\u5f00\u6e90\u9879\u76ee\u6587\u6863\u7f51\u7ad9\u7684\u9700\u8981\u3002 \u7ed3\u679c\u5c31\u662f\uff0c\u8bb8\u591a\u9879\u76ee\u8f6c\u7528\u4e86\u5176\u4ed6\u4ea7\u54c1\u3002 \u4f60\u4e5f\u8bb8\u5728",(0,r.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/redux/issues/3161"},"\u8fd9\u91cc"),"\u542c\u8bf4\u8fc7 Redux \u8f6c\u6295 Docusaurus \u6000\u62b1\u7684\u4e8b\u60c5\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u76ee\u524d\uff0cGitBook \u53ea\u5bf9\u5f00\u6e90\u548c\u975e\u8425\u5229\u56e2\u961f\u514d\u8d39\u3002 Docusaurus \u5219\u5bf9\u6240\u6709\u4eba\u514d\u8d39\u3002"),(0,r.kt)("h3",{parentName:"admonition",id:"jekyll"},"Jekyll"),(0,r.kt)("p",{parentName:"admonition"},"\u5728\u5e02\u9762\u4e0a\u7684\u9759\u6001\u7f51\u7ad9\u751f\u6210\u5668\u4e2d\uff0c",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jekyll/jekyll"},"Jekyll")," \u662f\u6700\u6210\u719f\u800c\u4f18\u79c0\u7684\u4e4b\u4e00\u2014\u2014\u5b9e\u9645\u4e0a\uff0c\u5728 Docusaurus \u8bde\u751f\u4e4b\u524d\uff0cFacebook \u7684\u7edd\u5927\u591a\u6570\u5f00\u6e90\u7ad9\u70b9\u90fd\u662f\u7528 Jekyll \u6784\u5efa\u7684\uff01 \u5b83\u7684\u4e0a\u624b\u96be\u5ea6\u6781\u4f4e\u3002 \u5728\u9759\u6001\u7f51\u7ad9\u6784\u5efa\u65b9\u9762\uff0c\u6211\u4eec\u60f3\u8981\u4e3a\u4f60\u5e26\u6765\u548c Jekyll \u7c7b\u4f3c\u7684\u5f00\u53d1\u8005\u4f53\u9a8c\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u76f8\u6bd4\u4e8e\u9759\u6001\u751f\u6210 HTML\uff0c\u518d\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"<script />")," \u6807\u7b7e\u5b9e\u73b0\u4ea4\u4e92\uff0cDocusaurus \u7f51\u7ad9\u672c\u8eab\u5c31\u662f\u4e00\u4e2a React \u5e94\u7528\u3002 \u6211\u4eec\u5e0c\u671b\u501f\u7531\u73b0\u4ee3\u5316 JavaScript \u751f\u6001\u7cfb\u7edf\u5de5\u5177\uff0c\u5728\u6587\u6863\u7ad9\u70b9\u6027\u80fd\u3001\u8d44\u6e90\u6784\u5efa\u7cfb\u7edf\uff0c\u4f18\u5316\u548c\u6613\u90e8\u7f72\u6027\u7b49\u9886\u57df\u5236\u5b9a\u65b0\u6807\u51c6\u3002"),(0,r.kt)("h2",{parentName:"admonition",id:"staying-informed"},"\u4e86\u89e3\u6700\u65b0\u6d88\u606f"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebook/docusaurus"},"GitHub")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://twitter.com/docusaurus"},"Twitter")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/blog"},"\u535a\u5ba2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://discord.gg/docusaurus"},"Discord"))),(0,r.kt)("h2",{parentName:"admonition",id:"something-missing"},"\u7f3a\u70b9\u4ec0\u4e48\uff1f"),(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u53d1\u73b0\u6587\u6863\u5b58\u5728\u95ee\u9898\uff0c\u6216\u8005\u6709\u6539\u8fdb\u6587\u6863\u6216\u9879\u76ee\u7684\u5efa\u8bae\uff0c\u8bf7\u5411\u6211\u4eec",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus"},"\u63d0 issue"),"\uff0c\u6216\u8005\u5728 Twitter \u4e0a ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/docusaurus"},"@docusaurus"),"\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u5bf9\u4e8e\u65b0\u529f\u80fd\u8bf7\u6c42\uff0c\u4f60\u53ef\u4ee5\u5728\u6211\u4eec\u7684 ",(0,r.kt)("a",{parentName:"p",href:"/#"},"Canny \u9700\u6c42\u7ba1\u7406\u677f"),"\u4e0a\u521b\u5efa\u4e00\u4e2a\u5e16\u5b50\u3002Canny \u662f\u4e00\u4e2a\u65b9\u4fbf\u7684\u8def\u7ebf\u56fe\u7ba1\u7406\u5de5\u5177\uff0c\u53ef\u4ee5\u5c06\u9700\u6c42\u6309\u7167\u8d5e\u540c\u7968\u6570\u91cf\u964d\u5e8f\u6392\u5e8f\uff0c \u4e0e GitHub issue \u76f8\u6bd4\uff0c\u6211\u4eec\u56e2\u961f\u80fd\u591f\u66f4\u597d\u5730\u4e86\u89e3\u4ec0\u4e48\u65b0\u529f\u80fd\u7684\u9700\u6c42\u66f4\u9ad8\uff0c\u800c GitHub issue \u66f4\u96be\u6807\u660e\u8fd9\u70b9\u3002 \u8bf7\u5c3d\u91cf\u907f\u514d\u63d0\u4ea4\u65b0\u529f\u80fd\u7684\u5408\u5e76\u8bf7\u6c42 (Pull Request)\uff0c\u5c24\u5176\u662f\u5927\u6539\u52a8\uff0c\u56e0\u4e3a\u53ef\u80fd\u5df2\u7ecf\u6709\u4eba\u5728\u7740\u624b\u5b9e\u73b0\u5b83\u4e86\uff0c\u6216\u8005\u8fd9\u4e2a\u529f\u80fd\u53ef\u80fd\u662f\u6211\u4eec\u672a\u6765\u89c4\u5212\u7684\u4e00\u90e8\u5206\u3002 \u603b\u4e4b\uff0c\u8bf7\u5148\u8054\u7cfb\u6211\u4eec\uff01")))}k.isMDXComponent=!0},3365:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/slash-introducing-411a16dd05086935b8e9ddae38ae9b45.svg"}}]);
"use strict";(self.webpackChunknotes=self.webpackChunknotes||[]).push([[2143],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),f=l,m=s["".concat(c,".").concat(f)]||s[f]||d[f]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:l,a[1]=i;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5771:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),l=(n(7294),n(3905));const o={description:"\u56de\u987e",custom_edit_url:null},a="\u56de\u987e",i={unversionedId:"back/ReCode",id:"back/ReCode",title:"\u56de\u987e",description:"\u56de\u987e",source:"@site/docs/back/ReCode.mdx",sourceDirName:"back",slug:"/back/ReCode",permalink:"/docs/back/ReCode",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{description:"\u56de\u987e",custom_edit_url:null},sidebar:"backIndex",previous:{title:"\u56de\u987e",permalink:"/docs/back"}},c={},p=[{value:"JVM\u7b97\u6cd5",id:"jvm\u7b97\u6cd5",level:2},{value:"GC \u5206\u4ee3\u6536\u96c6\u7b97\u6cd5 VS \u5206\u533a\u6536\u96c6\u7b97\u6cd5",id:"gc-\u5206\u4ee3\u6536\u96c6\u7b97\u6cd5-vs-\u5206\u533a\u6536\u96c6\u7b97\u6cd5",level:3},{value:"\u5728\u65b0\u751f\u4ee3-\u590d\u5236\u7b97\u6cd5",id:"\u5728\u65b0\u751f\u4ee3-\u590d\u5236\u7b97\u6cd5",level:4},{value:"\u5728\u8001\u5e74\u4ee3-\u6807\u8bb0\u6574\u7406\u7b97\u6cd5",id:"\u5728\u8001\u5e74\u4ee3-\u6807\u8bb0\u6574\u7406\u7b97\u6cd5",level:4},{value:"\u5206\u533a\u6536\u96c6\u7b97\u6cd5",id:"\u5206\u533a\u6536\u96c6\u7b97\u6cd5",level:3},{value:"JAVA \u56db\u4e2d\u5f15\u7528\u7c7b\u578b",id:"java-\u56db\u4e2d\u5f15\u7528\u7c7b\u578b",level:2}],u={toc:p};function s(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u56de\u987e"},"\u56de\u987e"),(0,l.kt)("h2",{id:"jvm\u7b97\u6cd5"},"JVM\u7b97\u6cd5"),(0,l.kt)("p",null,"Minor \u590d\u5236\u7b97\u6cd5\nmajor \u6807\u8bb0\u6e05\u9664\u7b97\u6cd5"),(0,l.kt)("p",null,"\u5f15\u7528\u8ba1\u6570\u6cd5\uff1a\u5982\u679c\u4e00\u4e2a\u5bf9\u8c61\u7684\u88ab\u5f15\u7528\u6b21\u6570\u4e3a0\uff0c\u5219\u8bf4\u660e\u8fd9\u4e2a\u5bf9\u8c61\u53ef\u80fd\u4e0d\u518d\u4f1a\u88ab\u7528\u5230\uff0c\u90a3\u4e48\u8fd9\u4e2a\u5bf9\u8c61\u5c31\u662f\u53ef\u56de\u6536\u7684\u5bf9\u8c61\n\u5b58\u5728\u5faa\u73af\u5f15\u7528\u95ee\u9898"),(0,l.kt)("p",null,"\u53ef\u8fbe\u6027\u5206\u6790\uff1a\u4e3a\u4e86\u89e3\u51b3\u5faa\u73af\u5f15\u7528\uff0c\u4ee5\u4e00\u7cfb\u5217\u7684GCroot\u5bf9\u8c61\u4f5c\u4e3a\u8d77\u70b9\u641c\u7d22\uff0c\u5982\u679cGC roots \u548c\u4e00\u4e2a\u5bf9\u8c61\u4e4b\u95f4\u6ca1\u6709\u53ef\u8fbe\u8def\u5f84\uff0c\u8fd9\u79f0\u8be5\u5bf9\u8c61\u4e0d\u53ef\u8fbe\uff0c\u5728\u7ecf\u8fc7\u4e24\u4fa7\u6807\u8bb0\u8fc7\u7a0b\u540e\uff0c\u5c06\u9762\u4e34\u56de\u6536"),(0,l.kt)("p",null,"\u6807\u8bb0\u6e05\u9664\u6cd5\uff1a\u6700\u57fa\u7840\u7684\u56de\u6536\u7b97\u6cd5\u3002\u5206\u4e3a\u4e24\u9636\u6bb5\uff0c\u6807\u8bb0\u548c\u6e05\u9664\u3002\u6807\u8bb0\u6240\u6709\u9700\u8981\u6e05\u9664\u7684\u5bf9\u8c61\uff0c\u6e05\u9664\u56de\u6536\u88ab\u6807\u8bb0\u7684\u5bf9\u8c61\u6240\u5360\u7528\u7684\u7a7a\u95f4\n\u5b58\u5728\u5185\u5b58\u788e\u7247\u5316\u95ee\u9898\uff0c\u540e\u7eed\u5927\u5bf9\u8c61\u627e\u4e0d\u5230\u53ef\u5229\u7528\u7684\u7a7a\u95f4"),(0,l.kt)("p",null,"\u590d\u5236\u7b97\u6cd5\uff1a\u4e3a\u4e86\u89e3\u51b3\u788e\u7247\u5316\u3002\u5c06\u5185\u5b58\u7b49\u5206\uff0c\u6bcf\u6b21\u53ea\u662f\u7528\u5176\u4e2d\u4e00\u4e2a\uff0c\u5f53\u8fd9\u5757\u5185\u5b58\u6ee1\u540e\u5c06\u5b58\u6d3b\u5bf9\u8c61\u590d\u5236\u5230\u53e6\u5916\u4e00\u5757\u4e0a\u53bb\uff0c\u5176\u4f59\u7684\u6e05\u9664\u3002\u8fd9\u79cd\u7b97\u6cd5\u5b9e\u73b0\u7b80\u5355\uff0c\u5185\u5b58\u6548\u7387\u9ad8\uff0c\u4e0d\u6613\u4ea7\u751f\u788e\u7247\n\u4f46\u662f\u5185\u5b58\u88ab\u538b\u7f29\u5230\u4e86\u4e00\u534a\uff0c\u4e14\u5b58\u6d3b\u5bf9\u8c61\u591a\u7684\u8bdd\uff0cCopying\u7b97\u6cd5\u7684\u6548\u7387\u5927\u5927\u964d\u4f4e\u3002"),(0,l.kt)("p",null,"\u6807\u8bb0\u6574\u7406\u7b97\u6cd5\uff1a\u7ed3\u5408\u4ee5\u4e0a\u4e24\u4e2a\u7b97\u6cd5\u800c\u63d0\u51fa\u3002\u6807\u8bb0\u540e\u4e0d\u662f\u6e05\u7406\u5bf9\u8c61\u800c\u662f\u5c06\u5b58\u6d3b\u7684\u5bf9\u8c61\u538b\u7f29\u5230\u5185\u5b58\u7684\u4e00\u7aef\uff0c\u987a\u5e8f\u6392\u653e\uff0c\u7136\u540e\u6e05\u9664\u8fb9\u754c\u5916\u7684\u6240\u6709\u7a7a\u95f4"),(0,l.kt)("p",null,"\u5206\u4ee3\u6536\u96c6\u7b97\u6cd5\uff1a\u5206\u4ee3\u6536\u96c6\u6cd5\u662f\u76ee\u524d\u5927\u90e8\u5206 JVM \u6240\u91c7\u7528\u7684\u65b9\u6cd5\uff0c\u6839\u636e\u5bf9\u8c61\u5b58\u6d3b\u7684\u4e0d\u540c\u751f\u547d\u5468\u671f\u5c06\u5185\u5b58\n\u5212\u5206\u4e3a\u4e0d\u540c\u7684\u57df\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b\u5c06 GC \u5806\u5212\u5206\u4e3a\u8001\u751f\u4ee3(Tenured/Old Generation)\u548c\u65b0\u751f\u4ee3(Young\nGeneration)\u3002\u8001\u751f\u4ee3\u7684\u7279\u70b9\u662f\u6bcf\u6b21\u5783\u573e\u56de\u6536\u65f6\u53ea\u6709\u5c11\u91cf\u5bf9\u8c61\u9700\u8981\u88ab\u56de\u6536\uff0c\u65b0\u751f\u4ee3\u7684\u7279\u70b9\u662f\u6bcf\u6b21\u5783\n\u573e\u56de\u6536\u65f6\u90fd\u6709\u5927\u91cf\u5783\u573e\u9700\u8981\u88ab\u56de\u6536\uff0c\u56e0\u6b64\u53ef\u4ee5\u6839\u636e\u4e0d\u540c\u533a\u57df\u9009\u62e9\u4e0d\u540c\u7684\u7b97\u6cd5"),(0,l.kt)("h3",{id:"gc-\u5206\u4ee3\u6536\u96c6\u7b97\u6cd5-vs-\u5206\u533a\u6536\u96c6\u7b97\u6cd5"},"GC \u5206\u4ee3\u6536\u96c6\u7b97\u6cd5 VS \u5206\u533a\u6536\u96c6\u7b97\u6cd5"),(0,l.kt)("p",null,"\u5f53\u524d\u4e3b\u6d41 JVM \u5783\u573e\u6536\u96c6\u90fd\u91c7\u7528\u201d\u5206\u4ee3\u6536\u96c6\u201d(Generational Collection)\u7b97\u6cd5, \u8fd9\u79cd\u7b97\u6cd5\u4f1a\u6839\u636e\n\u5bf9\u8c61\u5b58\u6d3b\u5468\u671f\u7684\u4e0d\u540c\u5c06\u5185\u5b58\u5212\u5206\u4e3a\u51e0\u5757, \u5982 JVM \u4e2d\u7684 \u65b0\u751f\u4ee3\u3001\u8001\u5e74\u4ee3\u3001\u6c38\u4e45\u4ee3\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u6839\u636e\n\u5404\u5e74\u4ee3\u7279\u70b9\u5206\u522b\u91c7\u7528\u6700\u9002\u5f53\u7684 GC \u7b97\u6cd5"),(0,l.kt)("h4",{id:"\u5728\u65b0\u751f\u4ee3-\u590d\u5236\u7b97\u6cd5"},"\u5728\u65b0\u751f\u4ee3-\u590d\u5236\u7b97\u6cd5"),(0,l.kt)("p",null,"\u6bcf\u6b21\u5783\u573e\u6536\u96c6\u90fd\u80fd\u53d1\u73b0\u5927\u6279\u5bf9\u8c61\u5df2\u6b7b, \u53ea\u6709\u5c11\u91cf\u5b58\u6d3b. \u56e0\u6b64\u9009\u7528\u590d\u5236\u7b97\u6cd5, \u53ea\u9700\u8981\u4ed8\u51fa\u5c11\u91cf\n\u5b58\u6d3b\u5bf9\u8c61\u7684\u590d\u5236\u6210\u672c\u5c31\u53ef\u4ee5\u5b8c\u6210\u6536\u96c6."),(0,l.kt)("h4",{id:"\u5728\u8001\u5e74\u4ee3-\u6807\u8bb0\u6574\u7406\u7b97\u6cd5"},"\u5728\u8001\u5e74\u4ee3-\u6807\u8bb0\u6574\u7406\u7b97\u6cd5"),(0,l.kt)("p",null,"\u56e0\u4e3a\u5bf9\u8c61\u5b58\u6d3b\u7387\u9ad8\u3001\u6ca1\u6709\u989d\u5916\u7a7a\u95f4\u5bf9\u5b83\u8fdb\u884c\u5206\u914d\u62c5\u4fdd, \u5c31\u5fc5\u987b\u91c7\u7528\u201c\u6807\u8bb0\u2014\u6e05\u7406\u201d\u6216\u201c\u6807\n\u8bb0\u2014\u6574\u7406\u201d\u7b97\u6cd5\u6765\u8fdb\u884c\u56de\u6536, \u4e0d\u5fc5\u8fdb\u884c\u5185\u5b58\u590d\u5236, \u4e14\u76f4\u63a5\u817e\u51fa\u7a7a\u95f2\u5185\u5b58."),(0,l.kt)("h3",{id:"\u5206\u533a\u6536\u96c6\u7b97\u6cd5"},"\u5206\u533a\u6536\u96c6\u7b97\u6cd5"),(0,l.kt)("p",null,"\u5206\u533a\u7b97\u6cd5\u5219\u5c06\u6574\u4e2a\u5806\u7a7a\u95f4\u5212\u5206\u4e3a\u8fde\u7eed\u7684\u4e0d\u540c\u5c0f\u533a\u95f4, \u6bcf\u4e2a\u5c0f\u533a\u95f4\u72ec\u7acb\u4f7f\u7528, \u72ec\u7acb\u56de\u6536. \u8fd9\u6837\u505a\u7684\n\u597d\u5904\u662f\u53ef\u4ee5\u63a7\u5236\u4e00\u6b21\u56de\u6536\u591a\u5c11\u4e2a\u5c0f\u533a\u95f4 , \u6839\u636e\u76ee\u6807\u505c\u987f\u65f6\u95f4, \u6bcf\u6b21\u5408\u7406\u5730\u56de\u6536\u82e5\u5e72\u4e2a\u5c0f\u533a\u95f4(\u800c\u4e0d\u662f\n\u6574\u4e2a\u5806), \u4ece\u800c\u51cf\u5c11\u4e00\u6b21 GC \u6240\u4ea7\u751f\u7684\u505c\u987f\u3002"),(0,l.kt)("h2",{id:"java-\u56db\u4e2d\u5f15\u7528\u7c7b\u578b"},"JAVA \u56db\u4e2d\u5f15\u7528\u7c7b\u578b"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5728 Java \u4e2d\u6700\u5e38\u89c1\u7684\u5c31\u662f\u5f3a\u5f15\u7528\uff0c\u628a\u4e00\u4e2a\u5bf9\u8c61\u8d4b\u7ed9\u4e00\u4e2a\u5f15\u7528\u53d8\u91cf\uff0c\u8fd9\u4e2a\u5f15\u7528\u53d8\u91cf\u5c31\u662f\u4e00\u4e2a\u5f3a\u5f15\n\u7528\u3002\u5f53\u4e00\u4e2a\u5bf9\u8c61\u88ab\u5f3a\u5f15\u7528\u53d8\u91cf\u5f15\u7528\u65f6\uff0c\u5b83\u5904\u4e8e\u53ef\u8fbe\u72b6\u6001\uff0c\u5b83\u662f\u4e0d\u53ef\u80fd\u88ab\u5783\u573e\u56de\u6536\u673a\u5236\u56de\u6536\u7684\uff0c\u5373\n\u4f7f\u8be5\u5bf9\u8c61\u4ee5\u540e\u6c38\u8fdc\u90fd\u4e0d\u4f1a\u88ab\u7528\u5230 JVM \u4e5f\u4e0d\u4f1a\u56de\u6536\u3002\u56e0\u6b64\u5f3a\u5f15\u7528\u662f\u9020\u6210 Java \u5185\u5b58\u6cc4\u6f0f\u7684\u4e3b\u8981\u539f\u56e0\u4e4b\n\u4e00\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u8f6f\u5f15\u7528\u9700\u8981\u7528 SoftReference \u7c7b\u6765\u5b9e\u73b0\uff0c\u5bf9\u4e8e\u53ea\u6709\u8f6f\u5f15\u7528\u7684\u5bf9\u8c61\u6765\u8bf4\uff0c\u5f53\u7cfb\u7edf\u5185\u5b58\u8db3\u591f\u65f6\u5b83\n\u4e0d\u4f1a\u88ab\u56de\u6536\uff0c\u5f53\u7cfb\u7edf\u5185\u5b58\u7a7a\u95f4\u4e0d\u8db3\u65f6\u5b83\u4f1a\u88ab\u56de\u6536\u3002\u8f6f\u5f15\u7528\u901a\u5e38\u7528\u5728\u5bf9\u5185\u5b58\u654f\u611f\u7684\u7a0b\u5e8f\u4e2d\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5f31\u5f15\u7528\u9700\u8981\u7528 WeakReference \u7c7b\u6765\u5b9e\u73b0\uff0c\u5b83\u6bd4\u8f6f\u5f15\u7528\u7684\u751f\u5b58\u671f\u66f4\u77ed\uff0c\u5bf9\u4e8e\u53ea\u6709\u5f31\u5f15\u7528\u7684\u5bf9\u8c61\n\u6765\u8bf4\uff0c\u53ea\u8981\u5783\u573e\u56de\u6536\u673a\u5236\u4e00\u8fd0\u884c\uff0c\u4e0d\u7ba1 JVM \u7684\u5185\u5b58\u7a7a\u95f4\u662f\u5426\u8db3\u591f\uff0c\u603b\u4f1a\u56de\u6536\u8be5\u5bf9\u8c61\u5360\u7528\u7684\u5185\u5b58\u3002"))),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"\u865a\u5f15\u7528\u9700\u8981 PhantomReference \u7c7b\u6765\u5b9e\u73b0\uff0c\u5b83\u4e0d\u80fd\u5355\u72ec\u4f7f\u7528\uff0c\u5fc5\u987b\u548c\u5f15\u7528\u961f\u5217\u8054\u5408\u4f7f\u7528\u3002\u865a\n\u5f15\u7528\u7684\u4e3b\u8981\u4f5c\u7528\u662f\u8ddf\u8e2a\u5bf9\u8c61\u88ab\u5783\u573e\u56de\u6536\u7684\u72b6\u6001\u3002")))}s.isMDXComponent=!0}}]);
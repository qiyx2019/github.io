"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8842],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5837:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var r=t(7462),a=t(3366),l=(t(7294),t(3905)),o=["components"],i={title:"JS\uff1a\u7bad\u5934\u51fd\u6570"},u=void 0,s={unversionedId:"base/2019-06-04-js-arrow-function",id:"base/2019-06-04-js-arrow-function",title:"JS\uff1a\u7bad\u5934\u51fd\u6570",description:"\u5148\u6765\u770b\u4e0bES6\u4e2d\u7bad\u5934\u51fd\u6570\u7684\u57fa\u672c\u8bed\u6cd5\uff1a",source:"@site/docs/base/2019-06-04-js-arrow-function.md",sourceDirName:"base",slug:"/base/2019-06-04-js-arrow-function",permalink:"/blog/docs/base/2019-06-04-js-arrow-function",tags:[],version:"current",frontMatter:{title:"JS\uff1a\u7bad\u5934\u51fd\u6570"},sidebar:"base",previous:{title:"JS\uff1a\u56de\u8c03\u51fd\u6570 Promise Generator Async\u5f02\u6b65\u5904\u7406\u5e94\u7528",permalink:"/blog/docs/base/2019-06-03-js-generator-async"},next:{title:"HTTP/3 \u65b0\u7279\u6027",permalink:"/blog/docs/base/2019-06-30-http2-http3"}},c=[{value:"\u4e0e\u666e\u901a\u51fd\u6570\u7684\u533a\u522b",id:"\u4e0e\u666e\u901a\u51fd\u6570\u7684\u533a\u522b",children:[{value:"\u6ca1\u6709this",id:"\u6ca1\u6709this",children:[],level:3},{value:"\u6ca1\u6709arguments",id:"\u6ca1\u6709arguments",children:[],level:3},{value:"\u4e0d\u80fd\u901a\u8fc7new\u5173\u952e\u5b57\u8c03\u7528\u3002",id:"\u4e0d\u80fd\u901a\u8fc7new\u5173\u952e\u5b57\u8c03\u7528",children:[],level:3},{value:"\u6ca1\u6709\u539f\u578b",id:"\u6ca1\u6709\u539f\u578b",children:[],level:3},{value:"\u6ca1\u6709super\uff0c\u4e5f\u662f\u901a\u8fc7\u5305\u5728\u5b83\u5916\u9762\u7684\u975e\u7bad\u5934\u51fd\u6570\u6765\u51b3\u5b9a\u7684\u3002",id:"\u6ca1\u6709super\u4e5f\u662f\u901a\u8fc7\u5305\u5728\u5b83\u5916\u9762\u7684\u975e\u7bad\u5934\u51fd\u6570\u6765\u51b3\u5b9a\u7684",children:[],level:3}],level:2}],p={toc:c};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5148\u6765\u770b\u4e0bES6\u4e2d\u7bad\u5934\u51fd\u6570\u7684\u57fa\u672c\u8bed\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let func = value => value;\n")),(0,l.kt)("p",null,"\u76f8\u5f53\u4e8e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let func = function (value) {\n    return value\n}\n")),(0,l.kt)("p",null,"\u5982\u679c\u9700\u8981\u4f20\u5165\u591a\u4e2a\u53c2\u6570\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let func = (value, num) => value * num;\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u7bad\u5934\u51fd\u6570\u4f8b\u5b50\u4e2d\u90fd\u7701\u7565\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"return"),"\u5173\u952e\u5b57\u548c\u4ee3\u7801\u7684\u82b1\u62ec\u53f7\uff0c\u5728\u7bad\u5934\u51fd\u6570\u4e2d\u5982\u679c\u65b9\u6cd5\u4f53\u4e2d\u53ea\u6709\u4e00\u884c\u4ee3\u7801\uff0c\u53ef\u4ee5\u7701\u7565\u5173\u952e\u5b57\u548c\u65b9\u6cd5\u4f53\u7684\u82b1\u62ec\u53f7\uff0c\u76f4\u63a5\u7b80\u5316\u6210",(0,l.kt)("inlineCode",{parentName:"p"},"value => value"),"\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u51fd\u6570\u7684\u4ee3\u7801\u5757\u9700\u8981\u6709\u591a\u6761\u8bed\u53e5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let func = (value, num) => {\n    return value * num;\n}\n")),(0,l.kt)("p",null,"\u5982\u679c\u9700\u8981\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61\uff0c\u7bad\u5934\u51fd\u6570\u7684\u65b9\u6cd5\u4f53\u5fc5\u987b\u653e\u5728\u5927\u62ec\u53f7",(0,l.kt)("inlineCode",{parentName:"p"},"()"),"\u4e2d\uff0c\u8fd9\u6837\u505a\u7684\u539f\u56e0\u662f\uff1a\u6ca1\u6709\u5927\u62ec\u53f7\uff0cJS\u5f15\u64ce\u6ca1\u529e\u5206\u533a\u5206\u662f\u6b63\u5e38\u5b9a\u4e49\u4e00\u4e2a\u5bf9\u8c61\u8fd8\u662f\u4e00\u4e2a\u7bad\u5934\u51fd\u6570\u4f53:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let func = (value, num) => ({ value: value, num: num }); //\u6b63\u786e\u5199\u6cd5\n\nlet func = (value, num) => { value: value, num: num }; //\u4f1a\u62a5\u9519\n")),(0,l.kt)("h2",{id:"\u4e0e\u666e\u901a\u51fd\u6570\u7684\u533a\u522b"},"\u4e0e\u666e\u901a\u51fd\u6570\u7684\u533a\u522b"),(0,l.kt)("h3",{id:"\u6ca1\u6709this"},"\u6ca1\u6709this"),(0,l.kt)("p",null,"\u7bad\u5934\u51fd\u6570\u5f0f\u7684this\u9700\u8981\u901a\u8fc7\u67e5\u627e\u4f5c\u7528\u57df\u94fe\u6765\u786e\u5b9a\uff0c\u5b83\u7684this\u662f\u6307\u5305\u5728\u5b83\u5916\u9762\u7684\u4f5c\u7528\u57df\u7684this\uff0c\u6211\u4eec\u6765\u770b\u4e0b\u4ee5\u4e0b\u4ee3\u7801\u4e2d\u7684this\u5206\u522b\u6307\u7684\u662f\u4ec0\u4e48\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const obj = {\n    a: function () {\n        console.log(this); // obj\n    },\n    b: () => {\n        console.log(this); // windows\n    }\n}\n")),(0,l.kt)("p",null,"obj.b\u662f\u4e00\u4e2a\u7bad\u5934\u51fd\u6570\uff0c\u5b83\u7684this\u662f\u5305\u5728\u5b83\u5916\u5c42\u7684\u8bcd\u6cd5\u4f5c\u7528\u57df\u7684this\uff08\u79bb\u5b83\u6700\u8fd1\u7684\u8bcd\u6cd5\u4f5c\u7528\u57df\uff09\uff0cobj\u5bf9\u8c61\u4e0d\u662f\u53ef\u6267\u884c\u4ee3\u7801\uff0c\u6240\u4ee5\u5b83\u4e0d\u662f\u79bb\u7bad\u5934\u51fd\u6570\u6700\u8fd1\u7684\u8bcd\u6cd5\u4f5c\u7528\u57df\uff0c\u518d\u5f80\u5916\u5c31\u662f\u5168\u5c40\u4f5c\u7528\u57dfwindow\u4e86\uff0c\u6240\u4ee5obj.b\u7684this\u6307\u7684\u662fwindows\u3002"),(0,l.kt)("p",null,"\u518d\u6765\u770b\u4e00\u6bb5\u4ee3\u7801\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'var pageHandler = {\n\n    id: "123456",\n\n    init: function () {\n        document.addEventListener("click", function (event) {\n            this.doSomething(event.type);     // error\n        }, false);\n    },\n\n    doSomething: function (type) {\n        console.log("Handling " + type + " for " + this.id);\n    }\n};\n\n')),(0,l.kt)("p",null,"\u5728\u8c03\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"pageHandler.init"),"\u65b9\u6cd5\u7684\u65f6\u5019\u4f1a\u62a5\u9519\uff0c\u62a5\u9519\u7684\u51fd\u6570\u662f\u4e2a\u56de\u8c03\u51fd\u6570\uff0c\u8fd9\u4e2a\u56de\u8c03\u51fd\u6570\u7684this\u6307\u7684\u5168\u5c40\u53d8\u91cfwindows\uff0c\u5728\u5168\u5c40\u53d8\u91cf\u91cc\u6ca1\u6709doSomething\u8fd9\u4e2a\u65b9\u6cd5\uff0c\u6240\u4ee5\u4f1a\u62a5\u9519\u3002\u90a3\u4e48\u600e\u4e48\u624d\u80fd\u8ba9\u5b83\u4e0d\u62a5\u9519\u5462\uff1f"),(0,l.kt)("p",null,"\u7b2c\u4e00\u79cd\u65b9\u5f0f\u662f\u901a\u8fc7bind\u6765\u6307\u5b9athis\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'var pageHandler = {\n    id: "123456",\n    init: function () {\n        document.addEventListener("click", (function (event) {\n            this.doSomething(event.type)\n        }).bind(this), false)\n\n    },\n    doSomething: function () {\n        console.log("Handling" + type + " for " + this.id)\n    }\n}\n')),(0,l.kt)("p",null,".bind(this)\u4e2d\u7684this\u662f\u6307pageHandler\u8fd9\u4e2a\u5bf9\u8c61\uff0c\u901a\u8fc7bind\u751f\u6210\u4e00\u4e2athis\u6307\u5411pageHandler\u7684\u65b0\u51fd\u6570\uff0c\u8fd9\u6837\u6267\u884cinit\u65b9\u6cd5\u7684\u65f6\u5019\u4e0d\u4f1a\u62a5\u9519\uff0c\u770b\u8d77\u6765\u602a\u602a\u7684\u6709\u6ca1\u6709\u3002"),(0,l.kt)("p",null,"\u7b2c\u4e8c\u79cd\u65b9\u5f0f\u662f\u901a\u8fc7\u7bad\u5934\u51fd\u6570\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'var pageHandler = {\n    id: "12345",\n    init: function () {\n        document.addEventListener("click", () => {\n            this.doSomething();\n        }, false)\n    },\n    doSomething: function () {\n        console.log("Handling" + type + " for " + this.id);\n    }\n}\n')),(0,l.kt)("p",null,"\u628ainit\u4e2d\u7684\u56de\u8c03\u51fd\u6570\u6539\u6210\u4e86\u7bad\u5934\u51fd\u6570\uff0c\u7bad\u5934\u51fd\u6570\u7684this\u662f\u5b83\u6700\u8fd1\u7684\u4f5c\u7528\u57df\u94fe\u4e0a\u7684this\uff0c\u4e5f\u5c31\u662finit\u8fd9\u4e2a\u65b9\u6cd5\u7684this\uff0c\u4e5f\u5c31\u662fpageHandler\u8fd9\u4e2a\u5bf9\u8c61\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u8fbe\u5230\u76ee\u7684\u4e0d\u62a5\u9519\u5566\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u7bad\u5934\u51fd\u6570\u4e0d\u80fd\u6539\u53d8this\u7684\u503c\uff0c\u666e\u901a\u51fd\u6570\u53ef\u4ee5\u901a\u8fc7call\u3001apply\u3001bind\u6765\u6307\u5b9athis\uff0c\u4f46\u662f\u7bad\u5934\u51fd\u6570\u7684this\u662f\u4e0d\u80fd\u6539\u7684\u3002")),(0,l.kt)("h3",{id:"\u6ca1\u6709arguments"},"\u6ca1\u6709arguments"),(0,l.kt)("p",null,"\u8bbf\u95ee\u7bad\u5934\u51fd\u6570\u7684arguments\uff0c\u5176\u5b9e\u4e5f\u662f\u8bbf\u95ee\u5305\u5728\u5b83\u5916\u9762\u7684\u975e\u7bad\u5934\u51fd\u6570\u7684arguments\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function foo(x, y) {\n    return () => arguments[0];\n}\nconsole.log(foo(1,2)()); //1\n")),(0,l.kt)("h3",{id:"\u4e0d\u80fd\u901a\u8fc7new\u5173\u952e\u5b57\u8c03\u7528"},"\u4e0d\u80fd\u901a\u8fc7new\u5173\u952e\u5b57\u8c03\u7528\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var Foo = () =>{};\nvar foo = new Foo(); // TypeError: Foo is not a constructor\n")),(0,l.kt)("h3",{id:"\u6ca1\u6709\u539f\u578b"},"\u6ca1\u6709\u539f\u578b"),(0,l.kt)("p",null,"\u6ca1\u6709",(0,l.kt)("inlineCode",{parentName:"p"},"prototype"),", \u4f46\u662f\u6709",(0,l.kt)("inlineCode",{parentName:"p"},"__proto__"),"\u6307\u5411function\u3002"),(0,l.kt)("h3",{id:"\u6ca1\u6709super\u4e5f\u662f\u901a\u8fc7\u5305\u5728\u5b83\u5916\u9762\u7684\u975e\u7bad\u5934\u51fd\u6570\u6765\u51b3\u5b9a\u7684"},"\u6ca1\u6709super\uff0c\u4e5f\u662f\u901a\u8fc7\u5305\u5728\u5b83\u5916\u9762\u7684\u975e\u7bad\u5934\u51fd\u6570\u6765\u51b3\u5b9a\u7684\u3002"))}d.isMDXComponent=!0}}]);
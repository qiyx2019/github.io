"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3449],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),k=a,y=m["".concat(i,".").concat(k)]||m[k]||u[k]||o;return n?r.createElement(y,l(l({ref:t},c),{},{components:n})):r.createElement(y,l({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4916:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],p={sidebar_position:1,title:"proxy\u4e0ereflect"},i=void 0,s={unversionedId:"base/proxy\u4e0ereflect",id:"base/proxy\u4e0ereflect",title:"proxy\u4e0ereflect",description:"Proxy\u5b57\u9762\u4e0a\u662f\u4ee3\u7406\u7684\u610f\u601d",source:"@site/docs/base/proxy\u4e0ereflect.md",sourceDirName:"base",slug:"/base/proxy\u4e0ereflect",permalink:"/blog/docs/base/proxy\u4e0ereflect",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"proxy\u4e0ereflect"},sidebar:"base",previous:{title:"JS\u7ee7\u627f\u65b9\u5f0f",permalink:"/blog/docs/base/prototype"}},c=[{value:"\u8bd5\u4e00\u8bd5\ud83c\udf30",id:"\u8bd5\u4e00\u8bd5",children:[],level:3}],u={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Proxy"),"\u5b57\u9762\u4e0a\u662f\u4ee3\u7406\u7684\u610f\u601d\n\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"typeof"),"\u6765\u68c0\u6d4b\u4e00\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"console.log(typeof Proxy)\n")),(0,o.kt)("p",null,"\u5f97\u77e5",(0,o.kt)("inlineCode",{parentName:"p"},"Proxy"),"\u662f\u5b9a\u4e49\u5728window\u4e0a\u7684\u5168\u5c40\u53d8\u91cf\uff0c\u7c7b\u578bfunction,\u5e76\u4e14\u9996\u5b57\u6bcd\u5927\u5199\uff0c\u6211\u4eec\u53ef\u4ee5\u731c\u51fa\u5b83\u662f\u4e00\u4e2a\u6784\u9020\u51fd\u6570\u6216\u8005\u8bf4\u662f\u4e00\u4e2a\u7c7b,\u90a3\u672c\u8eab\u53ef\u4ee5\u6267\u884c\u5417"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let res = Proxy()\n")),(0,o.kt)("p",null,"\u4ee5\u4e0a\u4ee3\u7801\u4f1a\u62a5\u9519\uff1aUncaught TypeError: Constructor Proxy requires 'new',\u539f\u6765\u4f7f\u7528Proxy()\u6267\u884c\uff0c\u9700\u8981\u914d\u5408new,\u90a3\u6211\u4eec\u6765new\u4e00\u4e2aProxy\u5b50\u7c7b\u5bf9\u8c61"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let p = new Proxy()\n")),(0,o.kt)("p",null,"\u4ee5\u4e0a\u4ee3\u7801\u6267\u884c\u4e5f\u4f1a\u629b\u51fa\u9519\u8bef\uff1aUncaught TypeError: Cannot create proxy with a non-object as target or handler,\u610f\u601d\u662f\u521b\u5efaproxy\u5bf9\u8c61\u65f6\uff0c\u4e0d\u80fd\u4f7f\u7528\u4e0d\u662f\u5bf9\u8c61\u7684\u4e1c\u897f\u4f5c\u4e3atarget\u6216\u8005handler\u4f20\u5165"),(0,o.kt)("p",null,"\u8fd9\u91cc\u4f53\u73b0\u4e24\u4e2a\u91cd\u8981\u4fe1\u606f\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Proxy\u5728\u6784\u9020\u5bf9\u8c61\u65f6\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"target"),"\u548c",(0,o.kt)("inlineCode",{parentName:"li"},"handler")),(0,o.kt)("li",{parentName:"ol"},"\u4e24\u4e2a\u53c2\u6570\u7684\u7c7b\u578b\u5fc5\u987b\u662f",(0,o.kt)("inlineCode",{parentName:"li"},"object"))),(0,o.kt)("p",null,"\u90a3\u95ee\u9898\u6765\u4e86\uff0c\u8fd9\u4e24\u4e2a\u53c2\u6570target\u548chandler\u5206\u522b\u8868\u793a\u4ec0\u4e48\u5462\n\u5728\u6700\u5f00\u59cb\uff0c\u6211\u8bf4\u8fc7Proxy\u7684\u672c\u610f\u662f\u4ee3\u7406\u610f\u601d\uff0c\u8868\u793a\u7531\u5b83\u6765\u201c\u4ee3\u7406\u201d\u67d0\u4e9b\u64cd\u4f5c\uff1b\u7f51\u4e0a\u8fd8\u6709\u53e6\u5916\u4e00\u4e2a\u66f4\u6070\u5f53\u7684\u7406\u89e3\uff0c\u5c31\u662f\uff1a"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u53ef\u4ee5\u5c06Proxy\u7406\u89e3\u6210\u201c\u62e6\u622a\u201d\uff0c\u5728\u76ee\u6807\u5bf9\u8c61\u4e4b\u524d\u67b6\u8bbe\u4e00\u5c42\u201c\u62e6\u622a\u201d\uff0c\u5f53\u5916\u754c\u5bf9\u8be5\u5bf9\u8c61\u7684\u8bbf\u95ee\uff0c\u90fd\u5fc5\u987b\u5148\u901a\u8fc7\u8fd9\u5c42\u62e6\u622a\uff0c\u6b63\u56e0\u4e3a\u6709\u4e86\u4e00\u79cd\u62e6\u622a\u673a\u5236\uff0c\u5f53\u5916\u754c\u7684\u8bbf\u95ee\u6211\u4eec\u53ef\u4ee5\u5bf9\u8fdb\u884c\u4e00\u4e9b\u64cd\u4f5c\uff08\u8fc7\u6ee4\u6216\u6539\u5199\uff09")),(0,o.kt)("p",null,"\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u5f88\u597d\u7684\u7406\u89e3\uff0ctarget\u8868\u793a\u7684\u5c31\u662f\u8981\u62e6\u622a\uff08\u4ee3\u7406\uff09\u7684\u76ee\u6807\u5bf9\u8c61\uff1b\u800chandler\u662f\u7528\u6765\u5b9a\u5236\u62e6\u622a\u884c\u4e3a"),(0,o.kt)("p",null,"target\u5f88\u5bb9\u6613\u7406\u89e3\uff0c\u5173\u952e\u5c31\u5728handler\u91cc\u5934\u5230\u5e95\u53ef\u4ee5\u586b\u4ec0\u4e48\u5462\uff1f\u5206\u522b\u7528\u4e8e\u62e6\u622a\u4ec0\u4e48\u64cd\u4f5c\u5462\uff1f\n\u8981\u60f3\u660e\u767d\u8fd9\u70b9\uff0c\u5c31\u5f97\u56de\u987e\u6211\u4eec\u4e4b\u524d\u600e\u4e48\u64cd\u4f5c\u5bf9\u8c61"),(0,o.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let obj = {\n    name: 'alice',\n    showName() {\n        console.log(`my name is ${this.name}`)\n    }\n}\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u83b7\u53d6\u5bf9\u8c61\u5c5e\u6027")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"console.log(obj.name)//alice\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u7ed9\u5bf9\u8c61\u6dfb\u52a0\u5c5e\u6027")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"obj.age = 12;\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"\u5224\u65ad\u5c5e\u6027\u662f\u5426\u5728\u5bf9\u8c61\u4e2d")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"console.log('age' in obj)//true\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"\u5220\u9664\u5bf9\u8c61\u5c5e\u6027")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"delete obj.age\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u5404\u79cd\u65b9\u6cd5\u904d\u5386\u5bf9\u8c61\u7684\u6240\u6709\u5c5e\u6027")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'console.log(Object.getOwnPropertyNames(obj));//["name", "showName"]\nconsole.log(Object.getOwnPropertySymbols(obj));//[]\nconsole.log(Object.keys(obj))//["name", "showName"]\nfor (let key in obj){\n    console.log(key)\n}//\u5206\u522b\u6253\u5370name showName\n')),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"\u83b7\u53d6\u5bf9\u8c61\u7684\u67d0\u4e2a\u5c5e\u6027\u7684\u63cf\u8ff0\u5bf9\u8c61")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let d = Object.getOwnPropertyDescriptor(obj,'name')\nconsole.log(d)\n//{value: \"alice\", writable: true, enumerable: true, configurable: true}\n")),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},"\u4f7f\u7528Object\u8eab\u4e0a\u7684\u65b9\u6cd5\uff0c\u4e3a\u67d0\u4e2a\u5bf9\u8c61\u6dfb\u52a0\u4e00\u4e2a\u6216\u591a\u4e2a\u5c5e\u6027")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"Object.defineProperty(obj,'age',{           \n    value:12,\n    writable:true,\n    enumerable:true,\n    configurable:true\n})\nObject.defineProperties(obj,{\n    showAge:{\n        value:function(){console.log(`\u6211\u4eca\u5e74${this.age}\u5c81\u4e86`)},\n        writable:true,\n        enumerable:true,\n        configurable:true,\n    },\n    showInfo:{\n        value:function(){console.log(`\u6211\u53eb${this.name},\u6211\u4eca\u5e74${this.age}\u5c81\u4e86`)},\n        writable:true,\n        enumerable:true,\n        configurable:true,\n    }   \n})\n")),(0,o.kt)("ol",{start:8},(0,o.kt)("li",{parentName:"ol"},"\u83b7\u53d6\u4e00\u4e2a\u5bf9\u8c61\u7684\u539f\u578b\u5bf9\u8c61")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"Object.getPrototypeOf(obj)      \nconsole.log(Object.getPrototypeOf(obj) === obj.__proto__)//true\n")),(0,o.kt)("ol",{start:9},(0,o.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e\u67d0\u4e2a\u5bf9\u8c61\u7684\u539f\u578b\u5c5e\u6027\u5bf9\u8c61")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"Object.setPrototypeOf(obj,null);\n//\u8868\u793a\u8bbe\u7f6e\u5bf9\u8c61\u7684\u539f\u578b\u4e3anull\uff0c\u4e5f\u53ef\u4ee5\u4f20\u5165\u5176\u4ed6\u5bf9\u8c61\u4f5c\u4e3a\u5176\u539f\u578b\n")),(0,o.kt)("ol",{start:10},(0,o.kt)("li",{parentName:"ol"},"\u8ba9\u4e00\u4e2a\u5bf9\u8c61\u53d8\u5f97\u4e0d\u53ef\u6269\u5c55\uff0c\u5373\u4e0d\u80fd\u6dfb\u52a0\u65b0\u7684\u5c5e\u6027")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"Object.preventExtensions(obj)\n")),(0,o.kt)("ol",{start:11},(0,o.kt)("li",{parentName:"ol"},"\u67e5\u770b\u4e00\u4e2a\u5bf9\u8c61\u662f\u4e0d\u662f\u53ef\u6269\u5c55\u7684")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"console.log(Object.isExtensible(obj));//false\uff0c\u56e0\u4e3a\u4e0a\u9762\u8bbe\u7f6e\u4e86\u8be5\u5bf9\u8c61\u4e3a\u4e0d\u53ef\u6269\u5c55\u5bf9\u8c61\n")),(0,o.kt)("ol",{start:12},(0,o.kt)("li",{parentName:"ol"},"\u5982\u679c\u5bf9\u8c61\u4e3afunction\u7c7b\u578b\uff0cfunction\u7c7b\u578b\u7684\u5bf9\u8c61\u53ef\u4ee5\u6267\u884c\u88ab\u6267\u884c\u7b26\u53f7()\u4ee5\u53ca.call()\u548c.apply()\u6267\u884c")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function fn(...args){\n    console.log(this,args) \n}\nfn(1,2,3);\nfn.call(obj,1,2,3);\nfn.apply(obj,[1,2,3]);\n")),(0,o.kt)("ol",{start:13},(0,o.kt)("li",{parentName:"ol"},"\u5982\u679c\u5bf9\u8c61\u65f6\u4f5c\u4e3a\u6784\u9020\u51fd\u6570\u65f6\uff0c\u5219\u8be5\u5bf9\u8c61\u53ef\u4ee5\u7528new\u751f\u6210\u51fa\u65b0\u7684\u5bf9\u8c61")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function Person(){}\nlet p1 = new Person();\n")),(0,o.kt)("p",null,"\u4ee5\u4e0a\u90fd\u662f\u5bf9\u5bf9\u8c61\u7684\u4e00\u4e9b\u64cd\u4f5c\uff01"),(0,o.kt)("p",null,"\u90a3\u56de\u5230\u6211\u4eec\u5f97new Proxy(target,handler)\u4e2d\u7684handler\uff0c\u6211\u4eec\u4e4b\u524d\u8bf4\u4e86\uff0chandler\u662f\u7528\u4e8e\u8bbe\u7f6e\u62e6\u622a\u884c\u4e3a\u7684\uff0c\u5176\u5b9e\u62e6\u622a\u7684\u5185\u5bb9\u5c31\u662f\u4e0a\u9762\u8fd9\u4e00\u7cfb\u5217\u7684\u5bf9\u8c61\u64cd\u4f5c\uff0c\u5f53\u5bf9\u8c61\u6267\u884c\u67d0\u4e2a\u64cd\u4f5c\u65f6\uff0c\u5c31\u4f1a\u89e6\u53d1handler\u91cc\u9762\u5b9a\u4e49\u7684\u4e1c\u897f"),(0,o.kt)("p",null,"\u901a\u8fc7Proxy\u53ef\u4ee5\u62e6\u622a\u5230\u88ab\u4ee3\u7406\u7684\u5bf9\u8c61\u6267\u884c\u7684\u76f8\u5173\u64cd\u4f5c\uff1b\u5f53\u88ab\u4ee3\u7406\u5bf9\u8c61\u6267\u884c\u67d0\u4e2a\u64cd\u4f5c\u65f6\uff0c\u90a3\u4e48\u5b83\u4f1a\u6267\u884c\u8be5\u64cd\u4f5c\u6240\u5bf9\u5e94\u7684handler\u91cc\u9762\u7684\u51fd\u6570\uff0c\u6709\u70b9\u50cf\u6211\u4ee3\u7406\u4f60\u53bb\u505a\u4e8b\u60c5\uff0c\u8fd9\u4e5f\u662f\u88ab\u53eb\u505aProxy\u7684\u672c\u610f"),(0,o.kt)("p",null,"\u4e0b\u9762\u6765\u770b\u5177\u4f53handler\u5bf9\u8c61\u53ef\u4ee5\u8bbe\u7f6e\u54ea\u4e9b\u53c2\u6570\uff0c\u5206\u522b\u62e6\u622a\u88ab\u4ee3\u7406\u5bf9\u8c61\u7684\u54ea\u4e9b\u64cd\u4f5c"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"get(target, propKey, receiver)\nget\u65b9\u6cd5\u7528\u4e8e\u62e6\u622a\u67d0\u4e2a\u5c5e\u6027\u7684\u8bfb\u53d6\u64cd\u4f5c\uff0c\u6bd4\u5982proxy.foo\u548cproxy","['foo']")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'var person = {\n  name: "Alice"\n};\nvar proxy = new Proxy(person, {\n  get: function(target, propKey) {\n    if (propKey in target) {\n      return target[propKey];\n    } else {\n      throw new ReferenceError(`Prop name ${propKey} does not exist.`);\n    }\n  }\n});\nproxy.name // "Alice"\nproxy.age // \u629b\u51fa\u9519\u8bef:Uncaught ReferenceError: Prop name age does not exist.\n')),(0,o.kt)("p",null,"\u5982\u679c\u6ca1\u6709\u8fd9\u4e2a\u62e6\u622a\u51fd\u6570\uff0c\u8bbf\u95ee\u4e0d\u5b58\u5728\u7684\u5c5e\u6027\uff0c\u53ea\u4f1a\u8fd4\u56deundefined\uff0c\u8fd9\u91cc\u662f\u56e0\u4e3a\u88ab\u4ee3\u7406\u4e86\uff0c\u5982\u679c\u4e0d\u5b58\u5728\u6211\u5c31\u629b\u51fa\u9519\u8bef"),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"set(target, propKey, value, receiver)"),(0,o.kt)("br",{parentName:"li"}),"\u62e6\u622a\u5bf9\u8c61\u5c5e\u6027\u7684\u8bbe\u7f6e\uff0c\u6bd4\u5982proxy.foo = v\u6216proxy","['foo']"," = v\uff0c\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\u3002\n3.",(0,o.kt)("inlineCode",{parentName:"li"}," has(target, propKey)"),(0,o.kt)("br",{parentName:"li"}),"\u62e6\u622apropKey in proxy\u7684\u64cd\u4f5c\uff0c\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\u3002  "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"deleteProperty(target, propKey)"),(0,o.kt)("br",{parentName:"li"}),"\u62e6\u622adelete proxy","[propKey]","\u7684\u64cd\u4f5c\uff0c\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\u3002 "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"ownKeys(target)"),(0,o.kt)("br",{parentName:"li"}),"\u62e6\u622aObject.getOwnPropertyNames(proxy)\u3001Object.getOwnPropertySymbols(proxy)\u3001Object.keys(proxy)\u3001for...in\u5faa\u73af\uff0c\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\u3002  "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"getOwnPropertyDescriptor(target, propKey)"),(0,o.kt)("br",{parentName:"li"}),"\u62e6\u622aObject.getOwnPropertyDescriptor(proxy, propKey)\uff0c\u8fd4\u56de\u5c5e\u6027\u7684\u63cf\u8ff0\u5bf9\u8c61\u3002 "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"defineProperty(target, propKey, propDesc)"),(0,o.kt)("br",{parentName:"li"}),"\u62e6\u622aObject.defineProperty(proxy, propKey, propDesc\uff09\u3001Object.defineProperties(proxy, propDescs)\uff0c\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\u3002   "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"preventExtensions(target)"),(0,o.kt)("br",{parentName:"li"}),"\u62e6\u622aObject.preventExtensions(proxy)\uff0c\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\u3002   "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"getPrototypeOf(target)"),(0,o.kt)("br",{parentName:"li"}),"\u62e6\u622aObject.getPrototypeOf(proxy)\uff0c\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61\u3002  "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"isExtensible(target)"),(0,o.kt)("br",{parentName:"li"}),"\u62e6\u622aObject.isExtensible(proxy)\uff0c\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\u3002    "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"setPrototypeOf(target, proto)"),(0,o.kt)("br",{parentName:"li"}),"\u62e6\u622aObject.setPrototypeOf(proxy, proto)\uff0c\u8fd4\u56de\u4e00\u4e2a\u5e03\u5c14\u503c\u3002\u5982\u679c\u76ee\u6807\u5bf9\u8c61\u662f\u51fd\u6570\uff0c\u90a3\u4e48\u8fd8\u6709\u4e24\u79cd\u989d\u5916\u64cd\u4f5c\u53ef\u4ee5\u62e6\u622a\u3002    "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"apply(target, object, args)"),(0,o.kt)("br",{parentName:"li"}),"\u62e6\u622aProxy \u5b9e\u4f8b\u4f5c\u4e3a\u51fd\u6570\u8c03\u7528\u7684\u64cd\u4f5c\uff0c\u6bd4\u5982proxy(...args)\u3001proxy.call(object, ...args)\u3001proxy.apply(...)\u3002 "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"construct(target, args)"),(0,o.kt)("br",{parentName:"li"}),"\u62e6\u622aProxy \u5b9e\u4f8b\u4f5c\u4e3a\u6784\u9020\u51fd\u6570\u8c03\u7528\u7684\u64cd\u4f5c\uff0c\u6bd4\u5982new proxy(...args)\u3002  ")),(0,o.kt)("h3",{id:"\u8bd5\u4e00\u8bd5"},"\u8bd5\u4e00\u8bd5\ud83c\udf30"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function App() {\n  ////////////////////////////////proxy\n  let users = {\n    name:'John',\n    _password: '123'\n  }\n  users = new Proxy(users,{\n    get(target,key) {\n      if(key.startsWith('_')){\n        throw new Error('access defined')\n      }\n      let value = target[key]\n      return typeof value === 'function'?value.bind(target):value\n    },\n    set(target,key,value) {\n      if(key.startsWith('_')) {\n        throw new Error('access defined')\n      } else {\n        target[key] = value;\n        return true;\n      }\n    },\n    deleteProperty(target,key) {\n      if(key.startsWith('_')) {\n        throw new Error('access defined')\n      } else {\n        delete target[key];\n        return true;\n      }\n    },\n    ownKeys(target) {\n      return Object.keys(target).filter(key => !key.startsWith('_'))\n    }\n  })\n  return <div>\n    <button onClick={()=> alert(users.name)}>name</button>\n    <button onClick={()=> alert(users._password)}>_password</button>\n  </div>\n}\n")))}m.isMDXComponent=!0}}]);
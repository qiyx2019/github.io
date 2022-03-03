"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2229],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,v=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(v,i(i({ref:t},p),{},{components:r})):n.createElement(v,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7655:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={},l="partition",c={unversionedId:"rx/transformation/partition",id:"rx/transformation/partition",title:"partition",description:"\u51fd\u6570\u7b7e\u540d function any): [Observable, Observable]",source:"@site/docs/rx/transformation/partition.md",sourceDirName:"rx/transformation",slug:"/rx/transformation/partition",permalink:"/blog/docs/rx/transformation/partition",tags:[],version:"current",frontMatter:{},sidebar:"rx",previous:{title:"mergeMap",permalink:"/blog/docs/rx/transformation/mergemap"},next:{title:"pluck",permalink:"/blog/docs/rx/transformation/pluck"}},p=[{value:"\u51fd\u6570\u7b7e\u540d: <code>partition(predicate: function: boolean, thisArg: any): [Observable, Observable]</code>",id:"\u51fd\u6570\u7b7e\u540d-partitionpredicate-function-boolean-thisarg-any-observable-observable",children:[],level:4},{value:"Split one observable into two based on provided predicate.",id:"split-one-observable-into-two-based-on-provided-predicate",children:[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"\u793a\u4f8b 1: \u5206\u5272\u5076\u6570\u548c\u5947\u6570",id:"\u793a\u4f8b-1-\u5206\u5272\u5076\u6570\u548c\u5947\u6570",children:[],level:5},{value:"\u793a\u4f8b 2: \u5206\u5272\u6b63\u5e38\u6267\u884c\u548c\u9519\u8bef",id:"\u793a\u4f8b-2-\u5206\u5272\u6b63\u5e38\u6267\u884c\u548c\u9519\u8bef",children:[],level:5}],level:3},{value:"\u5176\u4ed6\u8d44\u6e90",id:"\u5176\u4ed6\u8d44\u6e90",children:[],level:3}],level:2}],u={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"partition"},"partition"),(0,a.kt)("h4",{id:"\u51fd\u6570\u7b7e\u540d-partitionpredicate-function-boolean-thisarg-any-observable-observable"},"\u51fd\u6570\u7b7e\u540d: ",(0,a.kt)("inlineCode",{parentName:"h4"},"partition(predicate: function: boolean, thisArg: any): [Observable, Observable]")),(0,a.kt)("h2",{id:"split-one-observable-into-two-based-on-provided-predicate"},"Split one observable into two based on provided predicate."),(0,a.kt)("div",{class:"ua-ad"}," "),(0,a.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("h5",{id:"\u793a\u4f8b-1-\u5206\u5272\u5076\u6570\u548c\u5947\u6570"},"\u793a\u4f8b 1: \u5206\u5272\u5076\u6570\u548c\u5947\u6570"),(0,a.kt)("p",null,"(\n",(0,a.kt)("a",{parentName:"p",href:"https://stackblitz.com/edit/typescript-gr3ljs?file=index.ts&devtoolsheight=100"},"StackBlitz"),"\n| ",(0,a.kt)("a",{parentName:"p",href:"http://jsbin.com/hipehexaku/1/edit?js,console"},"jsBin")," |\n",(0,a.kt)("a",{parentName:"p",href:"https://jsfiddle.net/btroncone/q0xo7gvv/"},"jsFiddle")," )"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// RxJS v6+\nimport { from, merge } from \'rxjs\';\nimport { partition, map } from \'rxjs/operators\';\n\nconst source = from([1, 2, 3, 4, 5, 6]);\n// \u7b2c\u4e00\u4e2a\u503c(events)\u8fd4\u56de true \u7684\u6570\u5b57\u96c6\u5408\uff0c\u7b2c\u4e8c\u4e2a\u503c(odds)\u662f\u8fd4\u56de false \u7684\u6570\u5b57\u96c6\u5408\nconst [evens, odds] = source.pipe(partition(val => val % 2 === 0));\n/*\n  \u8f93\u51fa:\n  "Even: 2"\n  "Even: 4"\n  "Even: 6"\n  "Odd: 1"\n  "Odd: 3"\n  "Odd: 5"\n*/\nconst subscribe = merge(\n  evens.pipe(map(val => `Even: ${val}`)),\n  odds.pipe(map(val => `Odd: ${val}`))\n).subscribe(val => console.log(val));\n')),(0,a.kt)("h5",{id:"\u793a\u4f8b-2-\u5206\u5272\u6b63\u5e38\u6267\u884c\u548c\u9519\u8bef"},"\u793a\u4f8b 2: \u5206\u5272\u6b63\u5e38\u6267\u884c\u548c\u9519\u8bef"),(0,a.kt)("p",null,"(\n",(0,a.kt)("a",{parentName:"p",href:"https://stackblitz.com/edit/typescript-vmfvp8?file=index.ts&devtoolsheight=100"},"StackBlitz"),"\n| ",(0,a.kt)("a",{parentName:"p",href:"http://jsbin.com/kukuguhuri/1/edit?js,console"},"jsBin")," |\n",(0,a.kt)("a",{parentName:"p",href:"https://jsfiddle.net/btroncone/fe246u5p/"},"jsFiddle")," )"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// RxJS v6+\nimport { merge, of, from } from \'rxjs\';\nimport { map, partition, catchError } from \'rxjs/operators\';\n\nconst source = from([1, 2, 3, 4, 5, 6]);\n// \u5982\u679c\u5927\u4e8e3\u5c31\u629b\u51fa\u9519\u8bef\nconst example = source.pipe(\n  map(val => {\n    if (val > 3) {\n      throw `${val} greater than 3!`;\n    }\n    return { success: val };\n  }),\n  catchError(val => of({ error: val }))\n);\n// \u5206\u5272\u6b63\u5e38\u6267\u884c\u6216\u9519\u8bef\nconst [success, error] = example.pipe(partition(res => res.success));\n/*\n  \u8f93\u51fa:\n  "Success! 1"\n  "Success! 2"\n  "Success! 3"\n  "Error! 4 greater than 3!"\n*/\nconst subscribe = merge(\n  success.pipe(map(val => `Success! ${val.success}`)),\n  error.pipe(map(val => `Error! ${val.error}`))\n).subscribe(val => console.log(val));\n')),(0,a.kt)("h3",{id:"\u5176\u4ed6\u8d44\u6e90"},"\u5176\u4ed6\u8d44\u6e90"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cn.rx.js.org/class/es6/Observable.js~Observable.html#instance-method-partition"},"partition")," \ud83d\udcf0 - \u5b98\u65b9\u6587\u6863")),(0,a.kt)("hr",null),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\ud83d\udcc1 \u6e90\u7801:  ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/partition.ts"},"https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/partition.ts"))))}d.isMDXComponent=!0}}]);
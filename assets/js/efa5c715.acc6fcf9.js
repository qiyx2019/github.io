"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9614],{3905:function(e,r,t){t.d(r,{Zo:function(){return m},kt:function(){return b}});var n=t(7294);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,l=function(e,r){if(null==e)return{};var t,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},m=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=c(t),b=l,d=u["".concat(s,".").concat(b)]||u[b]||p[b]||a;return t?n.createElement(d,o(o({ref:r},m),{},{components:t})):n.createElement(d,o({ref:r},m))}));function b(e,r){var t=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=u;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var c=2;c<a;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9734:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return m},default:function(){return u}});var n=t(7462),l=t(3366),a=(t(7294),t(3905)),o=["components"],i={},s="mergeAll",c={unversionedId:"rx/combination/mergeall",id:"rx/combination/mergeall",title:"mergeAll",description:"\u51fd\u6570\u7b7e\u540d number): Observable",source:"@site/docs/rx/combination/mergeall.md",sourceDirName:"rx/combination",slug:"/rx/combination/mergeall",permalink:"/blog/docs/rx/combination/mergeall",tags:[],version:"current",frontMatter:{},sidebar:"rx",previous:{title:"merge",permalink:"/blog/docs/rx/combination/merge"},next:{title:"pairwise",permalink:"/blog/docs/rx/combination/pairwise"}},m=[{value:"\u51fd\u6570\u7b7e\u540d: <code>mergeAll(concurrent: number): Observable</code>",id:"\u51fd\u6570\u7b7e\u540d-mergeallconcurrent-number-observable",children:[],level:4},{value:"\u6536\u96c6\u5e76\u8ba2\u9605\u6240\u6709\u7684 observables \u3002",id:"\u6536\u96c6\u5e76\u8ba2\u9605\u6240\u6709\u7684-observables-",children:[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"\u793a\u4f8b 1: \u4f7f\u7528 promise \u6765\u8fdb\u884c concatAll",id:"\u793a\u4f8b-1-\u4f7f\u7528-promise-\u6765\u8fdb\u884c-concatall",children:[],level:5},{value:"\u793a\u4f8b 2: \u4f7f\u7528<strong>\u5e76\u53d1\u7684</strong>\u53c2\u6570\u6765\u8fdb\u884c mergeAll",id:"\u793a\u4f8b-2-\u4f7f\u7528\u5e76\u53d1\u7684\u53c2\u6570\u6765\u8fdb\u884c-mergeall",children:[],level:5}],level:3},{value:"\u5176\u4ed6\u8d44\u6e90",id:"\u5176\u4ed6\u8d44\u6e90",children:[],level:3}],level:2}],p={toc:m};function u(e){var r=e.components,t=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mergeall"},"mergeAll"),(0,a.kt)("h4",{id:"\u51fd\u6570\u7b7e\u540d-mergeallconcurrent-number-observable"},"\u51fd\u6570\u7b7e\u540d: ",(0,a.kt)("inlineCode",{parentName:"h4"},"mergeAll(concurrent: number): Observable")),(0,a.kt)("h2",{id:"\u6536\u96c6\u5e76\u8ba2\u9605\u6240\u6709\u7684-observables-"},"\u6536\u96c6\u5e76\u8ba2\u9605\u6240\u6709\u7684 observables \u3002"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\ud83d\udca1  \u5728\u5f88\u591a\u60c5\u51b5\u4e0b\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u53ea\u4f7f\u7528\u5355\u4e2a\u64cd\u4f5c\u7b26 ",(0,a.kt)("a",{parentName:"p",href:"/blog/docs/rx/transformation/mergemap"},"mergeMap")," \u6765\u66ff\u4ee3\uff01"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8bd1\u8005\u6ce8\uff1amergeMap === map + mergeAll")),(0,a.kt)("hr",null),(0,a.kt)("div",{class:"ua-ad"}," "),(0,a.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("h5",{id:"\u793a\u4f8b-1-\u4f7f\u7528-promise-\u6765\u8fdb\u884c-concatall"},"\u793a\u4f8b 1: \u4f7f\u7528 promise \u6765\u8fdb\u884c concatAll"),(0,a.kt)("p",null,"(\n",(0,a.kt)("a",{parentName:"p",href:"https://stackblitz.com/edit/typescript-y4ncvc?file=index.ts&devtoolsheight=100"},"StackBlitz"),"\n| ",(0,a.kt)("a",{parentName:"p",href:"http://jsbin.com/worecuhiba/1/edit?js,console"},"jsBin")," |\n",(0,a.kt)("a",{parentName:"p",href:"https://jsfiddle.net/btroncone/0sc4nsxa/"},"jsFiddle")," )"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'// RxJS v6+\nimport { map, mergeAll } from \'rxjs/operators\';\nimport { of } from \'rxjs\';\n\nconst myPromise = val =>\n  new Promise(resolve => setTimeout(() => resolve(`Result: ${val}`), 2000));\n// \u53d1\u51fa 1,2,3\nconst source = of(1, 2, 3);\n\nconst example = source.pipe(\n  // \u5c06\u6bcf\u4e2a\u503c\u6620\u5c04\u6210 promise\n  map(val => myPromise(val)),\n  // \u53d1\u51fa source \u7684\u7ed3\u679c\n  mergeAll()\n);\n\n/*\n  \u8f93\u51fa:\n  "Result: 1"\n  "Result: 2"\n  "Result: 3"\n*/\nconst subscribe = example.subscribe(val => console.log(val));\n')),(0,a.kt)("h5",{id:"\u793a\u4f8b-2-\u4f7f\u7528\u5e76\u53d1\u7684\u53c2\u6570\u6765\u8fdb\u884c-mergeall"},"\u793a\u4f8b 2: \u4f7f\u7528",(0,a.kt)("strong",{parentName:"h5"},"\u5e76\u53d1\u7684"),"\u53c2\u6570\u6765\u8fdb\u884c mergeAll"),(0,a.kt)("p",null,"(\n",(0,a.kt)("a",{parentName:"p",href:"https://stackblitz.com/edit/typescript-xpaqjh?file=index.ts&devtoolsheight=100"},"StackBlitz"),"\n| ",(0,a.kt)("a",{parentName:"p",href:"https://jsfiddle.net/zra3zxhs/"},"jsFiddle")," )"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// RxJS v6+\nimport { take, map, delay, mergeAll } from 'rxjs/operators';\nimport { interval } from 'rxjs';\n\nconst source = interval(500).pipe(take(5));\n\n/*\n  interval \u6bcf0.5\u79d2\u53d1\u51fa\u4e00\u4e2a\u503c\u3002\u8fd9\u4e2a\u503c\u4f1a\u88ab\u6620\u5c04\u6210\u5ef6\u8fdf1\u79d2\u7684 interval \u3002mergeAll \u64cd\u4f5c\u7b26\u63a5\u6536\u4e00\u4e2a\u53ef\u9009\u53c2\u6570\n  \u4ee5\u51b3\u5b9a\u5728\u540c\u4e00\u65f6\u95f4\u6709\u591a\u5c11\u4e2a\u5185\u90e8 observables \u53ef\u4ee5\u88ab\u8ba2\u9605\u3002\u5176\u4f59\u7684 observables \u4f1a\u5148\u6682\u5b58\u4ee5\u7b49\u5f85\u8ba2\u9605\u3002\n*/\nconst example = source\n  .pipe(\n    map(val =>\n      source.pipe(\n        delay(1000),\n        take(3)\n      )\n    ),\n    mergeAll(2)\n  )\n  .subscribe(val => console.log(val));\n/*\n  \u4e00\u65e6\u64cd\u4f5c\u7b26\u53d1\u51fa\u4e86\u6240\u6709\u503c\uff0c\u5219 subscription \u5b8c\u6210\u3002\n*/\n")),(0,a.kt)("h3",{id:"\u5176\u4ed6\u8d44\u6e90"},"\u5176\u4ed6\u8d44\u6e90"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cn.rx.js.org/class/es6/Observable.js~Observable.html#instance-method-mergeAll"},"mergeAll")," \ud83d\udcf0 - \u5b98\u65b9\u6587\u6863"),(0,a.kt)("li",{parentName:"ul"},"[",(0,a.kt)("a",{parentName:"li",href:"https://egghead.io/lessons/rxjs-flatten-a-higher-order-observable-with-mergeall-in-rxjs?course=use-higher-order-observables-in-rxjs-effectively"},"\u4f7f\u7528 RxJS \u7684 mergeAll \u6765\u6253\u5e73\u9ad8\u9636 observable")," \ud83d\udcf9 \ud83d\udcb5 - Andr\xe9 Staltz")),(0,a.kt)("hr",null),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\ud83d\udcc1 \u6e90\u7801:  ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/mergeAll.ts"},"https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/mergeAll.ts"))))}u.isMDXComponent=!0}}]);
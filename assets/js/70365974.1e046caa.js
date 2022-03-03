"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[573],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},704:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=r(7462),o=r(3366),l=(r(7294),r(3905)),a=["components"],i={},s="throttle",c={unversionedId:"rx/filtering/throttle",id:"rx/filtering/throttle",title:"throttle",description:"\u51fd\u6570\u7b7e\u540d function(value) Observable",source:"@site/docs/rx/filtering/throttle.md",sourceDirName:"rx/filtering",slug:"/rx/filtering/throttle",permalink:"/blog/docs/rx/filtering/throttle",tags:[],version:"current",frontMatter:{},sidebar:"rx",previous:{title:"takeWhile",permalink:"/blog/docs/rx/filtering/takewhile"},next:{title:"throttleTime",permalink:"/blog/docs/rx/filtering/throttletime"}},p=[{value:"\u51fd\u6570\u7b7e\u540d: <code>throttle(durationSelector: function(value): Observable | Promise): Observable</code>",id:"\u51fd\u6570\u7b7e\u540d-throttledurationselector-functionvalue-observable--promise-observable",children:[],level:4},{value:"\u4ee5\u67d0\u4e2a\u65f6\u95f4\u95f4\u9694\u4e3a\u9608\u503c\uff0c\u5728 <code>durationSelector</code> \u5b8c\u6210\u524d\u5c06\u6291\u5236\u65b0\u503c\u7684\u53d1\u51fa",id:"\u4ee5\u67d0\u4e2a\u65f6\u95f4\u95f4\u9694\u4e3a\u9608\u503c\u5728-durationselector-\u5b8c\u6210\u524d\u5c06\u6291\u5236\u65b0\u503c\u7684\u53d1\u51fa",children:[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"\u793a\u4f8b 1: \u8282\u6d412\u79d2\uff0c\u65f6\u95f4\u7531\u7b2c2\u4e2a observable \u51b3\u5b9a",id:"\u793a\u4f8b-1-\u8282\u6d412\u79d2\u65f6\u95f4\u7531\u7b2c2\u4e2a-observable-\u51b3\u5b9a",children:[],level:5},{value:"\u793a\u4f8b 2: \u4f7f\u7528 promise \u8fdb\u884c\u8282\u6d41",id:"\u793a\u4f8b-2-\u4f7f\u7528-promise-\u8fdb\u884c\u8282\u6d41",children:[],level:5}],level:3},{value:"\u5176\u4ed6\u8d44\u6e90",id:"\u5176\u4ed6\u8d44\u6e90",children:[],level:3}],level:2}],u={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"throttle"},"throttle"),(0,l.kt)("h4",{id:"\u51fd\u6570\u7b7e\u540d-throttledurationselector-functionvalue-observable--promise-observable"},"\u51fd\u6570\u7b7e\u540d: ",(0,l.kt)("inlineCode",{parentName:"h4"},"throttle(durationSelector: function(value): Observable | Promise): Observable")),(0,l.kt)("h2",{id:"\u4ee5\u67d0\u4e2a\u65f6\u95f4\u95f4\u9694\u4e3a\u9608\u503c\u5728-durationselector-\u5b8c\u6210\u524d\u5c06\u6291\u5236\u65b0\u503c\u7684\u53d1\u51fa"},"\u4ee5\u67d0\u4e2a\u65f6\u95f4\u95f4\u9694\u4e3a\u9608\u503c\uff0c\u5728 ",(0,l.kt)("inlineCode",{parentName:"h2"},"durationSelector")," \u5b8c\u6210\u524d\u5c06\u6291\u5236\u65b0\u503c\u7684\u53d1\u51fa"),(0,l.kt)("div",{class:"ua-ad"}," "),(0,l.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("h5",{id:"\u793a\u4f8b-1-\u8282\u6d412\u79d2\u65f6\u95f4\u7531\u7b2c2\u4e2a-observable-\u51b3\u5b9a"},"\u793a\u4f8b 1: \u8282\u6d412\u79d2\uff0c\u65f6\u95f4\u7531\u7b2c2\u4e2a observable \u51b3\u5b9a"),(0,l.kt)("p",null,"(\n",(0,l.kt)("a",{parentName:"p",href:"https://stackblitz.com/edit/typescript-pfcmjw?file=index.ts&devtoolsheight=100"},"StackBlitz"),"\n| ",(0,l.kt)("a",{parentName:"p",href:"http://jsbin.com/wohefujipo/1/edit?js,console"},"jsBin")," |\n",(0,l.kt)("a",{parentName:"p",href:"https://jsfiddle.net/btroncone/h8na4m0p/"},"jsFiddle")," )"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// RxJS v6+\nimport { interval } from 'rxjs';\nimport { throttle } from 'rxjs/operators';\n\n// \u6bcf1\u79d2\u53d1\u51fa\u503c\nconst source = interval(1000);\n// \u8282\u6d412\u79d2\u540e\u624d\u53d1\u51fa\u6700\u65b0\u503c\nconst example = source.pipe(throttle(val => interval(2000)));\n// \u8f93\u51fa: 0...3...6...9\nconst subscribe = example.subscribe(val => console.log(val));\n")),(0,l.kt)("h5",{id:"\u793a\u4f8b-2-\u4f7f\u7528-promise-\u8fdb\u884c\u8282\u6d41"},"\u793a\u4f8b 2: \u4f7f\u7528 promise \u8fdb\u884c\u8282\u6d41"),(0,l.kt)("p",null,"(\n",(0,l.kt)("a",{parentName:"p",href:"https://stackblitz.com/edit/typescript-g74v3q?file=index.ts&devtoolsheight=100"},"StackBlitz"),"\n| ",(0,l.kt)("a",{parentName:"p",href:"http://jsbin.com/seyaguwunu/1/edit?js,console"},"jsBin")," |\n",(0,l.kt)("a",{parentName:"p",href:"https://jsfiddle.net/btroncone/w5Lbzz9f/"},"jsFiddle")," )"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// RxJS v6+\nimport { interval } from 'rxjs';\nimport { throttle, map } from 'rxjs/operators';\n\n// \u6bcf1\u79d2\u53d1\u51fa\u503c\nconst source = interval(1000);\n// \u57fa\u4e8e source \u81ea\u589e\u5730\u589e\u52a0\u89e3\u6790\u7684\u65f6\u95f4\nconst promise = val =>\n  new Promise(resolve =>\n    setTimeout(() => resolve(`Resolved: ${val}`), val * 100)\n  );\n// \u5f53 promise \u89e3\u6790\u65f6\u53d1\u51fa source \u7684\u9879\nconst example = source.pipe(\n  throttle(promise),\n  map(val => `Throttled off Promise: ${val}`)\n);\n\nconst subscribe = example.subscribe(val => console.log(val));\n")),(0,l.kt)("h3",{id:"\u5176\u4ed6\u8d44\u6e90"},"\u5176\u4ed6\u8d44\u6e90"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://cn.rx.js.org/class/es6/Observable.js~Observable.html#instance-method-throttle"},"throttle")," \ud83d\udcf0 - \u5b98\u65b9\u6587\u6863"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://egghead.io/lessons/rxjs-filtering-operators-throttle-and-throttletime?course=rxjs-beyond-the-basics-operators-in-depth"},"\u8fc7\u6ee4\u64cd\u4f5c\u7b26: throttle \u548c throttleTime")," \ud83d\udcf9 \ud83d\udcb5 - Andr\xe9 Staltz")),(0,l.kt)("hr",null),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\ud83d\udcc1 \u6e90\u7801:  ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/throttle.ts"},"https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/throttle.ts"))))}m.isMDXComponent=!0}}]);
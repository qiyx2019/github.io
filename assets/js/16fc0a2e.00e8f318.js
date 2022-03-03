"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1893],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return u}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(r),u=a,v=b["".concat(i,".").concat(u)]||b[u]||m[u]||l;return r?n.createElement(v,o(o({ref:t},c),{},{components:r})):n.createElement(v,o({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},339:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return b}});var n=r(7462),a=r(3366),l=(r(7294),r(3905)),o=["components"],s={},i="sample",p={unversionedId:"rx/filtering/sample",id:"rx/filtering/sample",title:"sample",description:"\u51fd\u6570\u7b7e\u540d Observable): Observable",source:"@site/docs/rx/filtering/sample.md",sourceDirName:"rx/filtering",slug:"/rx/filtering/sample",permalink:"/blog/docs/rx/filtering/sample",tags:[],version:"current",frontMatter:{},sidebar:"rx",previous:{title:"last",permalink:"/blog/docs/rx/filtering/last"},next:{title:"single",permalink:"/blog/docs/rx/filtering/single"}},c=[{value:"\u51fd\u6570\u7b7e\u540d: <code>sample(sampler: Observable): Observable</code>",id:"\u51fd\u6570\u7b7e\u540d-samplesampler-observable-observable",children:[],level:4},{value:"\u5f53\u63d0\u4f9b\u7684 observable \u53d1\u51fa\u65f6\u4ece\u6e90 observable \u4e2d\u53d6\u6837\u3002",id:"\u5f53\u63d0\u4f9b\u7684-observable-\u53d1\u51fa\u65f6\u4ece\u6e90-observable-\u4e2d\u53d6\u6837",children:[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"\u793a\u4f8b 1: \u6bcf2\u79d2\u5bf9\u6e90 observable \u53d6\u6837",id:"\u793a\u4f8b-1-\u6bcf2\u79d2\u5bf9\u6e90-observable-\u53d6\u6837",children:[],level:5},{value:"\u793a\u4f8b 2: \u5f53 interval \u53d1\u51fa\u65f6\u5bf9\u6e90 observable \u53d6\u6837",id:"\u793a\u4f8b-2-\u5f53-interval-\u53d1\u51fa\u65f6\u5bf9\u6e90-observable-\u53d6\u6837",children:[],level:5},{value:"\u793a\u4f8b 3: \u533a\u5206\u62d6\u62fd\u548c\u70b9\u51fb",id:"\u793a\u4f8b-3-\u533a\u5206\u62d6\u62fd\u548c\u70b9\u51fb",children:[],level:5}],level:3},{value:"\u5176\u4ed6\u8d44\u6e90",id:"\u5176\u4ed6\u8d44\u6e90",children:[],level:3}],level:2}],m={toc:c};function b(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"sample"},"sample"),(0,l.kt)("h4",{id:"\u51fd\u6570\u7b7e\u540d-samplesampler-observable-observable"},"\u51fd\u6570\u7b7e\u540d: ",(0,l.kt)("inlineCode",{parentName:"h4"},"sample(sampler: Observable): Observable")),(0,l.kt)("h2",{id:"\u5f53\u63d0\u4f9b\u7684-observable-\u53d1\u51fa\u65f6\u4ece\u6e90-observable-\u4e2d\u53d6\u6837"},"\u5f53\u63d0\u4f9b\u7684 observable \u53d1\u51fa\u65f6\u4ece\u6e90 observable \u4e2d\u53d6\u6837\u3002"),(0,l.kt)("div",{class:"ua-ad"}," "),(0,l.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("h5",{id:"\u793a\u4f8b-1-\u6bcf2\u79d2\u5bf9\u6e90-observable-\u53d6\u6837"},"\u793a\u4f8b 1: \u6bcf2\u79d2\u5bf9\u6e90 observable \u53d6\u6837"),(0,l.kt)("p",null,"(\n",(0,l.kt)("a",{parentName:"p",href:"https://stackblitz.com/edit/typescript-envpsp?file=index.ts&devtoolsheight=100"},"StackBlitz"),"\n| ",(0,l.kt)("a",{parentName:"p",href:"http://jsbin.com/gemebopifu/1/edit?js,console"},"jsBin")," |\n",(0,l.kt)("a",{parentName:"p",href:"https://jsfiddle.net/btroncone/8wsbuvjb/"},"jsFiddle")," )"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// RxJS v6+\nimport { interval } from 'rxjs';\nimport { sample } 'rxjs/operators';\n\n// \u6bcf1\u79d2\u53d1\u51fa\u503c\nconst source = interval(1000);\n// \u6bcf2\u79d2\u5bf9\u6e90 observable \u6700\u65b0\u53d1\u51fa\u7684\u503c\u8fdb\u884c\u53d6\u6837\nconst example = source.pipe(sample(interval(2000)));\n// \u8f93\u51fa: 2..4..6..8..\nconst subscribe = example.subscribe(val => console.log(val));\n")),(0,l.kt)("h5",{id:"\u793a\u4f8b-2-\u5f53-interval-\u53d1\u51fa\u65f6\u5bf9\u6e90-observable-\u53d6\u6837"},"\u793a\u4f8b 2: \u5f53 interval \u53d1\u51fa\u65f6\u5bf9\u6e90 observable \u53d6\u6837"),(0,l.kt)("p",null,"(\n",(0,l.kt)("a",{parentName:"p",href:"https://stackblitz.com/edit/typescript-sgat7t?file=index.ts&devtoolsheight=100"},"StackBlitz"),"\n| ",(0,l.kt)("a",{parentName:"p",href:"http://jsbin.com/cunicepube/1/edit?js,console"},"jsBin")," |\n",(0,l.kt)("a",{parentName:"p",href:"https://jsfiddle.net/btroncone/b33kg9dn/"},"jsFiddle")," )"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// RxJS v6+\nimport { interval, zip, from } from 'rxjs';\nimport { sample } from 'rxjs/operators';\n\nconst source = zip(\n  // \u53d1\u51fa 'Joe', 'Frank' and 'Bob' in sequence\n  from(['Joe', 'Frank', 'Bob']),\n  // \u6bcf2\u79d2\u53d1\u51fa\u503c\n  interval(2000)\n);\n// \u6bcf2.5\u79d2\u5bf9\u6e90 observable \u6700\u65b0\u53d1\u51fa\u7684\u503c\u8fdb\u884c\u53d6\u6837\nconst example = source.pipe(sample(interval(2500)));\n// \u8f93\u51fa: [\"Joe\", 0]...[\"Frank\", 1]...........\nconst subscribe = example.subscribe(val => console.log(val));\n")),(0,l.kt)("h5",{id:"\u793a\u4f8b-3-\u533a\u5206\u62d6\u62fd\u548c\u70b9\u51fb"},"\u793a\u4f8b 3: \u533a\u5206\u62d6\u62fd\u548c\u70b9\u51fb"),(0,l.kt)("p",null,"\u6765\u6e90: ",(0,l.kt)("a",{parentName:"p",href:"https://stackoverflow.com/a/44865892/2774547"},"Stack Overflow"),"\n\u4f5c\u8005: ",(0,l.kt)("a",{parentName:"p",href:"https://stackoverflow.com/users/402027/dorus"},"Dorus")),(0,l.kt)("p",null,"(\n",(0,l.kt)("a",{parentName:"p",href:"https://stackblitz.com/edit/typescript-vk8p3e?file=index.ts&devtoolsheight=100"},"StackBlitz"),"\n| ",(0,l.kt)("a",{parentName:"p",href:"http://jsbin.com/riwipicilo/1/edit?html,js,console,output"},"jsBin")," |\n",(0,l.kt)("a",{parentName:"p",href:"https://jsfiddle.net/6yy6q0Lo/1/"},"jsFiddle")," )"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// RxJS v6+\nimport { fromEvent, merge } from 'rxjs';\nimport { sample, mapTo } from 'rxjs/operators';\n\nconst listener = merge(\n  fromEvent(document, 'mousedown').pipe(mapTo(false)),\n  fromEvent(document, 'mousemove').pipe(mapTo(true))\n)\n  .pipe(sample(fromEvent(document, 'mouseup')))\n  .subscribe(isDragging => {\n    console.log('Were you dragging?', isDragging);\n  });\n")),(0,l.kt)("h3",{id:"\u5176\u4ed6\u8d44\u6e90"},"\u5176\u4ed6\u8d44\u6e90"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://cn.rx.js.org/class/es6/Observable.js~Observable.html#instance-method-sample"},"sample")," \ud83d\udcf0 - \u5b98\u65b9\u6587\u6863")),(0,l.kt)("hr",null),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\ud83d\udcc1 \u6e90\u7801:  ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/sample.ts"},"https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/sample.ts"))))}b.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7073],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=n.createContext({}),c=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),h=c(r),m=a,d=h["".concat(l,".").concat(m)]||h[m]||u[m]||o;return r?n.createElement(d,i(i({ref:e},p),{},{components:r})):n.createElement(d,i({ref:e},p))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3277:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return h}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={},l="startWith",c={unversionedId:"rx/combination/startwith",id:"rx/combination/startwith",title:"startWith",description:"\u51fd\u6570\u7b7e\u540d Values): Observable",source:"@site/docs/rx/combination/startwith.md",sourceDirName:"rx/combination",slug:"/rx/combination/startwith",permalink:"/blog/docs/rx/combination/startwith",tags:[],version:"current",frontMatter:{},sidebar:"rx",previous:{title:"race",permalink:"/blog/docs/rx/combination/race"},next:{title:"withLatestFrom",permalink:"/blog/docs/rx/combination/withlatestfrom"}},p=[{value:"\u51fd\u6570\u7b7e\u540d: <code>startWith(an: Values): Observable</code>",id:"\u51fd\u6570\u7b7e\u540d-startwithan-values-observable",children:[],level:4},{value:"\u53d1\u51fa\u7ed9\u5b9a\u7684\u7b2c\u4e00\u4e2a\u503c",id:"\u53d1\u51fa\u7ed9\u5b9a\u7684\u7b2c\u4e00\u4e2a\u503c",children:[{value:"\u793a\u4f8b 1: \u5bf9\u6570\u5b57\u5e8f\u5217\u4f7f\u7528 startWith",id:"\u793a\u4f8b-1-\u5bf9\u6570\u5b57\u5e8f\u5217\u4f7f\u7528-startwith",children:[],level:5},{value:"\u793a\u4f8b 2: startWith \u7528\u4f5c scan \u7684\u521d\u59cb\u503c",id:"\u793a\u4f8b-2-startwith-\u7528\u4f5c-scan-\u7684\u521d\u59cb\u503c",children:[],level:5},{value:"\u793a\u4f8b 3: \u4f7f\u7528\u591a\u4e2a\u503c\u8fdb\u884c startWith",id:"\u793a\u4f8b-3-\u4f7f\u7528\u591a\u4e2a\u503c\u8fdb\u884c-startwith",children:[],level:5},{value:"\u5176\u4ed6\u8d44\u6e90",id:"\u5176\u4ed6\u8d44\u6e90",children:[],level:3}],level:2}],u={toc:p};function h(t){var e=t.components,r=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"startwith"},"startWith"),(0,o.kt)("h4",{id:"\u51fd\u6570\u7b7e\u540d-startwithan-values-observable"},"\u51fd\u6570\u7b7e\u540d: ",(0,o.kt)("inlineCode",{parentName:"h4"},"startWith(an: Values): Observable")),(0,o.kt)("h2",{id:"\u53d1\u51fa\u7ed9\u5b9a\u7684\u7b2c\u4e00\u4e2a\u503c"},"\u53d1\u51fa\u7ed9\u5b9a\u7684\u7b2c\u4e00\u4e2a\u503c"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"\ud83d\udca1 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/subjects/behaviorsubject.md"},"BehaviorSubject")," \u4e5f\u53ef\u4ee5\u4ece\u521d\u59cb\u503c\u5f00\u59cb\uff01"),(0,o.kt)("hr",null),(0,o.kt)("div",{class:"ua-ad"}," "),(0,o.kt)("h5",{id:"\u793a\u4f8b-1-\u5bf9\u6570\u5b57\u5e8f\u5217\u4f7f\u7528-startwith"},"\u793a\u4f8b 1: \u5bf9\u6570\u5b57\u5e8f\u5217\u4f7f\u7528 startWith"),(0,o.kt)("p",null,"(\n",(0,o.kt)("a",{parentName:"p",href:"https://stackblitz.com/edit/typescript-2qrwjt?file=index.ts&devtoolsheight=100"},"StackBlitz"),"\n| ",(0,o.kt)("a",{parentName:"p",href:"http://jsbin.com/lezuravizu/1/edit?js,console"},"jsBin")," |\n",(0,o.kt)("a",{parentName:"p",href:"https://jsfiddle.net/btroncone/e8dn3ggp/"},"jsFiddle")," )"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// RxJS v6+\nimport { startWith } from 'rxjs/operators';\nimport { of } from 'rxjs';\n\n// \u53d1\u51fa (1,2,3)\nconst source = of(1, 2, 3);\n// \u4ece0\u5f00\u59cb\nconst example = source.pipe(startWith(0));\n// \u8f93\u51fa: 0,1,2,3\nconst subscribe = example.subscribe(val => console.log(val));\n")),(0,o.kt)("h5",{id:"\u793a\u4f8b-2-startwith-\u7528\u4f5c-scan-\u7684\u521d\u59cb\u503c"},"\u793a\u4f8b 2: startWith \u7528\u4f5c scan \u7684\u521d\u59cb\u503c"),(0,o.kt)("p",null,"(\n",(0,o.kt)("a",{parentName:"p",href:"https://stackblitz.com/edit/typescript-8gkbsc?file=index.ts&devtoolsheight=100"},"StackBlitz"),"\n| | ",(0,o.kt)("a",{parentName:"p",href:"http://jsbin.com/gemevuzoha/1/edit?js,console"},"jsBin")," |\n",(0,o.kt)("a",{parentName:"p",href:"https://jsfiddle.net/btroncone/54r3g83e/"},"jsFiddle")," )"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// RxJS v6+\nimport { startWith, scan } from 'rxjs/operators';\nimport { of } from 'rxjs';\n\n// \u53d1\u51fa ('World!', 'Goodbye', 'World!')\nconst source = of('World!', 'Goodbye', 'World!');\n// \u4ee5 'Hello' \u5f00\u5934\uff0c\u540e\u9762\u63a5\u5f53\u524d\u5b57\u7b26\u4e32\nconst example = source.pipe(\n  startWith('Hello'),\n  scan((acc, curr) => `${acc} ${curr}`)\n);\n/*\n  \u8f93\u51fa:\n  \"Hello\"\n  \"Hello World!\"\n  \"Hello World! Goodbye\"\n  \"Hello World! Goodbye World!\"\n*/\nconst subscribe = example.subscribe(val => console.log(val));\n")),(0,o.kt)("h5",{id:"\u793a\u4f8b-3-\u4f7f\u7528\u591a\u4e2a\u503c\u8fdb\u884c-startwith"},"\u793a\u4f8b 3: \u4f7f\u7528\u591a\u4e2a\u503c\u8fdb\u884c startWith"),(0,o.kt)("p",null,"(\n",(0,o.kt)("a",{parentName:"p",href:"https://stackblitz.com/edit/typescript-ek45ff?file=index.ts&devtoolsheight=100"},"StackBlitz"),"\n| ",(0,o.kt)("a",{parentName:"p",href:"http://jsbin.com/cumupemuxa/1/edit?js,console"},"jsBin")," |\n",(0,o.kt)("a",{parentName:"p",href:"https://jsfiddle.net/btroncone/ckcyj3ms/"},"jsFiddle")," )"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// RxJS v6+\nimport { startWith } from 'rxjs/operators';\nimport { interval } from 'rxjs';\n\n// \u6bcf1\u79d2\u53d1\u51fa\u503c\nconst source = interval(1000);\n// \u4ee5 -3, -2, -1 \u5f00\u59cb\nconst example = source.pipe(startWith(-3, -2, -1));\n// \u8f93\u51fa: -3, -2, -1, 0, 1, 2....\nconst subscribe = example.subscribe(val => console.log(val));\n")),(0,o.kt)("h3",{id:"\u5176\u4ed6\u8d44\u6e90"},"\u5176\u4ed6\u8d44\u6e90"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cn.rx.js.org/class/es6/Observable.js~Observable.html#instance-method-startWith"},"startWith")," \ud83d\udcf0 - \u5b98\u65b9\u6587\u6863"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://egghead.io/lessons/rxjs-displaying-initial-data-with-startwith?course=step-by-step-async-javascript-with-rxjs"},"\u4f7f\u7528 startWith \u663e\u793a\u521d\u59cb\u503c")," \ud83d\udcf9 \ud83d\udcb5 - John Linquist"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://egghead.io/lessons/rxjs-reactive-programming-clear-data-while-loading-with-rxjs-startwith?course=introduction-to-reactive-programming"},"\u5f53\u52a0\u8f7d\u65f6\u4f7f\u7528 startWith \u6e05\u9664\u6570\u636e")," \ud83d\udcf9 \ud83d\udcb5 - Andr\xe9 Staltz"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://egghead.io/lessons/rxjs-combination-operators-concat-startwith?course=rxjs-beyond-the-basics-operators-in-depth"},"\u7ec4\u5408\u64cd\u4f5c\u7b26: concat, startWith")," \ud83d\udcf9 \ud83d\udcb5 - Andr\xe9 Staltz")),(0,o.kt)("hr",null),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\ud83d\udcc1 \u6e90\u7801:  ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/startWith.ts"},"https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/startWith.ts"))))}h.isMDXComponent=!0}}]);
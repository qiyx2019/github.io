"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3615],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return f}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=c(t),f=o,b=m["".concat(s,".").concat(f)]||m[f]||u[f]||l;return t?n.createElement(b,i(i({ref:r},p),{},{components:t})):n.createElement(b,i({ref:r},p))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var l=t.length,i=new Array(l);i[0]=m;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<l;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1719:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=t(7462),o=t(3366),l=(t(7294),t(3905)),i=["components"],a={},s="ignoreElements",c={unversionedId:"rx/filtering/ignoreelements",id:"rx/filtering/ignoreelements",title:"ignoreElements",description:"\u51fd\u6570\u7b7e\u540d Observable",source:"@site/docs/rx/filtering/ignoreelements.md",sourceDirName:"rx/filtering",slug:"/rx/filtering/ignoreelements",permalink:"/blog/docs/rx/filtering/ignoreelements",tags:[],version:"current",frontMatter:{},sidebar:"rx",previous:{title:"first",permalink:"/blog/docs/rx/filtering/first"},next:{title:"last",permalink:"/blog/docs/rx/filtering/last"}},p=[{value:"\u51fd\u6570\u7b7e\u540d: <code>ignoreElements(): Observable</code>",id:"\u51fd\u6570\u7b7e\u540d-ignoreelements-observable",children:[],level:4},{value:"\u5ffd\u7565\u6240\u6709\u901a\u77e5\uff0c\u9664\u4e86 complete \u548c error \u3002",id:"\u5ffd\u7565\u6240\u6709\u901a\u77e5\u9664\u4e86-complete-\u548c-error-",children:[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"\u793a\u4f8b 1: \u5ffd\u7565\u6e90 observable \u7684\u6240\u6709\u6570\u636e\u9879",id:"\u793a\u4f8b-1-\u5ffd\u7565\u6e90-observable-\u7684\u6240\u6709\u6570\u636e\u9879",children:[],level:5},{value:"\u793a\u4f8b 2: \u53ea\u663e\u793a\u9519\u8bef",id:"\u793a\u4f8b-2-\u53ea\u663e\u793a\u9519\u8bef",children:[],level:5}],level:3},{value:"\u5176\u4ed6\u8d44\u6e90",id:"\u5176\u4ed6\u8d44\u6e90",children:[],level:3}],level:2}],u={toc:p};function m(e){var r=e.components,t=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"ignoreelements"},"ignoreElements"),(0,l.kt)("h4",{id:"\u51fd\u6570\u7b7e\u540d-ignoreelements-observable"},"\u51fd\u6570\u7b7e\u540d: ",(0,l.kt)("inlineCode",{parentName:"h4"},"ignoreElements(): Observable")),(0,l.kt)("h2",{id:"\u5ffd\u7565\u6240\u6709\u901a\u77e5\u9664\u4e86-complete-\u548c-error-"},"\u5ffd\u7565\u6240\u6709\u901a\u77e5\uff0c\u9664\u4e86 complete \u548c error \u3002"),(0,l.kt)("div",{class:"ua-ad"}," "),(0,l.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("h5",{id:"\u793a\u4f8b-1-\u5ffd\u7565\u6e90-observable-\u7684\u6240\u6709\u6570\u636e\u9879"},"\u793a\u4f8b 1: \u5ffd\u7565\u6e90 observable \u7684\u6240\u6709\u6570\u636e\u9879"),(0,l.kt)("p",null,"(\n",(0,l.kt)("a",{parentName:"p",href:"https://stackblitz.com/edit/typescript-jpjcpg?file=index.ts&devtoolsheight=100"},"StackBlitz"),"\n| ",(0,l.kt)("a",{parentName:"p",href:"http://jsbin.com/yiyefelubi/1/edit?js,console"},"jsBin")," |\n",(0,l.kt)("a",{parentName:"p",href:"https://jsfiddle.net/btroncone/59scjqss/"},"jsFiddle")," )"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// RxJS v6+\nimport { interval } from 'rxjs';\nimport { take, ignoreElements } from 'rxjs/operators';\n\n// \u6bcf100\u6beb\u79d2\u53d1\u51fa\u503c\nconst source = interval(100);\n// \u7565\u6240\u6709\u503c\uff0c\u53ea\u53d1\u51fa complete\nconst example = source.pipe(\n  take(5),\n  ignoreElements()\n);\n// \u8f93\u51fa: \"COMPLETE!\"\nconst subscribe = example.subscribe(\n  val => console.log(`NEXT: ${val}`),\n  val => console.log(`ERROR: ${val}`),\n  () => console.log('COMPLETE!')\n);\n")),(0,l.kt)("h5",{id:"\u793a\u4f8b-2-\u53ea\u663e\u793a\u9519\u8bef"},"\u793a\u4f8b 2: \u53ea\u663e\u793a\u9519\u8bef"),(0,l.kt)("p",null,"(\n",(0,l.kt)("a",{parentName:"p",href:"https://stackblitz.com/edit/typescript-3yxv9z?file=index.ts&devtoolsheight=100"},"StackBlitz"),"\n| ",(0,l.kt)("a",{parentName:"p",href:"http://jsbin.com/gogonawuze/1/edit?js,console"},"jsBin")," |\n",(0,l.kt)("a",{parentName:"p",href:"https://jsfiddle.net/btroncone/srcwdgw6/"},"jsFiddle")," )"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// RxJS v6+\nimport { interval, throwError, of } from 'rxjs';\nimport { mergeMap, ignoreElements } from 'rxjs/operators';\n\n// \u6bcf100\u6beb\u79d2\u53d1\u51fa\u503c\nconst source = interval(100);\n// \u5ffd\u7565\u6240\u6709\u503c\uff0c\u53ea\u53d1\u51fa error\nconst error = source.pipe(\n  mergeMap(val => {\n    if (val === 4) {\n      return throwError(`ERROR AT ${val}`);\n    }\n    return of(val);\n  }),\n  ignoreElements()\n);\n// \u8f93\u51fa: \"ERROR: ERROR AT 4\"\nconst subscribe = error.subscribe(\n  val => console.log(`NEXT: ${val}`),\n  val => console.log(`ERROR: ${val}`),\n  () => console.log('SECOND COMPLETE!')\n);\n")),(0,l.kt)("h3",{id:"\u5176\u4ed6\u8d44\u6e90"},"\u5176\u4ed6\u8d44\u6e90"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://cn.rx.js.org/class/es6/Observable.js~Observable.html#instance-method-ignoreElements"},"ignoreElements")," \ud83d\udcf0 - \u5b98\u65b9\u6587\u6863")),(0,l.kt)("hr",null),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\ud83d\udcc1 \u6e90\u7801:  ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/ignoreElements.ts"},"https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/ignoreElements.ts"))))}m.isMDXComponent=!0}}]);
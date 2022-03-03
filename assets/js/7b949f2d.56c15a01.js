"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4776],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return v}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(r),v=o,f=p["".concat(c,".").concat(v)]||p[v]||u[v]||a;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7179:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return m},default:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={},c="fromEvent",s={unversionedId:"rx/creation/fromevent",id:"rx/creation/fromevent",title:"fromEvent",description:"\u51fd\u6570\u7b7e\u540d EventTargetLike, eventName function): Observable",source:"@site/docs/rx/creation/fromevent.md",sourceDirName:"rx/creation",slug:"/rx/creation/fromevent",permalink:"/blog/docs/rx/creation/fromevent",tags:[],version:"current",frontMatter:{},sidebar:"rx",previous:{title:"from",permalink:"/blog/docs/rx/creation/from"},next:{title:"fromPromise",permalink:"/blog/docs/rx/creation/frompromise"}},m=[{value:"\u51fd\u6570\u7b7e\u540d: <code>fromEvent(target: EventTargetLike, eventName: string, selector: function): Observable</code>",id:"\u51fd\u6570\u7b7e\u540d-fromeventtarget-eventtargetlike-eventname-string-selector-function-observable",children:[],level:4},{value:"\u5c06\u4e8b\u4ef6\u8f6c\u6362\u6210 observable \u5e8f\u5217\u3002",id:"\u5c06\u4e8b\u4ef6\u8f6c\u6362\u6210-observable-\u5e8f\u5217",children:[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"\u793a\u4f8b 1: \u9f20\u6807\u4e8b\u4ef6\u8f6c\u6362\u800c\u6765\u7684 observable",id:"\u793a\u4f8b-1-\u9f20\u6807\u4e8b\u4ef6\u8f6c\u6362\u800c\u6765\u7684-observable",children:[],level:5}],level:3},{value:"\u5176\u4ed6\u8d44\u6e90",id:"\u5176\u4ed6\u8d44\u6e90",children:[],level:3}],level:2}],u={toc:m};function p(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fromevent"},"fromEvent"),(0,a.kt)("h4",{id:"\u51fd\u6570\u7b7e\u540d-fromeventtarget-eventtargetlike-eventname-string-selector-function-observable"},"\u51fd\u6570\u7b7e\u540d: ",(0,a.kt)("inlineCode",{parentName:"h4"},"fromEvent(target: EventTargetLike, eventName: string, selector: function): Observable")),(0,a.kt)("h2",{id:"\u5c06\u4e8b\u4ef6\u8f6c\u6362\u6210-observable-\u5e8f\u5217"},"\u5c06\u4e8b\u4ef6\u8f6c\u6362\u6210 observable \u5e8f\u5217\u3002"),(0,a.kt)("div",{class:"ua-ad"}," "),(0,a.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("h5",{id:"\u793a\u4f8b-1-\u9f20\u6807\u4e8b\u4ef6\u8f6c\u6362\u800c\u6765\u7684-observable"},"\u793a\u4f8b 1: \u9f20\u6807\u4e8b\u4ef6\u8f6c\u6362\u800c\u6765\u7684 observable"),(0,a.kt)("p",null,"(\n",(0,a.kt)("a",{parentName:"p",href:"https://stackblitz.com/edit/typescript-mfyefr?file=index.ts&devtoolsheight=50"},"StackBlitz"),"\n| ",(0,a.kt)("a",{parentName:"p",href:"http://jsbin.com/xikapewoqa/1/edit?js,console,output"},"jsBin")," |\n",(0,a.kt)("a",{parentName:"p",href:"https://jsfiddle.net/btroncone/vbLz1pdx/"},"jsFiddle")," )"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// RxJS v6+\nimport { fromEvent } from 'rxjs';\nimport { map } from 'rxjs/operators';\n\n// \u521b\u5efa\u53d1\u51fa\u70b9\u51fb\u4e8b\u4ef6\u7684 observable\nconst source = fromEvent(document, 'click');\n// \u6620\u5c04\u6210\u7ed9\u5b9a\u7684\u4e8b\u4ef6\u65f6\u95f4\u6233\nconst example = source.pipe(map(event => `Event time: ${event.timeStamp}`));\n// \u8f93\u51fa (\u793a\u4f8b\u4e2d\u7684\u6570\u5b57\u4ee5\u8fd0\u884c\u65f6\u4e3a\u51c6): 'Event time: 7276.390000000001'\nconst subscribe = example.subscribe(val => console.log(val));\n")),(0,a.kt)("h3",{id:"\u5176\u4ed6\u8d44\u6e90"},"\u5176\u4ed6\u8d44\u6e90"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cn.rx.js.org/class/es6/Observable.js~Observable.html#static-method-fromEvent"},"fromEvent")," \ud83d\udcf0 - \u5b98\u65b9\u6587\u6863")),(0,a.kt)("hr",null),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\ud83d\udcc1 \u6e90\u7801:  ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ReactiveX/rxjs/blob/master/src/observable/FromEventObservable.ts"},"https://github.com/ReactiveX/rxjs/blob/master/src/observable/FromEventObservable.ts"))))}p.isMDXComponent=!0}}]);
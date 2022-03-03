"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4950],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),k=c(n),d=a,m=k["".concat(s,".").concat(d)]||k[d]||u[d]||l;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8443:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return k}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={},s="take",c={unversionedId:"rx/filtering/take",id:"rx/filtering/take",title:"take",description:"\u51fd\u6570\u7b7e\u540d number): Observable",source:"@site/docs/rx/filtering/take.md",sourceDirName:"rx/filtering",slug:"/rx/filtering/take",permalink:"/blog/docs/rx/filtering/take",tags:[],version:"current",frontMatter:{},sidebar:"rx",previous:{title:"skipWhile",permalink:"/blog/docs/rx/filtering/skipwhile"},next:{title:"takeUntil",permalink:"/blog/docs/rx/filtering/takeuntil"}},p=[{value:"\u51fd\u6570\u7b7e\u540d: <code> take(count: number): Observable</code>",id:"\u51fd\u6570\u7b7e\u540d--takecount-number-observable",children:[],level:4},{value:"\u5728\u5b8c\u6210\u524d\u53d1\u51faN\u4e2a\u503c(N\u7531\u53c2\u6570\u51b3\u5b9a)\u3002",id:"\u5728\u5b8c\u6210\u524d\u53d1\u51fan\u4e2a\u503cn\u7531\u53c2\u6570\u51b3\u5b9a",children:[{value:"\u4e3a\u4ec0\u4e48\u4f7f\u7528 <code>take</code>\uff1f",id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528-take",children:[],level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"\u793a\u4f8b 1: \u4ece\u6e90 observable \u4e2d\u53d6\u7b2c\u4e00\u4e2a\u503c",id:"\u793a\u4f8b-1-\u4ece\u6e90-observable-\u4e2d\u53d6\u7b2c\u4e00\u4e2a\u503c",children:[],level:5},{value:"\u793a\u4f8b 2: \u4ece\u6e90 observable \u4e2d\u53d6\u524d5\u4e2a\u503c",id:"\u793a\u4f8b-2-\u4ece\u6e90-observable-\u4e2d\u53d6\u524d5\u4e2a\u503c",children:[],level:5},{value:"\u793a\u4f8b 3: \u53d6\u5f97\u9996\u6b21\u70b9\u51fb\u7684\u5750\u6807",id:"\u793a\u4f8b-3-\u53d6\u5f97\u9996\u6b21\u70b9\u51fb\u7684\u5750\u6807",children:[],level:5}],level:3},{value:"\u5176\u4ed6\u8d44\u6e90",id:"\u5176\u4ed6\u8d44\u6e90",children:[],level:3}],level:2}],u={toc:p};function k(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"take"},"take"),(0,l.kt)("h4",{id:"\u51fd\u6570\u7b7e\u540d--takecount-number-observable"},"\u51fd\u6570\u7b7e\u540d: ",(0,l.kt)("inlineCode",{parentName:"h4"}," take(count: number): Observable")),(0,l.kt)("h2",{id:"\u5728\u5b8c\u6210\u524d\u53d1\u51fan\u4e2a\u503cn\u7531\u53c2\u6570\u51b3\u5b9a"},"\u5728\u5b8c\u6210\u524d\u53d1\u51faN\u4e2a\u503c(N\u7531\u53c2\u6570\u51b3\u5b9a)\u3002"),(0,l.kt)("h3",{id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528-take"},"\u4e3a\u4ec0\u4e48\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"h3"},"take"),"\uff1f"),(0,l.kt)("p",null,"\u5f53\u53ea\u5bf9\u5f00\u5934\u7684\u4e00\u7ec4\u503c\u611f\u5174\u8da3\u65f6\uff0c\u4f60\u60f3\u8981\u7684\u4fbf\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"take")," \u64cd\u4f5c\u7b26\u3002\u4e5f\u8bb8\u4f60\u60f3\u770b\u770b\u5f53\u7528\u6237\u7b2c\u4e00\u6b21\u8fdb\u5165\u9875\u9762\u65f6\uff0c\u7528\u6237\u9996\u5148\u70b9\u51fb\u7684\u662f\u4ec0\u4e48\uff0c\u4f60\u60f3\u8981\u8ba2\u9605\u70b9\u51fb\u4e8b\u4ef6\u5e76\u53ea\u53d6\u9996\u4e2a\u503c\u3002\u4e3e\u4f8b\u6765\u8bf4\uff0c\u4f60\u60f3\u8981\u89c2\u770b\u8d5b\u8dd1\uff0c\u4f46\u5176\u5b9e\u4f60\u53ea\u5bf9\u9996\u5148\u51b2\u8fc7\u7ec8\u70b9\u7684\u4eba\u611f\u5174\u8da3\u3002\u6b64\u64cd\u4f5c\u7b26\u5f88\u6e05\u6670\u660e\u4e86\uff0c\u4f60\u60f3\u8981\u53d6\u5f00\u5934",(0,l.kt)("em",{parentName:"p"},"n"),"\u4e2a\u503c\u3002"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"\ud83d\udca1 \u5982\u679c\u60f3\u57fa\u4e8e\u67d0\u4e2a\u903b\u8f91\u6216\u53e6\u4e00\u4e2a observable \u6765\u53d6\u4efb\u610f\u6570\u91cf\u7684\u503c\uff0c\u4f60\u53ef\u4ee5 ",(0,l.kt)("a",{parentName:"p",href:"/blog/docs/rx/filtering/takeuntil"},"takeUntil")," \u6216 ",(0,l.kt)("a",{parentName:"p",href:"/blog/docs/rx/filtering/takewhile"},"takeWhile"),"\uff01"),(0,l.kt)("p",null,"\ud83d\udca1 ",(0,l.kt)("inlineCode",{parentName:"p"},"take")," \u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"skip")," \u662f\u76f8\u53cd\u7684\uff0c\u5b83\u63a5\u6536\u8d77\u59cb\u7684N\u4e2a\u503c\uff0c\u800c ",(0,l.kt)("inlineCode",{parentName:"p"},"skip")," \u4f1a\u8df3\u8fc7\u8d77\u59cb\u7684N\u4e2a\u503c\u3002"),(0,l.kt)("hr",null),(0,l.kt)("div",{class:"ua-ad"}," "),(0,l.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("h5",{id:"\u793a\u4f8b-1-\u4ece\u6e90-observable-\u4e2d\u53d6\u7b2c\u4e00\u4e2a\u503c"},"\u793a\u4f8b 1: \u4ece\u6e90 observable \u4e2d\u53d6\u7b2c\u4e00\u4e2a\u503c"),(0,l.kt)("p",null,"(\n",(0,l.kt)("a",{parentName:"p",href:"https://stackblitz.com/edit/typescript-uk92ax?file=index.ts&devtoolsheight=100"},"StackBlitz"),"\n| ",(0,l.kt)("a",{parentName:"p",href:"http://jsbin.com/vaxitupiwi/1/edit?js,console"},"jsBin")," |\n",(0,l.kt)("a",{parentName:"p",href:"https://jsfiddle.net/btroncone/f9bz0tr3/"},"jsFiddle")," )"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// RxJS v6+\nimport { of } from 'rxjs';\nimport { take } from 'rxjs/operators';\n\n// \u53d1\u51fa 1,2,3,4,5\nconst source = of(1, 2, 3, 4, 5);\n// \u53d6\u7b2c\u4e00\u4e2a\u53d1\u51fa\u7684\u503c\u7136\u540e\u5b8c\u6210\nconst example = source.pipe(take(1));\n// \u8f93\u51fa: 1\nconst subscribe = example.subscribe(val => console.log(val));\n")),(0,l.kt)("h5",{id:"\u793a\u4f8b-2-\u4ece\u6e90-observable-\u4e2d\u53d6\u524d5\u4e2a\u503c"},"\u793a\u4f8b 2: \u4ece\u6e90 observable \u4e2d\u53d6\u524d5\u4e2a\u503c"),(0,l.kt)("p",null,"(\n",(0,l.kt)("a",{parentName:"p",href:"https://stackblitz.com/edit/typescript-3ujuth?file=index.ts&devtoolsheight=100"},"StackBlitz"),"\n| ",(0,l.kt)("a",{parentName:"p",href:"http://jsbin.com/kexenuzulu/edit?js,console"},"jsBin")," |\n",(0,l.kt)("a",{parentName:"p",href:"https://jsfiddle.net/btroncone/g1fhxgua/"},"jsFiddle")," )"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// RxJS v6+\nimport { interval } from 'rxjs';\nimport { take } from 'rxjs/operators';\n\n// \u6bcf1\u79d2\u53d1\u51fa\u503c\nconst interval$ = interval(1000);\n// \u53d6\u524d5\u4e2a\u53d1\u51fa\u7684\u503c\nconst example = interval$.pipe(take(5));\n// \u8f93\u51fa: 0,1,2,3,4\nconst subscribe = example.subscribe(val => console.log(val));\n")),(0,l.kt)("h5",{id:"\u793a\u4f8b-3-\u53d6\u5f97\u9996\u6b21\u70b9\u51fb\u7684\u5750\u6807"},"\u793a\u4f8b 3: \u53d6\u5f97\u9996\u6b21\u70b9\u51fb\u7684\u5750\u6807"),(0,l.kt)("p",null,"(",(0,l.kt)("a",{parentName:"p",href:"https://stackblitz.com/edit/typescript-8g9xt5?file=index.ts&devtoolsheight=50"},"StackBlitz"),"\n| ",(0,l.kt)("a",{parentName:"p",href:"https://jsfiddle.net/ElHuy/9c5j064x/"},"jsFiddle"),")"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<div id="locationDisplay">\n  Where would you click first?\n</div>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// RxJS v6+\nimport { fromEvent } from 'rxjs';\nimport { take, tap } from 'rxjs/operators';\n\nconst oneClickEvent = fromEvent(document, 'click').pipe(\n  take(1),\n  tap(v => {\n    document.getElementById(\n      'locationDisplay'\n    ).innerHTML = `Your first click was on location ${v.screenX}:${v.screenY}`;\n  })\n);\n\nconst subscribe = oneClickEvent.subscribe();\n")),(0,l.kt)("h3",{id:"\u5176\u4ed6\u8d44\u6e90"},"\u5176\u4ed6\u8d44\u6e90"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://cn.rx.js.org/class/es6/Observable.js~Observable.html#instance-method-take"},"take")," \ud83d\udcf0 - \u5b98\u65b9\u6587\u6863"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://egghead.io/lessons/rxjs-filtering-operators-take-first-skip?course=rxjs-beyond-the-basics-operators-in-depth"},"\u8fc7\u6ee4\u64cd\u4f5c\u7b26: take, first, skip")," \ud83d\udcf9 \ud83d\udcb5 - Andr\xe9 Staltz")),(0,l.kt)("hr",null),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\ud83d\udcc1 \u6e90\u7801:  ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/take.ts"},"https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/take.ts"))))}k.isMDXComponent=!0}}]);
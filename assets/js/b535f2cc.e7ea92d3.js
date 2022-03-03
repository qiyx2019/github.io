"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5371],{3905:function(e,r,n){n.d(r,{Zo:function(){return c},kt:function(){return m}});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=t.createContext({}),i=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},c=function(e){var r=i(e.components);return t.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},b=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),b=i(n),m=a,d=b["".concat(u,".").concat(m)]||b[m]||p[m]||l;return n?t.createElement(d,s(s({ref:r},c),{},{components:n})):t.createElement(d,s({ref:r},c))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=b;var o={};for(var u in r)hasOwnProperty.call(r,u)&&(o[u]=r[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var i=2;i<l;i++)s[i]=n[i];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}b.displayName="MDXCreateElement"},9867:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return i},toc:function(){return c},default:function(){return b}});var t=n(7462),a=n(3366),l=(n(7294),n(3905)),s=["components"],o={},u="shareReplay",i={unversionedId:"rx/multicasting/sharereplay",id:"rx/multicasting/sharereplay",title:"shareReplay",description:"\u51fd\u6570\u7b7e\u540d number, windowTime? Observable",source:"@site/docs/rx/multicasting/sharereplay.md",sourceDirName:"rx/multicasting",slug:"/rx/multicasting/sharereplay",permalink:"/blog/docs/rx/multicasting/sharereplay",tags:[],version:"current",frontMatter:{},sidebar:"rx",previous:{title:"share",permalink:"/blog/docs/rx/multicasting/share"},next:{title:"\u8f6c\u6362\u64cd\u4f5c\u7b26",permalink:"/blog/docs/rx/transformation/"}},c=[{value:"\u51fd\u6570\u7b7e\u540d: <code>shareReplay(bufferSize?: number, windowTime?: number, scheduler?I IScheduler): Observable</code>",id:"\u51fd\u6570\u7b7e\u540d-sharereplaybuffersize-number-windowtime-number-scheduleri-ischeduler-observable",children:[],level:4},{value:"\u5171\u4eab\u6e90 observable \u5e76\u91cd\u653e\u6307\u5b9a\u6b21\u6570\u7684\u53d1\u51fa\u3002",id:"\u5171\u4eab\u6e90-observable-\u5e76\u91cd\u653e\u6307\u5b9a\u6b21\u6570\u7684\u53d1\u51fa",children:[{value:"\u4e3a\u4ec0\u4e48\u4f7f\u7528 <code>shareReplay</code>\uff1f",id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528-sharereplay",children:[],level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[{value:"\u793a\u4f8b 1: \u591a\u4e2a\u8ba2\u9605\u8005\u5171\u4eab\u6e90 observable",id:"\u793a\u4f8b-1-\u591a\u4e2a\u8ba2\u9605\u8005\u5171\u4eab\u6e90-observable",children:[],level:5}],level:3},{value:"\u5176\u4ed6\u8d44\u6e90",id:"\u5176\u4ed6\u8d44\u6e90",children:[],level:3}],level:2}],p={toc:c};function b(e){var r=e.components,n=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"sharereplay"},"shareReplay"),(0,l.kt)("h4",{id:"\u51fd\u6570\u7b7e\u540d-sharereplaybuffersize-number-windowtime-number-scheduleri-ischeduler-observable"},"\u51fd\u6570\u7b7e\u540d: ",(0,l.kt)("inlineCode",{parentName:"h4"},"shareReplay(bufferSize?: number, windowTime?: number, scheduler?I IScheduler): Observable")),(0,l.kt)("h2",{id:"\u5171\u4eab\u6e90-observable-\u5e76\u91cd\u653e\u6307\u5b9a\u6b21\u6570\u7684\u53d1\u51fa"},"\u5171\u4eab\u6e90 observable \u5e76\u91cd\u653e\u6307\u5b9a\u6b21\u6570\u7684\u53d1\u51fa\u3002"),(0,l.kt)("h3",{id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528-sharereplay"},"\u4e3a\u4ec0\u4e48\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"h3"},"shareReplay"),"\uff1f"),(0,l.kt)("p",null,"\u901a\u5e38\u554a\uff0c\u5f53\u6709\u526f\u4f5c\u7528\u6216\u7e41\u91cd\u7684\u8ba1\u7b97\u65f6\uff0c\u4f60\u4e0d\u5e0c\u671b\u5728\u591a\u4e2a\u8ba2\u9605\u8005\u4e4b\u95f4\u91cd\u590d\u6267\u884c\u65f6\uff0c\u4f1a\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"shareReplay")," \u3002\n\u5f53\u4f60\u77e5\u9053\u6d41\u7684\u540e\u6765\u8ba2\u9605\u8005\u4e5f\u9700\u8981\u8bbf\u95ee\u4e4b\u524d\u53d1\u51fa\u7684\u503c\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"shareReplay")," \u5728\u8fd9\u79cd\u573a\u666f\u4e0b\u4e5f\u662f\u6709\u4ef7\u503c\u7684\u3002\n\u8fd9\u79cd\u5728\u8ba2\u9605\u8fc7\u7a0b\u4e2d\u91cd\u653e\u503c\u7684\u80fd\u529b\u662f\u533a\u5206 ",(0,l.kt)("a",{parentName:"p",href:"/blog/docs/rx/multicasting/share"},(0,l.kt)("inlineCode",{parentName:"a"},"share"))," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"shareReplay")," \u7684\u5173\u952e\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\uff0c\u52a0\u5165\u4f60\u6709\u4e00\u4e2a\u53d1\u51fa\u6700\u540e\u8bbf\u95ee url \u7684 observable \u3002\n\u5728\u7b2c\u4e00\u4e2a\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u5c06\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"/blog/docs/rx/multicasting/share"},(0,l.kt)("inlineCode",{parentName:"a"},"share")),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// \u4f7f\u7528 subject \u6a21\u62df url \u7684\u53d8\u5316\nconst routeEnd = new Subject<{data: any, url: string}>();\n\n// \u63d0\u53d6 url \u5e76\u4e0e\u540e\u6765\u8ba2\u9605\u8005\u5171\u4eab\nconst lastUrl = routeEnd.pipe(\n  pluck('url'),\n  share()\n);\n\n// \u8d77\u59cb\u8ba2\u9605\u8005\u662f\u5fc5\u987b\u7684\nconst initialSubscriber = lastUrl.subscribe(console.log);\n\n// \u6a21\u62df\u8def\u7531\u53d8\u5316\nrouteEnd.next({data: {}, url: 'my-path'});\n\n// \u6ca1\u6709\u4efb\u4f55\u8f93\u51fa\nconst lateSubscriber = lastUrl.subscribe(console.log);\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u7684\u793a\u4f8b\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"lateSubscriber")," \u8ba2\u9605\u6e90 observable \u540e\u6ca1\u6709\u4efb\u4f55\u8f93\u51fa\u3002\n\u73b0\u5728\u6211\u4eec\u60f3\u8981\u8bbf\u95ee\u8ba2\u9605\u4e2d\u7684\u6700\u65b0\u53d1\u51fa\u503c\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"shareReplay")," \u6765\u5b8c\u6210:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { Subject } from 'rxjs/Subject';\nimport { ReplaySubject } from 'rxjs/ReplaySubject';\nimport { pluck, share, shareReplay, tap } from 'rxjs/operators';\n\n// \u4f7f\u7528 subject \u6a21\u62df url \u7684\u53d8\u5316\nconst routeEnd = new Subject<{data: any, url: string}>();\n\n// \u63d0\u53d6 url \u5e76\u4e0e\u540e\u6765\u8ba2\u9605\u8005\u5171\u4eab\nconst lastUrl = routeEnd.pipe(\n  tap(_ => console.log('executed')),\n  pluck('url'),\n  // \u9ed8\u8ba4\u4e3a\u6240\u6709\u503c\uff0c\u56e0\u6b64\u6211\u4eec\u5c06\u5176\u8bbe\u7f6e\u4e3a\u4ec5\u4fdd\u7559\u5e76\u91cd\u653e\u6700\u540e\u4e00\u4e2a\u503c\n  shareReplay(1)\n);\n\n// \u8d77\u59cb\u8ba2\u9605\u8005\u662f\u5fc5\u987b\u7684\nconst initialSubscriber = lastUrl.subscribe(console.log);\n\n// \u6a21\u62df\u8def\u7531\u53d8\u5316\n// \u8f93\u51fa: 'executed', 'my-path'\nrouteEnd.next({data: {}, url: 'my-path'});\n\n// \u8f93\u51fa: 'my-path'\nconst lateSubscriber = lastUrl.subscribe(console.log);\n")),(0,l.kt)("p",null,"\u6ce8\u610f\uff0c\u5982\u679c\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"ReplaySubject")," \u8ba2\u9605 ",(0,l.kt)("inlineCode",{parentName:"p"},"lastUrl")," \u6d41\uff0c\u7136\u540e\u518d\u8ba2\u9605 ",(0,l.kt)("inlineCode",{parentName:"p"},"ReplaySubject"),"\uff0c\n\u8fd9\u79cd\u884c\u4e3a\u4e0e\u4f7f\u7528 shareReplay \u7c7b\u4f3c:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// \u4f7f\u7528 subject \u6a21\u62df url \u7684\u53d8\u5316\nconst routeEnd = new Subject<{data: any, url: string}>();\n\n// \u4f7f\u7528 ReplaySubject \u6765\u66ff\u4ee3 shareReplay\nconst shareWithReplay = new ReplaySubject();\n\n// \u53d6 url \u5e76\u4e0e\u540e\u6765\u8ba2\u9605\u8005\u5171\u4eab\nconst lastUrl = routeEnd.pipe(\n  pluck('url')\n)\n.subscribe(val => shareWithReplay.next(val));\n\n// \u6a21\u62df\u8def\u7531\u53d8\u5316\nrouteEnd.next({data: {}, url: 'my-path'});\n\n// \u8ba2\u9605 ReplaySubject \n// \u8f93\u51fa: 'my path'\nshareWithReplay.subscribe(console.log);\n")),(0,l.kt)("p",null,"\u4e8b\u5b9e\u4e0a\uff0c\u5982\u679c\u6df1\u5165\u6e90\u7801\uff0c\u6211\u4eec\u53ef\u4ee5\u53d1\u73b0\u4e24\u8005\u4e4b\u95f4\u4f7f\u7528\u7684\u6280\u672f\u662f\u7c7b\u4f3c\u7684\u3002\n\u5f53\u8ba2\u9605\u53d1\u751f\u540e\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"shareReplay")," \u4f1a\u8ba2\u9605\u6e90 observable\uff0c\u5e76\u901a\u8fc7\u5185\u90e8\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"ReplaySubject"),"\n\u6765\u53d1\u9001\u503c:"),(0,l.kt)("p",null,"(\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ReactiveX/rxjs/blob/b25db9f369b07f26cf2fc11714ec1990b78a4536/src/internal/operators/shareReplay.ts#L26-L37"},"source"),"\n)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"  return function shareReplayOperation(this: Subscriber<T>, source: Observable<T>) {\n    refCount++;\n    if (!subject || hasError) {\n      hasError = false;\n      subject = new ReplaySubject<T>(bufferSize, windowTime, scheduler);\n      subscription = source.subscribe({\n        next(value) { subject.next(value); },\n        error(err) {\n          hasError = true;\n          subject.error(err);\n        },\n        complete() {\n          isComplete = true;\n          subject.complete();\n        },\n      });\n    }\n\n\n    const innerSub = subject.subscribe(this);\n\n\n    return () => {\n      refCount--;\n      innerSub.unsubscribe();\n      if (subscription && refCount === 0 && isComplete) {\n        subscription.unsubscribe();\n      }\n    };\n  };\n}\n")),(0,l.kt)("div",{class:"ua-ad"}," "),(0,l.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("h5",{id:"\u793a\u4f8b-1-\u591a\u4e2a\u8ba2\u9605\u8005\u5171\u4eab\u6e90-observable"},"\u793a\u4f8b 1: \u591a\u4e2a\u8ba2\u9605\u8005\u5171\u4eab\u6e90 observable"),(0,l.kt)("p",null,"(\n",(0,l.kt)("a",{parentName:"p",href:"https://stackblitz.com/edit/typescript-9cfnxm?file=index.ts&devtoolsheight=100"},"Stackblitz"),"\n)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"// RxJS v6+\nimport { Subject, ReplaySubject } from 'rxjs';\nimport { pluck, share, shareReplay, tap } from 'rxjs/operators';\n\n// \u4f7f\u7528 subject \u6a21\u62df url \u7684\u53d8\u5316\nconst routeEnd = new Subject<{data: any, url: string}>();\n// \u63d0\u53d6 url \u5e76\u4e0e\u540e\u6765\u8ba2\u9605\u8005\u5171\u4eab\nconst lastUrl = routeEnd.pipe(\n  tap(_ => console.log('executed')),\n  pluck('url'),\n  // \u9ed8\u8ba4\u4e3a\u6240\u6709\u503c\uff0c\u56e0\u6b64\u6211\u4eec\u5c06\u5176\u8bbe\u7f6e\u4e3a\u4ec5\u4fdd\u7559\u5e76\u91cd\u64ad\u6700\u540e\u4e00\u4e2a\u503c\n  shareReplay(1)\n);\n// \u8d77\u59cb\u8ba2\u9605\u8005\u662f\u5fc5\u987b\u7684\nconst initialSubscriber = lastUrl.subscribe(console.log)\n// \u6a21\u62df\u8def\u7531\u53d8\u5316\n// \u8f93\u51fa: 'executed', 'my-path'\nrouteEnd.next({data: {}, url: 'my-path'});\n// \u8f93\u51fa: 'my-path'\nconst lateSubscriber = lastUrl.subscribe(console.log);\n")),(0,l.kt)("h3",{id:"\u5176\u4ed6\u8d44\u6e90"},"\u5176\u4ed6\u8d44\u6e90"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://cn.rx.js.org/class/es6/Observable.js~Observable.html#instance-method-shareReplay"},"shareReplay"),"\n\ud83d\udcf0 - \u5b98\u65b9\u6587\u6863")),(0,l.kt)("hr",null),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\ud83d\udcc1 \u6e90\u7801:\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/shareReplay.ts"},"https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/shareReplay.ts"))))}b.isMDXComponent=!0}}]);
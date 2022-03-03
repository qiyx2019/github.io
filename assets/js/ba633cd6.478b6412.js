"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5395],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),p=c(r),m=i,f=p["".concat(l,".").concat(m)]||p[m]||s[m]||a;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=p;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:i,o[1]=u;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6213:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],u={},l="auditTime",c={unversionedId:"rx/filtering/audittime",id:"rx/filtering/audittime",title:"auditTime",description:"\u51fd\u6570\u7b7e\u540d number, scheduler? Observable",source:"@site/docs/rx/filtering/audittime.md",sourceDirName:"rx/filtering",slug:"/rx/filtering/audittime",permalink:"/blog/docs/rx/filtering/audittime",tags:[],version:"current",frontMatter:{},sidebar:"rx",previous:{title:"audit",permalink:"/blog/docs/rx/filtering/audit"},next:{title:"debounce",permalink:"/blog/docs/rx/filtering/debounce"}},d=[{value:"\u51fd\u6570\u7b7e\u540d: <code>audit(duration: number, scheduler?: Scheduler): Observable</code>",id:"\u51fd\u6570\u7b7e\u540d-auditduration-number-scheduler-scheduler-observable",children:[],level:4},{value:"\u5728\u7ed9\u5b9a\u7684\u65f6\u95f4\u5185\u5ffd\u7565\u53d1\u51fa\u7684\u6570\u636e\uff0c\u65f6\u95f4\u5230\u540e\u53d1\u51fa\u6700\u65b0\u503c",id:"\u5728\u7ed9\u5b9a\u7684\u65f6\u95f4\u5185\u5ffd\u7565\u53d1\u51fa\u7684\u6570\u636e\u65f6\u95f4\u5230\u540e\u53d1\u51fa\u6700\u65b0\u503c",children:[{value:" \u793a\u4f8b\u5c3d\u8bf7\u671f\u5f85\uff01 ",id:"-\u793a\u4f8b\u5c3d\u8bf7\u671f\u5f85-",children:[],level:3},{value:"\u5176\u4ed6\u8d44\u6e90",id:"\u5176\u4ed6\u8d44\u6e90",children:[],level:3}],level:2}],s={toc:d};function p(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"audittime"},"auditTime"),(0,a.kt)("h4",{id:"\u51fd\u6570\u7b7e\u540d-auditduration-number-scheduler-scheduler-observable"},"\u51fd\u6570\u7b7e\u540d: ",(0,a.kt)("inlineCode",{parentName:"h4"},"audit(duration: number, scheduler?: Scheduler): Observable")),(0,a.kt)("h2",{id:"\u5728\u7ed9\u5b9a\u7684\u65f6\u95f4\u5185\u5ffd\u7565\u53d1\u51fa\u7684\u6570\u636e\u65f6\u95f4\u5230\u540e\u53d1\u51fa\u6700\u65b0\u503c"},"\u5728\u7ed9\u5b9a\u7684\u65f6\u95f4\u5185\u5ffd\u7565\u53d1\u51fa\u7684\u6570\u636e\uff0c\u65f6\u95f4\u5230\u540e\u53d1\u51fa\u6700\u65b0\u503c"),(0,a.kt)("h3",{id:"-\u793a\u4f8b\u5c3d\u8bf7\u671f\u5f85-"},"[ \u793a\u4f8b\u5c3d\u8bf7\u671f\u5f85\uff01 ]"),(0,a.kt)("h3",{id:"\u5176\u4ed6\u8d44\u6e90"},"\u5176\u4ed6\u8d44\u6e90"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://cn.rx.js.org/class/es6/Observable.js~Observable.html#instance-method-auditTime"},"auditTime"),"\n\ud83d\udcf0 - \u5b98\u65b9\u6587\u6863")),(0,a.kt)("hr",null),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\ud83d\udcc1 \u6e90\u7801:\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/auditTime.ts"},"https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/auditTime.ts"))))}p.isMDXComponent=!0}}]);
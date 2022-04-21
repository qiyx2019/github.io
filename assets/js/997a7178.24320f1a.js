"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7191],{3905:function(n,e,t){t.d(e,{Zo:function(){return p},kt:function(){return m}});var l=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,l)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function u(n,e){if(null==n)return{};var t,l,o=function(n,e){if(null==n)return{};var t,l,o={},r=Object.keys(n);for(l=0;l<r.length;l++)t=r[l],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(l=0;l<r.length;l++)t=r[l],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var s=l.createContext({}),c=function(n){var e=l.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},p=function(n){var e=c(n.components);return l.createElement(s.Provider,{value:e},n.children)},i={inlineCode:"code",wrapper:function(n){var e=n.children;return l.createElement(l.Fragment,{},e)}},b=l.forwardRef((function(n,e){var t=n.components,o=n.mdxType,r=n.originalType,s=n.parentName,p=u(n,["components","mdxType","originalType","parentName"]),b=c(t),m=o,k=b["".concat(s,".").concat(m)]||b[m]||i[m]||r;return t?l.createElement(k,a(a({ref:e},p),{},{components:t})):l.createElement(k,a({ref:e},p))}));function m(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var r=t.length,a=new Array(r);a[0]=b;var u={};for(var s in e)hasOwnProperty.call(e,s)&&(u[s]=e[s]);u.originalType=n,u.mdxType="string"==typeof n?n:o,a[1]=u;for(var c=2;c<r;c++)a[c]=t[c];return l.createElement.apply(null,a)}return l.createElement.apply(null,t)}b.displayName="MDXCreateElement"},8819:function(n,e,t){t.r(e),t.d(e,{contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var l=t(7462),o=t(3366),r=(t(7294),t(3905)),a=["components"],u={title:"\u4ee3\u7801\u5207\u5272"},s=void 0,c={unversionedId:"webpack/2018-10-07-webpack-code-splitting",id:"webpack/2018-10-07-webpack-code-splitting",title:"\u4ee3\u7801\u5207\u5272",description:"\u5728\u4e0a\u4e00\u7bc7\u6587\u7ae0[webpack\uff1a\u6253\u5305\u540e\u7684bundle\u6587\u4ef6\u91cc\u5230\u5e95\u6709\u4ec0\u4e48]\u8fd9\u7bc7\u6587\u7ae0\u89e3\u91ca\u4e86\u4ec0\u4e48\u662fbundle\u6587\u4ef6\u4ee5\u53cabundle\u6587\u4ef6\u91cc\u7684\u5177\u4f53\u5185\u5bb9\u3002",source:"@site/docs/webpack/2018-10-07-webpack-code-splitting.md",sourceDirName:"webpack",slug:"/webpack/2018-10-07-webpack-code-splitting",permalink:"/blog/docs/webpack/2018-10-07-webpack-code-splitting",tags:[],version:"current",frontMatter:{title:"\u4ee3\u7801\u5207\u5272"},sidebar:"webpack",previous:{title:"webpack\uff1a\u6253\u5305\u540e\u7684bundle\u6587\u4ef6\u91cc\u5230\u5e95\u6709\u4ec0\u4e48",permalink:"/blog/docs/webpack/2018-10-06-webpack-what-in-bundle"},next:{title:"webpack\uff1a\u5982\u4f55\u89e3\u51b3\u6d4f\u89c8\u5668\u7f13\u5b58\u95ee\u9898",permalink:"/blog/docs/webpack/2018-10-09-webpack-caching"}},p=[{value:"CommonsChunkPlugin",id:"commonschunkplugin",children:[],level:2}],i={toc:p};function b(n){var e=n.components,t=(0,o.Z)(n,a);return(0,r.kt)("wrapper",(0,l.Z)({},i,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5728\u4e0a\u4e00\u7bc7\u6587\u7ae0","[webpack\uff1a\u6253\u5305\u540e\u7684bundle\u6587\u4ef6\u91cc\u5230\u5e95\u6709\u4ec0\u4e48]","\u8fd9\u7bc7\u6587\u7ae0\u89e3\u91ca\u4e86\u4ec0\u4e48\u662fbundle\u6587\u4ef6\u4ee5\u53cabundle\u6587\u4ef6\u91cc\u7684\u5177\u4f53\u5185\u5bb9\u3002\n\u4e5f\u63d0\u5230\u8fc7\u5355\u5355\u53ea\u662f\u6709\u591a\u5c11\u4e2a\u5165\u53e3\u6587\u4ef6\uff0c\u6253\u5305\u51fa\u591a\u5c11\u4e2abundle\u6587\u4ef6\u8fd9\u79cd\u65b9\u5f0f\uff0c\u4f1a\u5bfc\u81f4\u4ee3\u7801\u5197\u4f59\uff0c\u540c\u4e00\u6a21\u5757\u4ee3\u7801\u4f1a\u88ab\u91cd\u590d\u6253\u5305\u5230\u4e0d\u540c\u7684bundle\u6587\u4ef6\u4e2d\u3002"),(0,r.kt)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u6211\u4eec\u9700\u8981\u628a\u91cd\u590d\u5171\u7528\u4ee3\u7801\u63d0\u53d6\u51fa\u6765\uff0c\u653e\u5728\u5355\u72ec\u7684\u6587\u4ef6\u4e2d\uff0c\u5176\u4ed6bundle\u6709\u5f15\u7528\u516c\u7528\u4ee3\u7801\u53ea\u9700\u8981\u52a0\u8f7d\u8fd9\u4e2a\u5355\u72ec\u6587\u4ef6\u5c31\u53ef\u4ee5\u4e86\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u63d0\u53d6\u5165\u53e3\u6587\u4ef6\u4e2d\u516c\u7528\u7684\u4ee3\u7801\uff0c\u8fd9\u79cd\u884c\u4e3a\u5c31\u662f\u4ee3\u7801\u5207\u5272\uff0c\u751f\u6210\u7684\u72ec\u7acb\u6587\u4ef6\u5c31\u662fchunk\u6587\u4ef6\u3002")),(0,r.kt)("p",null,"\u4e0b\u9762\u5c31\u6765\u4ecb\u7ecd\u5982\u4f55\u5728 ",(0,r.kt)("strong",{parentName:"p"},"webpack3")," \u4e2d\u8fdb\u884c\u4ee3\u7801\u5207\u5272\u3002"),(0,r.kt)("h2",{id:"commonschunkplugin"},"CommonsChunkPlugin"),(0,r.kt)("p",null,"\u5728webpack3\u4e2d\u662f\u901a\u8fc7CommonsChunkPlugin\u5b9e\u73b0\u516c\u7528\u4ee3\u7801\u5207\u5272\uff0c\u5177\u4f53\u7528\u6cd5\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,"a \u548c c \u90fd\u5f15\u7528\u4e86b\u6587\u4ef6\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"//a.js\nvar b = require('./b.js');\nconsole.log('this is a.js file');\nb.b();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"//b.js\nexports.b = function () {\n    console.log('this is b.js file')\n};\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"//c.js\nvar b = require('./b.js');\nconsole.log('this is c.js file');\nb.b();\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7b2c\u4e00\u79cd\u65b9\u5f0f\uff0c",(0,r.kt)("inlineCode",{parentName:"strong"},"new webpack.optimize.CommonsChunkPlugin({name: 'commons'})"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"//webpack.bundle.js\nmodule.exports = {\n    entry: {\n        'a': './src/app/bundle/a.js',\n        'c': './src/app/bundle/c.js'\n    },\n    output: {\n        path: path.join(__dirname, '../build-bundle'),\n        filename: 'js/[name].bundle.js'\n    },\n    plugins: [\n        new CleanWebpackPlugin(['./build-bundle'], { root: path.join(process.cwd(), '') }),\n        new webpack.optimize.CommonsChunkPlugin({ name: 'commons' }),\n    ]\n};\n")),(0,r.kt)("p",null,"\u6700\u540e\u751f\u6210\u4e09\u4e2abundle\u6587\u4ef6\uff1aa.bundle.js\u3001c.bundle.js\u3001commons.bundle.js\uff0c\u5177\u4f53\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"//a.bundle.js\nwebpackJsonp([1], [\n        /* 0 */,\n        /* 1 */\n        (function (module, exports, __webpack_require__) {\n\n        // this is use to analyse what's in bundle file\n\n        var b = __webpack_require__(0);\n\n        console.log('this is a.js file');\n\n        b.b();\n})\n], [1]);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"//c.bundle.js\nwebpackJsonp([2], {\n        /*2*/\n        (function (module, exports, __webpack_require__) {\n\n            var b = __webpack_require__(0);\n\n            console.log('this is c.js file');\n\n            b.b();\n})\n\n}, [2]);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"//commons.bundle.js\n(function (modules) { // webpackBootstrap\n    //\u5728\u8fd9\u91cc\u7701\u7565\u4e86webpack\u751f\u6210\u7684\u4ee3\u7801\n})\n([\n    /* 0 */\n    (function (module, exports) {\n            // this is use to analyse what's in bundle file\n            exports.b = function () {\n                console.log('this is b.js file')\n            };\n        })\n]);\n")),(0,r.kt)("p",null,"\u4ece\u4e0a\u9762\u4ee3\u7801\u53ef\u4ee5\u770b\u51fa\uff0ccommon.bundle.js\u91cc\u9762\u5305\u542b\u4e86b.js\u7684\u4ee3\u7801\u5e76\u4e14module id \u4e3a0\uff0ca.bunlde.js c.bundle.js\u6587\u4ef6\u5206\u522b\u901a\u8fc7module id\u5bf9b\u6587\u4ef6\u5b9e\u73b0\u4e86\u52a0\u8f7d\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",null,"CommonsChunkPlugin\u5b9a\u4e49\u4e86\u516c\u7528\u4ee3\u7801\u9700\u8981\u653e\u5230commons.bundle.js\u6587\u4ef6\u4e2d\uff0c\u5728webpack\u6253\u5305\u8fc7\u7a0b\u4e2d\uff0c\u53d1\u73b0\u6ca1\u6709commons\u8fd9\u4e2abundle\u6587\u4ef6\uff0c\u4f1a\u65b0\u521b\u5efa\u8fd9\u4e2a\u6587\u4ef6\uff0c\u5e76\u4e14\u628a\u5165\u53e3\u6587\u4ef6a.js\u548cc.j\u8fd9\u4e2a\u6587\u4ef6\u4e2d\u5171\u7528\u4ee3\u7801\uff08b.js\uff09\u62bd\u53d6\u51fa\u6765\u653e\u5230commons.bundle.js\u6587\u4ef6\u4e2d\u3002a \u548c c budnle\u6587\u4ef6\u4e2d\u53ea\u4fdd\u7559\u81ea\u5df1\u7684\u4ee3\u7801\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7b2c\u4e8c\u79cd\u65b9\u5f0f\uff0c",(0,r.kt)("inlineCode",{parentName:"strong"},"new webpack.optimize.CommonsChunkPlugin({ name: 'c' })"))),(0,r.kt)("p",null,"\u6211\u4eec\u628acommons\u6362\u6210c\uff0c\u6700\u540e\u751f\u6210\u4e24\u4e2abundle\u6587\u4ef6 a.bunlde.js\u3001c.bundle.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"//a.bundle.js\nwebpackJsonp([1], [\n        /* 0 */\n        (function (module, exports, __webpack_require__) {\n\n        // this is use to analyse what's in bundle file\n\n        var b = __webpack_require__(0);\n\n        console.log('this is a.js file');\n\n        b.b();\n})\n], [1]);\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"//c.bundle.js\n(function (modules) { // webpackBootstrap\n    // \u8fd9\u91cc\u7701\u7565webpack\u751f\u6210\u7684\u4ee3\u7801\n})\n    ([\n        /* 0 */\n        (function (module, exports) {\n            // this is use to analyse what's in bundle file\n            exports.b = function () {\n                console.log('this is b.js file')\n            };\n        }),\n        /* 2 */\n        (function (module, exports, __webpack_require__) {\n\n            var b = __webpack_require__(0);\n\n            console.log('this is c.js file');\n\n            b.b();\n\n        })\n    ]);\n")),(0,r.kt)("p",null,"\u4ece\u4e0a\u9762\u7684bundle\u6587\u4ef6\u4ee3\u7801\u53ef\u4ee5\u770b\u51fa\uff0c\u516c\u7528\u4ee3\u7801\u6a21\u5757\uff08b.js\uff09\u88ab\u653e\u5230 c.bundle \u6587\u4ef6\u4e2d\u4e86\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",null,"CommonsChunkPlugin\u5b9a\u4e49\u4e86\u516c\u7528\u4ee3\u7801\u9700\u8981\u653e\u5230c.bundle.js\u6587\u4ef6\u4e2d\uff0c\u5728webpack\u6253\u5305\u8fc7\u7a0b\u4e2d\uff0c\u53d1\u73b0\u5df2\u7ecf\u6709c.bundle.js\u6587\u4ef6\uff0c\u4f1a\u628a\u5165\u53e3\u6587\u4ef6a.js\u548cc.j\u8fd9\u4e2a\u6587\u4ef6\u4e2d\u5171\u7528\u4ee3\u7801\uff08b.js\uff09\u62bd\u53d6\u51fa\u6765\u653e\u5230c.bundle.js\u6587\u4ef6\u4e2d\u3002a.budnle\u6587\u4ef6\u4e2d\u53ea\u4fdd\u7559\u81ea\u5df1\u7684\u4ee3\u7801\u3002")),(0,r.kt)("p",null,"\u5173\u4e8eCommonsChunkPlugin\u5176\u4ed6\u5c5e\u6027\u7684\u5e94\u7528\u53ef\u4ee5\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://webpack.js.org/plugins/commons-chunk-plugin/"},"webpack \u4ee3\u7801\u5207\u5272\u5b98\u65b9\u6587\u6863")))}b.isMDXComponent=!0}}]);
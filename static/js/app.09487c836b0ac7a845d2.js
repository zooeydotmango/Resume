webpackJsonp([1],{"1fuB":function(t,e,n){t.exports=n.p+"static/img/ui.1889e45.png"},"4bLZ":function(t,e){},"8Az2":function(t,e,n){t.exports=n.p+"static/img/fm.57bca71.png"},HBdN:function(t,e){},Klcd:function(t,e,n){t.exports=n.p+"static/img/blog.6dec2f0.png"},Mn21:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),a={data:function(){return{activeIndex:"2"}},created:function(){this.isInner()},methods:{handleSelect:function(t,e){this.activeIndex=e[0]},isInner:function(){var t=this;console.log(this.$route.path),"/"!==this.$route.path&&(this.$nextTick(function(){t.activeIndex="2"}),console.log(1))}}},s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",[i("el-row",[i("el-col",{attrs:{span:16}},[i("el-menu",{attrs:{"default-active":t.activeIndex,mode:"horizontal"},on:{select:t.handleSelect}},[i("el-menu-item",{attrs:{index:"1"}},[i("router-link",{attrs:{to:"/"}},[t._v("首页")])],1),t._v(" "),i("el-submenu",{attrs:{index:"2"}},[i("template",{slot:"title"},[t._v("作品")]),t._v(" "),i("el-menu-item",{attrs:{index:"2-1"}},[i("router-link",{attrs:{to:"/blog"}},[t._v("共享博客")])],1),t._v(" "),i("el-menu-item",{attrs:{index:"3-2"}},[i("router-link",{attrs:{to:"/fm"}},[t._v("随心FM")])],1),t._v(" "),i("el-menu-item",{attrs:{index:"3-3"}},[i("router-link",{attrs:{to:"/ui"}},[t._v("Zooey-UI")])],1)],2),t._v(" "),i("el-menu-item",{attrs:{index:"3"}},[t._v("PDF简历")]),t._v(" "),i("el-menu-item",{attrs:{index:"4"}},[i("a",{attrs:{href:"https://github.com/zooeydotmango",target:"_blank"}},[t._v("Github")])])],1)],1),t._v(" "),i("el-col",{staticClass:"logo",attrs:{span:8}},[i("img",{attrs:{src:n("z1Q+"),alt:"logo"}})])],1)],1)},staticRenderFns:[]};var o={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",[this._v("\n  Copyright Ⓒ 2019 "),e("a",{attrs:{href:"https://github.com/zooeydotmango"}},[this._v("Zooey's Resume")])])}]};var r={name:"App",components:{Header:n("VU/8")(a,s,!1,function(t){n("lfTL")},"data-v-7e289872",null).exports,Footer:n("VU/8")(null,o,!1,function(t){n("4bLZ")},"data-v-13cb492a",null).exports}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Header",{attrs:{id:"header"}}),this._v(" "),e("main",{attrs:{id:"main"}},[e("router-view")],1),this._v(" "),e("Footer",{attrs:{id:"footer"}})],1)},staticRenderFns:[]};var c=n("VU/8")(r,l,!1,function(t){n("rlMo")},null,null).exports,u=n("/ocq"),v=(n("rQGc"),n("Klcd")),d=n.n(v),_=n("1fuB"),m=n.n(_),p=n("8Az2"),f=n.n(p),h={data:function(){return{files:[{fileName:"共享博客",name:"blog",label:["vue.js","ES6"],png:d.a},{fileName:"随心FM",name:"fm",label:["jQuery","CSS3"],png:f.a},{fileName:"Zooe-UI",name:"ui",label:["造轮子","Vue.js"],png:m.a}]}}},g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"index"}},[n("el-row",{staticClass:"introduction"},[n("el-col",{attrs:{span:24}},[n("p",[t._v("hi!我是Zooey")]),t._v(" "),n("p",[t._v("一名前端工程师，爱好Coding，撸猫，热爱尝试让工作更省力的方法")])])],1),t._v(" "),n("el-row",{staticClass:"down"},[n("router-link",{attrs:{to:"/blog"}},[n("el-col",{attrs:{span:8}},[n("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":"#icon-down"}})])])],1)],1),t._v(" "),n("el-row",{staticClass:"files",attrs:{gutter:20}},t._l(t.files,function(e){return n("el-col",{key:e.name,attrs:{span:6}},[n("el-card",{staticClass:"card",attrs:{"body-style":{padding:"10px"},shadow:"always"}},[n("img",{staticClass:"image",attrs:{src:e.png,alt:""+e.fileName}}),t._v(" "),n("div",[n("el-button",{attrs:{type:"text"}},[n("router-link",{attrs:{to:"/"+e.name}},[t._v(t._s(e.fileName))])],1)],1),t._v(" "),n("div",{staticStyle:{padding:"5px"}},t._l(e.label,function(e){return n("el-tag",{key:e,attrs:{effect:"plain"}},[t._v("\n              "+t._s(e)+"\n            ")])}),1)])],1)}),1)],1)},staticRenderFns:[]};var b=n("VU/8")(h,g,!1,function(t){n("lUHz")},"data-v-16a8d956",null).exports,x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"fm"}},[n("h2",[t._v("随心FM")]),t._v(" "),n("div",{staticClass:"blocks"},[n("div",{staticClass:"box a"},[n("p",[n("el-link",{attrs:{href:"https://zooeydotmango.github.io/HeartMusic/index.html",type:"warning"}},[t._v("随心FM")]),t._v("\n        是一个基于jQuery的网页音乐播放器")],1),t._v(" "),n("p",[t._v("可选多种流派，具备音乐播放器功能")]),t._v(" "),n("p",[t._v("涉及vue-cli、vue-router、vuex、axios、webpack、ES6、element-ui等等")])]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"box d"},[n("h5",[t._v("优化：")]),t._v(" "),n("p",[t._v("使用发布订阅模式实现代码解耦，模块化")]),t._v(" "),n("p",[t._v("将实现歌词特效的代码封装起来，形成一个插件")]),t._v(" "),n("p",[t._v("重构代码，使用了webpack打包后部署到github page上")]),t._v(" "),n("p",[n("el-link",{attrs:{href:"https://github.com/zooeydotmango/HeartMusic",type:"warning"}},[t._v("项目地址")])],1)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box b"},[e("img",{staticClass:"image",attrs:{src:n("8Az2"),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box c"},[e("img",{staticClass:"image",attrs:{src:n("rMDm"),alt:""}})])}]};var y=n("VU/8")(null,x,!1,function(t){n("Mn21")},"data-v-2619ddb8",null).exports,C={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"ui"}},[n("h2",[t._v("Zooey-UI")]),t._v(" "),n("div",{staticClass:"blocks"},[n("div",{staticClass:"box a"},[n("p",[n("el-link",{attrs:{href:"https://zooeydotmango.github.io/zooey-UI/",type:"warning"}},[t._v("Zooey-UI")]),t._v("\n        是我基于Vue.js造的一个UI框架")],1),t._v(" "),n("p",[t._v("尝试走完了从需求分析-设计-程序开发-单元测试-文档撰写-持续集成-发布的一整条开发路程")]),t._v(" "),n("p",[t._v("使用ES6语法，配合sass的循环语法实现了响应式组件")])]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"box d"},[n("h5",[t._v("优化：")]),t._v(" "),n("p",[t._v("发布到npm上："),n("el-link",{attrs:{type:"warning",href:"https://registry.npmjs.org/zooeyui"}},[t._v("npm地址")])],1),t._v(" "),n("p",[t._v("将实现歌词特效的代码封装起来，形成一个插件")]),t._v(" "),n("p",[t._v("重构代码，使用了webpack打包后部署到github page上")]),t._v(" "),n("p",[n("el-link",{attrs:{href:"https://github.com/zooeydotmango/HeartMusic",type:"warning"}},[t._v("项目地址")])],1)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box b"},[e("img",{staticClass:"image",attrs:{src:n("1fuB"),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box c"},[e("img",{staticClass:"image",attrs:{src:"",alt:""}})])}]};var w=n("VU/8")(null,C,!1,function(t){n("HBdN")},"data-v-136c862d",null).exports,k={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"blog"}},[n("h2",[t._v("共享博客")]),t._v(" "),n("div",{staticClass:"blocks"},[n("div",{staticClass:"box a"},[n("p",[n("el-link",{attrs:{href:"https://zooeydotmango.github.io/blog-client/",type:"warning"}},[t._v("共享博客")]),t._v("是一个基于Vue.js的轻博客")],1),t._v(" "),n("p",[t._v("具有用户注册、登陆功能，可以展示博客详情、个人主页和个人博客列表，也可以创建、编辑、删除博客")]),t._v(" "),n("p",[t._v("支持markdown格式")]),t._v(" "),n("p",[t._v("涉及vue-cli、vue-router、vuex、axios、webpack、ES6、element-ui等等")])]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box b"},[e("img",{staticClass:"image",attrs:{src:n("Klcd"),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box c"},[e("img",{staticClass:"image",attrs:{src:n("uwo6"),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box d"},[e("h5",[this._v("优化：")]),this._v(" "),e("p",[this._v("使用axios封装底层request")]),this._v(" "),e("p",[this._v("引入Message使得网络传输出错的情况更直观")]),this._v(" "),e("p",[this._v("改善用户体验，也使调试更方便")])])}]};var E=n("VU/8")(null,k,!1,function(t){n("RXm2")},"data-v-d152c696",null).exports;i.default.use(u.a);var z=new u.a({routes:[{path:"/",name:"Index",component:b},{path:"/blog",name:"Blog",component:E},{path:"/fm",name:"FM",component:y},{path:"/ui",name:"UI",component:w}]}),M=n("zL8q"),$=n.n(M);n("fCJj"),n("tvR6");i.default.use($.a),i.default.config.productionTip=!1,new i.default({el:"#app",router:z,components:{App:c},template:"<App/>"})},RXm2:function(t,e){},fCJj:function(t,e){},lUHz:function(t,e){},lfTL:function(t,e){},rMDm:function(t,e,n){t.exports=n.p+"static/img/logic.b1781a5.png"},rQGc:function(t,e){!function(t){var e,n='<svg><symbol id="icon-down" viewBox="0 0 1024 1024"><path d="M511.59 789.362L263.031 540.804H127.089L511.59 925.303l384.499-384.499H760.148L511.59 789.362z m384.499-549.569H760.148L511.59 488.351 263.031 239.793H127.089L511.59 624.294l384.499-384.501z"  ></path></symbol></svg>';if((e=document.getElementsByTagName("script"))[e.length-1].getAttribute("data-injectcss")&&!t.__iconfont__svg__cssinject__){t.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}!function(e){if(document.addEventListener)if(~["complete","loaded","interactive"].indexOf(document.readyState))setTimeout(e,0);else{document.addEventListener("DOMContentLoaded",function t(){document.removeEventListener("DOMContentLoaded",t,!1),e()},!1)}else document.attachEvent&&(i=e,a=t.document,s=!1,(o=function(){try{a.documentElement.doScroll("left")}catch(t){return void setTimeout(o,50)}n()})(),a.onreadystatechange=function(){"complete"==a.readyState&&(a.onreadystatechange=null,n())});function n(){s||(s=!0,i())}var i,a,s,o}(function(){var t,e;(t=document.createElement("div")).innerHTML=n,n=null,(e=t.getElementsByTagName("svg")[0])&&(e.setAttribute("aria-hidden","true"),e.style.position="absolute",e.style.width=0,e.style.height=0,e.style.overflow="hidden",function(t,e){e.firstChild?function(t,e){e.parentNode.insertBefore(t,e)}(t,e.firstChild):e.appendChild(t)}(e,document.body))})}(window)},rlMo:function(t,e){},tvR6:function(t,e){},uwo6:function(t,e,n){t.exports=n.p+"static/img/request.7a62ce5.png"},"z1Q+":function(t,e,n){t.exports=n.p+"static/img/Zooey.4b3425c.png"}},["NHnr"]);
//# sourceMappingURL=app.09487c836b0ac7a845d2.js.map
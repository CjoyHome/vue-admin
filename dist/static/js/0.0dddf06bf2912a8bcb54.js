webpackJsonp([0,1,2],{"/I8L":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={name:"one",data:function(){return{tableData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}]}},methods:{handleSizeChange:function(e){console.log("每页 "+e+" 条")},handleCurrentChange:function(e){console.log("当前页: "+e)}}},r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"one"},[t("div",{staticClass:"con_info"},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:this.tableData,"highlight-current-row":""}},[t("el-table-column",{attrs:{prop:"date",label:"日期",width:"180"}}),this._v(" "),t("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),this._v(" "),t("el-table-column",{attrs:{prop:"address",label:"地址"}})],1)],1),this._v(" "),t("input",{attrs:{type:"text"}}),this._v(" "),t("div",{staticClass:"prag"},[t("div",{staticClass:"block"},[t("el-pagination",{attrs:{"current-page":1,"page-sizes":[100,200,300,400],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:400},on:{"size-change":this.handleSizeChange,"current-change":this.handleCurrentChange}})],1)])])},staticRenderFns:[]};var s=n("C7Lr")(o,r,!1,function(e){n("Qoc4")},"data-v-3cd6f0df",null);t.default=s.exports},"26dS":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("4YfN"),r=n.n(o),s=n("9rMa"),a=(n("zO6J"),{name:"home",data:function(){return{closeState:"false",isCollapse:!1,menuState:!0,editableTabsValue:"0",editableTabs:[],tabIndex:0}},computed:r()({menuBtn:function(){return this.isCollapse?"primary":""}},Object(s.b)(["adminRouter","openedRouter"])),watch:{isCollapse:function(e){console.log(this.isCollapse),console.log(e)}},methods:r()({addTabs:function(e){var t=this.editableTabs,n=this.$router;if(0===t.length){var o={title:e.routerFile,name:e.routerFile,content:"new tab"};t.push(o)}else{for(var r=!1,s=0;s<t.length;s++)e.routerFile===t[s].name&&(r=!0);if(!r){var a={title:e.routerFile,name:e.routerFile,content:"new tab"};t.push(a)}}n.push("/home"+e.path),this.editableTabsValue=e.routerFile,console.log(t),this.setOpenedRouter(t)},clickTab:function(e,t){var n=this.$router;"0"===e.name?n.push("/home/main"):n.push("/home/"+e.name)},removeTab:function(e){var t=this.editableTabs,n=this.editableTabsValue,o=this.$router;n===e&&(t.length>1?e===t[t.length-1].name?(o.push("/home/"+t[t.length-2].name),n=t[t.length-2].name):(o.push("/home/"+t[t.length-1].name),n=t[t.length-1].name):(o.push("/home/main"),n="0")),this.editableTabsValue=n,this.editableTabs=t.filter(function(t){return t.name!==e}),console.log(this.editableTabs),this.setOpenedRouter(this.editableTabs)},handleOpen:function(e,t){console.log(e,t)},handleClose:function(e,t){console.log(e,t)},signOut:function(){this.setRouterList([]),this.setToken(""),window.sessionStorage.removeItem("router"),this.setOpenedRouter([]),this.$router.push("/login")}},Object(s.c)({setRouterList:"SET_ROUTER_LIST",setToken:"SET_TOKEN",setOpenedRouter:"SET_OPENED_ROUTER"}),{httpBtn:function(){this.http.get("https://jsonplaceholder.typicode.com/todos/1").then(function(e){console.log(e)}).catch(function(e){console.log(e)})},repBtn:function(){this.$router.replace({path:"/hello",query:{redirect:decodeURIComponent(this.$router.currentRoute.fullPath)}}),console.log(decodeURIComponent(this.$router.currentRoute.fullPath))},created:function(){this.editableTabs=this.openedRouter,console.log(this.editableTabs)},changeMenu:function(){this.isCollapse=!this.isCollapse}}),created:function(){console.log(this.$route.name.substr(1)),console.log(this.editableTabs),this.editableTabs=this.openedRouter,this.editableTabsValue=this.$route.name.substr(1)}}),i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("el-container",[n("el-header",[n("div",{staticClass:"top"},[n("el-button",{staticClass:"outBtn",attrs:{type:"warning "},on:{click:e.signOut}},[n("i",{staticClass:"fa fa-sign-out",attrs:{"aria-hidden":"true"}})])],1)]),e._v(" "),n("el-container",[n("el-aside",{staticClass:"left"},[n("div",{staticClass:"left"},e._l(e.adminRouter,function(t,o){return n("el-menu",{key:o,staticClass:"el-menu-vertical-demo",attrs:{collapse:e.isCollapse},on:{open:e.handleOpen,close:e.handleClose}},[n("el-submenu",{attrs:{index:t.index}},[n("template",{slot:"title"},[n("i",{class:t.icon}),e._v(" "),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.listName))])]),e._v(" "),e._l(t.routerArray,function(t,o){return n("el-menu-item",{key:t.index,attrs:{index:t.index},on:{click:function(n){e.addTabs(t)}}},[e._v(e._s(t.routerFile))])})],2)],1)}))]),e._v(" "),n("el-main",{},[n("div",{staticClass:"routerBox"},[n("div",{staticClass:"router_tabs linheight45"},[n("el-tabs",{staticClass:"router_tabs linheight45",attrs:{type:"card"},on:{"tab-click":e.clickTab,"tab-remove":e.removeTab},model:{value:e.editableTabsValue,callback:function(t){e.editableTabsValue=t},expression:"editableTabsValue"}},[n("el-tab-pane",{key:"0",attrs:{label:"主页",name:"0"}}),e._v(" "),e._l(e.editableTabs,function(e,t){return n("el-tab-pane",{key:e.name,attrs:{label:e.title,name:e.name,closable:""}})})],2)],1),e._v(" "),n("div",{staticClass:"router router_main"},[n("router-view")],1)])])],1)],1)],1)},staticRenderFns:[]};var l=n("C7Lr")(a,i,!1,function(e){n("YL+G")},"data-v-12ec7e1b",null);t.default=l.exports},"3cXf":function(e,t,n){e.exports={default:n("RJ+u"),__esModule:!0}},"604E":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),e._v(" "),n("h2",[e._v("Essential Links")]),e._v(" "),e._m(0),e._v(" "),n("h2",[e._v("Ecosystem")]),e._v(" "),e._m(1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("\n        Core Docs\n      ")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[e._v("\n        Forum\n      ")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[e._v("\n        Community Chat\n      ")])]),e._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[e._v("\n        Twitter\n      ")])]),e._v(" "),n("br"),e._v(" "),n("li",[n("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[e._v("\n        Docs for This Template\n      ")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var r=n("C7Lr")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},o,!1,function(e){n("80fU")},"data-v-0b467f5c",null);t.default=r.exports},"80fU":function(e,t){},"8o1e":function(e,t){},"A54/":function(e,t){},HrEg:function(e,t){},Qnsi:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"hello"},[t("h1",[this._v("two")])])}]};var r=n("C7Lr")({name:"two",data:function(){return{msg:"Welcome to Your Vue.js App"}}},o,!1,function(e){n("YpZD")},"data-v-7b00a39c",null);t.default=r.exports},Qoc4:function(e,t){},Quw4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("rVsN"),r=n.n(o),s=n("3cXf"),a=n.n(s),i=n("4YfN"),l=n.n(i),u=n("9rMa"),c=(n("zO6J"),function(e){return new Promise(function(e){e()}).then(function(){return e(n("26dS"))}.bind(null,n)).catch(n.oe)}),h={name:"login",data:function(){return{adminRouter:[],userName:"",loginShow:!1,adminUser:"",formInline:{user:"",password:""},ruleInline:{user:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{type:"string",min:6,message:"密码不能少于6位",trigger:"blur"}]}}},created:function(){var e=this;setTimeout(function(){e.loginShow=!0},10)},methods:l()({ajaxbtn:function(){this.http.get("https://randomuser.me/api/?results=25").then(function(e){console.log(e)}).catch(function(e){console.log(e)})},handleSubmit:function(e){var t=this;this.$refs[e].validate(function(e){if(e){t.$Message.success("登陆成功!");var o=t.formInline.user;t.routerDate(o).then(function(e){var o=e;if(o.msg)alert(o.msg);else{var r=JSON.parse(window.sessionStorage.getItem("router"));if(console.log("1111111111111sessionRouter前"),console.log(!r),console.log(o),!r){console.log(r);var s=[{path:"/home",name:"home",component:c,meta:{requireAdmin:!0},children:[]}];o.map(function(e){e.routerArray.map(function(e){s[0].children.push({path:"/home"+e.path,name:e.path,component:function(t){return new Promise(function(e){e()}).then(function(){return t(n("g9CB")("./"+e.routerFile))}.bind(null,n)).catch(n.oe)}})})}),t.$router.addRoutes(s)}window.sessionStorage.router=a()(o),t.setRouterList(o),t.setToken(1),t.$router.push("/home/main")}}).catch(function(e){console.log(e)})}else t.$Message.error("操作失败!")})},httpBtn:function(){this.http.get("https://jsonplaceholder.typicode.com/todos/1").then(function(e){console.log(e)}).catch(function(e){console.log(e)})},repBtn:function(){this.$router.replace({path:"/hello",query:{redirect:decodeURIComponent(this.$router.currentRoute.fullPath)}}),console.log(decodeURIComponent(this.$router.currentRoute.fullPath))},login:function(){}},Object(u.c)({setRouterList:"SET_ROUTER_LIST",setToken:"SET_TOKEN"}),{routerDate:function(e){var t=[];return t="admin"===e?[{listName:"第一项",icon:"el-icon-location",index:"1",routerArray:[{path:"/one",routerFile:"one",index:"1-1"},{path:"/two",routerFile:"two",index:"1-2"}]},{listName:"第二项",icon:"el-icon-message",index:"2",routerArray:[{path:"/three",routerFile:"three",index:"2-2"},{path:"/four",routerFile:"four",index:"2-1"}]}]:"userAdmin"===e?[{listName:"第一项",icon:"el-icon-news",routerArray:[{path:"/one",routerFile:"one",index:"1-1"},{path:"/two",routerFile:"two",index:"1-2"}]}]:{msg:"请输入账号"},new r.a(function(e,n){e(t)})}})},d={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("button",{staticStyle:{position:"fixed","z-index":"2001"},on:{click:e.ajaxbtn}},[e._v("请求")]),e._v(" "),e.loginShow?n("transition",{attrs:{name:"login-animation",appear:""}},[n("div",{staticClass:"loginBox"},[n("div",{staticClass:"loginTitle"},[e._v("\n                  登陆\n              ")]),e._v(" "),n("Form",{ref:"formInline",attrs:{model:e.formInline,rules:e.ruleInline,inline:""}},[n("FormItem",{staticClass:"itemBox",attrs:{prop:"user"}},[n("Input",{attrs:{type:"text",placeholder:"用户名"},model:{value:e.formInline.user,callback:function(t){e.$set(e.formInline,"user",t)},expression:"formInline.user"}},[n("Icon",{attrs:{slot:"prepend",type:"ios-person-outline"},slot:"prepend"})],1)],1),e._v(" "),n("FormItem",{staticClass:"itemBox",attrs:{prop:"password"}},[n("Input",{attrs:{type:"password",placeholder:"密码"},model:{value:e.formInline.password,callback:function(t){e.$set(e.formInline,"password",t)},expression:"formInline.password"}},[n("Icon",{attrs:{slot:"prepend",type:"ios-lock-outline"},slot:"prepend"})],1)],1),e._v(" "),n("FormItem",{staticClass:"itemBox"},[n("Button",{staticClass:"loginBtn",attrs:{type:"primary"},on:{click:function(t){e.handleSubmit("formInline")}}},[e._v("登陆")])],1)],1)],1)]):e._e()],1)},staticRenderFns:[]};var f=n("C7Lr")(h,d,!1,function(e){n("HrEg"),n("s8j8")},"data-v-41dac4fe",null);t.default=f.exports},"RJ+u":function(e,t,n){var o=n("AKd3"),r=o.JSON||(o.JSON={stringify:JSON.stringify});e.exports=function(e){return r.stringify.apply(r,arguments)}},"YL+G":function(e,t){},YpZD:function(e,t){},g9CB:function(e,t,n){var o={"./four":"604E","./four.vue":"604E","./home":"26dS","./home.vue":"26dS","./login":"Quw4","./login.vue":"Quw4","./main":"sRz/","./main.vue":"sRz/","./one":"/I8L","./one.vue":"/I8L","./three":"gyDp","./three.vue":"gyDp","./two":"Qnsi","./two.vue":"Qnsi"};function r(e){return n(s(e))}function s(e){var t=o[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}r.keys=function(){return Object.keys(o)},r.resolve=s,e.exports=r,r.id="g9CB"},gyDp:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"hello"},[t("h1",[this._v("three")])])}]};var r=n("C7Lr")({name:"three",data:function(){return{msg:"Welcome to Your Vue.js App"}}},o,!1,function(e){n("8o1e")},"data-v-3efdf6ca",null);t.default=r.exports},s8j8:function(e,t){},"sRz/":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={name:"one",data:function(){return{}},methods:{handleSizeChange:function(e){console.log("每页 "+e+" 条")},handleCurrentChange:function(e){console.log("当前页: "+e)}}},r={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"main"},[this._v("\n    welcome\n")])},staticRenderFns:[]};var s=n("C7Lr")(o,r,!1,function(e){n("A54/")},"data-v-4f2943f0",null);t.default=s.exports}});
//# sourceMappingURL=0.0dddf06bf2912a8bcb54.js.map
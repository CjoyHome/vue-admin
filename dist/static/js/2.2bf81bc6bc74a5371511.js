webpackJsonp([2],{"26dS":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("Dd8w"),n=a.n(s),o=a("NYxO"),l=(a("/ocq"),{name:"home",data:function(){return{closeState:"false",isCollapse:!1,menuState:!0,editableTabsValue:"0",editableTabs:[],tabIndex:0}},computed:n()({menuBtn:function(){return this.isCollapse?"primary":""}},Object(o.b)(["adminRouter","openedRouter"])),watch:{isCollapse:function(e){console.log(this.isCollapse),console.log(e)}},methods:n()({addTabs:function(e){var t=this.editableTabs,a=this.$router;if(0===t.length){var s={title:e.routerFile,name:e.routerFile,content:"new tab"};t.push(s)}else{for(var n=!1,o=0;o<t.length;o++)e.routerFile===t[o].name&&(n=!0);if(!n){var l={title:e.routerFile,name:e.routerFile,content:"new tab"};t.push(l)}}a.push("/home"+e.path),this.editableTabsValue=e.routerFile,console.log(t),this.setOpenedRouter(t)},clickTab:function(e,t){var a=this.$router;"0"===e.name?a.push("/home/main"):a.push("/home/"+e.name)},removeTab:function(e){var t=this.editableTabs,a=this.editableTabsValue,s=this.$router;a===e&&(t.length>1?e===t[t.length-1].name?(s.push("/home/"+t[t.length-2].name),a=t[t.length-2].name):(s.push("/home/"+t[t.length-1].name),a=t[t.length-1].name):(s.push("/home/main"),a="0")),this.editableTabsValue=a,this.editableTabs=t.filter(function(t){return t.name!==e}),console.log(this.editableTabs),this.setOpenedRouter(this.editableTabs)},handleOpen:function(e,t){console.log(e,t)},handleClose:function(e,t){console.log(e,t)},signOut:function(){this.setRouterList([]),this.setToken(""),window.sessionStorage.removeItem("router"),this.setOpenedRouter([]),this.$router.push("/login")}},Object(o.c)({setRouterList:"SET_ROUTER_LIST",setToken:"SET_TOKEN",setOpenedRouter:"SET_OPENED_ROUTER"}),{httpBtn:function(){this.http.get("https://jsonplaceholder.typicode.com/todos/1").then(function(e){console.log(e)}).catch(function(e){console.log(e)})},repBtn:function(){this.$router.replace({path:"/hello",query:{redirect:decodeURIComponent(this.$router.currentRoute.fullPath)}}),console.log(decodeURIComponent(this.$router.currentRoute.fullPath))},created:function(){this.editableTabs=this.openedRouter,console.log(this.editableTabs)},changeMenu:function(){this.isCollapse=!this.isCollapse}}),created:function(){console.log(this.$route.name.substr(1)),console.log(this.editableTabs),this.editableTabs=this.openedRouter,this.editableTabsValue=this.$route.name.substr(1)}}),i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("el-container",[a("el-header",[a("div",{staticClass:"top"},[a("el-button",{staticClass:"outBtn",attrs:{type:"warning "},on:{click:e.signOut}},[a("i",{staticClass:"fa fa-sign-out",attrs:{"aria-hidden":"true"}})])],1)]),e._v(" "),a("el-container",[a("el-aside",{staticClass:"left"},[a("div",{staticClass:"left"},e._l(e.adminRouter,function(t,s){return a("el-menu",{key:s,staticClass:"el-menu-vertical-demo",attrs:{collapse:e.isCollapse},on:{open:e.handleOpen,close:e.handleClose}},[a("el-submenu",{attrs:{index:t.index}},[a("template",{slot:"title"},[a("i",{class:t.icon}),e._v(" "),a("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.listName))])]),e._v(" "),e._l(t.routerArray,function(t,s){return a("el-menu-item",{key:t.index,attrs:{index:t.index},on:{click:function(a){e.addTabs(t)}}},[e._v(e._s(t.routerFile))])})],2)],1)}))]),e._v(" "),a("el-main",{},[a("div",{staticClass:"routerBox"},[a("div",{staticClass:"router_tabs linheight45"},[a("el-tabs",{staticClass:"router_tabs linheight45",attrs:{type:"card"},on:{"tab-click":e.clickTab,"tab-remove":e.removeTab},model:{value:e.editableTabsValue,callback:function(t){e.editableTabsValue=t},expression:"editableTabsValue"}},[a("el-tab-pane",{key:"0",attrs:{label:"主页",name:"0"}}),e._v(" "),e._l(e.editableTabs,function(e,t){return a("el-tab-pane",{key:e.name,attrs:{label:e.title,name:e.name,closable:""}})})],2)],1),e._v(" "),a("div",{staticClass:"router router_main"},[a("router-view")],1)])])],1)],1)],1)},staticRenderFns:[]};var r=a("VU/8")(l,i,!1,function(e){a("YDMY")},"data-v-12ec7e1b",null);t.default=r.exports},YDMY:function(e,t){}});
//# sourceMappingURL=2.2bf81bc6bc74a5371511.js.map
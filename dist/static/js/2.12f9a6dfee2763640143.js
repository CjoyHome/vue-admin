webpackJsonp([2],{"26dS":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("4YfN"),n=a.n(s),i=a("9rMa"),l=(a("zO6J"),{name:"home",data:function(){return{closeState:"false",isCollapse:!1,menuState:!0,editableTabsValue:"0",editableTabs:[],tabIndex:0}},computed:n()({menuBtn:function(){return this.isCollapse?"primary":""}},Object(i.b)(["adminRouter"])),watch:{isCollapse:function(e){console.log(this.isCollapse),console.log(e)}},methods:n()({addTabs:function(e){if(console.log(this.editableTabs),0===this.editableTabs.length){console.log("数组为空");var t={title:e.routerFile,name:e.routerFile,content:"new tab"};this.editableTabs.push(t)}else{for(var a=!1,s=0;s<this.editableTabs.length;s++)e.routerFile===this.editableTabs[s].name&&(console.log("重复"),a=!0);if(!a){var n={title:e.routerFile,name:e.routerFile,content:"new tab"};this.editableTabs.push(n)}}this.$router.push("/home"+e.path),this.editableTabsValue=e.routerFile},clickTab:function(e,t){"0"===e.name&&this.$router.push("/home/main")},removeTab:function(e){var t=this.editableTabs,a=this.editableTabsValue;a===e&&t.forEach(function(s,n){if(s.name===e){var i=t[n+1]||t[n-1];i&&(a=i.name)}}),this.editableTabsValue=a,this.editableTabs=t.filter(function(t){return t.name!==e}),this.editableTabs.length>0?this.$router.push("/home/"+this.editableTabs[this.editableTabs.length-1].name):this.$router.push("/home/main")},handleOpen:function(e,t){console.log(e,t)},handleClose:function(e,t){console.log(e,t)},signOut:function(){this.setRouterList([]),this.setToken(""),window.sessionStorage.removeItem("router"),this.$router.push("/login")}},Object(i.c)({setRouterList:"SET_ROUTER_LIST",setToken:"SET_TOKEN"}),{httpBtn:function(){this.http.get("https://jsonplaceholder.typicode.com/todos/1").then(function(e){console.log(e)}).catch(function(e){console.log(e)})},repBtn:function(){this.$router.replace({path:"/hello",query:{redirect:decodeURIComponent(this.$router.currentRoute.fullPath)}}),console.log(decodeURIComponent(this.$router.currentRoute.fullPath))},created:function(){console.log("123123")},changeMenu:function(){this.isCollapse=!this.isCollapse}})}),o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("el-container",[a("el-header",[a("div",{staticClass:"top"},[a("el-button",{staticClass:"outBtn",attrs:{type:"warning "},on:{click:e.signOut}},[a("i",{staticClass:"fa fa-sign-out",attrs:{"aria-hidden":"true"}})])],1)]),e._v(" "),a("el-container",[a("el-aside",{staticClass:"left"},[a("div",{staticClass:"left"},e._l(e.adminRouter,function(t,s){return a("el-menu",{key:s,staticClass:"el-menu-vertical-demo",attrs:{collapse:e.isCollapse},on:{open:e.handleOpen,close:e.handleClose}},[a("el-submenu",{attrs:{index:t.index}},[a("template",{slot:"title"},[a("i",{class:t.icon}),e._v(" "),a("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.listName))])]),e._v(" "),e._l(t.routerArray,function(t,s){return a("el-menu-item",{key:t.index,attrs:{index:t.index},on:{click:function(a){e.addTabs(t)}}},[e._v(e._s(t.routerFile))])})],2)],1)}))]),e._v(" "),a("el-main",{},[a("div",{staticClass:"routerBox"},[a("div",{staticClass:"router_tabs linheight45"},[a("el-tabs",{staticClass:"router_tabs linheight45",attrs:{type:"card"},on:{"tab-click":e.clickTab,"tab-remove":e.removeTab},model:{value:e.editableTabsValue,callback:function(t){e.editableTabsValue=t},expression:"editableTabsValue"}},[a("el-tab-pane",{key:"0",attrs:{label:"主页",name:"0"}}),e._v(" "),e._l(e.editableTabs,function(e,t){return a("el-tab-pane",{key:e.name,attrs:{label:e.title,name:e.name,closable:""}})})],2)],1),e._v(" "),a("div",{staticClass:"router router_main"},[a("router-view")],1)])])],1)],1)],1)},staticRenderFns:[]};var r=a("C7Lr")(l,o,!1,function(e){a("K4NQ")},"data-v-49fb8a80",null);t.default=r.exports},K4NQ:function(e,t){}});
//# sourceMappingURL=2.12f9a6dfee2763640143.js.map
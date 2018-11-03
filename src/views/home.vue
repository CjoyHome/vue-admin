<template>
    <div class="home">
        <el-container>
            <el-header>
                <div class="top">
                    <!-- <el-button class="menuBtn" :type="menuBtn" @click="changeMenu">
                        <i class="fa fa-bars" :class="{'whiteFont':isCollapse,'blueFont':!isCollapse}" aria-hidden="true"></i>
                    </el-button> -->
                    <el-button class="outBtn" type="warning " @click="signOut">
                        <i class="fa fa-sign-out" aria-hidden="true"></i>
                    </el-button>
                    <!-- <el-radio-button :label="true">收起</el-radio-button> -->
                </div>
            </el-header>
            <el-container>
                <el-aside class="left">
                    <div class="left">
                        <el-menu v-for="(item,index) in adminRouter" :key="index" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
                            <el-submenu :index="item.index">
                                <template slot="title">
                                    <i :class="item.icon"></i>
                                    <span slot="title">{{item.listName}}</span>
                                </template>
                                <!-- <el-menu-item-group > -->
                                <!-- <span slot="title">分组一</span> -->
                                <el-menu-item v-for="(eitem,eindex) in item.routerArray" :index="eitem.index" :key="eitem.index" @click="addTabs(eitem)">{{eitem.routerFile}}</el-menu-item>
                                <!-- </el-menu-item-group> -->
                            </el-submenu>
                            <!-- <el-menu-item v-for="(item,index) in adminRouter" @click="$router.push('/home' + item.path)" :index="index+1+''" :key="index">
                                <i class="el-icon-setting"></i>
                                <span slot="title">{{item.routerFile}}</span>
                            </el-menu-item> -->
                        </el-menu>
                    </div>
                </el-aside>
                <el-main class="">
                    <div class="routerBox">
                        <div class="router_tabs linheight45">
                            <el-tabs class="router_tabs linheight45" @tab-click="clickTab" v-model="editableTabsValue" type="card" @tab-remove="removeTab">
                                <el-tab-pane key="0" label="主页" name="0">
                                    <!-- {{item.content}} -->
                                </el-tab-pane>
                                <el-tab-pane v-for="(item, index) in editableTabs" :key="item.name" :label="item.title" :name="item.name" closable>
                                    <!-- {{item.content}} -->
                                </el-tab-pane>
                            </el-tabs>
                        </div>
                        <!-- <keep-alive> -->
                        <div class="router router_main">
                            <router-view/>
                        </div>
                    </div>
                    <!-- </keep-alive> -->
                </el-main>
            </el-container>
        </el-container>
    </div>

</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import router from "vue-router";
// const Home = resolve => require.ensure([], () => resolve(require('@/components/adminHome')), 'home')

export default {
  name: "home",
  data() {
    return {
      closeState: "false",
      isCollapse: false,
      menuState: true,
      editableTabsValue: "0",
      editableTabs: [
        // {
        //   title: "Tab 1",
        //   name: "1",
        //   content: "Tab 1 content"
        // },
        // {
        //   title: "Tab 2",
        //   name: "2",
        //   content: "Tab 2 content"
        // }
      ],
      tabIndex: 0
    };
  },
  computed: {
    menuBtn() {
      return !this.isCollapse ? "" : "primary";
    },
    ...mapGetters(["adminRouter", "openedRouter"])
  },
  watch: {
    isCollapse: function(newQuestion) {
      console.log(this.isCollapse);
      console.log(newQuestion);
    }
  },
  methods: {
    addTabs(eitem) {
      let tabs = this.editableTabs;
      let router = this.$router;
      if (tabs.length === 0) {
        let item = {
          title: eitem.routerFile,
          name: eitem.routerFile,
          content: "new tab"
        };
        tabs.push(item);
      } else {
        let reTabState = false;
        for (let i = 0; i < tabs.length; i++) {
          if (eitem.routerFile === tabs[i].name) {
            reTabState = true;
          }
        }
        if (!reTabState) {
          let item = {
            title: eitem.routerFile,
            name: eitem.routerFile,
            content: "new tab"
          };
          tabs.push(item);
        }
      }
      router.push("/home" + eitem.path);
      this.editableTabsValue = eitem.routerFile;
      console.log(tabs);
      this.setOpenedRouter(tabs);
    },
    clickTab(tab, event) {
      let router = this.$router;
      if (tab.name === "0") {
        router.push("/home/main");
      } else {
        router.push("/home/" + tab.name);
      }
    },
    // 关闭tab
    removeTab(targetName) {
      let tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      let router = this.$router;
      if (activeName === targetName) {
        //   判断tabs是否存在除了main的tab，不存在直接跳入主页
        if (tabs.length > 1) {
          // 判断关闭的tab是否为最后一个，若是最后一个跳回到倒数第二个tab，否则都跳到最后一个tab
          if (targetName === tabs[tabs.length - 1].name) {
            router.push("/home/" + tabs[tabs.length - 2].name);
            activeName = tabs[tabs.length - 2].name;
          } else {
            router.push("/home/" + tabs[tabs.length - 1].name);
            activeName = tabs[tabs.length - 1].name;
          }
        } else {
          router.push("/home/main");
          activeName = "0";
        }
      }
      this.editableTabsValue = activeName;
      this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      console.log(this.editableTabs);
      this.setOpenedRouter(this.editableTabs);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    signOut() {
      // 清空 vuex 的路由
      this.setRouterList([]);
      // 设置token
      this.setToken("");
      // 删除 sessionStorage 路由
      window.sessionStorage.removeItem("router");
      //   清空已打开路由
      this.setOpenedRouter([]);
      this.$router.push("/login");
    },
    ...mapMutations({
      setRouterList: "SET_ROUTER_LIST",
      setToken: "SET_TOKEN",
      setOpenedRouter: "SET_OPENED_ROUTER"
    }),
    httpBtn() {
      this.http
        .get("https://jsonplaceholder.typicode.com/todos/1")
        .then(res => {
          console.log(res);
        })
        .catch(rej => {
          console.log(rej);
        });
    },
    repBtn() {
      this.$router.replace({
        path: "/hello",
        query: {
          redirect: decodeURIComponent(this.$router.currentRoute.fullPath)
        }
      });
      console.log(decodeURIComponent(this.$router.currentRoute.fullPath));
    },
    created() {
      this.editableTabs = this.openedRouter;
      console.log(this.editableTabs);
    },
    changeMenu() {
      this.isCollapse = !this.isCollapse;
    }
  },
  created() {
    console.log(this.$route.name.substr(1));
    console.log(this.editableTabs);
    this.editableTabs = this.openedRouter;
    this.editableTabsValue = this.$route.name.substr(1);
  }
};
</script>
<style scoped lang='less'>
.home {
  color: black;
  font-size: 50px;
}
.top {
  background: #20a0ff;
  height: 60px;
  width: 100%;
  position: relative;
}
.whiteFont {
  color: #fff;
}
.blueFont {
  color: #409eff;
}
.menuBtn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 20px;
}
.outBtn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
}
.left {
  max-width: 200px;
}
.el-header {
  padding: 0;
}
.routerBox {
  border: 1px solid #d1dbe5;
}
.router_main {
  padding: 10px;
  // border: 1px solid #d1dbe5;
}
.router_tabs {
  // border-bottom: 1px solid red;
  height: 40px;
  //   -moz-box-shadow:0px 1px 4px #333333;
  //   -webkit-box-shadow:0px 1px 4px #333333;
  //   box-shadow:0px 1px 4px #333333;
  //   background: ;
}
.linheight45 {
  line-height: 12px;
  // height: 40px;
}
</style>

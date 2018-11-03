<template>
    <div class="login">
        <button @click="ajaxbtn" style="position:fixed;z-index:2001">请求</button>
        <transition name="login-animation" appear v-if="loginShow">
            <div class="loginBox">
                <div class="loginTitle">
                    登陆
                </div>
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm loginForm">
                    <el-form-item label="用户名" prop="username" class="itemBox">
                        <el-input v-model="ruleForm.username"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password" class="itemBox">
                        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
                    </el-form-item>
                    <!-- <el-form-item class="loginBtnBox"> -->
                        <el-button class="loginBtn" type="primary" @click="handleSubmit('ruleForm')">登陆</el-button>
                        <!-- <el-button @click="resetForm('ruleForm2')">重置</el-button> -->
                    <!-- </el-form-item> -->
                </el-form>

                <!-- <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
                    <FormItem prop="user">
                        <Input type="text" v-model="formInline.user" placeholder="用户名">
                        <Icon type="ios-person-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem prop="password" class="itemBox">
                        <Input type="password" v-model="formInline.password" placeholder="密码">
                        <Icon type="ios-lock-outline" slot="prepend"></Icon>
                        </Input>
                    </FormItem>
                    <FormItem >
                        <Button  @click="handleSubmit('formInline')">登陆</Button>
                    </FormItem>
                </Form> -->
            </div>
        </transition>
    </div>
</template>

<script>
import { mapMutations } from "vuex";
import router from "vue-router";
const Home = resolve =>
  require.ensure([], () => resolve(require("@/views/home")), "home");
export default {
  name: "login",
  data() {
    var checkUser = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("账号不能为空"));
      }
      callback();
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        // if (this.ruleForm.checkPass !== "") {
        //   this.$refs.ruleForm.validateField("checkPass");
        // }
        callback();
      }
    };
    return {
      adminRouter: [],
      userName: "",
      loginShow: false,
      adminUser: "",
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ validator: checkUser, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  },
  created() {
    setTimeout(() => {
      this.loginShow = true;
    }, 10);
  },
  methods: {
    ajaxbtn() {
      this.http
        .get("https://randomuser.me/api/?results=25")
        .then(res => {
          console.log(res);
        })
        .catch(rej => {
          console.log(rej);
        });
    },
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
          console.log(valid)
        if (valid) {
          this.$message({
            message: "登陆成功",
            type: "success"
          });
          let userName = this.ruleForm.username;
          this.routerDate(userName)
            .then(res => {
              const data = res;
              if (data.msg) {
                alert(data.msg);
                return;
              }
              let sessionRouter = JSON.parse(
                window.sessionStorage.getItem("router")
              );
              if (!sessionRouter) {
                console.log(sessionRouter);
                let newRouter = [
                  {
                    path: "/home",
                    name: "home",
                    component: Home,
                    meta: {
                      // 添加该字段，表示进入这个路由是需要登录的
                      requireAdmin: true
                    },
                    children: []
                  }
                ];
                data.map(item => {
                  item.routerArray.map(e => {
                    newRouter[0].children.push({
                      path: "/home" + e.path,
                      name: e.path,
                      component: resolve =>
                        require.ensure(
                          [],
                          () => resolve(require(`@/views/${e.routerFile}`)),
                          "login"
                        )
                    });
                  });
                });
                this.$router.addRoutes(newRouter);
              }
              window.sessionStorage.router = JSON.stringify(data);
              this.setRouterList(data);
              this.setToken(1);
              this.$router.push("/home/main");
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          this.$message({
            showClose: true,
            message: "操作失败!",
            type: "error"
          });
        }
      });
    },
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
    login() {},
    ...mapMutations({
      setRouterList: "SET_ROUTER_LIST",
      setToken: "SET_TOKEN"
    }),
    routerDate(params) {
      let routerList = [];
      if (params === "admin") {
        routerList = [
          {
            listName: "第一项",
            icon: "el-icon-location",
            index: "1",
            routerArray: [
              { path: "/one", routerFile: "one", index: "1-1" },
              { path: "/two", routerFile: "two", index: "1-2" }
            ]
          },
          {
            listName: "第二项",
            icon: "el-icon-message",
            index: "2",
            routerArray: [
              { path: "/three", routerFile: "three", index: "2-2" },
              { path: "/four", routerFile: "four", index: "2-1" }
            ]
          }
        ];
      } else if (params === "userAdmin") {
        routerList = [
          {
            listName: "第一项",
            icon: "el-icon-news",
            routerArray: [
              { path: "/one", routerFile: "one", index: "1-1" },
              { path: "/two", routerFile: "two", index: "1-2" }
            ]
          }
        ];
      } else {
        routerList = { msg: "请输入账号" };
      }
      return new Promise((resolve, reject) => {
        resolve(routerList);
      });
    }
  }
};
</script>
<style scoped lang='less'>
.login {
  background: #c1cdc1;
}
.loginBox {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  border: 0.5px solid rgb(220, 222, 226);
  border-radius: 10px;
  width: 400px;
  padding: 10px;

  background: #ededed;
}
.loginForm{
    margin-top: 15px;
}
.loginTitle {
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  color: #2e2e2e;
  height: 40px;
  line-height: 40px;
}
.itemBox {
  display: block;
  margin-left: -30px
}
// .loginBtnBox:first-child{
//     display:block;
//     margin: 0px !important;
// }
.loginBtn {
  width: 80%;
  margin-bottom: 20px;
//   margin-left: -50px
}
</style>
<style scoped src="../assets/css/animation.css"></style>
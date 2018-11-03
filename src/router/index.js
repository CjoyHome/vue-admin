import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import HelloWorld from '@/components/HelloWorld'
// import login from '@/components/login'
// import login from '@/views/login'
// import home from '@/views/home'
const login = resolve => require.ensure([], () => resolve(require('@/views/login')), 'login')
const Home = resolve => require.ensure([], () => resolve(require('@/views/home')), 'home')
const main = resolve => require.ensure([], () => resolve(require('@/views/main')), 'main')
Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [{
            path: '/hello',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            children: [{
                path: '/home/main',
                name: 'main',
                component: resolve => require.ensure([], () => resolve(require(`@/views/main`)), "main")
            }]
        }
    ]
})
router.beforeEach((to, from, next) => {
    addRouter(to, from, next)
})

function addRouter(to, from, next) {
    let sessionRouter = JSON.parse(window.sessionStorage.getItem('router'))
    let routerList = store.getters.adminRouter
    let token = store.getters.token
        // 当 vuex 中存在路由时（为正常登陆存储），进入下一个路由
    if (routerList.length) {
        next()
    } else {
        // 当 vuex 中没有路由信息时，动态添加路由，并且提交 actions 存储路由
        let newRouter = [{
                path: '/home',
                name: 'home',
                component: Home,
                meta: {
                    // 添加该字段，表示进入这个路由是需要登录的
                    requireAdmin: true
                },
                children: []
            }]
            // 当 sessionStorage 存在路由信息
        if (sessionRouter) {
            sessionRouter.map(item => {
                item.routerArray.map(e => {
                    newRouter[0].children.push({
                        path: "/home" + e.path,
                        name: e.path,
                        component: resolve =>
                            require.ensure([], () => resolve(require(`@/views/${e.routerFile}`)), "login")
                    });
                });
            })
            router.addRoutes(newRouter)
                // action 存储路由
            store.dispatch('setNewRouter', sessionRouter)
                .then(res => {
                    next({...to })
                        // 不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录, history 下才起作用
                    router.replace(to.path)
                })
                // console.log(newRouter)
        } else {
            // 当 sessionStorage 不存在路由信息
            // 判断当前路由时登陆页面，return 防止死循环
            if (to.path === '/login') {
                next()
                return
            }

            // 当存在 token 信息时，进入下个路由
            if (token) {
                next()
            } else {
                // 当不存在 token 信息时，返回登陆页面
                next({
                    path: '/login'
                })
            }
        }
    }
}
export default router
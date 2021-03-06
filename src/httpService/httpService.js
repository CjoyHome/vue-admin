// 在http.js中引入axios
import axios from 'axios' // 引入axios
import router from 'vue-router'
import * as api from './api';
import QS from 'qs' // 引入qs模块，用来序列化post类型的数据，后面会提到
import { Loading } from 'element-ui'; //loading组件
// import store from '../store'
// import * as types from '../store/mutations-types'

// vant的toast提示框组件，大家可根据自己的ui组件更改。
// import { Toast } from 'vant';
// 环境的切换
if (process.env.NODE_ENV === 'development') {
    axios.defaults.baseURL = 'https://www.baidu.com'
} else if (process.env.NODE_ENV === 'debug') {
    axios.defaults.baseURL = 'https://www.ceshi.com'
} else if (process.env.NODE_ENV === 'production') {
    axios.defaults.baseURL = 'https://www.production.com'
}

// 请求超时时间
axios.defaults.timeout = 10000

// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
let loadingInstance;
let loadOptions = {
    lock: true,
    text: 'Loading',
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
};
let loadArray = []; //loading数组
// 请求拦截器
axios.interceptors.request.use(
    config => {
        api.deBug && console.log('======================请求前成功start======================');
        console.log(config);
        api.deBug && console.log('======================请求前成功end======================');
        // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
        // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
        // const token = store.state.token
        // token && (config.headers.Authorization = token)
        return config
    },
    error => {
        api.deBug && console.log('======================请求前失败start======================');
        console.log(error);
        api.deBug && console.log('======================请求前失败end======================');
        // console.log(error.response.status);
        // console.log(error.response.headers);
        return Promise.error(error)
    }
)

// 响应拦截器
axios.interceptors.response.use(
    response => {
        loadClose();
        api.deBug && console.log('======================响应成功后start======================');
        console.log(response);
        api.deBug && console.log('======================响应成功后end======================');
        router.replace({
            path: '/hello',
            query: {
                redirect: router.currentRoute.fullPath
            }
        });
        if (response.status === 200) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(response)
        }
    },
    // 服务器状态码不是200的情况
    error => {
        loadClose();
        api.deBug && console.log('======================响应失败后start======================');
        console.log(error);
        api.deBug && console.log('======================响应失败后end======================');
        if (error.response.status) {
            switch (error.response.status) {
                // 401: 未登录
                // 未登录则跳转登录页面，并携带当前页面的路径
                // 在登录成功后返回当前页面，这一步需要在登录页操作。
                case 401:
                    router.replace({
                        path: '/login',
                        query: { redirect: router.currentRoute.fullPath }
                    })
                    break
                    // 403 token过期
                    // 登录过期对用户进行提示
                    // 清除本地token和清空vuex中token对象
                    // 跳转登录页面
                case 403:
                    // Toast({
                    //   message: '登录过期，请重新登录',
                    //   duration: 1000,
                    //   forbidClick: true
                    // })
                    // 清除token
                    localStorage.removeItem('token')
                    store.commit(types.SET_TOKEN, null)
                        // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
                    setTimeout(() => {
                        router.replace({
                            path: '/login',
                            query: {
                                redirect: router.currentRoute.fullPath
                            }
                        })
                    }, 1000)
                    break
                    // 404请求不存在
                case 404:
                    // Toast({
                    //   message: '网络请求不存在',
                    //   duration: 1500,
                    //   forbidClick: true
                    // })
                    break
                    // 其他错误，直接抛出错误提示
                default:
                    // Toast({
                    //   message: error.response.data.message,
                    //   duration: 1500,
                    //   forbidClick: true
                    // })
            }
            return Promise.reject(error.response)
        }
    }
)

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params = {}) {
    loadOpen();
    console.log('1111');
    return new Promise((resolve, reject) => {
        axios.get(url, {
                params: params
            })
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err.data)
            })
    })
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
    loadOpen();
    return new Promise((resolve, reject) => {
        axios.post(url, QS.stringify(params))
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err.data)
            })
    })
}
// 开启loading，并且添加loading数组长度1
function loadOpen(type) {
    loadArray.push(1);
    loadingInstance = Loading.service(loadOptions);
}
// 判断loading数组长度，待完全加载完毕关闭loading
function loadClose() {
    if (loadArray.length === 1) {
        loadArray.splice(0, 1);
        setTimeout(() => {
            loadingInstance.close();
        }, 200);
    } else {
        loadArray.splice(0, 1);
    }
}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './less/components-style.less'
import store from './store'
import * as http from './httpService/httpService'
// import iView from 'iview';
// import 'iview/dist/styles/iview.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.css'

Vue.use(ElementUI);
// Vue.use(iView);
Vue.config.productionTip = false
Vue.prototype.http = http;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    // components: { App },
    // template: '<App/>',
    render: h => h(App)
})
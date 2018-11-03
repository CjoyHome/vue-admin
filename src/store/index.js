import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import state from './state'
import mutations from './mutations'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const vuexPersisted = new createPersistedState({
    key: 'object', // 不写默认为vuex
    storage: window.sessionStorage,
    // 选择要存储的变量
    reducer: state => ({
        token: state.token,
        openedRouter: state.openedRouter
            // adminRouter: state.adminRouter
    })
})

export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations,
    plugins: [vuexPersisted]
})
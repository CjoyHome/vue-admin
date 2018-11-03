import * as types from './mutations-types'

const mutations = {
    [types.SET_TOKEN](state, number) {
        state.token = number
    },
    [types.SET_ROUTER_LIST](state, array) {
        state.adminRouter = array
    },
    [types.SET_OPENED_ROUTER](state, array) {
        state.openedRouter = array;
    }
}

export default mutations
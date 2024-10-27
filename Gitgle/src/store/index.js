import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
    token (state) {
      return state.user.UserInfo.token
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user
  }
})

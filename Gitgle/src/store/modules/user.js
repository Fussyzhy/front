import { getInfo, setInfo } from '@/utils/storage'

export default {
  namespaced: true,
  state () {
    return {
      UserInfo: getInfo()
    }
  },
  mutations: {
    setUser (state, obj) {
      state.UserInfo = obj
      setInfo(obj)
    }

  },
  actions: {

  },
  getters: {

  }
}

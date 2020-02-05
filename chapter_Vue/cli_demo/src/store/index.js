import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: []
  },
  mutations: {
    // eslint-disable-next-line space-before-function-paren
    setList(state, payload) {
      state.list = payload
    }
  },
  actions: {
  },
  modules: {
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    SystemNotification: []
  },
  mutations: {
    addNotice(state, messages) {
      state.SystemNotification.push(messages)
    }
  },
  actions: {}
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuSettings: {height: 0}
  },
  mutations: {
    setMenuSettings (state, settings) {
      state.menuSettings = settings
    }
  }
})

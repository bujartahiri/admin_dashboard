import Vue from "vue";
import Vuex from "vuex";
import auth from './modules/auth'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sidebarOpen: false
  },
  mutations: {
    toggleSidebar(state) {
      state.sidebarOpen = !state.sidebarOpen
    }
  },
  actions: {
    toggleSidebar(context) {
      context.commit('toggleSidebar')
    }
  },
  modules: {
    auth
  }
});

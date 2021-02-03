import axios from 'axios'
export default {
  state: {
    token: localStorage.getItem('user-token') || null,
    status: '',
  },

  getters: {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status
  },

  mutations: {
    AUTH_REQUEST(state) {
      state.status = 'loading'
    },
    AUTH_SUCCESS(state, token) {
      state.status = 'success',
      state.token = token
    },
    AUTH_ERROR(state) {
      state.status = 'error'
    }
  },

  actions: {
    AUTH_REQUEST({ commit }, user) {
      commit('AUTH_REQUEST')
        axios.post('http://159.89.102.6/api/admin/login', user)
          .then(res => {
            const token = res.data.access_token
            localStorage.setItem('user-token', token)
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
            commit('AUTH_SUCCESS', token)
          })
          .catch(error => {
            commit('AUTH_ERROR', error)
            localStorage.removeItem('user-token')
          })
    },
    LOGOUT() {
      localStorage.removeItem('user-token')
      delete axios.defaults.headers.common.['Authorization']
      location.reload()
    }
  },

  modules: {
    //
  }
};

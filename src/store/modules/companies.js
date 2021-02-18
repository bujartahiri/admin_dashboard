import axios from 'axios'
import url from './base_url'

export default {
  state: {
    companies: null
  },

  getters: {
    getCompanies(state) {
      return state.companies
    }
  },
  mutations: {
    SET_COMPANIES(state, payload) {
      state.companies = payload
    }
  },
  actions: {
    CREATE_COMPANY(_, credentials) {
      axios.post(`${url.BASE_URL}/companies`, credentials)
        .then(res => {
          console.log(res)
        })
        .catch(error => {
          console.error(error)
        })
    },
    GET_COMPANIES({commit}) {
      axios.get(`${url.BASE_URL}/companies`)
        .then(res => {
          commit('SET_COMPANIES', res.data)
        })
    }
  },

  modules: {
    //
  }
};

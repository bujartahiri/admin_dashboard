import axios from 'axios'
import url from './base_url'

export default {
  state: {
    companies: null
  },

  getters: {
    //
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
    }
  },

  modules: {
    //
  }
};

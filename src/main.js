import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from 'axios'
import VueAxios from 'vue-axios'
import Modal from './components/Modal'

Vue.use(VueAxios, axios)
Vue.component("modal", Modal);

Vue.config.productionTip = false;

const token = localStorage.getItem('user-token')
if(token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

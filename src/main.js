import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueAxios, axios)
Vue.component("modal", require("@/components/Modal.vue").default);
Vue.use(VueSweetalert2);



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

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login"
import Dashboard from '../components/Dashboard'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: {name: 'Home'}
  },
  {
    path: "/dashboard",
    component: Dashboard,
    children: [
      {
        path: "/",
        redirect: { name: 'Home' }
      },
      {
        path: "/home",
        name: "Home",
        component: Home
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

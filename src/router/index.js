import Vue from "vue";
import VueRouter from "vue-router";
import Layout from '../components/Layout'
import auth from '../store/modules/auth'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
    redirect: {name: 'Home'},
    meta: {requiresAuth: true},
    children: [
      {
        path: "dashboard",
        name: "Home",
        component:() => import("../views/Home.vue")
      },
      {
        path: "add-category",
        name: "AddCategory",
        component:() => import("../views/AddCategory.vue")
      },

    ]
  },
  {
    path: "/login",
    name: "Login",
    component:() => import("../views/Login.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const loggedIn = auth.state.token
  const token = true
    if (to.matched.some(record => record.meta.requiresAuth) && !token) {
      next({ name: "Login" });
    } else if (loggedIn && to.path == "/login") {
      next(from.fullPath);
    }
    next()
});

export default router;

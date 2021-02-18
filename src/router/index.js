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
        path: "add-company",
        name: "AddCompany",
        component:() => import("../views/AddCompany.vue")
      },
      {
        path: "view-companies",
        name: "ViewCompanies",
        component:() => import("../views/ViewCompanies.vue")
      },
      {
        path: "add-employee",
        name: "AddEmployee",
        component:() => import("../views/AddEmployee.vue")
      },
      {
        path: "view-emplyees",
        name: "ViewEmployees",
        component:() => import("../views/ViewEmployees.vue")
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
    if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
      next({ name: "Login" });
    } else if (loggedIn && to.path == "/login") {
      next(from.fullPath);
    } else {
      next()
    }
});

export default router;

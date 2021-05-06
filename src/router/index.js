import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Homepage from "../views/Homepage.vue";
import Profile from "../views/Profile.vue";
import AdminPage from "../views/AdminPage.vue";
import Operator from "../views/Operator.vue";
import Forgetpassword from "../views/Forgetpassword.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/homepage",
    name: "HomePage",
    component: Homepage,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/adminpage",
    name: "AdminPage",
    component: AdminPage,
  },
  {
    path: "/Operator",
    name: "Operator",
    component: Operator,
  },
  {
    path: "/forgetpassword",
    name: "Forgetpassword",
    component: Forgetpassword,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

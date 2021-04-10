import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import RecipesIndex from "../views/RecipesIndex.vue";
import Welcome from "../views/Welcome.vue";
import RecipesNew from "../views/RecipesNew.vue";
import RecipesShow from "../views/RecipesShow.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout,
  },
  {
    path: "/recipes",
    name: "RecipesIndex",
    component: RecipesIndex,
  },
  {
    path: "/recipes/new",
    name: "RecipesNew",
    component: RecipesNew,
  },
  {
    path: "/recipes/show",
    name: "RecipesShow",
    component: RecipesShow,
  },
  {
    path: "/welcome",
    name: "Welcome",
    component: Welcome,
  },

  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

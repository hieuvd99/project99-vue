import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
// lazy-loaded
const Profile = () => import("./components/Profile.vue")
const BoardAdmin = () => import("./components/admin/BoardAdmin.vue")
const BoardUser = () => import("./components/BoardUser.vue")
const Learn = () => import("./components/learns/Learn.vue")
const Spring = () => import("./components/learns/spring/Spring.vue")
const SpringHome = () => import("./components/learns/spring/SpringHome.vue")

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/profile",
    name: "profile",
    // lazy-loaded
    component: Profile,
  },
  {
    path: "/admin",
    name: "admin",
    // lazy-loaded
    component: BoardAdmin,
  },
  {
    path: "/user",
    name: "user",
    // lazy-loaded
    component: BoardUser,
  },
  {
    path: "/learn",
    name: "learn",
    component: Learn,
  },
  {
    path: "/learn",
    name: "learn",
    component: Learn,
  },
  {
    path: "/learn/spring",
    name: "spring",
    component: Spring,
  },
  {
    path: "/learn/spring/home",
    name: "springHome",
    components: {
      springHome: SpringHome
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;
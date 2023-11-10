
import Home from "../components/Home.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
// lazy-loaded
const Profile = () => import("../components/Profile.vue")
const BoardAdmin = () => import("@/components/admin/BoardAdmin.vue")
const Learn = () => import("@/components/learns/common/Learn.vue")

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
    path: "/learn",
    name: "learn",
    component: Learn,
  },
];

export default routes
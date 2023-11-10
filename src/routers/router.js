import { createWebHistory, createRouter } from "vue-router";
import headerRouter from "@/routers/header.router"
import sidebarSpringRoutes from "@/routers/sidebar-spring.router"
import sidebarVueRoutes from "@/routers/sidebar-vue.router"
import adminRoutes from "@/routers/admin.router"

const allRoutes = []
const routes = allRoutes.concat(headerRouter, adminRoutes, sidebarSpringRoutes, sidebarVueRoutes)

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router

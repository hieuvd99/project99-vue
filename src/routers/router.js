import { createWebHistory, createRouter } from "vue-router";
import headerRouter from "@/routers/header.router"
import sidebarSpringRoutes from "@/routers/sidebar-spring.router"

const allRoutes = []
const routes = allRoutes.concat(headerRouter, sidebarSpringRoutes)

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router

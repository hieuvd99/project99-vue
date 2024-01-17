import { createWebHistory, createRouter } from "vue-router";
import headerRouter from "@/routers/header.router"
import sidebarJava from "@/routers/sidebar-java.router"
import sidebarSpringRoutes from "@/routers/sidebar-spring.router"
import sidebarVueRoutes from "@/routers/sidebar-vue.router"
import sidebarSqlRoutes from "@/routers/sidebar-sql.router"
import sidebarBlogRoutes from "@/routers/sidebar-blog.router"
import adminRoutes from "@/routers/admin.router"

const allRoutes = []
const routes = allRoutes.concat(headerRouter, adminRoutes, sidebarJava, sidebarSpringRoutes, sidebarVueRoutes, sidebarSqlRoutes, sidebarBlogRoutes)

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router

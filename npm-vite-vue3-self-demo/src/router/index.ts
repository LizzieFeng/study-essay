import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import {DashboardRouter} from "./config/dashboard/Dashboard";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect:"/dashboard/forest",
    },
    {
      path: DashboardRouter.path,
      component: DashboardRouter.component,
      children: DashboardRouter.children,
    },
  ],
});

export default router;

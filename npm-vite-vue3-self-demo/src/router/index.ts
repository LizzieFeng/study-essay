import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import { forestRouterConfig } from "./config/forest";
import {floodRouterConfig} from "./config/flood";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect:"/forest/index",
    },
    {
      path: forestRouterConfig.path,
      component: forestRouterConfig.component,
      children: forestRouterConfig.children,
    },
    {
      path: floodRouterConfig.path,
      component: floodRouterConfig.component,
      children: floodRouterConfig.children,
    },
  ],
});

export default router;

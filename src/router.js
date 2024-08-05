import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./pages/AppHome.vue";
import ProjectList from "./pages/ProjectList.vue";
import ProjectDetail from "./pages/ProjectDetail.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/project",
      name: "projects",
      component: ProjectList,
    },
    {
      path: "/project/:slug",
      name: "detail",
      component: ProjectDetail,
    },
  ],
});
export { router };

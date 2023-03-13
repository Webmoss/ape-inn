import { createRouter, createWebHistory } from "vue-router";

/* Async Components */
const HomeView = () => import("../views/HomeView.vue");

const baseURL = "";

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0, left: 0 };
  },
  history: createWebHistory(baseURL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
  ],
});

export default router;

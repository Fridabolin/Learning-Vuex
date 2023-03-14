import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Counter from "../views/Counter.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/counter",
      name: "counter",
      component: Counter,
    },
  ],
});

export default router;

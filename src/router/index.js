import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ListCharacterView from "@/views/ListCharacterView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "rick-and-morty-finder",
      component: HomeView,
    },
    {
      path: "/list-characters/:name_character",
      name: "list-characters",
      component: ListCharacterView,
    },
  ],
});

export default router;

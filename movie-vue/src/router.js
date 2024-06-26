import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Create from "@/pages/Create.vue";
import Header from "@/components/Header.vue";

const routes = [
  // 등록 하기 Home은 / create / create
  {
    path: "/",
    name: "Home",
    components: { default: Home, header: Header },
  },

  {
    path: "/create",
    name: "Create",
    componets: { default: Create, header: Header },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "@/store";
import "@/assets/reset.css";

// router 선언 use
createApp(App).use(router).use(store).mount("#app");

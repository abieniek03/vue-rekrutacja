import { createApp } from "vue";
import "./styles/main.scss";
import "remixicon/fonts/remixicon.css";
import App from "./App.vue";
import router from "./router";
import { VueQueryPlugin } from "@tanstack/vue-query";
import store from "./store/index";

createApp(App).use(router).use(VueQueryPlugin).use(store).mount("#app");

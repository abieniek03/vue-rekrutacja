import { createApp } from "vue";
import "./styles/main.scss";
import App from "./App.vue";
import { VueQueryPlugin } from "@tanstack/vue-query";
import store from "./store/index";

createApp(App).use(VueQueryPlugin).use(store).mount("#app");

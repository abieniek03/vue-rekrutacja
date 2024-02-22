import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { VueQueryPlugin } from "@tanstack/vue-query";
import store from "./store/index";

createApp(App).use(VueQueryPlugin).use(store).mount("#app");

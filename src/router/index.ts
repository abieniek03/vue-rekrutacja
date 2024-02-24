import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import Post from "../pages/Post.vue";

import NotFound from "../pages/NotFound.vue";

const routes = [
	{ path: "/", component: Home },
	{ path: "/:id", component: Post },
	{ path: "/404", component: NotFound },
	{ path: "/:pathMatch(.*)", redirect: "/404" },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;

import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import Post from "../pages/Post.vue";

const routes = [
	{ path: "/", component: Home },
	{ path: "/:id", component: Post },
	
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;

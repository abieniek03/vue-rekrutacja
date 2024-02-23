<script setup lang="ts">
import PostItem from "../components/posts/PostItem.vue";
import PostItemPlaceholder from "../components/posts/PostItemPlaceholder.vue";
import axios from "axios";
import { useQuery } from "@tanstack/vue-query";
import Pagination from "../components/pagination/Pagination.vue";
import { computed, onMounted, watch } from "vue";
//@ts-ignore
import { useStore } from "vuex";

const store = useStore();

const pageCurrent = computed(() => store.getters.getPageActive);
const postCountPerPage = computed(() => store.getters.getPostCountPerPage);

onMounted(() => {
	store.dispatch("fetchPostsAndSetPageCount");
});

const getPosts = async (page: number, postCount: number) => {
	try {
		const response = await axios.get(
			`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${postCountPerPage.value}${
				page > 1 ? `&_start=${page * postCount}` : ""
			}`
		);
		return response.data;
	} catch (error: any) {
		console.log(error);
	}
};

const { isLoading, isError, data, refetch } = useQuery({
	queryKey: ["posts"],
	queryFn: () => getPosts(pageCurrent.value, postCountPerPage.value),
});

watch(pageCurrent, () => {
	refetch();
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
});
</script>

<template>
	<section>
		<PostItemPlaceholder v-if="isLoading" v-for="index in postCountPerPage" :key="index" />
		<p v-else-if="isError || data.length < 1" class="error">Nie znaleziono żadnego postu.</p>
		<PostItem
			v-else
			v-for="post in data"
			:key="post.id"
			:userId="post.userId"
			:postId="post.id"
			:title="post.title"
			:body="post.body.split(' ').slice(0, 5).join(' ') + '...'"
		/>
		<Pagination />
	</section>
</template>

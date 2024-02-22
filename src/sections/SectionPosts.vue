<script setup lang="ts">
import PostItem from "../components/posts/PostItem.vue";
import PostItemPlaceholder from "../components/posts/PostItemPlaceholder.vue";
import axios from "axios";
import { useQuery } from "@tanstack/vue-query";
import Pagination from "../components/pagination/Pagination.vue";
import { computed, watch } from "vue";
//@ts-ignore
import { useStore } from "vuex";

const store = useStore();

const currentPage = computed(() => store.getters.getActivePage);

const getPosts = async (page: number) => {
	try {
		const response = await axios.get(
			`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10${page > 1 ? "&_start=${page * 10}" : ""}`
		);
		return response.data;
	} catch (error: any) {
		console.log(error);
	}
};

const { isPending, isError, data, refetch } = useQuery({
	queryKey: ["posts"],
	queryFn: () => getPosts(Number(currentPage.value)),
});

watch(currentPage, () => {
	refetch();
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
});
</script>

<template>
	<section>
		<PostItemPlaceholder v-if="isPending" v-for="index in 10" :key="index" />
		<p v-else-if="isError || data.length < 1" class="error">Nie znaleziono żadnego postu.</p>
		<PostItem
			v-else
			v-for="post in data"
			:key="post.id"
			:title="post.title"
			:description="post.body.split(' ').slice(0, 5).join(' ') + '...'"
			:userId="post.userId"
		/>
		<Pagination />
	</section>
</template>

<script setup lang="ts">
import PostItemPlaceholder from "../components/posts/PostItemPlaceholder.vue";
import PostItem from "../components/posts/PostItem.vue";
import Pagination from "../components/pagination/Pagination.vue";

import { computed, onMounted, watch } from "vue";
import { useQuery } from "@tanstack/vue-query";
//@ts-ignore
import { useStore } from "vuex";
import axios from "axios";

const store = useStore();

const pageCurrent = computed(() => store.getters.getPageActive);
const postCountPerPage = computed(() => store.getters.getPostCountPerPage);
const searchValue = computed(() => store.getters.getSearchValue);

onMounted(() => {
	store.dispatch("fetchPostsAndSetPageCount");
});

const getPosts = async (page: number, postCount: number, searchValue: string) => {
	const offset = page > 1 ? `&_start=${page * postCount}` : "";

	const response = await axios.get(
		`https://jsonplaceholder.typicode.com/posts${
			!searchValue ? `?_page=${page}&_limit=${postCountPerPage.value}${offset}` : ""
		}`
	);
	try {
		if (searchValue) {
			const filteredData = response.data.filter((el: any) => el.title.startsWith(searchValue));

			console.log("stona", pageCurrent.value);
			console.log("ilość danych: ", filteredData.length);
			store.dispatch("setCounts", filteredData.length);

			const sliceStart = pageCurrent.value <= 1 ? 0 : postCountPerPage.value * (pageCurrent.value - 1);
			const sliceEnd = postCountPerPage.value * pageCurrent.value;
			console.log("start:", sliceStart);
			console.log("end:", sliceEnd);

			return filteredData.slice(sliceStart, sliceEnd);
		}
		return response.data;
	} catch (error: any) {
		console.log(error);
	}
};

const { isLoading, isError, data, refetch } = useQuery({
	queryKey: ["posts"],
	queryFn: () => getPosts(pageCurrent.value, postCountPerPage.value, searchValue.value),
});

watch([pageCurrent, searchValue], () => {
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

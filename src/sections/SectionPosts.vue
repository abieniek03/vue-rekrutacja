<script setup lang="ts">
import PostItem from "../components/posts/PostItem.vue";
import PostItemPlaceholder from "../components/posts/PostItemPlaceholder.vue";
import axios from "axios";
import { useQuery } from "@tanstack/vue-query";
import Pagination from "../components/pagination/Pagination.vue";

const getPosts = async (page: number) => {
	try {
		const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10&_start=${page * 5}`);
		return response.data;
	} catch (error: any) {
		console.log(error);
	}
};

const { isPending, isError, data } = useQuery({
	queryKey: ["posts"],
	queryFn: () => getPosts(1),
});

console.log(data);
</script>

<template>
	<section>
		<PostItemPlaceholder v-if="isPending" v-for="index in 10" :key="index" />
		<p v-else-if="isError" class="error">Nie znaleziono żadnego postu.</p>
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

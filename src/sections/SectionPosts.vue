<script setup lang="ts">
import PostItem from "../components/posts/PostItem.vue";
import axios from "axios";
import { useQuery } from "@tanstack/vue-query";

const getPosts = async (page: number) => {
	try {
		const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10&_start=${page * 5}`);
		return response.data;
	} catch (error) {
		throw new Error(error);
	}
};

const { isPending, isFetching, isError, data, error } = useQuery({
	queryKey: ["posts"],
	queryFn: () => getPosts(1),
});

console.log(data);
</script>

<template>
	<section>
		<p v-if="isPending">ładowanie...</p>
		<PostItem
			v-else
			v-for="post in data"
			:key="post.id"
			:title="post.title"
			:description="post.body.split(' ').slice(0, 5).join(' ') + '...'"
			:userId="post.userId"
		/>
	</section>
</template>

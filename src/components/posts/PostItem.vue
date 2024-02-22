<script setup lang="ts">
import axios from "axios";
import { useQuery } from "@tanstack/vue-query";

interface Props {
	title: string;
	description: string;
	userId: number;
}

const props = defineProps<Props>();

const getAuthor = async (userId: number) => {
	try {
		const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
		return response.data;
	} catch (error) {
		console.log(error);
	}
};

const { data } = useQuery({
	queryKey: ["author", props.userId],
	queryFn: () => getAuthor(props.userId),
});
</script>

<template>
	<div class="post-item__container">
		<h2>{{ props.title }}</h2>
		<p v-if="data" class="post-item__author">
			{{ data.name }}
		</p>
		<p class="post-item__description">
			{{ props.description }}
		</p>
		<a href="/">zobacz więcej</a>
	</div>
</template>

<style scoped lang="scss">
.post-item {
	&__container {
		border: 1px solid;
		padding: 1em 1.5em;
		border-radius: 1rem;
	}

	&__author {
		opacity: 50%;
		margin-bottom: 0.5em;
	}

	&__description {
		margin-bottom: 1em;
	}
}
</style>

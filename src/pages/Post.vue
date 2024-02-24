<script setup lang="ts">
import LoadingAnimation from "../components/elements/LoadingAnimation.vue";

import { ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import axios from "axios";

import { getAuthor } from "../utils/getAuthor";

const postId = window.location.href.split("/")[3];
const authorName = ref("");

const getPost = async (id: number) => {
	try {
		const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
		const authorData = await getAuthor(response.data.userId);
		authorName.value = authorData.name;
		return response.data;
	} catch (error: any) {
		console.log(error);
	}
};

const { isLoading, isError, data } = useQuery({
	queryKey: ["postData"],
	queryFn: () => getPost(Number(postId)),
});
</script>

<template>
	<section>
		<LoadingAnimation v-if="isLoading" />
		<div v-else-if="isError">
			<p class="error">Nie znaleziono takiego postu</p>
		</div>
		<div v-else>
			<h1 class="post__title">{{ data.title }}</h1>
			<p class="post__author">{{ authorName }}</p>
			<div class="post__body">
				<p>{{ data.body }}</p>
			</div>
		</div>
	</section>
</template>

<style scoped lang="scss">
@use "../styles/colors" as colors;

.post {
	&__author {
		opacity: 50%;
	}

	&__body {
		border-top: 1px solid colors.$hover;
		margin-top: 1em;
		padding-top: 1em;
	}
}

@media (min-width: 768px) {
	.post {
		&__title {
			font-size: 2rem;
		}
	}
}
</style>

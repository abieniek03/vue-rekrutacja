<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import axios from "axios";
import { getAuthor } from "../../utils/getAuthor";

interface Props {
	userId: number;
	postId: number;
	title: string;
	body: string;
}

const props = defineProps<Props>();

const deletePost = (postId: number) => {
	axios
		.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
		.then(() => alert(`Usunięto "na niby" post o id ${postId}.😀`))
		.catch(() => alert("Nie udało się usunąć posta!"));
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
			{{ props.body }}
		</p>
		<div class="post-item__button-container">
			<router-link :to="`/${props.postId.toString()}`" class="router-link"> zobacz więcej </router-link>

			<button @click="deletePost(props.postId)" class="post-item__button--delete">usuń</button>
		</div>
	</div>
</template>

<style scoped lang="scss">
@use "../../styles/colors" as colors;
.post-item {
	&__container {
		border: 1px solid;
		border-radius: 1rem;
		padding: 1em 1.5em;
	}

	&__author {
		opacity: 50%;
		margin-bottom: 0.5em;
	}

	&__description {
		margin-bottom: 1em;
	}

	&__button {
		&-container {
			display: flex;
			gap: 0.5em;
		}
		&--delete {
			background-color: colors.$error;
			border-color: colors.$error;

			&:hover {
				background-color: colors.$error-hover;
				border-color: colors.$error-hover;
			}
		}
	}
}
</style>

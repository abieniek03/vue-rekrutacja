<script setup lang="ts">
interface Props {
	title: string;
	description: string;
	userId: number;
}

const props = defineProps<Props>();
</script>

<template>
	<div class="post-item__container">
		<h2>{{ props.title }}</h2>
		<p>
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
}
</style>

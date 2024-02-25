<script setup lang="ts">
document.title = "Nie znaleziono takiej strony - 404";
</script>

<template>
	<section class="not-found">
		<div class="not-found__container">
			<h1 class="not-found__title">Nie znaleziono takiej strony</h1>
			<p class="not-found__code">404</p>
			<router-link to="/" class="router-link">wróć na stronę główną</router-link>
		</div>
	</section>
</template>

<style scoped lang="scss">
.not-found {
	&__container {
		text-align: center;
	}
	&__title {
		font-size: 2rem;
	}
	&__code {
		margin-bottom: 1rem;
		font-size: 5rem;
		font-weight: bold;
	}
}
</style>

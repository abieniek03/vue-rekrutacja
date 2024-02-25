<script setup lang="ts">
import { ref } from "vue";
//@ts-ignore
import { useStore } from "vuex";

const store = useStore();
const searchValue = ref<string>("");

const changeSearchValue = () => {
	store.dispatch("setSearchValue", searchValue.value);
	store.dispatch("setPageActive", 1);
};
</script>

<template>
	<section class="search">
		<div class="search__container">
			<label for="search" class="search__label">Wyszukaj po tytule</label>
			<input v-model="searchValue" @input="changeSearchValue" type="text" id="search" class="search__input" />
		</div>
	</section>
</template>

<style scoped lang="scss">
@use "../styles/colors" as colors;

.search {
	border-bottom: 1px solid colors.$hover;
	padding-bottom: 2em;
	margin-bottom: 2em;
	&__container {
		display: flex;
		flex-direction: column;
	}
	&__input {
		background-color: transparent;
		color: colors.$content;
		outline: none;
		border: 1px solid colors.$content;
		border-radius: 0.25em;
		padding: 0.5em;
		margin-top: 0.5em;
		font-size: 1rem;
		cursor: pointer;
	}
}
</style>

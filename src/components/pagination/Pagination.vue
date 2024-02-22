<script setup lang="ts">
import { computed } from "vue";
//@ts-ignore
import { useStore } from "vuex";

const store = useStore();
const currentPage = computed({
	get: () => store.getters.getActivePage,
	set: (value) => {
		store.dispatch("setActivePage", value);
	},
});

const goToPreviousPage = () => {
	if (currentPage.value > 1) {
		store.dispatch("setActivePage", currentPage.value - 1);
	}
};

const goToNextPage = () => {
	if (currentPage.value < 10) {
		store.dispatch("setActivePage", currentPage.value + 1);
	}
};
</script>

<template>
	<div class="pagination__container">
		<button @click="goToPreviousPage" :disabled="currentPage <= 1 || currentPage > 10">
			<i class="ri-arrow-left-s-fill"></i>
		</button>
		<div>
			<input v-model.lazy="currentPage" type="text" class="pagination__input" />
			<span class="slash">/</span><span>10</span>
		</div>
		<button @click="goToNextPage" :disabled="currentPage >= 10">
			<i class="ri-arrow-right-s-fill"></i>
		</button>
	</div>
</template>

<style scoped lang="scss">
@use "../../styles/colors" as color;
.slash {
	margin-right: 0.5em;
}
.pagination {
	&__container {
		margin-top: 2em;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1em;
		font-size: 1.4rem;
	}

	&__button--disabled {
	}

	&__input {
		background: none;
		outline: none;
		border: none;
		border-bottom: 2px solid color.$placeholder;
		color: color.$content;
		width: 50px;
		font-size: 1.3rem;
		text-align: center;
		margin-right: 0.5em;
		padding: 0.2em 0.5em;

		&:focus {
			border-bottom: 2px solid color.$content;
		}
	}
}
</style>

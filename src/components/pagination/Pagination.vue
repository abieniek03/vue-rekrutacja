<script setup lang="ts">
import { computed } from "vue";
//@ts-ignore
import { useStore } from "vuex";

const store = useStore();

const pageCurrent = computed({
	get: () => store.getters.getPageActive,
	set: (value) => {
		store.dispatch("setPageActive", value);
	},
});

const pageCount = computed(() => store.getters.getPageCount);

const setCurrentPage = (e: HTMLInputElement) => {
	store.commit("setPageActive", parseInt(e.value));
};

const goToPreviousPage = () => {
	if (pageCurrent.value > 1) {
		store.dispatch("setPageActive", parseInt(pageCurrent.value) - 1);
	}
};

const goToNextPage = () => {
	if (pageCurrent.value < pageCount.value) {
		store.dispatch("setPageActive", parseInt(pageCurrent.value) + 1);
	}
};
</script>

<template>
	<div v-if="pageCount > 1" class="pagination__container">
		<button @click="goToPreviousPage" :disabled="pageCurrent <= 1 || pageCurrent > pageCount">
			<i class="ri-arrow-left-s-fill"></i>
		</button>
		<div>
			<input v-model.lazy="pageCurrent" :input="setCurrentPage" type="text" class="pagination__input" />
			<span class="slash">/</span><span>{{ pageCount }}</span>
		</div>
		<button @click="goToNextPage" :disabled="pageCurrent >= pageCount">
			<i class="ri-arrow-right-s-fill"></i>
		</button>
	</div>
</template>

<style scoped lang="scss">
@use "../../styles/colors" as colors;
.slash {
	margin-right: 0.5em;
}
.pagination {
	&__container {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1em;
		font-size: 1.4rem;
		margin-top: 2em;
	}

	&__input {
		width: 50px;
		background: none;
		color: colors.$content;
		outline: none;
		border: none;
		border-bottom: 2px solid colors.$placeholder;
		font-size: 1.3rem;
		text-align: center;
		margin-right: 0.5em;
		padding: 0.2em 0.5em;

		&:focus {
			border-bottom: 2px solid colors.$content;
		}
	}
}
</style>

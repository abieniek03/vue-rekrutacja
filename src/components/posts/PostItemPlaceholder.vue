<script setup lang="ts"></script>

<template>
	<div class="post-item__placeholder" />
</template>

<style scoped lang="scss">
@use "../../styles/colors" as colors;

.post-item {
	&__placeholder {
		width: 100%;
		height: 140px;
		background-color: colors.$placeholder;
		border: 1px solid;
		border-radius: 1em;
		animation: animation-placeholder 2s infinite;
	}
}

@keyframes animation-placeholder {
	0% {
		background-color: colors.$placeholder;
	}
	50% {
		background-color: colors.$hover;
	}
	100% {
		background-color: colors.$placeholder;
	}
}
</style>

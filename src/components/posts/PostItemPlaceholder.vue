<script setup lang="ts"></script>

<template>
	<div class="post-item__placeholder"></div>
</template>

<style scoped lang="scss">
@use "../../styles/colors" as color;

.post-item {
	&__placeholder {
		width: 100%;
		height: 140px;
		border-radius: 1em;
		border: 1px solid;
		animation: animation-placeholder 2s infinite;
		background-color: color.$placeholder;
	}
}

@keyframes animation-placeholder {
	0% {
		background-color: color.$placeholder;
	}
	50% {
		background-color: color.$hover;
	}
	100% {
		background-color: color.$placeholder;
	}
}
</style>

<script setup lang="ts"></script>

<template>
	<div class="post-item__placeholder"></div>
</template>

<style scoped lang="scss">
.post-item {
	&__placeholder {
		width: 100%;
		height: 140px;
		border-radius: 1em;
		border: 1px solid;
		animation: animation-placeholder 2s infinite;
		background-color: rgba(255, 255, 255, 0.1);
	}
}

@keyframes animation-placeholder {
	0% {
		background-color: rgba(255, 255, 255, 0.1);
	}
	50% {
		background-color: rgba(255, 255, 255, 0.05);
	}
	100% {
		background-color: rgba(255, 255, 255, 0.1);
	}
}
</style>

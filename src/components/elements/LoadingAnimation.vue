<script setup lang="ts"></script>

<template>
	<div class="loading-animation__container">
		<div class="loading-animation__element" />
	</div>
</template>

<style scoped lang="scss">
@use "../../styles/colors" as colors;

$size: 15vw;
.loading-animation {
	&__container {
		position: relative;

		width: 100%;
		height: $size;
		padding: 2em;
	}

	&__element {
		position: absolute;
		background-color: colors.$hover;
		width: $size;
		height: 100%;
		left: 50%;
		transform: translateX(-50%);
		border-radius: 100%;
		margin: 0 auto;

		&::before {
			position: absolute;
			content: "";
			background-color: colors.$background;
			width: 100%;
			height: 100%;
			border-radius: 100%;
			animation: animation-loading 0.8s infinite;
		}
	}
}

@keyframes animation-loading {
	from {
		scale: 0;
		opacity: 0;
	}
	to {
		scale: 1;
		opacity: 1;
	}
}
</style>

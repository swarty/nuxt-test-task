<template>
	<h1 class="site-title" v-html="title"></h1>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true,
			default: ''
		}
	}
}
</script>

<style lang="scss">
	.site-title {
		font-family: "Roboto", sans-serif;
		font-size: 34px;
		font-weight: 500;
		letter-spacing: 0.25px;
		line-height: 1.2;
		color: #263238;
	}
</style>
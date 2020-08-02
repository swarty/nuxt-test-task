<template>
	<label class="search-panel fw">
		<img src="/images/search-icon.svg" alt="search icon" class="search-panel__icon icon">
		<input type="text" class="search-panel__input input" placeholder="Search galaxies" @keyup="filter" v-model="input">
	</label>
</template>

<script>
import throttle from 'lodash.throttle'

export default {
	data() {
		return {
			input: ''
		}
	},
	mounted() {
	},
	methods: {
		filter() {
			this.$emit('search-by', this.input);
		}
	}
}
</script>

<style lang="scss">
	.search-panel {
		width: 270px;
		border: 1px solid #E0E0E0;
		border-radius: 4px;
		padding: 9px 13px;
		align-items: center;
		&__icon {
			margin: 0 15px 0 0;
		}
		&__input {
			flex-grow: 1;
			border: 0;
			color: #909597;
			font-family: "Roboto", sans-serif;
		}
	}
</style>
<template>
	<div class="container">
		<header class="page__header fw">
			<Title class="page__title" title="Named galaxies" />
			<SearchInput v-on:search-by="searchBy" />
		</header>

		<main class="page-body">
			<Table :content="this.$store.state.galaxies" :searchByName="searchByName" />
		</main>
	</div>
</template>

<script>
import Title from '../components/Title'
import SearchInput from '../components/SearchInput'
import Table from '../components/Table'

export default {
	components: {
		Title,
		SearchInput,
		Table
	},
	data() {
		return {
			searchByName: '',
		}
	},
	methods: {
		searchBy(data) {
			this.searchByName = data;
		}
	}
}
</script>

<style lang="scss">
	.container {
		box-sizing: border-box;
		width: 100%;
		padding: 70px 60px;
		@media (max-width: 1279px) {
			padding: 17px 15px 170px;
		}
	}

	.page {
		&__header {
			justify-content: space-between;
			align-items: stretch;
			flex-wrap: wrap;
			margin: 0 0 60px;
			@media (max-width: 1279px) {
				flex-direction: column;
				margin: 0 0 25px;
			}
		}

		&__title {
			margin: 0 auto 0 0;
			@media (max-width: 1279px) {
				margin: 0 0 15px;
			}
		}
	}
</style>

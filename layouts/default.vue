<template>
	<div class="site-wrapper fw">
		<Sidebar />
		<Nuxt />
	</div>
</template>

<script>
// components
import Sidebar from '../components/Sidebar'

// libs
import axios from 'axios'

export default {
	components: {
		Sidebar
	},
	created() {
		axios.get(this.$store.state.route)
			.then( resp => this.$store.commit('fillGalaxies', resp))
			// .then( () => console.log(this.$store.state.galaxies))
	}
}
</script>

<style lang="scss">
	html, body {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	h1,h2,h3,h4,h5,h6,p,button,input {
		margin: 0;
	}

	.site-wrapper {
		align-items: stretch;
		min-height: 100vh;
		@media (max-width: 1279px) {
			flex-direction: column;
		}
	}

	.fw {
		display: flex;
	}
</style>
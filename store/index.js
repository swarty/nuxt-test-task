// state

export const state = () => ({
	route: '/api/',
	galaxies: [],
})

export const mutations = {
	fillGalaxies(state, { data }) {
		state.galaxies = data;
	}
}

export const getters = {
}

export const actions = {
	
}
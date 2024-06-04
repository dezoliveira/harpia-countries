import { createStore } from "vuex";

export default createStore({
  state: {
    countries: []
  },

  mutations: {
    loadCountries(state, countries) {
      state.countries = state
    }
  },

  actions: {
    async loadCountries({ commit }) {
      const req = await fetch("https://restcountries.com/v3.1/all")
      const data = await req.json()
      commit('loadCountries', data)
    }
  }
})
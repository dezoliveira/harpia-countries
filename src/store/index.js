import { createStore } from "vuex";

export default createStore({
  state: {
    countries: []
  },

  mutations: {
    loadCountries(state, countries) {
      state.countries = countries
    }
  },

  actions: {
    async loadCountries({ commit }) {
      const storage = localStorage.getItem('countries')

      if (storage) {
        commit('loadCountries', JSON.parse(storage))

      } else {
        const req = await fetch("https://restcountries.com/v3.1/all")
        const data = await req.json()

        localStorage.setItem('countries', JSON.stringify(data))
        commit('loadCountries', data)
      }
    },
  }
})
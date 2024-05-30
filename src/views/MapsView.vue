<script>
import SearchBar from '@/components/SearchBar.vue'
export default {
  components: {
    SearchBar
  },

  data() {
    return {
      country: '',
      countries: []
    }
  },

  methods: {
    async handleInput($event) {
      this.country = ''
      let country = $event.target.value

      if (country.length > 3) {
        this.getCountryName(country)
      }
    },

    async getCountries() {
      const response = await fetch('https://restcountries.com/v3.1/all')
      const data = await response.json()
      this.countries = data
    },

    getCountryName(country) {
      const filteredCountries = this.countries
        .map((newCountry) => {
          return newCountry
        })
        .filter((c) => {
          return c.name.common.toLowerCase().includes(country.toLowerCase())
        })

      this.country = filteredCountries
    }
  },

  mounted() {
    this.getCountries()
  }
}
</script>
<template>
  <div class="container p-4">
    <SearchBar @input="handleInput" :input-text="this.country" />
    <div v-if="this.country">
      <ul v-for="c in this.country" :key="c.cioc">
        <li>
          <h1 class="hover">{{ c.name.common }}</h1>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped></style>

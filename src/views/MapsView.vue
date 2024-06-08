<script>
// components
import SearchBar from '@/components/SearchBar.vue'
import GoogleMaps from '@/components/GoogleMaps.vue'
import CountryList from '@/components/CountryList.vue'

// vue
import { mapState } from 'vuex'

export default {
  components: {
    SearchBar,
    GoogleMaps,
    CountryList
  },

  data() {
    return {
      country: '',
      isShowList: true,
      selectedValue: ''
    }
  },

  methods: {
    async handleInput($event) {
      this.country = ''
      this.selectedValue = ''
      let country = $event.target.value

      if (country.length > 3) {
        this.getCountryName(country)
      }
    },

    getCountryName(country) {
      console.log(country)
      this.selectedValue = country
      const filteredCountries = this.countries
        .map((newCountry) => {
          return newCountry
        })
        .filter((c) => {
          return c.name.common.toLowerCase().includes(country.toLowerCase())
        })

      this.country = filteredCountries
      this.isShowList = true
    },

    getCountryById(id) {
      const filteredCountries = this.countries
        .map((newCountry) => {
          return newCountry
        })
        .filter((c) => {
          return c.cioc === id
        })

      this.country = filteredCountries
      console.log(this.country)
      this.selectedValue = filteredCountries[0].name.common
      this.isShowList = false
    }
  },

  // call states on store
  computed: {
    ...mapState(['countries'])
  }
}
</script>
<template>
  <div class="container p-4 d-flex flex-column align-items-center justify-content-center gap-4">
    <SearchBar
      :input-text="this.country"
      :selected-value="this.selectedValue"
      @input="handleInput"
    />
    <CountryList
      v-show="this.country && this.isShowList"
      :country="this.country"
      @get-country="getCountryById"
    />
    <GoogleMaps
      :lat="this.country ? this.country[0].capitalInfo.latlng[0] : undefined"
      :lng="this.country ? this.country[0].capitalInfo.latlng[1] : undefined"
      :target-country="this.country"
    />
  </div>
</template>
<style scoped></style>

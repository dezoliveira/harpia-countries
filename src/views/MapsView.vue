<script>
import SearchBar from '@/components/SearchBar.vue'
import GoogleMaps from '@/components/GoogleMaps.vue'
export default {
  components: {
    SearchBar,
    GoogleMaps
  },

  data() {
    return {
      country: '',
      countries: [],
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

    async getCountries() {
      const response = await fetch('https://restcountries.com/v3.1/all')
      const data = await response.json()
      this.countries = data
    },

    getCountryName(country) {
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

      console.log(filteredCountries)
    },

    getValueList(name) {
      this.getCountryName(name)
      this.isShowList = false
    }
  },

  mounted() {
    this.getCountries()
  }
}
</script>
<template>
  <div class="container p-4 d-flex flex-column align-items-center justify-content-center gap-4">
    <SearchBar
      @input="handleInput"
      :input-text="this.country"
      :selected-value="this.selectedValue"
    />
    <div v-if="this.country && this.isShowList" class="col-lg-6 col-md-6 col-sm-6">
      <ul v-for="c in this.country" :key="c.cioc" class="list-group">
        <li @click="getValueList(c.name.common)" class="list-group-item list-group-item-action">
          {{ c.name.common }}
          <span class="">
            <img :src="c.flags.png ? c.flags.png : ''" width="24px" />
          </span>
        </li>
      </ul>
    </div>
    <GoogleMaps
      :lat="this.country ? this.country[0].latlng[0] : undefined"
      :lng="this.country ? this.country[0].latlng[1] : undefined"
      :target-country="this.country"
    />
  </div>
</template>
<style scoped>
li {
  transition: 0.4s ease-out;
}
li:hover {
  cursor: pointer;
}
.list-group-item:hover {
  background-color: #0d6efd;
  color: #fff;
}
</style>

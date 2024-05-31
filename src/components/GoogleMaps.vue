<template>
  <div ref="map" class="mapContainer"></div>
</template>

<script>
export default {
  props: {
    lat: {
      type: Number,
      default: -10
    },
    lng: {
      type: Number,
      default: -55
    },
    targetCountry: {
      type: Object
    }
  },
  data() {
    return {
      country: {
        lat: -10,
        lng: -55
      }
    }
  },

  methods: {
    async loadMap() {
      const map = this.$refs.map
      await new window.google.maps.Map(map, {
        center: {
          lat: this.lat,
          lng: this.lng
        },
        zoom: 3
      })
    }
  },

  mounted() {
    console.log('lat', this.lat)
    console.log('lng', this.lng)
    console.log('country', this.country)
    this.loadMap()
  },

  updated() {
    this.loadMap()
    console.log('upd lat', this.lat)
    console.log('upd lng', this.lng)
    console.log('upd country', this.country)
  }
}
// import { onMounted, ref } from 'vue'
// const map = ref(null)
// const country = {
//   lat: -10,
//   lng: -55
// }

// onMounted(() => {
//   new window.google.maps.Map(map.value, {
//     center: country,
//     zoom: 4
//   })
// })
</script>

<style>
.mapContainer {
  width: 70vh;
  height: 70vh;
}
</style>

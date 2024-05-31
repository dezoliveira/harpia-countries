<template>
  <div ref="map" class="mapContainer"></div>
</template>

<script>
export default {
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
        center: this.country,
        zoom: 4
      })
    }
  },

  mounted() {
    this.loadMap()
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

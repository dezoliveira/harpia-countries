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
      type: Object,
      default: {}
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
      // const map = this.$refs.map
      // await new window.google.maps.Map(map, {
      //   center: {
      //     lat: this.lat,
      //     lng: this.lng
      //   },
      //   zoom: 3
      // })
      const { Map } = await window.google.maps.importLibrary('maps')
      const map = this.$refs.map

      new Map(map, {
        center: {
          lat: this.lat,
          lng: this.lng
        },
        position: {
          lat: this.lat,
          lng: this.lng
        },
        zoom: 4
      })
    },

    async loadMarker() {
      const { AdvancedMarkerElement } = await window.google.maps.importLibrary('marker')
      const map = this.$refs.map

      new AdvancedMarkerElement(map, {
        position: {
          lat: this.lat,
          lng: this.lng
        }
      })
    }
  },

  mounted() {
    console.log('lat', this.lat)
    console.log('lng', this.lng)
    console.log('country', this.country)
    this.loadMap()
    // this.loadMarker()
  },

  updated() {
    this.loadMap()
    console.log('upd lat', this.lat)
    console.log('upd lng', this.lng)
    console.log('upd country', this.country)
  }
}
</script>

<style>
.mapContainer {
  width: 70vh;
  height: 70vh;
}
</style>

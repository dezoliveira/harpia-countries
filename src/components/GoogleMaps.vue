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
    targetCountry: []
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
    async initMap() {
      // const map = this.$refs.map
      // await new window.google.maps.Map(map, {
      //   center: {
      //     lat: this.lat,
      //     lng: this.lng
      //   },
      //   zoom: 3
      // })

      // new Map(map, {
      //   center: {
      //     lat: this.lat,
      //     lng: this.lng
      //   },
      //   zoom: 2
      // })
      const { Map } = await window.google.maps.importLibrary('maps')
      const { AdvancedMarkerElement } = await window.google.maps.importLibrary('marker')

      // google maps map
      const map = new Map(this.$refs.map, {
        center: {
          lat: this.lat,
          lng: this.lng
        },
        zoom: 3,
        mapId: '4504f8b37365c3d0'
      })

      // google maps marker
      const marker = new AdvancedMarkerElement({
        map,
        position: {
          lat: this.lat,
          lng: this.lng
        }
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
    this.initMap()
    // this.loadMarker()
  },

  updated() {
    this.initMap()
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

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
    targetCountry: {}
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
      const { Map, InfoWindow } = await window.google.maps.importLibrary('maps')
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

      const { flag, capital, name, currencies, languages, continents } = this.targetCountry[0]

      const countryString = `
        <div class="infoWindow">
          <span>
            <h4>Country: </h4>
            <p>${name.common}</p>
          </span>
          <span>
            <h4>Capital: </h4>
            <p>${capital}</p>  
          </span>
          <span>
            <h4>Moeda: </h4>
            <p>${Object.keys(currencies)}</p>
          </span>
          <span>
            <h4>Linguas: </h4>
            <p>${Object.values(languages)}   
          </span>
          <span>
            <h4>Bandeira: </h4>  
            ${flag}
          </span>
          <span>
            <h4>Continentes: </h4>  
            ${continents}
          </span>
        </div>
      `

      // google maps info window
      const infowindow = new InfoWindow({
        content: countryString,
        ariaLabel: 'Teste'
      })

      marker.addListener('click', () => {
        infowindow.open({
          anchor: marker,
          map
        })
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
p {
  font-size: medium;
}

.mapContainer {
  width: 70vh;
  height: 70vh;
}

.infoWindow {
  width: 50vh;
}
</style>

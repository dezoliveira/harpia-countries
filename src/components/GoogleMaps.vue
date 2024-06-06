<template>
  <div ref="map" class="mapContainer"></div>
</template>

<script>
export default {
  props: {
    lat: {
      type: Number,
      default: -15.79
    },
    lng: {
      type: Number,
      default: -47.88
    },
    targetCountry: {
      type: Array,
      default: () => [
        {
          flags: {
            png: 'https://flagcdn.com/w320/br.png'
          },
          name: {
            common: 'Brazil'
          },
          capital: 'Brasilia',
          currencies: {
            BRL: {
              name: 'Brazilian real'
            }
          },
          languages: {
            por: 'Portuguese'
          },
          continents: 'South America',
          maps: {
            googleMaps: 'https://goo.gl/maps/waCKk21HeeqFzkNC9'
          }
        }
      ]
    }
  },
  data() {},

  methods: {
    async initMap() {
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

      // get values
      const { flags, flag, capital, name, currencies, languages, continents, maps } =
        this.targetCountry[0]

      const countryString = `
      <div class="card" style="width: 18rem;">
        <img src="${flags.png}" alt="${flags.alt}" class="card-img-top" alt="..." width=80px />
        <div class="card-body">
          <h5 class="card-title">${name.common} ${flag}</h5>

          <p class="card-text mb-1">
            <label><b>Capital:</b></label>
            <span>${capital}</span>
          </p>
          <p class="card-text mb-1">
            <label><b>Moeda:</b></label>
            <span>${Object.keys(currencies)}</span>
          </p>
          <p class="card-text mb-1">
          <label><b>Linguas:</b> </label>
            <span>${Object.values(languages)}</span>
          </p>
          <p class="card-text mb-1">
          <label><b>Continente:</b> </label>
            <span>${continents}</span>
          </p>

          <a href="${maps.googleMaps}" class="btn btn-primary my-2">
            Expandir
          </a>
        </div>
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
    this.initMap()
  },

  updated() {
    this.initMap()
  }
}
</script>

<style scoped>
p {
  font-size: medium;
  margin: 0;
  padding: 0;
}

.mapContainer {
  width: 70vh;
  height: 70vh;
  border-radius: 15px;
}

.infoWindow {
  width: 50vh;
  color: red;
}

.infoWindow label {
  font-weight: bold;
  font-size: large;
}

.card-body {
  display: flex;
  flex-direction: column;
}
</style>

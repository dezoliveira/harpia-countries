<script setup>
import { onUpdated, reactive } from 'vue'
import { GoogleMap, Marker, InfoWindow } from 'vue3-google-map'

const props = defineProps({
  lat: Number,
  lng: Number,
  targetCountry: Object
})

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

let center = {
  lat: -15.793889,
  lng: -47.882778
}

let markerOptions = { position: center, label: 'BR', title: 'BRAZIL' }

onUpdated(() => {
  if (props.targetCountry[0] !== undefined) {
    const { capitalInfo, flag, name } = props.targetCountry[0]

    center = reactive({
      lat: capitalInfo.latlng[0],
      lng: capitalInfo.latlng[1]
    })

    markerOptions = reactive({
      position: {
        lat: capitalInfo.latlng[0],
        lng: capitalInfo.latlng[1]
      },
      label: flag,
      title: String(name).toLowerCase()
    })
  }
})
</script>

<template>
  <GoogleMap :api-key="apiKey" class="mapContainer" :center="center" :zoom="3">
    <Marker :options="markerOptions">
      <div v-if="targetCountry.length">
        <InfoWindow>
          <div
            v-for="country in targetCountry"
            :key="country.cioc"
            class="card"
            style="width: 18rem"
          >
            <img :src="country.flags.png" alt="" class="card-img-top" width="80px" />
            <div class="card-body">
              <h5 class="card-title">
                {{ country.name.common }}
              </h5>

              <p class="card-text mb-1">
                <label><b>Capital:</b></label>
                <span>{{ country.capital }}</span>
              </p>
              <p class="card-text mb-1">
                <label><b>Moeda:</b></label>
                <span>{{ Object.keys(country.currencies) }}</span>
              </p>
              <p class="card-text mb-1">
                <label><b>Linguas:</b> </label>
                <span>{{ Object.values(country.languages) }}</span>
              </p>
              <p class="card-text mb-1">
                <label><b>Continente:</b> </label>
                <span>{{ country.continents }}</span>
              </p>

              <a :href="country.maps.googleMaps" target="_blank" class="btn btn-primary my-2">
                Expandir
              </a>
            </div>
          </div>
        </InfoWindow>
      </div>
    </Marker>
  </GoogleMap>
</template>
<style scoped>
h1 {
  color: black;
}

.mapContainer {
  width: 70vh;
  height: 70vh;
  border-radius: 15px;
}
</style>

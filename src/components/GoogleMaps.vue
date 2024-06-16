<script setup>
import { onUpdated, reactive } from 'vue'
import { GoogleMap, Marker, InfoWindow } from 'vue3-google-map'

const props = defineProps({
  lat: Number,
  lng: Number,
  targetCountry: []
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
  <GoogleMap :api-key="apiKey" style="width: 100%; height: 500px" :center="center" :zoom="3">
    <Marker :options="markerOptions">
      <div v-if="targetCountry.length">
        <InfoWindow>
          <h1>{{ targetCountry[0].name.common }}</h1>
        </InfoWindow>
      </div>
    </Marker>
  </GoogleMap>
</template>
<style scoped></style>

<script setup>
import { ref, onMounted, onUpdated, computed, reactive  } from 'vue'
import { GoogleMap, Marker, InfoWindow } from 'vue3-google-map'

const props = defineProps({
  lat: Number,
  lng: Number,
  targetCountry: []
})

// const { 
//   flags,
//   flag,
//   capital,
//   name,
//   currencies,
//   languages,
//   continents,
//   maps 
// } = reactive({ ...props.targetCountry[0] })  

// onUpdated(() => {
//   // text content should be the same as current `count.value`
//   const { 
//   flags,
//   flag,
//   capital,
//   name,
//   currencies,
//   languages,
//   continents,
//   maps
//   } = targetCountry[0]
//   console.log(flags)
// })

// // a computed ref
// const country = computed(() => {
//   console.log(this.targetCountry[0])
//   return this.targetCountry[0]
// })

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

const center = { 
  lat: -15.793889,
  lng: -47.882778
}

const markerOptions = { position: center, label: 'L', title: 'LADY LIBERTY' }

</script>

<template>
  <GoogleMap
  :api-key="apiKey"
  style="width: 100%; height: 500px"
  :center="center"
  :zoom="3"
  >
    <Marker :options="markerOptions">
      <div v-if="targetCountry.length">
        <InfoWindow>
          <h1>{{ targetCountry[0].name.common }}</h1>
        </InfoWindow>
      </div>
    </Marker>
  </GoogleMap>
</template>
<style scoped>
  h1 {
    color: #000;
  }
</style>
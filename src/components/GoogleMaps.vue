<template>
  <div ref="map" class="mapContainer"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
const map = ref(null)

onMounted(() => {
  new window.google.maps.Map(map.value, {
    center: { lat: 45.4315296, lng: -75.6971931 },
    zoom: 10
  })
})
</script>

<style>
.mapContainer {
  width: 70vh;
  height: 70vh;
}
</style>

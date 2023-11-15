<script setup>
import { onMounted, ref } from 'vue'

import { initializeMap } from '../hooks/useKakaoMap'

let mapContainer = null
let map = null

const coordinate = ref({
  latitude: 33.450701,
  longitude: 126.570667,
})

onMounted(() => {
  mapContainer = initializeMap(coordinate.value.latitude, coordinate.value.longitude)
})
</script>

<template>
  <div id="container">
    <div id="map"></div>
  </div>
</template>

<style scoped>
#container {
  width: 100%;
  height: 100vh;
}

#map {
  width: 100%;
  height: 100%;
}
</style>

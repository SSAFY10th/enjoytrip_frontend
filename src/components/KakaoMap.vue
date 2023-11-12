<script setup>
import { onMounted, ref } from 'vue'

import { initializeMap } from '../hooks/useKakaoMap'

let map = null

const latitude = ref(33.450701)
const longitude = ref(126.570667)

onMounted(() => {
  map = initializeMap(latitude.value, longitude.value)
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

<script setup>
import { onMounted } from 'vue'
import { useKakaoMap } from '../hooks/useKakaoMap'

const { onMountedCallback } = useKakaoMap()
onMounted(onMountedCallback)
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

<script setup>
import Map from '../components/Map.vue'
import Slide from '../components/Slide.vue'
</script>

<template>
  <main id="container">
    <Map />
    <div>
      <Slide />
    </div>
  </main>
</template>

<style scoped>
#container {
  position: relative;
}
</style>

<script setup>
import { onMounted } from 'vue'

import { useKakaoMap } from './hooks/useKakaoMap'

const { fetchSidos } = useKakaoMap()

onMounted(() => {
  fetchSidos()
})
</script>

<template>
  <RouterView />
</template>

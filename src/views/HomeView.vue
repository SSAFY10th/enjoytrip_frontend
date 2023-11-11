<script setup>
import KakaoMap from '../components/KakaoMap.vue'
import BottomSheet from '../components/BottomSheet.vue'
import { useBottomSheet } from '../hooks/useBottomSheet'

const { toggleBottomSheet, openBottomSheet } = useBottomSheet()
</script>

<template>
  <main>
    <KakaoMap />
    <BottomSheet>
      <h1>content</h1>
    </BottomSheet>
  </main>
</template>

<style scoped></style>

<script setup>
import Header from '../components/Header.vue'
import KakaoMap from '../components/KakaoMap.vue'
import BottomSheet from '../components/BottomSheet.vue'
import { useBottomSheet } from '../hooks/useBottomSheet'

const { toggleBottomSheet, openBottomSheet } = useBottomSheet()
</script>

<template>
  <Header />
  <main>
    <KakaoMap />
    <BottomSheet>
      <h1>여기에...</h1>
    </BottomSheet>
  </main>
</template>

<style scoped></style>

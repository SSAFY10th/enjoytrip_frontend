<script setup>
// components
import Header from '../components/Header.vue'
import KakaoMap from '../components/KakaoMap.vue'
import BottomSheet from '../components/BottomSheet.vue'
import BottomSheetPanel from '../components/BottomSheetPanel.vue'
import LocationSearchBar from '../components/LocationSearchBar.vue'
</script>

<template>
  <Header />
  <main>
    <KakaoMap />
    <BottomSheet>
      <section id="contents">
        <LocationSearchBar />
        <BottomSheetPanel />
      </section>
    </BottomSheet>
  </main>
</template>

<style scoped>
#contents {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
}
</style>

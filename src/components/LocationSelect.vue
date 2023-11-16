<script setup>
import { sidoList } from '../_lib/data/sido'
import { useKakaoMap } from '../hooks/useKakaoMap'

const { gugunList, handleSelectSidoOption, handleSelectGugunOption } = useKakaoMap()
</script>

<template>
  <div id="grid">
    <v-select
      label="시/도"
      :items="sidoList"
      item-value="code"
      item-title="name"
      @update:model-value="handleSelectSidoOption"
    ></v-select>
    <v-select
      label="구/군"
      :items="gugunList"
      item-value="code"
      item-title="name"
      @update:model-value="handleSelectGugunOption"
    ></v-select>
  </div>
</template>

<style scoped>
#grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
</style>

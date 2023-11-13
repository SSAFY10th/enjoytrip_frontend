<script setup>
import { ref } from 'vue'
import { sidoList } from '../_lib/data/sido'
import { gugunObject } from '../_lib/data/gugun'

const selectedSidoCode = ref('') // 서울이 default
const selectedGugunCode = ref('')

const gugunList = ref([])

const clickSidoOption = (sidoCode) => {
  selectedSidoCode.value = sidoCode
  selectedGugunCode.value = ''
  gugunList.value = gugunObject[sidoCode]
}

const clickGugunOption = (gugunCode) => {
  selectedGugunCode.value = gugunCode
}
</script>

<template>
  <div id="grid">
    <v-select
      label="시/도"
      :items="sidoList"
      item-value="code"
      item-title="name"
      @update:model-value="clickSidoOption"
    ></v-select>
    <v-select
      label="구/군"
      :items="gugunList"
      item-value="code"
      item-title="name"
      @update:model-value="clickGugunOption"
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

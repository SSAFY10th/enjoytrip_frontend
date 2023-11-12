<script setup>
// design-system
import Tabs from '../_lib/components/Tabs.vue'
import Select from '../_lib/components/Select.vue'
// hooks
import { useBottomSheetTabs, options } from '../hooks/useBottomSheetTabs'
import { useKakaoMap } from '../hooks/useKakaoMap'

const { selectedOption, onChange } = useBottomSheetTabs()
const { sidos, selectSido } = useKakaoMap()

const sidoLabel = '시/도'
const gugunLabel = '구/군'
</script>

<template>
  <div id="container">
    <div id="tabs">
      <Tabs :options="options" :selectedOption="selectedOption" :onChange="onChange" />
    </div>
    <div id="panel">
      <template v-if="selectedOption === 'option1'">
        <div style="display: flex; gap: 10px">
          <Select :label="sidoLabel" />
          <Select :label="gugunLabel" />
        </div>
      </template>
      <template v-else>로그인해라</template>
    </div>
  </div>
</template>

<style scoped>
#container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

#tabs {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

#panel {
  width: 100%;
}
</style>

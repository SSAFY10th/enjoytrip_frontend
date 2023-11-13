<script setup>
// design-system
import Tabs from '../_lib/components/Tabs.vue'
// components
import LocationSelect from './LocationSelect.vue'
// hooks
import { useBottomSheetTabs, options } from '../hooks/useBottomSheetTabs'

const { selectedOption, onChange } = useBottomSheetTabs()
</script>

<template>
  <div id="container">
    <div id="tabs">
      <Tabs :options="options" :selectedOption="selectedOption" :onChange="onChange" />
    </div>
    <div id="panel">
      <template v-if="selectedOption === 'option1'">
        <LocationSelect />
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

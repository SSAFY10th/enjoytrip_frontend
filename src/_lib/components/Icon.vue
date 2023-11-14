<script setup>
const props = defineProps({
  name: String,
  size: String, // xsm, sm, md, lg, xlg
})

const SizeMatcher = {
  xsm: 20,
  sm: 24,
  md: 28,
  lg: 32,
  xlg: 36,
}

const GoogleIconMatcher = {
  arrowBack: 'arrow_back_ios',
  home: 'home',
}
</script>

<template>
  <div id="container">
    <span id="icon" :style="{ fontSize: `${SizeMatcher[size]}px` }" class="material-icons">{{
      GoogleIconMatcher[name]
    }}</span>
  </div>
</template>

<style scoped>
#container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  border-radius: 4px;
  cursor: pointer;
}

#icon:hover {
  font-weight: 800;
}
</style>

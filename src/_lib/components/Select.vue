<script setup>
defineProps({
  label: String,
})
</script>

<template>
  <v-select
    :label="label"
    :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
  ></v-select>
</template>

<style scoped></style>

<script setup>
import { onMounted } from 'vue'
import { useAuth } from './hooks/useAuth'

const { onMountedCallback } = useAuth()

onMounted(onMountedCallback)
</script>

<template>
  <RouterView />
</template>

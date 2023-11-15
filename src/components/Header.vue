<script setup>
import { router } from '../views/router'

// TODO: auth guard 처리

const navigateToLoginView = () => {
  router.push('/auth/login')
}
</script>

<template>
  <header>
    <div>
      <button class="button" @click="navigateToLoginView">로그인</button>
    </div>
  </header>
</template>

<style scoped>
header {
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  background-color: rgba(187, 185, 185, 0.4);

  display: flex;
  justify-content: flex-end;
}
</style>

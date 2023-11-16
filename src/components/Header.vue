<script setup>
import { router } from '../views/router'

// TODO: auth guard 처리

const navigateToLoginView = () => {
  router.push('/auth/login')
}
</script>

<template>
  <div id="header">
    <button id="loginButton" class="button" @click="navigateToLoginView">로그인</button>
  </div>
</template>

<style scoped>
#header {
  position: relative;
}

#loginButton {
  display: inline-block;
  width: inherit;
  position: absolute;
  top: 3px;
  right: 3px;
  z-index: 99;
  border: 3px solid #fafafa;
}
</style>

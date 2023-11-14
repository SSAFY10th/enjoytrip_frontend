<script setup>
import { router } from '../views/router'

// TODO: auth guard 처리

const navigateToLoginView = () => {
  router.push('/auth/login')
}

const navigateToRegisterView = () => {
  router.push('/auth/register')
}
</script>

<template>
  <header>
    <div id="container">
      <div id="auth">
        <button class="button" @click="navigateToLoginView">로그인</button>
        <button class="button" @click="navigateToRegisterView">회원가입</button>
      </div>
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
}

#container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

#auth {
  width: 200px;
  display: flex;
  gap: 10px;
}
</style>

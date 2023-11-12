<script setup>
import { router } from '../views/router'

// TODO: auth guard 처리

const navigateLoginView = () => {
  router.push('/auth/login')
}

const navigateRegisterView = () => {
  router.push('/auth/register')
}
</script>

<template>
  <header>
    <div id="header__inner">
      <div id="auth">
        <button @click="navigateLoginView">로그인</button>
        <button @click="navigateRegisterView">회원가입</button>
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

#header__inner {
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

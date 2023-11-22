<script setup>
import { useAuth } from '../hooks/useAuth'
import { router } from '../views/router'

const { isLoggedIn, currentUser, logout } = useAuth()

const navigateToLoginView = () => {
  router.push('/auth/login')
}
</script>

<template>
  <div id="header">
    <template v-if="!isLoggedIn">
      <button id="loginButton" class="button" @click="navigateToLoginView">로그인</button>
    </template>
    <template v-else>
      <div id="auth">
        <div>{{ currentUser.userNickname }}님</div>
        <button class="button" @click="logout">logout</button>
      </div>
    </template>
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

#auth {
  background-color: #fafafa;
  position: absolute;
  top: 3px;
  right: 3px;
  z-index: 99;
  padding: 10px;
  border-radius: 4px;
  font-weight: 800;
  font-size: 24px;
}
</style>

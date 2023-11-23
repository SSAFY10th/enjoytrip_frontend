<script setup>
import { ref } from 'vue'
import Icon from '../_lib/components/Icon.vue'
import { useAuth } from '../hooks/useAuth'
import { router } from '../views/router'
import * as AuthApi from '../apis/auth'

const { isLoggedIn, currentUser, logout, notifications, fetchNotifications } = useAuth()

const isShowNotification = ref(false)

const toggleNotification = () => {
  isShowNotification.value = !isShowNotification.value
}

const handleConfirmNotification = async (messageId) => {
  await AuthApi.confirmNotification(String(messageId))
  await fetchNotifications()
}

const navigateToLoginView = () => {
  router.push('/auth/login')
}

console.log(notifications.value)
</script>

<template>
  <div id="header">
    <template v-if="!isLoggedIn">
      <button id="loginButton" class="button" @click="navigateToLoginView">로그인</button>
    </template>
    <template v-else>
      <div id="auth">
        <div id="notificationContainer">
          <Icon size="md" name="notifications" @click="toggleNotification" />
          <div id="notification" v-show="notifications.length > 0">{{ notifications.length }}</div>
          <ul v-show="isShowNotification">
            <li
              style="font-size: 12px; display: flex; align-items: center"
              v-for="notification in notifications"
            >
              {{ notification.from_user_id }}님이 멘션했어요.
              <button
                class="notificationButton"
                v-show="notification.message_type === 1"
                @click="handleConfirmNotification(notification.message_id)"
              >
                확인
              </button>
            </li>
          </ul>
        </div>
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

#notificationContainer {
  position: relative;
}

#notification {
  position: absolute;
  top: -10px;
  right: 20px;
  font-size: 22px;
  font-weight: 800;
  color: tomato;
}

.notificationButton {
  padding: 1px 2px;
  border-radius: 4px;
  background-color: tomato;
  color: white;
}

.notificationButton:hover {
  font-weight: 800;
}
</style>

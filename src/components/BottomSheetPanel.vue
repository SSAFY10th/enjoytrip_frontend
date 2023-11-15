<script setup>
import Tabs from '../_lib/components/Tabs.vue'
import LocationSelect from './LocationSelect.vue'
import { router } from '../views/router'
import { tabs, useBottomSheet } from '../hooks/useBottomSheet'

const { selectedTab, handleClickTab } = useBottomSheet()

// TODO: auth guard 처리
const navigateToLoginView = () => {
  router.push('/auth/login')
}
const navigateToRegisterView = () => {
  router.push('/auth/register')
}
</script>

<template>
  <div id="container">
    <div id="tabs">
      <Tabs :options="tabs" :selectedOption="selectedTab" :onChange="handleClickTab" />
    </div>
    <div id="panel">
      <template v-if="selectedTab === 'tab1'">
        <LocationSelect />
      </template>
      <template v-else>
        <!-- <div id="loginGuidePanel">
          <div class="font-xlg" style="font-weight: 600">로그인이 필요한 서비스에요</div>
          <div id="loginGuideButtons">
            <button class="button" @click="navigateToRegisterView">회원가입</button>
            <button class="button" @click="navigateToLoginView">로그인</button>
          </div>
        </div> -->
        <div id="userPlanPanel">
          <RouterLink to="/plan/create" id="planCreateButton">
            + 새로운 여행계획 만들기
          </RouterLink>
          <ul id="userPlanList"></ul>
        </div>
      </template>
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

#loginGuidePanel {
  display: flex;
  height: 200px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

#loginGuideButtons {
  display: flex;
  width: 200px;
  gap: 10px;
}

#userPlanPanel {
  display: flex;
  flex-direction: column;
}

#planCreateButton {
  margin-top: 20px;
  align-self: flex-end;
  display: inline-block;
  padding: 4px 8px;
  font-weight: 800;
}
</style>

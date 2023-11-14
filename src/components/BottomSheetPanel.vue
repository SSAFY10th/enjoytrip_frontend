<script setup>
import { ref } from 'vue'
import Tabs from '../_lib/components/Tabs.vue'
import LocationSelect from './LocationSelect.vue'
import { router } from '../views/router'

const options = [
  {
    key: 'tab1',
    value: '관광지 탐색',
  },
  {
    key: 'tab2',
    value: '나의 여행계획',
  },
]
const selectedOption = ref('tab1')
const onChange = (key) => {
  selectedOption.value = key
}

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
      <Tabs :options="options" :selectedOption="selectedOption" :onChange="onChange" />
    </div>
    <div id="panel">
      <template v-if="selectedOption === 'tab1'">
        <LocationSelect />
      </template>
      <template v-else>
        <div id="loginGuide">
          <div class="font-xlg" style="font-weight: 600">로그인이 필요한 서비스에요</div>
          <div id="loginGuideButtons">
            <button class="button" @click="navigateToRegisterView">회원가입</button>
            <button class="button" @click="navigateToLoginView">로그인</button>
          </div>
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

#loginGuide {
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
</style>

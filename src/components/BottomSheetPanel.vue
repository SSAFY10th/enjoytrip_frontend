<script setup>
import Tabs from '../_lib/components/Tabs.vue'
import LocationSelect from './LocationSelect.vue'
import { router } from '../views/router'
import { tabs, useBottomSheet } from '../hooks/useBottomSheet'
import { useAuth } from '../hooks/useAuth'
import * as AuthApi from '../apis/auth'
import { formatDateFromISOString } from '../_lib/utils/date'

const { selectedTab, handleClickTab } = useBottomSheet()
const { isLoggedIn, planList, currentUser, logout, fetchPlanList } = useAuth()

const handleDeletePlanItem = async (planId) => {
  let token = null
  try {
    token = await AuthApi.delete1Plan({
      planId: Number(planId),
      userId: currentUser.value.userId,
    })
  } catch (e) {
    window.alert('세션이 만료되었어요. 다시 로그인해주세요.')
    await logout()
    window.location.href = '/'
    return
  }

  if (token === null) {
    window.alert('세션이 만료되었어요. 다시 로그인해주세요.')
    await logout()
    window.location.href = '/'
    return
  }

  const password2 = window.prompt('정말 삭제할까요? 비밀번호를 다시 입력해주세요')
  if (!password2) {
    return
  }

  try {
    await AuthApi.delete2Plan({
      planId,
      userPassword: password2,
      token,
    })
    await fetchPlanList()
  } catch (e) {
    window.alert('비밀번호가 틀렸어요. 다시 시도해주세요.')
  }
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
      <Tabs :options="tabs" :selectedOption="selectedTab" :onChange="handleClickTab" />
    </div>
    <div id="panel">
      <template v-if="selectedTab === 'tab1'">
        <LocationSelect />
      </template>
      <template v-else>
        <div v-if="!isLoggedIn" id="loginGuidePanel">
          <div class="font-xlg" style="font-weight: 600">로그인이 필요한 서비스에요</div>
          <div id="loginGuideButtons">
            <button class="button" @click="navigateToRegisterView">회원가입</button>
            <button class="button" @click="navigateToLoginView">로그인</button>
          </div>
        </div>
        <div v-else id="userPlanPanel">
          <RouterLink to="/plan/create/date" id="planCreateButton">
            + 새로운 여행계획 만들기
          </RouterLink>
          <ul id="userPlanList">
            <li v-for="planItem in planList" :key="planItem.plan_id">
              <div>
                {{ planItem.title }} |
                {{
                  planItem.plan_date
                    .split('~')
                    .map((ISOString) =>
                      Object.values(formatDateFromISOString(ISOString)).join('. '),
                    )
                    .join('~')
                }}
                | 조회수 : {{ planItem.hit }}
                <button class="button" @click="handleDeletePlanItem(planItem.plan_id)">삭제</button>
              </div>
            </li>
          </ul>
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

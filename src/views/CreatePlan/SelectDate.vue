<script setup>
import Datepicker from '@vuepic/vue-datepicker'

import { router } from '../router'
import { useCreatePlan } from '../../hooks/useCreatePlan'

const { selectedStartDate, selectedEndDate, goSelectPlaceView } = useCreatePlan()

const handleClickPlanCreateButton = () => {
  if (goSelectPlaceView()) {
    router.push('/plan/create/place')
  }
}
</script>

<template>
  <main>
    <RouterLink to="/">홈으로</RouterLink>
    <h1>새로운 여행을 추가해볼까요?</h1>
    <h2>여행 기간을 선택해주세요.</h2>
    <div style="display: flex; gap: 10px">
      <div>
        <label>시작</label>
        <Datepicker v-model="selectedStartDate" />
      </div>
      <div>
        <label>종료</label>
        <Datepicker v-model="selectedEndDate" />
      </div>
    </div>
    <button class="button" @click="handleClickPlanCreateButton">새로운 여행 생성하기</button>
  </main>
</template>

<style scoped></style>

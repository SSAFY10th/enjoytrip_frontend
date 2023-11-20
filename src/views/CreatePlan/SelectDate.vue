<script setup>
import Datepicker from '@vuepic/vue-datepicker'

import { router } from '../router'
import { useCreatePlan } from '../../hooks/useCreatePlan'

const { selectedStartDate, selectedEndDate } = useCreatePlan()

const handleClickPlanCreateButton = () => {
  // 시작, 종료 날짜를 선택하지 않았다면 이동불가
  // 시작일이 종료일보다 빠르지 않다면 이동불가

  if (!selectedStartDate.value || !selectedEndDate.value) {
    window.alert('여행 기간을 선택해주세요')
    return
  }

  if (selectedEndDate.value.getTime() - selectedStartDate.value.getTime() <= 0) {
    window.alert('여행 종료일은 여행 시작일보다 빠를 수 없어요.')
    return
  }

  router.push('/plan/create/place')
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

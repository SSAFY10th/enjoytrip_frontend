import { inject, ref } from 'vue'

const selectedStartDate = ref(null)
const selectedEndDate = ref(null)
const isFinishedSelectMapList = ref(false)
const selectedMapList = ref([])

const goSelectPlaceView = () => {
  // 시작, 종료 날짜를 선택하지 않았다면 이동불가
  // 시작일이 종료일보다 빠르지 않다면 이동불가

  if (!selectedStartDate.value || !selectedEndDate.value) {
    window.alert('여행 기간을 선택해주세요')
    return false
  }

  if (selectedEndDate.value.getTime() - selectedStartDate.value.getTime() <= 0) {
    window.alert('여행 종료일은 여행 시작일보다 빠를 수 없어요.')
    return false
  }

  console.log(selectedStartDate.value, selectedEndDate.value)
  return true
}

export const useCreatePlanProvider = [
  'useCreatePlan',
  {
    selectedStartDate,
    selectedEndDate,
    isFinishedSelectMapList,
    selectedMapList,
    goSelectPlaceView,
  },
]

export const useCreatePlan = () => inject('useCreatePlan')

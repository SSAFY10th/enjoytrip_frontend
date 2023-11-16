import { ref, inject } from 'vue'

const isShowBottomSheet = ref(false)
const handleOpenBottomSheet = (e) => {
  e.stopPropagation()
  isShowBottomSheet.value = true
}
const handleCloseBottomSheet = (e) => {
  e.stopPropagation()
  isShowBottomSheet.value = false
}
const handleToggleBottomSheet = (e) => {
  e.stopPropagation()
  isShowBottomSheet.value = !isShowBottomSheet.value
}

export const tabs = [
  {
    key: 'tab1',
    value: '관광지 탐색',
  },
  {
    key: 'tab2',
    value: '나의 여행계획',
  },
]
const selectedTab = ref('tab1')
const handleClickTab = (key) => {
  selectedTab.value = key
}

export const useBottomSheetProvider = [
  'useBottomSheet',
  {
    isShowBottomSheet,
    handleOpenBottomSheet,
    handleCloseBottomSheet,
    handleToggleBottomSheet,
    selectedTab,
    handleClickTab,
  },
]

export const useBottomSheet = () => inject('useBottomSheet')

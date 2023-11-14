import { ref, inject } from 'vue'

const isShowBottomSheet = ref(false)

const openBottomSheet = (e) => {
  e.stopPropagation()
  isShowBottomSheet.value = true
}

const closeBottomSheet = (e) => {
  e.stopPropagation()
  isShowBottomSheet.value = false
}

const toggleBottomSheet = (e) => {
  e.stopPropagation()
  isShowBottomSheet.value = !isShowBottomSheet.value
}

export const provider = [
  'useBottomSheet',
  {
    isShowBottomSheet,
    openBottomSheet,
    closeBottomSheet,
    toggleBottomSheet,
  },
]

export const useBottomSheet = () => inject('useBottomSheet')

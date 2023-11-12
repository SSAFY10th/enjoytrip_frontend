import { ref, inject } from 'vue'

export const options = [
  {
    key: 'option1',
    value: '관광지 탐색',
  },
  {
    key: 'option2',
    value: '나의 여행계획',
  },
]

const selectedOption = ref('option1')

const onChange = (key) => {
  selectedOption.value = key
}

export const provider = [
  'useSelectBottomSheet',
  {
    selectedOption,
    onChange,
  },
]

export const useSelectBottomSheet = () => inject('useSelectBottomSheet')

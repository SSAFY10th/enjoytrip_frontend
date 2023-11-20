import { inject, ref } from 'vue'

const selectedStartDate = ref(null)
const selectedEndDate = ref(null)
const selectedPlaceList = ref([]) // contentid의 배열

const clear = () => {
  selectedStartDate.value = null
  selectedEndDate.value = null
  selectedPlaceList.value = []
}

const selectPlace = (place) => {
  selectedPlaceList.value.push(place)
}

const deletePlace = (contentid) => {
  selectedPlaceList.value = selectedPlaceList.value.filter((place) => place.contentid !== contentid)
}

export const useCreatePlanProvider = [
  'useCreatePlan',
  {
    selectedStartDate,
    selectedEndDate,
    selectedPlaceList,
    clear,
    selectPlace,
    deletePlace,
  },
]

export const useCreatePlan = () => inject('useCreatePlan')

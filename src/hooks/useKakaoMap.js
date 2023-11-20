import { ref, inject, watch } from 'vue'
import { initializeMap, displayMarker } from '../_lib/kakaoMap'
import { gugunObject } from '../_lib/data/gugun'

let mapContainer = null
let map = null
let clusterer = null
let mapTypeControl = null
let zoomControl = null
let markerClickHandler = null

const coordinate = ref({
  latitude: 33.450701,
  longitude: 126.570667,
})

const onMountedCallback = (mapContainerId, options) => {
  const {
    mapContainer: initializedMapContainer,
    map: initializedMap,
    clusterer: initializedClusterer,
    mapTypeControl: initializedMapTypeControl,
    zoomControl: initializedZoomControl,
  } = initializeMap({
    mapContainerId,
    latitude: coordinate.value.latitude,
    longitude: coordinate.value.longitude,
  })

  mapContainer = initializedMapContainer
  map = initializedMap
  clusterer = initializedClusterer
  mapTypeControl = initializedMapTypeControl
  zoomControl = initializedZoomControl

  if (options?.markerClickHandler) {
    markerClickHandler = options.markerClickHandler
  }
}

const selectedSidoCode = ref('') // 서울이 default
const selectedGugunCode = ref('')
const gugunList = ref([])
const handleSelectSidoOption = (sidoCode) => {
  selectedSidoCode.value = sidoCode
  selectedGugunCode.value = ''
  gugunList.value = gugunObject[sidoCode]
}
const handleSelectGugunOption = (gugunCode) => {
  selectedGugunCode.value = gugunCode
}

const inputKeyword = ref('')
const handleSearchByKeyword = (e) => {
  e.preventDefault()
  displayMarker({
    sidoCode: selectedSidoCode.value,
    gugunCode: selectedGugunCode.value,
    keyword: inputKeyword.value,
    map,
    clusterer,
    markerClickHandler,
  })
}

watch(selectedSidoCode, (currentSidoCode, prevSidoCode) => {
  displayMarker({
    sidoCode: currentSidoCode,
    gugunCode: selectedGugunCode.value,
    keyword: '',
    map,
    clusterer,
    markerClickHandler,
  })
})

watch(selectedGugunCode, (currentGugunCode, prevGugunCode) => {
  displayMarker({
    sidoCode: selectedSidoCode.value,
    gugunCode: currentGugunCode,
    keyword: '',
    map,
    clusterer,
    markerClickHandler,
  })
})

export const useKakaoMapProvider = [
  'useKakaoMap',
  {
    onMountedCallback,
    coordinate,
    selectedSidoCode,
    selectedGugunCode,
    gugunList,
    handleSelectSidoOption,
    handleSelectGugunOption,
    inputKeyword,
    handleSearchByKeyword,
  },
]

export const useKakaoMap = () => inject('useKakaoMap')

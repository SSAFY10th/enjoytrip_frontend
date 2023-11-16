import { ref, onMounted, inject } from 'vue'
import { initializeMap } from '../_lib/kakaoMap'

let mapContainer = null
let map = null
let clusterer = null
let mapTypeControl = null
let zoomControl = null

const coordinate = ref({
  latitude: 33.450701,
  longitude: 126.570667,
})

const onMountedCallback = () => {
  console.log('map mounted!')
  mapContainer = initializeMap(coordinate.value.latitude, coordinate.value.longitude)
}

export const useKakaoMapProvider = [
  'useKakaoMap',
  {
    onMountedCallback,
  },
]

export const useKakaoMap = () => inject('useKakaoMap')

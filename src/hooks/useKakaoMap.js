import { ref, onMounted, inject, computed } from 'vue'
import { fetchGetSido } from '../apis/location'

const sidos = ref([])
const selectedSido = ref('')

const gugun = ref([])
const selectedGugun = ref('')

const fetchSidos = async () => {
  sidos.value = await fetchGetSido()
}

const selectSido = (sido) => {
  selectedSido.value = sido
  console.log(selectedSido.value)
}

export const initializeMap = (latitude, longitude) => {
  const container = document.getElementById('map') //지도를 담을 영역의 DOM 레퍼런스
  const options = {
    //지도를 생성할 때 필요한 기본 옵션
    center: new window.kakao.maps.LatLng(latitude, longitude), //지도의 중심좌표.
    level: 3, //지도의 레벨(확대, 축소 정도)
  }

  return new window.kakao.maps.Map(container, options) //지도 생성 및 객체 리턴
}

export const provider = ['useKakaoMap', { sidos, fetchSidos, selectedSido, selectSido }]

export const useKakaoMap = () => inject('useKakaoMap')

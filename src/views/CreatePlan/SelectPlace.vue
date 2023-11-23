<script setup>
// TODO: 이 페이지는 URL을 통해 직접 접근할 수 없는 페이지이다. 반드시 SelectDate 페이지에서 날짜를 선택완료한 뒤 접근해야한다.

import { onMounted } from 'vue'

import { router } from '../router'
import { NO_IMAGE_SRC } from '../../_lib/kakaoMap'
import { useKakaoMap } from '../../hooks/useKakaoMap'
import LocationSelect from '../../components/LocationSelect.vue'
import LocationSearchBar from '../../components/LocationSearchBar.vue'
import { useCreatePlan } from '../../hooks/useCreatePlan'

const { onMountedCallback } = useKakaoMap()
const { selectedPlaceList, selectPlace, deletePlace, clearPlaceList } = useCreatePlan()

const markerClickHandler = (marker) => {
  const { information } = marker
  selectPlace(information)
}

onMounted(() =>
  onMountedCallback('selectPlaceMap', {
    markerClickHandler,
  }),
)

const navigateToPrev = () => {
  router.replace('/plan/create/date')
}

const navigateToHome = () => {
  router.replace('/')
}

const navigateToNext = () => {
  router.push('/plan/create/content')
}
</script>

<template>
  <div style="display: flex">
    <button class="button" @click="navigateToPrev">뒤로가기</button>
    <button class="button" @click="navigateToHome">홈으로</button>
  </div>
  <h1>여행 지역을 선택해주세요</h1>
  <div id="container">
    <div id="selectPlaceMap"></div>
  </div>
  <LocationSelect />
  <LocationSearchBar />
  <ul>
    <li
      style="display: flex; justify-content: center; align-items: center"
      v-for="(place, index) in selectedPlaceList"
      :key="place.contentid"
    >
      <img :src="place.firstimage ?? place.firstimage2 ?? NO_IMAGE_SRC" width="70" height="70" />
      <div style="flex: 1">
        <div>{{ index + 1 }}</div>
        <div>{{ place.title }}</div>
        <div>{{ place.zipcode }} | {{ place.addr1 ?? place.addr2 ?? '주소 정보 없음' }}</div>
        <div>{{ place.tel }}</div>
      </div>
      <button class="button" style="flex: 0" @click="deletePlace(place.contentid)">삭제</button>
    </li>
  </ul>
  <button class="button" @click="navigateToNext">선택 완료</button>
</template>

<style scoped>
#container {
  width: 100%;
}

#selectPlaceMap {
  width: 100%;
  height: 300px;
}
</style>

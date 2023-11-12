<script setup>
import SwitchRadio from '../_lib/components/SwitchRadio.vue'

import Header from '../components/Header.vue'
import KakaoMap from '../components/KakaoMap.vue'
import BottomSheet from '../components/BottomSheet.vue'

import { useSelectBottomSheet, options } from '../hooks/useSelectBottomSheet'

const { selectedOption, onChange } = useSelectBottomSheet()
</script>

<template>
  <Header />
  <main>
    <KakaoMap />
    <BottomSheet>
      <section id="bottomSheetContent">
        <form id="bottomSheetContent__searchForm">
          <input type="search" placeholder="여행지를 찾아보세요!" />
          <button id="bottomSheetContent__searchButton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              stroke="#19CE60"
              viewBox="0 0 512 512"
            >
              <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
              />
            </svg>
          </button>
        </form>
        <div id="bottomSheetContent__selectContainer">
          <div id="bottomSheetContent__selectContainer__header">
            <SwitchRadio :options="options" :selectedOption="selectedOption" :onChange="onChange" />
          </div>
          <div>
            <div v-if="selectedOption === 'option1'">select</div>
            <div v-else>로그인해라</div>
          </div>
        </div>
      </section>
    </BottomSheet>
  </main>
</template>

<style scoped>
#bottomSheetContent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
}

#bottomSheetContent__searchForm {
  display: flex;
  width: 100%;
  gap: 2px;
}

#bottomSheetContent__searchForm input {
  flex: 1;
}

#bottomSheetContent__searchForm button {
  width: 80px;
  font-size: 20px;
}

#bottomSheetContent__selectContainer {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

#bottomSheetContent__selectContainer__header {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

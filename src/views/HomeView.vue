<script setup>
// design-system
import Switch from '../_lib/components/Switch.vue'
import Select from '../_lib/components/Select.vue'
// components
import Header from '../components/Header.vue'
import KakaoMap from '../components/KakaoMap.vue'
import BottomSheet from '../components/BottomSheet.vue'
// hooks
import { useSelectBottomSheet, options } from '../hooks/useSelectBottomSheet'
import { useKakaoMap } from '../hooks/useKakaoMap'

const { selectedOption, onChange } = useSelectBottomSheet()
const { sidos, selectSido } = useKakaoMap()

const label = '시/도'
</script>

<template>
  <Header />
  <main>
    <KakaoMap />
    <BottomSheet>
      <section id="bottomSheetContent">
        <form id="bottomSheetContent__searchForm">
          <input class="input" type="search" placeholder="여행지를 찾아보세요!" />
          <button class="button" id="bottomSheetContent__searchButton">
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
            <Switch :options="options" :selectedOption="selectedOption" :onChange="onChange" />
          </div>
          <div id="bottomSheetContent__selectContainer__contents">
            <template v-if="selectedOption === 'option1'">
              <Select :label="label" />
              <!-- <div id="asideMain">
                <h2>관광지 탐색</h2>
                <div class="AreaSelect">
                  <div class="Select">
                    <select id="sido">
                      <option value="">시도선택</option>
                    </select>
                  </div>
                  <div class="Select">
                    <select id="gugun">
                      <option value="">구군선택</option>
                    </select>
                  </div>
                </div>
                <div class="SearchFilter">
                  <div class="SearchFilterRow">
                    <button value="12" class="filterIcon">
                      <div class="FilterIcon">
                        <i class="fas fa-suitcase" style="color: #fe8c52"></i>
                      </div>
                      <span>관광지</span>
                    </button>
                    <button value="32" class="filterIcon">
                      <div class="FilterIcon">
                        <i class="fas fa-hotel" style="color: #fe8c52"></i>
                      </div>
                      <span> 숙박 </span>
                    </button>
                    <button value="39" class="filterIcon">
                      <div class="FilterIcon">
                        <i class="fas fa-utensils" style="color: #d971db"></i>
                      </div>
                      <span> 음식점 </span>
                    </button>
                    <button value="14" class="filterIcon">
                      <div class="FilterIcon">
                        <i class="fas fa-ticket-alt" style="color: #5e9bf3"></i>
                      </div>
                      <span> 문화시설 </span>
                    </button>
                  </div>
                  <div class="SearchFilterRow">
                    <button value="15" class="filterIcon">
                      <div class="FilterIcon">
                        <i class="fas fa-ticket-alt" style="color: #03c75a"></i>
                      </div>
                      <span> 공연 </span>
                    </button>
                    <button value="25" class="filterIcon">
                      <div class="FilterIcon">
                        <i class="fas fa-map-signs" style="color: #ffb21f"></i>
                      </div>
                      <span>여행코스</span>
                    </button>
                    <button value="38" class="filterIcon">
                      <div class="FilterIcon">
                        <i class="fas fa-shopping-bag" style="color: #ffb21f"></i>
                      </div>
                      <span>쇼핑</span>
                    </button>
                  </div>
                </div>
              </div> -->
            </template>
            <template v-else>로그인해라</template>
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

#bottomSheetContent__selectContainer__contents {
  width: 100%;
}
</style>

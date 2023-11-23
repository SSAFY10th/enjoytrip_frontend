<script setup>
// TODO: 이 페이지는 URL을 통해 직접 접근할 수 없는 페이지이다. 반드시 SelectPlace 페이지에서 장소를 선택완료한 뒤 접근해야한다.
import { ref, watch } from 'vue'
import { useCreatePlan } from '../../hooks/useCreatePlan'
import { router } from '../router'
import * as AuthApi from '../../apis/auth'
import { debounce } from '../../_lib/utils/debounce'
import { useAuth } from '../../hooks/useAuth'

const { selectedPlaceList, selectedStartDate, selectedEndDate, clear } = useCreatePlan()
const { fetchPlanList } = useAuth()

const selectedFriendList = ref([])
const fetchedFriendList = ref([])
const title = ref('')
const content = ref('')
const friendSearchInput = ref('')

const toggleFriend = (friend) => {
  const isExisting = selectedFriendList.value.find(
    (selectedFriend) => selectedFriend.user_id === friend.user_id,
  )
  if (isExisting) {
    selectedFriendList.value = selectedFriendList.value.filter(
      (selectedFriend) => selectedFriend.user_id !== friend.user_id,
    )
    return
  }
  selectedFriendList.value.push(friend)
}

const handleSubmit = async (e) => {
  e.preventDefault()

  if (!title.value || !content.value) {
    window.alert('제목과 내용을 입력해주세요')
    return
  }

  try {
    await AuthApi.createPlan({
      title: title.value,
      planDate: `${selectedStartDate.value.toISOString()}~${selectedEndDate.value.toISOString()}`,
      mentionedUserIdList: selectedFriendList.value.map((friend) => friend.user_id),
      placeIdList: selectedPlaceList.value.map((place) => place.contentid),
    })
    window.alert('새로운 계획을 만들었어요!')
    clear()
    await fetchPlanList()
    router.push('/')
  } catch (e) {
    window.alert('다시 시도해주세요.')
  }
}

const navigateToPrev = () => {
  router.replace('/plan/create/place')
}

const navigateToHome = () => {
  clear()
  router.replace('/')
}

watch(
  friendSearchInput,
  debounce(async () => {
    if (!friendSearchInput.value) {
      fetchedFriendList.value = []
      return
    }
    const users = await AuthApi.searchUser(friendSearchInput.value)
    fetchedFriendList.value = users
  }, 100),
)
</script>

<template>
  <button class="button" @click="navigateToPrev">뒤로가기</button>
  <button class="button" @click="navigateToHome">홈으로</button>
  <h1>여행 계획</h1>
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
    </li>
  </ul>
  <div @submit.prevent="handleSubmit" style="display: flex; flex-direction: column; gap: 10px">
    <input class="input" style="font-size: 24px" placeholder="제목" v-model="title" />
    <input class="input" style="height: 300px" placeholder="내용" v-model="content" />
    <div>
      <label>멘션(함께할 친구)</label>
      <ul style="display: flex">
        <li
          v-for="friend in selectedFriendList"
          :key="friend.user_id"
          @click="toggleFriend(friend.user_id)"
          style="background-color: red; padding: 5px; border-radius: 4px"
        >
          {{ friend.user_nickname }}
        </li>
      </ul>
      <ul style="display: flex; flex-direction: column; gap: 10px">
        <input class="input" placeholder="친구를 찾아봐용" v-model="friendSearchInput" />
        <li
          v-for="fetchedFriend in fetchedFriendList"
          :key="fetchedFriend.user_id"
          @click="toggleFriend(fetchedFriend)"
          style="
            display: flex;
            align-items: center;
            border: 1px solid green;
            padding: 10px;
            cursor: pointer;
          "
        >
          <div style="font-size: 18px">{{ fetchedFriend.user_nickname }}</div>
          <div style="font-size: 14px; color: gray">
            {{ fetchedFriend.user_name }} ({{ fetchedFriend.user_id }})
          </div>
        </li>
      </ul>
    </div>
    <button class="button" @click="handleSubmit">생성하기</button>
  </div>
</template>

<style scoped></style>

<script setup>
// TODO: 이 페이지는 URL을 통해 직접 접근할 수 없는 페이지이다. 반드시 SelectPlace 페이지에서 장소를 선택완료한 뒤 접근해야한다.
import { ref } from 'vue'
import { useCreatePlan } from '../../hooks/useCreatePlan'

const { selectedPlaceList } = useCreatePlan()

/*
type FriendList = {
  id: number ? string ?
  name: string
}
*/
const selectedFriendList = ref([])
const fetchedFriendList = ref([])

const title = ref('')
const content = ref('')

const isShowFriendSearchModal = ref(false)
const toggleFriendSearchModal = () => {
  isShowFriendSearchModal.value = !isShowFriendSearchModal.value
}

const friendSearchInput = ref('')
const handleSearchFriend = (e) => {
  friendSearchInput.value = e.target.value
  // 여기서 디바운스 Fetch
  console.log(friendSearchInput.value)
}

const selectFriend = (friend) => {
  selectedFriendList.value.push(friend)
}

const handleSubmit = (e) => {
  e.preventDefault()

  if (!title.value || !content.value) {
    window.alert('제목과 내용을 입력해주세요')
    return
  }

  console.log(title.value, content.value, selectedFriendList.value)
}

const navigateToPrev = () => {
  router.replace('/plan/create/place')
}

const navigateToHome = () => {
  router.replace('/')
}
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
  <div @submit.prevent="handleSubmit" style="display: flex; flex-direction: column">
    <input placeholder="제목" v-model="title" />
    <input placeholder="내용" v-model="content" />
    <div>
      <label>멘션(함께할 친구)</label>
      <ul>
        <li v-for="friend in selectedFriendList" :key="friend.id">
          {{ friend.name }}
        </li>
      </ul>
      <button class="button" @click="toggleFriendSearchModal">친구 찾기</button>
      <ul v-show="isShowFriendSearchModal">
        <input class="input" placeholder="친구를 찾아봐용" @input="handleSearchFriend" />
        <li
          v-for="fetchedFriend in fetchedFriendList"
          :key="fetchedFriend.id"
          @click="selectFriend(fetchedFriend)"
        >
          {{ fetchedFriend.name }}
        </li>
      </ul>
    </div>
    <button class="button" @click="handleSubmit">생성하기</button>
  </div>
</template>

<style scoped></style>

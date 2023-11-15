<script setup>
import { ref, computed } from 'vue'
import * as RegisterValidation from '../_lib/constants/registerPolicy'
import Icon from '../_lib/components/Icon.vue'
import Layout from './Layout.vue'
import { router } from './router'

const values = ref({
  userId: '',
  password: '',
})

const isValidateForm = computed(() => {
  return (
    Object.values(values.value).every((value) => !!value) &&
    RegisterValidation.validateUserId(values.value.userId) &&
    RegisterValidation.validatePassword(values.value.password)
  )
})

const handleSubmit = () => {
  if (!isValidateForm.value) {
    return
  }

  // TODO: API call

  console.log(values.value)
}

const navigateToBack = () => {
  router.back()
}
</script>

<template>
  <Layout>
    <header id="formHeader">
      <div>
        <Icon class="color-green-hard" name="arrowBack" size="xlg" @click="navigateToBack" />
      </div>
      <h1>EnjoyTrip 로그인</h1>
    </header>
    <form @submit.prevent="handleSubmit">
      <div class="input-group">
        <label for="userId">ID</label>
        <input
          style="flex: 5"
          class="input"
          type="text"
          id="userId"
          name="userId"
          required
          v-model="values.userId"
          placeholder="아이디를 입력해주세요"
        />
      </div>

      <div class="input-group">
        <label for="password">비밀번호</label>
        <input
          class="input"
          type="password"
          id="password"
          name="password"
          required
          v-model="values.password"
          @change="handleChangePassword"
          placeholder="비밀번호를 입력해주세요"
        />
      </div>

      <button
        type="submit"
        class="button"
        style="color: white; margin-top: 50px"
        :disabled="!isValidateForm"
      >
        로그인
      </button>
    </form>
  </Layout>
</template>

<style scoped>
#formHeader {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
}

#formHeader > div {
  align-self: flex-start;
}

h1 {
  text-align: center;
  font-weight: 800;
}

#icon {
  font-size: 40px;
}

.input-group {
  margin: 10px 0;
  display: flex;
  flex-direction: column;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 800;
  font-size: 20px;
}

.error {
  margin-top: 5px;
  color: tomato;
  font-weight: 800;
  font-size: 12px;
}
</style>
../_lib/constants/registerPolicy

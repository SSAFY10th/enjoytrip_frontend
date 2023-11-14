<script setup>
import { ref, computed, watch } from 'vue'
import Icon from '../_lib/components/Icon.vue'
import Layout from './Layout.vue'
import { router } from './router'

// username은 길이가 5이상이어야 한다.
const validateUsername = (username) => {
  return username.length >= 5
}

// 이메일 형식 검증
const emailRegex = new RegExp(
  "([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])",
)
const validateEmail = (email) => {
  return emailRegex.test(email)
}

// 비밀번호는 길이가 8이상이어야 한다.
const validatePassword = (password) => {
  return password.length >= 8
}

const onBlurBuilder = (ref) => () => {
  ref.value = true
}

const usernameInputValue = ref('')
const emailInputValue = ref('')
const passwordInputValue = ref('')
const passwordConfirmInputValue = ref('')

const isTouchedUsername = ref(false)
const onBlurUsername = onBlurBuilder(isTouchedUsername)

const isTouchedEmail = ref(false)
const onBlurEmail = onBlurBuilder(isTouchedEmail)

const isTouchedPassword = ref(false)
const onBlurPassword = onBlurBuilder(isTouchedPassword)

const isTouchedPasswordConfirm = ref(false)
const onBlurPasswordConfirm = onBlurBuilder(isTouchedPasswordConfirm)

const isUsernameError = computed(() => {
  return isTouchedUsername.value && !validateUsername(usernameInputValue.value)
})

const isEmailError = computed(() => {
  return isTouchedEmail.value && !validateEmail(emailInputValue.value)
})

const isPasswordError = computed(() => {
  return isTouchedPassword.value && !validatePassword(passwordInputValue.value)
})

const isPasswordConfirmError = computed(() => {
  return (
    isTouchedPasswordConfirm.value && passwordConfirmInputValue.value !== passwordInputValue.value
  )
})

const isValidateForm = computed(() => {
  return (
    !isUsernameError.value &&
    !isEmailError.value &&
    !isPasswordError.value &&
    !isPasswordConfirmError.value
  )
})

const onSubmit = () => {
  if (!isValidateForm.value) {
    window.alert('제대로 입력해라')
    return
  }
  window.alert(
    ` username : ${usernameInputValue.value} \n email : ${emailInputValue.value} \n password : ${passwordInputValue.value} \n passwordConfirm : ${passwordConfirmInputValue.value}`,
  )
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
      <h1>EnjoyTrip 회원가입</h1>
    </header>
    <form @submit.prevent="onSubmit">
      <div class="input-group">
        <label for="username">사용자 이름</label>
        <input
          class="input"
          type="text"
          id="username"
          name="username"
          required
          v-model="usernameInputValue"
          @blur="onBlurUsername"
        />
        <div v-show="isUsernameError" class="error">사용자 이름의 길이는 5이상이어야 해요</div>
      </div>

      <div class="input-group">
        <label for="password">비밀번호</label>
        <input
          class="input"
          type="password"
          id="password"
          name="password"
          required
          v-model="passwordInputValue"
        />
      </div>

      <button type="submit" class="button" style="color: white; margin-top: 50px">로그인</button>
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
</style>

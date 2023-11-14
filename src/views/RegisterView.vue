<script setup>
import { ref, computed } from 'vue'
import * as RegisterValidation from '../_lib/constants/registerValidation'
import Icon from '../_lib/components/Icon.vue'
import Layout from './Layout.vue'
import { router } from './router'

const onBlurBuilder = (ref) => () => {
  ref.value = true
}

const userIdInputValue = ref('')
const emailInputValue = ref('')
const passwordInputValue = ref('')
const passwordConfirmInputValue = ref('')

const isTouchedUserId = ref(false)
const onBlurUserId = onBlurBuilder(isTouchedUserId)

const isTouchedEmail = ref(false)
const onBlurEmail = onBlurBuilder(isTouchedEmail)

const isTouchedPassword = ref(false)
const onBlurPassword = onBlurBuilder(isTouchedPassword)

const isTouchedPasswordConfirm = ref(false)
const onBlurPasswordConfirm = onBlurBuilder(isTouchedPasswordConfirm)

const isUserIdError = computed(() => {
  return isTouchedUserId.value && !RegisterValidation.validateUserId(userIdInputValue.value)
})

const isEmailError = computed(() => {
  return isTouchedEmail.value && !RegisterValidation.validateEmail(emailInputValue.value)
})

const isPasswordError = computed(() => {
  return isTouchedPassword.value && !RegisterValidation.validatePassword(passwordInputValue.value)
})

const isPasswordConfirmError = computed(() => {
  return (
    isTouchedPasswordConfirm.value && passwordConfirmInputValue.value !== passwordInputValue.value
  )
})

const isValidateForm = computed(() => {
  return (
    isTouchedUserId.value &&
    isTouchedEmail.value &&
    isTouchedPassword.value &&
    isTouchedPasswordConfirm.value &&
    !isUserIdError.value &&
    !isEmailError.value &&
    !isPasswordError.value &&
    !isPasswordConfirmError.value
  )
})

const onSubmit = () => {
  if (!isValidateForm.value) {
    window.alert('회원가입 정책을 지켜주세요.')
    return
  }
  window.alert(
    `email : ${emailInputValue.value} \n password : ${passwordInputValue.value} \n passwordConfirm : ${passwordConfirmInputValue.value}`,
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
        <label for="userId">ID</label>
        <input
          class="input"
          type="text"
          id="userId"
          name="userId"
          required
          v-model="userIdInputValue"
          @blur="onBlurUserId"
          placeholder="로그인에 사용될 아이디를 입력해주세요"
        />
        <div v-show="isUserIdError" class="error">
          {{ RegisterValidation.invalidUserIdMessage }}
        </div>
      </div>

      <div class="input-group">
        <label for="email">이메일</label>
        <input
          class="input"
          type="email"
          id="email"
          name="email"
          required
          v-model="emailInputValue"
          @blur="onBlurEmail"
          placeholder="이메일을 입력해주세요"
        />
        <div v-show="isEmailError" class="error">{{ RegisterValidation.invalidEmailMessage }}</div>
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
          @blur="onBlurPassword"
          placeholder="비밀번호를 입력해주세요"
        />
        <div v-show="isPasswordError" class="error">
          {{ RegisterValidation.invalidPasswordMessage }}
        </div>
      </div>

      <div class="input-group">
        <label for="password">비밀번호 확인</label>
        <input
          class="input"
          type="password"
          id="passwordConfirm"
          name="passwordConfirm"
          required
          v-model="passwordConfirmInputValue"
          @blur="onBlurPasswordConfirm"
          placeholder="비밀번호를 한번 더 입력해주세요"
        />
        <div v-show="isPasswordConfirmError" class="error">비밀번호를 한번 더 입력해주세요</div>
      </div>
      <button
        type="submit"
        class="button"
        style="color: white; margin-top: 50px"
        :disabled="!isValidateForm"
      >
        가입하기
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
  font-size: 16px;
}
</style>

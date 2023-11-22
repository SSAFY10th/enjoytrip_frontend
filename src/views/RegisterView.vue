<script setup>
import { ref, computed } from 'vue'
import * as RegisterValidation from '../_lib/constants/registerPolicy'
import Icon from '../_lib/components/Icon.vue'
import Layout from './Layout.vue'
import { router } from './router'
import * as AuthApi from '../apis/auth'

const isDuplicated = ref('idle') // idle, impossible, possible

const values = ref({
  userId: '',
  email: '',
  password: '',
  passwordConfirm: '',
})

const isTouched = ref({
  userId: false,
  email: false,
  password: false,
  passwordConfirm: false,
})

const isError = {
  userId: computed(() => {
    return isTouched.value.userId && !RegisterValidation.validateUserId(values.value.userId)
  }),
  email: computed(() => {
    return isTouched.value.email && !RegisterValidation.validateEmail(values.value.email)
  }),
  password: computed(() => {
    return isTouched.value.password && !RegisterValidation.validatePassword(values.value.password)
  }),
  passwordConfirm: computed(() => {
    return isTouched.value.passwordConfirm && values.value.passwordConfirm !== values.value.password
  }),
}

const handleChangeUserId = (e) => {
  values.value.userId = e.target.value
  isTouched.value.userId = true
  isDuplicated.value = 'idle'
}
const handleChangeEmail = (e) => {
  values.value.email = e.target.value
  isTouched.value.email = true
}
const handleChangePassword = (e) => {
  values.value.password = e.target.value
  isTouched.value.password = true
}
const handleChangePasswordConfirm = (e) => {
  values.value.passwordConfirm = e.target.value
  isTouched.value.passwordConfirm = true
}

const isValidateForm = computed(() => {
  return (
    Object.values(isTouched.value).every((value) => !!value) &&
    Object.values(isError).every((ref) => !ref.value)
  )
})

const handleCheckUserId = async () => {
  if (!RegisterValidation.validateUserId(values.value.userId)) {
    window.alert(RegisterValidation.invalidUserIdMessage)
    return
  }

  const isPossible = await AuthApi.checkId(values.value.userId)
  isPossible ? (isDuplicated.value = 'possible') : (isDuplicated.value = 'impossible')
}

const handleSubmit = async () => {
  if (!isValidateForm.value) {
    window.alert('회원가입 정책을 지켜주세요.')
    return
  }

  if (isDuplicated.value === 'idle') {
    window.alert('아이디 중복검사를 해주세요')
    return
  }

  if (isDuplicated.value === 'impossible') {
    window.alert('다른 아이디를 사용해주세요')
    return
  }

  try {
    await AuthApi.join({
      userId: values.value.userId,
      userName: values.value.userId,
      userNickname: values.value.userId,
      userEmail: values.value.email,
      userPassword: values.value.password,
    })
    window.alert(
      `아이디 ${values.value.userId}로 회원가입이 성공했어요. 로그인 페이지로 이동할게요.`,
    )
    router.push('/auth/login')
  } catch (e) {
    window.alert('다시 시도해주세요.')
  }
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
    <div>
      <div class="input-group">
        <label for="userId">ID</label>
        <div style="display: flex">
          <input
            style="flex: 5"
            class="input"
            type="text"
            id="userId"
            name="userId"
            required
            :value="values.userId"
            @change="handleChangeUserId"
            placeholder="로그인에 사용될 아이디를 입력해주세요"
          />
          <button style="flex: 1; font-size: 14px" class="button" @click="handleCheckUserId">
            중복 확인
          </button>
        </div>
        <div v-if="isError.userId.value" class="error">
          {{ RegisterValidation.invalidUserIdMessage }}
        </div>
        <div
          v-else-if="isTouched.userId && isDuplicated === 'possible'"
          style="color: green; font-weight: 800"
        >
          사용 가능한 아이디입니다
        </div>
        <div
          v-else-if="isTouched.userId && isDuplicated === 'impossible'"
          style="color: tomato; font-weight: 800"
        >
          사용 불가능한 아이디입니다
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
          v-model="values.email"
          @change="handleChangeEmail"
          placeholder="이메일을 입력해주세요"
        />
        <div v-show="isError.email.value" class="error">
          {{ RegisterValidation.invalidEmailMessage }}
        </div>
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
        <div v-show="isError.password.value" class="error">
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
          v-model="values.passwordConfirm"
          @change="handleChangePasswordConfirm"
          placeholder="비밀번호를 한번 더 입력해주세요"
        />
        <div v-show="isError.passwordConfirm.value" class="error">
          비밀번호를 한번 더 입력해주세요
        </div>
      </div>
      <button
        type="button"
        class="button"
        style="color: white; margin-top: 50px; width: 100%"
        :disabled="!isValidateForm"
        @click="handleSubmit"
      >
        가입하기
      </button>
    </div>
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

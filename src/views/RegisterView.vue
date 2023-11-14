<script setup>
import Icon from '../_lib/components/Icon.vue'
import Layout from './Layout.vue'
import { router } from './router'

const navigateToBack = () => {
  router.back()
}
</script>

<template>
  <Layout>
    <header id="formHeader">
      <Icon name="arrowBack" size="xlg" @click="navigateToBack" />
      <h1>회원가입</h1>
    </header>
    <form @submit.prevent="onSubmit">
      <div class="input-group">
        <label for="username">사용자 이름</label>
        <input
          type="text"
          id="username"
          name="username"
          required
          v-model="usernameInputValue"
          @blur="onBlurUsername"
        />
        <div v-show="isUsernameError" class="error">사용자 이름의 길이는 5이상이어야 해요.</div>
      </div>

      <div class="input-group">
        <label for="email">이메일</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          v-model="emailInputValue"
          @blur="onBlurEmail"
        />
        <div v-show="isEmailError" class="error">이메일 형식을 지켜주세요.</div>
      </div>

      <div class="input-group">
        <label for="password">비밀번호</label>
        <input
          type="password"
          id="password"
          name="password"
          required
          v-model="passwordInputValue"
          @blur="onBlurPassword"
        />
        <div v-show="isPasswordError" class="error">비밀번호의 길이는 8이상이어야 해요.</div>
      </div>

      <div class="input-group">
        <label for="password">비밀번호 확인</label>
        <input
          type="password"
          id="passwordConfirm"
          name="passwordConfirm"
          required
          v-model="passwordConfirmInputValue"
          @blur="onBlurPasswordConfirm"
        />
        <div v-show="isPasswordConfirmError" class="error">비밀번호를 한번 더 입력해주세요.</div>
      </div>
      <button type="submit" class="btn">가입하기</button>
    </form>
  </Layout>
</template>

<style scoped>
#formHeader {
  display: flex;
  justify-content: flex-start;
  align-items: center;
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
}

.input-group input {
  flex: 1;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}
.input-group input:focus {
  outline: none;
  border-color: #007bff;
}
.btn {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
.btn:hover {
  background-color: #0056b3;
}

.error {
  margin-top: -10px;
  color: tomato;
  font-size: 16px;
}
</style>

import { ref, computed, inject } from 'vue'

// TODO: 세션과 쿠키를 통한 로그인 유무 처리
// TODO: 로그인 유무에 따른 네비게이션 가드
const currentUser = ref(null)

const isLoggedIn = computed(() => {
  return !!currentUser.value
})

const isAdmin = computed(() => {
  return !!currentUser.value && currentUser.isAdmin
})

// TODO: 더미데이터를 실제 데이터로 바꾸기
const login = (
  user = {
    userId: 1,
    username: '용상윤',
    isAdmin: false,
  },
) => {
  currentUser.value = user
}

const logout = () => {
  currentUser.value = null
}

export const useAuthProvider = [
  'useAuth',
  {
    currentUser,
    isLoggedIn,
    isAdmin,
    login,
    logout,
  },
]

export const useAuth = () => inject('useAuth')

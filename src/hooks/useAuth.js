import { ref, computed, inject } from 'vue'
import { getCookie, deleteCookie, setCookie } from '../_lib/utils/cookie'
import * as AuthApi from '../apis/auth'

// TODO: 로그인 유무에 따른 네비게이션 가드
const currentUser = ref(null)
const planList = ref([])
const notifications = ref([])

const setCurrentUser = ({ userId, userNickname, userKey }) => {
  currentUser.value = {
    userId,
    userNickname,
    userKey,
  }
}

const fetchPlanList = async () => {
  const fetchedPlanList = await AuthApi.getPlanList(currentUser.value.userId)
  planList.value = fetchedPlanList
}

const fetchNotifications = async () => {
  const fetchedNotifications = await AuthApi.getNotifications()
  notifications.value = fetchedNotifications
}

const onMountedCallback = async () => {
  const userCookie = getUserCookie()
  if (!userCookie) {
    return
  }
  setCurrentUser(userCookie)

  try {
    await fetchPlanList()
    await fetchNotifications()
  } catch (e) {
    await logout()
  }
}

const isLoggedIn = computed(() => {
  return !!currentUser.value
})

const isAdmin = computed(() => {
  return !!currentUser.value && currentUser.isAdmin
})

const login = async ({ userId: inputUserId, userPassword: inputUserPassword }) => {
  const {
    user_id: userId,
    user_nickname: userNickname,
    user_key: userKey,
  } = await AuthApi.login({
    userId: inputUserId,
    userPassword: inputUserPassword,
  })
  setCurrentUser({
    userId,
    userNickname,
    userKey,
  })
  setUserCookie({
    userId,
    userNickname,
    userKey,
  })
  await fetchPlanList()
  await fetchNotifications()
}

const logout = async () => {
  try {
    await AuthApi.logout()
  } catch (e) {
    console.log('logout error')
  }
  currentUser.value = null
  deleteUserCookie()
}

export const useAuthProvider = [
  'useAuth',
  {
    currentUser,
    planList,
    isLoggedIn,
    isAdmin,
    login,
    logout,
    onMountedCallback,
    fetchPlanList,
    notifications,
    fetchNotifications,
  },
]

export const useAuth = () => inject('useAuth')

const USER_ID_COOKIE_KEY = 'user_id'
const USER_NICKNAME_COOKIE_KEY = 'user_nickname'
const USER_KEY_COOKIE_KEY = 'user_key'

const setUserCookie = ({ userId, userNickname, userKey }) => {
  setCookie(USER_ID_COOKIE_KEY, userId)
  setCookie(USER_NICKNAME_COOKIE_KEY, userNickname)
  setCookie(USER_KEY_COOKIE_KEY, userKey)
}

const getUserCookie = () => {
  const userId = getCookie(USER_ID_COOKIE_KEY)
  const userNickname = getCookie(USER_NICKNAME_COOKIE_KEY)
  const userKey = getCookie(USER_KEY_COOKIE_KEY)

  if (!userId || !userNickname || !userKey) {
    deleteUserCookie()
    return null
  }

  return {
    userId,
    userNickname,
    userKey,
  }
}

const deleteUserCookie = () => {
  deleteCookie(USER_ID_COOKIE_KEY)
  deleteCookie(USER_NICKNAME_COOKIE_KEY)
  deleteCookie(USER_KEY_COOKIE_KEY)
}

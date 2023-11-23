import { mainRequest } from './config'

const {
  VITE_SIGN_AUTH_JOIN,
  VITE_SIGN_AUTH_LOGIN,
  VITE_SIGN_AUTH_LOGOUT,
  VITE_SIGN_AUTH_CHECK_ID,
  VITE_SIGN_SEARCH_USER,
  VITE_SIGN_CREATE_PLAN,
} = import.meta.env

export const join = async ({ userId, userPassword, userNickname, userName, userEmail }) => {
  const res = await mainRequest.post('/auth', {
    sign: VITE_SIGN_AUTH_JOIN,
    user_id: userId,
    user_password: userPassword,
    user_nickname: userNickname,
    user_name: userName,
    user_email: userEmail,
  })
  return res.data.data
}

export const login = async ({ userId, userPassword }) => {
  const res = await mainRequest.post('/auth', {
    sign: VITE_SIGN_AUTH_LOGIN,
    user_id: userId,
    user_password: userPassword,
  })
  return res.data.data
}

export const logout = async () => {
  await mainRequest.post('/user', {
    sign: VITE_SIGN_AUTH_LOGOUT,
  })
}

export const checkId = async (userId) => {
  try {
    await mainRequest.post('/auth', {
      sign: VITE_SIGN_AUTH_CHECK_ID,
      user_id: userId,
    })
    return true
  } catch (e) {
    return false
  }
}

export const searchUser = async (keyword) => {
  const res = await mainRequest.post('/user', {
    sign: VITE_SIGN_SEARCH_USER,
    keyword,
  })
  return res.data.data
}

export const createPlan = async ({ title, planDate, placeIdList, mentionedUserIdList }) => {
  const res = await mainRequest.post('/plan', {
    sign: VITE_SIGN_CREATE_PLAN,
    title,
    plan_date: planDate,
    content_ides: placeIdList,
    users: mentionedUserIdList,
  })

  return res.data.data
}

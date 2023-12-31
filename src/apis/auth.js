import { mainRequest } from './config'

const {
  VITE_SIGN_AUTH_JOIN,
  VITE_SIGN_AUTH_LOGIN,
  VITE_SIGN_AUTH_LOGOUT,
  VITE_SIGN_AUTH_CHECK_ID,
  VITE_SIGN_SEARCH_USER,
  VITE_SIGN_CREATE_PLAN,
  VITE_SIGN_GET_PLANLIST,
  VITE_SIGN_DELETE_1_PLAN,
  VITE_SIGN_DELETE_2_PLAN,
  VITE_SIGN_AUTHORIZE_EMAIL,
  VITE_SIGN_AUTHORIZE_EMAIL_TOKEN_CHECK,
  VITE_SIGN_GET_NOTIFICATIONS,
  VITE_SIGN_CONFIRM_NOTIFICATION,
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
  await mainRequest.post('/auth', {
    sign: VITE_SIGN_AUTH_CHECK_ID,
    user_id: userId,
  })
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

export const getPlanList = async (userId) => {
  const res = await mainRequest.post('/plan', {
    sign: VITE_SIGN_GET_PLANLIST,
    user_id: userId,
  })

  return res.data.data
}

export const delete1Plan = async ({ planId, userId }) => {
  const res = await mainRequest.post('/plan', {
    sign: VITE_SIGN_DELETE_1_PLAN,
    plan_id: planId,
    user_id: userId,
  })
  return res.data.data
}

export const delete2Plan = async ({ planId, userPassword, token }) => {
  const res = await mainRequest.post('/plan', {
    sign: VITE_SIGN_DELETE_2_PLAN,
    plan_id: planId,
    CSRF_token: token,
    user_password: userPassword,
  })
  return res.data.data
}

export const authorizeEmail = async (email) => {
  await mainRequest.post('/auth', {
    sign: VITE_SIGN_AUTHORIZE_EMAIL,
    user_email: email,
  })
}

export const authorizeEmailTokenCheck = async (inputToken) => {
  await mainRequest.post('/auth', {
    sign: VITE_SIGN_AUTHORIZE_EMAIL_TOKEN_CHECK,
    token: inputToken,
  })
}

export const getNotifications = async () => {
  const res = await mainRequest.post('/plan', {
    sign: VITE_SIGN_GET_NOTIFICATIONS,
  })
  return res.data.data
}

export const confirmNotification = async (messageId) => {
  await mainRequest.post('/plan', {
    sign: VITE_SIGN_CONFIRM_NOTIFICATION,
    message_id: messageId,
  })
}

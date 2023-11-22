import { requestBuilder } from './config'

const {
  VITE_API_END_POINT,
  VITE_SIGN_AUTH_JOIN,
  VITE_SIGN_AUTH_LOGIN,
  VITE_SIGN_AUTH_LOGOUT,
  VITE_SIGN_AUTH_CHECK_ID,
} = import.meta.env

const request = requestBuilder({
  baseURL: VITE_API_END_POINT,
  timeout: 3000,
  withCredentials: true,
})

export const join = async ({ userId, userPassword, userNickname, userName, userEmail }) => {
  const res = await request.post('/auth', {
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
  const res = await request.post('/auth', {
    sign: VITE_SIGN_AUTH_LOGIN,
    user_id: userId,
    user_password: userPassword,
  })
  return res.data.data
}

export const logout = async () => {
  await request.post('/user', {
    sign: VITE_SIGN_AUTH_LOGOUT,
  })
}

export const checkId = async (userId) => {
  try {
    await request.post('/auth', {
      sign: VITE_SIGN_AUTH_CHECK_ID,
      user_id: userId,
    })
    return true
  } catch (e) {
    return false
  }
}

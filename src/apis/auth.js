import { HttpError } from '../_lib/utils/HttpError'
import { requestBuilder } from './config'

const { VITE_API_END_POINT, VITE_SIGN_AUTH_JOIN, VITE_SIGN_AUTH_LOGIN, VITE_SIGN_AUTH_LOGOUT } =
  import.meta.env

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

  if (res.status < 400) {
    return res.data.data
  }

  throw new HttpError({ statusCode: res.status, message: 'join error' })
}

export const login = async ({ userId, userPassword }) => {
  const res = await request.post('/auth', {
    sign: VITE_SIGN_AUTH_LOGIN,
    user_id: userId,
    user_password: userPassword,
  })

  if (res.status < 400) {
    return res.data.data
  }

  throw new HttpError({ statusCode: res.status, message: 'login error' })
}

export const logout = async () => {
  const res = await request.post('/user', {
    sign: VITE_SIGN_AUTH_LOGOUT,
  })

  if (res.status >= 400) {
    throw new HttpError({ statusCode: res.status, message: 'logout error' })
  }
}

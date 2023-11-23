import axios from 'axios'
import { forceClearAllCookies } from '../_lib/utils/cookie'

const requestBuilder = (config = {}) => {
  return axios.create({ ...config })
}

const { VITE_MAIN_API_END_POINT } = import.meta.env

const mainRequestResponseHandler = (axiosResponse) => axiosResponse
const mainRequestErrorHandler = (axiosError) => {
  console.log(`axios error : ${axiosError}`)
  if (axiosError.code === 'ERR_NETWORK') {
    window.alert('일시적으로 서비스가 제공되지 않습니다.')
    return
  }

  if (axiosError.response && axiosError.response.status === 403) {
    window.alert('세션이 만료되었습니다. 다시 로그인해주세요.')
    forceClearAllCookies()
    window.location.href = '/'
    return
  }

  return Promise.reject(axiosError)
}
export const mainRequest = requestBuilder({
  baseURL: VITE_MAIN_API_END_POINT,
  timeout: 8000,
  withCredentials: true,
})
mainRequest.interceptors.response.use(mainRequestResponseHandler, mainRequestErrorHandler)

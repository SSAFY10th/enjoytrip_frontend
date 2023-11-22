import axios from 'axios'

export const requestBuilder = (config = {}) => {
  return axios.create({ ...config })
}

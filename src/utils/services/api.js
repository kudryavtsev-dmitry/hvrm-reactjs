import axios from 'axios'
import axiosRetry from 'axios-retry'

const api = axios.create({
  baseURL: 'http://localhost:5000/api/',
  timeout: 3000,
})

axiosRetry(api, {
  retries: 3,
  shouldResetTimeout: true,
  retryCondition: (error) => {
    return error.message === 'timeout of 3000ms exceeded'
  },
})

export default api

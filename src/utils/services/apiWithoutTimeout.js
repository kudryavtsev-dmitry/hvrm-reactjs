import axios from 'axios'

const apiWithoutTimeout = axios.create({
  baseURL: 'http://localhost:5000/api/',
})

export default apiWithoutTimeout

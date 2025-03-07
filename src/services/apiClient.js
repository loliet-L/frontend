import axios from 'axios'

const apiClient = axios.create({
  baseURL: "http://localhost:5001/api",
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

export default apiClient
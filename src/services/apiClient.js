import axios from 'axios'

const apiClient = axios.create({
  baseURL: "https://backend-prod-gtc3.onrender.com/api",
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

export default apiClient
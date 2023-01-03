import axios from "axios"
import { store } from "../app/store"

const defaultOptions = {
  baseURL: 'http://localhost:8000',
  headers: {
    "Content-type": "application/json",
  }
}

// Create axios instance
const apiClient = axios.create(defaultOptions) 

// Set the AUTH token for any request
apiClient.interceptors.request.use( (config) => {
  const token = store.getState().userProfile.token
  config.headers = config.headers ?? {};
  config.headers.Authorization = token;
  return config
})


export default apiClient



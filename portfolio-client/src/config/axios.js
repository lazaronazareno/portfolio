import axios from 'axios'

const clientAxios = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL
})

export default clientAxios

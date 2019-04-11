import axios from 'axios'

export function login (data) {
  return axios.get('/app/mobile/login/',data)
}
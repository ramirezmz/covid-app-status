import axios from 'axios'

const api = axios.create({
  baseURL: 'https://covid-api.mmediagroup.fr/v1/cases'
})

export default {
  async get(uri: string) {
    return await api.get(uri)
  }
}
import { getTvShow } from './models/TVShow'
import renderHeader from './components/Header'
import axios from 'axios'

import renderTVShowDetails from './components/TVShowDetails'
import { SINGLE_SHOW_API_URL } from './config'
import './style.css'

const token = localStorage.getItem('token')
if (token) {
  const app = <HTMLDivElement>document.getElementById('app')
    renderHeader(app)
  const $ = document.querySelector.bind(document)

const searchTVShow = async (id: string) => {
  const http = axios.create({
    baseURL: SINGLE_SHOW_API_URL,
  })

  const response = await http.get(`/${id}`)

  if (response.status == 200) {
    const { data } = response
    const tvShow = getTvShow(data)
    const container = <HTMLDivElement>$('#container')
    renderTVShowDetails(tvShow, container)
  }
}
const params = new URLSearchParams(document.location.search)
const id = params.get('id')
if (id) {
  searchTVShow(id)
}
} else {
  location.href = 'login.html'
}



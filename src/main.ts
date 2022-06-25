import renderSearchForm from './components/SearchForm'
import renderHeader from './components/Header'
import './style.css'

const token = localStorage.getItem('token')

if (token) {
  const app = <HTMLDivElement>document.getElementById('app')
  renderHeader(app)
  const $ = document.querySelector.bind(document)
   const container = <HTMLDivElement>$('#container')
    renderSearchForm(container)
   const resultArea = document.createElement('div')
    resultArea.id = 'result-area'
    container.insertAdjacentElement('beforeend', resultArea)

} else {
  location.href = 'login.html'
}

export default {}

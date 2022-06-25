import renderGithubLoginButton from './components/GithubLoginButton'
import renderGoogleLoginButton from './components/GoogleLoginButton'
import renderMicrosoftLoginButton from './components/MicrosoftLoginButton'
import './style.css'

const token = localStorage.getItem('token')
if (token) {
  location.href = 'index.html'
} else {
  const appGit = <HTMLDivElement>document.getElementById('appGit')
  renderGithubLoginButton(appGit)
  const appGoogle = <HTMLDivElement>document.getElementById('appGoogle')
  renderGoogleLoginButton(appGoogle);
  const appMicrosoft = <HTMLDivElement>document.getElementById('appMicrosoft')
  renderMicrosoftLoginButton(appMicrosoft)
}



/*import renderSearchForm from './components/SearchForm'
import './style.css'

const $ = document.querySelector.bind(document)

const container = <HTMLDivElement>$('#container')
renderSearchForm(container)
const resultArea = document.createElement('div')
resultArea.id = 'result-area'
container.insertAdjacentElement('beforeend', resultArea)*/
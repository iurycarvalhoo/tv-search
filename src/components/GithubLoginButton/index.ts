import { getAuth, signInWithPopup, GithubAuthProvider } from 'firebase/auth'
import firebaseApp from '../../config/firebase'
import './styles.css'

const onClick2 = () => {
  const auth = getAuth(firebaseApp)
  const provider = new GithubAuthProvider()
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result)
      const token = credential?.accessToken
      const { user } = result
      const { displayName, photoURL } = user
      localStorage.setItem('token', token || '')
      localStorage.setItem('userName', displayName || '')
      localStorage.setItem('userPhoto', photoURL || '')
      if (token) {
        location.href = 'index.html'
      }
    })
    .catch((error) => {
      const { errorCode, errorMessage } = error
      console.log(errorCode, errorMessage)
    })
}

const renderGithubLoginButton = (container: HTMLElement) => {
  const htmlContent = `
        <button class="login-button" id="login-button-git">
            <img src="/assets/img/github.png" alt="Github">
            <span>Entrar com Github</span>
        </button>
    `

  container.innerHTML = htmlContent
  const loginButtonGit = <HTMLButtonElement>document.getElementById('login-button-git')
  loginButtonGit.onclick = onClick2
}

export default renderGithubLoginButton
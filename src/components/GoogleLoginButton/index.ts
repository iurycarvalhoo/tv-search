import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import firebaseApp from '../../config/firebase'
import './styles.css'

const onClick = () => {
  const auth = getAuth(firebaseApp)
  auth.languageCode = 'pt-br'
  const provider = new GoogleAuthProvider()
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential?.accessToken
      const { user } = result
      const { displayName } = user
      const{photoURL}=user
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

const renderGoogleLoginButton = (container: HTMLElement) => {
  const htmlContent = `
        <button class="login-button" id="login-button-google">
            <img src="assets/img/google.png" alt="Google">
            <span>Entrar com Google</span>
        </button>
    `

  container.innerHTML = htmlContent

  const loginButton = <HTMLButtonElement>document.getElementById('login-button-google')
  loginButton.onclick = onClick
}

export default renderGoogleLoginButton
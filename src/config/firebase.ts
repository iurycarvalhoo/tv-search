import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCxPMDnFOQXAiEv9HbwLDTGnCo5Whcy49M",
  authDomain: "exemplo-autenticacao-62aec.firebaseapp.com",
  projectId: "exemplo-autenticacao-62aec",
  storageBucket: "exemplo-autenticacao-62aec.appspot.com",
  messagingSenderId: "423183082656",
  appId: "1:423183082656:web:fb5addf9f55050da9155c5"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
export default firebaseApp
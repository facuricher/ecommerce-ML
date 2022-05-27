import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCcS2CCFrnQW4SIpGQAPdkKC_aG-MPHWkg",
    authDomain: "e-commerceml.firebaseapp.com",
    projectId: "e-commerceml",
    storageBucket: "e-commerceml.appspot.com",
    messagingSenderId: "396202167214",
    appId: "1:396202167214:web:eaa8408c08575479c0d63f"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase
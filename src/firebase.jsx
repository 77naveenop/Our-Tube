import  firebase from "firebase/compat/app";

import "firebase/compat/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCTlYN8NyKBODVBZYL-JVRWUt7ArcVwCTA",
    authDomain: "ourtube-77.firebaseapp.com",
    projectId: "ourtube-77",
    storageBucket: "ourtube-77.appspot.com",
    messagingSenderId: "222968150391",
    appId: "1:222968150391:web:392ec0f52bef95e1f34972"
  };



  firebase.initializeApp(firebaseConfig)
export default firebase.auth()

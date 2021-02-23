import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAzu6cfeklP3Ft0rVbfYNz1wLpOKBGReKI",
    authDomain: "akyuz-api.firebaseapp.com",
    databaseURL: "https://akyuz-api-default-rtdb.firebaseio.com",
    projectId: "akyuz-api",
    storageBucket: "akyuz-api.appspot.com",
    messagingSenderId: "715254759516",
    appId: "1:715254759516:web:a39083ae57698e3697e699",
    measurementId: "G-55CX8FXZS7"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;
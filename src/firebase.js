import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/database";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB85Z9_uI5uExZVlqDRoK3lvrqLZ5Qlnew",
    authDomain: "challenge-cef04.firebaseapp.com",
    projectId: "challenge-cef04",
    storageBucket: "challenge-cef04.firebasestorage.app",
    messagingSenderId: "516556868203",
    appId: "1:516556868203:web:43cab9fc9e555bc9baff2e",
    measurementId: "G-9H4CNCJP7Z"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};
import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDYC9VfzWkwSxR9Ge3vScQCGVw3Opr16J8",
    authDomain: "reactzzaria-e4844.firebaseapp.com",
    projectId: "reactzzaria-e4844",
    storageBucket: "reactzzaria-e4844.appspot.com",
    messagingSenderId: "180684174259",
    appId: "1:180684174259:web:0decd9f8a46a918b5311c6",
    measurementId: "G-12NR86ZRD8",
  };
firebase.initializeApp(firebaseConfig);

export default firebase
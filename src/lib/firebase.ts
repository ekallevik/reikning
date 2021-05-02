import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC_BnHrYggMR3Mn7mR1QvQNf8XYW5bKiaE",
  authDomain: "reikning.firebaseapp.com",
  projectId: "reikning",
  storageBucket: "reikning.appspot.com",
  messagingSenderId: "1059270778887",
  appId: "1:1059270778887:web:dc20612b31bf86ed2d0aa2",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();

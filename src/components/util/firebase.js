// import firebase from 'firebase';
// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlVHzOyFoWAcRowldwHC7Ek0VymdkXWDw",
  authDomain: "netflix-gpt-e195f.firebaseapp.com",
  projectId: "netflix-gpt-e195f",
  storageBucket: "netflix-gpt-e195f.appspot.com",
  messagingSenderId: "669251795506",
  appId: "1:669251795506:web:08786c4cbb16b4043d5a2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
// const firestore = firebase.firestore();

// export { firestore };
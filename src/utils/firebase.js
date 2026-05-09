// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCS9u64T0pOelCxMlxnIczYi8fXpNcaVno",
  authDomain: "netflix-gpt-51407.firebaseapp.com",
  projectId: "netflix-gpt-51407",
  storageBucket: "netflix-gpt-51407.firebasestorage.app",
  messagingSenderId: "41839420229",
  appId: "1:41839420229:web:820638e37b2e4ded6f542c",
  measurementId: "G-Z6SN3C1MTE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

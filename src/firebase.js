// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_GzD1pspMfopTfvpgj9d_hLJ3MiOPpTE",
  authDomain: "project-c12d6.firebaseapp.com",
  projectId: "project-c12d6",
  storageBucket: "project-c12d6.appspot.com",
  messagingSenderId: "908692156167",
  appId: "1:908692156167:web:74e061d0473a6f86751fa2",
  measurementId: "G-96ME9YN76D"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
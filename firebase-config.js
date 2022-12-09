import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN7zZ9ewbJUfgVJ8yvQv-6SXggsJGNqrY",
  authDomain: "firstapp-e9bb9.firebaseapp.com",
  projectId: "firstapp-e9bb9",
  storageBucket: "firstapp-e9bb9.appspot.com",
  messagingSenderId: "340785512570",
  appId: "1:340785512570:web:1a2c72dbec8dd47e53bbc3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app);
export {auth,db};
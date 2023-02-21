// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZRDUzdxdYGv1A7pFTLzGI7lelrqbsJPA",
  authDomain: "chat-app-56bf3.firebaseapp.com",
  projectId: "chat-app-56bf3",
  storageBucket: "chat-app-56bf3.appspot.com",
  messagingSenderId: "620751716398",
  appId: "1:620751716398:web:23ac08d1e59112c0cbdfbf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore (app)
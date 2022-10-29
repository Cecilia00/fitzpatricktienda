// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDJUOOzXhU4Am-A4fdIrKJivznRjqhWm4",
  authDomain: "backend-ecommerce-302cc.firebaseapp.com",
  projectId: "backend-ecommerce-302cc",
  storageBucket: "backend-ecommerce-302cc.appspot.com",
  messagingSenderId: "49124056681",
  appId: "1:49124056681:web:0db4dcbce35b7c574d8cf8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
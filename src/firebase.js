// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBtfx7Hxo_Ia_fNNJgPQ9YMvUfkn2S5cuE",
  authDomain: "my-portfolio-5000.firebaseapp.com",
  projectId: "my-portfolio-5000",
  storageBucket: "my-portfolio-5000.firebasestorage.app",
  messagingSenderId: "765510350163",
  appId: "1:765510350163:web:66e0d9ed1bd3fa0a425da6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore instance
export const db = getFirestore(app);

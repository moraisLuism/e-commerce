// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuQoB6llF8uN49jLJylRAp98EItSkX1H8",
  authDomain: "app-firebase-56326.firebaseapp.com",
  projectId: "app-firebase-56326",
  storageBucket: "app-firebase-56326.appspot.com",
  messagingSenderId: "984103240397",
  appId: "1:984103240397:web:253455249097d7e9bc9f84",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-8_FDx3b5Sn_udr28lO4vPaxzXV28D2o",
  authDomain: "hotels-management-74e92.firebaseapp.com",
  projectId: "hotels-management-74e92",
  storageBucket: "hotels-management-74e92.appspot.com",
  messagingSenderId: "1093627210822",
  appId: "1:1093627210822:web:e273bbe3909d831bfbee47",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
export { auth, db };

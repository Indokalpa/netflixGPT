// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArwf0G52eDXy_XivpqYO-TuFQYymuOl3w",
  authDomain: "neflixgpt-8fe2f.firebaseapp.com",
  projectId: "neflixgpt-8fe2f",
  storageBucket: "neflixgpt-8fe2f.firebasestorage.app",
  messagingSenderId: "36475981583",
  appId: "1:36475981583:web:c6a2f969d4831eed53787a",
  measurementId: "G-BKLBZSGKHF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
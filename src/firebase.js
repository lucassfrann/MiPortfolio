// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx7TKre-hfJrjasF3XhEE3b_ROhZevros",
  authDomain: "miportfolio-fb69f.firebaseapp.com",
  projectId: "miportfolio-fb69f",
  storageBucket: "miportfolio-fb69f.appspot.com",
  messagingSenderId: "75206764198",
  appId: "1:75206764198:web:6cbaa5bda552f30f29b667",
  measurementId: "G-DW02H2SWMH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
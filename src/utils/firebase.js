// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB94Xt_Dhe20gJimh4SPOTW6b3wN9qDVQ0",
  authDomain: "netflixgpt-20c73.firebaseapp.com",
  projectId: "netflixgpt-20c73",
  storageBucket: "netflixgpt-20c73.appspot.com",
  messagingSenderId: "951514712353",
  appId: "1:951514712353:web:a83f1e5ac73247ee819660",
  measurementId: "G-W5VW9EJTYD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

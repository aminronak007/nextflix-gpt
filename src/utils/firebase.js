// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB03EKz-l1LiY32InWmAKkea_bKdMFjjG0",
  authDomain: "netflixgpt-3359c.firebaseapp.com",
  projectId: "netflixgpt-3359c",
  storageBucket: "netflixgpt-3359c.appspot.com",
  messagingSenderId: "527339292401",
  appId: "1:527339292401:web:4b8ca4fa3e03ff70cc4b50",
  measurementId: "G-MQNQGGXH49",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
export const auth = getAuth();

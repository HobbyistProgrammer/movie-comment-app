// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8GyBygYfIqtikGtJFMX25JyRQqlqGrT0",
  authDomain: "usermoviecomments.firebaseapp.com",
  projectId: "usermoviecomments",
  storageBucket: "usermoviecomments.firebasestorage.app",
  messagingSenderId: "85045592547",
  appId: "1:85045592547:web:7839cd9897879b05bae0d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
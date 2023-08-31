// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiaGQfS5bJjlQ1rPSc8wGxmzddOraB7-0",
  authDomain: "datapi-96467.firebaseapp.com",
  databaseURL: "https://datapi-96467-default-rtdb.firebaseio.com",
  projectId: "datapi-96467",
  storageBucket: "datapi-96467.appspot.com",
  messagingSenderId: "689746032087",
  appId: "1:689746032087:web:53d5f6893a2f8a43d74792",
  measurementId: "G-X6YP9JY249",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

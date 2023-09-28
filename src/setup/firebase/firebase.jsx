import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDV4hJz9XJGim_aC4TS6Vw8IzLTBPZyG8Y",
  authDomain: "itpark-admin-panel.firebaseapp.com",
  projectId: "itpark-admin-panel",
  storageBucket: "itpark-admin-panel.appspot.com",
  messagingSenderId: "801576557482",
  appId: "1:801576557482:web:4ea1dbcf6f956a1f4ca9d3",
  measurementId: "G-84EYCPD868",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

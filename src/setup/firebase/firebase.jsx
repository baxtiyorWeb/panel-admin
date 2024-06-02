import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

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
export const storage = getStorage(app);
export const realTimeDatabase = getDatabase(app);
export const auth = getAuth(app);

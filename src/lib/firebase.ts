import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB_84BFLI-5iMOTwDUepXKUmDQgK4csZFk",
  authDomain: "lenden-d2bc9.firebaseapp.com",
  databaseURL: "https://lenden-d2bc9-default-rtdb.firebaseio.com",
  projectId: "lenden-d2bc9",
  storageBucket: "lenden-d2bc9.firebasestorage.app",
  messagingSenderId: "258159170143",
  appId: "1:258159170143:web:97e3f7acaa6d2fdaa001ea",
  measurementId: "G-V6TRPK7XET"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

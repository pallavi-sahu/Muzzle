// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';
import { getDatabase } from 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyDKBk95lJdJqCs_vEsxzFoE_IUdOKadSbM",
  authDomain: "muzzle-549cc.firebaseapp.com",
  databaseURL: "https://muzzle-549cc-default-rtdb.firebaseio.com",
  projectId: "muzzle-549cc",
  storageBucket: "muzzle-549cc.appspot.com",
  messagingSenderId: "883397099863",
  appId: "1:883397099863:web:ac12828d78a40ac0ad3e12",
  measurementId: "G-8HYD2V2V0F"
};

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = getFirestore(app);
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);
const database = getDatabase(app);

export { auth, provider, signInWithPopup, db, storage, database };
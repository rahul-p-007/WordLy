import { initializeApp,getApps,getApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyCIRohowspqXP46hHqra550V-f8ojqCOWg",
  authDomain: "wordly-25435.firebaseapp.com",
  projectId: "wordly-25435",
  storageBucket: "wordly-25435.firebasestorage.app",
  messagingSenderId: "511845476045",
  appId: "1:511845476045:web:b2cc7258726a134c8d2b84"
};

const app = getApps().length == 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export {db};
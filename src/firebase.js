import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCbdA9AzBdbXC9vqtPpHXC1aXy9g-o9Hps",

  authDomain: "chat-app-b8b58.firebaseapp.com",

  projectId: "chat-app-b8b58",

  storageBucket: "chat-app-b8b58.appspot.com",

  messagingSenderId: "1037773862879",

  appId: "1:1037773862879:web:df6f04130c953337d2766a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

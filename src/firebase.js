import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA20UW6Ng_bicP7N-nMS6FqR_cNSGhsC9o",
  authDomain: "chat-3c177.firebaseapp.com",
  databaseURL: "https://chat-3c177-default-rtdb.firebaseio.com",
  projectId: "chat-3c177",
  storageBucket: "chat-3c177.appspot.com",
  messagingSenderId: "280292664013",
  appId: "1:280292664013:web:0e5c2b19ba064c851e3f84",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

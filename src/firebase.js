// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA20UW6Ng_bicP7N-nMS6FqR_cNSGhsC9o",
  authDomain: "chat-3c177.firebaseapp.com",
  projectId: "chat-3c177",
  storageBucket: "chat-3c177.appspot.com",
  messagingSenderId: "280292664013",
  appId: "1:280292664013:web:0e5c2b19ba064c851e3f84",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();

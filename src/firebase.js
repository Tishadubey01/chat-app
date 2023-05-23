// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkzX0o89ZsehHk2Aeho0grt1-lgVHgcbk",
  authDomain: "chatapp-d6189.firebaseapp.com",
  projectId: "chatapp-d6189",
  storageBucket: "chatapp-d6189.appspot.com",
  messagingSenderId: "276852094050",
  appId: "1:276852094050:web:f775c4bcec0eaa93234d3b",
  measurementId: "G-CD3NQWC4Q1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
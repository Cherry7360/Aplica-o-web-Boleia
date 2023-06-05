// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider,signInWithPopup} from "firebase/auth";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAJXO1-nKM9Qjt8YYvfUFuu8AMe25LVnZs",
  authDomain: "boleia-aplication.firebaseapp.com",
  projectId: "boleia-aplication",
  storageBucket: "boleia-aplication.appspot.com",
   messagingSenderId: "480076361638",
  appId: "1:480076361638:web:100b9724ae2e3d5336e967",
  measurementId: "G-EK26QR39RC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db =getFirestore(app)





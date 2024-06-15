// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "jpmc-cfg-3d71a.firebaseapp.com",
  projectId: "jpmc-cfg-3d71a",
  storageBucket: "jpmc-cfg-3d71a.appspot.com",
  messagingSenderId: "346958246792",
  appId: "1:346958246792:web:ca0204b1b08d117a5a003d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPRWRW-x1DIBq2pJynRdNj4HX1XVaYC5w",
  authDomain: "luxorides-6c5c8.firebaseapp.com",
  projectId: "luxorides-6c5c8",
  storageBucket: "luxorides-6c5c8.appspot.com",
  messagingSenderId: "593636419146",
  appId: "1:593636419146:web:cdc1897ead8a410fa1e8b3"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db=getFirebase()
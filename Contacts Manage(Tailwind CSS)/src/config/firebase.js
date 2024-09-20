// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAou9jgxPI0Po-cyZZTdp_VL51pSrVQ5AA",
  authDomain: "vite-contact-28011.firebaseapp.com",
  projectId: "vite-contact-28011",
  storageBucket: "vite-contact-28011.appspot.com",
  messagingSenderId: "576269435445",
  appId: "1:576269435445:web:a0dd1055826ba3736b677c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyCsR1Pf36POKMbP0Bk7U0bc89F7KgojxHI",
  // authDomain: "assignmates-5c335.firebaseapp.com",
  // projectId: "assignmates-5c335",
  // storageBucket: "assignmates-5c335.appspot.com",
  // messagingSenderId: "1028267249353",
  // appId: "1:1028267249353:web:8b42e7a42b10b30ca10718"
  apiKey:import.meta.env.VITE_APIKEY,
  authDomain:import.meta.env.VITE_AUTHDOMAIN,
  projectId:import.meta.env.VITE_PROJECTID,
  storageBucket:import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID,
  appId:import.meta.env.VITE_APPID,




};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
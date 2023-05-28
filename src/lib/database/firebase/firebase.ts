// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdvaljiOpNAxw0RXGfLhqs9QKmQLsZHCI",
  authDomain: "graduation-cdc04.firebaseapp.com",
  projectId: "graduation-cdc04",
  storageBucket: "graduation-cdc04.appspot.com",
  messagingSenderId: "805270456109",
  appId: "1:805270456109:web:70b94dc9ac00afd73275a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export {database}
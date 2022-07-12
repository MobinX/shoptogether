// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from  "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdK3FajQ6JuInFc2lOYSJ08kEN1IuYNCA",
  authDomain: "shoptogether-67b4b.firebaseapp.com",
  projectId: "shoptogether-67b4b",
  storageBucket: "shoptogether-67b4b.appspot.com",
  messagingSenderId: "812295924977",
  appId: "1:812295924977:web:52ae37a0066349a9894d50",
  measurementId: "G-258SYXK80Q"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const database = getDatabase(app);
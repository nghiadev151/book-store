// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage, ref, uploadBytes} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEBlOro9JcuK3qcrmFf9-ma3q-YqC5Mk4",
  authDomain: "bookstore-151.firebaseapp.com",
  projectId: "bookstore-151",
  storageBucket: "bookstore-151.appspot.com",
  messagingSenderId: "63721301925",
  appId: "1:63721301925:web:7d0eb7f1c0f0cdb05b6a4c",
  measurementId: "G-EZ3NM23J8C"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const storage = getStorage(app);
// export const storageRef = ref(storage);
// export const storageRef = storage.ref();
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrqjvdbmcvPKPQZLi_YxklQo7mfs-gQNw",
  authDomain: "goplay-f1c8c.firebaseapp.com",
  projectId: "goplay-f1c8c",
  storageBucket: "goplay-f1c8c.appspot.com",
  messagingSenderId: "714119130562",
  appId: "1:714119130562:web:4493c845d39bdc5fc4ba5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
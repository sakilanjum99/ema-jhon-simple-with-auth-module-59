// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMmPktgVA34sltuPZqm5CWldypggfyuPc",
  authDomain: "ema-jhon-simple-d78ad.firebaseapp.com",
  projectId: "ema-jhon-simple-d78ad",
  storageBucket: "ema-jhon-simple-d78ad.appspot.com",
  messagingSenderId: "696797643353",
  appId: "1:696797643353:web:fcfd35d327754e0f0e6748"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default (auth);
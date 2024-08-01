// https://firebase.google.com/docs/auth/web/start
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";

// importing function of firebase to help authentication me
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  // sendEmailVerification,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3S5rBE9GMgS6URPTVFVgv__SrJA5OC-4",
  authDomain: "signup-f3d4f.firebaseapp.com",
  projectId: "signup-f3d4f",
  storageBucket: "signup-f3d4f.appspot.com",
  messagingSenderId: "878451625573",
  appId: "1:878451625573:web:536e66947f4a29a158c08c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth();

const googleProvider = new GoogleAuthProvider();

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  // sendEmailVerification,
  googleProvider,
  signInWithPopup,
  GoogleAuthProvider
};

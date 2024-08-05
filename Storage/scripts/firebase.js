import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD039SnLIzUujPMPFyhd0kRLgncJ4T1mcg",
  authDomain: "ecommerce-website-f7983.firebaseapp.com",
  projectId: "ecommerce-website-f7983",
  storageBucket: "ecommerce-website-f7983.appspot.com",
  messagingSenderId: "521217976241",
  appId: "1:521217976241:web:f91b66a7a9348eff78ff90",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(app);

export {
  storage,
  ref,
  uploadBytes,
  getDownloadURL,
  db,
  collection,
  addDoc,
  onSnapshot,
};

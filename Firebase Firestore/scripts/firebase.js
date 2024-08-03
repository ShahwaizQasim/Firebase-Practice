  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";

  import { getFirestore,collection, addDoc,  getDocs } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD039SnLIzUujPMPFyhd0kRLgncJ4T1mcg",
    authDomain: "ecommerce-website-f7983.firebaseapp.com",
    projectId: "ecommerce-website-f7983",
    storageBucket: "ecommerce-website-f7983.appspot.com",
    messagingSenderId: "521217976241",
    appId: "1:521217976241:web:f91b66a7a9348eff78ff90"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export{
    db,
    collection,
    addDoc,
    getDocs
  }
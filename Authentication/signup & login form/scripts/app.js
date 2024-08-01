import {auth, onAuthStateChanged  } from "./firebase.js";

onAuthStateChanged(auth, (user) => {
    if (user) {
        // basically is function ka kaam ye hai ky User login hai ya nhi
        // User is Signed in
      const uid = user.uid;
      window.location = './pages/dashboard.html'
      console.log(user);
      // ...
    } else {
      // User is signed out
      window.location = './pages/login.html' // jesi user logout hoga wesi user lgin waly page pr a jaye ga
    }
  });
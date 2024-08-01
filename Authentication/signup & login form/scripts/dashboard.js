import { auth, onAuthStateChanged, signOut } from "./firebase.js";


onAuthStateChanged(auth, (user) => {
    if (user) {
        // basically is function ka kaam ye hai ky User login hai ya nhi
        // User is Signed in
      const uid = user.uid;
      console.log(user);
      // ...
    } else {
      // User is signed out
      window.location = '../pages/login.html' // jesi user logout hoga wesi user lgin waly page pr a jaye ga
    }
  });

  const logOut_btn = document.querySelector("#logOut_btn");

  logOut_btn.addEventListener("click", async() => {
    try {
       await signOut(auth); // user agr login hai tw ye function logout krwa dega
       console.log("signOut Successfully");
    } catch (error) {
        console.log("error", error.message);
    }
  })

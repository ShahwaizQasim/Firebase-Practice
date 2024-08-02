import {
  auth,
  signInWithEmailAndPassword,
  // sendEmailVerification,
  googleProvider,
  signInWithPopup,
  GoogleAuthProvider,
} from "./firebase.js";

const form = document.querySelector("#login-form");

form.addEventListener("submit", async (event) => {
  try {
    event.preventDefault();
    // console.log('click', event.target.children[0].value);
    const email = event.target.children[0].value;
    const password = event.target.children[3].value;
    console.log("email", email, "password", password);

    const result = await signInWithEmailAndPassword(auth, email, password);

    window.location = "../pages/dashboard.html";
    console.log(result);
  } catch (err) {
    console.log("err", err.message);
  }
});

/* verify email */

// const verifyEmail = document.querySelector("#email_verify");

// verifyEmail.addEventListener("click", async () => {
//   try {
//     await sendEmailVerification(auth.currentUser);
//     console.log("Email Sent");
//   } catch (error) {
//     console.log(error.message);
//   }
// });


/* Login with Google */

const loginGoogle = document.querySelector("#loginGoogle");

loginGoogle.addEventListener("click", () => {
  console.log("click");
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log('token', token);
      console.log('user', user);
      // IdP data available using getAdditionalUserInfo(result)
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log('errorCode', errorCode, credential);
      // ...
    });
});

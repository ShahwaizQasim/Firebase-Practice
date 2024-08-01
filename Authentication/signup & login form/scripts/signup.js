import {
  auth,
  createUserWithEmailAndPassword,
} from "./firebase.js";

document
  .querySelector("#signup-Form")
  .addEventListener("submit", async (event) => {
    try {
      event.preventDefault();
      // console.log('click', event.target.children[0].value);
      const userName = event.target.children[0].value;
      const email = event.target.children[3].value;
      const password = event.target.children[6].value;
      // console.log('email', email, 'password', password);

      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      window.location = "../pages/login.html";
    } catch (err) {
      console.log("err", err.message);
    }
  });

import { auth, signInWithEmailAndPassword } from "./firebase.js";

const form = document.querySelector("#login-form");

form.addEventListener("submit", async (event) => {
    try {
        event.preventDefault();
        // console.log('click', event.target.children[0].value);
        const email =  event.target.children[0].value;
        const password = event.target.children[3].value;
        console.log('email', email, 'password', password);
         
        const result = await signInWithEmailAndPassword(auth, email, password);

        window.location = '../pages/dashboard.html';
        console.log(result);
    } catch(err){
       console.log('err', err.message);
    }
})
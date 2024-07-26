
import{auth , createUserWithEmailAndPassword} from "./firebase.js"

document.querySelector("#signup-Form").addEventListener("submit", async(event) => {
  try {
    event.preventDefault();
    // console.log('click', event.target.children[0].value);
    const email = event.target.children[0].value;
    const password = event.target.children[3].value;
    // console.log('email', email, 'password', password);
     
    const result = await createUserWithEmailAndPassword(auth, email, password);
    console.log(result);
} catch(err){
   console.log('err', err,message);
}
   
})









  // .then((userCredential) => {
  //   // Signed up
  //   const user = userCredential.user;
  //   console.log('user', user);
  //   // ...
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   console.log('errorCode', errorCode);
  //   const errorMessage = error.message;
  //   console.log('errorMessage', errorMessage);

  //   // ..
  // });

import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "./firebase.js";


/* Phone Authentication */

const sendOtp = () => {
  const phoneNumber = document.getElementById("number");
  const appVerifier = window.recaptchaVerifier;

  console.log(`+${phoneNumber.value}`);

  signInWithPhoneNumber(auth, `+${phoneNumber.value}`, appVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      console.log("confirmationResult", confirmationResult);
    })
    .catch((error) => {
      console.log(error);
    });
};

const phoneAuth = document.querySelector("#phoneAuth");
phoneAuth.addEventListener("click", sendOtp);

window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha", {
  size: "normal",
  callback: (response) => {},
  "expired-callback": () => {},
});

const verify = () => {
  let verifyCode = document.getElementById("Otp");
  confirmationResult
    .confirm(verifyCode.value)
    .then((result) => {
      const user = result.user;
      console.log(user);
    })
    .catch((error) => {
      console.log(error);
    });
};

const verifyNumber = document.querySelector("#verifyNumber");
verifyNumber.addEventListener("submit", verify);

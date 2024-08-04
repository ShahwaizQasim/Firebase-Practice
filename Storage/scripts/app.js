import { storage,ref,uploadBytes ,  getDownloadURL  } from "./firebase.js";

const form = document.getElementById("myForm");

form.addEventListener("submit", async(event) => {
    event.preventDefault();
    const userName = document.getElementById("name");
    const userPhoto = document.getElementById("Photo");

    const myFileName = userPhoto.files[0];   // userPhoto ka name
    console.log(myFileName);

    const storageRef = ref(storage, myFileName.name);

    const imageSnapShot = await uploadBytes(storageRef, myFileName);
    console.log("imageSnapShot", imageSnapShot);

    const url = await getDownloadURL(storageRef);
    console.log(url);
    
})
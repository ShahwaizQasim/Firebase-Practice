import {
  storage,
  ref,
  uploadBytes,
  getDownloadURL,
  db,
  addDoc,
  collection,
  onSnapshot,
} from "./firebase.js";

const form = document.getElementById("myForm");
const userPrint = document.querySelector("#userPrint");

const myCollectionRef = collection(db, "users");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const userName = document.getElementById("name");
  const userPhoto = document.getElementById("Photo");

  const myFileName = userPhoto.files[0]; // userPhoto ka name
  console.log(myFileName);

  const storageRef = ref(storage, myFileName.name);

  const imageSnapShot = await uploadBytes(storageRef, myFileName);
  console.log("imageSnapShot", imageSnapShot);

  const url = await getDownloadURL(storageRef);
  console.log(url);

  const myUser = {
    userName: userName.value,
    userNameProfile: url,
  };
  try {
    const docRef = await addDoc(myCollectionRef, myUser);
    console.log("Document Reference", docRef);
  } catch (error) {
    console.log("error", error);
  }
});

onSnapshot(myCollectionRef, (doc) => {
    console.log("doc", doc);
    
    doc.forEach((eachDoc) => {
        const users = eachDoc.data();
        console.log("users", users);

        userPrint.innerHTML += `<div>
        <h4>${users.userName}</h4>
         <img src="${users.userNameProfile}" alt="user picture">
        </div>`
        
    });
 })

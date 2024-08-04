import {
  db,
  collection,
  addDoc,
  // getDocs,
  serverTimestamp,
  doc,
  onSnapshot,
} from "./firebase.js";

const form = document.getElementById("product-Form");
const ProductName = document.getElementById("Product_Name");
const ProductPrice = document.getElementById("Product_Price");
const ProductDetail = document.getElementById("Product_Detail");
const allProducts = document.querySelector(".allProducts");

const myCollectionRef = collection(db, "products");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  console.log("clicked");

  const myProduct = {
    Product_Name: ProductName.value,
    Product_Price: ProductPrice.value,
    Product_Detail: ProductDetail.value,
    createdAt: serverTimestamp(),
  };
  try {
    const docRef = await addDoc(myCollectionRef, myProduct);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
});


/* Data Show screen but however, with page Referesh */

// const querySnapshot = await getDocs(myCollectionRef);
// querySnapshot.forEach((doc) => {
//   const product = doc.data();

//   const date = product.createdAt?.toDate();

//   allProducts.innerHTML += `<div>
//        <h3>${product.Product_Name}</h3>
//        <span>${
//          date
//            ? dateFns.formatDistance(date, new Date(), {
//                addSuffix: true,
//              })
//            : ""
//        }</span>

//        <p>${product.Product_Price}</p>
//        <p>${product.Product_Detail}</p>
//     </div>`;
// });


/* Real-Time Data show screen without page Referesh */ 
onSnapshot(myCollectionRef, (doc) => {
  console.log("onSnapshot", doc);

  allProducts.innerHTML = "";

  doc.forEach((eachDoc) => {
    // console.log('eachDoc',eachDoc);
    const product = eachDoc.data();
    // console.log("product", product);

    // const date = product.createdAt?.toDate();
    // const dateToTime = date
    //   ? dateFns.formatDistance(date, new Date(), { addSuffix: true })     // optional work
    //   : "";

    allProducts.innerHTML += `<div>
            <h3>${product.Product_Name}</h3>
           <p>${product.Product_Price}</p>
           <p>${product.Product_Detail}</p>
        </div>`;
  });
});

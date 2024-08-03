import { db, collection, addDoc, getDocs } from "./firebase.js";

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
  };
  try {
    const docRef = await addDoc(myCollectionRef, myProduct);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
});


const querySnapshot = await getDocs(myCollectionRef);

querySnapshot.forEach((doc) => {
    const product = doc.data();
    console.log(product);

    allProducts.innerHTML += `<div>
       <h3>${product.Product_Name}</h3>
       <p>${product.Product_Price}</p>
       <p>${product.Product_Detail}</p>
    </div>`;
    
});

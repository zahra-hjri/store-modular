// import { allProducts } from "./views/DB/products.js";

let cart = {
  basket: [],
  total: 0,
};

// let basket;

// let containerBasket = document.querySelector(".container-basket");

// let productContainer;
// let productImg;
// let definitionDiv;
// let titleElem;
// let priceElem;
// let btnsContainer;
// let addButton;
// let deleteButton;
// let detaileContainer;
// let numberProduct;
// let inventoryProduct;
// let counterProduct;

// const buyBadge = document.querySelector(".buy-badge");
// const clearCart = document.querySelector(".clear-cart");
// let cartTotalPrice = document.querySelector(".cart-total-price");
// let tatalPriceElem = document.querySelector(".total-price");

// const setLocalStorage = (basket) => {
//   localStorage.setItem("basket", JSON.stringify(basket));
// };

// if (localStorage.getItem("basket") != null) {
//   basket = JSON.parse(localStorage.getItem("basket"));

//   basket.forEach((newProduct) => {
//     productContainer = document.createElement("div");
//     productContainer.classList.add("added-products");
//     containerBasket.append(productContainer);

//     productImg = document.createElement("img");
//     productImg.setAttribute("src", newProduct.img);
//     productContainer.append(productImg);

//     definitionDiv = document.createElement("div");
//     definitionDiv.classList.add("definitions");
//     productContainer.append(definitionDiv);

//     titleElem = document.createElement("h4");
//     titleElem.innerHTML = newProduct.name;
//     definitionDiv.append(titleElem);

//     priceElem = document.createElement("span");
//     priceElem.innerHTML = newProduct.price + "$";
//     definitionDiv.append(priceElem);

//     btnsContainer = document.createElement("div");
//     btnsContainer.classList.add("btns");
//     definitionDiv.append(btnsContainer);

//     addButton = document.createElement("button");
//     addButton.classList.add("addButton");
//     addButton.setAttribute("id", newProduct.id);
//     addButton.innerHTML = "Add";
//     btnsContainer.append(addButton);

/////////update count function/////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////

//     deleteButton = document.createElement("button");
//     deleteButton.classList.add("deleteButton");
//     deleteButton.setAttribute("id", newProduct.id);
//     deleteButton.innerHTML = "Delete";
//     btnsContainer.append(deleteButton);

//     const deleteProduct = (event) => {
//       let deleteBtnProduct = event.target;
//       deleteBtnProduct.parentElement.parentElement.parentElement.remove();

//       if ((newProduct.id = deleteBtnProduct.id)) {
//         let mainProductIndex = basket.indexOf(newProduct);

//         basket.splice(mainProductIndex, 1);
//         setLocalStorage(basket);
//       }
//       buyBadge.innerHTML--;
//       tatalPriceElem.innerHTML = "";
//       calcTotalPrice();
//     };
//     deleteButton.addEventListener("click", deleteProduct);

//     inventoryProduct = document.createElement("p");
//     inventoryProduct.classList.add("inventoryProduct");
//     inventoryProduct.innerHTML = "inventory: " + newProduct.inventory;
//     btnsContainer.append(inventoryProduct);
//   });
// }

////////START CLEAR CART ALL////////////////////////////////////////////////////////////////////

const clearBasket = () => {
  localStorage.removeItem("basket");
  containerBasket.innerHTML = "";
  buyBadge.innerHTML = 0;
};

clearCart.addEventListener("click", clearBasket);

////////END CLEAR CART ALL////////////////////////////////////////////////////////////////////

// START open menu bars////////////////////////////////////////////////
const barsBtn = document.querySelector(".bars-btn");
const nav = document.querySelector(".responsive");
const closeBtn = document.querySelector(".close-btn");
const btnsBag = document.querySelectorAll(".bag");

//// STATR open menu bars  ///////////////////////////////////////////////////////
function addMenu() {
  nav.style.display = "flex";
  nav.style.justifyContent = "center";
  nav.style.flexDirection = "column";
  closeBtn.style.display = "block";
  barsBtn.style.display = "none";
}

barsBtn.addEventListener("click", addMenu);

//// END open menu bars  ///////////////////////////////////////////////////////

// START close menu bars //////////////////////////////////////////////
function closeMenu() {
  nav.style.display = "none";
  barsBtn.style.display = "flex";
  closeBtn.style.display = "none";
}

closeBtn.addEventListener("click", closeMenu);

const badgeUpdate = (basket) => {
  if (localStorage.getItem("basket") != null) {
    basket = JSON.parse(localStorage.getItem("basket"));
  }
  let localstorageProduct = JSON.parse(localStorage.getItem("basket"));

  if (localstorageProduct != null) {
    buyBadge.innerHTML = localstorageProduct.length;
  } else {
    buyBadge.innerHTML == "0";
  }
};

// function calcTotalPrice() {
//   let sum = 0;
//   if (localStorage.getItem("basket") != null) {
//     basket = JSON.parse(localStorage.getItem("basket"));

//     basket.forEach(function (newProduct) {
//       sum += newProduct.count * newProduct.price;
//     });
//     tatalPriceElem.innerHTML += sum + "$";
//   }
// }

// function updateProductCount(productId, newCount) {
//   console.log(productId, newCount);
// }

window.addEventListener("load", badgeUpdate);
// window.addEventListener("load", calcTotalPrice);

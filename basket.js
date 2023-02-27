// import { allProducts } from "./views/DB/products.js";

let cart = {
  basket: [],
  total: 0,
};

const renderCartItems = () => {
  const cartDiv = document.querySelector(".cart__item");
  cartDiv.innerHTML = "";

  const totalPriceEl = document.querySelector(".cart__total-price");

  let totalPrice = 0;
  if (cart.basket.length === 0) {
    cartDiv.innerHTML = "Not Existed any Product yet ... :(";
  }

  cart.basket.forEach((item) => {
    totalPrice += item.total;
    cartDiv.innerHTML += `
    <div>
        <button class="btn-delete">Delete</button>
    </div>
    <div>
        <button class="btn-add">add product</button>
    </div>
    <div id="qtyElem">
        <span class="qty">${item.count}</span>
    </div>
    <div>
        <span class="inventory">${item.inventory}</span>
    </div>
    <div class="cart__item-title">
        <h4>${item.name}</h4>
    </div>
    `;
  });

  totalPriceEl.innerHTML = `Total Price : ${totalPrice} $`;
};
renderCartItems();
// cartDiv.innerHTML = `
// <div>
//     <button class="btn-delete">Delete</button>
// </div>
// <div>
//     <button class="btn-add">add product</button>
// </div>
// <div id="qtyElem">
//     <span class="qty">2</span>
// </div>
// <div>
//     <span class="inventory">10</span>
// </div>
// <div class="cart__item-title">
//     <h4>tshirt</h4>
// </div>
// `;
// };

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

// const clearBasket = () => {
//   localStorage.removeItem("basket");
//   containerBasket.innerHTML = "";
//   buyBadge.innerHTML = 0;
// };

// clearCart.addEventListener("click", clearBasket);

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

// const badgeUpdate = (basket) => {
//   if (localStorage.getItem("basket") != null) {
//     basket = JSON.parse(localStorage.getItem("basket"));
//   }
//   let localstorageProduct = JSON.parse(localStorage.getItem("basket"));

//   if (localstorageProduct != null) {
//     buyBadge.innerHTML = localstorageProduct.length;
//   } else {
//     buyBadge.innerHTML == "0";
//   }
// };

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

// window.addEventListener("load", badgeUpdate);
// window.addEventListener("load", calcTotalPrice);

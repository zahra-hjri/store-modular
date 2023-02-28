// import { allProducts } from "./views/DB/products.js";

// let cart = {
//   basket: [],
//   total: 0,
// };

let cart = localStorage.getItem("cart");
if (cart) {
  cart = JSON.parse(cart);
} else {
  cart = [];
}

const renderCartItems = () => {
  let cartDiv = document.querySelector(".cart__item");
  console.log(cartDiv.parentElement);
  cartDiv.innerHTML = "";

  const totalPriceEl = document.querySelector(".cart__total-price");

  let totalPrice = 0;
  if (cart.length === 0) {
    cartDiv.innerHTML = "Not Existed any Product yet ... :(";
  }

  cart.forEach((item) => {
    totalPrice += item.total;
    cartDiv.innerHTML += `
    <tr>
    <td>${item.name}</td>
    <td>${item.price} $</td>
    <td>${item.inventory}</td>

    <td class="qty">
        <button class="plus">
            <i class="fa fa-plus"></i>
        </button>
        <span>3</span>
        <button class="minus">
            <i class="fa fa-minus"></i>
        </button>
    </td>
    <td>${item.img}</td>
    <td><i class="fa fa-close"></i></td>
</tr>
    `;
  });

  totalPriceEl.innerHTML = `Total Price : ${totalPrice} $`;
};
renderCartItems();

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
const clearCart = document.querySelector(".btnClearAll");
let cartDiv = document.querySelector(".cart__item");

const clearBasket = () => {
  localStorage.removeItem("cart");
  cartDiv.innerHTML = "";
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

const buyBadge = document.querySelector(".buy-badge");
const tatalPriceElem = document.querySelector(".cart__total-price");
const badgeUpdate = (cart) => {
  if (localStorage.getItem("cart") != null) {
    cart = JSON.parse(localStorage.getItem("cart"));
  }
  let localstorageProduct = JSON.parse(localStorage.getItem("cart"));

  if (localstorageProduct != null) {
    buyBadge.innerHTML = localstorageProduct.length;
  } else {
    buyBadge.innerHTML == "0";
  }
};

function calcTotalPrice() {
  let sum = 0;
  if (localStorage.getItem("cart") != null) {
    cart = JSON.parse(localStorage.getItem("cart"));

    cart.forEach(function (item) {
      sum += item.qty * item.price;
    });
    tatalPriceElem.innerHTML += sum + "$";
  }
}

// function updateProductCount(productId, newCount) {
//   console.log(productId, newCount);
// }

window.addEventListener("load", badgeUpdate);
window.addEventListener("load", calcTotalPrice);

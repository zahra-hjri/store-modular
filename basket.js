let cart = localStorage.getItem("cart");
if (cart) {
  cart = JSON.parse(cart);
} else {
  cart = [];
}

///////////Start Render Products Function////////////////////////////////////////////////////////////////////
const renderCartItems = () => {
  let cartDiv = document.querySelector(".cart__item");
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
    <td class="inventory">${item.inventory}</td>

    <td class="qty">
        <button class="plus">
            <i class="fa fa-plus" id="${item.id}"></i>
        </button>
        <span class="qtyElem">${item.qty}</span>
        <button class="minus">
            <i class="fa fa-minus"></i>
        </button>
    </td>
    <td>
    <img class="product-img" src="${item.img}">
    </td>
    <td><i class="fa fa-close close-icon" id="${item.id}"></i></td>
</tr>
    `;

    ////////////////////////////////////////////////////////////////////////////////////////////////////////
    let plusBtns = document.querySelectorAll(".plus");
    let qtyElem = document.querySelector(".qtyElem");
    let inventory = document.querySelector(".inventory");

    const addQty = (event) => {
      if (event.target.id == item.id) {
        if (item.qty < item.inventory) {
          item.qty++;
          // item.inventory--;
          qtyElem.innerHTML = item.qty;
          inventory.innerHTML = item.inventory;
          calcTotalPrice();
        } else {
          return item.qty;
        }
      }
    };

    plusBtns.forEach((plusBtn) => {
      plusBtn.addEventListener("click", addQty);
    });

    //////////////////////////////////////////////////////////////////////////////////////////////////////////

    ///////////Start Delete Product Function////////////////////////////////////////////////////////////////////

    const closeIcon = document.querySelectorAll(".close-icon");

    const deleteProduct = (event) => {
      let closeIcon = event.target;
      closeIcon.parentElement.parentElement.remove();

      let itemIndex = cart.findIndex((item) => {
        return item.id == closeIcon.id;
      });

      cart.splice(itemIndex, 1);
      setLocalStorage(cart);
      // totalPriceElem.innerHTML += "";
      calcTotalPrice();
      buyBadge.innerHTML--;
    };
    closeIcon.forEach((close) => {
      close.addEventListener("click", deleteProduct);
    });
    ///////////End Delete Product Function////////////////////////////////////////////////////////////////////
  });
};
renderCartItems();
///////////End Render Products Function////////////////////////////////////////////////////////////////////

////////START CLEAR CART ALL////////////////////////////////////////////////////////////////////
const clearCart = document.querySelector(".btnClearAll");
// let cartDiv = document.querySelector(".cart__item");

const clearBasket = () => {
  localStorage.removeItem("cart");
  cartDiv.innerHTML = "Not Existed any Product yet ... :(";
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
////End close menu bars/////////////////////////////////////////////////////////////////////////

/*   Update bage basket by function  */
const buyBadge = document.querySelector(".buy-badge");
const totalPriceElem = document.querySelector(".cart__total-price");
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
    // totalPriceElem.innerHTML = sum + "$";
    totalPriceElem.innerHTML = `Total Price : ${sum} $`;
  }
}

let setLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

// function updateProductCount(productId, newCount) {
//   console.log(productId, newCount);
// }

window.addEventListener("load", badgeUpdate);
window.addEventListener("load", calcTotalPrice);

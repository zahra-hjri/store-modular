let cart = localStorage.getItem("cart");
if (cart) {
  cart = JSON.parse(cart);
} else {
  cart = [];
}

/*-------------------------Start Render Products Function ------------------------- */
const renderCartItems = () => {
  let cartDiv = document.querySelector(".cart__item");
  let cartTotalPrice = document.querySelector(".cart__total-price");
  cartDiv.innerHTML = "";

  let totalPrice = 0;
  if (cart.length === 0) {
    cartDiv.innerHTML = "Not Exist Any Product Yet";
    cartDiv.style.fontSize = "1.7rem";
    cartTotalPrice.innerHTML = `Total Price : 0$`;
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
        <input class="qtyElem" id="${item.id}" value="${item.qty}"></input>
        <button class="minus">
            <i class="fa fa-minus" id="${item.id}"></i>
        </button>
    </td>
    <td>
    <img class="product-img" src="${item.img}">
    </td>
    <td><i class="fa fa-trash close-icon" id="${item.id}"></i></td>
</tr>
    `;

    /*-----------------------add qty function-------------------------- */
    let plusBtns = document.querySelectorAll(".plus");
    let qtyElems = document.querySelectorAll(".qtyElem");
    let inventory = document.querySelector(".inventory");

    const addQty = (event) => {
      let plusBtn = event.target;
      let quantity;
      cart.map((item) => {
        if (item.id == plusBtn.id) {
          if (item.qty < item.inventory) {
            quantity = item.qty += 1;
            console.log(quantity);
          } else {
            return item.inventory;
          }
          qtyElems.forEach((qtyElem) => {
            if (item.id == qtyElem.id) {
              qtyElem.value = quantity;
            }
          });
        }
      });
      setLocalStorage(cart);
      calcTotalPrice();
    };

    plusBtns.forEach((plusBtn) => {
      plusBtn.addEventListener("click", addQty);
    });

    /*-----------------------add qty function-------------------------- */
    let minusBtns = document.querySelectorAll(".minus");

    const decreaseQty = (event) => {
      let minusBtn = event.target;
      let quantity;
      cart.map((item) => {
        if (item.id == minusBtn.id) {
          if (item.qty > 0) {
            quantity = item.qty -= 1;
          } else if (item.qty == 0) {
            return item.inventory;
          }
          qtyElems.forEach((qtyElem) => {
            if (item.id == qtyElem.id) {
              qtyElem.value = quantity;
            }
          });
        }
      });
      setLocalStorage(cart);
      calcTotalPrice();
    };

    minusBtns.forEach((minusBtn) => {
      minusBtn.addEventListener("click", decreaseQty);
    });
    /*-----------------------End qty function-------------------------- */

    /*------------------Start Delete Product Function---------------------*/

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
    /*------------------End Delete Product Function---------------------*/
  });
};
renderCartItems();
/*------------------End Render Products Function---------------------*/

/*------------------START CLEAR CART ALL---------------------*/
const clearCart = document.querySelector(".btnClearAll");
let cartDiv = document.querySelector(".cart__item");

const clearBasket = () => {
  localStorage.removeItem("cart");
  cartDiv.innerHTML = "Not Exist Any Product Yet";
  cartDiv.style.fontSize = "1.7rem";
  totalPriceElem.innerHTML = `Total Price : 0$`;
  buyBadge.innerHTML = 0;
};

clearCart.addEventListener("click", clearBasket);

/*------------------END CLEAR CART ALL---------------------*/

/*------------------START open menu bars---------------------*/
const barsBtn = document.querySelector(".bars-btn");
const nav = document.querySelector(".responsive");
const closeBtn = document.querySelector(".close-btn");
const btnsBag = document.querySelectorAll(".bag");

/*------------------STATR open menu bars  --------------------*/
function addMenu() {
  nav.style.display = "flex";
  nav.style.justifyContent = "center";
  nav.style.flexDirection = "column";
  closeBtn.style.display = "block";
  barsBtn.style.display = "none";
}

barsBtn.addEventListener("click", addMenu);

/*------------------END open menu bars  --------------------*/

/*------------------START close menu bars --------------------*/
function closeMenu() {
  nav.style.display = "none";
  barsBtn.style.display = "flex";
  closeBtn.style.display = "none";
}

closeBtn.addEventListener("click", closeMenu);
/*------------------End close menu bars--------------------*/

/* -----------------  Update bage basket by function -------------------- */
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

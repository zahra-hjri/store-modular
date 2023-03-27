import { allProducts } from "./views/DB/products.js";

let productDiv = document.querySelector(".wrapper-products");

const renderProducts = () => {
  allProducts.forEach((item) => {
    productDiv.innerHTML += `
    <section class="card">
        <div class="product-image">
            <img src="${item.img}">
                <section class="qty" id="${item.id}" style="display: none;">
                    <button class="plus">
                        <i class="fa fa-plus" id="${item.id}"></i>
                    </button>
                    <input class="qtyElem" id="${item.id}"></input>
                    <button class="minus">
                        <i class="fa fa-minus" id="${item.id}"></i>
                    </button>
                </section>
        </div>
       
        <div class="product-icons">
            <div class="favorite" id="${item.id}">
                <img src="./images/favorite.svg" alt="favorite" data-id="${item.id}">
            </div>
            <div class="bag" id="${item.id}">
                <img src="./images/Bag.svg" alt="bag" data-id="${item.id}">
            </div>

            <div id="photos">
                <img src="./images/photos.svg" alt="photos">
            </div>
        </div>

   
        <div class="details">
            <div class="rate">
                <span>${item.category}</span>
                <div class="stars">
                    <img src="./images/StarFill.svg" alt="star">
                    <img src="./images/StarFill.svg" alt="star">
                    <img src="./images/StarFill.svg" alt="star">
                    <img src="./images/StarFill.svg" alt="star">
                    <img src="./images/Star.svg" alt="star">
                </div>
            </div>
            <h3 class="name-product">${item.name}</h3>
            <div class="off-price">
                <strong class="price">${item.price}</strong>
                <span class="off">${item.offPrice}</span>
            </div>
        </div>
    </section>
    `;
  });
};

/*-----------------------START open menu bars-------------------------- */
const barsBtn = document.querySelector(".bars-btn");
const nav = document.querySelector(".responsive");
const closeBtn = document.querySelector(".close-btn");
const btnsBag = document.querySelectorAll(".bag");
const btnsFavorite = document.querySelectorAll(".favorite");
const buyBadge = document.querySelector(".buy-badge");
const qtyDivs = document.querySelectorAll(".qty");
const qtyElems = document.querySelectorAll(".qtyElem");
let plusBtns = document.querySelectorAll(".plus");
let minusBtns = document.querySelectorAll(".minus");

/*----------------------- STATR open menu bars -------------------------- */
function addMenu() {
  nav.style.display = "flex";
  nav.style.justifyContent = "center";
  nav.style.flexDirection = "column";
  closeBtn.style.display = "block";
  barsBtn.style.display = "none";
}

barsBtn.addEventListener("click", addMenu);

/*----------------------- END open menu bars -------------------------- */

/*-----------------------START close menu bars -------------------------- */
function closeMenu() {
  nav.style.display = "none";
  barsBtn.style.display = "flex";
  closeBtn.style.display = "none";
}

closeBtn.addEventListener("click", closeMenu);

/*-----------------------END close menu bars-------------------------- */

window.addEventListener("load", renderProducts);

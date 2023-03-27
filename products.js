import { allProducts } from "./views/DB/products.js";

let productDiv = document.querySelector(".wrapper-products");

const renderProducts = () => {
  allProducts.forEach((item) => {
    productDiv.innerHTML += `
    <section class="card">
    <div>
    <img class="product-image" src="${item.img}">
       
        <div class="product-icons">
            <div class="favorite" id="3">
                <img src="./images/favorite.svg" alt="favorite" data-id="3">
            </div>
            <div class="bag" id="3">
                <img src="./images/Bag.svg" alt="bag" data-id="3">
            </div>

            <div id="photos">
                <img src="./images/photos.svg" alt="photos">
            </div>
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

window.addEventListener("load", renderProducts);
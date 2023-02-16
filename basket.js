let basket;

let containerBasket = document.querySelector(".container-basket");
let productContainer;
let productImg;
let definitionDiv;
let titleElem;
let priceElem;
let btnsContainer;
let addButton;
let deleteButton;
let detaileContainer;
let numberProduct;
let inventoryProduct;

if (localStorage.getItem("basket") != null) {
  basket = JSON.parse(localStorage.getItem("basket"));

  basket.forEach((newProduct) => {
    productContainer = document.createElement("div");
    productContainer.classList.add("added-products");
    containerBasket.append(productContainer);

    productImg = document.createElement("img");
    productImg.setAttribute("src", newProduct.img);
    productContainer.append(productImg);

    definitionDiv = document.createElement("div");
    definitionDiv.classList.add("definitions");
    productContainer.append(definitionDiv);

    titleElem = document.createElement("h4");
    titleElem.innerHTML = newProduct.name;
    definitionDiv.append(titleElem);

    priceElem = document.createElement("span");
    priceElem.innerHTML = newProduct.price + "$";
    definitionDiv.append(priceElem);

    btnsContainer = document.createElement("div");
    btnsContainer.classList.add("btns");
    definitionDiv.append(btnsContainer);

    addButton = document.createElement("input");
    addButton.setAttribute("type", "number");
    addButton.classList.add("addButton");
    btnsContainer.append(addButton);
    addButton.value = "1";

    deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");
    deleteButton.innerHTML = "Delete";
    btnsContainer.append(deleteButton);

    const deleteProduct = (event) => {
      event.target.parentElement.parentElement.parentElement.remove();
    };
    deleteButton.addEventListener("click", deleteProduct);

    inventoryProduct = document.createElement("p");
    inventoryProduct.classList.add("inventoryProduct");
    inventoryProduct.innerHTML = "inventory: " + newProduct.inventory;
    btnsContainer.append(inventoryProduct);
  });
}

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
  const buyBadge = document.querySelector(".buy-badge");
  let localstorageProduct = JSON.parse(localStorage.getItem("basket"));

  if (localstorageProduct != null) {
    buyBadge.innerHTML = localstorageProduct.length;
  } else {
    buyBadge.innerHTML == "0";
  }
};

window.addEventListener("load", badgeUpdate);

let basket = [];
let containerBasket = document.querySelector(".container-basket");
if (localStorage.getItem("basket") != null) {
  basket = JSON.parse(localStorage.getItem("basket"));
}
let productContainer;
let productImg;
let definitionDiv;
let titleElem;
let priceElem;
let btnsContainer;
let addButton;
let deleteButton;
let numberProduct;

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

  addButton = document.createElement("button");
  addButton.classList.add("addButton");
  addButton.innerHTML = "Add";
  btnsContainer.append(addButton);

  deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteButton");
  deleteButton.innerHTML = "Delete";
  btnsContainer.append(deleteButton);

  numberProduct = document.createElement("p");
  numberProduct.classList.add("numberProduct");
  numberProduct.innerHTML = "Number:";
  btnsContainer.append(numberProduct);
});

// basket.forEach((newProduct) => {
//   productContainer = document.createElement("div");
//   productContainer.classList.add("added-products");

//   productImg = document.createElement("img");
//   productImg.setAttribute("src", newProduct.img);

//   definitionDiv = document.createElement("div");
//   definitionDiv.classList.add("definitions");

//   titleElem = document.createElement("h4");
//   titleElem.innerHTML = newProduct.name;

//   priceElem = document.createElement("span");
//   priceElem.innerHTML = newProduct.price;

//   btnsContainer = document.createElement("div");
//   btnsContainer.classList.add("btns");

//   addButton = document.createElement("button");
//   addButton.classList.add("add");
//   addButton.innerHTML = "Add";
//   deleteButton = document.createElement("button");
//   deleteButton.classList.add("delete");
//   deleteButton.innerHTML = "Delete";

//   number = document.createElement("p");
//   number.classList.add(number);

//   productContainer.append(productImg);
//   productContainer.append(definitionDiv);
//   definitionDiv.append(titleElem);
//   definitionDiv.append(priceElem);
//   definitionDiv.append(btnsContainer);
//   btnsContainer.append(addButton);
//   btnsContainer.append(deleteButton);
//   btnsContainer.append(number);
// });

// window.onload(addToCart());
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

import { header } from "./views/header/header.js";
import { options } from "./views/options/options.js";
import { collection } from "./views/collection/collection.js";
import { babyCollection } from "./views/babyCollection/babyCollection.js";
import { arrivals } from "./views/newArrivals/arrivals.js";
import { brands } from "./views/brands/brands.js";
import { trending } from "./views/trending/trending.js";
import { reviews } from "./views/reviews/reviews.js";
import { newsLetter } from "./views/newsLetter/newsLetter.js";
import { footer } from "./views/footer/footer.js";
import { allProducts } from "./views/DB/products.js";

export const root = document.querySelector(".root");

root.innerHTML += header;
root.innerHTML += options;
root.innerHTML += collection;
root.innerHTML += babyCollection;
root.innerHTML += arrivals;
root.innerHTML += brands;
root.innerHTML += trending;
root.innerHTML += reviews;
root.innerHTML += newsLetter;
root.innerHTML += footer;

// START open menu bars////////////////////////////////////////////////
const barsBtn = document.querySelector(".bars-btn");
const nav = document.querySelector(".responsive");
const closeBtn = document.querySelector(".close-btn");
const btnsBag = document.querySelectorAll(".bag");
const buyBadge = document.querySelector(".buy-badge");

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

/////END close menu bars///////////////////////////////////////////////////////////////////

// Slider//////////////////////////////////////////////////////////////////////////
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  // Navigation arrows
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 4,
    },
    1400: {
      slidesPerView: 4,
    },
  },
});

const swiper2 = new Swiper(".swiperReview", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  // Navigation arrows
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  breakpoints: { 300: { slidesPerView: 1 } },
});

//// END Slider/////////////////////////////////////////////////////////

////// START addToBasket////////////////////////////////////////
let basket = [];

const addToBasket = (event) => {
  if (localStorage.getItem("basket") != null) {
    basket = JSON.parse(localStorage.getItem("basket"));
  }
  let mainId = event.target.getAttribute("id");
  allProducts.forEach((product) => {
    if (product.id == mainId) {
      basket.push(product);
    }
  });

  setLocalStorage(basket);
  buyBadge.innerHTML++;
};

btnsBag.forEach((btnBag) => {
  btnBag.addEventListener("click", addToBasket);
});

const setLocalStorage = (basket) => {
  localStorage.setItem("basket", JSON.stringify(basket));
};

//////START badgeUpdate FUNCTION ////////////////////////////////////////////////////////////////////
const badgeUpdate = (basket) => {
  let localstorageProduct = JSON.parse(localStorage.getItem("basket"));

  if (localstorageProduct.length === 0) {
    buyBadge.innerHTML = 0;
  } else {
    buyBadge.innerHTML = localstorageProduct.length;
  }
};

window.addEventListener("load", badgeUpdate);

////// END badgeUpdate FUNCTION////////////////////////////////////////

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

/*----------------------- Slider-------------------------- */
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

/*----------------------- END Slider-------------------------- */

/*-----------------------START add To cart-------------------------- */
let cart = localStorage.getItem("cart");
if (cart) {
  cart = JSON.parse(cart);
} else {
  cart = [];
}

const qtyUpdate = () => {
  cart.map((item) => {
    qtyDivs.forEach((qty) => {
      if (item.id == qty.id) {
        qty.style.display = "flex";
        qtyElems.forEach((qtyElem) => {
          if (item.id == qtyElem.id) {
            qtyElem.value = item.qty;
          }
        });
        btnsBag.forEach((btnBag) => {
          if (item.id == btnBag.id) {
            btnBag.style.background = "#FBD103";
          }
        });
      }
    });
  });
};

const plusProduct = (e) => {
  cart.map((item) => {
    if (item.id == e.target.id) {
      if (item.qty < item.inventory) {
        item.qty++;
      } else {
        return item.inventory;
      }

      qtyElems.forEach((qtyElem) => {
        if (item.id == qtyElem.id) {
          qtyElem.value = item.qty;
        }
      });
    }
  });
  setLocalStorage(cart);
};

const minusProduct = (e) => {
  cart.map((item) => {
    if (item.id == e.target.id) {
      if (item.qty == 1) {
        let mainIndex = cart.indexOf(item);
        cart.splice(mainIndex, 1);
        buyBadge.innerHTML--;
        btnsBag.forEach((btnBag) => {
          if (item.id == btnBag.id) {
            btnBag.style.background = "#fff";
          }
        });
        qtyDivs.forEach((qty) => {
          if (item.id == qty.id) {
            qty.style.display = "none";
          }
        });
      }
      item.qty--;

      qtyElems.forEach((qtyElem) => {
        if (item.id == qtyElem.id) {
          qtyElem.value = item.qty;
        }
      });
    }
  });
  setLocalStorage(cart);
};

const addToCart = (e) => {
  const clickedBtnId = e.target.dataset.id;
  const product = allProducts.find((item) => item.id == clickedBtnId);

  const isInCart = cart.find((item) => item.id == clickedBtnId);
  if (isInCart) {
    cart.map((item) => {
      if (item.id == isInCart.id) {
        if (item.qty < item.inventory) {
          item.qty++;
        }
        if (item.id == e.target.dataset.id) {
          qtyElems.forEach((qtyElem) => {
            qtyElem.value = item.qty;
          });
        }
      } else {
        return item;
      }
    });
  } else {
    const newItem = { ...product, qty: 1 };
    cart.push(newItem);

    cart.map((item) => {
      if (item.id == product.id) {
        qtyDivs.forEach((qty) => {
          if (item.id == qty.id) {
            qty.style.display = "flex";
            qtyElems.forEach((qtyElem) => {
              if (item.id == qtyElem.id) {
                qtyElem.value = item.qty;
              }
            });
            btnsBag.forEach((btnBag) => {
              if (item.id == btnBag.id) {
                btnBag.style.background = "#FBD103";
              }
            });
          }
        });
      }
    });
  }
  setLocalStorage(cart);
  badgeUpdate(cart);
};

btnsBag.forEach((btnBag) => {
  btnBag.addEventListener("click", addToCart);
});
plusBtns.forEach((plusbtn) => {
  plusbtn.addEventListener("click", plusProduct);
});

minusBtns.forEach((minusbtn) => {
  minusbtn.addEventListener("click", minusProduct);
});

let setLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

/*-----------------------START badgeUpdate FUNCTION-------------------------- */
const badgeUpdate = (cart) => {
  let localstorageProduct = JSON.parse(localStorage.getItem("cart"));

  if (localstorageProduct != null) {
    buyBadge.innerHTML = localstorageProduct.length;
  } else {
    buyBadge.innerHTML == "0";
  }
};

window.addEventListener("load", badgeUpdate);
window.addEventListener("load", qtyUpdate);

/*-----------------------END badgeUpdate FUNCTION-------------------------- */

/*-----------------------START add to favorite FUNCTION-------------------------- */

let favoritePack = localStorage.getItem("favoritePack");
if (favoritePack) {
  favoritePack = JSON.parse(favoritePack);
} else {
  favoritePack = [];
}

let buyBadgeFavorite = document.querySelector("#buy-badge-favorite");
let favoriteDivs = document.querySelectorAll(".favorite");
const addToFavorite = (e) => {
  const clickedBtnFavoriteId = e.target.dataset.id;
  const productFavorite = allProducts.find(
    (item) => item.id == clickedBtnFavoriteId
  );
  const isInFavorite = favoritePack.find(
    (item) => item.id == clickedBtnFavoriteId
  );

  if (isInFavorite) {
    favoritePack.map((item) => {
      if (item.id == isInFavorite.id) {
        btnsFavorite.forEach((btnFavorite) => {
          if (btnFavorite.id == item.id) {
            let favoriteIndex = favoritePack.findIndex((item) => {
              return item.id == btnFavorite.id;
            });

            favoritePack.splice(favoriteIndex, 1);
            e.target.parentElement.style.backgroundColor = "white";
            buyBadgeFavorite.innerHTML--;
            setLocalStorage(favoritePack);
          }
        });
      }
    });
  } else {
    favoritePack.push(productFavorite);
    e.target.parentElement.style.backgroundColor = "red";
    buyBadgeFavorite.innerHTML++;
  }

  setLocalStorageFavorite(favoritePack);
};

btnsFavorite.forEach((btnFavorite) => {
  btnFavorite.addEventListener("click", addToFavorite);
});

/*-----------------------START badge favorite update FUNCTION-------------------------- */
const badgeFavoriteUpdate = (favoritePack) => {
  let localstorageFavoriteProduct = JSON.parse(
    localStorage.getItem("favoritePack")
  );
  console.log(localstorageFavoriteProduct.length);

  if (localstorageFavoriteProduct != null) {
    buyBadgeFavorite.innerHTML = localstorageFavoriteProduct.length;
  } else {
    buyBadgeFavorite.innerHTML = "0";
  }
};

window.addEventListener("load", badgeFavoriteUpdate);
/*-----------------------End badge favorite update FUNCTION-------------------------- */

const favoriteDivColorUpdate = () => {
  favoritePack.map((item) => {
    favoriteDivs.forEach((favoriteDiv) => {
      if (favoriteDiv.id == item.id) {
        favoriteDiv.style.backgroundColor = "red";
      }
    });
  });
};

window.addEventListener("load", favoriteDivColorUpdate);

/*-----------------------START set localstorage favorite FUNCTION-------------------------- */
let setLocalStorageFavorite = (favoritePack) => {
  localStorage.setItem("favoritePack", JSON.stringify(favoritePack));
};

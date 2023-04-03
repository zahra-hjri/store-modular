import { allProducts } from "./views/DB/products.js";

let productDiv = document.querySelector(".wrapper-products");

const renderProducts = () => {
  allProducts.forEach((item) => {
    productDiv.innerHTML += `
    <section class="card">
        <div class="product-image">
            <img src="${item.img}" id="product-img">
                <section class="qty-product" id="${item.id}" style="display: none;">
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

  /*--------------------Definition variables & Consts ----------------------------*/
  const btnsBag = document.querySelectorAll(".bag");
  const btnsFavorite = document.querySelectorAll(".favorite");
  const buyBadge = document.querySelector(".buy-badge");
  const qtyDivs = document.querySelectorAll(".qty-product");
  const qtyElems = document.querySelectorAll(".qtyElem");
  let plusBtns = document.querySelectorAll(".plus");
  let minusBtns = document.querySelectorAll(".minus");
  let selectLevelBox = document.querySelector(".selectLevel");

  const selectLevel = () => {
    let mainLevel = selectLevelBox.value;

    /*--------------------filter hight price ----------------------------*/

    if (mainLevel == "hight price") {
      productDiv.innerHTML = " ";
      let hightlevel = allProducts.filter((item) => {
        return item.price > 350;
      });

      hightlevel.forEach((product) => {
        productDiv.innerHTML += `
        <section class="card">
            <div class="product-image">
                <img src="${product.img}" id="product-img">
                    <section class="qty-product" id="${product.id}" style="display: none;">
                        <button class="plus">
                            <i class="fa fa-plus" id="${product.id}"></i>
                        </button>
                        <input class="qtyElem" id="${product.id}"></input>
                        <button class="minus">
                            <i class="fa fa-minus" id="${product.id}"></i>
                        </button>
                    </section>
                
            </div>
           
            <div class="product-icons">
                <div class="favorite" id="${product.id}">
                    <img src="./images/favorite.svg" alt="favorite" data-id="${product.id}">
                </div>
                <div class="bag" id="${product.id}">
                    <img src="./images/Bag.svg" alt="bag" data-id="${product.id}">
                </div>
    
                <div id="photos">
                    <img src="./images/photos.svg" alt="photos">
                </div>
            </div>
    
       
            <div class="details">
                <div class="rate">
                    <span>${product.category}</span>
                    <div class="stars">
                        <img src="./images/StarFill.svg" alt="star">
                        <img src="./images/StarFill.svg" alt="star">
                        <img src="./images/StarFill.svg" alt="star">
                        <img src="./images/StarFill.svg" alt="star">
                        <img src="./images/Star.svg" alt="star">
                    </div>
                </div>
                <h3 class="name-product">${product.name}</h3>
                <div class="off-price">
                    <strong class="price">${product.price}</strong>
                    <span class="off">${product.offPrice}</span>
                </div>
            </div>
        </section>
        `;
      });
    }

    /*--------------------filter low price ----------------------------*/
    if (mainLevel == "low price") {
      productDiv.innerHTML = " ";
      let lowlevel = allProducts.filter((item) => {
        return item.price < 220;
      });

      lowlevel.forEach((product) => {
        productDiv.innerHTML += `
      <section class="card">
          <div class="product-image">
              <img src="${product.img}" id="product-img">
                  <section class="qty-product" id="${product.id}" style="display: none;">
                      <button class="plus">
                          <i class="fa fa-plus" id="${product.id}"></i>
                      </button>
                      <input class="qtyElem" id="${product.id}"></input>
                      <button class="minus">
                          <i class="fa fa-minus" id="${product.id}"></i>
                      </button>
                  </section>
              
          </div>
         
          <div class="product-icons">
              <div class="favorite" id="${product.id}">
                  <img src="./images/favorite.svg" alt="favorite" data-id="${product.id}">
              </div>
              <div class="bag" id="${product.id}">
                  <img src="./images/Bag.svg" alt="bag" data-id="${product.id}">
              </div>
  
              <div id="photos">
                  <img src="./images/photos.svg" alt="photos">
              </div>
          </div>
  
     
          <div class="details">
              <div class="rate">
                  <span>${product.category}</span>
                  <div class="stars">
                      <img src="./images/StarFill.svg" alt="star">
                      <img src="./images/StarFill.svg" alt="star">
                      <img src="./images/StarFill.svg" alt="star">
                      <img src="./images/StarFill.svg" alt="star">
                      <img src="./images/Star.svg" alt="star">
                  </div>
              </div>
              <h3 class="name-product">${product.name}</h3>
              <div class="off-price">
                  <strong class="price">${product.price}</strong>
                  <span class="off">${product.offPrice}</span>
              </div>
          </div>
      </section>`;
      });
    }

    /*--------------------filter middle price ----------------------------*/
    if (mainLevel == "middle price") {
      productDiv.innerHTML = " ";
      let middlelevel = allProducts.filter((item) => {
        return (item.price < 350) & (200 < item.price);
      });

      middlelevel.forEach((product) => {
        productDiv.innerHTML += `
      <section class="card">
          <div class="product-image">
              <img src="${product.img}" id="product-img">
                  <section class="qty-product" id="${product.id}" style="display: none;">
                      <button class="plus">
                          <i class="fa fa-plus" id="${product.id}"></i>
                      </button>
                      <input class="qtyElem" id="${product.id}"></input>
                      <button class="minus">
                          <i class="fa fa-minus" id="${product.id}"></i>
                      </button>
                  </section>
              
          </div>
         
          <div class="product-icons">
              <div class="favorite" id="${product.id}">
                  <img src="./images/favorite.svg" alt="favorite" data-id="${product.id}">
              </div>
              <div class="bag" id="${product.id}">
                  <img src="./images/Bag.svg" alt="bag" data-id="${product.id}">
              </div>
  
              <div id="photos">
                  <img src="./images/photos.svg" alt="photos">
              </div>
          </div>
  
     
          <div class="details">
              <div class="rate">
                  <span>${product.category}</span>
                  <div class="stars">
                      <img src="./images/StarFill.svg" alt="star">
                      <img src="./images/StarFill.svg" alt="star">
                      <img src="./images/StarFill.svg" alt="star">
                      <img src="./images/StarFill.svg" alt="star">
                      <img src="./images/Star.svg" alt="star">
                  </div>
              </div>
              <h3 class="name-product">${product.name}</h3>
              <div class="off-price">
                  <strong class="price">${product.price}</strong>
                  <span class="off">${product.offPrice}</span>
              </div>
          </div>
      </section>`;
      });
    }
  };

  selectLevelBox.addEventListener("change", selectLevel);

  /*--------------------Check Lacalstorage ----------------------------*/

  let cart = localStorage.getItem("cart");
  if (cart) {
    cart = JSON.parse(cart);
  } else {
    cart = [];
  }

  /*--------------------Start qtyUpdate Function ----------------------------*/

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

  /*--------------------Start plusProduct Function ----------------------------*/

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

  /*--------------------Start minusProduct Function ----------------------------*/
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
  /*--------------------Start add to card Function ----------------------------*/

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
    qtyUpdate(cart);
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

  window.addEventListener("load", qtyUpdate(cart));
  window.addEventListener("load", badgeUpdate(cart));

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

    if (localstorageFavoriteProduct != null) {
      buyBadgeFavorite.innerHTML = localstorageFavoriteProduct.length;
    } else {
      buyBadgeFavorite.innerHTML = "0";
    }
  };

  window.addEventListener("load", badgeFavoriteUpdate(cart));
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

  window.addEventListener("load", favoriteDivColorUpdate(cart));

  /*-----------------------START set localstorage favorite FUNCTION-------------------------- */
  let setLocalStorageFavorite = (favoritePack) => {
    localStorage.setItem("favoritePack", JSON.stringify(favoritePack));
  };
};

/*-----------------------START open menu bars-------------------------- */
const barsBtn = document.querySelector(".bars-btn");
const nav = document.querySelector(".responsive");
const closeBtn = document.querySelector(".close-btn");

/*----------------------- STATR open menu bars -------------------------- */
function addMenu() {
  nav.style.display = "flex";
  nav.style.justifyContent = "center";
  nav.style.flexDirection = "column";
  closeBtn.style.display = "block";
  barsBtn.style.display = "none";
}

barsBtn.addEventListener("click", addMenu);

/*-----------------------START close menu bars -------------------------- */
function closeMenu() {
  nav.style.display = "none";
  barsBtn.style.display = "flex";
  closeBtn.style.display = "none";
}

closeBtn.addEventListener("click", closeMenu);

/*-----------------------START selectbox filter function -------------------------- */

window.addEventListener("load", renderProducts);

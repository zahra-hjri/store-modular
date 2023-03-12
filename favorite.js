let favoritePack = localStorage.getItem("favoritePack");
if (favoritePack) {
  favoritePack = JSON.parse(favoritePack);
} else {
  favoritePack = [];
}

const clearFavorite = document.querySelector(".btnClearAll");
let favoriteDiv = document.querySelector(".favorite__div");
let cartTitle = document.querySelector(".cart-title");
let buyBadgeFavorite = document.querySelector("#buy-badge-favorite");

const renderFavoriteItems = () => {
  const favoriteDiv = document.querySelector(".favorite__div");
  const btnClearAll = document.querySelector(".btnClearAll");
  if (favoritePack.length === 0) {
    cartTitle.style.display = "block";
    cartTitle.innerHTML = "Not exist favorite product";
  }
  favoritePack.forEach((item) => {
    favoriteDiv.innerHTML += `
    <tr>
    <td>${item.name}</td>
    <td>${item.price} $</td>
    <td><i class="fa fa-heart favorite-icon" id="${item.id}"></i></td>
    <td>
    <img class="product-img" src="${item.img}">
    </td>
    </tr>
    `;
  });
};
buyBadgeFavorite.innerHTML = favoritePack.length;
renderFavoriteItems();

/*------------------START CLEAR favorite product ---------------------*/
let favoriteBtns = document.querySelectorAll(".favorite-icon");
const removeFavoriteProduct = (e) => {
  let clickedFavoriteProductId = e.target.id;

  favoritePack.map((item) => {
    if (item.id == clickedFavoriteProductId) {
      console.log(item);
      let favoriteIndex = favoritePack.findIndex((item) => {
        return item.id == btnFavorite.id;
      });

      favoritePack.splice(favoriteIndex, 1);
    }
  });
  setLocalStorageFavorite(favoritePack);
};
// console.log(favoriteBtns);
favoriteBtns.forEach((favoriteBtn) => {
  favoriteBtn.addEventListener("click", removeFavoriteProduct);
});

/*------------------End CLEAR favorite product ---------------------*/

/*------------------START CLEAR favoritePack ALL---------------------*/

const clearFavoritePack = () => {
  localStorage.removeItem("favoritePack");
  favoriteDiv.innerHTML = "";
  cartTitle.style.display = "block";
  cartTitle.innerHTML = "Not exist favorite product";
  buyBadge.innerHTML = 0;
};

clearFavorite.addEventListener("click", clearFavoritePack);

/*------------------END CLEAR favoritePack  ALL---------------------*/

/*-----------------------START set localstorage favorite FUNCTION-------------------------- */
let setLocalStorageFavorite = (favoritePack) => {
  localStorage.setItem("favoritePack", JSON.stringify(favoritePack));
};

/*-----------------------End set localstorage favorite FUNCTION-------------------------- */
// window.addEventListener("load", clearFavoritePack);

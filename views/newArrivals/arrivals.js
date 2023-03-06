// import { allProducts } from "../DB/products.js";

// allProducts.forEach((product) => {
//   console.log(product);
// });

export const arrivals = `
<div class="container">
    <section class="new-arrivals">
        <h2 class="new-arrivals__title">New Arrivals</h2>
        <p class="new-arrivals__description">Check out most promising product bought by our buyers</p>
        <ul class="new-arrivals__menu">
            <li class="active">All</li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
        </ul>


        <!-- Slider main container -->
        <div class="swiper">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide">
                    <section class="card" data-categury="kids">
                        <div class="product-image-1">
                        <section class="qty" id="1" style="display: none;">
                        <button class="plus">
                            <i class="fa fa-plus" id="1"></i>
                        </button>
                        <input class="qtyElem" id="1"></input>
                        <button class="minus">
                            <i class="fa fa-minus" id="1"></i>
                        </button>
                        </section>
                            <div class="percent">
                                40%
                            </div>
                            <div class="product-icons">
                                <div id="favorite">
                                    <img src="./images/favorite.svg" alt="favorite" data-id="1">
                                </div>
                                <div class="bag" id="1">
                                    <img src="./images/Bag.svg" alt="bag" data-id="1">
                                </div>
                               
                                <div id="photos">
                                    <img src="./images/photos.svg" alt="photos">
                                </div>
                            </div>

                        </div>
                        <div class="details">
                            <div class="rate">
                                <span>Kids</span>
                                <div class="stars">
                                    <img src="./images/StarFill.svg" alt="star">
                                    <img src="./images/StarFill.svg" alt="star">
                                    <img src="./images/StarFill.svg" alt="star">
                                    <img src="./images/StarFill.svg" alt="star">
                                    <img src="./images/Star.svg" alt="star">
                                </div>
                            </div>
                            <h3 class="name-product">Yellow T-Shirt</h3>
                            <div class="off-price">
                                <strong class="price">$180</strong>
                                <span class="off">$300</span>
                            </div>
                        </div>
                    </section>

                </div>



                <div class="swiper-slide">
                    <section class="card" data-categury="women">
                        <div class="product-image-2">
                        <section class="qty" id="2" style="display: none;">
                        <button class="plus">
                            <i class="fa fa-plus" id="2"></i>
                        </button>
                        <input class="qtyElem" id="2"></input>
                        <button class="minus">
                            <i class="fa fa-minus" id="2"></i>
                        </button>
                        </section>
                            <div class="product-icons">
                                <div id="favorite">
                                    <img src="./images/favorite.svg" alt="favorite" data-id="2">
                                </div>
                                <div class="bag" id="2">
                                    <img src="./images/Bag.svg" alt="bag" data-id="2">
                                </div>
                            
                                <div id="photos">
                                    <img src="./images/photos.svg" alt="photos">
                                </div>
                            </div>

                        </div>
                        <div class="details">
                            <div class="rate">
                                <span>Women</span>
                                <div class="stars">
                                    <img src="./images/StarFill.svg" alt="star">
                                    <img src="./images/StarFill.svg" alt="star">
                                    <img src="./images/StarFill.svg" alt="star">
                                    <img src="./images/StarFill.svg" alt="star">
                                    <img src="./images/Star.svg" alt="star">
                                </div>
                            </div>
                            <h3 class="name-product">Ethnic Kurti</h3>
                            <div class="off-price">
                                <strong class="price">$220</strong>
                                <span class="off">$250</span>
                            </div>
                        </div>
                    </section>

                </div>



                <div class="swiper-slide">
                    <section class="card" data-categury="women">
                        <div class="product-image-3">
                        <section class="qty" id="3" style="display: none;">
                        <button class="plus">
                            <i class="fa fa-plus" id="3"></i>
                        </button>
                        <input class="qtyElem" id="3"></input>
                        <button class="minus">
                            <i class="fa fa-minus" id="3"></i>
                        </button>
                        </section>

                            <div class="new">
                                new
                            </div>
                            <div class="product-icons">
                                <div id="favorite">
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
                                <span>Kids</span>
                                <div class="stars">
                                    <img src="./images/StarFill.svg" alt="star">
                                    <img src="./images/StarFill.svg" alt="star">
                                    <img src="./images/StarFill.svg" alt="star">
                                    <img src="./images/StarFill.svg" alt="star">
                                    <img src="./images/Star.svg" alt="star">
                                </div>
                            </div>
                            <h3 class="name-product">Kurtis, Tunics & Tops</h3>
                            <div class="off-price">
                                <strong class="price">$280</strong>
                                <span class="off">$350</span>
                            </div>
                        </div>
                    </section>

                </div>

                <div class="swiper-slide">
                    <section class="card" data-categury="men">
                        <div class="product-image-4">
                        <section class="qty" id="4" style="display: none;">
                        <button class="plus">
                            <i class="fa fa-plus" id="4"></i>
                        </button>
                        <input class="qtyElem" id="4"></input>
                        <button class="minus">
                            <i class="fa fa-minus" id="4"></i>
                        </button>
                        </section>
                            <div class="product-icons">
                                <div id="favorite">
                                    <img src="./images/favorite.svg" alt="favorite" data-id="4">
                                </div>
                                <div class="bag" id="4">
                                    <img src="./images/Bag.svg" alt="bag" data-id="4">
                                </div>
                                
                                <div id="photos">
                                    <img src="./images/photos.svg" alt="photos">
                                </div>
                            </div>

                        </div>
                        <div class="details">
                            <div class="rate">
                                <span>Men</span>
                                <div class="stars">
                                    <img src="./images/StarFill.svg" alt="star">
                                    <img src="./images/StarFill.svg" alt="star">
                                    <img src="./images/StarFill.svg" alt="star">
                                    <img src="./images/StarFill.svg" alt="star">
                                    <img src="./images/Star.svg" alt="star">
                                </div>
                            </div>
                            <h3 class="name-product">Round Neck T-Shirt</h3>
                            <div class="off-price">
                                <strong class="price">$120</strong>
                                <span class="off">$150</span>
                            </div>
                        </div>
                    </section>

                </div>



            </div>
            <div class="swiper-button">
                <div class="prev">
                    <img src="./images/prev.svg" alt="prev">
                </div>

                <div class="next">
                    <img src="./images/next.svg" alt="next">

                </div>
            </div>
        </div>

    </section>
</div>
`;

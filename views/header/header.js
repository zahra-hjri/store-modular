export const header = `<header>
<div class="container">
    <section class="header__top">
        <div class="header__logo">
            <strong class="header__logo--left">Fashion</strong>
            <strong class="header__logo--right">Era</strong>
        </div>

        <nav class="main">
            <ul class="main-list">
                <a href="#">
                    <li>Men</li>
                </a>

                <a href="#">
                    <li>Women</li>
                </a>

                <a href="#">
                    <li>Kids</li>
                </a>
                <a href="#">
                    <li>Winter</li>
                </a>
                <a href="./products.html">
                    <li>All Products</li>
                </a>
            </ul>
            <div class="search">
                <input type="text" placeholder="Search Product">
                <a href="./products.html"><img src="./images/Search_alt.svg" alt=""></a>
            </div>
        </nav>

        <div class="header__icons">
            <a href="./basket.html"><span class="buy-badge"></span><img src="./images/Buy.svg" alt="buy" class="header__icons--buy-icon"></a>
            <a href="./favorite.html"><span class="buy-badge" id="buy-badge-favorite"></span><img src="./images/Heart.svg" alt="heart" class="header__icons--heart-icon"></a>
            <a href="#"><img src="./images/User.svg" alt="user" class="header__icons--user-icon"></a>

        </div>



        <div class="header__bars" >
            <i class="fa fa-bars bars-btn" id="barsIcon"></i>
            <i class="fa fa-window-close close-btn"></i>
        </div>

    </section>

</div>
<div class="line"></div>

<nav class="responsive">
    <ul class="responsive-lists">
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
        <li>Winter</li>
        <li><a href="./products.html"><li>All products</a></li>
    </ul>

    <div class="search">
        <input type="text" placeholder="Search">
        <a href="./products.html"><img src="./images/Search_alt.svg" alt=""></a>
    </div>
</nav>


<div class="container">
    <section class="header__content">
        <div class="header__content-right">
            <img src="./images/HeaderBrush.svg" alt="brush" class="brush">
            <img src="./images/women.png" alt="women" class="women">
        </div>
        <div class="header__content-title">
            <span>TRENDING COLLECTION</span>
            <h1>Explore Summer<br>
                Collection</h1>
            <div class="btn">Shop Now</div>
        </div>
    </section>
</div>

</header>`;

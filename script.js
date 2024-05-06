const initApp=async()=>{
    response=await fetch('https://dummyjson.com/products?limit=8&select=title,description,price,discountPercentage,thumbnail');
    data=await response.json();
    products=data.products
    // console.log(data)
    // console.log(products)
    mainContainer=document.querySelector(".products-container")
    products.forEach(product => {
        discount=((product.discountPercentage/100)*product.price).toFixed(2);
        currentPrice=product.price-discount;

        mainContainer.innerHTML+=`
        <div class="product-card">
                <div class="img-container">
                    <img src=${product.thumbnail} alt="">
                </div>
                <h3>${product.title}</h3>
                <p>${product.description}</p>
                <div class="prices">
                    <span class="current-price">${currentPrice}$</span>
                    <span class="old-price">${product.price}$</span>
                </div>
                <div class="btns-container">
                    <button class="cart-btn">
                        <i class="fa-solid fa-bag-shopping"></i>
                        <span>Add to cart</span>
                    </button>
                    <button class="fav-btn">
                        <i class="fa-regular fa-heart"></i>
                    </button>
                </div>
            </div>
        `
        
    });
}
initApp()
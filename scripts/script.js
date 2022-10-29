import * as data from './data.js'



const searchBtn = document.querySelector('#search-btn');
const cartBtn = document.querySelector('#cart-btn');
const cartModalContainer = document.querySelector('#cart-modal-container');



searchBtn.addEventListener('click', e => {
    updateRender()
})
cartBtn.addEventListener('click', e => {
    cartModalContainer.style.display = 'flex';
    updateRender()
})

//
cartModalContainer.addEventListener('click', e => {
    if (e.target == cartModalContainer) cartModalContainer.style.display = 'none';
})

const profileArea = document.querySelector('#profile-area');
const profileAreaDropdown = document.querySelector('#profile-area-dropdown');

profileArea.addEventListener('mouseenter', e => {
    profileAreaDropdown.style.display = 'flex'
})
profileArea.addEventListener('mouseleave', e => {
    profileAreaDropdown.style.display = 'none'
})

const checkoutModalContainer = document.querySelector('#checkout-modal-container');
/** Modal Events */
checkoutModalContainer.addEventListener('click', e => {
    if (e.target == checkoutModalContainer) {
        checkoutModalContainer.style.display = 'none'
    }
})

/** RENDERING  */

const productsContainer = document.querySelector('#products-container');

let productsDisplay = []

console.log(data.productsAvailable[0].price)

for (let prod of data.productsAvailable) {
    let productString =
        `<div class="product">
    <img class="product-image" src="${prod.imgSrc}" />
    <div class="product-details">
        <h4>₱ ${prod.price}</h4>
        <h6>${prod.productName}</h6>
    </div>
        <div class="product-buttons">
            <button class="add-to-cart-btn" productID = ${prod.productID}>Add to cart</button>
            <button class="buy-now-btn">Buy Now</button>
        </div>
    </div>`

    productsDisplay.push(productString)
}

function updateRender() {

    // Update Displayed Products
    productsContainer.innerHTML = ''
    for (let prod of productsDisplay) {
        productsContainer.innerHTML += prod
    }

    // Update CartNum
    document.querySelector('#cart-num').innerText = data.cartData.length;

    // Update Cart Render
    const cartItemsContainer = document.querySelector('#cart-items-container')

    cartItemsContainer.innerHTML = ''

    if (data.cartData.length > 0) cartItemsContainer.innerHTML += `<div id="cart-shop-name"> <h4>Amazon Mall</h4></div`

    for (let cartProd of data.cartData) {
        let quantity = cartProd.quantity;
        let cartItemString = `<div class="cart-shop">
    <div class="simple-card" productID = '${cartProd.productID}'>
        <div class="simple-card-content1">
            <div class="cart-product-detail">
                <input class="cart-product-checkbox" type="checkbox">
                <img src="${cartProd.imgSrc}">
                <input type='number'/>
                <div class="cart-product-name">
                    ${cartProd.productName}
                </div>
            </div>
        </div>
        <div class="simple-card-content2">P${cartProd.price}</div>
        <div class="simple-card-content3">
            ${quantity}
        </div>
        <div class="simple-card-content4">
            ${cartProd.price * quantity}
        </div>
    </div>
</div>`
        cartItemsContainer.innerHTML += cartItemString;
    }

    updateListeners()
}

updateRender()

/** UPDATE LISTENERS FOR UPDATED ELEMENTS */
function updateListeners() {
    const addToCardBtns = document.querySelectorAll('.add-to-cart-btn');
    const buyNowBtns = document.querySelectorAll('.buy-now-btn');
    const modalExitBtn = document.querySelector('#modal-exit-btn');
    const checkoutBtn = document.querySelector('#checkout-btn');

    /** Buy Now Button Events */
    buyNowBtns.forEach(buyNowBtn => {
        buyNowBtn.addEventListener('click', e => {
            checkoutModalContainer.style.display = 'flex'
            
        })
    })

    /** Check Out Button Events */
    checkoutBtn.addEventListener('click', e => {
        if (data.cartData.length > 0) {
            cartModalContainer.style.display = 'none';
            checkoutModalContainer.style.display = 'flex';
        }
    })

    // Add to Cart Button Event
    addToCardBtns.forEach(addToCardBtn => {
        addToCardBtn.addEventListener('click', e => {
            let clickedProductID = parseInt(e.target.getAttribute('productID'))

            // searches the clicked product on productsAvailable
            for (let prod of data.productsAvailable) {

                // checks if prod of productsAvailable is equals to clickedProduct
                if (clickedProductID === prod.productID) {

                    // checks if this product is not yet in cartData
                    if (!data.cartData.includes(prod)) {
                        prod['quantity'] = 1;
                        data.cartData.push(prod)
                    } else {
                        // if not then this accesses that product and modifies its quantity value
                        for (let cartProd of data.cartData) {
                            if (cartProd.productID == clickedProductID) {
                                cartProd['quantity']++;
                                cartProd['checked'] = false
                                cartProd['totalPrice'] = cartProd['price'] * cartProd['quantity']
                            }
                        }
                    }
                }
            }

            updateRender()
        })


        const cartTotalPrice = document.querySelector('#cart-total-price');

        let cartProductCheckBoxes = document.querySelectorAll('.cart-product-checkbox');

        console.clear();
        console.log('Cart Length: ')
        console.log(data.cartData.length);

    })

    modalExitBtn.addEventListener('click', e => {
        checkoutModalContainer.style.display = 'none'
    })
}
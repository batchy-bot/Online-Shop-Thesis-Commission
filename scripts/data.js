let productsAvailable = [
    {
        productID: 1111,
        sellerID: 1245,
        productName: 'Dressed Chicken',
        price: 160.50,
        imgSrc: 'https://brazilfrozenfoodbrands.com/wp-content/uploads/2019/12/fresh-whole-chicken.jpg'
    },{
        productID: 1112,
        sellerID: 1245,
        productName: 'Fresh Gizzard',
        price: 89.50,
        imgSrc: 'https://brazilfrozenfoodbrands.com/wp-content/uploads/2019/12/Fresh-Chicken-Gizzard-300x300.jpg'
    },{
        productID: 1113,
        sellerID: 1245,
        productName: 'Two Joint Chicken Wings',
        price: 100.00,
        imgSrc: 'https://brazilfrozenfoodbrands.com/wp-content/uploads/2019/12/Two-Joint-Chicken-Wings-300x300.jpg'
    },{
        productID: 1114,
        sellerID: 1245,
        productName: 'Fresh Chicken Drumsticks',
        price: 99.50,
        imgSrc: 'https://brazilfrozenfoodbrands.com/wp-content/uploads/2019/12/Chicken-Drumsticks-300x300.jpg'
    },{
        productID: 1115,
        sellerID: 1245,
        productName: 'Chicken Feet Paws',
        price: 99.50,
        imgSrc: 'https://brazilfrozenfoodbrands.com/wp-content/uploads/2019/12/Frozen-Chicken-Feet-300x300.jpg'
    },{
        productID: 1116,
        sellerID: 1245,
        productName: 'Chicken Leg Quarters',
        price: 99.50,
        imgSrc: 'https://brazilfrozenfoodbrands.com/wp-content/uploads/2019/12/whole-chicken-leg-quarters-300x300.jpg'
    },{
        productID: 1117,
        sellerID: 1245,
        productName: 'Boneless Skinless Whole Chicken Breast',
        price: 99.50,
        imgSrc: 'https://brazilfrozenfoodbrands.com/wp-content/uploads/2019/12/Fresh-Chicken-Breast-300x300.jpg'
    },{
        productID: 1118,
        sellerID: 1245,
        productName: 'Chicken Feet Paws',
        price: 99.50,
        imgSrc: 'https://brazilfrozenfoodbrands.com/wp-content/uploads/2019/12/Chicken-Wings-and-parts-300x300.jpg'
    }
]

let userAccounts = [
    {
        userID: 1212,
        username: 'kylerevin',
        password: 'kylita',
        fullName: 'Kyle Revin Alimpuangon',
        cartProducts: [
            1111
        ]
    },{
        userID: 1245,
        username: 'andres_B',
        password: 'sheesh',
        fullName: 'Andress Bonifacio'
    }
]

let cartData = []

let currentUser = userAccounts[0];

export {productsAvailable, userAccounts, cartData };
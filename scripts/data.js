let productsAvailable = [
    {
        productID: 1111,
        sellerID: 1245,
        productName: 'Dressed Chicken',
        price: 160.50,
        imgSrc: '../res/images/fresh-whole-chicken.jpg'
    },{
        productID: 1112,
        sellerID: 1245,
        productName: 'Fresh Gizzard',
        price: 89.50,
        imgSrc: '../res/images/fresh-chicken-gizzard.jpg'
    },{
        productID: 1113,
        sellerID: 1245,
        productName: 'Two Joint Chicken Wings',
        price: 100.00,
        imgSrc: '../res/images/two-joint-chicken-wings.jpg'
    },{
        productID: 1114,
        sellerID: 1245,
        productName: 'Fresh Chicken Drumsticks',
        price: 99.50,
        imgSrc: '../res/images/fresh-chicken-drumsticks.jpg'
    },{
        productID: 1115,
        sellerID: 1245,
        productName: 'Chicken Feet Paws',
        price: 99.50,
        imgSrc: '../res/images/frozen-chicken-feet.jpg'
    },{
        productID: 1116,
        sellerID: 1245,
        productName: 'Chicken Leg Quarters',
        price: 99.50,
        imgSrc: '../res/images/whole-chicken-leg-quarters.jpg'
    },{
        productID: 1117,
        sellerID: 1245,
        productName: 'Boneless Skinless Whole Chicken Breast',
        price: 99.50,
        imgSrc: '../res/images/fresh-chicken-breast.jpg'
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

export {productsAvailable, userAccounts, cartData };
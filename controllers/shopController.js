const Product = require('../models/products')

exports.getShopPage = (req,res,next) => {
    let products = Product.fetchAll()
    res.render('shop/shop', {
        pageTitle:'shop',
        content:'Shop Our Products',
        path: '/',
        products: products
    })
}

exports.getCartPage = (req, res, next) => {
    res.render('shop/cart', {
        pageTitle: 'Shopping Cart',
        content: 'Shopping Cart',
        path: '/cart'
    })
}


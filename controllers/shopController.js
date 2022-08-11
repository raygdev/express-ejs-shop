const Product = require('../models/products')

exports.getShopPage = (req,res,next) => {
    let products = Product.fetchAll()
    res.render('shop', {
        pageTitle:'shop',
        content:'Shop Our Products',
        path: '/',
        products: products
    })
}

exports.getCartPage = (req, res, next) => {
    res.render('cart', {
        pageTitle: 'Shopping Cart',
        content: 'Shopping Cart',
        path: '/cart'
    })
}

exports.pageNotFound = (req,res,next) => {
    res.status(404).render('404', {
        pageTitle: '404',
        error: `Sorry, can't seem to find that page!`,
        path: ''
    })
}
const Product = require('../models/products')

exports.getShopPage = (req,res,next) => {
     Product.fetchAll( products => {
         res.render('shop/product-list', {
             pageTitle:'shop',
             content:'Shop Our Products',
             path: '/',
             products: products
         })
     })
}

exports.getCartPage = (req, res, next) => {
    res.render('shop/cart', {
        pageTitle: 'Shopping Cart',
        content: 'Shopping Cart',
        path: '/cart'
    })
}


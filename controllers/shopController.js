const Product = require('../models/products')
const Cart = require('../models/cart')

exports.getProductListPage = (req,res,next) => {
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

exports.postCart = (req,res,next) => {
    const prodID = req.body.productId
    Product.findById(prodID, product => {
        Cart.addToCart(prodID, product.price)
        res.redirect('/cart')
    })
}

exports.getCheckoutPage = (req,res,next) => {
    res.render('shop/checkout', {
        content: 'Checkout',
        pageTitle: "Checkout",
        path: '/checkout'
    })
}
exports.getIndexPage = (req,res,next) => {
    console.log('something')
    next()
}
exports.getProductDetailPage = (req,res,next) => {
    let { prodID } = req.params
    Product.findById(prodID, product => {
        res.render('shop/product-detail', {
            pageTitle: product.title,
            content:' Details',
            path: '/product-detail',
            product: product
        })
    })
}


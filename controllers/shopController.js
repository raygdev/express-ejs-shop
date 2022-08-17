const Product = require('../models/products')

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
    console.log(typeof prodID === 'string')
    Product.fetchAll(products => {
    let [singleProd] = products.filter(prod => prod.id === prodID);
        res.render('shop/product-detail', {
            pageTitle: 'Product Details',
            content: singleProd.title + ' Details',
            path: '/product-detail',
            product: singleProd
        })
    })
}


const Product = require('../models/products')

exports.getAdminAddProduct = (req,res,next) => {
    res.render('admin/add-products', {
        pageTitle: 'Add Product',
        content: 'Add a Product',
        path: '/admin/add-product',
    })
}

exports.postAdminAddProduct = (req,res,next) => {
   const {title, price, description} = req.body
   const product = new Product(title, price, description)
   product.save()
   res.status(302).redirect('/')
}

exports.getAdminRemoveProduct = (req,res,next) => {
    res.render('admin/remove-products', {
        pageTitle: 'Remove Product',
        content: 'Remove Product',
        path: '/admin/remove-product',
    })
}

exports.getAdminEditProducts = (req,res,next) => {
    res.render('admin/edit-products', {
        pageTitle: 'Edit Products',
        content:'Edit Content',
        path:'/admin/edit-products'
    })
}

exports.postAdminEditProducts = (req, res, next) => {
    console.log('posted to admin edit products')
    next()
}


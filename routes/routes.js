const express = require('express')
const { postAdminAddProduct, getAdminAddProduct, getAdminRemoveProduct } = require('../controllers/adminControllers')
const { getShopPage, getCartPage } = require('../controllers/shopController')

const router = express.Router()

router.get('/', getShopPage)

router.get('/admin/add-product', getAdminAddProduct)


router.post('/admin/add-product', postAdminAddProduct)

router.get('/cart', getCartPage)

router.get('/admin/remove-product', getAdminRemoveProduct)

router.post('/admin/add-product',postAdminAddProduct)

router.post('/admin/remove-product', postAdminAddProduct)

module.exports =router

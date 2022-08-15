const express = require('express')
const shopController = require('../controllers/shopController')

const router = express.Router()

router.get('/', shopController.getProductListPage)

router.get('/cart', shopController.getCartPage)

router.get('/checkout', shopController.getCheckoutPage)

router.get('/product-detail', shopController.getProductDetailPage)




module.exports =router

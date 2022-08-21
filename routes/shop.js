const express = require('express')
const shopController = require('../controllers/shopController')

const router = express.Router()

router.get('/', shopController.getProductListPage)

router.get('/cart', shopController.getCartPage)

router.post('/cart', shopController.postCart)

router.get('/checkout', shopController.getCheckoutPage)

router.get('/products/:prodID', shopController.getProductDetailPage)




module.exports =router

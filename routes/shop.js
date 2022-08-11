const express = require('express')
const adminController = require('../controllers/adminControllers')
const shopController = require('../controllers/shopController')

const router = express.Router()

router.get('/', shopController.getShopPage)

router.get('/cart', shopController.getCartPage)




module.exports =router

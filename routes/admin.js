const express = require('express')
const router = express.Router()

const adminController = require('../controllers/adminControllers')

router.get('/products',adminController.getProducts)

router.get('/add-product', adminController.getAdminAddProduct)

router.post('/add-product', adminController.postAdminAddProduct)

router.get('/edit-product', adminController.getAdminEditProducts)

router.post('/add-product',adminController.postAdminAddProduct)

router.post('/remove-product', adminController.postAdminAddProduct)

module.exports = router
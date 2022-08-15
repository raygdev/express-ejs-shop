const express = require('express')
const router = express.Router()

const adminController = require('../controllers/adminControllers')

router.get('/admin/add-product', adminController.getAdminAddProduct)

router.post('/admin/add-product', adminController.postAdminAddProduct)

router.get('/admin/edit-product', adminController.getAdminEditProducts)

router.post('/admin/add-product',adminController.postAdminAddProduct)

router.post('/admin/remove-product', adminController.postAdminAddProduct)

module.exports = router
const fs =require('fs')
const path = require('path')


let p = path.join(path.dirname(require.main.filename), 'data', 'cart.json')

module.exports = class Cart {
    static addToCart(id, productPrice){
        fs.readFile(p, (err, fileContent) => {
            let cart = {products: [], totalPrice: 0}
            if(!err){
                cart = JSON.parse(fileContent)
            }
            let existingProductIndex = cart.products.findIndex(prod => prod.id === id)
            let existingProduct = cart.products[existingProductIndex]
            let updatedProduct;
            if(existingProduct){
                updatedProduct = {...existingProduct}
                updatedProduct.qty = updatedProduct.qty + 1
                cart.products = [...cart.products]
                cart.products[existingProductIndex] = updatedProduct
            }else {
                updatedProduct = {id: id, qty: 1}
                cart.products = [...cart.products, updatedProduct]
            }
            cart.totalPrice = cart.totalPrice + + productPrice;
            fs.writeFile(p, JSON.stringify(cart), (err) => {
                console.log(err)
            })

        })
    }
}
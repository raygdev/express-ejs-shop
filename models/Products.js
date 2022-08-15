const fs = require('fs');
const path = require('path')
let p = path.join(path.dirname(require.main.filename), 'data', 'poducts.json');

module.exports = class Product {
    constructor(title, price, description){
        this.title = title
        this.price = price
        this.description = description
    }

    save(){
        fs.readFile(p, (err, fileContent) => {
            let products = []
            if(!err){
                products = JSON.parse(fileContent)
                return products
            }
            products.push(this)
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err)
            })
        });
    }

    static fetchAll(cb){
        fs.readFile(p, (err, fileContent) => {
            if(err){
                 cb([])
            }
                
            cb(JSON.parse(fileContent))
    })
}
    
}



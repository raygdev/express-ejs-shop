const fs = require("fs");
const path = require("path");

let p = path.join(path.dirname(require.main.filename), "data", "poducts.json");

const getProductsFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
          cb([]);
        }
  
        cb(JSON.parse(fileContent));
      });
}

module.exports = class Product {
  constructor(title, price, description) {
    this.title = title;
    this.price = price;
    this.description = description;
  }

  save() {
    this.id = Math.random().toString()
    getProductsFromFile(products => {
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), (err) => {
          if(err){
            console.log(err)
          }
        });
    });
  }

  static fetchAll(cb) {
   getProductsFromFile(cb)
  }
};

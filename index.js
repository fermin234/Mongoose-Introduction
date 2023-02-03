require("./connection");
const Product = require("./models/Products.js");

(async function () {
  const product = new Product({
    name: "Laptop 2",
    description: "Lenovo 2",
    price: 1300.99,
  });

  const productSave = await product.save();
  console.log(productSave);
})();

const express = require("express");
const {getProducts, postProducts, deleteProduct, changeProduct} = require("../controllers/taskController")

const productRoutes = express.Router();

productRoutes.get("/", getProducts);

productRoutes.post("/:id", postProducts)

productRoutes.delete("/:id", deleteProduct)

productRoutes.patch("/:id", changeProduct)

module.exports = productRoutes
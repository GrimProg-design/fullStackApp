const express = require("express");
const {getProducts, postProducts, deleteProduct} = require("../controllers/taskController")

const productRoutes = express.Router();

productRoutes.get("/", getProducts);

productRoutes.post("/:id", postProducts)

productRoutes.delete("/:id", deleteProduct)

module.exports = productRoutes
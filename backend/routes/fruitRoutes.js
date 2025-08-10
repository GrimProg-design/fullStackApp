const express = require("express");
const {getProducts} = require("../controllers/fruitController")

const productRoutes = express.Router();

productRoutes.get("/", getProducts);

module.exports = productRoutes
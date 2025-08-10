const mongoose = require("mongoose")

const prodictSchema = new mongoose.Schema({
    name: String,
    description: String,
    url: String,
    id: Number
}, { collection: "apple" })

const productModel = mongoose.model("apple", prodictSchema)

module.exports = productModel
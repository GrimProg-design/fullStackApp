const mongoose = require("mongoose")

const prodictSchema = new mongoose.Schema({
    name: String,
    description: String
}, { collection: "tasks" })

const productModel = mongoose.model("tasks", prodictSchema)

module.exports = productModel 
const Product = require("../models/taskModel");

const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

const postProducts = async (req, res) => {
  try {
    const { name, description } = req.body;
    console.log(req.body);

    const newDocs = new Product({ name, description });
    await newDocs.save();

    res.send("Данные успешно добавлены");
  } catch (error) {
    console.error(error);
    res.status(500).send("Данные не добавлены");
  }
}

const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id)
    res.json({messange: "Task was delete"})
  } catch (err) {
    res.status(500).json({ message: "Ошибка при удалении" });
  }
}

module.exports = { getProducts, postProducts, deleteProduct };
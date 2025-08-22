const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

app.use(express.json());
app.use(cors());

const moreRouter = require("./controllers/more");
const mongoose = require("mongoose");

const productRoutes = require("./routes/taskRoutes");

app.use("/api/products", productRoutes);

// Подключение pug
app.set("view engine", "pug");
app.set("views", "./views");

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB подключена"))
  .catch((err) => console.error(err));
  
app.use("/api/more", moreRouter);

app.get("/api/home", (req, res) => {
  res.send("Home page");
});


app.listen(PORT, () => {
  console.log(`server going on http://localhost:${PORT}`);
});

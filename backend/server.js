const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3000;

app.use(express.json());
app.use(cors());

const moreRouter = require("./controllers/more");
const mongoose = require("mongoose");

const productRoutes = require("./routes/taskRoutes");

app.use("/api/products", productRoutes);

mongoose
  .connect("mongodb://127.0.0.1:27017/fullstack_web_site", {
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

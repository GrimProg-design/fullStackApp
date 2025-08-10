const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3000;

const moreRouter = require("./controllers/more");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/fullstack_web_site", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB подключена"))
.catch(err => console.error(err));

app.use(cors())
app.use("/api/more", moreRouter)

app.get("/api/home", (req, res) => {
    res.send("Home page")
})


const News = mongoose.model("News", new mongoose.Schema({
  title: String,
  content: String
}));

app.get("/add-news", async (req, res) => {
  const news = new News({ title: "Тестовая новость", content: "Проверка" });
  await news.save();
  res.send("Новость добавлена!");
});

app.get("/all-news", async (req, res) => {
  const newsList = await News.find();
  res.json(newsList);
});


app.listen(PORT, () => {
    console.log(`server going on http://localhost:${PORT}`)
})
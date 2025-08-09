const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3000;

const moreRouter = require("./controllers/more");

app.use(cors())
app.use("/api/more", moreRouter)

app.get("/api/home", (req, res) => {
    res.send("Home page")
})

app.listen(PORT, () => {
    console.log(`server going on http://localhost:${PORT}`)
})
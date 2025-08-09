const express = require("express");

const moreRouter = express.Router();

moreRouter.get("/", (req, res) => {
    res.send("More page");
})

module.exports = moreRouter
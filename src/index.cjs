const express = require("express");
require("dotenv").config();
const app = express();

app.get("/", (req, res) => {
    res.status(200).send("Hi, this is the root page");
})

app.get("/*/messages", (req, res) => {
    res.status(200).send("Hi, these are some messages: <ul><li>Hi</li><li>Hi 2</li></ul>");
})

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`)
})
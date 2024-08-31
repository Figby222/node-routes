const express = require("express");
require("dotenv").config();
const app = express();

app.get("/", (req, res) => {
    res.status(200).send("Hi, this is the root page");
})

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`)
})
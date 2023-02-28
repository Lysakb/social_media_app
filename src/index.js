const express = require("express");
const {connectToMongodb} = require("../src/config/database");
require("dotenv").config();

connectToMongodb();

const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
    console.log("Home page!")
});

app.listen(PORT, ()=> console.log(`Listening on port : ${PORT}`));
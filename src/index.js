const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
    console.log("Home page!")
});

app.listen(PORT, ()=> console.log(`Listening on port : ${PORT}`));
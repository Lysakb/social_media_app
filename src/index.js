const express = require("express");
const {connectToMongodb} = require("../src/config/database");
const userRoute = require("../src/route/user.route");
require("dotenv").config();

connectToMongodb();
 
const app = express();
const PORT = process.env.PORT; 

app.use(express.json());
app.use("/user", userRoute);

app.get("/", (req, res) => {
    console.log("Home page!")
    res.status(200).send("Home page!");
});

app.listen(PORT, ()=> console.log(`Listening on port : ${PORT}`));
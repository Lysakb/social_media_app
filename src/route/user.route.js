const express = require("express");
const registerValidator = require("../validation/user.validation");
const userRegister = require("../services/user.service")

const userRoute = express.Router();

userRoute.post("/register", registerValidator, userRegister);

module.exports = userRoute;
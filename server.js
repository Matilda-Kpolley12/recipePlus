require("dotenv").config();
const express = require("express");
const cors = require("cors");
const staticAsset = require("static-asset");


// const fileUpload = require("express-fileupload");


// connecting to database
require("./config/dbConnect");

// consting routes

const authRouter = require("./routers/authRouter");
const recipeRouter = require("./routers/recipeRouter");
const userRouter = require("./routers/userRouter");
const commentRouter = require("./routers/commentRouter");

const app = express();
app.use(cors())


app.use(express.json());

// app.use(fileUpload());

app.use(staticAsset(__dirname + "/assets/"));
app.use(express.static(__dirname + "/assets/"));
app.use("/auth", authRouter);
app.use("/recipe", recipeRouter);
app.use("/users", userRouter);
app.use("/comments", commentRouter);

// catch all routes not on the server
app.all("*", (req, res, next) => {
  res
    .status(404)
    .json({ message: `Cannot find ${req.originalUrl} on the server` });
});

//
app.use((error, req, res, next) => {
  res.status(error.status || 500).json({ message: error.message });
});

module.exports = app.listen(8081, () => console.log("Server up and running"));

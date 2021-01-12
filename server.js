const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const dbConfig = require("./config/database.config");

// create Express App
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res, next) => {
  res.json({
    message: "Welcome to Easy Notes API",
  });
});

mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
  })
  .then((connection) => {
    console.log("Mongo Connected");
    app.listen(3001, () => {
      console.log("Application Listening on Port: 3001");
    });
  })
  .catch((err) => {
    console.log("Couldn't Connect Exiting Process...");
    process.exit();
  });

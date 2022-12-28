var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

require("dotenv-safe").config();

var indexRouter = require("./src/routes/index");
var userRouter = require("./src/routes/users");
var db = require("./src/config/database");

var app = express();
db.connect();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", userRouter);

module.exports = app;

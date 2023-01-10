var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
const parser = require("body-parser");

require("dotenv-safe").config();

var indexRouter = require("./routes/index");
var userRouter = require("./routes/users");
var loginRouter = require("./routes/login");
var db = require("./config/database");

var app = express();
db.connect();

app.use(cors());

app.use(logger("dev"));

const urlencodedParser = parser.urlencoded({ extended: false });

// before your routes
app.use(parser.json());
app.use(urlencodedParser);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", userRouter);
app.use("/login", loginRouter);

module.exports = app;

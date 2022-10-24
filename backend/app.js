var cors = require("cors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var passport = require("passport");
const passportLocal = require("passport-local").Strategy;
var session = require("express-session");
var logger = require("morgan");
let dotenv = require("dotenv").config();
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var pool = require("./database/pgdb")
var app = express();
var pgSession = require("connect-pg-simple")(session);


app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// cors for the another server
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3001",
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD", "DELETE"],
  })
);
app.use(
  session({
    store: new pgSession({
      pool: pgPool, // Connection pool
      createTableIfMissing: true,
      tableName: "session",
    }),
    secret: "connect2167", ////////PROVIDE A SECRET/////USE ENVIRONMENT VARIABLES, UNLESS THIS IS FOR HOMEWORK OR SOMETHING SIMILAR OF NO IMPORTANCE
    resave: true,
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 }, // 30 days
    saveUninitialized: false,
  })
);



app.use(passport.initialize());
app.use(passport.session());
// require("./auth/passportConfig")(passport);


app.use("/", indexRouter);
app.use("/users", usersRouter);
console.log(dotenv);

module.exports = app;

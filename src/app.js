require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const compression = require("compression");
const app = express();

console.log(`Process`, process.env);
// init middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

// init db
require("./dbs/init.mongodb");
// const { checkOverload } = require("./helpers/check.connect");
// checkOverload();

// init routes
app.get("/", (req, res, next) => {
  const strCompress = "Trong Lam co len";
  return res.status(200).json({
    message: "Welcome trong lam",
    metadata: strCompress.repeat(100000),
  });
});

// handling error

module.exports = app;

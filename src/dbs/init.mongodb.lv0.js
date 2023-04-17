"use strict";

const mongoose = require("mongoose");

const connectStr = `mongodb://127.0.0.1:27017/shopDEV`;

mongoose
  .connect(connectStr)
  .then((_) => console.log(`Connected Mongodb Success`))
  .catch((err) => console.log(`Connected Mongodb Error`));

// dev
if (1 === 1) {
  mongoose.set("debug", true);
  mongoose.set("debug", { color: true });
}

module.exports = mongoose;

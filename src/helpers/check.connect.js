"use strict";

const mongoose = require("mongoose");
const os = require("os");
const process = require("process");

const _SECONDS = 5000;

// count connect ( Kiểm tra có bao nhiêu kết nối trong hệ thống )
const countConnect = () => {
  const numConnection = mongoose.connections.length;
  console.log(`Number of connections:::${numConnection}`);
};

// check over load connect ( thông báo khi server quá tải connect )
const checkOverload = () => {
  setInterval(() => {
    const numConnection = mongoose.connections.length;
    // check numCores of CPU ( kiểm tra CPU numCore là bao nhiêu )
    const numCores = os.cpus().length;
    // num memory use ( số lượng bộ nhớ sử dụng )
    const memoryUsage = process.memoryUsage().rss;
    // Example maximum number of connections based on number osf cores
    // ( Giả sử máy chịu được 5 connection mỗi core )
    const maxConnections = numCores * 5;

    console.log(`Active connection:${numConnection}`);
    console.log(`Memory usage::: ${memoryUsage / 1024 / 1024}MB`);

    if (numConnection > maxConnections) {
      console.log("Connected overload detected!");
    }
  }, _SECONDS); // monitor every 5 seconds
};

module.exports = {
  countConnect,
  checkOverload,
};

const app = require("./src/app");

const PORT = process.env.DEV_APP_PORT || 3055;

const server = app.listen(PORT, () => {
  console.log(`WSV eCommerce start with port with ${PORT}`);
});

process.on("SIGINT", () => {
  server.close(() => console.log(`Exit Server Express`));
});

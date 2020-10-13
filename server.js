const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1> Главная страница</h1> <a href='shop'>shop</a>");
});

app.get("/shop", (req, res) => {
  res.send("<h1> А это страница магазина </h1>");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

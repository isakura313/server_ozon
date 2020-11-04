const express = require("express");
// пакет node для работы с путями файлов
const path = require('path');
const bodyParser = require("body-parser")

const port = process.env.PORT || 3000;
// msql 3306

const app = express();
// создание объекта приложения
app.use(bodyParser.json())

// app.use(express.static(__dirname));
// app.use(express.static(path.join(__dirname, 'build')));

app.get("/", (req, res) => {
  res.send("<h1> Hello, it' me Mario</h1>")
});
require("./app/routes/deals.routes")(app);
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(port, () => {
  console.log(`Приложение запущено на http://localhost:${port}`);
});

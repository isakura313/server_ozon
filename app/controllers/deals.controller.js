const Deal = require("../models/deal.model.js");

//Создаем и сохраняем новое дело
exports.create = (req, res) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, DELETE');

  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Валидизация запроса
  if (!req.body) {
    res.status(400).send({
      message: "У нас не может не быть контента",
    });
  }

  // создание своего дела
  const deal = new Deal({
    priority: req.body.priority,
    text: req.body.text,
    dt: req.body.dt,
    dl: req.body.dl,
  });

  //сохраняем дело в нашу базу данных
  Deal.create(deal, (err, data) => {
    console.warn("data equal");

    if (err)
      res.status(500).send({
        message: err.message || "Произошла ошибка во время выполнения кода",
      });
    else res.send(data);
  });
};

// Retrieve all Customers from the database.
exports.findAll = (req, res) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, DELETE');

  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
  res.setHeader('Access-Control-Allow-Credentials', true);


  Deal.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Произошли ошибки во время получения дел",
      });
    else res.send(data);
  });
};

//  Найти одно дело по одному id
exports.findOne = (req, res) => {
  Deal.findById(req.params.id, (err, data) => {
    console.log(req.params.id);
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Нет дела с id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Ошибка во время получения дела с id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};



// Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, DELETE');

  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
  res.setHeader('Access-Control-Allow-Credentials', true);
  Deal.remove(req.params.dealId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Не могу найти дело c id ${req.params.dealId}.`
        });
      } else {
        res.status(500).send({
          message: "не могу удалить дело с id " + req.params.dealId
        });
      }
    } else res.send({ message: `дело было успешно удалено!` });
  });
};


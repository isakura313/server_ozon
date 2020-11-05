const Deal = require("../models/deal.model.js");

//Создаем и сохраняем новое дело
exports.create = (req, res) => {
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

// Update a Customer identified by the customerId in the request
// exports.update = (req, res) => {
//     // Validate Request
//     if (!req.body) {
//         res.status(400).send({
//             message: "Запрос не может быть пустым! Подумайте, что вы делаете? Вы точно отправляете, что надо?"
//         });
//     }

// console.log(req.body);
//
//     Deal.updateById(
//         req.params.id,
//         new Deal(req.body),
//         (err, data) => {
//             if (err) {
//                 if (err.kind === "not_found") {
//                     res.status(404).send({
//                         message: `Not found Customer with id ${req.params.id}.`
//                     });
//                 } else {
//                     res.status(500).send({
//                         message: "Error updating deal with id " + req.params.id
//                     });
//                 }
//             } else res.send(data);
//         }
//     );
// };

// Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {
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


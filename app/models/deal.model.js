const sql = require("./db.js");

const Deal = function (deal) {
  this.priority = deal.priority;
  this.text = deal.text;
  this.dt = deal.dt;
  this.dl = deal.dl;
};
const TableName = "todos";
Deal.create = (newDeal, result) => {
  sql.query(`INSERT INTO ${TableName} SET ?`, newDeal, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created customer: ", { id: res.insertId, ...newDeal });
    result(null, { id: res.insertId, ...newDeal });
  });
};

Deal.findById = (id, result) => {
  const queryFind = `SELECT * FROM ${TableName} WHERE id = id`;

  sql.query(queryFind, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("найдено дело: ", res[0]);
      result(null, res[0]);
      return;
    }

    // когда ничего не удалось найти
    result({ kind: "not_found" }, null);
  });
};

Deal.getAll = (result) => {
  let QueryAll = `SELECT * FROM ${TableName}`;
  sql.query(QueryAll, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("deals: ", res);
      result(null, res);
    }
  });
};


Deal.remove = (id, result) => {
  const queryDelete = `DELETE FROM ${TableName} WHERE id = ?`;
  sql.query(queryDelete, id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      //  если дело не удалось получить по id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("Удалено дело с  ", id);
    result(null, res);
  });
};



module.exports = Deal;

const sql = require("./db.js");

// class Deal{
//     constructor(deal) {
//         this.prioritet = deal.prioritet;
//         this.content = deal.content;
//         this.create_date = deal.create_date;
//     }
// }
const Deal = function(deal) {
    this.prioritet = deal.prioritet;
    this.content = deal.content;
    this.create_date = deal.create_date;
}

const TableName = "todos";
Deal.getAll = result =>{
    let QueryAll = `SELECT * FROM ${TableName}`;
    sql.query(QueryAll, (err, res)=>{
        if(err){
            console.log("error: ", err)
            result(null, err)
            return;
        }else{
            console.log("deals: ", res)
            result(null, res)
        }
    })
}
module.exports = Deal;

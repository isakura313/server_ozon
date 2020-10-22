module.exports = app =>{
    const deals = require("../controllers/deals.controller.js");

    //Получение всех дел
    app.get("/deals", deals.findAll)
}

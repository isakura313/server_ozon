module.exports = app =>{
    const deals = require("../controllers/deals.controller.js");

    // Create a new Deal
    app.post("/deals", deals.create);

    // Retrieve all Deal
    app.get("/deals", deals.findAll);

    // Retrieve a single deal with dealId
    app.get("/deal/:dealId", deals.findOne);

    // Update a deal with dealId
    // app.put("/deal/:dealId", deals.update);

    // Delete a deal with dealId
    app.delete("/deal/:dealId", deals.delete);

    // Удаление прямо всех дел
    app.delete("/deals", deals.deleteAll);
}

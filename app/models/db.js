const mysql = require("mysql")
const dbConfig = require("../config/db.config")

const connection = mysql.createPool({
    host:dbConfig.HOST,
    user:dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB,
    port:dbConfig.PORT
})
module.exports = connection;

const mysql = require("mysql2")

let dbprop = require("./db_property")


module.exports={
    getConnection :()=> {
       return  mysql.createConnection(dbprop);

    }
}
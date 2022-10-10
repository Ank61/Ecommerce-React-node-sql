const express = require('express');
let conn = require("../db_connection/db_connection")
const connection =conn.getConnection()
connection.connect()
const router=express.Router()
router.post("/",(req,res)=>{
    let name1 = req.body.name
    connection.query(`select * from Products where name like '${name1}%'`, (err,successArray)=>{
if(err){
    res.json("Error has occured",err)
}
res.json(successArray)
    })
})
module.exports=router
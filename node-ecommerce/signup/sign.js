const express = require('express')
const router =express.Router()
const conn =require("../db_connection/db_connection")
let connection = conn.getConnection()
connection.connect()
router.post("/",(req,res)=>{
    let name =req.body.name
    let email =req.body.email
    let password = req.body.password

    connection.query(`INSERT INTO Users (name,password,email) VALUES ( '${name}' , '${password}','${email}')`,(err,rows)=>{
        if(!err){
            res.json({'Inserted':'New User Created'})
        }
        else if(rows.affectedRows<1){
            res.json("alredyexist")
        }
        else{
            res.json({'Error occured':'Not new user created'})
        }
    })
})
module.exports=router;
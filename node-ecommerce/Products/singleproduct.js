const express = require('express');
let conn = require("../db_connection/db_connection")
const connection =conn.getConnection()
connection.connect()
const router=express.Router()
router.get("/:id",(req,res)=>{
    let id =req.params.id
    console.log(id);
    connection.query(`SELECT Pname , Pcost FROM Products WHERE P_id = ${id}`, (err,successArray)=>{
        if(err){
            res.json({"Error":"has occured"})
        }
        res.json({successArray})
    })
})
module.exports=router
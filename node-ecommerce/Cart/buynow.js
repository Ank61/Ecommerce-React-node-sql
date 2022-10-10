const express = require('express');
let conn = require("../db_connection/db_connection")
const connection =conn.getConnection()
connection.connect()
const router=express.Router()


router.post("/",(req,res)=>{
    let P_id = req.body.p_id
    let user = req.body.email
    connection.query(`insert into Cart (uname, P_id) values ('${user}' ,'${P_id}')`, (err,successArray)=>{
if(err){
    res.json("Error has occured",err)
}
res.json(successArray)
    })
})

router.post("/show",(req,res)=>{
    let user = req.body.email
    connection.query(`select * from Products as p join Cart as u on p.p_id = u.P_id where uname ='${user}' `, (err,successArray)=>{
if(err){
    res.json("Error has occured",err)
}
res.json(successArray)
    })
})


module.exports=router
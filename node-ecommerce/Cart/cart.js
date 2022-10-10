const express = require('express');
let conn = require("../db_connection/db_connection")
const connection =conn.getConnection()
connection.connect()
const router=express.Router()

//Get name of the user from local storage
// user = window.localStorage.getItem('user')
router.post("/",(req,res)=>{
    let P_id = req.body.p_id
    let user = req.body.email
    connection.query(`INSERT INTO Cart (uname , P_id) VALUES ('${user}','${P_id}')`, (err,successArray)=>{
if(err){
    res.json("Error has occured",err)
}
res.json(successArray)
    })
})
module.exports=router
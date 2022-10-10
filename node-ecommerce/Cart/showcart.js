const express = require('express');
let conn = require("../db_connection/db_connection")
const connection =conn.getConnection()
connection.connect()
const router=express.Router()

//Get name of the user from local storage
// user = window.localStorage.getItem('user')
//showing only the productID from cart for a particular user
router.post("/",(req,res)=>{
    let user = req.body.email
    connection.query(`select * from Products as p join Cart as u on p.p_id = u.P_id where uname ='${user}'`, (err,successArray)=>{
if(err){
    res.json("Error has occured",err)
}
res.json(successArray)
    })
})
module.exports=router

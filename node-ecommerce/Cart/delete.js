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
    let P_id = req.body.p_id
    connection.query(`delete from Cart where P_id=${P_id} and uname ='${user}'`, (err,successArray)=>{
if(err){
    res.json("Error has occured",err)
}
res.json(successArray)
    })
})
module.exports=router
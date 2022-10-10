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
    let password1 = req.body.password
    connection.query(`update Users set password = '${password1}' where email='${user}';`, (err,successArray)=>{
if(err){
    res.json("emailnotexist")
}
else if(successArray.affectedRows==0){
    res.json("emailnotexist")
}
res.json("emailexist")
    })
})
module.exports=router
const express = require("express")
const router = express.Router()
const conn =require("../db_connection/db_connection")
let connection = conn.getConnection()
connection.connect()
///giving username to the local storage so that i can use it in cart
// let name = document.getElementById("name").value;

let token = require("../token/token")
router.post("/", (req,res)=>{
    let email1 = req.body.email
    let password1= req.body.password
    

    connection.query(`SELECT * FROM Users WHERE (email ='${email1}'OR name='${email1}') AND password ='${password1}'` , function(err, rows, fields) {
        if (rows.length) {
            // let mytoken = token({'email':email1,'password':password1},JSON.stringify(new Date()))       
            res.json('succesfull')
                }
else{
 res.json('failed')
    }
 })

// window.localStorage.setItem('user',name)
        })
module.exports=router;
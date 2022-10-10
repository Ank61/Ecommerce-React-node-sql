const express = require('express');
let conn = require("../db_connection/db_connection")
const connection =conn.getConnection()
connection.connect()
const router=express.Router()
router.get("/",(req,res)=>{
    connection.query('SELECT * FROM Products', (err,successArray)=>{
if(err){
    res.json("Error has occured",err)
}
res.json(successArray)
    })
})
router.get("/name",(req,res)=>{
    let name1 = req.body.name
    
    connection.query(`SELECT name FROM Products where name='${name1}'`, (err,successArray)=>{
if(err){
    res.json("Error has occured",err)
}
res.json(successArray)
    })
})

router.get("/shoe",(req,res)=>{
    connection.query('SELECT * FROM Products WHERE id <=8', (err,successArray)=>{
        if(err){
            res.json("Error has occured",err)
        }
        res.json(successArray)
            })
        })

router.get("/clothes",(req,res)=>{
            connection.query('SELECT * FROM Products WHERE id >9', (err,successArray)=>{
                if(err){
                    res.json("Error has occured",err)
                }
                res.json(successArray)
                    })
                })
module.exports=router
const express = require('express')
const bodyparser = require('body-parser')
const login =require("./login/login")
let cors = require('cors')
const signup=require("./signup/sign")
const allproducts = require("./Products/products")
const singleproduct =require("./Products/singleproduct")
const cart =require("./Cart/cart")
const showcart = require("./Cart/showcart")
const buynow = require("./Cart/buynow")
const delete1 = require("./Cart/delete")
const password1 = require("./login/password")
const profile1 = require("./Products/profile")
const server = require("./Products/search")
let app = express()
app.use(bodyparser.json())
app.use(bodyparser.urlencoded(
    {'extended':'false'}
))
app.use(cors()) 
let port = process.env.PORT || 8080
app.use("/login", login)
app.use("/signup", signup)
app.use("/products",allproducts)
app.use("/product",singleproduct)//for each product
app.use("/cart",cart) //adding to cart for particular user and product
app.use("/showcart",showcart)
app.use("/buynow" , buynow)
app.use("/delete" , delete1)
app.use("/password" , password1)
app.use("/profile" , profile1)
app.use("/server" , server)


app.listen(port,()=>{

    console.log("Server running on port no :- ",port)

})

//GET Routes

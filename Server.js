const express =require("express");
const mongoose =require("mongoose");
const bodyparser =require("body-parser");
const app =  express();

//DB Connection
require("./mongoDBConnection")


//Importing Models
const test =require("./model/Category")
require("./model/Product")
console.log(test)


//Using bodyparser in express
app.use(bodyparser.json());

//Using Multiple CustomRouters in express
app.use("/category",require("./routes/CategoryRoute"));
app.use("/product",require("./routes/ProductRoute"));


app.listen(7777,function(){
    console.log("server is running");
});
const express =require("express");
const mongoose =require("mongoose");
const bodyparser =require("body-parser");
const app =  express();
require("./mongo")

const test =require("./model/Category")
require("./model/Product")
console.log(test)
app.use(bodyparser.json());


app.use("/category",require("./routes/CategoryRoute"));
app.use("/product",require("./routes/ProductRoute"));


app.listen(7777,function(){
    console.log("server is running");
});
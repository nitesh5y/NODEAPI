const express =require("express");
const bodyparser =require("body-parser");
const app =  express();

//DB  Connection
require("./mongoDBConnection")


//Using bodyparser in express
app.use(bodyparser.json());

//Using Multiple CustomRouters in express
app.use("/category",require("./routes/CategoryRoute"));
app.use("/product",require("./routes/ProductRoute"));


app.listen(7777,function(){
    console.log("server is running");
});
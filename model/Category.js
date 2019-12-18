const mongoose =require("mongoose");

const category_schema=mongoose.Schema({
    title: {
        type : String,
        require: true
    },
    children :[]
})
module.exports= mongoose.model("Category",category_schema);
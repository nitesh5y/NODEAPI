const mongoose =require("mongoose");

const product_schema=mongoose.Schema({
    Name: {
        type : String,
        require: true
    },
    Description :{
        type : String
    }, 
     Price: {
        type : Number,
        require: true
    }, 
    Quantity: {
       type : Number,
       require: true
   },
    ImagePath: {
       type : String
   }
    
})
module.exports= mongoose.model("Product",product_schema);
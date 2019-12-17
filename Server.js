const express =require("express");
const mongoose =require("mongoose");
const bodyparser =require("body-parser");
const app =  express();
require("./mongo")
const test =require("./model/Post")
console.log(test)
app.use(bodyparser.json());
app.use("/posts",require("./routes/posts"));
//const Post = mongoose.model("Post");
// app.get("/posts",async function(req,res){
// try{
//     const posts= await Post.find({})
//     res.send(posts);
// }
// catch(error)
// {}
// });
 
// app.post("/tosts",async function(req,res){
//     try{
//    const post= new Post();
//    post.title=req.body.title;
//    post.content= req.body.content;
//    await  post.save();
//    res.send(post);
//    }
// catch(error)
// { 
//     res.status(500);
// }
//     });

app.listen(7777,function(){
    console.log("server is running");
});
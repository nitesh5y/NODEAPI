const router = require("express").Router();
const mongoose =require("mongoose");
const Post = mongoose.model("Post");
router.get("/",async function(req,res){
    try{
        const posts= await Post.find({})
        res.send(posts);
    }
    catch(error)
    {}
    });
     
    router.post("/",async function(req,res){
        try{
       const post= new Post();
       post.title=req.body.title;
       post.content= req.body.content;
       await  post.save();
       res.send(post);
       }
    catch(error)
    { 
        res.status(500);
    }
        });

   module.exports = router;     
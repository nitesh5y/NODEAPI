const categoryRouter = require("express").Router();
const mongoose = require("mongoose");
require("../model/Category")
const category = mongoose.model("Category");

categoryRouter.get("/", async function (req, res) {
    try {
        const posts = await category.find({})
        res.send(posts);
    }
    catch (error) { }
});

categoryRouter.post("/", async function (req, res) {
    try {
        const categoryObj = new category();
        categoryObj.title = req.body.title;
        categoryObj.children = req.body.children;
        await categoryObj.save();
        res.send(categoryObj);
    }
    catch (error) {
        res.status(500);
    }
});

module.exports = categoryRouter;     
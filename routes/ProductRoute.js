const productRouter = require("express").Router();
const mongoose = require("mongoose");
const Product = mongoose.model("Product");

productRouter.get("/", async function (req, res) {
    try {
        const product = await Product.find({})
        res.send(product);
    }
    catch (error) { }
});

productRouter.post("/", async function (req, res) {
    try {
        const product = new Product();
        product.Name = req.body.Name;
        product.Description = req.body.Description;
        product.Price = req.body.Price;
        product.Quantity = req.body.Quantity;
        product.ImagePath = req.body.ImagePath;
        await product.save();
        res.send(product);
    }
    catch (error) {
        res.status(500);
    }
});

module.exports = productRouter;     
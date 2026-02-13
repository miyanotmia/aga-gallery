import express from "express";
import product from  "../models/product.js";

const router= express.Router();

//GET all

router.get("/", async (req,res) => {
    try{
        const products = await product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: "Error fetching products"});
    }
});

//POST new product
router.post("/", async(req, res)=>{
    try{
        const newProduct= new Product(req.body);
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (err){
        res.status(400).json({error:"Failed to add product"});
    }
});
export default router;
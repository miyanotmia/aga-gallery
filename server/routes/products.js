import express from "express";
import Product from  "../models/product.js";

const router= express.Router();

//test route
router.get("/test", (req, res) =>{
    res.json({message: "Route is working!"});
});



//GET all

router.get("/", async (req,res) => {
    console.log("GET /api/products hit")
    try{
        const products = await Product.find();
        console.log("Products found:", products.length);
        res.json(products);
    } catch (err) {
        console.error("Error:", err);
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
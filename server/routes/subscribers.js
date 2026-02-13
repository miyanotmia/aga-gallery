import express from "express";
import Subscriber from "./models/subscriber.js";

const router = express.Router();

//POST new subby
router.post("/", async (req, res) => {
    try{
        const {name, email} = req.body;
        if (!email) {
            return res.status(400).json({error:"Email required"});
        }
      const newSub = new Subscriber({name, email});
      await newSub.save();
      res.status(201).json({message:"Subscription Successful"});
    } catch (err) {
        res.status(500).json({error: "Error saving subscriber"})
    }
});
       

export default router;

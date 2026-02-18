import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

//import productRoutes from "./routes/products.js";
//import subscriberRoutes from "./routes/subscribers.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

//db connect
mongoose
.connect(process.env.MONGO_URI)
.then(()=> console.log("Mongo Connected"))
.catch ((err)=> console.log("Mongo connection error:", err));

//routes
import productRoutes from "./routes/products.js";
app.use("/api/products", productRoutes);

//server
const API_URL = import.meta.env.VITE_API_URL || 5000;
fetch(`${API_URL}/api/products`)



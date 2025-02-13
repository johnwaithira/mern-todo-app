import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = new express();

// Middleware to parse json data
app.use(express.json());

const port = process.env.PORT || 5000;

app.get("/", (req, res)=>{
    res.json({
        message : "Loading fron the server ......."
    })
});

app.listen(port, ()=>{
    connectDB();
    console.log("Server started at port 3000");
})

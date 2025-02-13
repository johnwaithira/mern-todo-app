import express from "express";
import dotenv from "dotenv";

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
    console.log("Server started at port 3000");
})

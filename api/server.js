import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import taskRouter from "./routes/task.routes.js";
import path from 'path'

dotenv.config();

const app = new express();

// Middleware to parse json data
app.use(express.json());

const port = process.env.PORT || 5000;

const __dirname = path.resolve()


app.listen(port, ()=>{
    connectDB();
    console.log("Server started at port 3000");
});

app.use("/api/tasks", taskRouter);

app.use(express.static(path.join(__dirname, '/todo/dist')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'todo', 'dist', 'index.html'))
});

// Error hnadling middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success : false,
        statusCode,
        message
    });
});



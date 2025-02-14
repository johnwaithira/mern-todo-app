import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    taskname : {
        type : String,
        required : true,
        unique : true
        }
    }, { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);

export default Task;
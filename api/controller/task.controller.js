import Task from "../models/todo.model.js";
import { errorHandler } from "../utils/error.js";

 const createTask = async (req, res, next) => {
    const { taskname } = req.body;
    const newTask = new Task({
        taskname
    });
    try {
        await newTask.save();
        res.status(201).json({ message: "Task created successfully" });
    } catch (error) {
        next(error);
    }
};

const listTask = async (req, res, next) => {
    try{
        const tasks = await Task.find().sort({createdAt : -1});
        res.status(200).json({
            success : true,
            message : "Tasks fetched successfully",
            tasks : tasks
        });
    }catch(error){
        next(error);
    }
};

const deleteTask = async (req, res, next) => {
    const id = req.params.id;
    try {
        const task = await Task.findByIdAndDelete(id);
        if(!task){
            return res.status(404).json({message : "Task not found 😿"});
        }
        return res.status(200).json({message : "Task deleted successfully"});
    } catch (error) {
        next(error);
    }
};

const updateTask = async (req, res, next) => {
    const { id, taskname } =  req.body;

    try {
        const task = await Task.findByIdAndUpdate(id, {taskname}, {new : true});
        if(!task){
            return res.status(404).json({message : "Task not found 😿"});
        }
        return res.status(200).json({message : "Task updated successfully"});
    } catch (error) {
        next(error);
    }
};

const getTaskById = async (req, res, next) => {
    const id = req.params.id;
    try {
        const task = await Task.findById(id);
        if(!task){
            return res.status(404).json({message : "Task not found 😿"});
        }
        return res.status(200).json({task});
    } catch (error) {
        next(error);
    }
};

export { createTask, listTask, deleteTask, updateTask, getTaskById };
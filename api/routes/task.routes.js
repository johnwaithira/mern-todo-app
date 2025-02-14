import express from 'express';
import { createTask, listTask, deleteTask, updateTask } from '../controller/task.controller.js';

const router = express.Router();

router.post("/create", createTask);
router.get("/list", listTask);
router.delete("/delete/:id", deleteTask);
router.patch("/update/:id", updateTask);
export default router;
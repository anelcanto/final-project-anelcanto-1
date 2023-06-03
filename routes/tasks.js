import Router from "express";
import { getTasks, getTaskById, createTask, updateTask, deleteTask } from "../controllers/tasks_controller.js";

const taskRoutes = Router();

taskRoutes.route('/')
    .get(getTasks)
    .post(createTask);

taskRoutes.route('/:id')
    .get(getTaskById)
    .patch(updateTask)
    .delete(deleteTask);

export default taskRoutes;
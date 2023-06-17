console.log("enter routes/tasks.js");
import express from 'express';
import { getTasks, getTaskById, createTask, updateTask, deleteTask } from '../controllers/TaskController.js';

const router = express.Router();

console.log("inside routes/tasks.js");
router.route('/')
    .get(getTasks)
    .post(createTask);

router.route('/:id')
    .get(getTaskById)
    .patch(updateTask)
    .delete(deleteTask);

export default router;


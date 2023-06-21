import express from 'express';
import { getTasks, getTaskById, createTask, updateTask, deleteTask } from '../controllers/TaskController.js';
import { isOwner } from '../middleware/userMiddleware.js';

const router = express.Router();

router.route('/')

    .get(getTasks, isOwner)
    .post(createTask);

router.route('/:id')
    .get(getTaskById, isOwner)
    .patch(updateTask, isOwner)
    .delete(deleteTask, isOwner);

export default router;


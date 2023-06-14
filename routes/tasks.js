import express from 'express';
import { getTasks, getTaskById, createTask, updateTask, deleteTask } from '../controllers/TaskController.js';
import { requireAuth } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
    .get(getTasks)
    .post(requireAuth, createTask);

router.route('/:id')
    .get(getTaskById)
    .patch(requireAuth, updateTask)
    .delete(requireAuth, deleteTask);

export { router as tasksRoutes };


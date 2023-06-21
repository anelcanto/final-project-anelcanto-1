import express from 'express';
import { requireAuth } from '../middleware/authMiddleware.js';
import { isAdmin, isOwner } from '../middleware/userMiddleware.js';
import tasksRouter from './tasks.js';
import profileRouter from './profileRoutes.js';

const router = express.Router();

// tasks will only show the current users tasks
router.use('/user', requireAuth, isOwner, profileRouter);
router.use('/tasks', requireAuth, tasksRouter);
router.use('/admin', requireAuth, isAdmin);


export default router;

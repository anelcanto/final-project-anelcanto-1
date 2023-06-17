import express from 'express';
import { requireAuth } from '../middleware/authMiddleware.js';
import { isAdmin, isOwner } from '../middleware/userMiddleware.js';
import tasksRouter from './tasks.js';
import usersRouter from './users.js';

const router = express.Router();

// Middleware to protect the routes
router.use(requireAuth);

// Protected routes for tasks
router.use('/tasks', tasksRouter);



// Protected routes for users
router.use('/users', (req, res, next) => {
    // Check if user is an admin or owner of the user
    if (isAdmin(req.user) || isOwner(req.user, req.params.id)) {
        next();
    } else {
        res.status(401).json({ error: 'Unauthorized access' });
    }
}, usersRouter);

export default router;

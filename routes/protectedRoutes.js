import express from 'express';
import { requireAuth } from '../middleware/authMiddleware.js';
import { tasksRoutes } from '../routes/tasks.js';

const router = express.Router();

// Middleware to protect the routes
router.use(requireAuth);

// Protected routes
router.get('/', (req, res) => {
    // Access the authenticated user's information through req.session.user
    res.json({ message: 'Protected route accessed successfully', user: req.session.user });
});

// Mount the tasks routes under the protected routes
router.use('/tasks', tasksRoutes);

export default router;

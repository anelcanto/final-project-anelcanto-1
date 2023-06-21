import Router from 'express';
import User from '../models/User.js';
import Tasks from '../models/Task.js';
import bcryptjs from 'bcryptjs';
import { getUsers, getUserById, createUser, updateUser, deleteUser } from '../controllers/UsersController.js';
import { getUserTasks, getUserTaskById, createUserTask, updateUserTask, deleteUserTask } from '../controllers/TaskController.js';

const router = Router();

// users
router.route('/users')
    .get(getUsers)
    .post(createUser);
router.route('/users/:id')
    .get(getUserById)
    .patch(updateUser)
    .delete(deleteUser);

// tasks
router.route('/users/:id/tasks')
    .get(getUserTasks)
    .post(createUserTask);
router.route('/users/:id/tasks/:id')
    .get(getUserTaskById)
    .patch(updateUserTask)
    .delete(deleteUserTask);

export default router;



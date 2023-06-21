import express from 'express';
import { getUsers, getUserById, createUser, updateUser, deleteUser } from '../controllers/UserController.js';
import { isOwner } from '../middleware/userMiddleware.js';

const router = express.Router();

router.route('/')

    .get(getUsers, isOwner)
    .post(createUser);

router.route('/:id')
    .get(getUserById, isOwner)
    .patch(updateUser, isOwner)
    .delete(deleteUser, isOwner);

export default router;


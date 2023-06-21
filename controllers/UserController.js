import User from "../models/User.js";
import asyncHandler from 'express-async-handler';
export const {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = {
    getUsers: asyncHandler(async (req, res) => {
        const users = await User.find({});
        res.json(users);
    }
    ),
    getUserById: asyncHandler(async (req, res) => {
        const user = await User.findById(req.params.id);
        if (user) {
            res.json(user);
        }
        else {
            res.status(404).json({ message: 'User not found' });
        }
    }),
    createUser: asyncHandler(async (req, res) => {
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            password: req.body.password,
            role: req.body.role
        });
        const newUser = await user.save();
        res.status(201).json(newUser);
    }),
    updateUser: asyncHandler(async (req, res) => {
        const user = await User.findById(req.params.id);
        if (user) {
            user.username = req.body.username || user.username;
            user.email = req.body.email || user.email;
            user.first_name = req.body.first_name || user.first_name;
            user.last_name = req.body.last_name || user.last_name;
            user.password = req.body.password || user.password;
            user.role = req.body.role || user.role;
            const updatedUser = await user.save();
            res.json(updatedUser);
        }
    }),
    deleteUser: asyncHandler(async (req, res) => {
        const user = await User.findById(req.params.id);
        if (user) {
            const deletedUser = await user.deleteOne();
            res.json(deletedUser);
        }
        else {
            res.status(404).json({ message: 'User not found' });
        }
    })
};


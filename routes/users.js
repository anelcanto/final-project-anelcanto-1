import express from 'express';
import { getTasks, getTaskById, createTask, updateTask, deleteTask } from '../controllers/TaskController.js';
import { isOwner } from '../middleware/userMiddleware.js';

const router = Router();
router.route('/')
    .get(async (req, res) => {
        try {
            const user = await User.find(req.user)
            res.json(user);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    })
// .post(async (req, res) => {
//     const user = new User({
//         username: req.body.username,
//         // hashed_password: await bcrypt.hash(req.body.password, 10),
//         email: req.body.email,
//         first_name: req.body.first_name,
//         last_name: req.body.last_name
//     });

//     try {
//         const newUser = await user.save();
//         res.status(201).json(newUser);
//         // res.status(201).json({ message: "User created successfully" });
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// });

router.route('/:id')
    .get(async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            res.json(user);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    })
    .patch(async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            user.username = req.body.username;
            user.password = req.body.password;
            user.email = req.body.email;
            user.first_name = req.body.first_name;
            user.last_name = req.body.last_name;
            const updatedUser = await user.save();
            res.json(updatedUser);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    })
    .delete(async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            const deletedUser = await user.deleteOne()
            res.json(deletedUser);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    });


export default router;





import Router from 'express';
import User from '../models/User.js';
import bcryptjs from 'bcryptjs';


const router = Router();
router.route('/')

    .get(async (req, res) => {
        try {
            const user = await User.findById(req.user);
            // return a user object without the password
            const user_scrubbed = {
                _id: user._id,
                username: user.username,
                email: user.email,
                role: user.role,
                first_name: user.first_name,
                last_name: user.last_name,
            }
            res.json(user_scrubbed);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    })
    .patch(async (req, res) => {
        try {
            const user = await User.findById(req.user.id);

            const currentPassword = req.body.password;
            if (!currentPassword) {
                return res.status(400).json({ message: 'Current password is required' });
            }
            const passwordMatch = await bcryptjs.compare(currentPassword, user.hashed_password);
            if (!passwordMatch) {
                return res.status(403).json({ message: 'Incorrect password' });
            }

            // Update only the provided fields
            if (req.body.username !== undefined) user.username = req.body.username;
            if (req.body.email !== undefined) user.email = req.body.email;
            if (req.body.first_name !== undefined) user.first_name = req.body.first_name;
            if (req.body.last_name !== undefined) user.last_name = req.body.last_name;

            // If a new password is provided, hash it and update the stored password
            const newPassword = req.body.new_password;
            if (newPassword) {
                user.hashed_password = await bcryptjs.hash(newPassword, 10);
            }

            await user.save();

            const updatedUser = {
                _id: user._id,
                username: user.username,
                email: user.email,
                role: user.role,
                first_name: user.first_name,
                last_name: user.last_name,
            }
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





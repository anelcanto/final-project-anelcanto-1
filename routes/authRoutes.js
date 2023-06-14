// authRoutes.js
import express from 'express';
import bcrypt from 'bcrypt';

const router = express.Router();

// Assuming you have a User model
import User from "../models/User.js"

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find the user in the database by username
        const user = await User.findOne({ username });

        // Check if the user exists and if the provided password matches the hashed password
        if (!user || !bcrypt.compareSync(password, user.hashed_password)) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Store the authenticated user's information in the session
        req.session.user = {
            id: user._id,
            username: user.username,
        };

        res.json({ message: 'Logged in successfully', user: req.session.user });
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/logout', (req, res) => {
    // Destroy the session to log out the user
    req.session.destroy();
    res.json({ message: 'Logged out successfully' });
});

export default router;

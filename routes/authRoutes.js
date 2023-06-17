import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User.js';
const router = express.Router();
import jwt from 'jsonwebtoken';
import { requireAuth } from '../middleware/authMiddleware.js';
import { config } from 'dotenv';
config();

const secret = process.env.JWT_SECRET;


// User registration route
router.post('/signup', async (req, res) => {
    try {
        const { username, password, email, role, first_name, last_name } = req.body;

        // Check if the username or email is already registered
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return res.status(409).json({ message: 'Username or email already exists' });
        }

        // only accept admin creation in this way if there is no admin in the database
        if (role == "admin") {
            const existingAdmin = await User.findOne({ role: "admin" });
            if (existingAdmin) {
                return res.status(409).json({ message: 'Not authorized to create admin' });
            }
        }

        // Hash the password
        const hashed_password = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            username,
            hashed_password,
            email,
            first_name,
            last_name,
            role
        });


        // Save the user to the database
        await newUser.save();

        // Return a success response
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred' });
    }
});

// User login route
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Find the user by username
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        console.log("user: ", user);

        // Compare the password
        const isPasswordValid = await bcrypt.compare(password, user.hashed_password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Create a payload for the JWT
        const payload = {
            id: user._id,
            username: user.username,
            email: user.email,
        };
        console.log("payload", payload);

        // Sign the JWT
        const token = jwt.sign(payload, secret, { expiresIn: '1h' });

        // Return the JWT to the user
        res.json({
            message: 'User logged in successfully',
            token: token
        });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred' });
    }
});

// User logout route
router.post('/logout', requireAuth, (req, res) => {
    // Clear the user session or invalidate the token
    res.json({ message: 'User logged out successfully' });
});

export default router;

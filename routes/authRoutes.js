import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User.js';
import morgan from 'morgan';
import { config } from 'dotenv';
import jwt from 'jsonwebtoken';

config();

const router = express.Router();
const secret = process.env.JWT_SECRET;

// User registration route
router.post('/signup', async (req, res) => {
    try {
        const { username, password, email, first_name, last_name } = req.body;

        // Check if the username or email is already registered
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return res.status(409).json({ message: 'Username or email already exists' });
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
        });

        router.use(morgan('dev'));

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

        // Compare the password
        const isPasswordValid = await bcrypt.compare(password, user.hashed_password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Create a payload for the JWT
        const payload = {
            username: user.username,
            email: user.email,
        };


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
router.post('/logout', (req, res) => {
    // Clear the user session or invalidate the token
    res.json({ message: 'User logged out successfully' });
});

export default router;

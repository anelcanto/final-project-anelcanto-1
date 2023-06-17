import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../models/User.js';
dotenv.config();

const secret = process.env.JWT_SECRET;

export async function requireAuth(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(403).json({ message: 'Authentication token required' });
    }
    try {
        const payload = jwt.verify(token, secret);
        const user = await User.findById(payload.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        req.user = user;
        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Authentication token expired' });
        } else if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ message: 'Invalid authentication token' });
        } else {
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
}
//import packages
import mongoose from "mongoose";
import express from "express";
import morgan from "morgan";
import cors from 'cors';
import path from 'path';

import authRoutes from "./routes/authRoutes.js";
import protectedRoutes from "./routes/protectedRoutes.js";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const URI = process.env.MONGO_URI || "mongodb://localhost:27017/tasks_db";

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const buildPath = path.join(__dirname, 'client', 'build');
;

const db = mongoose.connection;
db.on('error', (error) => console.error(error))
db.once('open', () => {
    console.log('Connected to MongoDB!') // Log message once db opens
    const app = express() // Create express app
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.use(morgan('dev')) // Middleware for logging requests
    app.use(cors());
    app.use((req, res, next) => {
        console.log(req.headers);
        next();
    });



    app.use(express.json()) // Middleware for parsing JSON
    app.use('/api/auth', authRoutes); // Mount the authentication routes
    app.use('/api', protectedRoutes);  // Mount the protected routes

    if (process.env.NODE_ENV === 'production') {
        app.use(express.static('client/build'));
        app.get('*', (req, res) => {
            res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
        });
    }

    const port = process.env.PORT || 3001; // Express server port
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });

})


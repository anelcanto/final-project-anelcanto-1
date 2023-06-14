import mongoose from "mongoose";
import express from "express";
import dotenv, { config } from "dotenv";
import session from 'express-session';
// import the defautl from config/config.js
import { sessionSecret } from './config/config.js';


dotenv.config();

import authRoutes from "./routes/authRoutes.js";
import protectedRoutes from "./routes/protectedRoutes.js";
// import tasksRouter from "./routes/tasks.js";

// import signupRoute from "./routes/signup.js";
import usersRouter from "./routes/users.js";

const URI = process.env.MONGO_URI || "mongodb://localhost:27017/tasks_db";
const PORT = process.env.PORT || 3000;

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection;
db.on('error', (error) => console.error(error))
db.once('open', () => {
    console.log('Connected to MongoDB!') // Log message once db opens
    const app = express() // Create express app
    app.use(
        session({
            // import the secret you have in config/config.js and use here
            secret: sessionSecret,
            resave: false,
            saveUninitialized: false,
        })
    ); // start session
    app.use(express.json()) // Middleware for parsing JSON

    // app.use('/auth', authRoutes); // Mount the authentication routes
    app.use('/api', protectedRoutes);  // Mount the protected routes
    app.use('/api/auth', authRoutes); // Mount the authentication routes
    app.listen(PORT, () => console.log('server started')) // Start server
})


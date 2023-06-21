//import packages
import mongoose from "mongoose";
import express from "express";
import morgan from "morgan";

// import routes
import authRoutes from "./routes/authRoutes.js";
import protectedRoutes from "./routes/protectedRoutes.js";


const URI = process.env.MONGO_URI || "mongodb://localhost:27017/tasks_db";
const PORT = process.env.PORT || 3000;

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection;
db.on('error', (error) => console.error(error))
db.once('open', () => {
    console.log('Connected to MongoDB!') // Log message once db opens
    const app = express() // Create express app
    app.use(morgan('dev')) // Middleware for logging requests
    app.use((req, res, next) => {
        console.log(req.headers);
        next();
    });

    app.use(express.json()) // Middleware for parsing JSON
    app.use('/api/auth', authRoutes); // Mount the authentication routes
    app.use('/api', protectedRoutes);  // Mount the protected routes
    app.listen(PORT, () => console.log('server started')) // Start server
})


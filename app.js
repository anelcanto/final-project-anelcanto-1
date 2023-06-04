import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

import tasksRouter from "./routes/tasks.js";
import signupRoute from "./routes/signup.js";

const URI = process.env.MONGO_URI || "mongodb://localhost:27017/tasks_db"; 
const PORT = process.env.PORT || 3000;

mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection;
db.on('error', (error) => console.error(error))
db.once('open', () => {
    console.log('Connected to MongoDB!') // Log message once db opens
    const app = express() // Create express app
    app.use(express.json()) // Middleware for parsing JSON
    
    app.use('/api/tasks', tasksRouter);
    app.use('/api/signup', signupRoute); 

    app.listen(PORT, () => console.log('server started')) // Start server
})


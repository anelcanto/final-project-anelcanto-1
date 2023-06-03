import mongoose from 'mongoose';
import {config} from 'dotenv';
import express from 'express';
import tasks_routes from './routes/tasks.js';

config();

const URI = process.env.MONGO_URI||"mongodb://mongo:27017/tasks_db"; 
const PORT = process.env.PORT || 3000;

mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection;
db.on('error', (error) => console.error(error))
db.once('open', () => {
    console.log('Connected to MongoDB!') // Log message once db opens
    const app = express() // Create express app
    app.use(express.json()) // Middleware for parsing JSON
    app.use('/tasks', tasks_routes); // Add tasks routes to middleware chain.
    app.listen(PORT, () => console.log('server started')) // Start server
})


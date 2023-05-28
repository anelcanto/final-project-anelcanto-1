import mongoose from 'mongoose';
import express from 'express'
import { config } from 'dotenv';
import tasksRouter from './routes/tasks.js'

config(); // config the dotenv environment using biult in config method
const uri = process.env.MONGO_URI;
// const uri = "mongodb://mongo:27017/tasks_db" // Docker mongo db
// const uri = "mongodb://localhost:27017/tasks_db" // local mongo db
const PORT = process.env.PORT || 3000;

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection;
db.on('error', (error) => console.error(error))
db.once('open', () => {
    console.log('Connected to MongoDB!')
    
    const app = express() // create express app
    // Middleware
    app.use(express.json()) // allows us to parse json

    // Routes
    app.use('/tasks', tasksRouter)       

    app.listen(PORT, () => console.log('server started')) // set up routes

})


   




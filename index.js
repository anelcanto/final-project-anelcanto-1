import mongoose from 'mongoose';
import express from 'express'
import { config } from 'dotenv';
import routes from './routes.js'

config(); // config the dotenv environment using biult in config method
const uri = process.env.MONGO_URI;

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
    app.use('/api', routes)   

    app.listen(PORT, () => console.log('server started')) // set up routes

})


   




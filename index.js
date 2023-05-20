// followinr tutorial https://dev.to/beznet/build-a-rest-api-with-node-express-mongodb-4ho4
import mongoose from 'mongoose';
import express from 'express'
import { config } from 'dotenv';
import tasksRouter from './routes/tasks.js'

config(); // config the dotenv environment using biult in config method
const app = express();
const uri = process.env.MONGO_URI;

// connect to mongodb
mongoose.connect(uri, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

// set up express
app.use(express.json()) // allow us to parse json

// set up routes
app.use('/tasks', tasksRouter)

// start server
app.listen(3005, () => console.log('server started'))


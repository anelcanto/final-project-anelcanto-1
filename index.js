import mongoose from 'mongoose';
import express from 'express'
import { config } from 'dotenv';

config(); // config the dotenv environment using biult in config method
const app = express();
const uri = process.env.MONGO_URI;

mongoose.connect(uri, { useNewUrlParser: true })
console.log("uri: ", uri);
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))
app.listen(3000, () => console.log('server started'))

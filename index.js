import mongo from 'mongodb';
import express from 'express'

const app = express()
const pass = process.env.MONGO_PASS;
const user = process.env.MONGO_USER;
const uri = `mongodb+srv://${user}:${pass}@cluster0.61s1myb.mongodb.net/?appName=mongosh+1.9.0`;

app.listen(3000, () => console.log('server started'))

# Tasks API

## Description

This is a simple API that allows you to create, read, update and delete tasks. It is built using Node.js, Express.js and MongoDB.

> Preview: [Tasks API](https://web-production-8d7a.up.railway.app/api/tasks)


## Table of Contents
- [Setup](#setup)
- [Endpoints](#endpoints)
- [Connect to MongoDB](#connect-to-mongodb)
- [Stack](#stack)
    - [Dependencies](#dependencies)
- [Author](#author)


## Setup
1. Clone this repo
2. Run `docker-compose up` to start the server
3. (Optional) Change the URI string in the .env file to connect to your own MongoDB instance or hardcode it into the `index.js` file. See [Connect to MongoDB](#connect-to-mongodb) for more details.


## Endpoints
The API has the following endpoints:

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| GET | /api/tasks | Get all tasks |
| GET | /api/tasks/:id | Get a single task |
| POST | /api/tasks | Create a new task |
| PUT | /api/tasks/:id | Update a task |
| DELETE | /api/tasks/:id | Delete a task |


## Connect to MongoDB

There are three wasy to connect to a MongoDB instance:

1. Atlas Cloud: Add your URI string to the .env file
2. Local: Add your URI string to the .env file or hardcode into the `index.js` file
3. DockerFile: To connect to the mongo instance created by the dockerfile in this repo you can hardcode the string:
   `mongodb://mongo:27017/tasks_db` as the URI or,
   add to your .env file `MONGO_URI="mongodb://mongo:27017/tasks_db"`

## Stack

- Node.js
- Express.js
- MongoDB
- Docker

### Dependencies

- dotenv
- mongoose
- nodemon

> Note: You can see all the dependencies in the [package.json](./package.json) file

## Author

This project was created by [Anel Canto](https://github.com/anelcanto). Add a star if you like this repo :smile:. 

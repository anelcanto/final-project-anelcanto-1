# Tasks API

## Description

This is a simple API that allows you to create, read, update and delete tasks. It is built using Node.js, Express.js and MongoDB.

> Preview: [Tasks API](https://web-production-8d7a.up.railway.app/api/tasks)

## Setup

1. Clone this repo
2. Run `docker-compose up` to start the server
3. (Optional) Change the URI string in the .env file to connect to your own MongoDB instance or hardcode it into the `server.js` file. See [Connect to MongoDB](#connect-to-mongodb) for more details.
4. Run the endpoints in your browser or Postman. See [Endpoints](#endpoints) for more details.

## Endpoints

If you run your code locally replace the url before the endpoints with `localhost:3000`. The API has the following endpoints:

| Endpoint             | Method | Description                           |
| -------------------- | ------ | ------------------------------------- |
| /api/tasks           | GET    | Get all tasks                         |
| /api/tasks/:id       | GET    | Get a single task by id               |
| /api/tasks           | POST   | Create a new task                     |
| /api/tasks/:id       | PATCH  | Update a task by id                   |
| /api/tasks/:id       | DELETE | Delete a task by id                   |
| /api/users           | GET    | Get all users                         |
| /api/users/:id       | GET    | Get a single user by id               |
| /api/users           | POST   | Create a new user                     |
| /api/users/:id       | PATCH  | Update a user by id                   |
| /api/users/:id       | DELETE | Delete a user by id                   |
| /api/users/tasks     | GET    | Get all tasks with the user's name    |
| /api/users/tasks     | PATCH  | Update a task's user by id            |
| /api/users/tasks     | DELETE | Delete all tasks with the user's name |
| /api/users/:id/tasks | GET    | Get all tasks with the user's id      |
| /api/users/:id/tasks | PATCH  | Update a task's user by id            |
| /api/users/:id/tasks | DELETE | Delete all tasks with the user's id   |
| /api/auth/login      | POST   | Login a user                          |
| /api/auth/logout     | POST   | Logout a user                         |
| /api/auth/signup     | POST   | Register a new user                   |
| /api/profile         | GET    | Get the user's profile                |
| /api/profile         | PATCH  | Update the user's profile             |
| /api/profile         | DELETE | Delete the user's profile             |

|

There are three ways to connect to a MongoDB instance:

1. Atlas Cloud: Add your URI string to the .env file
2. Local: Add your URI string to the .env file or hardcode into the `server.js` file
3. Dockerfile: To connect to the mongo instance created by the Dockerfile in this repo you can hardcode the string:
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

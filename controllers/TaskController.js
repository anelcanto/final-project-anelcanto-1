import Task from '../models/Task.js';
import asyncHandler from 'express-async-handler';
export const {
    getTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
} = {
    getTasks: asyncHandler(async (req, res) => {
        const tasks = await Task.find({ user: req.user });
        res.json(tasks);

    }),
    getTaskById: asyncHandler(async (req, res) => {
        const task = await Task.findById(req.params.id);
        if (task) {
            res.json(task);
        }
        else {
            res.status(404).json({ message: 'Task not found' });
        }
    }),
    createTask: asyncHandler(async (req, res) => {
        const task = new Task({
            title: req.body.title,
            completed: req.body.completed,
            description: req.body.description,
            due_date: req.body.due_date,
            priority: req.body.priority,
            labels: req.body.labels,
            user: req.user
        });
        const newTask = await task.save();
        res.status(201).json(newTask);
    }),
    updateTask: asyncHandler(async (req, res) => {
        const task = await Task.findById(req.params.id);
        if (task) {
            task.title = req.body.title;
            task.completed = req.body.completed;
            task.description = req.body.description;
            task.due_date = req.body.due_date;
            task.priority = req.body.priority;
            task.labels = req.body.labels;
            task.user = req.user;

            const updatedTask = await task.save();
            res.json(updatedTask);
        } else {
            res.status(404).json({ message: 'Task not found' });
        }
    }),
    deleteTask: asyncHandler(async (req, res) => {
        const task = await Task.findById(req.params.id);
        if (task) {
            await task.remove();
            res.json({ message: 'Task removed' });
        } else {
            res.status(404).json({ message: 'Task not found' });
        }
    })
};

import { Router } from 'express';
import Task from '../models/task.js';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    const task = new Task({
        title: req.body.title,
        completed: req.body.completed,
        description: req.body.description,
        due_date: req.body.due_date,
        priority: req.body.priority,
        labels: req.body.labels
    });

    try {
        const newTask = await task.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

export default router;

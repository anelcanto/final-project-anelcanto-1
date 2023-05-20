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

router.get('/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        res.json(task);
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

router.patch('/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        task.title = req.body.title;
        task.completed = req.body.completed;
        task.description = req.body.description;
        task.due_date = req.body.due_date;
        task.priority = req.body.priority;
        task.labels = req.body.labels;
        const updatedTask = await task.save();
        res.json(updatedTask);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        const deletedTask = await task.remove();
        res.json(deletedTask);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;

import { Router } from 'express';
import Task from './models/task.js';

const router = Router();
router.get('/', (req, res) => {
    res.send('Use route /api/tasks');
});

router.route('/tasks/')
    .get(async (req, res) => {
        try {
            const tasks = await Task.find();
            res.json(tasks);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    })
    .post(async (req, res) => {
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

router.route('/tasks/:id')
    .get(async (req, res) => {
        try {
            const task = await Task.findById(req.params.id);
            res.json(task);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    })
    .patch(async (req, res) => {
        try {
            const task = await Task.findById(req.params.id);
            task.title = req.body.title;
            task.completed = req.body.completed;
            task.description = req.body.description;
            task.due_date = req.body.due_date;
            req.body.priority? task.priority = req.body.priority: task.priority;
            task.priority = req.body.priority;
            task.labels = req.body.labels;
            const updatedTask = await task.save();
            res.json(updatedTask);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    })
    .delete(async (req, res) => {
        try {
            const task = await Task.findById(req.params.id);
            const deletedTask = await task.deleteOne()
            res.json(deletedTask);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    });




export default router;

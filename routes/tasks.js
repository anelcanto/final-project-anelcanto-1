import { Router } from 'express';

const router = Router();

router.route('/')
    // GET all tasks endpoint
    .get((req, res) => {
        res.send('Hello World!')
    })
    // POST a new task endpoint
    .post((req, res) => {
        
    });

router.route('/:id')
    // GET a task by id endpoint
    .get((req, res) => {

    })

    // UPDATE a task by id endpoint
    .put((req, res) => {

    })

    // DELETE a task by id endpoint
    .delete((req, res) => {

    });

    
        

export default router;


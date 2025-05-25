import { Router } from 'express';
import { TaskController } from '../controllers/task.controller';
import { TaskService } from '../services/task.service';

const router = Router();
const taskService = new TaskService();
const taskController = new TaskController(taskService);

// GET /api/tasks
router.get('/', (req, res) => taskController.getAllTasks(req, res));

// GET /api/tasks/:id
router.get('/:id', (req, res) => taskController.getTaskById(req, res));

// POST /api/tasks
router.post('/', (req, res) => taskController.createTask(req, res));

// PUT /api/tasks/:id
router.put('/:id', (req, res) => taskController.updateTask(req, res));

// DELETE /api/tasks/:id
router.delete('/:id', (req, res) => taskController.deleteTask(req, res));

export default router; 
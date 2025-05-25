import type { Request, Response } from 'express';
import { TaskService } from '../services/task.service';
import { CreateTaskDto, UpdateTaskDto } from '../models/task.model';

export class TaskController {
  constructor(private taskService: TaskService) {}

  async getAllTasks(req: Request, res: Response): Promise<void> {
    try {
      const tasks = await this.taskService.getAllTasks();
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching tasks' });
    }
  }

  async getTaskById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const task = await this.taskService.getTaskById(id);
      
      if (!task) {
        res.status(404).json({ message: 'Task not found' });
        return;
      }
      
      res.json(task);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching task' });
    }
  }

  async createTask(req: Request, res: Response): Promise<void> {
    try {
      const createTaskDto: CreateTaskDto = req.body;
      const newTask = await this.taskService.createTask(createTaskDto);
      res.status(201).json(newTask);
    } catch (error) {
      res.status(500).json({ message: 'Error creating task' });
    }
  }

  async updateTask(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const updateTaskDto: UpdateTaskDto = req.body;
      const updatedTask = await this.taskService.updateTask(id, updateTaskDto);
      
      if (!updatedTask) {
        res.status(404).json({ message: 'Task not found' });
        return;
      }
      
      res.json(updatedTask);
    } catch (error) {
      res.status(500).json({ message: 'Error updating task' });
    }
  }

  async deleteTask(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const deleted = await this.taskService.deleteTask(id);
      
      if (!deleted) {
        res.status(404).json({ message: 'Task not found' });
        return;
      }
      
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: 'Error deleting task' });
    }
  }
} 
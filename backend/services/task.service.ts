import { Task, CreateTaskDto, UpdateTaskDto } from '../models/task.model';

export class TaskService {
  private tasks: Task[] = [];
  private nextId = 1;

  async getAllTasks(): Promise<Task[]> {
    return this.tasks;
  }

  async getTaskById(id: number): Promise<Task | null> {
    const task = this.tasks.find(t => t.id === id);
    return task || null;
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const newTask: Task = {
      id: this.nextId++,
      ...createTaskDto,
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.tasks.push(newTask);
    return newTask;
  }

  async updateTask(id: number, updateTaskDto: UpdateTaskDto): Promise<Task | null> {
    const taskIndex = this.tasks.findIndex(t => t.id === id);
    if (taskIndex === -1) return null;

    const updatedTask: Task = {
      ...this.tasks[taskIndex],
      ...updateTaskDto,
      updatedAt: new Date()
    };
    
    this.tasks[taskIndex] = updatedTask;
    return updatedTask;
  }

  async deleteTask(id: number): Promise<boolean> {
    const taskIndex = this.tasks.findIndex(t => t.id === id);
    if (taskIndex === -1) return false;

    this.tasks.splice(taskIndex, 1);
    return true;
  }
} 
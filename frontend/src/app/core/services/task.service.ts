import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private readonly endpoint = '/tasks';

  constructor(private api: ApiService) {}

  // Get all tasks
  getAllTasks(): Observable<Task[]> {
    return this.api.get<Task[]>(this.endpoint);
  }

  // Get task by ID
  getTaskById(id: number): Observable<Task> {
    return this.api.get<Task>(`${this.endpoint}/${id}`);
  }

  // Create new task
  createTask(task: Partial<Task>): Observable<Task> {
    return this.api.post<Task>(this.endpoint, task);
  }

  // Update task
  updateTask(id: number, task: Partial<Task>): Observable<Task> {
    return this.api.put<Task>(`${this.endpoint}/${id}`, task);
  }

  // Delete task
  deleteTask(id: number): Observable<void> {
    return this.api.delete<void>(`${this.endpoint}/${id}`);
  }
} 
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../../core/services/task.service';
import { Task } from '../../../../core/models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  showAddForm = false;

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getAllTasks().subscribe(
      tasks => this.tasks = tasks,
      error => console.error('Error loading tasks:', error)
    );
  }

  onAddTask(task: Partial<Task>) {
    this.taskService.createTask(task).subscribe(
      newTask => {
        this.tasks.push(newTask);
        this.showAddForm = false;
      },
      error => console.error('Error creating task:', error)
    );
  }

  toggleTaskStatus(task: Task) {
    const updatedTask = { ...task, completed: !task.completed };
    this.taskService.updateTask(task.id, updatedTask).subscribe(
      response => {
        const index = this.tasks.findIndex(t => t.id === task.id);
        if (index !== -1) {
          this.tasks[index] = response;
        }
      },
      error => console.error('Error updating task:', error)
    );
  }

  onEditTask(task: Task) {
    // Implement edit functionality
    console.log('Edit task:', task);
  }

  deleteTask(taskId: number) {
    if (confirm('Are you sure you want to delete this task?')) {
      this.taskService.deleteTask(taskId).subscribe(
        () => {
          this.tasks = this.tasks.filter(task => task.id !== taskId);
        },
        error => console.error('Error deleting task:', error)
      );
    }
  }
} 
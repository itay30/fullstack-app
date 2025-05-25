import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-home',
  template: `
    <div class="home-container">
      <h1>Welcome to the Full-stack App</h1>
      <p>This is a template application built with Angular and Node.js</p>
      <div class="server-status" *ngIf="status">
        <h3>Server Status</h3>
        <p>{{ status.message }}</p>
      </div>
    </div>
  `,
  styles: [`
    .home-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }
    h1 {
      color: #2c3e50;
      margin-bottom: 1rem;
    }
    .server-status {
      margin-top: 2rem;
      padding: 1rem;
      background-color: #f8f9fa;
      border-radius: 4px;
    }
  `]
})
export class HomeComponent implements OnInit {
  status: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.get<any>('/health').subscribe(
      response => this.status = response,
      error => console.error('Error fetching server status:', error)
    );
  }
} 
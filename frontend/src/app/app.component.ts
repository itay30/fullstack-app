import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-container">
      <nav class="navbar">
        <a routerLink="/home" routerLinkActive="active">Home</a>
        <a routerLink="/tasks" routerLinkActive="active">Tasks</a>
      </nav>
      <main class="main-content">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    .navbar {
      padding: 1rem;
      background-color: #f8f9fa;
      border-bottom: 1px solid #e9ecef;
      display: flex;
      gap: 1rem;
    }
    .navbar a {
      color: #333;
      text-decoration: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      &:hover {
        background-color: #e9ecef;
      }
      &.active {
        color: #007bff;
        background-color: #e9ecef;
      }
    }
    .main-content {
      flex: 1;
      padding: 2rem;
    }
  `]
})
export class AppComponent {
  title = 'frontend';
} 
# Full-stack Application

A full-stack web application built with Angular 11.1.2 and Node.js 14.21.3, featuring task management and adventure destination browsing.

## Features

- Task Management: Create, read, update, and delete tasks
- Adventure Destinations: Browse and search through adventure destinations
- Responsive Design: Modern UI with responsive layout
- Image Integration: High-quality images from Unsplash
- Search Functionality: Search through tasks and adventure items

## Project Structure

```
fullstack-app/
├── frontend/                # Angular application
│   ├── src/
│   │   ├── app/
│   │   │   ├── core/       # Core functionality
│   │   │   │   └── services/
│   │   │   │       ├── api.service.ts
│   │   │   │       ├── item.service.ts
│   │   │   │       └── task.service.ts
│   │   │   └── features/   # Feature modules
└── backend/                # Node.js application
    ├── controllers/        # Route handlers
    │   └── item.controller.ts
    ├── services/          # Business logic
    │   └── item.service.ts
    ├── data/             # Mock data
    │   └── mock-items.json
    └── routes/           # API routes
```

## Prerequisites

- Node.js 14.21.3
- Angular CLI 11.1.2
- TypeScript 5.0.4

## Setup Instructions

### Backend Setup

1. Install Node.js 14.21.3
2. Navigate to the backend directory:
   ```bash
   cd backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Install Angular CLI 11.1.2:
   ```bash
   npm install -g @angular/cli@11.1.2
   ```
2. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   ng serve
   ```

## Available Scripts

### Backend

- `npm start`: Start the production server
- `npm run dev`: Start the development server with hot-reload
- `npm run build`: Build the TypeScript application

### Frontend

- `ng serve`: Start the development server
- `ng build`: Build the application
- `ng test`: Run unit tests
- `ng e2e`: Run end-to-end tests

## API Endpoints

### Items

- `GET /api/items`: Get all adventure destinations
- `GET /api/items/:id`: Get a specific adventure destination
- `GET /api/items/search/:query`: Search adventure destinations

### Tasks

- `GET /api/tasks`: Get all tasks
- `GET /api/tasks/:id`: Get a specific task
- `POST /api/tasks`: Create a new task
- `PUT /api/tasks/:id`: Update a task
- `DELETE /api/tasks/:id`: Delete a task 
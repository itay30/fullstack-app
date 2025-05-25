# Full-stack Application

A full-stack web application built with Angular 11.1.2 and Node.js 14.21.3.

## Project Structure

```
fullstack-app/
├── frontend/          # Angular application
└── backend/          # Node.js application
    ├── app.ts        # Main application file
    ├── models/       # Data models and DTOs
    ├── services/     # Business logic
    ├── controllers/  # Route handlers
    └── routes/       # API routes
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
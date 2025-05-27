# Residential Facility Booking System

A modern full-stack application for managing and booking residential building amenities. Built with Angular frontend and Node.js backend, this system allows residents to easily book and manage their facility reservations.

## Features

### Facility Management
- Browse available building amenities (Fitness Center, Pool, Co-Working Space, etc.)
- View detailed facility information including:
  - Capacity limits
  - Available features
  - Location within the building
  - Real-time availability

### Booking System
- Easy-to-use booking interface
- Date and time selection
- Instant availability checking
- Booking confirmation system
- Personal booking management
  - View upcoming bookings
  - View booking history
  - Cancel bookings

### User Features
- Personal booking dashboard
- Booking descriptions for event planning
- User identification for each booking
- Responsive design for mobile and desktop use

## Technical Stack

### Frontend
- Angular
- TypeScript
- SCSS for styling
- Responsive design
- Modern UI components

### Backend
- Node.js
- Express
- TypeScript
- RESTful API architecture

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- Angular CLI

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd residential-facility-booking
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd frontend
npm install
```

### Running the Application

1. Start the backend server:
```bash
cd backend
npm run start
```

2. Start the frontend application:
```bash
cd frontend
ng serve
```

3. Access the application at `http://localhost:4200`

## Usage

1. Browse Facilities
   - View all available facilities
   - Filter by facility type
   - Search by facility name

2. Make a Booking
   - Select desired facility
   - Choose date and time
   - Enter booking details
   - Confirm reservation

3. Manage Bookings
   - View all your bookings
   - Check upcoming reservations
   - Cancel if needed

## Project Structure

```
├── frontend/                # Angular frontend application
│   ├── src/
│   │   ├── app/
│   │   │   ├── core/       # Core services
│   │   │   ├── features/   # Feature modules
│   │   │   └── shared/     # Shared components
│   │   └── assets/         # Static assets
│   └── ...
│
├── backend/                 # Node.js backend application
│   ├── src/
│   │   ├── controllers/    # Request handlers
│   │   ├── models/        # Data models
│   │   ├── routes/        # API routes
│   │   └── services/      # Business logic
│   └── ...
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 
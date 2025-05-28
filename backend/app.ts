import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import facilityRoutes from './routes/facility.routes';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/facilities', facilityRoutes);

// Health check endpoint
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ message: 'Server is running' });
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app; 
import express from 'express';
import cors from 'cors';
import serverInfoRoute from './api/routes/serverinfo.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/server-info', serverInfoRoute);

// Export the server as a Vercel serverless function
export default app;

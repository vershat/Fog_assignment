import express from 'express';
import cors from 'cors';
import serverInfoRoute from './routes/serverInfo.js'; // Updated import for serverinfo.js

// Initialize app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/server-info', serverInfoRoute); // Use serverinfo.js for the server info route

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

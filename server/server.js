// Import the Express.js framework
const express = require('express');

// Import CORS middleware
const cors = require('cors');

// Create an instance of the Express application
const app = express();

// Load environment variables from a .env file into process.env
require('dotenv').config();

// Import the database configuration module from ./config/dbConfig.js
const dbConfig = require('./config/dbConfig');

// CORS configuration
app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:3000', // Allow requests from the React app
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware to parse incoming requests with JSON payloads
app.use(express.json());

// Import the userRoute module containing route handlers for user-related operations
const userRoute = require('./routes/userRoute');

// Import the movieRoute module containing route handlers for movie-related operations
const moviesRoute = require('./routes/moviesRoute');

// Import the theatreRoute module containing route handlers for theatre-related operations
const theatresRoute = require('./routes/theatresRoute');

// Add the userRoute module as middleware to handle requests starting with /api/users
app.use('/api/users', userRoute);

// Add the movieRoute module as middleware to handle requests starting with /api/movies
app.use('/api/movies', moviesRoute);

// Add the theatreRoute module as middleware to handle requests starting with /api/theatres
app.use('/api/theatres', theatresRoute);

// Set the port to listen on. It will use the value of PORT environment variable if set, otherwise use 5000.
const port = process.env.PORT || 5000;

// Start the Express server and listen on the specified port.
app.listen(port, () => console.log(`Node JS server is running on port ${port}`));
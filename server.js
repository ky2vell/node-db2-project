const express = require('express');
const welcomeRouter = require('./routes/welcomeRouter');
const carsRouter = require('./routes/carsRouter');
const error = require('./middleware/error');
const colors = require('colors');

const server = express();

server.use(express.json());

// API Routes
server.use(welcomeRouter);
server.use('/api/cars', carsRouter);

// Error MiddleWare
server.use(error);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`\n== API running on port ${PORT} ==\n`.yellow.bold);
});

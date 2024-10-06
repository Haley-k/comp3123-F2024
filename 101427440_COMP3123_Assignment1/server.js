const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./db');
const SERVER_PORT = process.env.PORT || 8000;
require('dotenv').config();

const app = express();

connectDB();

app.use(express.json());

const userRouter = require('./routes/userRoutes');
const empRouter = require('./routes/empRoutes');

app.use('/api/v1/user', userRouter);
app.use('/api/v1/emp', empRouter);


app.listen(SERVER_PORT, () => {
  console.log(`Server is running on port ${SERVER_PORT}`);
});

module.exports = app;
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./db');
const SERVER_PORT = process.env.PORT || 8000;
require('dotenv').config();

const app = express();

connectDB();

app.use(express.json());

app.use('/api/v1/user', require('./routes/userRoutes'));
app.use('/api/v1/emp', require('./routes/empRoutes'));


app.listen(SERVER_PORT, () => {
  console.log(`Server is running on port ${SERVER_PORT}`);
});
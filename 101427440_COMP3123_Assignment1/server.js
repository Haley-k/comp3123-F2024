const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const SERVER_PORT = process.env.PORT || 8000;
const mongo_URI = process.env.MONGO_URI;

const app = express();

(async () => {
  try {
      if (!mongo_URI) {
          throw new Error('MONGO_URI not found');
      }
      
      await mongoose.connect(mongo_URI);
      console.log('MongoDB connected successfully');
  } catch (err) {
      console.error('MongoDB connection failed:', err.message);
      process.exit(1);
  }
})();

app.use(express.json());






// Test endpoint to check database connection
app.get('/api/v1/test-db', async (req, res) => {
  try {
    await mongoose.connection.db.admin().ping();
    res.status(200).send('Database connection is successful');
  } catch (error) {
    console.error('Database connection test failed:', error);
    res.status(500).send('Database connection failed');
  }
});






const userRouter = require('./routes/userRoutes');
const empRouter = require('./routes/empRoutes');

app.use('/api/v1/user', userRouter);
app.use('/api/v1/emp', empRouter);

app.listen(SERVER_PORT, () => {
  console.log(`Server is running on port ${SERVER_PORT}`);
});

module.exports = app;
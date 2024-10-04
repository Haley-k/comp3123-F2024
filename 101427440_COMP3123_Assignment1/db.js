const mongoose = require('mongoose');
require('dotenv').config();

const mongo_URI = process.env.mongo_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(mongo_URI);
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('MongoDB connection failed:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
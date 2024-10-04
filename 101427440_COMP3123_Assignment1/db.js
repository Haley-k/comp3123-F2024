const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://Cluster63457:amNdcFFocEVN@cluster63457.lpf9y.mongodb.net/comp3123_assignment1?retryWrites=true&w=majority';

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('MongoDB connection failed:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
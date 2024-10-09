import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import noteRoutes from './routes/NoteRoutes.js';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const DB_URL = "mongodb+srv://lab-ex-6:lab-ex-666@cluster63457.lpf9y.mongodb.net/note?retryWrites=true&w=majority&appName=Cluster63457"

mongoose.Promise = global.Promise;

// TODO - Update your mongoDB Atals Url here to Connect to the database
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.use('/api', noteRoutes);

app.get('/', (req, res) => {
    res.send("<h1>Welcome to Note taking application - Week06 Exercise</h1>");
});


app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});
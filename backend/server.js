const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


//Middleware
app.use(cors());       // Why used : Allow frontend to make requests to backend from different origin
app.use(express.json());  // Why used : Parse JSON bodies

// Database connection 
const connectDB = async () => {
    try {
        // Determine MongoDB URI (prefer env var, otherwise fall back to localhost)
        const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/developer-directory';
        if (!process.env.MONGO_URI) {
            console.warn('Warning: MONGO_URI not set. Falling back to local MongoDB at:', mongoUri);
            console.warn('If you intended to use Atlas or another DB, create a backend/.env file with a MONGO_URI value. See backend/.env.example');
        }

        // Attempt to connect using the resolved URI
        await mongoose.connect(mongoUri);
        console.log('MongoDB connected successfully');
    } catch(error) {
        console.error(`MongoDB connection error: ${error.message}`);
        // Exit process with failure
        process.exit(1);
    }
};

connectDB();

//Routes
const developerRoutes = require('./routes/developerRoutes');
app.use('/api/developers', developerRoutes);

// Sample route
app.get('/', (req,res) => {
    res.send('Developer directory API running');
});

//Start Server
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});




const mongoose = require("mongoose");

// Connect to the local MongoDB server running on default port 27017 and the database named "Book-Store"
mongoose.connect('mongodb://127.0.0.1:27017/Book-Store');

// Get the default connection
const db = mongoose.connection;

// Event listener for connection errors
db.on('error', (error) => {
    console.error('Error connecting to MongoDB:', error.message);
});

// Event listener for successful connection
db.once('open', function () {
    console.log('Successfully connected to MongoDB');
});

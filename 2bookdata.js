const mongoose = require('mongoose');

// Define a Mongoose schema for books
const booksSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true // Title is a required field of type String
    },
    author: {
        type: String,
        required: true // Author is a required field of type String
    },
    isbn: {
        type: String,
        required: true // ISBN is a required field of type String
    },
    price: {
        type: Number,
        required: true // Price is a required field of type Number
    },
    quantity: {
        type: Number,
        required: true // Quantity is a required field of type Number
    },
    image: {
        type: String,
        required: true // Image URL is a required field of type String
    }
});

// Create a Mongoose model named 'BooksData' based on the booksSchema
const BooksData = mongoose.model('BooksData', booksSchema);

// Export the BooksData model to be used in other parts of the application
module.exports = BooksData;

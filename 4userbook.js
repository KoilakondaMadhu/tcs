const mongoose = require('mongoose');

// Define a Mongoose schema for user's books
const userBookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true // Title of the book is required
    },
    author: {
        type: String,
        required: true // Author of the book is required
    },
    isbn: {
        type: String,
        required: true // ISBN of the book is required
    },
    price: {
        type: Number,
        required: true // Price of the book is required
    },
    quantity: {
        type: Number,
        required: true // Quantity of the book is required
    },
    image: {
        type: String,
        required: true // Image URL of the book is required
    }
});

// Create a Mongoose model named 'UserBookData' based on the userBookSchema
const UserBookData = mongoose.model('UserBookData', userBookSchema);

// Export the UserBookData model to be used in other parts of the application
module.exports = UserBookData;
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//     +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++===========================================


const UserBookData = require('./userBookModel'); // Import the UserBookData model

// Example usage:
const newBook = new UserBookData({
    title: 'Book Title',
    author: 'Book Author',
    isbn: '1234567890',
    price: 29.99,
    quantity: 10,
    image: 'https://example.com/book-image.jpg'
});

// Save the new book document to the MongoDB collection
newBook.save()
    .then(savedBook => {
        console.log('Saved book:', savedBook);
    })
    .catch(error => {
        console.error('Error saving book:', error);
    });

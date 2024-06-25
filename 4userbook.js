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

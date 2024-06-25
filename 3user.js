const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

// Define a Mongoose schema for users
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true // User's name is required
    },
    password: {
        type: String,
        required: true // User's password is required
    },
    email: {
        type: String,
        required: true // User's email address is required
    },
    userid: {
        type: Number,
        required: true // User ID is required and must be a number
    },
    isAdmin: {
        type: Boolean,
        default: false // isAdmin defaults to false for regular users
    },
});

// Mongoose middleware: runs before saving a user document
userSchema.pre('save', async function (next) {
    try {
        // If the password hasn't been modified, move on to the next middleware or save
        if (!this.isModified('password')) {
            return next();
        }

        // Generate a salt for hashing the password
        const salt = await bcrypt.genSalt(10);

        // Hash the password using bcrypt and the generated salt
        const hashedPassword = await bcrypt.hash(this.password, salt);

        // Set the user's password to the hashed password
        this.password = hashedPassword;

        // Proceed to the next middleware or save operation
        next();
    } catch (error) {
        next(error); // Pass any error to the next middleware
    }
});

// Method to compare a provided password with the stored hashed password
userSchema.methods.comparePassword = async function (password) {
    // Use bcrypt to compare the provided password with the stored hashed password
    return bcrypt.compare(password, this.password);
};

// Create a Mongoose model named 'UserData' based on the userSchema
const UserData = mongoose.model('UserData', userSchema);

// Export the UserData model to be used in other parts of the application
module.exports = UserData;

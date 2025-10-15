const mongoose = require('mongoose');

// Define a User Schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model('User', userSchema);

// Sign In Endpoint
app.post('/api/signin', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Basic validation
        if (!username || !password) {
            return res.status(400).json({ message: 'Username and password are required.' });
        }

        // Find user in the database
        const user = await User.findOne({ username, password });

        if (user) {
            // Authentication successful
            return res.status(200).json({ message: 'Sign-in successful' });
        } else {
            // Authentication failed
            return res.status(401).json({ message: 'Invalid username or password.' });
        }
    } catch (error) {
        console.error('Sign-in error:', error);
        return res.status(500).json({ message: 'Server error. Please try again later.' });
    }
});

// Sign Up Endpoint
app.post('/api/signup', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Basic validation
        if (!username || !password) {
            return res.status(400).json({ message: 'Username and password are required.' });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ username });

        if (existingUser) {
            return res.status(409).json({ message: 'Username already exists.' });
        } else {
            // Create a new user in the database
            const newUser = new User({ username, password });
            await newUser.save();
            return res.status(201).json({ message: 'Sign-up successful.' });
        }
    } catch (error) {
        console.error('Sign-up error:', error);
        return res.status(500).json({ message: 'Server error. Please try again later.' });
    }
});

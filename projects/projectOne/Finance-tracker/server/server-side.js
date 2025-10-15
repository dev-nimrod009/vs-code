import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bcrypt from 'bcrypt';

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
const mongoURI = 'mongodb://localhost:27017/financial_dashboard';
mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB connected successfully.'))
    .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
    credentials: true
}));
app.use(express.json());

// --- Mongoose Schemas and Models ---
const transactionSchema = new mongoose.Schema({
    description: { type: String, required: true },
    category: { type: String, required: true },
    amount: { type: Number, required: true },
    type: { type: String, required: true, enum: ['income', 'expense'] },
    createdAt: { type: Date, default: Date.now },
});
const Transaction = mongoose.model('Transaction', transactionSchema);

const accountSchema = new mongoose.Schema({
    accountName: { type: String, required: true },
    accountBalance: { type: Number, required: true },
    accountType: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});
const Account = mongoose.model('Account', accountSchema);

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true }
});
const User = mongoose.model('User', userSchema);

// --- Generic error handling utility function ---
const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};

// --- API Endpoints ---

// Sign Up Endpoint
app.post('/api/signup', asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'All fields are required.' });
    }
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
        return res.status(409).json({ message: 'Username or email already exists.' });
    }
    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, passwordHash });
    await newUser.save();
    res.status(201).json({ message: 'Account created successfully.' });
}));

// Sign In Endpoint
app.post('/api/signin', asyncHandler(async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials.' });
    }
    const isValid = await bcrypt.compare(password, user.passwordHash);
    if (!isValid) {
        return res.status(401).json({ message: 'Invalid credentials.' });
    }
    res.status(200).json({ message: 'Login successful.' });
}));

// Transactions Endpoints
app.get('/api/transactions', asyncHandler(async (req, res) => {
    const transactions = await Transaction.find().sort({ createdAt: -1 });
    res.json(transactions);
}));

app.post('/api/transactions', asyncHandler(async (req, res) => {
    const newTransaction = new Transaction(req.body);
    const savedTransaction = await newTransaction.save();
    res.status(201).json(savedTransaction);
}));

app.delete('/api/transactions/:id', asyncHandler(async (req, res) => {
    const transaction = await Transaction.findByIdAndDelete(req.params.id);
    if (!transaction) return res.status(404).json({ message: 'Transaction not found.' });
    res.json({ message: 'Transaction deleted.' });
}));

// Accounts Endpoints
app.get('/api/accounts', asyncHandler(async (req, res) => {
    const accounts = await Account.find();
    res.json(accounts);
}));

app.post('/api/accounts', asyncHandler(async (req, res) => {
    const newAccount = new Account(req.body);
    const savedAccount = await newAccount.save();
    res.status(201).json(savedAccount);
}));

app.delete('/api/accounts/:id', asyncHandler(async (req, res) => {
    const account = await Account.findByIdAndDelete(req.params.id);
    if (!account) return res.status(404).json({ message: 'Account not found.' });
    res.json({ message: 'Account deleted.' });
}));

// Dashboard Summary Endpoint
app.get('/api/dashboard', asyncHandler(async (req, res) => {
    const incomeTransactions = await Transaction.find({ type: 'income' });
    const totalIncome = incomeTransactions.reduce((sum, t) => sum + t.amount, 0);

    const expenseTransactions = await Transaction.find({ type: 'expense' });
    const totalExpense = expenseTransactions.reduce((sum, t) => sum + t.amount, 0);

    res.json({ totalIncome, totalExpense });
}));

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    // Check if the error is a Mongoose validation error
    if (err.name === 'ValidationError') {
        const messages = Object.values(err.errors).map(val => val.message);
        return res.status(400).json({ message: messages.join(', ') });
    }
    res.status(500).json({ message: 'An internal server error occurred.' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

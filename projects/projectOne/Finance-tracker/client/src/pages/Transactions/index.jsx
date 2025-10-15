import React, { useState, useEffect } from 'react';

// SCSS for the component, injected dynamically to keep it a single file.
const transactionsScss = `
:root {
    --primary-color: #2563eb;
    --primary-color-hover: #1d4ed8;
    --secondary-color: #6b7280;
    --secondary-color-hover: #4b5563;
    --background-color: #f3f4f6;
    --text-color-dark: #1f2937;
    --text-color-light: #4b5563;
    --border-color: #d1d5db;
    --white: #ffffff;
    --box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --success-color: #10b981;
    --error-color: #ef4444;
    --income-color: #22c55e;
    --expense-color: #ef4444;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--background-color);
}

.transactions-page {
    min-height: 100vh;
    padding: 2rem;
}

.transactions-container {
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
}

.transactions-hero {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    gap: 1rem;
}

@media (min-width: 768px) {
    .transactions-hero {
        flex-direction: row;
    }
}

.hero-title {
    font-size: 2.25rem;
    font-weight: 800;
    color: var(--text-color-dark);
}

.hero-actions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
}

@media (min-width: 768px) {
    .hero-actions {
        flex-direction: row;
        width: auto;
    }
}

.search-input {
    flex-grow: 1;
    max-width: 300px;
    padding: 0.75rem;
    border-radius: 0.5rem;
    border: 1px solid var(--border-color);
    transition: all 0.2s ease-in-out;
}

.search-input:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.25);
}

.action-buttons {
    display: flex;
    gap: 0.5rem;
}

.btn {
    padding: 0.75rem 1.25rem;
    border-radius: 0.5rem;
    font-weight: 500;
    cursor: pointer;
    border: none;
    transition: background-color 0.2s ease-in-out;
}

.filter-btn {
    background-color: var(--secondary-color);
    color: var(--white);
}

.filter-btn:hover {
    background-color: var(--secondary-color-hover);
}

.add-btn {
    background-color: var(--primary-color);
    color: var(--white);
}

.add-btn:hover {
    background-color: var(--primary-color-hover);
}

.status-message {
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    position: relative;
}

.success-message {
    background-color: #d1fae5;
    border: 1px solid #34d399;
    color: #065f46;
}

.error-message {
    background-color: #fee2e2;
    border: 1px solid #f87171;
    color: #991b1b;
}

.main-transactions {
    background-color: var(--white);
    border-radius: 0.75rem;
    box-shadow: var(--box-shadow);
    overflow: hidden;
}

.loading-message, .no-transactions-message {
    padding: 2rem;
    text-align: center;
    color: var(--text-color-light);
    font-style: italic;
}

.table-wrapper {
    overflow-x: auto;
}

table {
    width: 100%;
    border-collapse: collapse;
}

thead th {
    padding: 0.75rem 1.5rem;
    text-align: left;
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--text-color-light);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    background-color: #f9fafb;
}

tbody tr {
    transition: background-color 0.2s ease-in-out;
}

tbody tr:hover {
    background-color: #f9fafb;
}

tbody td {
    padding: 1rem 1.5rem;
    font-size: 0.875rem;
    color: var(--text-color-dark);
}

.text-income {
    color: var(--income-color);
    font-weight: 500;
}

.text-expense {
    color: var(--expense-color);
    font-weight: 500;
}

.delete-btn {
    color: var(--error-color);
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 0.875rem;
    transition: color 0.2s ease-in-out;
}

.delete-btn:hover {
    color: var(--error-color);
    opacity: 0.8;
}

/* Modal Form Styling */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    background-color: var(--white);
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    max-width: 36rem;
    width: 90%;
}

.modal-title {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-color-dark);
    margin-bottom: 1.5rem;
}

.transaction-form {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
}

@media (min-width: 768px) {
    .transaction-form {
        grid-template-columns: repeat(2, 1fr);
    }
}

.form-group {
    display: flex;
    flex-direction: column;
}

.form-label {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--text-color-light);
    margin-bottom: 0.25rem;
}

.form-input {
    padding: 0.5rem;
    border: 1px solid var(--border-color);
    border-radius: 0.5rem;
    font-size: 1rem;
}

.form-input:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.25);
}

.form-actions {
    grid-column: 1 / -1;
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    margin-top: 1.5rem;
}

.btn-primary {
    background-color: var(--primary-color);
    color: var(--white);
}

.btn-primary:hover:not(:disabled) {
    background-color: var(--primary-color-hover);
}

.btn-primary:disabled {
    background-color: #93c5fd;
    cursor: not-allowed;
}

.btn-secondary {
    background-color: var(--secondary-color);
    color: var(--white);
}

.btn-secondary:hover:not(:disabled) {
    background-color: var(--secondary-color-hover);
}

.btn-secondary:disabled {
    opacity: 0.7;
    cursor: not-allowed;
}
`;

const StyleInjector = () => {
    useEffect(() => {
        const styleTag = document.createElement('style');
        styleTag.type = 'text/css';
        styleTag.appendChild(document.createTextNode(transactionsScss));
        document.head.appendChild(styleTag);

        return () => {
            document.head.removeChild(styleTag);
        };
    }, []);

    return null;
};

const API_BASE_URL = window.location.origin;

const TransactionForm = ({ onSave, onCancel, show, initialData = null }) => {
    const [formData, setFormData] = useState(initialData || {
        date: '',
        description: '',
        category: '',
        amount: '',
        type: 'Expense',
    });
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        setErrorMessage('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        if (!formData.date || !formData.description || !formData.category || !formData.amount) {
            setErrorMessage('All fields are required.');
            setIsLoading(false);
            return;
        }

        const payload = {
            ...formData,
            amount: Number(formData.amount),
        };

        try {
            const response = await fetch(`${API_BASE_URL}/api/transactions`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });
            if (!response.ok) {
                throw new Error('Failed to save transaction');
            }
            onSave();
        } catch (error) {
            console.error('Error saving transaction:', error);
            setErrorMessage('Failed to save transaction. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    if (!show) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2 className="modal-title">Add New Transaction</h2>
                {errorMessage && (
                    <div className="status-message error-message">
                        {errorMessage}
                    </div>
                )}
                <form onSubmit={handleSubmit} className="transaction-form">
                    <div className="form-group">
                        <label htmlFor="date" className="form-label">Date</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            className="form-input"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input
                            type="text"
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            placeholder="e.g., Groceries"
                            className="form-input"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="category" className="form-label">Category</label>
                        <input
                            type="text"
                            id="category"
                            name="category"
                            value={formData.category}
                            onChange={handleInputChange}
                            placeholder="e.g., Food, Transport"
                            className="form-input"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="amount" className="form-label">Amount</label>
                        <input
                            type="number"
                            id="amount"
                            name="amount"
                            value={formData.amount}
                            onChange={handleInputChange}
                            placeholder="0.00"
                            className="form-input"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="type" className="form-label">Type</label>
                        <select
                            id="type"
                            name="type"
                            value={formData.type}
                            onChange={handleInputChange}
                            className="form-input"
                            required
                        >
                            <option value="Income">Income</option>
                            <option value="Expense">Expense</option>
                        </select>
                    </div>
                    <div className="form-actions">
                        <button
                            type="button"
                            onClick={onCancel}
                            className="btn btn-secondary"
                            disabled={isLoading}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Saving...' : 'Add'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default function TransactionsPage() {
    const [transactions, setTransactions] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    // Fetch transactions from the backend
    const fetchTransactions = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`${API_BASE_URL}/api/transactions`);
            if (!response.ok) {
                throw new Error('Failed to fetch transactions');
            }
            const data = await response.json();
            setTransactions(data);
        } catch (error) {
            console.error('Error fetching transactions:', error);
            setErrorMessage('Failed to load transactions. Please check the server connection.');
        } finally {
            setIsLoading(false);
        }
    };

    // Load transactions on initial component mount
    useEffect(() => {
        fetchTransactions();
    }, []);

    const handleDeleteTransaction = async (id) => {
        try {
            const response = await fetch(`${API_BASE_URL}/api/transactions/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete transaction');
            }
            setSuccessMessage('Transaction deleted successfully!');
            fetchTransactions(); // Refresh the list
            setTimeout(() => setSuccessMessage(''), 3000);
        } catch (error) {
            console.error('Error deleting transaction:', error);
            setErrorMessage('Failed to delete transaction.');
        }
    };

    const handleFormSave = () => {
        setShowForm(false);
        fetchTransactions();
        setSuccessMessage('Transaction added successfully!');
        setTimeout(() => setSuccessMessage(''), 3000);
    };

    const handleFormCancel = () => {
        setShowForm(false);
    };

    return (
        <div className="transactions-page">
            <StyleInjector />
            <div className="transactions-container">
                {/* Hero and Actions Section */}
                <div className="transactions-hero">
                    <h1 className="hero-title">My Transactions</h1>
                    <div className="hero-actions">
                        <input
                            type="text"
                            placeholder="Search transactions..."
                            className="search-input"
                        />
                        <div className="action-buttons">
                            <button className="btn filter-btn">
                                Filter
                            </button>
                            <button
                                onClick={() => setShowForm(true)}
                                className="btn add-btn"
                            >
                                Add New Transaction
                            </button>
                        </div>
                    </div>
                </div>

                {/* Status Messages */}
                {successMessage && (
                    <div className="status-message success-message">
                        {successMessage}
                    </div>
                )}
                {errorMessage && (
                    <div className="status-message error-message">
                        {errorMessage}
                    </div>
                )}

                {/* Main Transactions Table */}
                <div className="main-transactions">
                    {isLoading ? (
                        <p className="loading-message">Loading transactions...</p>
                    ) : transactions.length === 0 ? (
                        <p className="no-transactions-message">No transactions found.</p>
                    ) : (
                        <div className="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Description</th>
                                        <th>Category</th>
                                        <th>Amount</th>
                                        <th>Type</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {transactions.map((transaction) => (
                                        <tr key={transaction._id}>
                                            <td className="transaction-date">{new Date(transaction.date).toLocaleDateString()}</td>
                                            <td className="transaction-description">{transaction.description}</td>
                                            <td className="transaction-category">{transaction.category}</td>
                                            <td className={`transaction-amount ${transaction.type === 'Income' ? 'text-income' : 'text-expense'}`}>
                                                {transaction.type === 'Expense' ? '-' : '+'}${transaction.amount.toFixed(2)}
                                            </td>
                                            <td className="transaction-type">{transaction.type}</td>
                                            <td className="transaction-actions">
                                                <button
                                                    onClick={() => handleDeleteTransaction(transaction._id)}
                                                    className="delete-btn"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>

            <TransactionForm show={showForm} onSave={handleFormSave} onCancel={handleFormCancel} />
        </div>
    );
}

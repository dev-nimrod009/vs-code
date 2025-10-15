import React, { useState, useEffect } from 'react';
import './styles.scss';

export default function Accounts() {
    const [account, setAccount] = useState({
        accountName: '',
        accountBalance: '',
        accountType: 'bankAccount',
    });
    const [accounts, setAccounts] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isListLoading, setIsListLoading] = useState(false);

    // Function to fetch accounts from the backend
    const fetchAccounts = async () => {
        setIsListLoading(true);
        try {
            const response = await fetch('/api/accounts');
            if (!response.ok) {
                throw new Error('Failed to fetch accounts');
            }
            const data = await response.json();
            setAccounts(data);
        } catch (error) {
            console.error("Error fetching accounts:", error);
            setErrorMessage("Failed to load accounts. Please try again.");
        } finally {
            setIsListLoading(false);
        }
    };

    // Fetch accounts on initial component mount
    useEffect(() => {
        fetchAccounts();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAccount((prevAccount) => ({
            ...prevAccount,
            [name]: value,
        }));
        setSuccessMessage('');
        setErrorMessage('');
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Form Validation
        if (!account.accountName || !account.accountBalance) {
            setErrorMessage('Account Name and Balance are required.');
            setIsLoading(false);
            return;
        }
        if (isNaN(account.accountBalance) || Number(account.accountBalance) <= 0) {
            setErrorMessage('Please enter a valid, positive balance.');
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch('/api/accounts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...account,
                    accountBalance: Number(account.accountBalance),
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to save account');
            }

            setSuccessMessage('Account created successfully!');
            setAccount({
                accountName: '',
                accountBalance: '',
                accountType: 'bankAccount',
            });
            fetchAccounts(); // Refresh the list after saving
        } catch (error) {
            console.error("Error adding document: ", error);
            setErrorMessage('Failed to save account. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleDeleteAccount = async (accountId) => {
        try {
            const response = await fetch(`/api/accounts/${accountId}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to delete account');
            }

            setSuccessMessage('Account deleted successfully!');
            fetchAccounts(); // Refresh the list after deleting
            setTimeout(() => setSuccessMessage(''), 3000);
        } catch (error) {
            console.error("Error deleting document: ", error);
            setErrorMessage('Failed to delete account. Please try again.');
        }
    };

    return (
        <div className="accounts-container">
            <div className="accounts-content">
                <h2 className="accounts-content__title">Create a New Account</h2>
                <form onSubmit={handleFormSubmit} className="account-form">
                    {successMessage && (
                        <div className="success-message">{successMessage}</div>
                    )}
                    {errorMessage && (
                        <div className="error-message">{errorMessage}</div>
                    )}
                    <div className="form-group">
                        <label htmlFor="accountName">Account Name</label>
                        <input
                            type="text"
                            id="accountName"
                            name="accountName"
                            placeholder="e.g., Checking, Savings"
                            value={account.accountName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="accountBalance">Account Balance</label>
                        <input
                            type="number"
                            id="accountBalance"
                            name="accountBalance"
                            placeholder="0.00"
                            value={account.accountBalance}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="accountType">Account Type</label>
                        <select
                            id="accountType"
                            name="accountType"
                            value={account.accountType}
                            onChange={handleInputChange}
                        >
                            <option value="creditCard">Credit Card</option>
                            <option value="bankAccount">Bank Account</option>
                            <option value="savingsAccount">Savings Account</option>
                        </select>
                    </div>
                    <button type="submit" disabled={isLoading}>
                        {isLoading ? 'Saving...' : 'Save Account'}
                    </button>
                </form>
            </div>

            <div className="accounts-list-container">
                <h3 className="accounts-list__title">My Accounts</h3>
                {isListLoading ? (
                    <p className="loading-message">Loading accounts...</p>
                ) : accounts.length === 0 ? (
                    <p className="no-accounts-message">No accounts found. Create one to get started!</p>
                ) : (
                    <ul className="accounts-list">
                        {accounts.map(acc => (
                            <li key={acc._id} className="account-item">
                                <div className="account-info">
                                    <span className="account-name">{acc.accountName}</span>
                                    <span className="account-balance">${acc.accountBalance.toFixed(2)}</span>
                                </div>
                                <div className="account-meta">
                                    <span className="account-type">{acc.accountType}</span>
                                    <button onClick={() => handleDeleteAccount(acc._id)} className="delete-btn">Delete</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

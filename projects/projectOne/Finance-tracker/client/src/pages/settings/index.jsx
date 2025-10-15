import React, { useState, useEffect } from 'react';
import { ArrowLeft, Wifi, Signal, BatteryFull, Lock, DollarSign, Shield, Check, XCircle } from 'lucide-react';
import './styles.scss'
const App = () => {
    // State for user settings, initially empty as we will fetch from the backend.
    const [settings, setSettings] = useState({
        username: '',
        email: 'nimrod@example.com', // Read-only email from a secure source
        balance: 0,
        twoFactorEnabled: false,
        customer: '',
        notificationFrequency: 'Updates',
        reminders: { status: 'Updates', time: '15.00 PM' },
        profilePicture: null
    });
    const [currentTime, setCurrentTime] = useState(new Date());
    const [activeChart, setActiveChart] = useState('Home');
    const [selectedCurrency, setSelectedCurrency] = useState('USD');
    const [message, setMessage] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // State for password change modal
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    // Hardcoded exchange rates for demonstration.
    const exchangeRates = {
        USD: 1,
        EUR: 0.92,
        GBP: 0.79,
        JPY: 157.0,
        KES: 130.0,
        NGN: 1450.0,
        ZAR: 18.0
    };

    // Hardcoded data for the dynamic chart
    const homeData = [
        { x: 0, y: 80 }, { x: 1, y: 50 }, { x: 2, y: 70 }, { x: 3, y: 30 },
        { x: 4, y: 80 }, { x: 5, y: 40 }, { x: 6, y: 60 }, { x: 7, y: 20 },
    ];
    const showonsData = [
        { x: 0, y: 20 }, { x: 1, y: 60 }, { x: 2, y: 30 }, { x: 3, y: 70 },
        { x: 4, y: 40 }, { x: 5, y: 80 }, { x: 6, y: 50 }, { x: 7, y: 90 },
    ];

    // Helper function to get currency symbol
    const getCurrencySymbol = (currencyCode) => {
        switch (currencyCode) {
            case 'USD': return '$';
            case 'EUR': return '€';
            case 'GBP': return '£';
            case 'JPY': return '¥';
            case 'KES': return 'KSh';
            case 'NGN': return '₦';
            case 'ZAR': return 'R';
            default: return '';
        }
    };
    const convertBalance = (baseBalance, currencyCode) => baseBalance * exchangeRates[currencyCode];
    const convertedBalance = convertBalance(settings.balance, selectedCurrency);

    // Custom message box function
    const showMessageModal = (msg) => {
        setMessage(msg);
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 3000);
    };

    // Function to fetch user settings from the backend API.
    const fetchSettings = async () => {
        setIsLoading(true);
        try {
            // Replace with your actual backend endpoint to get user settings from MongoDB
            const response = await fetch('/api/settings/get');
            if (!response.ok) {
                // Fallback to mock data if API call fails
                const mockSettings = {
                    username: 'Nimrod Kinyanjui',
                    email: 'nimrod@example.com',
                    balance: 5890.00,
                    twoFactorEnabled: true,
                    customer: 'Nimrod Kinyanjui',
                    notificationFrequency: 'Updates',
                    reminders: { status: 'Updates', time: '15.00 PM' },
                    profilePicture: null
                };
                setSettings(mockSettings);
                showMessageModal("Could not connect to backend, using mock data.");
                return;
            }
            const data = await response.json();
            setSettings(prev => ({ ...prev, ...data }));
        } catch (e) {
            console.error("Failed to fetch settings from backend.", e);
            showMessageModal("Failed to load settings. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    // Function to update user settings in the backend.
    const updateSettings = async (newSettings) => {
        setIsLoading(true);
        try {
            // Replace with your actual backend endpoint to update user settings in MongoDB
            const response = await fetch('/api/settings/update', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newSettings),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setSettings(data); // Assuming the backend returns the updated settings
            showMessageModal("Settings updated successfully!");
        } catch (e) {
            console.error("Failed to update settings via backend API.", e);
            showMessageModal("Failed to save settings. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    // Fetch settings on component mount
    useEffect(() => {
        fetchSettings();
    }, []);

    // Update time every second.
    useEffect(() => {
        const interval = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    // Helper to generate SVG path from data
    const getChartPath = (data) => {
        if (!data || data.length === 0) return '';
        const viewBoxWidth = 100;
        const viewBoxHeight = 100;
        const path = data.map((point, index) => {
            const x = (point.x / (data.length - 1)) * viewBoxWidth;
            const y = viewBoxHeight - (point.y / 100) * viewBoxHeight;
            return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
        }).join(' ');
        return path;
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        const newSettings = { ...settings, [id]: value };
        updateSettings(newSettings);
    };

    const handleTwoFactorToggle = () => {
        const newSettings = { ...settings, twoFactorEnabled: !settings.twoFactorEnabled };
        updateSettings(newSettings);
    };

    const handleProfilePictureChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const newSettings = { ...settings, profilePicture: event.target.result };
                updateSettings(newSettings);
            };
            reader.readAsDataURL(file);
        }
    };

    const handlePasswordChange = async () => {
        setPasswordError('');
        if (newPassword !== confirmPassword) {
            setPasswordError('Passwords do not match.');
            return;
        }
        if (newPassword.length < 6) {
            setPasswordError('Password must be at least 6 characters long.');
            return;
        }

        setIsLoading(true);
        try {
            // Replace with your actual backend endpoint to change the password
            const response = await fetch('/api/settings/change-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ newPassword }),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            showMessageModal("Password updated successfully!");
            setShowPasswordModal(false);
            setNewPassword('');
            setConfirmPassword('');
        } catch (e) {
            console.error("Failed to change password via backend API.", e);
            showMessageModal("Failed to change password. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const currentChartData = activeChart === 'Home' ? homeData : showonsData;
    const pathData = getChartPath(currentChartData);
    const formattedTime = `${currentTime.getHours().toString().padStart(2, '0')}:${currentTime.getMinutes().toString().padStart(2, '0')}:${currentTime.getSeconds().toString().padStart(2, '0')}`;

    const profileImageSrc = settings.profilePicture || "https://placehold.co/40x40/e0eaff/4c68ff?text=User";

    return (
        <div className="settings-page">


            {/* Custom Message Box */}
            <div className={`message-box ${showMessage ? 'show' : ''}`}>
                {message}
            </div>

            {isLoading && (
                <div className="absolute inset-0 bg-gray-200 bg-opacity-75 flex items-center justify-center z-50">
                    <div className="spinner"></div>
                </div>
            )}

            {/* Page Header */}
            <header className="header">
                <ArrowLeft size={24} className="header-left" />
                <span className="text-lg font-semibold text-gray-800">{formattedTime}</span>
                <div className="header-right">
                    <Wifi size={20} />
                    <Signal size={20} />
                    <BatteryFull size={20} />
                </div>
            </header>

            {/* Main Content Panels */}
            <main className="main-content">

                {/* Left Panel: Current Balance */}
                <div className="settings-panel">
                    <h2 className="settings-panel-title">Your Finances</h2>
                    <p className="settings-panel-subtitle">A quick overview of your account.</p>

                    <div className="balance-container">
                        <div className="flex justify-between items-center mb-4">
                            <span className="balance-label">Current Balance</span>
                            <DollarSign size={20} className="balance-icon" />
                        </div>
                        <span className="balance-amount">
                            {getCurrencySymbol(selectedCurrency)}
                            {convertedBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                    </div>

                    <div className="settings-section-card">
                        <h3 className="settings-section-title">Account Balance</h3>
                        <p className="settings-section-subtitle">This balance reflects your current financial standing.</p>
                        <p className="text-center text-3xl font-bold text-blue-600">
                            {getCurrencySymbol(selectedCurrency)}
                            {convertedBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </p>
                    </div>

                    <div className="settings-section-card">
                        <h3 className="settings-section-title">Select Currency</h3>
                        <div className="relative">
                            <select
                                id="currency-selector"
                                value={selectedCurrency}
                                onChange={(e) => setSelectedCurrency(e.target.value)}
                                className="w-full bg-white border border-gray-300 rounded-lg p-2"
                            >
                                <option value="USD">USD - US Dollar</option>
                                <option value="EUR">EUR - Euro</option>
                                <option value="GBP">GBP - British Pound</option>
                                <option value="JPY">JPY - Japanese Yen</option>
                                <option value="KES">KES - Kenyan Shilling</option>
                                <option value="NGN">NGN - Nigerian Naira</option>
                                <option value="ZAR">ZAR - South African Rand</option>
                            </select>
                            <Check size={18} className="select-icon" />
                        </div>
                    </div>
                </div>

                {/* Middle Panel: Profile Management */}
                <div className="settings-panel">
                    <h2 className="settings-panel-title">Profile Management</h2>
                    <p className="settings-panel-subtitle">Manage your profile here.</p>

                    <div className="settings-section-card">
                        <h3 className="settings-section-title">Personal Details</h3>
                        <div className="settings-item-row">
                            <div className="settings-item-left">
                                <label htmlFor="profile-picture-input" className="cursor-pointer">
                                    <img src={profileImageSrc} alt="Profile" className="rounded-full w-10 h-10 object-cover" />
                                </label>
                                <input
                                    id="profile-picture-input"
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleProfilePictureChange}
                                />
                                <div className="flex-1">
                                    <label htmlFor="username" className="settings-item-label">Username</label>
                                    <input type="text" id="username" value={settings.username} onChange={handleInputChange} />
                                </div>
                            </div>
                        </div>
                        <div className="settings-item-row">
                            <div className="settings-item-left">
                                <div className="settings-icon-bg">
                                    <Lock size={16} />
                                </div>
                                <div className="flex-1">
                                    <label htmlFor="email" className="settings-item-label">Email</label>
                                    <input type="email" id="email" value={settings.email} readOnly />
                                </div>
                            </div>
                        </div>
                        <div className="settings-item-row">
                            <div className="settings-item-left">
                                <div className="settings-icon-bg">
                                    <Lock size={16} />
                                </div>
                                <div className="flex-1">
                                    <label htmlFor="password" className="settings-item-label">Password</label>
                                    <button onClick={() => setShowPasswordModal(true)} className="change-password-btn mt-2">Change Password</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="settings-section-card">
                        <h3 className="settings-section-title">App Preferences</h3>
                        <div className="settings-item-row">
                            <div className="settings-item-left">
                                <div className="settings-icon-bg">
                                    <Shield size={16} />
                                </div>
                                <span className="flex-1 text-sm font-semibold text-gray-800">Two-factor Authentication</span>
                            </div>
                            <div
                                className={`settings-toggle-switch ${settings.twoFactorEnabled ? 'on' : ''}`}
                                onClick={handleTwoFactorToggle}
                            >
                                <div className="settings-toggle-slider"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Panel: App Preferences Details */}
                <div className="settings-panel">
                    <h2 className="settings-panel-title">App Preferences</h2>
                    <p className="settings-panel-subtitle">Customize your app settings.</p>

                    <div className="settings-section-card">
                        <div className="mb-4">
                            <label htmlFor="customer" className="settings-item-label">Customer</label>
                            <input type="text" id="customer" value={settings.customer} onChange={handleInputChange} />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="notificationFrequency" className="settings-item-label">Notification frequency</label>
                            <div className="relative">
                                <select
                                    id="notificationFrequency"
                                    value={settings.notificationFrequency}
                                    onChange={handleInputChange}
                                    className="w-full bg-white border border-gray-300 rounded-lg p-2"
                                >
                                    <option value="Updates">Updates</option>
                                    <option value="Daily">Daily</option>
                                    <option value="Weekly">Weekly</option>
                                </select>
                                <Check size={18} className="select-icon" />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="reminders" className="settings-item-label">Reminders Updates</label>
                            <div className="flex justify-between items-center py-2 text-gray-800 font-semibold">
                                <span>{settings.reminders.status}</span>
                                <span>{settings.reminders.time}</span>
                            </div>
                        </div>
                    </div>

                    <div className="settings-section-card">
                        <h3 className="settings-section-title">Time Data Visualization</h3>
                        <div className="h-40 bg-gray-200 rounded-xl p-4 flex items-end">
                            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                                <path
                                    d={pathData}
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    fill="none"
                                    className="text-blue-600"
                                />
                            </svg>
                        </div>
                        <div className="flex justify-center mt-4 bg-gray-100 rounded-lg p-1">
                            <button
                                className={`settings-legend-btn ${activeChart === 'Home' ? 'active' : ''}`}
                                onClick={() => setActiveChart('Home')}
                            >
                                Home
                            </button>
                            <button
                                className={`settings-legend-btn ${activeChart === 'Showons' ? 'active' : ''}`}
                                onClick={() => setActiveChart('Showons')}
                            >
                                Showons
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            {/* Password Change Modal */}
            {showPasswordModal && (
                <div className="modal">
                    <div className="modal-content">
                        <div className="flex justify-between items-center">
                            <h2 className="modal-title">Change Password</h2>
                            <XCircle className="cursor-pointer text-gray-500 hover:text-red-500" onClick={() => setShowPasswordModal(false)} />
                        </div>
                        <label htmlFor="newPassword">New Password</label>
                        <input
                            type="password"
                            id="newPassword"
                            className="modal-input"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                        <label htmlFor="confirmPassword">Confirm New Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className="modal-input"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        {passwordError && <p className="modal-error">{passwordError}</p>}
                        <div className="modal-buttons">
                            <button onClick={() => setShowPasswordModal(false)} className="modal-btn modal-btn-secondary">
                                Cancel
                            </button>
                            <button onClick={handlePasswordChange} className="modal-btn modal-btn-primary">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;

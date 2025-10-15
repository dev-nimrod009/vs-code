import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './styles.scss';

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const [showAccount, setShowAccount] = useState(false);
    const accountRef = useRef(null);

    const navigateItems = [
        { name: 'REPORT', path: '/report' },
        { name: 'TRANSACTIONS', path: '/lists' },
        { name: 'ACCOUNTS', path: '/accounts' },
        { name: 'SETTINGS', path: '/settings' },
    ];

    const accountItems = [
        { name: 'My Profile', path: '/profile' },
        { name: 'Settings', path: '/settings' },
        { name: 'Logout', path: '/logout' }
    ];

    const handleLogoClick = () => {
        navigate('/');
    };

    const handleAccountClick = () => {
        setShowAccount(prevState => !prevState);
    };

    // Handle clicks outside the account menu to close the dropdown
    useEffect(() => {
        function handleClickOutside(event) {
            if (accountRef.current && !accountRef.current.contains(event.target)) {
                setShowAccount(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [accountRef]);

    return (
        <header className="header-section">
            <button className="header-section__logo" onClick={handleLogoClick}>
                My Finance App
            </button>
            <nav className="header-section__navigation-section">
                {navigateItems.map((item) => (
                    <button
                        key={item.name}
                        onClick={() => navigate(item.path)}
                        className={location.pathname === item.path ? 'active' : ''}
                    >
                        {item.name}
                    </button>
                ))}
            </nav>
            <section className="header-section__my" ref={accountRef}>
                <button
                    className="header-section__my__account"
                    onClick={handleAccountClick}
                >
                    My Account
                </button>
                {showAccount && (
                    <div className="header-section__my__options">
                        {accountItems.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => navigate(item.path)}
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
                )}
            </section>
        </header>
    );
}

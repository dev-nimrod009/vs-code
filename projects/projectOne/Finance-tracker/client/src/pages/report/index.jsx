// src/pages/Reports/Reports.jsx
import React, { useState } from 'react';
import './styles.scss'; // Link to the SCSS file
import { createRoot } from 'react-dom/client';
import { Filter, ChevronDown, ArrowUp, ArrowDown, BarChart2, Plus } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

// Use this for icons. You must check if the icon exists in this library before using it.
const iconComponents = {
    Filter: Filter,
    ChevronDown: ChevronDown,
    ArrowUp: ArrowDown,
    ArrowDown: ArrowUp,
    BarChart2: BarChart2,
    Plus: Plus
};

const Icon = ({ name, className = '', size = 20 }) => {
    const LucideIcon = iconComponents[name];
    if (!LucideIcon) {
        console.warn(`Icon '${name}' not found.`);
        return null;
    }
    return <LucideIcon className={className} size={size} />;
};

// Main App Component
const Report = () => {
    const [activeTab, setActiveTab] = useState('allocated');
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isFormOpen, setIsFormOpen] = useState(false);

    // Use state to manage dynamic data
    const [allocatedItems, setAllocatedItems] = useState([
        { category: 'Groceries', subCategory: 'Monthly essentials', amount: 500 },
        { category: 'Utilities', subCategory: 'Electricity & Water', amount: 150 },
        { category: 'Transport', subCategory: 'Fuel & Maintenance', amount: 200 },
        { category: 'Subscriptions', subCategory: 'Streaming services', amount: 50 },
    ]);

    const [spentItems, setSpentItems] = useState([
        { category: 'Groceries', subCategory: 'Last week', amount: 125 },
        { category: 'Utilities', subCategory: 'This month', amount: 150 },
        { category: 'Dining Out', subCategory: 'Restaurants', amount: 80 },
        { category: 'Shopping', subCategory: 'Online orders', amount: 75 },
    ]);

    // Calculate totals and percentages dynamically
    const totalAllocated = allocatedItems.reduce((sum, item) => sum + item.amount, 0);
    const totalSpent = spentItems.reduce((sum, item) => sum + item.amount, 0);

    const calculatePercentage = (items, total) => {
        return items.map(item => ({
            ...item,
            percentage: total > 0 ? ((item.amount / total) * 100).toFixed(2) : 0,
            amount: `$${item.amount}` // Format amount for display
        }));
    };

    const displayAllocated = calculatePercentage(allocatedItems, totalAllocated);
    const displaySpent = calculatePercentage(spentItems, totalSpent);

    const currentReport = activeTab === 'allocated' ? displayAllocated : displaySpent;

    // Handle new item form submission
    const handleAddItem = (e) => {
        e.preventDefault();
        const form = e.target;
        const newItem = {
            category: form.category.value,
            subCategory: form.subCategory.value,
            amount: parseFloat(form.amount.value)
        };

        if (form.tab.value === 'allocated') {
            setAllocatedItems([...allocatedItems, newItem]);
        } else {
            setSpentItems([...spentItems, newItem]);
        }

        // Reset form and close it
        form.reset();
        setIsFormOpen(false);
    };

    const COLORS = ['#FF4560', '#00E396', '#008FFB', '#FEB019', '#775DD0'];
    const chartData = spentItems.map(item => ({
        name: item.category,
        value: item.amount
    }));

    const CustomLegend = ({ data }) => (
        <div className="custom-legend">
            {data.map((item, index) => (
                <div key={`legend-${index}`} className="legend-item">
                    <span className="legend-color" style={{ backgroundColor: COLORS[index % COLORS.length] }}></span>
                    <span className="legend-text">{item.name}</span>
                </div>
            ))}
        </div>
    );

    return (
        <div className="reports-page">
            <div className="reports-header">
                <h2>Reports</h2>
                <div className="reports-filter-dropdown" onClick={() => setIsFilterOpen(!isFilterOpen)}>
                    <Icon name="Filter" size={14} className="fa-filter" />
                    <span>Filtering</span>
                    <Icon name="ChevronDown" size={14} className="fa-chevron-down" />
                </div>
            </div>
            <div className="reports-content">

                {/* Reports Filtering Panel */}
                <div className="reports-filtering-panel" style={{ display: isFilterOpen ? 'block' : 'none' }}>
                    <h3>Filtering</h3>
                    <div className="card income-card">
                        <div className="card-icon" style={{ backgroundColor: '#e0eaff', color: '#007bff' }}>
                            <Icon name="ArrowDown" size={18} />
                        </div>
                        <div className="card-details">
                            <h4>Total Income</h4>
                            <p>Income</p>
                            <span className="amount">${totalAllocated}</span>
                        </div>
                    </div>
                    <div className="card expense-card">
                        <div className="card-icon" style={{ backgroundColor: '#e0eaff', color: '#007bff' }}>
                            <Icon name="ArrowUp" size={18} />
                        </div>
                        <div className="card-details">
                            <h4>Total Expenses</h4>
                            <p>Expenses</p>
                            <span className="amount">${totalSpent}</span>
                        </div>
                    </div>

                    <div className="chart-container">
                        <h4>Spending Breakdown</h4>
                        <div className="chart-wrapper">
                            <ResponsiveContainer width="100%" height={200}>
                                <PieChart>
                                    <Pie
                                        data={chartData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        dataKey="value"
                                        labelLine={false}
                                    >
                                        {chartData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                            <CustomLegend data={chartData} />
                        </div>
                    </div>
                </div>

                {/* Budgeting Reports Panel */}
                <div className="budgeting-reports-panel">
                    <div className="budgeting-header">
                        <h3>Budgeting</h3>
                        {/* The filter icon is used in the main header, not here based on the SCSS */}
                    </div>

                    {/* Tab Navigation */}
                    <div className="budgeting-tabs">
                        <button
                            className={`tab ${activeTab === 'allocated' ? 'active' : ''}`}
                            onClick={() => setActiveTab('allocated')}
                        >
                            Allocated
                        </button>
                        <button
                            className={`tab ${activeTab === 'spent' ? 'active' : ''}`}
                            onClick={() => setActiveTab('spent')}
                        >
                            Spent
                        </button>
                    </div>

                    {/* Report List */}
                    <ul className="budgeting-list">
                        {currentReport.map((item, index) => (
                            <li key={index} className="list-item">
                                <div className="item-left">
                                    <span className="category">{item.category}</span>
                                    <span className="sub-category">{item.subCategory}</span>
                                </div>
                                <div className="item-right">
                                    <span className="amount">{item.amount}</span>
                                    <span className="percentage">{item.percentage}%</span>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="add-item-wrapper">
                        <button className="add-item-btn" onClick={() => setIsFormOpen(!isFormOpen)}>
                            <Icon name="Plus" size={24} />
                            <span>Add New Item</span>
                        </button>
                    </div>

                    {/* Add Item Form (Conditionally rendered) */}
                    {isFormOpen && (
                        <form className="add-item-form" onSubmit={handleAddItem}>
                            <div className="form-group">
                                <label htmlFor="category">Category</label>
                                <input type="text" id="category" name="category" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="subCategory">Sub-category</label>
                                <input type="text" id="subCategory" name="subCategory" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="amount">Amount ($)</label>
                                <input type="number" id="amount" name="amount" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="tab">Type</label>
                                <select id="tab" name="tab">
                                    <option value="allocated">Allocated</option>
                                    <option value="spent">Spent</option>
                                </select>
                            </div>
                            <div className="form-actions">
                                <button type="submit" className="submit-btn">Add Item</button>
                                <button type="button" className="cancel-btn" onClick={() => setIsFormOpen(false)}>Cancel</button>
                            </div>
                        </form>
                    )}

                </div>
            </div>
        </div>
    );
};
export default Report
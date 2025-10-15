import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './styles.scss';

// A simple loading placeholder component
const LoadingCard = () => (
    <div className="stat-card stat-card--loading">
        <div className="placeholder-content">
            <div className="placeholder-line placeholder-line--title"></div>
            <div className="placeholder-line placeholder-line--value"></div>
            <div className="placeholder-line placeholder-line--rate"></div>
        </div>
    </div>
);

// StatCard component with loading state
const StatCard = ({ title, value, percentage, type, isLoading }) => {
    if (isLoading) {
        return <LoadingCard />;
    }

    const percentageColor = type === 'income' ? 'green' : (type === 'expense' ? 'red' : 'inherit');
    const displayPercentage = percentage ? Math.abs(percentage).toFixed(2) : 0;
    const arrow = percentage > 0 ? '▲' : '▼'; // Up or down arrow

    return (
        <div className="stat-card">
            <div className="stat-card__icon">
                <p>icon</p>
            </div>
            <div className="stat-card__names">
                <span>{title}</span>
                <span>{value}</span>
            </div>
            <div className="stat-card__rates" style={{ color: percentageColor }}>
                <span>{arrow}{displayPercentage}% {percentage > 0 ? 'increase' : 'decrease'}</span>
            </div>
        </div>
    );
};

export default function Dashboard() {
    const [chartData, setChartData] = useState([]);
    const [stats, setStats] = useState({ income: "0", expense: "0", balance: "0" });
    const [loading, setLoading] = useState(true);
    const [period, setPeriod] = useState('monthly'); // Add state for the selected period

    // This is the function that will fetch data from your backend
    const fetchFinancialData = async (selectedPeriod) => {
        setLoading(true);
        try {
            // Modify the API call to include the selected period as a query parameter
            const response = await axios.get(`http://localhost:3000/api/financials?period=${selectedPeriod}`);
            const { trends } = response.data;

            // Calculate total income, expense, and balance
            let totalIncome = 0;
            let totalExpense = 0;
            trends.forEach(item => {
                totalIncome += item.income;
                totalExpense += item.expense;
            });

            const balance = totalIncome - totalExpense;

            // Calculate percentage changes
            const prevIncome = trends[trends.length - 2]?.income || 0;
            const prevExpense = trends[trends.length - 2]?.expense || 0;
            const incomeChange = ((trends[trends.length - 1]?.income - prevIncome) / prevIncome) * 100;
            const expenseChange = ((trends[trends.length - 1]?.expense - prevExpense) / prevExpense) * 100;
            const balanceChange = ((balance - (prevIncome - prevExpense)) / (prevIncome - prevExpense)) * 100;

            setStats({
                income: totalIncome.toLocaleString(),
                expense: totalExpense.toLocaleString(),
                balance: balance.toLocaleString(),
                incomeChange,
                expenseChange,
                balanceChange
            });
            setChartData(trends);

        } catch (error) {
            console.error("Error fetching financial data:", error);
        } finally {
            setLoading(false);
        }
    };

    // Use a useEffect hook to call the fetch function when the component mounts or period changes
    useEffect(() => {
        fetchFinancialData(period);
    }, [period]); // The useEffect will re-run whenever 'period' changes

    const handlePeriodChange = (event) => {
        setPeriod(event.target.value);
    };

    return (
        <div className="dashboard">
            <div className="dashboard__container">
                <section className="dashboard__container__box">
                    <StatCard title="Income" value={stats.income} percentage={stats.incomeChange} type="income" isLoading={loading} />
                    <StatCard title="Expense" value={stats.expense} percentage={stats.expenseChange} type="expense" isLoading={loading} />
                    <StatCard title="Current Balance" value={stats.balance} percentage={stats.balanceChange} type="balance" isLoading={loading} />
                </section>

                <section className="dashboard__con">
                    <div className="dashboard__con__transactions">
                        <div className="dashboard__con__header">
                            <h2>Financial Trends</h2>
                            <select onChange={handlePeriodChange} value={period} className="period-selector">
                                <option value="weekly">Weekly</option>
                                <option value="monthly">Monthly</option>
                                <option value="yearly">Yearly</option>
                            </select>
                        </div>
                        <div className="dashboard__con__transactions__trends">
                            <div className="trend-stat-box income">
                                <h3>Income</h3>
                                <p>{stats.income}</p>
                                <h6>Last 12 months</h6>
                            </div>
                            <div className="trend-stat-box expense">
                                <h3>Expense</h3>
                                <p>{stats.expense}</p>
                                <h6>Last 12 months</h6>
                            </div>
                        </div>
                        <div className="dashboard__con__transactions__chart">
                            {loading ? (
                                <p>Loading chart...</p>
                            ) : (
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={chartData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="month" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Line type="monotone" dataKey="income" stroke="#27ae60" activeDot={{ r: 8 }} />
                                        <Line type="monotone" dataKey="expense" stroke="#e74c3c" />
                                    </LineChart>
                                </ResponsiveContainer>
                            )}
                        </div>
                    </div>

                    <aside className="dashboard__con__quick_links">
                        <h2>Quick links</h2>
                        <ul>
                            <li><a href="#">All transactions</a></li>
                            <li><a href="#">Expense category</a></li>
                            <li><a href="#">Reports</a></li>
                        </ul>
                    </aside>
                </section>
            </div>
        </div>
    );
}
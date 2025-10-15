import React, { useState } from 'react';
import './styles.scss'
import { Link, Routes, Route } from 'react-router-dom'
export default function SignupPage() {


    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        phoneNumber: '',
        gender: '',
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted with:', formData);
        // Add your signup logic here (e.g., API call)
        setFormData({
            username: '',
            email: '',
            password: '',
            phoneNumber: '',
            gender: '',
        }); // Clear form after submission
    };

    return (
        <div
            className="" style={{ backgroundImage: "url('canva1.png')" }}>
            <div className="container bg-green-700 text-left p-6 rounded-lg shadow-lg w-80">
                <h1 className="text-2xl font-bold text-blue-700 bg-yellow-400 rounded p-2 mb-4">
                    Tembea Kenya Safaris
                </h1>
                <h2 className="text-center text-white mb-4">Sign Up</h2>
                <form id="signin_form" onSubmit={handleSubmit} className="container">

                    <div className="form-group">
                        <label htmlFor="name">Enter your preferred username</label>
                        <input id="name" type="text" name="username"
                            placeholder="username" value={formData.username} onChange={handleChange} required />
                    </div>

                    <div className="form-group">
                        <label>Input your email</label>
                        <input type="email" name="email" placeholder="email" value={formData.email} onChange={handleChange} required />
                    </div>

                    <div className="form-group">
                        <label >Input your password</label>
                        <input type="password" name="password" placeholder="password" value={formData.password} required />
                    </div>

                    <div className="form-group">
                        <label >Input your phone number</label>
                        <input type="number" name="phoneNumber" placeholder="phone number" value={formData.phoneNumber} onChange={handleChange} required />
                    </div>

                    <div className="form-group">
                        <label >Select gender</label>
                        <div className="form-group__gender">
                            <label >
                                <input type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} required />
                                Female
                            </label>

                            <label >
                                <input type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} required />
                                Male
                            </label>

                        </div>
                    </div>

                    <button type="submit"> Submit Form</button>

                    <p>
                        Already have an account?{' '}
                        <Link to="/signin" className="text-yellow-400 hover:underline">
                            Sign in here
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};


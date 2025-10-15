import React, { useState } from 'react'
import '../sign-in/styles.scss'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'



export default function SignUp() {
    const navigate = useNavigate()
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setMessage('')
        setIsSubmitting(true)
        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
            return
        }
        if (password.length < 6) {
            setMessage('Password is Short')
            return
        }
        try {
            const response = await axios.post('http://localhost:5000/api/signup', { username, email, password })
            setMessage(response.data.message)
            if (response.status === 201) {

                setUsername('')
                setEmail('')
                setPassword('')
                setConfirmPassword('')
                navigate('/dashboard')
            }
        } catch (err) {
            if (err.response) {

                setMessage(err.response.data.message)
            } else if (err.request) {
                setMessage('Please check your connection')
            }
            else {
                setMessage('Unexpected error occured.Please try again')
            }
        }

    }



    return (
        <div className="sign-in">
            <form className="sign-in__container" onSubmit={handleSubmit}>
                <div className="sign-in__container__login">

                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" value={username}
                        placeholder="Enter your username"
                        onChange={(e) => setUsername(e.target.value)} required disabled={isSubmitting} />

                </div>
                <div className="sign-in__container__login">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={email} placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)} required disabled={isSubmitting} />
                </div>
                <div className="sign-in__container__login">

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" value={password} placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)} required disabled={isSubmitting} />
                </div>
                <div className="sign-in__container__login">

                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input type="password" name="confirm-password" id=" confirm-password " value={confirmPassword} placeholder="Password" onChange={(e) => setConfirmPassword(e.target.value)} required disabled={isSubmitting} />
                    <button className="sign-in__container__login__submit-button " type="submit">{isSubmitting ? 'Signing up...' : 'Sign up'}</button>




                </div>
                {message && <p className={`message ${message.includes('succes') ? 'success' : 'error'}`}>{message}</p>}
                <div className="sign-in__container__google-button">
                    <p> Or Sign in with</p>
                </div>
                <button type="button" className="sign-in__container__google-button" disabled={isSubmitting}>GOOGLE</button>
            </form>
        </div>
    )
}

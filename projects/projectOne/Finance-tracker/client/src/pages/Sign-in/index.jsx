import React, { useState } from 'react'
import axios from 'axios'
import './styles.scss'
import { useNavigate } from 'react-router-dom'

export default function SignIn({ setIsAuthenticated }) {
    const navigate = useNavigate()
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [message, setMessage] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setMessage('')
        setIsSubmitting(true)

        try {
            const response = await axios.post('http://localhost:5000/api/signin', { username, password })
            setMessage(response.data.message)
            if (response.status === 200) {
                setIsAuthenticated(true)
                navigate('/dashboard')
            }
        } catch (err) {
            setMessage(err.response.data.message)
        } finally {
            setIsSubmitting(false)
        }
    }
    return (
        <div className="sign-in">
            <form className="sign-in__container" onSubmit={handleSubmit}>
                <h2>Sign In</h2>
                <div className="sign-in__container__login">

                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" value={username}
                        placeholder="Enter your username"
                        onChange={(e) => setUsername(e.target.value)} required disabled={isSubmitting} />

                </div>
                <div className="sign-in__container__login">

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password"
                        value={password} placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)} required disabled={isSubmitting} />

                    <button className="sign-in__container__login__submit-button " type="submit">{isSubmitting ? 'Signing in...' : 'Sign in'}</button>




                </div>
                {message && <p className={`message ${message.includes('succes') ? 'success' : 'error'}`}>{message}</p>}


                <div className="sign-in__container__google">

                    <p> Or Sign in with</p>
                </div>
                <button
                    type="button"
                    className="sign-in__container__signup-button"
                    onClick={() => navigate('/signup')}
                    disabled={isSubmitting}
                >
                    Sign Up
                </button>
                <button type="button" className="sign-in__container__google-button" disabled={isSubmitting}>GOOGLE</button>

            </form>
        </div>
    )
}

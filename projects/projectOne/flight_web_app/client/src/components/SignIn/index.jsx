
import React, { useState } from 'react'
import './styles.scss'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function SignUp({ setIsAuthenticated }) {

    const navigate = useNavigate()
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [submitting, setSubmitting] = useState(false)
    const [message, setMessage] = useState('')

    const handleSubmission = async (e) => {
        e.preventDefault()
        setSubmitting(true)
        setMessage('')
        try {
            const feedBack = await axios.post('http://localhost:3001/api/user-signin', { password, email })

            if (feedBack.status === 200) {
                setIsAuthenticated(true)
                navigate('/dashboard')
                setEmail('')
                setPassword('')
                setMessage(feedBack.data.message)
            }
        }
        catch (err) {
            if (err.feedBack) {
                setMessage(err.feedBack.data.message)

            } else if (err.request) {
                setMessage('Error.Could not connect to the server')
            } else {
                setMessage('Error.Unexpected problem occured')
            }

        }
        finally {
            setSubmitting(false)
        }
    }

    return (
        <form className="signcontainer" onSubmit={handleSubmission}>
            <p >Sign in through</p>
            <div className="signcontainer__buttons">
                <button>Google</button>

            </div>
            <p className="signcontainer__s-or">or</p>
            <div className="signcontainer__signupinfo">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" name="email" id="email" value={email}
                    onChange={(event) => setEmail(event.target.value)} required />

                <label>Password</label>
                <input type="password" name="password" id="password" placeholder="Enter your password" value={password}
                    onChange={(event) => setPassword(event.target.value)} required disabled={submitting} />

            </div>
            <button type="submit" disabled={submitting}>{submitting ? 'submitting' : 'Continue'}</button>

            {message && <p className={message.startsWith('Error') ? 'text-red-500' : 'text-green-500'}>{message}</p>}

            <h5>Don't have an account? <a href="/signup">Sign Up</a></h5>



        </form>
    )
}

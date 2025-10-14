import React, { useState } from 'react'
import './styles.scss'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function SignIn() {
    const navigate = useNavigate()
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')
    const [fullName, setFullName] = useState('')
    const [message, setMessage] = useState('')
    const [submitting, setSubmitting] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setMessage('')

        if (!fullName || !age || !gender || !password || !email || !phoneNumber) {
            setMessage('Please input the missing fields')
            return
        }
        else if (confirmPassword !== password) {
            setMessage('Passwords do not match')
            return
        } else if (phoneNumber.length !== 10) {
            setMessage('Your Phone Number has not reached the number of digits required')
            return
        } else if (/-=&~*^%$#@/.test(phoneNumber)) {
            setMessage('PhoneNumber can not contain special characters')
            return
        }
        setSubmitting(true)

        try {
            const feedBack = await axios.post('http://localhost:3001/api/user-registration', { fullName, age, gender, password, email, phoneNumber })

            if (feedBack.status === 200) {
                navigate('/dashboard')
                setPassword('')
                setEmail('')
                setGender('')
                setAge('')
                setPhoneNumber('')
                setFullName('')
                setMessage(feedBack.data.message)
            }
        }
        catch (err) {
            if (err.feedBack) {
                setMessage(err.feedBack.data.message)
            }
            else if (err.request) {
                setMessage('Error.Could not connect to the sever.Please check your network')
            }
            else {
                setMessage('Unexpected problem occured')
            }
            console.log(err)
        }

    }
    return (
        <form className="signin_container" onSubmit={handleSubmit}>
            <p>Sign Up using</p>

            <div className="signin_container__box_accountbox">
                <button> Google</button>

            </div>

            <span className="signin_container__or">or</span>
            <div className="signin_container__box_personalbox">

                <label>Full Name</label>
                <input type="text" placeholder="Enter your full name"
                    value={fullName}
                    id="fullName"
                    onChange={(e) => setFullName(e.target.value)}
                    required disabled={submitting} />

                <label  >Email</label>
                <input type="email" placeholder="Enter your email"
                    value={email}
                    id="email"
                    onChange={(e) => setEmail(e.target.value)} required disabled={submitting} />

                <label >Phone number</label>
                <input type="number" placeholder="Input your phone number"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)} required disabled={submitting} />
                <section>
                    <label  > Gender</label>
                    <select

                        value={gender}
                        id="gender"
                        onChange={(e) => setGender(e.target.value)} disabled={submitting} required>
                        <option> Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>

                    <label>Age</label>
                    <select
                        value={age}
                        id="age"
                        onChange={(e) => setAge(e.target.value)} disabled={submitting} required>
                        <option>Age brackets</option>
                        <option value="15-21">15 to 21</option>
                        <option value="22-29">22 to 29</option>
                        <option value="30-45">30 to 45</option>
                        <option value="46">46 and above</option>
                    </select>
                </section>
                <label>Password</label>
                <input type="password" placeholder=""
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required disabled={submitting}
                />

                <label> Confirm Password</label>
                <input type="password" placeholder=""
                    id="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required disabled={submitting} />

            </div>
            <button className="submit" disabled={submitting}>{submitting ? 'Registering you...' : 'Sign Up'}</button>
            <hr />
            {message && <p className={message.startsWith('Error') ? 'text-red-500' : 'text-green-500'}>{message}</p>}
            <h4>Already have an account ? <a href="/signin">Sign In</a></h4>


        </form>
    )
} 

import React from 'react'
import './styles.css'
export default function SignUp() {
    return (
        <div className="signcontainer">
            <p className="signtext">Sign in through</p>
            <div className="buttons">
                <button>Google</button>
                
            </div>
            <p className="s-or">or</p>
            <div className="signupinfo">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" required/>  

                <label>Password</label>
                <input type="password" placeholder="" required/>  

            </div>
            <button className="continue">Continue</button>

            <hr />

            <p>Don't have an account? <a href="/signup">Sign Up</a></p>



        </div>
    )
}

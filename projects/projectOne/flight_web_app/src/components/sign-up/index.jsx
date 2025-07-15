import React from 'react'
import './styles.css'


export default function SignIn() {
    return (
        <div className="sign-in-container">
            <div className="text">Sign Up using</div>
            
                <div className="box-accountbox">
                    <button> Google</button>
                    
                </div>

                <p className="or">or</p>
                <div className="box-personalbox">

                    <label>Full Name</label>
                    <input type="text" placeholder="Enter your full name" required/>

                    <label  >Email</label>
                    <input type="email" placeholder="Enter your email" required/>

                    <label >Phone number</label>
                    <input type="number" placeholder="Input your phone number" required/>
<section><>
                    <label  > Gender</label>
                    <select required>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
</><>
                    <label  >Age</label>
                    <select required>
                        <option>15 to 21</option>
                        <option>22 to 29</option>
                        <option>30 to 45</option>
                        <option>46 and above</option>
                    </select></>
</section>
                    <label>Password</label>
                    <input type="password" placeholder="" required/>

                    <label> Confirm Password</label>
                    <input type="password" placeholder="" required/>

                </div>
                <button className="submit">Sign Up</button>
                <hr />
                <div>Already have an account ? <a href="/signin">Sign In</a></div>
            

        </div>
    )
} 
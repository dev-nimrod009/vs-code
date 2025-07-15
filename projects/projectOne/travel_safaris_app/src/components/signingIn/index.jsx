import React from 'react'
import './styles.css'
export default function SigningIn() {


        
        
       
  return (
     
        
    <div id=" signn" class="container">
      <form id="signin_form" style="display:internal" method="post;">
        <h1>Tembea Kenya Safaris</h1>
        <h2>sign in</h2>

        <p id="u_name">
          <label>enter your username</label>
          <input type="text" placeholder="input your username or email" required/>

        </p>
        <p id="u_pass">

          <label>enter your password</label>
          <input type="password" placeholder="input your password" required/>
        </p>
        <p><input type="checkbox"/>remember me</p>

        <p>
          <button type="submit" class="mam">sign in</button>
        </p>
     
    

    
 </form>
    </div>
  )
}

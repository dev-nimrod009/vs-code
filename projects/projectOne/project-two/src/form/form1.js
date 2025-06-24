import React from 'react'  
import './form1.css'

function Forms(){
function submitMe(){
alert('successfuly submitted');


}
return(
<div class="form">
<div class="fname">
<label>First Name</label>
<input type="text"></input>
</div>

<div class="lname">
<label>Last Name</label>
<input type="text"></input>
</div>

<div class="username">
<label>Username</label>
<input type="text"></input>
</div>

<div class="pn">
<div class="Age">
<label>input your age</label>
<input type="number"></input>
</div>
 
<div class="Pnumber">
<label>Phone Number</label>
<input type="number"></input>
</div>
</div>
<div class="pass">
<label>Password</label>
<input type="password"></input>
</div>

<div class="pass">
<label>Password again</label>
<input type="password"></input>
 
</div>
<button type="submit" onClick ={submitMe}>Submit</button>
</div>
)




}
export default Forms
import React, { Component } from 'react'


class ReactForm extends Component{

constructor(props){
super(props)

this.state= {
username: "",
password: '',
textbox:'',
option:''
}
}
changeName = (event) => {
this.setState({username:event.target.value})}

handlePassword= (event) =>{
this.setState({password:event.target.value})}
handleOptions = (event)=>{
this.setState({option:event.target.value})}

handleText =(event)=>{
this.setState({textbox:event.target.value})}

formChange=(event)=>{
alert(`${this.state.username} we have received your submission .Kindly proceed will the next part`)
event.preventDefault()}

render(){
return(
<form onSubmit={this.formChange}>

<div>
<label>Username</label>
<input type="text"value={this.state.username} 
onChange={this.changeName}/>
</div><br/>

<div>
<label >password</label>
<input type="password"
value={this.state.password}
onChange={this.handlePassword}/>
</div><br/>

<div>
 <label>my thinking</label>
<textarea type="text"value={this.state.textbox}
onChange={this.handleText}/>
</div><br/>

<div >
<label>Choose</label>
<select value={this.state.option}
onChange={this.handleOptions}>
<option>head</option>
<option>shoulder</option>
<option>toes</option>
<option>knees</option>
</select>
 
</div>
<br/>
<button type="submit">submit</button>
</form>
)
}
}

export default ReactForm



























































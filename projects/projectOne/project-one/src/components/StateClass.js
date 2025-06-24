import React , { Component } from 'react'


class StateClass extends Component{

constructor(props){
super(props)
this.state={message:'welcome'}
// this.changeMessage= this.changeMessage.bind(this)
}
 changeMessage=()=>{
this.setState({message:'thanks'})
}
render(){
return(
<div>
<h3>{this.state.message}</h3>
{/* <button onClick={this.changeMessage.bind(this)}>YeS</button> */}
{/* <button onClick={()=>this.changeMessage}>YeS</button> */}
<button onClick={this.changeMessage}>YeS</button>
</div>
)
}
}
 
export default StateClass;
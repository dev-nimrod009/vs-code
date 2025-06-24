import React , { Component }from'react'
import ChildComponent from './childComponent';

class ParentComponent extends Component{
constructor(props){
super(props)
this.state={
parentName:"Beth"
}
// this.greetParent = this.greetParent.bind(this)
}

greetParent=(childName)=>{
alert(`hello ${this.state.parentName} from ${childName}`)
}
render(){
return(
<div>
<ChildComponent greeter={this.greetParent}/>
</div>


)}
}
export default ParentComponent
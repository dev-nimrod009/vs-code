import React,{ Component } from 'react';


class Welcome extends Component{
render(props){
return(<h2>This is a class  {this.props.names}</h2>
)
}
}

export default Welcome;
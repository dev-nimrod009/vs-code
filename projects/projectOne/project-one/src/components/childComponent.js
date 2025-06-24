import React from 'react'

function ChildComponent(props){
return(
<div>
<button onClick={()=>props.greeter("Nimrod")}>greetparent</button>
</div>
)
}
export default ChildComponent
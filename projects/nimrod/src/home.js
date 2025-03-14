import {useState} from 'react';
import BlogList from './blogList';

const Home = () => {
const handleClick =() => {
console.log('let me talk today');


}
const [name ,setName] = useState('nimrod wanja');
const[age,setAge]=useState(45);
const pepo =() => {
setName('kinyanjui');
setAge(76);
}

const redo =(name) => {
console.log('you have shared to '+name);
}

const [shopping ,setShopping]=useState([
{name:'cooking flour', type:'unga moja', id:1},
{name:'bathing soap' ,type:'msafi', id:2},
{name:'spices', type:'royco' ,id:3}
]);
    return ( 
        <div className="home">
        <h2>{" home page"}</h2>
<p>{name} is turning {age} old</p>
        <button onClick = {handleClick}>share</button>
<button onClick={() =>redo('nimrod')}>yyes</button>
<br/>
<button onClick ={pepo}>come again</button>

<BlogList shope={shopping}/>



        </div>

     );
}
 
export default Home;
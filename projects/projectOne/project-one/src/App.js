import logo from './logo.svg';
import './App.css';
import Greet from './components/greet';
import Greetinds from './components/classComponents';
import StateeClass from './components/StateClass';
import ParentComponent from './components/parentComponent';
import ReactForm from './components/forms';

function App() {
  return (
    <div className="App">
        <ReactForm />
       {/* <Greet name="nimrod"/>
       <Greet name="kangethe"/>
       <Greetinds names="johnas"/>
        <StateeClass/>
        <ParentComponent/> */}
    </div>
  );
}

export default App;

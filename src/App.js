import {useState, useEffect} from 'react';
import { ReactDOMy } from 'react';
import './App.css';
// import NavBar from './components/navBar';
import { NavBar } from './components/navBar';
import { Filters } from './components/filters';
import { Posts } from './components/posts';

const App = () => {
  // const [val, setVal] = useState("shikha")
  // const [color, setColor] = useState("")

  return (
    <div className="App">
      <NavBar/>
      <Filters/>
      <Posts/>
    </div>
  );
  
}


export default App;

import logo from './logo.svg';
import './App.css';
import Home from './home'
import { useState } from 'react';

function App() {
  const [name, setName] = useState('Seema')
  const [dataArr, setDataArr] = useState([])
  const callEvent = (arr, obj) =>{
    // alert(obj.Designation)
    console.log("arrarr", arr, obj)
    setDataArr(arr)
  }
  return (
    <div className="App">
        Hello
      <Home data={name} event={callEvent}/>
      {
       dataArr || dataArr.length > 0 || dataArr != undefined || dataArr != 'undefined' ? 
        dataArr.map((item, index)=>{
          return(
            <div>{item}</div>
          )
        }) : ''
      }
    </div>
  );
}

export default App;

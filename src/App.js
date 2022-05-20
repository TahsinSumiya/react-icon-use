
import React, { useState } from 'react';
import './App.css';
import { BiMinus,BiPlus,BiAnalyse} from "react-icons/bi";

function App() {

  const [count,setCount] = useState(()=>{
    console.log('use state')
    return 0
  })

  function decrementCount(){
    setCount(prevCount=> prevCount-1)
    // setCount(prevCount=> prevCount-1) for double increase
  }

  function incrementCount(){
    setCount(prevCount=> prevCount+1)
    
  }
  return (
  <>
 
  {/* <button onClick={ incrementCount} ><BiMinus/></button>
  <span>{count}</span>
  <button onClick={decrementCount}><BiPlus/></button> */}

 <div  className="design">
  <BiMinus onClick={ incrementCount} className="btn"/>
  <span className='spanning'>{count}</span>
  <BiPlus onClick={ incrementCount} className="btn"/>
  </div>
  </>
  );
}

export default App;

import React, {Component} from 'react';
import CC from './CC'
import './App.css'

function App(){
  return (

    <div className="App" style = {{display:'flex', flexDirection:'column', alignItems:'center', justifyContent: 'center'}}>  

    <h1 style={{marginButton: '10px'}}>Counter Program</h1>
    <br/>
    <CC/>

  </div>

  );
  
   
  
  }
export default App;
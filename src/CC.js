import React, { Component } from 'react';
import './counter.css'
class CC extends React.Component{

  constructor(){
    super();

    this.state={

      number: 0
    }
  }

  add=()=>{
    this.setState({number: this.state.number+1})
  }

  subtract=()=>{
    this.setState({number: this.state.number-1})
  }
  
  render(){
    // return <div style = {{justifyContent:'center', alignItems: 'centre', display:'flex'}}>
      
     return (<div style={{display: 'flex', justifyContetn: 'center'}}> 
     <div>
     <h1 style={{textAlign: 'center'}}>{this.state.number}</h1>
  
    <button onClick={this.add} >ADD 1</button>
    <button onClick={this.subtract}> SUBTRACT 1</button>

     </div>
      

    </div>
     );
  }
}
export default CC

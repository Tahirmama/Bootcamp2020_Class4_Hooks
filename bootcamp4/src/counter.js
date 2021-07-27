import React, {useState}from 'react'


function Counter(){
    let[count,set_count]= useState(0)
    return(
    
    <div align="center" className = "Counter">
      <br/>
        <hr/>
      <h1>  Counter value is : "{count}" </h1>
        <hr/>
        <br/>
        <br/>
        <br/>
        <button onClick = { ()=> set_count(++count) } className = "butt">Update counter</button>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

    </div>
);

}

export default Counter;
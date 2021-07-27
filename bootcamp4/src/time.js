import React , {useState}from 'react'
import './App.css';

export default function Time(){
let [is_time,set_time] = useState(true)   
    return(
    <div className={`box ${is_time ? 'day' : ''}`} align = "center">
    <br/><br/><br/>
    <h1>Here it is : {is_time ? 'Morning' : 'Night'}</h1>
<br/><br/><br/>
<button onClick={() => set_time(!is_time)} className = "butt2">
    Update Time
    </button>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
<br/>
<br/>
    </div>
    
    
        )
}
import React , {useState} from 'react';
import './App.css';
import Display from './display.js';


function App() {

let [count, set_count] = useState(0)  
let [is_time , set_time] = useState(false)
  return (

    <div className={`box ${is_time ? 'dayLight' : ''}`}>

    <h1 align="center" >There is a : {is_time? 'Morning' : 'Night'}</h1>

<Display counter = {count}/>
<br/>

<hr/>
<br/>
<br/>
<button onClick =
{()=> set_count(++count)} className = "butt1" >
    Update counter
</button>


<button onClick ={() => set_time(!is_time)} className="butt2">
Update Day
</button>
    </div>

  );
}

export default App;

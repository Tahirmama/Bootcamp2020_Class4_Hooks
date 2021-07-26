 import React from 'react'
export default function Display(props){
    return(
        <div>
           <h1 align="center">The count value is : {props.counter}</h1>
        </div>
    );
}
import React from 'react'
export const Greet =(props) => 
{
    return(
        <div>
    <h1>Hello  !.... {props.name} is {props.heroname}</h1>
    <button>Action</button>
    {props.children}
    </div>
    )
}
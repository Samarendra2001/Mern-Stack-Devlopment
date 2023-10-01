import { useState } from "react";

function Counter(){
    console.log('render Counter')
    const [number, setNumber] = useState(0);

    function handleClick(e){
        e.stopPropagation();
       
       //setNumber(number+1);//this is for single click at a time 
       setNumber(number=>number+1);//this is for multiclick at a time means if u click 10 times at a time it'll give u 10.
       //setNumber(number=>number+1);
       //setNumber(number=>number+1);
        
        console.log(number)
    }

    return(
        <>
        <h1 style={{color:'white'}}>{number}</h1>
        <button onClick={handleClick}>Add</button>
        </>
    )

}

export default Counter;
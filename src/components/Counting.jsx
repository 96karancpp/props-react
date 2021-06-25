import React,{useState} from 'react';


const Counting = () => {
    const state = useState();
    const [count,setCount] = useState(0);
    // const [useState,setState] = count;
    // console.log(state)
    const IncNum = () => {
            setCount( count + 10 );
            // console.log("I am clicked", count++)
        };
    const DecNum = () => {
       
        setCount( count - 1 );
        // console.log("I am clicked", count++)
};
    return(
        <>
            <h1>{count}</h1>
            <button onClick = {IncNum}>Increment me</button>
            <button onClick = {DecNum}>Decrement me</button>
        </>
    );
   
};
export default Counting;
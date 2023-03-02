'use client'
import React, { useState } from 'react'

export default function CounterApp() {
    const [counter,setCounter] = useState(0)
    const decrement =(kitnDecrementKrnaHa: number)=>{
     setCounter(counter-kitnDecrementKrnaHa);
    }
    const increment =(kitnIncrementKrnaHa:number)=>{
     setCounter(counter+kitnIncrementKrnaHa);
    }
    // const decrement =()=>{
    //  setCounter(counter-1);
    // }
    // const increment =()=>{
    //  setCounter(counter+1);
    // }

  return (
    <>  
    <button onClick={()=>decrement(2)}>Decrement by 2</button>
    <br/>
    {/* <button onClick={decrement}>Decrement</button> */}
    <button onClick={()=>decrement(1)}>Decrement by 1</button>
    <br/>
    {counter}
    <br/>
    {/* <button onClick={increment}>Increment</button> */}
    <button onClick={()=>increment(1)}>Increment by 1</button>
    <br/>
    <button onClick={()=>increment(2)}>Increment by 2</button>
    </>
  )
}

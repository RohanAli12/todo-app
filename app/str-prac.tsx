"use client";
import React from "react";
import { useState } from "react";

export default function StringPractise() {
  // const val = "hello";
  const [val1, setVal1] = useState("Type Here");
  const onChangeHandler1 = (e: any) => {
    console.log(e.target.value);
    setVal1(e.target.value);
  };
  const [val2, setVal2] = useState("Type Here");
  const onChangeHandler2 = (e: any) => {
    console.log(e.target.value);
    setVal2(e.target.value);
  };

  return (  
    <>
      <input type="text" value={val1} onChange={onChangeHandler1} />
      <br />
      <br />
      <input type="text" value={val2} onChange={onChangeHandler2} />
      <br />
      String Length 1: {val1.length} 
      <br/>
      String Length 2: {val2.length} 
    </>
  );
}

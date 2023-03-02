import React from "react";
import StringPractise from "./str-prac";
import CounterApp from "./counter-app";
import Todo from "./todo-app";

export default function page() {
  return (
    <>
      {/* <h2>
        Use of <i><b>useState</b></i></h2>
      <StringPractise />
      <h2>Buttons</h2>
      <CounterApp /> */}

      <h1>Todo App</h1>
      <Todo/>
    </>
  );
}

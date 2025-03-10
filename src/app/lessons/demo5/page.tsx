"use client";
import React, { useState } from "react";

/**
 * http://localhost:3000/lessons/demo5
 */

const StateTutorial = () => {
  /*
    const [counter, setCounter] = useState(0)

    const increment = () => {
        console.log(counter)
        setCounter(counter + 1)
    }

    return (
        <div>
            {counter}
            <button onClick={increment}>Increment</button>
        </div>
    )
    */

  const [inputValue, setInputValue] = useState("Peter");

  let changeValue = (event: { target: { value: any; }; }) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <input type="text" onChange={changeValue} />
      {inputValue}
    </div>
  );
};

export default StateTutorial;

"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

/**
 * http://localhost:3000/lessons/demo4
 */

function Demo4() {
  // Learn useState
  // https://www.youtube.com/watch?v=O6P86uwfdR0

  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("blue");

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
    setTheme("red");
  }

  return (
    <>
      <main>
        <div className="container mx-auto">
          <div className="bg-sky-600 my-3">
            <button onClick={decrementCount}>-</button>
            <button>{count}</button>
            <button>{theme}</button>
            <button onClick={incrementCount}>+</button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Demo4;

"use client";
import React, { useLayoutEffect, useEffect, useRef } from "react";
import axios from "axios";

/*
    https://www.youtube.com/watch?v=LlvBzyy-558
    http://localhost:3000/lessons/demo9
*/

function LayoutEffectTutorial() {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    // inputRef.current.value = "Hello"
  }, []);

  return (
    <div className="App">
      <input ref={inputRef} defaultValue="NextJS" style={{ width: 400 }} />
    </div>
  );
}

export default LayoutEffectTutorial;

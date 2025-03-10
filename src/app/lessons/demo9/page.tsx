"use client";
import React, { useLayoutEffect, useEffect, useRef } from "react";
import axios from "axios";

/*
    https://www.youtube.com/watch?v=LlvBzyy-558
    http://localhost:3000/lessons/demo9
*/

function LayoutEffectTutorial() {
  const inputRef = useRef<HTMLInputElement>(null);
  // const inputRef = useRef('');

  useLayoutEffect(() => {
    console.log(inputRef.current?.value);
  }, []);

  useEffect(() => {
    inputRef.current!.value = "Hello"
  }, []);

  return (
    <div className="App">
      <div className="pb-5">
        <input ref={inputRef} defaultValue="NextJS" style={{ width: 400, height: 100 }} />
      </div>
    </div>
  );
}

export default LayoutEffectTutorial;

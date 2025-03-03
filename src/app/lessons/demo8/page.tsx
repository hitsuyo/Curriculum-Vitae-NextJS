"use client";
import React, { useRef } from "react";
import axios from "axios";

/*
    https://www.youtube.com/watch?v=LlvBzyy-558
    http://localhost:3000/lessons/demo8
*/

function RefTutorial() {
  const inputRef = useRef(null);

  const changeName = () => {
    inputRef.current.value = "";
  };

  return (
    <div>
      <h1>NextJS</h1>
      <input type="text" placeholder="..." ref={inputRef} />
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}

export default RefTutorial;

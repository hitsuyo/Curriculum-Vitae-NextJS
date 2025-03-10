"use client";
import React, { useRef, useEffect, useState } from "react";
import axios from "axios";

/*
    https://www.youtube.com/watch?v=LlvBzyy-558
    http://localhost:3000/lessons/demo8
*/

function RefTutorial() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [name, setName] = useState('')

  inputRef.current?.focus()

  const changeName = () => {
    if (inputRef.current) {
      setName(inputRef.current.value)
    }

    /* Clear text box */
    inputRef.current!.value = "";
  };

  return (
    <div>
      <h1>NextJS</h1>
      <h5>Name: {name}</h5>
      <input type="text" placeholder="..." ref={inputRef} />
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}

export default RefTutorial;

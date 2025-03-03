"use client";
import axios from "axios";
import { useState, useCallback } from "react";
import Child from "./Child";

/*
    https://www.youtube.com/watch?v=LlvBzyy-558
    http://localhost:3000/lessons/demo13
*/

export default function CallbackTutorial() {
  const [data, setData] = useState("Learning NextJS");
  const [toggle, setToggle] = useState(false);

  const returnComment = useCallback(
    (name) => {
      return data + " " + name;
    },
    [data],
  );

  return (
    <div className="container mx-auto">
      <div className="bg-white py-5">
        <div className="App text-black">
          <Child returnComment={returnComment} />

          <button
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            {""}
            Toggle
          </button>
          {toggle && <h1> toggle</h1>}
        </div>
      </div>
    </div>
  );
}

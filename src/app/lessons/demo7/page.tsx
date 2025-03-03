"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

/*
    https://www.youtube.com/watch?v=LlvBzyy-558
    Cài thêm axios: npm add axios
    http://localhost:3000/lessons/demo6
*/

function EffectTutorial() {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3001/todos").then((response) => {
      setData(response.data[0].title);
      console.log("Logged in");
      setAuth(true);
    });
  }, []);

  return (
    <div>
      {data}
      {auth && <h5>Logged in</h5>}

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default EffectTutorial;

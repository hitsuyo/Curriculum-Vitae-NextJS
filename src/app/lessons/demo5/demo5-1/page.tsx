"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

/**
 * Demo 5-1
 * "npx json-server --watch db.json --p 3001"
 * http://localhost:3000/demo5/demo5-1
 */

const Demo5_1 = () => {
  // const [inputValue, setInputValue] = useState("Peter")
  const [outputValue, setOutputValue] = useState("Someone");

  let changeSearchValue = (event: { target: { value: string; }; }) => {
    axios
      .get("http://localhost:3001/api-users?id=" + event.target.value)
      .then((response) => {
        setOutputValue(response.data[0].name);
      })
      .catch(function (error) {
        setOutputValue("Someone ?");
      });
  };

  return (
    <div className="container mx-auto">
      <div className="bg-red-500 py-5">
        <input
          className="text-black"
          type="text"
          placeholder="Search user by ID"
          onChange={changeSearchValue}
        />
        {outputValue && <h5>{outputValue}</h5>}
      </div>
    </div>
  );
};

export default Demo5_1;

"use client";
import React, { useContext } from "react";
import { AppContext } from "./app";

function Login() {
  const { setUsername } = useContext(AppContext);

  return (
    <div>
      <input
        type="text"
        className="text-blue-900"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
    </div>
  );
}

export default Login;

"use client";
import React, { createContext, useContext } from "react";
import { AppContext } from "./page.tsx";

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

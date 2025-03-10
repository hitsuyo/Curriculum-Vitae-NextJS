"use client";
import React, { useContext } from "react";
import { AppContext } from "./app";

function Login() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('User must be used within an AppContext.Provider');
  }

  const { setUsername } = context;

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

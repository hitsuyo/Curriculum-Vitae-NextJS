"use client";
import React, { useContext } from "react";
// import { AppContext } from "./page.tsx"; // error
import { AppContext } from "./app";

function User() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('User must be used within an AppContext.Provider');
  }

  const { username, setUsername } = context;

  return (
    <div>
      <h1 className="text-red-500">User: {username}</h1>
    </div>
  );
}

export default User;
